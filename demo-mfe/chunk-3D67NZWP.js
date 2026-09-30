function P(t) { let r = t(o => { Error.call(o), o.stack = new Error().stack; }); return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r; }
var ce = P(t => function (r) {
    t(this), this.message = r ? `${r.length} errors occurred during unsubscription:
${r.map((o, n) => `${n + 1}) ${o.toString()}`).join(`
  `)}` : "", this.name = "UnsubscriptionError", this.errors = r;
});
function d(t) { return typeof t == "function"; }
function T(t, e) { if (t) {
    let r = t.indexOf(e);
    0 <= r && t.splice(r, 1);
} }
var I = class t {
    constructor(e) { this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null; }
    unsubscribe() { let e; if (!this.closed) {
        this.closed = !0;
        let { _parentage: r } = this;
        if (r)
            if (this._parentage = null, Array.isArray(r))
                for (let i of r)
                    i.remove(this);
            else
                r.remove(this);
        let { initialTeardown: o } = this;
        if (d(o))
            try {
                o();
            }
            catch (i) {
                e = i instanceof ce ? i.errors : [i];
            }
        let { _finalizers: n } = this;
        if (n) {
            this._finalizers = null;
            for (let i of n)
                try {
                    ct(i);
                }
                catch (s) {
                    e = e ?? [], s instanceof ce ? e = [...e, ...s.errors] : e.push(s);
                }
        }
        if (e)
            throw new ce(e);
    } }
    add(e) { var r; if (e && e !== this)
        if (this.closed)
            ct(e);
        else {
            if (e instanceof t) {
                if (e.closed || e._hasParent(this))
                    return;
                e._addParent(this);
            }
            (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(e);
        } }
    _hasParent(e) { let { _parentage: r } = this; return r === e || Array.isArray(r) && r.includes(e); }
    _addParent(e) { let { _parentage: r } = this; this._parentage = Array.isArray(r) ? (r.push(e), r) : r ? [r, e] : e; }
    _removeParent(e) { let { _parentage: r } = this; r === e ? this._parentage = null : Array.isArray(r) && T(r, e); }
    remove(e) { let { _finalizers: r } = this; r && T(r, e), e instanceof t && e._removeParent(this); }
};
I.EMPTY = (() => { let t = new I; return t.closed = !0, t; })();
var qe = I.EMPTY;
function pe(t) { return t instanceof I || t && "closed" in t && d(t.remove) && d(t.add) && d(t.unsubscribe); }
function ct(t) { d(t) ? t() : t.unsubscribe(); }
var V = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: !1, useDeprecatedNextContext: !1 };
function S() { }
var ee = { setTimeout(t, e, ...r) { let { delegate: o } = ee; return o?.setTimeout ? o.setTimeout(t, e, ...r) : setTimeout(t, e, ...r); }, clearTimeout(t) { let { delegate: e } = ee; return (e?.clearTimeout || clearTimeout)(t); }, delegate: void 0 };
function ae(t) { ee.setTimeout(() => { let { onUnhandledError: e } = V; if (e)
    e(t);
else
    throw t; }); }
var pt = $e("C", void 0, void 0);
function at(t) { return $e("E", void 0, t); }
function dt(t) { return $e("N", t, void 0); }
function $e(t, e, r) { return { kind: t, value: e, error: r }; }
var B = null;
function te(t) { if (V.useDeprecatedSynchronousErrorHandling) {
    let e = !B;
    if (e && (B = { errorThrown: !1, error: null }), t(), e) {
        let { errorThrown: r, error: o } = B;
        if (B = null, r)
            throw o;
    }
}
else
    t(); }
