function v(e) { let t = e(i => { Error.call(i), i.stack = new Error().stack; }); return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t; }
var x = v(e => function (t) {
    e(this), this.message = t ? `${t.length} errors occurred during unsubscription:
${t.map((i, s) => `${s + 1}) ${i.toString()}`).join(`
  `)}` : "", this.name = "UnsubscriptionError", this.errors = t;
});
function c(e) { return typeof e == "function"; }
function b(e, r) { if (e) {
    let t = e.indexOf(r);
    0 <= t && e.splice(t, 1);
} }
var l = class e {
    constructor(r) { this.initialTeardown = r, this.closed = !1, this._parentage = null, this._finalizers = null; }
    unsubscribe() { let r; if (!this.closed) {
        this.closed = !0;
        let { _parentage: t } = this;
        if (t)
            if (this._parentage = null, Array.isArray(t))
                for (let o of t)
                    o.remove(this);
            else
                t.remove(this);
        let { initialTeardown: i } = this;
        if (c(i))
            try {
                i();
            }
            catch (o) {
                r = o instanceof x ? o.errors : [o];
            }
        let { _finalizers: s } = this;
        if (s) {
            this._finalizers = null;
            for (let o of s)
                try {
                    A(o);
                }
                catch (n) {
                    r = r ?? [], n instanceof x ? r = [...r, ...n.errors] : r.push(n);
                }
        }
        if (r)
            throw new x(r);
    } }
    add(r) { var t; if (r && r !== this)
        if (this.closed)
            A(r);
        else {
            if (r instanceof e) {
                if (r.closed || r._hasParent(this))
                    return;
                r._addParent(this);
            }
            (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(r);
        } }
    _hasParent(r) { let { _parentage: t } = this; return t === r || Array.isArray(t) && t.includes(r); }
    _addParent(r) { let { _parentage: t } = this; this._parentage = Array.isArray(t) ? (t.push(r), t) : t ? [t, r] : r; }
    _removeParent(r) { let { _parentage: t } = this; t === r ? this._parentage = null : Array.isArray(t) && b(t, r); }
    remove(r) { let { _finalizers: t } = this; t && b(t, r), r instanceof e && r._removeParent(this); }
};
l.EMPTY = (() => { let e = new l; return e.closed = !0, e; })();
var w = l.EMPTY;
function S(e) { return e instanceof l || e && "closed" in e && c(e.remove) && c(e.add) && c(e.unsubscribe); }
function A(e) { c(e) ? e() : e.unsubscribe(); }
var u = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: !1, useDeprecatedNextContext: !1 };
function g() { }
var a = { setTimeout(e, r, ...t) { let { delegate: i } = a; return i?.setTimeout ? i.setTimeout(e, r, ...t) : setTimeout(e, r, ...t); }, clearTimeout(e) { let { delegate: r } = a; return (r?.clearTimeout || clearTimeout)(e); }, delegate: void 0 };
function j(e) { a.setTimeout(() => { let { onUnhandledError: r } = u; if (r)
    r(e);
else
    throw e; }); }
var M = T("C", void 0, void 0);
function B(e) { return T("E", void 0, e); }
function D(e) { return T("N", e, void 0); }
function T(e, r, t) { return { kind: e, value: r, error: t }; }
var f = null;
function d(e) { if (u.useDeprecatedSynchronousErrorHandling) {
    let r = !f;
    if (r && (f = { errorThrown: !1, error: null }), e(), r) {
        let { errorThrown: t, error: i } = f;
        if (f = null, t)
            throw i;
    }
}
else
    e(); }
