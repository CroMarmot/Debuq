import { a as X, b as I, f as ee } from "@nf-internal/chunk-H7IFLRAH";
import { F as te, G as Oe, H as Se, I as Pe, J as Le, K as Ae, a as m, b as R, c as be, s as ne, w as Re, y as je } from "@nf-internal/chunk-SCGIWX7X";
import { a as V, b as $, e as K } from "@nf-internal/chunk-JKOY2XUY";
import { BehaviorSubject as Rn, Observable as jn } from "rxjs";
import { setActiveConsumer as T } from "@angular/core/primitives/signals";
import { isNotFound as On } from "@angular/core/primitives/di";
var oe = class {
    full;
    major;
    minor;
    patch;
    constructor(n) { this.full = n; let t = n.split("."); this.major = t[0], this.minor = t[1], this.patch = t.slice(2).join("."); }
}, ir = new oe("20.3.17");
var sr = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss", f = class extends Error {
    code;
    constructor(n, t) { super(me(n, t)), this.code = n; }
};
function Sn(e) { return `NG0${Math.abs(e)}`; }
function me(e, n) { return `${Sn(e)}${n ? ": " + n : ""}`; }
var ur = globalThis;
function c(e) { for (let n in e)
    if (e[n] === c)
        return n; throw Error(""); }
function cr(e, n) { for (let t in n)
    n.hasOwnProperty(t) && !e.hasOwnProperty(t) && (e[t] = n[t]); }
function O(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(O).join(", ")}]`;
    if (e == null)
        return "" + e;
    let n = e.overriddenName || e.name;
    if (n)
        return `${n}`;
    let t = e.toString();
    if (t == null)
        return "" + t;
    let r = t.indexOf(`
