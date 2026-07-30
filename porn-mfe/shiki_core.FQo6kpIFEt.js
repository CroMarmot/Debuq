import { a as k, b as w, c as vt, d as Yn, e as N } from "@nf-internal/chunk-JKOY2XUY";
var R = class extends Error {
    constructor(t) { super(t), this.name = "ShikiError"; }
};
function Xn(t) { return tt(t); }
function tt(t) { return Array.isArray(t) ? Jn(t) : t instanceof RegExp ? t : typeof t == "object" ? Qn(t) : t; }
function Jn(t) { let e = []; for (let n = 0, r = t.length; n < r; n++)
    e[n] = tt(t[n]); return e; }
function Qn(t) { let e = {}; for (let n in t)
    e[n] = tt(t[n]); return e; }
function It(t, ...e) { return e.forEach(n => { for (let r in n)
    t[r] = n[r]; }), t; }
function Ot(t) { let e = ~t.lastIndexOf("/") || ~t.lastIndexOf("\\"); return e === 0 ? t : ~e === t.length - 1 ? Ot(t.substring(0, t.length - 1)) : t.substr(~e + 1); }
var qe = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g, Se = class {
    static hasCaptures(t) { return t === null ? !1 : (qe.lastIndex = 0, qe.test(t)); }
    static replaceCaptures(t, e, n) { return t.replace(qe, (r, o, s, i) => { let a = n[parseInt(o || s, 10)]; if (a) {
        let l = e.substring(a.start, a.end);
        for (; l[0] === ".";)
            l = l.substring(1);
        switch (i) {
            case "downcase": return l.toLowerCase();
            case "upcase": return l.toUpperCase();
            default: return l;
        }
    }
    else
        return r; }); }
};
function Mt(t, e) { return t < e ? -1 : t > e ? 1 : 0; }
function Bt(t, e) { if (t === null && e === null)
    return 0; if (!t)
    return -1; if (!e)
    return 1; let n = t.length, r = e.length; if (n === r) {
    for (let o = 0; o < n; o++) {
        let s = Mt(t[o], e[o]);
        if (s !== 0)
            return s;
    }
    return 0;
} return n - r; }
function Rt(t) { return !!(/^#[0-9a-f]{6}$/i.test(t) || /^#[0-9a-f]{8}$/i.test(t) || /^#[0-9a-f]{3}$/i.test(t) || /^#[0-9a-f]{4}$/i.test(t)); }
function Gt(t) { return t.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&"); }
var Dt = class {
    constructor(t) { this.fn = t; }
    cache = new Map;
    get(t) { if (this.cache.has(t))
        return this.cache.get(t); let e = this.fn(t); return this.cache.set(t, e), e; }
}, ne = class {
    constructor(t, e, n) { this._colorMap = t, this._defaults = e, this._root = n; }
    static createFromRawTheme(t, e) { return this.createFromParsedTheme(tr(t), e); }
    static createFromParsedTheme(t, e) { return rr(t, e); }
    _cachedMatchRoot = new Dt(t => this._root.match(t));
    getColorMap() { return this._colorMap.getColorMap(); }
    getDefaults() { return this._defaults; }
    match(t) { if (t === null)
        return this._defaults; let e = t.scopeName, r = this._cachedMatchRoot.get(e).find(o => Zn(t.parent, o.parentScopes)); return r ? new $t(r.fontStyle, r.foreground, r.background) : null; }
}, Ve = class Ce {
    constructor(e, n) { this.parent = e, this.scopeName = n; }
    static push(e, n) { for (let r of n)
        e = new Ce(e, r); return e; }
    static from(...e) { let n = null; for (let r = 0; r < e.length; r++)
        n = new Ce(n, e[r]); return n; }
    push(e) { return new Ce(this, e); }
    getSegments() { let e = this, n = []; for (; e;)
        n.push(e.scopeName), e = e.parent; return n.reverse(), n; }
    toString() { return this.getSegments().join(" "); }
    extends(e) { return this === e ? !0 : this.parent === null ? !1 : this.parent.extends(e); }
    getExtensionIfDefined(e) { let n = [], r = this; for (; r && r !== e;)
        n.push(r.scopeName), r = r.parent; return r === e ? n.reverse() : void 0; }
};
function Zn(t, e) { if (e.length === 0)
    return !0; for (let n = 0; n < e.length; n++) {
    let r = e[n], o = !1;
    if (r === ">") {
        if (n === e.length - 1)
            return !1;
        r = e[++n], o = !0;
    }
    for (; t && !er(t.scopeName, r);) {
        if (o)
            return !1;
        t = t.parent;
    }
    if (!t)
        return !1;
    t = t.parent;
} return !0; }
function er(t, e) { return e === t || t.startsWith(e) && t[e.length] === "."; }
var $t = class {
    constructor(t, e, n) { this.fontStyle = t, this.foregroundId = e, this.backgroundId = n; }
};
function tr(t) { if (!t)
    return []; if (!t.settings || !Array.isArray(t.settings))
    return []; let e = t.settings, n = [], r = 0; for (let o = 0, s = e.length; o < s; o++) {
    let i = e[o];
    if (!i.settings)
        continue;
    let a;
    if (typeof i.scope == "string") {
        let h = i.scope;
        h = h.replace(/^[,]+/, ""), h = h.replace(/[,]+$/, ""), a = h.split(",");
    }
    else
        Array.isArray(i.scope) ? a = i.scope : a = [""];
    let l = -1;
    if (typeof i.settings.fontStyle == "string") {
        l = 0;
        let h = i.settings.fontStyle.split(" ");
        for (let d = 0, p = h.length; d < p; d++)
            switch (h[d]) {
                case "italic":
                    l = l | 1;
                    break;
                case "bold":
                    l = l | 2;
                    break;
                case "underline":
                    l = l | 4;
                    break;
                case "strikethrough":
                    l = l | 8;
                    break;
            }
    }
    let c = null;
    typeof i.settings.foreground == "string" && Rt(i.settings.foreground) && (c = i.settings.foreground);
    let u = null;
    typeof i.settings.background == "string" && Rt(i.settings.background) && (u = i.settings.background);
    for (let h = 0, d = a.length; h < d; h++) {
        let m = a[h].trim().split(" "), b = m[m.length - 1], _ = null;
        m.length > 1 && (_ = m.slice(0, m.length - 1), _.reverse()), n[r++] = new nr(b, _, o, l, c, u);
    }
} return n; }
var nr = class {
    constructor(t, e, n, r, o, s) { this.scope = t, this.parentScopes = e, this.index = n, this.fontStyle = r, this.foreground = o, this.background = s; }
}, L = (t => (t[t.NotSet = -1] = "NotSet", t[t.None = 0] = "None", t[t.Italic = 1] = "Italic", t[t.Bold = 2] = "Bold", t[t.Underline = 4] = "Underline", t[t.Strikethrough = 8] = "Strikethrough", t))(L || {});
function rr(t, e) { t.sort((l, c) => { let u = Mt(l.scope, c.scope); return u !== 0 || (u = Bt(l.parentScopes, c.parentScopes), u !== 0) ? u : l.index - c.index; }); let n = 0, r = "#000000", o = "#ffffff"; for (; t.length >= 1 && t[0].scope === "";) {
    let l = t.shift();
    l.fontStyle !== -1 && (n = l.fontStyle), l.foreground !== null && (r = l.foreground), l.background !== null && (o = l.background);
} let s = new or(e), i = new $t(n, s.getId(r), s.getId(o)), a = new ir(new Ye(0, null, -1, 0, 0), []); for (let l = 0, c = t.length; l < c; l++) {
    let u = t[l];
    a.insert(0, u.scope, u.parentScopes, u.fontStyle, s.getId(u.foreground), s.getId(u.background));
} return new ne(s, i, a); }
var or = class {
    _isFrozen;
    _lastColorId;
    _id2color;
    _color2id;
    constructor(t) { if (this._lastColorId = 0, this._id2color = [], this._color2id = Object.create(null), Array.isArray(t)) {
        this._isFrozen = !0;
        for (let e = 0, n = t.length; e < n; e++)
            this._color2id[t[e]] = e, this._id2color[e] = t[e];
    }
    else
        this._isFrozen = !1; }
    getId(t) { if (t === null)
        return 0; t = t.toUpperCase(); let e = this._color2id[t]; if (e)
        return e; if (this._isFrozen)
        throw new Error(`Missing color in color map - ${t}`); return e = ++this._lastColorId, this._color2id[t] = e, this._id2color[e] = t, e; }
    getColorMap() { return this._id2color.slice(0); }
}, sr = Object.freeze([]), Ye = class jt {
    scopeDepth;
    parentScopes;
    fontStyle;
    foreground;
    background;
    constructor(e, n, r, o, s) { this.scopeDepth = e, this.parentScopes = n || sr, this.fontStyle = r, this.foreground = o, this.background = s; }
    clone() { return new jt(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background); }
    static cloneArr(e) { let n = []; for (let r = 0, o = e.length; r < o; r++)
        n[r] = e[r].clone(); return n; }
    acceptOverwrite(e, n, r, o) { this.scopeDepth > e ? console.log("how did this happen?") : this.scopeDepth = e, n !== -1 && (this.fontStyle = n), r !== 0 && (this.foreground = r), o !== 0 && (this.background = o); }
}, ir = class Xe {
    constructor(e, n = [], r = {}) { this._mainRule = e, this._children = r, this._rulesWithParentScopes = n; }
    _rulesWithParentScopes;
    static _cmpBySpecificity(e, n) { if (e.scopeDepth !== n.scopeDepth)
        return n.scopeDepth - e.scopeDepth; let r = 0, o = 0; for (; e.parentScopes[r] === ">" && r++, n.parentScopes[o] === ">" && o++, !(r >= e.parentScopes.length || o >= n.parentScopes.length);) {
        let s = n.parentScopes[o].length - e.parentScopes[r].length;
        if (s !== 0)
            return s;
        r++, o++;
    } return n.parentScopes.length - e.parentScopes.length; }
    match(e) { if (e !== "") {
        let r = e.indexOf("."), o, s;
        if (r === -1 ? (o = e, s = "") : (o = e.substring(0, r), s = e.substring(r + 1)), this._children.hasOwnProperty(o))
            return this._children[o].match(s);
    } let n = this._rulesWithParentScopes.concat(this._mainRule); return n.sort(Xe._cmpBySpecificity), n; }
    insert(e, n, r, o, s, i) { if (n === "") {
        this._doInsertHere(e, r, o, s, i);
        return;
    } let a = n.indexOf("."), l, c; a === -1 ? (l = n, c = "") : (l = n.substring(0, a), c = n.substring(a + 1)); let u; this._children.hasOwnProperty(l) ? u = this._children[l] : (u = new Xe(this._mainRule.clone(), Ye.cloneArr(this._rulesWithParentScopes)), this._children[l] = u), u.insert(e + 1, c, r, o, s, i); }
    _doInsertHere(e, n, r, o, s) { if (n === null) {
        this._mainRule.acceptOverwrite(e, r, o, s);
        return;
    } for (let i = 0, a = this._rulesWithParentScopes.length; i < a; i++) {
        let l = this._rulesWithParentScopes[i];
        if (Bt(l.parentScopes, n) === 0) {
            l.acceptOverwrite(e, r, o, s);
            return;
        }
    } r === -1 && (r = this._mainRule.fontStyle), o === 0 && (o = this._mainRule.foreground), s === 0 && (s = this._mainRule.background), this._rulesWithParentScopes.push(new Ye(e, n, r, o, s)); }
}, U = class B {
    static toBinaryStr(e) { return e.toString(2).padStart(32, "0"); }
    static print(e) { let n = B.getLanguageId(e), r = B.getTokenType(e), o = B.getFontStyle(e), s = B.getForeground(e), i = B.getBackground(e); console.log({ languageId: n, tokenType: r, fontStyle: o, foreground: s, background: i }); }
    static getLanguageId(e) { return (e & 255) >>> 0; }
    static getTokenType(e) { return (e & 768) >>> 8; }
    static containsBalancedBrackets(e) { return (e & 1024) !== 0; }
    static getFontStyle(e) { return (e & 30720) >>> 11; }
    static getForeground(e) { return (e & 16744448) >>> 15; }
    static getBackground(e) { return (e & 4278190080) >>> 24; }
    static set(e, n, r, o, s, i, a) { let l = B.getLanguageId(e), c = B.getTokenType(e), u = B.containsBalancedBrackets(e) ? 1 : 0, h = B.getFontStyle(e), d = B.getForeground(e), p = B.getBackground(e); return n !== 0 && (l = n), r !== 8 && (c = r), o !== null && (u = o ? 1 : 0), s !== -1 && (h = s), i !== 0 && (d = i), a !== 0 && (p = a), (l << 0 | c << 8 | u << 10 | h << 11 | d << 15 | p << 24) >>> 0; }
};
function we(t, e) { let n = [], r = ar(t), o = r.next(); for (; o !== null;) {
    let l = 0;
    if (o.length === 2 && o.charAt(1) === ":") {
        switch (o.charAt(0)) {
            case "R":
                l = 1;
                break;
            case "L":
                l = -1;
                break;
            default: console.log(`Unknown priority ${o} in scope selector`);
        }
        o = r.next();
    }
    let c = i();
    if (n.push({ matcher: c, priority: l }), o !== ",")
        break;
    o = r.next();
} return n; function s() { if (o === "-") {
    o = r.next();
    let l = s();
    return c => !!l && !l(c);
} if (o === "(") {
    o = r.next();
    let l = a();
    return o === ")" && (o = r.next()), l;
} if (xt(o)) {
    let l = [];
    do
        l.push(o), o = r.next();
    while (xt(o));
    return c => e(l, c);
} return null; } function i() { let l = [], c = s(); for (; c;)
    l.push(c), c = s(); return u => l.every(h => h(u)); } function a() { let l = [], c = i(); for (; c && (l.push(c), o === "|" || o === ",");) {
    do
        o = r.next();
    while (o === "|" || o === ",");
    c = i();
} return u => l.some(h => h(u)); } }
function xt(t) { return !!t && !!t.match(/[\w\.:]+/); }
function ar(t) { let e = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g, n = e.exec(t); return { next: () => { if (!n)
        return null; let r = n[0]; return n = e.exec(t), r; } }; }
function Ft(t) { typeof t.dispose == "function" && t.dispose(); }
var re = class {
    constructor(t) { this.scopeName = t; }
    toKey() { return this.scopeName; }
}, lr = class {
    constructor(t, e) { this.scopeName = t, this.ruleName = e; }
    toKey() { return `${this.scopeName}#${this.ruleName}`; }
}, cr = class {
    _references = [];
    _seenReferenceKeys = new Set;
    get references() { return this._references; }
    visitedRule = new Set;
    add(t) { let e = t.toKey(); this._seenReferenceKeys.has(e) || (this._seenReferenceKeys.add(e), this._references.push(t)); }
}, ur = class {
    constructor(t, e) { this.repo = t, this.initialScopeName = e, this.seenFullScopeRequests.add(this.initialScopeName), this.Q = [new re(this.initialScopeName)]; }
    seenFullScopeRequests = new Set;
    seenPartialScopeRequests = new Set;
    Q;
    processQueue() { let t = this.Q; this.Q = []; let e = new cr; for (let n of t)
        hr(n, this.initialScopeName, this.repo, e); for (let n of e.references)
        if (n instanceof re) {
            if (this.seenFullScopeRequests.has(n.scopeName))
                continue;
            this.seenFullScopeRequests.add(n.scopeName), this.Q.push(n);
        }
        else {
            if (this.seenFullScopeRequests.has(n.scopeName) || this.seenPartialScopeRequests.has(n.toKey()))
                continue;
            this.seenPartialScopeRequests.add(n.toKey()), this.Q.push(n);
        } }
};
function hr(t, e, n, r) { let o = n.lookup(t.scopeName); if (!o) {
    if (t.scopeName === e)
        throw new Error(`No grammar provided for <${e}>`);
    return;
} let s = n.lookup(e); t instanceof re ? ke({ baseGrammar: s, selfGrammar: o }, r) : Je(t.ruleName, { baseGrammar: s, selfGrammar: o, repository: o.repository }, r); let i = n.injections(t.scopeName); if (i)
    for (let a of i)
        r.add(new re(a)); }
function Je(t, e, n) { if (e.repository && e.repository[t]) {
    let r = e.repository[t];
    ve([r], e, n);
} }
function ke(t, e) { t.selfGrammar.patterns && Array.isArray(t.selfGrammar.patterns) && ve(t.selfGrammar.patterns, w(k({}, t), { repository: t.selfGrammar.repository }), e), t.selfGrammar.injections && ve(Object.values(t.selfGrammar.injections), w(k({}, t), { repository: t.selfGrammar.repository }), e); }
function ve(t, e, n) { for (let r of t) {
    if (n.visitedRule.has(r))
        continue;
    n.visitedRule.add(r);
    let o = r.repository ? It({}, e.repository, r.repository) : e.repository;
    Array.isArray(r.patterns) && ve(r.patterns, w(k({}, e), { repository: o }), n);
    let s = r.include;
    if (!s)
        continue;
    let i = Wt(s);
    switch (i.kind) {
        case 0:
            ke(w(k({}, e), { selfGrammar: e.baseGrammar }), n);
            break;
        case 1:
            ke(e, n);
            break;
        case 2:
            Je(i.ruleName, w(k({}, e), { repository: o }), n);
            break;
        case 3:
        case 4:
            let a = i.scopeName === e.selfGrammar.scopeName ? e.selfGrammar : i.scopeName === e.baseGrammar.scopeName ? e.baseGrammar : void 0;
            if (a) {
                let l = { baseGrammar: e.baseGrammar, selfGrammar: a, repository: o };
                i.kind === 4 ? Je(i.ruleName, l, n) : ke(l, n);
            }
            else
                i.kind === 4 ? n.add(new lr(i.scopeName, i.ruleName)) : n.add(new re(i.scopeName));
            break;
    }
} }
var fr = class {
    kind = 0;
}, dr = class {
    kind = 1;
}, pr = class {
    constructor(t) { this.ruleName = t; }
    kind = 2;
}, mr = class {
    constructor(t) { this.scopeName = t; }
    kind = 3;
}, gr = class {
    constructor(t, e) { this.scopeName = t, this.ruleName = e; }
    kind = 4;
};
function Wt(t) { if (t === "$base")
    return new fr; if (t === "$self")
    return new dr; let e = t.indexOf("#"); if (e === -1)
    return new mr(t); if (e === 0)
    return new pr(t.substring(1)); {
    let n = t.substring(0, e), r = t.substring(e + 1);
    return new gr(n, r);
} }
var yr = /\\(\d+)/, Tt = /\\(\d+)/g, ks = Symbol("RuleId"), _r = -1, zt = -2;
var ie = class {
    $location;
    id;
    _nameIsCapturing;
    _name;
    _contentNameIsCapturing;
    _contentName;
    constructor(t, e, n, r) { this.$location = t, this.id = e, this._name = n || null, this._nameIsCapturing = Se.hasCaptures(this._name), this._contentName = r || null, this._contentNameIsCapturing = Se.hasCaptures(this._contentName); }
    get debugName() { let t = this.$location ? `${Ot(this.$location.filename)}:${this.$location.line}` : "unknown"; return `${this.constructor.name}#${this.id} @ ${t}`; }
    getName(t, e) { return !this._nameIsCapturing || this._name === null || t === null || e === null ? this._name : Se.replaceCaptures(this._name, t, e); }
    getContentName(t, e) { return !this._contentNameIsCapturing || this._contentName === null ? this._contentName : Se.replaceCaptures(this._contentName, t, e); }
}, br = class extends ie {
    retokenizeCapturedWithRuleId;
    constructor(t, e, n, r, o) { super(t, e, n, r), this.retokenizeCapturedWithRuleId = o; }
    dispose() { }
    collectPatterns(t, e) { throw new Error("Not supported!"); }
    compile(t, e) { throw new Error("Not supported!"); }
    compileAG(t, e, n, r) { throw new Error("Not supported!"); }
}, Sr = class extends ie {
    _match;
    captures;
    _cachedCompiledPatterns;
    constructor(t, e, n, r, o) { super(t, e, n, null), this._match = new oe(r, this.id), this.captures = o, this._cachedCompiledPatterns = null; }
    dispose() { this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null); }
    get debugMatchRegExp() { return `${this._match.source}`; }
    collectPatterns(t, e) { e.push(this._match); }
    compile(t, e) { return this._getCachedCompiledPatterns(t).compile(t); }
    compileAG(t, e, n, r) { return this._getCachedCompiledPatterns(t).compileAG(t, n, r); }
    _getCachedCompiledPatterns(t) { return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new se, this.collectPatterns(t, this._cachedCompiledPatterns)), this._cachedCompiledPatterns; }
}, Nt = class extends ie {
    hasMissingPatterns;
    patterns;
    _cachedCompiledPatterns;
    constructor(t, e, n, r, o) { super(t, e, n, r), this.patterns = o.patterns, this.hasMissingPatterns = o.hasMissingPatterns, this._cachedCompiledPatterns = null; }
    dispose() { this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null); }
    collectPatterns(t, e) { for (let n of this.patterns)
        t.getRule(n).collectPatterns(t, e); }
    compile(t, e) { return this._getCachedCompiledPatterns(t).compile(t); }
    compileAG(t, e, n, r) { return this._getCachedCompiledPatterns(t).compileAG(t, n, r); }
    _getCachedCompiledPatterns(t) { return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new se, this.collectPatterns(t, this._cachedCompiledPatterns)), this._cachedCompiledPatterns; }
}, Qe = class extends ie {
    _begin;
    beginCaptures;
    _end;
    endHasBackReferences;
    endCaptures;
    applyEndPatternLast;
    hasMissingPatterns;
    patterns;
    _cachedCompiledPatterns;
    constructor(t, e, n, r, o, s, i, a, l, c) { super(t, e, n, r), this._begin = new oe(o, this.id), this.beginCaptures = s, this._end = new oe(i || "\uFFFF", -1), this.endHasBackReferences = this._end.hasBackReferences, this.endCaptures = a, this.applyEndPatternLast = l || !1, this.patterns = c.patterns, this.hasMissingPatterns = c.hasMissingPatterns, this._cachedCompiledPatterns = null; }
    dispose() { this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null); }
    get debugBeginRegExp() { return `${this._begin.source}`; }
    get debugEndRegExp() { return `${this._end.source}`; }
    getEndWithResolvedBackReferences(t, e) { return this._end.resolveBackReferences(t, e); }
    collectPatterns(t, e) { e.push(this._begin); }
    compile(t, e) { return this._getCachedCompiledPatterns(t, e).compile(t); }
    compileAG(t, e, n, r) { return this._getCachedCompiledPatterns(t, e).compileAG(t, n, r); }
    _getCachedCompiledPatterns(t, e) { if (!this._cachedCompiledPatterns) {
        this._cachedCompiledPatterns = new se;
        for (let n of this.patterns)
            t.getRule(n).collectPatterns(t, this._cachedCompiledPatterns);
        this.applyEndPatternLast ? this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end) : this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
    } return this._end.hasBackReferences && (this.applyEndPatternLast ? this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, e) : this._cachedCompiledPatterns.setSource(0, e)), this._cachedCompiledPatterns; }
}, Re = class extends ie {
    _begin;
    beginCaptures;
    whileCaptures;
    _while;
    whileHasBackReferences;
    hasMissingPatterns;
    patterns;
    _cachedCompiledPatterns;
    _cachedCompiledWhilePatterns;
    constructor(t, e, n, r, o, s, i, a, l) { super(t, e, n, r), this._begin = new oe(o, this.id), this.beginCaptures = s, this.whileCaptures = a, this._while = new oe(i, zt), this.whileHasBackReferences = this._while.hasBackReferences, this.patterns = l.patterns, this.hasMissingPatterns = l.hasMissingPatterns, this._cachedCompiledPatterns = null, this._cachedCompiledWhilePatterns = null; }
    dispose() { this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null), this._cachedCompiledWhilePatterns && (this._cachedCompiledWhilePatterns.dispose(), this._cachedCompiledWhilePatterns = null); }
    get debugBeginRegExp() { return `${this._begin.source}`; }
    get debugWhileRegExp() { return `${this._while.source}`; }
    getWhileWithResolvedBackReferences(t, e) { return this._while.resolveBackReferences(t, e); }
    collectPatterns(t, e) { e.push(this._begin); }
    compile(t, e) { return this._getCachedCompiledPatterns(t).compile(t); }
    compileAG(t, e, n, r) { return this._getCachedCompiledPatterns(t).compileAG(t, n, r); }
    _getCachedCompiledPatterns(t) { if (!this._cachedCompiledPatterns) {
        this._cachedCompiledPatterns = new se;
        for (let e of this.patterns)
            t.getRule(e).collectPatterns(t, this._cachedCompiledPatterns);
    } return this._cachedCompiledPatterns; }
    compileWhile(t, e) { return this._getCachedCompiledWhilePatterns(t, e).compile(t); }
    compileWhileAG(t, e, n, r) { return this._getCachedCompiledWhilePatterns(t, e).compileAG(t, n, r); }
    _getCachedCompiledWhilePatterns(t, e) { return this._cachedCompiledWhilePatterns || (this._cachedCompiledWhilePatterns = new se, this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while)), this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, e || "\uFFFF"), this._cachedCompiledWhilePatterns; }
}, Ht = class I {
    static createCaptureRule(e, n, r, o, s) { return e.registerRule(i => new br(n, i, r, o, s)); }
    static getCompiledRuleId(e, n, r) { return e.id || n.registerRule(o => { if (e.id = o, e.match)
        return new Sr(e.$vscodeTextmateLocation, e.id, e.name, e.match, I._compileCaptures(e.captures, n, r)); if (typeof e.begin > "u") {
        e.repository && (r = It({}, r, e.repository));
        let s = e.patterns;
        return typeof s > "u" && e.include && (s = [{ include: e.include }]), new Nt(e.$vscodeTextmateLocation, e.id, e.name, e.contentName, I._compilePatterns(s, n, r));
    } return e.while ? new Re(e.$vscodeTextmateLocation, e.id, e.name, e.contentName, e.begin, I._compileCaptures(e.beginCaptures || e.captures, n, r), e.while, I._compileCaptures(e.whileCaptures || e.captures, n, r), I._compilePatterns(e.patterns, n, r)) : new Qe(e.$vscodeTextmateLocation, e.id, e.name, e.contentName, e.begin, I._compileCaptures(e.beginCaptures || e.captures, n, r), e.end, I._compileCaptures(e.endCaptures || e.captures, n, r), e.applyEndPatternLast, I._compilePatterns(e.patterns, n, r)); }), e.id; }
    static _compileCaptures(e, n, r) { let o = []; if (e) {
        let s = 0;
        for (let i in e) {
            if (i === "$vscodeTextmateLocation")
                continue;
            let a = parseInt(i, 10);
            a > s && (s = a);
        }
        for (let i = 0; i <= s; i++)
            o[i] = null;
        for (let i in e) {
            if (i === "$vscodeTextmateLocation")
                continue;
            let a = parseInt(i, 10), l = 0;
            e[i].patterns && (l = I.getCompiledRuleId(e[i], n, r)), o[a] = I.createCaptureRule(n, e[i].$vscodeTextmateLocation, e[i].name, e[i].contentName, l);
        }
    } return o; }
    static _compilePatterns(e, n, r) { let o = []; if (e)
        for (let s = 0, i = e.length; s < i; s++) {
            let a = e[s], l = -1;
            if (a.include) {
                let c = Wt(a.include);
                switch (c.kind) {
                    case 0:
                    case 1:
                        l = I.getCompiledRuleId(r[a.include], n, r);
                        break;
                    case 2:
                        let u = r[c.ruleName];
                        u && (l = I.getCompiledRuleId(u, n, r));
                        break;
                    case 3:
                    case 4:
                        let h = c.scopeName, d = c.kind === 4 ? c.ruleName : null, p = n.getExternalGrammar(h, r);
                        if (p)
                            if (d) {
                                let m = p.repository[d];
                                m && (l = I.getCompiledRuleId(m, n, p.repository));
                            }
                            else
                                l = I.getCompiledRuleId(p.repository.$self, n, p.repository);
                        break;
                }
            }
            else
                l = I.getCompiledRuleId(a, n, r);
            if (l !== -1) {
                let c = n.getRule(l), u = !1;
                if ((c instanceof Nt || c instanceof Qe || c instanceof Re) && c.hasMissingPatterns && c.patterns.length === 0 && (u = !0), u)
                    continue;
                o.push(l);
            }
        } return { patterns: o, hasMissingPatterns: (e ? e.length : 0) !== o.length }; }
}, oe = class Ut {
    source;
    ruleId;
    hasAnchor;
    hasBackReferences;
    _anchorCache;
    constructor(e, n) { if (e && typeof e == "string") {
        let r = e.length, o = 0, s = [], i = !1;
        for (let a = 0; a < r; a++)
            if (e.charAt(a) === "\\" && a + 1 < r) {
                let c = e.charAt(a + 1);
                c === "z" ? (s.push(e.substring(o, a)), s.push("$(?!\\n)(?<!\\n)"), o = a + 2) : (c === "A" || c === "G") && (i = !0), a++;
            }
        this.hasAnchor = i, o === 0 ? this.source = e : (s.push(e.substring(o, r)), this.source = s.join(""));
    }
    else
        this.hasAnchor = !1, this.source = e; this.hasAnchor ? this._anchorCache = this._buildAnchorCache() : this._anchorCache = null, this.ruleId = n, typeof this.source == "string" ? this.hasBackReferences = yr.test(this.source) : this.hasBackReferences = !1; }
    clone() { return new Ut(this.source, this.ruleId); }
    setSource(e) { this.source !== e && (this.source = e, this.hasAnchor && (this._anchorCache = this._buildAnchorCache())); }
    resolveBackReferences(e, n) { if (typeof this.source != "string")
        throw new Error("This method should only be called if the source is a string"); let r = n.map(o => e.substring(o.start, o.end)); return Tt.lastIndex = 0, this.source.replace(Tt, (o, s) => Gt(r[parseInt(s, 10)] || "")); }
    _buildAnchorCache() { if (typeof this.source != "string")
        throw new Error("This method should only be called if the source is a string"); let e = [], n = [], r = [], o = [], s, i, a, l; for (s = 0, i = this.source.length; s < i; s++)
        a = this.source.charAt(s), e[s] = a, n[s] = a, r[s] = a, o[s] = a, a === "\\" && s + 1 < i && (l = this.source.charAt(s + 1), l === "A" ? (e[s + 1] = "\uFFFF", n[s + 1] = "\uFFFF", r[s + 1] = "A", o[s + 1] = "A") : l === "G" ? (e[s + 1] = "\uFFFF", n[s + 1] = "G", r[s + 1] = "\uFFFF", o[s + 1] = "G") : (e[s + 1] = l, n[s + 1] = l, r[s + 1] = l, o[s + 1] = l), s++); return { A0_G0: e.join(""), A0_G1: n.join(""), A1_G0: r.join(""), A1_G1: o.join("") }; }
    resolveAnchors(e, n) { return !this.hasAnchor || !this._anchorCache || typeof this.source != "string" ? this.source : e ? n ? this._anchorCache.A1_G1 : this._anchorCache.A1_G0 : n ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0; }
}, se = class {
    _items;
    _hasAnchors;
    _cached;
    _anchorCache;
    constructor() { this._items = [], this._hasAnchors = !1, this._cached = null, this._anchorCache = { A0_G0: null, A0_G1: null, A1_G0: null, A1_G1: null }; }
    dispose() { this._disposeCaches(); }
    _disposeCaches() { this._cached && (this._cached.dispose(), this._cached = null), this._anchorCache.A0_G0 && (this._anchorCache.A0_G0.dispose(), this._anchorCache.A0_G0 = null), this._anchorCache.A0_G1 && (this._anchorCache.A0_G1.dispose(), this._anchorCache.A0_G1 = null), this._anchorCache.A1_G0 && (this._anchorCache.A1_G0.dispose(), this._anchorCache.A1_G0 = null), this._anchorCache.A1_G1 && (this._anchorCache.A1_G1.dispose(), this._anchorCache.A1_G1 = null); }
    push(t) { this._items.push(t), this._hasAnchors = this._hasAnchors || t.hasAnchor; }
    unshift(t) { this._items.unshift(t), this._hasAnchors = this._hasAnchors || t.hasAnchor; }
    length() { return this._items.length; }
    setSource(t, e) { this._items[t].source !== e && (this._disposeCaches(), this._items[t].setSource(e)); }
    compile(t) { if (!this._cached) {
        let e = this._items.map(n => n.source);
        this._cached = new At(t, e, this._items.map(n => n.ruleId));
    } return this._cached; }
    compileAG(t, e, n) { return this._hasAnchors ? e ? n ? (this._anchorCache.A1_G1 || (this._anchorCache.A1_G1 = this._resolveAnchors(t, e, n)), this._anchorCache.A1_G1) : (this._anchorCache.A1_G0 || (this._anchorCache.A1_G0 = this._resolveAnchors(t, e, n)), this._anchorCache.A1_G0) : n ? (this._anchorCache.A0_G1 || (this._anchorCache.A0_G1 = this._resolveAnchors(t, e, n)), this._anchorCache.A0_G1) : (this._anchorCache.A0_G0 || (this._anchorCache.A0_G0 = this._resolveAnchors(t, e, n)), this._anchorCache.A0_G0) : this.compile(t); }
    _resolveAnchors(t, e, n) { let r = this._items.map(o => o.resolveAnchors(e, n)); return new At(t, r, this._items.map(o => o.ruleId)); }
}, At = class {
    constructor(t, e, n) { this.regExps = e, this.rules = n, this.scanner = t.createOnigScanner(e); }
    scanner;
    dispose() { typeof this.scanner.dispose == "function" && this.scanner.dispose(); }
    toString() {
        let t = [];
        for (let e = 0, n = this.rules.length; e < n; e++)
            t.push("   - " + this.rules[e] + ": " + this.regExps[e]);
        return t.join(`
`);
    }
    findNextMatchSync(t, e, n) { let r = this.scanner.findNextMatchSync(t, e, n); return r ? { ruleId: this.rules[r.index], captureIndices: r.captureIndices } : null; }
}, Ke = class {
    constructor(t, e) { this.languageId = t, this.tokenType = e; }
}, Cr = class Ze {
    _defaultAttributes;
    _embeddedLanguagesMatcher;
    constructor(e, n) { this._defaultAttributes = new Ke(e, 8), this._embeddedLanguagesMatcher = new kr(Object.entries(n || {})); }
    getDefaultAttributes() { return this._defaultAttributes; }
    getBasicScopeAttributes(e) { return e === null ? Ze._NULL_SCOPE_METADATA : this._getBasicScopeAttributes.get(e); }
    static _NULL_SCOPE_METADATA = new Ke(0, 0);
    _getBasicScopeAttributes = new Dt(e => { let n = this._scopeToLanguage(e), r = this._toStandardTokenType(e); return new Ke(n, r); });
    _scopeToLanguage(e) { return this._embeddedLanguagesMatcher.match(e) || 0; }
    _toStandardTokenType(e) { let n = e.match(Ze.STANDARD_TOKEN_TYPE_REGEXP); if (!n)
        return 8; switch (n[1]) {
        case "comment": return 1;
        case "string": return 2;
        case "regex": return 3;
        case "meta.embedded": return 0;
    } throw new Error("Unexpected match for standard token type!"); }
    static STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/;
}, kr = class {
    values;
    scopesRegExp;
    constructor(t) { if (t.length === 0)
        this.values = null, this.scopesRegExp = null;
    else {
        this.values = new Map(t);
        let e = t.map(([n, r]) => Gt(n));
        e.sort(), e.reverse(), this.scopesRegExp = new RegExp(`^((${e.join(")|(")}))($|\\.)`, "");
    } }
    match(t) { if (!this.scopesRegExp)
        return; let e = t.match(this.scopesRegExp); if (e)
        return this.values.get(e[1]); }
}, ws = { InDebugMode: typeof process < "u" && !!process.env.VSCODE_TEXTMATE_DEBUG }, qt = !1, Et = class {
    constructor(t, e) { this.stack = t, this.stoppedEarly = e; }
};
function Vt(t, e, n, r, o, s, i, a) { let l = e.content.length, c = !1, u = -1; if (i) {
    let p = wr(t, e, n, r, o, s);
    o = p.stack, r = p.linePos, n = p.isFirstLine, u = p.anchorPosition;
} let h = Date.now(); for (; !c;) {
    if (a !== 0 && Date.now() - h > a)
        return new Et(o, !0);
    d();
} return new Et(o, !1); function d() { let p = vr(t, e, n, r, o, u); if (!p) {
    s.produce(o, l), c = !0;
    return;
} let m = p.captureIndices, b = p.matchedRuleId, _ = m && m.length > 0 ? m[0].end > r : !1; if (b === _r) {
    let y = o.getRule(t);
    s.produce(o, m[0].start), o = o.withContentNameScopesList(o.nameScopesList), ee(t, e, n, o, s, y.endCaptures, m), s.produce(o, m[0].end);
    let g = o;
    if (o = o.parent, u = g.getAnchorPos(), !_ && g.getEnterPos() === r) {
        o = g, s.produce(o, l), c = !0;
        return;
    }
}
else {
    let y = t.getRule(b);
    s.produce(o, m[0].start);
    let g = o, C = y.getName(e.content, m), x = o.contentNameScopesList.pushAttributed(C, t);
    if (o = o.push(b, r, u, m[0].end === l, null, x, x), y instanceof Qe) {
        let P = y;
        ee(t, e, n, o, s, P.beginCaptures, m), s.produce(o, m[0].end), u = m[0].end;
        let M = P.getContentName(e.content, m), H = x.pushAttributed(M, t);
        if (o = o.withContentNameScopesList(H), P.endHasBackReferences && (o = o.withEndRule(P.getEndWithResolvedBackReferences(e.content, m))), !_ && g.hasSameRuleAs(o)) {
            o = o.pop(), s.produce(o, l), c = !0;
            return;
        }
    }
    else if (y instanceof Re) {
        let P = y;
        ee(t, e, n, o, s, P.beginCaptures, m), s.produce(o, m[0].end), u = m[0].end;
        let M = P.getContentName(e.content, m), H = x.pushAttributed(M, t);
        if (o = o.withContentNameScopesList(H), P.whileHasBackReferences && (o = o.withEndRule(P.getWhileWithResolvedBackReferences(e.content, m))), !_ && g.hasSameRuleAs(o)) {
            o = o.pop(), s.produce(o, l), c = !0;
            return;
        }
    }
    else if (ee(t, e, n, o, s, y.captures, m), s.produce(o, m[0].end), o = o.pop(), !_) {
        o = o.safePop(), s.produce(o, l), c = !0;
        return;
    }
} m[0].end > r && (r = m[0].end, n = !1); } }
function wr(t, e, n, r, o, s) { let i = o.beginRuleCapturedEOL ? 0 : -1, a = []; for (let l = o; l; l = l.pop()) {
    let c = l.getRule(t);
    c instanceof Re && a.push({ rule: c, stack: l });
} for (let l = a.pop(); l; l = a.pop()) {
    let { ruleScanner: c, findOptions: u } = Tr(l.rule, t, l.stack.endRule, n, r === i), h = c.findNextMatchSync(e, r, u);
    if (h) {
        if (h.ruleId !== zt) {
            o = l.stack.pop();
            break;
        }
        h.captureIndices && h.captureIndices.length && (s.produce(l.stack, h.captureIndices[0].start), ee(t, e, n, l.stack, s, l.rule.whileCaptures, h.captureIndices), s.produce(l.stack, h.captureIndices[0].end), i = h.captureIndices[0].end, h.captureIndices[0].end > r && (r = h.captureIndices[0].end, n = !1));
    }
    else {
        o = l.stack.pop();
        break;
    }
} return { stack: o, linePos: r, anchorPosition: i, isFirstLine: n }; }
function vr(t, e, n, r, o, s) { let i = Rr(t, e, n, r, o, s), a = t.getInjections(); if (a.length === 0)
    return i; let l = xr(a, t, e, n, r, o, s); if (!l)
    return i; if (!i)
    return l; let c = i.captureIndices[0].start, u = l.captureIndices[0].start; return u < c || l.priorityMatch && u === c ? l : i; }
