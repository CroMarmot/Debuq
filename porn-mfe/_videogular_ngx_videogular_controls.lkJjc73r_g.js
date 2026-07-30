import "@nf-internal/chunk-JKOY2XUY";
import "@angular/core";
import { CommonModule as le } from "@angular/common";
import "@angular/core";
import { fromEvent as x } from "rxjs";
import { VgStates as K } from "@videogular/ngx-videogular/core";
import * as m from "@angular/core";
import * as S from "@videogular/ngx-videogular/core";
var U = ["*"], Pe = (() => {
    let n = class n {
        constructor(e, t, i) { this.API = e, this.hidden = i, this.isAdsPlaying = "initial", this.hideControls = !1, this.vgAutohide = !1, this.vgAutohideTime = 3, this.subscriptions = [], this.elem = t.nativeElement; }
        ngOnInit() { this.mouseMove$ = x(this.API.videogularElement, "mousemove"), this.subscriptions.push(this.mouseMove$.subscribe(this.show.bind(this))), this.touchStart$ = x(this.API.videogularElement, "touchstart"), this.subscriptions.push(this.touchStart$.subscribe(this.show.bind(this))), this.mouseClick$ = x(this.API.videogularElement, "click"), this.subscriptions.push(this.mouseClick$.subscribe(this.show.bind(this))), this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady())); }
        onPlayerReady() { this.target = this.API.getMediaById(this.vgFor), this.subscriptions.push(this.target.subscriptions.play.subscribe(this.onPlay.bind(this))), this.subscriptions.push(this.target.subscriptions.pause.subscribe(this.onPause.bind(this))), this.subscriptions.push(this.target.subscriptions.startAds.subscribe(this.onStartAds.bind(this))), this.subscriptions.push(this.target.subscriptions.endAds.subscribe(this.onEndAds.bind(this))); }
        ngAfterViewInit() { this.vgAutohide ? this.hide() : this.show(); }
        onPlay() { this.vgAutohide && this.hide(); }
        onPause() { clearTimeout(this.timer), this.hideControls = !1, this.hidden.state(!1); }
        onStartAds() { this.isAdsPlaying = "none"; }
        onEndAds() { this.isAdsPlaying = "initial"; }
        hide() { this.vgAutohide && (clearTimeout(this.timer), this.hideAsync()); }
        show() { clearTimeout(this.timer), this.hideControls = !1, this.hidden.state(!1), this.vgAutohide && this.hideAsync(); }
        hideAsync() { this.API.state === K.VG_PLAYING && (this.timer = setTimeout(() => { this.hideControls = !0, this.hidden.state(!0); }, this.vgAutohideTime * 1e3)); }
        ngOnDestroy() { this.subscriptions.forEach(e => e.unsubscribe()); }
    };
    n.\u0275fac = function (t) { return new (t || n)(m.\u0275\u0275directiveInject(S.VgApiService), m.\u0275\u0275directiveInject(m.ElementRef), m.\u0275\u0275directiveInject(S.VgControlsHiddenService)); }, n.\u0275cmp = m.\u0275\u0275defineComponent({ type: n, selectors: [["vg-controls"]], hostVars: 4, hostBindings: function (t, i) { t & 2 && (m.\u0275\u0275styleProp("pointer-events", i.isAdsPlaying), m.\u0275\u0275classProp("hide", i.hideControls)); }, inputs: { vgFor: "vgFor", vgAutohide: "vgAutohide", vgAutohideTime: "vgAutohideTime" }, standalone: !1, ngContentSelectors: U, decls: 1, vars: 0, template: function (t, i) { t & 1 && (m.\u0275\u0275projectionDef(), m.\u0275\u0275projection(0)); }, styles: [`vg-controls{position:absolute;display:flex;width:100%;height:50px;z-index:300;bottom:0;background-color:#00000080;transition:bottom 1s}vg-controls.hide{bottom:-50px}
`], encapsulation: 2 });
    let s = n;
    return s;
})();
import "@angular/core";
import "@videogular/ngx-videogular/core";
import * as o from "@angular/core";
import * as E from "@videogular/ngx-videogular/core";
import * as B from "@angular/common";
var X = ["volumeBar"], G = s => ({ dragging: s }), De = (() => {
    let n = class n {
        constructor(e, t) { this.API = t, this.subscriptions = [], this.elem = e.nativeElement, this.isDragging = !1; }
        ngOnInit() { this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady())); }
        onPlayerReady() { this.target = this.API.getMediaById(this.vgFor), this.ariaValue = this.getVolume() * 100; }
        onClick(e) { this.setVolume(this.calculateVolume(e.clientX)); }
        onMouseDown(e) { this.mouseDownPosX = e.clientX, this.isDragging = !0; }
        onDrag(e) { this.isDragging && this.setVolume(this.calculateVolume(e.clientX)); }
        onStopDrag(e) { this.isDragging && (this.isDragging = !1, this.mouseDownPosX === e.clientX && this.setVolume(this.calculateVolume(e.clientX))); }
        arrowAdjustVolume(e) { e.keyCode === 38 || e.keyCode === 39 ? (e.preventDefault(), this.setVolume(Math.max(0, Math.min(100, this.getVolume() * 100 + 10)))) : (e.keyCode === 37 || e.keyCode === 40) && (e.preventDefault(), this.setVolume(Math.max(0, Math.min(100, this.getVolume() * 100 - 10)))); }
        calculateVolume(e) { let t = this.volumeBarRef.nativeElement.getBoundingClientRect(), i = t.left, l = t.width; return (e - i) / l * 100; }
        setVolume(e) { this.target.volume = Math.max(0, Math.min(1, e / 100)), this.ariaValue = this.target.volume * 100; }
        getVolume() { return this.target ? this.target.volume : 0; }
        ngOnDestroy() { this.subscriptions.forEach(e => e.unsubscribe()); }
    };
    n.\u0275fac = function (t) { return new (t || n)(o.\u0275\u0275directiveInject(o.ElementRef), o.\u0275\u0275directiveInject(E.VgApiService)); }, n.\u0275cmp = o.\u0275\u0275defineComponent({ type: n, selectors: [["vg-volume"]], viewQuery: function (t, i) { if (t & 1 && o.\u0275\u0275viewQuery(X, 7), t & 2) {
            let l;
            o.\u0275\u0275queryRefresh(l = o.\u0275\u0275loadQuery()) && (i.volumeBarRef = l.first);
        } }, hostBindings: function (t, i) { t & 1 && o.\u0275\u0275listener("mousemove", function (r) { return i.onDrag(r); }, o.\u0275\u0275resolveDocument)("mouseup", function (r) { return i.onStopDrag(r); }, o.\u0275\u0275resolveDocument)("keydown", function (r) { return i.arrowAdjustVolume(r); }); }, inputs: { vgFor: "vgFor" }, standalone: !1, decls: 5, vars: 9, consts: [["volumeBar", ""], ["tabindex", "0", "role", "slider", "aria-label", "volume level", "aria-level", "polite", "aria-valuemin", "0", "aria-valuemax", "100", "aria-orientation", "horizontal", 1, "volumeBar", 3, "click", "mousedown"], [1, "volumeBackground", 3, "ngClass"], [1, "volumeValue"], [1, "volumeKnob"]], template: function (t, i) { if (t & 1) {
            let l = o.\u0275\u0275getCurrentView();
            o.\u0275\u0275elementStart(0, "div", 1, 0), o.\u0275\u0275listener("click", function (P) { return o.\u0275\u0275restoreView(l), o.\u0275\u0275resetView(i.onClick(P)); })("mousedown", function (P) { return o.\u0275\u0275restoreView(l), o.\u0275\u0275resetView(i.onMouseDown(P)); }), o.\u0275\u0275elementStart(2, "div", 2), o.\u0275\u0275element(3, "div", 3)(4, "div", 4), o.\u0275\u0275elementEnd()();
        } t & 2 && (o.\u0275\u0275attribute("aria-valuenow", i.ariaValue)("aria-valuetext", i.ariaValue + "%"), o.\u0275\u0275advance(2), o.\u0275\u0275property("ngClass", o.\u0275\u0275pureFunction1(7, G, i.isDragging)), o.\u0275\u0275advance(), o.\u0275\u0275styleProp("width", i.getVolume() * 85 + "%"), o.\u0275\u0275advance(), o.\u0275\u0275styleProp("left", i.getVolume() * 85 + "%")); }, dependencies: [B.NgClass], styles: [`vg-volume{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:100px;cursor:pointer;color:#fff;line-height:50px}vg-volume .volumeBar{position:relative;display:flex;flex-grow:1;align-items:center}vg-volume .volumeBackground{display:flex;flex-grow:1;height:5px;pointer-events:none;background-color:#333}vg-volume .volumeValue{display:flex;height:5px;pointer-events:none;background-color:#fff;transition:all .2s ease-out}vg-volume .volumeKnob{position:absolute;width:15px;height:15px;left:0;top:50%;transform:translateY(-50%);border-radius:15px;pointer-events:none;background-color:#fff;transition:all .2s ease-out}vg-volume .volumeBackground.dragging .volumeValue,vg-volume .volumeBackground.dragging .volumeKnob{transition:none}
`], encapsulation: 2 });
    let s = n;
    return s;
})();
import "@angular/core";
import "@videogular/ngx-videogular/core";
import * as c from "@angular/core";
import * as D from "@videogular/ngx-videogular/core";
import * as R from "@angular/common";
function Q(s, n) { if (s & 1 && (c.\u0275\u0275elementStart(0, "option", 4), c.\u0275\u0275text(1), c.\u0275\u0275elementEnd()), s & 2) {
    let v = n.$implicit;
    c.\u0275\u0275property("value", v.id)("selected", v.selected === !0), c.\u0275\u0275advance(), c.\u0275\u0275textInterpolate1(" ", v.label, " ");
} }
var Le = (() => {
    let n = class n {
        constructor(e, t) { this.API = t, this.subscriptions = [], this.elem = e.nativeElement; }
        ngOnInit() { this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady())); }
        onPlayerReady() { this.target = this.API.getMediaById(this.vgFor); let e = Array.from(this.API.getMasterMedia().elem.children).filter(i => i.tagName === "TRACK").filter(i => i.kind === "subtitles").map(i => ({ label: i.label, selected: i.default === !0, id: i.srclang })); this.tracks = [...e, { id: null, label: "Off", selected: e.every(i => i.selected === !1) }]; let t = this.tracks.filter(i => i.selected === !0)[0]; this.trackSelected = t.id, this.ariaValue = t.label; }
        selectTrack(e) { this.trackSelected = e === "null" ? null : e, this.ariaValue = "No track selected", Array.from(this.API.getMasterMedia().elem.textTracks).forEach(t => { t.language === e ? (this.ariaValue = t.label, t.mode = "showing") : t.mode = "hidden"; }); }
        ngOnDestroy() { this.subscriptions.forEach(e => e.unsubscribe()); }
    };
    n.\u0275fac = function (t) { return new (t || n)(c.\u0275\u0275directiveInject(c.ElementRef), c.\u0275\u0275directiveInject(D.VgApiService)); }, n.\u0275cmp = c.\u0275\u0275defineComponent({ type: n, selectors: [["vg-track-selector"]], inputs: { vgFor: "vgFor" }, standalone: !1, decls: 5, vars: 5, consts: [[1, "container"], [1, "track-selected"], ["tabindex", "0", "aria-label", "track selector", 1, "trackSelector", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]], template: function (t, i) { t & 1 && (c.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1), c.\u0275\u0275text(2), c.\u0275\u0275elementEnd(), c.\u0275\u0275elementStart(3, "select", 2), c.\u0275\u0275listener("change", function (r) { return i.selectTrack(r.target.value); }), c.\u0275\u0275template(4, Q, 2, 3, "option", 3), c.\u0275\u0275elementEnd()()), t & 2 && (c.\u0275\u0275advance(), c.\u0275\u0275classProp("vg-icon-closed_caption", !i.trackSelected), c.\u0275\u0275advance(), c.\u0275\u0275textInterpolate1(" ", i.trackSelected || "", " "), c.\u0275\u0275advance(), c.\u0275\u0275attribute("aria-valuetext", i.ariaValue), c.\u0275\u0275advance(), c.\u0275\u0275property("ngForOf", i.tracks)); }, dependencies: [R.NgForOf], styles: [`vg-track-selector{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;width:50px;height:50px;cursor:pointer;color:#fff;line-height:50px}vg-track-selector .container{position:relative;display:flex;flex-grow:1;align-items:center;padding:0;margin:5px}vg-track-selector select.trackSelector{width:50px;padding:5px 8px;border:none;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:transparent;font-size:16px}vg-track-selector select.trackSelector::-ms-expand{display:none}vg-track-selector select.trackSelector option{color:#000}vg-track-selector .track-selected{position:absolute;width:100%;height:50px;top:-6px;text-align:center;text-transform:uppercase;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding-top:2px;pointer-events:none}vg-track-selector .vg-icon-closed_caption:before{width:100%}
`], encapsulation: 2 });
    let s = n;
    return s;
})();
import "@angular/core";
import "@videogular/ngx-videogular/core";
import * as u from "@angular/core";
import * as M from "@videogular/ngx-videogular/core";
import * as F from "@angular/common";
var W = ["*"];
function Y(s, n) { s & 1 && (u.\u0275\u0275elementStart(0, "span"), u.\u0275\u0275text(1, "LIVE"), u.\u0275\u0275elementEnd()); }
function J(s, n) { if (s & 1 && (u.\u0275\u0275elementStart(0, "span"), u.\u0275\u0275text(1), u.\u0275\u0275pipe(2, "vgUtc"), u.\u0275\u0275elementEnd()), s & 2) {
    let v = u.\u0275\u0275nextContext();
    u.\u0275\u0275advance(), u.\u0275\u0275textInterpolate(u.\u0275\u0275pipeBind2(2, 1, v.getTime(), v.vgFormat));
} }
var Z = (() => { let n = class n {
    transform(e, t) { let i = new Date(e), l = t, r = i.getUTCSeconds(), P = i.getUTCMinutes(), C = i.getUTCHours(); return r < 10 && (r = "0" + r), P < 10 && (P = "0" + P), C < 10 && (C = "0" + C), l = l.replace(/ss/g, r), l = l.replace(/mm/g, P), l = l.replace(/hh/g, C), l; }
}; n.\u0275fac = function (t) { return new (t || n); }, n.\u0275pipe = u.\u0275\u0275definePipe({ name: "vgUtc", type: n, pure: !0, standalone: !1 }); let s = n; return s; })();
var We = (() => {
    let n = class n {
        constructor(e, t) { this.API = t, this.vgProperty = "current", this.vgFormat = "mm:ss", this.subscriptions = [], this.elem = e.nativeElement; }
        ngOnInit() { this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady())); }
        onPlayerReady() { this.target = this.API.getMediaById(this.vgFor); }
        getTime() { let e = 0; return this.target && (e = Math.round(this.target.time[this.vgProperty]), e = isNaN(e) || this.target.isLive ? 0 : e), e; }
        ngOnDestroy() { this.subscriptions.forEach(e => e.unsubscribe()); }
    };
    n.\u0275fac = function (t) { return new (t || n)(u.\u0275\u0275directiveInject(u.ElementRef), u.\u0275\u0275directiveInject(M.VgApiService)); }, n.\u0275cmp = u.\u0275\u0275defineComponent({ type: n, selectors: [["vg-time-display"]], inputs: { vgFor: "vgFor", vgProperty: "vgProperty", vgFormat: "vgFormat" }, standalone: !1, ngContentSelectors: W, decls: 3, vars: 2, consts: [[4, "ngIf"]], template: function (t, i) { t & 1 && (u.\u0275\u0275projectionDef(), u.\u0275\u0275template(0, Y, 2, 0, "span", 0)(1, J, 3, 4, "span", 0), u.\u0275\u0275projection(2)), t & 2 && (u.\u0275\u0275property("ngIf", i.target == null ? null : i.target.isLive), u.\u0275\u0275advance(), u.\u0275\u0275property("ngIf", !(i.target != null && i.target.isLive))); }, dependencies: [F.NgIf, Z], styles: [`vg-time-display{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:60px;cursor:pointer;color:#fff;line-height:50px;pointer-events:none;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}
`], encapsulation: 2 });
    let s = n;
    return s;
})();
import "@angular/core";
import { VgStates as ee } from "@videogular/ngx-videogular/core";
import * as p from "@angular/core";
import * as w from "@videogular/ngx-videogular/core";
var te = ["*"], lt = (() => {
    let n = class n {
        constructor(e, t, i) { this.API = t, this.hideScrubBar = !1, this.vgSlider = !0, this.isSeeking = !1, this.wasPlaying = !1, this.subscriptions = [], this.elem = e.nativeElement, this.subscriptions.push(i.isHidden.subscribe(l => this.onHideScrubBar(l))); }
        ngOnInit() { this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady())); }
        onPlayerReady() { this.target = this.API.getMediaById(this.vgFor); }
        seekStart() { this.target.canPlay && (this.isSeeking = !0, this.target.state === ee.VG_PLAYING && (this.wasPlaying = !0), this.target.pause()); }
        seekMove(e) { if (this.isSeeking) {
            let t = Math.max(Math.min(e * 100 / this.elem.scrollWidth, 99.9), 0);
            this.target.time.current = t * this.target.time.total / 100, this.target.seekTime(t, !0);
        } }
        seekEnd(e) { if (this.isSeeking = !1, this.target.canPlay) {
            if (e !== !1) {
                let t = Math.max(Math.min(e * 100 / this.elem.scrollWidth, 99.9), 0);
                this.target.seekTime(t, !0);
            }
            this.wasPlaying && (this.wasPlaying = !1, this.target.play());
        } }
        touchEnd() { this.isSeeking = !1, this.wasPlaying && (this.wasPlaying = !1, this.target.play()); }
        getTouchOffset(e) { let t = 0, i = e.target; for (; i;)
            t += i.offsetLeft, i = i.offsetParent; return e.touches[0].pageX - t; }
        onMouseDownScrubBar(e) { this.target && (this.target.isLive || (this.vgSlider ? this.seekStart() : this.seekEnd(e.offsetX))); }
        onMouseMoveScrubBar(e) { this.target && !this.target.isLive && this.vgSlider && this.isSeeking && this.seekMove(e.offsetX); }
        onMouseUpScrubBar(e) { this.target && !this.target.isLive && this.vgSlider && this.isSeeking && this.seekEnd(e.offsetX); }
        onTouchStartScrubBar(e) { this.target && (this.target.isLive || (this.vgSlider ? this.seekStart() : this.seekEnd(!1))); }
        onTouchMoveScrubBar(e) { this.target && !this.target.isLive && this.vgSlider && this.isSeeking && this.seekMove(this.getTouchOffset(e)); }
        onTouchCancelScrubBar(e) { this.target && !this.target.isLive && this.vgSlider && this.isSeeking && this.touchEnd(); }
        onTouchEndScrubBar(e) { this.target && !this.target.isLive && this.vgSlider && this.isSeeking && this.touchEnd(); }
        arrowAdjustVolume(e) { this.target && (e.keyCode === 38 || e.keyCode === 39 ? (e.preventDefault(), this.target.seekTime((this.target.time.current + 5e3) / 1e3, !1)) : (e.keyCode === 37 || e.keyCode === 40) && (e.preventDefault(), this.target.seekTime((this.target.time.current - 5e3) / 1e3, !1))); }
        getPercentage() { return this.target ? Math.round(this.target.time.current * 100 / this.target.time.total) + "%" : "0%"; }
        onHideScrubBar(e) { this.hideScrubBar = e; }
        ngOnDestroy() { this.subscriptions.forEach(e => e.unsubscribe()); }
    };
    n.\u0275fac = function (t) { return new (t || n)(p.\u0275\u0275directiveInject(p.ElementRef), p.\u0275\u0275directiveInject(w.VgApiService), p.\u0275\u0275directiveInject(w.VgControlsHiddenService)); }, n.\u0275cmp = p.\u0275\u0275defineComponent({ type: n, selectors: [["vg-scrub-bar"]], hostVars: 2, hostBindings: function (t, i) { t & 1 && p.\u0275\u0275listener("mousedown", function (r) { return i.onMouseDownScrubBar(r); })("mousemove", function (r) { return i.onMouseMoveScrubBar(r); }, p.\u0275\u0275resolveDocument)("mouseup", function (r) { return i.onMouseUpScrubBar(r); }, p.\u0275\u0275resolveDocument)("touchstart", function (r) { return i.onTouchStartScrubBar(r); })("touchmove", function (r) { return i.onTouchMoveScrubBar(r); }, p.\u0275\u0275resolveDocument)("touchcancel", function (r) { return i.onTouchCancelScrubBar(r); }, p.\u0275\u0275resolveDocument)("touchend", function (r) { return i.onTouchEndScrubBar(r); }, p.\u0275\u0275resolveDocument)("keydown", function (r) { return i.arrowAdjustVolume(r); }), t & 2 && p.\u0275\u0275classProp("hide", i.hideScrubBar); }, inputs: { vgFor: "vgFor", vgSlider: "vgSlider" }, standalone: !1, ngContentSelectors: te, decls: 2, vars: 2, consts: [["tabindex", "0", "role", "slider", "aria-label", "scrub bar", "aria-level", "polite", "aria-valuemin", "0", "aria-valuemax", "100", 1, "scrubBar"]], template: function (t, i) { t & 1 && (p.\u0275\u0275projectionDef(), p.\u0275\u0275elementStart(0, "div", 0), p.\u0275\u0275projection(1), p.\u0275\u0275elementEnd()), t & 2 && p.\u0275\u0275attribute("aria-valuenow", i.getPercentage())("aria-valuetext", i.getPercentage()); }, styles: [`vg-scrub-bar{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;width:100%;height:5px;bottom:50px;margin:0;cursor:pointer;align-items:center;background:rgba(0,0,0,.75);z-index:250;transition:bottom 1s,opacity .5s}vg-scrub-bar .scrubBar{position:relative;display:flex;flex-grow:1;align-items:center;height:100%}vg-controls vg-scrub-bar{position:relative;bottom:0;background:transparent;height:50px;flex-grow:1;flex-basis:0;margin:0 10px;transition:initial}vg-scrub-bar.hide{bottom:0;opacity:0}vg-controls vg-scrub-bar.hide{bottom:initial;opacity:initial}
`], encapsulation: 2 });
    let s = n;
    return s;
})();
import { EventEmitter as ie } from "@angular/core";
import "@videogular/ngx-videogular/core";
import * as a from "@angular/core";
import * as _ from "@videogular/ngx-videogular/core";
import * as T from "@angular/common";
function ne(s, n) { if (s & 1 && (a.\u0275\u0275elementStart(0, "option", 4), a.\u0275\u0275text(1), a.\u0275\u0275elementEnd()), s & 2) {
    let v = n.$implicit, e = a.\u0275\u0275nextContext();
    a.\u0275\u0275property("value", v.qualityIndex)("selected", v.qualityIndex === (e.bitrateSelected == null ? null : e.bitrateSelected.qualityIndex)), a.\u0275\u0275advance(), a.\u0275\u0275textInterpolate1(" ", v.label, " ");
} }
var yt = (() => {
    let n = class n {
        constructor(e, t) { this.API = t, this.onBitrateChange = new ie, this.subscriptions = [], this.elem = e.nativeElement; }
        ngOnInit() { }
        ngOnChanges(e) { e.bitrates.currentValue && e.bitrates.currentValue.length && this.bitrates.forEach(t => t.label = t.label || Math.round(t.bitrate / 1e3).toString()); }
        selectBitrate(e) { this.bitrateSelected = this.bitrates[e], this.onBitrateChange.emit(this.bitrates[e]); }
        ngOnDestroy() { this.subscriptions.forEach(e => e.unsubscribe()); }
    };
    n.\u0275fac = function (t) { return new (t || n)(a.\u0275\u0275directiveInject(a.ElementRef), a.\u0275\u0275directiveInject(_.VgApiService)); }, n.\u0275cmp = a.\u0275\u0275defineComponent({ type: n, selectors: [["vg-quality-selector"]], inputs: { bitrates: "bitrates" }, outputs: { onBitrateChange: "onBitrateChange" }, standalone: !1, features: [a.\u0275\u0275NgOnChangesFeature], decls: 5, vars: 5, consts: [[1, "container"], [1, "quality-selected"], ["tabindex", "0", "aria-label", "quality selector", 1, "quality-selector", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]], template: function (t, i) { t & 1 && (a.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1), a.\u0275\u0275text(2), a.\u0275\u0275elementEnd(), a.\u0275\u0275elementStart(3, "select", 2), a.\u0275\u0275listener("change", function (r) { return i.selectBitrate(r.target.value); }), a.\u0275\u0275template(4, ne, 2, 3, "option", 3), a.\u0275\u0275elementEnd()()), t & 2 && (a.\u0275\u0275advance(), a.\u0275\u0275classProp("vg-icon-hd", !i.bitrateSelected), a.\u0275\u0275advance(), a.\u0275\u0275textInterpolate1(" ", i.bitrateSelected == null ? null : i.bitrateSelected.label, " "), a.\u0275\u0275advance(), a.\u0275\u0275attribute("aria-valuetext", i.ariaValue), a.\u0275\u0275advance(), a.\u0275\u0275property("ngForOf", i.bitrates)); }, dependencies: [T.NgForOf], styles: [`vg-quality-selector{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;width:50px;height:50px;cursor:pointer;color:#fff;line-height:50px}vg-quality-selector .container{position:relative;display:flex;flex-grow:1;align-items:center;padding:0;margin:5px}vg-quality-selector select.quality-selector{width:50px;padding:5px 8px;border:none;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:transparent;font-size:16px}vg-quality-selector select.quality-selector::-ms-expand{display:none}vg-quality-selector select.quality-selector option{color:#000}vg-quality-selector .quality-selected{position:absolute;width:100%;height:50px;top:-6px;text-align:center;text-transform:uppercase;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding-top:2px;pointer-events:none}vg-quality-selector .vg-icon-closed_caption:before{width:100%}
`], encapsulation: 2 });
    let s = n;
    return s;
})();
import "@angular/core";
import { VgApiService as se } from "@videogular/ngx-videogular/core";
import * as h from "@angular/core";
import * as H from "@videogular/ngx-videogular/core";
var xt = (() => {
    let n = class n {
        constructor(e, t, i) { this.API = t, this.cdr = i, this.subscriptions = [], this.ariaValue = 1, this.elem = e.nativeElement, this.playbackValues = ["0.5", "1.0", "1.5", "2.0"], this.playbackIndex = 1; }
        ngOnInit() { this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady())); }
        onPlayerReady() { this.target = this.API.getMediaById(this.vgFor); }
        onClick() { this.updatePlaybackSpeed(); }
        onKeyDown(e) { (e.keyCode === 13 || e.keyCode === 32) && (e.preventDefault(), this.updatePlaybackSpeed()); }
        updatePlaybackSpeed() { this.playbackValues.forEach((e, t) => { e.length === 1 && (this.playbackValues[t] = e + ".0"); }), this.playbackIndex = ++this.playbackIndex % this.playbackValues.length, this.target instanceof se ? this.target.playbackRate = this.playbackValues[this.playbackIndex] : this.target.playbackRate[this.vgFor] = this.playbackValues[this.playbackIndex], this.detectChanges(); }
        getPlaybackRate() { return this.ariaValue = this.target ? this.target.playbackRate : 1, this.ariaValue; }
        detectChanges() { try {
            this.cdr.detectChanges();
        }
        catch (e) {
            console.warn(e);
        } }
        ngOnDestroy() { this.subscriptions.forEach(e => e.unsubscribe()); }
    };
    n.\u0275fac = function (t) { return new (t || n)(h.\u0275\u0275directiveInject(h.ElementRef), h.\u0275\u0275directiveInject(H.VgApiService), h.\u0275\u0275directiveInject(h.ChangeDetectorRef)); }, n.\u0275cmp = h.\u0275\u0275defineComponent({ type: n, selectors: [["vg-playback-button"]], hostBindings: function (t, i) { t & 1 && h.\u0275\u0275listener("click", function () { return i.onClick(); })("keydown", function (r) { return i.onKeyDown(r); }); }, inputs: { vgFor: "vgFor", playbackValues: "playbackValues" }, standalone: !1, decls: 2, vars: 2, consts: [["tabindex", "0", "role", "button", "aria-label", "playback speed button", 1, "button"]], template: function (t, i) { t & 1 && (h.\u0275\u0275elementStart(0, "span", 0), h.\u0275\u0275text(1), h.\u0275\u0275elementEnd()), t & 2 && (h.\u0275\u0275attribute("aria-valuetext", i.ariaValue), h.\u0275\u0275advance(), h.\u0275\u0275textInterpolate1(" ", i.getPlaybackRate(), "x ")); }, styles: [`vg-playback-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:50px;cursor:pointer;color:#fff;line-height:50px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}vg-playback-button .button{display:flex;align-items:center;justify-content:center;width:50px}
`], encapsulation: 2 });
    let s = n;
    return s;
})();
import "@angular/core";
import { VgStates as k } from "@videogular/ngx-videogular/core";
import * as y from "@angular/core";
import * as j from "@videogular/ngx-videogular/core";
var jt = (() => {
    let n = class n {
        constructor(e, t) { this.API = t, this.subscriptions = [], this.ariaValue = k.VG_PAUSED, this.elem = e.nativeElement; }
        ngOnInit() { this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady())); }
        onPlayerReady() { this.target = this.API.getMediaById(this.vgFor); }
        onClick() { this.playPause(); }
        onKeyDown(e) { (e.keyCode === 13 || e.keyCode === 32) && (e.preventDefault(), this.playPause()); }
        playPause() { switch (this.getState()) {
            case k.VG_PLAYING:
                this.target.pause();
                break;
            case k.VG_PAUSED:
            case k.VG_ENDED:
                this.target.play();
                break;
        } }
        getState() { return this.ariaValue = this.target ? this.target.state : k.VG_PAUSED, this.ariaValue; }
        ngOnDestroy() { this.subscriptions.forEach(e => e.unsubscribe()); }
    };
    n.\u0275fac = function (t) { return new (t || n)(y.\u0275\u0275directiveInject(y.ElementRef), y.\u0275\u0275directiveInject(j.VgApiService)); }, n.\u0275cmp = y.\u0275\u0275defineComponent({ type: n, selectors: [["vg-play-pause"]], hostBindings: function (t, i) { t & 1 && y.\u0275\u0275listener("click", function () { return i.onClick(); })("keydown", function (r) { return i.onKeyDown(r); }); }, inputs: { vgFor: "vgFor" }, standalone: !1, decls: 1, vars: 6, consts: [["tabindex", "0", "role", "button", 1, "icon"]], template: function (t, i) { t & 1 && y.\u0275\u0275element(0, "div", 0), t & 2 && (y.\u0275\u0275classProp("vg-icon-pause", i.getState() === "playing")("vg-icon-play_arrow", i.getState() === "paused" || i.getState() === "ended"), y.\u0275\u0275attribute("aria-label", i.getState() === "paused" ? "play" : "pause")("aria-valuetext", i.ariaValue)); }, styles: [`vg-play-pause{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:50px;cursor:pointer;color:#fff;line-height:50px}vg-play-pause .icon{pointer-events:none}
`], encapsulation: 2 });
    let s = n;
    return s;
})();
import "@angular/core";
import "@videogular/ngx-videogular/core";
import * as b from "@angular/core";
import * as O from "@videogular/ngx-videogular/core";
var Gt = (() => {
    let n = class n {
        constructor(e, t) { this.API = t, this.subscriptions = [], this.ariaValue = "unmuted", this.elem = e.nativeElement; }
        ngOnInit() { this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady())); }
        onPlayerReady() { this.target = this.API.getMediaById(this.vgFor), this.currentVolume = this.target.volume; }
        onClick() { this.changeMuteState(); }
        onKeyDown(e) { (e.keyCode === 13 || e.keyCode === 32) && (e.preventDefault(), this.changeMuteState()); }
        changeMuteState() { let e = this.getVolume(); e === 0 ? (this.target.volume === 0 && this.currentVolume === 0 && (this.currentVolume = 1), this.target.volume = this.currentVolume) : (this.currentVolume = e, this.target.volume = 0); }
        getVolume() { let e = this.target ? this.target.volume : 0; return this.ariaValue = e ? "unmuted" : "muted", e; }
        ngOnDestroy() { this.subscriptions.forEach(e => e.unsubscribe()); }
    };
    n.\u0275fac = function (t) { return new (t || n)(b.\u0275\u0275directiveInject(b.ElementRef), b.\u0275\u0275directiveInject(O.VgApiService)); }, n.\u0275cmp = b.\u0275\u0275defineComponent({ type: n, selectors: [["vg-mute"]], hostBindings: function (t, i) { t & 1 && b.\u0275\u0275listener("click", function () { return i.onClick(); })("keydown", function (r) { return i.onKeyDown(r); }); }, inputs: { vgFor: "vgFor" }, standalone: !1, decls: 1, vars: 9, consts: [["tabindex", "0", "role", "button", "aria-label", "mute button", 1, "icon"]], template: function (t, i) { t & 1 && b.\u0275\u0275element(0, "div", 0), t & 2 && (b.\u0275\u0275classProp("vg-icon-volume_up", i.getVolume() >= .75)("vg-icon-volume_down", i.getVolume() >= .25 && i.getVolume() < .75)("vg-icon-volume_mute", i.getVolume() > 0 && i.getVolume() < .25)("vg-icon-volume_off", i.getVolume() === 0), b.\u0275\u0275attribute("aria-valuetext", i.ariaValue)); }, styles: [`vg-mute{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:50px;cursor:pointer;color:#fff;line-height:50px}vg-mute .icon{pointer-events:none}
`], encapsulation: 2 });
    let s = n;
    return s;
})();
import "@angular/core";
import { VgApiService as oe } from "@videogular/ngx-videogular/core";
import * as f from "@angular/core";
import * as I from "@videogular/ngx-videogular/core";
var ni = (() => {
    let n = class n {
        constructor(e, t, i) { this.API = t, this.fsAPI = i, this.isFullscreen = !1, this.subscriptions = [], this.ariaValue = "normal mode", this.elem = e.nativeElement, this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this))); }
        ngOnInit() { this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady())); }
        onPlayerReady() { this.target = this.API.getMediaById(this.vgFor); }
        onChangeFullscreen(e) { this.ariaValue = e ? "fullscreen mode" : "normal mode", this.isFullscreen = e; }
        onClick() { this.changeFullscreenState(); }
        onKeyDown(e) { (e.keyCode === 13 || e.keyCode === 32) && (e.preventDefault(), this.changeFullscreenState()); }
        changeFullscreenState() { let e = this.target; this.target instanceof oe && (e = null), this.fsAPI.toggleFullscreen(e); }
        ngOnDestroy() { this.subscriptions.forEach(e => e.unsubscribe()); }
    };
    n.\u0275fac = function (t) { return new (t || n)(f.\u0275\u0275directiveInject(f.ElementRef), f.\u0275\u0275directiveInject(I.VgApiService), f.\u0275\u0275directiveInject(I.VgFullscreenApiService)); }, n.\u0275cmp = f.\u0275\u0275defineComponent({ type: n, selectors: [["vg-fullscreen"]], hostBindings: function (t, i) { t & 1 && f.\u0275\u0275listener("click", function () { return i.onClick(); })("keydown", function (r) { return i.onKeyDown(r); }); }, standalone: !1, decls: 1, vars: 5, consts: [["tabindex", "0", "role", "button", "aria-label", "fullscreen button", 1, "icon"]], template: function (t, i) { t & 1 && f.\u0275\u0275element(0, "div", 0), t & 2 && (f.\u0275\u0275classProp("vg-icon-fullscreen", !i.isFullscreen)("vg-icon-fullscreen_exit", i.isFullscreen), f.\u0275\u0275attribute("aria-valuetext", i.ariaValue)); }, styles: [`vg-fullscreen{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;height:50px;width:50px;cursor:pointer;color:#fff;line-height:50px}vg-fullscreen .icon{pointer-events:none}
`], encapsulation: 2 });
    let s = n;
    return s;
})();
import { VgCoreModule as ce } from "@videogular/ngx-videogular/core";
import "@angular/core";
import "@videogular/ngx-videogular/core";
import * as V from "@angular/core";
import * as L from "@videogular/ngx-videogular/core";
var hi = (() => {
    let n = class n {
        constructor(e, t) { this.API = t, this.subscriptions = [], this.elem = e.nativeElement; }
        ngOnInit() { this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady())); }
        onPlayerReady() { this.target = this.API.getMediaById(this.vgFor); }
        getBufferTime() { let e = "0%"; return this.target?.buffered?.length && (this.target.time.total === 0 ? e = "0%" : e = this.target.buffer.end / this.target.time.total * 100 + "%"), e; }
        ngOnDestroy() { this.subscriptions.forEach(e => e.unsubscribe()); }
    };
    n.\u0275fac = function (t) { return new (t || n)(V.\u0275\u0275directiveInject(V.ElementRef), V.\u0275\u0275directiveInject(L.VgApiService)); }, n.\u0275cmp = V.\u0275\u0275defineComponent({ type: n, selectors: [["vg-scrub-bar-buffering-time"]], inputs: { vgFor: "vgFor" }, standalone: !1, decls: 1, vars: 2, consts: [[1, "background"]], template: function (t, i) { t & 1 && V.\u0275\u0275element(0, "div", 0), t & 2 && V.\u0275\u0275styleProp("width", i.getBufferTime()); }, styles: [`vg-scrub-bar-buffering-time{display:flex;width:100%;height:5px;pointer-events:none;position:absolute}vg-scrub-bar-buffering-time .background{background-color:#ffffff4d}vg-controls vg-scrub-bar-buffering-time{position:absolute;top:calc(50% - 3px)}vg-controls vg-scrub-bar-buffering-time .background{border-radius:2px}
`], encapsulation: 2 });
    let s = n;
    return s;
})();
import "@angular/core";
import "@videogular/ngx-videogular/core";
import * as d from "@angular/core";
import * as N from "@videogular/ngx-videogular/core";
import * as $ from "@angular/common";
function re(s, n) { if (s & 1 && d.\u0275\u0275element(0, "span", 2), s & 2) {
    let v = n.$implicit;
    d.\u0275\u0275styleProp("width", v.$$style == null ? null : v.$$style.width)("left", v.$$style == null ? null : v.$$style.left);
} }
var Vi = (() => {
    let n = class n {
        constructor(e, t) { this.API = t, this.onLoadedMetadataCalled = !1, this.cuePoints = [], this.subscriptions = [], this.totalCues = 0, this.elem = e.nativeElement; }
        ngOnInit() { this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady())); }
        onPlayerReady() { this.target = this.API.getMediaById(this.vgFor); let e = this.target.subscriptions.loadedMetadata; this.subscriptions.push(e.subscribe(this.onLoadedMetadata.bind(this))), this.onLoadedMetadataCalled && this.onLoadedMetadata(); }
        onLoadedMetadata() { if (this.vgCuePoints) {
            this.cuePoints = [];
            for (let e = 0, t = this.vgCuePoints.length; e < t; e++) {
                let l = ((this.vgCuePoints[e].endTime >= 0 ? this.vgCuePoints[e].endTime : this.vgCuePoints[e].startTime + 1) - this.vgCuePoints[e].startTime) * 1e3, r = "0", P = "0";
                typeof l == "number" && this.target.time.total && (P = l * 100 / this.target.time.total + "%", r = this.vgCuePoints[e].startTime * 100 / Math.round(this.target.time.total / 1e3) + "%"), this.vgCuePoints[e].$$style = { width: P, left: r }, this.cuePoints.push(this.vgCuePoints[e]);
            }
        } }
        updateCuePoints() { if (!this.target) {
            this.onLoadedMetadataCalled = !0;
            return;
        } this.onLoadedMetadata(); }
        ngOnChanges(e) { e.vgCuePoints.currentValue && this.updateCuePoints(); }
        ngDoCheck() { this.vgCuePoints && this.totalCues !== this.vgCuePoints.length && (this.totalCues = this.vgCuePoints.length, this.updateCuePoints()); }
        ngOnDestroy() { this.subscriptions.forEach(e => e.unsubscribe()); }
    };
    n.\u0275fac = function (t) { return new (t || n)(d.\u0275\u0275directiveInject(d.ElementRef), d.\u0275\u0275directiveInject(N.VgApiService)); }, n.\u0275cmp = d.\u0275\u0275defineComponent({ type: n, selectors: [["vg-scrub-bar-cue-points"]], inputs: { vgCuePoints: "vgCuePoints", vgFor: "vgFor" }, standalone: !1, features: [d.\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "cue-point-container"], ["class", "cue-point", 3, "width", "left", 4, "ngFor", "ngForOf"], [1, "cue-point"]], template: function (t, i) { t & 1 && (d.\u0275\u0275elementStart(0, "div", 0), d.\u0275\u0275template(1, re, 1, 4, "span", 1), d.\u0275\u0275elementEnd()), t & 2 && (d.\u0275\u0275advance(), d.\u0275\u0275property("ngForOf", i.cuePoints)); }, dependencies: [$.NgForOf], styles: [`vg-scrub-bar-cue-points{display:flex;width:100%;height:5px;pointer-events:none;position:absolute}vg-scrub-bar-cue-points .cue-point-container .cue-point{position:absolute;height:5px;background-color:#ffcc00b3}vg-controls vg-scrub-bar-cue-points{position:absolute;top:calc(50% - 3px)}
`], encapsulation: 2 });
    let s = n;
    return s;
})();
import "@angular/core";
import "@videogular/ngx-videogular/core";
import * as g from "@angular/core";
import * as q from "@videogular/ngx-videogular/core";
import * as z from "@angular/common";
function ae(s, n) { s & 1 && g.\u0275\u0275element(0, "span", 2); }
var Bi = (() => {
    let n = class n {
        constructor(e, t) { this.API = t, this.vgSlider = !1, this.subscriptions = [], this.elem = e.nativeElement; }
        ngOnInit() { this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady())); }
        onPlayerReady() { this.target = this.API.getMediaById(this.vgFor); }
        getPercentage() { return this.target ? Math.round(this.target.time.current * 100 / this.target.time.total) + "%" : "0%"; }
        ngOnDestroy() { this.subscriptions.forEach(e => e.unsubscribe()); }
    };
    n.\u0275fac = function (t) { return new (t || n)(g.\u0275\u0275directiveInject(g.ElementRef), g.\u0275\u0275directiveInject(q.VgApiService)); }, n.\u0275cmp = g.\u0275\u0275defineComponent({ type: n, selectors: [["vg-scrub-bar-current-time"]], inputs: { vgFor: "vgFor", vgSlider: "vgSlider" }, standalone: !1, decls: 2, vars: 3, consts: [[1, "background"], ["class", "slider", 4, "ngIf"], [1, "slider"]], template: function (t, i) { t & 1 && (g.\u0275\u0275element(0, "div", 0), g.\u0275\u0275template(1, ae, 1, 0, "span", 1)), t & 2 && (g.\u0275\u0275styleProp("width", i.getPercentage()), g.\u0275\u0275advance(), g.\u0275\u0275property("ngIf", i.vgSlider)); }, dependencies: [z.NgIf], styles: [`vg-scrub-bar-current-time{display:flex;width:100%;height:5px;pointer-events:none;position:absolute}vg-scrub-bar-current-time .background{background-color:#fff}vg-controls vg-scrub-bar-current-time{position:absolute;top:calc(50% - 3px);border-radius:2px}vg-controls vg-scrub-bar-current-time .background{border:1px solid white;border-radius:2px}vg-scrub-bar-current-time .slider{background:white;height:15px;width:15px;border-radius:50%;box-shadow:0 0 10px #000;margin-top:-5px;margin-left:-10px}
`], encapsulation: 2 });
    let s = n;
    return s;
})();
import * as A from "@angular/core";
var Ti = (() => { let n = class n {
}; n.\u0275fac = function (t) { return new (t || n); }, n.\u0275mod = A.\u0275\u0275defineNgModule({ type: n }), n.\u0275inj = A.\u0275\u0275defineInjector({ imports: [le, ce] }); let s = n; return s; })();
export { Pe as VgControlsComponent, Ti as VgControlsModule, ni as VgFullscreenComponent, Gt as VgMuteComponent, jt as VgPlayPauseComponent, xt as VgPlaybackButtonComponent, yt as VgQualitySelectorComponent, hi as VgScrubBarBufferingTimeComponent, lt as VgScrubBarComponent, Vi as VgScrubBarCuePointsComponent, Bi as VgScrubBarCurrentTimeComponent, We as VgTimeDisplayComponent, Le as VgTrackSelectorComponent, Z as VgUtcPipe, De as VgVolumeComponent };
