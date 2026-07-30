import { a as K, b as q, c as J } from "@nf-internal/chunk-Y76YYXOK";
import { a as P, b as V, c as $, d as j, e as k, f as H, g as W, h as z } from "@nf-internal/chunk-HKXF34UL";
import { a as G } from "@nf-internal/chunk-HOKO2ONL";
import { a as B } from "@nf-internal/chunk-LDQ7RTNT";
import { a as x } from "@nf-internal/chunk-ARUHDGKS";
import { a as Z } from "@nf-internal/chunk-4UKDDKDA";
import { a as X } from "@nf-internal/chunk-TFY62ZWJ";
import { a as C, b as N, c as S, d as F, e as R, f as b } from "@nf-internal/chunk-SD4DQCMX";
import { a as Y } from "@nf-internal/chunk-4MZRILT7";
import { a as I, b as E, c as v, d as O, e as L } from "@nf-internal/chunk-5KSFOI5Q";
import { a as U, b as m } from "@nf-internal/chunk-RXMLTE5A";
import { a as M, b as D } from "@nf-internal/chunk-JKOY2XUY";
import * as s from "@angular/core";
import { Version as ae, inject as A } from "@angular/core";
import { InjectionToken as T, inject as Q, LOCALE_ID as ee } from "@angular/core";
import { Subject as te } from "rxjs";
var h = new T("MAT_DATE_LOCALE", { providedIn: "root", factory: w });
function w() { return Q(ee); }
var u = "Method not implemented", l = class {
    locale;
    _localeChanges = new te;
    localeChanges = this._localeChanges;
    setTime(r, e, t, i) { throw new Error(u); }
    getHours(r) { throw new Error(u); }
    getMinutes(r) { throw new Error(u); }
    getSeconds(r) { throw new Error(u); }
    parseTime(r, e) { throw new Error(u); }
    addSeconds(r, e) { throw new Error(u); }
    getValidDateOrNull(r) { return this.isDateInstance(r) && this.isValid(r) ? r : null; }
    deserialize(r) { return r == null || this.isDateInstance(r) && this.isValid(r) ? r : this.invalid(); }
    setLocale(r) { this.locale = r, this._localeChanges.next(); }
    compareDate(r, e) { return this.getYear(r) - this.getYear(e) || this.getMonth(r) - this.getMonth(e) || this.getDate(r) - this.getDate(e); }
    compareTime(r, e) { return this.getHours(r) - this.getHours(e) || this.getMinutes(r) - this.getMinutes(e) || this.getSeconds(r) - this.getSeconds(e); }
    sameDate(r, e) { if (r && e) {
        let t = this.isValid(r), i = this.isValid(e);
        return t && i ? !this.compareDate(r, e) : t == i;
    } return r == e; }
    sameTime(r, e) { if (r && e) {
        let t = this.isValid(r), i = this.isValid(e);
        return t && i ? !this.compareTime(r, e) : t == i;
    } return r == e; }
    clampDate(r, e, t) { return e && this.compareDate(r, e) < 0 ? e : t && this.compareDate(r, t) > 0 ? t : r; }
}, _ = new T("mat-date-formats");
import * as d from "@angular/core";
import "@angular/core";
import { startWith as re } from "rxjs/operators";
var ne = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275dir = d.\u0275\u0275defineDirective({ type: n, selectors: [["", "mat-line", ""], ["", "matLine", ""]], hostAttrs: [1, "mat-line"] });
} return n; })();
function ie(n, r, e = "mat") { n.changes.pipe(re(n)).subscribe(({ length: t }) => { c(r, `${e}-2-line`, !1), c(r, `${e}-3-line`, !1), c(r, `${e}-multi-line`, !1), t === 2 || t === 3 ? c(r, `${e}-${t}-line`, !0) : t > 3 && c(r, `${e}-multi-line`, !0); }); }
function c(n, r, e) { n.nativeElement.classList.toggle(r, e); }
var oe = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = d.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = d.\u0275\u0275defineInjector({ imports: [m, m] });
} return n; })();
import "@angular/cdk/layout";
import "@angular/cdk/a11y";
import "@angular/cdk/bidi";
import "rxjs";
import "rxjs/operators";
import "@angular/cdk/keycodes";
import "@angular/cdk/private";
import "@angular/cdk/platform";
import "@angular/cdk/coercion";
var Re = new ae("20.2.14"), se = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/, ue = /^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;
function f(n, r) { let e = Array(n); for (let t = 0; t < n; t++)
    e[t] = r(t); return e; }
