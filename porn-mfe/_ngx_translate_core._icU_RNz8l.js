import { a as F } from "@nf-internal/chunk-JKOY2XUY";
import * as r from "@angular/core";
import { EventEmitter as P, InjectionToken as V, makeEnvironmentProviders as X } from "@angular/core";
import { of as S, isObservable as p, forkJoin as z, concat as B, defer as G } from "rxjs";
import { take as y, shareReplay as H, map as $, concatMap as W, switchMap as q } from "rxjs/operators";
var c = class {
}, R = (() => { class n extends c {
    getTranslation(e) { return S({}); }
    static \u0275fac = (() => { let e; return function (s) { return (e || (e = r.\u0275\u0275getInheritedFactory(n)))(s || n); }; })();
    static \u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), L = class {
}, M = (() => { class n {
    handle(e) { return e.key; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })();
function b(n, o) { if (n === o)
    return !0; if (n === null || o === null)
    return !1; if (n !== n && o !== o)
    return !0; let e = typeof n, t = typeof o, s, i, a; if (e == t && e == "object")
    if (Array.isArray(n)) {
        if (!Array.isArray(o))
            return !1;
        if ((s = n.length) == o.length) {
            for (i = 0; i < s; i++)
                if (!b(n[i], o[i]))
                    return !1;
            return !0;
        }
    }
    else {
        if (Array.isArray(o))
            return !1;
        a = Object.create(null);
        for (i in n) {
            if (!b(n[i], o[i]))
                return !1;
            a[i] = !0;
        }
        for (i in o)
            if (!(i in a) && typeof o[i] < "u")
                return !1;
        return !0;
    } return !1; }
function u(n) { return typeof n < "u" && n !== null; }
function D(n) { return w(n) && !U(n) && n !== null; }
function w(n) { return typeof n == "object"; }
function U(n) { return Array.isArray(n); }
function _(n) { return typeof n == "string"; }
function Z(n) { return typeof n == "function"; }
function N(n, o) { let e = Object.assign({}, n); return w(n) ? (w(n) && w(o) && Object.keys(o).forEach(t => { D(o[t]) ? t in n ? e[t] = N(n[t], o[t]) : Object.assign(e, { [t]: o[t] }) : Object.assign(e, { [t]: o[t] }); }), e) : N({}, o); }
function K(n, o) { let e = o.split("."); o = ""; do
    o += e.shift(), u(n) && u(n[o]) && (D(n[o]) || U(n[o]) || !e.length) ? (n = n[o], o = "") : e.length ? o += "." : n = void 0;
while (e.length); return n; }
function Q(n, o, e) { let t = o.split("."), s = n; for (let i = 0; i < t.length; i++) {
    let a = t[i];
    i === t.length - 1 ? s[a] = e : ((!s[a] || !D(s[a])) && (s[a] = {}), s = s[a]);
} }
var d = class {
}, x = (() => { class n extends d {
    templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
    interpolate(e, t) { if (_(e))
        return this.interpolateString(e, t); if (Z(e))
        return this.interpolateFunction(e, t); }
    interpolateFunction(e, t) { return e(t); }
    interpolateString(e, t) { return t ? e.replace(this.templateMatcher, (s, i) => { let a = K(t, i); return u(a) ? a : s; }) : e; }
    static \u0275fac = (() => { let e; return function (s) { return (e || (e = r.\u0275\u0275getInheritedFactory(n)))(s || n); }; })();
    static \u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), g = class {
}, O = (() => { class n extends g {
    compile(e, t) { return e; }
    compileTranslations(e, t) { return e; }
    static \u0275fac = (() => { let e; return function (s) { return (e || (e = r.\u0275\u0275getInheritedFactory(n)))(s || n); }; })();
    static \u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), v = class {
    defaultLang;
    currentLang = this.defaultLang;
    translations = {};
    langs = [];
    onTranslationChange = new P;
    onLangChange = new P;
    onDefaultLangChange = new P;
}, E = new V("ISOLATE_TRANSLATE_SERVICE"), j = new V("USE_DEFAULT_LANG"), A = new V("DEFAULT_LANGUAGE"), I = new V("USE_EXTEND"), C = n => p(n) ? n : S(n), m = (() => { class n {
    store;
    currentLoader;
    compiler;
    parser;
    missingTranslationHandler;
    useDefaultLang;
    extend;
    loadingTranslations;
    pending = !1;
    _translationRequests = {};
    lastUseLanguage = null;
    get onTranslationChange() { return this.store.onTranslationChange; }
    get onLangChange() { return this.store.onLangChange; }
    get onDefaultLangChange() { return this.store.onDefaultLangChange; }
    get defaultLang() { return this.store.defaultLang; }
    set defaultLang(e) { this.store.defaultLang = e; }
    get currentLang() { return this.store.currentLang; }
    set currentLang(e) { this.store.currentLang = e; }
    get langs() { return this.store.langs; }
    set langs(e) { this.store.langs = e; }
    get translations() { return this.store.translations; }
    set translations(e) { this.store.translations = e; }
    constructor(e, t, s, i, a, h = !0, l = !1, f = !1, T) { this.store = e, this.currentLoader = t, this.compiler = s, this.parser = i, this.missingTranslationHandler = a, this.useDefaultLang = h, this.extend = f, l && (this.store = new v), T && this.setDefaultLang(T); }
    setDefaultLang(e) { if (e === this.defaultLang)
        return; let t = this.retrieveTranslations(e); typeof t < "u" ? (this.defaultLang == null && (this.defaultLang = e), t.pipe(y(1)).subscribe(() => { this.changeDefaultLang(e); })) : this.changeDefaultLang(e); }
    getDefaultLang() { return this.defaultLang; }
    use(e) { if (this.lastUseLanguage = e, e === this.currentLang)
        return S(this.translations[e]); this.currentLang || (this.currentLang = e); let t = this.retrieveTranslations(e); return p(t) ? (t.pipe(y(1)).subscribe(() => { this.changeLang(e); }), t) : (this.changeLang(e), S(this.translations[e])); }
    changeLang(e) { e === this.lastUseLanguage && (this.currentLang = e, this.onLangChange.emit({ lang: e, translations: this.translations[e] }), this.defaultLang == null && this.changeDefaultLang(e)); }
    retrieveTranslations(e) { if (typeof this.translations[e] > "u" || this.extend)
        return this._translationRequests[e] = this._translationRequests[e] || this.loadAndCompileTranslations(e), this._translationRequests[e]; }
    getTranslation(e) { return this.loadAndCompileTranslations(e); }
    loadAndCompileTranslations(e) { this.pending = !0; let t = this.currentLoader.getTranslation(e).pipe(H(1), y(1)); return this.loadingTranslations = t.pipe($(s => this.compiler.compileTranslations(s, e)), H(1), y(1)), this.loadingTranslations.subscribe({ next: s => { this.translations[e] = this.extend && this.translations[e] ? F(F({}, s), this.translations[e]) : s, this.updateLangs(), this.pending = !1; }, error: s => { this.pending = !1; } }), t; }
    setTranslation(e, t, s = !1) { let i = this.compiler.compileTranslations(t, e); (s || this.extend) && this.translations[e] ? this.translations[e] = N(this.translations[e], i) : this.translations[e] = i, this.updateLangs(), this.onTranslationChange.emit({ lang: e, translations: this.translations[e] }); }
    getLangs() { return this.langs; }
    addLangs(e) { let t = e.filter(s => !this.langs.includes(s)); t.length > 0 && (this.langs = [...this.langs, ...t]); }
    updateLangs() { this.addLangs(Object.keys(this.translations)); }
    getParsedResultForKey(e, t, s) { let i; if (e && (i = this.runInterpolation(K(e, t), s)), i === void 0 && this.defaultLang != null && this.defaultLang !== this.currentLang && this.useDefaultLang && (i = this.runInterpolation(K(this.translations[this.defaultLang], t), s)), i === void 0) {
        let a = { key: t, translateService: this };
        typeof s < "u" && (a.interpolateParams = s), i = this.missingTranslationHandler.handle(a);
    } return i !== void 0 ? i : t; }
    runInterpolation(e, t) { if (U(e))
        return e.map(s => this.runInterpolation(s, t)); if (D(e)) {
        let s = {};
        for (let i in e) {
            let a = this.runInterpolation(e[i], t);
            a !== void 0 && (s[i] = a);
        }
        return s;
    }
    else
        return this.parser.interpolate(e, t); }
    getParsedResult(e, t, s) { if (t instanceof Array) {
        let i = {}, a = !1;
        for (let l of t)
            i[l] = this.getParsedResultForKey(e, l, s), a = a || p(i[l]);
        if (!a)
            return i;
        let h = t.map(l => C(i[l]));
        return z(h).pipe($(l => { let f = {}; return l.forEach((T, J) => { f[t[J]] = T; }), f; }));
    } return this.getParsedResultForKey(e, t, s); }
    get(e, t) { if (!u(e) || !e.length)
        throw new Error('Parameter "key" is required and cannot be empty'); return this.pending ? this.loadingTranslations.pipe(W(s => C(this.getParsedResult(s, e, t)))) : C(this.getParsedResult(this.translations[this.currentLang], e, t)); }
    getStreamOnTranslationChange(e, t) { if (!u(e) || !e.length)
        throw new Error('Parameter "key" is required and cannot be empty'); return B(G(() => this.get(e, t)), this.onTranslationChange.pipe(q(s => { let i = this.getParsedResult(s.translations, e, t); return C(i); }))); }
    stream(e, t) { if (!u(e) || !e.length)
        throw new Error('Parameter "key" required'); return B(G(() => this.get(e, t)), this.onLangChange.pipe(q(s => { let i = this.getParsedResult(s.translations, e, t); return C(i); }))); }
    instant(e, t) { if (!u(e) || e.length === 0)
        throw new Error('Parameter "key" is required and cannot be empty'); let s = this.getParsedResult(this.translations[this.currentLang], e, t); return p(s) ? Array.isArray(e) ? e.reduce((i, a) => (i[a] = a, i), {}) : e : s; }
    set(e, t, s = this.currentLang) { Q(this.translations[s], e, _(t) ? this.compiler.compile(t, s) : this.compiler.compileTranslations(t, s)), this.updateLangs(), this.onTranslationChange.emit({ lang: s, translations: this.translations[s] }); }
    changeDefaultLang(e) { this.defaultLang = e, this.onDefaultLangChange.emit({ lang: e, translations: this.translations[e] }); }
    reloadLang(e) { return this.resetLang(e), this.loadAndCompileTranslations(e); }
    resetLang(e) { delete this._translationRequests[e], delete this.translations[e]; }
    getBrowserLang() { if (typeof window > "u" || !window.navigator)
        return; let e = this.getBrowserCultureLang(); return e ? e.split(/[-_]/)[0] : void 0; }
    getBrowserCultureLang() { if (!(typeof window > "u" || typeof window.navigator > "u"))
        return window.navigator.languages ? window.navigator.languages[0] : window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage; }
    static \u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(v), r.\u0275\u0275inject(c), r.\u0275\u0275inject(g), r.\u0275\u0275inject(d), r.\u0275\u0275inject(L), r.\u0275\u0275inject(j), r.\u0275\u0275inject(E), r.\u0275\u0275inject(I), r.\u0275\u0275inject(A)); };
    static \u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })(), oe = (() => { class n {
    translateService;
    element;
    _ref;
    key;
    lastParams;
    currentParams;
    onLangChangeSub;
    onDefaultLangChangeSub;
    onTranslationChangeSub;
    set translate(e) { e && (this.key = e, this.checkNodes()); }
    set translateParams(e) { b(this.currentParams, e) || (this.currentParams = e, this.checkNodes(!0)); }
    constructor(e, t, s) { this.translateService = e, this.element = t, this._ref = s, this.onTranslationChangeSub || (this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe(i => { i.lang === this.translateService.currentLang && this.checkNodes(!0, i.translations); })), this.onLangChangeSub || (this.onLangChangeSub = this.translateService.onLangChange.subscribe(i => { this.checkNodes(!0, i.translations); })), this.onDefaultLangChangeSub || (this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe(i => { this.checkNodes(!0); })); }
    ngAfterViewChecked() { this.checkNodes(); }
    checkNodes(e = !1, t) { let s = this.element.nativeElement.childNodes; s.length || (this.setContent(this.element.nativeElement, this.key), s = this.element.nativeElement.childNodes), s.forEach(i => { let a = i; if (a.nodeType === 3) {
        let h;
        if (e && (a.lastKey = null), u(a.lookupKey))
            h = a.lookupKey;
        else if (this.key)
            h = this.key;
        else {
            let l = this.getContent(a), f = l.trim();
            f.length && (a.lookupKey = f, l !== a.currentValue ? (h = f, a.originalContent = l || a.originalContent) : a.originalContent && (h = a.originalContent.trim()));
        }
        this.updateValue(h, a, t);
    } }); }
    updateValue(e, t, s) { if (e) {
        if (t.lastKey === e && this.lastParams === this.currentParams)
            return;
        this.lastParams = this.currentParams;
        let i = a => { (a !== e || !t.lastKey) && (t.lastKey = e), t.originalContent || (t.originalContent = this.getContent(t)), t.currentValue = u(a) ? a : t.originalContent || e, this.setContent(t, this.key ? t.currentValue : t.originalContent.replace(e, t.currentValue)), this._ref.markForCheck(); };
        if (u(s)) {
            let a = this.translateService.getParsedResult(s, e, this.currentParams);
            p(a) ? a.subscribe({ next: i }) : i(a);
        }
        else
            this.translateService.get(e, this.currentParams).subscribe(i);
    } }
    getContent(e) { return u(e.textContent) ? e.textContent : e.data; }
    setContent(e, t) { u(e.textContent) ? e.textContent = t : e.data = t; }
    ngOnDestroy() { this.onLangChangeSub && this.onLangChangeSub.unsubscribe(), this.onDefaultLangChangeSub && this.onDefaultLangChangeSub.unsubscribe(), this.onTranslationChangeSub && this.onTranslationChangeSub.unsubscribe(); }
    static \u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(m), r.\u0275\u0275directiveInject(r.ElementRef), r.\u0275\u0275directiveInject(r.ChangeDetectorRef)); };
    static \u0275dir = r.\u0275\u0275defineDirective({ type: n, selectors: [["", "translate", ""], ["", "ngx-translate", ""]], inputs: { translate: "translate", translateParams: "translateParams" } });
} return n; })(), le = (() => { class n {
    translate;
    _ref;
    value = "";
    lastKey = null;
    lastParams = [];
    onTranslationChange;
    onLangChange;
    onDefaultLangChange;
    constructor(e, t) { this.translate = e, this._ref = t; }
    updateValue(e, t, s) { let i = a => { this.value = a !== void 0 ? a : e, this.lastKey = e, this._ref.markForCheck(); }; if (s) {
        let a = this.translate.getParsedResult(s, e, t);
        p(a) ? a.subscribe(i) : i(a);
    } this.translate.get(e, t).subscribe(i); }
    transform(e, ...t) { if (!e || !e.length)
        return e; if (b(e, this.lastKey) && b(t, this.lastParams))
        return this.value; let s; if (u(t[0]) && t.length)
        if (_(t[0]) && t[0].length) {
            let i = t[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g, '"$2":').replace(/:(\s)?(')(.*?)(')/g, ':"$3"');
            try {
                s = JSON.parse(i);
            }
            catch (a) {
                throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${t[0]}`);
            }
        }
        else
            D(t[0]) && (s = t[0]); return this.lastKey = e, this.lastParams = t, this.updateValue(e, s), this._dispose(), this.onTranslationChange || (this.onTranslationChange = this.translate.onTranslationChange.subscribe(i => { this.lastKey && i.lang === this.translate.currentLang && (this.lastKey = null, this.updateValue(e, s, i.translations)); })), this.onLangChange || (this.onLangChange = this.translate.onLangChange.subscribe(i => { this.lastKey && (this.lastKey = null, this.updateValue(e, s, i.translations)); })), this.onDefaultLangChange || (this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(() => { this.lastKey && (this.lastKey = null, this.updateValue(e, s)); })), this.value; }
    _dispose() { typeof this.onTranslationChange < "u" && (this.onTranslationChange.unsubscribe(), this.onTranslationChange = void 0), typeof this.onLangChange < "u" && (this.onLangChange.unsubscribe(), this.onLangChange = void 0), typeof this.onDefaultLangChange < "u" && (this.onDefaultLangChange.unsubscribe(), this.onDefaultLangChange = void 0); }
    ngOnDestroy() { this._dispose(); }
    static \u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(m, 16), r.\u0275\u0275directiveInject(r.ChangeDetectorRef, 16)); };
    static \u0275pipe = r.\u0275\u0275definePipe({ name: "translate", type: n, pure: !1 });
    static \u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })();
function ue(n) { return n; }
var he = (n = {}) => X([n.loader || { provide: c, useClass: R }, n.compiler || { provide: g, useClass: O }, n.parser || { provide: d, useClass: x }, n.missingTranslationHandler || { provide: L, useClass: M }, v, { provide: E, useValue: n.isolate }, { provide: j, useValue: n.useDefaultLang }, { provide: I, useValue: n.extend }, { provide: A, useValue: n.defaultLanguage }, m]), fe = (() => { class n {
    static forRoot(e = {}) { return { ngModule: n, providers: [e.loader || { provide: c, useClass: R }, e.compiler || { provide: g, useClass: O }, e.parser || { provide: d, useClass: x }, e.missingTranslationHandler || { provide: L, useClass: M }, v, { provide: E, useValue: e.isolate }, { provide: j, useValue: e.useDefaultLang }, { provide: I, useValue: e.extend }, { provide: A, useValue: e.defaultLanguage }, m] }; }
    static forChild(e = {}) { return { ngModule: n, providers: [e.loader || { provide: c, useClass: R }, e.compiler || { provide: g, useClass: O }, e.parser || { provide: d, useClass: x }, e.missingTranslationHandler || { provide: L, useClass: M }, { provide: E, useValue: e.isolate }, { provide: j, useValue: e.useDefaultLang }, { provide: I, useValue: e.extend }, { provide: A, useValue: e.defaultLanguage }, m] }; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = r.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = r.\u0275\u0275defineInjector({});
} return n; })();
export { A as DEFAULT_LANGUAGE, M as FakeMissingTranslationHandler, E as ISOLATE_TRANSLATE_SERVICE, L as MissingTranslationHandler, g as TranslateCompiler, x as TranslateDefaultParser, oe as TranslateDirective, O as TranslateFakeCompiler, R as TranslateFakeLoader, c as TranslateLoader, fe as TranslateModule, d as TranslateParser, le as TranslatePipe, m as TranslateService, v as TranslateStore, j as USE_DEFAULT_LANG, I as USE_EXTEND, ue as _, b as equals, K as getValue, U as isArray, u as isDefined, D as isDict, Z as isFunction, w as isObject, _ as isString, N as mergeDeep, he as provideTranslateService, Q as setValue };
