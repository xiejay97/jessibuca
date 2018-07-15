#include "base.h"
#include "FlvDecoder.h"
extern "C"
{
	extern void init(void);
}
int main()
{
	init();
	return 0;
}
class FlvClient
{

	val *client = nullptr;
	val *netStatusLisenter = nullptr;
	val *jsThis = nullptr;
	string url;
	int status = 0;
	bool isPlaying = false;
	int audioBuffer = 12;
	MemoryStream buffer;
	bool flvMode = false;

  public:
	FlvDecoder flvDecoder;
	FlvClient()
	{
	}
	~FlvClient()
	{
		delete client;
		delete netStatusLisenter;
		delete jsThis;
	}
	void decodeAudio(clock_t timestamp, MemoryStream &ms)
	{
		if (!flvDecoder.audioDecoder)
		{
			unsigned char flag = ms[0];
			auto audioType = flag >> 4;
			int channels = (flag & 1) + 1;
			int rate = (flag >> 2) & 3;

			switch (rate)
			{
			case 1:
				rate = 11025;
				break;
			case 2:
				rate = 22050;
				break;
			case 3:
				rate = 44100;
				break;
			}
			switch (audioType)
			{
			case 10: //AAC
				jsThis->call<void>("initAudio", audioBuffer * 1024, rate, channels);
				break;
			case 11: //Speex
				jsThis->call<void>("initAudio", 50 * 320, 16000, channels);
				break;
			case 2: //MP3
				jsThis->call<void>("initAudio", audioBuffer * 576, rate, channels);
				break;
			}
		}
		if (flvDecoder.audioDecoder)
			flvDecoder.decodeAudio(timestamp, ms);
	}
	void decodeVideo(clock_t timestamp, MemoryStream &ms)
	{
		flvDecoder.decodeVideo(timestamp, ms);
	}
	void OnWsMessage(val evt)
	{
		string data = evt["data"].as<string>();
		if (flvMode)
		{
			switch (status)
			{
			case 0:
				buffer << data;
				if (buffer.length() >= 13)
				{
					status = 1;
					buffer.offset = 13;
					buffer.removeConsume();
				}
				break;
			case 1:
				buffer << data;
				while (buffer.length() > 3)
				{
					u8 type = buffer.readu8();

					unsigned int length = buffer.readUInt24B();
					if (buffer.length() < length + 4 + 7)
					{
						buffer <<= 4;
						break;
					}
					unsigned int timestamp = buffer.readUInt24B();
					u8 ext = buffer.readu8();
					buffer.readUInt24B();
					MemoryStream ms(buffer.readString(length));
					switch (type)
					{
					case 0x08:
						decodeAudio(timestamp, ms);
						break;
					case 0x09:
						decodeVideo(timestamp, ms);
						break;
					}
					length = buffer.readUInt32B();
				}
				buffer.removeConsume();
				break;
			}
		}
		else
		{
			switch (data.at(0))
			{
			case 1:
			{
				MemoryStream ms(data.substr(1));
				decodeAudio(ms.readUInt32B(), ms);
			}
			break;
			case 2:
			{
				MemoryStream ms(data.substr(1));
				decodeVideo(ms.readUInt32B(), ms);
			}
			break;
			}
		}

		//MemoryStream ms(data);
	}
	void Play(val _this, bool webgl)
	{
		if (!jsThis)
			jsThis = new val(_this);
		flvDecoder.attachCanvas(jsThis, webgl);
		isPlaying = true;
	}
#ifndef WS_PREFIX
#define WS_PREFIX ""
#endif
	val GetWebSocket(string url)
	{
		flvMode = url.find(".flv") != string::npos;
		val WebSocket = val::global("WebSocket");
		//"wss://hdl.98ff.cn/live/"
		return WebSocket.new_(WS_PREFIX + url);
	}
	void Close(bool event)
	{
		if (isPlaying)
		{
			flvDecoder.clear();
			buffer.clear();
			status = 0;
			isPlaying = false;
			if (event)
				jsThis->call<void>("reconnect");
		}
		//delete this;
	}
	int initAudio(int frameCount, int channels)
	{
		emscripten_log(0, "initAudio,frameCount:%d,channels:%d", frameCount, channels);
		return flvDecoder.initAudio(frameCount, channels);
	}
	void decodeVideoBuffer()
	{
		flvDecoder.decodeVideoBuffer();
	}
	val getBufferTime() const
	{
		return val(flvDecoder.bufferTime);
	}
	void setBufferTime(val value)
	{
		flvDecoder.bufferTime = value.as<int>();
	}
	val getAudioBuffer() const
	{
		return val(audioBuffer);
	}
	void setAudioBuffer(val value)
	{
		audioBuffer = value.as<int>();
	}
};
EMSCRIPTEN_BINDINGS(FlvClient)
{
	class_<FlvClient>("FlvClient")
		.constructor()
		.function("$onWsMessage", &FlvClient::OnWsMessage)
		.function("$close", &FlvClient::Close)
		.function("_initAudio", &FlvClient::initAudio)
		.function("decodeVideoBuffer", &FlvClient::decodeVideoBuffer)
		.property("videoBuffer", &FlvClient::getBufferTime, &FlvClient::setBufferTime)
		.property("audioBuffer", &FlvClient::getAudioBuffer, &FlvClient::setAudioBuffer)
		.function("$play", &FlvClient::Play)
		.function("$getWebSocket", &FlvClient::GetWebSocket);
}