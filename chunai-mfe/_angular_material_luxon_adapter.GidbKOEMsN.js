import "@nf-internal/chunk-EL2NI3EA";
import * as i from "@angular/core";
import { InjectionToken as g, inject as p } from "@angular/core";
import { DateAdapter as d, MAT_DATE_LOCALE as l, MAT_DATE_FORMATS as D } from "@angular/material/core";
import { DateTime as o, Info as u } from "luxon";
var c = new g("MAT_LUXON_DATE_ADAPTER_OPTIONS", { providedIn: "root", factory: O });
function O() { return { useUtc: !1, defaultOutputCalendar: "gregory" }; }
function _(n, m) { let e = Array(n); for (let t = 0; t < n; t++)
    e[t] = m(t); return e; }
var h = (() => { class n extends d {
    _useUTC;
    _firstDayOfWeek;
    _defaultOutputCalendar;
    constructor() { super(); let e = p(l, { optional: !0 }), t = p(c, { optional: !0 }); this._useUTC = !!t?.useUtc, this._firstDayOfWeek = t?.firstDayOfWeek, this._defaultOutputCalendar = t?.defaultOutputCalendar || "gregory", this.setLocale(e || o.local().locale); }
    getYear(e) { return e.year; }
    getMonth(e) { return e.month - 1; }
    getDate(e) { return e.day; }
    getDayOfWeek(e) { return e.weekday; }
    getMonthNames(e) { return u.months(e, { locale: this.locale, outputCalendar: this._defaultOutputCalendar }); }
    getDateNames() { let e = new Intl.DateTimeFormat(this.locale, { day: "numeric", timeZone: "utc" }); return _(31, t => e.format(o.utc(2017, 1, t + 1).toJSDate())); }
    getDayOfWeekNames(e) { let t = u.weekdays(e, { locale: this.locale }); return t.unshift(t.pop()), t; }
    getYearName(e) { return e.toFormat("yyyy", this._getOptions()); }
    getFirstDayOfWeek() { return this._firstDayOfWeek ?? u.getStartOfWeek({ locale: this.locale }); }
    getNumDaysInMonth(e) { return e.daysInMonth; }
    clone(e) { return o.fromObject(e.toObject(), this._getOptions()); }
    createDate(e, t, r) { let s = this._getOptions(); if (t < 0 || t > 11)
        throw Error(`Invalid month index "${t}". Month index has to be between 0 and 11.`); if (r < 1)
        throw Error(`Invalid date "${r}". Date has to be greater than 0.`); let a = this._useUTC ? o.utc(e, t + 1, r, s) : o.local(e, t + 1, r, s); if (!this.isValid(a))
        throw Error(`Invalid date "${r}". Reason: "${a.invalidReason}".`); return a; }
    today() { let e = this._getOptions(); return this._useUTC ? o.utc(e) : o.local(e); }
    parse(e, t) { let r = this._getOptions(); if (typeof e == "string" && e.length > 0) {
        let s = o.fromISO(e, r);
        if (this.isValid(s))
            return s;
        let a = Array.isArray(t) ? t : [t];
        if (!t.length)
            throw Error("Formats array must not be empty.");
        for (let y of a) {
            let f = o.fromFormat(e, y, r);
            if (this.isValid(f))
                return f;
        }
        return this.invalid();
    }
    else {
        if (typeof e == "number")
            return o.fromMillis(e, r);
        if (e instanceof Date)
            return o.fromJSDate(e, r);
        if (e instanceof o)
            return o.fromMillis(e.toMillis(), r);
    } return null; }
    format(e, t) { if (!this.isValid(e))
        throw Error("LuxonDateAdapter: Cannot format invalid date."); return this._useUTC ? e.setLocale(this.locale).setZone("utc").toFormat(t) : e.setLocale(this.locale).toFormat(t); }
    addCalendarYears(e, t) { return e.reconfigure(this._getOptions()).plus({ years: t }); }
    addCalendarMonths(e, t) { return e.reconfigure(this._getOptions()).plus({ months: t }); }
    addCalendarDays(e, t) { return e.reconfigure(this._getOptions()).plus({ days: t }); }
    toIso8601(e) { return e.toISO(); }
    deserialize(e) { let t = this._getOptions(), r; if (e instanceof Date && (r = o.fromJSDate(e, t)), typeof e == "string") {
        if (!e)
            return null;
        r = o.fromISO(e, t);
    } return r && this.isValid(r) ? r : super.deserialize(e); }
    isDateInstance(e) { return e instanceof o; }
    isValid(e) { return e.isValid; }
    invalid() { return o.invalid("Invalid Luxon DateTime object."); }
    setTime(e, t, r, s) { return this.clone(e).set({ hour: t, minute: r, second: s, millisecond: 0 }); }
    getHours(e) { return e.hour; }
    getMinutes(e) { return e.minute; }
    getSeconds(e) { return e.second; }
    parseTime(e, t) { let r = this.parse(e, t); return (!r || !this.isValid(r)) && typeof e == "string" && this.parse(e.replace(/[^0-9:(AM|PM)]/gi, ""), t) || r; }
    addSeconds(e, t) { return e.reconfigure(this._getOptions()).plus({ seconds: t }); }
    _getOptions() { return { zone: this._useUTC ? "utc" : void 0, locale: this.locale, outputCalendar: this._defaultOutputCalendar }; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), M = { parse: { dateInput: "D", timeInput: "t" }, display: { dateInput: "D", timeInput: "t", monthYearLabel: "LLL yyyy", dateA11yLabel: "DD", monthYearA11yLabel: "LLLL yyyy", timeOptionLabel: "t" } }, v = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = i.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = i.\u0275\u0275defineInjector({ providers: [{ provide: d, useClass: h, deps: [l, c] }] });
} return n; })(), w = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = i.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = i.\u0275\u0275defineInjector({ providers: [T()] });
} return n; })();
function T(n = M) { return [{ provide: d, useClass: h, deps: [l, c] }, { provide: D, useValue: n }]; }
export { h as LuxonDateAdapter, v as LuxonDateModule, c as MAT_LUXON_DATE_ADAPTER_OPTIONS, O as MAT_LUXON_DATE_ADAPTER_OPTIONS_FACTORY, M as MAT_LUXON_DATE_FORMATS, w as MatLuxonDateModule, T as provideLuxonDateAdapter };
