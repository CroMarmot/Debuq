import { a as h, b as P, d as R, e as T, g as Je, h as S, i as Xe, j as je, k as re, l as O, m as oe, n as w, p as g, r as ne, s as ie } from "@nf-internal/chunk-EBC4UINO";
function Le(e) { return h(e?.lift); }
function f(e) { return t => { if (Le(t))
    return t.lift(function (r) { try {
        return e(r, this);
    }
    catch (o) {
        this.error(o);
    } }); throw new TypeError("Unable to lift unknown Observable type"); }; }
function u(e, t, r, o, n) { return new G(e, t, r, o, n); }
var G = class extends Xe {
    constructor(t, r, o, n, i, m) { super(t), this.onFinalize = i, this.shouldUnsubscribe = m, this._next = r ? function (p) { try {
        r(p);
    }
    catch (l) {
        t.error(l);
    } } : super._next, this._error = n ? function (p) { try {
        n(p);
    }
    catch (l) {
        t.error(l);
    }
    finally {
        this.unsubscribe();
    } } : super._error, this._complete = o ? function () { try {
        o();
    }
    catch (p) {
        t.error(p);
    }
    finally {
        this.unsubscribe();
    } } : super._complete; }
    unsubscribe() { var t; if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        let { closed: r } = this;
        super.unsubscribe(), !r && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    } }
};
function Qe() { return f((e, t) => { let r = null; e._refCount++; let o = u(t, void 0, void 0, void 0, () => { if (!e || e._refCount <= 0 || 0 < --e._refCount) {
    r = null;
    return;
} let n = e._connection, i = r; r = null, n && (!i || n === i) && n.unsubscribe(), t.unsubscribe(); }); e.subscribe(o), o.closed || (r = e.connect()); }); }
var W = class extends w {
    constructor(t, r) { super(), this.source = t, this.subjectFactory = r, this._subject = null, this._refCount = 0, this._connection = null, Le(t) && (this.lift = t.lift); }
    _subscribe(t) { return this.getSubject().subscribe(t); }
    getSubject() { let t = this._subject; return (!t || t.isStopped) && (this._subject = this.subjectFactory()), this._subject; }
    _teardown() { this._refCount = 0; let { _connection: t } = this; this._subject = this._connection = null, t?.unsubscribe(); }
    connect() { let t = this._connection; if (!t) {
        t = this._connection = new T;
        let r = this.getSubject();
        t.add(this.source.subscribe(u(r, void 0, () => { this._teardown(), r.complete(); }, o => { this._teardown(), r.error(o); }, () => this._teardown()))), t.closed && (this._connection = null, t = T.EMPTY);
    } return t; }
    refCount() { return Qe()(this); }
};
var me = class extends g {
    constructor(t) { super(), this._value = t; }
    get value() { return this.getValue(); }
    _subscribe(t) { let r = super._subscribe(t); return !r.closed && t.next(this._value), r; }
    getValue() { let { hasError: t, thrownError: r, _value: o } = this; if (t)
        throw r; return this._throwIfClosed(), o; }
    next(t) { super.next(this._value = t); }
};
var le = class extends g {
    constructor() { super(...arguments), this._value = null, this._hasValue = !1, this._isComplete = !1; }
    _checkFinalizedStatuses(t) { let { hasError: r, _hasValue: o, _value: n, thrownError: i, isStopped: m, _isComplete: p } = this; r ? t.error(i) : (m || p) && (o && t.next(n), t.complete()); }
    next(t) { this.isStopped || (this._value = t, this._hasValue = !0); }
    complete() { let { _hasValue: t, _value: r, _isComplete: o } = this; o || (this._isComplete = !0, t && super.next(r), super.complete()); }
};
var J = class e {
    constructor(t, r = e.now) { this.schedulerActionCtor = t, this.now = r; }
    schedule(t, r = 0, o) { return new this.schedulerActionCtor(this, t).schedule(o, r); }
};
J.now = ne.now;
var fe = class extends T {
    constructor(t, r) { super(); }
    schedule(t, r = 0) { return this; }
};
var te = { setInterval(e, t, ...r) { let { delegate: o } = te; return o?.setInterval ? o.setInterval(e, t, ...r) : setInterval(e, t, ...r); }, clearInterval(e) { let { delegate: t } = te; return (t?.clearInterval || clearInterval)(e); }, delegate: void 0 };
var ue = class extends fe {
    constructor(t, r) { super(t, r), this.scheduler = t, this.work = r, this.pending = !1; }
    schedule(t, r = 0) { var o; if (this.closed)
        return this; this.state = t; let n = this.id, i = this.scheduler; return n != null && (this.id = this.recycleAsyncId(i, n, r)), this.pending = !0, this.delay = r, this.id = (o = this.id) !== null && o !== void 0 ? o : this.requestAsyncId(i, this.id, r), this; }
    requestAsyncId(t, r, o = 0) { return te.setInterval(t.flush.bind(t, this), o); }
    recycleAsyncId(t, r, o = 0) { if (o != null && this.delay === o && this.pending === !1)
        return r; r != null && te.clearInterval(r); }
    execute(t, r) { if (this.closed)
        return new Error("executing a cancelled action"); this.pending = !1; let o = this._execute(t, r); if (o)
        return o; this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null)); }
    _execute(t, r) { let o = !1, n; try {
        this.work(t);
    }
    catch (i) {
        o = !0, n = i || new Error("Scheduled action threw falsy error");
    } if (o)
        return this.unsubscribe(), n; }
    unsubscribe() { if (!this.closed) {
        let { id: t, scheduler: r } = this, { actions: o } = r;
        this.work = this.state = this.scheduler = null, this.pending = !1, R(o, this), t != null && (this.id = this.recycleAsyncId(r, t, null)), this.delay = null, super.unsubscribe();
    } }
};
var pe = class extends J {
    constructor(t, r = J.now) { super(t, r), this.actions = [], this._active = !1; }
    flush(t) { let { actions: r } = this; if (this._active) {
        r.push(t);
        return;
    } let o; this._active = !0; do
        if (o = t.execute(t.state, t.delay))
            break;
    while (t = r.shift()); if (this._active = !1, o) {
        for (; t = r.shift();)
            t.unsubscribe();
        throw o;
    } }
};
var A = new pe(ue), ce = A;
var V = new w(e => e.complete());
function Pr(e) { return e ? kt(e) : V; }
function kt(e) { return new w(t => e.schedule(() => t.complete())); }
function _(e, t, r, o = 0, n = !1) { let i = t.schedule(function () { r(), n ? e.add(this.schedule(null, o)) : this.unsubscribe(); }, o); if (e.add(i), !n)
    return i; }