var y = (() => { class n extends l {
    useUtcForDisplay = !1;
    _matDateLocale = A(h, { optional: !0 });
    constructor() { super(); let e = A(h, { optional: !0 }); e !== void 0 && (this._matDateLocale = e), super.setLocale(this._matDateLocale); }
    getYear(e) { return e.getFullYear(); }
    getMonth(e) { return e.getMonth(); }
    getDate(e) { return e.getDate(); }
    getDayOfWeek(e) { return e.getDay(); }
    getMonthNames(e) { let t = new Intl.DateTimeFormat(this.locale, { month: e, timeZone: "utc" }); return f(12, i => this._format(t, new Date(2017, i, 1))); }
    getDateNames() { let e = new Intl.DateTimeFormat(this.locale, { day: "numeric", timeZone: "utc" }); return f(31, t => this._format(e, new Date(2017, 0, t + 1))); }
    getDayOfWeekNames(e) { let t = new Intl.DateTimeFormat(this.locale, { weekday: e, timeZone: "utc" }); return f(7, i => this._format(t, new Date(2017, 0, i + 1))); }
    getYearName(e) { let t = new Intl.DateTimeFormat(this.locale, { year: "numeric", timeZone: "utc" }); return this._format(t, e); }
    getFirstDayOfWeek() { if (typeof Intl < "u" && Intl.Locale) {
        let e = new Intl.Locale(this.locale), t = (e.getWeekInfo?.() || e.weekInfo)?.firstDay ?? 0;
        return t === 7 ? 0 : t;
    } return 0; }
    getNumDaysInMonth(e) { return this.getDate(this._createDateWithOverflow(this.getYear(e), this.getMonth(e) + 1, 0)); }
    clone(e) { return new Date(e.getTime()); }
    createDate(e, t, i) { let o = this._createDateWithOverflow(e, t, i); return o.getMonth() != t, o; }
    today() { return new Date; }
    parse(e, t) { return typeof e == "number" ? new Date(e) : e ? new Date(Date.parse(e)) : null; }
    format(e, t) { if (!this.isValid(e))
        throw Error("NativeDateAdapter: Cannot format invalid date."); let i = new Intl.DateTimeFormat(this.locale, D(M({}, t), { timeZone: "utc" })); return this._format(i, e); }
    addCalendarYears(e, t) { return this.addCalendarMonths(e, t * 12); }
    addCalendarMonths(e, t) { let i = this._createDateWithOverflow(this.getYear(e), this.getMonth(e) + t, this.getDate(e)); return this.getMonth(i) != ((this.getMonth(e) + t) % 12 + 12) % 12 && (i = this._createDateWithOverflow(this.getYear(i), this.getMonth(i), 0)), i; }
    addCalendarDays(e, t) { return this._createDateWithOverflow(this.getYear(e), this.getMonth(e), this.getDate(e) + t); }
    toIso8601(e) { return [e.getUTCFullYear(), this._2digit(e.getUTCMonth() + 1), this._2digit(e.getUTCDate())].join("-"); }
    deserialize(e) { if (typeof e == "string") {
        if (!e)
            return null;
        if (se.test(e)) {
            let t = new Date(e);
            if (this.isValid(t))
                return t;
        }
    } return super.deserialize(e); }
    isDateInstance(e) { return e instanceof Date; }
    isValid(e) { return !isNaN(e.getTime()); }
    invalid() { return new Date(NaN); }
    setTime(e, t, i, o) { let a = this.clone(e); return a.setHours(t, i, o, 0), a; }
    getHours(e) { return e.getHours(); }
    getMinutes(e) { return e.getMinutes(); }
    getSeconds(e) { return e.getSeconds(); }
    parseTime(e, t) { if (typeof e != "string")
        return e instanceof Date ? new Date(e.getTime()) : null; let i = e.trim(); if (i.length === 0)
        return null; let o = this._parseTimeString(i); if (o === null) {
        let a = i.replace(/[^0-9:(AM|PM)]/gi, "").trim();
        a.length > 0 && (o = this._parseTimeString(a));
    } return o || this.invalid(); }
    addSeconds(e, t) { return new Date(e.getTime() + t * 1e3); }
    _createDateWithOverflow(e, t, i) { let o = new Date; return o.setFullYear(e, t, i), o.setHours(0, 0, 0, 0), o; }
    _2digit(e) { return ("00" + e).slice(-2); }
    _format(e, t) { let i = new Date; return i.setUTCFullYear(t.getFullYear(), t.getMonth(), t.getDate()), i.setUTCHours(t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()), e.format(i); }
    _parseTimeString(e) { let t = e.toUpperCase().match(ue); if (t) {
        let i = parseInt(t[1]), o = parseInt(t[2]), a = t[3] == null ? void 0 : parseInt(t[3]), g = t[4];
        if (i === 12 ? i = g === "AM" ? 0 : i : g === "PM" && (i += 12), p(i, 0, 23) && p(o, 0, 59) && (a == null || p(a, 0, 59)))
            return this.setTime(this.today(), i, o, a || 0);
    } return null; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })();
function p(n, r, e) { return !isNaN(n) && n >= r && n <= e; }
var le = { parse: { dateInput: null, timeInput: null }, display: { dateInput: { year: "numeric", month: "numeric", day: "numeric" }, timeInput: { hour: "numeric", minute: "numeric" }, monthYearLabel: { year: "numeric", month: "short" }, dateA11yLabel: { year: "numeric", month: "long", day: "numeric" }, monthYearA11yLabel: { year: "numeric", month: "long" }, timeOptionLabel: { hour: "numeric", minute: "numeric" } } }, be = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = s.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = s.\u0275\u0275defineInjector({ providers: [{ provide: l, useClass: y }] });
} return n; })(), xe = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = s.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = s.\u0275\u0275defineInjector({ providers: [de()] });
} return n; })();
function de(n = le) { return [{ provide: l, useClass: y }, { provide: _, useValue: n }]; }
export { E as AnimationCurves, v as AnimationDurations, l as DateAdapter, q as ErrorStateMatcher, I as MATERIAL_ANIMATIONS, U as MATERIAL_SANITY_CHECKS, _ as MAT_DATE_FORMATS, h as MAT_DATE_LOCALE, w as MAT_DATE_LOCALE_FACTORY, le as MAT_NATIVE_DATE_FORMATS, V as MAT_OPTGROUP, P as MAT_OPTION_PARENT_COMPONENT, R as MAT_RIPPLE_GLOBAL_OPTIONS, m as MatCommonModule, ne as MatLine, oe as MatLineModule, xe as MatNativeDateModule, $ as MatOptgroup, k as MatOption, z as MatOptionModule, j as MatOptionSelectionChange, x as MatPseudoCheckbox, G as MatPseudoCheckboxModule, b as MatRipple, B as MatRippleLoader, Z as MatRippleModule, y as NativeDateAdapter, be as NativeDateModule, N as RippleRef, F as RippleRenderer, C as RippleState, K as ShowOnDirtyErrorStateMatcher, Re as VERSION, J as _ErrorStateTracker, X as _MatInternalFormField, Y as _StructuralStylesLoader, L as _animationsDisabled, H as _countGroupLabelsBeforeOption, O as _getAnimationsState, W as _getOptionScrollPosition, S as defaultRippleAnimationConfig, de as provideNativeDateAdapter, ie as setLines };
