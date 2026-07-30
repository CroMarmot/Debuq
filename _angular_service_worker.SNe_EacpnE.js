import { a as C } from "@nf-internal/chunk-JKOY2XUY";
import * as c from "@angular/core";
import { \u0275RuntimeError as l, ApplicationRef as T, InjectionToken as k, makeEnvironmentProviders as P, Injector as N, provideAppInitializer as _, inject as w, NgZone as U, \u0275formatRuntimeError as A } from "@angular/core";
import { Observable as y, Subject as m, NEVER as p } from "rxjs";
import { switchMap as E, take as f, filter as M, map as d } from "rxjs/operators";
var S = "Service workers are disabled or not supported by this browser", h = class {
    serviceWorker;
    worker;
    registration;
    events;
    constructor(s, t) { if (this.serviceWorker = s, !s)
        this.worker = this.events = this.registration = new y(n => n.error(new l(5601, !1)));
    else {
        let n = null, e = new m;
        this.worker = new y(a => (n !== null && a.next(n), e.subscribe(b => a.next(b))));
        let o = () => { let { controller: a } = s; a !== null && (n = a, e.next(n)); };
        s.addEventListener("controllerchange", o), o(), this.registration = this.worker.pipe(E(() => s.getRegistration().then(a => { if (!a)
            throw new l(5601, !1); return a; })));
        let i = new m;
        this.events = i.asObservable();
        let u = a => { let { data: b } = a; b?.type && i.next(b); };
        s.addEventListener("message", u), t?.get(T, null, { optional: !0 })?.onDestroy(() => { s.removeEventListener("controllerchange", o), s.removeEventListener("message", u); });
    } }
    postMessage(s, t) { return new Promise(n => { this.worker.pipe(f(1)).subscribe(e => { e.postMessage(C({ action: s }, t)), n(); }); }); }
    postMessageWithOperation(s, t, n) { let e = this.waitForOperationCompleted(n), o = this.postMessage(s, t); return Promise.all([o, e]).then(([, i]) => i); }
    generateNonce() { return Math.round(Math.random() * 1e7); }
    eventsOfType(s) { let t; return typeof s == "string" ? t = n => n.type === s : t = n => s.includes(n.type), this.events.pipe(M(t)); }
    nextEventOfType(s) { return this.eventsOfType(s).pipe(f(1)); }
    waitForOperationCompleted(s) { return new Promise((t, n) => { this.eventsOfType("OPERATION_COMPLETED").pipe(M(e => e.nonce === s), f(1), d(e => { if (e.result !== void 0)
        return e.result; throw new Error(e.error); })).subscribe({ next: t, error: n }); }); }
    get isEnabled() { return !!this.serviceWorker; }
}, D = (() => { class r {
    sw;
    messages;
    notificationClicks;
    notificationCloses;
    pushSubscriptionChanges;
    subscription;
    get isEnabled() { return this.sw.isEnabled; }
    pushManager = null;
    subscriptionChanges = new m;
    constructor(t) { if (this.sw = t, !t.isEnabled) {
        this.messages = p, this.notificationClicks = p, this.notificationCloses = p, this.pushSubscriptionChanges = p, this.subscription = p;
        return;
    } this.messages = this.sw.eventsOfType("PUSH").pipe(d(e => e.data)), this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(d(e => e.data)), this.notificationCloses = this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(d(e => e.data)), this.pushSubscriptionChanges = this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(d(e => e.data)), this.pushManager = this.sw.registration.pipe(d(e => e.pushManager)); let n = this.pushManager.pipe(E(e => e.getSubscription())); this.subscription = new y(e => { let o = n.subscribe(e), i = this.subscriptionChanges.subscribe(e); return () => { o.unsubscribe(), i.unsubscribe(); }; }); }
    requestSubscription(t) { if (!this.sw.isEnabled || this.pushManager === null)
        return Promise.reject(new Error(S)); let n = { userVisibleOnly: !0 }, e = this.decodeBase64(t.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+")), o = new Uint8Array(new ArrayBuffer(e.length)); for (let i = 0; i < e.length; i++)
        o[i] = e.charCodeAt(i); return n.applicationServerKey = o, new Promise((i, u) => { this.pushManager.pipe(E(g => g.subscribe(n)), f(1)).subscribe({ next: g => { this.subscriptionChanges.next(g), i(g); }, error: u }); }); }
    unsubscribe() { if (!this.sw.isEnabled)
        return Promise.reject(new Error(S)); let t = n => { if (n === null)
        throw new l(5602, !1); return n.unsubscribe().then(e => { if (!e)
        throw new l(5603, !1); this.subscriptionChanges.next(null); }); }; return new Promise((n, e) => { this.subscription.pipe(f(1), E(t)).subscribe({ next: n, error: e }); }); }
    decodeBase64(t) { return atob(t); }
    static \u0275fac = function (n) { return new (n || r)(c.\u0275\u0275inject(h)); };
    static \u0275prov = c.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac });
} return r; })(), R = (() => { class r {
    sw;
    versionUpdates;
    unrecoverable;
    get isEnabled() { return this.sw.isEnabled; }
    ongoingCheckForUpdate = null;
    constructor(t) { if (this.sw = t, !t.isEnabled) {
        this.versionUpdates = p, this.unrecoverable = p;
        return;
    } this.versionUpdates = this.sw.eventsOfType(["VERSION_DETECTED", "VERSION_INSTALLATION_FAILED", "VERSION_READY", "NO_NEW_VERSION_DETECTED"]), this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE"); }
    checkForUpdate() { if (!this.sw.isEnabled)
        return Promise.reject(new Error(S)); if (this.ongoingCheckForUpdate)
        return this.ongoingCheckForUpdate; let t = this.sw.generateNonce(); return this.ongoingCheckForUpdate = this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", { nonce: t }, t).finally(() => { this.ongoingCheckForUpdate = null; }), this.ongoingCheckForUpdate; }
    activateUpdate() { if (!this.sw.isEnabled)
        return Promise.reject(new l(5601, !1)); let t = this.sw.generateNonce(); return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", { nonce: t }, t); }
    static \u0275fac = function (n) { return new (n || r)(c.\u0275\u0275inject(h)); };
    static \u0275prov = c.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac });
} return r; })();
var I = new k("");
function F() { if (typeof ngServerMode < "u" && ngServerMode)
    return; let r = w(v); if (!("serviceWorker" in navigator && r.enabled !== !1))
    return; let s = w(I), t = w(U), n = w(T); t.runOutsideAngular(() => { let e = navigator.serviceWorker, o = () => e.controller?.postMessage({ action: "INITIALIZE" }); e.addEventListener("controllerchange", o), n.onDestroy(() => { e.removeEventListener("controllerchange", o); }); }), t.runOutsideAngular(() => { let e, { registrationStrategy: o } = r; if (typeof o == "function")
    e = new Promise(i => o().subscribe(() => i()));
else {
    let [i, ...u] = (o || "registerWhenStable:30000").split(":");
    switch (i) {
        case "registerImmediately":
            e = Promise.resolve();
            break;
        case "registerWithDelay":
            e = O(+u[0] || 0);
            break;
        case "registerWhenStable":
            e = Promise.race([n.whenStable(), O(+u[0])]);
            break;
        default: throw new l(5600, !1);
    }
} e.then(() => { n.destroyed || navigator.serviceWorker.register(s, { scope: r.scope, updateViaCache: r.updateViaCache, type: r.type }).catch(i => console.error(A(5604, !1))); }); }); }
function O(r) { return new Promise(s => setTimeout(s, r)); }
function j(r, s) { let t = !(typeof ngServerMode < "u" && ngServerMode); return new h(t && r.enabled !== !1 ? navigator.serviceWorker : void 0, s); }
var v = class {
    enabled;
    updateViaCache;
    type;
    scope;
    registrationStrategy;
};
function W(r, s = {}) { return P([D, R, { provide: I, useValue: r }, { provide: v, useValue: s }, { provide: h, useFactory: j, deps: [v, N] }, _(F)]); }
var H = (() => { class r {
    static register(t, n = {}) { return { ngModule: r, providers: [W(t, n)] }; }
    static \u0275fac = function (n) { return new (n || r); };
    static \u0275mod = c.\u0275\u0275defineNgModule({ type: r });
    static \u0275inj = c.\u0275\u0275defineInjector({ providers: [D, R] });
} return r; })();
export { H as ServiceWorkerModule, D as SwPush, v as SwRegistrationOptions, R as SwUpdate, W as provideServiceWorker };
/*! Bundled license information:

@angular/service-worker/fesm2022/service-worker.mjs:
  (**
   * @license Angular v20.3.17
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
