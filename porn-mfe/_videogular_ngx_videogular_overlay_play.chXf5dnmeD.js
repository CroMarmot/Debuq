import "@nf-internal/chunk-JKOY2XUY";
import "@angular/core";
import { CommonModule as d } from "@angular/common";
import "@angular/core";
import { VgStates as r } from "@videogular/ngx-videogular/core";
import * as e from "@angular/core";
import * as a from "@videogular/ngx-videogular/core";
var S = (() => {
    let s = class s {
        constructor(i, t, n, c) { this.API = t, this.fsAPI = n, this.controlsHidden = c, this.vgSkipIfControlsHidden = !1, this.vgSkipIfControlsHiddenDelay = .5, this.isNativeFullscreen = !1, this.areControlsHidden = !1, this.areControlsHiddenChangeTime = 0, this.subscriptions = [], this.isBuffering = !1, this.elem = i.nativeElement; }
        ngOnInit() { this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady())); }
        onPlayerReady() { this.target = this.API.getMediaById(this.vgFor), this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this))), this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this))), this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(i => this.onUpdateBuffer(i))); }
        onUpdateBuffer(i) { this.isBuffering = i; }
        onChangeFullscreen(i) { this.fsAPI.nativeFullscreen && (this.isNativeFullscreen = i); }
        onHideControls(i) { this.vgSkipIfControlsHidden && this.areControlsHidden != i && (this.areControlsHiddenChangeTime = Date.now()), this.areControlsHidden = i; }
        onClick() { if (this.vgSkipIfControlsHidden && (this.areControlsHidden || Date.now() - this.areControlsHiddenChangeTime < this.vgSkipIfControlsHiddenDelay * 1e3))
            return; switch (this.getState()) {
            case r.VG_PLAYING:
                this.target.pause();
                break;
            case r.VG_PAUSED:
            case r.VG_ENDED:
                this.target.play();
                break;
        } }
        getState() { let i = r.VG_PAUSED; if (this.target)
            if (this.target.state instanceof Array) {
                for (let t = 0, n = this.target.state.length; t < n; t++)
                    if (this.target.state[t] === r.VG_PLAYING) {
                        i = r.VG_PLAYING;
                        break;
                    }
            }
            else
                i = this.target.state; return i; }
        ngOnDestroy() { this.subscriptions.forEach(i => i.unsubscribe()); }
    };
    s.\u0275fac = function (t) { return new (t || s)(e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(a.VgApiService), e.\u0275\u0275directiveInject(a.VgFullscreenApiService), e.\u0275\u0275directiveInject(a.VgControlsHiddenService)); }, s.\u0275cmp = e.\u0275\u0275defineComponent({ type: s, selectors: [["vg-overlay-play"]], hostVars: 2, hostBindings: function (t, n) { t & 1 && e.\u0275\u0275listener("click", function () { return n.onClick(); }), t & 2 && e.\u0275\u0275classProp("is-buffering", n.isBuffering); }, inputs: { vgFor: "vgFor", vgSkipIfControlsHidden: "vgSkipIfControlsHidden", vgSkipIfControlsHiddenDelay: "vgSkipIfControlsHiddenDelay" }, standalone: !1, decls: 2, vars: 6, consts: [[1, "vg-overlay-play"], [1, "overlay-play-container"]], template: function (t, n) { t & 1 && (e.\u0275\u0275elementStart(0, "div", 0), e.\u0275\u0275element(1, "div", 1), e.\u0275\u0275elementEnd()), t & 2 && (e.\u0275\u0275classProp("native-fullscreen", n.isNativeFullscreen)("controls-hidden", n.areControlsHidden), e.\u0275\u0275advance(), e.\u0275\u0275classProp("vg-icon-play_arrow", n.getState() !== "playing")); }, styles: [`vg-overlay-play{z-index:200}vg-overlay-play.is-buffering{display:none}vg-overlay-play .vg-overlay-play{transition:all .5s;cursor:pointer;position:absolute;display:block;color:#fff;width:100%;height:100%;font-size:80px;filter:alpha(opacity=60);opacity:.6}vg-overlay-play .vg-overlay-play.native-fullscreen.controls-hidden{cursor:none}vg-overlay-play .vg-overlay-play .overlay-play-container.vg-icon-play_arrow{pointer-events:none;width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;font-size:80px}vg-overlay-play .vg-overlay-play:hover{filter:alpha(opacity=100);opacity:1}vg-overlay-play .vg-overlay-play:hover .overlay-play-container.vg-icon-play_arrow:before{transform:scale(1.2)}
`], encapsulation: 2 });
    let o = s;
    return o;
})();
import { VgCoreModule as p } from "@videogular/ngx-videogular/core";
import * as l from "@angular/core";
var F = (() => { let s = class s {
}; s.\u0275fac = function (t) { return new (t || s); }, s.\u0275mod = l.\u0275\u0275defineNgModule({ type: s }), s.\u0275inj = l.\u0275\u0275defineInjector({ imports: [d, p] }); let o = s; return o; })();
export { S as VgOverlayPlayComponent, F as VgOverlayPlayModule };
