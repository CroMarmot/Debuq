import { $ as Me, $a as wo, $b as M, $c as Sc, A as zr, Aa as z, Ab as ce, Ac as re, B as Qr, Ba as se, Bb as nc, Bc as Tt, C as Ga, Ca as ae, Cb as ri, Cc as we, D as mt, Da as ne, Db as rp, Dc, E as kt, Ea as Pt, Eb as Ao, Ec as Cc, F as N, Fa as F, Fb as ii, Fc as Tc, G as Ie, Ga as R, Gb as si, Gc as Mc, H as Gf, Ha as Ye, Hb as ai, Hc as ko, I as qa, Ia as T, Ib as oc, Ic as xe, J as xt, Ja as Et, Jb as Ht, Jc as oT, K as qf, Ka as Mo, Kb as ip, Kc as mp, L as Re, La as No, Lb as sp, Lc as Ce, M as Zr, Ma as Z, Mb as ap, Mc as rT, N as D, Na as Ke, Nb as cp, Nc as gn, O as Wa, Oa as dn, Ob as lp, Oc as pi, P as ln, Pa as He, Pb as rc, Pc as Mt, Q as Yr, Qa as fn, Qb as ci, Qc as Nc, R as Wf, Ra as Ja, Rb as Ro, Rc as iT, S as Oe, Sa as Xa, Sb as ic, Sc as vp, T as za, Ta as oi, Tb as sc, Tc as sT, U as Io, Ua as _o, Ub as up, Uc as _c, V as Do, Va as _e, Vb as ac, Vc as yp, W as Qa, Wa as Lt, Wb as cc, Wc as wc, X as zf, Xa as Je, Xb as g, Xc as aT, Y as Co, Ya as E, Yb as _, Yc as hi, Z as Kr, Za as De, Zb as lc, Zc as Xe, _ as Jr, _a as ke, _b as uc, _c as mn, a as qC, aa as L, ab as Ft, ac as dp, ad as gi, b as WC, ba as vt, bb as j, bc as hn, bd as Nt, c as $r, ca as XC, cb as K, cc as Be, cd as bc, d as w, da as un, db as J, dc, dd as xo, e as Bf, ea as Xr, eb as ec, ec as fc, ed as Ac, f as Ee, fa as q, fb as me, fc as pc, fd as Rc, g as Ba, ga as Ne, gb as pn, gc as hc, gd as cT, h as Uf, ha as je, hb as ve, hc as gc, hd as lT, i as an, ia as To, ib as Ve, ic as de, id as uT, j as Gr, ja as Ze, jb as tc, jc as Ue, jd as dT, k as zC, ka as eT, kb as Kf, kc as mc, kd as fT, l as Ua, la as tT, lb as It, lc as fe, ld as pT, m as G, ma as Za, mb as Jf, mc as $e, md as hT, n as qr, na as ei, nb as Xf, nc as fp, nd as gT, o as $f, oa as Qf, ob as k, oc as vc, p as B, pa as Zf, pb as So, pc as pp, q as QC, qa as ti, qb as jt, qc as hp, r as Eo, ra as yt, rb as oe, rc as yc, s as ZC, sa as Ya, sb as ep, sc as li, t as YC, ta as Yf, tb as Dt, tc as ui, u as Wr, ua as ni, ub as Ct, uc as Oo, v as $a, va as Ka, vb as bo, vc as Ec, w as S, wa as nT, wb as ue, wc as di, x as KC, xa as V, xb as tp, xc as Ic, y as JC, ya as v, yb as np, yc as fi, z as cn, za as b, zb as op, zc as gp } from "@nf-internal/chunk-H733PIW4";
import { b as GC } from "@nf-internal/chunk-H7IFLRAH";
import { a as mT } from "@nf-internal/chunk-2LXHLUOT";
import { B as Ha, E as Va, a as gt, b as O, c as jf, f as ja, g as Vr, n as vo, p as Br, r as Ur, s as yo, w as Hf, x as Vf } from "@nf-internal/chunk-SCGIWX7X";
import { a as W, b as Fe, e as mo } from "@nf-internal/chunk-JKOY2XUY";
import { Subject as au, Subscription as cu } from "rxjs";
import { setActiveConsumer as Ep } from "@angular/core/primitives/signals";
import { map as vT } from "rxjs/operators";
var vn = { JSACTION: "jsaction" };
function qe(e) { return { toString: e }.toString(); }
var In = "__annotations__", Dn = "__parameters__", Cn = "__prop__metadata__";
function fr(e, t, n, o, r) { return qe(() => { let i = lu(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(In) ? u[In] : Object.defineProperty(u, In, { value: [] })[In]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function lu(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function Qn(e, t, n) { return qe(() => { let o = lu(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(Dn) ? c[Dn] : Object.defineProperty(c, Dn, { value: [] })[Dn]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function st(e, t, n, o) { return qe(() => { let r = lu(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(Cn) ? d[Cn] : Object.defineProperty(d, Cn, { value: {} })[Cn]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var Oh = ln(Qn("Inject", e => ({ token: e })), -1), kh = ln(Qn("Optional"), 8), xh = ln(Qn("Self"), 2), Ph = ln(Qn("SkipSelf"), 4), Lh = ln(Qn("Host"), 1);
function ee(e) { let t = Ee.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var Ip = { \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: Eo, \u0275\u0275inject: Re, \u0275\u0275invalidFactoryDep: Zr, resolveForwardRef: G }, Fh = Function;
function Lo(e) { return typeof e == "function"; }
var yT = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, ET = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, IT = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, DT = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function CT(e) { return yT.test(e) || DT.test(e) || ET.test(e) && !IT.test(e); }
var Fi = class {
    _reflect;
    constructor(t) { this._reflect = t || Ee.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = Do(n.length) : o = Do(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (CT(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && Oc(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(Dn) && t[Dn], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : Do(t.length); }
    parameters(t) { if (!Lo(t))
        return []; let n = mi(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? Oc(t.decorators) : t.hasOwnProperty(In) ? t[In] : null; }
    annotations(t) { if (!Lo(t))
        return []; let n = mi(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = Oc(o[i]); }), r;
    } return t.hasOwnProperty(Cn) ? t[Cn] : null; }
    propMetadata(t) { if (!Lo(t))
        return {}; let n = mi(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return Lo(t) ? this._ownPropMetadata(t, mi(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof Fh && n in t.prototype; }
};
function Oc(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function mi(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
var ji = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
};
function jh(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var Hh = (() => { let e = () => Vh; return e.ngInherit = !0, e; })();
function Vh(e) { return e.type.prototype.ngOnChanges && (e.setInput = MT), TT; }
function TT() { let e = Uh(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === Me)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function MT(e, t, n, o, r) { let i = this.declaredInputs[o], s = Uh(e) || NT(e, { previous: Me, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new ji(l && l.currentValue, n, c === Me), jh(e, t, r, n); }
var Bh = "__ngSimpleChanges__";
function Uh(e) { return e[Bh] || null; }
function NT(e, t) { return e[Bh] = t; }
var Dp = [];
var x = function (e, t = null, n) { for (let o = 0; o < Dp.length; o++) {
    let r = Dp[o];
    r(e, t, n);
} };
function _T(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = Vh(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function $h(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function wi(e, t, n) { Gh(e, t, 3, n); }
function Si(e, t, n, o) { (e[b] & 3) === n && Gh(e, t, n, o); }
function kc(e, t) { let n = e[b]; (n & 3) === t && (n &= 16383, n += 1, e[b] = n); }
function Gh(e, t, n, o) { let r = o !== void 0 ? e[dn] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[dn] += 65536), (a < i || i == -1) && (wT(e, n, t, c), e[dn] = (e[dn] & 4294901760) + c + 2), c++; }
function Cp(e, t) { x(4, e, t); let n = O(null); try {
    t.call(e);
}
finally {
    O(n), x(5, e, t);
} }
function wT(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[b] >> 14 < e[dn] >> 16 && (e[b] & 3) === t && (e[b] += 16384, Cp(a, i)) : Cp(a, i); }
var wn = -1, qt = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, o, r) { this.factory = t, this.name = r, this.canSeeViewProviders = n, this.injectImpl = o; }
};
function gs(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function qh(e) { return !!(e.type & 128); }
function ST(e) { return (e.flags & 8) !== 0; }
function bT(e) { return (e.flags & 16) !== 0; }
function AT(e, t, n) { let o = 0; for (; o < n.length;) {
    let r = n[o];
    if (typeof r == "number") {
        if (r !== 0)
            break;
        o++;
        let i = n[o++], s = n[o++], a = n[o++];
        e.setAttribute(t, s, a, i);
    }
    else {
        let i = r, s = n[++o];
        RT(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function Wh(e) { return e === 3 || e === 4 || e === 6; }
function RT(e) { return e.charCodeAt(0) === 64; }
function Pn(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? Tp(e, n, r, null, t[++o]) : Tp(e, n, r, null, null));
        }
    } return e; }
function Tp(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
    s = -1;
else
    for (; i < e.length;) {
        let a = e[i++];
        if (typeof a == "number") {
            if (a === t) {
                s = -1;
                break;
            }
            else if (a > t) {
                s = i - 1;
                break;
            }
        }
    } for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number")
        break;
    if (a === n) {
        r !== null && (e[i + 1] = r);
        return;
    }
    i++, r !== null && i++;
} s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), r !== null && e.splice(i++, 0, r); }
function zh(e) { return e !== wn; }
function Hi(e) { return e & 32767; }
function OT(e) { return e >> 16; }
function Vi(e, t) { let n = OT(e), o = t; for (; n > 0;)
    o = o[No], n--; return o; }
var rl = !0;
function Bi(e) { let t = rl; return rl = e, t; }
var kT = 256, Qh = kT - 1, Zh = 5, xT = 0, Ge = {};
function PT(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(kt) && (o = n[kt]), o == null && (o = n[kt] = xT++); let r = o & Qh, i = 1 << r; t.data[e + (r >> Zh)] |= i; }
function Ui(e, t) { let n = Yh(e, t); if (n !== -1)
    return n; let o = t[v]; o.firstCreatePass && (e.injectorIndex = t.length, xc(o.data, e), xc(t, null), xc(o.blueprint, null)); let r = uu(e, t), i = e.injectorIndex; if (zh(r)) {
    let s = Hi(r), a = Vi(r, t), c = a[v].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function xc(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function Yh(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function uu(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = ng(r), o === null)
        return wn;
    if (n++, r = r[No], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return wn; }
function il(e, t, n) { PT(e, t, n); }
function LT(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if (Wh(i))
            break;
        if (i === 0)
            r = r + 2;
        else if (typeof i == "number")
            for (r++; r < o && typeof n[r] == "string";)
                r++;
        else {
            if (i === t)
                return n[r + 1];
            r = r + 2;
        }
    }
} return null; }
function Kh(e, t, n) { if (n & 8 || e !== void 0)
    return e; qa(t, "NodeInjector"); }
function Jh(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[R], i = xt(void 0);
    try {
        return r ? r.get(t, o, n & 8) : qf(t, o, n & 8);
    }
    finally {
        xt(i);
    }
} return Kh(o, t, n); }
function Xh(e, t, n, o = 0, r) { if (e !== null) {
    if (t[b] & 2048 && !(o & 2)) {
        let s = VT(e, t, n, o, Ge);
        if (s !== Ge)
            return s;
    }
    let i = eg(e, t, n, o, Ge);
    if (i !== Ge)
        return i;
} return Jh(t, n, o, r); }
function eg(e, t, n, o, r) { let i = jT(n); if (typeof i == "function") {
    if (!Ec(t, e, o))
        return o & 1 ? Kh(r, n, o) : Jh(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            qa(n);
        else
            return s;
    }
    finally {
        Ic();
    }
}
else if (typeof i == "number") {
    let s = null, a = Yh(e, t), c = wn, l = o & 1 ? t[Z][ae] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? uu(e, t) : t[a + 8], c === wn || !Np(o, !1) ? a = -1 : (s = t[v], a = Hi(c), t = Vi(c, t))); a !== -1;) {
        let u = t[v];
        if (Mp(i, a, u.data)) {
            let d = FT(a, t, n, s, o, l);
            if (d !== Ge)
                return d;
        }
        c = t[a + 8], c !== wn && Np(o, t[v].data[a + 8] === l) && Mp(i, a, t) ? (s = u, a = Hi(c), t = Vi(c, t)) : a = -1;
    }
} return r; }
function FT(e, t, n, o, r, i) { let s = t[v], a = s.data[e + 8], c = o == null ? me(a) && rl : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = bi(a, s, n, c, l); return u !== null ? Yo(t, s, u, a, r) : Ge; }
function bi(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && ve(p) && p.type === n)
        return c;
} return null; }
function Yo(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof qt) {
    let a = i;
    if (a.resolving) {
        let p = Ie(s[n]);
        throw Gf(p);
    }
    let c = Bi(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? xt(a.injectImpl) : null, f = Ec(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && _T(n, s[n], t);
    }
    finally {
        d !== null && xt(d), Bi(c), a.resolving = !1, Ic();
    }
} return i; }
function jT(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(kt) ? e[kt] : void 0; return typeof t == "number" ? t >= 0 ? t & Qh : HT : t; }
function Mp(e, t, n) { let o = 1 << e; return !!(n[t + (e >> Zh)] & o); }
function Np(e, t) { return !(e & 2) && !(e & 1 && t); }
var wt = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return Xh(this._tNode, this._lView, t, Wa(o), n); }
};
function HT() { return new wt(M(), g()); }
function tg(e) { return qe(() => { let t = e.prototype.constructor, n = t[mt] || sl(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[mt] || sl(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function sl(e) { return qr(e) ? () => { let t = sl(G(e)); return t && t(); } : Yr(e); }
function VT(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[b] & 2048 && !Ve(s);) {
    let a = eg(i, s, n, o | 2, Ge);
    if (a !== Ge)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[Ja];
        if (l) {
            let u = l.get(n, Ge, o);
            if (u !== Ge)
                return u;
        }
        c = ng(s), s = s[No];
    }
    i = c;
} return r; }
function ng(e) { let t = e[v], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[ae] : null; }
function ms(e) { return LT(M(), e); }
var og = Qn("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => ms(e) })), _p = null;
function du() { return _p = _p || new Fi; }
function vs(e) { return rg(du().parameters(e)); }
function rg(e) { return e.map(t => BT(t)); }
function BT(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof kh || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof Ph || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof xh || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof Lh || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof Oh)
            t.token = o.token;
        else if (o instanceof og) {
            if (o.attributeName === void 0)
                throw new w(204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function UT(e, t) { let n = null, o = null; e.hasOwnProperty(Wr) || Object.defineProperty(e, Wr, { get: () => (n === null && (n = ee({ usage: 0, kind: "injectable", type: e }).compileInjectable(Ip, `ng:///${e.name}/\u0275prov.js`, WT(e, t))), n) }), e.hasOwnProperty(mt) || Object.defineProperty(e, mt, { get: () => { if (o === null) {
        let r = ee({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory(Ip, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: vs(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var $T = Ba({ provide: String, useValue: Ba });
function wp(e) { return e.useClass !== void 0; }
function GT(e) { return $T in e; }
function Sp(e) { return e.useFactory !== void 0; }
function qT(e) { return e.useExisting !== void 0; }
function WT(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (wp(n) || Sp(n)) && n.deps !== void 0 && (o.deps = rg(n.deps)), wp(n) ? o.useClass = n.useClass : GT(n) ? o.useValue = n.useValue : Sp(n) ? o.useFactory = n.useFactory : qT(n) && (o.useExisting = n.useExisting), o; }
var zT = fr("Injectable", void 0, void 0, void 0, (e, t) => UT(e, t));
function QT() { return Zn(M(), g()); }
function Zn(e, t) { return new pr(oe(e, t)); }
var pr = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = QT;
} return e; })();
function ig(e) { return e instanceof pr ? e.nativeElement : e; }
function ZT() { return this._results[Symbol.iterator](); }
var $i = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new au; }
    constructor(t = !1) { this._emitDistinctChangesOnly = t; }
    get(t) { return this._results[t]; }
    map(t) { return this._results.map(t); }
    filter(t) { return this._results.filter(t); }
    find(t) { return this._results.find(t); }
    reduce(t, n) { return this._results.reduce(t, n); }
    forEach(t) { this._results.forEach(t); }
    some(t) { return this._results.some(t); }
    toArray() { return this._results.slice(); }
    toString() { return this._results.toString(); }
    reset(t, n) { this.dirty = !1; let o = Oe(t); (this._changesDetected = !Wf(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = ZT;
}, Yn = "ngSkipHydration", YT = "ngskiphydration";
function fu(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === YT)
        return !0;
} return !1; }
function sg(e) { return e.hasAttribute(Yn); }
function Ko(e) { return (e.flags & 128) === 128; }
function Kn(e) { if (Ko(e))
    return !0; let t = e.parent; for (; t;) {
    if (Ko(e) || fu(t))
        return !0;
    t = t.parent;
} return !1; }
function ag(e) { return Ko(e) || fu(e) || Kn(e); }
var ys = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e; })(ys || {}), Es = new Map, KT = 0;
function JT() { return KT++; }
function XT(e) { Es.set(e[fn], e); }
function cg(e) { return Es.get(e) || null; }
function al(e) { Es.delete(e[fn]); }
function eM() { return Es; }
var Gi = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return cg(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function ye(e) { let t = Ai(e); if (t) {
    if (K(t)) {
        let n = t, o, r, i;
        if (ug(e)) {
            if (o = oM(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (tM(e)) {
            if (o = rM(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = dg(o, n);
        }
        else if (o = Ap(n, e), o == -1)
            return null;
        let s = k(n[o]), a = Ai(s), c = a && !Array.isArray(a) ? a : bp(n, o, s);
        if (r && c.component === void 0 && (c.component = r, Se(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                Se(i[l], c);
        }
        Se(c.native, c), t = c;
    }
}
else {
    let n = e, o = n;
    for (; o = o.parentNode;) {
        let r = Ai(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = Ap(i, n);
            if (s >= 0) {
                let a = k(i[s]), c = bp(i, s, a);
                Se(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function bp(e, t, n) { return new Gi(e[fn], t, n); }
var cl = "__ngContext__";
function Se(e, t) { K(t) ? (e[cl] = t[fn], XT(t)) : e[cl] = t; }
function Ai(e) { let t = e[cl]; return typeof t == "number" ? cg(t) : t || null; }
function lg(e) { let t = Ai(e); return t ? K(t) ? t : t.lView : null; }
function ug(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function tM(e) { return e && e.constructor && e.constructor.\u0275dir; }
function Ap(e, t) { let n = e[v]; for (let o = E; o < n.bindingStartIndex; o++)
    if (k(e[o]) === t)
        return o; return -1; }
function nM(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function oM(e, t) { let n = e[v].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (ue(r, e)[F] === t)
            return r;
    }
else if (ue(E, e)[F] === t)
    return E; return -1; }
function rM(e, t) { let n = e[v].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = nM(n);
} return -1; }
function dg(e, t) { let n = t[v].data[e]; if (n.directiveStart === 0)
    return L; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    ug(i) || o.push(i);
} return o; }
function iM(e, t) { let n = t[v].data[e]; return me(n) ? t[n.directiveStart + n.componentOffset] : null; }
function sM(e, t) { let n = e[v].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function fg(e) { return hg(e[Et]); }
function pg(e) { return hg(e[se]); }
function hg(e) { for (; e !== null && !J(e);)
    e = e[se]; return e; }
function Rp(e) { let t = ye(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = iM(t.nodeIndex, n);
} return t.component; }
function aM(e) { vM(e); let t = ye(e), n = t ? t.lView : null; return n === null ? null : n[F]; }
function cM(e) { let t = ye(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[v].type === 2 && (o = Ht(n));)
    n = o; return Ve(n) ? null : n[F]; }
function lM(e) { let t = ye(e), n = t ? t.lView : null; if (n === null)
    return Ce.NULL; let o = n[v].data[t.nodeIndex]; return new wt(o, n); }
function uM(e) { let t = ye(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[v], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    mM(l) && (l = l.type), i.push(l);
} return i; }
function dM(e) { if (e instanceof Text)
    return []; let t = ye(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[v], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = dg(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var gg = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(gg || {}), mg = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(mg || {}), vg = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(vg || {});
function fM(e) { let t = ye(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = sM(n, t.nodeIndex);
} return t.localRefs || {}; }
function pM(e) { return ye(e).native; }
function hM(e) { let t = ye(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[v], r = n[Pt], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = k(n[l]), f = r[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", m = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: m, type: h });
        }
    } return s.sort(gM), s; }
function gM(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function mM(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function vM(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var ll;
function yM(e) { ll = e; }
function at() { if (ll !== void 0)
    return ll; if (typeof document < "u")
    return document; throw new w(210, !1); }
var ct = new S("", { providedIn: "root", factory: () => EM }), EM = "ng", pu = new S(""), IM = new S("", { providedIn: "platform", factory: () => "unknown" }), DM = new S(""), CM = new S(""), TM = new S("", { providedIn: "root", factory: () => at().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), yg = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, MM = new S("", { providedIn: "root", factory: () => yg });
function NM(e) { return e; }
function _M() { let e = new en; return (typeof ngServerMode > "u" || !ngServerMode) && (e.store = Eg(at(), D(ct))), e; }
var en = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: _M });
    store = {};
    onSerializeCallbacks = {};
    get(n, o) { return this.store[n] !== void 0 ? this.store[n] : o; }
    set(n, o) { this.store[n] = o; }
    remove(n) { delete this.store[n]; }
    hasKey(n) { return this.store.hasOwnProperty(n); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(n, o) { this.onSerializeCallbacks[n] = o; }
    toJson() { for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
            try {
                this.store[n] = this.onSerializeCallbacks[n]();
            }
            catch (o) {
                console.warn("Exception in onSerialize callback: ", o);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C"); }
} return e; })();
function Eg(e, t) { let n = e.getElementById(t + "-state"); if (n?.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var hu = "h", gu = "b", Ig = "f", Dg = "n", hr = "e", Is = "t", Jn = "c", gr = "x", ot = "r", Ds = "i", mr = "n", Xn = "d", Cs = "l", Ts = "di", vr = "s", mu = "p", Ms = "t", tn = new S(""), Cg = !1, vu = new S("", { providedIn: "root", factory: () => Cg }), yu = new S(""), Ns = new S(""), Eu = !1, Iu = new S(""), yr = new S("", { providedIn: "root", factory: () => new Map }), wM = new S("");
var qi = { passive: !0, capture: !0 }, Pc = new WeakMap, Lc = new WeakMap, Tn = new WeakMap, Wi = ["click", "keydown"], zi = ["mouseenter", "mouseover", "focusin"], yn = null, Fc = 0, Jo = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function Tg(e, t) { let n = Lc.get(e); if (!n) {
    n = new Jo, Lc.set(e, n);
    for (let o of Wi)
        e.addEventListener(o, n.listener, qi);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    Lc.delete(e);
    for (let i of Wi)
        e.removeEventListener(i, r, qi);
} }; }
function Mg(e, t) { let n = Pc.get(e); if (!n) {
    n = new Jo, Pc.set(e, n);
    for (let o of zi)
        e.addEventListener(o, n.listener, qi);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of zi)
        e.removeEventListener(i, r, qi);
    Pc.delete(e);
} }; }
function SM() { return new IntersectionObserver(e => { for (let t of e)
    t.isIntersecting && Tn.has(t.target) && Tn.get(t.target).listener(); }); }
function bM(e, t, n) { let o = Tn.get(e); return yn = yn || n(), o || (o = new Jo, yn.observe(e), Tn.set(e, o), Fc++), o.callbacks.add(t), () => { Tn.has(e) && (o.callbacks.delete(t), o.callbacks.size === 0 && (yn?.unobserve(e), Tn.delete(e), Fc--), Fc === 0 && (yn?.disconnect(), yn = null)); }; }
var eo = "ngb";
function Du(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(vn.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(vn.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(eo, i); }
var Ng = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, Cu = (e, t) => { let n = e, o = n.getAttribute(eo) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function AM(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(Tu);
} }
var Tu = e => { e.removeAttribute(vn.JSACTION), e.removeAttribute(eo), e.__jsaction_fns = void 0; }, Mu = new S("", { providedIn: "root", factory: () => ({}) });
function Nu(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected))
    for (let o of n)
        o(e); }
var ul = new Map;
function _g(e, t) { return ul.set(e, t), () => ul.delete(e); }
var Op = !1, wg = (e, t, n, o) => { };
function RM(e, t, n, o) { wg(e, t, n, o); }
function Sg() { Op || (wg = (e, t, n, o) => { let r = e[R].get(ct); ul.get(r)?.(t, n, o); }, Op = !0); }
var lt = new S(""), bg = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = D(yr);
    contract = D(Mu);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { AM(n, this.jsActionMap); for (let o of n)
        this.registry.delete(o), this.jsActionMap.delete(o), this.invokeTriggerCleanupFns(o), this.hydrating.delete(o), this.awaitingCallbacks.delete(o); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, o) { let r = []; this.cleanupFns.has(n) && (r = this.cleanupFns.get(n)), r.push(o), this.cleanupFns.set(n, r); }
    invokeTriggerCleanupFns(n) { let o = this.cleanupFns.get(n) ?? []; for (let r of o)
        r(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, o) { let r = this.awaitingCallbacks.get(n) ?? []; r.push(o), this.awaitingCallbacks.set(n, r); }
    static \u0275prov = B({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function to(e) { return (e.flags & 32) === 32; }
var Ag = "__nghData__", _s = Ag, Rg = "__nghDeferData__", ws = Rg;
function OM(e) { return e === Ag || e === Rg; }
var Sn = "ngh", Og = "nghm", kg = () => null;
function kM(e, t, n = !1) { let o = e.getAttribute(Sn); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(en, null, { optional: !0 });
    u !== null && (c = u.get(_s, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, Ss(l, 0, e.nextSibling)), a ? e.setAttribute(Sn, a) : e.removeAttribute(Sn), l; }
function xg() { kg = kM; }
function Pg(e, t, n = !1) { return kg(e, t, n); }
function _u(e) { let t = e._lView; return t[v].type === 2 ? null : (Ve(t) && (t = t[E]), t); }
function xM(e) { return e.textContent?.replace(/\s/gm, ""); }
function PM(e) { let t = at(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = xM(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var Lg = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(Lg || {}), LM = "__ngDebugHydrationInfo__";
function FM(e) { return e[LM] ?? null; }
function Ss(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function dl(e, t) { return e.segmentHeads?.[t] ?? null; }
function Er(e) { return e.get(Iu, !1, { optional: !0 }); }
var jM = !1;
function HM() { jM = !1; }
function Fg(e, t) { let n = e.data, o = n[hr]?.[t] ?? null; return o === null && n[Jn]?.[t] && (o = wu(e, t)), o; }
function VM(e, t) { return e.data[hr]?.[t] !== void 0; }
function jg(e, t) { return e.data[Jn]?.[t] ?? null; }
function wu(e, t) { let n = jg(e, t) ?? [], o = 0; for (let r of n)
    o += r[ot] * (r[gr] ?? 1); return o; }
function Hg(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[Xn];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function bs(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[Xn];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!Hg(e)?.has(t); }
function As(e, t) { let n = e[ne]; return n !== null && !Ro() && !to(t) && !bs(n, t.index - E); }
function Su(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function Vg(e) { let t = []; return e !== null && (e.has(4) && t.push(...zi), e.has(3) && t.push(...Wi)), t; }
function BM(e, t) { let n = t.get(lt), r = t.get(en).get(ws, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][mu];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function UM(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [zi.join(":;"), Wi.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function Bg(e, t) { let n = UM(e), o = t.get(yr); for (let r of n)
    Cu(r, o); }
var Ug = () => ({});
function $M(e) { let t = e.get(en, null, { optional: !0 }); return t !== null ? t.get(ws, {}) : {}; }
function $g() { Ug = $M; }
function GM(e) { return Ug(e); }
function qM(e) { return typeof e == "object" && e.trigger === 5; }
function WM(e) { return e[Ms]?.find(n => qM(n))?.delay ?? null; }
function jc(e, t) { return e[Ms]?.includes(t) ?? !1; }
function zM(e) { return { data: e, hydrate: { idle: jc(e, 0), immediate: jc(e, 1), timer: WM(e), viewport: jc(e, 2) } }; }
function Gg(e) { let t = GM(e), n = new Map; for (let o in t)
    n.set(o, zM(t[o])); return n; }
function Hc(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === Og; }
function kp(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function qg(e) { for (let o of e.body.childNodes)
    if (Hc(o))
        return; let t = kp(e.body.previousSibling); if (Hc(t))
    return; let n = kp(e.head.lastChild); if (!Hc(n))
    throw new w(-507, !1); }
function Wg(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = O(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                Oo(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        O(o);
    }
} }
function fl(e, t, n) { Oo(0); let o = O(null); try {
    t(e, n);
}
finally {
    O(o);
} }
function bu(e, t, n) { if (ec(t)) {
    let o = O(null);
    try {
        let r = t.directiveStart, i = t.directiveEnd;
        for (let s = r; s < i; s++) {
            let a = e.data[s];
            if (a.contentQueries) {
                let c = n[s];
                a.contentQueries(1, c, s);
            }
        }
    }
    finally {
        O(o);
    }
} }
var rt = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e; })(rt || {}), QM = { name: "custom-elements" }, ZM = { name: "no-errors-schema" }, zg = !1;
function YM(e) { zg = e; }
function KM() { return zg; }
var Qg = !1;
function JM(e) { Qg = e; }
function XM() { return Qg; }
var vi;
function Zg() { if (vi === void 0 && (vi = null, Ee.trustedTypes))
    try {
        vi = Ee.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return vi; }
function no(e) { return Zg()?.createHTML(e) || e; }
function eN(e) { return Zg()?.createScriptURL(e) || e; }
var yi;
function Au() { if (yi === void 0 && (yi = null, Ee.trustedTypes))
    try {
        yi = Ee.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return yi; }
function xp(e) { return Au()?.createHTML(e) || e; }
function Pp(e) { return Au()?.createScript(e) || e; }
function Lp(e) { return Au()?.createScriptURL(e) || e; }
var it = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${$r})`; }
}, pl = class extends it {
    getTypeName() { return "HTML"; }
}, hl = class extends it {
    getTypeName() { return "Style"; }
}, gl = class extends it {
    getTypeName() { return "Script"; }
}, ml = class extends it {
    getTypeName() { return "URL"; }
}, vl = class extends it {
    getTypeName() { return "ResourceURL"; }
};
function ut(e) { return e instanceof it ? e.changingThisBreaksApplicationSecurity : e; }
function oo(e, t) { let n = Yg(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${$r})`);
} return n === t; }
function Yg(e) { return e instanceof it && e.getTypeName() || null; }
function tN(e) { return new pl(e); }
function nN(e) { return new hl(e); }
function oN(e) { return new gl(e); }
function rN(e) { return new ml(e); }
function iN(e) { return new vl(e); }
function Kg(e) { let t = new El(e); return sN() ? new yl(t) : t; }
var yl = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(no(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, El = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = no(t), n; }
};
function sN() { try {
    return !!new window.DOMParser().parseFromString(no(""), "text/html");
}
catch {
    return !1;
} }
var aN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function Rs(e) { return e = String(e), e.match(aN) ? e : "unsafe:" + e; }
function dt(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function Ir(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var Jg = dt("area,br,col,hr,img,wbr"), Xg = dt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), em = dt("rp,rt"), cN = Ir(em, Xg), lN = Ir(Xg, dt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), uN = Ir(em, dt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Il = Ir(Jg, lN, uN, cN), Qi = dt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), dN = dt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), fN = dt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), Dl = Ir(Qi, dN, fN), pN = dt("script,style,template"), Cl = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = mN(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = gN(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = Fp(t).toLowerCase(); if (!Il.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !pN.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!Dl.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        Qi[a] && (c = Rs(c)), this.buf.push(" ", s, '="', jp(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = Fp(t).toLowerCase(); Il.hasOwnProperty(n) && !Jg.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(jp(t)); }
};
function hN(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function gN(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw tm(t); return t; }
function mN(e) { let t = e.firstChild; if (t && hN(e, t))
    throw tm(t); return t; }
function Fp(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function tm(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var vN = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, yN = /([^\#-~ |!])/g;
function jp(e) { return e.replace(/&/g, "&amp;").replace(vN, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(yN, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var Ei;
function nm(e, t) { let n = null; try {
    Ei = Ei || Kg(e);
    let o = t ? String(t) : "";
    n = Ei.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = Ei.getInertBodyElement(o);
    } while (o !== i);
    let a = new Cl().sanitizeChildren(Tl(n) || n);
    return no(a);
}
finally {
    if (n) {
        let o = Tl(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function Tl(e) { return "content" in e && EN(e) ? e.content : null; }
function EN(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var IN = /^>|^->|<!--|-->|--!>|<!-$/g, DN = /(<|>)/g, CN = "\u200B$1\u200B";
function TN(e) { return e.replace(IN, t => t.replace(DN, CN)); }
function Ru(e, t) { return e.createText(t); }
function om(e, t, n) { e.setValue(t, n); }
function Ou(e, t) { return e.createComment(TN(t)); }
function Os(e, t, n) { return e.createElement(t, n); }
function Wt(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function rm(e, t, n) { e.appendChild(t, n); }
function Hp(e, t, n, o, r) { o !== null ? Wt(e, t, n, o, r) : rm(e, t, n); }
function Dr(e, t, n, o) { e.removeChild(null, t, n, o); }
function im(e) { e.textContent = ""; }
function MN(e, t, n) { e.setAttribute(t, "style", n); }
function NN(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function sm(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && AT(e, t, o), r !== null && NN(e, t, r), i !== null && MN(e, t, i); }
function _N(e) { let t = g(); e.src = "", e.srcdoc = no(""), Dr(t[T], e); }
var nn = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e; })(nn || {});
function am(e) { let t = Cr(); return t ? xp(t.sanitize(nn.HTML, e) || "") : oo(e, "HTML") ? xp(ut(e)) : nm(at(), N(e)); }
function cm(e) { let t = Cr(); return t ? t.sanitize(nn.STYLE, e) || "" : oo(e, "Style") ? ut(e) : N(e); }
function ku(e) { let t = Cr(); return t ? t.sanitize(nn.URL, e) || "" : oo(e, "URL") ? ut(e) : Rs(N(e)); }
function xu(e) { let t = Cr(); if (t)
    return Lp(t.sanitize(nn.RESOURCE_URL, e) || ""); if (oo(e, "ResourceURL"))
    return Lp(ut(e)); throw new w(904, !1); }
function lm(e) { let t = Cr(); if (t)
    return Pp(t.sanitize(nn.SCRIPT, e) || ""); if (oo(e, "Script"))
    return Pp(ut(e)); throw new w(905, !1); }
function um(e) { return no(e[0]); }
function dm(e) { return eN(e[0]); }
var wN = new Set(["embed", "frame", "iframe", "media", "script"]), SN = new Set(["base", "link", "script"]);
function bN(e, t) { return t === "src" && wN.has(e) || t === "href" && SN.has(e) || t === "xlink:href" && e === "script" ? xu : ku; }
function fm(e, t, n) { return bN(t, n)(e); }
function Cr() { let e = g(); return e && e[Ye].sanitizer; }
var Ii = new Set(["attributename"]), AN = { iframe: new Set(["sandbox", "allow", "allowfullscreen", "referrerpolicy", "csp", "fetchpriority"]), animate: Ii, set: Ii, animatemotion: Ii, animatetransform: Ii };
function pm(e, t, n) { let o = t.toLowerCase(), r = n.toLowerCase(); if (!AN[o]?.has(r))
    return e; let i = we(); if (i.type !== 2)
    return e; let s = g(); if (o === "iframe") {
    let c = oe(i, s);
    _N(c);
} let a = !1; throw new w(-910, a); }
function RN() { return Ze([]); }
function hm(e) { return e.ownerDocument.defaultView; }
function gm(e) { return e.ownerDocument; }
function Pu(e) { return e.ownerDocument.body; }
var ON = "\uFFFD";
function Mn(e) { return e instanceof Function ? e() : e; }
function kN(e, t, n) { let o = e.length; for (;;) {
    let r = e.indexOf(t, n);
    if (r === -1)
        return r;
    if (r === 0 || e.charCodeAt(r - 1) <= 32) {
        let i = t.length;
        if (r + i === o || e.charCodeAt(r + i) <= 32)
            return r;
    }
    n = r + 1;
} }
var mm = "ng-template";
function xN(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && kN(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (Lu(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function Lu(e) { return e.type === 4 && e.value !== mm; }
function PN(e, t, n) { let o = e.type === 4 && !n ? mm : e.value; return t === o; }
function LN(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? HN(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !Pe(o) && !Pe(c))
            return !1;
        if (s && Pe(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !PN(e, c, n) || c === "" && t.length === 1) {
                if (Pe(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !xN(e, r, c, n)) {
                if (Pe(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = FN(c, r, Lu(e), n);
            if (u === -1) {
                if (Pe(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (Pe(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return Pe(o) || s; }
function Pe(e) { return (e & 1) === 0; }
function FN(e, t, n, o) { if (t === null)
    return -1; let r = 0; if (o || !n) {
    let i = !1;
    for (; r < t.length;) {
        let s = t[r];
        if (s === e)
            return r;
        if (s === 3 || s === 6)
            i = !0;
        else if (s === 1 || s === 2) {
            let a = t[++r];
            for (; typeof a == "string";)
                a = t[++r];
            continue;
        }
        else {
            if (s === 4)
                break;
            if (s === 0) {
                r += 4;
                continue;
            }
        }
        r += i ? 1 : 2;
    }
    return -1;
}
else
    return VN(t, e); }
function vm(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if (LN(e, t[o], n))
        return !0; return !1; }
function jN(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function HN(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (Wh(n))
        return t;
} return e.length; }
function VN(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function BN(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function Vp(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function UN(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !Pe(s) && (t += Vp(i, r), r = ""), o = s, i = i || !Pe(o);
    n++;
} return r !== "" && (t += Vp(i, r)), t; }
function $N(e) { return e.map(UN).join(","); }
function GN(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!Pe(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var P = {};
function Fu(e, t, n, o, r, i, s, a, c, l, u) { let d = E + o, f = d + r, p = qN(d, f), h = typeof l == "function" ? l() : l; return p[v] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function qN(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : P); return n; }
function ym(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = Fu(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function ks(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[V] = r, d[b] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[b] & 2048) && (d[b] |= 2048), nc(d), d[z] = d[No] = e, d[F] = n, d[Ye] = s || e && e[Ye], d[T] = a || e && e[T], d[R] = c || e && e[R] || null, d[ae] = i, d[fn] = JT(), d[ne] = u, d[Ja] = l, d[Z] = t.type == 2 ? e[Z] : d, d; }
function WN(e, t, n) { let o = oe(t, e), r = ym(n), i = e[Ye].rendererFactory, s = Hu(e, ks(e, r, null, ju(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function ju(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function Tr(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function Hu(e, t) { return e[Et] ? e[Mo][se] = t : e[Et] = t, e[Mo] = t, t; }
function Em(e = 1) { Im(_(), g(), re() + e, !1); }
function Im(e, t, n, o) { if (!o)
    if ((t[b] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && wi(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && Si(t, i, 0, n);
    } Tt(n); }
var xs = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(xs || {});
function Xo(e, t, n, o) { let r = O(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & xs.SignalBased) !== 0 && (c = t[i][gt]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : jh(t, c, i, o);
}
finally {
    O(r);
} }
var Zi = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(Zi || {}), Ml;
function Vu(e, t) { return Ml(e, t); }
function zN(e) { Ml === void 0 && (Ml = e()); }
function Yi(e) { if (!e)
    return 0; let t = e.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3; return parseFloat(e) * t; }
function bn(e, t) { return e.getPropertyValue(t).split(",").map(o => o.trim()); }
function QN(e) { let t = bn(e, "transition-property"), n = bn(e, "transition-duration"), o = bn(e, "transition-delay"), r = { propertyName: "", duration: 0, animationName: void 0 }; for (let i = 0; i < t.length; i++) {
    let s = Yi(o[i]) + Yi(n[i]);
    s > r.duration && (r.propertyName = t[i], r.duration = s);
} return r; }
function ZN(e) { let t = bn(e, "animation-name"), n = bn(e, "animation-delay"), o = bn(e, "animation-duration"), r = { animationName: "", propertyName: void 0, duration: 0 }; for (let i = 0; i < t.length; i++) {
    let s = Yi(n[i]) + Yi(o[i]);
    s > r.duration && (r.animationName = t[i], r.duration = s);
} return r; }
function Dm(e, t) { return e !== void 0 && e.duration > t.duration; }
function Cm(e) { return (e.animationName != null || e.propertyName != null) && e.duration > 0; }
function YN(e, t) { let n = getComputedStyle(e), o = ZN(n), r = QN(n), i = o.duration > r.duration ? o : r; Dm(t.get(e), i) || Cm(i) && t.set(e, i); }
function Tm(e, t, n) { if (!n)
    return; let o = e.getAnimations(); return o.length === 0 ? YN(e, t) : KN(e, t, o); }
function KN(e, t, n) { let o = { animationName: void 0, propertyName: void 0, duration: 0 }; for (let r of n) {
    let i = r.effect?.getTiming(), s = typeof i?.duration == "number" ? i.duration : 0, a = (i?.delay ?? 0) + s, c, l;
    r.animationName ? l = r.animationName : c = r.transitionProperty, a >= o.duration && (o = { animationName: l, propertyName: c, duration: a });
} Dm(t.get(e), o) || Cm(o) && t.set(e, o); }
var zt = new Set, Ps = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(Ps || {}), ro = new S(""), Bp = new Set;
function Y(e) { Bp.has(e) || (Bp.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var Mm = !1, Nl = class extends au {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) { super(), this.__isAsync = t, Ka() && (this.destroyRef = D(gn, { optional: !0 }) ?? void 0, this.pendingTasks = D(Nt, { optional: !0 }) ?? void 0); }
    emit(t) { let n = O(null); try {
        super.next(t);
    }
    finally {
        O(n);
    } }
    subscribe(t, n, o) { let r = t, i = n || (() => null), s = o; if (t && typeof t == "object") {
        let c = t;
        r = c.next?.bind(c), i = c.error?.bind(c), s = c.complete?.bind(c);
    } this.__isAsync && (i = this.wrapInTimeout(i), r && (r = this.wrapInTimeout(r)), s && (s = this.wrapInTimeout(s))); let a = super.subscribe({ next: r, error: i, complete: s }); return t instanceof cu && t.add(a), a; }
    wrapInTimeout(t) { return n => { let o = this.pendingTasks?.add(); setTimeout(() => { try {
        t(n);
    }
    finally {
        o !== void 0 && this.pendingTasks?.remove(o);
    } }); }; }
}, tt = Nl;
function Nm(e) { let t, n; function o() { e = xo; try {
    n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
}
catch { } } return t = setTimeout(() => { e(), o(); }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => { e(), o(); })), () => o(); }
function Up(e) { return queueMicrotask(() => e()), () => { e = xo; }; }
var Bu = "isAngularZone", Ki = Bu + "_ID", JN = 0, H = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new tt(!1);
    onMicrotaskEmpty = new tt(!1);
    onStable = new tt(!1);
    onError = new tt(!1);
    constructor(t) { let { enableLongStackTrace: n = !1, shouldCoalesceEventChangeDetection: o = !1, shouldCoalesceRunChangeDetection: r = !1, scheduleInRootZone: i = Mm } = t; if (typeof Zone > "u")
        throw new w(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !r && o, s.shouldCoalesceRunChangeDetection = r, s.callbackScheduled = !1, s.scheduleInRootZone = i, t_(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get(Bu) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new w(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new w(909, !1); }
    run(t, n, o) { return this._inner.run(t, n, o); }
    runTask(t, n, o, r) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + r, t, XN, xo, xo); try {
        return i.runTask(s, n, o);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(t, n, o) { return this._inner.runGuarded(t, n, o); }
    runOutsideAngular(t) { return this._outer.run(t); }
}, XN = {};
function Uu(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
    }
    finally {
        if (e._nesting--, !e.hasPendingMicrotasks)
            try {
                e.runOutsideAngular(() => e.onStable.emit(null));
            }
            finally {
                e.isStable = !0;
            }
    } }
function e_(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function t() { Nm(() => { e.callbackScheduled = !1, _l(e), e.isCheckStableRunning = !0, Uu(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { t(); }) : e._outer.run(() => { t(); }), _l(e); }
function t_(e) { let t = () => { e_(e); }, n = JN++; e._inner = e._inner.fork({ name: "angular", properties: { [Bu]: !0, [Ki]: n, [Ki + n]: !0 }, onInvokeTask: (o, r, i, s, a, c) => { if (n_(c))
        return o.invokeTask(i, s, a, c); try {
        return $p(e), o.invokeTask(i, s, a, c);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), Gp(e);
    } }, onInvoke: (o, r, i, s, a, c, l) => { try {
        return $p(e), o.invoke(i, s, a, c, l);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !o_(c) && t(), Gp(e);
    } }, onHasTask: (o, r, i, s) => { o.hasTask(i, s), r === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, _l(e), Uu(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (o, r, i, s) => (o.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function _l(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function $p(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function Gp(e) { e._nesting--, Uu(e); }
var Ln = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new tt;
    onMicrotaskEmpty = new tt;
    onStable = new tt;
    onError = new tt;
    run(t, n, o) { return t.apply(n, o); }
    runGuarded(t, n, o) { return t.apply(n, o); }
    runOutsideAngular(t) { return t(); }
    runTask(t, n, o, r) { return t.apply(n, o); }
};
function n_(e) { return _m(e, "__ignore_ng_zone__"); }
function o_(e) { return _m(e, "__scheduler_tick__"); }
function _m(e, t) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0; }
function wm(e = "zone.js", t) { return e === "noop" ? new Ln : e === "zone.js" ? new H(t) : e; }
var Ls = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), $u = [0, 1, 2, 3], Gu = (() => { class e {
    ngZone = D(H);
    scheduler = D(Xe);
    errorHandler = D(pi, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { D(ro, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && x(16), this.executing = !0; for (let o of $u)
        for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[o]))
                try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = r.hooks[o]; return i(r.pipelinedValue); }, r.snapshot));
                }
                catch (i) {
                    r.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let o of this.sequences)
        o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()); for (let o of this.deferredRegistrations)
        this.sequences.add(o); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && x(17); }
    register(n) { let { view: o } = n; o !== void 0 ? ((o[Lt] ??= []).push(n), si(o), o[b] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run(Ps.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), er = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, o, r, i, s = null) { this.impl = t, this.hooks = n, this.view = o, this.once = r, this.snapshot = s, this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()); }
    afterRun() { this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot?.dispose(), this.snapshot = null; }
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[Lt]; t && (this.view[Lt] = t.filter(n => n !== this)); }
};
function Sm(e, t) { let n = t?.injector ?? D(Ce); return typeof ngServerMode < "u" && ngServerMode ? Fs : (Y("NgAfterRender"), bm(e, n, t, !1)); }
function qu(e, t) { let n = t?.injector ?? D(Ce); return typeof ngServerMode < "u" && ngServerMode ? Fs : (Y("NgAfterNextRender"), bm(e, n, t, !0)); }
function r_(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function bm(e, t, n, o) { let r = t.get(Ls); r.impl ??= t.get(Gu); let i = t.get(ro, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(gn) : null, a = t.get(hi, null, { optional: !0 }), c = new er(r.impl, r_(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var Fs = { destroy() { } }, js = new S("", { providedIn: "root", factory: () => ({ queue: new Set, isScheduled: !1, scheduler: null }) });
function Am(e, t, n) { let o = e.get(js); if (Array.isArray(t))
    for (let r of t)
        o.queue.add(r), n?.detachedLeaveAnimationFns?.push(r);
else
    o.queue.add(t), n?.detachedLeaveAnimationFns?.push(t); o.scheduler && o.scheduler(e); }
function i_(e, t) { let n = e.get(js); if (t.detachedLeaveAnimationFns) {
    for (let o of t.detachedLeaveAnimationFns)
        n.queue.delete(o);
    t.detachedLeaveAnimationFns = void 0;
} }
function s_(e) { let t = e.get(js); t.isScheduled || (qu(() => { t.isScheduled = !1; for (let n of t.queue)
    n(); t.queue.clear(); }, { injector: e }), t.isScheduled = !0); }
function Hs(e) { let t = e.get(js); t.scheduler = s_, t.scheduler(e); }
function Wu(e, t) { for (let [n, o] of t)
    Am(e, o.animateFns); }
function qp(e, t, n, o) { let r = e?.[Je]?.enter; t !== null && r && r.has(n.index) && Wu(o, r); }
function Nn(e, t, n, o, r, i, s, a) { if (r != null) {
    let c, l = !1;
    J(r) ? c = r : K(r) && (l = !0, r = r[V]);
    let u = k(r);
    e === 0 && o !== null ? (qp(a, o, i, n), s == null ? rm(t, o, u) : Wt(t, o, u, s || null, !0)) : e === 1 && o !== null ? (qp(a, o, i, n), Wt(t, o, u, s || null, !0)) : e === 2 ? Wp(a, i, n, d => { Dr(t, u, l, d); }) : e === 3 && Wp(a, i, n, () => { t.destroyNode(u); }), c != null && p_(t, e, n, c, i, o, s);
} }
function Rm(e, t) { Om(e, t), t[V] = null, t[ae] = null; }
function a_(e, t, n, o, r, i) { o[V] = r, o[ae] = t, Vs(e, o, n, 1, r, i); }
function Om(e, t) { t[Ye].changeDetectionScheduler?.notify(9), Vs(e, t, t[T], 2, null, null); }
function c_(e) { let t = e[Et]; if (!t)
    return Vc(e[v], e); for (; t;) {
    let n = null;
    if (K(t))
        n = t[Et];
    else {
        let o = t[j];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[se] && t !== e;)
            K(t) && Vc(t[v], t), t = t[z];
        t === null && (t = e), K(t) && Vc(t[v], t), n = t && t[se];
    }
    t = n;
} }
function zu(e, t) { let n = e[Ft], o = n.indexOf(t); n.splice(o, 1); }
function Mr(e, t) { if (It(t))
    return; let n = t[T]; n.destroyNode && Vs(e, t, n, 3, null, null), c_(t); }
function Vc(e, t) { if (It(t))
    return; let n = O(null); try {
    t[b] &= -129, t[b] |= 256, t[_e] && yo(t[_e]), d_(e, t), u_(e, t), t[v].type === 1 && t[T].destroy();
    let o = t[Ke];
    if (o !== null && J(t[z])) {
        o !== t[z] && zu(o, t);
        let r = t[He];
        r !== null && r.detachView(e);
    }
    al(t);
}
finally {
    O(n);
} }
function Wp(e, t, n, o) { let r = e?.[Je]; if (r == null || r.leave == null || !r.leave.has(t.index))
    return o(!1); e && zt.add(e), Am(n, () => { if (r.leave && r.leave.has(t.index)) {
    let s = r.leave.get(t.index), a = [];
    if (s) {
        for (let c = 0; c < s.animateFns.length; c++) {
            let l = s.animateFns[c], { promise: u } = l();
            a.push(u);
        }
        r.detachedLeaveAnimationFns = void 0;
    }
    r.running = Promise.allSettled(a), l_(e, o);
}
else
    e && zt.delete(e), o(!1); }, r); }
function l_(e, t) { let n = e[Je]?.running; if (n) {
    n.then(() => { e[Je].running = void 0, zt.delete(e), t(!0); });
    return;
} t(!1); }
function u_(e, t) { let n = e.cleanup, o = t[Pt]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[Pt] = null); let r = t[Xa]; if (r !== null) {
    t[Xa] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[_o]; if (i !== null) {
    t[_o] = null;
    for (let s of i)
        s.destroy();
} }
function d_(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof qt)) {
            let i = n[o + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = r[i[s]], c = i[s + 1];
                    x(4, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        x(5, a, c);
                    }
                }
            else {
                x(4, r, i);
                try {
                    i.call(r);
                }
                finally {
                    x(5, r, i);
                }
            }
        }
    } }
function Qu(e, t, n) { return km(e, t.parent, n); }
function km(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[V]; if (me(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === rt.None || r === rt.Emulated)
        return null;
} return oe(o, n); }
function xm(e, t, n) { return Lm(e, t, n); }
function Pm(e, t, n) { return e.type & 40 ? oe(e, n) : null; }
var Lm = Pm, wl;
function Fm(e, t) { Lm = e, wl = t; }
function Zu(e, t, n, o) { let r = Qu(e, o, t), i = t[T], s = o.parent || t[ae], a = xm(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            Hp(i, r, n[c], a, !1);
    else
        Hp(i, r, n, a, !1); wl !== void 0 && wl(i, o, t, n, r); }
function $t(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return oe(t, e);
    if (n & 4)
        return Ji(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return $t(e, o);
        {
            let r = e[t.index];
            return J(r) ? Ji(-1, r) : k(r);
        }
    }
    else {
        if (n & 128)
            return $t(e, t.next);
        if (n & 32)
            return Vu(t, e)() || k(e[t.index]);
        {
            let o = jm(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = Ht(e[Z]);
                return $t(r, o);
            }
            else
                return $t(e, t.next);
        }
    }
} return null; }
function jm(e, t) { if (t !== null) {
    let o = e[Z][ae], r = t.projection;
    return o.projection[r];
} return null; }
function Ji(e, t) { let n = j + e + 1; if (n < t.length) {
    let o = t[n], r = o[v].firstChild;
    if (r !== null)
        return $t(o, r);
} return t[ke]; }
function Yu(e, t, n, o, r, i, s) { for (; n != null;) {
    let a = o[R];
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let c = o[n.index], l = n.type;
    if (s && t === 0 && (c && Se(k(c), o), n.flags |= 2), !to(n))
        if (l & 8)
            Yu(e, t, n.child, o, r, i, !1), Nn(t, e, a, r, c, n, i, o);
        else if (l & 32) {
            let u = Vu(n, o), d;
            for (; d = u();)
                Nn(t, e, a, r, d, n, i, o);
            Nn(t, e, a, r, c, n, i, o);
        }
        else
            l & 16 ? Hm(e, t, o, n, r, i) : Nn(t, e, a, r, c, n, i, o);
    n = s ? n.projectionNext : n.next;
} }
function Vs(e, t, n, o, r, i) { Yu(n, o, e.firstChild, t, r, i, !1); }
function f_(e, t, n) { let o = t[T], r = Qu(e, n, t), i = n.parent || t[ae], s = xm(i, n, t); Hm(o, 0, t, n, r, s); }
function Hm(e, t, n, o, r, i) { let s = n[Z], c = s[ae].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        Nn(t, e, n[R], r, u, o, i, n);
    }
else {
    let l = c, u = s[z];
    Ko(o) && (l.flags |= 128), Yu(e, t, l, u, r, i, !0);
} }
function p_(e, t, n, o, r, i, s) { let a = o[ke], c = k(o); a !== c && Nn(t, e, n, i, a, r, s); for (let l = j; l < o.length; l++) {
    let u = o[l];
    Vs(u[v], u, e, t, i, a);
} }
function h_(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : Zi.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= Zi.Important), e.setStyle(n, o, r, i));
} }
function Vm(e, t, n, o, r) { let i = re(), s = o & 2; try {
    Tt(-1), s && t.length > E && Im(e, t, E, !1), x(s ? 2 : 0, r, n), n(o, r);
}
finally {
    Tt(i), x(s ? 3 : 1, r, n);
} }
function Bs(e, t, n) { E_(e, t, n), (n.flags & 64) === 64 && I_(e, t, n); }
function io(e, t, n = oe) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function g_(e, t, n, o) { let i = o.get(vu, Cg) || n === rt.ShadowDom, s = e.selectRootElement(t, i); return m_(s), s; }
function m_(e) { Bm(e); }
var Bm = () => null;
function v_(e) { sg(e) ? im(e) : PM(e); }
function Um() { Bm = v_; }
function y_(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function Ku(e, t, n, o, r, i) { let s = t[v]; if (qs(e, s, t, n, o)) {
    me(e) && $m(t, e.index);
    return;
} e.type & 3 && (n = y_(n)), Ju(e, t, n, o, r, i); }
function Ju(e, t, n, o, r, i) { if (e.type & 3) {
    let s = oe(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function $m(e, t) { let n = ue(t, e); n[b] & 16 || (n[b] |= 64); }
function E_(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; me(n) && WN(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || Ui(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = Yo(t, e, s, n);
    if (Se(c, t), i !== null && T_(t, s - o, c, a, n, i), ve(a)) {
        let l = ue(n.index, t);
        l[F] = Yo(t, e, s, n);
    }
} }
function I_(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = hp(); try {
    Tt(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        yc(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && D_(c, l);
    }
}
finally {
    Tt(-1), yc(s);
} }
function D_(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function Xu(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        vm(t, i.selectors, !1) && (o ??= [], ve(i) ? o.unshift(i) : o.push(i));
    } return o; }
function C_(e, t, n, o, r, i) { let s = oe(e, t); Us(t[T], s, i, e.value, n, o, r); }
function Us(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? N(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function T_(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        Xo(o, n, c, l);
    } }
function $s(e, t, n, o, r) { let i = E + n, s = t[v], a = r(s, t, e, o, n); t[i] = a, Be(e, !0); let c = e.type === 2; return c ? (sm(t[T], a, e), (cp() === 0 || pn(e)) && Se(a, t), lp()) : Se(a, t), ko() && (!c || !to(e)) && Zu(s, t, a, e), e; }
function Gs(e) { let t = e; return dc() ? fc() : (t = t.parent, Be(t, !1)), t; }
function Gm(e, t, n) { return (e === null || ve(e)) && (n = So(n[t.index])), n[T]; }
function ed(e, t) { let n = e[R]; if (!n)
    return; let o; try {
    o = n.get(Mt, null);
}
catch {
    o = null;
} o?.(t); }
function qs(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        Xo(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        Xo(u, l, o, r), a = !0;
    } return a; }
function M_(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], m = d[f + 1];
            Xo(h, n[p], m, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (Xo(o, n[s], r, i), l = !0), l; }
function N_(e, t) { let n = ue(t, e), o = n[v]; __(o, n); let r = n[V]; r !== null && n[ne] === null && (n[ne] = Pg(r, n[R])), x(18), Ws(o, n, n[F]), x(19, n[F]); }
function __(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function Ws(e, t, n) { di(t); try {
    let o = e.viewQuery;
    o !== null && fl(1, o, n);
    let r = e.template;
    r !== null && Vm(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[He]?.finishViewCreation(e), e.staticContentQueries && Wg(e, t), e.staticViewQueries && fl(2, e.viewQuery, n);
    let i = e.components;
    i !== null && w_(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[b] &= -5, fi();
} }
function w_(e, t) { for (let n = 0; n < t.length; n++)
    N_(e, t[n]); }
function so(e, t, n, o) { let r = O(null); try {
    let i = t.tView, a = e[b] & 4096 ? 4096 : 16, c = ks(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[Ke] = l;
    let u = e[He];
    return u !== null && (c[He] = u.createEmbeddedView(i)), Ws(i, c, n), c;
}
finally {
    O(r);
} }
function Qt(e, t) { return !t || t.firstChild === null || Ko(e); }
function Fn(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(k(i)), J(i) && zs(i, o);
    let s = n.type;
    if (s & 8)
        Fn(e, t, n.child, o);
    else if (s & 32) {
        let a = Vu(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = jm(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = Ht(t[Z]);
            Fn(c[v], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function zs(e, t) { for (let n = j; n < e.length; n++) {
    let o = e[n], r = o[v].firstChild;
    r !== null && Fn(o[v], o, r, t);
} e[ke] !== e[V] && t.push(e[ke]); }
function qm(e) { if (e[Lt] !== null) {
    for (let t of e[Lt])
        t.impl.addSequence(t);
    e[Lt].length = 0;
} }
var Wm = [];
function S_(e) { return e[_e] ?? b_(e); }
function b_(e) { let t = Wm.pop() ?? Object.create(R_); return t.lView = e, t; }
function A_(e) { e.lView[_e] !== e && (e.lView = null, Wm.push(e)); }
var R_ = Fe(W({}, ja), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { si(e.lView); }, consumerOnSignalRead() { this.lView[_e] = this; } });
function O_(e) { let t = e[_e] ?? Object.create(k_); return t.lView = e, t; }
var k_ = Fe(W({}, ja), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = Ht(e.lView); for (; t && !zm(t[v]);)
        t = Ht(t); t && ri(t); }, consumerOnSignalRead() { this.lView[_e] = this; } });
function zm(e) { return e.type !== 2; }
function Qm(e) { if (e[_o] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[_o])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[b] & 8192);
} }
var x_ = 100;
function Zm(e, t = 0) { let o = e[Ye].rendererFactory, r = !1; r || o.begin?.(); try {
    P_(e, t);
}
finally {
    r || o.end?.();
} }
function P_(e, t) { let n = hc(); try {
    gc(!0), Sl(e, t);
    let o = 0;
    for (; Ao(e);) {
        if (o === x_)
            throw new w(103, !1);
        o++, Sl(e, 1);
    }
}
finally {
    gc(n);
} }
function Ym(e, t, n, o) { if (It(t))
    return; let r = t[b], i = !1, s = !1; di(t); let a = !0, c = null, l = null; i || (zm(e) ? (l = S_(t), c = vo(l)) : jf() === null ? (a = !1, l = O_(t), c = vo(l)) : t[_e] && (yo(t[_e]), t[_e] = null)); try {
    nc(t), mc(e.bindingStartIndex), n !== null && Vm(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && wi(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && Si(t, p, 0, null), kc(t, 0);
        }
    if (s || L_(t), Qm(t), Km(t, 0), e.contentQueries !== null && Wg(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && wi(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && Si(t, p, 1), kc(t, 1);
        }
    j_(e, t);
    let d = e.components;
    d !== null && Xm(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && fl(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && wi(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && Si(t, p, 2), kc(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[oi]) {
        for (let p of t[oi])
            p();
        t[oi] = null;
    }
    i || (qm(t), t[b] &= -73);
}
catch (u) {
    throw i || si(t), u;
}
finally {
    l !== null && (Br(l, c), a && A_(l)), fi();
} }
function Km(e, t) { for (let n = fg(e); n !== null; n = pg(n))
    for (let o = j; o < n.length; o++) {
        let r = n[o];
        Jm(r, t);
    } }
function L_(e) { for (let t = fg(e); t !== null; t = pg(t)) {
    if (!(t[b] & 2))
        continue;
    let n = t[Ft];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        ri(r);
    }
} }
function F_(e, t, n) { x(18); let o = ue(t, e); Jm(o, n), x(19, o[F]); }
function Jm(e, t) { np(e) && Sl(e, t); }
function Sl(e, t) { let o = e[v], r = e[b], i = e[_e], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && Ur(i)), s ||= !1, i && (i.dirty = !1), e[b] &= -9217, s)
    Ym(o, e, o.template, e[F]);
else if (r & 8192) {
    let a = O(null);
    try {
        Qm(e), Km(e, 1);
        let c = o.components;
        c !== null && Xm(e, c, 1), qm(e);
    }
    finally {
        O(a);
    }
} }
function Xm(e, t, n) { for (let o = 0; o < t.length; o++)
    F_(e, t[o], n); }
function j_(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                Tt(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                pp(s, i);
                let c = t[i];
                x(24, c), a(2, c), x(25, c);
            }
        }
    }
    finally {
        Tt(-1);
    } }
function Nr(e, t) { let n = hc() ? 64 : 1088; for (e[Ye].changeDetectionScheduler?.notify(t); e;) {
    e[b] |= n;
    let o = Ht(e);
    if (Ve(e) && !o)
        return e;
    e = o;
} return null; }
function ev(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function tv(e, t) { let n = j + t; if (n < e.length)
    return e[n]; }
function ao(e, t, n, o = !0) { let r = t[v]; if (H_(r, t, e, n), o) {
    let s = Ji(n, e), a = t[T], c = a.parentNode(e[ke]);
    c !== null && a_(r, e[ae], a, t, c, s);
} let i = t[ne]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function td(e, t) { let n = tr(e, t); return n !== void 0 && Mr(n[v], n), n; }
function tr(e, t) { if (e.length <= j)
    return; let n = j + t, o = e[n]; if (o) {
    let r = o[Ke];
    r !== null && r !== e && zu(r, o), t > 0 && (e[n - 1][se] = o[se]);
    let i = Io(e, j + t);
    Rm(o[v], o);
    let s = i[He];
    s !== null && s.detachView(i[v]), o[z] = null, o[se] = null, o[b] &= -129;
} return o; }
function H_(e, t, n, o) { let r = j + o, i = n.length; o > 0 && (n[r - 1][se] = t), o < i - j ? (t[se] = n[r], za(n, j + o, t)) : (n.push(t), t[se] = null), t[z] = n; let s = t[Ke]; s !== null && n !== s && nv(s, t); let a = t[He]; a !== null && a.insertView(e), ii(t), t[b] |= 128; }
function nv(e, t) { let n = e[Ft], o = t[z]; if (K(o))
    e[b] |= 2;
else {
    let r = o[z][Z];
    t[Z] !== r && (e[b] |= 2);
} n === null ? e[Ft] = [t] : n.push(t); }
var bt = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[v]; return Fn(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[F]; }
    set context(t) { this._lView[F] = t; }
    get destroyed() { return It(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[z];
        if (J(t)) {
            let n = t[wo], o = n ? n.indexOf(this) : -1;
            o > -1 && (tr(t, o), Io(n, o));
        }
        this._attachedToViewContainer = !1;
    } Mr(this._lView[v], this._lView); }
    onDestroy(t) { ai(this._lView, t); }
    markForCheck() { Nr(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[b] &= -129; }
    reattach() { ii(this._lView), this._lView[b] |= 128; }
    detectChanges() { this._lView[b] |= 1024, Zm(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new w(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = Ve(this._lView), n = this._lView[Ke]; n !== null && !t && zu(n, this._lView), Om(this._lView[v], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new w(902, !1); this._appRef = t; let n = Ve(this._lView), o = this._lView[Ke]; o !== null && !n && nv(o, this._lView), ii(this._lView); }
};
function V_(e) { return Ao(e._lView) || !!(e._lView[b] & 64); }
function B_(e) { ri(e._lView); }
var nr = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = U_;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = so(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new bt(i); }
} return e; })();
function U_() { return Qs(M(), g()); }
function Qs(e, t) { return e.type & 4 ? new nr(t, e, Zn(e, t)) : null; }
var bl = "<-- AT THIS LOCATION";
function $_(e) { switch (e) {
    case 4: return "view container";
    case 2: return "element";
    case 8: return "ng-container";
    case 32: return "icu";
    case 64: return "i18n";
    case 16: return "projection";
    case 1: return "text";
    case 128: return "@let";
    default: return "<unknown>";
} }
function G_(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${Q_(e, t, !1)}

`, r = Y_();
    throw new w(-502, n + o + r);
}
function ov(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${Z_(e)}

`, o = t + n + K_();
    return new w(-503, o);
}
function q_(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${Xi(r)}"`);
    } return t.join(" "); }
var W_ = new Set(["ngh", "ng-version", "ng-server-context"]);
function z_(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    W_.has(o.name) || t.push(`${o.name}="${Xi(o.value)}"`);
} return t.join(" "); }
function Bc(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = q_(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${$_(e.type)})`;
} }
function Ri(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = z_(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? Xi(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${Xi(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function Q_(e, t, n) {
    let r = "";
    t.prev ? (r += `  \u2026
`, r += "  " + Bc(t.prev) + `
`) : t.type && t.type & 12 && (r += `  \u2026
`), n ? (r += "  " + Bc(t) + `
`, r += `  <!-- container -->  ${bl}
`) : r += "  " + Bc(t) + `  ${bl}
`, r += `  \u2026
`;
    let i = t.type ? Qu(e[v], t, e) : null;
    return i && (r = Ri(i, `
` + r)), r;
}
function Z_(e) {
    let n = "", o = e;
    return o.previousSibling && (n += `  \u2026
`, n += "  " + Ri(o.previousSibling) + `
`), n += "  " + Ri(o) + `  ${bl}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = Ri(o.parentNode, `
` + n)), n;
}
function Y_(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function K_() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function J_(e) { return e.replace(/\s+/gm, ""); }
function Xi(e, t = 50) { return e ? (e = J_(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function rv(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? Pm(e, t, n) : k(n[r]); }
function iv(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            Wt(e, s, l, a, !1);
        }
} }
function on(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = nd(e, t, n, o, r), fp() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = hn();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return Be(i, !0), i; }
function nd(e, t, n, o, r) { let i = dp(), s = dc(), a = s ? i : i && i.parent, c = e.data[t] = ew(e, a, n, t, o, r); return X_(e, c, i, s), c; }
function X_(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function ew(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return Ro() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function sv(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        av(o) || tw(o, t) && nw(o) === null && ow(o, t.index);
    } }
function av(e) { return !(e.type & 64); }
function tw(e, t) { return av(t) || e.index > t.index; }
function nw(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function ow(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (Fm(rv, iv), e.insertBeforeIndex = t); }
function jo(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function rw(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function iw(e, t) { let n = e.insertBeforeIndex; n === null ? (Fm(rv, iv), n = e.insertBeforeIndex = [null, t]) : ($f(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function sw(e, t, n) { let o = nd(e, n, 64, null, null); return sv(t, o), o; }
function Zs(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function aw(e) { return e >>> 17; }
function cw(e) { return (e & 131070) >>> 1; }
function lw(e, t, n) { return e | t << 17 | n << 1; }
function cv(e) { return e === -1; }
function od(e, t, n) { e.index = 0; let o = Zs(t, n); o !== null ? e.removes = t.remove[o] : e.removes = L; }
function es(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[v].data[n];
        return od(e, o, e.lView), es(e);
    }
}
else
    return e.stack.length === 0 ? (e.lView = void 0, null) : (e.removes = e.stack.pop(), e.index = e.stack.pop(), es(e)); }
function uw() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return od(e, n.value, o), es.bind(null, e); } return t; }
function dw(e, t) { let n = { stack: [], index: -1, lView: t }; return od(n, e, t), es.bind(null, n); }
var fw = new RegExp(`^(\\d+)*(${gu}|${hu})*(.*)`);
function pw(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function hw(e) { let t = e.match(fw), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function gw(e) { return !e.prev && e.parent?.type === 8; }
function Uc(e) { return e.index - E; }
function co(e, t) { return !(e.type & 144) && !!t[e.index] && lv(k(t[e.index])); }
function lv(e) { return !!e && !e.isConnected; }
function uv(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function mw(e, t, n) { let r = e.data[mr]?.[n]; return r ? dv(r, t) : null; }
function _r(e, t, n, o) { let r = Uc(o), i = uv(e, r); if (i === void 0) {
    let s = e.data[mr];
    if (s?.[r])
        i = dv(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if (gw(o)) {
            let l = Uc(o.parent);
            i = dl(e, l);
        }
        else {
            let l = oe(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = Uc(c), d = dl(e, u);
                if (c.type === 2 && d) {
                    let p = wu(e, u) + 1;
                    i = Ys(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function Ys(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function vw(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
    let r = t[o], i = t[o + 1];
    for (let s = 0; s < i; s++)
        switch (r) {
            case Ig:
                n = n.firstChild;
                break;
            case Dg:
                n = n.nextSibling;
                break;
        }
} return n; }
function dv(e, t) { let [n, ...o] = hw(e), r; if (n === hu)
    r = t[Z][V];
else if (n === gu)
    r = Pu(t[Z][V]);
else {
    let i = Number(n);
    r = k(t[i + E]);
} return vw(r, o); }
function Al(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return yw(e, t); {
    let n = t.parentElement, o = Al(e, n), r = Al(n.firstChild, t);
    return !o || !r ? null : [...o, Ig, ...r];
} }
function yw(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(Dg); return o == null ? null : n; }
function zp(e, t, n) { let o = Al(e, t); return o === null ? null : pw(n, o); }
function fv(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (co(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = hu, i = t[Z][V]) : (r = o.index, i = k(t[r]), s = N(r - E)); let a = k(t[e.index]); if (e.type & 44) {
    let l = $t(t, e);
    l && (a = l);
} let c = zp(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = zp(l, a, gu), c === null)
        throw G_(t, e);
} return c; }
function pv(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: Ew }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function Ew(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var hv = !1, gv = () => { };
function rd(e) { hv = e; }
function Ks() { return hv; }
function Iw(e, t, n, o) { gv(e, t, n, o); }
function mv() { gv = Nw; }
function vv(e) { return e = e ?? D(Ce), e.get(yu, !1); }
function yv(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = Dw(e), t.i18nChildren.set(e, n)), n; }
function Dw(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
    case 1:
    case 2: {
        for (let r of o.children)
            n(r);
        break;
    }
    case 3: {
        for (let r of o.cases)
            for (let i of r)
                n(i);
        break;
    }
} } for (let o = E; o < e.bindingStartIndex; o++) {
    let r = e.data[o];
    if (!(!r || !r.ast))
        for (let i of r.ast)
            n(i);
} return t.size === 0 ? null : t; }
function Ev(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[v], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && ag(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return Rl(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function Rl(e, t, n, o) { let r = null; for (let i of o) {
    let s = Tw(e, t, n, i);
    s && (Cw(r, s) && t.disjointNodes.add(i.index - E), r = s);
} return r; }
function Cw(e, t) { return e && e.nextSibling !== t; }
function Tw(e, t, n, o) { let r = k(e[o.index]); if (!r || lv(r))
    return t.disconnectedNodes.add(o.index - E), null; let i = r; switch (o.kind) {
    case 0: {
        Su(n, i);
        break;
    }
    case 1:
    case 2: {
        Rl(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), Rl(e, t, n, o.cases[a]);
        }
        break;
    }
} return Mw(e, o); }
function Mw(e, t) { let o = e[v].data[t.index]; return gs(o) ? $t(e, o) : t.kind === 3 ? dw(o, e)() ?? k(e[t.index]) : k(e[t.index]) ?? null; }
function Vt(e, t) { e.currentNode = t; }
function Po(e, t, n) { let o = n.index - E, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function $c(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function Gc(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function Nw(e, t, n, o) { let r = e[ne]; if (!r || !Ks() || n && (ag(n) || bs(r, n.index - E)))
    return; let i = e[v], s = i.data[t]; function a() { if (cv(o)) {
    let p = _r(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = Hg(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[Cs]?.[t - E] ?? [], f = r.dehydratedIcuData ??= new Map; En({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function En(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = mw(e.hydrationInfo, e.lView, r.index - E);
        i && (o = Gc(t, i)), En(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - E))
        return;
    switch (n.kind) {
        case 0: {
            let o = Po(e, t, n);
            Vt(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            En(e, Gc(t, t.currentNode?.firstChild ?? null), n.children);
            let o = Po(e, t, n);
            Vt(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - E, { hydrationInfo: r } = e, i = Fg(r, o);
            switch (n.type) {
                case 0: {
                    let s = Po(e, t, n);
                    if (VM(r, o)) {
                        En(e, t, n.children);
                        let a = $c(t, 1);
                        Vt(t, a);
                    }
                    else if (En(e, Gc(t, t.currentNode?.firstChild ?? null), n.children), Vt(t, s?.nextSibling ?? null), i !== null) {
                        let a = $c(t, i + 1);
                        Vt(t, a);
                    }
                    break;
                }
                case 1: {
                    Po(e, t, n);
                    let s = $c(t, i + 1);
                    Vt(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                En(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = Po(e, t, n);
            Vt(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var Iv = () => { };
function _w(e, t, n) { Iv(e, t, n); }
function Dv() { Iv = ww; }
function ww(e, t, n) { let o = e[ne]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function Sw(e) { let t = e[ne]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[T];
        for (let i of o.values())
            bw(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function bw(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - E);
    r && Dr(e, r, !1);
} }
function Js(e) { let t = e[De] ?? [], o = e[z][T], r = []; for (let i of t)
    i.data[Ts] !== void 0 ? r.push(i) : Cv(i, o); e[De] = r; }
function Aw(e) { let { lContainer: t } = e, n = t[De]; if (n === null)
    return; let r = t[z][T]; for (let i of n)
    Cv(i, r); }
function Cv(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[ot];
    for (; n < r;) {
        let i = o.nextSibling;
        Dr(t, o, !1), o = i, n++;
    }
} }
function Xs(e) { Js(e); let t = e[V]; K(t) && ts(t); for (let n = j; n < e.length; n++)
    ts(e[n]); }
function ts(e) { Sw(e); let t = e[v]; for (let n = E; n < t.bindingStartIndex; n++)
    if (J(e[n])) {
        let o = e[n];
        Xs(o);
    }
    else
        K(e[n]) && ts(e[n]); }
function id(e) { let t = e._views; for (let n of t) {
    let o = _u(n);
    o !== null && o[V] !== null && (K(o) ? ts(o) : Xs(o));
} }
function Rw(e, t, n, o) { e !== null && (n.cleanup(t), Xs(e.lContainer), id(o)); }
function Ow(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[gr] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[ot] > 0 && (i.firstChild = e, e = Ys(o[ot], e)), n.push(i);
    } return [e, n]; }
var Tv = () => null, Mv = () => null;
function Nv() { Tv = kw, Mv = xw; }
function kw(e, t) { return wv(e, t) ? e[De].shift() : (Js(e), null); }
function or(e, t) { return Tv(e, t); }
function xw(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = or(e, t.tView.ssrId); return n[v].firstUpdatePass && o === null && Pw(n, t), o; }
function _v(e, t, n) { return Mv(e, t, n); }
function Pw(e, t) { let n = t; for (; n;) {
    if (Qp(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (Qp(e, n))
        return;
    n = n.next;
} }
function wv(e, t) { let n = e[De]; return !t || n === null || n.length === 0 ? !1 : n[0].data[Ds] === t; }
function Qp(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return J(o) && wv(o, n) ? (Js(o), !0) : !1; }
var Sv = class {
}, ea = class {
}, Ol = class {
    resolveComponentFactory(t) { throw new w(917, !1); }
}, wr = class {
    static NULL = new Ol;
}, rr = class {
}, Lw = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => Fw();
} return e; })();
function Fw() { let e = g(), t = M(), n = ue(t.index, e); return (K(n) ? n : e)[T]; }
var bv = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function sd(e) { return e.ngModule !== void 0; }
function Bt(e) { return !!un(e); }
function Di(e) { return !!je(e); }
function Zp(e) { return !!Ne(e); }
function Ho(e) { return !!q(e); }
function jw(e) { return q(e) ? "component" : Ne(e) ? "directive" : je(e) ? "pipe" : "type"; }
function Hw(e, t) { if (qr(e) && (e = G(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${Ie(t)}", to return a standalone entity or NgModule but got "${Ie(e) || e}".`); if (un(e) == null) {
    let n = q(e) || Ne(e) || je(e);
    if (n != null) {
        if (!n.standalone)
            throw new Error(`The "${Ie(e)}" ${jw(e)}, imported from "${Ie(t)}", is not standalone. Did you forget to add the standalone: true flag?`);
    }
    else
        throw sd(e) ? new Error(`A module with providers was imported from "${Ie(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${Ie(e)}" type, imported from "${Ie(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var kl = class {
    ownerNgModule = new Map;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new Map;
    standaloneComponentsScopeCache = new Map;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = un(t);
            if (n?.declarations)
                for (let o of Mn(n.declarations))
                    Ho(o) && this.ownerNgModule.set(o, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let o = q(t); if (o === null)
        throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`); if (o.standalone) {
        let r = this.getStandaloneComponentScope(t, n);
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes, ...r.compilation.ngModules] };
    }
    else {
        if (!this.ownerNgModule.has(t))
            return { dependencies: [] };
        let r = this.getNgModuleScope(this.ownerNgModule.get(t));
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes] };
    } }
    registerNgModule(t, n) { if (!Bt(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = Xr(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of Mn(n.imports))
        if (Bt(r)) {
            let i = this.getNgModuleScope(r);
            _t(i.exported.directives, o.compilation.directives), _t(i.exported.pipes, o.compilation.pipes);
        }
        else if (To(r))
            if (Zp(r) || Ho(r))
                o.compilation.directives.add(r);
            else if (Di(r))
                o.compilation.pipes.add(r);
            else
                throw new w(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of Mn(n.declarations)) {
            if (Bt(r) || To(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            Di(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of Mn(n.exports))
        if (Bt(r)) {
            let i = this.getNgModuleScope(r);
            _t(i.exported.directives, o.exported.directives), _t(i.exported.pipes, o.exported.pipes), _t(i.exported.directives, o.compilation.directives), _t(i.exported.pipes, o.compilation.pipes);
        }
        else
            Di(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of Oe(n ?? [])) {
        let i = G(r);
        try {
            Hw(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (Bt(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            _t(s.exported.directives, o.compilation.directives), _t(s.exported.pipes, o.compilation.pipes);
        }
        else if (Di(i))
            o.compilation.pipes.add(i);
        else if (Zp(i) || Ho(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = q(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function _t(e, t) { for (let n of e)
    t.add(n); }
var jn = new kl, Oi = {}, An = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, Oi, o); return r !== Oi || n === Oi ? r : this.parentInjector.get(t, n, o); }
};
function ns(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = Gr(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = Gr(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function lo(e, t = 0) { let n = g(); if (n === null)
    return Re(e, t); let o = M(); return Xh(o, n, G(e), t); }
function Av() { let e = "invalid"; throw new Error(e); }
function Rv(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    Uw(e, t, n, a, i, c, l);
} i !== null && o !== null && Vw(n, o, i); }
function Vw(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new w(-301, !1);
    o.push(t[r], i);
} }
function Bw(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function Uw(e, t, n, o, r, i, s) { let a = o.length, c = !1; for (let f = 0; f < a; f++) {
    let p = o[f];
    !c && ve(p) && (c = !0, Bw(e, n, f)), il(Ui(n, t), e, p.type);
} Qw(n, e.data.length, a); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = Tr(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = Pn(n.mergedAttrs, p.hostAttrs), Gw(e, n, t, d, p), zw(d, p, r), s !== null && s.has(p)) {
        let [m, y] = s.get(p);
        n.directiveToIndex.set(p.type, [d, m + n.directiveStart, y + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} $w(e, n, i); }
function $w(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        Yp(0, t, r, o), Yp(1, t, r, o), Jp(t, o, !1);
    else {
        let i = n.get(r);
        Kp(0, t, i, o), Kp(1, t, i, o), Jp(t, o, !0);
    }
} }
function Yp(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), Ov(t, i);
    } }
function Kp(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), Ov(t, s);
    } }
function Ov(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function Jp(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || Lu(e)) {
    e.initialInputs ??= [], e.initialInputs.push(null);
    return;
} let s = null, a = 0; for (; a < o.length;) {
    let c = o[a];
    if (c === 0) {
        a += 4;
        continue;
    }
    else if (c === 5) {
        a += 2;
        continue;
    }
    else if (typeof c == "number")
        break;
    if (!n && r.hasOwnProperty(c)) {
        let l = r[c];
        for (let u of l)
            if (u === t) {
                s ??= [], s.push(c, o[a + 1]);
                break;
            }
    }
    else if (n && i.hasOwnProperty(c)) {
        let l = i[c];
        for (let u = 0; u < l.length; u += 2)
            if (l[u] === t) {
                s ??= [], s.push(l[u + 1], o[a + 1]);
                break;
            }
    }
    a += 2;
} e.initialInputs ??= [], e.initialInputs.push(s); }
function Gw(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = Yr(r.type, !0)), s = new qt(i, ve(r), lo, null); e.blueprint[o] = s, n[o] = s, qw(e, t, o, Tr(e, n, r.hostVars, P), r); }
function qw(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    Ww(s) != a && s.push(a), s.push(n, o, i);
} }
function Ww(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function zw(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    ve(t) && (n[""] = e);
} }
function Qw(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function ad(e, t, n, o, r, i, s, a) { let c = t[v], l = c.consts, u = ce(l, s), d = on(c, e, n, o, u); return i && Rv(c, t, d, ce(l, a), r), d.mergedAttrs = Pn(d.mergedAttrs, d.attrs), d.attrs !== null && ns(d, d.attrs, !1), d.mergedAttrs !== null && ns(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function cd(e, t) { $h(e, t), ec(t) && e.queries.elementEnd(t); }
function kv(e, t, n, o, r, i) { let s = t.consts, a = ce(s, r), c = on(t, e, n, o, a); if (c.mergedAttrs = Pn(c.mergedAttrs, c.attrs), i != null) {
    let l = ce(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && ns(c, c.attrs, !1), c.mergedAttrs !== null && ns(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function ir(e) { return ta(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function Zw(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function xv(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function ta(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function Pv(e, t) { let n = ir(e), o = ir(t); return n && o ? Zw(e, t, Pv) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function We(e, t, n) { return e[t] = n; }
function Sr(e, t) { return e[t]; }
function $(e, t, n) { if (n === P)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function Zt(e, t, n, o) { let r = $(e, t, n); return $(e, t + 1, o) || r; }
function na(e, t, n, o, r) { let i = Zt(e, t, n, o); return $(e, t + 2, r) || i; }
function be(e, t, n, o, r, i) { let s = Zt(e, t, n, o); return Zt(e, t + 2, r, i) || s; }
function Vo(e, t, n) { return function o(r) { let i = me(e) ? ue(e.index, t) : t; Nr(i, 5); let s = t[F], a = Xp(t, s, n, r), c = o.__ngNextListenerFn__; for (; c;)
    a = Xp(t, s, c, r) && a, c = c.__ngNextListenerFn__; return a; }; }
function Xp(e, t, n, o) { let r = Ep(null); try {
    return x(6, t, n), n(o) !== !1;
}
catch (i) {
    return ed(e, i), !1;
}
finally {
    x(7, t, n), Ep(r);
} }
function Lv(e, t, n, o, r, i, s, a) { let c = pn(e), l = !1, u = null; if (!o && c && (u = Kw(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = oe(e, n), f = o ? o(d) : d;
    RM(n, f, i, a);
    let p = r.listen(f, i, a);
    if (!Yw(i)) {
        let h = o ? m => o(k(m[e.index])) : e.index;
        Fv(h, t, n, i, a, p, !1);
    }
} return l; }
function Yw(e) { return e.startsWith("animation") || e.startsWith("transition"); }
function Kw(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[Pt], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function Fv(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? sp(t) : null, c = ip(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function Jw(e, t, n, o, r) { let i = Vo(e, t, n), s = Xw(e, t, o, r, i); }
function Xw(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, os(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, os(e, t, i, o, o, r)), c; }
function os(e, t, n, o, r, i) { let s = t[n], a = t[v], l = a.data[n].outputs[o], d = s[l].subscribe(i); Fv(e.index, a, t, r, i, d, !0); }
var St = Symbol("BINDING"), eS = { kind: "input", requiredVars: 1 }, tS = { kind: "output", requiredVars: 0 };
function nS(e, t, n) { let o = g(), r = fe(); if ($(o, r, n)) {
    let i = o[v], s = we(), a = ue(s.index, o);
    Nr(a, 1);
    let c = i.directiveRegistry[e], l = M_(s, i, o, c, t, n);
} }
function jv(e, t) { let n = { [St]: eS, update: () => nS(n.targetIdx, e, t()) }; return n; }
function Hv(e, t) { let n = { [St]: tS, create: () => { let o = g(), r = M(), s = o[v].directiveRegistry[n.targetIdx]; Jw(r, o, t, s, e); } }; return n; }
function oS(e, t) { let n = jv(e, t), o = Hv(e + "Change", i => t.set(i)); return { [St]: { kind: "twoWay", requiredVars: n[St].requiredVars + o[St].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
var rs = class extends wr {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = q(t); return new At(n, this.ngModule); }
};
function rS(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & xs.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function iS(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function sS(e, t, n) { let o = t instanceof yt ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new An(n, o) : n; }
function aS(e) { let t = e.get(rr, null); if (t === null)
    throw new w(407, !1); let n = e.get(bv, null), o = e.get(Xe, null); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1 }; }
function cS(e, t) { let n = Vv(e); return Os(t, n, n === "svg" ? Jf : n === "math" ? Xf : null); }
function Vv(e) { return (e.selectors[0][0] || "div").toLowerCase(); }
var At = class extends ea {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= rS(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= iS(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = $N(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { x(22); let a = O(null); try {
        let c = this.componentDef, l = lS(o, c, s, i), u = sS(c, r || this.ngModule, t), d = aS(u), f = d.rendererFactory.createRenderer(null, c), p = o ? g_(f, o, c.encapsulation, u) : cS(c, f), h = s?.some(eh) || i?.some(I => typeof I != "function" && I.bindings.some(eh)), m = ks(null, l, null, 512 | ju(c), null, null, d, f, u, null, Pg(p, u, !0));
        m[E] = p, di(m);
        let y = null;
        try {
            let I = ad(E, m, 2, "#host", () => l.directiveRegistry, !0, 0);
            sm(f, p, I), Se(p, m), Bs(l, m, I), bu(l, I, m), cd(l, I), n !== void 0 && dS(I, this.ngContentSelectors, n), y = ue(I.index, m), m[F] = y[F], Ws(l, m, null);
        }
        catch (I) {
            throw y !== null && al(y), al(m), I;
        }
        finally {
            x(23), fi();
        }
        return new is(this.componentType, m, !!h);
    }
    finally {
        O(a);
    } }
};
function lS(e, t, n, o) { let r = e ? ["ng-version", "20.3.17"] : GN(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[St].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[St].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = Ne(d);
        c.push(f);
    } return Fu(0, null, uS(i, s), 1, a, c, null, null, null, [r], null); }
function uS(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function eh(e) { let t = e[St].kind; return t === "input" || t === "twoWay"; }
var is = class extends Sv {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = Dt(n[v], E), this.location = Zn(this._tNode, n), this.instance = ue(this._tNode.index, n)[F], this.hostView = this.changeDetectorRef = new bt(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = qs(o, r[v], r, t, n); this.previousInputValues.set(t, n); let s = ue(o.index, r); Nr(s, 1); }
    get injector() { return new wt(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function dS(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var oa = (() => { class e {
    static __NG_ELEMENT_ID__ = fS;
} return e; })();
function fS() { let e = M(); return Uv(e, g()); }
var pS = oa, Bv = class extends pS {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return Zn(this._hostTNode, this._hostLView); }
    get injector() { return new wt(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = uu(this._hostTNode, this._hostLView); if (zh(t)) {
        let n = Vi(t, this._hostLView), o = Hi(t), r = n[v].data[o + 8];
        return new wt(r, n);
    }
    else
        return new wt(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = th(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - j; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = or(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, Qt(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !Lo(t), l; if (c)
        l = n;
    else {
        let y = n || {};
        l = y.index, o = y.injector, r = y.projectableNodes, i = y.environmentInjector || y.ngModuleRef, s = y.directives, a = y.bindings;
    } let u = c ? t : new At(q(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let I = (c ? d : this.parentInjector).get(yt, null);
        I && (i = I);
    } let f = q(u.componentType ?? {}), p = or(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, m = u.create(d, r, h, i, s, a); return this.insertImpl(m.hostView, l, Qt(this._hostTNode, p)), m; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if (op(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[z], l = new Bv(c, c[ae], c[z]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return ao(s, r, i, o), t.attachToViewContainerRef(), za(qc(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = th(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = tr(this._lContainer, n); o && (Io(qc(this._lContainer), n), Mr(o[v], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = tr(this._lContainer, n); return o && Io(qc(this._lContainer), n) != null ? new bt(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function th(e) { return e[wo]; }
function qc(e) { return e[wo] || (e[wo] = []); }
function Uv(e, t) { let n, o = t[e.index]; return J(o) ? n = o : (n = ev(o, t, null, e), t[e.index] = n, Hu(t, n)), $v(n, t, e, o), new Bv(n, e, t); }
function hS(e, t) { let n = e[T], o = n.createComment(""), r = oe(t, e), i = n.parentNode(r); return Wt(n, i, o, n.nextSibling(r), !1), o; }
var $v = qv, ld = () => !1;
function Gv(e, t, n) { return ld(e, t, n); }
function qv(e, t, n, o) { if (e[ke])
    return; let r; n.type & 8 ? r = k(o) : r = hS(t, n), e[ke] = r; }
function gS(e, t, n) { if (e[ke] && e[De])
    return !0; let o = n[ne], r = t.index - E; if (!o || Kn(t) || bs(o, r))
    return !1; let s = dl(o, r), a = o.data[Jn]?.[r], [c, l] = Ow(s, a); return e[ke] = c, e[De] = l, !0; }
function mS(e, t, n, o) { ld(e, n, t) || qv(e, t, n, o); }
function Wv() { $v = mS, ld = gS; }
var xl = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, Pl = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    createEmbeddedView(t) { let n = t.queries; if (n !== null) {
        let o = t.contentQueries !== null ? t.contentQueries[0] : n.length, r = [];
        for (let i = 0; i < o; i++) {
            let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
            r.push(a.clone());
        }
        return new e(r);
    } return null; }
    insertView(t) { this.dirtyQueriesWithMatches(t); }
    detachView(t) { this.dirtyQueriesWithMatches(t); }
    finishViewCreation(t) { this.dirtyQueriesWithMatches(t); }
    dirtyQueriesWithMatches(t) { for (let n = 0; n < this.queries.length; n++)
        dd(t, n).matches !== null && this.queries[n].setDirty(); }
}, ss = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = DS(t) : this.predicate = t; }
}, Ll = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    elementStart(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].elementStart(t, n); }
    elementEnd(t) { for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t); }
    embeddedTView(t) { let n = null; for (let o = 0; o < this.length; o++) {
        let r = n !== null ? n.length : 0, i = this.getByIndex(o).embeddedTView(t, r);
        i && (i.indexInDeclarationView = o, n !== null ? n.push(i) : n = [i]);
    } return n !== null ? new e(n) : null; }
    template(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].template(t, n); }
    getByIndex(t) { return this.queries[t]; }
    get length() { return this.queries.length; }
    track(t) { this.queries.push(t); }
}, Fl = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) { this.metadata = t, this._declarationNodeIndex = n; }
    elementStart(t, n) { this.isApplyingToNode(n) && this.matchTNode(t, n); }
    elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
    template(t, n) { this.elementStart(t, n); }
    embeddedTView(t, n) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null; }
    isApplyingToNode(t) { if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, o = t.parent;
        for (; o !== null && o.type & 8 && o.index !== n;)
            o = o.parent;
        return n === (o !== null ? o.index : -1);
    } return this._appliesToNextNode; }
    matchTNode(t, n) { let o = this.metadata.predicate; if (Array.isArray(o))
        for (let r = 0; r < o.length; r++) {
            let i = o[r];
            this.matchTNodeWithReadOption(t, n, vS(n, i)), this.matchTNodeWithReadOption(t, n, bi(n, t, i, !1, !1));
        }
    else
        o === nr ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, bi(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === pr || r === oa || r === nr && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = bi(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function vS(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function yS(e, t) { return e.type & 11 ? Zn(e, t) : e.type & 4 ? Qs(e, t) : null; }
function ES(e, t, n, o) { return n === -1 ? yS(t, e) : n === -2 ? IS(e, t, o) : Yo(e, e[v], n, t); }
function IS(e, t, n) { if (n === pr)
    return Zn(t, e); if (n === nr)
    return Qs(t, e); if (n === oa)
    return Uv(t, e); }
function zv(e, t, n, o) { let r = t[He].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(ES(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function jl(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = zv(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = j; d < u.length; d++) {
                let f = u[d];
                f[Ke] === f[z] && jl(f[v], f, l, o);
            }
            if (u[Ft] !== null) {
                let d = u[Ft];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    jl(p[v], p, l, o);
                }
            }
        }
    }
} return o; }
function ud(e, t) { return e[He].queries[t].queryList; }
function Qv(e, t, n) { let o = new $i((n & 4) === 4); return ap(e, t, o, o.destroy), (t[He] ??= new Pl).queries.push(new xl(o)) - 1; }
function Zv(e, t, n) { let o = _(); return o.firstCreatePass && (Kv(o, new ss(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), Qv(o, g(), t); }
function Yv(e, t, n, o) { let r = _(); if (r.firstCreatePass) {
    let i = M();
    Kv(r, new ss(t, n, o), i.index), CS(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return Qv(r, g(), n); }
function DS(e) { return e.split(",").map(t => t.trim()); }
function Kv(e, t, n) { e.queries === null && (e.queries = new Ll), e.queries.track(new Fl(t, n)); }
function CS(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function dd(e, t) { return e.queries.getByIndex(t); }
function Jv(e, t) { let n = e[v], o = dd(n, t); return o.crossesNgTemplate ? jl(n, e, t, []) : zv(n, e, o, t); }
function fd(e, t, n) { let o, r = Hf(() => { o._dirtyCounter(); let i = TS(o, e); if (t && i === void 0)
    throw new w(-951, !1); return i; }); return o = r[gt], o._dirtyCounter = _c(0), o._flatValue = void 0, r; }
function pd(e) { return fd(!0, !1, e); }
function hd(e) { return fd(!0, !0, e); }
function gd(e) { return fd(!1, !1, e); }
function Xv(e, t) { let n = e[gt]; n._lView = g(), n._queryIndex = t, n._queryList = ud(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function TS(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[b] & 4)
    return t ? void 0 : L; let r = ud(n, o), i = Jv(n, o); return r.reset(i, ig), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
function ey(e) { let t = [], n = new Map; function o(r) { let i = n.get(r); if (!i) {
    let s = e(r);
    n.set(r, i = s.then(a => wS(r, a)));
} return i; } return Hn.forEach((r, i) => { let s = []; r.templateUrl && s.push(o(r.templateUrl).then(l => { r.template = l; })); let a = typeof r.styles == "string" ? [r.styles] : r.styles || []; if (r.styles = a, r.styleUrl && r.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); if (r.styleUrls?.length) {
    let l = r.styles.length, u = r.styleUrls;
    r.styleUrls.forEach((d, f) => { a.push(""), s.push(o(d).then(p => { a[l + f] = p, u.splice(u.indexOf(d), 1), u.length == 0 && (r.styleUrls = void 0); })); });
}
else
    r.styleUrl && s.push(o(r.styleUrl).then(l => { a.push(l), r.styleUrl = void 0; })); let c = Promise.all(s).then(() => SS(i)); t.push(c); }), ny(), Promise.all(t).then(() => { }); }
var Hn = new Map, sr = new Set;
function MS(e, t) { ty(t) && (Hn.set(e, t), sr.add(e)); }
function NS(e) { return sr.has(e); }
function ty(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls && e.styleUrls.length || e.styleUrl); }
function ny() { let e = Hn; return Hn = new Map, e; }
function _S(e) { sr.clear(), e.forEach((t, n) => sr.add(n)), Hn = e; }
function oy() { return Hn.size === 0; }
function wS(e, t) { return typeof t == "string" ? t : t.status !== void 0 && t.status !== 200 ? Promise.reject(new w(918, !1)) : t.text(); }
function SS(e) { sr.delete(e); }
var Hl = new Map, ry = !0;
function bS(e, t, n) { if (t && t !== n && ry)
    throw new Error(`Duplicate module registered for ${e} - ${an(t)} vs ${an(t.name)}`); }
function md(e, t) { let n = Hl.get(t) || null; bS(t, n, e), Hl.set(t, e); }
function vd(e) { return Hl.get(e); }
function AS(e) { ry = !e; }
var Vn = class {
}, iy = class {
};
function sy(e, t) { return new Bn(e, t ?? null, []); }
var RS = sy, Bn = class extends Vn {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new rs(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = un(t); this._bootstrapComponents = Mn(i.bootstrap), this._r3Injector = mp(t, n, [{ provide: Vn, useValue: this }, { provide: wr, useValue: this.componentFactoryResolver }, ...o], an(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, Un = class extends iy {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new Bn(this.moduleType, t, []); }
};
function ay(e, t, n) { return new Bn(e, t, n, !1); }
var ar = class extends Vn {
    injector;
    componentFactoryResolver = new rs(this);
    instance = null;
    constructor(t) { super(); let n = new Ya([...t.providers, { provide: Vn, useValue: this }, { provide: wr, useValue: this.componentFactoryResolver }], t.parent || ti(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function yd(e, t, n = null) { return new ar({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var OS = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = Za(!1, n.type), r = o.length > 0 ? yd([o], this._injector, `Standalone[${n.type.name}]`) : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e(Re(yt)) });
} return e; })();
function cy(e) { return qe(() => { let t = fy(e), n = Fe(W({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === ys.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(OS).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || rt.Emulated, styles: e.styles || L, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && Y("NgStandalone"), py(n); let o = e.dependencies; return n.directiveDefs = as(o, ly), n.pipeDefs = as(o, je), n.id = LS(n), n; }); }
function ly(e) { return q(e) || Ne(e); }
function Ed(e) { return qe(() => ({ type: e.type, bootstrap: e.bootstrap || L, declarations: e.declarations || L, imports: e.imports || L, exports: e.exports || L, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function kS(e, t) { if (e == null)
    return Me; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = xs.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function xS(e) { if (e == null)
    return Me; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function uy(e) { return qe(() => { let t = fy(e); return py(t), t; }); }
function dy(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function fy(e) { let t = {}; return { type: e.type, providersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || Me, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || L, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, inputs: kS(e.inputs, t), outputs: xS(e.outputs), debugInfo: null }; }
function py(e) { e.features?.forEach(t => t(e)); }
function as(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var PS = new Map;
function LS(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function hy(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function Id(e) { let t = hy(e.type), n = !0, o = [e]; for (; t;) {
    let r;
    if (ve(e))
        r = t.\u0275cmp || t.\u0275dir;
    else {
        if (t.\u0275cmp)
            throw new w(903, !1);
        r = t.\u0275dir;
    }
    if (r) {
        if (n) {
            o.push(r);
            let s = e;
            s.inputs = Wc(e.inputs), s.declaredInputs = Wc(e.declaredInputs), s.outputs = Wc(e.outputs);
            let a = r.hostBindings;
            a && BS(e, a);
            let c = r.viewQuery, l = r.contentQueries;
            if (c && HS(e, c), l && VS(e, l), FS(e, r), Uf(e.outputs, r.outputs), ve(r) && r.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(r.data.animation);
            }
        }
        let i = r.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === Id && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} jS(o); }
function FS(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function jS(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = Pn(r.hostAttrs, n = Pn(n, r.hostAttrs));
} }
function Wc(e) { return e === Me ? {} : e === L ? [] : e; }
function HS(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function VS(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function BS(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
var US = ["providersResolver"], $S = ["template", "decls", "consts", "vars", "onPush", "ngContentSelectors", "styles", "encapsulation", "schemas"];
function gy(e) { let t = hy(e.type), n; ve(e) ? n = t.\u0275cmp : n = t.\u0275dir; let o = e; for (let r of US)
    o[r] = n[r]; if (ve(n))
    for (let r of $S)
        o[r] = n[r]; }
function my(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = GS, n.hostDirectives = o ? e.map(Vl) : [e]) : o ? n.hostDirectives.unshift(...e.map(Vl)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function GS(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, vy(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && ve(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function vy(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                nh(Vl(i), t, n);
        }
        else
            nh(o, t, n); }
function nh(e, t, n) { let o = Ne(e.directive); qS(o.declaredInputs, e.inputs), vy(o, t, n), n.set(o, e), t.push(o); }
function Vl(e) { return typeof e == "function" ? { directive: G(e), inputs: Me, outputs: Me } : { directive: G(e.directive), inputs: oh(e.inputs), outputs: oh(e.outputs) }; }
function oh(e) { if (e === void 0 || e.length === 0)
    return Me; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function qS(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function yy(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = Pn(e.mergedAttrs, e.attrs);
    let u = e.tView = Fu(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), Be(e, !1); let c = Ey(n, t, e, o); ko() && Zu(n, t, c, e), Se(c, t); let l = ev(c, t, c, e); t[o + E] = l, Hu(t, l), Gv(l, e, t); }
function WS(e, t, n, o, r, i, s, a, c, l, u) { let d = n + E, f; return t.firstCreatePass ? (f = on(t, d, 4, s || null, a || null), ci() && Rv(t, e, f, ce(t.consts, l), Xu), $h(t, f)) : f = t.data[d], yy(f, e, t, n, o, r, i, c), pn(f) && Bs(t, e, f), l != null && io(e, f, u), f; }
function Yt(e, t, n, o, r, i, s, a, c, l, u) { let d = n + E, f; if (t.firstCreatePass) {
    if (f = on(t, d, 4, s || null, a || null), l != null) {
        let p = ce(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return yy(f, e, t, n, o, r, i, c), l != null && io(e, f, u), f; }
function Dd(e, t, n, o, r, i, s, a) { let c = g(), l = _(), u = ce(l.consts, i); return WS(c, l, e, t, n, o, r, u, void 0, s, a), Dd; }
function Cd(e, t, n, o, r, i, s, a) { let c = g(), l = _(), u = ce(l.consts, i); return Yt(c, l, e, t, n, o, r, u, void 0, s, a), Cd; }
var Ey = Iy;
function Iy(e, t, n, o) { return xe(!0), t[T].createComment(""); }
function zS(e, t, n, o) { let r = !As(t, n); xe(r); let i = t[ne]?.data[Is]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return Iy(e, t); let s = t[ne], a = _r(s, e, t, n); Ss(s, o, a); let c = wu(s, o); return Ys(c, a); }
function Dy() { Ey = zS; }
var X = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(X || {}), rh = 0, QS = 1, U = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })(U || {}), cr = (function (e) { return e[e.Initial = -1] = "Initial", e; })(cr || {}), Rn = 0, ft = 1, Fo = 2, Ci = 3, ZS = 4, YS = 5, ra = 6, KS = 7, On = 8, JS = 9, Td = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(Td || {});
function br(e, t, n) { let o = Ty(e); t[o] === null && (t[o] = []), t[o].push(n); }
function ki(e, t) { let n = Ty(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function Cy(e) { ki(1, e), ki(0, e), ki(2, e); }
function Ty(e) { let t = ZS; return e === 1 ? t = YS : e === 2 && (t = JS), t; }
function Ar(e) { return e + 1; }
function he(e, t) { let n = e[v], o = Ar(t.index); return e[o]; }
function XS(e, t, n) { let o = e[v], r = Ar(t); e[r] = n; }
function ie(e, t) { let n = Ar(t.index); return e.data[n]; }
function eb(e, t, n) { let o = Ar(t); e.data[o] = n; }
function tb(e, t, n) { let o = t[v], r = ie(o, n); switch (e) {
    case U.Complete: return r.primaryTmplIndex;
    case U.Loading: return r.loadingTmplIndex;
    case U.Error: return r.errorTmplIndex;
    case U.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function Bl(e, t) { return t === U.Placeholder ? e.placeholderBlockConfig?.[rh] ?? null : t === U.Loading ? e.loadingBlockConfig?.[rh] ?? null : null; }
function My(e) { return e.loadingBlockConfig?.[QS] ?? null; }
function ih(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function nb(e, t) { let n = t.primaryTmplIndex + E; return Dt(e, n); }
function Ny(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function _y(e, t) { let n = null, o = Ar(t.index); return E < o && o < e.bindingStartIndex && (n = ie(e, t)), !!n && Ny(n); }
function Md(e, t, n) { let o = n.get(H); return bM(e, () => o.run(t), () => o.runOutsideAngular(() => SM())); }
function ob(e, t, n) { return n == null ? e : n >= 0 ? rp(n, e) : e[t.index][j] ?? null; }
function rb(e, t) { return jt(E + t, e); }
function uo(e, t, n, o, r, i, s) { let a = e[R], c = a.get(H), l; function u() { if (It(e)) {
    l.destroy();
    return;
} let d = he(e, t), f = d[ft]; if (f !== cr.Initial && f !== U.Placeholder) {
    l.destroy();
    return;
} let p = ob(e, t, o); if (!p || (l.destroy(), It(p)))
    return; let h = rb(p, n), m = r(h, () => { c.run(() => { e !== p && oc(p, m), i(); }); }, a); e !== p && ai(p, m), br(s, d, m); } l = Sm({ read: u }, { injector: a }); }
function ia(e, t) { let n = t.get(ab), o = () => n.remove(e); return n.add(e), o; }
var ib = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, sb = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, ab = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = D(H);
    requestIdleCallbackFn = ib().bind(globalThis);
    cancelIdleCallbackFn = sb().bind(globalThis);
    add(n) { (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback(); }
    remove(n) { let { current: o, deferred: r } = this; o.delete(n), r.delete(n), o.size === 0 && r.size === 0 && this.cancelIdleCallback(); }
    scheduleIdleCallback() { let n = () => { this.cancelIdleCallback(), this.executingCallbacks = !0; for (let o of this.current)
        o(); if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (let o of this.deferred)
            this.current.add(o);
        this.deferred.clear(), this.scheduleIdleCallback();
    } }; this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n)); }
    cancelIdleCallback() { this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null); }
    ngOnDestroy() { this.cancelIdleCallback(), this.current.clear(), this.deferred.clear(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function sa(e) { return (t, n) => wy(e, t, n); }
function wy(e, t, n) { let o = n.get(Sy), r = n.get(H), i = () => o.remove(t); return o.add(e, t, r), i; }
var Sy = (() => { class e {
    executingCallbacks = !1;
    timeoutId = null;
    invokeTimerAt = null;
    current = [];
    deferred = [];
    add(n, o, r) { let i = this.executingCallbacks ? this.deferred : this.current; this.addToQueue(i, Date.now() + n, o), this.scheduleTimer(r); }
    remove(n) { let { current: o, deferred: r } = this; this.removeFromQueue(o, n) === -1 && this.removeFromQueue(r, n), o.length === 0 && r.length === 0 && this.clearTimeout(); }
    addToQueue(n, o, r) { let i = n.length; for (let s = 0; s < n.length; s += 2)
        if (n[s] > o) {
            i = s;
            break;
        } zf(n, i, o, r); }
    removeFromQueue(n, o) { let r = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === o) {
            r = i;
            break;
        } return r > -1 && Qa(n, r, 2), r; }
    scheduleTimer(n) { let o = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && Qa(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let c = 0; c < this.deferred.length; c += 2) {
            let l = this.deferred[c], u = this.deferred[c + 1];
            this.addToQueue(this.current, l, u);
        }
        this.deferred.length = 0;
    } this.scheduleTimer(n); }; if (this.current.length > 0) {
        let i = Date.now(), s = this.current[0];
        if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            this.invokeTimerAt = s, this.timeoutId = n.runOutsideAngular(() => setTimeout(() => n.run(o), a));
        }
    } }
    clearTimeout() { this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null); }
    ngOnDestroy() { this.clearTimeout(), this.current.length = 0, this.deferred.length = 0; }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), cb = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? yd(r, o, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), lb = new S("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), by = new S("");
function zc(e, t, n) { return e.get(cb).getOrCreateInjector(t, e, n, ""); }
function ub(e, t, n) { if (e instanceof An) {
    let r = e.injector, i = e.parentInjector, s = zc(i, t, n);
    return new An(r, s);
} let o = e.get(yt); if (o !== e) {
    let r = zc(o, t, n);
    return new An(e, r);
} return zc(e, t, n); }
function nt(e, t, n, o = !1) { let r = n[z], i = r[v]; if (It(r))
    return; let s = he(r, t), a = s[ft], c = s[KS]; if (!(c !== null && e < c) && ah(a, e) && ah(s[Rn] ?? -1, e)) {
    let l = ie(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (My(l) !== null || Bl(l, U.Loading) !== null || Bl(l, U.Placeholder)) ? Ul : Ay;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        ed(r, f);
    }
} }
function db(e, t) { let n = e[De]?.findIndex(r => r.data[vr] === t[ft]) ?? -1; return { dehydratedView: n > -1 ? e[De][n] : null, dehydratedViewIx: n }; }
function Ay(e, t, n, o, r) { x(20); let i = tb(e, r, o); if (i !== null) {
    t[ft] = e;
    let s = r[v], a = i + E, c = Dt(s, a), l = 0;
    td(n, l);
    let u;
    if (e === U.Complete) {
        let h = ie(s, o), m = h.providers;
        m && m.length > 0 && (u = ub(r[R], h, m));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = db(n, t), p = so(r, c, null, { injector: u, dehydratedView: d });
    if (ao(n, p, l, Qt(c, d)), Nr(p, 2), f > -1 && n[De]?.splice(f, 1), (e === U.Complete || e === U.Error) && Array.isArray(t[On])) {
        for (let h of t[On])
            h();
        t[On] = null;
    }
} x(21); }
function fb(e, t, n, o, r) { let i = Date.now(), s = r[v], a = ie(s, o); if (t[Fo] === null || t[Fo] <= i) {
    t[Fo] = null;
    let c = My(a), l = t[Ci] !== null;
    if (e === U.Loading && c !== null && !l) {
        t[Rn] = e;
        let u = sh(c, t, o, n, r);
        t[Ci] = u;
    }
    else {
        e > U.Loading && l && (t[Ci](), t[Ci] = null, t[Rn] = null), Ay(e, t, n, o, r);
        let u = Bl(a, e);
        u !== null && (t[Fo] = i + u, sh(u, t, o, n, r));
    }
}
else
    t[Rn] = e; }
function sh(e, t, n, o, r) { return wy(e, () => { let s = t[Rn]; t[Fo] = null, t[Rn] = null, s !== null && nt(s, n, o); }, r[R]); }
function ah(e, t) { return e < t; }
function fo(e, t) { let n = e[t.index]; nt(U.Placeholder, t, n); }
function ch(e, t, n) { e.loadingPromise.then(() => { e.loadingState === X.COMPLETE ? nt(U.Complete, t, n) : e.loadingState === X.FAILED && nt(U.Error, t, n); }); }
var Ul = null;
function Ry(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = ce(r, n)), o != null && (t.loadingBlockConfig = ce(r, o)), Ul === null && (Ul = fb); }
var xi = "__ngAsyncComponentMetadataFn__";
function pb(e) { return e[xi] ?? null; }
function Oy(e, t, n) { let o = e; return o[xi] = () => Promise.all(t()).then(r => (n(...r), o[xi] = null, r)), o[xi]; }
function Nd(e, t, n, o) { return qe(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = W(W({}, r.propDecorators), o) : r.propDecorators = o); }); }
var hb = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function Pi(e, t) { let n = e[v]; for (let o = E; o < n.bindingStartIndex; o++)
    if (J(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = ie(n, s);
            if (Ny(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        K(r[V]) && Pi(r[V], t);
        for (let s = j; s < r.length; s++)
            Pi(r[s], t);
    }
    else
        K(e[o]) && Pi(e[o], t); }
function gb() { return Y("Chrome DevTools profiling"), () => { }; }
function mb(e) { let t = at(), n = e.get(ct), o = Eg(t, n), r = {}; for (let [i, s] of Object.entries(o))
    OM(i) || (r[i] = s); return r; }
var lh = "ng";
function vb(e, t) { yb(e, t); }
function yb(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = Ee;
    n[lh] ??= {}, n[lh][e] = t;
} }
var ky = new S(""), xy = new S(""), Eb = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, Ka() && (this._destroyRef = D(gn, { optional: !0 }) ?? void 0), _d || (Ly(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), o = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { H.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), o.unsubscribe(); }); }
    isStable() { return this._isZoneStable && !this._ngZone.hasPendingMacrotasks; }
    _runCallbacksIfReady() { if (this.isStable())
        queueMicrotask(() => { for (; this._callbacks.length !== 0;) {
            let n = this._callbacks.pop();
            clearTimeout(n.timeoutId), n.doneCb();
        } });
    else {
        let n = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(o => o.updateCb && o.updateCb(n) ? (clearTimeout(o.timeoutId), !1) : !0);
    } }
    getPendingTasks() { return this._taskTrackingZone ? this._taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
    addCallback(n, o, r) { let i = -1; o && o > 0 && (i = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== i), n(); }, o)), this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: r }); }
    whenStable(n, o, r) { if (r && !this._taskTrackingZone)
        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, o, r), this._runCallbacksIfReady(); }
    registerApplication(n) { this.registry.registerApplication(n, this); }
    unregisterApplication(n) { this.registry.unregisterApplication(n); }
    findProviders(n, o, r) { return []; }
    static \u0275fac = function (o) { return new (o || e)(Re(H), Re(Py), Re(xy)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac });
} return e; })(), Py = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return _d?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function Ly(e) { _d = e; }
var _d;
function wd(e) { return !!e && typeof e.then == "function"; }
function Fy(e) { return !!e && typeof e.subscribe == "function"; }
var Sd = new S("");
function Ib(e) { return Ze([{ provide: Sd, multi: !0, useValue: e }]); }
var bd = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = D(Sd, { optional: !0 }) ?? [];
    injector = D(Ce);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = ni(this.injector, r);
        if (wd(i))
            n.push(i);
        else if (Fy(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), Rr = new S("");
function Ad() { Vf(() => { let e = ""; throw new w(600, e); }); }
function jy(e) { return e.isBoundToModule; }
var $l = class {
    name;
    token;
    constructor(t, n) { this.name = t, this.token = n; }
}, Db = 10;
function Rd(e, t) { return Array.isArray(t) ? t.reduce(Rd, e) : W(W({}, e), t); }
var Le = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = D(Mt);
    afterRenderManager = D(Ls);
    zonelessEnabled = D(mn);
    rootEffectScheduler = D(Ac);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new au;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = D(Nt);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(vT(n => !n)); }
    constructor() { D(ro, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = D(yt);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = Ce.NULL) { return this._injector.get(H).run(() => { x(10); let s = n instanceof ea; if (!this._injector.get(bd).done) {
        let h = "";
        throw new w(405, h);
    } let c; s ? c = n : c = this._injector.get(wr).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = jy(c) ? void 0 : this._injector.get(Vn), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get(ky, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), Bo(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), x(11, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { x(12), this.tracingSnapshot !== null ? this.tracingSnapshot.run(Ps.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw new w(101, !1); let n = O(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, O(n), this.afterTick.next(), x(13);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(rr, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < Db;)
        x(14), this.synchronizeOnce(), x(15); }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let o = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r } of this.allViews) {
            if (!o && !Ao(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            Zm(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => Ao(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let o = n; this._views.push(o), o.attachToAppRef(this); }
    detachView(n) { let o = n; Bo(this._views, o), o.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (r) {
        this.internalErrorHandler(r);
    } this.components.push(n), this._injector.get(Rr, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => Bo(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new w(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Bo(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function Od() { let e, t; return { promise: new Promise((o, r) => { e = o, t = r; }), resolve: e, reject: t }; }
function Hy(e) { let t = g(), n = M(); if (fo(t, n), !Uy(0, t))
    return; let o = t[R], r = he(t, n), i = e(() => ge(0, t, n), o); br(0, r, i); }
function Vy(e) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let t = g(), n = t[R], o = M(), r = t[v], i = ie(r, o); if (i.loadingState === X.NOT_STARTED) {
    let s = he(t, o), c = e(() => Or(i, t, o), n);
    br(1, s, c);
} }
function By(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[R], r = he(t, n), i = r[ra], s = e(() => pt(o, i), o); br(2, r, s); }
function Or(e, t, n) { aa(e, t, n); }
function aa(e, t, n) { let o = t[R], r = t[v]; if (e.loadingState !== X.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = he(t, n), s = nb(r, e); e.loadingState = X.IN_PROGRESS, ki(1, i); let a = e.dependencyResolverFn, c = o.get(bc).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = [], f = []; for (let p of l)
    if (p.status === "fulfilled") {
        let h = p.value, m = q(h) || Ne(h);
        if (m)
            d.push(m);
        else {
            let y = je(h);
            y && f.push(y);
        }
    }
    else {
        u = !0;
        break;
    } if (u) {
    if (e.loadingState = X.FAILED, e.errorTmplIndex === null) {
        let h = new w(-750, !1);
        ed(t, h);
    }
}
else {
    e.loadingState = X.COMPLETE;
    let p = s.tView;
    if (d.length > 0) {
        p.directiveRegistry = ih(p.directiveRegistry, d);
        let h = d.map(y => y.type), m = Za(!1, ...h);
        e.providers = m;
    }
    f.length > 0 && (p.pipeRegistry = ih(p.pipeRegistry, f));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = X.COMPLETE, c(); }), e.loadingPromise); }
function Uy(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[R].get(by, null, { optional: !0 })?.behavior === Td.Manual); }
function ge(e, t, n) { let o = t[v], r = t[n.index]; if (!Uy(e, t))
    return; let i = he(t, n), s = ie(o, n); switch (Cy(i), s.loadingState) {
    case X.NOT_STARTED:
        nt(U.Loading, n, r), aa(s, t, n), s.loadingState === X.IN_PROGRESS && ch(s, n, r);
        break;
    case X.IN_PROGRESS:
        nt(U.Loading, n, r), ch(s, n, r);
        break;
    case X.COMPLETE:
        nt(U.Complete, n, r);
        break;
    case X.FAILED:
        nt(U.Error, n, r);
        break;
    default:
} }
function pt(e, t, n) { return mo(this, null, function* () { let o = e.get(lt); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = BM(t, e); if (s.length === 0)
    return; i !== null && s.shift(), Mb(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield uh(e, s, n) : o.awaitParentBlock(a, () => mo(null, null, function* () { return yield uh(e, s, n); })); }); }
function uh(e, t, n) { return mo(this, null, function* () { let o = e.get(lt), r = o.hydrating, i = e.get(Nt), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield _b(u), yield Nb(e), Cb(u)) {
            Aw(u), dh(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        Tb(c, t, o), dh(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), Rw(o.get(a), t, o, e.get(Le)); }); }
function Cb(e) { return he(e.lView, e.tNode)[ft] === U.Error; }
function Tb(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && Xs(r.lContainer); }
function dh(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function Mb(e, t) { for (let n of t)
    e.hydrating.set(n, Od()); }
function Nb(e) { return new Promise(t => qu(t, { injector: e })); }
function _b(e) { return mo(this, null, function* () { let { tNode: t, lView: n } = e, o = he(n, t); return new Promise(r => { wb(o, r), ge(2, n, t); }); }); }
function wb(e, t) { Array.isArray(e[On]) || (e[On] = []), e[On].push(t); }
function Q(e, t, n) { return e === 0 ? fh(t, n) : e === 2 ? !fh(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function Sb(e) { return e != null && (e & 1) === 1; }
function fh(e, t) { let n = e[R], o = ie(e[v], t), r = Er(n), i = Sb(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = he(e, t)[ra] !== null; return !(i && a && r); }
function Rt(e, t) { let n = ie(e, t); return n.hydrateTriggers ??= new Map; }
function $y(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[ot], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && i.push(p);
        }
    }
} bb(e, o), Ob(e, s), Ab(e, i), Rb(e, r); }
function bb(e, t) { for (let n of t) {
    let o = e.get(lt), i = ia(() => pt(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function Ab(e, t) { if (t.length > 0) {
    let n = e.get(lt);
    for (let o of t) {
        let r = Md(o.el, () => pt(e, o.blockName), e);
        n.addCleanupFn(o.blockName, r);
    }
} }
function Rb(e, t) { for (let n of t) {
    let o = e.get(lt), r = () => pt(e, n.blockName), s = sa(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function Ob(e, t) { for (let n of t)
    pt(e, n.blockName); }
function Gy(e, t, n, o, r, i, s, a, c, l) { let u = g(), d = _(), f = e + E, p = Yt(u, d, e, null, 0, 0), h = u[R], m = Er(h); if (d.firstCreatePass) {
    Y("NgDefer");
    let ze = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: X.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, ze, a, s), eb(d, f, ze);
} let y = u[f]; Gv(y, p, u); let I = null, A = null; if (y[De]?.length > 0) {
    let ze = y[De][0].data;
    A = ze[Ts] ?? null, I = ze[vr];
} let le = [null, cr.Initial, null, null, null, null, A, I, null, null]; XS(u, f, le); let Ae = null; A !== null && m && (Ae = h.get(lt), Ae.add(A, { lView: u, tNode: p, lContainer: y })); let Te = () => { Cy(le), A !== null && Ae?.cleanup([A]); }; br(0, le, () => oc(u, Te)), ai(u, Te); }
function qy(e) { let t = g(), n = we(); if (!Q(0, t, n))
    return; let o = fe(); if ($(t, o, e)) {
    let r = O(null);
    try {
        let i = !!e, a = he(t, n)[ft];
        i === !1 && a === cr.Initial ? fo(t, n) : i === !0 && (a === cr.Initial || a === U.Placeholder) && ge(0, t, n);
    }
    finally {
        O(r);
    }
} }
function Wy(e) { let t = g(), n = we(); if (!Q(1, t, n))
    return; let o = fe(); if ($(t, o, e)) {
    let r = O(null);
    try {
        let i = !!e, s = t[v], a = ie(s, n);
        i === !0 && a.loadingState === X.NOT_STARTED && Or(a, t, n);
    }
    finally {
        O(r);
    }
} }
function zy(e) { let t = g(), n = we(); if (!Q(2, t, n))
    return; let o = fe(), r = _(); if (Rt(r, n).set(6, null), $(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        ge(2, t, n);
    else {
        let s = t[R], a = O(null);
        try {
            if (!!e === !0) {
                let u = he(t, n)[ra];
                pt(s, u);
            }
        }
        finally {
            O(a);
        }
    } }
function Qy() { let e = g(), t = M(); if (!Q(2, e, t))
    return; Rt(_(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && ge(2, e, t); }
function Zy() { let e = g(), t = M(); Q(0, e, t) && Hy(ia); }
function Yy() { let e = g(), t = M(); Q(1, e, t) && Vy(ia); }
function Ky() { let e = g(), t = M(); if (!Q(2, e, t))
    return; Rt(_(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? ge(2, e, t) : By(ia, e, t); }
function Jy() { let e = g(), t = M(); if (!Q(0, e, t))
    return; ie(e[v], t).loadingTmplIndex === null && fo(e, t), ge(0, e, t); }
function Xy() { let e = g(), t = M(); if (!Q(1, e, t))
    return; let n = e[v], o = ie(n, t); o.loadingState === X.NOT_STARTED && aa(o, e, t); }
function eE() { let e = g(), t = M(); if (!Q(2, e, t))
    return; if (Rt(_(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    ge(2, e, t);
else {
    let o = e[R], i = he(e, t)[ra];
    pt(o, i);
} }
function tE(e) { let t = g(), n = M(); Q(0, t, n) && Hy(sa(e)); }
function nE(e) { let t = g(), n = M(); Q(1, t, n) && Vy(sa(e)); }
function oE(e) { let t = g(), n = M(); if (!Q(2, t, n))
    return; Rt(_(), n).set(5, { delay: e }), typeof ngServerMode < "u" && ngServerMode ? ge(2, t, n) : By(sa(e), t, n); }
function rE(e, t) { let n = g(), o = M(); Q(0, n, o) && (fo(n, o), typeof ngServerMode < "u" && ngServerMode || uo(n, o, e, t, Mg, () => ge(0, n, o), 0)); }
function iE(e, t) { let n = g(), o = M(); if (!Q(1, n, o))
    return; let r = n[v], i = ie(r, o); i.loadingState === X.NOT_STARTED && uo(n, o, e, t, Mg, () => Or(i, n, o), 1); }
function sE() { let e = g(), t = M(); if (!Q(2, e, t))
    return; Rt(_(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && ge(2, e, t); }
function aE(e, t) { let n = g(), o = M(); Q(0, n, o) && (fo(n, o), typeof ngServerMode < "u" && ngServerMode || uo(n, o, e, t, Tg, () => ge(0, n, o), 0)); }
function cE(e, t) { let n = g(), o = M(); if (!Q(1, n, o))
    return; let r = n[v], i = ie(r, o); i.loadingState === X.NOT_STARTED && uo(n, o, e, t, Tg, () => Or(i, n, o), 1); }
function lE() { let e = g(), t = M(); if (!Q(2, e, t))
    return; Rt(_(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && ge(2, e, t); }
function uE(e, t) { let n = g(), o = M(); Q(0, n, o) && (fo(n, o), typeof ngServerMode < "u" && ngServerMode || uo(n, o, e, t, Md, () => ge(0, n, o), 0)); }
function dE(e, t) { let n = g(), o = M(); if (!Q(1, n, o))
    return; let r = n[v], i = ie(r, o); i.loadingState === X.NOT_STARTED && uo(n, o, e, t, Md, () => Or(i, n, o), 1); }
function fE() { let e = g(), t = M(); if (!Q(2, e, t))
    return; Rt(_(), t).set(2, null), typeof ngServerMode < "u" && ngServerMode && ge(2, e, t); }
function kd(e, t) { let n = g(), o = fe(); if ($(n, o, t)) {
    let r = _(), i = we();
    if (qs(i, r, n, e, t))
        me(i) && $m(n, i.index);
    else {
        let a = oe(i, n);
        Us(n[T], a, null, i.value, e, t, null);
    }
} return kd; }
function xd(e, t, n, o) { let r = g(), i = fe(); if ($(r, i, t)) {
    let s = _(), a = we();
    C_(a, r, e, t, n, o);
} return xd; }
var pE = new S("", { providedIn: "root", factory: () => !1 }), hE = new S("", { providedIn: "root", factory: () => kb }), kb = 4e3, xb = !1, rn = (typeof ngServerMode > "u" || !ngServerMode) && typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
function ca(e) { return e[R].get(pE, xb); }
function Pb(e, t, n) { let o = $n.get(e); if (o) {
    for (let r of t)
        o.classList.push(r);
    for (let r of n)
        o.cleanupFns.push(r);
}
else
    $n.set(e, { classList: t, cleanupFns: n }); }
function Pd(e) { let t = $n.get(e); if (t) {
    for (let n of t.cleanupFns)
        n();
    $n.delete(e);
} Gt.delete(e); }
var Lb = () => { }, $n = new WeakMap, Gt = new WeakMap, kn = new WeakMap;
function Gl(e, t) { let n = kn.get(e); if (n && n.length > 0) {
    let o = n.findIndex(r => r === t);
    o > -1 && n.splice(o, 1);
} n?.length === 0 && kn.delete(e); }
function la(e, t) { let n = kn.get(e)?.shift(), o = t[Ke]; if (o) {
    let i = Ji(e.index, o)?.previousSibling;
    n && i && n === i && n.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } }));
} }
function gE(e, t) { kn.has(e) ? kn.get(e)?.push(t) : kn.set(e, [t]); }
function cs(e) { let t = e[Je] ??= {}; return t.enter ??= new Map; }
function Kt(e) { let t = e[Je] ??= {}; return t.leave ??= new Map; }
function mE(e) { let t = typeof e == "function" ? e() : e, n = Array.isArray(t) ? t : null; return typeof t == "string" && (n = t.trim().split(/\s+/).filter(o => o)), n; }
function Fb(e, t) { if (!rn)
    return; let n = $n.get(e); if (n && n.classList.length > 0 && jb(e, n.classList))
    for (let o of n.classList)
        t.removeClass(e, o); Pd(e); }
function jb(e, t) { for (let n of t)
    if (e.classList.contains(n))
        return !0; return !1; }
function vE(e, t) { let n = Gt.get(t); return n === void 0 ? !0 : t === e.target && (n.animationName !== void 0 && e.animationName === n.animationName || n.propertyName !== void 0 && e.propertyName === n.propertyName); }
function ua(e, t, n) { let o = e.get(t.index) ?? { animateFns: [] }; o.animateFns.push(n), e.set(t.index, o); }
function ql(e, t) { if (e)
    for (let n of e)
        n(); for (let n of t)
    n(); }
function Wl(e, t) { let n = Kt(e).get(t.index); n && (n.resolvers = void 0); }
function Ti(e, t, n, o, r) { Gl(t, n), ql(o, r), Wl(e, t); }
function Uo(e) { if (Y("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !rn)
    return Uo; let t = g(); if (ca(t))
    return Uo; let n = M(); return la(n, t), ua(cs(t), n, () => Hb(t, n, e)), Hs(t[R]), Wu(t[R], cs(t)), Uo; }
function Hb(e, t, n) { let o = oe(t, e), r = e[T], i = e[R].get(H), s = mE(n), a = [], c = u => { if (u.target !== o)
    return; let d = u instanceof AnimationEvent ? "animationend" : "transitionend"; i.runOutsideAngular(() => { r.listen(o, d, l); }); }, l = u => { u.target === o && Vb(u, o, r); }; if (s && s.length > 0) {
    i.runOutsideAngular(() => { a.push(r.listen(o, "animationstart", c)), a.push(r.listen(o, "transitionstart", c)); }), Pb(o, s, a);
    for (let u of s)
        r.addClass(o, u);
    i.runOutsideAngular(() => { requestAnimationFrame(() => { if (Tm(o, Gt, rn), !Gt.has(o)) {
        for (let u of s)
            r.removeClass(o, u);
        Pd(o);
    } }); });
} }
function Vb(e, t, n) { let o = $n.get(t); if (!(e.target !== t || !o) && vE(e, t)) {
    e.stopImmediatePropagation();
    for (let r of o.classList)
        n.removeClass(t, r);
    Pd(t);
} }
function $o(e) { if (Y("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !rn)
    return $o; let t = g(); if (ca(t))
    return $o; let n = M(); return la(n, t), ua(cs(t), n, () => Bb(t, n, e)), Hs(t[R]), Wu(t[R], cs(t)), $o; }
function Bb(e, t, n) { let o = oe(t, e); n.call(e[F], { target: o, animationComplete: Lb }); }
function Go(e) { if (Y("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !rn)
    return Go; let t = g(); if (ca(t))
    return Go; let o = M(); return la(o, t), ua(Kt(t), o, () => Ub(t, o, e)), Hs(t[R]), Go; }
function Ub(e, t, n) { let { promise: o, resolve: r } = Od(), i = oe(t, e), s = e[T], a = e[R].get(H); zt.add(e), (Kt(e).get(t.index).resolvers ??= []).push(r); let c = mE(n); return c && c.length > 0 ? $b(i, t, e, c, s, a) : r(), { promise: o, resolve: r }; }
function $b(e, t, n, o, r, i) { Fb(e, r); let s = [], a = Kt(n).get(t.index)?.resolvers, c = l => { if (l.target === e && (l instanceof CustomEvent || vE(l, e))) {
    if (l.stopImmediatePropagation(), Gt.delete(e), Gl(t, e), Array.isArray(t.projection))
        for (let u of o)
            r.removeClass(e, u);
    ql(a, s), Wl(n, t);
} }; i.runOutsideAngular(() => { s.push(r.listen(e, "animationend", c)), s.push(r.listen(e, "transitionend", c)); }), gE(t, e); for (let l of o)
    r.addClass(e, l); i.runOutsideAngular(() => { requestAnimationFrame(() => { Tm(e, Gt, rn), Gt.has(e) || (Gl(t, e), ql(a, s), Wl(n, t)); }); }); }
function ls(e) { if (Y("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !rn)
    return ls; let t = g(), n = M(); return la(n, t), zt.add(t), ua(Kt(t), n, () => Gb(t, n, e)), Hs(t[R]), ls; }
function Gb(e, t, n) { let { promise: o, resolve: r } = Od(), i = oe(t, e), s = [], a = e[T], c = ca(e), l = e[R].get(H), u = e[R].get(hE); (Kt(e).get(t.index).resolvers ??= []).push(r); let d = Kt(e).get(t.index)?.resolvers; if (c)
    Ti(e, t, i, d, s);
else {
    let f = setTimeout(() => Ti(e, t, i, d, s), u), p = { target: i, animationComplete: () => { Ti(e, t, i, d, s), clearTimeout(f); } };
    gE(t, i), l.runOutsideAngular(() => { s.push(a.listen(i, "animationend", () => { Ti(e, t, i, d, s), clearTimeout(f); }, { once: !0 })); }), n.call(e[F], p);
} return { promise: o, resolve: r }; }
function yE() { return g()[Z][F]; }
var zl = class {
    destroy(t) { }
    updateValue(t, n) { }
    swap(t, n) { let o = Math.min(t, n), r = Math.max(t, n), i = this.detach(r); if (r - o > 1) {
        let s = this.detach(o);
        this.attach(o, i), this.attach(r, s);
    }
    else
        this.attach(o, i); }
    move(t, n) { this.attach(n, this.detach(t)); }
};
function Qc(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function qb(e, t, n) { let o, r, i = 0, s = e.length - 1, a = void 0; if (Array.isArray(t)) {
    let c = t.length - 1;
    for (; i <= s && i <= c;) {
        let l = e.at(i), u = t[i], d = Qc(i, l, i, u, n);
        if (d !== 0) {
            d < 0 && e.updateValue(i, u), i++;
            continue;
        }
        let f = e.at(s), p = t[c], h = Qc(s, f, c, p, n);
        if (h !== 0) {
            h < 0 && e.updateValue(s, p), s--, c--;
            continue;
        }
        let m = n(i, l), y = n(s, f), I = n(i, u);
        if (Object.is(I, y)) {
            let A = n(c, p);
            Object.is(A, m) ? (e.swap(i, s), e.updateValue(s, p), c--, s--) : e.move(s, i), e.updateValue(i, u), i++;
            continue;
        }
        if (o ??= new us, r ??= hh(e, i, s, n), Ql(e, o, i, I))
            e.updateValue(i, u), i++, s++;
        else if (r.has(I))
            o.set(m, e.detach(i)), s--;
        else {
            let A = e.create(i, t[i]);
            e.attach(i, A), i++, s++;
        }
    }
    for (; i <= c;)
        ph(e, o, n, i, t[i]), i++;
}
else if (t != null) {
    let c = t[Symbol.iterator](), l = c.next();
    for (; !l.done && i <= s;) {
        let u = e.at(i), d = l.value, f = Qc(i, u, i, d, n);
        if (f !== 0)
            f < 0 && e.updateValue(i, d), i++, l = c.next();
        else {
            o ??= new us, r ??= hh(e, i, s, n);
            let p = n(i, d);
            if (Ql(e, o, i, p))
                e.updateValue(i, d), i++, s++, l = c.next();
            else if (!r.has(p))
                e.attach(i, e.create(i, d)), i++, s++, l = c.next();
            else {
                let h = n(i, u);
                o.set(h, e.detach(i)), s--;
            }
        }
    }
    for (; !l.done;)
        ph(e, o, n, e.length, l.value), l = c.next();
} for (; i <= s;)
    e.destroy(e.detach(s--)); o?.forEach(c => { e.destroy(c); }); }
function Ql(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function ph(e, t, n, o, r) { if (Ql(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function hh(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var us = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) { return this.kvMap.has(t); }
    delete(t) { if (!this.has(t))
        return !1; let n = this.kvMap.get(t); return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0; }
    get(t) { return this.kvMap.get(t); }
    set(t, n) { if (this.kvMap.has(t)) {
        let o = this.kvMap.get(t);
        this._vMap === void 0 && (this._vMap = new Map);
        let r = this._vMap;
        for (; r.has(o);)
            o = r.get(o);
        r.set(o, n);
    }
    else
        this.kvMap.set(t, n); }
    forEach(t) { for (let [n, o] of this.kvMap)
        if (t(o, n), this._vMap !== void 0) {
            let r = this._vMap;
            for (; r.has(o);)
                o = r.get(o), t(o, n);
        } }
};
function EE(e, t, n, o, r, i, s, a) { Y("NgControlFlow"); let c = g(), l = _(), u = ce(l.consts, i); return Yt(c, l, e, t, n, o, r, u, 256, s, a), da; }
function da(e, t, n, o, r, i, s, a) { Y("NgControlFlow"); let c = g(), l = _(), u = ce(l.consts, i); return Yt(c, l, e, t, n, o, r, u, 512, s, a), da; }
function IE(e, t) { Y("NgControlFlow"); let n = g(), o = fe(), r = n[o] !== P ? n[o] : -1, i = r !== -1 ? ds(n, E + r) : void 0, s = 0; if ($(n, o, e)) {
    let a = O(null);
    try {
        if (i !== void 0 && td(i, s), e !== -1) {
            let c = E + e, l = ds(n, c), u = Jl(n[v], c), d = _v(l, u, n), f = so(n, u, t, { dehydratedView: d });
            ao(l, f, s, Qt(u, d));
        }
    }
    finally {
        O(a);
    }
}
else if (i !== void 0) {
    let a = tv(i, s);
    a !== void 0 && (a[F] = t);
} }
var Zl = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - j; }
};
function DE(e) { return e; }
function CE(e, t) { return t; }
var Yl = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function TE(e, t, n, o, r, i, s, a, c, l, u, d, f) { Y("NgControlFlow"); let p = g(), h = _(), m = c !== void 0, y = g(), I = a ? s.bind(y[Z][F]) : s, A = new Yl(m, I); y[E + e] = A, Yt(p, h, e + 1, t, n, o, r, ce(h.consts, i), 256), m && Yt(p, h, e + 2, c, l, u, d, ce(h.consts, f), 512); }
var Kl = class extends zl {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - j; }
    at(t) { return this.getLView(t)[F].$implicit; }
    attach(t, n) { let o = n[ne]; this.needsIndexUpdate ||= t !== this.length, ao(this.lContainer, n, t, Qt(this.templateTNode, o)), Wb(this.lContainer, t); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, zb(this.lContainer, t), Qb(this.lContainer, t); }
    create(t, n) { let o = or(this.lContainer, this.templateTNode.tView.ssrId), r = so(this.hostLView, this.templateTNode, new Zl(this.lContainer, n, t), { dehydratedView: o }); return this.operationsCounter?.recordCreate(), r; }
    destroy(t) { Mr(t[v], t), this.operationsCounter?.recordDestroy(); }
    updateValue(t, n) { this.getLView(t)[F].$implicit = n; }
    reset() { this.needsIndexUpdate = !1, this.operationsCounter?.reset(); }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[F].$index = t; }
    getLView(t) { return Zb(this.lContainer, t); }
};
function ME(e) { let t = O(null), n = re(); try {
    let o = g(), r = o[v], i = o[n], s = n + 1, a = ds(o, s);
    if (i.liveCollection === void 0) {
        let l = Jl(r, s);
        i.liveCollection = new Kl(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (qb(c, e, i.trackByFn), c.updateIndexes(), i.hasEmptyBlock) {
        let l = fe(), u = c.length === 0;
        if ($(o, l, u)) {
            let d = n + 2, f = ds(o, d);
            if (u) {
                let p = Jl(r, d), h = _v(f, p, o), m = so(o, p, void 0, { dehydratedView: h });
                ao(f, m, 0, Qt(p, h));
            }
            else
                r.firstUpdatePass && Js(f), td(f, 0);
        }
    }
}
finally {
    O(t);
} }
function ds(e, t) { return e[t]; }
function Wb(e, t) { if (e.length <= j)
    return; let n = j + t, o = e[n], r = o ? o[Je] : void 0; if (o && r && r.detachedLeaveAnimationFns && r.detachedLeaveAnimationFns.length > 0) {
    let i = o[R];
    i_(i, r), zt.delete(o), r.detachedLeaveAnimationFns = void 0;
} }
function zb(e, t) { if (e.length <= j)
    return; let n = j + t, o = e[n], r = o ? o[Je] : void 0; r && r.leave && r.leave.size > 0 && (r.detachedLeaveAnimationFns = []); }
function Qb(e, t) { return tr(e, t); }
function Zb(e, t) { return tv(e, t); }
function Jl(e, t) { return Dt(e, t); }
function Ld(e, t, n) { let o = g(), r = fe(); if ($(o, r, t)) {
    let i = _(), s = we();
    Ku(s, o, e, t, o[T], n);
} return Ld; }
function Xl(e, t, n, o, r) { qs(t, e, n, r ? "class" : "style", o); }
function fa(e, t, n, o) { let r = g(), i = r[v], s = e + E, a = i.firstCreatePass ? ad(s, r, 2, t, Xu, ci(), n, o) : i.data[s]; if ($s(a, r, e, t, Hd), pn(a)) {
    let c = r[v];
    Bs(c, r, a), bu(c, a, r);
} return o != null && io(r, a), fa; }
function pa() { let e = _(), t = M(), n = Gs(t); return e.firstCreatePass && cd(e, n), ic(n) && cc(), rc(), n.classesWithoutHost != null && ST(n) && Xl(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && bT(n) && Xl(e, n, g(), n.stylesWithoutHost, !1), pa; }
function Fd(e, t, n, o) { return fa(e, t, n, o), pa(), Fd; }
function ha(e, t, n, o) { let r = g(), i = r[v], s = e + E, a = i.firstCreatePass ? kv(s, i, 2, t, n, o) : i.data[s]; return $s(a, r, e, t, Hd), o != null && io(r, a), ha; }
function ga() { let e = M(), t = Gs(e); return ic(t) && cc(), rc(), ga; }
function jd(e, t, n, o) { return ha(e, t, n, o), ga(), jd; }
var Hd = (e, t, n, o, r) => (xe(!0), Os(t[T], o, Mc()));
function Yb(e, t, n, o, r) { let i = !As(t, n); if (xe(i), i)
    return Os(t[T], o, Mc()); let s = t[ne], a = _r(s, e, t, n); return jg(s, r) && Ss(s, r, a.nextSibling), s && (fu(n) || sg(a)) && me(n) && (up(n), im(a)), a; }
function NE() { Hd = Yb; }
function ma(e, t, n) { let o = g(), r = o[v], i = e + E, s = r.firstCreatePass ? ad(i, o, 8, "ng-container", Xu, ci(), t, n) : r.data[i]; if ($s(s, o, e, "ng-container", $d), pn(s)) {
    let a = o[v];
    Bs(a, o, s), bu(a, s, o);
} return n != null && io(o, s), ma; }
function kr() { let e = _(), t = M(), n = Gs(t); return e.firstCreatePass && cd(e, n), kr; }
function Vd(e, t, n) { return ma(e, t, n), kr(), Vd; }
function va(e, t, n) { let o = g(), r = o[v], i = e + E, s = r.firstCreatePass ? kv(i, r, 8, "ng-container", t, n) : r.data[i]; return $s(s, o, e, "ng-container", $d), n != null && io(o, s), va; }
function Bd() { let e = M(), t = Gs(e); return kr; }
function Ud(e, t, n) { return va(e, t, n), Bd(), Ud; }
var $d = (e, t, n, o, r) => (xe(!0), Ou(t[T], ""));
function Kb(e, t, n, o, r) { let i, s = !As(t, n); if (xe(s), s)
    return Ou(t[T], ""); let a = t[ne], c = _r(a, e, t, n), l = Fg(a, r); return Ss(a, r, c), i = Ys(l, c), i; }
function _E() { $d = Kb; }
function wE() { return g(); }
function Gd(e, t, n) { let o = g(), r = fe(); if ($(o, r, t)) {
    let i = _(), s = we();
    Ju(s, o, e, t, o[T], n);
} return Gd; }
function qd(e, t, n) { let o = g(), r = fe(); if ($(o, r, t)) {
    let i = _(), s = we(), a = li(i.data), c = Gm(a, s, o);
    Ju(s, o, e, t, c, n);
} return qd; }
var Mi = void 0;
function Jb(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var Xb = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Mi, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Mi, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", Mi, "{1} 'at' {0}", Mi], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", Jb], xn = {};
function eA(e, t, n) { typeof t != "string" && (n = t, t = e[Gn.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), xn[t] = e, n && (xn[t][Gn.ExtraData] = n); }
function Wd(e) { let t = oA(e), n = gh(t); if (n)
    return n; let o = t.split("-")[0]; if (n = gh(o), n)
    return n; if (o === "en")
    return Xb; throw new w(701, !1); }
function tA(e) { return Wd(e)[Gn.CurrencyCode] || null; }
function SE(e) { return Wd(e)[Gn.PluralCase]; }
function gh(e) { return e in xn || (xn[e] = Ee.ng && Ee.ng.common && Ee.ng.common.locales && Ee.ng.common.locales[e]), xn[e]; }
function nA() { xn = {}; }
var Gn = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(Gn || {});
function oA(e) { return e.toLowerCase().replace(/_/g, "-"); }
var rA = ["zero", "one", "two", "few", "many"];
function iA(e, t) { let n = SE(t)(parseInt(e, 10)), o = rA[n]; return o !== void 0 ? o : "other"; }
var xr = "en-US", sA = "USD", bE = { marker: "element" }, AE = { marker: "ICU" }, et = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(et || {}), RE = xr;
function OE(e) { typeof e == "string" && (RE = e.toLowerCase().replace(/_/g, "-")); }
function aA() { return RE; }
var lr = 0, qo = 0;
function cA(e) { e && (lr = lr | 1 << Math.min(qo, 31)), qo++; }
function lA(e, t, n) { if (qo > 0) {
    let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = Ue() - qo - 1;
    LE(e, t, r, i, lr);
} lr = 0, qo = 0; }
function kE(e, t, n) { let o = e[T]; switch (n) {
    case Node.COMMENT_NODE: return Ou(o, t);
    case Node.TEXT_NODE: return Ru(o, t);
    case Node.ELEMENT_NODE: return Os(o, t, null);
} }
var Wo = (e, t, n, o) => (xe(!0), kE(e, n, o));
function uA(e, t, n, o) { let r = e[ne], i = t - E, s = !Ks() || !r || Ro() || bs(r, i); return xe(s), s ? kE(e, n, o) : uv(r, i); }
function xE() { Wo = uA; }
function dA(e, t, n, o) { let r = e[T]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & et.COMMENT) === et.COMMENT, l = (s & et.APPEND_EAGERLY) === et.APPEND_EAGERLY, u = s >>> et.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = Wo(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = ko()), l && n !== null && f && Wt(r, n, d, o, !1);
} }
function PE(e, t, n, o) { let r = n[T], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = Wo(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = aw(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = k(n[l])), d !== null) {
                    let m = cw(c), y = n[m];
                    Wt(r, d, y, u, !1);
                    let I = jo(e, m);
                    if (I !== null && typeof I == "object") {
                        let A = Zs(I, n);
                        A !== null && PE(e, I.create[A], n, n[I.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                Us(r, jt(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case AE:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = Wo(n, u, l, Node.COMMENT_NODE);
                    Se(p, n);
                }
                break;
            case bE:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = Wo(n, f, d, Node.ELEMENT_NODE);
                    Se(p, n);
                }
                break;
            default:
        }
} }
function LE(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & r) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += N(t[o - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], h = e.data[d];
                            typeof h == "string" ? Us(t[T], t[d], null, h, f, c, p) : Ku(h, t, f, c, t[T], p);
                            break;
                        case 0:
                            let m = t[d];
                            m !== null && om(t[T], m, c);
                            break;
                        case 2:
                            fA(e, jo(e, d), t, c);
                            break;
                        case 3:
                            mh(e, jo(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = jo(e, l);
            t[u.currentCaseLViewIndex] < 0 && mh(e, u, o, t);
        }
    }
    i += a;
} }
function mh(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = lr;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), LE(e, o, t.update[r], n, i);
} }
function fA(e, t, n, o) { let r = pA(t, o); if (Zs(t, n) !== r && (FE(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && PE(e, t.create[r], n, s), _w(n, t.anchorIdx, r);
} }
function FE(e, t, n) { let o = Zs(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = jt(s, n);
            a !== null && Dr(n[T], a);
        }
        else
            FE(e, jo(e, ~s), n);
    }
} }
function pA(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = iA(t, aA());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var fs = /�(\d+):?\d*�/gi, hA = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, gA = /�(\d+)�/, jE = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, zo = "\uFFFD", mA = /�\/?\*(\d+:\d+)�/gi, vA = /�(\/?[#*]\d+):?\d*�/gi, yA = /\uE500/g;
function EA(e) { return e.replace(yA, " "); }
function IA(e, t, n, o, r, i) { let s = hn(), a = [], c = [], l = [[]], u = [[]]; r = MA(r, i); let d = EA(r).split(vA); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = eu(p);
        for (let m = 0; m < h.length; m++) {
            let y = h[m];
            if ((m & 1) === 0) {
                let I = y;
                I !== "" && DA(u[0], e, s, l[0], a, c, n, I);
            }
            else {
                let I = y;
                if (typeof I != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let le = HE(e, s, l[0], n, a, "", !0).index;
                BE(u[0], e, n, c, t, I, le);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, m = p.charCodeAt(h ? 1 : 0), y = E + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), Be(hn(), !1);
        else {
            let I = sw(e, l[0], y);
            l.unshift([]), Be(I, !0);
            let A = { kind: 2, index: y, children: [], type: m === 35 ? 0 : 1 };
            u[0].push(A), u.unshift(A.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function HE(e, t, n, o, r, i, s) { let a = Tr(e, o, 1, null), c = a << et.SHIFT, l = hn(); t === l && (l = null), l === null && (c |= et.APPEND_EAGERLY), s && (c |= et.COMMENT, zN(uw)), r.push(c, i === null ? "" : i); let u = nd(e, a, s ? 32 : 1, i === null ? "" : i, null); sv(n, u); let d = u.index; return Be(u, !1), l !== null && t !== l && iw(l, d), u; }
function DA(e, t, n, o, r, i, s, a) { let c = a.match(fs), u = HE(t, n, o, s, r, c ? null : a, !1).index; c && Qo(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function CA(e, t, n) { let r = M().index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (hA.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            Qo(i, c, r, a, TA(i), null);
        }
    }
    e.data[t] = i;
} }
function Qo(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(fs), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | VE(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function TA(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function VE(e) { return 1 << Math.min(e, 31); }
function vh(e) { let t, n = "", o = 0, r = !1, i; for (; (t = mA.exec(e)) !== null;)
    r ? t[0] === `${zo}/*${i}${zo}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function MA(e, t) { if (cv(t))
    return vh(e); {
    let n = e.indexOf(`:${t}${zo}`) + 2 + t.toString().length, o = e.search(new RegExp(`${zo}\\/\\*\\d+:${t}${zo}`));
    return vh(e.substring(n, o));
} }
function BE(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: Tr(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; SA(o, i, s), rw(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let m = 0; m < f.length; m++) {
        let y = f[m];
        if (typeof y != "string") {
            let I = p.push(y) - 1;
            f[m] = `<!--\uFFFD${I}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = _A(h, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && bA(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function NA(e) { let t = [], n = [], o = 1, r = 0; e = e.replace(jE, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = eu(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = eu(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function eu(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            jE.test(c) ? o.push(NA(c)) : o.push(c), t = a + 1;
        }
    }
    else {
        if (n.length == 0) {
            let c = e.substring(t, a);
            o.push(c), t = a + 1;
        }
        n.push("{");
    }
} let s = e.substring(t); return o.push(s), o; }
function _A(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = Kg(at()).getInertBodyElement(a), h = Tl(p) || p; return h ? UE(e, t, n, o, r, l, u, d, h, i, c, 0) : 0; }
function UE(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = Tr(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let m = p, y = m.tagName.toLowerCase();
            if (Il.hasOwnProperty(y)) {
                Zc(i, bE, y, l, h), t.data[h] = y;
                let Ae = m.attributes;
                for (let ze = 0; ze < Ae.length; ze++) {
                    let Qe = Ae.item(ze), Hr = Qe.name.toLowerCase();
                    !!Qe.value.match(fs) ? Dl.hasOwnProperty(Hr) && (Qi[Hr] ? Qo(a, Qe.value, h, Qe.name, 0, Rs) : Qo(a, Qe.value, h, Qe.name, 0, null)) : Dl[Hr] && (Qi[Hr] ? Eh(i, h, Qe.name, "unsafe:blocked") : Eh(i, h, Qe.name, Qe.value));
                }
                let Te = { kind: 1, index: h, children: [] };
                e.push(Te), f = UE(Te.children, t, n, o, r, i, s, a, p, h, u, d + 1) | f, yh(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let I = p.textContent || "", A = I.match(fs);
            Zc(i, null, A ? "" : I, l, h), yh(s, h, d), A && (f = Qo(a, I, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let le = gA.exec(p.textContent || "");
            if (le) {
                let Ae = parseInt(le[1], 10), Te = u[Ae];
                Zc(i, AE, "", l, h), BE(e, t, o, r, l, Te, h), wA(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function yh(e, t, n) { n === 0 && e.push(t); }
function wA(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function SA(e, t, n) { e.push(VE(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function bA(e, t, n) { e.push(t, 1, n << 2 | 3); }
function Zc(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, lw(0, o, r)); }
function Eh(e, t, n, o) { e.push(t << 1 | 1, n, o); }
var Ih = 0, AA = /\[(�.+?�?)\]/, RA = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, OA = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, kA = /{([A-Z0-9_]+)}/g, xA = /�I18N_EXP_(ICU(_\d+)?)�/g, PA = /\/\*/, LA = /\d+\:(\d+)/;
function FA(e, t = {}) { let n = e; if (AA.test(e)) {
    let o = {}, r = [Ih];
    n = n.replace(RA, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(m => { let y = m.match(LA), I = y ? parseInt(y[1], 10) : Ih, A = PA.test(m); l.push([I, A, m]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let m = 0; m < l.length; m++)
        if (l[m][0] === u) {
            d = m;
            break;
        } let [f, p, h] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(OA, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(kA, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(xA, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function zd(e, t, n = -1) { let o = _(), r = g(), i = E + e, s = ce(o.consts, t), a = hn(); if (o.firstCreatePass && IA(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[Z];
    f[b] |= 32;
}
else
    r[b] |= 32; let c = o.data[i], l = a === r[ae] ? null : a, u = km(o, l, r), d = a && a.type & 8 ? r[a.index] : null; Iw(r, i, a, n), dA(r, c.create, u, d), vc(!0); }
function Qd() { vc(!1); }
function $E(e, t, n) { zd(e, t, n), Qd(); }
function GE(e, t) { let n = _(), o = ce(n.consts, t); CA(n, e + E, o); }
function Zd(e) { let t = g(); return cA($(t, fe(), e)), Zd; }
function qE(e) { lA(_(), g(), e + E); }
function WE(e, t = {}) { return FA(e, t); }
function Yd(e, t, n) { let o = g(), r = _(), i = M(); return Xd(r, o, o[T], i, e, t, n), Yd; }
function Kd(e, t) { let n = M(), o = g(), r = _(), i = li(r.data), s = Gm(i, n, o); return Xd(r, o, s, n, e, t), Kd; }
function Jd(e, t, n) { let o = g(), r = _(), i = M(); return (i.type & 3 || n) && Lv(i, r, o, n, o[T], e, t, Vo(i, o, t)), Jd; }
function Xd(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= Vo(o, t, i), Lv(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= Vo(o, t, i), os(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= Vo(o, t, i), os(o, t, d, r, r, c);
} }
function zE(e = 1) { return gp(e); }
function jA(e, t) { let n = null, o = jN(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? vm(e, i, !0) : BN(o, i))
        return r;
} return n; }
function QE(e) { let t = g()[Z][ae]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = Do(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? jA(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function ZE(e, t = 0, n, o, r, i) { let s = g(), a = _(), c = o ? e + 1 : null; c !== null && Yt(s, a, c, o, r, i, null, n); let l = on(a, E + e, 16, null, n || null); l.projection === null && (l.projection = t), fc(); let d = !s[ne] || Ro(); s[Z][ae].projection[l.projection] === null && c !== null ? HA(s, a, c) : d && !to(l) && f_(a, s, l); }
function HA(e, t, n) { let o = E + n, r = t.data[o], i = e[o], s = or(i, r.tView.ssrId), a = so(e, r, void 0, { dehydratedView: s }); ao(i, a, 0, Qt(r, s)); }
function YE(e, t, n, o) { Yv(e, t, n, o); }
function KE(e, t, n) { Zv(e, t, n); }
function JE(e) { let t = g(), n = _(), o = ui(); Oo(o + 1); let r = dd(n, o); if (e.dirty && tp(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = Jv(t, o);
        e.reset(i, ig), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function XE() { return ud(g(), ui()); }
function eI(e, t, n, o, r) { Xv(t, Yv(e, n, o, r)); }
function tI(e, t, n, o) { Xv(e, Zv(t, n, o)); }
function nI(e = 1) { Oo(ui() + e); }
function oI(e) { let t = pc(); return Ct(t, E + e); }
function Ni(e, t) { return e << 17 | t << 2; }
function Jt(e) { return e >> 17 & 32767; }
function VA(e) { return (e & 2) == 2; }
function BA(e, t) { return e & 131071 | t << 17; }
function tu(e) { return e | 2; }
function qn(e) { return (e & 131068) >> 2; }
function Yc(e, t) { return e & -131069 | t << 2; }
function UA(e) { return (e & 1) === 1; }
function nu(e) { return e | 1; }
function $A(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = Jt(s), c = qn(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || Jr(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = Jt(e[a + 1]);
        e[o + 1] = Ni(f, a), f !== 0 && (e[f + 1] = Yc(e[f + 1], o)), e[a + 1] = BA(e[a + 1], o);
    }
    else
        e[o + 1] = Ni(a, 0), a !== 0 && (e[a + 1] = Yc(e[a + 1], o)), a = o;
else
    e[o + 1] = Ni(c, 0), a === 0 ? a = o : e[c + 1] = Yc(e[c + 1], o), c = o; l && (e[o + 1] = tu(e[o + 1])), Dh(e, u, o, !0), Dh(e, u, o, !1), GA(t, u, e, o, i), s = Ni(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function GA(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && Jr(i, t) >= 0 && (n[o + 1] = nu(n[o + 1])); }
function Dh(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? Jt(r) : qn(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    qA(c, t) && (a = !0, e[s + 1] = o ? nu(l) : tu(l)), s = o ? Jt(l) : qn(l);
} a && (e[n + 1] = o ? tu(r) : nu(r)); }
function qA(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? Jr(e, t) >= 0 : !1; }
var te = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function rI(e) { return e.substring(te.key, te.keyEnd); }
function WA(e) { return e.substring(te.value, te.valueEnd); }
function zA(e) { return aI(e), iI(e, Wn(e, 0, te.textEnd)); }
function iI(e, t) { let n = te.textEnd; return n === t ? -1 : (t = te.keyEnd = ZA(e, te.key = t, n), Wn(e, t, n)); }
function QA(e) { return aI(e), sI(e, Wn(e, 0, te.textEnd)); }
function sI(e, t) { let n = te.textEnd, o = te.key = Wn(e, t, n); return n === o ? -1 : (o = te.keyEnd = YA(e, o, n), o = Ch(e, o, n, 58), o = te.value = Wn(e, o, n), o = te.valueEnd = KA(e, o, n), Ch(e, o, n, 59)); }
function aI(e) { te.key = 0, te.keyEnd = 0, te.value = 0, te.valueEnd = 0, te.textEnd = e.length; }
function Wn(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function ZA(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function YA(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function Ch(e, t, n, o) { return t = Wn(e, t, n), t < n && t++, t; }
function KA(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = Th(e, c, s, n) : t === s - 4 && i === 85 && r === 82 && o === 76 && c === 40 ? a = s = Th(e, 41, s, n) : c > 32 && (a = s), i = r, r = o, o = c & -33;
} return a; }
function Th(e, t, n, o) { let r = -1, i = n; for (; i < o;) {
    let s = e.charCodeAt(i++);
    if (s == t && r !== 92)
        return i;
    s == 92 && r === 92 ? r = 0 : r = s;
} throw new Error; }
function ef(e, t, n) { return uI(e, t, n, !1), ef; }
function tf(e, t) { return uI(e, t, null, !0), tf; }
function cI(e) { dI(hI, JA, e, !1); }
function JA(e, t) { for (let n = QA(t); n >= 0; n = sI(t, n))
    hI(e, rI(t), WA(t)); }
function lI(e) { dI(iR, XA, e, !0); }
function XA(e, t) { for (let n = zA(t); n >= 0; n = iI(t, n))
    Co(e, rI(t), !0); }
function uI(e, t, n, o) { let r = g(), i = _(), s = $e(2); if (i.firstUpdatePass && pI(i, e, s, o), t !== P && $(r, s, t)) {
    let a = i.data[re()];
    gI(i, a, r, r[T], e, r[s + 1] = aR(t, n), o, s);
} }
function dI(e, t, n, o) { let r = _(), i = $e(2); r.firstUpdatePass && pI(r, null, i, o); let s = g(); if (n !== P && $(s, i, n)) {
    let a = r.data[re()];
    if (mI(a, o) && !fI(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = Gr(c, n || "")), Xl(r, a, s, n, o);
    }
    else
        sR(r, a, s, s[T], s[i + 1], s[i + 1] = rR(e, t, n), o, i);
} }
function fI(e, t) { return t >= e.expandoStartIndex; }
function pI(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[re()], s = fI(e, n);
    mI(i, o) && t === null && !s && (t = !1), t = eR(r, i, t, o), $A(r, i, t, n, s, o);
} }
function eR(e, t, n, o) { let r = li(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = Kc(null, e, t, n, o), n = ur(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = Kc(r, e, t, n, o), i === null) {
            let c = tR(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = Kc(null, e, t, c[1], o), c = ur(c, t.attrs, o), nR(e, t, o, c));
        }
        else
            i = oR(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function tR(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if (qn(o) !== 0)
    return e[Jt(o)]; }
function nR(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[Jt(r)] = o; }
function oR(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = ur(o, s, n);
} return ur(o, t.attrs, n); }
function Kc(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = ur(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function ur(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), Co(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function rR(e, t, n) { if (n == null || n === "")
    return L; let o = [], r = ut(n); if (Array.isArray(r))
    for (let i = 0; i < r.length; i++)
        e(o, r[i], !0);
else if (typeof r == "object")
    for (let i in r)
        r.hasOwnProperty(i) && e(o, i, r[i]);
else
    typeof r == "string" && t(o, r); return o; }
function hI(e, t, n) { Co(e, t, ut(n)); }
function iR(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && Co(e, o, n); }
function sR(e, t, n, o, r, i, s, a) { r === P && (r = L); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, m;
    u === d ? (c += 2, l += 2, f !== p && (h = d, m = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, m = p), h !== null && gI(e, t, n, o, h, m, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function gI(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = UA(l) ? Mh(c, t, n, r, qn(l), s) : void 0; if (!ps(u)) {
    ps(i) || VA(l) && (i = Mh(c, null, n, r, a, s));
    let d = jt(re(), n);
    h_(o, s, d, r, i);
} }
function Mh(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === P && (f = d ? L : void 0);
    let p = d ? Kr(f, o) : u === o ? f : void 0;
    if (l && !ps(p) && (p = Kr(c, o)), ps(p) && (a = p, s))
        return a;
    let h = e[r + 1];
    r = s ? Jt(h) : qn(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = Kr(c, o));
} return a; }
function ps(e) { return e !== void 0; }
function aR(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = an(ut(e)))), e; }
function mI(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function vI(e, t = "") { let n = g(), o = _(), r = e + E, i = o.firstCreatePass ? on(o, r, 1, t, null) : o.data[r], s = yI(o, n, i, t, e); n[r] = s, ko() && Zu(o, n, s, i), Be(i, !1); }
var yI = (e, t, n, o, r) => (xe(!0), Ru(t[T], o));
function cR(e, t, n, o, r) { let i = !As(t, n); if (xe(i), i)
    return Ru(t[T], o); let s = t[ne]; return _r(s, e, t, n); }
function EI() { yI = cR; }
function II(e, t) { let n = !1, o = Ue(); for (let i = 1; i < t.length; i += 2)
    n = $(e, o++, t[i]) || n; if (mc(o), !n)
    return P; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += N(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function DI(e, t, n, o = "") { return $(e, fe(), n) ? t + N(n) + o : P; }
function CI(e, t, n, o, r, i = "") { let s = Ue(), a = Zt(e, s, n, r); return $e(2), a ? t + N(n) + o + N(r) + i : P; }
function TI(e, t, n, o, r, i, s, a = "") { let c = Ue(), l = na(e, c, n, r, s); return $e(3), l ? t + N(n) + o + N(r) + i + N(s) + a : P; }
function MI(e, t, n, o, r, i, s, a, c, l = "") { let u = Ue(), d = be(e, u, n, r, s, c); return $e(4), d ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l : P; }
function NI(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = Ue(), p = be(e, f, n, r, s, c); return p = $(e, f + 4, u) || p, $e(5), p ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d : P; }
function _I(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let h = Ue(), m = be(e, h, n, r, s, c); return m = Zt(e, h + 4, u, f) || m, $e(6), m ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d + N(f) + p : P; }
function wI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m = "") { let y = Ue(), I = be(e, y, n, r, s, c); return I = na(e, y + 4, u, f, h) || I, $e(7), I ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d + N(f) + p + N(h) + m : P; }
function SI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, y, I = "") { let A = Ue(), le = be(e, A, n, r, s, c); return le = be(e, A + 4, u, f, h, y) || le, $e(8), le ? t + N(n) + o + N(r) + i + N(s) + a + N(c) + l + N(u) + d + N(f) + p + N(h) + m + N(y) + I : P; }
function nf(e) { return ya("", e), nf; }
function ya(e, t, n) { let o = g(), r = DI(o, e, t, n); return r !== P && ht(o, re(), r), ya; }
function of(e, t, n, o, r) { let i = g(), s = CI(i, e, t, n, o, r); return s !== P && ht(i, re(), s), of; }
function rf(e, t, n, o, r, i, s) { let a = g(), c = TI(a, e, t, n, o, r, i, s); return c !== P && ht(a, re(), c), rf; }
function sf(e, t, n, o, r, i, s, a, c) { let l = g(), u = MI(l, e, t, n, o, r, i, s, a, c); return u !== P && ht(l, re(), u), sf; }
function af(e, t, n, o, r, i, s, a, c, l, u) { let d = g(), f = NI(d, e, t, n, o, r, i, s, a, c, l, u); return f !== P && ht(d, re(), f), af; }
function cf(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = g(), h = _I(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return h !== P && ht(p, re(), h), cf; }
function lf(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h) { let m = g(), y = wI(m, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); return y !== P && ht(m, re(), y), lf; }
function uf(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, y) { let I = g(), A = SI(I, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, y); return A !== P && ht(I, re(), A), uf; }
function df(e) { let t = g(), n = II(t, e); return n !== P && ht(t, re(), n), df; }
function ht(e, t, n) { let o = jt(t, e); om(e[T], o, n); }
function ff(e, t, n) { wc(t) && (t = t()); let o = g(), r = fe(); if ($(o, r, t)) {
    let i = _(), s = we();
    Ku(s, o, e, t, o[T], n);
} return ff; }
function bI(e, t) { let n = wc(e); return n && e.set(t), n; }
function pf(e, t) { let n = g(), o = _(), r = M(); return Xd(o, n, n[T], r, e, t), pf; }
var AI = {};
function hf(e) { let t = _(), n = g(), o = e + E, r = on(t, o, 128, null, null); return Be(r, !1), bo(t, n, o, AI), hf; }
function RI(e) { Y("NgLet"); let t = _(), n = g(), o = re(); return bo(t, n, o, e), e; }
function OI(e) { let t = pc(), n = Ct(t, E + e); if (n === AI)
    throw new w(314, !1); return n; }
function kI(e, t) { let n = _(), o = g(), r = o[T], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = Dt(n, s + E), d = jt(s + E, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function xI(e) { return $(g(), fe(), e) ? N(e) : P; }
function PI(e, t, n = "") { return DI(g(), e, t, n); }
function LI(e, t, n, o, r = "") { return CI(g(), e, t, n, o, r); }
function FI(e, t, n, o, r, i, s = "") { return TI(g(), e, t, n, o, r, i, s); }
function jI(e, t, n, o, r, i, s, a, c = "") { return MI(g(), e, t, n, o, r, i, s, a, c); }
function HI(e, t, n, o, r, i, s, a, c, l, u = "") { return NI(g(), e, t, n, o, r, i, s, a, c, l, u); }
function VI(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return _I(g(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function BI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h = "") { return wI(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); }
function UI(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, y = "") { return SI(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, m, y); }
function $I(e) { return II(g(), e); }
function lR(e, t, n) { let o = _(); if (o.firstCreatePass) {
    let r = ve(e);
    ou(n, o.data, o.blueprint, r, !0), ou(t, o.data, o.blueprint, r, !1);
} }
function ou(e, t, n, o, r) { if (e = G(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        ou(e[i], t, n, o, r);
else {
    let i = _(), s = g(), a = M(), c = ei(e) ? e : G(e.provide), l = Yf(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (ei(e) || !e.multi) {
        let p = new qt(l, r, lo, null), h = Xc(c, t, r ? u : u + f, d);
        h === -1 ? (il(Ui(a, s), i, c), Jc(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = Xc(c, t, u + f, d), h = Xc(c, t, u, u + f), m = p >= 0 && n[p], y = h >= 0 && n[h];
        if (r && !y || !r && !m) {
            il(Ui(a, s), i, c);
            let I = fR(r ? dR : uR, n.length, r, o, l, e);
            !r && y && (n[h].providerFactory = I), Jc(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(I), s.push(I);
        }
        else {
            let I = GI(n[r ? h : p], l, !r && o);
            Jc(i, e, p > -1 ? p : h, I);
        }
        !r && o && y && n[h].componentProviders++;
    }
} }
function Jc(e, t, n, o) { let r = ei(t), i = Qf(t); if (r || i) {
    let c = (i ? G(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
        let l = e.destroyHooks || (e.destroyHooks = []);
        if (!r && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [o, c]) : l[u + 1].push(o, c);
        }
        else
            l.push(n, c);
    }
} }
function GI(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function Xc(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function uR(e, t, n, o, r) { return ru(this.multi, []); }
function dR(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = Yo(o, o[v], this.providerFactory.index, r);
    s = c.slice(0, a), ru(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], ru(i, s); return s; }
function ru(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function fR(e, t, n, o, r, i) { let s = new qt(e, n, lo, null); return s.multi = [], s.index = t, s.componentProviders = 0, GI(s, r, o && !n), s; }
function qI(e, t = []) { return n => { n.providersResolver = (o, r) => lR(o, r ? r(e) : e, t); }; }
function WI(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function zI(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = as(t, ly), o.pipeDefs = as(n, je); }
function QI(e, t) { return qe(() => { let n = Xr(e); n.declarations = _i(t.declarations || L), n.imports = _i(t.imports || L), n.exports = _i(t.exports || L), t.bootstrap && (n.bootstrap = _i(t.bootstrap)), jn.registerNgModule(e, t); }); }
function _i(e) { if (typeof e == "function")
    return e; let t = Oe(e); return t.some(qr) ? () => t.map(G).map(Nh) : t.map(Nh); }
function Nh(e) { return sd(e) ? e.ngModule : e; }
function ZI(e, t, n) { let o = de() + e, r = g(); return r[o] === P ? We(r, o, n ? t.call(n) : t()) : Sr(r, o); }
function YI(e, t, n, o) { return iD(g(), de(), e, t, n, o); }
function KI(e, t, n, o, r) { return sD(g(), de(), e, t, n, o, r); }
function JI(e, t, n, o, r, i) { return aD(g(), de(), e, t, n, o, r, i); }
function XI(e, t, n, o, r, i, s) { return cD(g(), de(), e, t, n, o, r, i, s); }
function eD(e, t, n, o, r, i, s, a) { let c = de() + e, l = g(), u = be(l, c, n, o, r, i); return $(l, c + 4, s) || u ? We(l, c + 5, a ? t.call(a, n, o, r, i, s) : t(n, o, r, i, s)) : Sr(l, c + 5); }
function tD(e, t, n, o, r, i, s, a, c) { let l = de() + e, u = g(), d = be(u, l, n, o, r, i); return Zt(u, l + 4, s, a) || d ? We(u, l + 6, c ? t.call(c, n, o, r, i, s, a) : t(n, o, r, i, s, a)) : Sr(u, l + 6); }
function nD(e, t, n, o, r, i, s, a, c, l) { let u = de() + e, d = g(), f = be(d, u, n, o, r, i); return na(d, u + 4, s, a, c) || f ? We(d, u + 7, l ? t.call(l, n, o, r, i, s, a, c) : t(n, o, r, i, s, a, c)) : Sr(d, u + 7); }
function oD(e, t, n, o, r, i, s, a, c, l, u) { let d = de() + e, f = g(), p = be(f, d, n, o, r, i); return be(f, d + 4, s, a, c, l) || p ? We(f, d + 8, u ? t.call(u, n, o, r, i, s, a, c, l) : t(n, o, r, i, s, a, c, l)) : Sr(f, d + 8); }
function rD(e, t, n, o) { return lD(g(), de(), e, t, n, o); }
function Pr(e, t) { let n = e[t]; return n === P ? void 0 : n; }
function iD(e, t, n, o, r, i) { let s = t + n; return $(e, s, r) ? We(e, s + 1, i ? o.call(i, r) : o(r)) : Pr(e, s + 1); }
function sD(e, t, n, o, r, i, s) { let a = t + n; return Zt(e, a, r, i) ? We(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : Pr(e, a + 2); }
function aD(e, t, n, o, r, i, s, a) { let c = t + n; return na(e, c, r, i, s) ? We(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : Pr(e, c + 3); }
function cD(e, t, n, o, r, i, s, a, c) { let l = t + n; return be(e, l, r, i, s, a) ? We(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : Pr(e, l + 4); }
function lD(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    $(e, s++, r[c]) && (a = !0); return a ? We(e, s, o.apply(i, r)) : Pr(e, s); }
function uD(e, t) { let n = _(), o, r = e + E; n.firstCreatePass ? (o = pR(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = Yr(o.type, !0)), s, a = xt(lo); try {
    let c = Bi(!1), l = i();
    return Bi(c), bo(n, g(), r, l), l;
}
finally {
    xt(a);
} }
function pR(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function dD(e, t, n) { let o = e + E, r = g(), i = Ct(r, o); return Lr(r, o) ? iD(r, de(), t, i.transform, n, i) : i.transform(n); }
function fD(e, t, n, o) { let r = e + E, i = g(), s = Ct(i, r); return Lr(i, r) ? sD(i, de(), t, s.transform, n, o, s) : s.transform(n, o); }
function pD(e, t, n, o, r) { let i = e + E, s = g(), a = Ct(s, i); return Lr(s, i) ? aD(s, de(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function hD(e, t, n, o, r, i) { let s = e + E, a = g(), c = Ct(a, s); return Lr(a, s) ? cD(a, de(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function gD(e, t, n) { let o = e + E, r = g(), i = Ct(r, o); return Lr(r, o) ? lD(r, de(), t, i.transform, n, i) : i.transform.apply(i, n); }
function Lr(e, t) { return e[v].data[t].pure; }
function mD(e, t) { return Qs(e, t); }
function vD(e, t) { return () => { try {
    return jn.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function yD(e, t) { let n = q(e); n !== null && (n.debugInfo = t); }
function ED(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function ID(e, t, n, o, r = null, i = null) { let s = q(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = hR(s, q(e)); if (e[cn] = a, c.tView) {
    let l = eM().values();
    for (let u of l)
        Ve(u) && u[z] === null && Li(r, i, a, c, u);
} }
function hR(e, t) { let n = W({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function Li(e, t, n, o, r) { let i = r[v]; if (i === o.tView) {
    mR(e, t, n, o, r);
    return;
} for (let s = E; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (J(a)) {
        K(a[V]) && Li(e, t, n, o, a[V]);
        for (let c = j; c < a.length; c++)
            Li(e, t, n, o, a[c]);
    }
    else
        K(a) && Li(e, t, n, o, a);
} }
function gR(e, t) { e.componentReplaced?.(t.id); }
function mR(e, t, n, o, r) { let i = r[F], s = r[V], a = r[z], c = r[ae], l = r[R].get(H, null), u = () => { if (o.encapsulation === rt.ShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = ym(n), f = ks(a, d, i, ju(n), s, c, null, null, null, null, null); vR(a, r, f, c.index), Mr(r[v], r); let p = r[Ye].rendererFactory; gR(p, o), f[T] = p.createRenderer(s, n), Rm(r[v], r), yR(c), Ws(d, f, i), Ym(d, f, d.template, i); }; l === null ? _h(e, t, u) : l.run(() => _h(e, t, u)); }
function _h(e, t, n) {
    try {
        n();
    }
    catch (o) {
        let r = o;
        if (t !== null && r.message) {
            let i = r.message + (r.stack ? `
` + r.stack : "");
            e?.hot?.send?.("angular:invalidate", { id: t, message: i, error: !0 });
        }
        throw o;
    }
}
function vR(e, t, n, o) { for (let r = E; r < e[v].bindingStartIndex; r++) {
    let i = e[r];
    if ((K(i) || J(i)) && i[se] === t) {
        i[se] = n;
        break;
    }
} e[Et] === t && (e[Et] = n), e[Mo] === t && (e[Mo] = n), n[se] = t[se], t[se] = null, e[o] = n; }
function yR(e) { if (e.projection !== null) {
    for (let t of e.projection)
        gs(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var pe = { \u0275\u0275animateEnter: Uo, \u0275\u0275animateEnterListener: $o, \u0275\u0275animateLeave: Go, \u0275\u0275animateLeaveListener: ls, \u0275\u0275attribute: xd, \u0275\u0275defineComponent: cy, \u0275\u0275defineDirective: uy, \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: Eo, \u0275\u0275defineNgModule: Ed, \u0275\u0275definePipe: dy, \u0275\u0275directiveInject: lo, \u0275\u0275getInheritedFactory: tg, \u0275\u0275inject: Re, \u0275\u0275injectAttribute: ms, \u0275\u0275invalidFactory: Av, \u0275\u0275invalidFactoryDep: Zr, \u0275\u0275templateRefExtractor: mD, \u0275\u0275resetView: uc, \u0275\u0275HostDirectivesFeature: my, \u0275\u0275NgOnChangesFeature: Hh, \u0275\u0275ProvidersFeature: qI, \u0275\u0275CopyDefinitionFeature: gy, \u0275\u0275InheritDefinitionFeature: Id, \u0275\u0275ExternalStylesFeature: WI, \u0275\u0275nextContext: zE, \u0275\u0275namespaceHTML: Tc, \u0275\u0275namespaceMathML: Cc, \u0275\u0275namespaceSVG: Dc, \u0275\u0275enableBindings: sc, \u0275\u0275disableBindings: ac, \u0275\u0275elementStart: fa, \u0275\u0275elementEnd: pa, \u0275\u0275element: Fd, \u0275\u0275elementContainerStart: ma, \u0275\u0275elementContainerEnd: kr, \u0275\u0275domElement: jd, \u0275\u0275domElementStart: ha, \u0275\u0275domElementEnd: ga, \u0275\u0275domElementContainer: Ud, \u0275\u0275domElementContainerStart: va, \u0275\u0275domElementContainerEnd: Bd, \u0275\u0275domTemplate: Cd, \u0275\u0275domListener: Jd, \u0275\u0275elementContainer: Vd, \u0275\u0275pureFunction0: ZI, \u0275\u0275pureFunction1: YI, \u0275\u0275pureFunction2: KI, \u0275\u0275pureFunction3: JI, \u0275\u0275pureFunction4: XI, \u0275\u0275pureFunction5: eD, \u0275\u0275pureFunction6: tD, \u0275\u0275pureFunction7: nD, \u0275\u0275pureFunction8: oD, \u0275\u0275pureFunctionV: rD, \u0275\u0275getCurrentView: wE, \u0275\u0275restoreView: lc, \u0275\u0275listener: Yd, \u0275\u0275projection: ZE, \u0275\u0275syntheticHostProperty: qd, \u0275\u0275syntheticHostListener: Kd, \u0275\u0275pipeBind1: dD, \u0275\u0275pipeBind2: fD, \u0275\u0275pipeBind3: pD, \u0275\u0275pipeBind4: hD, \u0275\u0275pipeBindV: gD, \u0275\u0275projectionDef: QE, \u0275\u0275domProperty: Gd, \u0275\u0275ariaProperty: kd, \u0275\u0275property: Ld, \u0275\u0275pipe: uD, \u0275\u0275queryRefresh: JE, \u0275\u0275queryAdvance: nI, \u0275\u0275viewQuery: KE, \u0275\u0275viewQuerySignal: tI, \u0275\u0275loadQuery: XE, \u0275\u0275contentQuery: YE, \u0275\u0275contentQuerySignal: eI, \u0275\u0275reference: oI, \u0275\u0275classMap: lI, \u0275\u0275styleMap: cI, \u0275\u0275styleProp: ef, \u0275\u0275classProp: tf, \u0275\u0275advance: Em, \u0275\u0275template: Dd, \u0275\u0275conditional: IE, \u0275\u0275conditionalCreate: EE, \u0275\u0275conditionalBranchCreate: da, \u0275\u0275defer: Gy, \u0275\u0275deferWhen: qy, \u0275\u0275deferOnIdle: Zy, \u0275\u0275deferOnImmediate: Jy, \u0275\u0275deferOnTimer: tE, \u0275\u0275deferOnHover: rE, \u0275\u0275deferOnInteraction: aE, \u0275\u0275deferOnViewport: uE, \u0275\u0275deferPrefetchWhen: Wy, \u0275\u0275deferPrefetchOnIdle: Yy, \u0275\u0275deferPrefetchOnImmediate: Xy, \u0275\u0275deferPrefetchOnTimer: nE, \u0275\u0275deferPrefetchOnHover: iE, \u0275\u0275deferPrefetchOnInteraction: cE, \u0275\u0275deferPrefetchOnViewport: dE, \u0275\u0275deferHydrateWhen: zy, \u0275\u0275deferHydrateNever: Qy, \u0275\u0275deferHydrateOnIdle: Ky, \u0275\u0275deferHydrateOnImmediate: eE, \u0275\u0275deferHydrateOnTimer: oE, \u0275\u0275deferHydrateOnHover: sE, \u0275\u0275deferHydrateOnInteraction: lE, \u0275\u0275deferHydrateOnViewport: fE, \u0275\u0275deferEnableTimerScheduling: Ry, \u0275\u0275repeater: ME, \u0275\u0275repeaterCreate: TE, \u0275\u0275repeaterTrackByIndex: DE, \u0275\u0275repeaterTrackByIdentity: CE, \u0275\u0275componentInstance: yE, \u0275\u0275text: vI, \u0275\u0275textInterpolate: nf, \u0275\u0275textInterpolate1: ya, \u0275\u0275textInterpolate2: of, \u0275\u0275textInterpolate3: rf, \u0275\u0275textInterpolate4: sf, \u0275\u0275textInterpolate5: af, \u0275\u0275textInterpolate6: cf, \u0275\u0275textInterpolate7: lf, \u0275\u0275textInterpolate8: uf, \u0275\u0275textInterpolateV: df, \u0275\u0275i18n: $E, \u0275\u0275i18nAttributes: GE, \u0275\u0275i18nExp: Zd, \u0275\u0275i18nStart: zd, \u0275\u0275i18nEnd: Qd, \u0275\u0275i18nApply: qE, \u0275\u0275i18nPostprocess: WE, \u0275\u0275resolveWindow: hm, \u0275\u0275resolveDocument: gm, \u0275\u0275resolveBody: Pu, \u0275\u0275setComponentScope: zI, \u0275\u0275setNgModuleScope: QI, \u0275\u0275registerNgModuleType: md, \u0275\u0275getComponentDepsFactory: vD, \u0275setClassDebugInfo: yD, \u0275\u0275declareLet: hf, \u0275\u0275storeLet: RI, \u0275\u0275readContextLet: OI, \u0275\u0275attachSourceLocations: kI, \u0275\u0275interpolate: xI, \u0275\u0275interpolate1: PI, \u0275\u0275interpolate2: LI, \u0275\u0275interpolate3: FI, \u0275\u0275interpolate4: jI, \u0275\u0275interpolate5: HI, \u0275\u0275interpolate6: VI, \u0275\u0275interpolate7: BI, \u0275\u0275interpolate8: UI, \u0275\u0275interpolateV: $I, \u0275\u0275sanitizeHtml: am, \u0275\u0275sanitizeStyle: cm, \u0275\u0275sanitizeResourceUrl: xu, \u0275\u0275sanitizeScript: lm, \u0275\u0275validateAttribute: pm, \u0275\u0275sanitizeUrl: ku, \u0275\u0275sanitizeUrlOrResourceUrl: fm, \u0275\u0275trustConstantHtml: um, \u0275\u0275trustConstantResourceUrl: dm, forwardRef: Ua, resolveForwardRef: G, \u0275\u0275twoWayProperty: ff, \u0275\u0275twoWayBindingSet: bI, \u0275\u0275twoWayListener: pf, \u0275\u0275replaceMetadata: ID, \u0275\u0275getReplaceMetadataURL: ED }, _n = null;
function DD(e) { _n !== null && (e.defaultEncapsulation !== _n.defaultEncapsulation || e.preserveWhitespaces !== _n.preserveWhitespaces) || (_n = e); }
function ER() { return _n; }
function IR() { _n = null; }
var Zo = [];
function DR(e, t) { Zo.push({ moduleType: e, ngModule: t }); }
var el = !1;
function CD() { if (!el) {
    el = !0;
    try {
        for (let e = Zo.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = Zo[e];
            n.declarations && n.declarations.every(TD) && (Zo.splice(e, 1), _R(t, n));
        }
    }
    finally {
        el = !1;
    }
} }
function TD(e) { return Array.isArray(e) ? e.every(TD) : !!G(e); }
function MD(e, t = {}) { ND(e, t), t.id !== void 0 && md(e, t.id), DR(e, t); }
function ND(e, t, n = !1) { let o = Oe(t.declarations || L), r = null; Object.defineProperty(e, Ga, { configurable: !0, get: () => (r === null && (r = ee({ usage: 0, kind: "NgModule", type: e }).compileNgModule(pe, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Oe(t.bootstrap || L).map(G), declarations: o.map(G), imports: Oe(t.imports || L).map(G).map(wh), exports: Oe(t.exports || L).map(G).map(wh), schemas: t.schemas ? Oe(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, mt, { get: () => { if (i === null) {
        let a = ee({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(pe, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: vs(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, $a, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || L, imports: [(t.imports || L).map(G), (t.exports || L).map(G)] };
        s = ee({ usage: 0, kind: "NgModule", type: e }).compileInjector(pe, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function CR(e, t) { let n = `Unexpected "${Ie(e)}" found in the "declarations" array of the`, o = `"${Ie(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var TR = new WeakMap, MR = new WeakMap;
function NR() { TR = new WeakMap, MR = new WeakMap, Zo.length = 0, PS.clear(); }
function _R(e, t) { let n = Oe(t.declarations || L), o = mf(e); n.forEach(r => { if (r = G(r), r.hasOwnProperty(cn)) {
    let s = q(r);
    gf(s, o);
}
else
    !r.hasOwnProperty(zr) && !r.hasOwnProperty(Qr) && (r.ngSelectorScope = e); }); }
function gf(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(cn) ? q(n) : Ne(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => je(n)), e.schemas = t.schemas, e.tView = null; }
function mf(e) { if (Bt(e)) {
    let t = jn.getNgModuleScope(e), n = Xr(e);
    return W({ schemas: n.schemas || null }, t);
}
else if (To(e)) {
    if ((q(e) || Ne(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (je(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function wh(e) { return sd(e) ? e.ngModule : e; }
var tl = 0;
function _D(e, t) {
    let n = null;
    MS(e, t), SD(e, t), Object.defineProperty(e, cn, { get: () => {
            if (n === null) {
                let o = ee({ usage: 0, kind: "component", type: e });
                if (ty(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = ER(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = rt.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = bD(e, t), l = Fe(W({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || L, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, interpolation: t.interpolation, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                tl++;
                try {
                    if (l.usesInheritance && AD(e), n = o.compileComponent(pe, a, l), l.isStandalone) {
                        let u = Oe(t.imports || L), { directiveDefs: d, pipeDefs: f } = wR(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(G);
                    }
                }
                finally {
                    tl--;
                }
                if (tl === 0 && CD(), SR(e)) {
                    let u = mf(e.ngSelectorScope);
                    gf(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${Ie(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function wR(e, t) { return { directiveDefs: () => Ho(e) ? [...jn.getStandaloneComponentScope(e, t).compilation.directives].map(i => q(i) || Ne(i)).filter(i => i !== null) : [], pipeDefs: () => Ho(e) ? [...jn.getStandaloneComponentScope(e, t).compilation.pipes].map(i => je(i)).filter(i => i !== null) : [] }; }
function SR(e) { return e.ngSelectorScope !== void 0; }
function vf(e, t) { let n = null; SD(e, t || {}), Object.defineProperty(e, zr, { get: () => { if (n === null) {
        let o = wD(e, t || {});
        n = ee({ usage: 0, kind: "directive", type: e }).compileDirective(pe, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function wD(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = ee({ usage: 0, kind: "directive", type: e }), i = bD(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && AD(e), { metadata: i, sourceMapUrl: o }; }
function SD(e, t) { let n = null; Object.defineProperty(e, mt, { get: () => { if (n === null) {
        let o = wD(e, t), r = ee({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(pe, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: vs(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function bR(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function bD(e, t) { let n = du(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || Me, propMetadata: o, inputs: t.inputs || L, outputs: t.outputs || L, queries: Sh(e, o, RD), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, typeSourceSpan: null, usesInheritance: !bR(e), exportAs: OR(t.exportAs), providers: t.providers || null, viewQueries: Sh(e, o, OD), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function AD(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !Ne(n) && !q(n) && xR(n) && vf(n, null), n = Object.getPrototypeOf(n); }
function AR(e) { return typeof e == "string" ? xD(e) : G(e); }
function RR(e, t) { return { propertyName: e, predicate: AR(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function Sh(e, t, n) { let o = []; for (let r in t)
    if (t.hasOwnProperty(r)) {
        let i = t[r];
        i.forEach(s => { if (n(s)) {
            if (!s.selector)
                throw new Error(`Can't construct a query for the property "${r}" of "${Ie(e)}" since the query selector wasn't defined.`);
            if (i.some(kD))
                throw new Error("Cannot combine @Input decorators with query decorators");
            o.push(RR(r, s));
        } });
    } return o; }
function OR(e) { return e === void 0 ? null : xD(e); }
function RD(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function OD(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function kD(e) { return e.ngMetadataName === "Input"; }
function xD(e) { return e.split(",").map(t => t.trim()); }
var kR = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function xR(e) { let t = du(); if (kR.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (kD(s) || RD(s) || OD(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function PD(e, t) { let n = null, o = null; Object.defineProperty(e, mt, { get: () => { if (o === null) {
        let r = bh(e, t), i = ee({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(pe, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: vs(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, Qr, { get: () => { if (n === null) {
        let r = bh(e, t);
        n = ee({ usage: 0, kind: "pipe", type: r.type }).compilePipe(pe, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function bh(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var LD = fr("Directive", (e = {}) => e, void 0, void 0, (e, t) => vf(e, t)), PR = fr("Component", (e = {}) => W({ changeDetection: ys.Default }, e), LD, void 0, (e, t) => _D(e, t)), LR = fr("Pipe", e => W({ pure: !0 }, e), void 0, void 0, (e, t) => PD(e, t)), FR = st("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), jR = st("Output", e => ({ alias: e })), HR = st("HostBinding", e => ({ hostPropertyName: e })), VR = st("HostListener", (e, t) => ({ eventName: e, args: t })), BR = fr("NgModule", e => e, void 0, void 0, (e, t) => MD(e, t)), hs = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, UR = (() => { class e {
    compileModuleSync(n) { return new Un(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = un(n), i = Mn(r.declarations).reduce((s, a) => { let c = q(a); return c && s.push(new At(c)), s; }, []); return new hs(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), FD = new S(""), iu = class {
}, $R = (() => { class e {
    zone = D(H);
    changeDetectionScheduler = D(Xe);
    applicationRef = D(Le);
    applicationErrorHandler = D(Mt);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), jD = new S("", { factory: () => !1 });
function Ea({ ngZoneFactory: e, ignoreChangesOutsideZone: t, scheduleInRootZone: n }) { return e ??= () => new H(Fe(W({}, Ia()), { scheduleInRootZone: n })), [{ provide: H, useFactory: e }, { provide: vt, multi: !0, useFactory: () => { let o = D($R, { optional: !0 }); return () => o.initialize(); } }, { provide: vt, multi: !0, useFactory: () => { let o = D(qR); return () => { o.initialize(); }; } }, t === !0 ? { provide: Sc, useValue: !0 } : [], { provide: gi, useValue: n ?? Mm }, { provide: Mt, useFactory: () => { let o = D(H), r = D(yt), i; return s => { o.runOutsideAngular(() => { r.destroyed && !i ? setTimeout(() => { throw s; }) : (i ??= r.get(pi), i.handleError(s)); }); }; } }]; }
function GR(e) { let t = e?.ignoreChangesOutsideZone, n = e?.scheduleInRootZone, o = Ea({ ngZoneFactory: () => { let r = Ia(e); return r.scheduleInRootZone = n, r.shouldCoalesceEventChangeDetection && Y("NgZone_CoalesceEvent"), new H(r); }, ignoreChangesOutsideZone: t, scheduleInRootZone: n }); return Ze([{ provide: jD, useValue: !0 }, { provide: mn, useValue: !1 }, o]); }
function Ia(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var qR = (() => { class e {
    subscription = new cu;
    initialized = !1;
    zone = D(H);
    pendingTasks = D(Nt);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { H.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { H.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var Da = (() => { class e {
    applicationErrorHandler = D(Mt);
    appRef = D(Le);
    taskService = D(Nt);
    ngZone = D(H);
    zonelessEnabled = D(mn);
    tracing = D(ro, { optional: !0 });
    disableScheduling = D(Sc, { optional: !0 }) ?? !1;
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new cu;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(Ki) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (D(gi, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() { this.subscriptions.add(this.appRef.afterTick.subscribe(() => { this.runningTick || this.cleanup(); })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => { this.runningTick || this.cleanup(); })), this.disableScheduling ||= !this.zonelessEnabled && (this.ngZone instanceof Ln || !this.zoneIsDefined); }
    notify(n) { if (!this.zonelessEnabled && n === 5)
        return; let o = !1; switch (n) {
        case 0: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
            this.appRef.dirtyFlags |= 4;
            break;
        }
        case 6: {
            this.appRef.dirtyFlags |= 2, o = !0;
            break;
        }
        case 12: {
            this.appRef.dirtyFlags |= 16, o = !0;
            break;
        }
        case 13: {
            this.appRef.dirtyFlags |= 2, o = !0;
            break;
        }
        case 11: {
            o = !0;
            break;
        }
        case 9:
        case 8:
        case 7:
        case 10:
        default: this.appRef.dirtyFlags |= 8;
    } if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick(o))
        return; let r = this.useMicrotaskScheduler ? Up : Nm; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => r(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => r(() => this.tick())); }
    shouldScheduleTick(n) { return !(this.disableScheduling && !n || this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(Ki + this.angularZoneId)); }
    tick() { if (this.runningTick || this.appRef.destroyed)
        return; if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
    } !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1); let n = this.taskService.add(); try {
        this.ngZone.run(() => { this.runningTick = !0, this.appRef._tick(); }, void 0, this.schedulerTickApplyArgs);
    }
    catch (o) {
        this.taskService.remove(n), this.applicationErrorHandler(o);
    }
    finally {
        this.cleanup();
    } this.useMicrotaskScheduler = !0, Up(() => { this.useMicrotaskScheduler = !1, this.taskService.remove(n); }); }
    ngOnDestroy() { this.subscriptions.unsubscribe(), this.cleanup(); }
    cleanup() { if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
    } }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function WR() { return Y("NgZoneless"), Ze([{ provide: Xe, useExisting: Da }, { provide: H, useClass: Ln }, { provide: mn, useValue: !0 }, { provide: gi, useValue: !1 }, []]); }
function zR() { return typeof $localize < "u" && $localize.locale || xr; }
var yf = new S("", { providedIn: "root", factory: () => D(yf, { optional: !0, skipSelf: !0 }) || zR() }), QR = new S("", { providedIn: "root", factory: () => sA }), ZR = new S(""), YR = new S(""), HD = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })(HD || {}), su = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function KR(e) { return e.map(t => t.nativeElement); }
var dr = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new Xt(t) : null; }
    get injector() { return lM(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (Rp(t) || cM(t)); }
    get context() { return Rp(this.nativeNode) || aM(this.nativeNode); }
    get listeners() { return hM(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return fM(this.nativeNode); }
    get providerTokens() { return uM(this.nativeNode); }
}, Xt = class extends dr {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = ye(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[v].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = ye(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[v].data, r = o[t.nodeIndex], i = {}; return JR(this.nativeElement, i), eO(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = ye(n), r = o ? o.lView : null; if (r === null)
        return {}; let i = r[v].data[o.nodeIndex].attrs, s = []; if (i) {
        let a = 0;
        for (; a < i.length;) {
            let c = i[a];
            if (typeof c != "string")
                break;
            let l = i[a + 1];
            t[c] = l, s.push(c.toLowerCase()), a += 2;
        }
    } for (let a of n.attributes)
        s.includes(a.name) || (t[a.name] = a.value); return t; }
    get styles() { return this.nativeElement?.style ?? {}; }
    get classes() { let t = {}, o = this.nativeElement.className; return (typeof o != "string" ? o.baseVal.split(" ") : o.split(" ")).forEach(i => t[i] = !0), t; }
    get childNodes() { let t = this.nativeNode.childNodes, n = []; for (let o = 0; o < t.length; o++) {
        let r = t[o];
        n.push(zn(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(zn(i));
    } return o; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return Ah(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return Ah(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let o = this.nativeNode, r = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(o, n), r.push(s);
    } }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return r.indexOf(s) === -1 && s.call(o, n);
    } }); }
};
function JR(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                XR(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function XR(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function Ah(e, t, n, o) { let r = ye(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[v].data[r.nodeIndex];
    Ut(s, i, t, n, o, e.nativeNode);
}
else
    Ef(e.nativeNode, t, n, o); }
function Ut(e, t, n, o, r, i) { let s = ep(e, t); if (e.type & 11) {
    if (nl(s, n, o, r, i), me(e)) {
        let c = ue(e.index, t);
        c && c[v].firstChild && Ut(c[v].firstChild, c, n, o, r, i);
    }
    else
        e.child && Ut(e.child, t, n, o, r, i), s && Ef(s, n, o, r);
    let a = t[e.index];
    J(a) && Rh(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    nl(a[ke], n, o, r, i), Rh(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[Z], l = a[ae].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            nl(u, n, o, r, i);
    else if (l) {
        let u = a[z], d = u[v].data[l.index];
        Ut(d, u, n, o, r, i);
    }
}
else
    e.child && Ut(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && Ut(a, t, n, o, r, i);
} }
function Rh(e, t, n, o, r) { for (let i = j; i < e.length; i++) {
    let s = e[i], a = s[v].firstChild;
    a && Ut(a, s, t, n, o, r);
} }
function nl(e, t, n, o, r) { if (r !== e) {
    let i = zn(e);
    if (!i)
        return;
    (o && i instanceof Xt && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function Ef(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = zn(a);
    c && ((o && c instanceof Xt && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), Ef(a, t, n, o));
} }
function eO(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(ON), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += N(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var ol = "__ng_debug__";
function zn(e) { return e instanceof Node ? (e.hasOwnProperty(ol) || (e[ol] = e.nodeType == Node.ELEMENT_NODE ? new Xt(e) : new dr(e)), e[ol]) : null; }
var Mf = { JSACTION: "__jsaction", OWNER: "__owner" }, $D = {};
function tO(e) { return e[Mf.JSACTION]; }
function VD(e, t) { e[Mf.JSACTION] = t; }
function nO(e) { return $D[e]; }
function oO(e, t) { $D[e] = t; }
var C = { AUXCLICK: "auxclick", CHANGE: "change", CLICK: "click", CLICKMOD: "clickmod", CLICKONLY: "clickonly", DBLCLICK: "dblclick", FOCUS: "focus", FOCUSIN: "focusin", BLUR: "blur", FOCUSOUT: "focusout", SUBMIT: "submit", KEYDOWN: "keydown", KEYPRESS: "keypress", KEYUP: "keyup", MOUSEUP: "mouseup", MOUSEDOWN: "mousedown", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", MOUSEMOVE: "mousemove", POINTERUP: "pointerup", POINTERDOWN: "pointerdown", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", POINTERMOVE: "pointermove", POINTERCANCEL: "pointercancel", GOTPOINTERCAPTURE: "gotpointercapture", LOSTPOINTERCAPTURE: "lostpointercapture", ERROR: "error", LOAD: "load", UNLOAD: "unload", TOUCHSTART: "touchstart", TOUCHEND: "touchend", TOUCHMOVE: "touchmove", INPUT: "input", SCROLL: "scroll", TOGGLE: "toggle", CUSTOM: "_custom" }, rO = [C.MOUSEENTER, C.MOUSELEAVE, "pointerenter", "pointerleave"], iO = [C.CLICK, C.DBLCLICK, C.FOCUSIN, C.FOCUSOUT, C.KEYDOWN, C.KEYUP, C.KEYPRESS, C.MOUSEOVER, C.MOUSEOUT, C.SUBMIT, C.TOUCHSTART, C.TOUCHEND, C.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"], GD = [C.FOCUS, C.BLUR, C.ERROR, C.LOAD, C.TOGGLE], wa = e => GD.indexOf(e) >= 0, sO = iO.concat(GD), qD = e => sO.indexOf(e) >= 0;
function aO(e) { return e === C.MOUSEENTER ? C.MOUSEOVER : e === C.MOUSELEAVE ? C.MOUSEOUT : e === C.POINTERENTER ? C.POINTEROVER : e === C.POINTERLEAVE ? C.POINTEROUT : e; }
function cO(e, t, n, o) { let r = !1; wa(t) && (r = !0); let i = typeof o == "boolean" ? { capture: r, passive: o } : r; return e.addEventListener(t, n, i), { eventType: t, handler: n, capture: r, passive: o }; }
function lO(e, t) { if (e.removeEventListener) {
    let n = typeof t.passive == "boolean" ? { capture: t.capture } : t.capture;
    e.removeEventListener(t.eventType, t.handler, n);
}
else
    e.detachEvent && e.detachEvent(`on${t.eventType}`, t.handler); }
function uO(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1; }
var BD = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
function dO(e) { return e.which === 2 || e.which == null && e.button === 4; }
function fO(e) { return BD && e.metaKey || !BD && e.ctrlKey || dO(e) || e.shiftKey; }
function pO(e, t, n) { let o = e.relatedTarget; return (e.type === C.MOUSEOVER && t === C.MOUSEENTER || e.type === C.MOUSEOUT && t === C.MOUSELEAVE || e.type === C.POINTEROVER && t === C.POINTERENTER || e.type === C.POINTEROUT && t === C.POINTERLEAVE) && (!o || o !== n && !n.contains(o)); }
function hO(e, t) { let n = {}; for (let o in e) {
    if (o === "srcElement" || o === "target")
        continue;
    let r = o, i = e[r];
    typeof i != "function" && (n[r] = i);
} return e.type === C.MOUSEOVER ? n.type = C.MOUSEENTER : e.type === C.MOUSEOUT ? n.type = C.MOUSELEAVE : e.type === C.POINTEROVER ? n.type = C.POINTERENTER : n.type = C.POINTERLEAVE, n.target = n.srcElement = t, n.bubbles = !1, n._originalEvent = e, n; }
var gO = typeof navigator < "u" && /iPhone|iPad|iPod/.test(navigator.userAgent), Na = class {
    element;
    handlerInfos = [];
    constructor(t) { this.element = t; }
    addEventListener(t, n, o) { gO && (this.element.style.cursor = "pointer"), this.handlerInfos.push(cO(this.element, t, n(this.element), o)); }
    cleanUp() { for (let t = 0; t < this.handlerInfos.length; t++)
        lO(this.element, this.handlerInfos[t]); this.handlerInfos = []; }
}, mO = { NAMESPACE_ACTION_SEPARATOR: ".", EVENT_ACTION_SEPARATOR: ":" };
function Ot(e) { return e.eventType; }
function Nf(e, t) { e.eventType = t; }
function Ta(e) { return e.event; }
function WD(e, t) { e.event = t; }
function zD(e) { return e.targetElement; }
function QD(e, t) { e.targetElement = t; }
function ZD(e) { return e.eic; }
function vO(e, t) { e.eic = t; }
function yO(e) { return e.timeStamp; }
function EO(e, t) { e.timeStamp = t; }
function Ma(e) { return e.eia; }
function YD(e, t, n) { e.eia = [t, n]; }
function If(e) { e.eia = void 0; }
function Ca(e) { return e[1]; }
function IO(e) { return e.eirp; }
function KD(e, t) { e.eirp = t; }
function JD(e) { return e.eir; }
function XD(e, t) { e.eir = t; }
function eC(e) { return { eventType: e.eventType, event: e.event, targetElement: e.targetElement, eic: e.eic, eia: e.eia, timeStamp: e.timeStamp, eirp: e.eirp, eiack: e.eiack, eir: e.eir }; }
function DO(e, t, n, o, r, i, s, a) { return { eventType: e, event: t, targetElement: n, eic: o, timeStamp: r, eia: i, eirp: s, eiack: a }; }
var Df = class e {
    eventInfo;
    constructor(t) { this.eventInfo = t; }
    getEventType() { return Ot(this.eventInfo); }
    setEventType(t) { Nf(this.eventInfo, t); }
    getEvent() { return Ta(this.eventInfo); }
    setEvent(t) { WD(this.eventInfo, t); }
    getTargetElement() { return zD(this.eventInfo); }
    setTargetElement(t) { QD(this.eventInfo, t); }
    getContainer() { return ZD(this.eventInfo); }
    setContainer(t) { vO(this.eventInfo, t); }
    getTimestamp() { return yO(this.eventInfo); }
    setTimestamp(t) { EO(this.eventInfo, t); }
    getAction() { let t = Ma(this.eventInfo); if (t)
        return { name: t[0], element: t[1] }; }
    setAction(t) { if (!t) {
        If(this.eventInfo);
        return;
    } YD(this.eventInfo, t.name, t.element); }
    getIsReplay() { return IO(this.eventInfo); }
    setIsReplay(t) { KD(this.eventInfo, t); }
    getResolved() { return JD(this.eventInfo); }
    setResolved(t) { XD(this.eventInfo, t); }
    clone() { return new e(eC(this.eventInfo)); }
}, CO = {}, TO = /\s*;\s*/, MO = C.CLICK, Cf = class {
    a11yClickSupport = !1;
    clickModSupport = !0;
    syntheticMouseEventSupport;
    updateEventInfoForA11yClick = void 0;
    preventDefaultForA11yClick = void 0;
    populateClickOnlyAction = void 0;
    constructor({ syntheticMouseEventSupport: t = !1, clickModSupport: n = !0 } = {}) { this.syntheticMouseEventSupport = t, this.clickModSupport = n; }
    resolveEventType(t) { this.clickModSupport && Ot(t) === C.CLICK && fO(Ta(t)) ? Nf(t, C.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(t); }
    resolveAction(t) { JD(t) || (this.populateAction(t, zD(t)), XD(t, !0)); }
    resolveParentAction(t) { let n = Ma(t), o = n && Ca(n); If(t); let r = o && this.getParentNode(o); r && this.populateAction(t, r); }
    populateAction(t, n) { let o = n; for (; o && o !== ZD(t) && (o.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(o, t), !Ma(t));)
        o = this.getParentNode(o); let r = Ma(t); if (r && (this.a11yClickSupport && this.preventDefaultForA11yClick(t), this.syntheticMouseEventSupport && (Ot(t) === C.MOUSEENTER || Ot(t) === C.MOUSELEAVE || Ot(t) === C.POINTERENTER || Ot(t) === C.POINTERLEAVE)))
        if (pO(Ta(t), Ot(t), Ca(r))) {
            let i = hO(Ta(t), Ca(r));
            WD(t, i), QD(t, Ca(r));
        }
        else
            If(t); }
    getParentNode(t) { let n = t[Mf.OWNER]; if (n)
        return n; let o = t.parentNode; return o?.nodeName === "#document-fragment" ? o?.host ?? null : o; }
    populateActionOnElement(t, n) { let o = this.parseActions(t), r = o[Ot(n)]; r !== void 0 && YD(n, r, t), this.a11yClickSupport && this.populateClickOnlyAction(t, n, o); }
    parseActions(t) { let n = tO(t); if (!n) {
        let o = t.getAttribute(vn.JSACTION);
        if (!o)
            n = CO, VD(t, n);
        else {
            if (n = nO(o), !n) {
                n = {};
                let r = o.split(TO);
                for (let i = 0; i < r.length; i++) {
                    let s = r[i];
                    if (!s)
                        continue;
                    let a = s.indexOf(mO.EVENT_ACTION_SEPARATOR), c = a !== -1, l = c ? s.substr(0, a).trim() : MO, u = c ? s.substr(a + 1).trim() : s;
                    n[l] = u;
                }
                oO(o, n);
            }
            VD(t, n);
        }
    } return n; }
    addA11yClickSupport(t, n, o) { this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = t, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = o; }
}, tC = (function (e) { return e[e.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK", e; })(tC || {}), Tf = class {
    dispatchDelegate;
    actionResolver;
    eventReplayer;
    eventReplayScheduled = !1;
    replayEventInfoWrappers = [];
    constructor(t, { actionResolver: n, eventReplayer: o } = {}) { this.dispatchDelegate = t, this.actionResolver = n, this.eventReplayer = o; }
    dispatch(t) { let n = new Df(t); this.actionResolver?.resolveEventType(t), this.actionResolver?.resolveAction(t); let o = n.getAction(); if (o && NO(o.element, n) && uO(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
        this.scheduleEventInfoWrapperReplay(n);
        return;
    } this.dispatchDelegate(n); }
    scheduleEventInfoWrapperReplay(t) { this.replayEventInfoWrappers.push(t), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => { this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers); })); }
};
function NO(e, t) { return e.tagName === "A" && (t.getEventType() === C.CLICK || t.getEventType() === C.CLICKMOD); }
var nC = Symbol.for("propagationStopped"), _f = { REPLAY: 101 };
var _O = "`preventDefault` called during event replay.";
var wO = "`composedPath` called during event replay.", _a = class {
    dispatchDelegate;
    clickModSupport;
    actionResolver;
    dispatcher;
    constructor(t, n = !0) { this.dispatchDelegate = t, this.clickModSupport = n, this.actionResolver = new Cf({ clickModSupport: n }), this.dispatcher = new Tf(o => { this.dispatchToDelegate(o); }, { actionResolver: this.actionResolver }); }
    dispatch(t) { this.dispatcher.dispatch(t); }
    dispatchToDelegate(t) { for (t.getIsReplay() && AO(t), SO(t); t.getAction();) {
        if (RO(t), wa(t.getEventType()) && t.getAction().element !== t.getTargetElement() || (this.dispatchDelegate(t.getEvent(), t.getAction().name), bO(t)))
            return;
        this.actionResolver.resolveParentAction(t.eventInfo);
    } }
};
function SO(e) { let t = e.getEvent(), n = e.getEvent().stopPropagation.bind(t), o = () => { t[nC] = !0, n(); }; sn(t, "stopPropagation", o), sn(t, "stopImmediatePropagation", o); }
function bO(e) { return !!e.getEvent()[nC]; }
function AO(e) { let t = e.getEvent(), n = e.getTargetElement(), o = t.preventDefault.bind(t); sn(t, "target", n), sn(t, "eventPhase", _f.REPLAY), sn(t, "preventDefault", () => { throw o(), new Error(_O + ""); }), sn(t, "composedPath", () => { throw new Error(wO + ""); }); }
function RO(e) { let t = e.getEvent(), n = e.getAction()?.element; n && sn(t, "currentTarget", n, { configurable: !0 }); }
function sn(e, t, n, { configurable: o = !1 } = {}) { Object.defineProperty(e, t, { value: n, configurable: o }); }
function oC(e, t) { e.ecrd(n => { t.dispatch(n); }, tC.I_AM_THE_JSACTION_FRAMEWORK); }
function OO(e) { return e?.q ?? []; }
function kO(e) { e && (UD(e.c, e.et, e.h), UD(e.c, e.etc, e.h, !0)); }
function UD(e, t, n, o) { for (let r = 0; r < t.length; r++)
    e.removeEventListener(t[r], n, o); }
var xO = !1, rC = (() => { class e {
    static MOUSE_SPECIAL_SUPPORT = xO;
    containerManager;
    eventHandlers = {};
    browserEventTypeToExtraEventTypes = {};
    dispatcher = null;
    queuedEventInfos = [];
    constructor(n) { this.containerManager = n; }
    handleEvent(n, o, r) { let i = DO(n, o, o.target, r, Date.now()); this.handleEventInfo(i); }
    handleEventInfo(n) { if (!this.dispatcher) {
        KD(n, !0), this.queuedEventInfos?.push(n);
        return;
    } this.dispatcher(n); }
    addEvent(n, o, r) { if (n in this.eventHandlers || !this.containerManager || !e.MOUSE_SPECIAL_SUPPORT && rO.indexOf(n) >= 0)
        return; let i = (a, c, l) => { this.handleEvent(a, c, l); }; this.eventHandlers[n] = i; let s = aO(o || n); if (s !== n) {
        let a = this.browserEventTypeToExtraEventTypes[s] || [];
        a.push(n), this.browserEventTypeToExtraEventTypes[s] = a;
    } this.containerManager.addEventListener(s, a => c => { i(n, c, a); }, r); }
    replayEarlyEvents(n = window._ejsa) { n && (this.replayEarlyEventInfos(n.q), kO(n), delete window._ejsa); }
    replayEarlyEventInfos(n) { for (let o = 0; o < n.length; o++) {
        let r = n[o], i = this.getEventTypesForBrowserEventType(r.eventType);
        for (let s = 0; s < i.length; s++) {
            let a = eC(r);
            Nf(a, i[s]), this.handleEventInfo(a);
        }
    } }
    getEventTypesForBrowserEventType(n) { let o = []; return this.eventHandlers[n] && o.push(n), this.browserEventTypeToExtraEventTypes[n] && o.push(...this.browserEventTypeToExtraEventTypes[n]), o; }
    handler(n) { return this.eventHandlers[n]; }
    cleanUp() { this.containerManager?.cleanUp(), this.containerManager = null, this.eventHandlers = {}, this.browserEventTypeToExtraEventTypes = {}, this.dispatcher = null, this.queuedEventInfos = []; }
    registerDispatcher(n, o) { this.ecrd(n, o); }
    ecrd(n, o) { if (this.dispatcher = n, this.queuedEventInfos?.length) {
        for (let r = 0; r < this.queuedEventInfos.length; r++)
            this.handleEventInfo(this.queuedEventInfos[r]);
        this.queuedEventInfos = null;
    } }
} return e; })();
function iC(e, t = window) { return OO(t._ejsas?.[e]); }
function wf(e, t = window) { t._ejsas && (t._ejsas[e] = void 0); }
import "rxjs";
import "@angular/core/primitives/signals";
import "@angular/core/primitives/di";
import "rxjs/operators";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var Pa = Symbol("InputSignalNode#UNSET"), NC = Fe(W({}, Va), { transformFn: void 0, applyValueToInputSignal(e, t) { Ha(e, t); } }), fP = Symbol();
function _C(e, t) { let n = Object.create(NC); n.value = e, n.transformFn = t?.transform; function o() { if (Vr(n), n.value === Pa) {
    let r = null;
    throw new w(-950, r);
} return n.value; } return o[gt] = n, o; }
var po = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })(po || {});
var sC = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => ms(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, PO = new S("");
PO.__NG_ELEMENT_ID__ = e => { let t = M(); if (t === null)
    throw new w(204, !1); if (t.type & 2)
    return t.value; if (e & 8)
    return null; throw new w(204, !1); };
function pP(e) { return new Rc; }
function aC(e, t) { return _C(e, t); }
function LO(e) { return _C(Pa, e); }
var hP = (aC.required = LO, aC);
function cC(e, t) { return pd(t); }
function FO(e, t) { return hd(t); }
var gP = (cC.required = FO, cC);
function mP(e, t) { return gd(t); }
function lC(e, t) { return pd(t); }
function jO(e, t) { return hd(t); }
var vP = (lC.required = jO, lC);
function yP(e, t) { return gd(t); }
function wC(e, t) { let n = Object.create(NC), o = new Rc; n.value = e; function r() { return Vr(n), uC(n.value), n.value; } return r[gt] = n, r.asReadonly = yp.bind(r), r.set = i => { n.equal(n.value, i) || (Ha(n, i), o.emit(i)); }, r.update = i => { uC(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function uC(e) { if (e === Pa)
    throw new w(952, !1); }
function dC(e, t) { return wC(e, t); }
function HO(e) { return wC(Pa, e); }
var EP = (dC.required = HO, dC), SC = !0, go = class {
}, IP = st("ContentChildren", (e, t = {}) => W({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: SC }, t), go), DP = st("ContentChild", (e, t = {}) => W({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), go), CP = st("ViewChildren", (e, t = {}) => W({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: SC }, t), go), TP = st("ViewChild", (e, t) => W({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), go);
function VO(e, t, n) { let o = new Un(n); return Promise.resolve(o); }
function fC(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var Aa = new S(""), BO = new S("");
function Fr(e) { return !e.moduleRef; }
function bC(e) { let t = Fr(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(H); return n.run(() => { Fr(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get(Mt), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), Fr(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(Aa);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(Aa);
    s.add(i), e.moduleRef.onDestroy(() => { Bo(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return $O(o, n, () => { let i = t.get(Nt), s = i.add(), a = t.get(bd); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(yf, xr); if (OE(c || xr), !t.get(BO, !0))
    return Fr(e) ? t.get(Le) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (Fr(e)) {
    let u = t.get(Le);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return AC?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => void i.remove(s)); }); }); }
var AC;
function pC() { AC = UO; }
function UO(e, t) { let n = e.injector.get(Le); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new w(-403, !1); t.push(e); }
function $O(e, t, n) { try {
    let o = n();
    return wd(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var RC = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = o?.scheduleInRootZone, i = () => wm(o?.ngZone, Fe(W({}, Ia({ eventCoalescing: o?.ngZoneEventCoalescing, runCoalescing: o?.ngZoneRunCoalescing })), { scheduleInRootZone: r })), s = o?.ignoreChangesOutsideZone, a = [Ea({ ngZoneFactory: i, ignoreChangesOutsideZone: s }), { provide: Xe, useExisting: Da }, Nc], c = ay(n.moduleType, this.injector, a); return pC(), bC({ moduleRef: c, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = Rd({}, o); return pC(), VO(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new w(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(Aa, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(Re(Ce)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), ho = null;
function GO(e) { if (La())
    throw new w(400, !1); Ad(), ho = typeof ngServerMode > "u" || !ngServerMode ? e : null; let t = e.get(RC); return kC(e), t; }
function qO(e, t, n = []) { let o = `Platform: ${t}`, r = new S(o); return (i = []) => { let s = La(); if (!s) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    s = e?.(a) ?? GO(OC(a, o));
} return typeof ngServerMode < "u" && ngServerMode ? s : WO(r); }; }
function OC(e = [], t) { return Ce.create({ name: t, providers: [{ provide: Zf, useValue: "platform" }, { provide: Aa, useValue: new Set([() => ho = null]) }, ...e] }); }
function WO(e) { let t = La(); if (!t)
    throw new w(-401, !1); return t; }
function La() { return typeof ngServerMode < "u" && ngServerMode ? null : ho?.get(RC) ?? null; }
function MP() { La()?.destroy(); }
function zO(e = []) { if (ho)
    return ho; let t = OC(e); return (typeof ngServerMode > "u" || !ngServerMode) && (ho = t), Ad(), kC(t), t; }
function NP(e) { return Ze([{ provide: pu, useValue: e, multi: !0 }]); }
function kC(e) { let t = e.get(pu, null); ni(e, () => { t?.forEach(n => n()); }); }
function _P(e) { return Ze([]); }
function wP() { return !1; }
function SP() { }
function bP(e) { let t = vd(e); if (!t)
    throw xC(e); return new Un(t); }
function AP(e) { let t = vd(e); if (!t)
    throw xC(e); return t; }
function xC(e) { return new Error(`No module with ID ${e} loaded`); }
var QO = (() => { class e {
    static __NG_ELEMENT_ID__ = ZO;
} return e; })();
function ZO(e) { return YO(M(), g(), (e & 16) === 16); }
function YO(e, t, n) { if (me(e) && !n) {
    let o = ue(e.index, t);
    return new bt(o, o);
}
else if (e.type & 175) {
    let o = t[Z];
    return new bt(o, t);
} return null; }
var Af = class extends QO {
}, hC = class extends Af {
}, Ra = class {
    constructor() { }
    supports(t) { return ir(t); }
    create(t) { return new Rf(t); }
}, KO = (e, t) => t, Rf = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) { this._trackByFn = t || KO; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < gC(o, r, i) ? n : o, a = gC(s, r, i), c = s.currentIndex;
        if (s === o)
            r--, o = o._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            r++;
        else {
            i || (i = []);
            let l = a - r, u = c - r;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, h = p + f;
                    u <= h && h < l && (i[f] = p + 1);
                }
                let d = s.previousIndex;
                i[d] = u - l;
            }
        }
        a !== c && t(s, a, c);
    } }
    forEachPreviousItem(t) { let n; for (n = this._previousItHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachMovedItem(t) { let n; for (n = this._movesHead; n !== null; n = n._nextMoved)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    forEachIdentityChange(t) { let n; for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n); }
    diff(t) { if (t == null && (t = []), !ir(t))
        throw new w(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, xv(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
    get isDirty() { return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null; }
    _reset() { if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
            t.previousIndex = t.currentIndex;
        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
            t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    } }
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new Of(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new Oa), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new Oa), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, Of = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) { this.item = t, this.trackById = n; }
}, kf = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, Oa = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new kf, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function gC(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var ka = class {
    constructor() { }
    supports(t) { return t instanceof Map || ta(t); }
    create() { return new xf; }
}, xf = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    _removalsTail = null;
    get isDirty() { return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null; }
    forEachItem(t) { let n; for (n = this._mapHead; n !== null; n = n._next)
        t(n); }
    forEachPreviousItem(t) { let n; for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachChangedItem(t) { let n; for (n = this._changesHead; n !== null; n = n._nextChanged)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    diff(t) { if (!t)
        t = new Map;
    else if (!(t instanceof Map || ta(t)))
        throw new w(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (o, r) => { if (n && n.key === r)
        this._maybeAddToChanges(n, o), this._appendAfter = n, n = n._next;
    else {
        let i = this._getOrCreateRecordForKey(r, o);
        n = this._insertBeforeOrAppend(n, i);
    } }), n) {
        n._prev && (n._prev._next = null), this._removalsHead = n;
        for (let o = n; o !== null; o = o._nextRemoved)
            o === this._mapHead && (this._mapHead = null), this._records.delete(o.key), o._nextRemoved = o._next, o.previousValue = o.currentValue, o.currentValue = null, o._prev = null, o._next = null;
    } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
    _insertBeforeOrAppend(t, n) { if (t) {
        let o = t._prev;
        return n._next = t, n._prev = o, t._prev = n, o && (o._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
    _getOrCreateRecordForKey(t, n) { if (this._records.has(t)) {
        let r = this._records.get(t);
        this._maybeAddToChanges(r, n);
        let i = r._prev, s = r._next;
        return i && (i._next = s), s && (s._prev = i), r._next = null, r._prev = null, r;
    } let o = new Pf(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
    _reset() { if (this.isDirty) {
        let t;
        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
            t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
            t.previousValue = t.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    } }
    _maybeAddToChanges(t, n) { Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)); }
    _addToAdditions(t) { this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
    _addToChanges(t) { this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
    _forEach(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(o => n(t[o], o)); }
}, Pf = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) { this.key = t; }
};
function mC() { return new PC([new Ra]); }
var PC = (() => { class e {
    factories;
    static \u0275prov = B({ token: e, providedIn: "root", factory: mC });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = D(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || mC()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new w(901, !1); }
} return e; })();
function vC() { return new LC([new ka]); }
var LC = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: vC });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = D(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || vC()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new w(901, !1); }
} return e; })(), JO = [new ka], XO = [new Ra], RP = new PC(XO), OP = new LC(JO), kP = qO(null, "core", []), xP = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(Re(Le)); };
    static \u0275mod = Ed({ type: e });
    static \u0275inj = Eo({});
} return e; })();
function PP(e) { let { rootComponent: t, appProviders: n, platformProviders: o, platformRef: r } = e; if (x(8), typeof ngServerMode < "u" && ngServerMode && !r)
    throw new w(-401, !1); try {
    let i = r?.injector ?? zO(o), s = [Ea({}), { provide: Xe, useExisting: Da }, Nc, ...n || []], a = new ar({ providers: s, parent: i, debugName: "", runEnvironmentInitializers: !1 });
    return bC({ r3Injector: a.injector, platformInjector: i, rootComponent: t });
}
catch (i) {
    return Promise.reject(i);
}
finally {
    x(9);
} }
var Sa = new WeakSet, yC = "", ba = [];
function EC(e) { return e.get(Ns, Eu); }
function ek() { let e = [{ provide: Ns, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = D(ct);
            t = !!window._ejsas?.[n];
        } return t && Y("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: vt, useValue: () => { let t = D(Le), { injector: n } = t; if (!Sa.has(t)) {
        let o = D(yr);
        if (EC(n)) {
            Sg();
            let r = n.get(ct), i = _g(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (Ng(s, a, c), Cu(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: Rr, useFactory: () => { let t = D(Le), { injector: n } = t; return () => { if (!EC(n) || Sa.has(t))
        return; Sa.add(t); let o = n.get(ct); t.onDestroy(() => { Sa.delete(t), typeof ngServerMode < "u" && !ngServerMode && wf(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get(Mu); tk(r, n); let i = n.get(yr); i.get(yC)?.forEach(Tu), i.delete(yC); let s = r.instance; Er(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var tk = (e, t) => { let n = t.get(ct), o = window._ejsas[n], r = e.instance = new rC(new Na(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = iC(n); r.replayEarlyEventInfos(i), wf(n); let s = new _a(a => { ok(t, a, a.currentTarget); }); oC(r, s); };
function nk(e, t, n) { let o = new Map, r = t[Pt], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!qD(l))
        continue;
    wa(l) ? n.capture.add(l) : n.regular.add(l);
    let u = k(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function ok(e, t, n) { let o = (n && n.getAttribute(eo)) ?? ""; /d\d+/.test(o) ? rk(o, e, t, n) : t.eventPhase === _f.REPLAY && Nu(t, n); }
function rk(e, t, n, o) { ba.push({ event: n, currentTarget: o }), pt(t, e, ik); }
function ik(e) { let t = [...ba], n = new Set(e); ba = []; for (let { event: o, currentTarget: r } of t) {
    let i = r.getAttribute(eo);
    n.has(i) ? Nu(o, r) : ba.push({ event: o, currentTarget: r });
} }
var Lf = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, sk = 0;
function FC(e) { return e.ssrId || (e.ssrId = `t${sk++}`), e.ssrId; }
function jC(e, t, n) { let o = []; return Fn(e, t, n, o), o.length; }
function ak(e) { let t = []; return zs(e, t), t.length; }
function HC(e, t, n) { let o = e[V]; return o && !o.hasAttribute(Yn) ? xa(o, e, null, t) : null; }
function VC(e, t, n) { let o = So(e[V]), r = HC(o, t); if (r === null)
    return; let i = k(o[V]), s = e[z], a = xa(i, s, null, t), c = o[T], l = `${r}|${a}`; c.setAttribute(i, Sn, l); }
function LP(e, t) { let n = e.injector, o = vv(n), r = Er(n), i = new Lf, s = new Map, a = e._views, c = n.get(Ns, Eu), l = { regular: new Set, capture: new Set }, u = new Map, d = e.injector.get(ct); for (let h of a) {
    let m = _u(h);
    if (m !== null) {
        let y = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, appId: d, deferBlocks: u };
        J(m) ? VC(m, y) : HC(m, y), fk(s, t);
    }
} let f = i.getAll(), p = n.get(en); if (p.set(_s, f), u.size > 0) {
    let h = {};
    for (let [m, y] of u.entries())
        h[m] = y;
    p.set(ws, h);
} return l; }
function ck(e, t, n, o, r) { let i = [], s = ""; for (let a = j; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (Ve(c) && (c = c[E], J(c))) {
        u = ak(c) + 1, VC(c, r);
        let p = So(c[V]);
        d = { [Ds]: p[v].ssrId, [ot]: u };
    }
    if (!d) {
        let p = c[v];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = FC(p), u = jC(p, c, p.firstChild)), d = { [Ds]: l, [ot]: u };
        let h = !1;
        if (_y(n[v], t)) {
            let m = he(n, t), y = ie(n[v], t);
            if (r.isIncrementalHydrationEnabled && y.hydrateTriggers !== null) {
                let I = `d${r.deferBlocks.size}`;
                y.hydrateTriggers.has(7) && (h = !0);
                let A = [];
                zs(e, A);
                let le = { [ot]: A.length, [vr]: m[ft] }, Ae = lk(y.hydrateTriggers);
                Ae.length > 0 && (le[Ms] = Ae), o !== null && (le[mu] = o), r.deferBlocks.set(I, le);
                let Te = k(e);
                Te !== void 0 ? Te.nodeType === Node.COMMENT_NODE && IC(Te, I) : IC(Te, I), h || hk(y, A, I, r), o = I, d[Ts] = I;
            }
            d[vr] = m[ft];
        }
        h || Object.assign(d, BC(e[a], o, r));
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[gr] ??= 1, p[gr]++;
    }
    else
        s = f, i.push(d);
} return i; }
function lk(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : n.push({ trigger: o, delay: r.delay })); return n; }
function jr(e, t, n, o) { let r = t.index - E; e[mr] ??= {}, e[mr][r] ??= fv(t, n, o); }
function Sf(e, t) { let n = typeof t == "number" ? t : t.index - E; e[Xn] ??= [], e[Xn].includes(n) || e[Xn].push(n); }
function BC(e, t = null, n) { let o = {}, r = e[v], i = yv(r, n), s = n.shouldReplayEvents ? nk(r, e, n.eventTypesToReplay) : null; for (let a = E; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - E, u = Ev(e, a, n);
    if (u) {
        o[Cs] ??= {}, o[Cs][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            Sf(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + E];
            jr(o, f, e, i);
        }
        continue;
    }
    if (gs(c) && !to(c)) {
        if (J(e[a]) && c.tView && (o[Is] ??= {}, o[Is][l] = FC(c.tView)), co(c, e) && pk(c)) {
            Sf(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !tc(d) && !Kn(d) && (co(d, e) ? Sf(o, d) : jr(o, d, e, i));
                    else
                        throw ov(k(e[a]));
        }
        if (uk(o, c, e, i), J(e[a])) {
            let d = e[a][V];
            if (Array.isArray(d)) {
                let f = k(d);
                f.hasAttribute(Yn) || xa(f, d, t, n);
            }
            o[Jn] ??= {}, o[Jn][l] = ck(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !qh(c)) {
            let d = k(e[a][V]);
            d.hasAttribute(Yn) || xa(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[hr] ??= {}, o[hr][l] = jC(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !Kn(d) && jr(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = k(e[a]);
            Su(n, d);
        }
        if (s && c.type & 2) {
            let d = k(e[a]);
            s.has(d) && Du(d, s.get(d), t);
        }
    }
} return o; }
function uk(e, t, n, o) { tc(t) || (t.projectionNext && t.projectionNext !== t.next && !Kn(t.projectionNext) && jr(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && co(t.parent, n) && !co(t, n) && jr(e, t, n, o)); }
function dk(e) { let t = e[F]; return t?.constructor ? q(t.constructor)?.encapsulation === rt.ShadowDom : !1; }
function xa(e, t, n, o) { let r = t[T]; if (Kf(t) && !Ks() || dk(t))
    return r.setAttribute(e, Yn, ""), null; {
    let i = BC(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, Sn, s.toString()), s;
} }
function IC(e, t) { e.textContent = `ngh=${t}`; }
function fk(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function pk(e) { let t = e; for (; t != null;) {
    if (me(t))
        return !0;
    t = t.parent;
} return !1; }
function hk(e, t, n, o) { let r = Vg(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        Du(s, r, n);
} }
var DC = !1, CC = !1, TC = !1;
function gk() { DC || (DC = !0, xg(), NE(), EI(), _E(), Dy(), Wv(), Nv(), Um()); }
function mk() { CC || (CC = !0, xE(), mv(), Dv()); }
function vk() { TC || (TC = !0, $g()); }
function yk(e) { return e.whenStable(); }
var FP = "ngcm";
function jP() { let e = [{ provide: tn, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!D(en, { optional: !0 })?.get(_s, null)), t && Y("NgHydration"), t; } }, { provide: vt, useValue: () => { rd(!1), !(typeof ngServerMode < "u" && ngServerMode) && D(tn) && (qg(at()), gk()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: vu, useFactory: () => D(tn) }, { provide: Rr, useFactory: () => { if (D(tn)) {
        let t = D(Le);
        return () => { yk(t).then(() => { t.destroyed || id(t); }); };
    } return () => { }; }, multi: !0 }), Ze(e); }
function HP() { return [{ provide: yu, useFactory: () => D(tn) }, { provide: vt, useValue: () => { D(tn) && (mk(), rd(!0), Y("NgI18nHydration")); }, multi: !0 }]; }
function VP() { let e = [ek(), { provide: Iu, useValue: !0 }, { provide: lt, useClass: bg }, { provide: vt, useValue: () => { vk(), Y("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Rr, useFactory: () => { let t = D(Ce), n = at(); return () => { let o = Gg(t), r = pv(n, n.body); $y(t, o, r), Bg(n, t); }; }, multi: !0 }), e; }
function BP(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function UP(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var Ek = "\u{1F170}\uFE0F", Fa = !1;
function $P(e) { if (!Fa)
    return; let { startLabel: t } = UC(e); performance.mark(t); }
function GP(e) { if (!Fa)
    return; let { startLabel: t, labelName: n, endLabel: o } = UC(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function UC(e) { let t = `${Ek}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var MC = !1;
function qP() { if (!MC && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    MC = !0, console.warn("Performance API is not supported on this platform");
    return;
} Fa = !0; }
function WP() { Fa = !1; }
function zP(e) { let t = e; for (; t;) {
    let n = lg(t);
    if (n !== null)
        for (let o = E; o < n.length; o++) {
            let r = n[o];
            if (!K(r) && !J(r) || r[V] !== t)
                continue;
            let i = n[v], s = Dt(i, o);
            if (me(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = a.debugInfo?.className || a.type.name;
                if (c)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function QP(e) { }
function ZP(e) { return ee({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(pe, `ng:///${e.type.name}/\u0275fac.js`, e); }
function YP(e) { Nd(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function KP(e) { Oy(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); Nd(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function JP(e) { return ee({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(pe, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function XP(e) { return ee({ usage: 1, kind: Ik(e.target), type: e.type }).compileFactoryDeclaration(pe, `ng:///${e.type.name}/\u0275fac.js`, e); }
function Ik(e) { switch (e) {
    case po.Directive: return "directive";
    case po.Component: return "component";
    case po.Injectable: return "injectable";
    case po.Pipe: return "pipe";
    case po.NgModule: return "NgModule";
} }
function eL(e) { return ee({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(pe, `ng:///${e.type.name}/\u0275prov.js`, e); }
function tL(e) { return ee({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(pe, `ng:///${e.type.name}/\u0275inj.js`, e); }
function nL(e) { return ee({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(pe, `ng:///${e.type.name}/\u0275mod.js`, e); }
function oL(e) { return ee({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(pe, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var bf = Symbol("NOT_SET"), $C = new Set, Dk = Fe(W({}, Va), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: bf, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== bf && !Ur(this))
        return this.signal; try {
        for (let r of this.cleanup ?? $C)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = vo(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        Br(this, n);
    } return (this.value === bf || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), Ff = class extends er {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i.get(gn), s), this.scheduler = r; for (let a of $u) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(Dk);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (Vr(l), l.value), l.signal[gt] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? $C)
                    n();
            }
            finally {
                yo(t);
            } }
};
function rL(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return Fs; let n = t?.injector ?? D(Ce), o = n.get(Xe), r = n.get(Ls), i = n.get(ro, null, { optional: !0 }); r.impl ??= n.get(Gu); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(hi, null, { optional: !0 }), c = new Ff(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n, i?.snapshot(null)); return r.impl.register(c), c; }
function iL(e, t) { let n = q(e), o = t.elementInjector || ti(); return new At(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function sL(e) { let t = q(e); if (!t)
    return null; let n = new At(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function aL(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var cL = new S("", { providedIn: "platform", factory: () => null }), lL = new S("", { providedIn: "platform", factory: () => null }), uL = new S("", { providedIn: "platform", factory: () => null });
export { CM as ANIMATION_MODULE_TYPE, Rr as APP_BOOTSTRAP_LISTENER, ct as APP_ID, Sd as APP_INITIALIZER, bd as ApplicationInitStatus, xP as ApplicationModule, Le as ApplicationRef, og as Attribute, FD as COMPILER_OPTIONS, TM as CSP_NONCE, QM as CUSTOM_ELEMENTS_SCHEMA, ys as ChangeDetectionStrategy, QO as ChangeDetectorRef, UR as Compiler, iu as CompilerFactory, PR as Component, ea as ComponentFactory, wr as ComponentFactoryResolver, Sv as ComponentRef, DP as ContentChild, IP as ContentChildren, QR as DEFAULT_CURRENCY_CODE, rT as DOCUMENT, Xt as DebugElement, su as DebugEventListener, dr as DebugNode, Rf as DefaultIterableDiffer, gn as DestroyRef, LD as Directive, vt as ENVIRONMENT_INITIALIZER, pr as ElementRef, hC as EmbeddedViewRef, yt as EnvironmentInjector, pi as ErrorHandler, tt as EventEmitter, PO as HOST_TAG_NAME, Lh as Host, sC as HostAttributeToken, HR as HostBinding, VR as HostListener, XC as INJECTOR, Oh as Inject, zT as Injectable, S as InjectionToken, Ce as Injector, FR as Input, PC as IterableDiffers, LC as KeyValueDiffers, yf as LOCALE_ID, hE as MAX_ANIMATION_TIMEOUT, HD as MissingTranslationStrategy, hs as ModuleWithComponentFactories, ZM as NO_ERRORS_SCHEMA, BR as NgModule, iy as NgModuleFactory, Vn as NgModuleRef, $l as NgProbeToken, H as NgZone, kh as Optional, jR as Output, Rc as OutputEmitterRef, DM as PACKAGE_ROOT_URL, IM as PLATFORM_ID, pu as PLATFORM_INITIALIZER, bc as PendingTasks, LR as Pipe, RC as PlatformRef, go as Query, $i as QueryList, cL as REQUEST, uL as REQUEST_CONTEXT, lL as RESPONSE_INIT, Lw as Renderer2, rr as RendererFactory2, Zi as RendererStyleFlags2, bv as Sanitizer, nn as SecurityContext, xh as Self, ji as SimpleChange, Ph as SkipSelf, ZR as TRANSLATIONS, YR as TRANSLATIONS_FORMAT, nr as TemplateRef, Eb as Testability, Py as TestabilityRegistry, en as TransferState, Fh as Type, WC as VERSION, qC as Version, TP as ViewChild, CP as ViewChildren, oa as ViewContainerRef, rt as ViewEncapsulation, Af as ViewRef, Sm as afterEveryRender, qu as afterNextRender, rL as afterRenderEffect, KR as asNativeElements, nT as assertInInjectionContext, aT as assertNotInReactiveContext, WO as assertPlatform, BP as booleanAttribute, uT as computed, vP as contentChild, yP as contentChildren, iL as createComponent, yd as createEnvironmentInjector, sy as createNgModule, RS as createNgModuleRef, GO as createPlatform, qO as createPlatformFactory, QC as defineInjectable, MP as destroyPlatform, dT as effect, SP as enableProdMode, gb as enableProfiling, Ua as forwardRef, zn as getDebugNode, bP as getModuleFactory, AP as getNgModuleById, La as getPlatform, tT as importProvidersFrom, D as inject, hP as input, jv as inputBinding, wP as isDevMode, vp as isSignal, To as isStandalone, fT as linkedSignal, Ze as makeEnvironmentProviders, NM as makeStateKey, aL as mergeApplicationConfig, EP as model, UP as numberAttribute, pP as output, Hv as outputBinding, kP as platformCore, Ib as provideAppInitializer, iT as provideBrowserGlobalErrorListeners, _P as provideCheckNoChangesConfig, eT as provideEnvironmentInitializer, RN as provideNgReflectAttributes, NP as providePlatformInitializer, GR as provideZoneChangeDetection, WR as provideZonelessChangeDetection, sL as reflectComponentType, G as resolveForwardRef, pT as resource, ni as runInInjectionContext, Ly as setTestabilityGetter, _c as signal, oS as twoWayBinding, lT as untracked, gP as viewChild, mP as viewChildren, pE as \u0275ANIMATIONS_DISABLED, mg as \u0275AcxChangeDetectionStrategy, vg as \u0275AcxViewEncapsulation, Ls as \u0275AfterRenderManager, FP as \u0275CLIENT_RENDER_MODE_FLAG, j as \u0275CONTAINER_HEADER_OFFSET, Xe as \u0275ChangeDetectionScheduler, Da as \u0275ChangeDetectionSchedulerImpl, ea as \u0275ComponentFactory, hb as \u0275Console, xr as \u0275DEFAULT_LOCALE_ID, by as \u0275DEFER_BLOCK_CONFIG, lb as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, lt as \u0275DEHYDRATED_BLOCK_REGISTRY, Td as \u0275DeferBlockBehavior, U as \u0275DeferBlockState, BO as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, Ac as \u0275EffectScheduler, gg as \u0275Framework, Lg as \u0275HydrationStatus, MM as \u0275IMAGE_CONFIG, yg as \u0275IMAGE_CONFIG_DEFAULTS, Zf as \u0275INJECTOR_SCOPE, fP as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, Mt as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, wM as \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, tn as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, Iu as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, yr as \u0275JSACTION_BLOCK_ELEMENT_MAP, Mu as \u0275JSACTION_EVENT_CONTRACT, Gi as \u0275LContext, Gn as \u0275LocaleDataIndex, cn as \u0275NG_COMP_DEF, zr as \u0275NG_DIR_DEF, kt as \u0275NG_ELEMENT_ID, $a as \u0275NG_INJ_DEF, Ga as \u0275NG_MOD_DEF, Qr as \u0275NG_PIPE_DEF, Wr as \u0275NG_PROV_DEF, Oi as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, P as \u0275NO_CHANGE, Un as \u0275NgModuleFactory, Ln as \u0275NoopNgZone, Ek as \u0275PERFORMANCE_MARK_PREFIX, jD as \u0275PROVIDED_NG_ZONE, Nt as \u0275PendingTasksInternal, Ya as \u0275R3Injector, Fi as \u0275ReflectionCapabilities, At as \u0275Render3ComponentFactory, is as \u0275Render3ComponentRef, Bn as \u0275Render3NgModuleRef, hT as \u0275ResourceImpl, w as \u0275RuntimeError, gt as \u0275SIGNAL, Og as \u0275SSR_CONTENT_INTEGRITY_MARKER, ky as \u0275TESTABILITY, xy as \u0275TESTABILITY_GETTER, Sy as \u0275TimerScheduler, Ps as \u0275TracingAction, ro as \u0275TracingService, bt as \u0275ViewRef, $r as \u0275XSS_SECURITY_URL, mn as \u0275ZONELESS_ENABLED, nm as \u0275_sanitizeHtml, Rs as \u0275_sanitizeUrl, zt as \u0275allLeavingAnimations, oo as \u0275allowSanitizationBypassAndThrow, LP as \u0275annotateForHydration, QP as \u0275assertType, tN as \u0275bypassSanitizationTrustHtml, iN as \u0275bypassSanitizationTrustResourceUrl, oN as \u0275bypassSanitizationTrustScript, nN as \u0275bypassSanitizationTrustStyle, rN as \u0275bypassSanitizationTrustUrl, ny as \u0275clearResolutionOfComponentResourcesQueue, _D as \u0275compileComponent, vf as \u0275compileDirective, MD as \u0275compileNgModule, ND as \u0275compileNgModuleDefs, VO as \u0275compileNgModuleFactory, PD as \u0275compilePipe, Wa as \u0275convertToBitFlags, oT as \u0275createInjector, zO as \u0275createOrReusePlatformInjector, RP as \u0275defaultIterableDiffers, OP as \u0275defaultKeyValueDiffers, jn as \u0275depsTracker, Pv as \u0275devModeEqual, WP as \u0275disableProfiling, qP as \u0275enableProfiling, gT as \u0275encapsulateResourceError, Wd as \u0275findLocaleData, CD as \u0275flushModuleScopingQueueAsMuchAsPossible, Bf as \u0275formatRuntimeError, CR as \u0275generateStandaloneInDeclarationsError, pb as \u0275getAsyncClassMetadataFn, zP as \u0275getClosestComponentName, q as \u0275getComponentDef, zn as \u0275getDebugNode, Pi as \u0275getDeferBlocks, dM as \u0275getDirectives, at as \u0275getDocument, pM as \u0275getHostElement, ZC as \u0275getInjectableDef, ye as \u0275getLContext, tA as \u0275getLocaleCurrencyCode, SE as \u0275getLocalePluralCase, cT as \u0275getOutputDestroyRef, Yg as \u0275getSanitizationBypassType, mb as \u0275getTransferState, KM as \u0275getUnknownElementStrictMode, XM as \u0275getUnknownPropertyStrictMode, Ee as \u0275global, Vv as \u0275inferTagNameFromDefinition, ZO as \u0275injectChangeDetectorRef, PP as \u0275internalCreateApplication, Ea as \u0275internalProvideZoneChangeDetection, jy as \u0275isBoundToModule, NS as \u0275isComponentDefPendingResolution, JC as \u0275isEnvironmentProviders, YC as \u0275isInjectable, Bt as \u0275isNgModule, wd as \u0275isPromise, Fy as \u0275isSubscribable, V_ as \u0275isViewDirty, B_ as \u0275markForRefresh, qe as \u0275noSideEffects, gf as \u0275patchComponentDefWithScope, Y as \u0275performanceMarkFeature, vb as \u0275publishExternalGlobalUtil, FM as \u0275readHydrationInfo, eA as \u0275registerLocaleData, nt as \u0275renderDeferBlockState, NR as \u0275resetCompiledComponents, HM as \u0275resetIncrementalHydrationEnabledWarnedForTests, IR as \u0275resetJitOptions, ey as \u0275resolveComponentResources, _S as \u0275restoreComponentResolutionQueue, AS as \u0275setAllowDuplicateNgModuleIdsForTest, mT as \u0275setAlternateWeakRefImpl, yD as \u0275setClassDebugInfo, Nd as \u0275setClassMetadata, Oy as \u0275setClassMetadataAsync, GC as \u0275setCurrentInjector, yM as \u0275setDocument, KC as \u0275setInjectorProfilerContext, OE as \u0275setLocaleId, YM as \u0275setUnknownElementStrictMode, JM as \u0275setUnknownPropertyStrictMode, $P as \u0275startMeasuring, GP as \u0275stopMeasuring, bo as \u0275store, an as \u0275stringify, mf as \u0275transitiveScopesFor, aa as \u0275triggerResourceLoading, zC as \u0275truncateMiddle, nA as \u0275unregisterLocaleData, ut as \u0275unwrapSafeValue, sT as \u0275unwrapWritableSignal, jP as \u0275withDomHydration, ek as \u0275withEventReplay, HP as \u0275withI18nSupport, VP as \u0275withIncrementalHydration, gy as \u0275\u0275CopyDefinitionFeature, WI as \u0275\u0275ExternalStylesFeature, po as \u0275\u0275FactoryTarget, my as \u0275\u0275HostDirectivesFeature, Id as \u0275\u0275InheritDefinitionFeature, Hh as \u0275\u0275NgOnChangesFeature, qI as \u0275\u0275ProvidersFeature, Em as \u0275\u0275advance, Uo as \u0275\u0275animateEnter, $o as \u0275\u0275animateEnterListener, Go as \u0275\u0275animateLeave, ls as \u0275\u0275animateLeaveListener, kd as \u0275\u0275ariaProperty, kI as \u0275\u0275attachSourceLocations, xd as \u0275\u0275attribute, lI as \u0275\u0275classMap, tf as \u0275\u0275classProp, yE as \u0275\u0275componentInstance, IE as \u0275\u0275conditional, da as \u0275\u0275conditionalBranchCreate, EE as \u0275\u0275conditionalCreate, YE as \u0275\u0275contentQuery, eI as \u0275\u0275contentQuerySignal, hf as \u0275\u0275declareLet, Gy as \u0275\u0275defer, Ry as \u0275\u0275deferEnableTimerScheduling, Qy as \u0275\u0275deferHydrateNever, sE as \u0275\u0275deferHydrateOnHover, Ky as \u0275\u0275deferHydrateOnIdle, eE as \u0275\u0275deferHydrateOnImmediate, lE as \u0275\u0275deferHydrateOnInteraction, oE as \u0275\u0275deferHydrateOnTimer, fE as \u0275\u0275deferHydrateOnViewport, zy as \u0275\u0275deferHydrateWhen, rE as \u0275\u0275deferOnHover, Zy as \u0275\u0275deferOnIdle, Jy as \u0275\u0275deferOnImmediate, aE as \u0275\u0275deferOnInteraction, tE as \u0275\u0275deferOnTimer, uE as \u0275\u0275deferOnViewport, iE as \u0275\u0275deferPrefetchOnHover, Yy as \u0275\u0275deferPrefetchOnIdle, Xy as \u0275\u0275deferPrefetchOnImmediate, cE as \u0275\u0275deferPrefetchOnInteraction, nE as \u0275\u0275deferPrefetchOnTimer, dE as \u0275\u0275deferPrefetchOnViewport, Wy as \u0275\u0275deferPrefetchWhen, qy as \u0275\u0275deferWhen, cy as \u0275\u0275defineComponent, uy as \u0275\u0275defineDirective, B as \u0275\u0275defineInjectable, Eo as \u0275\u0275defineInjector, Ed as \u0275\u0275defineNgModule, dy as \u0275\u0275definePipe, lo as \u0275\u0275directiveInject, ac as \u0275\u0275disableBindings, jd as \u0275\u0275domElement, Ud as \u0275\u0275domElementContainer, Bd as \u0275\u0275domElementContainerEnd, va as \u0275\u0275domElementContainerStart, ga as \u0275\u0275domElementEnd, ha as \u0275\u0275domElementStart, Jd as \u0275\u0275domListener, Gd as \u0275\u0275domProperty, Cd as \u0275\u0275domTemplate, Fd as \u0275\u0275element, Vd as \u0275\u0275elementContainer, kr as \u0275\u0275elementContainerEnd, ma as \u0275\u0275elementContainerStart, pa as \u0275\u0275elementEnd, fa as \u0275\u0275elementStart, sc as \u0275\u0275enableBindings, vD as \u0275\u0275getComponentDepsFactory, wE as \u0275\u0275getCurrentView, tg as \u0275\u0275getInheritedFactory, ED as \u0275\u0275getReplaceMetadataURL, $E as \u0275\u0275i18n, qE as \u0275\u0275i18nApply, GE as \u0275\u0275i18nAttributes, Qd as \u0275\u0275i18nEnd, Zd as \u0275\u0275i18nExp, WE as \u0275\u0275i18nPostprocess, zd as \u0275\u0275i18nStart, Re as \u0275\u0275inject, ms as \u0275\u0275injectAttribute, xI as \u0275\u0275interpolate, PI as \u0275\u0275interpolate1, LI as \u0275\u0275interpolate2, FI as \u0275\u0275interpolate3, jI as \u0275\u0275interpolate4, HI as \u0275\u0275interpolate5, VI as \u0275\u0275interpolate6, BI as \u0275\u0275interpolate7, UI as \u0275\u0275interpolate8, $I as \u0275\u0275interpolateV, Av as \u0275\u0275invalidFactory, Zr as \u0275\u0275invalidFactoryDep, Yd as \u0275\u0275listener, XE as \u0275\u0275loadQuery, Tc as \u0275\u0275namespaceHTML, Cc as \u0275\u0275namespaceMathML, Dc as \u0275\u0275namespaceSVG, zE as \u0275\u0275nextContext, YP as \u0275\u0275ngDeclareClassMetadata, KP as \u0275\u0275ngDeclareClassMetadataAsync, JP as \u0275\u0275ngDeclareComponent, ZP as \u0275\u0275ngDeclareDirective, XP as \u0275\u0275ngDeclareFactory, eL as \u0275\u0275ngDeclareInjectable, tL as \u0275\u0275ngDeclareInjector, nL as \u0275\u0275ngDeclareNgModule, oL as \u0275\u0275ngDeclarePipe, uD as \u0275\u0275pipe, dD as \u0275\u0275pipeBind1, fD as \u0275\u0275pipeBind2, pD as \u0275\u0275pipeBind3, hD as \u0275\u0275pipeBind4, gD as \u0275\u0275pipeBindV, ZE as \u0275\u0275projection, QE as \u0275\u0275projectionDef, Ld as \u0275\u0275property, ZI as \u0275\u0275pureFunction0, YI as \u0275\u0275pureFunction1, KI as \u0275\u0275pureFunction2, JI as \u0275\u0275pureFunction3, XI as \u0275\u0275pureFunction4, eD as \u0275\u0275pureFunction5, tD as \u0275\u0275pureFunction6, nD as \u0275\u0275pureFunction7, oD as \u0275\u0275pureFunction8, rD as \u0275\u0275pureFunctionV, nI as \u0275\u0275queryAdvance, JE as \u0275\u0275queryRefresh, OI as \u0275\u0275readContextLet, oI as \u0275\u0275reference, md as \u0275\u0275registerNgModuleType, ME as \u0275\u0275repeater, TE as \u0275\u0275repeaterCreate, CE as \u0275\u0275repeaterTrackByIdentity, DE as \u0275\u0275repeaterTrackByIndex, ID as \u0275\u0275replaceMetadata, uc as \u0275\u0275resetView, Pu as \u0275\u0275resolveBody, gm as \u0275\u0275resolveDocument, hm as \u0275\u0275resolveWindow, lc as \u0275\u0275restoreView, am as \u0275\u0275sanitizeHtml, xu as \u0275\u0275sanitizeResourceUrl, lm as \u0275\u0275sanitizeScript, cm as \u0275\u0275sanitizeStyle, ku as \u0275\u0275sanitizeUrl, fm as \u0275\u0275sanitizeUrlOrResourceUrl, zI as \u0275\u0275setComponentScope, QI as \u0275\u0275setNgModuleScope, RI as \u0275\u0275storeLet, cI as \u0275\u0275styleMap, ef as \u0275\u0275styleProp, Kd as \u0275\u0275syntheticHostListener, qd as \u0275\u0275syntheticHostProperty, Dd as \u0275\u0275template, mD as \u0275\u0275templateRefExtractor, vI as \u0275\u0275text, nf as \u0275\u0275textInterpolate, ya as \u0275\u0275textInterpolate1, of as \u0275\u0275textInterpolate2, rf as \u0275\u0275textInterpolate3, sf as \u0275\u0275textInterpolate4, af as \u0275\u0275textInterpolate5, cf as \u0275\u0275textInterpolate6, lf as \u0275\u0275textInterpolate7, uf as \u0275\u0275textInterpolate8, df as \u0275\u0275textInterpolateV, um as \u0275\u0275trustConstantHtml, dm as \u0275\u0275trustConstantResourceUrl, bI as \u0275\u0275twoWayBindingSet, pf as \u0275\u0275twoWayListener, ff as \u0275\u0275twoWayProperty, pm as \u0275\u0275validateAttribute, KE as \u0275\u0275viewQuery, tI as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/attribute.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/primitives/event-dispatch.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v20.3.17
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)

@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/core.mjs:
@angular/core/fesm2022/core.mjs:
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
