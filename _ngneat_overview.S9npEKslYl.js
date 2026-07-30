import "@nf-internal/chunk-JKOY2XUY";
import { TemplateRef as S, inject as j, input as F } from "@angular/core";
import "@angular/core";
import { BehaviorSubject as O } from "rxjs";
import { filter as b, map as M } from "rxjs/operators";
import * as y from "@angular/core";
var u = (() => { let e = class e {
    constructor() { this.outlets = new O(""), this.ports = new Map; }
    outlet$(t) { return this.outlets.pipe(b(i => i === t), M(i => this.ports.get(i))); }
    newOutlet(t) { this.outlets.next(t); }
}; e.\u0275fac = function (i) { return new (i || e); }, e.\u0275prov = y.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }); let r = e; return r; })();
import * as l from "@angular/core";
var N = (() => { let e = class e {
    constructor() { this.teleportTo = F(), this.subscription = null, this.tpl = j(S), this.service = j(u); }
    ngOnChanges(t) { t.teleportTo && typeof this.teleportTo() == "string" && (this.dispose(), this.subscription = this.service.outlet$(this.teleportTo()).subscribe(i => { i && (this.viewRef = i.createEmbeddedView(this.tpl)); })); }
    ngOnDestroy() { this.dispose(); }
    dispose() { this.subscription?.unsubscribe(), this.subscription = null, this.viewRef?.destroy(); }
}; e.\u0275fac = function (i) { return new (i || e); }, e.\u0275dir = l.\u0275\u0275defineDirective({ type: e, selectors: [["", "teleportTo", ""]], inputs: { teleportTo: [1, "teleportTo"] }, features: [l.\u0275\u0275NgOnChangesFeature] }); let r = e; return r; })();
import { ViewContainerRef as k, effect as H, inject as R, input as L } from "@angular/core";
import * as T from "@angular/core";
var $ = (() => { let e = class e {
    constructor() { this.teleportOutlet = L(), this.vcr = R(k), this.service = R(u), H(() => { let t = this.teleportOutlet(); typeof t == "string" && (this.service.ports.set(t, this.vcr), this.service.newOutlet(t)); }); }
    ngOnDestroy() { this.service.ports.delete(this.teleportOutlet()); }
}; e.\u0275fac = function (i) { return new (i || e); }, e.\u0275dir = T.\u0275\u0275defineDirective({ type: e, selectors: [["", "teleportOutlet", ""]], inputs: { teleportOutlet: [1, "teleportOutlet"] } }); let r = e; return r; })();
import { TemplateRef as K, ViewContainerRef as Q, inject as C, input as v } from "@angular/core";
import { TemplateRef as A } from "@angular/core";
import { createComponent as z } from "@angular/core";
var c = class {
    constructor(e) { this.options = e, e.vcr ? this.ref = e.vcr.createComponent(e.component, { index: e.vcr.length, injector: e.injector || e.vcr.injector }) : (this.ref = z(e.component, { elementInjector: e.injector, environmentInjector: e.environmentInjector }), e.appRef.attachView(this.ref.hostView)); }
    setInput(e, m) { return this.ref.setInput(e, m), this; }
    setInputs(e) { return Object.keys(e).forEach(m => { this.ref.setInput(m, e[m]); }), this; }
    detectChanges() { return this.ref.hostView.detectChanges(), this; }
    updateContext(e) { return this.options.contextSignal?.set(e), this; }
    appendTo(e) { return e.appendChild(this.getElement()), this; }
    removeFrom(e) { return e.removeChild(this.getElement()), this; }
    getRawContent() { return this.getElement().outerHTML; }
    getElement() { return this.ref.location.nativeElement; }
    destroy() { this.ref.destroy(), !this.options.vcr && this.options.appRef.detachView(this.ref.hostView), this.ref = null; }
};
function g(r) { return r instanceof A; }
function p(r) { return typeof r == "function"; }
function f(r) { return typeof r == "string"; }
function B(r) { return r instanceof c ? r.ref.hostView : r.ref; }
import { ApplicationRef as P, EnvironmentInjector as W, inject as d, InjectionToken as X, Injector as V, signal as q } from "@angular/core";
var h = class {
    constructor(e) { this.args = e, this.args.vcr ? (this.ref = this.args.vcr.createEmbeddedView(this.args.tpl, this.args.context || {}, { injector: e.injector }), this.ref.detectChanges()) : (this.ref = this.args.tpl.createEmbeddedView(this.args.context || {}, e.injector), this.ref.detectChanges(), this.args.appRef.attachView(this.ref)); }
    detectChanges() { return this.ref.detectChanges(), this; }
    getElement() { let e = this.ref.rootNodes; return e.length === 1 && e[0] === Node.ELEMENT_NODE ? this.element = e[0] : (this.element = document.createElement("div"), this.element.append(...e)), this.element; }
    destroy() { this.ref.rootNodes[0] !== 1 && (this.element?.parentNode.removeChild(this.element), this.element = null), this.args.vcr || this.args.appRef.detachView(this.ref), this.ref.destroy(), this.ref = null; }
    updateContext(e) { return Object.assign(this.ref.context, e), this; }
};
var a = class {
    constructor(e) { this.value = e; }
    getElement() { return this.value; }
    detectChanges() { return this; }
    updateContext() { return this; }
    destroy() { }
};
import * as I from "@angular/core";
var D = new X("Component context"), x = (() => { let e = class e {
    constructor() { this.injector = d(V), this.appRef = d(P), this.environmentInjector = d(W); }
    createComponent(t, i = {}) { let n = i.injector ?? this.injector, o; return i.context && (o = q(i.context), n = V.create({ providers: [{ provide: D, useValue: o.asReadonly() }], parent: n })), new c({ component: t, vcr: i.vcr, injector: n, appRef: this.appRef, environmentInjector: i.environmentInjector || this.environmentInjector, contextSignal: o }); }
    createTemplate(t, i = {}) { return new h({ vcr: i.vcr, appRef: this.appRef, tpl: t, context: i.context, injector: i.injector }); }
    createView(t, i = {}) { if (g(t))
        return this.createTemplate(t, i); if (p(t))
        return this.createComponent(t, i); if (f(t))
        return new a(t); throw "Type of content is not supported"; }
}; e.\u0275fac = function (i) { return new (i || e); }, e.\u0275prov = I.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }); let r = e; return r; })();
function G() { return d(D); }
import { input as J } from "@angular/core";
import * as s from "@angular/core";
var E = (() => { let e = class e {
    constructor() { this.content = J(); }
}; e.\u0275fac = function (i) { return new (i || e); }, e.\u0275cmp = s.\u0275\u0275defineComponent({ type: e, selectors: [["dynamic-view"]], inputs: { content: [1, "content"] }, decls: 1, vars: 1, consts: [[3, "innerHTML"]], template: function (i, n) { i & 1 && s.\u0275\u0275domElement(0, "div", 0), i & 2 && s.\u0275\u0275domProperty("innerHTML", n.content(), s.\u0275\u0275sanitizeHtml); }, encapsulation: 2 }); let r = e; return r; })();
import * as w from "@angular/core";
var U = (() => { let e = class e {
    constructor() { this.view = v(void 0, { alias: "dynamicView" }), this.injector = v(void 0, { alias: "dynamicViewInjector" }), this.context = v(void 0, { alias: "dynamicViewContext" }), this.inputs = v(void 0, { alias: "dynamicViewInputs" }), this.defaultTpl = C(K), this.vcr = C(Q), this.viewService = C(x); }
    ngOnInit() { this.resolveContentType(); }
    ngOnChanges(t) { let i = t.view && !t.view.isFirstChange(), n = t.context && !t.context.isFirstChange(), o = t.inputs && !t.inputs.isFirstChange(); i ? this.resolveContentType() : n ? this.viewRef.updateContext(this.context()) : p(this.view()) && o && this.viewRef.setInputs(this.inputs() || {}); }
    resolveContentType() { this.viewRef?.destroy(); let t = this.view(), i = this.injector(), n = this.context(); if (f(t))
        (this.viewRef = this.viewService.createComponent(E, { vcr: this.vcr, injector: i })).setInput("content", t).detectChanges();
    else if (p(t)) {
        this.viewRef = this.viewService.createComponent(t, { vcr: this.vcr, injector: i ?? this.vcr.injector, context: n });
        let o = this.inputs();
        o && this.viewRef.setInputs(o);
    }
    else
        this.viewRef = this.viewService.createView(t || this.defaultTpl, { vcr: this.vcr, injector: i ?? this.vcr.injector, context: n }); }
    ngOnDestroy() { this.viewRef?.destroy(); }
}; e.\u0275fac = function (i) { return new (i || e); }, e.\u0275dir = w.\u0275\u0275defineDirective({ type: e, selectors: [["", "dynamicView", ""]], inputs: { view: [1, "dynamicView", "view"], injector: [1, "dynamicViewInjector", "injector"], context: [1, "dynamicViewContext", "context"], inputs: [1, "dynamicViewInputs", "inputs"] }, features: [w.\u0275\u0275NgOnChangesFeature] }); let r = e; return r; })();
export { c as CompRef, U as DynamicViewDirective, a as StringRef, N as TeleportDirective, $ as TeleportOutletDirective, h as TplRef, x as ViewService, B as getViewRef, G as injectViewContext, p as isComponent, f as isString, g as isTemplateRef };
