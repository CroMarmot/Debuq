import "@nf-internal/chunk-JKOY2XUY";
import "@angular/core";
import { CommonModule as f } from "@angular/common";
import "@angular/core";
import "@videogular/ngx-videogular/core";
import * as i from "@angular/core";
import * as a from "@videogular/ngx-videogular/core";
var y = (() => {
    let e = class e {
        constructor(t, n) { this.API = n, this.checkInterval = 50, this.currentPlayPos = 0, this.lastPlayPos = 0, this.subscriptions = [], this.isBuffering = !1, this.elem = t.nativeElement; }
        ngOnInit() { this.API.isPlayerReady ? this.onPlayerReady() : this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady())); }
        onPlayerReady() { this.target = this.API.getMediaById(this.vgFor), this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(t => this.onUpdateBuffer(t))); }
        onUpdateBuffer(t) { this.isBuffering = t; }
        ngOnDestroy() { this.subscriptions.forEach(t => t.unsubscribe()); }
    };
    e.\u0275fac = function (n) { return new (n || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(a.VgApiService)); }, e.\u0275cmp = i.\u0275\u0275defineComponent({ type: e, selectors: [["vg-buffering"]], hostVars: 2, hostBindings: function (n, r) { n & 2 && i.\u0275\u0275classProp("is-buffering", r.isBuffering); }, inputs: { vgFor: "vgFor" }, standalone: !1, decls: 3, vars: 0, consts: [[1, "vg-buffering"], [1, "bufferingContainer"], [1, "loadingSpinner"]], template: function (n, r) { n & 1 && (i.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1), i.\u0275\u0275element(2, "div", 2), i.\u0275\u0275elementEnd()()); }, styles: [`vg-buffering{display:none;z-index:201}vg-buffering.is-buffering{display:block}.vg-buffering{position:absolute;display:block;width:100%;height:100%}.vg-buffering .bufferingContainer{width:100%;position:absolute;cursor:pointer;top:50%;margin-top:-50px;zoom:1;filter:alpha(opacity=60);opacity:.6}.vg-buffering .loadingSpinner{background-color:#0000;border:5px solid rgba(255,255,255,1);opacity:.9;border-top:5px solid rgba(0,0,0,0);border-left:5px solid rgba(0,0,0,0);border-radius:50px;box-shadow:0 0 35px #fff;width:50px;height:50px;margin:0 auto;-moz-animation:spin .5s infinite linear;-webkit-animation:spin .5s infinite linear}.vg-buffering .loadingSpinner .stop{-webkit-animation-play-state:paused;-moz-animation-play-state:paused}
`], encapsulation: 2 });
    let o = e;
    return o;
})();
import { VgCoreModule as p } from "@videogular/ngx-videogular/core";
import * as s from "@angular/core";
var B = (() => { let e = class e {
}; e.\u0275fac = function (n) { return new (n || e); }, e.\u0275mod = s.\u0275\u0275defineNgModule({ type: e }), e.\u0275inj = s.\u0275\u0275defineInjector({ imports: [f, p] }); let o = e; return o; })();
export { y as VgBufferingComponent, B as VgBufferingModule };