function se(e, t = 0) { return f((r, o) => { r.subscribe(u(o, n => _(o, e, () => o.next(n), t), () => _(o, e, () => o.complete(), t), n => _(o, e, () => o.error(n), t))); }); }
function ae(e, t = 0) { return f((r, o) => { o.add(e.schedule(() => r.subscribe(o), t)); }); }
import { __asyncValues as Mt, __awaiter as Vt } from "tslib";
var de = e => e && typeof e.length == "number" && typeof e != "function";
function he(e) { return h(e?.then); }
function be(e) { return h(e[re]); }
function xe(e) { return Symbol.asyncIterator && h(e?.[Symbol.asyncIterator]); }
function ye(e) { return new TypeError(`You provided ${e !== null && typeof e == "object" ? "an invalid object" : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`); }
function jt() { return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator; }
var ve = jt();
function we(e) { return h(e?.[ve]); }
import { __asyncGenerator as Lt, __await as Me } from "tslib";
function Se(e) { return Lt(this, arguments, function* () { let r = e.getReader(); try {
    for (;;) {
        let { value: o, done: n } = yield Me(r.read());
        if (n)
            return yield Me(void 0);
        yield yield Me(o);
    }
}
finally {
    r.releaseLock();
} }); }
function ge(e) { return h(e?.getReader); }
function s(e) { if (e instanceof w)
    return e; if (e != null) {
    if (be(e))
        return Nt(e);
    if (de(e))
        return Pt(e);
    if (he(e))
        return Wt(e);
    if (xe(e))
        return Be(e);
    if (we(e))
        return Ut(e);
    if (ge(e))
        return qt(e);
} throw ye(e); }
function Nt(e) { return new w(t => { let r = e[re](); if (h(r.subscribe))
    return r.subscribe(t); throw new TypeError("Provided object does not correctly implement Symbol.observable"); }); }
function Pt(e) { return new w(t => { for (let r = 0; r < e.length && !t.closed; r++)
    t.next(e[r]); t.complete(); }); }
function Wt(e) { return new w(t => { e.then(r => { t.closed || (t.next(r), t.complete()); }, r => t.error(r)).then(null, Je); }); }
function Ut(e) { return new w(t => { for (let r of e)
    if (t.next(r), t.closed)
        return; t.complete(); }); }
function Be(e) { return new w(t => { Dt(e, t).catch(r => t.error(r)); }); }
function qt(e) { return Be(Se(e)); }
function Dt(e, t) { var r, o, n, i; return Vt(this, void 0, void 0, function* () { try {
    for (r = Mt(e); o = yield r.next(), !o.done;) {
        let m = o.value;
        if (t.next(m), t.closed)
            return;
    }
}
catch (m) {
    n = { error: m };
}
finally {
    try {
        o && !o.done && (i = r.return) && (yield i.call(r));
    }
    finally {
        if (n)
            throw n.error;
    }
} t.complete(); }); }
function He(e, t) { return s(e).pipe(ae(t), se(t)); }
function et(e, t) { return s(e).pipe(ae(t), se(t)); }
function tt(e, t) { return new w(r => { let o = 0; return t.schedule(function () { o === e.length ? r.complete() : (r.next(e[o++]), r.closed || this.schedule()); }); }); }
function rt(e, t) { return new w(r => { let o; return _(r, t, () => { o = e[ve](), _(r, t, () => { let n, i; try {
    ({ value: n, done: i } = o.next());
}
catch (m) {
    r.error(m);
    return;
} i ? r.complete() : r.next(n); }, 0, !0); }), () => h(o?.return) && o.return(); }); }
function Oe(e, t) { if (!e)
    throw new Error("Iterable cannot be null"); return new w(r => { _(r, t, () => { let o = e[Symbol.asyncIterator](); _(r, t, () => { o.next().then(n => { n.done ? r.complete() : r.next(n.value); }); }, 0, !0); }); }); }
function ot(e, t) { return Oe(Se(e), t); }
function nt(e, t) { if (e != null) {
    if (be(e))
        return He(e, t);
    if (de(e))
        return tt(e, t);
    if (he(e))
        return et(e, t);
    if (xe(e))
        return Oe(e, t);
    if (we(e))
        return rt(e, t);
    if (ge(e))
        return ot(e, t);
} throw ye(e); }
function N(e, t) { return t ? nt(e, t) : s(e); }
function Ie(e) { return e && h(e.schedule); }
function Ve(e) { return e[e.length - 1]; }
function U(e) { return h(Ve(e)) ? e.pop() : void 0; }
function F(e) { return Ie(Ve(e)) ? e.pop() : void 0; }
function it(e, t) { return typeof Ve(e) == "number" ? e.pop() : t; }
function Ee(...e) { let t = F(e); return N(e, t); }
function mt(e, t) { let r = h(e) ? e : () => e, o = n => n.error(r()); return new w(t ? n => t.schedule(o, 0, n) : o); }
var zt = (function (e) { return e.NEXT = "N", e.ERROR = "E", e.COMPLETE = "C", e; })(zt || {}), q = class e {
    constructor(t, r, o) { this.kind = t, this.value = r, this.error = o, this.hasValue = t === "N"; }
    observe(t) { return Ne(this, t); }
    do(t, r, o) { let { kind: n, value: i, error: m } = this; return n === "N" ? t?.(i) : n === "E" ? r?.(m) : o?.(); }
    accept(t, r, o) { var n; return h((n = t) === null || n === void 0 ? void 0 : n.next) ? this.observe(t) : this.do(t, r, o); }
    toObservable() { let { kind: t, value: r, error: o } = this, n = t === "N" ? Ee(r) : t === "E" ? mt(() => o) : t === "C" ? V : 0; if (!n)
        throw new TypeError(`Unexpected notification kind ${t}`); return n; }
    static createNext(t) { return new e("N", t); }
    static createError(t) { return new e("E", void 0, t); }
    static createComplete() { return e.completeNotification; }
};
q.completeNotification = new q("C");
function Ne(e, t) { var r, o, n; let { kind: i, value: m, error: p } = e; if (typeof i != "string")
    throw new TypeError('Invalid notification, missing "kind"'); i === "N" ? (r = t.next) === null || r === void 0 || r.call(t, m) : i === "E" ? (o = t.error) === null || o === void 0 || o.call(t, p) : (n = t.complete) === null || n === void 0 || n.call(t); }
