import "@nf-internal/chunk-JKOY2XUY";
import "@angular/core";
import { CommonModule as H } from "@angular/common";
import { EventEmitter as x } from "@angular/core";
import "@angular/core";
import * as E from "@angular/core";
var h = (() => { let t = class t {
}; t.VG_ENDED = "ended", t.VG_PAUSED = "paused", t.VG_PLAYING = "playing", t.VG_LOADING = "waiting", t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = E.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let r = t; return r; })();
import * as A from "@angular/core";
var u = (() => { let t = class t {
    constructor() { this.medias = {}, this.playerReadyEvent = new x(!0), this.isPlayerReady = !1; }
    onPlayerReady(e) { this.fsAPI = e, this.isPlayerReady = !0, this.playerReadyEvent.emit(this); }
    getDefaultMedia() { for (let e in this.medias)
        if (this.medias[e])
            return this.medias[e]; }
    getMasterMedia() { let e; for (let i in this.medias)
        if (this.medias[i].vgMaster === "true" || this.medias[i].vgMaster === !0) {
            e = this.medias[i];
            break;
        } return e || this.getDefaultMedia(); }
    isMasterDefined() { let e = !1; for (let i in this.medias)
        if (this.medias[i].vgMaster === "true" || this.medias[i].vgMaster === !0) {
            e = !0;
            break;
        } return e; }
    getMediaById(e = null) { let i = this.medias[e]; return (!e || e === "*") && (i = this), i; }
    play() { for (let e in this.medias)
        this.medias[e] && this.medias[e].play(); }
    pause() { for (let e in this.medias)
        this.medias[e] && this.medias[e].pause(); }
    get duration() { return this.$$getAllProperties("duration"); }
    set currentTime(e) { this.$$setAllProperties("currentTime", e); }
    get currentTime() { return this.$$getAllProperties("currentTime"); }
    set state(e) { this.$$setAllProperties("state", e); }
    get state() { return this.$$getAllProperties("state"); }
    set volume(e) { this.$$setAllProperties("volume", e); }
    get volume() { return this.$$getAllProperties("volume"); }
    set playbackRate(e) { this.$$setAllProperties("playbackRate", e); }
    get playbackRate() { return this.$$getAllProperties("playbackRate"); }
    get canPlay() { return this.$$getAllProperties("canPlay"); }
    get canPlayThrough() { return this.$$getAllProperties("canPlayThrough"); }
    get isMetadataLoaded() { return this.$$getAllProperties("isMetadataLoaded"); }
    get isWaiting() { return this.$$getAllProperties("isWaiting"); }
    get isCompleted() { return this.$$getAllProperties("isCompleted"); }
    get isLive() { return this.$$getAllProperties("isLive"); }
    get isMaster() { return this.$$getAllProperties("isMaster"); }
    get time() { return this.$$getAllProperties("time"); }
    get buffer() { return this.$$getAllProperties("buffer"); }
    get buffered() { return this.$$getAllProperties("buffered"); }
    get subscriptions() { return this.$$getAllProperties("subscriptions"); }
    get textTracks() { return this.$$getAllProperties("textTracks"); }
    seekTime(e, i = !1) { for (let s in this.medias)
        this.medias[s] && this.$$seek(this.medias[s], e, i); }
    $$seek(e, i, s = !1) { let n, c = e.duration; s ? (this.isMasterDefined() && (c = this.getMasterMedia().duration), n = i * c / 100) : n = i, e.currentTime = n; }
    addTextTrack(e, i, s) { for (let n in this.medias)
        this.medias[n] && this.$$addTextTrack(this.medias[n], e, i, s); }
    $$addTextTrack(e, i, s, n) { e.addTextTrack(i, s, n); }
    $$getAllProperties(e) { let i = {}, s; for (let c in this.medias)
        this.medias[c] && (i[c] = this.medias[c]); switch (Object.keys(i).length) {
        case 0:
            switch (e) {
                case "state":
                    s = h.VG_PAUSED;
                    break;
                case "playbackRate":
                case "volume":
                    s = 1;
                    break;
                case "time":
                    s = { current: 0, total: 0, left: 0 };
                    break;
            }
            break;
        case 1:
            let c = Object.keys(i)[0];
            s = i[c][e];
            break;
        default:
            let w = this.getMasterMedia();
            s = i[w.id][e];
    } return s; }
    $$setAllProperties(e, i) { for (let s in this.medias)
        this.medias[s] && (this.medias[s][e] = i); }
    registerElement(e) { this.videogularElement = e; }
    registerMedia(e) { this.medias[e.id] = e; }
    unregisterMedia(e) { delete this.medias[e.id]; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = A.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let r = t; return r; })();
import "@angular/core";
import { Subject as F } from "rxjs";
import * as M from "@angular/core";
var m = (() => { let t = class t {
    constructor() { this.isHiddenSubject = new F, this.isHidden = this.isHiddenSubject.asObservable(); }
    state(e) { this.isHiddenSubject.next(e); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = M.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let r = t; return r; })();
import { EventEmitter as $ } from "@angular/core";
import "@angular/core";
import * as C from "@angular/core";
var d = (() => { let t = class t {
    static getZIndex() { let e = 1, i, s = document.getElementsByTagName("*"); for (let n = 0, c = s.length; n < c; n++)
        i = parseInt(window.getComputedStyle(s[n])["z-index"], 10), i > e && (e = i + 1); return e; }
    static isMobileDevice() { return typeof window.orientation < "u" || navigator.userAgent.indexOf("IEMobile") !== -1; }
    static isiOSDevice() { return (navigator.userAgent.match(/ip(hone|ad|od)/i) || t.isIpadOS()) && !navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i); }
    static isIpadOS() { return navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform); }
    static isCordova() { return document.URL.indexOf("http://") === -1 && document.URL.indexOf("https://") === -1; }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = C.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let r = t; return r; })();
import { fromEvent as V } from "rxjs";
import * as k from "@angular/core";
var p = (() => { let t = class t {
    constructor() { this.nativeFullscreen = !0, this.isFullscreen = !1, this.onChangeFullscreen = new $; }
    init(e, i) { this.videogularElement = e, this.medias = i; let s = { w3: { enabled: "fullscreenEnabled", element: "fullscreenElement", request: "requestFullscreen", exit: "exitFullscreen", onchange: "fullscreenchange", onerror: "fullscreenerror" }, newWebkit: { enabled: "webkitFullscreenEnabled", element: "webkitFullscreenElement", request: "webkitRequestFullscreen", exit: "webkitExitFullscreen", onchange: "webkitfullscreenchange", onerror: "webkitfullscreenerror" }, oldWebkit: { enabled: "webkitIsFullScreen", element: "webkitCurrentFullScreenElement", request: "webkitRequestFullScreen", exit: "webkitCancelFullScreen", onchange: "webkitfullscreenchange", onerror: "webkitfullscreenerror" }, moz: { enabled: "mozFullScreen", element: "mozFullScreenElement", request: "mozRequestFullScreen", exit: "mozCancelFullScreen", onchange: "mozfullscreenchange", onerror: "mozfullscreenerror" }, ios: { enabled: "webkitFullscreenEnabled", element: "webkitFullscreenElement", request: "webkitEnterFullscreen", exit: "webkitExitFullscreen", onchange: "webkitendfullscreen", onerror: "webkitfullscreenerror" }, ms: { enabled: "msFullscreenEnabled", element: "msFullscreenElement", request: "msRequestFullscreen", exit: "msExitFullscreen", onchange: "MSFullscreenChange", onerror: "MSFullscreenError" } }; for (let c in s)
        if (s[c].enabled in document) {
            this.polyfill = s[c];
            break;
        } if (d.isiOSDevice() && (this.polyfill = s.ios), this.isAvailable = this.polyfill != null, this.polyfill == null)
        return; let n; switch (this.polyfill.onchange) {
        case "mozfullscreenchange":
            n = document;
            break;
        case "webkitendfullscreen":
            n = this.medias.toArray()[0].elem;
            break;
        default: n = e;
    } this.fsChangeSubscription = V(n, this.polyfill.onchange).subscribe(() => { this.onFullscreenChange(); }); }
    onFullscreenChange() { this.isFullscreen = !!document[this.polyfill.element], this.onChangeFullscreen.emit(this.isFullscreen); }
    toggleFullscreen(e = null) { this.isFullscreen ? this.exit() : this.request(e); }
    request(e) { e || (e = this.videogularElement), this.isFullscreen = !0, this.onChangeFullscreen.emit(!0), this.isAvailable && this.nativeFullscreen && (d.isMobileDevice() ? ((!this.polyfill.enabled && e === this.videogularElement || d.isiOSDevice()) && (e = this.medias.toArray()[0].elem), this.enterElementInFullScreen(e)) : this.enterElementInFullScreen(this.videogularElement)); }
    enterElementInFullScreen(e) { e[this.polyfill.request](); }
    exit() { this.isFullscreen = !1, this.onChangeFullscreen.emit(!1), this.isAvailable && this.nativeFullscreen && document[this.polyfill.exit](); }
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = k.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let r = t; return r; })();
import "@angular/core";
import * as S from "@angular/core";
var a = (() => { let t = class t {
}; t.VG_ABORT = "abort", t.VG_CAN_PLAY = "canplay", t.VG_CAN_PLAY_THROUGH = "canplaythrough", t.VG_DURATION_CHANGE = "durationchange", t.VG_EMPTIED = "emptied", t.VG_ENCRYPTED = "encrypted", t.VG_ENDED = "ended", t.VG_ERROR = "error", t.VG_LOADED_DATA = "loadeddata", t.VG_LOADED_METADATA = "loadedmetadata", t.VG_LOAD_START = "loadstart", t.VG_PAUSE = "pause", t.VG_PLAY = "play", t.VG_PLAYING = "playing", t.VG_PROGRESS = "progress", t.VG_RATE_CHANGE = "ratechange", t.VG_SEEK = "seek", t.VG_SEEKED = "seeked", t.VG_SEEKING = "seeking", t.VG_STALLED = "stalled", t.VG_SUSPEND = "suspend", t.VG_TIME_UPDATE = "timeupdate", t.VG_VOLUME_CHANGE = "volumechange", t.VG_WAITING = "waiting", t.VG_LOAD = "load", t.VG_ENTER = "enter", t.VG_EXIT = "exit", t.VG_START_ADS = "startads", t.VG_END_ADS = "endads", t.\u0275fac = function (i) { return new (i || t); }, t.\u0275prov = S.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); let r = t; return r; })();
import { EventEmitter as g } from "@angular/core";
import { fromEvent as v } from "rxjs";
import * as b from "@angular/core";
var ge = (() => { let t = class t {
    constructor(e) { this.ref = e, this.onEnterCuePoint = new g, this.onUpdateCuePoint = new g, this.onExitCuePoint = new g, this.onCompleteCuePoint = new g, this.subscriptions = [], this.cuesSubscriptions = [], this.totalCues = 0; }
    ngOnInit() { this.onLoad$ = v(this.ref.nativeElement, a.VG_LOAD), this.subscriptions.push(this.onLoad$.subscribe(this.onLoad.bind(this))); }
    onLoad(e) { let i = e.target.track.cues; this.ref.nativeElement.cues = i, this.updateCuePoints(i); }
    updateCuePoints(e) { this.cuesSubscriptions.forEach(i => i.unsubscribe()); for (let i = 0, s = e.length; i < s; i++)
        this.onEnter$ = v(e[i], a.VG_ENTER), this.cuesSubscriptions.push(this.onEnter$.subscribe(this.onEnter.bind(this))), this.onExit$ = v(e[i], a.VG_EXIT), this.cuesSubscriptions.push(this.onExit$.subscribe(this.onExit.bind(this))); }
    onEnter(e) { this.onEnterCuePoint.emit(e.target); }
    onExit(e) { this.onExitCuePoint.emit(e.target); }
    ngDoCheck() { this.ref.nativeElement.track && this.ref.nativeElement.track.cues && this.totalCues !== this.ref.nativeElement.track.cues.length && (this.totalCues = this.ref.nativeElement.track.cues.length, this.ref.nativeElement.cues = this.ref.nativeElement.track.cues, this.updateCuePoints(this.ref.nativeElement.track.cues)); }
    ngOnDestroy() { this.subscriptions.forEach(e => e.unsubscribe()); }
}; t.\u0275fac = function (i) { return new (i || t)(b.\u0275\u0275directiveInject(b.ElementRef)); }, t.\u0275dir = b.\u0275\u0275defineDirective({ type: t, selectors: [["", "vgCuePoints", ""]], outputs: { onEnterCuePoint: "onEnterCuePoint", onUpdateCuePoint: "onUpdateCuePoint", onExitCuePoint: "onExitCuePoint", onCompleteCuePoint: "onCompleteCuePoint" }, standalone: !1 }); let r = t; return r; })();
import "@angular/core";
import { Observable as N, Subject as _, fromEvent as o, timer as T, combineLatest as U } from "rxjs";
import { map as j } from "rxjs/operators";
import * as f from "@angular/core";
var G = (() => { let t = class t {
    constructor(e, i) { this.api = e, this.ref = i, this.state = h.VG_PAUSED, this.time = { current: 0, total: 0, left: 0 }, this.buffer = { end: 0 }, this.canPlay = !1, this.canPlayThrough = !1, this.isMetadataLoaded = !1, this.isWaiting = !1, this.isCompleted = !1, this.isLive = !1, this.isBufferDetected = !1, this.checkInterval = 200, this.currentPlayPos = 0, this.lastPlayPos = 0, this.playAtferSync = !1, this.bufferDetected = new _; }
    ngOnInit() { this.vgMedia.nodeName ? this.elem = this.vgMedia : this.elem = this.vgMedia.elem, this.api.registerMedia(this), this.subscriptions = { abort: o(this.elem, a.VG_ABORT), canPlay: o(this.elem, a.VG_CAN_PLAY), canPlayThrough: o(this.elem, a.VG_CAN_PLAY_THROUGH), durationChange: o(this.elem, a.VG_DURATION_CHANGE), emptied: o(this.elem, a.VG_EMPTIED), encrypted: o(this.elem, a.VG_ENCRYPTED), ended: o(this.elem, a.VG_ENDED), error: o(this.elem, a.VG_ERROR), loadedData: o(this.elem, a.VG_LOADED_DATA), loadedMetadata: o(this.elem, a.VG_LOADED_METADATA), loadStart: o(this.elem, a.VG_LOAD_START), pause: o(this.elem, a.VG_PAUSE), play: o(this.elem, a.VG_PLAY), playing: o(this.elem, a.VG_PLAYING), progress: o(this.elem, a.VG_PROGRESS), rateChange: o(this.elem, a.VG_RATE_CHANGE), seeked: o(this.elem, a.VG_SEEKED), seeking: o(this.elem, a.VG_SEEKING), stalled: o(this.elem, a.VG_STALLED), suspend: o(this.elem, a.VG_SUSPEND), timeUpdate: o(this.elem, a.VG_TIME_UPDATE), volumeChange: o(this.elem, a.VG_VOLUME_CHANGE), waiting: o(this.elem, a.VG_WAITING), startAds: o(window, a.VG_START_ADS), endAds: o(window, a.VG_END_ADS), mutation: new N(e => { let i = new MutationObserver(s => { e.next(s); }); return i.observe(this.elem, { childList: !0, attributes: !0 }), () => { i.disconnect(); }; }), bufferDetected: this.bufferDetected }, this.mutationObs = this.subscriptions.mutation.subscribe(this.onMutation.bind(this)), this.canPlayObs = this.subscriptions.canPlay.subscribe(this.onCanPlay.bind(this)), this.canPlayThroughObs = this.subscriptions.canPlayThrough.subscribe(this.onCanPlayThrough.bind(this)), this.loadedMetadataObs = this.subscriptions.loadedMetadata.subscribe(this.onLoadMetadata.bind(this)), this.waitingObs = this.subscriptions.waiting.subscribe(this.onWait.bind(this)), this.progressObs = this.subscriptions.progress.subscribe(this.onProgress.bind(this)), this.endedObs = this.subscriptions.ended.subscribe(this.onComplete.bind(this)), this.playingObs = this.subscriptions.playing.subscribe(this.onStartPlaying.bind(this)), this.playObs = this.subscriptions.play.subscribe(this.onPlay.bind(this)), this.pauseObs = this.subscriptions.pause.subscribe(this.onPause.bind(this)), this.timeUpdateObs = this.subscriptions.timeUpdate.subscribe(this.onTimeUpdate.bind(this)), this.volumeChangeObs = this.subscriptions.volumeChange.subscribe(this.onVolumeChange.bind(this)), this.errorObs = this.subscriptions.error.subscribe(this.onError.bind(this)), this.vgMaster && this.api.playerReadyEvent.subscribe(() => { this.prepareSync(); }); }
    prepareSync() { let e = []; for (let i in this.api.medias)
        this.api.medias[i] && e.push(this.api.medias[i].subscriptions.canPlay); this.canPlayAllSubscription = U(e).pipe(j((...i) => { let s = c => c?.target ? c.target.readyState === 4 : !1; i.some(s) && !this.syncSubscription && (this.startSync(), this.syncSubscription.unsubscribe()); })).subscribe(); }
    startSync() { this.syncSubscription = T(0, 1e3).subscribe(() => { for (let e in this.api.medias)
        if (this.api.medias[e] !== this) {
            let i = this.api.medias[e].currentTime - this.currentTime;
            i < -.3 || i > .3 ? (this.playAtferSync = this.state === h.VG_PLAYING, this.pause(), this.api.medias[e].pause(), this.api.medias[e].currentTime = this.currentTime) : this.playAtferSync && (this.play(), this.api.medias[e].play(), this.playAtferSync = !1);
        } }); }
    onMutation(e) { for (let i = 0, s = e.length; i < s; i++) {
        let n = e[i];
        if (n.type === "attributes" && n.attributeName === "src") {
            if (n.target.src && n.target.src.length > 0 && n.target.src.indexOf("blob:") < 0) {
                this.loadMedia();
                break;
            }
        }
        else if (n.type === "childList" && n.removedNodes.length && n.removedNodes[0].nodeName.toLowerCase() === "source") {
            this.loadMedia();
            break;
        }
    } }
    loadMedia() { this.vgMedia.pause(), this.vgMedia.currentTime = 0, this.stopBufferCheck(), this.isBufferDetected = !0, this.bufferDetected.next(this.isBufferDetected), setTimeout(() => this.vgMedia.load(), 10); }
    play() { if (!(this.playPromise || this.state !== h.VG_PAUSED && this.state !== h.VG_ENDED))
        return this.playPromise = this.vgMedia.play(), this.playPromise && this.playPromise.then && this.playPromise.catch && this.playPromise.then(() => { this.playPromise = null; }).catch(() => { this.playPromise = null; }), this.playPromise; }
    pause() { this.playPromise ? this.playPromise.then(() => { this.vgMedia.pause(); }) : this.vgMedia.pause(); }
    get id() { let e; return this.vgMedia && (e = this.vgMedia.id), e; }
    get duration() { return this.vgMedia.duration === 1 / 0 ? this.specifiedDuration : this.vgMedia.duration; }
    set currentTime(e) { this.vgMedia.currentTime = e; }
    get currentTime() { return this.vgMedia.currentTime; }
    set volume(e) { this.vgMedia.volume = e; }
    get volume() { return this.vgMedia.volume; }
    set playbackRate(e) { this.vgMedia.playbackRate = e; }
    get playbackRate() { return this.vgMedia.playbackRate; }
    get buffered() { return this.vgMedia.buffered; }
    get textTracks() { return this.vgMedia.textTracks; }
    onCanPlay(e) { this.isBufferDetected = !1, this.bufferDetected.next(this.isBufferDetected), this.canPlay = !0, this.ref.detectChanges(); }
    onCanPlayThrough(e) { this.isBufferDetected = !1, this.bufferDetected.next(this.isBufferDetected), this.canPlayThrough = !0, this.ref.detectChanges(); }
    onLoadMetadata(e) { this.isMetadataLoaded = !0, this.time = { current: 0, left: 0, total: this.duration * 1e3 }, this.state = h.VG_PAUSED; let i = Math.round(this.time.total); this.isLive = i === 1 / 0, this.ref.detectChanges(); }
    onWait(e) { this.isWaiting = !0, this.ref.detectChanges(); }
    onComplete(e) { this.isCompleted = !0, this.state = h.VG_ENDED, this.ref.detectChanges(); }
    onStartPlaying(e) { this.state = h.VG_PLAYING, this.ref.detectChanges(); }
    onPlay(e) { this.state = h.VG_PLAYING, this.vgMaster && (!this.syncSubscription || this.syncSubscription.closed) && this.startSync(), this.startBufferCheck(), this.ref.detectChanges(); }
    onPause(e) { this.state = h.VG_PAUSED, this.vgMaster && (this.playAtferSync || this.syncSubscription.unsubscribe()), this.stopBufferCheck(), this.ref.detectChanges(); }
    onTimeUpdate(e) { let i = this.buffered.length - 1; this.time = { current: this.currentTime * 1e3, total: this.time.total, left: (this.duration - this.currentTime) * 1e3 }, i >= 0 && (this.buffer = { end: this.buffered.end(i) * 1e3 }), this.ref.detectChanges(); }
    onProgress(e) { let i = this.buffered.length - 1; i >= 0 && (this.buffer = { end: this.buffered.end(i) * 1e3 }), this.ref.detectChanges(); }
    onVolumeChange(e) { this.ref.detectChanges(); }
    onError(e) { this.ref.detectChanges(); }
    bufferCheck() { let e = 1 / this.checkInterval; this.currentPlayPos = this.currentTime, !this.isBufferDetected && this.currentPlayPos < this.lastPlayPos + e && (this.isBufferDetected = !0), this.isBufferDetected && this.currentPlayPos > this.lastPlayPos + e && (this.isBufferDetected = !1), this.bufferDetected.closed || this.bufferDetected.next(this.isBufferDetected), this.lastPlayPos = this.currentPlayPos; }
    startBufferCheck() { this.checkBufferSubscription = T(0, this.checkInterval).subscribe(() => { this.bufferCheck(); }); }
    stopBufferCheck() { this.checkBufferSubscription && this.checkBufferSubscription.unsubscribe(), this.isBufferDetected = !1, this.bufferDetected.next(this.isBufferDetected); }
    seekTime(e, i = !1) { let s, n = this.duration; i ? s = e * n / 100 : s = e, this.currentTime = s; }
    addTextTrack(e, i, s, n) { let c = this.vgMedia.addTextTrack(e, i, s); return n && (c.mode = n), c; }
    ngOnDestroy() { this.vgMedia.src = "", this.mutationObs?.unsubscribe(), this.canPlayObs?.unsubscribe(), this.canPlayThroughObs?.unsubscribe(), this.loadedMetadataObs?.unsubscribe(), this.waitingObs?.unsubscribe(), this.progressObs?.unsubscribe(), this.endedObs?.unsubscribe(), this.playingObs?.unsubscribe(), this.playObs?.unsubscribe(), this.pauseObs?.unsubscribe(), this.timeUpdateObs?.unsubscribe(), this.volumeChangeObs?.unsubscribe(), this.errorObs?.unsubscribe(), this.checkBufferSubscription?.unsubscribe(), this.syncSubscription?.unsubscribe(), this.bufferDetected?.complete(), this.bufferDetected?.unsubscribe(), this.api.unregisterMedia(this); }
}; t.\u0275fac = function (i) { return new (i || t)(f.\u0275\u0275directiveInject(u), f.\u0275\u0275directiveInject(f.ChangeDetectorRef)); }, t.\u0275dir = f.\u0275\u0275defineDirective({ type: t, selectors: [["", "vgMedia", ""]], inputs: { vgMedia: "vgMedia", vgMaster: "vgMaster" }, standalone: !1 }); let r = t; return r; })();
import { EventEmitter as I } from "@angular/core";
import * as l from "@angular/core";
var B = ["*"], Ue = (() => {
    let t = class t {
        constructor(e, i, s, n) { this.api = i, this.fsAPI = s, this.controlsHidden = n, this.isFullscreen = !1, this.isNativeFullscreen = !1, this.areControlsHidden = !1, this.onPlayerReady = new I, this.onMediaReady = new I, this.subscriptions = [], this.elem = e.nativeElement, this.api.registerElement(this.elem); }
        ngAfterContentInit() { this.medias.toArray().forEach(e => { this.api.registerMedia(e); }), this.fsAPI.init(this.elem, this.medias), this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this))), this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this))), this.api.onPlayerReady(this.fsAPI), this.onPlayerReady.emit(this.api); }
        onChangeFullscreen(e) { this.fsAPI.nativeFullscreen ? this.isNativeFullscreen = e : (this.isFullscreen = e, this.zIndex = e ? d.getZIndex().toString() : "auto"); }
        onHideControls(e) { this.areControlsHidden = e; }
        ngOnDestroy() { this.subscriptions.forEach(e => e.unsubscribe()); }
    };
    t.\u0275fac = function (i) { return new (i || t)(l.\u0275\u0275directiveInject(l.ElementRef), l.\u0275\u0275directiveInject(u), l.\u0275\u0275directiveInject(p), l.\u0275\u0275directiveInject(m)); }, t.\u0275cmp = l.\u0275\u0275defineComponent({ type: t, selectors: [["vg-player"]], contentQueries: function (i, s, n) { if (i & 1 && l.\u0275\u0275contentQuery(n, G, 5), i & 2) {
            let c;
            l.\u0275\u0275queryRefresh(c = l.\u0275\u0275loadQuery()) && (s.medias = c);
        } }, hostVars: 8, hostBindings: function (i, s) { i & 2 && (l.\u0275\u0275styleProp("z-index", s.zIndex), l.\u0275\u0275classProp("fullscreen", s.isFullscreen)("native-fullscreen", s.isNativeFullscreen)("controls-hidden", s.areControlsHidden)); }, outputs: { onPlayerReady: "onPlayerReady", onMediaReady: "onMediaReady" }, standalone: !1, features: [l.\u0275\u0275ProvidersFeature([u, p, m])], ngContentSelectors: B, decls: 1, vars: 0, template: function (i, s) { i & 1 && (l.\u0275\u0275projectionDef(), l.\u0275\u0275projection(0)); }, styles: [`vg-player{font-family:videogular;position:relative;display:flex;width:100%;height:100%;overflow:hidden;background-color:#000}vg-player.fullscreen{position:fixed;left:0;top:0}vg-player.native-fullscreen.controls-hidden{cursor:none}
`], encapsulation: 2 });
    let r = t;
    return r;
})();
import * as y from "@angular/core";
var q = [u, m, p, d, a, h];
var Xe = (() => { let t = class t {
}; t.\u0275fac = function (i) { return new (i || t); }, t.\u0275mod = y.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = y.\u0275\u0275defineInjector({ providers: [...q], imports: [H] }); let r = t; return r; })();
var O = class {
    get audioTracks() { return null; }
    addTextTrack(t, P, e) { return null; }
    canPlayType(t) { return null; }
    load() { }
    msClearEffects() { }
    msGetAsCastingSource() { return null; }
    msInsertAudioEffect(t, P, e) { }
    msSetMediaProtectionManager(t) { }
    pause() { }
    play() { return null; }
    setMediaKeys(t) { return null; }
    addEventListener(t, P, e) { }
};
export { u as VgApiService, m as VgControlsHiddenService, Xe as VgCoreModule, ge as VgCuePointsDirective, a as VgEvents, p as VgFullscreenApiService, G as VgMediaDirective, O as VgMediaElement, Ue as VgPlayerComponent, h as VgStates, d as VgUtilsService };