function R(e) { u.useDeprecatedSynchronousErrorHandling && f && (f.errorThrown = !0, f.error = e); }
var _ = class extends l {
    constructor(r) { super(), this.isStopped = !1, r ? (this.destination = r, S(r) && r.add(this)) : this.destination = V; }
    static create(r, t, i) { return new m(r, t, i); }
    next(r) { this.isStopped ? I(D(r), this) : this._next(r); }
    error(r) { this.isStopped ? I(B(r), this) : (this.isStopped = !0, this._error(r)); }
    complete() { this.isStopped ? I(M, this) : (this.isStopped = !0, this._complete()); }
    unsubscribe() { this.closed || (this.isStopped = !0, super.unsubscribe(), this.destination = null); }
    _next(r) { this.destination.next(r); }
    _error(r) { try {
        this.destination.error(r);
    }
    finally {
        this.unsubscribe();
    } }
    _complete() { try {
        this.destination.complete();
    }
    finally {
        this.unsubscribe();
    } }
}, N = Function.prototype.bind;
function P(e, r) { return N.call(e, r); }
var O = class {
    constructor(r) { this.partialObserver = r; }
    next(r) { let { partialObserver: t } = this; if (t.next)
        try {
            t.next(r);
        }
        catch (i) {
            E(i);
        } }
    error(r) { let { partialObserver: t } = this; if (t.error)
        try {
            t.error(r);
        }
        catch (i) {
            E(i);
        }
    else
        E(r); }
    complete() { let { partialObserver: r } = this; if (r.complete)
        try {
            r.complete();
        }
        catch (t) {
            E(t);
        } }
}, m = class extends _ {
    constructor(r, t, i) { super(); let s; if (c(r) || !r)
        s = { next: r ?? void 0, error: t ?? void 0, complete: i ?? void 0 };
    else {
        let o;
        this && u.useDeprecatedNextContext ? (o = Object.create(r), o.unsubscribe = () => this.unsubscribe(), s = { next: r.next && P(r.next, o), error: r.error && P(r.error, o), complete: r.complete && P(r.complete, o) }) : s = r;
    } this.destination = new O(s); }
};
function E(e) { u.useDeprecatedSynchronousErrorHandling ? R(e) : j(e); }
function L(e) { throw e; }
function I(e, r) { let { onStoppedNotification: t } = u; t && a.setTimeout(() => t(e, r)); }
var V = { closed: !0, next: g, error: L, complete: g };
var H = typeof Symbol == "function" && Symbol.observable || "@@observable";
function W(e) { return e; }
function Tt(...e) { return C(e); }
function C(e) { return e.length === 0 ? W : e.length === 1 ? e[0] : function (t) { return e.reduce((i, s) => s(i), t); }; }
var F = (() => { class e {
    constructor(t) { t && (this._subscribe = t); }
    lift(t) { let i = new e; return i.source = this, i.operator = t, i; }
    subscribe(t, i, s) { let o = G(t) ? t : new m(t, i, s); return d(() => { let { operator: n, source: h } = this; o.add(n ? n.call(o, h) : h ? this._subscribe(o) : this._trySubscribe(o)); }), o; }
    _trySubscribe(t) { try {
        return this._subscribe(t);
    }
    catch (i) {
        t.error(i);
    } }
    forEach(t, i) { return i = Y(i), new i((s, o) => { let n = new m({ next: h => { try {
            t(h);
        }
        catch (p) {
            o(p), n.unsubscribe();
        } }, error: o, complete: s }); this.subscribe(n); }); }
    _subscribe(t) { var i; return (i = this.source) === null || i === void 0 ? void 0 : i.subscribe(t); }
    [H]() { return this; }
    pipe(...t) { return C(t)(this); }
    toPromise(t) { return t = Y(t), new t((i, s) => { let o; this.subscribe(n => o = n, n => s(n), () => i(o)); }); }
} return e.create = r => new e(r), e; })();
function Y(e) { var r; return (r = e ?? u.Promise) !== null && r !== void 0 ? r : Promise; }
function q(e) { return e && c(e.next) && c(e.error) && c(e.complete); }
function G(e) { return e && e instanceof _ || q(e) && S(e); }
var k = v(e => function () { e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"; });
var U = (() => { class e extends F {
    constructor() { super(), this.closed = !1, this.currentObservers = null, this.observers = [], this.isStopped = !1, this.hasError = !1, this.thrownError = null; }
    lift(t) { let i = new y(this, this); return i.operator = t, i; }
    _throwIfClosed() { if (this.closed)
        throw new k; }
    next(t) { d(() => { if (this._throwIfClosed(), !this.isStopped) {
        this.currentObservers || (this.currentObservers = Array.from(this.observers));
        for (let i of this.currentObservers)
            i.next(t);
    } }); }
    error(t) { d(() => { if (this._throwIfClosed(), !this.isStopped) {
        this.hasError = this.isStopped = !0, this.thrownError = t;
        let { observers: i } = this;
        for (; i.length;)
            i.shift().error(t);
    } }); }
    complete() { d(() => { if (this._throwIfClosed(), !this.isStopped) {
        this.isStopped = !0;
        let { observers: t } = this;
        for (; t.length;)
            t.shift().complete();
    } }); }
    unsubscribe() { this.isStopped = this.closed = !0, this.observers = this.currentObservers = null; }
    get observed() { var t; return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0; }
    _trySubscribe(t) { return this._throwIfClosed(), super._trySubscribe(t); }
    _subscribe(t) { return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t); }
    _innerSubscribe(t) { let { hasError: i, isStopped: s, observers: o } = this; return i || s ? w : (this.currentObservers = null, o.push(t), new l(() => { this.currentObservers = null, b(o, t); })); }
    _checkFinalizedStatuses(t) { let { hasError: i, thrownError: s, isStopped: o } = this; i ? t.error(s) : o && t.complete(); }
    asObservable() { let t = new F; return t.source = this, t; }
} return e.create = (r, t) => new y(r, t), e; })(), y = class extends U {
    constructor(r, t) { super(), this.destination = r, this.source = t; }
    next(r) { var t, i; (i = (t = this.destination) === null || t === void 0 ? void 0 : t.next) === null || i === void 0 || i.call(t, r); }
    error(r) { var t, i; (i = (t = this.destination) === null || t === void 0 ? void 0 : t.error) === null || i === void 0 || i.call(t, r); }
    complete() { var r, t; (t = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || t === void 0 || t.call(r); }
    _subscribe(r) { var t, i; return (i = (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(r)) !== null && i !== void 0 ? i : w; }
};
var z = { now() { return (z.delegate || Date).now(); }, delegate: void 0 };
var $ = class extends U {
    constructor(r = 1 / 0, t = 1 / 0, i = z) { super(), this._bufferSize = r, this._windowTime = t, this._timestampProvider = i, this._buffer = [], this._infiniteTimeWindow = !0, this._infiniteTimeWindow = t === 1 / 0, this._bufferSize = Math.max(1, r), this._windowTime = Math.max(1, t); }
    next(r) { let { isStopped: t, _buffer: i, _infiniteTimeWindow: s, _timestampProvider: o, _windowTime: n } = this; t || (i.push(r), !s && i.push(o.now() + n)), this._trimBuffer(), super.next(r); }
    _subscribe(r) { this._throwIfClosed(), this._trimBuffer(); let t = this._innerSubscribe(r), { _infiniteTimeWindow: i, _buffer: s } = this, o = s.slice(); for (let n = 0; n < o.length && !r.closed; n += i ? 1 : 2)
        r.next(o[n]); return this._checkFinalizedStatuses(r), t; }
    _trimBuffer() { let { _bufferSize: r, _timestampProvider: t, _buffer: i, _infiniteTimeWindow: s } = this, o = (s ? 1 : 2) * r; if (r < 1 / 0 && o < i.length && i.splice(0, i.length - o), !s) {
        let n = t.now(), h = 0;
        for (let p = 1; p < i.length && i[p] <= n; p += 2)
            h = p;
        h && i.splice(0, h + 1);
    } }
};
export { c as a, v as b, x as c, b as d, l as e, u as f, j as g, g as h, _ as i, m as j, H as k, W as l, Tt as m, F as n, k as o, U as p, y as q, z as r, $ as s };
