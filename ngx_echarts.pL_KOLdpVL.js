import { e as h } from "@nf-internal/chunk-JKOY2XUY";
import * as a from "@angular/core";
import { InjectionToken as g, EventEmitter as d } from "@angular/core";
import { of as n, EMPTY as c, Subject as p, asyncScheduler as v, Observable as m } from "rxjs";
import { throttleTime as y, switchMap as f } from "rxjs/operators";
var o = class i {
    constructor(t) { this.changes = t; }
    static of(t) { return new i(t); }
    notEmpty(t) { if (this.changes[t]) {
        let e = this.changes[t].currentValue;
        if (e != null)
            return n(e);
    } return c; }
    has(t) { if (this.changes[t]) {
        let e = this.changes[t].currentValue;
        return n(e);
    } return c; }
    notFirst(t) { if (this.changes[t] && !this.changes[t].isFirstChange()) {
        let e = this.changes[t].currentValue;
        return n(e);
    } return c; }
    notFirstAndEmpty(t) { if (this.changes[t] && !this.changes[t].isFirstChange()) {
        let e = this.changes[t].currentValue;
        if (e != null)
            return n(e);
    } return c; }
}, l = new g("NGX_ECHARTS_CONFIG"), b = (() => { class i {
    constructor(e, s, r) { this.el = s, this.ngZone = r, this.autoResize = !0, this.loadingType = "default", this.chartInit = new d, this.optionsError = new d, this.chartClick = this.createLazyEvent("click"), this.chartDblClick = this.createLazyEvent("dblclick"), this.chartMouseDown = this.createLazyEvent("mousedown"), this.chartMouseMove = this.createLazyEvent("mousemove"), this.chartMouseUp = this.createLazyEvent("mouseup"), this.chartMouseOver = this.createLazyEvent("mouseover"), this.chartMouseOut = this.createLazyEvent("mouseout"), this.chartGlobalOut = this.createLazyEvent("globalout"), this.chartContextMenu = this.createLazyEvent("contextmenu"), this.chartLegendSelectChanged = this.createLazyEvent("legendselectchanged"), this.chartLegendSelected = this.createLazyEvent("legendselected"), this.chartLegendUnselected = this.createLazyEvent("legendunselected"), this.chartLegendScroll = this.createLazyEvent("legendscroll"), this.chartDataZoom = this.createLazyEvent("datazoom"), this.chartDataRangeSelected = this.createLazyEvent("datarangeselected"), this.chartTimelineChanged = this.createLazyEvent("timelinechanged"), this.chartTimelinePlayChanged = this.createLazyEvent("timelineplaychanged"), this.chartRestore = this.createLazyEvent("restore"), this.chartDataViewChanged = this.createLazyEvent("dataviewchanged"), this.chartMagicTypeChanged = this.createLazyEvent("magictypechanged"), this.chartPieSelectChanged = this.createLazyEvent("pieselectchanged"), this.chartPieSelected = this.createLazyEvent("pieselected"), this.chartPieUnselected = this.createLazyEvent("pieunselected"), this.chartMapSelectChanged = this.createLazyEvent("mapselectchanged"), this.chartMapSelected = this.createLazyEvent("mapselected"), this.chartMapUnselected = this.createLazyEvent("mapunselected"), this.chartAxisAreaSelected = this.createLazyEvent("axisareaselected"), this.chartFocusNodeAdjacency = this.createLazyEvent("focusnodeadjacency"), this.chartUnfocusNodeAdjacency = this.createLazyEvent("unfocusnodeadjacency"), this.chartBrush = this.createLazyEvent("brush"), this.chartBrushEnd = this.createLazyEvent("brushend"), this.chartBrushSelected = this.createLazyEvent("brushselected"), this.chartRendered = this.createLazyEvent("rendered"), this.chartFinished = this.createLazyEvent("finished"), this.animationFrameID = null, this.resize$ = new p, this.echarts = e.echarts; }
    ngOnChanges(e) { let s = o.of(e); s.notFirstAndEmpty("options").subscribe(r => this.onOptionsChange(r)), s.notFirstAndEmpty("merge").subscribe(r => this.setOption(r)), s.has("loading").subscribe(r => this.toggleLoading(!!r)), s.notFirst("theme").subscribe(() => this.refreshChart()); }
    ngOnInit() { if (!window.ResizeObserver)
        throw new Error("please install a polyfill for ResizeObserver"); this.resizeSub = this.resize$.pipe(y(100, v, { leading: !1, trailing: !0 })).subscribe(() => this.resize()), this.autoResize && (this.resizeOb = this.ngZone.runOutsideAngular(() => new window.ResizeObserver(() => { this.animationFrameID = window.requestAnimationFrame(() => this.resize$.next()); })), this.resizeOb.observe(this.el.nativeElement)); }
    ngOnDestroy() { window.clearTimeout(this.initChartTimer), this.resizeSub && this.resizeSub.unsubscribe(), this.animationFrameID && window.cancelAnimationFrame(this.animationFrameID), this.resizeOb && this.resizeOb.unobserve(this.el.nativeElement), this.dispose(); }
    ngAfterViewInit() { this.initChartTimer = window.setTimeout(() => this.initChart()); }
    dispose() { this.chart && (this.chart.isDisposed() || this.chart.dispose(), this.chart = null); }
    resize() { this.chart && this.chart.resize(); }
    toggleLoading(e) { this.chart && (e ? this.chart.showLoading(this.loadingType, this.loadingOpts) : this.chart.hideLoading()); }
    setOption(e, s) { if (this.chart)
        try {
            this.chart.setOption(e, s);
        }
        catch (r) {
            console.error(r), this.optionsError.emit(r);
        } }
    refreshChart() { return h(this, null, function* () { this.dispose(), yield this.initChart(); }); }
    createChart() { let e = this.el.nativeElement; if (window && window.getComputedStyle) {
        let s = window.getComputedStyle(e, null).getPropertyValue("height");
        (!s || s === "0px") && (!e.style.height || e.style.height === "0px") && (e.style.height = "400px");
    } return this.ngZone.runOutsideAngular(() => (typeof this.echarts == "function" ? this.echarts : () => Promise.resolve(this.echarts))().then(({ init: r }) => r(e, this.theme, this.initOpts))); }
    initChart() { return h(this, null, function* () { yield this.onOptionsChange(this.options), this.merge && this.chart && this.setOption(this.merge); }); }
    onOptionsChange(e) { return h(this, null, function* () { e && (this.chart ? this.setOption(this.options, !0) : (this.chart = yield this.createChart(), this.chartInit.emit(this.chart), this.setOption(this.options, !0))); }); }
    createLazyEvent(e) { return this.chartInit.pipe(f(s => new m(r => (s.on(e, u => this.ngZone.run(() => r.next(u))), () => { this.chart && (this.chart.isDisposed() || s.off(e)); })))); }
} return i.\u0275fac = function (e) { return new (e || i)(a.\u0275\u0275directiveInject(l), a.\u0275\u0275directiveInject(a.ElementRef), a.\u0275\u0275directiveInject(a.NgZone)); }, i.\u0275dir = a.\u0275\u0275defineDirective({ type: i, selectors: [["echarts"], ["", "echarts", ""]], inputs: { options: "options", theme: "theme", loading: "loading", initOpts: "initOpts", merge: "merge", autoResize: "autoResize", loadingType: "loadingType", loadingOpts: "loadingOpts" }, outputs: { chartInit: "chartInit", optionsError: "optionsError", chartClick: "chartClick", chartDblClick: "chartDblClick", chartMouseDown: "chartMouseDown", chartMouseMove: "chartMouseMove", chartMouseUp: "chartMouseUp", chartMouseOver: "chartMouseOver", chartMouseOut: "chartMouseOut", chartGlobalOut: "chartGlobalOut", chartContextMenu: "chartContextMenu", chartLegendSelectChanged: "chartLegendSelectChanged", chartLegendSelected: "chartLegendSelected", chartLegendUnselected: "chartLegendUnselected", chartLegendScroll: "chartLegendScroll", chartDataZoom: "chartDataZoom", chartDataRangeSelected: "chartDataRangeSelected", chartTimelineChanged: "chartTimelineChanged", chartTimelinePlayChanged: "chartTimelinePlayChanged", chartRestore: "chartRestore", chartDataViewChanged: "chartDataViewChanged", chartMagicTypeChanged: "chartMagicTypeChanged", chartPieSelectChanged: "chartPieSelectChanged", chartPieSelected: "chartPieSelected", chartPieUnselected: "chartPieUnselected", chartMapSelectChanged: "chartMapSelectChanged", chartMapSelected: "chartMapSelected", chartMapUnselected: "chartMapUnselected", chartAxisAreaSelected: "chartAxisAreaSelected", chartFocusNodeAdjacency: "chartFocusNodeAdjacency", chartUnfocusNodeAdjacency: "chartUnfocusNodeAdjacency", chartBrush: "chartBrush", chartBrushEnd: "chartBrushEnd", chartBrushSelected: "chartBrushSelected", chartRendered: "chartRendered", chartFinished: "chartFinished" }, exportAs: ["echarts"], standalone: !1, features: [a.\u0275\u0275NgOnChangesFeature] }), i; })(), D = (() => { class i {
    static forRoot(e) { return { ngModule: i, providers: [{ provide: l, useValue: e }] }; }
    static forChild() { return { ngModule: i }; }
} return i.\u0275fac = function (e) { return new (e || i); }, i.\u0275mod = a.\u0275\u0275defineNgModule({ type: i }), i.\u0275inj = a.\u0275\u0275defineInjector({ imports: [[]] }), i; })();
export { l as NGX_ECHARTS_CONFIG, b as NgxEchartsDirective, D as NgxEchartsModule };