`);
    return r >= 0 ? t.slice(0, r) : t;
}
function ar(e, n) { return e ? n ? `${e} ${n}` : e : n || ""; }
function dr(e, n = 100) { if (!e || n < 1 || e.length <= n)
    return e; if (n == 1)
    return e.substring(0, 1) + "..."; let t = Math.round(n / 2); return e.substring(0, t) + "..." + e.substring(e.length - t); }
var Pn = c({ __forward_ref__: c });
function We(e) { return e.__forward_ref__ = We, e.toString = function () { return O(this()); }, e; }
function v(e) { return Ln(e) ? e() : e; }
function Ln(e) { return typeof e == "function" && e.hasOwnProperty(Pn) && e.__forward_ref__ === We; }
function lr(e, n, t) { e != n && ze(t, e, n, "=="); }
function ze(e, n, t, r) { throw new Error(`ASSERTION ERROR: ${e}` + (r == null ? "" : ` [Expected=> ${t} ${r} ${n} <=Actual]`)); }
function _(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; }
var fr = _;
function hr(e) { return { providers: e.providers || [], imports: e.imports || [] }; }
function z(e) { return An(e, Ye); }
function pr(e) { return z(e) !== null; }
function An(e, n) { return e.hasOwnProperty(n) && e[n] || null; }
function kn(e) { let n = e?.[Ye] ?? null; return n || null; }
function ke(e) { return e && e.hasOwnProperty(Ve) ? e[Ve] : null; }
var Ye = c({ \u0275prov: c }), Ve = c({ \u0275inj: c }), g = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(n, t) { this._desc = n, this.\u0275prov = void 0, typeof t == "number" ? this.__NG_ELEMENT_ID__ = t : t !== void 0 && (this.\u0275prov = _({ token: this, providedIn: t.providedIn || "root", factory: t.factory })); }
    get multi() { return this; }
    toString() { return `InjectionToken ${this._desc}`; }
}, $e;
function gr(e) { ze("setInjectorProfilerContext should never be called in production mode"); let n = $e; return $e = e, n; }
function Je(e) { return e && !!e.\u0275providers; }
var Vn = c({ \u0275cmp: c }), $n = c({ \u0275dir: c }), qn = c({ \u0275pipe: c }), Hn = c({ \u0275mod: c }), qe = c({ \u0275fac: c }), mr = c({ __NG_ELEMENT_ID__: c }), He = c({ __NG_ENV_ID__: c });
function Gn(e) { return typeof e == "string" ? e : e == null ? "" : String(e); }
function vr(e) { return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : Gn(e); }
var Ze = c({ ngErrorCode: c }), Bn = c({ ngErrorMessage: c }), Un = c({ ngTokenPath: c });
function Wn(e, n) { return Qe("", -200, n); }
function zn(e, n) { throw new f(-201, !1); }
function Qe(e, n, t) { let r = new f(n, e); return r[Ze] = n, r[Bn] = e, t && (r[Un] = t), r; }
function Yn(e) { return e[Ze]; }
var ie;
function Ke() { return ie; }
function E(e) { let n = ie; return ie = e, n; }
function Jn(e, n, t) { let r = z(e); if (r && r.providedIn == "root")
    return r.value === void 0 ? r.value = r.factory() : r.value; if (t & 8)
    return null; if (n !== void 0)
    return n; zn(e, "Injector"); }
var Zn = {}, w = Zn, se = "__NG_DI_FLAG__", ue = class {
    injector;
    constructor(n) { this.injector = n; }
    retrieve(n, t) { let r = H(t) || 0; try {
        return this.injector.get(n, r & 8 ? null : w, r);
    }
    catch (o) {
        if (ee(o))
            return o;
        throw o;
    } }
};
function Qn(e, n = 0) { let t = X(); if (t === void 0)
    throw new f(-203, !1); if (t === null)
    return Jn(e, void 0, n); {
    let r = Kn(n), o = t.retrieve(e, r);
    if (ee(o)) {
        if (r.optional)
            return null;
        throw o;
    }
    return o;
} }
function M(e, n = 0) { return (Ke() || Qn)(v(e), n); }
function yr(e) { throw new f(202, !1); }
function h(e, n) { return M(e, H(n)); }
function H(e) { return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4); }
function Kn(e) { return { optional: !!(e & 8), host: !!(e & 1), self: !!(e & 2), skipSelf: !!(e & 4) }; }
function ce(e) { let n = []; for (let t = 0; t < e.length; t++) {
    let r = v(e[t]);
    if (Array.isArray(r)) {
        if (r.length === 0)
            throw new f(900, !1);
        let o, i = 0;
        for (let u = 0; u < r.length; u++) {
            let l = r[u], a = Xn(l);
            typeof a == "number" ? a === -1 ? o = l.token : i |= a : o = l;
        }
        n.push(M(o, i));
    }
    else
        n.push(M(r));
} return n; }
function Ir(e, n) { return e[se] = n, e.prototype[se] = n, e; }
function Xn(e) { return e[se]; }
function G(e, n) { let t = e.hasOwnProperty(qe); return t ? e[qe] : null; }
function Er(e, n, t) { if (e.length !== n.length)
    return !1; for (let r = 0; r < e.length; r++) {
    let o = e[r], i = n[r];
    if (t && (o = t(o), i = t(i)), i !== o)
        return !1;
} return !0; }
function Dr(e) { return e.flat(Number.POSITIVE_INFINITY); }
function ve(e, n) { e.forEach(t => Array.isArray(t) ? ve(t, n) : n(t)); }
function wr(e, n, t) { n >= e.length ? e.push(t) : e.splice(n, 0, t); }
function Tr(e, n) { return n >= e.length - 1 ? e.pop() : e.splice(n, 1)[0]; }
function Nr(e, n) { let t = []; for (let r = 0; r < e; r++)
    t.push(n); return t; }
function xr(e, n, t) { let r = e.length - t; for (; n < r;)
    e[n] = e[n + t], n++; for (; t--;)
    e.pop(); }
function et(e, n, t, r) { let o = e.length; if (o == n)
    e.push(t, r);
else if (o === 1)
    e.push(r, e[0]), e[0] = t;
else {
    for (o--, e.push(e[o - 1], e[o]); o > n;) {
        let i = o - 2;
        e[o] = e[i], o--;
    }
    e[n] = t, e[n + 1] = r;
} }
function Mr(e, n, t) { let r = Xe(e, n); return r >= 0 ? e[r | 1] = t : (r = ~r, et(e, r, n, t)), r; }
function Cr(e, n) { let t = Xe(e, n); if (t >= 0)
    return e[t | 1]; }
function Xe(e, n) { return nt(e, n, 1); }
function nt(e, n, t) { let r = 0, o = e.length >> t; for (; o !== r;) {
    let i = r + (o - r >> 1), u = e[i << t];
    if (n === u)
        return i << t;
    u > n ? o = i : r = i + 1;
} return ~(o << t); }
var _r = {}, B = [], Y = new g(""), en = new g("", -1), nn = new g(""), U = class {
    get(n, t = w) { if (t === w) {
        let o = Qe("", -201);
        throw o.name = "\u0275NotFound", o;
    } return t; }
};
function tt(e) { return e[Hn] || null; }
function Fr(e) { let n = tt(e); if (!n)
    throw new f(915, !1); return n; }
function tn(e) { return e[Vn] || null; }
function rt(e) { return e[$n] || null; }
function ot(e) { return e[qn] || null; }
function br(e) { let n = tn(e) || rt(e) || ot(e); return n !== null && n.standalone; }
function rn(e) { return { \u0275providers: e }; }
function it(e) { return rn([{ provide: Y, multi: !0, useValue: e }]); }
function st(...e) { return { \u0275providers: ut(!0, e), \u0275fromNgModule: !0 }; }
function ut(e, ...n) { let t = [], r = new Set, o, i = u => { t.push(u); }; return ve(n, u => { let l = u; ae(l, i, [], r) && (o ||= [], o.push(l)); }), o !== void 0 && on(o, i), t; }
function on(e, n) { for (let t = 0; t < e.length; t++) {
    let { ngModule: r, providers: o } = e[t];
    ye(o, i => { n(i, r); });
} }
function ae(e, n, t, r) { if (e = v(e), !e)
    return !1; let o = null, i = ke(e), u = !i && tn(e); if (!i && !u) {
    let a = e.ngModule;
    if (i = ke(a), i)
        o = a;
    else
        return !1;
}
else {
    if (u && !u.standalone)
        return !1;
    o = e;
} let l = r.has(o); if (u) {
    if (l)
        return !1;
    if (r.add(o), u.dependencies) {
        let a = typeof u.dependencies == "function" ? u.dependencies() : u.dependencies;
        for (let d of a)
            ae(d, n, t, r);
    }
}
else if (i) {
    if (i.imports != null && !l) {
        r.add(o);
        let d;
        try {
            ve(i.imports, D => { ae(D, n, t, r) && (d ||= [], d.push(D)); });
        }
        finally { }
        d !== void 0 && on(d, n);
    }
    if (!l) {
        let d = G(o) || (() => new o);
        n({ provide: o, useFactory: d, deps: B }, o), n({ provide: nn, useValue: o, multi: !0 }, o), n({ provide: Y, useValue: () => M(o), multi: !0 }, o);
    }
    let a = i.providers;
    if (a != null && !l) {
        let d = e;
        ye(a, D => { n(D, d); });
    }
}
else
    return !1; return o !== e && e.providers !== void 0; }
function ye(e, n) { for (let t of e)
    Je(t) && (t = t.\u0275providers), Array.isArray(t) ? ye(t, n) : n(t); }
var ct = c({ provide: String, useValue: c });
function sn(e) { return e !== null && typeof e == "object" && ct in e; }
function at(e) { return !!(e && e.useExisting); }
function dt(e) { return !!(e && e.useFactory); }
function de(e) { return typeof e == "function"; }
function Rr(e) { return !!e.useClass; }
var lt = new g(""), q = {}, Ge = {}, re;
function un() { return re === void 0 && (re = new U), re; }
var S = class {
}, W = class extends S {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() { return this._destroyed; }
    _destroyed = !1;
    injectorDefTypes;
    constructor(n, t, r, o) { super(), this.parent = t, this.source = r, this.scopes = o, fe(n, u => this.processProvider(u)), this.records.set(en, N(void 0, this)), o.has("environment") && this.records.set(S, N(void 0, this)); let i = this.records.get(lt); i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(nn, B, { self: !0 })); }
    retrieve(n, t) { let r = H(t) || 0; try {
        return this.get(n, w, r);
    }
    catch (o) {
        if (On(o))
            return o;
        throw o;
    } }
    destroy() { j(this), this._destroyed = !0; let n = T(null); try {
        for (let r of this._ngOnDestroyHooks)
            r.ngOnDestroy();
        let t = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of t)
            r();
    }
    finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), T(n);
    } }
    onDestroy(n) { return j(this), this._onDestroyHooks.push(n), () => this.removeOnDestroy(n); }
    runInContext(n) { j(this); let t = I(this), r = E(void 0), o; try {
        return n();
    }
    finally {
        I(t), E(r);
    } }
    get(n, t = w, r) { if (j(this), n.hasOwnProperty(He))
        return n[He](this); let o = H(r), i, u = I(this), l = E(void 0); try {
        if (!(o & 4)) {
            let d = this.records.get(n);
            if (d === void 0) {
                let D = vt(n) && z(n);
                D && this.injectableDefInScope(D) ? d = N(le(n), q) : d = null, this.records.set(n, d);
            }
            if (d != null)
                return this.hydrate(n, d, o);
        }
        let a = o & 2 ? un() : this.parent;
        return t = o & 8 && t === w ? null : t, a.get(n, t);
    }
    catch (a) {
        let d = Yn(a);
        throw d === -200 || d === -201 ? new f(d, null) : a;
    }
    finally {
        E(l), I(u);
    } }
    resolveInjectorInitializers() { let n = T(null), t = I(this), r = E(void 0), o; try {
        let i = this.get(Y, B, { self: !0 });
        for (let u of i)
            u();
    }
    finally {
        I(t), E(r), T(n);
    } }
    toString() { let n = [], t = this.records; for (let r of t.keys())
        n.push(O(r)); return `R3Injector[${n.join(", ")}]`; }
    processProvider(n) { n = v(n); let t = de(n) ? n : v(n && n.provide), r = ht(n); if (!de(n) && n.multi === !0) {
        let o = this.records.get(t);
        o || (o = N(void 0, q, !0), o.factory = () => ce(o.multi), this.records.set(t, o)), t = n, o.multi.push(n);
    } this.records.set(t, r); }
    hydrate(n, t, r) { let o = T(null); try {
        if (t.value === Ge)
            throw Wn(O(n));
        return t.value === q && (t.value = Ge, t.value = t.factory(void 0, r)), typeof t.value == "object" && t.value && mt(t.value) && this._ngOnDestroyHooks.add(t.value), t.value;
    }
    finally {
        T(o);
    } }
    injectableDefInScope(n) { if (!n.providedIn)
        return !1; let t = v(n.providedIn); return typeof t == "string" ? t === "any" || this.scopes.has(t) : this.injectorDefTypes.has(t); }
    removeOnDestroy(n) { let t = this._onDestroyHooks.indexOf(n); t !== -1 && this._onDestroyHooks.splice(t, 1); }
};
function le(e) { let n = z(e), t = n !== null ? n.factory : G(e); if (t !== null)
    return t; if (e instanceof g)
    throw new f(204, !1); if (e instanceof Function)
    return ft(e); throw new f(204, !1); }
function ft(e) { if (e.length > 0)
    throw new f(204, !1); let t = kn(e); return t !== null ? () => t.factory(e) : () => new e; }
function ht(e) { if (sn(e))
    return N(void 0, e.useValue); {
    let n = pt(e);
    return N(n, q);
} }
function pt(e, n, t) { let r; if (de(e)) {
    let o = v(e);
    return G(o) || le(o);
}
else if (sn(e))
    r = () => v(e.useValue);
else if (dt(e))
    r = () => e.useFactory(...ce(e.deps || []));
else if (at(e))
    r = (o, i) => M(v(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
else {
    let o = v(e && (e.useClass || e.provide));
    if (gt(e))
        r = () => new o(...ce(e.deps));
    else
        return G(o) || le(o);
} return r; }
function j(e) { if (e.destroyed)
    throw new f(205, !1); }
function N(e, n, t = !1) { return { factory: e, value: n, multi: t ? [] : void 0 }; }
function gt(e) { return !!e.deps; }
function mt(e) { return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"; }
function vt(e) { return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"; }
function fe(e, n) { for (let t of e)
    Array.isArray(t) ? fe(t, n) : t && Je(t) ? fe(t.\u0275providers, n) : n(t); }
function jr(e, n) { let t; e instanceof W ? (j(e), t = e) : t = new ue(e); let r, o = I(t), i = E(void 0); try {
    return n();
}
finally {
    I(o), E(i);
} }
function yt() { return Ke() !== void 0 || X() != null; }
function Or(e) { if (!yt())
    throw new f(-203, !1); }
var Ie = 0, cn = 1, p = 2, he = 3, Sr = 4, It = 5, Pr = 6, Et = 7, an = 8, Lr = 9, dn = 10, Ar = 11, kr = 12, Vr = 13, ln = 14, $r = 15, qr = 16, Dt = 17, Hr = 18, Gr = 19, Br = 20, x = 21, Ur = 22, J = 23, wt = 24, Wr = 25, zr = 26, Yr = 27, Ee = 1, Jr = 6, Zr = 7, Qr = 8, Kr = 9, Xr = 10;
function Tt(e) { return Array.isArray(e) && typeof e[Ee] == "object"; }
function fn(e) { return Array.isArray(e) && e[Ee] === !0; }
function eo(e) { return (e.flags & 4) !== 0; }
function no(e) { return e.componentOffset > -1; }
function to(e) { return (e.flags & 1) === 1; }
function ro(e) { return !!e.template; }
function oo(e) { return (e[p] & 512) !== 0; }
function io(e) { return (e.type & 16) === 16; }
function so(e) { return (e[p] & 32) === 32; }
function hn(e) { return (e[p] & 256) === 256; }
var Nt = "svg", xt = "math";
function De(e) { for (; Array.isArray(e);)
    e = e[Ie]; return e; }
function uo(e) { for (; Array.isArray(e);) {
    if (typeof e[Ee] == "object")
        return e;
    e = e[Ie];
} return null; }
function co(e, n) { return De(n[e]); }
function ao(e, n) { return De(n[e.index]); }
function lo(e, n) { let t = e === null ? -1 : e.index; return t !== -1 ? De(n[t]) : null; }
function Mt(e, n) { return e.data[n]; }
function fo(e, n) { return e[n]; }
function ho(e, n, t, r) { t >= e.data.length && (e.data[t] = null, e.blueprint[t] = null), n[t] = r; }
function po(e, n) { let t = n[e]; return Tt(t) ? t : t[Ie]; }
function go(e) { return (e[p] & 4) === 4; }
function pn(e) { return (e[p] & 128) === 128; }
function mo(e) { return fn(e[he]); }
function vo(e, n) { return n == null ? null : e[n]; }
function yo(e) { e[Dt] = 0; }
function Io(e) { e[p] & 1024 || (e[p] |= 1024, pn(e) && Z(e)); }
function Ct(e, n) { for (; e > 0;)
    n = n[ln], e--; return n; }
function _t(e) { return !!(e[p] & 9216 || e[wt]?.dirty); }
function Eo(e) { e[dn].changeDetectionScheduler?.notify(8), e[p] & 64 && (e[p] |= 1024), _t(e) && Z(e); }
function Z(e) { e[dn].changeDetectionScheduler?.notify(0); let n = Be(e); for (; n !== null && !(n[p] & 8192 || (n[p] |= 8192, !pn(n)));)
    n = Be(n); }
function Ft(e, n) { if (hn(e))
    throw new f(911, !1); e[x] === null && (e[x] = []), e[x].push(n); }
function bt(e, n) { if (e[x] === null)
    return; let t = e[x].indexOf(n); t !== -1 && e[x].splice(t, 1); }
function Be(e) { let n = e[he]; return fn(n) ? n[he] : n; }
function Rt(e) { return e[Et] ??= []; }
function jt(e) { return e.cleanup ??= []; }
function Do(e, n, t, r) { let o = Rt(n); o.push(t), e.firstCreatePass && jt(e).push(r, o.length - 1); }
var s = { lFrame: vn(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var pe = !1;
function wo() { return s.lFrame.elementDepthCount; }
function To() { s.lFrame.elementDepthCount++; }
function No() { s.lFrame.elementDepthCount--; }
function xo() { return s.bindingsEnabled; }
function Mo() { return s.skipHydrationRootTNode !== null; }
function Co(e) { return s.skipHydrationRootTNode === e; }
function _o() { s.bindingsEnabled = !0; }
function Fo(e) { s.skipHydrationRootTNode = e; }
function bo() { s.bindingsEnabled = !1; }
function Ro() { s.skipHydrationRootTNode = null; }
function gn() { return s.lFrame.lView; }
function jo() { return s.lFrame.tView; }
function Oo(e) { return s.lFrame.contextLView = e, e[an]; }
function So(e) { return s.lFrame.contextLView = null, e; }
function Ot() { let e = St(); for (; e !== null && e.type === 64;)
    e = e.parent; return e; }
function St() { return s.lFrame.currentTNode; }
function Po() { let e = s.lFrame, n = e.currentTNode; return e.isParent ? n : n.parent; }
function Lo(e, n) { let t = s.lFrame; t.currentTNode = e, t.isParent = n; }
function Ao() { return s.lFrame.isParent; }
function ko() { s.lFrame.isParent = !1; }
function Vo() { return s.lFrame.contextLView; }
function $o() { return pe; }
function we(e) { let n = pe; return pe = e, n; }
function qo() { let e = s.lFrame, n = e.bindingRootIndex; return n === -1 && (n = e.bindingRootIndex = e.tView.bindingStartIndex), n; }
function Ho() { return s.lFrame.bindingIndex; }
function Go(e) { return s.lFrame.bindingIndex = e; }
function Bo() { return s.lFrame.bindingIndex++; }
function Uo(e) { let n = s.lFrame, t = n.bindingIndex; return n.bindingIndex = n.bindingIndex + e, t; }
function Wo() { return s.lFrame.inI18n; }
function zo(e) { s.lFrame.inI18n = e; }
function Yo(e, n) { let t = s.lFrame; t.bindingIndex = t.bindingRootIndex = e, Pt(n); }
function Jo() { return s.lFrame.currentDirectiveIndex; }
function Pt(e) { s.lFrame.currentDirectiveIndex = e; }
function Zo(e) { let n = s.lFrame.currentDirectiveIndex; return n === -1 ? null : e[n]; }
function Qo() { return s.lFrame.currentQueryIndex; }
function Ko(e) { s.lFrame.currentQueryIndex = e; }
function Lt(e) { let n = e[cn]; return n.type === 2 ? n.declTNode : n.type === 1 ? e[It] : null; }
function Xo(e, n, t) { if (t & 4) {
    let o = n, i = e;
    for (; o = o.parent, o === null && !(t & 1);)
        if (o = Lt(i), o === null || (i = i[ln], o.type & 10))
            break;
    if (o === null)
        return !1;
    n = o, e = i;
} let r = s.lFrame = mn(); return r.currentTNode = n, r.lView = e, !0; }
function ei(e) { let n = mn(), t = e[cn]; s.lFrame = n, n.currentTNode = t.firstChild, n.lView = e, n.tView = t, n.contextLView = e, n.bindingIndex = t.bindingStartIndex, n.inI18n = !1; }
function mn() { let e = s.lFrame, n = e === null ? null : e.child; return n === null ? vn(e) : n; }
function vn(e) { let n = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return e !== null && (e.child = n), n; }
function yn() { let e = s.lFrame; return s.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; }
var ni = yn;
function ti() { let e = yn(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; }
function ri(e) { return (s.lFrame.contextLView = Ct(e, s.lFrame.contextLView))[an]; }
function oi() { return s.lFrame.selectedIndex; }
function ii(e) { s.lFrame.selectedIndex = e; }
function si() { let e = s.lFrame; return Mt(e.tView, e.selectedIndex); }
function ui() { s.lFrame.currentNamespace = Nt; }
function ci() { s.lFrame.currentNamespace = xt; }
function ai() { At(); }
function At() { s.lFrame.currentNamespace = null; }
function di() { return s.lFrame.currentNamespace; }
var In = !0;
function li() { return In; }
function fi(e) { In = e; }
function Ue(e, n = null, t = null, r) { let o = kt(e, n, t, r); return o.resolveInjectorInitializers(), o; }
function kt(e, n = null, t = null, r, o = new Set) { let i = [t || B, st(e)]; return r = r || (typeof e == "object" ? void 0 : O(e)), new W(i, n || un(), r || null, o); }
var P = class e {
    static THROW_IF_NOT_FOUND = w;
    static NULL = new U;
    static create(n, t) { if (Array.isArray(n))
        return Ue({ name: "" }, t, n, ""); {
        let r = n.name ?? "";
        return Ue({ name: r }, n.parent, n.providers, r);
    } }
    static \u0275prov = _({ token: e, providedIn: "any", factory: () => M(en) });
    static __NG_ELEMENT_ID__ = -1;
}, Vt = new g(""), F = (() => { class e {
    static __NG_ELEMENT_ID__ = $t;
    static __NG_ENV_ID__ = t => t;
} return e; })(), L = class extends F {
    _lView;
    constructor(n) { super(), this._lView = n; }
    get destroyed() { return hn(this._lView); }
    onDestroy(n) { let t = this._lView; return Ft(t, n), () => bt(t, n); }
};
function $t() { return new L(gn()); }
var C = class {
    _console = console;
    handleError(n) { this._console.error("ERROR", n); }
}, En = new g("", { providedIn: "root", factory: () => { let e = h(S), n; return t => { e.destroyed && !n ? setTimeout(() => { throw t; }) : (n ??= e.get(C), n.handleError(t)); }; } }), hi = { provide: Y, useValue: () => void h(C), multi: !0 }, qt = new g("", { providedIn: "root", factory: () => { if (typeof ngServerMode < "u" && ngServerMode)
        return; let e = h(Vt).defaultView; if (!e)
        return; let n = h(En), t = i => { n(i.reason), i.preventDefault(); }, r = i => { i.error ? n(i.error) : n(new Error(i.message, { cause: i })), i.preventDefault(); }, o = () => { e.addEventListener("unhandledrejection", t), e.addEventListener("error", r); }; typeof Zone < "u" ? Zone.root.run(o) : o(), h(F).onDestroy(() => { e.removeEventListener("error", r), e.removeEventListener("unhandledrejection", t); }); } });
function pi() { return rn([it(() => void h(qt))]); }
function Ht(e) { return typeof e == "function" && e[m] !== void 0; }
function gi(e) { return null; }
function k(e, n) { let [t, r, o] = je(e, n?.equal), i = t, u = i[m]; return i.set = r, i.update = o, i.asReadonly = Q.bind(i), i; }
function Q() { let e = this[m]; if (e.readonlyFn === void 0) {
    let n = () => this();
    n[m] = e, e.readonlyFn = n;
} return e.readonlyFn; }
function mi(e) { return Ht(e) && typeof e.set == "function"; }
function vi(e, n) { if (be() !== null)
    throw new f(-602, !1); }
var Te = (() => { class e {
    view;
    node;
    constructor(t, r) { this.view = t, this.node = r; }
    static __NG_ELEMENT_ID__ = Gt;
} return e; })();
function Gt() { return new Te(gn(), Ot()); }
var A = class {
}, yi = new g("", { providedIn: "root", factory: () => !1 });
var Ii = new g(""), Ei = new g(""), Bt = (() => { class e {
    taskId = 0;
    pendingTasks = new Set;
    destroyed = !1;
    pendingTask = new Rn(!1);
    get hasPendingTasks() { return this.destroyed ? !1 : this.pendingTask.value; }
    get hasPendingTasksObservable() { return this.destroyed ? new jn(t => { t.next(!1), t.complete(); }) : this.pendingTask; }
    add() { !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0); let t = this.taskId++; return this.pendingTasks.add(t), t; }
    has(t) { return this.pendingTasks.has(t); }
    remove(t) { this.pendingTasks.delete(t), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1); }
    ngOnDestroy() { this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe(); }
    static \u0275prov = _({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Dn = (() => { class e {
    internalPendingTasks = h(Bt);
    scheduler = h(A);
    errorHandler = h(En);
    add() { let t = this.internalPendingTasks.add(); return () => { this.internalPendingTasks.has(t) && (this.scheduler.notify(11), this.internalPendingTasks.remove(t)); }; }
    run(t) { let r = this.add(); t().catch(this.errorHandler).finally(r); }
    static \u0275prov = _({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function wn(...e) { }
var Tn = (() => { class e {
    static \u0275prov = _({ token: e, providedIn: "root", factory: () => new ge });
} return e; })(), ge = class {
    dirtyEffectCount = 0;
    queues = new Map;
    add(n) { this.enqueue(n), this.schedule(n); }
    schedule(n) { n.dirty && this.dirtyEffectCount++; }
    remove(n) { let t = n.zone, r = this.queues.get(t); r.has(n) && (r.delete(n), n.dirty && this.dirtyEffectCount--); }
    enqueue(n) { let t = n.zone; this.queues.has(t) || this.queues.set(t, new Set); let r = this.queues.get(t); r.has(n) || r.add(n); }
    flush() { for (; this.dirtyEffectCount > 0;) {
        let n = !1;
        for (let [t, r] of this.queues)
            t === null ? n ||= this.flushQueue(r) : n ||= t.run(() => this.flushQueue(r));
        n || (this.dirtyEffectCount = 0);
    } }
    flushQueue(n) { let t = !1; for (let r of n)
        r.dirty && (this.dirtyEffectCount--, t = !0, r.run()); return t; }
};
var Nn = class {
    destroyed = !1;
    listeners = null;
    errorHandler = h(C, { optional: !0 });
    destroyRef = h(F);
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0, this.listeners = null; }); }
    subscribe(n) { if (this.destroyed)
        throw new f(953, !1); return (this.listeners ??= []).push(n), { unsubscribe: () => { let t = this.listeners?.indexOf(n); t !== void 0 && t !== -1 && this.listeners?.splice(t, 1); } }; }
    emit(n) { if (this.destroyed) {
        console.warn(me(953, !1));
        return;
    } if (this.listeners === null)
        return; let t = R(null); try {
        for (let r of this.listeners)
            try {
                r(n);
            }
            catch (o) {
                this.errorHandler?.handleError(o);
            }
    }
    finally {
        R(t);
    } }
};
function bi(e) { return e.destroyRef; }
function y(e) { return Pe(e); }
function b(e, n) { return Re(e, n?.equal); }
var Ne = class {
    [m];
    constructor(n) { this[m] = n; }
    destroy() { this[m].destroy(); }
};
function Ut(e, n) { let t = n?.injector ?? h(P), r = n?.manualCleanup !== !0 ? t.get(F) : null, o, i = t.get(Te, null, { optional: !0 }), u = t.get(A); return i !== null ? (o = Yt(i.view, u, e), r instanceof L && r._lView === i.view && (r = null)) : o = Jt(e, t.get(Tn), u), o.injector = t, r !== null && (o.onDestroyFn = r.onDestroy(() => o.destroy())), new Ne(o); }
var _n = $(V({}, Le), { cleanupFns: void 0, zone: null, onDestroyFn: wn, run() { let e = we(!1); try {
        Ae(this);
    }
    finally {
        we(e);
    } }, cleanup() { if (!this.cleanupFns?.length)
        return; let e = R(null); try {
        for (; this.cleanupFns.length;)
            this.cleanupFns.pop()();
    }
    finally {
        this.cleanupFns = [], R(e);
    } } }), Wt = $(V({}, _n), { consumerMarkedDirty() { this.scheduler.schedule(this), this.notifier.notify(12); }, destroy() { ne(this), this.onDestroyFn(), this.cleanup(), this.scheduler.remove(this); } }), zt = $(V({}, _n), { consumerMarkedDirty() { this.view[p] |= 8192, Z(this.view), this.notifier.notify(13); }, destroy() { ne(this), this.onDestroyFn(), this.cleanup(), this.view[J]?.delete(this); } });
function Yt(e, n, t) { let r = Object.create(zt); return r.view = e, r.zone = typeof Zone < "u" ? Zone.current : null, r.notifier = n, r.fn = Fn(r, t), e[J] ??= new Set, e[J].add(r), r.consumerMarkedDirty(r), r; }
function Jt(e, n, t) { let r = Object.create(Wt); return r.fn = Fn(r, e), r.scheduler = n, r.notifier = t, r.zone = typeof Zone < "u" ? Zone.current : null, r.scheduler.add(r), r.notifier.notify(12), r; }
function Fn(e, n) { return () => { n(t => (e.cleanupFns ??= []).push(t)); }; }
var Zt = e => e;
function xn(e, n) { if (typeof e == "function") {
    let t = te(e, Zt, n?.equal);
    return Mn(t, n?.debugName);
}
else {
    let t = te(e.source, e.computation, e.equal);
    return Mn(t, e.debugName);
} }
function Mn(e, n) { let t = e[m], r = e; return r.set = o => Oe(t, o), r.update = o => Se(t, o), r.asReadonly = Q.bind(e), r; }
function Ri(e) { let n = e.request, t = e.params ?? n ?? (() => null); return new Me(t, Kt(e), e.defaultValue, e.equal ? Qt(e.equal) : void 0, e.injector ?? h(P)); }
var xe = class {
    value;
    constructor(n) { this.value = n, this.value.set = this.set.bind(this), this.value.update = this.update.bind(this), this.value.asReadonly = Q; }
    isError = b(() => this.status() === "error");
    update(n) { this.set(n(y(this.value))); }
    isLoading = b(() => this.status() === "loading" || this.status() === "reloading");
    isValueDefined = b(() => this.isError() ? !1 : this.value() !== void 0);
    hasValue() { return this.isValueDefined(); }
    asReadonly() { return this; }
}, Me = class extends xe {
    loaderFn;
    equal;
    pendingTasks;
    state;
    extRequest;
    effectRef;
    pendingController;
    resolvePendingTask = void 0;
    destroyed = !1;
    unregisterOnDestroy;
    constructor(n, t, r, o, i) { super(b(() => { let u = this.state().stream?.(); if (!u || this.state().status === "loading" && this.error())
        return r; if (!Ce(u))
        throw new _e(this.error()); return u.value; }, { equal: o })), this.loaderFn = t, this.equal = o, this.extRequest = xn({ source: n, computation: u => ({ request: u, reload: 0 }) }), this.state = xn({ source: this.extRequest, computation: (u, l) => { let a = u.request === void 0 ? "idle" : "loading"; return l ? { extRequest: u, status: a, previousStatus: Cn(l.value), stream: l.value.extRequest.request === u.request ? l.value.stream : void 0 } : { extRequest: u, status: a, previousStatus: "idle", stream: void 0 }; } }), this.effectRef = Ut(this.loadEffect.bind(this), { injector: i, manualCleanup: !0 }), this.pendingTasks = i.get(Dn), this.unregisterOnDestroy = i.get(F).onDestroy(() => this.destroy()); }
    status = b(() => Cn(this.state()));
    error = b(() => { let n = this.state().stream?.(); return n && !Ce(n) ? n.error : void 0; });
    set(n) { if (this.destroyed)
        return; let t = y(this.error), r = y(this.state); if (!t) {
        let o = y(this.value);
        if (r.status === "local" && (this.equal ? this.equal(o, n) : o === n))
            return;
    } this.state.set({ extRequest: r.extRequest, status: "local", previousStatus: "local", stream: k({ value: n }) }), this.abortInProgressLoad(); }
    reload() { let { status: n } = y(this.state); return n === "idle" || n === "loading" ? !1 : (this.extRequest.update(({ request: t, reload: r }) => ({ request: t, reload: r + 1 })), !0); }
    destroy() { this.destroyed = !0, this.unregisterOnDestroy(), this.effectRef.destroy(), this.abortInProgressLoad(), this.state.set({ extRequest: { request: void 0, reload: 0 }, status: "idle", previousStatus: "idle", stream: void 0 }); }
    loadEffect() { return K(this, null, function* () { let n = this.extRequest(), { status: t, previousStatus: r } = y(this.state); if (n.request === void 0)
        return; if (t !== "loading")
        return; this.abortInProgressLoad(); let o = this.resolvePendingTask = this.pendingTasks.add(), { signal: i } = this.pendingController = new AbortController; try {
        let u = yield y(() => this.loaderFn({ params: n.request, request: n.request, abortSignal: i, previous: { status: r } }));
        if (i.aborted || y(this.extRequest) !== n)
            return;
        this.state.set({ extRequest: n, status: "resolved", previousStatus: "resolved", stream: u });
    }
    catch (u) {
        if (i.aborted || y(this.extRequest) !== n)
            return;
        this.state.set({ extRequest: n, status: "resolved", previousStatus: "error", stream: k({ error: bn(u) }) });
    }
    finally {
        o?.(), o = void 0;
    } }); }
    abortInProgressLoad() { y(() => this.pendingController?.abort()), this.pendingController = void 0, this.resolvePendingTask?.(), this.resolvePendingTask = void 0; }
};
function Qt(e) { return (n, t) => n === void 0 || t === void 0 ? n === t : e(n, t); }
function Kt(e) { return Xt(e) ? e.stream : n => K(null, null, function* () { try {
    return k({ value: yield e.loader(n) });
}
catch (t) {
    return k({ error: bn(t) });
} }); }
function Xt(e) { return !!e.stream; }
function Cn(e) { switch (e.status) {
    case "loading": return e.extRequest.reload === 0 ? "loading" : "reloading";
    case "resolved": return Ce(e.stream()) ? "resolved" : "error";
    default: return e.status;
} }
function Ce(e) { return e.error === void 0; }
function bn(e) { return e instanceof Error ? e : new Fe(e); }
var _e = class extends Error {
    constructor(n) { super(n.message, { cause: n }); }
}, Fe = class extends Error {
    constructor(n) { super(String(n), { cause: n }); }
};
export { oe as a, ir as b, sr as c, f as d, me as e, ur as f, c as g, cr as h, O as i, ar as j, dr as k, We as l, v as m, Ln as n, lr as o, _ as p, fr as q, hr as r, z as s, pr as t, Ye as u, Ve as v, g as w, gr as x, Je as y, Vn as z, $n as A, qn as B, Hn as C, qe as D, mr as E, Gn as F, vr as G, Wn as H, zn as I, E as J, Jn as K, M as L, yr as M, h as N, H as O, Ir as P, G as Q, Er as R, Dr as S, wr as T, Tr as U, Nr as V, xr as W, et as X, Mr as Y, Cr as Z, Xe as _, _r as $, B as aa, Y as ba, en as ca, tt as da, Fr as ea, tn as fa, rt as ga, ot as ha, br as ia, rn as ja, it as ka, st as la, ut as ma, de as na, Rr as oa, lt as pa, un as qa, S as ra, W as sa, pt as ta, jr as ua, yt as va, Or as wa, Ie as xa, cn as ya, p as za, he as Aa, Sr as Ba, It as Ca, Pr as Da, Et as Ea, an as Fa, Lr as Ga, dn as Ha, Ar as Ia, kr as Ja, Vr as Ka, ln as La, $r as Ma, qr as Na, Dt as Oa, Hr as Pa, Gr as Qa, Br as Ra, x as Sa, Ur as Ta, J as Ua, wt as Va, Wr as Wa, zr as Xa, Yr as Ya, Jr as Za, Zr as _a, Qr as $a, Kr as ab, Xr as bb, Tt as cb, fn as db, eo as eb, no as fb, to as gb, ro as hb, oo as ib, io as jb, so as kb, hn as lb, Nt as mb, xt as nb, De as ob, uo as pb, co as qb, ao as rb, lo as sb, Mt as tb, fo as ub, ho as vb, po as wb, go as xb, pn as yb, mo as zb, vo as Ab, yo as Bb, Io as Cb, Ct as Db, _t as Eb, Eo as Fb, Z as Gb, Ft as Hb, bt as Ib, Be as Jb, Rt as Kb, jt as Lb, Do as Mb, wo as Nb, To as Ob, No as Pb, xo as Qb, Mo as Rb, Co as Sb, _o as Tb, Fo as Ub, bo as Vb, Ro as Wb, gn as Xb, jo as Yb, Oo as Zb, So as _b, Ot as $b, St as ac, Po as bc, Lo as cc, Ao as dc, ko as ec, Vo as fc, $o as gc, we as hc, qo as ic, Ho as jc, Go as kc, Bo as lc, Uo as mc, Wo as nc, zo as oc, Yo as pc, Jo as qc, Pt as rc, Zo as sc, Qo as tc, Ko as uc, Xo as vc, ei as wc, ni as xc, ti as yc, ri as zc, oi as Ac, ii as Bc, si as Cc, ui as Dc, ci as Ec, ai as Fc, di as Gc, li as Hc, fi as Ic, Ue as Jc, kt as Kc, P as Lc, Vt as Mc, F as Nc, C as Oc, En as Pc, hi as Qc, pi as Rc, Ht as Sc, gi as Tc, k as Uc, Q as Vc, mi as Wc, vi as Xc, Te as Yc, A as Zc, yi as _c, Ii as $c, Ei as ad, Bt as bd, Dn as cd, wn as dd, Tn as ed, Nn as fd, bi as gd, y as hd, b as id, Ut as jd, xn as kd, Ri as ld, Me as md, bn as nd };
/*! Bundled license information:

@angular/core/fesm2022/root_effect_scheduler.mjs:
@angular/core/fesm2022/resource.mjs:
  (**
   * @license Angular v20.3.17
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