function Rr(t, e, n, r, o, s) { let i = o.getRule(t), { ruleScanner: a, findOptions: l } = Kt(i, t, o.endRule, n, r === s), c = a.findNextMatchSync(e, r, l); return c ? { captureIndices: c.captureIndices, matchedRuleId: c.ruleId } : null; }
function xr(t, e, n, r, o, s, i) { let a = Number.MAX_VALUE, l = null, c, u = 0, h = s.contentNameScopesList.getScopeNames(); for (let d = 0, p = t.length; d < p; d++) {
    let m = t[d];
    if (!m.matcher(h))
        continue;
    let b = e.getRule(m.ruleId), { ruleScanner: _, findOptions: y } = Kt(b, e, null, r, o === i), g = _.findNextMatchSync(n, o, y);
    if (!g)
        continue;
    let C = g.captureIndices[0].start;
    if (!(C >= a) && (a = C, l = g.captureIndices, c = g.ruleId, u = m.priority, a === o))
        break;
} return l ? { priorityMatch: u === -1, captureIndices: l, matchedRuleId: c } : null; }
function Kt(t, e, n, r, o) { if (qt) {
    let i = t.compile(e, n), a = Yt(r, o);
    return { ruleScanner: i, findOptions: a };
} return { ruleScanner: t.compileAG(e, n, r, o), findOptions: 0 }; }
function Tr(t, e, n, r, o) { if (qt) {
    let i = t.compileWhile(e, n), a = Yt(r, o);
    return { ruleScanner: i, findOptions: a };
} return { ruleScanner: t.compileWhileAG(e, n, r, o), findOptions: 0 }; }
function Yt(t, e) { let n = 0; return t || (n |= 1), e || (n |= 4), n; }
function ee(t, e, n, r, o, s, i) { if (s.length === 0)
    return; let a = e.content, l = Math.min(s.length, i.length), c = [], u = i[0].end; for (let h = 0; h < l; h++) {
    let d = s[h];
    if (d === null)
        continue;
    let p = i[h];
    if (p.length === 0)
        continue;
    if (p.start > u)
        break;
    for (; c.length > 0 && c[c.length - 1].endPos <= p.start;)
        o.produceFromScopes(c[c.length - 1].scopes, c[c.length - 1].endPos), c.pop();
    if (c.length > 0 ? o.produceFromScopes(c[c.length - 1].scopes, p.start) : o.produce(r, p.start), d.retokenizeCapturedWithRuleId) {
        let b = d.getName(a, i), _ = r.contentNameScopesList.pushAttributed(b, t), y = d.getContentName(a, i), g = _.pushAttributed(y, t), C = r.push(d.retokenizeCapturedWithRuleId, p.start, -1, !1, null, _, g), x = t.createOnigString(a.substring(0, p.end));
        Vt(t, x, n && p.start === 0, p.start, C, o, !1, 0), Ft(x);
        continue;
    }
    let m = d.getName(a, i);
    if (m !== null) {
        let _ = (c.length > 0 ? c[c.length - 1].scopes : r.contentNameScopesList).pushAttributed(m, t);
        c.push(new Nr(_, p.end));
    }
} for (; c.length > 0;)
    o.produceFromScopes(c[c.length - 1].scopes, c[c.length - 1].endPos), c.pop(); }
