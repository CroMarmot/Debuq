import "@nf-internal/chunk-JKOY2XUY";
import * as u from "@angular/core";
import { InjectionToken as Wa, EventEmitter as Se } from "@angular/core";
import { registerables as Ha, Chart as Pe, defaults as Ga } from "chart.js";
var Me = typeof global == "object" && global && global.Object === Object && global, z = Me;
var Ee = typeof self == "object" && self && self.Object === Object && self, Be = z || Ee || Function("return this")(), x = Be;
var Le = x.Symbol, _ = Le;
var ft = Object.prototype, Re = ft.hasOwnProperty, Fe = ft.toString, E = _ ? _.toStringTag : void 0;
function Ne(t) { var e = Re.call(t, E), r = t[E]; try {
    t[E] = void 0;
    var o = !0;
}
catch { } var a = Fe.call(t); return o && (e ? t[E] = r : delete t[E]), a; }
var st = Ne;
var ze = Object.prototype, We = ze.toString;
function He(t) { return We.call(t); }
var it = He;
var Ge = "[object Null]", Ue = "[object Undefined]", nt = _ ? _.toStringTag : void 0;
function qe(t) { return t == null ? t === void 0 ? Ue : Ge : nt && nt in Object(t) ? st(t) : it(t); }
var g = qe;
function ke(t) { return t != null && typeof t == "object"; }
var c = ke;
var Ke = Array.isArray, B = Ke;
function Ve(t) { var e = typeof t; return t != null && (e == "object" || e == "function"); }
var l = Ve;
function $e(t) { return t; }
var W = $e;
var Je = "[object AsyncFunction]", Xe = "[object Function]", Ze = "[object GeneratorFunction]", Ye = "[object Proxy]";
function Qe(t) { if (!l(t))
    return !1; var e = g(t); return e == Xe || e == Ze || e == Je || e == Ye; }