function ht(t) { V.useDeprecatedSynchronousErrorHandling && B && (B.errorThrown = !0, B.error = t); }
var K = class extends I {
    constructor(e) { super(), this.isStopped = !1, e ? (this.destination = e, pe(e) && e.add(this)) : this.destination = tr; }
    static create(e, r, o) { return new W(e, r, o); }
    next(e) { this.isStopped ? Be(dt(e), this) : this._next(e); }
    error(e) { this.isStopped ? Be(at(e), this) : (this.isStopped = !0, this._error(e)); }
    complete() { this.isStopped ? Be(pt, this) : (this.isStopped = !0, this._complete()); }
    unsubscribe() { this.closed || (this.isStopped = !0, super.unsubscribe(), this.destination = null); }
    _next(e) { this.destination.next(e); }
    _error(e) { try {
        this.destination.error(e);
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
}, Qt = Function.prototype.bind;
function Ge(t, e) { return Qt.call(t, e); }
var Ke = class {
    constructor(e) { this.partialObserver = e; }
    next(e) { let { partialObserver: r } = this; if (r.next)
        try {
            r.next(e);
        }
        catch (o) {
            de(o);
        } }
    error(e) { let { partialObserver: r } = this; if (r.error)
        try {
            r.error(e);
        }
        catch (o) {
            de(o);
        }
    else
        de(e); }
    complete() { let { partialObserver: e } = this; if (e.complete)
        try {
            e.complete();
        }
        catch (r) {
            de(r);
        } }
}, W = class extends K {
    constructor(e, r, o) { super(); let n; if (d(e) || !e)
        n = { next: e ?? void 0, error: r ?? void 0, complete: o ?? void 0 };
    else {
        let i;
        this && V.useDeprecatedNextContext ? (i = Object.create(e), i.unsubscribe = () => this.unsubscribe(), n = { next: e.next && Ge(e.next, i), error: e.error && Ge(e.error, i), complete: e.complete && Ge(e.complete, i) }) : n = e;
    } this.destination = new Ke(n); }
};
function de(t) { V.useDeprecatedSynchronousErrorHandling ? ht(t) : ae(t); }
function er(t) { throw t; }
function Be(t, e) { let { onStoppedNotification: r } = V; r && ee.setTimeout(() => r(t, e)); }
var tr = { closed: !0, next: S, error: er, complete: S };
var re = typeof Symbol == "function" && Symbol.observable || "@@observable";
function g(t) { return t; }
function he(...t) { return Ze(t); }
function Ze(t) { return t.length === 0 ? g : t.length === 1 ? t[0] : function (r) { return t.reduce((o, n) => n(o), r); }; }
var v = (() => { class t {
    constructor(r) { r && (this._subscribe = r); }
    lift(r) { let o = new t; return o.source = this, o.operator = r, o; }
    subscribe(r, o, n) { let i = or(r) ? r : new W(r, o, n); return te(() => { let { operator: s, source: l } = this; i.add(s ? s.call(i, l) : l ? this._subscribe(i) : this._trySubscribe(i)); }), i; }
    _trySubscribe(r) { try {
        return this._subscribe(r);
    }
    catch (o) {
        r.error(o);
    } }
    forEach(r, o) { return o = bt(o), new o((n, i) => { let s = new W({ next: l => { try {
            r(l);
        }
        catch (m) {
            i(m), s.unsubscribe();
        } }, error: i, complete: n }); this.subscribe(s); }); }
    _subscribe(r) { var o; return (o = this.source) === null || o === void 0 ? void 0 : o.subscribe(r); }
    [re]() { return this; }
    pipe(...r) { return Ze(r)(this); }
    toPromise(r) { return r = bt(r), new r((o, n) => { let i; this.subscribe(s => i = s, s => n(s), () => o(i)); }); }
} return t.create = e => new t(e), t; })();
function bt(t) { var e; return (e = t ?? V.Promise) !== null && e !== void 0 ? e : Promise; }
function rr(t) { return t && d(t.next) && d(t.error) && d(t.complete); }
function or(t) { return t && t instanceof K || rr(t) && pe(t); }
function Je(t) { return d(t?.lift); }
function u(t) { return e => { if (Je(e))
    return e.lift(function (r) { try {
        return t(r, this);
    }
    catch (o) {
        this.error(o);
    } }); throw new TypeError("Unable to lift unknown Observable type"); }; }
function f(t, e, r, o, n) { return new Z(t, e, r, o, n); }
var Z = class extends K {
    constructor(e, r, o, n, i, s) { super(e), this.onFinalize = i, this.shouldUnsubscribe = s, this._next = r ? function (l) { try {
        r(l);
    }
    catch (m) {
        e.error(m);
    } } : super._next, this._error = n ? function (l) { try {
        n(l);
    }
    catch (m) {
        e.error(m);
    }
    finally {
        this.unsubscribe();
    } } : super._error, this._complete = o ? function () { try {
        o();
    }
    catch (l) {
        e.error(l);
    }
    finally {
        this.unsubscribe();
    } } : super._complete; }
    unsubscribe() { var e; if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        let { closed: r } = this;
        super.unsubscribe(), !r && ((e = this.onFinalize) === null || e === void 0 || e.call(this));
    } }
};
function xt() { return u((t, e) => { let r = null; t._refCount++; let o = f(e, void 0, void 0, void 0, () => { if (!t || t._refCount <= 0 || 0 < --t._refCount) {
    r = null;
    return;
} let n = t._connection, i = r; r = null, n && (!i || n === i) && n.unsubscribe(), e.unsubscribe(); }); t.subscribe(o), o.closed || (r = t.connect()); }); }
var z = class extends v {
    constructor(e, r) { super(), this.source = e, this.subjectFactory = r, this._subject = null, this._refCount = 0, this._connection = null, Je(e) && (this.lift = e.lift); }
    _subscribe(e) { return this.getSubject().subscribe(e); }
    getSubject() { let e = this._subject; return (!e || e.isStopped) && (this._subject = this.subjectFactory()), this._subject; }
    _teardown() { this._refCount = 0; let { _connection: e } = this; this._subject = this._connection = null, e?.unsubscribe(); }
    connect() { let e = this._connection; if (!e) {
        e = this._connection = new I;
        let r = this.getSubject();
        e.add(this.source.subscribe(f(r, void 0, () => { this._teardown(), r.complete(); }, o => { this._teardown(), r.error(o); }, () => this._teardown()))), e.closed && (this._connection = null, e = I.EMPTY);
    } return e; }
    refCount() { return xt()(this); }
};
var vt = P(t => function () { t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"; });
var _ = (() => { class t extends v {
    constructor() { super(), this.closed = !1, this.currentObservers = null, this.observers = [], this.isStopped = !1, this.hasError = !1, this.thrownError = null; }
    lift(r) { let o = new be(this, this); return o.operator = r, o; }
    _throwIfClosed() { if (this.closed)
        throw new vt; }
    next(r) { te(() => { if (this._throwIfClosed(), !this.isStopped) {
        this.currentObservers || (this.currentObservers = Array.from(this.observers));
        for (let o of this.currentObservers)
            o.next(r);
    } }); }
    error(r) { te(() => { if (this._throwIfClosed(), !this.isStopped) {
        this.hasError = this.isStopped = !0, this.thrownError = r;
        let { observers: o } = this;
        for (; o.length;)
            o.shift().error(r);
    } }); }
    complete() { te(() => { if (this._throwIfClosed(), !this.isStopped) {
        this.isStopped = !0;
        let { observers: r } = this;
        for (; r.length;)
            r.shift().complete();
    } }); }
    unsubscribe() { this.isStopped = this.closed = !0, this.observers = this.currentObservers = null; }
    get observed() { var r; return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0; }
    _trySubscribe(r) { return this._throwIfClosed(), super._trySubscribe(r); }
    _subscribe(r) { return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r); }
    _innerSubscribe(r) { let { hasError: o, isStopped: n, observers: i } = this; return o || n ? qe : (this.currentObservers = null, i.push(r), new I(() => { this.currentObservers = null, T(i, r); })); }
    _checkFinalizedStatuses(r) { let { hasError: o, thrownError: n, isStopped: i } = this; o ? r.error(n) : i && r.complete(); }
    asObservable() { let r = new v; return r.source = this, r; }
} return t.create = (e, r) => new be(e, r), t; })(), be = class extends _ {
    constructor(e, r) { super(), this.destination = e, this.source = r; }
    next(e) { var r, o; (o = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || o === void 0 || o.call(r, e); }
    error(e) { var r, o; (o = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || o === void 0 || o.call(r, e); }
    complete() { var e, r; (r = (e = this.destination) === null || e === void 0 ? void 0 : e.complete) === null || r === void 0 || r.call(e); }
    _subscribe(e) { var r, o; return (o = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(e)) !== null && o !== void 0 ? o : qe; }
};
var xe = class extends _ {
    constructor(e) { super(), this._value = e; }
    get value() { return this.getValue(); }
    _subscribe(e) { let r = super._subscribe(e); return !r.closed && e.next(this._value), r; }
    getValue() { let { hasError: e, thrownError: r, _value: o } = this; if (e)
        throw r; return this._throwIfClosed(), o; }
    next(e) { super.next(this._value = e); }
};
var J = { now() { return (J.delegate || Date).now(); }, delegate: void 0 };
var oe = class extends _ {
    constructor(e = 1 / 0, r = 1 / 0, o = J) { super(), this._bufferSize = e, this._windowTime = r, this._timestampProvider = o, this._buffer = [], this._infiniteTimeWindow = !0, this._infiniteTimeWindow = r === 1 / 0, this._bufferSize = Math.max(1, e), this._windowTime = Math.max(1, r); }
    next(e) { let { isStopped: r, _buffer: o, _infiniteTimeWindow: n, _timestampProvider: i, _windowTime: s } = this; r || (o.push(e), !n && o.push(i.now() + s)), this._trimBuffer(), super.next(e); }
    _subscribe(e) { this._throwIfClosed(), this._trimBuffer(); let r = this._innerSubscribe(e), { _infiniteTimeWindow: o, _buffer: n } = this, i = n.slice(); for (let s = 0; s < i.length && !e.closed; s += o ? 1 : 2)
        e.next(i[s]); return this._checkFinalizedStatuses(e), r; }
    _trimBuffer() { let { _bufferSize: e, _timestampProvider: r, _buffer: o, _infiniteTimeWindow: n } = this, i = (n ? 1 : 2) * e; if (e < 1 / 0 && i < o.length && o.splice(0, o.length - i), !n) {
        let s = r.now(), l = 0;
        for (let m = 1; m < o.length && o[m] <= s; m += 2)
            l = m;
        l && o.splice(0, l + 1);
    } }
};
var ve = class extends _ {
    constructor() { super(...arguments), this._value = null, this._hasValue = !1, this._isComplete = !1; }
    _checkFinalizedStatuses(e) { let { hasError: r, _hasValue: o, _value: n, thrownError: i, isStopped: s, _isComplete: l } = this; r ? e.error(i) : (s || l) && (o && e.next(n), e.complete()); }
    next(e) { this.isStopped || (this._value = e, this._hasValue = !0); }
    complete() { let { _hasValue: e, _value: r, _isComplete: o } = this; o || (this._isComplete = !0, e && super.next(r), super.complete()); }
};
var ne = class t {
    constructor(e, r = t.now) { this.schedulerActionCtor = e, this.now = r; }
    schedule(e, r = 0, o) { return new this.schedulerActionCtor(this, e).schedule(o, r); }
};
ne.now = J.now;
var ye = class extends I {
    constructor(e, r) { super(); }
    schedule(e, r = 0) { return this; }
};
var fe = { setInterval(t, e, ...r) { let { delegate: o } = fe; return o?.setInterval ? o.setInterval(t, e, ...r) : setInterval(t, e, ...r); }, clearInterval(t) { let { delegate: e } = fe; return (e?.clearInterval || clearInterval)(t); }, delegate: void 0 };
var we = class extends ye {
    constructor(e, r) { super(e, r), this.scheduler = e, this.work = r, this.pending = !1; }
    schedule(e, r = 0) { var o; if (this.closed)
        return this; this.state = e; let n = this.id, i = this.scheduler; return n != null && (this.id = this.recycleAsyncId(i, n, r)), this.pending = !0, this.delay = r, this.id = (o = this.id) !== null && o !== void 0 ? o : this.requestAsyncId(i, this.id, r), this; }
    requestAsyncId(e, r, o = 0) { return fe.setInterval(e.flush.bind(e, this), o); }
    recycleAsyncId(e, r, o = 0) { if (o != null && this.delay === o && this.pending === !1)
        return r; r != null && fe.clearInterval(r); }
    execute(e, r) { if (this.closed)
        return new Error("executing a cancelled action"); this.pending = !1; let o = this._execute(e, r); if (o)
        return o; this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null)); }
    _execute(e, r) { let o = !1, n; try {
        this.work(e);
    }
    catch (i) {
        o = !0, n = i || new Error("Scheduled action threw falsy error");
    } if (o)
        return this.unsubscribe(), n; }
    unsubscribe() { if (!this.closed) {
        let { id: e, scheduler: r } = this, { actions: o } = r;
        this.work = this.state = this.scheduler = null, this.pending = !1, T(o, this), e != null && (this.id = this.recycleAsyncId(r, e, null)), this.delay = null, super.unsubscribe();
    } }
};
var Se = class extends ne {
    constructor(e, r = ne.now) { super(e, r), this.actions = [], this._active = !1; }
    flush(e) { let { actions: r } = this; if (this._active) {
        r.push(e);
        return;
    } let o; this._active = !0; do
        if (o = e.execute(e.state, e.delay))
            break;
    while (e = r.shift()); if (this._active = !1, o) {
        for (; e = r.shift();)
            e.unsubscribe();
        throw o;
    } }
};
var A = new Se(we), _e = A;
var N = new v(t => t.complete());
function un(t) { return t ? nr(t) : N; }
function nr(t) { return new v(e => t.schedule(() => e.complete())); }
function F(t, e, r, o = 0, n = !1) { let i = e.schedule(function () { r(), n ? t.add(this.schedule(null, o)) : this.unsubscribe(); }, o); if (t.add(i), !n)
    return i; }
function ge(t, e = 0) { return u((r, o) => { r.subscribe(f(o, n => F(o, t, () => o.next(n), e), () => F(o, t, () => o.complete(), e), n => F(o, t, () => o.error(n), e))); }); }
function Ee(t, e = 0) { return u((r, o) => { o.add(t.schedule(() => r.subscribe(o), e)); }); }
import { __asyncValues as mr, __awaiter as lr } from "tslib";
var Oe = t => t && typeof t.length == "number" && typeof t != "function";
function Ie(t) { return d(t?.then); }
function Fe(t) { return d(t[re]); }
function Ae(t) { return Symbol.asyncIterator && d(t?.[Symbol.asyncIterator]); }
function Te(t) { return new TypeError(`You provided ${t !== null && typeof t == "object" ? "an invalid object" : `'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`); }
function ir() { return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator; }
var Ce = ir();
function Re(t) { return d(t?.[Ce]); }
import { __asyncGenerator as sr, __await as Xe } from "tslib";
function Pe(t) { return sr(this, arguments, function* () { let r = t.getReader(); try {
    for (;;) {
        let { value: o, done: n } = yield Xe(r.read());
        if (n)
            return yield Xe(void 0);
        yield yield Xe(o);
    }
}
finally {
    r.releaseLock();
} }); }
function ke(t) { return d(t?.getReader); }
function p(t) { if (t instanceof v)
    return t; if (t != null) {
    if (Fe(t))
        return ur(t);
    if (Oe(t))
        return fr(t);
    if (Ie(t))
        return cr(t);
    if (Ae(t))
        return yt(t);
    if (Re(t))
        return pr(t);
    if (ke(t))
        return ar(t);
} throw Te(t); }
function ur(t) { return new v(e => { let r = t[re](); if (d(r.subscribe))
    return r.subscribe(e); throw new TypeError("Provided object does not correctly implement Symbol.observable"); }); }
function fr(t) { return new v(e => { for (let r = 0; r < t.length && !e.closed; r++)
    e.next(t[r]); e.complete(); }); }
function cr(t) { return new v(e => { t.then(r => { e.closed || (e.next(r), e.complete()); }, r => e.error(r)).then(null, ae); }); }
function pr(t) { return new v(e => { for (let r of t)
    if (e.next(r), e.closed)
        return; e.complete(); }); }
function yt(t) { return new v(e => { dr(t, e).catch(r => e.error(r)); }); }
function ar(t) { return yt(Pe(t)); }
function dr(t, e) { var r, o, n, i; return lr(this, void 0, void 0, function* () { try {
    for (r = mr(t); o = yield r.next(), !o.done;) {
        let s = o.value;
        if (e.next(s), e.closed)
            return;
    }
}
catch (s) {
    n = { error: s };
}
finally {
    try {
        o && !o.done && (i = r.return) && (yield i.call(r));
    }
    finally {
        if (n)
            throw n.error;
    }
} e.complete(); }); }
function wt(t, e) { return p(t).pipe(Ee(e), ge(e)); }
function St(t, e) { return p(t).pipe(Ee(e), ge(e)); }
function _t(t, e) { return new v(r => { let o = 0; return e.schedule(function () { o === t.length ? r.complete() : (r.next(t[o++]), r.closed || this.schedule()); }); }); }
function gt(t, e) { return new v(r => { let o; return F(r, e, () => { o = t[Ce](), F(r, e, () => { let n, i; try {
    ({ value: n, done: i } = o.next());
}
catch (s) {
    r.error(s);
    return;
} i ? r.complete() : r.next(n); }, 0, !0); }), () => d(o?.return) && o.return(); }); }
function je(t, e) { if (!t)
    throw new Error("Iterable cannot be null"); return new v(r => { F(r, e, () => { let o = t[Symbol.asyncIterator](); F(r, e, () => { o.next().then(n => { n.done ? r.complete() : r.next(n.value); }); }, 0, !0); }); }); }
function Et(t, e) { return je(Pe(t), e); }
function Ot(t, e) { if (t != null) {
    if (Fe(t))
        return wt(t, e);
    if (Oe(t))
        return _t(t, e);
    if (Ie(t))
        return St(t, e);
    if (Ae(t))
        return je(t, e);
    if (Re(t))
        return gt(t, e);
    if (ke(t))
        return Et(t, e);
} throw Te(t); }
function U(t, e) { return e ? Ot(t, e) : p(t); }
function Me(t) { return t && d(t.schedule); }
function He(t) { return t[t.length - 1]; }
function D(t) { return d(He(t)) ? t.pop() : void 0; }
function C(t) { return Me(He(t)) ? t.pop() : void 0; }
function It(t, e) { return typeof He(t) == "number" ? t.pop() : e; }
function Le(...t) { let e = C(t); return U(t, e); }
function Ft(t, e) { let r = d(t) ? t : () => t, o = n => n.error(r()); return new v(e ? n => e.schedule(o, 0, n) : o); }
var hr = (function (t) { return t.NEXT = "N", t.ERROR = "E", t.COMPLETE = "C", t; })(hr || {}), Y = class t {
    constructor(e, r, o) { this.kind = e, this.value = r, this.error = o, this.hasValue = e === "N"; }
    observe(e) { return Qe(this, e); }
    do(e, r, o) { let { kind: n, value: i, error: s } = this; return n === "N" ? e?.(i) : n === "E" ? r?.(s) : o?.(); }
    accept(e, r, o) { var n; return d((n = e) === null || n === void 0 ? void 0 : n.next) ? this.observe(e) : this.do(e, r, o); }
    toObservable() { let { kind: e, value: r, error: o } = this, n = e === "N" ? Le(r) : e === "E" ? Ft(() => o) : e === "C" ? N : 0; if (!n)
        throw new TypeError(`Unexpected notification kind ${e}`); return n; }
    static createNext(e) { return new t("N", e); }
    static createError(e) { return new t("E", void 0, e); }
    static createComplete() { return t.completeNotification; }
};
Y.completeNotification = new Y("C");
function Qe(t, e) { var r, o, n; let { kind: i, value: s, error: l } = t; if (typeof i != "string")
    throw new TypeError('Invalid notification, missing "kind"'); i === "N" ? (r = e.next) === null || r === void 0 || r.call(e, s) : i === "E" ? (o = e.error) === null || o === void 0 || o.call(e, l) : (n = e.complete) === null || n === void 0 || n.call(e); }
var q = P(t => function () { t(this), this.name = "EmptyError", this.message = "no elements in sequence"; });
var et = P(t => function () { t(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range"; });
var At = P(t => function (r) { t(this), this.name = "NotFoundError", this.message = r; });
var Tt = P(t => function (r) { t(this), this.name = "SequenceError", this.message = r; });
function ie(t) { return t instanceof Date && !isNaN(t); }
var br = P(t => function (r = null) { t(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = r; });
function Ct(t, e) { let { first: r, each: o, with: n = xr, scheduler: i = e ?? A, meta: s = null } = ie(t) ? { first: t } : typeof t == "number" ? { each: t } : t; if (r == null && o == null)
    throw new TypeError("No timeout provided."); return u((l, m) => { let c, a, x = null, w = 0, E = b => { a = F(m, i, () => { try {
    c.unsubscribe(), p(n({ meta: s, lastValue: x, seen: w })).subscribe(m);
}
catch (h) {
    m.error(h);
} }, b); }; c = l.subscribe(f(m, b => { a?.unsubscribe(), w++, m.next(x = b), o > 0 && E(o); }, void 0, void 0, () => { a?.closed || a?.unsubscribe(), x = null; })), !w && E(r != null ? typeof r == "number" ? r : +r - i.now() : o); }); }
function xr(t) { throw new br(t); }
function k(t, e) { return u((r, o) => { let n = 0; r.subscribe(f(o, i => { o.next(t.call(e, i, n++)); })); }); }
var { isArray: vr } = Array, { getPrototypeOf: yr, prototype: wr, keys: Sr } = Object;
function Rt(t) { if (t.length === 1) {
    let e = t[0];
    if (vr(e))
        return { args: e, keys: null };
    if (_r(e)) {
        let r = Sr(e);
        return { args: r.map(o => e[o]), keys: r };
    }
} return { args: t, keys: null }; }
function _r(t) { return t && typeof t == "object" && yr(t) === wr; }
var { isArray: gr } = Array;
function Er(t, e) { return gr(e) ? t(...e) : t(e); }
function se(t) { return k(e => Er(t, e)); }
function Pt(t, e) { return t.reduce((r, o, n) => (r[o] = e[n], r), {}); }
function jt(...t) { let e = C(t), r = D(t), { args: o, keys: n } = Rt(t); if (o.length === 0)
    return U([], e); let i = new v(tt(o, e, n ? s => Pt(n, s) : g)); return r ? i.pipe(se(r)) : i; }
function tt(t, e, r = g) { return o => { kt(e, () => { let { length: n } = t, i = new Array(n), s = n, l = n; for (let m = 0; m < n; m++)
    kt(e, () => { let c = U(t[m], e), a = !1; c.subscribe(f(o, x => { i[m] = x, a || (a = !0, l--), l || o.next(r(i.slice())); }, () => { --s || o.complete(); })); }, o); }, o); }; }
function kt(t, e, r) { t ? F(r, t, e) : e(); }
function me(t, e, r, o, n, i, s, l) { let m = [], c = 0, a = 0, x = !1, w = () => { x && !m.length && !c && e.complete(); }, E = h => c < o ? b(h) : m.push(h), b = h => { i && e.next(h), c++; let y = !1; p(r(h, a++)).subscribe(f(e, O => { n?.(O), i ? E(O) : e.next(O); }, () => { y = !0; }, void 0, () => { if (y)
    try {
        for (c--; m.length && c < o;) {
            let O = m.shift();
            s ? F(e, s, () => b(O)) : b(O);
        }
        w();
    }
    catch (O) {
        e.error(O);
    } })); }; return t.subscribe(f(e, E, () => { x = !0, w(); })), () => { l?.(); }; }
function R(t, e, r = 1 / 0) { return d(e) ? R((o, n) => k((i, s) => e(o, i, n, s))(p(t(o, n))), r) : (typeof e == "number" && (r = e), u((o, n) => me(o, n, t, r))); }
function Ve(t = 1 / 0) { return R(g, t); }
function Ne() { return Ve(1); }
function X(...t) { return Ne()(U(t, C(t))); }
function j(t = 0, e, r = _e) { let o = -1; return e != null && (Me(e) ? r = e : o = e), new v(n => { let i = ie(t) ? +t - r.now() : t; i < 0 && (i = 0); let s = 0; return r.schedule(function () { n.closed || (n.next(s++), 0 <= o ? this.schedule(void 0, o) : n.complete()); }, i); }); }
function Mt(t = 0, e = A) { return t < 0 && (t = 0), j(t, t, e); }
var { isArray: Or } = Array;
function M(t) { return t.length === 1 && Or(t[0]) ? t[0] : t; }
function Lt(...t) { let e = M(t); return new v(r => { let o = 0, n = () => { if (o < e.length) {
    let i;
    try {
        i = p(e[o++]);
    }
    catch {
        n();
        return;
    }
    let s = new Z(r, void 0, S, S);
    i.subscribe(s), s.add(n);
}
else
    r.complete(); }; n(); }); }
function $(t, e) { return u((r, o) => { let n = 0; r.subscribe(f(o, i => t.call(e, i, n++) && o.next(i))); }); }
function dm(...t) { return t = M(t), t.length === 1 ? p(t[0]) : new v(rt(t)); }
function rt(t) { return e => { let r = []; for (let o = 0; r && !e.closed && o < t.length; o++)
    r.push(p(t[o]).subscribe(f(e, n => { if (r) {
        for (let i = 0; i < r.length; i++)
            i !== o && r[i].unsubscribe();
        r = null;
    } e.next(n); }))); }; }
function Ue(...t) { let e = D(t), r = M(t); return r.length ? new v(o => { let n = r.map(() => []), i = r.map(() => !1); o.add(() => { n = i = null; }); for (let s = 0; !o.closed && s < r.length; s++)
    p(r[s]).subscribe(f(o, l => { if (n[s].push(l), n.every(m => m.length)) {
        let m = n.map(c => c.shift());
        o.next(e ? e(...m) : m), n.some((c, a) => !c.length && i[a]) && o.complete();
    } }, () => { i[s] = !0, !n[s].length && o.complete(); })); return () => { n = i = null; }; }) : N; }
function Vt(t) { return u((e, r) => { let o = !1, n = null, i = null, s = !1, l = () => { if (i?.unsubscribe(), i = null, o) {
    o = !1;
    let c = n;
    n = null, r.next(c);
} s && r.complete(); }, m = () => { i = null, s && r.complete(); }; e.subscribe(f(r, c => { o = !0, n = c, i || p(t(c)).subscribe(i = f(r, l, m)); }, () => { s = !0, (!o || !i || i.closed) && r.complete(); })); }); }
function Cm(t, e = A) { return Vt(() => j(t, e)); }
function Lm(t) { return u((e, r) => { let o = []; return e.subscribe(f(r, n => o.push(n), () => { r.next(o), r.complete(); })), p(t).subscribe(f(r, () => { let n = o; o = [], r.next(n); }, S)), () => { o = null; }; }); }
function zm(t, e = null) { return e = e ?? t, u((r, o) => { let n = [], i = 0; r.subscribe(f(o, s => { let l = null; i++ % e === 0 && n.push([]); for (let m of n)
    m.push(s), t <= m.length && (l = l ?? [], l.push(m)); if (l)
    for (let m of l)
        T(n, m), o.next(m); }, () => { for (let s of n)
    o.next(s); o.complete(); }, void 0, () => { n = null; })); }); }
function Jm(t, ...e) { var r, o; let n = (r = C(e)) !== null && r !== void 0 ? r : A, i = (o = e[0]) !== null && o !== void 0 ? o : null, s = e[1] || 1 / 0; return u((l, m) => { let c = [], a = !1, x = b => { let { buffer: h, subs: y } = b; y.unsubscribe(), T(c, b), m.next(h), a && w(); }, w = () => { if (c) {
    let b = new I;
    m.add(b);
    let y = { buffer: [], subs: b };
    c.push(y), F(b, n, () => x(y), t);
} }; i !== null && i >= 0 ? F(m, n, w, i, !0) : a = !0, w(); let E = f(m, b => { let h = c.slice(); for (let y of h) {
    let { buffer: O } = y;
    O.push(b), s <= O.length && x(y);
} }, () => { for (; c?.length;)
    m.next(c.shift().buffer); E?.unsubscribe(), m.complete(), m.unsubscribe(); }, void 0, () => c = null); l.subscribe(E); }); }
function nl(t, e) { return u((r, o) => { let n = []; p(t).subscribe(f(o, i => { let s = []; n.push(s); let l = new I, m = () => { T(n, s), o.next(s), l.unsubscribe(); }; l.add(p(e(i)).subscribe(f(o, m, S))); }, S)), r.subscribe(f(o, i => { for (let s of n)
    s.push(i); }, () => { for (; n.length > 0;)
    o.next(n.shift()); o.complete(); })); }); }
function fl(t) { return u((e, r) => { let o = null, n = null, i = () => { n?.unsubscribe(); let s = o; o = [], s && r.next(s), p(t()).subscribe(n = f(r, i, S)); }; i(), e.subscribe(f(r, s => o?.push(s), () => { o && r.next(o), r.complete(); }, void 0, () => o = n = null)); }); }
function Ir(t) { return u((e, r) => { let o = null, n = !1, i; o = e.subscribe(f(r, void 0, void 0, s => { i = p(t(s, Ir(t)(e))), o ? (o.unsubscribe(), o = null, i.subscribe(r)) : n = !0; })), n && (o.unsubscribe(), o = null, i.subscribe(r)); }); }
function We(t, e, r, o, n) { return (i, s) => { let l = r, m = e, c = 0; i.subscribe(f(s, a => { let x = c++; m = l ? t(m, a, x) : (l = !0, a), o && s.next(m); }, n && (() => { l && s.next(m), s.complete(); }))); }; }
function G(t, e) { return u(We(t, e, arguments.length >= 2, !1, !0)); }
var Fr = (t, e) => (t.push(e), t);
function Nt() { return u((t, e) => { G(Fr, [])(t).subscribe(e); }); }
function ze(t, e) { return he(Nt(), R(r => t(r)), e ? se(e) : g); }
function Ut(t) { return ze(jt, t); }
var jl = Ut;
function ot(...t) { let e = D(t); return e ? he(ot(...t), se(e)) : u((r, o) => { tt([r, ...M(t)])(o); }); }
function ql(...t) { return ot(...t); }
function nt(t, e) { return d(e) ? R(t, e, 1) : R(t, 1); }
function Xl(t, e) { return d(e) ? nt(() => t, e) : nt(() => t); }
function Wt(...t) { let e = C(t); return u((r, o) => { Ne()(U([r, ...t], e)).subscribe(o); }); }
function iu(...t) { return Wt(...t); }
function zt(t) { return new v(e => t.subscribe(e)); }
var Ar = { connector: () => new _ };
function De(t, e = Ar) { let { connector: r } = e; return u((o, n) => { let i = r(); p(t(zt(i))).subscribe(n), n.add(o.subscribe(i)); }); }
function hu(t) { return G((e, r, o) => !t || t(r, o) ? e + 1 : e, 0); }
function Su(t) { return u((e, r) => { let o = !1, n = null, i = null, s = () => { if (i?.unsubscribe(), i = null, o) {
    o = !1;
    let l = n;
    n = null, r.next(l);
} }; e.subscribe(f(r, l => { i?.unsubscribe(), o = !0, n = l, i = f(r, s, S), p(t(l)).subscribe(i); }, () => { s(), r.complete(); }, void 0, () => { n = i = null; })); }); }
function Iu(t, e = A) { return u((r, o) => { let n = null, i = null, s = null, l = () => { if (n) {
    n.unsubscribe(), n = null;
    let c = i;
    i = null, o.next(c);
} }; function m() { let c = s + t, a = e.now(); if (a < c) {
    n = this.schedule(void 0, c - a), o.add(n);
    return;
} l(); } r.subscribe(f(o, c => { i = c, s = e.now(), n || (n = e.schedule(m, t), o.add(n)); }, () => { l(), o.complete(); }, void 0, () => { i = n = null; })); }); }
function le(t) { return u((e, r) => { let o = !1; e.subscribe(f(r, n => { o = !0, r.next(n); }, () => { o || r.next(t), r.complete(); })); }); }
function H(t) { return t <= 0 ? () => N : u((e, r) => { let o = 0; e.subscribe(f(r, n => { ++o <= t && (r.next(n), t <= o && r.complete()); })); }); }
function Dt() { return u((t, e) => { t.subscribe(f(e, S)); }); }
function Yt(t) { return k(() => t); }
function it(t, e) { return e ? r => X(e.pipe(H(1), Dt()), r.pipe(it(t))) : R((r, o) => p(t(r, o)).pipe(H(1), Yt(r))); }
function Xu(t, e = A) { let r = j(t, e); return it(() => r); }
function rf() { return u((t, e) => { t.subscribe(f(e, r => Qe(r, e))); }); }
function uf(t, e) { return u((r, o) => { let n = new Set; r.subscribe(f(o, i => { let s = t ? t(i) : i; n.has(s) || (n.add(s), o.next(i)); })), e && p(e).subscribe(f(o, () => n.clear(), S)); }); }
function qt(t, e = g) { return t = t ?? Tr, u((r, o) => { let n, i = !0; r.subscribe(f(o, s => { let l = e(s); (i || !t(n, l)) && (i = !1, n = l, o.next(s)); })); }); }
function Tr(t, e) { return t === e; }
function bf(t, e) { return qt((r, o) => e ? e(r[t], o[t]) : r[t] === o[t]); }
function ue(t = Cr) { return u((e, r) => { let o = !1; e.subscribe(f(r, n => { o = !0, r.next(n); }, () => o ? r.complete() : r.error(t()))); }); }
function Cr() { return new q; }
function Ff(t, e) { if (t < 0)
    throw new et; let r = arguments.length >= 2; return o => o.pipe($((n, i) => i === t), H(1), r ? le(e) : ue(() => new et)); }
function Rf(...t) { return e => X(e, Le(...t)); }
function Mf(t, e) { return u((r, o) => { let n = 0; r.subscribe(f(o, i => { t.call(e, i, n++, r) || (o.next(!1), o.complete()); }, () => { o.next(!0), o.complete(); })); }); }
function st(t, e) { return e ? r => r.pipe(st((o, n) => p(t(o, n)).pipe(k((i, s) => e(o, i, n, s))))) : u((r, o) => { let n = 0, i = null, s = !1; r.subscribe(f(o, l => { i || (i = f(o, void 0, () => { i = null, s && o.complete(); }), p(t(l, n++)).subscribe(i)); }, () => { s = !0, !i && o.complete(); })); }); }
function $t() { return st(g); }
var Gf = $t;
function Jf(t, e = 1 / 0, r) { return e = (e || 0) < 1 ? 1 / 0 : e, u((o, n) => me(o, n, t, e, void 0, !0, r)); }
function Qf(t) { return u((e, r) => { try {
    e.subscribe(r);
}
finally {
    r.add(t);
} }); }
function oc(t, e) { return u(mt(t, e, "value")); }
function mt(t, e, r) { let o = r === "index"; return (n, i) => { let s = 0; n.subscribe(f(i, l => { let m = s++; t.call(e, l, m, n) && (i.next(o ? m : l), i.complete()); }, () => { i.next(o ? -1 : void 0), i.complete(); })); }; }
function mc(t, e) { return u(mt(t, e, "index")); }
function hc(t, e) { let r = arguments.length >= 2; return o => o.pipe(t ? $((n, i) => t(n, i, o)) : g, H(1), r ? le(e) : ue(() => new q)); }
function _c(t, e, r, o) { return u((n, i) => { let s; !e || typeof e == "function" ? s = e : { duration: r, element: s, connector: o } = e; let l = new Map, m = b => { l.forEach(b), b(i); }, c = b => m(h => h.error(b)), a = 0, x = !1, w = new Z(i, b => { try {
    let h = t(b), y = l.get(h);
    if (!y) {
        l.set(h, y = o ? o() : new _);
        let O = E(h, y);
        if (i.next(O), r) {
            let L = f(y, () => { y.complete(), L?.unsubscribe(); }, void 0, void 0, () => l.delete(h));
            w.add(p(r(O)).subscribe(L));
        }
    }
    y.next(s ? s(b) : b);
}
catch (h) {
    c(h);
} }, () => m(b => b.complete()), c, () => l.clear(), () => (x = !0, a === 0)); n.subscribe(w); function E(b, h) { let y = new v(O => { a++; let L = h.subscribe(O); return () => { L.unsubscribe(), --a === 0 && x && w.unsubscribe(); }; }); return y.key = b, y; } }); }
function Ic() { return u((t, e) => { t.subscribe(f(e, () => { e.next(!1), e.complete(); }, () => { e.next(!0), e.complete(); })); }); }
function Gt(t) { return t <= 0 ? () => N : u((e, r) => { let o = []; e.subscribe(f(r, n => { o.push(n), t < o.length && o.shift(); }, () => { for (let n of o)
    r.next(n); r.complete(); }, void 0, () => { o = null; })); }); }
function Nc(t, e) { let r = arguments.length >= 2; return o => o.pipe(t ? $((n, i) => t(n, i, o)) : g, Gt(1), r ? le(e) : ue(() => new q)); }
function Yc() { return u((t, e) => { t.subscribe(f(e, r => { e.next(Y.createNext(r)); }, () => { e.next(Y.createComplete()), e.complete(); }, r => { e.next(Y.createError(r)), e.complete(); })); }); }
function Bc(t) { return G(d(t) ? (e, r) => t(e, r) > 0 ? e : r : (e, r) => e > r ? e : r); }
var Jc = R;
function ep(t, e, r = 1 / 0) { return d(e) ? R(() => t, e, r) : (typeof e == "number" && (r = e), R(() => t, r)); }
function np(t, e, r = 1 / 0) { return u((o, n) => { let i = e; return me(o, n, (s, l) => t(i, s, l), r, s => { i = s; }, !1, void 0, () => i = null); }); }
function Bt(...t) { let e = C(t), r = It(t, 1 / 0); return t = M(t), u((o, n) => { Ve(r)(U([o, ...t], e)).subscribe(n); }); }
function ap(...t) { return Bt(...t); }
function xp(t) { return G(d(t) ? (e, r) => t(e, r) < 0 ? e : r : (e, r) => e < r ? e : r); }
function Ye(t, e) { let r = d(t) ? t : () => t; return d(e) ? De(e, { connector: r }) : o => new z(o, r); }
function Rr(...t) { let e = M(t); return r => Lt(r, ...e); }
var Op = Rr;
function Tp() { return u((t, e) => { let r, o = !1; t.subscribe(f(e, n => { let i = r; r = n, o && e.next([i, n]), o = !0; })); }); }
function Pp(...t) { let e = t.length; if (e === 0)
    throw new Error("list of properties cannot be empty."); return k(r => { let o = r; for (let n = 0; n < e; n++) {
    let i = o?.[t[n]];
    if (typeof i < "u")
        o = i;
    else
        return;
} return o; }); }
function Vp(t) { return t ? e => De(t)(e) : e => Ye(new _)(e); }
function zp(t) { return e => { let r = new xe(t); return new z(e, () => r); }; }
function $p() { return t => { let e = new ve; return new z(t, () => e); }; }
function Jp(t, e, r, o) { r && !d(r) && (o = r); let n = d(r) ? r : void 0; return i => Ye(new oe(t, e, o), n)(i); }
function ta(...t) { return t.length ? u((e, r) => { rt([e, ...t])(r); }) : g; }
function la(t) { let e = 1 / 0, r; return t != null && (typeof t == "object" ? { count: e = 1 / 0, delay: r } = t : e = t), e <= 0 ? () => N : u((o, n) => { let i = 0, s, l = () => { if (s?.unsubscribe(), s = null, r != null) {
    let c = typeof r == "number" ? j(r) : p(r(i)), a = f(n, () => { a.unsubscribe(), m(); });
    c.subscribe(a);
}
else
    m(); }, m = () => { let c = !1; s = o.subscribe(f(n, void 0, () => { ++i < e ? s ? l() : c = !0 : n.complete(); })), c && l(); }; m(); }); }
function da(t) { return u((e, r) => { let o, n = !1, i, s = !1, l = !1, m = () => l && s && (r.complete(), !0), c = () => (i || (i = new _, p(t(i)).subscribe(f(r, () => { o ? a() : n = !0; }, () => { s = !0, m(); }))), i), a = () => { l = !1, o = e.subscribe(f(r, void 0, () => { l = !0, !m() && c().next(); })), n && (o.unsubscribe(), o = null, n = !1, a()); }; a(); }); }
function Sa(t = 1 / 0) { let e; t && typeof t == "object" ? e = t : e = { count: t }; let { count: r = 1 / 0, delay: o, resetOnSuccess: n = !1 } = e; return r <= 0 ? g : u((i, s) => { let l = 0, m, c = () => { let a = !1; m = i.subscribe(f(s, x => { n && (l = 0), s.next(x); }, void 0, x => { if (l++ < r) {
    let w = () => { m ? (m.unsubscribe(), m = null, c()) : a = !0; };
    if (o != null) {
        let E = typeof o == "number" ? j(o) : p(o(x, l)), b = f(s, () => { b.unsubscribe(), w(); }, () => { s.complete(); });
        E.subscribe(b);
    }
    else
        w();
}
else
    s.error(x); })), a && (m.unsubscribe(), m = null, c()); }; c(); }); }
function Fa(t) { return u((e, r) => { let o, n = !1, i, s = () => { o = e.subscribe(f(r, void 0, void 0, l => { i || (i = new _, p(t(i)).subscribe(f(r, () => o ? s() : n = !0))), i && i.next(l); })), n && (o.unsubscribe(), o = null, n = !1, s()); }; s(); }); }
function Kt(t) { return u((e, r) => { let o = !1, n = null; e.subscribe(f(r, i => { o = !0, n = i; })), p(t).subscribe(f(r, () => { if (o) {
    o = !1;
    let i = n;
    n = null, r.next(i);
} }, S)); }); }
function Va(t, e = A) { return Kt(Mt(t, e)); }
function za(t, e) { return u(We(t, e, arguments.length >= 2, !0)); }
function Ga(t, e = (r, o) => r === o) { return u((r, o) => { let n = Zt(), i = Zt(), s = m => { o.next(m), o.complete(); }, l = (m, c) => { let a = f(o, x => { let { buffer: w, complete: E } = c; w.length === 0 ? E ? s(!1) : m.buffer.push(x) : !e(x, w.shift()) && s(!1); }, () => { m.complete = !0; let { complete: x, buffer: w } = c; x && s(w.length === 0), a?.unsubscribe(); }); return a; }; r.subscribe(l(n, i)), p(t).subscribe(l(i, n)); }); }
function Zt() { return { buffer: [], complete: !1 }; }
function Jt(t = {}) { let { connector: e = () => new _, resetOnError: r = !0, resetOnComplete: o = !0, resetOnRefCountZero: n = !0 } = t; return i => { let s, l, m, c = 0, a = !1, x = !1, w = () => { l?.unsubscribe(), l = void 0; }, E = () => { w(), s = m = void 0, a = x = !1; }, b = () => { let h = s; E(), h?.unsubscribe(); }; return u((h, y) => { c++, !x && !a && w(); let O = m = m ?? e(); y.add(() => { c--, c === 0 && !x && !a && (l = lt(b, n)); }), O.subscribe(y), !s && c > 0 && (s = new W({ next: L => O.next(L), error: L => { x = !0, w(), l = lt(E, r, L), O.error(L); }, complete: () => { a = !0, w(), l = lt(E, o), O.complete(); } }), p(h).subscribe(s)); })(i); }; }
function lt(t, e, ...r) { if (e === !0) {
    t();
    return;
} if (e === !1)
    return; let o = new W({ next: () => { o.unsubscribe(), t(); } }); return p(e(...r)).subscribe(o); }
function td(t, e, r) { let o, n = !1; return t && typeof t == "object" ? { bufferSize: o = 1 / 0, windowTime: e = 1 / 0, refCount: n = !1, scheduler: r } = t : o = t ?? 1 / 0, Jt({ connector: () => new oe(o, e, r), resetOnError: !0, resetOnComplete: !1, resetOnRefCountZero: n }); }
function ld(t) { return u((e, r) => { let o = !1, n, i = !1, s = 0; e.subscribe(f(r, l => { i = !0, (!t || t(l, s++, e)) && (o && r.error(new Tt("Too many matching values")), o = !0, n = l); }, () => { o ? (r.next(n), r.complete()) : r.error(i ? new At("No matching values") : new q); })); }); }
function cd(t) { return $((e, r) => t <= r); }
function bd(t) { return t <= 0 ? g : u((e, r) => { let o = new Array(t), n = 0; return e.subscribe(f(r, i => { let s = n++; if (s < t)
    o[s] = i;
else {
    let l = s % t, m = o[l];
    o[l] = i, r.next(m);
} })), () => { o = null; }; }); }
function _d(t) { return u((e, r) => { let o = !1, n = f(r, () => { n?.unsubscribe(), o = !0; }, S); p(t).subscribe(n), e.subscribe(f(r, i => o && r.next(i))); }); }
function Id(t) { return u((e, r) => { let o = !1, n = 0; e.subscribe(f(r, i => (o || (o = !t(i, n++))) && r.next(i))); }); }
function Rd(...t) { let e = C(t); return u((r, o) => { (e ? X(t, r, e) : X(t, r)).subscribe(o); }); }
function Q(t, e) { return u((r, o) => { let n = null, i = 0, s = !1, l = () => s && !n && o.complete(); r.subscribe(f(o, m => { n?.unsubscribe(); let c = 0, a = i++; p(t(m, a)).subscribe(n = f(o, x => o.next(e ? e(m, x, a, c++) : x), () => { n = null, l(); })); }, () => { s = !0, l(); })); }); }
function Ud() { return Q(g); }
function Yd(t, e) { return d(e) ? Q(() => t, e) : Q(() => t); }
function Bd(t, e) { return u((r, o) => { let n = e; return Q((i, s) => t(n, i, s), (i, s) => (n = s, s))(r).subscribe(o), () => { n = null; }; }); }
function Qd(t) { return u((e, r) => { p(t).subscribe(f(r, () => r.complete(), S)), !r.closed && e.subscribe(r); }); }
function oh(t, e = !1) { return u((r, o) => { let n = 0; r.subscribe(f(o, i => { let s = t(i, n++); (s || e) && o.next(i), !s && o.complete(); })); }); }
function uh(t, e, r) { let o = d(t) || e || r ? { next: t, error: e, complete: r } : t; return o ? u((n, i) => { var s; (s = o.subscribe) === null || s === void 0 || s.call(o); let l = !0; n.subscribe(f(i, m => { var c; (c = o.next) === null || c === void 0 || c.call(o, m), i.next(m); }, () => { var m; l = !1, (m = o.complete) === null || m === void 0 || m.call(o), i.complete(); }, m => { var c; l = !1, (c = o.error) === null || c === void 0 || c.call(o, m), i.error(m); }, () => { var m, c; l && ((m = o.unsubscribe) === null || m === void 0 || m.call(o)), (c = o.finalize) === null || c === void 0 || c.call(o); })); }) : g; }
var ut = { leading: !0, trailing: !1 };
function Xt(t, e = ut) { return u((r, o) => { let { leading: n, trailing: i } = e, s = !1, l = null, m = null, c = !1, a = () => { m?.unsubscribe(), m = null, i && (E(), c && o.complete()); }, x = () => { m = null, c && o.complete(); }, w = b => m = p(t(b)).subscribe(f(o, a, x)), E = () => { if (s) {
    s = !1;
    let b = l;
    l = null, o.next(b), !c && w(b);
} }; r.subscribe(f(o, b => { s = !0, l = b, !(m && !m.closed) && (n ? E() : w(b)); }, () => { c = !0, !(i && s && m && !m.closed) && o.complete(); })); }); }
function vh(t, e = A, r = ut) { let o = j(t, e); return Xt(() => o, r); }
function gh(t = A) { return u((e, r) => { let o = t.now(); e.subscribe(f(r, n => { let i = t.now(), s = i - o; o = i, r.next(new ft(n, s)); })); }); }
var ft = class {
    constructor(e, r) { this.value = e, this.interval = r; }
};
function Ah(t, e, r) { let o, n, i; if (r = r ?? _e, ie(t) ? o = t : typeof t == "number" && (n = t), e)
    i = () => e;
else
    throw new TypeError("No observable provided to switch to"); if (o == null && n == null)
    throw new TypeError("No timeout provided."); return Ct({ first: o, each: n, scheduler: r, with: i }); }
function Ph(t = J) { return k(e => ({ value: e, timestamp: t.now() })); }
function Uh(t) { return u((e, r) => { let o = new _; r.next(o.asObservable()); let n = i => { o.error(i), r.error(i); }; return e.subscribe(f(r, i => o?.next(i), () => { o.complete(), r.complete(); }, n)), p(t).subscribe(f(r, () => { o.complete(), r.next(o = new _); }, S, n)), () => { o?.unsubscribe(), o = null; }; }); }
function qh(t, e = 0) { let r = e > 0 ? e : t; return u((o, n) => { let i = [new _], s = [], l = 0; n.next(i[0].asObservable()), o.subscribe(f(n, m => { for (let a of i)
    a.next(m); let c = l - t + 1; if (c >= 0 && c % r === 0 && i.shift().complete(), ++l % r === 0) {
    let a = new _;
    i.push(a), n.next(a.asObservable());
} }, () => { for (; i.length > 0;)
    i.shift().complete(); n.complete(); }, m => { for (; i.length > 0;)
    i.shift().error(m); n.error(m); }, () => { s = null, i = null; })); }); }
function eb(t, ...e) { var r, o; let n = (r = C(e)) !== null && r !== void 0 ? r : A, i = (o = e[0]) !== null && o !== void 0 ? o : null, s = e[1] || 1 / 0; return u((l, m) => { let c = [], a = !1, x = h => { let { window: y, subs: O } = h; y.complete(), O.unsubscribe(), T(c, h), a && w(); }, w = () => { if (c) {
    let h = new I;
    m.add(h);
    let y = new _, O = { window: y, subs: h, seen: 0 };
    c.push(O), m.next(y.asObservable()), F(h, n, () => x(O), t);
} }; i !== null && i >= 0 ? F(m, n, w, i, !0) : a = !0, w(); let E = h => c.slice().forEach(h), b = h => { E(({ window: y }) => h(y)), h(m), m.unsubscribe(); }; return l.subscribe(f(m, h => { E(y => { y.window.next(h), s <= ++y.seen && x(y); }); }, () => b(h => h.complete()), h => b(y => y.error(h)))), () => { c = null; }; }); }
function ub(t, e) { return u((r, o) => { let n = [], i = s => { for (; 0 < n.length;)
    n.shift().error(s); o.error(s); }; p(t).subscribe(f(o, s => { let l = new _; n.push(l); let m = new I, c = () => { T(n, l), l.complete(), m.unsubscribe(); }, a; try {
    a = p(e(s));
}
catch (x) {
    i(x);
    return;
} o.next(l.asObservable()), m.add(a.subscribe(f(o, c, S, i))); }, S)), r.subscribe(f(o, s => { let l = n.slice(); for (let m of l)
    m.next(s); }, () => { for (; 0 < n.length;)
    n.shift().complete(); o.complete(); }, i, () => { for (; 0 < n.length;)
    n.shift().unsubscribe(); })); }); }
function hb(t) { return u((e, r) => { let o, n, i = l => { o.error(l), r.error(l); }, s = () => { n?.unsubscribe(), o?.complete(), o = new _, r.next(o.asObservable()); let l; try {
    l = p(t());
}
catch (m) {
    i(m);
    return;
} l.subscribe(n = f(r, s, s, i)); }; s(), e.subscribe(f(r, l => o.next(l), () => { o.complete(), r.complete(); }, i, () => { n?.unsubscribe(), o = null; })); }); }
function gb(...t) { let e = D(t); return u((r, o) => { let n = t.length, i = new Array(n), s = t.map(() => !1), l = !1; for (let m = 0; m < n; m++)
    p(t[m]).subscribe(f(o, c => { i[m] = c, !l && !s[m] && (s[m] = !0, (l = s.every(g)) && (s = null)); }, S)); r.subscribe(f(o, m => { if (l) {
    let c = [m, ...i];
    o.next(e ? e(...c) : c);
} })); }); }
function Fb(t) { return ze(Ue, t); }
function Ht(...t) { return u((e, r) => { Ue(e, ...t).subscribe(r); }); }
function kb(...t) { return Ht(...t); }
function Mb(t, e) { return (r, o) => !t.call(e, r, o); }
export { d as a, ce as b, I as c, V as d, S as e, K as f, W as g, re as h, g as i, he as j, v as k, f as l, xt as m, z as n, vt as o, _ as p, xe as q, oe as r, ve as s, we as t, ne as u, Se as v, A as w, _e as x, N as y, un as z, Me as A, D as B, C, It as D, Oe as E, p as F, ge as G, Ee as H, gt as I, Ot as J, U as K, Le as L, Ft as M, hr as N, Y as O, q as P, et as Q, At as R, Tt as S, br as T, Ct as U, k as V, se as W, Rt as X, Pt as Y, jt as Z, R as _, Ve as $, Ne as aa, X as ba, j as ca, Mt as da, M as ea, Lt as fa, Mb as ga, $ as ha, dm as ia, Ue as ja, Vt as ka, Cm as la, Lm as ma, zm as na, Jm as oa, nl as pa, fl as qa, Ir as ra, G as sa, Nt as ta, Ut as ua, jl as va, ot as wa, ql as xa, nt as ya, Xl as za, Wt as Aa, iu as Ba, De as Ca, hu as Da, Su as Ea, Iu as Fa, le as Ga, H as Ha, Dt as Ia, Yt as Ja, it as Ka, Xu as La, rf as Ma, uf as Na, qt as Oa, bf as Pa, ue as Qa, Ff as Ra, Rf as Sa, Mf as Ta, st as Ua, $t as Va, Gf as Wa, Jf as Xa, Qf as Ya, oc as Za, mc as _a, hc as $a, _c as ab, Ic as bb, Gt as cb, Nc as db, Yc as eb, Bc as fb, Jc as gb, ep as hb, np as ib, Bt as jb, ap as kb, xp as lb, Ye as mb, Rr as nb, Op as ob, Tp as pb, Pp as qb, Vp as rb, zp as sb, $p as tb, Jp as ub, ta as vb, la as wb, da as xb, Sa as yb, Fa as zb, Kt as Ab, Va as Bb, za as Cb, Ga as Db, Jt as Eb, td as Fb, ld as Gb, cd as Hb, bd as Ib, _d as Jb, Id as Kb, Rd as Lb, Q as Mb, Ud as Nb, Yd as Ob, Bd as Pb, Qd as Qb, oh as Rb, uh as Sb, Xt as Tb, vh as Ub, gh as Vb, Ah as Wb, Ph as Xb, Uh as Yb, qh as Zb, eb as _b, ub as $b, hb as ac, gb as bc, Fb as cc, Ht as dc, kb as ec };