var Nr = class {
    scopes;
    endPos;
    constructor(t, e) { this.scopes = t, this.endPos = e; }
};
function Ar(t, e, n, r, o, s, i, a) { return new Lr(t, e, n, r, o, s, i, a); }
function Lt(t, e, n, r, o) { let s = we(e, xe), i = Ht.getCompiledRuleId(n, r, o.repository); for (let a of s)
    t.push({ debugSelector: e, matcher: a.matcher, ruleId: i, grammar: o, priority: a.priority }); }
function xe(t, e) { if (e.length < t.length)
    return !1; let n = 0; return t.every(r => { for (let o = n; o < e.length; o++)
    if (Er(e[o], r))
        return n = o + 1, !0; return !1; }); }
function Er(t, e) { if (!t)
    return !1; if (t === e)
    return !0; let n = e.length; return t.length > n && t.substr(0, n) === e && t[n] === "."; }
var Lr = class {
    constructor(t, e, n, r, o, s, i, a) { if (this._rootScopeName = t, this.balancedBracketSelectors = s, this._onigLib = a, this._basicScopeAttributesProvider = new Cr(n, r), this._rootId = -1, this._lastRuleId = 0, this._ruleId2desc = [null], this._includedGrammars = {}, this._grammarRepository = i, this._grammar = Pt(e, null), this._injections = null, this._tokenTypeMatchers = [], o)
        for (let l of Object.keys(o)) {
            let c = we(l, xe);
            for (let u of c)
                this._tokenTypeMatchers.push({ matcher: u.matcher, type: o[l] });
        } }
    _rootId;
    _lastRuleId;
    _ruleId2desc;
    _includedGrammars;
    _grammarRepository;
    _grammar;
    _injections;
    _basicScopeAttributesProvider;
    _tokenTypeMatchers;
    get themeProvider() { return this._grammarRepository; }
    dispose() { for (let t of this._ruleId2desc)
        t && t.dispose(); }
    createOnigScanner(t) { return this._onigLib.createOnigScanner(t); }
    createOnigString(t) { return this._onigLib.createOnigString(t); }
    getMetadataForScope(t) { return this._basicScopeAttributesProvider.getBasicScopeAttributes(t); }
    _collectInjections() { let t = { lookup: o => o === this._rootScopeName ? this._grammar : this.getExternalGrammar(o), injections: o => this._grammarRepository.injections(o) }, e = [], n = this._rootScopeName, r = t.lookup(n); if (r) {
        let o = r.injections;
        if (o)
            for (let i in o)
                Lt(e, i, o[i], this, r);
        let s = this._grammarRepository.injections(n);
        s && s.forEach(i => { let a = this.getExternalGrammar(i); if (a) {
            let l = a.injectionSelector;
            l && Lt(e, l, a, this, a);
        } });
    } return e.sort((o, s) => o.priority - s.priority), e; }
    getInjections() { return this._injections === null && (this._injections = this._collectInjections()), this._injections; }
    registerRule(t) { let e = ++this._lastRuleId, n = t(e); return this._ruleId2desc[e] = n, n; }
    getRule(t) { return this._ruleId2desc[t]; }
    getExternalGrammar(t, e) { if (this._includedGrammars[t])
        return this._includedGrammars[t]; if (this._grammarRepository) {
        let n = this._grammarRepository.lookup(t);
        if (n)
            return this._includedGrammars[t] = Pt(n, e && e.$base), this._includedGrammars[t];
    } }
    tokenizeLine(t, e, n = 0) { let r = this._tokenize(t, e, !1, n); return { tokens: r.lineTokens.getResult(r.ruleStack, r.lineLength), ruleStack: r.ruleStack, stoppedEarly: r.stoppedEarly }; }
    tokenizeLine2(t, e, n = 0) { let r = this._tokenize(t, e, !0, n); return { tokens: r.lineTokens.getBinaryResult(r.ruleStack, r.lineLength), ruleStack: r.ruleStack, stoppedEarly: r.stoppedEarly }; }
    _tokenize(t, e, n, r) {
        this._rootId === -1 && (this._rootId = Ht.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository), this.getInjections());
        let o;
        if (!e || e === et.NULL) {
            o = !0;
            let c = this._basicScopeAttributesProvider.getDefaultAttributes(), u = this.themeProvider.getDefaults(), h = U.set(0, c.languageId, c.tokenType, null, u.fontStyle, u.foregroundId, u.backgroundId), d = this.getRule(this._rootId).getName(null, null), p;
            d ? p = te.createRootAndLookUpScopeName(d, h, this) : p = te.createRoot("unknown", h), e = new et(null, this._rootId, -1, -1, !1, null, p, p);
        }
        else
            o = !1, e.reset();
        t = t + `
`;
        let s = this.createOnigString(t), i = s.content.length, a = new Ir(n, t, this._tokenTypeMatchers, this.balancedBracketSelectors), l = Vt(this, s, o, 0, e, a, !0, r);
        return Ft(s), { lineLength: i, lineTokens: a, ruleStack: l.stack, stoppedEarly: l.stoppedEarly };
    }
};
function Pt(t, e) { return t = Xn(t), t.repository = t.repository || {}, t.repository.$self = { $vscodeTextmateLocation: t.$vscodeTextmateLocation, patterns: t.patterns, name: t.scopeName }, t.repository.$base = e || t.repository.$self, t; }
var te = class D {
    constructor(e, n, r) { this.parent = e, this.scopePath = n, this.tokenAttributes = r; }
    static fromExtension(e, n) { let r = e, o = e?.scopePath ?? null; for (let s of n)
        o = Ve.push(o, s.scopeNames), r = new D(r, o, s.encodedTokenAttributes); return r; }
    static createRoot(e, n) { return new D(null, new Ve(null, e), n); }
    static createRootAndLookUpScopeName(e, n, r) { let o = r.getMetadataForScope(e), s = new Ve(null, e), i = r.themeProvider.themeMatch(s), a = D.mergeAttributes(n, o, i); return new D(null, s, a); }
    get scopeName() { return this.scopePath.scopeName; }
    toString() { return this.getScopeNames().join(" "); }
    equals(e) { return D.equals(this, e); }
    static equals(e, n) { do {
        if (e === n || !e && !n)
            return !0;
        if (!e || !n || e.scopeName !== n.scopeName || e.tokenAttributes !== n.tokenAttributes)
            return !1;
        e = e.parent, n = n.parent;
    } while (!0); }
    static mergeAttributes(e, n, r) { let o = -1, s = 0, i = 0; return r !== null && (o = r.fontStyle, s = r.foregroundId, i = r.backgroundId), U.set(e, n.languageId, n.tokenType, null, o, s, i); }
    pushAttributed(e, n) { if (e === null)
        return this; if (e.indexOf(" ") === -1)
        return D._pushAttributed(this, e, n); let r = e.split(/ /g), o = this; for (let s of r)
        o = D._pushAttributed(o, s, n); return o; }
    static _pushAttributed(e, n, r) { let o = r.getMetadataForScope(n), s = e.scopePath.push(n), i = r.themeProvider.themeMatch(s), a = D.mergeAttributes(e.tokenAttributes, o, i); return new D(e, s, a); }
    getScopeNames() { return this.scopePath.getSegments(); }
    getExtensionIfDefined(e) { let n = [], r = this; for (; r && r !== e;)
        n.push({ encodedTokenAttributes: r.tokenAttributes, scopeNames: r.scopePath.getExtensionIfDefined(r.parent?.scopePath ?? null) }), r = r.parent; return r === e ? n.reverse() : void 0; }
}, et = class q {
    constructor(e, n, r, o, s, i, a, l) { this.parent = e, this.ruleId = n, this.beginRuleCapturedEOL = s, this.endRule = i, this.nameScopesList = a, this.contentNameScopesList = l, this.depth = this.parent ? this.parent.depth + 1 : 1, this._enterPos = r, this._anchorPos = o; }
    _stackElementBrand = void 0;
    static NULL = new q(null, 0, 0, 0, !1, null, null, null);
    _enterPos;
    _anchorPos;
    depth;
    equals(e) { return e === null ? !1 : q._equals(this, e); }
    static _equals(e, n) { return e === n ? !0 : this._structuralEquals(e, n) ? te.equals(e.contentNameScopesList, n.contentNameScopesList) : !1; }
    static _structuralEquals(e, n) { do {
        if (e === n || !e && !n)
            return !0;
        if (!e || !n || e.depth !== n.depth || e.ruleId !== n.ruleId || e.endRule !== n.endRule)
            return !1;
        e = e.parent, n = n.parent;
    } while (!0); }
    clone() { return this; }
    static _reset(e) { for (; e;)
        e._enterPos = -1, e._anchorPos = -1, e = e.parent; }
    reset() { q._reset(this); }
    pop() { return this.parent; }
    safePop() { return this.parent ? this.parent : this; }
    push(e, n, r, o, s, i, a) { return new q(this, e, n, r, o, s, i, a); }
    getEnterPos() { return this._enterPos; }
    getAnchorPos() { return this._anchorPos; }
    getRule(e) { return e.getRule(this.ruleId); }
    toString() { let e = []; return this._writeString(e, 0), "[" + e.join(",") + "]"; }
    _writeString(e, n) { return this.parent && (n = this.parent._writeString(e, n)), e[n++] = `(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`, n; }
    withContentNameScopesList(e) { return this.contentNameScopesList === e ? this : this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, e); }
    withEndRule(e) { return this.endRule === e ? this : new q(this.parent, this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, e, this.nameScopesList, this.contentNameScopesList); }
    hasSameRuleAs(e) { let n = this; for (; n && n._enterPos === e._enterPos;) {
        if (n.ruleId === e.ruleId)
            return !0;
        n = n.parent;
    } return !1; }
    toStateStackFrame() { return { ruleId: this.ruleId, beginRuleCapturedEOL: this.beginRuleCapturedEOL, endRule: this.endRule, nameScopesList: this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList ?? null) ?? [], contentNameScopesList: this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList) ?? [] }; }
    static pushFrame(e, n) { let r = te.fromExtension(e?.nameScopesList ?? null, n.nameScopesList); return new q(e, n.ruleId, n.enterPos ?? -1, n.anchorPos ?? -1, n.beginRuleCapturedEOL, n.endRule, r, te.fromExtension(r, n.contentNameScopesList)); }
}, Pr = class {
    balancedBracketScopes;
    unbalancedBracketScopes;
    allowAny = !1;
    constructor(t, e) { this.balancedBracketScopes = t.flatMap(n => n === "*" ? (this.allowAny = !0, []) : we(n, xe).map(r => r.matcher)), this.unbalancedBracketScopes = e.flatMap(n => we(n, xe).map(r => r.matcher)); }
    get matchesAlways() { return this.allowAny && this.unbalancedBracketScopes.length === 0; }
    get matchesNever() { return this.balancedBracketScopes.length === 0 && !this.allowAny; }
    match(t) { for (let e of this.unbalancedBracketScopes)
        if (e(t))
            return !1; for (let e of this.balancedBracketScopes)
        if (e(t))
            return !0; return this.allowAny; }
}, Ir = class {
    constructor(t, e, n, r) { this.balancedBracketSelectors = r, this._emitBinaryTokens = t, this._tokenTypeOverrides = n, this._lineText = null, this._tokens = [], this._binaryTokens = [], this._lastTokenEndIndex = 0; }
    _emitBinaryTokens;
    _lineText;
    _tokens;
    _binaryTokens;
    _lastTokenEndIndex;
    _tokenTypeOverrides;
    produce(t, e) { this.produceFromScopes(t.contentNameScopesList, e); }
    produceFromScopes(t, e) { if (this._lastTokenEndIndex >= e)
        return; if (this._emitBinaryTokens) {
        let r = t?.tokenAttributes ?? 0, o = !1;
        if (this.balancedBracketSelectors?.matchesAlways && (o = !0), this._tokenTypeOverrides.length > 0 || this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever) {
            let s = t?.getScopeNames() ?? [];
            for (let i of this._tokenTypeOverrides)
                i.matcher(s) && (r = U.set(r, 0, i.type, null, -1, 0, 0));
            this.balancedBracketSelectors && (o = this.balancedBracketSelectors.match(s));
        }
        if (o && (r = U.set(r, 0, 8, o, -1, 0, 0)), this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === r) {
            this._lastTokenEndIndex = e;
            return;
        }
        this._binaryTokens.push(this._lastTokenEndIndex), this._binaryTokens.push(r), this._lastTokenEndIndex = e;
        return;
    } let n = t?.getScopeNames() ?? []; this._tokens.push({ startIndex: this._lastTokenEndIndex, endIndex: e, scopes: n }), this._lastTokenEndIndex = e; }
    getResult(t, e) { return this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === e - 1 && this._tokens.pop(), this._tokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(t, e), this._tokens[this._tokens.length - 1].startIndex = 0), this._tokens; }
    getBinaryResult(t, e) { this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === e - 1 && (this._binaryTokens.pop(), this._binaryTokens.pop()), this._binaryTokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(t, e), this._binaryTokens[this._binaryTokens.length - 2] = 0); let n = new Uint32Array(this._binaryTokens.length); for (let r = 0, o = this._binaryTokens.length; r < o; r++)
        n[r] = this._binaryTokens[r]; return n; }
}, Or = class {
    constructor(t, e) { this._onigLib = e, this._theme = t; }
    _grammars = new Map;
    _rawGrammars = new Map;
    _injectionGrammars = new Map;
    _theme;
    dispose() { for (let t of this._grammars.values())
        t.dispose(); }
    setTheme(t) { this._theme = t; }
    getColorMap() { return this._theme.getColorMap(); }
    addGrammar(t, e) { this._rawGrammars.set(t.scopeName, t), e && this._injectionGrammars.set(t.scopeName, e); }
    lookup(t) { return this._rawGrammars.get(t); }
    injections(t) { return this._injectionGrammars.get(t); }
    getDefaults() { return this._theme.getDefaults(); }
    themeMatch(t) { return this._theme.match(t); }
    grammarForScopeName(t, e, n, r, o) { if (!this._grammars.has(t)) {
        let s = this._rawGrammars.get(t);
        if (!s)
            return null;
        this._grammars.set(t, Ar(t, s, e, n, r, o, this, this._onigLib));
    } return this._grammars.get(t); }
}, Xt = class {
    _options;
    _syncRegistry;
    _ensureGrammarCache;
    constructor(t) { this._options = t, this._syncRegistry = new Or(ne.createFromRawTheme(t.theme, t.colorMap), t.onigLib), this._ensureGrammarCache = new Map; }
    dispose() { this._syncRegistry.dispose(); }
    setTheme(t, e) { this._syncRegistry.setTheme(ne.createFromRawTheme(t, e)); }
    getColorMap() { return this._syncRegistry.getColorMap(); }
    loadGrammarWithEmbeddedLanguages(t, e, n) { return this.loadGrammarWithConfiguration(t, e, { embeddedLanguages: n }); }
    loadGrammarWithConfiguration(t, e, n) { return this._loadGrammar(t, e, n.embeddedLanguages, n.tokenTypes, new Pr(n.balancedBracketSelectors || [], n.unbalancedBracketSelectors || [])); }
    loadGrammar(t) { return this._loadGrammar(t, 0, null, null, null); }
    _loadGrammar(t, e, n, r, o) { let s = new ur(this._syncRegistry, t); for (; s.Q.length > 0;)
        s.Q.map(i => this._loadSingleGrammar(i.scopeName)), s.processQueue(); return this._grammarForScopeName(t, e, n, r, o); }
    _loadSingleGrammar(t) { this._ensureGrammarCache.has(t) || (this._doLoadSingleGrammar(t), this._ensureGrammarCache.set(t, !0)); }
    _doLoadSingleGrammar(t) { let e = this._options.loadGrammar(t); if (e) {
        let n = typeof this._options.getInjections == "function" ? this._options.getInjections(t) : void 0;
        this._syncRegistry.addGrammar(e, n);
    } }
    addGrammar(t, e = [], n = 0, r = null) { return this._syncRegistry.addGrammar(t, e), this._grammarForScopeName(t.scopeName, n, r); }
    _grammarForScopeName(t, e = 0, n = null, r = null, o = null) { return this._syncRegistry.grammarForScopeName(t, e, n, r, o); }
}, Te = et.NULL;
function le(t, e) { let n = typeof t == "string" ? {} : k({}, t.colorReplacements), r = typeof t == "string" ? t : t.name; for (let [o, s] of Object.entries(e?.colorReplacements || {}))
    typeof s == "string" ? n[o] = s : o === r && Object.assign(n, s); return n; }