var j = Qe;
var tr = x["__core-js_shared__"], H = tr;
var pt = (function () { var t = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || ""); return t ? "Symbol(src)_1." + t : ""; })();
function er(t) { return !!pt && pt in t; }
var ut = er;
var rr = Function.prototype, or = rr.toString;
function ar(t) { if (t != null) {
    try {
        return or.call(t);
    }
    catch { }
    try {
        return t + "";
    }
    catch { }
} return ""; }
var lt = ar;
var fr = /[\\^$.*+?()[\]{}|]/g, sr = /^\[object .+?Constructor\]$/, ir = Function.prototype, nr = Object.prototype, pr = ir.toString, ur = nr.hasOwnProperty, lr = RegExp("^" + pr.call(ur).replace(fr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function mr(t) { if (!l(t) || ut(t))
    return !1; var e = j(t) ? lr : sr; return e.test(lt(t)); }
var mt = mr;
function dr(t, e) { return t?.[e]; }
var dt = dr;
function xr(t, e) { var r = dt(t, e); return mt(r) ? r : void 0; }
var C = xr;
var xt = Object.create, cr = (function () { function t() { } return function (e) { if (!l(e))
    return {}; if (xt)
    return xt(e); t.prototype = e; var r = new t; return t.prototype = void 0, r; }; })(), ct = cr;
function hr(t, e, r) { switch (r.length) {
    case 0: return t.call(e);
    case 1: return t.call(e, r[0]);
    case 2: return t.call(e, r[0], r[1]);
    case 3: return t.call(e, r[0], r[1], r[2]);
} return t.apply(e, r); }
var ht = hr;
function gr(t, e) { var r = -1, o = t.length; for (e || (e = Array(o)); ++r < o;)
    e[r] = t[r]; return e; }
var gt = gr;
var yr = 800, br = 16, vr = Date.now;
function Or(t) { var e = 0, r = 0; return function () { var o = vr(), a = br - (o - r); if (r = o, a > 0) {
    if (++e >= yr)
        return arguments[0];
}
else
    e = 0; return t.apply(void 0, arguments); }; }
var yt = Or;
function _r(t) { return function () { return t; }; }
var bt = _r;
var jr = (function () { try {
    var t = C(Object, "defineProperty");
    return t({}, "", {}), t;
}
catch { } })(), T = jr;
var Cr = T ? function (t, e) { return T(t, "toString", { configurable: !0, enumerable: !1, value: bt(e), writable: !0 }); } : W, vt = Cr;
var Tr = yt(vt), Ot = Tr;
var Ar = 9007199254740991, Ir = /^(?:0|[1-9]\d*)$/;
function wr(t, e) { var r = typeof t; return e = e ?? Ar, !!e && (r == "number" || r != "symbol" && Ir.test(t)) && t > -1 && t % 1 == 0 && t < e; }
var G = wr;
function Sr(t, e, r) { e == "__proto__" && T ? T(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : t[e] = r; }
var A = Sr;
function Pr(t, e) { return t === e || t !== t && e !== e; }
var y = Pr;
var Dr = Object.prototype, Mr = Dr.hasOwnProperty;
function Er(t, e, r) { var o = t[e]; (!(Mr.call(t, e) && y(o, r)) || r === void 0 && !(e in t)) && A(t, e, r); }
var _t = Er;
function Br(t, e, r, o) { var a = !r; r || (r = {}); for (var i = -1, f = e.length; ++i < f;) {
    var s = e[i], p = o ? o(r[s], t[s], s, r, t) : void 0;
    p === void 0 && (p = t[s]), a ? A(r, s, p) : _t(r, s, p);
} return r; }
var jt = Br;
var Ct = Math.max;
function Lr(t, e, r) { return e = Ct(e === void 0 ? t.length - 1 : e, 0), function () { for (var o = arguments, a = -1, i = Ct(o.length - e, 0), f = Array(i); ++a < i;)
    f[a] = o[e + a]; a = -1; for (var s = Array(e + 1); ++a < e;)
    s[a] = o[a]; return s[e] = r(f), ht(t, this, s); }; }
var Tt = Lr;
function Rr(t, e) { return Ot(Tt(t, e, W), t + ""); }
var At = Rr;
var Fr = 9007199254740991;
function Nr(t) { return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Fr; }
var U = Nr;
function zr(t) { return t != null && U(t.length) && !j(t); }
var I = zr;
function Wr(t, e, r) { if (!l(r))
    return !1; var o = typeof e; return (o == "number" ? I(r) && G(e, r.length) : o == "string" && e in r) ? y(r[e], t) : !1; }
var It = Wr;
function Hr(t) { return At(function (e, r) { var o = -1, a = r.length, i = a > 1 ? r[a - 1] : void 0, f = a > 2 ? r[2] : void 0; for (i = t.length > 3 && typeof i == "function" ? (a--, i) : void 0, f && It(r[0], r[1], f) && (i = a < 3 ? void 0 : i, a = 1), e = Object(e); ++o < a;) {
    var s = r[o];
    s && t(e, s, o, i);
} return e; }); }
var wt = Hr;
var Gr = Object.prototype;
function Ur(t) { var e = t && t.constructor, r = typeof e == "function" && e.prototype || Gr; return t === r; }
var q = Ur;
function qr(t, e) { for (var r = -1, o = Array(t); ++r < t;)
    o[r] = e(r); return o; }
var St = qr;
var kr = "[object Arguments]";
function Kr(t) { return c(t) && g(t) == kr; }
var Q = Kr;
var Pt = Object.prototype, Vr = Pt.hasOwnProperty, $r = Pt.propertyIsEnumerable, Jr = Q((function () { return arguments; })()) ? Q : function (t) { return c(t) && Vr.call(t, "callee") && !$r.call(t, "callee"); }, L = Jr;
function Xr() { return !1; }
var Dt = Xr;
var Bt = typeof exports == "object" && exports && !exports.nodeType && exports, Mt = Bt && typeof module == "object" && module && !module.nodeType && module, Zr = Mt && Mt.exports === Bt, Et = Zr ? x.Buffer : void 0, Yr = Et ? Et.isBuffer : void 0, Qr = Yr || Dt, k = Qr;
var to = "[object Arguments]", eo = "[object Array]", ro = "[object Boolean]", oo = "[object Date]", ao = "[object Error]", fo = "[object Function]", so = "[object Map]", io = "[object Number]", no = "[object Object]", po = "[object RegExp]", uo = "[object Set]", lo = "[object String]", mo = "[object WeakMap]", xo = "[object ArrayBuffer]", co = "[object DataView]", ho = "[object Float32Array]", go = "[object Float64Array]", yo = "[object Int8Array]", bo = "[object Int16Array]", vo = "[object Int32Array]", Oo = "[object Uint8Array]", _o = "[object Uint8ClampedArray]", jo = "[object Uint16Array]", Co = "[object Uint32Array]", n = {};
n[ho] = n[go] = n[yo] = n[bo] = n[vo] = n[Oo] = n[_o] = n[jo] = n[Co] = !0;
n[to] = n[eo] = n[xo] = n[ro] = n[co] = n[oo] = n[ao] = n[fo] = n[so] = n[io] = n[no] = n[po] = n[uo] = n[lo] = n[mo] = !1;
function To(t) { return c(t) && U(t.length) && !!n[g(t)]; }
var Lt = To;
function Ao(t) { return function (e) { return t(e); }; }
var Rt = Ao;
var Ft = typeof exports == "object" && exports && !exports.nodeType && exports, R = Ft && typeof module == "object" && module && !module.nodeType && module, Io = R && R.exports === Ft, tt = Io && z.process, wo = (function () { try {
    var t = R && R.require && R.require("util").types;
    return t || tt && tt.binding && tt.binding("util");
}
catch { } })(), et = wo;
var Nt = et && et.isTypedArray, So = Nt ? Rt(Nt) : Lt, K = So;
var Po = Object.prototype, Do = Po.hasOwnProperty;
function Mo(t, e) { var r = B(t), o = !r && L(t), a = !r && !o && k(t), i = !r && !o && !a && K(t), f = r || o || a || i, s = f ? St(t.length, String) : [], p = s.length; for (var d in t)
    (e || Do.call(t, d)) && !(f && (d == "length" || a && (d == "offset" || d == "parent") || i && (d == "buffer" || d == "byteLength" || d == "byteOffset") || G(d, p))) && s.push(d); return s; }
var zt = Mo;
function Eo(t, e) { return function (r) { return t(e(r)); }; }
var Wt = Eo;
function Bo(t) { var e = []; if (t != null)
    for (var r in Object(t))
        e.push(r); return e; }
var Ht = Bo;
var Lo = Object.prototype, Ro = Lo.hasOwnProperty;
function Fo(t) { if (!l(t))
    return Ht(t); var e = q(t), r = []; for (var o in t)
    o == "constructor" && (e || !Ro.call(t, o)) || r.push(o); return r; }
var Gt = Fo;
function No(t) { return I(t) ? zt(t, !0) : Gt(t); }
var V = No;
var zo = C(Object, "create"), h = zo;
function Wo() { this.__data__ = h ? h(null) : {}, this.size = 0; }
var Ut = Wo;
function Ho(t) { var e = this.has(t) && delete this.__data__[t]; return this.size -= e ? 1 : 0, e; }
var qt = Ho;
var Go = "__lodash_hash_undefined__", Uo = Object.prototype, qo = Uo.hasOwnProperty;
function ko(t) { var e = this.__data__; if (h) {
    var r = e[t];
    return r === Go ? void 0 : r;
} return qo.call(e, t) ? e[t] : void 0; }
var kt = ko;
var Ko = Object.prototype, Vo = Ko.hasOwnProperty;
function $o(t) { var e = this.__data__; return h ? e[t] !== void 0 : Vo.call(e, t); }
var Kt = $o;
var Jo = "__lodash_hash_undefined__";
function Xo(t, e) { var r = this.__data__; return this.size += this.has(t) ? 0 : 1, r[t] = h && e === void 0 ? Jo : e, this; }
var Vt = Xo;
function w(t) { var e = -1, r = t == null ? 0 : t.length; for (this.clear(); ++e < r;) {
    var o = t[e];
    this.set(o[0], o[1]);
} }
w.prototype.clear = Ut;
w.prototype.delete = qt;
w.prototype.get = kt;
w.prototype.has = Kt;
w.prototype.set = Vt;
var rt = w;
function Zo() { this.__data__ = [], this.size = 0; }
var $t = Zo;
function Yo(t, e) { for (var r = t.length; r--;)
    if (y(t[r][0], e))
        return r; return -1; }
var b = Yo;
var Qo = Array.prototype, ta = Qo.splice;
function ea(t) { var e = this.__data__, r = b(e, t); if (r < 0)
    return !1; var o = e.length - 1; return r == o ? e.pop() : ta.call(e, r, 1), --this.size, !0; }
var Jt = ea;
function ra(t) { var e = this.__data__, r = b(e, t); return r < 0 ? void 0 : e[r][1]; }
var Xt = ra;
function oa(t) { return b(this.__data__, t) > -1; }
var Zt = oa;
function aa(t, e) { var r = this.__data__, o = b(r, t); return o < 0 ? (++this.size, r.push([t, e])) : r[o][1] = e, this; }
var Yt = aa;
function S(t) { var e = -1, r = t == null ? 0 : t.length; for (this.clear(); ++e < r;) {
    var o = t[e];
    this.set(o[0], o[1]);
} }
S.prototype.clear = $t;
S.prototype.delete = Jt;
S.prototype.get = Xt;
S.prototype.has = Zt;
S.prototype.set = Yt;
var v = S;
var fa = C(x, "Map"), $ = fa;
function sa() { this.size = 0, this.__data__ = { hash: new rt, map: new ($ || v), string: new rt }; }
var Qt = sa;
function ia(t) { var e = typeof t; return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null; }
var te = ia;
function na(t, e) { var r = t.__data__; return te(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map; }
var O = na;
function pa(t) { var e = O(this, t).delete(t); return this.size -= e ? 1 : 0, e; }
var ee = pa;
function ua(t) { return O(this, t).get(t); }
var re = ua;
function la(t) { return O(this, t).has(t); }
var oe = la;
function ma(t, e) { var r = O(this, t), o = r.size; return r.set(t, e), this.size += r.size == o ? 0 : 1, this; }
var ae = ma;
function P(t) { var e = -1, r = t == null ? 0 : t.length; for (this.clear(); ++e < r;) {
    var o = t[e];
    this.set(o[0], o[1]);
} }
P.prototype.clear = Qt;
P.prototype.delete = ee;
P.prototype.get = re;
P.prototype.has = oe;
P.prototype.set = ae;
var fe = P;
var da = Wt(Object.getPrototypeOf, Object), J = da;
var xa = "[object Object]", ca = Function.prototype, ha = Object.prototype, se = ca.toString, ga = ha.hasOwnProperty, ya = se.call(Object);
function ba(t) { if (!c(t) || g(t) != xa)
    return !1; var e = J(t); if (e === null)
    return !0; var r = ga.call(e, "constructor") && e.constructor; return typeof r == "function" && r instanceof r && se.call(r) == ya; }
var ie = ba;
function va() { this.__data__ = new v, this.size = 0; }
var ne = va;
function Oa(t) { var e = this.__data__, r = e.delete(t); return this.size = e.size, r; }
var pe = Oa;
function _a(t) { return this.__data__.get(t); }
var ue = _a;
function ja(t) { return this.__data__.has(t); }
var le = ja;
var Ca = 200;
function Ta(t, e) { var r = this.__data__; if (r instanceof v) {
    var o = r.__data__;
    if (!$ || o.length < Ca - 1)
        return o.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new fe(o);
} return r.set(t, e), this.size = r.size, this; }
var me = Ta;
function D(t) { var e = this.__data__ = new v(t); this.size = e.size; }
D.prototype.clear = ne;
D.prototype.delete = pe;
D.prototype.get = ue;
D.prototype.has = le;
D.prototype.set = me;
var de = D;
var ge = typeof exports == "object" && exports && !exports.nodeType && exports, xe = ge && typeof module == "object" && module && !module.nodeType && module, Aa = xe && xe.exports === ge, ce = Aa ? x.Buffer : void 0, he = ce ? ce.allocUnsafe : void 0;
function Ia(t, e) { if (e)
    return t.slice(); var r = t.length, o = he ? he(r) : new t.constructor(r); return t.copy(o), o; }
var ye = Ia;
var wa = x.Uint8Array, ot = wa;
function Sa(t) { var e = new t.constructor(t.byteLength); return new ot(e).set(new ot(t)), e; }
var be = Sa;
function Pa(t, e) { var r = e ? be(t.buffer) : t.buffer; return new t.constructor(r, t.byteOffset, t.length); }
var ve = Pa;
function Da(t) { return typeof t.constructor == "function" && !q(t) ? ct(J(t)) : {}; }
var Oe = Da;
function Ma(t) { return function (e, r, o) { for (var a = -1, i = Object(e), f = o(e), s = f.length; s--;) {
    var p = f[t ? s : ++a];
    if (r(i[p], p, i) === !1)
        break;
} return e; }; }
var _e = Ma;
var Ea = _e(), je = Ea;
function Ba(t, e, r) { (r !== void 0 && !y(t[e], r) || r === void 0 && !(e in t)) && A(t, e, r); }
var F = Ba;
function La(t) { return c(t) && I(t); }
var Ce = La;
function Ra(t, e) { if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
    return t[e]; }
var N = Ra;
function Fa(t) { return jt(t, V(t)); }
var Te = Fa;
function Na(t, e, r, o, a, i, f) { var s = N(t, r), p = N(e, r), d = f.get(p); if (d) {
    F(t, r, d);
    return;
} var m = i ? i(s, p, r + "", t, e, f) : void 0, M = m === void 0; if (M) {
    var Z = B(p), Y = !Z && k(p), at = !Z && !Y && K(p);
    m = p, Z || Y || at ? B(s) ? m = s : Ce(s) ? m = gt(s) : Y ? (M = !1, m = ye(p, !0)) : at ? (M = !1, m = ve(p, !0)) : m = [] : ie(p) || L(p) ? (m = s, L(s) ? m = Te(s) : (!l(s) || j(s)) && (m = Oe(p))) : M = !1;
} M && (f.set(p, m), a(m, p, o, i, f), f.delete(p)), F(t, r, m); }
var Ae = Na;
function Ie(t, e, r, o, a) { t !== e && je(e, function (i, f) { if (a || (a = new de), l(i))
    Ae(t, e, f, r, Ie, o, a);
else {
    var s = o ? o(N(t, f), i, f + "", t, e, a) : void 0;
    s === void 0 && (s = i), F(t, f, s);
} }, V); }
var we = Ie;
var za = wt(function (t, e, r) { we(t, e, r); }), X = za;
import { BehaviorSubject as Ua } from "rxjs";
import { distinctUntilChanged as qa } from "rxjs/operators";
var De = new Wa("Configuration for ngCharts");
function zp(...t) { return { registerables: [...Ha, ...t] }; }
function Wp(...t) { let e = X({}, ...t); return { provide: De, useValue: e }; }
var ka = (() => { let e = class e {
    constructor() { this.colorschemesOptions = new Ua(void 0); }
    setColorschemesOptions(o) { this.pColorschemesOptions = o, this.colorschemesOptions.next(o); }
    getColorschemesOptions() { return this.pColorschemesOptions; }
}; e.\u0275fac = function (a) { return new (a || e); }, e.\u0275prov = u.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }); let t = e; return t; })(), Hp = (() => { let e = class e {
    constructor(o, a, i, f) { this.zone = a, this.themeService = i, this.type = "bar", this.plugins = [], this.chartClick = new Se, this.chartHover = new Se, this.subs = [], this.themeOverrides = {}, f?.registerables && Pe.register(...f.registerables), f?.defaults && Ga.set(f.defaults), this.ctx = o.nativeElement.getContext("2d"), this.subs.push(this.themeService.colorschemesOptions.pipe(qa()).subscribe(s => this.themeChanged(s))); }
    ngOnChanges(o) { let a = ["type"], i = Object.getOwnPropertyNames(o); if (i.some(f => a.includes(f)) || i.every(f => o[f].isFirstChange()))
        this.render();
    else {
        let f = this.getChartConfiguration();
        this.chart && (Object.assign(this.chart.config.data, f.data), this.chart.config.plugins && Object.assign(this.chart.config.plugins, f.plugins), this.chart.config.options && Object.assign(this.chart.config.options, f.options)), this.update();
    } }
    ngOnDestroy() { this.chart && (this.chart.destroy(), this.chart = void 0), this.subs.forEach(o => o.unsubscribe()); }
    render() { return this.chart && this.chart.destroy(), this.zone.runOutsideAngular(() => this.chart = new Pe(this.ctx, this.getChartConfiguration())); }
    update(o) { this.chart && this.zone.runOutsideAngular(() => this.chart?.update(o)); }
    hideDataset(o, a) { this.chart && (this.chart.getDatasetMeta(o).hidden = a, this.update()); }
    isDatasetHidden(o) { return this.chart?.getDatasetMeta(o)?.hidden; }
    toBase64Image() { return this.chart?.toBase64Image(); }
    themeChanged(o) { this.themeOverrides = o, this.chart && (this.chart.config.options && Object.assign(this.chart.config.options, this.getChartOptions()), this.update()); }
    getChartOptions() { return X({ onHover: (o, a) => { !this.chartHover.observed && !this.chartHover.observers?.length || this.zone.run(() => this.chartHover.emit({ event: o, active: a })); }, onClick: (o, a) => { !this.chartClick.observed && !this.chartClick.observers?.length || this.zone.run(() => this.chartClick.emit({ event: o, active: a })); } }, this.themeOverrides, this.options, { plugins: { legend: { display: this.legend } } }); }
    getChartConfiguration() { return { type: this.type, data: this.getChartData(), options: this.getChartOptions(), plugins: this.plugins }; }
    getChartData() { return this.data ? this.data : { labels: this.labels || [], datasets: this.datasets || [] }; }
}; e.\u0275fac = function (a) { return new (a || e)(u.\u0275\u0275directiveInject(u.ElementRef), u.\u0275\u0275directiveInject(u.NgZone), u.\u0275\u0275directiveInject(ka), u.\u0275\u0275directiveInject(De, 8)); }, e.\u0275dir = u.\u0275\u0275defineDirective({ type: e, selectors: [["canvas", "baseChart", ""]], inputs: { type: "type", legend: "legend", data: "data", options: "options", plugins: "plugins", labels: "labels", datasets: "datasets" }, outputs: { chartClick: "chartClick", chartHover: "chartHover" }, exportAs: ["base-chart"], features: [u.\u0275\u0275NgOnChangesFeature] }); let t = e; return t; })();
export { Hp as BaseChartDirective, De as NG_CHARTS_CONFIGURATION, ka as ThemeService, Wp as provideCharts, zp as withDefaultRegisterables };
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
