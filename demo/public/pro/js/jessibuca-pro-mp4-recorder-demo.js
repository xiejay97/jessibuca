!function (e) {
    "function" == typeof define && define.amd ? define(e) : e()
}((function () {
    "use strict";

    function e(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    function r(e, r) {
        return e(r = {exports: {}}, r.exports), r.exports
    }

    var t = e(r((function (e) {
        e.exports = function (e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }))), o = r((function (e) {
        function r(t) {
            return e.exports = r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, e.exports.__esModule = !0, e.exports.default = e.exports, r(t)
        }

        e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports
    })), n = e(o), i = r((function (e) {
        var r = o.default;
        e.exports = function (e, t) {
            if ("object" !== r(e) || null === e) return e;
            var o = e[Symbol.toPrimitive];
            if (void 0 !== o) {
                var n = o.call(e, t || "default");
                if ("object" !== r(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }));
    e(i);
    var u = r((function (e) {
        var r = o.default;
        e.exports = function (e) {
            var t = i(e, "string");
            return "symbol" === r(t) ? t : String(t)
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }));
    e(u);
    var d = e(r((function (e) {
        function r(e, r) {
            for (var t = 0; t < r.length; t++) {
                var o = r[t];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, u(o.key), o)
            }
        }

        e.exports = function (e, t, o) {
            return t && r(e.prototype, t), o && r(e, o), Object.defineProperty(e, "prototype", {writable: !1}), e
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }))), c = r((function (e) {
        e.exports = function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    })), s = e(c), a = r((function (e) {
        function r(t, o) {
            return e.exports = r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, r) {
                return e.__proto__ = r, e
            }, e.exports.__esModule = !0, e.exports.default = e.exports, r(t, o)
        }

        e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports
    }));
    e(a);
    var f = e(r((function (e) {
            e.exports = function (e, r) {
                if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(r && r.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {writable: !1}), r && a(e, r)
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        }))), p = r((function (e) {
            var r = o.default;
            e.exports = function (e, t) {
                if (t && ("object" === r(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return c(e)
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        })), l = e(p), b = r((function (e) {
            function r(t) {
                return e.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, e.exports.__esModule = !0, e.exports.default = e.exports, r(t)
            }

            e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports
        })), h = e(b), v = function () {
            function e() {
                t(this, e)
            }

            return d(e, [{
                key: "on", value: function (e, r, t) {
                    var o = this.e || (this.e = {});
                    return (o[e] || (o[e] = [])).push({fn: r, ctx: t}), this
                }
            }, {
                key: "once", value: function (e, r, t) {
                    var o = this;

                    function n() {
                        o.off(e, n);
                        for (var i = arguments.length, u = new Array(i), d = 0; d < i; d++) u[d] = arguments[d];
                        r.apply(t, u)
                    }

                    return n._ = r, this.on(e, n, t)
                }
            }, {
                key: "emit", value: function (e) {
                    for (var r = ((this.e || (this.e = {}))[e] || []).slice(), t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) o[n - 1] = arguments[n];
                    for (var i = 0; i < r.length; i += 1) r[i].fn.apply(r[i].ctx, o);
                    return this
                }
            }, {
                key: "off", value: function (e, r) {
                    var t = this.e || (this.e = {});
                    if (!e) return Object.keys(t).forEach((function (e) {
                        delete t[e]
                    })), void delete this.e;
                    var o = t[e], n = [];
                    if (o && r) for (var i = 0, u = o.length; i < u; i += 1) o[i].fn !== r && o[i].fn._ !== r && n.push(o[i]);
                    return n.length ? t[e] = n : delete t[e], this
                }
            }]), e
        }(), g = "debug", y = "warn",
        _ = {debug: !1, debugLevel: y, debugUuid: "", decoder: "jessibuca-pro-mp4-recorder-decoder.js"}, m = "init",
        k = "startRecord", x = "stopRecord", w = "videoFrame", A = "audioFrame", R = "init", M = "startRecordError",
        E = "startRecordSuccess", T = "recordEnd", N = "stopRecordError", O = "recordTimestamp", G = "load",
        W = "workerError", j = "startRecordSuccess", P = "startRecordError", S = "stopRecordError", D = "recordEnd",
        J = "recordingTimestamp";

    function F(e) {
        return null == e
    }

    function U() {
        return function (e) {
            var r = "";
            if ("object" === n(e)) try {
                r = JSON.stringify(e), r = JSON.parse(r)
            } catch (t) {
                r = e
            } else r = e;
            return r
        }(_)
    }

    function L(e) {
        return !0 !== e && "true" !== e
    }

    var B = d((function e(r) {
        t(this, e), this.log = function (e) {
            if (r._opt.debug && r._opt.debugLevel == g) {
                for (var t, o = r._opt.debugUuid ? "[".concat(r._opt.debugUuid, "]") : "", n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++) i[u - 1] = arguments[u];
                (t = console).log.apply(t, ["JbPro".concat(o, "[✅✅✅][wasmMp4Recorder][").concat(e, "]")].concat(i))
            }
        }, this.warn = function (e) {
            if (r._opt.debug && (r._opt.debugLevel == g || r._opt.debugLevel == y)) {
                for (var t, o = r._opt.debugUuid ? "[".concat(r._opt.debugUuid, "]") : "", n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++) i[u - 1] = arguments[u];
                (t = console).log.apply(t, ["JbPro".concat(o, "[❗❗❗][wasmMp4Recorder][").concat(e, "]")].concat(i))
            }
        }, this.error = function (e) {
            for (var t, o = r._opt.debugUuid ? "[".concat(r._opt.debugUuid, "]") : "", n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++) i[u - 1] = arguments[u];
            (t = console).error.apply(t, ["JbPro".concat(o, "[❌❌❌][wasmMp4Recorder][").concat(e, "]")].concat(i))
        }
    }));

    function V(e) {
        var r = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var t, o = h(e);
            if (r) {
                var n = h(this).constructor;
                t = Reflect.construct(o, arguments, n)
            } else t = o.apply(this, arguments);
            return l(this, t)
        }
    }

    var I = function (e) {
        f(o, e);
        var r = V(o);

        function o(e) {
            var n;
            t(this, o), (n = r.call(this)).mp4Recorder = e, n.TAG_NAME = "DecoderWorker";
            var i = e._opt.decoder;
            return n.decoderWorker = new Worker(i), n._initDecoderWorker(), e.debug.log(n.TAG_NAME, "init"), n
        }

        return d(o, [{
            key: "destroy", value: function () {
                this.off(), this.decoderWorker && (this.decoderWorker.terminate(), this.decoderWorker = null), this.mp4Recorder.debug.log(this.TAG_NAME, "destroy")
            }
        }, {
            key: "_initDecoderWorker", value: function () {
                var e = this, r = this.mp4Recorder.debug;
                this.decoderWorker.onerror = function (r) {
                    e.mp4Recorder.debug.error(e.TAG_NAME, "onerror:", r), e.emit(W, r)
                }, this.decoderWorker.onmessageerror = function (r) {
                    e.mp4Recorder.debug.error(e.TAG_NAME, "onmessageerror:", r)
                }, this.decoderWorker.onmessage = function (t) {
                    var o = t.data;
                    switch (o.cmd) {
                        case R:
                            r.log(e.TAG_NAME, "onmessage:", R), e.decoderWorker && e._initWorker(), e.emit(G);
                            break;
                        case M:
                            e.emit(P);
                            break;
                        case E:
                            e.emit(j);
                            break;
                        case N:
                            e.emit(S);
                            break;
                        case T:
                            e.emit(D, o.data);
                            break;
                        case O:
                            e.emit(J, o.msg)
                    }
                }
            }
        }, {
            key: "_initWorker", value: function () {
                var e = {
                    debug: this.mp4Recorder._opt.debug,
                    debugLevel: this.mp4Recorder._opt.debugLevel,
                    debugUuid: this.mp4Recorder._opt.debugUuid
                };
                this.decoderWorker.postMessage({cmd: m, opt: JSON.stringify(e)})
            }
        }, {
            key: "sendVideoFrame", value: function (e, r, t, o) {
                this.decoderWorker.postMessage({cmd: w, data: e, isIFrame: r, dts: t, pts: o}, [e.buffer])
            }
        }, {
            key: "sendAudioFrame", value: function (e, r) {
                this.decoderWorker.postMessage({cmd: A, data: e, ts: r}, [e.buffer])
            }
        }, {
            key: "startRecord", value: function (e) {
                this.decoderWorker.postMessage({cmd: k, streamInfo: e})
            }
        }, {
            key: "stopRecord", value: function () {
                this.decoderWorker.postMessage({cmd: x})
            }
        }]), o
    }(v);

    function C(e) {
        var r = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var t, o = h(e);
            if (r) {
                var n = h(this).constructor;
                t = Reflect.construct(o, arguments, n)
            } else t = o.apply(this, arguments);
            return l(this, t)
        }
    }

    var q = function (e) {
        f(o, e);
        var r = C(o);

        function o() {
            var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, o), (e = r.call(this))._opt = {}, Object.keys(n).forEach((function (e) {
                if (void 0 === n[e]) throw new Error('JbProMp4Recorder option "'.concat(e, '" can not be undefined'))
            })), e.originalOptions = n;
            var i = U(), u = Object.assign({}, i, n);
            return e._opt = u, e.isRecording = !1, e.debug = new B(s(e)), e.worker = null, e.startTimestamp = null, e.TAG_NAME = "Recorder", e.debug.log(e.TAG_NAME, "init", JSON.stringify(e._opt)), e
        }

        return d(o, [{
            key: "destroy", value: function () {
                this._reset(), this._destroyWorker()
            }
        }, {
            key: "_reset", value: function () {
                this.isRecording = !1, this.startTimestamp = null
            }
        }, {
            key: "_destroyWorker", value: function () {
                this.worker && (this.worker.destroy(), this.worker = null)
            }
        }, {
            key: "startRecord", value: function () {
                var e = this, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return new Promise((function (t, o) {
                    e.debug.log(e.TAG_NAME, "startRecord", JSON.stringify(r));
                    var n = !!r.audio, i = !!r.video;
                    if (L(i) && L(n)) return e.debug.error(e.TAG_NAME, "video and audio can not be false at the same time"), void o("video and audio can not be false at the same time");
                    if (n) {
                        if (F(r.audio.type)) return e.debug.error(e.TAG_NAME, "audio type can not be undefined"), void o("audio type can not be undefined");
                        if (F(r.audio.extraData)) return e.debug.error(e.TAG_NAME, "audio extraData can not be undefined"), void o("audio extraData can not be undefined");
                        if (F(r.audio.sampleRate)) return e.debug.error(e.TAG_NAME, "audio extraData can not be undefined"), void o("audio extraData can not be undefined");
                        if (F(r.audio.channels)) return e.debug.error(e.TAG_NAME, "audio channels can not be undefined"), void o("audio channels can not be undefined");
                        if (F(r.audio.depth)) return e.debug.error(e.TAG_NAME, "audio depth can not be undefined"), void o("audio depth can not be undefined")
                    }
                    if (i) {
                        if (F(r.video.type)) return e.debug.error(e.TAG_NAME, "video type can not be undefined"), void o("video type can not be undefined");
                        if (F(r.video.extraData)) return e.debug.error(e.TAG_NAME, "video extraData can not be undefined"), void o("video extraData can not be undefined");
                        if (F(r.video.width)) return e.debug.error(e.TAG_NAME, "video width can not be undefined"), void o("video width can not be undefined");
                        if (F(r.video.height)) return e.debug.error(e.TAG_NAME, "video height can not be undefined"), void o("video height can not be undefined")
                    }
                    e.worker ? e._startRecord(r, t, o) : (e.worker = new I(e), e.worker.once(G, (function () {
                        e._startRecord(r, t, o), e.startTimestamp = Date.now()
                    })), e.worker.once(W, (function (e) {
                        o(e)
                    })), e.worker.on(J, (function (r) {
                        e.emit(J, r)
                    })))
                }))
            }
        }, {
            key: "_startRecord", value: function () {
                var e = this, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0;
                this.worker.startRecord(r), this.worker.once(P, (function (r) {
                    e.debug.error(e.TAG_NAME, "startRecordError", r), o(r)
                })), this.worker.once(j, (function () {
                    e.isRecording = !0, e.debug.log(e.TAG_NAME, "startRecordSuccess"), t()
                }))
            }
        }, {
            key: "stopRecord", value: function () {
                var e = this;
                return new Promise((function (r, t) {
                    e.debug.log(e.TAG_NAME, "stopRecord"), L(e.isRecording) && (e._destroyWorker(), e.debug.error(e.TAG_NAME, "isRecording is false"), t("isRecording is false")), e.isRecording = !1, e.worker.stopRecord(), e.worker.once(S, (function (r) {
                        e._destroyWorker(), e.debug.error(e.TAG_NAME, "stopRecordError", r), t(r)
                    })), e.worker.once(D, (function (t) {
                        e._destroyWorker(), e.debug.log(e.TAG_NAME, "recordEnd");
                        var o = new Blob([t.buffer], {type: "video/mp4"});
                        r(o)
                    }))
                }))
            }
        }, {
            key: "sendVideoFrame", value: function (e, r, t, o) {
                if (this.isRecording && this.worker) {
                    if (Date.now() - this.startTimestamp > 6e5) return;
                    var n = t + o;
                    this.worker.sendVideoFrame(e, r, t, n)
                }
            }
        }, {
            key: "sendAudioFrame", value: function (e, r) {
                if (this.isRecording && this.worker) {
                    if (Date.now() - this.startTimestamp > 6e5) return;
                    this.worker.sendAudioFrame(e, r)
                }
            }
        }]), o
    }(v);
    window.JessibucaProMp4Recorder = q
}));