function j(t, e) { return t && (e?.[t?.toLowerCase()] || t); }
function tn(t) { return Array.isArray(t) ? t : [t]; }
function nt(t) { return N(this, null, function* () { return Promise.resolve(typeof t == "function" ? t() : t).then(e => e.default || e); }); }
function ce(t) { return !t || ["plaintext", "txt", "text", "plain"].includes(t); }
function rt(t) { return t === "ansi" || ce(t); }
function ue(t) { return t === "none"; }
function ot(t) { return ue(t); }
var Mr = /(\r?\n)/g;
function Q(t, e = !1) { if (t.length === 0)
    return [["", 0]]; let n = t.split(Mr), r = 0, o = []; for (let s = 0; s < n.length; s += 2) {
    let i = e ? n[s] + (n[s + 1] || "") : n[s];
    o.push([i, r]), r += n[s].length, r += n[s + 1]?.length || 0;
} return o; }
var Jt = { light: "#333333", dark: "#bbbbbb" }, Qt = { light: "#fffffe", dark: "#1e1e1e" }, Zt = "__shiki_resolved";
function Ne(t) { if (t?.[Zt])
    return t; let e = k({}, t); e.tokenColors && !e.settings && (e.settings = e.tokenColors, delete e.tokenColors), e.type ||= "dark", e.colorReplacements = k({}, e.colorReplacements), e.settings ||= []; let { bg: n, fg: r } = e; if (!n || !r) {
    let a = e.settings ? e.settings.find(l => !l.name && !l.scope) : void 0;
    a?.settings?.foreground && (r = a.settings.foreground), a?.settings?.background && (n = a.settings.background), !r && e?.colors?.["editor.foreground"] && (r = e.colors["editor.foreground"]), !n && e?.colors?.["editor.background"] && (n = e.colors["editor.background"]), r || (r = e.type === "light" ? Jt.light : Jt.dark), n || (n = e.type === "light" ? Qt.light : Qt.dark), e.fg = r, e.bg = n;
} e.settings[0] && e.settings[0].settings && !e.settings[0].scope || e.settings.unshift({ settings: { foreground: e.fg, background: e.bg } }); let o = 0, s = new Map; function i(a) { if (s.has(a))
    return s.get(a); o += 1; let l = `#${o.toString(16).padStart(8, "0").toLowerCase()}`; return e.colorReplacements?.[`#${l}`] ? i(a) : (s.set(a, l), l); } e.settings = e.settings.map(a => { let l = a.settings?.foreground && !a.settings.foreground.startsWith("#"), c = a.settings?.background && !a.settings.background.startsWith("#"); if (!l && !c)
    return a; let u = w(k({}, a), { settings: k({}, a.settings) }); if (l) {
    let h = i(a.settings.foreground);
    e.colorReplacements[h] = a.settings.foreground, u.settings.foreground = h;
} if (c) {
    let h = i(a.settings.background);
    e.colorReplacements[h] = a.settings.background, u.settings.background = h;
} return u; }); for (let a of Object.keys(e.colors || {}))
    if ((a === "editor.foreground" || a === "editor.background" || a.startsWith("terminal.ansi")) && !e.colors[a]?.startsWith("#")) {
        let l = i(e.colors[a]);
        e.colorReplacements[l] = e.colors[a], e.colors[a] = l;
    } return Object.defineProperty(e, Zt, { enumerable: !1, writable: !1, value: !0 }), e; }
function nn(t) { return N(this, null, function* () { return [...new Set((yield Promise.all(t.filter(e => !rt(e)).map(e => N(null, null, function* () { return yield nt(e).then(n => Array.isArray(n) ? n : [n]); })))).flat())]; }); }
function rn(t) { return N(this, null, function* () { return (yield Promise.all(t.map(e => N(null, null, function* () { return ot(e) ? null : Ne(yield nt(e)); })))).filter(e => !!e); }); }
function on(t, e) { if (!e)
    return t; if (e[t]) {
    let n = new Set([t]);
    for (; e[t];) {
        if (t = e[t], n.has(t))
            throw new R(`Circular alias \`${[...n].join(" -> ")} -> ${t}\``);
        n.add(t);
    }
} return t; }
var Br = class extends Xt {
    _resolver;
    _themes;
    _langs;
    _alias;
    _resolvedThemes = new Map;
    _resolvedGrammars = new Map;
    _langMap = new Map;
    _langGraph = new Map;
    _textmateThemeCache = new WeakMap;
    _loadedThemesCache = null;
    _loadedLanguagesCache = null;
    constructor(t, e, n, r = {}) { super(t), this._resolver = t, this._themes = e, this._langs = n, this._alias = r, this._themes.map(o => this.loadTheme(o)), this.loadLanguages(this._langs); }
    getTheme(t) { return typeof t == "string" ? this._resolvedThemes.get(t) : this.loadTheme(t); }
    loadTheme(t) { let e = Ne(t); return e.name && (this._resolvedThemes.set(e.name, e), this._loadedThemesCache = null), e; }
    getLoadedThemes() { return this._loadedThemesCache || (this._loadedThemesCache = [...this._resolvedThemes.keys()]), this._loadedThemesCache; }
    setTheme(t) { let e = this._textmateThemeCache.get(t); e || (e = ne.createFromRawTheme(t), this._textmateThemeCache.set(t, e)), this._syncRegistry.setTheme(e); }
    getGrammar(t) { return t = on(t, this._alias), this._resolvedGrammars.get(t); }
    loadLanguage(t) { if (this.getGrammar(t.name))
        return; let e = new Set([...this._langMap.values()].filter(o => o.embeddedLangsLazy?.includes(t.name))); this._resolver.addLanguage(t); let n = { balancedBracketSelectors: t.balancedBracketSelectors || ["*"], unbalancedBracketSelectors: t.unbalancedBracketSelectors || [] }; this._syncRegistry._rawGrammars.set(t.scopeName, t); let r = this.loadGrammarWithConfiguration(t.scopeName, 1, n); if (r.name = t.name, this._resolvedGrammars.set(t.name, r), t.aliases && t.aliases.forEach(o => { this._alias[o] = t.name; }), this._loadedLanguagesCache = null, e.size)
        for (let o of e)
            this._resolvedGrammars.delete(o.name), this._loadedLanguagesCache = null, this._syncRegistry?._injectionGrammars?.delete(o.scopeName), this._syncRegistry?._grammars?.delete(o.scopeName), this.loadLanguage(this._langMap.get(o.name)); }
    dispose() { super.dispose(), this._resolvedThemes.clear(), this._resolvedGrammars.clear(), this._langMap.clear(), this._langGraph.clear(), this._loadedThemesCache = null; }
    loadLanguages(t) { for (let r of t)
        this.resolveEmbeddedLanguages(r); let e = [...this._langGraph.entries()], n = e.filter(([r, o]) => !o); if (n.length) {
        let r = e.filter(([o, s]) => s ? (s.embeddedLanguages || s.embeddedLangs)?.some(i => n.map(([a]) => a).includes(i)) : !1).filter(o => !n.includes(o));
        throw new R(`Missing languages ${n.map(([o]) => `\`${o}\``).join(", ")}, required by ${r.map(([o]) => `\`${o}\``).join(", ")}`);
    } for (let [r, o] of e)
        this._resolver.addLanguage(o); for (let [r, o] of e)
        this.loadLanguage(o); }
    getLoadedLanguages() { return this._loadedLanguagesCache || (this._loadedLanguagesCache = [...new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)])]), this._loadedLanguagesCache; }
    resolveEmbeddedLanguages(t) { this._langMap.set(t.name, t), this._langGraph.set(t.name, t); let e = t.embeddedLanguages ?? t.embeddedLangs; if (e)
        for (let n of e)
            this._langGraph.set(n, this._langMap.get(n)); }
}, Gr = class {
    _langs = new Map;
    _scopeToLang = new Map;
    _injections = new Map;
    _onigLib;
    constructor(t, e) { this._onigLib = { createOnigScanner: n => t.createScanner(n), createOnigString: n => t.createString(n) }, e.forEach(n => this.addLanguage(n)); }
    get onigLib() { return this._onigLib; }
    getLangRegistration(t) { return this._langs.get(t); }
    loadGrammar(t) { return this._scopeToLang.get(t); }
    addLanguage(t) { this._langs.set(t.name, t), t.aliases && t.aliases.forEach(e => { this._langs.set(e, t); }), this._scopeToLang.set(t.scopeName, t), t.injectTo && t.injectTo.forEach(e => { this._injections.get(e) || this._injections.set(e, []), this._injections.get(e).push(t.scopeName); }); }
    getInjections(t) { let e = t.split("."), n = []; for (let r = 1; r <= e.length; r++) {
        let o = e.slice(0, r).join(".");
        n = [...n, ...this._injections.get(o) || []];
    } return n; }
}, ae = 0;
function he(t) { ae += 1, t.warnings !== !1 && ae >= 10 && ae % 10 === 0 && console.warn(`[Shiki] ${ae} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`); let e = !1; if (!t.engine)
    throw new R("`engine` option is required for synchronous mode"); let n = (t.langs || []).flat(1), r = (t.themes || []).flat(1).map(Ne), o = new Br(new Gr(t.engine, n), r, n, t.langAlias), s; function i(g) { return on(g, t.langAlias); } function a(g) { _(); let C = o.getGrammar(typeof g == "string" ? g : g.name); if (!C)
    throw new R(`Language \`${g}\` not found, you may need to load it first`); return C; } function l(g) { if (g === "none")
    return { bg: "", fg: "", name: "none", settings: [], type: "dark" }; _(); let C = o.getTheme(g); if (!C)
    throw new R(`Theme \`${g}\` not found, you may need to load it first`); return C; } function c(g) { _(); let C = l(g); return s !== g && (o.setTheme(C), s = g), { theme: C, colorMap: o.getColorMap() }; } function u() { return _(), o.getLoadedThemes(); } function h() { return _(), o.getLoadedLanguages(); } function d(...g) { _(), o.loadLanguages(g.flat(1)); } function p(...g) { return N(this, null, function* () { return d(yield nn(g)); }); } function m(...g) { _(); for (let C of g.flat(1))
    o.loadTheme(C); } function b(...g) { return N(this, null, function* () { return _(), m(yield rn(g)); }); } function _() { if (e)
    throw new R("Shiki instance has been disposed"); } function y() { e || (e = !0, o.dispose(), ae -= 1); } return { setTheme: c, getTheme: l, getLanguage: a, getLoadedThemes: u, getLoadedLanguages: h, resolveLangAlias: i, loadLanguage: p, loadLanguageSync: d, loadTheme: b, loadThemeSync: m, dispose: y, [Symbol.dispose]: y }; }
var Dr = he;
function Ae(t) { return N(this, null, function* () { t.engine || console.warn("`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine."); let [e, n, r] = yield Promise.all([rn(t.themes || []), nn(t.langs || []), t.engine]); return he(w(k({}, t), { themes: e, langs: n, engine: r })); }); }
var $r = Ae, sn = new WeakMap;
function fe(t, e) { sn.set(t, e); }
function Z(t) { return sn.get(t); }
var Ee = class an {
    _stacks = {};
    lang;
    get themes() { return Object.keys(this._stacks); }
    get theme() { return this.themes[0]; }
    get _stack() { return this._stacks[this.theme]; }
    static initial(e, n) { return new an(Object.fromEntries(tn(n).map(r => [r, Te])), e); }
    constructor(...e) { if (e.length === 2) {
        let [n, r] = e;
        this.lang = r, this._stacks = n;
    }
    else {
        let [n, r, o] = e;
        this.lang = r, this._stacks = { [o]: n };
    } }
    getInternalStack(e = this.theme) { return this._stacks[e]; }
    getScopes(e = this.theme) { return jr(this._stacks[e]); }
    toJSON() { return { lang: this.lang, theme: this.theme, themes: this.themes, scopes: this.getScopes() }; }
};
function jr(t) { let e = [], n = new Set; function r(o) { if (n.has(o))
    return; n.add(o); let s = o?.nameScopesList?.scopeName; s && e.push(s), o.parent && r(o.parent); } return r(t), e; }
function Fr(t, e) { if (!(t instanceof Ee))
    throw new R("Invalid grammar state"); return t.getInternalStack(e); }
var Wr = /,/, zr = / /;
function st(t, e, n = {}) { let { theme: r = t.getLoadedThemes()[0] } = n; if (ce(t.resolveLangAlias(n.lang || "text")) || ue(r))
    return Q(e).map(a => [{ content: a[0], offset: a[1] }]); let { theme: o, colorMap: s } = t.setTheme(r), i = t.getLanguage(n.lang || "text"); if (n.grammarState) {
    if (n.grammarState.lang !== i.name)
        throw new R(`Grammar state language "${n.grammarState.lang}" does not match highlight language "${i.name}"`);
    if (!n.grammarState.themes.includes(o.name))
        throw new R(`Grammar state themes "${n.grammarState.themes}" do not contain highlight theme "${o.name}"`);
} return ln(e, i, o, s, n); }
function it(...t) { if (t.length === 2)
    return Z(t[1]); let [e, n, r = {}] = t, { lang: o = "text", theme: s = e.getLoadedThemes()[0] } = r; if (ce(o) || ue(s))
    throw new R("Plain language does not have grammar state"); if (o === "ansi")
    throw new R("ANSI language does not have grammar state"); let { theme: i, colorMap: a } = e.setTheme(s), l = e.getLanguage(o); return new Ee(at(n, l, i, a, r).stateStack, l.name, i.name); }
function ln(t, e, n, r, o) { let s = at(t, e, n, r, o), i = new Ee(s.stateStack, e.name, n.name); return fe(s.tokens, i), s.tokens; }
function at(t, e, n, r, o) { let s = le(n, o), { tokenizeMaxLineLength: i = 0, tokenizeTimeLimit: a = 500, includeExplanation: l = !1 } = o, c = Q(t), u = o.grammarState ? Fr(o.grammarState, n.name) ?? Te : o.grammarContextCode != null ? at(o.grammarContextCode, e, n, r, w(k({}, o), { grammarState: void 0, grammarContextCode: void 0 })).stateStack : Te, h = [], d = []; for (let p = 0, m = c.length; p < m; p++) {
    let [b, _] = c[p];
    if (b === "") {
        h = [], d.push([]);
        continue;
    }
    if (i > 0 && b.length >= i) {
        h = [], d.push([{ content: b, offset: _, color: "", fontStyle: 0 }]);
        continue;
    }
    let y, g, C;
    l && l !== "tokenType" && (y = e.tokenizeLine(b, u, a), g = y.tokens, C = 0);
    let x = e.tokenizeLine2(b, u, a), P = x.tokens.length / 2;
    for (let M = 0; M < P; M++) {
        let H = x.tokens[2 * M], ze = M + 1 < P ? x.tokens[2 * M + 2] : b.length;
        if (H === ze)
            continue;
        let He = x.tokens[2 * M + 1], Vn = j(r[U.getForeground(He)], s), Kn = U.getFontStyle(He), be = { content: b.substring(H, ze), offset: _ + H, color: Vn, fontStyle: Kn };
        if (l === "tokenType")
            be.type = U.getTokenType(He);
        else if (l) {
            let kt = [];
            if (l !== "scopeName")
                for (let $ of n.settings) {
                    let J;
                    switch (typeof $.scope) {
                        case "string":
                            J = $.scope.split(Wr).map(Ue => Ue.trim());
                            break;
                        case "object":
                            J = $.scope;
                            break;
                        default: continue;
                    }
                    kt.push({ settings: $, selectors: J.map(Ue => Ue.split(zr)) });
                }
            be.explanation = [];
            let wt = 0;
            for (; H + wt < ze;) {
                let $ = g[C], J = b.substring($.startIndex, $.endIndex);
                wt += J.length, be.explanation.push({ content: J, scopes: l === "scopeName" ? Hr($.scopes) : Ur(kt, $.scopes) }), C += 1;
            }
        }
        h.push(be);
    }
    d.push(h), h = [], u = x.ruleStack;
} return { tokens: d, stateStack: u }; }
function Hr(t) { return t.map(e => ({ scopeName: e })); }
function Ur(t, e) { let n = []; for (let r = 0, o = e.length; r < o; r++) {
    let s = e[r];
    n[r] = { scopeName: s, themeMatches: Vr(t, s, e.slice(0, r)) };
} return n; }
function en(t, e) { return t === e || e.substring(0, t.length) === t && e[t.length] === "."; }
function qr(t, e, n) { if (!en(t.at(-1), e))
    return !1; let r = t.length - 2, o = n.length - 1; for (; r >= 0 && o >= 0;)
    en(t[r], n[o]) && (r -= 1), o -= 1; return r === -1; }
function Vr(t, e, n) { let r = []; for (let { selectors: o, settings: s } of t)
    for (let i of o)
        if (qr(i, e, n)) {
            r.push(s);
            break;
        } return r; }