var D = P(e => function () { e(this), this.name = "EmptyError", this.message = "no elements in sequence"; });
var Pe = P(e => function () { e(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range"; });
var lt = P(e => function (r) { e(this), this.name = "NotFoundError", this.message = r; });
var ft = P(e => function (r) { e(this), this.name = "SequenceError", this.message = r; });
function X(e) { return e instanceof Date && !isNaN(e); }
var Yt = P(e => function (r = null) { e(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = r; });
function ut(e, t) { let { first: r, each: o, with: n = Gt, scheduler: i = t ?? A, meta: m = null } = X(e) ? { first: e } : typeof e == "number" ? { each: e } : e; if (r == null && o == null)
    throw new TypeError("No timeout provided."); return f((p, l) => { let c, a, x = null, v = 0, I = b => { a = _(l, i, () => { try {
    c.unsubscribe(), s(n({ meta: m, lastValue: x, seen: v })).subscribe(l);
}
catch (d) {
    l.error(d);
} }, b); }; c = p.subscribe(u(l, b => { a?.unsubscribe(), v++, l.next(x = b), o > 0 && I(o); }, void 0, void 0, () => { a?.closed || a?.unsubscribe(), x = null; })), !v && I(r != null ? typeof r == "number" ? r : +r - i.now() : o); }); }
function Gt(e) { throw new Yt(e); }
function k(e, t) { return f((r, o) => { let n = 0; r.subscribe(u(o, i => { o.next(e.call(t, i, n++)); })); }); }
var { isArray: $t } = Array, { getPrototypeOf: Kt, prototype: Zt, keys: Jt } = Object;
function pt(e) { if (e.length === 1) {
    let t = e[0];
    if ($t(t))
        return { args: t, keys: null };
    if (Xt(t)) {
        let r = Jt(t);
        return { args: r.map(o => t[o]), keys: r };
    }
} return { args: e, keys: null }; }
function Xt(e) { return e && typeof e == "object" && Kt(e) === Zt; }
var { isArray: Qt } = Array;
function Bt(e, t) { return Qt(t) ? e(...t) : e(t); }
function Q(e) { return k(t => Bt(e, t)); }
function ct(e, t) { return e.reduce((r, o, n) => (r[o] = t[n], r), {}); }
function at(...e) { let t = F(e), r = U(e), { args: o, keys: n } = pt(e); if (o.length === 0)
    return N([], t); let i = new w(We(o, t, n ? m => ct(n, m) : O)); return r ? i.pipe(Q(r)) : i; }
function We(e, t, r = O) { return o => { st(t, () => { let { length: n } = e, i = new Array(n), m = n, p = n; for (let l = 0; l < n; l++)
    st(t, () => { let c = N(e[l], t), a = !1; c.subscribe(u(o, x => { i[l] = x, a || (a = !0, p--), p || o.next(r(i.slice())); }, () => { --m || o.complete(); })); }, o); }, o); }; }
function st(e, t, r) { e ? _(r, e, t) : t(); }
function B(e, t, r, o, n, i, m, p) { let l = [], c = 0, a = 0, x = !1, v = () => { x && !l.length && !c && t.complete(); }, I = d => c < o ? b(d) : l.push(d), b = d => { i && t.next(d), c++; let y = !1; s(r(d, a++)).subscribe(u(t, E => { n?.(E), i ? I(E) : t.next(E); }, () => { y = !0; }, void 0, () => { if (y)
    try {
        for (c--; l.length && c < o;) {
            let E = l.shift();
            m ? _(t, m, () => b(E)) : b(E);
        }
        v();
    }
    catch (E) {
        t.error(E);
    } })); }; return e.subscribe(u(t, I, () => { x = !0, v(); })), () => { p?.(); }; }
function C(e, t, r = 1 / 0) { return h(t) ? C((o, n) => k((i, m) => t(o, i, n, m))(s(e(o, n))), r) : (typeof t == "number" && (r = t), f((o, n) => B(o, n, e, r))); }
function _e(e = 1 / 0) { return C(O, e); }
function Ae() { return _e(1); }
function $(...e) { return Ae()(N(e, F(e))); }
function j(e = 0, t, r = ce) { let o = -1; return t != null && (Ie(t) ? r = t : o = t), new w(n => { let i = X(e) ? +e - r.now() : e; i < 0 && (i = 0); let m = 0; return r.schedule(function () { n.closed || (n.next(m++), 0 <= o ? this.schedule(void 0, o) : n.complete()); }, i); }); }
function dt(e = 0, t = A) { return e < 0 && (e = 0), j(e, e, t); }
var { isArray: Ht } = Array;
function L(e) { return e.length === 1 && Ht(e[0]) ? e[0] : e; }
function ht(...e) { let t = L(e); return new w(r => { let o = 0, n = () => { if (o < t.length) {
    let i;
    try {
        i = s(t[o++]);
    }
    catch {
        n();
        return;
    }
    let m = new G(r, void 0, S, S);
    i.subscribe(m), m.add(n);
}
else
    r.complete(); }; n(); }); }
function z(e, t) { return f((r, o) => { let n = 0; r.subscribe(u(o, i => e.call(t, i, n++) && o.next(i))); }); }
function Gi(...e) { return e = L(e), e.length === 1 ? s(e[0]) : new w(Ue(e)); }
function Ue(e) { return t => { let r = []; for (let o = 0; r && !t.closed && o < e.length; o++)
    r.push(s(e[o]).subscribe(u(t, n => { if (r) {
        for (let i = 0; i < r.length; i++)
            i !== o && r[i].unsubscribe();
        r = null;
    } t.next(n); }))); }; }
function Fe(...e) { let t = U(e), r = L(e); return r.length ? new w(o => { let n = r.map(() => []), i = r.map(() => !1); o.add(() => { n = i = null; }); for (let m = 0; !o.closed && m < r.length; m++)
    s(r[m]).subscribe(u(o, p => { if (n[m].push(p), n.every(l => l.length)) {
        let l = n.map(c => c.shift());
        o.next(t ? t(...l) : l), n.some((c, a) => !c.length && i[a]) && o.complete();
    } }, () => { i[m] = !0, !n[m].length && o.complete(); })); return () => { n = i = null; }; }) : V; }
function bt(e) { return f((t, r) => { let o = !1, n = null, i = null, m = !1, p = () => { if (i?.unsubscribe(), i = null, o) {
    o = !1;
    let c = n;
    n = null, r.next(c);
} m && r.complete(); }, l = () => { i = null, m && r.complete(); }; t.subscribe(u(r, c => { o = !0, n = c, i || s(e(c)).subscribe(i = u(r, p, l)); }, () => { m = !0, (!o || !i || i.closed) && r.complete(); })); }); }
function lm(e, t = A) { return bt(() => j(e, t)); }
function am(e) { return f((t, r) => { let o = []; return t.subscribe(u(r, n => o.push(n), () => { r.next(o), r.complete(); })), s(e).subscribe(u(r, () => { let n = o; o = [], r.next(n); }, S)), () => { o = null; }; }); }
function ym(e, t = null) { return t = t ?? e, f((r, o) => { let n = [], i = 0; r.subscribe(u(o, m => { let p = null; i++ % t === 0 && n.push([]); for (let l of n)
    l.push(m), e <= l.length && (p = p ?? [], p.push(l)); if (p)
    for (let l of p)
        R(n, l), o.next(l); }, () => { for (let m of n)
    o.next(m); o.complete(); }, void 0, () => { n = null; })); }); }
function Am(e, ...t) { var r, o; let n = (r = F(t)) !== null && r !== void 0 ? r : A, i = (o = t[0]) !== null && o !== void 0 ? o : null, m = t[1] || 1 / 0; return f((p, l) => { let c = [], a = !1, x = b => { let { buffer: d, subs: y } = b; y.unsubscribe(), R(c, b), l.next(d), a && v(); }, v = () => { if (c) {
    let b = new T;
    l.add(b);
    let y = { buffer: [], subs: b };
    c.push(y), _(b, n, () => x(y), e);
} }; i !== null && i >= 0 ? _(l, n, v, i, !0) : a = !0, v(); let I = u(l, b => { let d = c.slice(); for (let y of d) {
    let { buffer: E } = y;
    E.push(b), m <= E.length && x(y);
} }, () => { for (; c?.length;)
    l.next(c.shift().buffer); I?.unsubscribe(), l.complete(), l.unsubscribe(); }, void 0, () => c = null); p.subscribe(I); }); }
function Mm(e, t) { return f((r, o) => { let n = []; s(e).subscribe(u(o, i => { let m = []; n.push(m); let p = new T, l = () => { R(n, m), o.next(m), p.unsubscribe(); }; p.add(s(t(i)).subscribe(u(o, l, S))); }, S)), r.subscribe(u(o, i => { for (let m of n)
    m.push(i); }, () => { for (; n.length > 0;)
    o.next(n.shift()); o.complete(); })); }); }
function qm(e) { return f((t, r) => { let o = null, n = null, i = () => { n?.unsubscribe(); let m = o; o = [], m && r.next(m), s(e()).subscribe(n = u(r, i, S)); }; i(), t.subscribe(u(r, m => o?.push(m), () => { o && r.next(o), r.complete(); }, void 0, () => o = n = null)); }); }
function er(e) { return f((t, r) => { let o = null, n = !1, i; o = t.subscribe(u(r, void 0, void 0, m => { i = s(e(m, er(e)(t))), o ? (o.unsubscribe(), o = null, i.subscribe(r)) : n = !0; })), n && (o.unsubscribe(), o = null, i.subscribe(r)); }); }
function Ce(e, t, r, o, n) { return (i, m) => { let p = r, l = t, c = 0; i.subscribe(u(m, a => { let x = c++; l = p ? e(l, a, x) : (p = !0, a), o && m.next(l); }, n && (() => { p && m.next(l), m.complete(); }))); }; }
function Y(e, t) { return f(Ce(e, t, arguments.length >= 2, !1, !0)); }
var tr = (e, t) => (e.push(t), e);
function xt() { return f((e, t) => { Y(tr, [])(e).subscribe(t); }); }
function Te(e, t) { return oe(xt(), C(r => e(r)), t ? Q(t) : O); }
function yt(e) { return Te(at, e); }
var cl = yt;
function qe(...e) { let t = U(e); return t ? oe(qe(...e), Q(t)) : f((r, o) => { We([r, ...L(e)])(o); }); }
function Sl(...e) { return qe(...e); }
function De(e, t) { return h(t) ? C(e, t, 1) : C(e, 1); }
function Fl(e, t) { return h(t) ? De(() => e, t) : De(() => e); }
function vt(...e) { let t = F(e); return f((r, o) => { Ae()(N([r, ...e], t)).subscribe(o); }); }
function Vl(...e) { return vt(...e); }
function wt(e) { return new w(t => e.subscribe(t)); }
var rr = { connector: () => new g };
function Re(e, t = rr) { let { connector: r } = t; return f((o, n) => { let i = r(); s(e(wt(i))).subscribe(n), n.add(o.subscribe(i)); }); }
function $l(e) { return Y((t, r, o) => !e || e(r, o) ? t + 1 : t, 0); }
function Bl(e) { return f((t, r) => { let o = !1, n = null, i = null, m = () => { if (i?.unsubscribe(), i = null, o) {
    o = !1;
    let p = n;
    n = null, r.next(p);
} }; t.subscribe(u(r, p => { i?.unsubscribe(), o = !0, n = p, i = u(r, m, S), s(e(p)).subscribe(i); }, () => { m(), r.complete(); }, void 0, () => { n = i = null; })); }); }
function of(e, t = A) { return f((r, o) => { let n = null, i = null, m = null, p = () => { if (n) {
    n.unsubscribe(), n = null;
    let c = i;
    i = null, o.next(c);
} }; function l() { let c = m + e, a = t.now(); if (a < c) {
    n = this.schedule(void 0, c - a), o.add(n);
    return;
} p(); } r.subscribe(u(o, c => { i = c, m = t.now(), n || (n = t.schedule(l, e), o.add(n)); }, () => { p(), o.complete(); }, void 0, () => { i = n = null; })); }); }
function H(e) { return f((t, r) => { let o = !1; t.subscribe(u(r, n => { o = !0, r.next(n); }, () => { o || r.next(e), r.complete(); })); }); }
function K(e) { return e <= 0 ? () => V : f((t, r) => { let o = 0; t.subscribe(u(r, n => { ++o <= e && (r.next(n), e <= o && r.complete()); })); }); }
function St() { return f((e, t) => { e.subscribe(u(t, S)); }); }
function gt(e) { return k(() => e); }
function ze(e, t) { return t ? r => $(t.pipe(K(1), St()), r.pipe(ze(e))) : C((r, o) => s(e(r, o)).pipe(K(1), gt(r))); }
function Cf(e, t = A) { let r = j(e, t); return ze(() => r); }
function Lf() { return f((e, t) => { e.subscribe(u(t, r => Ne(r, t))); }); }
function Uf(e, t) { return f((r, o) => { let n = new Set; r.subscribe(u(o, i => { let m = e ? e(i) : i; n.has(m) || (n.add(m), o.next(i)); })), t && s(t).subscribe(u(o, () => n.clear(), S)); }); }
function Ot(e, t = O) { return e = e ?? or, f((r, o) => { let n, i = !0; r.subscribe(u(o, m => { let p = t(m); (i || !e(n, p)) && (i = !1, n = p, o.next(m)); })); }); }
function or(e, t) { return e === t; }
function Kf(e, t) { return Ot((r, o) => t ? t(r[e], o[e]) : r[e] === o[e]); }
function ee(e = nr) { return f((t, r) => { let o = !1; t.subscribe(u(r, n => { o = !0, r.next(n); }, () => o ? r.complete() : r.error(e()))); }); }
function nr() { return new D; }
function nu(e, t) { if (e < 0)
    throw new Pe; let r = arguments.length >= 2; return o => o.pipe(z((n, i) => i === e), K(1), r ? H(t) : ee(() => new Pe)); }
function fu(...e) { return t => $(t, Ee(...e)); }
function su(e, t) { return f((r, o) => { let n = 0; r.subscribe(u(o, i => { e.call(t, i, n++, r) || (o.next(!1), o.complete()); }, () => { o.next(!0), o.complete(); })); }); }
function Ye(e, t) { return t ? r => r.pipe(Ye((o, n) => s(e(o, n)).pipe(k((i, m) => t(o, i, n, m))))) : f((r, o) => { let n = 0, i = null, m = !1; r.subscribe(u(o, p => { i || (i = u(o, void 0, () => { i = null, m && o.complete(); }), s(e(p, n++)).subscribe(i)); }, () => { m = !0, !i && o.complete(); })); }); }
function It() { return Ye(O); }
var Ou = It;
function Au(e, t = 1 / 0, r) { return t = (t || 0) < 1 ? 1 / 0 : t, f((o, n) => B(o, n, e, t, void 0, !0, r)); }
function Tu(e) { return f((t, r) => { try {
    t.subscribe(r);
}
finally {
    r.add(e);
} }); }
function Lu(e, t) { return f(Ge(e, t, "value")); }
function Ge(e, t, r) { let o = r === "index"; return (n, i) => { let m = 0; n.subscribe(u(i, p => { let l = m++; e.call(t, p, l, n) && (i.next(o ? l : p), i.complete()); }, () => { i.next(o ? -1 : void 0), i.complete(); })); }; }
function Pu(e, t) { return f(Ge(e, t, "index")); }
function $u(e, t) { let r = arguments.length >= 2; return o => o.pipe(e ? z((n, i) => e(n, i, o)) : O, K(1), r ? H(t) : ee(() => new D)); }
function Hu(e, t, r, o) { return f((n, i) => { let m; !t || typeof t == "function" ? m = t : { duration: r, element: m, connector: o } = t; let p = new Map, l = b => { p.forEach(b), b(i); }, c = b => l(d => d.error(b)), a = 0, x = !1, v = new G(i, b => { try {
    let d = e(b), y = p.get(d);
    if (!y) {
        p.set(d, y = o ? o() : new g);
        let E = I(d, y);
        if (i.next(E), r) {
            let M = u(y, () => { y.complete(), M?.unsubscribe(); }, void 0, void 0, () => p.delete(d));
            v.add(s(r(E)).subscribe(M));
        }
    }
    y.next(m ? m(b) : b);
}
catch (d) {
    c(d);
} }, () => l(b => b.complete()), c, () => p.clear(), () => (x = !0, a === 0)); n.subscribe(v); function I(b, d) { let y = new w(E => { a++; let M = d.subscribe(E); return () => { M.unsubscribe(), --a === 0 && x && v.unsubscribe(); }; }); return y.key = b, y; } }); }
function op() { return f((e, t) => { e.subscribe(u(t, () => { t.next(!1), t.complete(); }, () => { t.next(!0), t.complete(); })); }); }
function Et(e) { return e <= 0 ? () => V : f((t, r) => { let o = []; t.subscribe(u(r, n => { o.push(n), e < o.length && o.shift(); }, () => { for (let n of o)
    r.next(n); r.complete(); }, void 0, () => { o = null; })); }); }
function hp(e, t) { let r = arguments.length >= 2; return o => o.pipe(e ? z((n, i) => e(n, i, o)) : O, Et(1), r ? H(t) : ee(() => new D)); }
function wp() { return f((e, t) => { e.subscribe(u(t, r => { t.next(q.createNext(r)); }, () => { t.next(q.createComplete()), t.complete(); }, r => { t.next(q.createError(r)), t.complete(); })); }); }
function Ip(e) { return Y(h(e) ? (t, r) => e(t, r) > 0 ? t : r : (t, r) => t > r ? t : r); }
var Ap = C;
function Rp(e, t, r = 1 / 0) { return h(t) ? C(() => e, t, r) : (typeof t == "number" && (r = t), C(() => e, r)); }
function Mp(e, t, r = 1 / 0) { return f((o, n) => { let i = t; return B(o, n, (m, p) => e(i, m, p), r, m => { i = m; }, !1, void 0, () => i = null); }); }
function _t(...e) { let t = F(e), r = it(e, 1 / 0); return e = L(e), f((o, n) => { _e(r)(N([o, ...e], t)).subscribe(n); }); }
function Yp(...e) { return _t(...e); }
function Zp(e) { return Y(h(e) ? (t, r) => e(t, r) < 0 ? t : r : (t, r) => t < r ? t : r); }
function ke(e, t) { let r = h(e) ? e : () => e; return h(t) ? Re(t, { connector: r }) : o => new W(o, r); }
function ir(...e) { let t = L(e); return r => ht(r, ...t); }
var rc = ir;
function mc() { return f((e, t) => { let r, o = !1; e.subscribe(u(t, n => { let i = r; r = n, o && t.next([i, n]), o = !0; })); }); }
function uc(...e) { let t = e.length; if (t === 0)
    throw new Error("list of properties cannot be empty."); return k(r => { let o = r; for (let n = 0; n < t; n++) {
    let i = o?.[e[n]];
    if (typeof i < "u")
        o = i;
    else
        return;
} return o; }); }
function dc(e) { return e ? t => Re(e)(t) : t => ke(new g)(t); }
function yc(e) { return t => { let r = new me(e); return new W(t, () => r); }; }
function gc() { return e => { let t = new le; return new W(e, () => t); }; }
function Ac(e, t, r, o) { r && !h(r) && (o = r); let n = h(r) ? r : void 0; return i => ke(new ie(e, t, o), n)(i); }
function kc(...e) { return e.length ? f((t, r) => { Ue([t, ...e])(r); }) : O; }
function Wc(e) { let t = 1 / 0, r; return e != null && (typeof e == "object" ? { count: t = 1 / 0, delay: r } = e : t = e), t <= 0 ? () => V : f((o, n) => { let i = 0, m, p = () => { if (m?.unsubscribe(), m = null, r != null) {
    let c = typeof r == "number" ? j(r) : s(r(i)), a = u(n, () => { a.unsubscribe(), l(); });
    c.subscribe(a);
}
else
    l(); }, l = () => { let c = !1; m = o.subscribe(u(n, void 0, () => { ++i < t ? m ? p() : c = !0 : n.complete(); })), c && p(); }; l(); }); }
function Gc(e) { return f((t, r) => { let o, n = !1, i, m = !1, p = !1, l = () => p && m && (r.complete(), !0), c = () => (i || (i = new g, s(e(i)).subscribe(u(r, () => { o ? a() : n = !0; }, () => { m = !0, l(); }))), i), a = () => { p = !1, o = t.subscribe(u(r, void 0, () => { p = !0, !l() && c().next(); })), n && (o.unsubscribe(), o = null, n = !1, a()); }; a(); }); }
function Bc(e = 1 / 0) { let t; e && typeof e == "object" ? t = e : t = { count: e }; let { count: r = 1 / 0, delay: o, resetOnSuccess: n = !1 } = t; return r <= 0 ? O : f((i, m) => { let p = 0, l, c = () => { let a = !1; l = i.subscribe(u(m, x => { n && (p = 0), m.next(x); }, void 0, x => { if (p++ < r) {
    let v = () => { l ? (l.unsubscribe(), l = null, c()) : a = !0; };
    if (o != null) {
        let I = typeof o == "number" ? j(o) : s(o(x, p)), b = u(m, () => { b.unsubscribe(), v(); }, () => { m.complete(); });
        I.subscribe(b);
    }
    else
        v();
}
else
    m.error(x); })), a && (l.unsubscribe(), l = null, c()); }; c(); }); }
function ns(e) { return f((t, r) => { let o, n = !1, i, m = () => { o = t.subscribe(u(r, void 0, void 0, p => { i || (i = new g, s(e(i)).subscribe(u(r, () => o ? m() : n = !0))), i && i.next(p); })), n && (o.unsubscribe(), o = null, n = !1, m()); }; m(); }); }
function At(e) { return f((t, r) => { let o = !1, n = null; t.subscribe(u(r, i => { o = !0, n = i; })), s(e).subscribe(u(r, () => { if (o) {
    o = !1;
    let i = n;
    n = null, r.next(i);
} }, S)); }); }
function ds(e, t = A) { return At(dt(e, t)); }
function ys(e, t) { return f(Ce(e, t, arguments.length >= 2, !0)); }
function Os(e, t = (r, o) => r === o) { return f((r, o) => { let n = Ft(), i = Ft(), m = l => { o.next(l), o.complete(); }, p = (l, c) => { let a = u(o, x => { let { buffer: v, complete: I } = c; v.length === 0 ? I ? m(!1) : l.buffer.push(x) : !t(x, v.shift()) && m(!1); }, () => { l.complete = !0; let { complete: x, buffer: v } = c; x && m(v.length === 0), a?.unsubscribe(); }); return a; }; r.subscribe(p(n, i)), s(e).subscribe(p(i, n)); }); }
function Ft() { return { buffer: [], complete: !1 }; }
function Ct(e = {}) { let { connector: t = () => new g, resetOnError: r = !0, resetOnComplete: o = !0, resetOnRefCountZero: n = !0 } = e; return i => { let m, p, l, c = 0, a = !1, x = !1, v = () => { p?.unsubscribe(), p = void 0; }, I = () => { v(), m = l = void 0, a = x = !1; }, b = () => { let d = m; I(), d?.unsubscribe(); }; return f((d, y) => { c++, !x && !a && v(); let E = l = l ?? t(); y.add(() => { c--, c === 0 && !x && !a && (p = $e(b, n)); }), E.subscribe(y), !m && c > 0 && (m = new je({ next: M => E.next(M), error: M => { x = !0, v(), p = $e(I, r, M), E.error(M); }, complete: () => { a = !0, v(), p = $e(I, o), E.complete(); } }), s(d).subscribe(m)); })(i); }; }
function $e(e, t, ...r) { if (t === !0) {
    e();
    return;
} if (t === !1)
    return; let o = new je({ next: () => { o.unsubscribe(), e(); } }); return s(t(...r)).subscribe(o); }
function ks(e, t, r) { let o, n = !1; return e && typeof e == "object" ? { bufferSize: o = 1 / 0, windowTime: t = 1 / 0, refCount: n = !1, scheduler: r } = e : o = e ?? 1 / 0, Ct({ connector: () => new ie(o, t, r), resetOnError: !0, resetOnComplete: !1, resetOnRefCountZero: n }); }
function Ws(e) { return f((t, r) => { let o = !1, n, i = !1, m = 0; t.subscribe(u(r, p => { i = !0, (!e || e(p, m++, t)) && (o && r.error(new ft("Too many matching values")), o = !0, n = p); }, () => { o ? (r.next(n), r.complete()) : r.error(i ? new lt("No matching values") : new D); })); }); }
function Ds(e) { return z((t, r) => e <= r); }
function Ks(e) { return e <= 0 ? O : f((t, r) => { let o = new Array(e), n = 0; return t.subscribe(u(r, i => { let m = n++; if (m < e)
    o[m] = i;
else {
    let p = m % e, l = o[p];
    o[p] = i, r.next(l);
} })), () => { o = null; }; }); }
function Hs(e) { return f((t, r) => { let o = !1, n = u(r, () => { n?.unsubscribe(), o = !0; }, S); s(e).subscribe(n), t.subscribe(u(r, i => o && r.next(i))); }); }
function oa(e) { return f((t, r) => { let o = !1, n = 0; t.subscribe(u(r, i => (o || (o = !e(i, n++))) && r.next(i))); }); }
function fa(...e) { let t = F(e); return f((r, o) => { (t ? $(e, r, t) : $(e, r)).subscribe(o); }); }
function Z(e, t) { return f((r, o) => { let n = null, i = 0, m = !1, p = () => m && !n && o.complete(); r.subscribe(u(o, l => { n?.unsubscribe(); let c = 0, a = i++; s(e(l, a)).subscribe(n = u(o, x => o.next(t ? t(l, x, a, c++) : x), () => { n = null, p(); })); }, () => { m = !0, p(); })); }); }
function ba() { return Z(O); }
function wa(e, t) { return h(t) ? Z(() => e, t) : Z(() => e); }
function Ia(e, t) { return f((r, o) => { let n = t; return Z((i, m) => e(n, i, m), (i, m) => (n = m, m))(r).subscribe(o), () => { n = null; }; }); }
function Ta(e) { return f((t, r) => { s(e).subscribe(u(r, () => r.complete(), S)), !r.closed && t.subscribe(r); }); }
function La(e, t = !1) { return f((r, o) => { let n = 0; r.subscribe(u(o, i => { let m = e(i, n++); (m || t) && o.next(i), !m && o.complete(); })); }); }
function Ua(e, t, r) { let o = h(e) || t || r ? { next: e, error: t, complete: r } : e; return o ? f((n, i) => { var m; (m = o.subscribe) === null || m === void 0 || m.call(o); let p = !0; n.subscribe(u(i, l => { var c; (c = o.next) === null || c === void 0 || c.call(o, l), i.next(l); }, () => { var l; p = !1, (l = o.complete) === null || l === void 0 || l.call(o), i.complete(); }, l => { var c; p = !1, (c = o.error) === null || c === void 0 || c.call(o, l), i.error(l); }, () => { var l, c; p && ((l = o.unsubscribe) === null || l === void 0 || l.call(o)), (c = o.finalize) === null || c === void 0 || c.call(o); })); }) : O; }
var Ke = { leading: !0, trailing: !1 };
function Tt(e, t = Ke) { return f((r, o) => { let { leading: n, trailing: i } = t, m = !1, p = null, l = null, c = !1, a = () => { l?.unsubscribe(), l = null, i && (I(), c && o.complete()); }, x = () => { l = null, c && o.complete(); }, v = b => l = s(e(b)).subscribe(u(o, a, x)), I = () => { if (m) {
    m = !1;
    let b = p;
    p = null, o.next(b), !c && v(b);
} }; r.subscribe(u(o, b => { m = !0, p = b, !(l && !l.closed) && (n ? I() : v(b)); }, () => { c = !0, !(i && m && l && !l.closed) && o.complete(); })); }); }
function Ja(e, t = A, r = Ke) { let o = j(e, t); return Tt(() => o, r); }
function ed(e = A) { return f((t, r) => { let o = e.now(); t.subscribe(u(r, n => { let i = e.now(), m = i - o; o = i, r.next(new Ze(n, m)); })); }); }
var Ze = class {
    constructor(t, r) { this.value = t, this.interval = r; }
};
function id(e, t, r) { let o, n, i; if (r = r ?? ce, X(e) ? o = e : typeof e == "number" && (n = e), t)
    i = () => t;
else
    throw new TypeError("No observable provided to switch to"); if (o == null && n == null)
    throw new TypeError("No timeout provided."); return ut({ first: o, each: n, scheduler: r, with: i }); }
function ud(e = ne) { return k(t => ({ value: t, timestamp: e.now() })); }
function bd(e) { return f((t, r) => { let o = new g; r.next(o.asObservable()); let n = i => { o.error(i), r.error(i); }; return t.subscribe(u(r, i => o?.next(i), () => { o.complete(), r.complete(); }, n)), s(e).subscribe(u(r, () => { o.complete(), r.next(o = new g); }, S, n)), () => { o?.unsubscribe(), o = null; }; }); }
function Sd(e, t = 0) { let r = t > 0 ? t : e; return f((o, n) => { let i = [new g], m = [], p = 0; n.next(i[0].asObservable()), o.subscribe(u(n, l => { for (let a of i)
    a.next(l); let c = p - e + 1; if (c >= 0 && c % r === 0 && i.shift().complete(), ++p % r === 0) {
    let a = new g;
    i.push(a), n.next(a.asObservable());
} }, () => { for (; i.length > 0;)
    i.shift().complete(); n.complete(); }, l => { for (; i.length > 0;)
    i.shift().error(l); n.error(l); }, () => { m = null, i = null; })); }); }
function Rd(e, ...t) { var r, o; let n = (r = F(t)) !== null && r !== void 0 ? r : A, i = (o = t[0]) !== null && o !== void 0 ? o : null, m = t[1] || 1 / 0; return f((p, l) => { let c = [], a = !1, x = d => { let { window: y, subs: E } = d; y.complete(), E.unsubscribe(), R(c, d), a && v(); }, v = () => { if (c) {
    let d = new T;
    l.add(d);
    let y = new g, E = { window: y, subs: d, seen: 0 };
    c.push(E), l.next(y.asObservable()), _(d, n, () => x(E), e);
} }; i !== null && i >= 0 ? _(l, n, v, i, !0) : a = !0, v(); let I = d => c.slice().forEach(d), b = d => { I(({ window: y }) => d(y)), d(l), l.unsubscribe(); }; return p.subscribe(u(l, d => { I(y => { y.window.next(d), m <= ++y.seen && x(y); }); }, () => b(d => d.complete()), d => b(y => y.error(d)))), () => { c = null; }; }); }
function Ud(e, t) { return f((r, o) => { let n = [], i = m => { for (; 0 < n.length;)
    n.shift().error(m); o.error(m); }; s(e).subscribe(u(o, m => { let p = new g; n.push(p); let l = new T, c = () => { R(n, p), p.complete(), l.unsubscribe(); }, a; try {
    a = s(t(m));
}
catch (x) {
    i(x);
    return;
} o.next(p.asObservable()), l.add(a.subscribe(u(o, c, S, i))); }, S)), r.subscribe(u(o, m => { let p = n.slice(); for (let l of p)
    l.next(m); }, () => { for (; 0 < n.length;)
    n.shift().complete(); o.complete(); }, i, () => { for (; 0 < n.length;)
    n.shift().unsubscribe(); })); }); }
function $d(e) { return f((t, r) => { let o, n, i = p => { o.error(p), r.error(p); }, m = () => { n?.unsubscribe(), o?.complete(), o = new g, r.next(o.asObservable()); let p; try {
    p = s(e());
}
catch (l) {
    i(l);
    return;
} p.subscribe(n = u(r, m, m, i)); }; m(), t.subscribe(u(r, p => o.next(p), () => { o.complete(), r.complete(); }, i, () => { n?.unsubscribe(), o = null; })); }); }
function eh(...e) { let t = U(e); return f((r, o) => { let n = e.length, i = new Array(n), m = e.map(() => !1), p = !1; for (let l = 0; l < n; l++)
    s(e[l]).subscribe(u(o, c => { i[l] = c, !p && !m[l] && (m[l] = !0, (p = m.every(O)) && (m = null)); }, S)); r.subscribe(u(o, l => { if (p) {
    let c = [l, ...i];
    o.next(t ? t(...c) : c);
} })); }); }
function nh(e) { return Te(Fe, e); }
function Rt(...e) { return f((t, r) => { Fe(t, ...e).subscribe(r); }); }
function ph(...e) { return Rt(...e); }
function sh(e, t) { return (r, o) => !e.call(t, r, o); }
export { u as a, Qe as b, W as c, me as d, le as e, ue as f, J as g, pe as h, A as i, ce as j, V as k, Pr as l, Ie as m, U as n, F as o, it as p, de as q, s as r, se as s, ae as t, rt as u, nt as v, N as w, Ee as x, mt as y, zt as z, q as A, D as B, Pe as C, lt as D, ft as E, Yt as F, ut as G, k as H, Q as I, pt as J, ct as K, at as L, C as M, _e as N, Ae as O, $ as P, j as Q, dt as R, L as S, ht as T, sh as U, z as V, Gi as W, Fe as X, bt as Y, lm as Z, am as _, ym as $, Am as aa, Mm as ba, qm as ca, er as da, Y as ea, xt as fa, yt as ga, cl as ha, qe as ia, Sl as ja, De as ka, Fl as la, vt as ma, Vl as na, Re as oa, $l as pa, Bl as qa, of as ra, H as sa, K as ta, St as ua, gt as va, ze as wa, Cf as xa, Lf as ya, Uf as za, Ot as Aa, Kf as Ba, ee as Ca, nu as Da, fu as Ea, su as Fa, Ye as Ga, It as Ha, Ou as Ia, Au as Ja, Tu as Ka, Lu as La, Pu as Ma, $u as Na, Hu as Oa, op as Pa, Et as Qa, hp as Ra, wp as Sa, Ip as Ta, Ap as Ua, Rp as Va, Mp as Wa, _t as Xa, Yp as Ya, Zp as Za, ke as _a, ir as $a, rc as ab, mc as bb, uc as cb, dc as db, yc as eb, gc as fb, Ac as gb, kc as hb, Wc as ib, Gc as jb, Bc as kb, ns as lb, At as mb, ds as nb, ys as ob, Os as pb, Ct as qb, ks as rb, Ws as sb, Ds as tb, Ks as ub, Hs as vb, oa as wb, fa as xb, Z as yb, ba as zb, wa as Ab, Ia as Bb, Ta as Cb, La as Db, Ua as Eb, Tt as Fb, Ja as Gb, ed as Hb, id as Ib, ud as Jb, bd as Kb, Sd as Lb, Rd as Mb, Ud as Nb, $d as Ob, eh as Pb, nh as Qb, Rt as Rb, ph as Sb };