function de(t, e, n, r = st) { let o = Object.entries(n.themes).filter(c => c[1]).map(c => ({ color: c[0], theme: c[1] })), s = o.map(c => { let u = r(t, e, w(k({}, n), { theme: c.theme })); return { tokens: u, state: Z(u), theme: typeof c.theme == "string" ? c.theme : c.theme.name }; }), i = Kr(...s.map(c => c.tokens)), a = i[0].map((c, u) => c.map((h, d) => { let p = { content: h.content, variants: {}, offset: h.offset }; return "includeExplanation" in n && n.includeExplanation && (p.explanation = h.explanation), i.forEach((m, b) => { let x = m[u][d], { content: _, explanation: y, offset: g } = x, C = vt(x, ["content", "explanation", "offset"]); p.variants[o[b].color] = C; }), p; })), l = s[0].state ? new Ee(Object.fromEntries(s.map(c => [c.theme, c.state?.getInternalStack(c.theme)])), s[0].state.lang) : void 0; return l && fe(a, l), a; }
function Kr(...t) { let e = t.map(() => []), n = t.length; for (let r = 0; r < t[0].length; r++) {
    let o = t.map(l => l[r]), s = e.map(() => []);
    e.forEach((l, c) => l.push(s[c]));
    let i = o.map(() => 0), a = o.map(l => l[0]);
    for (; a.every(l => l);) {
        let l = Math.min(...a.map(c => c.content.length));
        for (let c = 0; c < n; c++) {
            let u = a[c];
            u.content.length === l ? (s[c].push(u), i[c] += 1, a[c] = o[c][i[c]]) : (s[c].push(w(k({}, u), { content: u.content.slice(0, l) })), a[c] = w(k({}, u), { content: u.content.slice(l), offset: u.offset + l }));
        }
    }
} return e; }
var cn = ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];
var F = class {
    constructor(e, n, r) { this.normal = n, this.property = e, r && (this.space = r); }
};
F.prototype.normal = {};
F.prototype.property = {};
F.prototype.space = void 0;
function lt(t, e) { let n = {}, r = {}; for (let o of t)
    Object.assign(n, o.property), Object.assign(r, o.normal); return new F(n, r, e); }
function pe(t) { return t.toLowerCase(); }
var E = class {
    constructor(e, n) { this.attribute = n, this.property = e; }
};
E.prototype.attribute = "";
E.prototype.booleanish = !1;
E.prototype.boolean = !1;
E.prototype.commaOrSpaceSeparated = !1;
E.prototype.commaSeparated = !1;
E.prototype.defined = !1;
E.prototype.mustUseProperty = !1;
E.prototype.number = !1;
E.prototype.overloadedBoolean = !1;
E.prototype.property = "";
E.prototype.spaceSeparated = !1;
E.prototype.space = void 0;
var me = {};
Yn(me, { boolean: () => S, booleanish: () => T, commaOrSpaceSeparated: () => O, commaSeparated: () => W, number: () => f, overloadedBoolean: () => Le, spaceSeparated: () => v });
var Yr = 0, S = V(), T = V(), Le = V(), f = V(), v = V(), W = V(), O = V();
function V() { return 2 ** ++Yr; }
var ct = Object.keys(me), K = class extends E {
    constructor(e, n, r, o) { let s = -1; if (super(e, n), un(this, "space", o), typeof r == "number")
        for (; ++s < ct.length;) {
            let i = ct[s];
            un(this, ct[s], (r & me[i]) === me[i]);
        } }
};
K.prototype.defined = !0;
function un(t, e, n) { n && (t[e] = n); }
function G(t) { let e = {}, n = {}; for (let [r, o] of Object.entries(t.properties)) {
    let s = new K(r, t.transform(t.attributes || {}, r), o, t.space);
    t.mustUseProperty && t.mustUseProperty.includes(r) && (s.mustUseProperty = !0), e[r] = s, n[pe(r)] = r, n[pe(s.attribute)] = r;
} return new F(e, n, t.space); }
var ut = G({ properties: { ariaActiveDescendant: null, ariaAtomic: T, ariaAutoComplete: null, ariaBusy: T, ariaChecked: T, ariaColCount: f, ariaColIndex: f, ariaColSpan: f, ariaControls: v, ariaCurrent: null, ariaDescribedBy: v, ariaDetails: null, ariaDisabled: T, ariaDropEffect: v, ariaErrorMessage: null, ariaExpanded: T, ariaFlowTo: v, ariaGrabbed: T, ariaHasPopup: null, ariaHidden: T, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: v, ariaLevel: f, ariaLive: null, ariaModal: T, ariaMultiLine: T, ariaMultiSelectable: T, ariaOrientation: null, ariaOwns: v, ariaPlaceholder: null, ariaPosInSet: f, ariaPressed: T, ariaReadOnly: T, ariaRelevant: null, ariaRequired: T, ariaRoleDescription: v, ariaRowCount: f, ariaRowIndex: f, ariaRowSpan: f, ariaSelected: T, ariaSetSize: f, ariaSort: null, ariaValueMax: f, ariaValueMin: f, ariaValueNow: f, ariaValueText: null, role: null }, transform(t, e) { return e === "role" ? e : "aria-" + e.slice(4).toLowerCase(); } });
function Pe(t, e) { return e in t ? t[e] : e; }
function Ie(t, e) { return Pe(t, e.toLowerCase()); }
var hn = G({ attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" }, mustUseProperty: ["checked", "multiple", "muted", "selected"], properties: { abbr: null, accept: W, acceptCharset: v, accessKey: v, action: null, allow: null, allowFullScreen: S, allowPaymentRequest: S, allowUserMedia: S, alpha: S, alt: null, as: null, async: S, autoCapitalize: null, autoComplete: v, autoFocus: S, autoPlay: S, blocking: v, capture: null, charSet: null, checked: S, cite: null, className: v, closedBy: null, colorSpace: null, cols: f, colSpan: f, command: null, commandFor: null, content: null, contentEditable: T, controls: S, controlsList: v, coords: f | W, crossOrigin: null, data: null, dateTime: null, decoding: null, default: S, defer: S, dir: null, dirName: null, disabled: S, download: Le, draggable: T, encType: null, enterKeyHint: null, fetchPriority: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: S, formTarget: null, headers: v, height: f, hidden: Le, high: f, href: null, hrefLang: null, htmlFor: v, httpEquiv: v, id: null, imageSizes: null, imageSrcSet: null, inert: S, inputMode: null, integrity: null, is: null, isMap: S, itemId: null, itemProp: v, itemRef: v, itemScope: S, itemType: v, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: S, low: f, manifest: null, max: null, maxLength: f, media: null, method: null, min: null, minLength: f, multiple: S, muted: S, name: null, nonce: null, noModule: S, noValidate: S, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforeMatch: null, onBeforePrint: null, onBeforeToggle: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextLost: null, onContextMenu: null, onContextRestored: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onScrollEnd: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: S, optimum: f, pattern: null, ping: v, placeholder: null, playsInline: S, popover: null, popoverTarget: null, popoverTargetAction: null, poster: null, preload: null, readOnly: S, referrerPolicy: null, rel: v, required: S, reversed: S, rows: f, rowSpan: f, sandbox: v, scope: null, scoped: S, seamless: S, selected: S, shadowRootClonable: S, shadowRootCustomElementRegistry: S, shadowRootDelegatesFocus: S, shadowRootMode: null, shadowRootSerializable: S, shape: null, size: f, sizes: null, slot: null, span: f, spellCheck: T, src: null, srcDoc: null, srcLang: null, srcSet: null, start: f, step: null, style: null, tabIndex: f, target: null, title: null, translate: null, type: null, typeMustMatch: S, useMap: null, value: T, width: f, wrap: null, writingSuggestions: null, align: null, aLink: null, archive: v, axis: null, background: null, bgColor: null, border: f, borderColor: null, bottomMargin: f, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: S, declare: S, event: null, face: null, frame: null, frameBorder: null, hSpace: f, leftMargin: f, link: null, longDesc: null, lowSrc: null, marginHeight: f, marginWidth: f, noResize: S, noHref: S, noShade: S, noWrap: S, object: null, profile: null, prompt: null, rev: null, rightMargin: f, rules: null, scheme: null, scrolling: T, standby: null, summary: null, text: null, topMargin: f, valueType: null, version: null, vAlign: null, vLink: null, vSpace: f, allowTransparency: null, autoCorrect: null, autoSave: null, credentialless: S, disablePictureInPicture: S, disableRemotePlayback: S, exportParts: W, part: v, prefix: null, property: null, results: f, security: null, unselectable: null }, space: "html", transform: Ie });
var fn = G({ attributes: { accentHeight: "accent-height", alignmentBaseline: "alignment-baseline", arabicForm: "arabic-form", baselineShift: "baseline-shift", capHeight: "cap-height", className: "class", clipPath: "clip-path", clipRule: "clip-rule", colorInterpolation: "color-interpolation", colorInterpolationFilters: "color-interpolation-filters", colorProfile: "color-profile", colorRendering: "color-rendering", crossOrigin: "crossorigin", dataType: "datatype", dominantBaseline: "dominant-baseline", enableBackground: "enable-background", fillOpacity: "fill-opacity", fillRule: "fill-rule", floodColor: "flood-color", floodOpacity: "flood-opacity", fontFamily: "font-family", fontSize: "font-size", fontSizeAdjust: "font-size-adjust", fontStretch: "font-stretch", fontStyle: "font-style", fontVariant: "font-variant", fontWeight: "font-weight", glyphName: "glyph-name", glyphOrientationHorizontal: "glyph-orientation-horizontal", glyphOrientationVertical: "glyph-orientation-vertical", hrefLang: "hreflang", horizAdvX: "horiz-adv-x", horizOriginX: "horiz-origin-x", horizOriginY: "horiz-origin-y", imageRendering: "image-rendering", letterSpacing: "letter-spacing", lightingColor: "lighting-color", markerEnd: "marker-end", markerMid: "marker-mid", markerStart: "marker-start", maskType: "mask-type", navDown: "nav-down", navDownLeft: "nav-down-left", navDownRight: "nav-down-right", navLeft: "nav-left", navNext: "nav-next", navPrev: "nav-prev", navRight: "nav-right", navUp: "nav-up", navUpLeft: "nav-up-left", navUpRight: "nav-up-right", onAbort: "onabort", onActivate: "onactivate", onAfterPrint: "onafterprint", onBeforePrint: "onbeforeprint", onBegin: "onbegin", onCancel: "oncancel", onCanPlay: "oncanplay", onCanPlayThrough: "oncanplaythrough", onChange: "onchange", onClick: "onclick", onClose: "onclose", onCopy: "oncopy", onCueChange: "oncuechange", onCut: "oncut", onDblClick: "ondblclick", onDrag: "ondrag", onDragEnd: "ondragend", onDragEnter: "ondragenter", onDragExit: "ondragexit", onDragLeave: "ondragleave", onDragOver: "ondragover", onDragStart: "ondragstart", onDrop: "ondrop", onDurationChange: "ondurationchange", onEmptied: "onemptied", onEnd: "onend", onEnded: "onended", onError: "onerror", onFocus: "onfocus", onFocusIn: "onfocusin", onFocusOut: "onfocusout", onHashChange: "onhashchange", onInput: "oninput", onInvalid: "oninvalid", onKeyDown: "onkeydown", onKeyPress: "onkeypress", onKeyUp: "onkeyup", onLoad: "onload", onLoadedData: "onloadeddata", onLoadedMetadata: "onloadedmetadata", onLoadStart: "onloadstart", onMessage: "onmessage", onMouseDown: "onmousedown", onMouseEnter: "onmouseenter", onMouseLeave: "onmouseleave", onMouseMove: "onmousemove", onMouseOut: "onmouseout", onMouseOver: "onmouseover", onMouseUp: "onmouseup", onMouseWheel: "onmousewheel", onOffline: "onoffline", onOnline: "ononline", onPageHide: "onpagehide", onPageShow: "onpageshow", onPaste: "onpaste", onPause: "onpause", onPlay: "onplay", onPlaying: "onplaying", onPopState: "onpopstate", onProgress: "onprogress", onRateChange: "onratechange", onRepeat: "onrepeat", onReset: "onreset", onResize: "onresize", onScroll: "onscroll", onSeeked: "onseeked", onSeeking: "onseeking", onSelect: "onselect", onShow: "onshow", onStalled: "onstalled", onStorage: "onstorage", onSubmit: "onsubmit", onSuspend: "onsuspend", onTimeUpdate: "ontimeupdate", onToggle: "ontoggle", onUnload: "onunload", onVolumeChange: "onvolumechange", onWaiting: "onwaiting", onZoom: "onzoom", overlinePosition: "overline-position", overlineThickness: "overline-thickness", paintOrder: "paint-order", panose1: "panose-1", pointerEvents: "pointer-events", referrerPolicy: "referrerpolicy", renderingIntent: "rendering-intent", shapeRendering: "shape-rendering", stopColor: "stop-color", stopOpacity: "stop-opacity", strikethroughPosition: "strikethrough-position", strikethroughThickness: "strikethrough-thickness", strokeDashArray: "stroke-dasharray", strokeDashOffset: "stroke-dashoffset", strokeLineCap: "stroke-linecap", strokeLineJoin: "stroke-linejoin", strokeMiterLimit: "stroke-miterlimit", strokeOpacity: "stroke-opacity", strokeWidth: "stroke-width", tabIndex: "tabindex", textAnchor: "text-anchor", textDecoration: "text-decoration", textRendering: "text-rendering", transformOrigin: "transform-origin", typeOf: "typeof", underlinePosition: "underline-position", underlineThickness: "underline-thickness", unicodeBidi: "unicode-bidi", unicodeRange: "unicode-range", unitsPerEm: "units-per-em", vAlphabetic: "v-alphabetic", vHanging: "v-hanging", vIdeographic: "v-ideographic", vMathematical: "v-mathematical", vectorEffect: "vector-effect", vertAdvY: "vert-adv-y", vertOriginX: "vert-origin-x", vertOriginY: "vert-origin-y", wordSpacing: "word-spacing", writingMode: "writing-mode", xHeight: "x-height", playbackOrder: "playbackorder", timelineBegin: "timelinebegin" }, properties: { about: O, accentHeight: f, accumulate: null, additive: null, alignmentBaseline: null, alphabetic: f, amplitude: f, arabicForm: null, ascent: f, attributeName: null, attributeType: null, azimuth: f, bandwidth: null, baselineShift: null, baseFrequency: null, baseProfile: null, bbox: null, begin: null, bias: f, by: null, calcMode: null, capHeight: f, className: v, clip: null, clipPath: null, clipPathUnits: null, clipRule: null, color: null, colorInterpolation: null, colorInterpolationFilters: null, colorProfile: null, colorRendering: null, content: null, contentScriptType: null, contentStyleType: null, crossOrigin: null, cursor: null, cx: null, cy: null, d: null, dataType: null, defaultAction: null, descent: f, diffuseConstant: f, direction: null, display: null, dur: null, divisor: f, dominantBaseline: null, download: S, dx: null, dy: null, edgeMode: null, editable: null, elevation: f, enableBackground: null, end: null, event: null, exponent: f, externalResourcesRequired: null, fill: null, fillOpacity: f, fillRule: null, filter: null, filterRes: null, filterUnits: null, floodColor: null, floodOpacity: null, focusable: null, focusHighlight: null, fontFamily: null, fontSize: null, fontSizeAdjust: null, fontStretch: null, fontStyle: null, fontVariant: null, fontWeight: null, format: null, fr: null, from: null, fx: null, fy: null, g1: W, g2: W, glyphName: W, glyphOrientationHorizontal: null, glyphOrientationVertical: null, glyphRef: null, gradientTransform: null, gradientUnits: null, handler: null, hanging: f, hatchContentUnits: null, hatchUnits: null, height: null, href: null, hrefLang: null, horizAdvX: f, horizOriginX: f, horizOriginY: f, id: null, ideographic: f, imageRendering: null, initialVisibility: null, in: null, in2: null, intercept: f, k: f, k1: f, k2: f, k3: f, k4: f, kernelMatrix: O, kernelUnitLength: null, keyPoints: null, keySplines: null, keyTimes: null, kerning: null, lang: null, lengthAdjust: null, letterSpacing: null, lightingColor: null, limitingConeAngle: f, local: null, markerEnd: null, markerMid: null, markerStart: null, markerHeight: null, markerUnits: null, markerWidth: null, mask: null, maskContentUnits: null, maskType: null, maskUnits: null, mathematical: null, max: null, media: null, mediaCharacterEncoding: null, mediaContentEncodings: null, mediaSize: f, mediaTime: null, method: null, min: null, mode: null, name: null, navDown: null, navDownLeft: null, navDownRight: null, navLeft: null, navNext: null, navPrev: null, navRight: null, navUp: null, navUpLeft: null, navUpRight: null, numOctaves: null, observer: null, offset: null, onAbort: null, onActivate: null, onAfterPrint: null, onBeforePrint: null, onBegin: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnd: null, onEnded: null, onError: null, onFocus: null, onFocusIn: null, onFocusOut: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadStart: null, onMessage: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onMouseWheel: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRepeat: null, onReset: null, onResize: null, onScroll: null, onSeeked: null, onSeeking: null, onSelect: null, onShow: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnload: null, onVolumeChange: null, onWaiting: null, onZoom: null, opacity: null, operator: null, order: null, orient: null, orientation: null, origin: null, overflow: null, overlay: null, overlinePosition: f, overlineThickness: f, paintOrder: null, panose1: null, path: null, pathLength: f, patternContentUnits: null, patternTransform: null, patternUnits: null, phase: null, ping: v, pitch: null, playbackOrder: null, pointerEvents: null, points: null, pointsAtX: f, pointsAtY: f, pointsAtZ: f, preserveAlpha: null, preserveAspectRatio: null, primitiveUnits: null, propagate: null, property: O, r: null, radius: null, referrerPolicy: null, refX: null, refY: null, rel: O, rev: O, renderingIntent: null, repeatCount: null, repeatDur: null, requiredExtensions: O, requiredFeatures: O, requiredFonts: O, requiredFormats: O, resource: null, restart: null, result: null, rotate: null, rx: null, ry: null, scale: null, seed: null, shapeRendering: null, side: null, slope: null, snapshotTime: null, specularConstant: f, specularExponent: f, spreadMethod: null, spacing: null, startOffset: null, stdDeviation: null, stemh: null, stemv: null, stitchTiles: null, stopColor: null, stopOpacity: null, strikethroughPosition: f, strikethroughThickness: f, string: null, stroke: null, strokeDashArray: O, strokeDashOffset: null, strokeLineCap: null, strokeLineJoin: null, strokeMiterLimit: f, strokeOpacity: f, strokeWidth: null, style: null, surfaceScale: f, syncBehavior: null, syncBehaviorDefault: null, syncMaster: null, syncTolerance: null, syncToleranceDefault: null, systemLanguage: O, tabIndex: f, tableValues: null, target: null, targetX: f, targetY: f, textAnchor: null, textDecoration: null, textRendering: null, textLength: null, timelineBegin: null, title: null, transformBehavior: null, type: null, typeOf: O, to: null, transform: null, transformOrigin: null, u1: null, u2: null, underlinePosition: f, underlineThickness: f, unicode: null, unicodeBidi: null, unicodeRange: null, unitsPerEm: f, values: null, vAlphabetic: f, vMathematical: f, vectorEffect: null, vHanging: f, vIdeographic: f, version: null, vertAdvY: f, vertOriginX: f, vertOriginY: f, viewBox: null, viewTarget: null, visibility: null, width: null, widths: null, wordSpacing: null, writingMode: null, x: null, x1: null, x2: null, xChannelSelector: null, xHeight: f, y: null, y1: null, y2: null, yChannelSelector: null, z: null, zoomAndPan: null }, space: "svg", transform: Pe });
var ht = G({ properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null }, space: "xlink", transform(t, e) { return "xlink:" + e.slice(5).toLowerCase(); } });
var ft = G({ attributes: { xmlnsxlink: "xmlns:xlink" }, properties: { xmlnsXLink: null, xmlns: null }, space: "xmlns", transform: Ie });
var dt = G({ properties: { xmlBase: null, xmlLang: null, xmlSpace: null }, space: "xml", transform(t, e) { return "xml:" + e.slice(3).toLowerCase(); } });
var Xr = /[A-Z]/g, dn = /-[a-z]/g, Jr = /^data[-\w.:]+$/i;
function pt(t, e) { let n = pe(e), r = e, o = E; if (n in t.normal)
    return t.property[t.normal[n]]; if (n.length > 4 && n.slice(0, 4) === "data" && Jr.test(e)) {
    if (e.charAt(4) === "-") {
        let s = e.slice(5).replace(dn, Zr);
        r = "data" + s.charAt(0).toUpperCase() + s.slice(1);
    }
    else {
        let s = e.slice(4);
        if (!dn.test(s)) {
            let i = s.replace(Xr, Qr);
            i.charAt(0) !== "-" && (i = "-" + i), e = "data" + i;
        }
    }
    o = K;
} return new o(r, e); }
function Qr(t) { return "-" + t.toLowerCase(); }
function Zr(t) { return t.charAt(1).toUpperCase(); }
var pn = lt([ut, hn, ht, ft, dt], "html"), Oe = lt([ut, fn, ht, ft, dt], "svg");
var mn = {}.hasOwnProperty;
function gn(t, e) { let n = e || {}; function r(o, ...s) { let i = r.invalid, a = r.handlers; if (o && mn.call(o, t)) {
    let l = String(o[t]);
    i = mn.call(a, l) ? a[l] : r.unknown;
} if (i)
    return i.call(this, o, ...s); } return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r; }
var eo = /["&'<>`]/g, to = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, no = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, ro = /[|\\{}()[\]^$+*?.]/g, yn = new WeakMap;
function _n(t, e) { if (t = t.replace(e.subset ? oo(e.subset) : eo, r), e.subset || e.escapeOnly)
    return t; return t.replace(to, n).replace(no, r); function n(o, s, i) { return e.format((o.charCodeAt(0) - 55296) * 1024 + o.charCodeAt(1) - 56320 + 65536, i.charCodeAt(s + 2), e); } function r(o, s, i) { return e.format(o.charCodeAt(0), i.charCodeAt(s + 1), e); } }
function oo(t) { let e = yn.get(t); return e || (e = so(t), yn.set(t, e)), e; }
function so(t) { let e = [], n = -1; for (; ++n < t.length;)
    e.push(t[n].replace(ro, "\\$&")); return new RegExp("(?:" + e.join("|") + ")", "g"); }
var io = /[\dA-Fa-f]/;
function bn(t, e, n) { let r = "&#x" + t.toString(16).toUpperCase(); return n && e && !io.test(String.fromCharCode(e)) ? r : r + ";"; }
var ao = /\d/;
function Sn(t, e, n) { let r = "&#" + String(t); return n && e && !ao.test(String.fromCharCode(e)) ? r : r + ";"; }
var Cn = ["AElig", "AMP", "Aacute", "Acirc", "Agrave", "Aring", "Atilde", "Auml", "COPY", "Ccedil", "ETH", "Eacute", "Ecirc", "Egrave", "Euml", "GT", "Iacute", "Icirc", "Igrave", "Iuml", "LT", "Ntilde", "Oacute", "Ocirc", "Ograve", "Oslash", "Otilde", "Ouml", "QUOT", "REG", "THORN", "Uacute", "Ucirc", "Ugrave", "Uuml", "Yacute", "aacute", "acirc", "acute", "aelig", "agrave", "amp", "aring", "atilde", "auml", "brvbar", "ccedil", "cedil", "cent", "copy", "curren", "deg", "divide", "eacute", "ecirc", "egrave", "eth", "euml", "frac12", "frac14", "frac34", "gt", "iacute", "icirc", "iexcl", "igrave", "iquest", "iuml", "laquo", "lt", "macr", "micro", "middot", "nbsp", "not", "ntilde", "oacute", "ocirc", "ograve", "ordf", "ordm", "oslash", "otilde", "ouml", "para", "plusmn", "pound", "quot", "raquo", "reg", "sect", "shy", "sup1", "sup2", "sup3", "szlig", "thorn", "times", "uacute", "ucirc", "ugrave", "uml", "uuml", "yacute", "yen", "yuml"];
var Me = { nbsp: "\xA0", iexcl: "\xA1", cent: "\xA2", pound: "\xA3", curren: "\xA4", yen: "\xA5", brvbar: "\xA6", sect: "\xA7", uml: "\xA8", copy: "\xA9", ordf: "\xAA", laquo: "\xAB", not: "\xAC", shy: "\xAD", reg: "\xAE", macr: "\xAF", deg: "\xB0", plusmn: "\xB1", sup2: "\xB2", sup3: "\xB3", acute: "\xB4", micro: "\xB5", para: "\xB6", middot: "\xB7", cedil: "\xB8", sup1: "\xB9", ordm: "\xBA", raquo: "\xBB", frac14: "\xBC", frac12: "\xBD", frac34: "\xBE", iquest: "\xBF", Agrave: "\xC0", Aacute: "\xC1", Acirc: "\xC2", Atilde: "\xC3", Auml: "\xC4", Aring: "\xC5", AElig: "\xC6", Ccedil: "\xC7", Egrave: "\xC8", Eacute: "\xC9", Ecirc: "\xCA", Euml: "\xCB", Igrave: "\xCC", Iacute: "\xCD", Icirc: "\xCE", Iuml: "\xCF", ETH: "\xD0", Ntilde: "\xD1", Ograve: "\xD2", Oacute: "\xD3", Ocirc: "\xD4", Otilde: "\xD5", Ouml: "\xD6", times: "\xD7", Oslash: "\xD8", Ugrave: "\xD9", Uacute: "\xDA", Ucirc: "\xDB", Uuml: "\xDC", Yacute: "\xDD", THORN: "\xDE", szlig: "\xDF", agrave: "\xE0", aacute: "\xE1", acirc: "\xE2", atilde: "\xE3", auml: "\xE4", aring: "\xE5", aelig: "\xE6", ccedil: "\xE7", egrave: "\xE8", eacute: "\xE9", ecirc: "\xEA", euml: "\xEB", igrave: "\xEC", iacute: "\xED", icirc: "\xEE", iuml: "\xEF", eth: "\xF0", ntilde: "\xF1", ograve: "\xF2", oacute: "\xF3", ocirc: "\xF4", otilde: "\xF5", ouml: "\xF6", divide: "\xF7", oslash: "\xF8", ugrave: "\xF9", uacute: "\xFA", ucirc: "\xFB", uuml: "\xFC", yacute: "\xFD", thorn: "\xFE", yuml: "\xFF", fnof: "\u0192", Alpha: "\u0391", Beta: "\u0392", Gamma: "\u0393", Delta: "\u0394", Epsilon: "\u0395", Zeta: "\u0396", Eta: "\u0397", Theta: "\u0398", Iota: "\u0399", Kappa: "\u039A", Lambda: "\u039B", Mu: "\u039C", Nu: "\u039D", Xi: "\u039E", Omicron: "\u039F", Pi: "\u03A0", Rho: "\u03A1", Sigma: "\u03A3", Tau: "\u03A4", Upsilon: "\u03A5", Phi: "\u03A6", Chi: "\u03A7", Psi: "\u03A8", Omega: "\u03A9", alpha: "\u03B1", beta: "\u03B2", gamma: "\u03B3", delta: "\u03B4", epsilon: "\u03B5", zeta: "\u03B6", eta: "\u03B7", theta: "\u03B8", iota: "\u03B9", kappa: "\u03BA", lambda: "\u03BB", mu: "\u03BC", nu: "\u03BD", xi: "\u03BE", omicron: "\u03BF", pi: "\u03C0", rho: "\u03C1", sigmaf: "\u03C2", sigma: "\u03C3", tau: "\u03C4", upsilon: "\u03C5", phi: "\u03C6", chi: "\u03C7", psi: "\u03C8", omega: "\u03C9", thetasym: "\u03D1", upsih: "\u03D2", piv: "\u03D6", bull: "\u2022", hellip: "\u2026", prime: "\u2032", Prime: "\u2033", oline: "\u203E", frasl: "\u2044", weierp: "\u2118", image: "\u2111", real: "\u211C", trade: "\u2122", alefsym: "\u2135", larr: "\u2190", uarr: "\u2191", rarr: "\u2192", darr: "\u2193", harr: "\u2194", crarr: "\u21B5", lArr: "\u21D0", uArr: "\u21D1", rArr: "\u21D2", dArr: "\u21D3", hArr: "\u21D4", forall: "\u2200", part: "\u2202", exist: "\u2203", empty: "\u2205", nabla: "\u2207", isin: "\u2208", notin: "\u2209", ni: "\u220B", prod: "\u220F", sum: "\u2211", minus: "\u2212", lowast: "\u2217", radic: "\u221A", prop: "\u221D", infin: "\u221E", ang: "\u2220", and: "\u2227", or: "\u2228", cap: "\u2229", cup: "\u222A", int: "\u222B", there4: "\u2234", sim: "\u223C", cong: "\u2245", asymp: "\u2248", ne: "\u2260", equiv: "\u2261", le: "\u2264", ge: "\u2265", sub: "\u2282", sup: "\u2283", nsub: "\u2284", sube: "\u2286", supe: "\u2287", oplus: "\u2295", otimes: "\u2297", perp: "\u22A5", sdot: "\u22C5", lceil: "\u2308", rceil: "\u2309", lfloor: "\u230A", rfloor: "\u230B", lang: "\u2329", rang: "\u232A", loz: "\u25CA", spades: "\u2660", clubs: "\u2663", hearts: "\u2665", diams: "\u2666", quot: '"', amp: "&", lt: "<", gt: ">", OElig: "\u0152", oelig: "\u0153", Scaron: "\u0160", scaron: "\u0161", Yuml: "\u0178", circ: "\u02C6", tilde: "\u02DC", ensp: "\u2002", emsp: "\u2003", thinsp: "\u2009", zwnj: "\u200C", zwj: "\u200D", lrm: "\u200E", rlm: "\u200F", ndash: "\u2013", mdash: "\u2014", lsquo: "\u2018", rsquo: "\u2019", sbquo: "\u201A", ldquo: "\u201C", rdquo: "\u201D", bdquo: "\u201E", dagger: "\u2020", Dagger: "\u2021", permil: "\u2030", lsaquo: "\u2039", rsaquo: "\u203A", euro: "\u20AC" };
var kn = ["cent", "copy", "divide", "gt", "lt", "not", "para", "times"];
var wn = {}.hasOwnProperty, mt = {}, Be;
for (Be in Me)
    wn.call(Me, Be) && (mt[Me[Be]] = Be);
var lo = /[^\dA-Za-z]/;
function vn(t, e, n, r) { let o = String.fromCharCode(t); if (wn.call(mt, o)) {
    let s = mt[o], i = "&" + s;
    return n && Cn.includes(s) && !kn.includes(s) && (!r || e && e !== 61 && lo.test(String.fromCharCode(e))) ? i : i + ";";
} return ""; }
function Rn(t, e, n) { let r = bn(t, e, n.omitOptionalSemicolons), o; if ((n.useNamedReferences || n.useShortestReferences) && (o = vn(t, e, n.omitOptionalSemicolons, n.attribute)), (n.useShortestReferences || !o) && n.useShortestReferences) {
    let s = Sn(t, e, n.omitOptionalSemicolons);
    s.length < r.length && (r = s);
} return o && (!n.useShortestReferences || o.length < r.length) ? o : r; }
function z(t, e) { return _n(t, Object.assign({ format: Rn }, e)); }
var co = /^>|^->|<!--|-->|--!>|<!-$/g, uo = [">"], ho = ["<", ">"];
function xn(t, e, n, r) { return r.settings.bogusComments ? "<?" + z(t.value, Object.assign({}, r.settings.characterReferences, { subset: uo })) + ">" : "<!--" + t.value.replace(co, o) + "-->"; function o(s) { return z(s, Object.assign({}, r.settings.characterReferences, { subset: ho })); } }
function Tn(t, e, n, r) { return "<!" + (r.settings.upperDoctype ? "DOCTYPE" : "doctype") + (r.settings.tightDoctype ? "" : " ") + "html>"; }
function gt(t, e) { let n = String(t); if (typeof e != "string")
    throw new TypeError("Expected character"); let r = 0, o = n.indexOf(e); for (; o !== -1;)
    r++, o = n.indexOf(e, o + e.length); return r; }
function Nn(t, e) { let n = e || {}; return (t[t.length - 1] === "" ? [...t, ""] : t).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim(); }
function An(t) { return t.join(" ").trim(); }
var fo = /[ \t\n\f\r]/g;
function Y(t) { return typeof t == "object" ? t.type === "text" ? En(t.value) : !1 : En(t); }
function En(t) { return t.replace(fo, "") === ""; }
var A = Ln(1), yt = Ln(-1), po = [];
function Ln(t) { return e; function e(n, r, o) { let s = n ? n.children : po, i = (r || 0) + t, a = s[i]; if (!o)
    for (; a && Y(a);)
        i += t, a = s[i]; return a; } }
var mo = {}.hasOwnProperty;
function Ge(t) { return e; function e(n, r, o) { return mo.call(t, n.tagName) && t[n.tagName](n, r, o); } }
var ge = Ge({ body: yo, caption: _t, colgroup: _t, dd: Co, dt: So, head: _t, html: go, li: bo, optgroup: ko, option: wo, p: _o, rp: Pn, rt: Pn, tbody: Ro, td: In, tfoot: xo, th: In, thead: vo, tr: To });
function _t(t, e, n) { let r = A(n, e, !0); return !r || r.type !== "comment" && !(r.type === "text" && Y(r.value.charAt(0))); }
function go(t, e, n) { let r = A(n, e); return !r || r.type !== "comment"; }
function yo(t, e, n) { let r = A(n, e); return !r || r.type !== "comment"; }
function _o(t, e, n) { let r = A(n, e); return r ? r.type === "element" && (r.tagName === "address" || r.tagName === "article" || r.tagName === "aside" || r.tagName === "blockquote" || r.tagName === "details" || r.tagName === "div" || r.tagName === "dl" || r.tagName === "fieldset" || r.tagName === "figcaption" || r.tagName === "figure" || r.tagName === "footer" || r.tagName === "form" || r.tagName === "h1" || r.tagName === "h2" || r.tagName === "h3" || r.tagName === "h4" || r.tagName === "h5" || r.tagName === "h6" || r.tagName === "header" || r.tagName === "hgroup" || r.tagName === "hr" || r.tagName === "main" || r.tagName === "menu" || r.tagName === "nav" || r.tagName === "ol" || r.tagName === "p" || r.tagName === "pre" || r.tagName === "section" || r.tagName === "table" || r.tagName === "ul") : !n || !(n.type === "element" && (n.tagName === "a" || n.tagName === "audio" || n.tagName === "del" || n.tagName === "ins" || n.tagName === "map" || n.tagName === "noscript" || n.tagName === "video")); }
function bo(t, e, n) { let r = A(n, e); return !r || r.type === "element" && r.tagName === "li"; }
function So(t, e, n) { let r = A(n, e); return !!(r && r.type === "element" && (r.tagName === "dt" || r.tagName === "dd")); }
function Co(t, e, n) { let r = A(n, e); return !r || r.type === "element" && (r.tagName === "dt" || r.tagName === "dd"); }
function Pn(t, e, n) { let r = A(n, e); return !r || r.type === "element" && (r.tagName === "rp" || r.tagName === "rt"); }
function ko(t, e, n) { let r = A(n, e); return !r || r.type === "element" && r.tagName === "optgroup"; }
function wo(t, e, n) { let r = A(n, e); return !r || r.type === "element" && (r.tagName === "option" || r.tagName === "optgroup"); }
function vo(t, e, n) { let r = A(n, e); return !!(r && r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot")); }
function Ro(t, e, n) { let r = A(n, e); return !r || r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot"); }
function xo(t, e, n) { return !A(n, e); }
function To(t, e, n) { let r = A(n, e); return !r || r.type === "element" && r.tagName === "tr"; }
function In(t, e, n) { let r = A(n, e); return !r || r.type === "element" && (r.tagName === "td" || r.tagName === "th"); }
var On = Ge({ body: Eo, colgroup: Lo, head: Ao, html: No, tbody: Po });
function No(t) { let e = A(t, -1); return !e || e.type !== "comment"; }
function Ao(t) { let e = new Set; for (let r of t.children)
    if (r.type === "element" && (r.tagName === "base" || r.tagName === "title")) {
        if (e.has(r.tagName))
            return !1;
        e.add(r.tagName);
    } let n = t.children[0]; return !n || n.type === "element"; }
function Eo(t) { let e = A(t, -1, !0); return !e || e.type !== "comment" && !(e.type === "text" && Y(e.value.charAt(0))) && !(e.type === "element" && (e.tagName === "meta" || e.tagName === "link" || e.tagName === "script" || e.tagName === "style" || e.tagName === "template")); }
function Lo(t, e, n) { let r = yt(n, e), o = A(t, -1, !0); return n && r && r.type === "element" && r.tagName === "colgroup" && ge(r, n.children.indexOf(r), n) ? !1 : !!(o && o.type === "element" && o.tagName === "col"); }
function Po(t, e, n) { let r = yt(n, e), o = A(t, -1); return n && r && r.type === "element" && (r.tagName === "thead" || r.tagName === "tbody") && ge(r, n.children.indexOf(r), n) ? !1 : !!(o && o.type === "element" && o.tagName === "tr"); }
var De = { name: [[`	
\f\r &/=>`.split(""), `	
\f\r "&'/=>\``.split("")], [`\0	
\f\r "&'/<=>`.split(""), `\0	
\f\r "&'/<=>\``.split("")]], unquoted: [[`	
\f\r &>`.split(""), `\0	
\f\r "&'<=>\``.split("")], [`\0	
\f\r "&'<=>\``.split(""), `\0	
\f\r "&'<=>\``.split("")]], single: [["&'".split(""), "\"&'`".split("")], ["\0&'".split(""), "\0\"&'`".split("")]], double: [['"&'.split(""), "\"&'`".split("")], ['\0"&'.split(""), "\0\"&'`".split("")]] };
function Mn(t, e, n, r) { let o = r.schema, s = o.space === "svg" ? !1 : r.settings.omitOptionalTags, i = o.space === "svg" ? r.settings.closeEmptyElements : r.settings.voids.includes(t.tagName.toLowerCase()), a = [], l; o.space === "html" && t.tagName === "svg" && (r.schema = Oe); let c = Io(r, t.properties), u = r.all(o.space === "html" && t.tagName === "template" ? t.content : t); return r.schema = o, u && (i = !1), (c || !s || !On(t, e, n)) && (a.push("<", t.tagName, c ? " " + c : ""), i && (o.space === "svg" || r.settings.closeSelfClosing) && (l = c.charAt(c.length - 1), (!r.settings.tightSelfClosing || l === "/" || l && l !== '"' && l !== "'") && a.push(" "), a.push("/")), a.push(">")), a.push(u), !i && (!s || !ge(t, e, n)) && a.push("</" + t.tagName + ">"), a.join(""); }
function Io(t, e) { let n = [], r = -1, o; if (e) {
    for (o in e)
        if (e[o] !== null && e[o] !== void 0) {
            let s = Oo(t, o, e[o]);
            s && n.push(s);
        }
} for (; ++r < n.length;) {
    let s = t.settings.tightAttributes ? n[r].charAt(n[r].length - 1) : void 0;
    r !== n.length - 1 && s !== '"' && s !== "'" && (n[r] += " ");
} return n.join(""); }
function Oo(t, e, n) { let r = pt(t.schema, e), o = t.settings.allowParseErrors && t.schema.space === "html" ? 0 : 1, s = t.settings.allowDangerousCharacters ? 0 : 1, i = t.quote, a; if (r.overloadedBoolean && (n === r.attribute || n === "") ? n = !0 : (r.boolean || r.overloadedBoolean) && (typeof n != "string" || n === r.attribute || n === "") && (n = !!n), n == null || n === !1 || typeof n == "number" && Number.isNaN(n))
    return ""; let l = z(r.attribute, Object.assign({}, t.settings.characterReferences, { subset: De.name[o][s] })); return n === !0 || (n = Array.isArray(n) ? (r.commaSeparated ? Nn : An)(n, { padLeft: !t.settings.tightCommaSeparatedLists }) : String(n), t.settings.collapseEmptyAttributes && !n) ? l : (t.settings.preferUnquoted && (a = z(n, Object.assign({}, t.settings.characterReferences, { attribute: !0, subset: De.unquoted[o][s] }))), a !== n && (t.settings.quoteSmart && gt(n, i) > gt(n, t.alternative) && (i = t.alternative), a = i + z(n, Object.assign({}, t.settings.characterReferences, { subset: (i === "'" ? De.single : De.double)[o][s], attribute: !0 })) + i), l + (a && "=" + a)); }
var Mo = ["<", "&"];
function $e(t, e, n, r) { return n && n.type === "element" && (n.tagName === "script" || n.tagName === "style") ? t.value : z(t.value, Object.assign({}, r.settings.characterReferences, { subset: Mo })); }
function Bn(t, e, n, r) { return r.settings.allowDangerousHtml ? t.value : $e(t, e, n, r); }
function Gn(t, e, n, r) { return r.all(t); }
var Dn = gn("type", { invalid: Bo, unknown: Go, handlers: { comment: xn, doctype: Tn, element: Mn, raw: Bn, root: Gn, text: $e } });
function Bo(t) { throw new Error("Expected node, not `" + t + "`"); }
function Go(t) { let e = t; throw new Error("Cannot compile unknown node `" + e.type + "`"); }
var Do = {}, $o = {}, jo = [];
function bt(t, e) { let n = e || Do, r = n.quote || '"', o = r === '"' ? "'" : '"'; if (r !== '"' && r !== "'")
    throw new Error("Invalid quote `" + r + "`, expected `'` or `\"`"); return { one: Fo, all: Wo, settings: { omitOptionalTags: n.omitOptionalTags || !1, allowParseErrors: n.allowParseErrors || !1, allowDangerousCharacters: n.allowDangerousCharacters || !1, quoteSmart: n.quoteSmart || !1, preferUnquoted: n.preferUnquoted || !1, tightAttributes: n.tightAttributes || !1, upperDoctype: n.upperDoctype || !1, tightDoctype: n.tightDoctype || !1, bogusComments: n.bogusComments || !1, tightCommaSeparatedLists: n.tightCommaSeparatedLists || !1, tightSelfClosing: n.tightSelfClosing || !1, collapseEmptyAttributes: n.collapseEmptyAttributes || !1, allowDangerousHtml: n.allowDangerousHtml || !1, voids: n.voids || cn, characterReferences: n.characterReferences || $o, closeSelfClosing: n.closeSelfClosing || !1, closeEmptyElements: n.closeEmptyElements || !1 }, schema: n.space === "svg" ? Oe : pn, quote: r, alternative: o }.one(Array.isArray(t) ? { type: "root", children: t } : t, void 0, void 0); }
function Fo(t, e, n) { return Dn(t, e, n, this); }
function Wo(t) { let e = [], n = t && t.children || jo, r = -1; for (; ++r < n.length;)
    e[r] = this.one(n[r], r, t); return e.join(""); }
var $n = /\s+/g;
function Wn(t, e) { if (!e)
    return t; t.properties ||= {}, t.properties.class ||= [], typeof t.properties.class == "string" && (t.properties.class = t.properties.class.split($n)), Array.isArray(t.properties.class) || (t.properties.class = []); let n = Array.isArray(e) ? e : e.split($n); for (let r of n)
    r && !t.properties.class.includes(r) && t.properties.class.push(r); return t; }
var zo = /:?lang=["']([^"']+)["']/g, Ho = /(?:```|~~~)([\w-]+)/g, Uo = /\\begin\{([\w-]+)\}/g, qo = /<script\s+(?:type|lang)=["']([^"']+)["']/gi;
function Vo(t) { let e = Q(t, !0).map(([o]) => o); function n(o) { if (o === t.length)
    return { line: e.length - 1, character: e.at(-1).length }; let s = o, i = 0; for (let a of e) {
    if (s < a.length)
        break;
    s -= a.length, i++;
} return { line: i, character: s }; } function r(o, s) { let i = 0; for (let a = 0; a < o; a++)
    i += e[a].length; return i += s, i; } return { lines: e, indexToPos: n, posToIndex: r }; }
function bl(t, e, n) { let r = new Set; for (let s of t.matchAll(zo)) {
    let i = s[1].toLowerCase().trim();
    i && r.add(i);
} for (let s of t.matchAll(Ho)) {
    let i = s[1].toLowerCase().trim();
    i && r.add(i);
} for (let s of t.matchAll(Uo)) {
    let i = s[1].toLowerCase().trim();
    i && r.add(i);
} for (let s of t.matchAll(qo)) {
    let i = s[1].toLowerCase().trim(), a = i.includes("/") ? i.split("/").pop() : i;
    a && r.add(a);
} if (!n)
    return [...r]; let o = n.getBundledLanguages(); return [...r].filter(s => s && o[s]); }
var Ko = ["color", "background-color"];
function Yo(t, e) { let n = 0, r = []; for (let o of e)
    o > n && r.push(w(k({}, t), { content: t.content.slice(n, o), offset: t.offset + n })), n = o; return n < t.content.length && r.push(w(k({}, t), { content: t.content.slice(n), offset: t.offset + n })), r; }
function Xo(t, e) { let n = [...e instanceof Set ? e : new Set(e)].sort((r, o) => r - o); return n.length ? t.map(r => r.flatMap(o => { let s = n.filter(i => o.offset < i && i < o.offset + o.content.length).map(i => i - o.offset).sort((i, a) => i - a); return s.length ? Yo(o, s) : o; })) : t; }
function Jo(t, e, n, r, o = "css-vars") { let s = { content: t.content, explanation: t.explanation, offset: t.offset }, i = e.map(u => je(t.variants[u])), a = new Set(i.flatMap(u => Object.keys(u))), l = {}, c = (u, h) => { let d = h === "color" ? "" : h === "background-color" ? "-bg" : `-${h}`; return n + e[u] + (h === "color" ? "" : d); }; return i.forEach((u, h) => { for (let d of a) {
    let p = u[d] || "inherit";
    if (h === 0 && r && Ko.includes(d))
        if (r === "light-dark()" && i.length > 1) {
            let m = e.findIndex(_ => _ === "light"), b = e.findIndex(_ => _ === "dark");
            if (m === -1 || b === -1)
                throw new R('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
            l[d] = `light-dark(${i[m][d] || "inherit"}, ${i[b][d] || "inherit"})`, o === "css-vars" && (l[c(h, d)] = p);
        }
        else
            l[d] = p;
    else
        o === "css-vars" && (l[c(h, d)] = p);
} }), s.htmlStyle = l, s; }
function je(t) { let e = {}; if (t.color && (e.color = t.color), t.bgColor && (e["background-color"] = t.bgColor), t.fontStyle) {
    t.fontStyle & L.Italic && (e["font-style"] = "italic"), t.fontStyle & L.Bold && (e["font-weight"] = "bold");
    let n = [];
    t.fontStyle & L.Underline && n.push("underline"), t.fontStyle & L.Strikethrough && n.push("line-through"), n.length && (e["text-decoration"] = n.join(" "));
} return e; }
function Ct(t) { return typeof t == "string" ? t : Object.entries(t).map(([e, n]) => `${e}:${n}`).join(";"); }
function Qo() { let t = new WeakMap; function e(n) { if (!t.has(n.meta)) {
    let o = function (i) { if (typeof i == "number") {
        if (i < 0 || i > n.source.length)
            throw new R(`Invalid decoration offset: ${i}. Code length: ${n.source.length}`);
        return w(k({}, r.indexToPos(i)), { offset: i });
    }
    else {
        let a = r.lines[i.line];
        if (a === void 0)
            throw new R(`Invalid decoration position ${JSON.stringify(i)}. Lines length: ${r.lines.length}`);
        let l = i.character;
        if (l < 0 && (l = a.length + l), l < 0 || l > a.length)
            throw new R(`Invalid decoration position ${JSON.stringify(i)}. Line ${i.line} length: ${a.length}`);
        return w(k({}, i), { character: l, offset: r.posToIndex(i.line, l) });
    } }, r = Vo(n.source), s = (n.options.decorations || []).map(i => w(k({}, i), { start: o(i.start), end: o(i.end) }));
    Zo(s), t.set(n.meta, { decorations: s, converter: r, source: n.source });
} return t.get(n.meta); } return { name: "shiki:decorations", tokens(n) { if (this.options.decorations?.length)
        return Xo(n, e(this).decorations.flatMap(r => [r.start.offset, r.end.offset])); }, code(n) { if (!this.options.decorations?.length)
        return; let r = e(this), o = [...n.children].filter(u => u.type === "element" && u.tagName === "span"); if (o.length !== r.converter.lines.length)
        throw new R(`Number of lines in code element (${o.length}) does not match the number of lines in the source (${r.converter.lines.length}). Failed to apply decorations.`); function s(u, h, d, p) { let m = o[u], b = "", _ = -1, y = -1; if (h === 0 && (_ = 0), d === 0 && (y = 0), d === Number.POSITIVE_INFINITY && (y = m.children.length), _ === -1 || y === -1)
        for (let C = 0; C < m.children.length; C++)
            b += zn(m.children[C]), _ === -1 && b.length === h && (_ = C + 1), y === -1 && b.length === d && (y = C + 1); if (_ === -1)
        throw new R(`Failed to find start index for decoration ${JSON.stringify(p.start)}`); if (y === -1)
        throw new R(`Failed to find end index for decoration ${JSON.stringify(p.end)}`); let g = m.children.slice(_, y); if (!p.alwaysWrap && g.length === m.children.length)
        a(m, p, "line");
    else if (!p.alwaysWrap && g.length === 1 && g[0].type === "element")
        a(g[0], p, "token");
    else {
        let C = { type: "element", tagName: "span", properties: {}, children: g };
        a(C, p, "wrapper"), m.children.splice(_, g.length, C);
    } } function i(u, h) { o[u] = a(o[u], h, "line"); } function a(u, h, d) { let p = h.properties || {}, m = h.transform || (b => b); return u.tagName = h.tagName || "span", u.properties = w(k(k({}, u.properties), p), { class: u.properties.class }), h.properties?.class && Wn(u, h.properties.class), u = m(u, d) || u, u; } let l = [], c = r.decorations.sort((u, h) => h.start.offset - u.start.offset || u.end.offset - h.end.offset); for (let u of c) {
        let { start: h, end: d } = u;
        if (h.line === d.line)
            s(h.line, h.character, d.character, u);
        else if (h.line < d.line) {
            s(h.line, h.character, Number.POSITIVE_INFINITY, u);
            for (let p = h.line + 1; p < d.line; p++)
                l.unshift(() => i(p, u));
            s(d.line, 0, d.character, u);
        }
    } l.forEach(u => u()); } }; }
function Zo(t) { for (let e = 0; e < t.length; e++) {
    let n = t[e];
    if (n.start.offset > n.end.offset)
        throw new R(`Invalid decoration range: ${JSON.stringify(n.start)} - ${JSON.stringify(n.end)}`);
    for (let r = e + 1; r < t.length; r++) {
        let o = t[r], s = n.start.offset <= o.start.offset && o.start.offset < n.end.offset, i = n.start.offset < o.end.offset && o.end.offset <= n.end.offset, a = o.start.offset <= n.start.offset && n.start.offset < o.end.offset, l = o.start.offset < n.end.offset && n.end.offset <= o.end.offset;
        if (s || i || a || l) {
            if (s && i || a && l || a && n.start.offset === n.end.offset || i && o.start.offset === o.end.offset)
                continue;
            throw new R(`Decorations ${JSON.stringify(n.start)} and ${JSON.stringify(o.start)} intersect.`);
        }
    }
} }
function zn(t) { return t.type === "text" ? t.value : t.type === "element" ? t.children.map(zn).join("") : ""; }
var es = [Qo()];
function Fe(t) { let e = ts(t.transformers || []); return [...e.pre, ...e.normal, ...e.post, ...es]; }
function ts(t) { let e = [], n = [], r = []; for (let o of t)
    switch (o.enforce) {
        case "pre":
            e.push(o);
            break;
        case "post":
            n.push(o);
            break;
        default: r.push(o);
    } return { pre: e, post: n, normal: r }; }
var X = ["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white", "brightBlack", "brightRed", "brightGreen", "brightYellow", "brightBlue", "brightMagenta", "brightCyan", "brightWhite"], St = { 1: "bold", 2: "dim", 3: "italic", 4: "underline", 7: "reverse", 8: "hidden", 9: "strikethrough" };
function ns(t, e) { let n = t.indexOf("\x1B", e); if (n !== -1 && t[n + 1] === "[") {
    let r = t.indexOf("m", n);
    if (r !== -1)
        return { sequence: t.substring(n + 2, r).split(";"), startPosition: n, position: r + 1 };
} return { position: t.length }; }
function jn(t) { let e = t.shift(); if (e === "2") {
    let n = t.splice(0, 3).map(r => Number.parseInt(r));
    return n.length !== 3 || n.some(r => Number.isNaN(r)) ? void 0 : { type: "rgb", rgb: n };
}
else if (e === "5") {
    let n = t.shift();
    if (n)
        return { type: "table", index: Number(n) };
} }
function rs(t) { let e = []; for (; t.length > 0;) {
    let n = t.shift();
    if (!n)
        continue;
    let r = Number.parseInt(n);
    if (!Number.isNaN(r))
        if (r === 0)
            e.push({ type: "resetAll" });
        else if (r <= 9)
            St[r] && e.push({ type: "setDecoration", value: St[r] });
        else if (r <= 29) {
            let o = St[r - 20];
            o && (e.push({ type: "resetDecoration", value: o }), o === "dim" && e.push({ type: "resetDecoration", value: "bold" }));
        }
        else if (r <= 37)
            e.push({ type: "setForegroundColor", value: { type: "named", name: X[r - 30] } });
        else if (r === 38) {
            let o = jn(t);
            o && e.push({ type: "setForegroundColor", value: o });
        }
        else if (r === 39)
            e.push({ type: "resetForegroundColor" });
        else if (r <= 47)
            e.push({ type: "setBackgroundColor", value: { type: "named", name: X[r - 40] } });
        else if (r === 48) {
            let o = jn(t);
            o && e.push({ type: "setBackgroundColor", value: o });
        }
        else
            r === 49 ? e.push({ type: "resetBackgroundColor" }) : r === 53 ? e.push({ type: "setDecoration", value: "overline" }) : r === 55 ? e.push({ type: "resetDecoration", value: "overline" }) : r >= 90 && r <= 97 ? e.push({ type: "setForegroundColor", value: { type: "named", name: X[r - 90 + 8] } }) : r >= 100 && r <= 107 && e.push({ type: "setBackgroundColor", value: { type: "named", name: X[r - 100 + 8] } });
} return e; }
function os() { let t = null, e = null, n = new Set; return { parse(r) { let o = [], s = 0; do {
        let i = ns(r, s), a = i.sequence ? r.substring(s, i.startPosition) : r.substring(s);
        if (a.length > 0 && o.push({ value: a, foreground: t, background: e, decorations: new Set(n) }), i.sequence) {
            let l = rs(i.sequence);
            for (let c of l)
                c.type === "resetAll" ? (t = null, e = null, n.clear()) : c.type === "resetForegroundColor" ? t = null : c.type === "resetBackgroundColor" ? e = null : c.type === "resetDecoration" && n.delete(c.value);
            for (let c of l)
                c.type === "setForegroundColor" ? t = c.value : c.type === "setBackgroundColor" ? e = c.value : c.type === "setDecoration" && n.add(c.value);
        }
        s = i.position;
    } while (s < r.length); return o; } }; }
var ss = { black: "#000000", red: "#bb0000", green: "#00bb00", yellow: "#bbbb00", blue: "#0000bb", magenta: "#ff00ff", cyan: "#00bbbb", white: "#eeeeee", brightBlack: "#555555", brightRed: "#ff5555", brightGreen: "#00ff00", brightYellow: "#ffff55", brightBlue: "#5555ff", brightMagenta: "#ff55ff", brightCyan: "#55ffff", brightWhite: "#ffffff" };
function is(t = ss) { function e(a) { return t[a]; } function n(a) { return `#${a.map(l => Math.max(0, Math.min(l, 255)).toString(16).padStart(2, "0")).join("")}`; } let r; function o() { if (r)
    return r; r = []; for (let c = 0; c < X.length; c++)
    r.push(e(X[c])); let a = [0, 95, 135, 175, 215, 255]; for (let c = 0; c < 6; c++)
    for (let u = 0; u < 6; u++)
        for (let h = 0; h < 6; h++)
            r.push(n([a[c], a[u], a[h]])); let l = 8; for (let c = 0; c < 24; c++, l += 10)
    r.push(n([l, l, l])); return r; } function s(a) { return o()[a]; } function i(a) { switch (a.type) {
    case "named": return e(a.name);
    case "rgb": return n(a.rgb);
    case "table": return s(a.index);
} } return { value: i }; }
var as = /#([0-9a-f]{3,8})/i, ls = /var\((--[\w-]+-ansi-[\w-]+)\)/, cs = { black: "#000000", red: "#cd3131", green: "#0DBC79", yellow: "#E5E510", blue: "#2472C8", magenta: "#BC3FBC", cyan: "#11A8CD", white: "#E5E5E5", brightBlack: "#666666", brightRed: "#F14C4C", brightGreen: "#23D18B", brightYellow: "#F5F543", brightBlue: "#3B8EEA", brightMagenta: "#D670D6", brightCyan: "#29B8DB", brightWhite: "#FFFFFF" };
function us(t, e, n) { let r = le(t, n), o = Q(e), s = is(Object.fromEntries(X.map(a => { let l = `terminal.ansi${a[0].toUpperCase()}${a.substring(1)}`; return [a, t.colors?.[l] || cs[a]]; }))), i = os(); return o.map(a => i.parse(a[0]).map(l => { let c, u; l.decorations.has("reverse") ? (c = l.background ? s.value(l.background) : t.bg, u = l.foreground ? s.value(l.foreground) : t.fg) : (c = l.foreground ? s.value(l.foreground) : t.fg, u = l.background ? s.value(l.background) : void 0), c = j(c, r), u = j(u, r), l.decorations.has("dim") && (c = hs(c)); let h = L.None; return l.decorations.has("bold") && (h |= L.Bold), l.decorations.has("italic") && (h |= L.Italic), l.decorations.has("underline") && (h |= L.Underline), l.decorations.has("strikethrough") && (h |= L.Strikethrough), { content: l.value, offset: a[1], color: c, bgColor: u, fontStyle: h }; })); }
function hs(t) { let e = t.match(as); if (e) {
    let r = e[1];
    if (r.length === 8) {
        let o = Math.round(Number.parseInt(r.slice(6, 8), 16) / 2).toString(16).padStart(2, "0");
        return `#${r.slice(0, 6)}${o}`;
    }
    else {
        if (r.length === 6)
            return `#${r}80`;
        if (r.length === 4) {
            let o = r[0], s = r[1], i = r[2], a = r[3];
            return `#${o}${o}${s}${s}${i}${i}${Math.round(Number.parseInt(`${a}${a}`, 16) / 2).toString(16).padStart(2, "0")}`;
        }
        else if (r.length === 3) {
            let o = r[0], s = r[1], i = r[2];
            return `#${o}${o}${s}${s}${i}${i}80`;
        }
    }
} let n = t.match(ls); return n ? `var(${n[1]}-dim)` : t; }
function We(t, e, n = {}) { let r = t.resolveLangAlias(n.lang || "text"), { theme: o = t.getLoadedThemes()[0] } = n; if (!ce(r) && !ue(o) && r === "ansi") {
    let { theme: s } = t.setTheme(o);
    return us(s, e, n);
} return st(t, e, n); }
function ye(t, e, n) { let r, o, s, i, a, l; if ("themes" in n) {
    let { defaultColor: c = "light", cssVariablePrefix: u = "--shiki-", colorsRendering: h = "css-vars" } = n, d = Object.entries(n.themes).filter(y => y[1]).map(y => ({ color: y[0], theme: y[1] })).sort((y, g) => y.color === c ? -1 : g.color === c ? 1 : 0);
    if (d.length === 0)
        throw new R("`themes` option must not be empty");
    let p = de(t, e, n, We);
    if (l = Z(p), c && c !== "light-dark()" && !d.some(y => y.color === c))
        throw new R(`\`themes\` option must contain the defaultColor key \`${c}\``);
    let m = d.map(y => t.getTheme(y.theme)), b = d.map(y => y.color);
    s = p.map(y => y.map(g => Jo(g, b, u, c, h))), l && fe(s, l);
    let _ = d.map(y => le(y.theme, n));
    o = Fn(d, m, _, u, c, "fg", h), r = Fn(d, m, _, u, c, "bg", h), i = `shiki-themes ${m.map(y => y.name).join(" ")}`, a = c ? void 0 : [o, r].join(";");
}
else if ("theme" in n) {
    let c = le(n.theme, n);
    s = We(t, e, n);
    let u = t.getTheme(n.theme);
    r = j(u.bg, c), o = j(u.fg, c), i = u.name, l = Z(s);
}
else
    throw new R("Invalid options, either `theme` or `themes` must be provided"); return { tokens: s, fg: o, bg: r, themeName: i, rootStyle: a, grammarState: l }; }
function Fn(t, e, n, r, o, s, i) { return t.map((a, l) => { let c = j(e[l][s], n[l]) || "inherit", u = `${r + a.color}${s === "bg" ? "-bg" : ""}:${c}`; if (l === 0 && o) {
    if (o === "light-dark()" && t.length > 1) {
        let h = t.findIndex(p => p.color === "light"), d = t.findIndex(p => p.color === "dark");
        if (h === -1 || d === -1)
            throw new R('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
        return `light-dark(${j(e[h][s], n[h]) || "inherit"}, ${j(e[d][s], n[d]) || "inherit"});${u}`;
    }
    return c;
} return i === "css-vars" ? u : null; }).filter(a => !!a).join(";"); }
var Hn = /^\s+$/, fs = /^(\s*)(.*?)(\s*)$/;
function _e(t, e, n, r = { meta: {}, options: n, codeToHast: (o, s) => _e(t, o, s), codeToTokens: (o, s) => ye(t, o, s) }) { let o = e; for (let m of Fe(n))
    o = m.preprocess?.call(r, o, n) || o; let { tokens: s, fg: i, bg: a, themeName: l, rootStyle: c, grammarState: u } = ye(t, o, n), { mergeWhitespaces: h = !0, mergeSameStyleTokens: d = !1 } = n; h === !0 ? s = ps(s) : h === "never" && (s = ms(s)), d && (s = gs(s)); let p = w(k({}, r), { get source() { return o; } }); for (let m of Fe(n))
    s = m.tokens?.call(p, s) || s; return ds(s, w(k({}, n), { fg: i, bg: a, themeName: l, rootStyle: n.rootStyle === !1 ? !1 : n.rootStyle ?? c }), p, u); }
function ds(t, e, n, r = Z(t)) {
    let o = Fe(e), s = [], i = { type: "root", children: [] }, { structure: a = "classic", tabindex: l = "0" } = e, c = { class: `shiki ${e.themeName || ""}` };
    e.rootStyle !== !1 && (e.rootStyle != null ? c.style = e.rootStyle : c.style = `background-color:${e.bg};color:${e.fg}`), l !== !1 && l != null && (c.tabindex = l.toString());
    for (let [b, _] of Object.entries(e.meta || {}))
        b.startsWith("_") || (c[b] = _);
    let u = { type: "element", tagName: "pre", properties: c, children: [], data: e.data }, h = { type: "element", tagName: "code", properties: {}, children: s }, d = [], p = w(k({}, n), { structure: a, addClassToHast: Wn, get source() { return n.source; }, get tokens() { return t; }, get options() { return e; }, get root() { return i; }, get pre() { return u; }, get code() { return h; }, get lines() { return d; } });
    if (t.forEach((b, _) => {
        _ && (a === "inline" ? i.children.push({ type: "element", tagName: "br", properties: {}, children: [] }) : a === "classic" && s.push({ type: "text", value: `
` }));
        let y = { type: "element", tagName: "span", properties: { class: "line" }, children: [] }, g = 0;
        for (let C of b) {
            let x = { type: "element", tagName: "span", properties: k({}, C.htmlAttrs), children: [{ type: "text", value: C.content }] }, P = Ct(C.htmlStyle || je(C));
            P && (x.properties.style = P);
            for (let M of o)
                x = M?.span?.call(p, x, _ + 1, g, y, C) || x;
            a === "inline" ? i.children.push(x) : a === "classic" && y.children.push(x), g += C.content.length;
        }
        if (a === "classic") {
            for (let C of o)
                y = C?.line?.call(p, y, _ + 1) || y;
            d.push(y), s.push(y);
        }
        else
            a === "inline" && d.push(y);
    }), a === "classic") {
        for (let b of o)
            h = b?.code?.call(p, h) || h;
        u.children.push(h);
        for (let b of o)
            u = b?.pre?.call(p, u) || u;
        i.children.push(u);
    }
    else if (a === "inline") {
        let b = [], _ = { type: "element", tagName: "span", properties: { class: "line" }, children: [] };
        for (let g of i.children)
            g.type === "element" && g.tagName === "br" ? (b.push(_), _ = { type: "element", tagName: "span", properties: { class: "line" }, children: [] }) : (g.type === "element" || g.type === "text") && _.children.push(g);
        b.push(_);
        let y = { type: "element", tagName: "code", properties: {}, children: b };
        for (let g of o)
            y = g?.code?.call(p, y) || y;
        i.children = [];
        for (let g = 0; g < y.children.length; g++) {
            g > 0 && i.children.push({ type: "element", tagName: "br", properties: {}, children: [] });
            let C = y.children[g];
            C.type === "element" && i.children.push(...C.children);
        }
    }
    let m = i;
    for (let b of o)
        m = b?.root?.call(p, m) || m;
    return r && fe(m, r), m;
}
function ps(t) { return t.map(e => { let n = [], r = "", o; return e.forEach((s, i) => { let a = !(s.fontStyle && (s.fontStyle & L.Underline || s.fontStyle & L.Strikethrough)); a && Hn.test(s.content) && e[i + 1] ? (o === void 0 && (o = s.offset), r += s.content) : r ? (a ? n.push(w(k({}, s), { offset: o, content: r + s.content })) : n.push({ content: r, offset: o }, s), o = void 0, r = "") : n.push(s); }), n; }); }
function ms(t) { return t.map(e => e.flatMap(n => { if (Hn.test(n.content))
    return n; let r = n.content.match(fs); if (!r)
    return n; let [, o, s, i] = r; if (!o && !i)
    return n; let a = [w(k({}, n), { offset: n.offset + o.length, content: s })]; return o && a.unshift({ content: o, offset: n.offset }), i && a.push({ content: i, offset: n.offset + o.length + s.length }), a; })); }
function gs(t) { return t.map(e => { let n = []; for (let r of e) {
    if (n.length === 0) {
        n.push(k({}, r));
        continue;
    }
    let o = n.at(-1), s = Ct(o.htmlStyle || je(o)), i = Ct(r.htmlStyle || je(r)), a = o.fontStyle && (o.fontStyle & L.Underline || o.fontStyle & L.Strikethrough), l = r.fontStyle && (r.fontStyle & L.Underline || r.fontStyle & L.Strikethrough);
    !a && !l && s === i ? o.content += r.content : n.push(k({}, r));
} return n; }); }
var ys = bt;
function Un(t, e, n) { let r = { meta: {}, options: n, codeToHast: (s, i) => _e(t, s, i), codeToTokens: (s, i) => ye(t, s, i) }, o = ys(_e(t, e, n, r)); for (let s of Fe(n))
    o = s.postprocess?.call(r, o, n) || o; return o; }
function qn(t) { return N(this, null, function* () { let e = yield Ae(t); return w(k({ getLastGrammarState: (...n) => it(e, ...n), codeToTokensBase: (n, r) => We(e, n, r), codeToTokensWithThemes: (n, r) => de(e, n, r), codeToTokens: (n, r) => ye(e, n, r), codeToHast: (n, r) => _e(e, n, r), codeToHtml: (n, r) => Un(e, n, r), getBundledLanguages: () => ({}), getBundledThemes: () => ({}) }, e), { getInternalContext: () => e }); }); }
function Sl(t) { let e = he(t); return w(k({ getLastGrammarState: (...n) => it(e, ...n), codeToTokensBase: (n, r) => We(e, n, r), codeToTokensWithThemes: (n, r) => de(e, n, r), codeToTokens: (n, r) => ye(e, n, r), codeToHast: (n, r) => _e(e, n, r), codeToHtml: (n, r) => Un(e, n, r), getBundledLanguages: () => ({}), getBundledThemes: () => ({}) }, e), { getInternalContext: () => e }); }
function _s(t) { let e; function n(r) { return N(this, null, function* () { if (e) {
    let o = yield e;
    return yield Promise.all([o.loadTheme(...r.themes || []), o.loadLanguage(...r.langs || [])]), o;
}
else
    return e = t(w(k({}, r), { themes: r.themes || [], langs: r.langs || [] })), e; }); } return n; }
var Cl = _s(qn);
function kl(t) { let e = t.langs, n = t.themes, r = t.engine; function o(s) { return N(this, null, function* () { function i(h) { if (typeof h == "string") {
    if (h = s.langAlias?.[h] || h, rt(h))
        return [];
    let d = e[h];
    if (!d)
        throw new R(`Language \`${h}\` is not included in this bundle. You may want to load it from external source.`);
    return d;
} return h; } function a(h) { if (ot(h))
    return "none"; if (typeof h == "string") {
    let d = n[h];
    if (!d)
        throw new R(`Theme \`${h}\` is not included in this bundle. You may want to load it from external source.`);
    return d;
} return h; } let l = (s.themes ?? []).map(h => a(h)), c = (s.langs ?? []).map(h => i(h)), u = yield qn(w(k({ engine: s.engine ?? r() }, s), { themes: l, langs: c })); return w(k({}, u), { loadLanguage(...h) { return u.loadLanguage(...h.map(i)); }, loadTheme(...h) { return u.loadTheme(...h.map(a)); }, getBundledLanguages() { return e; }, getBundledThemes() { return n; } }); }); } return o; }
function bs(t) { let e; function n() { return N(this, arguments, function* (r = {}) { if (e) {
    let o = yield e;
    return yield Promise.all([o.loadTheme(...r.themes || []), o.loadLanguage(...r.langs || [])]), o;
}
else {
    e = t(w(k({}, r), { themes: [], langs: [] }));
    let o = yield e;
    return yield Promise.all([o.loadTheme(...r.themes || []), o.loadLanguage(...r.langs || [])]), o;
} }); } return n; }
function wl(t, e) { let n = bs(t); function r(s, i) { return N(this, null, function* () { let a = yield n({ langs: [i.lang], themes: "theme" in i ? [i.theme] : Object.values(i.themes) }), l = yield e?.guessEmbeddedLanguages?.(s, i.lang, a); return l && (yield a.loadLanguage(...l)), a; }); } return { getSingletonHighlighter(s) { return n(s); }, codeToHtml(s, i) { return N(this, null, function* () { return (yield r(s, i)).codeToHtml(s, i); }); }, codeToHast(s, i) { return N(this, null, function* () { return (yield r(s, i)).codeToHast(s, i); }); }, codeToTokens(s, i) { return N(this, null, function* () { return (yield r(s, i)).codeToTokens(s, i); }); }, codeToTokensBase(s, i) { return N(this, null, function* () { return (yield r(s, i)).codeToTokensBase(s, i); }); }, codeToTokensWithThemes(s, i) { return N(this, null, function* () { return (yield r(s, i)).codeToTokensWithThemes(s, i); }); }, getLastGrammarState(s, i) { return N(this, null, function* () { return (yield n({ langs: [i.lang], themes: [i.theme] })).getLastGrammarState(s, i); }); } }; }
function vl(t = {}) { let { name: e = "css-variables", variablePrefix: n = "--shiki-", fontStyle: r = !0 } = t, o = i => t.variableDefaults?.[i] ? `var(${n}${i}, ${t.variableDefaults[i]})` : `var(${n}${i})`, s = { name: e, type: "dark", colors: { "editor.foreground": o("foreground"), "editor.background": o("background"), "terminal.ansiBlack": o("ansi-black"), "terminal.ansiRed": o("ansi-red"), "terminal.ansiGreen": o("ansi-green"), "terminal.ansiYellow": o("ansi-yellow"), "terminal.ansiBlue": o("ansi-blue"), "terminal.ansiMagenta": o("ansi-magenta"), "terminal.ansiCyan": o("ansi-cyan"), "terminal.ansiWhite": o("ansi-white"), "terminal.ansiBrightBlack": o("ansi-bright-black"), "terminal.ansiBrightRed": o("ansi-bright-red"), "terminal.ansiBrightGreen": o("ansi-bright-green"), "terminal.ansiBrightYellow": o("ansi-bright-yellow"), "terminal.ansiBrightBlue": o("ansi-bright-blue"), "terminal.ansiBrightMagenta": o("ansi-bright-magenta"), "terminal.ansiBrightCyan": o("ansi-bright-cyan"), "terminal.ansiBrightWhite": o("ansi-bright-white") }, tokenColors: [{ scope: ["keyword.operator.accessor", "meta.group.braces.round.function.arguments", "meta.template.expression", "markup.fenced_code meta.embedded.block"], settings: { foreground: o("foreground") } }, { scope: "emphasis", settings: { fontStyle: "italic" } }, { scope: ["strong", "markup.heading.markdown", "markup.bold.markdown"], settings: { fontStyle: "bold" } }, { scope: ["markup.italic.markdown"], settings: { fontStyle: "italic" } }, { scope: "meta.link.inline.markdown", settings: { fontStyle: "underline", foreground: o("token-link") } }, { scope: ["string", "markup.fenced_code", "markup.inline"], settings: { foreground: o("token-string") } }, { scope: ["comment", "string.quoted.docstring.multi"], settings: { foreground: o("token-comment") } }, { scope: ["constant.numeric", "constant.language", "constant.other.placeholder", "constant.character.format.placeholder", "variable.language.this", "variable.other.object", "variable.other.class", "variable.other.constant", "meta.property-name", "meta.property-value", "support"], settings: { foreground: o("token-constant") } }, { scope: ["keyword", "storage.modifier", "storage.type", "storage.control.clojure", "entity.name.function.clojure", "entity.name.tag.yaml", "support.function.node", "support.type.property-name.json", "punctuation.separator.key-value", "punctuation.definition.template-expression"], settings: { foreground: o("token-keyword") } }, { scope: "variable.parameter.function", settings: { foreground: o("token-parameter") } }, { scope: ["support.function", "entity.name.type", "entity.other.inherited-class", "meta.function-call", "meta.instance.constructor", "entity.other.attribute-name", "entity.name.function", "constant.keyword.clojure"], settings: { foreground: o("token-function") } }, { scope: ["entity.name.tag", "string.quoted", "string.regexp", "string.interpolated", "string.template", "string.unquoted.plain.out.yaml", "keyword.other.template"], settings: { foreground: o("token-string-expression") } }, { scope: ["punctuation.definition.arguments", "punctuation.definition.dict", "punctuation.separator", "meta.function-call.arguments"], settings: { foreground: o("token-punctuation") } }, { scope: ["markup.underline.link", "punctuation.definition.metadata.markdown"], settings: { foreground: o("token-link") } }, { scope: ["beginning.punctuation.definition.list.markdown"], settings: { foreground: o("token-string") } }, { scope: ["punctuation.definition.string.begin.markdown", "punctuation.definition.string.end.markdown", "string.other.link.title.markdown", "string.other.link.description.markdown"], settings: { foreground: o("token-keyword") } }, { scope: ["markup.inserted", "meta.diff.header.to-file", "punctuation.definition.inserted"], settings: { foreground: o("token-inserted") } }, { scope: ["markup.deleted", "meta.diff.header.from-file", "punctuation.definition.deleted"], settings: { foreground: o("token-deleted") } }, { scope: ["markup.changed", "punctuation.definition.changed"], settings: { foreground: o("token-changed") } }] }; return r || (s.tokenColors = s.tokenColors?.map(i => (i.settings?.fontStyle && delete i.settings.fontStyle, i))), s; }
export { R as ShikiError, Wn as addClassToHast, j as applyColorReplacements, _e as codeToHast, Un as codeToHtml, ye as codeToTokens, We as codeToTokensBase, de as codeToTokensWithThemes, kl as createBundledHighlighter, vl as createCssVariablesTheme, qn as createHighlighterCore, Sl as createHighlighterCoreSync, Vo as createPositionConverter, $r as createShikiInternal, Dr as createShikiInternalSync, he as createShikiPrimitive, Ae as createShikiPrimitiveAsync, wl as createSingletonShorthands, Jo as flatTokenVariants, it as getLastGrammarState, Cl as getSingletonHighlighterCore, je as getTokenStyleObject, bl as guessEmbeddedLanguages, ys as hastToHtml, ue as isNoneTheme, ce as isPlainLang, rt as isSpecialLang, ot as isSpecialTheme, bs as makeSingletonHighlighter, _s as makeSingletonHighlighterCore, nt as normalizeGetter, Ne as normalizeTheme, le as resolveColorReplacements, Q as splitLines, Yo as splitToken, Xo as splitTokens, Ct as stringifyTokenStyle, tn as toArray, us as tokenizeAnsiWithTheme, ln as tokenizeWithTheme, ds as tokensToHast, Qo as transformerDecorations };
