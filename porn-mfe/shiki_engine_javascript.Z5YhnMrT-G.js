import { a as m, b as v, c as Ue } from "@nf-internal/chunk-JKOY2XUY";
var Y = class {
    patterns;
    options;
    regexps;
    constructor(e, r = {}) { this.patterns = e, this.options = r; let { forgiving: t = !1, cache: n, regexConstructor: a } = r; if (!a)
        throw new Error("Option `regexConstructor` is not provided"); this.regexps = e.map(s => { if (typeof s != "string")
        return s; let o = n?.get(s); if (o) {
        if (o instanceof RegExp)
            return o;
        if (t)
            return null;
        throw o;
    } try {
        let i = a(s);
        return n?.set(s, i), i;
    }
    catch (i) {
        if (n?.set(s, i), t)
            return null;
        throw i;
    } }); }
    findNextMatchSync(e, r, t) { let n = typeof e == "string" ? e : e.content, a = []; function s(o, i, u = 0) { return { index: o, captureIndices: i.indices.map(c => c == null ? { start: 4294967295, end: 4294967295, length: 0 } : { start: c[0] + u, end: c[1] + u, length: c[1] - c[0] }) }; } for (let o = 0; o < this.regexps.length; o++) {
        let i = this.regexps[o];
        if (i)
            try {
                i.lastIndex = r;
                let u = i.exec(n);
                if (!u)
                    continue;
                if (u.index === r)
                    return s(o, u, 0);
                a.push([o, u, 0]);
            }
            catch (u) {
                if (this.options.forgiving)
                    continue;
                throw u;
            }
    } if (a.length) {
        let o = Math.min(...a.map(i => i[1].index));
        for (let [i, u, c] of a)
            if (u.index === o)
                return s(i, u, c);
    } return null; }
};
function U(e) { if ([...e].length !== 1)
    throw new Error(`Expected "${e}" to be a single code point`); return e.codePointAt(0); }
function Oe(e, r, t) { return e.has(r) || e.set(r, t), e.get(r); }
var ee = new Set(["alnum", "alpha", "ascii", "blank", "cntrl", "digit", "graph", "lower", "print", "punct", "space", "upper", "word", "xdigit"]), x = String.raw;
function L(e, r) { if (e == null)
    throw new Error(r ?? "Value expected"); return e; }
var We = x `\[\^?`, He = `c.? | C(?:-.?)?|${x `[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${x `x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${x `u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${x `o\{[^\}]*\}?`}|${x `\d{1,3}`}`, ye = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/, ie = new RegExp(x `
  \\ (?:
    ${He}
    | [gk]<[^>]*>?
    | [gk]'[^']*'?
    | .
  )
  | \( (?:
    \? (?:
      [:=!>({]
      | <[=!]
      | <[^>]*>
      | '[^']*'
      | ~\|?
      | #(?:[^)\\]|\\.?)*
      | [^:)]*[:)]
    )?
    | \*[^\)]*\)?
  )?
  | (?:${ye.source})+
  | ${We}
  | .
`.replace(/\s+/g, ""), "gsu"), we = new RegExp(x `
  \\ (?:
    ${He}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${We}
  | &&
  | .
`.replace(/\s+/g, ""), "gsu");
function je(e, r = {}) { let t = v(m({ flags: "" }, r), { rules: m({ captureGroup: !1, singleline: !1 }, r.rules) }); if (typeof e != "string")
    throw new Error("String expected as pattern"); let n = Jr(t.flags), a = [n.extended], s = { captureGroup: t.rules.captureGroup, getCurrentModX() { return a.at(-1); }, numOpenGroups: 0, popModX() { a.pop(); }, pushModX(l) { a.push(l); }, replaceCurrentModX(l) { a[a.length - 1] = l; }, singleline: t.rules.singleline }, o = [], i; for (ie.lastIndex = 0; i = ie.exec(e);) {
    let l = Gr(s, e, i[0], ie.lastIndex);
    l.tokens ? o.push(...l.tokens) : l.token && o.push(l.token), l.lastIndex !== void 0 && (ie.lastIndex = l.lastIndex);
} let u = [], c = 0; o.filter(l => l.type === "GroupOpen").forEach(l => { l.kind === "capturing" ? l.number = ++c : l.raw === "(" && u.push(l); }), c || u.forEach((l, f) => { l.kind = "capturing", l.number = f + 1; }); let p = c || u.length; return { tokens: o.map(l => l.type === "EscapedNumber" ? Yr(l, p) : l).flat(), flags: n }; }
function Gr(e, r, t, n) {
    let [a, s] = t;
    if (t === "[" || t === "[^") {
        let o = Fr(r, t, n);
        return { tokens: o.tokens, lastIndex: o.lastIndex };
    }
    if (a === "\\") {
        if ("AbBGyYzZ".includes(s))
            return { token: De(t, t) };
        if (/^\\g[<']/.test(t)) {
            if (!/^\\g(?:<[^>]+>|'[^']+')$/.test(t))
                throw new Error(`Invalid group name "${t}"`);
            return { token: Wr(t) };
        }
        if (/^\\k[<']/.test(t)) {
            if (!/^\\k(?:<[^>]+>|'[^']+')$/.test(t))
                throw new Error(`Invalid group name "${t}"`);
            return { token: Ze(t) };
        }
        if (s === "K")
            return { token: Qe("keep", t) };
        if (s === "N" || s === "R")
            return { token: T("newline", t, { negate: s === "N" }) };
        if (s === "O")
            return { token: T("any", t) };
        if (s === "X")
            return { token: T("text_segment", t) };
        let o = Xe(t, { inCharClass: !1 });
        return Array.isArray(o) ? { tokens: o } : { token: o };
    }
    if (a === "(") {
        if (s === "*")
            return { token: Zr(t) };
        if (t === "(?{")
            throw new Error(`Unsupported callout "${t}"`);
        if (t.startsWith("(?#")) {
            if (r[n] !== ")")
                throw new Error('Unclosed comment group "(?#"');
            return { lastIndex: n + 1 };
        }
        if (/^\(\?[-imx]+[:)]$/.test(t))
            return { token: Xr(t, e) };
        if (e.pushModX(e.getCurrentModX()), e.numOpenGroups++, t === "(" && !e.captureGroup || t === "(?:")
            return { token: X("group", t) };
        if (t === "(?>")
            return { token: X("atomic", t) };
        if (t === "(?=" || t === "(?!" || t === "(?<=" || t === "(?<!")
            return { token: X(t[2] === "<" ? "lookbehind" : "lookahead", t, { negate: t.endsWith("!") }) };
        if (t === "(" && e.captureGroup || t.startsWith("(?<") && t.endsWith(">") || t.startsWith("(?'") && t.endsWith("'"))
            return { token: X("capturing", t, m({}, t !== "(" && { name: t.slice(3, -1) })) };
        if (t.startsWith("(?~")) {
            if (t === "(?~|")
                throw new Error(`Unsupported absence function kind "${t}"`);
            return { token: X("absence_repeater", t) };
        }
        throw t === "(?(" ? new Error(`Unsupported conditional "${t}"`) : new Error(`Invalid or unsupported group option "${t}"`);
    }
    if (t === ")") {
        if (e.popModX(), e.numOpenGroups--, e.numOpenGroups < 0)
            throw new Error('Unmatched ")"');
        return { token: Tr(t) };
    }
    if (e.getCurrentModX()) {
        if (t === "#") {
            let o = r.indexOf(`
`, n);
            return { lastIndex: o === -1 ? r.length : o };
        }
        if (/^\s$/.test(t)) {
            let o = /\s+/y;
            return o.lastIndex = n, { lastIndex: o.exec(r) ? o.lastIndex : n };
        }
    }
    if (t === ".")
        return { token: T("dot", t) };
    if (t === "^" || t === "$") {
        let o = e.singleline ? { "^": x `\A`, $: x `\Z` }[t] : t;
        return { token: De(o, t) };
    }
    return t === "|" ? { token: Rr(t) } : ye.test(t) ? { tokens: et(t) } : { token: G(U(t), t) };
}
function Fr(e, r, t) { let n = [Be(r[1] === "^", r)], a = 1, s; for (we.lastIndex = t; s = we.exec(e);) {
    let o = s[0];
    if (o[0] === "[" && o[1] !== ":")
        a++, n.push(Be(o[1] === "^", o));
    else if (o === "]") {
        if (n.at(-1).type === "CharacterClassOpen")
            n.push(G(93, o));
        else if (a--, n.push(Ur(o)), !a)
            break;
    }
    else {
        let i = Pr(o);
        Array.isArray(i) ? n.push(...i) : n.push(i);
    }
} return { tokens: n, lastIndex: we.lastIndex || e.length }; }
function Pr(e) { if (e[0] === "\\")
    return Xe(e, { inCharClass: !0 }); if (e[0] === "[") {
    let r = /\[:(?<negate>\^?)(?<name>[a-z]+):\]/.exec(e);
    if (!r || !ee.has(r.groups.name))
        throw new Error(`Invalid POSIX class "${e}"`);
    return T("posix", e, { value: r.groups.name, negate: !!r.groups.negate });
} return e === "-" ? Or(e) : e === "&&" ? Dr(e) : G(U(e), e); }
function Xe(e, { inCharClass: r }) { let t = e[1]; if (t === "c" || t === "C")
    return jr(e); if ("dDhHsSwW".includes(t))
    return Qr(e); if (e.startsWith(x `\o{`))
    throw new Error(`Incomplete, invalid, or unsupported octal code point "${e}"`); if (/^\\[pP]\{/.test(e)) {
    if (e.length === 3)
        throw new Error(`Incomplete or invalid Unicode property "${e}"`);
    return qr(e);
} if (new RegExp("^\\\\x[89A-Fa-f]\\p{AHex}", "u").test(e))
    try {
        let n = e.split(/\\x/).slice(1).map(o => parseInt(o, 16)), a = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 }).decode(new Uint8Array(n)), s = new TextEncoder;
        return [...a].map(o => { let i = [...s.encode(o)].map(u => `\\x${u.toString(16)}`).join(""); return G(U(o), i); });
    }
    catch {
        throw new Error(`Multibyte code "${e}" incomplete or invalid in Oniguruma`);
    } if (t === "u" || t === "x")
    return G(Kr(e), e); if (Te.has(t))
    return G(Te.get(t), e); if (/\d/.test(t))
    return Br(r, e); if (e === "\\")
    throw new Error(x `Incomplete escape "\"`); if (t === "M")
    throw new Error(`Unsupported meta "${e}"`); if ([...e].length === 2)
    return G(e.codePointAt(1), e); throw new Error(`Unexpected escape "${e}"`); }
function Rr(e) { return { type: "Alternator", raw: e }; }
function De(e, r) { return { type: "Assertion", kind: e, raw: r }; }
function Ze(e) { return { type: "Backreference", raw: e }; }
function G(e, r) { return { type: "Character", value: e, raw: r }; }
function Ur(e) { return { type: "CharacterClassClose", raw: e }; }
function Or(e) { return { type: "CharacterClassHyphen", raw: e }; }
function Dr(e) { return { type: "CharacterClassIntersector", raw: e }; }
function Be(e, r) { return { type: "CharacterClassOpen", negate: e, raw: r }; }
function T(e, r, t = {}) { return v(m({ type: "CharacterSet", kind: e }, t), { raw: r }); }
function Qe(e, r, t = {}) { return e === "keep" ? { type: "Directive", kind: e, raw: r } : { type: "Directive", kind: e, flags: L(t.flags), raw: r }; }
function Br(e, r) { return { type: "EscapedNumber", inCharClass: e, raw: r }; }
function Tr(e) { return { type: "GroupClose", raw: e }; }
function X(e, r, t = {}) { return v(m({ type: "GroupOpen", kind: e }, t), { raw: r }); }
function zr(e, r, t, n) { return { type: "NamedCallout", kind: e, tag: r, arguments: t, raw: n }; }
function Vr(e, r, t, n) { return { type: "Quantifier", kind: e, min: r, max: t, raw: n }; }
function Wr(e) { return { type: "Subroutine", raw: e }; }
var Hr = new Set(["COUNT", "CMP", "ERROR", "FAIL", "MAX", "MISMATCH", "SKIP", "TOTAL_COUNT"]), Te = new Map([["a", 7], ["b", 8], ["e", 27], ["f", 12], ["n", 10], ["r", 13], ["t", 9], ["v", 11]]);
function jr(e) { let r = e[1] === "c" ? e[2] : e[3]; if (!r || !/[A-Za-z]/.test(r))
    throw new Error(`Unsupported control character "${e}"`); return G(U(r.toUpperCase()) - 64, e); }
function Xr(e, r) { let { on: t, off: n } = /^\(\?(?<on>[imx]*)(?:-(?<off>[-imx]*))?/.exec(e).groups; n ??= ""; let a = (r.getCurrentModX() || t.includes("x")) && !n.includes("x"), s = Ve(t), o = Ve(n), i = {}; if (s && (i.enable = s), o && (i.disable = o), e.endsWith(")"))
    return r.replaceCurrentModX(a), Qe("flags", e, { flags: i }); if (e.endsWith(":"))
    return r.pushModX(a), r.numOpenGroups++, X("group", e, m({}, (s || o) && { flags: i })); throw new Error(`Unexpected flag modifier "${e}"`); }
function Zr(e) { let r = /\(\*(?<name>[A-Za-z_]\w*)?(?:\[(?<tag>(?:[A-Za-z_]\w*)?)\])?(?:\{(?<args>[^}]*)\})?\)/.exec(e); if (!r)
    throw new Error(`Incomplete or invalid named callout "${e}"`); let { name: t, tag: n, args: a } = r.groups; if (!t)
    throw new Error(`Invalid named callout "${e}"`); if (n === "")
    throw new Error(`Named callout tag with empty value not allowed "${e}"`); let s = a ? a.split(",").filter(p => p !== "").map(p => /^[+-]?\d+$/.test(p) ? +p : p) : [], [o, i, u] = s, c = Hr.has(t) ? t.toLowerCase() : "custom"; switch (c) {
    case "fail":
    case "mismatch":
    case "skip":
        if (s.length > 0)
            throw new Error(`Named callout arguments not allowed "${s}"`);
        break;
    case "error":
        if (s.length > 1)
            throw new Error(`Named callout allows only one argument "${s}"`);
        if (typeof o == "string")
            throw new Error(`Named callout argument must be a number "${o}"`);
        break;
    case "max":
        if (!s.length || s.length > 2)
            throw new Error(`Named callout must have one or two arguments "${s}"`);
        if (typeof o == "string" && !/^[A-Za-z_]\w*$/.test(o))
            throw new Error(`Named callout argument one must be a tag or number "${o}"`);
        if (s.length === 2 && (typeof i == "number" || !/^[<>X]$/.test(i)))
            throw new Error(`Named callout optional argument two must be '<', '>', or 'X' "${i}"`);
        break;
    case "count":
    case "total_count":
        if (s.length > 1)
            throw new Error(`Named callout allows only one argument "${s}"`);
        if (s.length === 1 && (typeof o == "number" || !/^[<>X]$/.test(o)))
            throw new Error(`Named callout optional argument must be '<', '>', or 'X' "${o}"`);
        break;
    case "cmp":
        if (s.length !== 3)
            throw new Error(`Named callout must have three arguments "${s}"`);
        if (typeof o == "string" && !/^[A-Za-z_]\w*$/.test(o))
            throw new Error(`Named callout argument one must be a tag or number "${o}"`);
        if (typeof i == "number" || !/^(?:[<>!=]=|[<>])$/.test(i))
            throw new Error(`Named callout argument two must be '==', '!=', '>', '<', '>=', or '<=' "${i}"`);
        if (typeof u == "string" && !/^[A-Za-z_]\w*$/.test(u))
            throw new Error(`Named callout argument three must be a tag or number "${u}"`);
        break;
    case "custom": throw new Error(`Undefined callout name "${t}"`);
    default: throw new Error(`Unexpected named callout kind "${c}"`);
} return zr(c, n ?? null, a?.split(",") ?? null, e); }
function ze(e) { let r = null, t, n; if (e[0] === "{") {
    let { minStr: a, maxStr: s } = /^\{(?<minStr>\d*)(?:,(?<maxStr>\d*))?/.exec(e).groups, o = 1e5;
    if (+a > o || s && +s > o)
        throw new Error("Quantifier value unsupported in Oniguruma");
    if (t = +a, n = s === void 0 ? +a : s === "" ? 1 / 0 : +s, t > n && (r = "possessive", [t, n] = [n, t]), e.endsWith("?")) {
        if (r === "possessive")
            throw new Error('Unsupported possessive interval quantifier chain with "?"');
        r = "lazy";
    }
    else
        r || (r = "greedy");
}
else
    t = e[0] === "+" ? 1 : 0, n = e[0] === "?" ? 1 : 1 / 0, r = e[1] === "+" ? "possessive" : e[1] === "?" ? "lazy" : "greedy"; return Vr(r, t, n, e); }
function Qr(e) { let r = e[1].toLowerCase(); return T({ d: "digit", h: "hex", s: "space", w: "word" }[r], e, { negate: e[1] !== r }); }
function qr(e) { let { p: r, neg: t, value: n } = /^\\(?<p>[pP])\{(?<neg>\^?)(?<value>[^}]+)/.exec(e).groups; return T("property", e, { value: n, negate: r === "P" && !t || r === "p" && !!t }); }
function Ve(e) { let r = {}; return e.includes("i") && (r.ignoreCase = !0), e.includes("m") && (r.dotAll = !0), e.includes("x") && (r.extended = !0), Object.keys(r).length ? r : null; }
function Jr(e) { let r = { ignoreCase: !1, dotAll: !1, extended: !1, digitIsAscii: !1, posixIsAscii: !1, spaceIsAscii: !1, wordIsAscii: !1, textSegmentMode: null }; for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (!"imxDPSWy".includes(n))
        throw new Error(`Invalid flag "${n}"`);
    if (n === "y") {
        if (!/^y{[gw]}/.test(e.slice(t)))
            throw new Error('Invalid or unspecified flag "y" mode');
        r.textSegmentMode = e[t + 2] === "g" ? "grapheme" : "word", t += 3;
        continue;
    }
    r[{ i: "ignoreCase", m: "dotAll", x: "extended", D: "digitIsAscii", P: "posixIsAscii", S: "spaceIsAscii", W: "wordIsAscii" }[n]] = !0;
} return r; }
function Kr(e) { if (new RegExp("^(?:\\\\u(?!\\p{AHex}{4})|\\\\x(?!\\p{AHex}{1,2}|\\{\\p{AHex}{1,8}\\}))", "u").test(e))
    throw new Error(`Incomplete or invalid escape "${e}"`); let r = e[2] === "{" ? new RegExp("^\\\\x\\{\\s*(?<hex>\\p{AHex}+)", "u").exec(e).groups.hex : e.slice(2); return parseInt(r, 16); }
function Yr(e, r) { let { raw: t, inCharClass: n } = e, a = t.slice(1); if (!n && (a !== "0" && a.length === 1 || a[0] !== "0" && +a <= r))
    return [Ze(t)]; let s = [], o = a.match(/^[0-7]+|\d/g); for (let i = 0; i < o.length; i++) {
    let u = o[i], c;
    if (i === 0 && u !== "8" && u !== "9") {
        if (c = parseInt(u, 8), c > 127)
            throw new Error(x `Octal encoded byte above 177 unsupported "${t}"`);
    }
    else
        c = U(u);
    s.push(G(c, (i === 0 ? "\\" : "") + u));
} return s; }
function et(e) { let r = [], t = new RegExp(ye, "gy"), n; for (; n = t.exec(e);) {
    let a = n[0];
    if (a[0] === "{") {
        let s = /^\{(?<min>\d+),(?<max>\d+)\}\??$/.exec(a);
        if (s) {
            let { min: o, max: i } = s.groups;
            if (+o > +i && a.endsWith("?")) {
                t.lastIndex--, r.push(ze(a.slice(0, -1)));
                continue;
            }
        }
    }
    r.push(ze(a));
} return r; }
function ue(e, r) { if (!Array.isArray(e.body))
    throw new Error("Expected node with body array"); if (e.body.length !== 1)
    return !1; let t = e.body[0]; return !r || Object.keys(r).every(n => r[n] === t[n]); }
function qe(e) { return rt.has(e.type); }
var rt = new Set(["AbsenceFunction", "Backreference", "CapturingGroup", "Character", "CharacterClass", "CharacterSet", "Group", "Quantifier", "Subroutine"]);
function le(e, r = {}) { let t = v(m({ flags: "", normalizeUnknownPropertyNames: !1, skipBackrefValidation: !1, skipLookbehindValidation: !1, skipPropertyNameValidation: !1, unicodePropertyMap: null }, r), { rules: m({ captureGroup: !1, singleline: !1 }, r.rules) }), n = je(e, { flags: t.flags, rules: { captureGroup: t.rules.captureGroup, singleline: t.rules.singleline } }), a = (f, g) => { let d = n.tokens[s.nextIndex]; switch (s.parent = f, s.nextIndex++, d.type) {
    case "Alternator": return F();
    case "Assertion": return tt(d);
    case "Backreference": return nt(d, s);
    case "Character": return Z(d.value, { useLastValid: !!g.isCheckingRangeEnd });
    case "CharacterClassHyphen": return st(d, s, g);
    case "CharacterClassOpen": return at(d, s, g);
    case "CharacterSet": return ot(d, s);
    case "Directive": return ft(d.kind, { flags: d.flags });
    case "GroupOpen": return it(d, s, g);
    case "NamedCallout": return gt(d.kind, d.tag, d.arguments);
    case "Quantifier": return ut(d, s);
    case "Subroutine": return ct(d, s);
    default: throw new Error(`Unexpected token type "${d.type}"`);
} }, s = { capturingGroups: [], hasNumberedRef: !1, namedGroupsByName: new Map, nextIndex: 0, normalizeUnknownPropertyNames: t.normalizeUnknownPropertyNames, parent: null, skipBackrefValidation: t.skipBackrefValidation, skipLookbehindValidation: t.skipLookbehindValidation, skipPropertyNameValidation: t.skipPropertyNameValidation, subroutines: [], tokens: n.tokens, unicodePropertyMap: t.unicodePropertyMap, walk: a }, o = mt(dt(n.flags)), i = o.body[0]; for (; s.nextIndex < n.tokens.length;) {
    let f = a(i, {});
    f.type === "Alternative" ? (o.body.push(f), i = f) : i.body.push(f);
} let { capturingGroups: u, hasNumberedRef: c, namedGroupsByName: p, subroutines: l } = s; if (c && p.size && !t.rules.captureGroup)
    throw new Error("Numbered backref/subroutine not allowed when using named capture"); for (let { ref: f } of l)
    if (typeof f == "number") {
        if (f > u.length)
            throw new Error("Subroutine uses a group number that's not defined");
        f && (u[f - 1].isSubroutined = !0);
    }
    else if (p.has(f)) {
        if (p.get(f).length > 1)
            throw new Error(x `Subroutine uses a duplicate group name "\g<${f}>"`);
        p.get(f)[0].isSubroutined = !0;
    }
    else
        throw new Error(x `Subroutine uses a group name that's not defined "\g<${f}>"`); return o; }
function tt({ kind: e }) { return pe(L({ "^": "line_start", $: "line_end", "\\A": "string_start", "\\b": "word_boundary", "\\B": "word_boundary", "\\G": "search_start", "\\y": "text_segment_boundary", "\\Y": "text_segment_boundary", "\\z": "string_end", "\\Z": "string_end_newline" }[e], `Unexpected assertion kind "${e}"`), { negate: e === x `\B` || e === x `\Y` }); }
function nt({ raw: e }, r) { let t = /^\\k[<']/.test(e), n = t ? e.slice(3, -1) : e.slice(1), a = (s, o = !1) => { let i = r.capturingGroups.length, u = !1; if (s > i)
    if (r.skipBackrefValidation)
        u = !0;
    else
        throw new Error(`Not enough capturing groups defined to the left "${e}"`); return r.hasNumberedRef = !0, ce(o ? i + 1 - s : s, { orphan: u }); }; if (t) {
    let s = /^(?<sign>-?)0*(?<num>[1-9]\d*)$/.exec(n);
    if (s)
        return a(+s.groups.num, !!s.groups.sign);
    if (/[-+]/.test(n))
        throw new Error(`Invalid backref name "${e}"`);
    if (!r.namedGroupsByName.has(n))
        throw new Error(`Group name not defined to the left "${e}"`);
    return ce(n);
} return a(+n); }
function st(e, r, t) { let { tokens: n, walk: a } = r, s = r.parent, o = s.body.at(-1), i = n[r.nextIndex]; if (!t.isCheckingRangeEnd && o && o.type !== "CharacterClass" && o.type !== "CharacterClassRange" && i && i.type !== "CharacterClassOpen" && i.type !== "CharacterClassClose" && i.type !== "CharacterClassIntersector") {
    let u = a(s, v(m({}, t), { isCheckingRangeEnd: !0 }));
    if (o.type === "Character" && u.type === "Character")
        return s.body.pop(), pt(o, u);
    throw new Error("Invalid character class range");
} return Z(U("-")); }
function at({ negate: e }, r, t) { let { tokens: n, walk: a } = r, s = [re()], o = n[r.nextIndex], i = Ye(o); for (; i.type !== "CharacterClassClose";) {
    if (i.type === "CharacterClassIntersector")
        s.push(re()), r.nextIndex++;
    else {
        let c = s.at(-1);
        c.body.push(a(c, t));
    }
    i = Ye(n[r.nextIndex], o);
} let u = re({ negate: e }); return s.length === 1 ? u.body = s[0].body : (u.kind = "intersection", u.body = s.map(c => c.body.length === 1 ? c.body[0] : c)), r.nextIndex++, u; }
function ot({ kind: e, negate: r, value: t }, n) { let { normalizeUnknownPropertyNames: a, skipPropertyNameValidation: s, unicodePropertyMap: o } = n; if (e === "property") {
    let i = Q(t);
    if (ee.has(i) && !o?.has(i))
        e = "posix", t = i;
    else
        return z(t, { negate: r, normalizeUnknownPropertyNames: a, skipPropertyNameValidation: s, unicodePropertyMap: o });
} return e === "posix" ? ht(t, { negate: r }) : fe(e, { negate: r }); }
function it(e, r, t) { let { tokens: n, capturingGroups: a, namedGroupsByName: s, skipLookbehindValidation: o, walk: i } = r, u = wt(e), c = u.type === "AbsenceFunction", p = Ke(u), l = p && u.negate; if (u.type === "CapturingGroup" && (a.push(u), u.name && Oe(s, u.name, []).push(u)), c && t.isInAbsenceFunction)
    throw new Error("Nested absence function not supported by Oniguruma"); let f = er(n[r.nextIndex]); for (; f.type !== "GroupClose";) {
    if (f.type === "Alternator")
        u.body.push(F()), r.nextIndex++;
    else {
        let g = u.body.at(-1), d = i(g, v(m({}, t), { isInAbsenceFunction: t.isInAbsenceFunction || c, isInLookbehind: t.isInLookbehind || p, isInNegLookbehind: t.isInNegLookbehind || l }));
        if (g.body.push(d), (p || t.isInLookbehind) && !o) {
            let w = "Lookbehind includes a pattern not allowed by Oniguruma";
            if (l || t.isInNegLookbehind) {
                if (Je(d) || d.type === "CapturingGroup")
                    throw new Error(w);
            }
            else if (Je(d) || Ke(d) && d.negate)
                throw new Error(w);
        }
    }
    f = er(n[r.nextIndex]);
} return r.nextIndex++, u; }
function ut({ kind: e, min: r, max: t }, n) { let a = n.parent, s = a.body.at(-1); if (!s || !qe(s))
    throw new Error("Quantifier requires a repeatable token"); let o = be(e, r, t, s); return a.body.pop(), o; }
function ct({ raw: e }, r) { let { capturingGroups: t, subroutines: n } = r, a = e.slice(3, -1), s = /^(?<sign>[-+]?)0*(?<num>[1-9]\d*)$/.exec(a); if (s) {
    let i = +s.groups.num, u = t.length;
    if (r.hasNumberedRef = !0, a = { "": i, "+": u + i, "-": u + 1 - i }[s.groups.sign], a < 1)
        throw new Error("Invalid subroutine number");
}
else
    a === "0" && (a = 0); let o = xe(a); return n.push(o), o; }
function lt(e, r) { if (e !== "repeater")
    throw new Error(`Unexpected absence function kind "${e}"`); return { type: "AbsenceFunction", kind: e, body: te(r?.body) }; }
function F(e) { return { type: "Alternative", body: rr(e?.body) }; }
function pe(e, r) { let t = { type: "Assertion", kind: e }; return (e === "word_boundary" || e === "text_segment_boundary") && (t.negate = !!r?.negate), t; }
function ce(e, r) { let t = !!r?.orphan; return m({ type: "Backreference", ref: e }, t && { orphan: t }); }
function Ce(e, r) { let t = m({ name: void 0, isSubroutined: !1 }, r); if (t.name !== void 0 && !yt(t.name))
    throw new Error(`Group name "${t.name}" invalid in Oniguruma`); return v(m(m({ type: "CapturingGroup", number: e }, t.name && { name: t.name }), t.isSubroutined && { isSubroutined: t.isSubroutined }), { body: te(r?.body) }); }
function Z(e, r) { let t = m({ useLastValid: !1 }, r); if (e > 1114111) {
    let n = e.toString(16);
    if (t.useLastValid)
        e = 1114111;
    else
        throw e > 1310719 ? new Error(`Invalid code point out of range "\\x{${n}}"`) : new Error(`Invalid code point out of range in JS "\\x{${n}}"`);
} return { type: "Character", value: e }; }
function re(e) { let r = m({ kind: "union", negate: !1 }, e); return { type: "CharacterClass", kind: r.kind, negate: r.negate, body: rr(e?.body) }; }
function pt(e, r) { if (r.value < e.value)
    throw new Error("Character class range out of order"); return { type: "CharacterClassRange", min: e, max: r }; }
function fe(e, r) { let t = !!r?.negate, n = { type: "CharacterSet", kind: e }; return (e === "digit" || e === "hex" || e === "newline" || e === "space" || e === "word") && (n.negate = t), (e === "text_segment" || e === "newline" && !t) && (n.variableLength = !0), n; }
function ft(e, r = {}) { if (e === "keep")
    return { type: "Directive", kind: e }; if (e === "flags")
    return { type: "Directive", kind: e, flags: L(r.flags) }; throw new Error(`Unexpected directive kind "${e}"`); }
function dt(e) { return m({ type: "Flags" }, e); }
function S(e) { let r = e?.atomic, t = e?.flags; if (r && t)
    throw new Error("Atomic group cannot have flags"); return v(m(m({ type: "Group" }, r && { atomic: r }), t && { flags: t }), { body: te(e?.body) }); }
function O(e) { let r = m({ behind: !1, negate: !1 }, e); return { type: "LookaroundAssertion", kind: r.behind ? "lookbehind" : "lookahead", negate: r.negate, body: te(e?.body) }; }
function gt(e, r, t) { return { type: "NamedCallout", kind: e, tag: r, arguments: t }; }
function ht(e, r) { let t = !!r?.negate; if (!ee.has(e))
    throw new Error(`Invalid POSIX class "${e}"`); return { type: "CharacterSet", kind: "posix", value: e, negate: t }; }
function be(e, r, t, n) { if (r > t)
    throw new Error("Invalid reversed quantifier range"); return { type: "Quantifier", kind: e, min: r, max: t, body: n }; }
function mt(e, r) { return { type: "Regex", body: te(r?.body), flags: e }; }
function xe(e) { return { type: "Subroutine", ref: e }; }
function z(e, r) { let t = m({ negate: !1, normalizeUnknownPropertyNames: !1, skipPropertyNameValidation: !1, unicodePropertyMap: null }, r), n = t.unicodePropertyMap?.get(Q(e)); if (!n) {
    if (t.normalizeUnknownPropertyNames)
        n = Ct(e);
    else if (t.unicodePropertyMap && !t.skipPropertyNameValidation)
        throw new Error(x `Invalid Unicode property "\p{${e}}"`);
} return { type: "CharacterSet", kind: "property", value: n ?? e, negate: t.negate }; }
function wt({ flags: e, kind: r, name: t, negate: n, number: a }) { switch (r) {
    case "absence_repeater": return lt("repeater");
    case "atomic": return S({ atomic: !0 });
    case "capturing": return Ce(a, { name: t });
    case "group": return S({ flags: e });
    case "lookahead":
    case "lookbehind": return O({ behind: r === "lookbehind", negate: n });
    default: throw new Error(`Unexpected group kind "${r}"`);
} }
function te(e) { if (e === void 0)
    e = [F()];
else if (!Array.isArray(e) || !e.length || !e.every(r => r.type === "Alternative"))
    throw new Error("Invalid body; expected array of one or more Alternative nodes"); return e; }
function rr(e) { if (e === void 0)
    e = [];
else if (!Array.isArray(e) || !e.every(r => !!r.type))
    throw new Error("Invalid body; expected array of nodes"); return e; }
function Je(e) { return e.type === "LookaroundAssertion" && e.kind === "lookahead"; }
function Ke(e) { return e.type === "LookaroundAssertion" && e.kind === "lookbehind"; }
function yt(e) { return /^[\p{Alpha}\p{Pc}][^)]*$/u.test(e); }
function Ct(e) { return e.trim().replace(/[- _]+/g, "_").replace(/[A-Z][a-z]+(?=[A-Z])/g, "$&_").replace(/[A-Za-z]+/g, r => r[0].toUpperCase() + r.slice(1).toLowerCase()); }
function Q(e) { return e.replace(/[- _]+/g, "").toLowerCase(); }
function Ye(e, r) { let t = r; return L(e, `Unclosed character class${t?.type === "Character" && t.value === 93 && t.raw === "]" ? ' (started with "]")' : ""}`); }
function er(e) { return L(e, "Unclosed group"); }
function V(e, r, t = null) { function n(s, o) { for (let i = 0; i < s.length; i++) {
    let u = a(s[i], o, i, s);
    i = Math.max(-1, i + u);
} } function a(s, o = null, i = null, u = null) { let c = 0, p = !1, l = { node: s, parent: o, key: i, container: u, root: e, remove() { de(u).splice(Math.max(0, q(i) + c), 1), c--, p = !0; }, removeAllNextSiblings() { return de(u).splice(q(i) + 1); }, removeAllPrevSiblings() { let C = q(i) + c; return c -= C, de(u).splice(0, Math.max(0, C)); }, replaceWith(C, A = {}) { let $ = !!A.traverse; u ? u[Math.max(0, q(i) + c)] = C : L(o, "Can't replace root node")[i] = C, $ && a(C, o, i, u), p = !0; }, replaceWithMultiple(C, A = {}) { let $ = !!A.traverse; if (de(u).splice(Math.max(0, q(i) + c), 1, ...C), c += C.length - 1, $) {
        let E = 0;
        for (let _ = 0; _ < C.length; _++)
            E += a(C[_], o, q(i) + _ + E, u);
    } p = !0; }, skip() { p = !0; } }, { type: f } = s, g = r["*"], d = r[f], w = typeof g == "function" ? g : g?.enter, y = typeof d == "function" ? d : d?.enter; if (w?.(l, t), y?.(l, t), !p)
    switch (f) {
        case "AbsenceFunction":
        case "Alternative":
        case "CapturingGroup":
        case "CharacterClass":
        case "Group":
        case "LookaroundAssertion":
            n(s.body, s);
            break;
        case "Assertion":
        case "Backreference":
        case "Character":
        case "CharacterSet":
        case "Directive":
        case "Flags":
        case "NamedCallout":
        case "Subroutine": break;
        case "CharacterClassRange":
            a(s.min, s, "min"), a(s.max, s, "max");
            break;
        case "Quantifier":
            a(s.body, s, "body");
            break;
        case "Regex":
            n(s.body, s), a(s.flags, s, "flags");
            break;
        default: throw new Error(`Unexpected node type "${f}"`);
    } return d?.exit?.(l, t), g?.exit?.(l, t), c; } return a(e), e; }
function de(e) { if (!Array.isArray(e))
    throw new Error("Container expected"); return e; }
function q(e) { if (typeof e != "number")
    throw new Error("Numeric key expected"); return e; }
var tr = String.raw `\(\?(?:[:=!>A-Za-z\-]|<[=!]|\(DEFINE\))`;
function nr(e, r) { for (let t = 0; t < e.length; t++)
    e[t] >= r && e[t]++; }
function sr(e, r, t, n) { return e.slice(0, r) + n + e.slice(r + t.length); }
var I = Object.freeze({ DEFAULT: "DEFAULT", CHAR_CLASS: "CHAR_CLASS" });
function ne(e, r, t, n) { let a = new RegExp(String.raw `${r}|(?<$skip>\[\^?|\\?.)`, "gsu"), s = [!1], o = 0, i = ""; for (let u of e.matchAll(a)) {
    let { 0: c, groups: { $skip: p } } = u;
    if (!p && (!n || n === I.DEFAULT == !o)) {
        t instanceof Function ? i += t(u, { context: o ? I.CHAR_CLASS : I.DEFAULT, negated: s[s.length - 1] }) : i += t;
        continue;
    }
    c[0] === "[" ? (o++, s.push(c[1] === "^")) : c === "]" && o && (o--, s.pop()), i += c;
} return i; }
function ke(e, r, t, n) { ne(e, r, t, n); }
function bt(e, r, t = 0, n) { if (!new RegExp(r, "su").test(e))
    return null; let a = new RegExp(`${r}|(?<$skip>\\\\?.)`, "gsu"); a.lastIndex = t; let s = 0, o; for (; o = a.exec(e);) {
    let { 0: i, groups: { $skip: u } } = o;
    if (!u && (!n || n === I.DEFAULT == !s))
        return o;
    i === "[" ? s++ : i === "]" && s && s--, a.lastIndex == o.index && a.lastIndex++;
} return null; }
function se(e, r, t) { return !!bt(e, r, 0, t); }
function ar(e, r) { let t = /\\?./gsu; t.lastIndex = r; let n = e.length, a = 0, s = 1, o; for (; o = t.exec(e);) {
    let [i] = o;
    if (i === "[")
        a++;
    else if (a)
        i === "]" && a--;
    else if (i === "(")
        s++;
    else if (i === ")" && (s--, !s)) {
        n = o.index;
        break;
    }
} return e.slice(r, n); }
var or = new RegExp(String.raw `(?<noncapturingStart>${tr})|(?<capturingStart>\((?:\?<[^>]+>)?)|\\?.`, "gsu");
function Ae(e, r) { let t = r?.hiddenCaptures ?? [], n = r?.captureTransfers ?? new Map; if (!/\(\?>/.test(e))
    return { pattern: e, captureTransfers: n, hiddenCaptures: t }; let a = "(?>", s = "(?:(?=(", o = [0], i = [], u = 0, c = 0, p = NaN, l; do {
    l = !1;
    let f = 0, g = 0, d = !1, w;
    for (or.lastIndex = Number.isNaN(p) ? 0 : p + s.length; w = or.exec(e);) {
        let { 0: y, index: C, groups: { capturingStart: A, noncapturingStart: $ } } = w;
        if (y === "[")
            f++;
        else if (f)
            y === "]" && f--;
        else if (y === a && !d)
            p = C, d = !0;
        else if (d && $)
            g++;
        else if (A)
            d ? g++ : (u++, o.push(u + c));
        else if (y === ")" && d) {
            if (!g) {
                c++;
                let E = u + c;
                if (e = `${e.slice(0, p)}${s}${e.slice(p + a.length, C)}))<$$${E}>)${e.slice(C + 1)}`, l = !0, i.push(E), nr(t, E), n.size) {
                    let _ = new Map;
                    n.forEach((oe, H) => { _.set(H >= E ? H + 1 : H, oe.map(j => j >= E ? j + 1 : j)); }), n = _;
                }
                break;
            }
            g--;
        }
    }
} while (l); return t.push(...i), e = ne(e, String.raw `\\(?<backrefNum>[1-9]\d*)|<\$\$(?<wrappedBackrefNum>\d+)>`, ({ 0: f, groups: { backrefNum: g, wrappedBackrefNum: d } }) => { if (g) {
    let w = +g;
    if (w > o.length - 1)
        throw new Error(`Backref "${f}" greater than number of captures`);
    return `\\${o[w]}`;
} return `\\${d}`; }, I.DEFAULT), { pattern: e, captureTransfers: n, hiddenCaptures: t }; }
var ir = String.raw `(?:[?*+]|\{\d+(?:,\d*)?\})`, Ee = new RegExp(String.raw `
\\(?: \d+
  | c[A-Za-z]
  | [gk]<[^>]+>
  | [pPu]\{[^\}]+\}
  | u[A-Fa-f\d]{4}
  | x[A-Fa-f\d]{2}
  )
| \((?: \? (?: [:=!>]
  | <(?:[=!]|[^>]+>)
  | [A-Za-z\-]+:
  | \(DEFINE\)
  ))?
| (?<qBase>${ir})(?<qMod>[?+]?)(?<invalidQ>[?*+\{]?)
| \\?.
`.replace(/\s+/g, ""), "gsu");
function Ie(e) { if (!new RegExp(`${ir}\\+`).test(e))
    return { pattern: e }; let r = [], t = null, n = null, a = "", s = 0, o; for (Ee.lastIndex = 0; o = Ee.exec(e);) {
    let { 0: i, index: u, groups: { qBase: c, qMod: p, invalidQ: l } } = o;
    if (i === "[")
        s || (n = u), s++;
    else if (i === "]")
        s ? s-- : n = null;
    else if (!s)
        if (p === "+" && a && !a.startsWith("(")) {
            if (l)
                throw new Error(`Invalid quantifier "${i}"`);
            let f = -1;
            if (/^\{\d+\}$/.test(c))
                e = sr(e, u + c.length, p, "");
            else {
                if (a === ")" || a === "]") {
                    let g = a === ")" ? t : n;
                    if (g === null)
                        throw new Error(`Invalid unmatched "${a}"`);
                    e = `${e.slice(0, g)}(?>${e.slice(g, u)}${c})${e.slice(u + i.length)}`;
                }
                else
                    e = `${e.slice(0, u - a.length)}(?>${a}${c})${e.slice(u + i.length)}`;
                f += 4;
            }
            Ee.lastIndex += f;
        }
        else
            i[0] === "(" ? r.push(u) : i === ")" && (t = r.length ? r.pop() : null);
    a = i;
} return { pattern: e }; }
var M = String.raw, xt = M `\\g<(?<gRNameOrNum>[^>&]+)&R=(?<gRDepth>[^>]+)>`, ve = M `\(\?R=(?<rDepth>[^\)]+)\)|${xt}`, ge = M `\(\?<(?![=!])(?<captureName>[^>]+)>`, fr = M `${ge}|(?<unnamed>\()(?!\?)`, W = new RegExp(M `${ge}|${ve}|\(\?|\\?.`, "gsu"), $e = "Cannot use multiple overlapping recursions";
function dr(e, r) { let { hiddenCaptures: t, mode: n } = m({ hiddenCaptures: [], mode: "plugin" }, r), a = r?.captureTransfers ?? new Map; if (!new RegExp(ve, "su").test(e))
    return { pattern: e, captureTransfers: a, hiddenCaptures: t }; if (n === "plugin" && se(e, M `\(\?\(DEFINE\)`, I.DEFAULT))
    throw new Error("DEFINE groups cannot be used with recursion"); let s = [], o = se(e, M `\\[1-9]`, I.DEFAULT), i = new Map, u = [], c = !1, p = 0, l = 0, f; for (W.lastIndex = 0; f = W.exec(e);) {
    let { 0: g, groups: { captureName: d, rDepth: w, gRNameOrNum: y, gRDepth: C } } = f;
    if (g === "[")
        p++;
    else if (p)
        g === "]" && p--;
    else if (w) {
        if (ur(w), c)
            throw new Error($e);
        if (o)
            throw new Error(`${n === "external" ? "Backrefs" : "Numbered backrefs"} cannot be used with global recursion`);
        let A = e.slice(0, f.index), $ = e.slice(W.lastIndex);
        if (se($, ve, I.DEFAULT))
            throw new Error($e);
        let E = +w - 1;
        e = cr(A, $, E, !1, t, s, l), a = pr(a, A, E, s.length, 0, l);
        break;
    }
    else if (y) {
        ur(C);
        let A = !1;
        for (let K of u)
            if (K.name === y || K.num === +y) {
                if (A = !0, K.hasRecursedWithin)
                    throw new Error($e);
                break;
            }
        if (!A)
            throw new Error(M `Recursive \g cannot be used outside the referenced group "${n === "external" ? y : M `\g<${y}&R=${C}>`}"`);
        let $ = i.get(y), E = ar(e, $);
        if (o && se(E, M `${ge}|\((?!\?)`, I.DEFAULT))
            throw new Error(`${n === "external" ? "Backrefs" : "Numbered backrefs"} cannot be used with recursion of capturing groups`);
        let _ = e.slice($, f.index), oe = E.slice(_.length + g.length), H = s.length, j = +C - 1, Re = cr(_, oe, j, !0, t, s, l);
        a = pr(a, _, j, s.length - H, H, l);
        let Nr = e.slice(0, $), Lr = e.slice($ + E.length);
        e = `${Nr}${Re}${Lr}`, W.lastIndex += Re.length - g.length - _.length - oe.length, u.forEach(K => K.hasRecursedWithin = !0), c = !0;
    }
    else if (d)
        l++, i.set(String(l), W.lastIndex), i.set(d, W.lastIndex), u.push({ num: l, name: d });
    else if (g[0] === "(") {
        let A = g === "(";
        A && (l++, i.set(String(l), W.lastIndex)), u.push(A ? { num: l } : {});
    }
    else
        g === ")" && u.pop();
} return t.push(...s), { pattern: e, captureTransfers: a, hiddenCaptures: t }; }
function ur(e) { let r = `Max depth must be integer between 2 and 100; used ${e}`; if (!/^[1-9]\d*$/.test(e))
    throw new Error(r); if (e = +e, e < 2 || e > 100)
    throw new Error(r); }
function cr(e, r, t, n, a, s, o) { let i = new Set; n && ke(e + r, ge, ({ groups: { captureName: c } }) => { i.add(c); }, I.DEFAULT); let u = [t, n ? i : null, a, s, o]; return `${e}${lr(`(?:${e}`, "forward", ...u)}(?:)${lr(`${r})`, "backward", ...u)}${r}`; }
function lr(e, r, t, n, a, s, o) { let u = p => r === "forward" ? p + 2 : t - p + 2 - 1, c = ""; for (let p = 0; p < t; p++) {
    let l = u(p);
    c += ne(e, M `${fr}|\\k<(?<backref>[^>]+)>`, ({ 0: f, groups: { captureName: g, unnamed: d, backref: w } }) => { if (w && n && !n.has(w))
        return f; let y = `_$${l}`; if (d || g) {
        let C = o + s.length + 1;
        return s.push(C), kt(a, C), d ? f : `(?<${g}${y}>`;
    } return M `\k<${w}${y}>`; }, I.DEFAULT);
} return c; }
function kt(e, r) { for (let t = 0; t < e.length; t++)
    e[t] >= r && e[t]++; }
function pr(e, r, t, n, a, s) { if (e.size && n) {
    let o = 0;
    ke(r, fr, () => o++, I.DEFAULT);
    let i = s - o + a, u = new Map;
    return e.forEach((c, p) => { let l = (n - o * t) / t, f = o * t, g = p > i + o ? p + n : p, d = []; for (let w of c)
        if (w <= i)
            d.push(w);
        else if (w > i + o + l)
            d.push(w + n);
        else if (w <= i + o)
            for (let y = 0; y <= t; y++)
                d.push(w + o * y);
        else
            for (let y = 0; y <= t; y++)
                d.push(w + f + l * y); u.set(g, d); }), u;
} return e; }
var k = String.fromCodePoint, h = String.raw, N = {}, me = globalThis.RegExp;
N.flagGroups = (() => { try {
    new me("(?i:)");
}
catch {
    return !1;
} return !0; })();
N.unicodeSets = (() => { try {
    new me("[[]]", "v");
}
catch {
    return !1;
} return !0; })();
N.bugFlagVLiteralHyphenIsRange = N.unicodeSets ? (() => { try {
    new me(h `[\d\-a]`, "v");
}
catch {
    return !0;
} return !1; })() : !1;
N.bugNestedClassIgnoresNegation = N.unicodeSets && new me("[[^a]]", "v").test("a");
function he(e, { enable: r, disable: t }) { return { dotAll: !t?.dotAll && !!(r?.dotAll || e.dotAll), ignoreCase: !t?.ignoreCase && !!(r?.ignoreCase || e.ignoreCase) }; }
function ae(e, r, t) { return e.has(r) || e.set(r, t), e.get(r); }
function Le(e, r) { return gr[e] >= gr[r]; }
function Et(e, r) { if (e == null)
    throw new Error(r ?? "Value expected"); return e; }
var gr = { ES2025: 2025, ES2024: 2024, ES2018: 2018 }, At = { auto: "auto", ES2025: "ES2025", ES2024: "ES2024", ES2018: "ES2018" };
function Cr(e = {}) { if ({}.toString.call(e) !== "[object Object]")
    throw new Error("Unexpected options"); if (e.target !== void 0 && !At[e.target])
    throw new Error(`Unexpected target "${e.target}"`); let r = v(m({ accuracy: "default", avoidSubclass: !1, flags: "", global: !1, hasIndices: !1, lazyCompileLength: 1 / 0, target: "auto", verbose: !1 }, e), { rules: m({ allowOrphanBackrefs: !1, asciiWordBoundaries: !1, captureGroup: !1, recursionLimit: 20, singleline: !1 }, e.rules) }); return r.target === "auto" && (r.target = N.flagGroups ? "ES2025" : N.unicodeSets ? "ES2024" : "ES2018"), r; }
var It = "[	-\r ]", $t = new Set([k(304), k(305)]), P = h `[\p{L}\p{M}\p{N}\p{Pc}]`;
function br(e) { if ($t.has(e))
    return [e]; let r = new Set, t = e.toLowerCase(), n = t.toUpperCase(), a = _t.get(t), s = vt.get(t), o = St.get(t); return [...n].length === 1 && r.add(n), o && r.add(o), a && r.add(a), r.add(t), s && r.add(s), [...r]; }
var Fe = new Map(`C Other
Cc Control cntrl
Cf Format
Cn Unassigned
Co Private_Use
Cs Surrogate
L Letter
LC Cased_Letter
Ll Lowercase_Letter
Lm Modifier_Letter
Lo Other_Letter
Lt Titlecase_Letter
Lu Uppercase_Letter
M Mark Combining_Mark
Mc Spacing_Mark
Me Enclosing_Mark
Mn Nonspacing_Mark
N Number
Nd Decimal_Number digit
Nl Letter_Number
No Other_Number
P Punctuation punct
Pc Connector_Punctuation
Pd Dash_Punctuation
Pe Close_Punctuation
Pf Final_Punctuation
Pi Initial_Punctuation
Po Other_Punctuation
Ps Open_Punctuation
S Symbol
Sc Currency_Symbol
Sk Modifier_Symbol
Sm Math_Symbol
So Other_Symbol
Z Separator
Zl Line_Separator
Zp Paragraph_Separator
Zs Space_Separator
ASCII
ASCII_Hex_Digit AHex
Alphabetic Alpha
Any
Assigned
Bidi_Control Bidi_C
Bidi_Mirrored Bidi_M
Case_Ignorable CI
Cased
Changes_When_Casefolded CWCF
Changes_When_Casemapped CWCM
Changes_When_Lowercased CWL
Changes_When_NFKC_Casefolded CWKCF
Changes_When_Titlecased CWT
Changes_When_Uppercased CWU
Dash
Default_Ignorable_Code_Point DI
Deprecated Dep
Diacritic Dia
Emoji
Emoji_Component EComp
Emoji_Modifier EMod
Emoji_Modifier_Base EBase
Emoji_Presentation EPres
Extended_Pictographic ExtPict
Extender Ext
Grapheme_Base Gr_Base
Grapheme_Extend Gr_Ext
Hex_Digit Hex
IDS_Binary_Operator IDSB
IDS_Trinary_Operator IDST
ID_Continue IDC
ID_Start IDS
Ideographic Ideo
Join_Control Join_C
Logical_Order_Exception LOE
Lowercase Lower
Math
Noncharacter_Code_Point NChar
Pattern_Syntax Pat_Syn
Pattern_White_Space Pat_WS
Quotation_Mark QMark
Radical
Regional_Indicator RI
Sentence_Terminal STerm
Soft_Dotted SD
Terminal_Punctuation Term
Unified_Ideograph UIdeo
Uppercase Upper
Variation_Selector VS
White_Space space
XID_Continue XIDC
XID_Start XIDS`.split(/\s/).map(e => [Q(e), e])), vt = new Map([["s", k(383)], [k(383), "s"]]), St = new Map([[k(223), k(7838)], [k(107), k(8490)], [k(229), k(8491)], [k(969), k(8486)]]), _t = new Map([D(453), D(456), D(459), D(498), ...Se(8072, 8079), ...Se(8088, 8095), ...Se(8104, 8111), D(8124), D(8140), D(8188)]), Mt = new Map([["alnum", h `[\p{Alpha}\p{Nd}]`], ["alpha", h `\p{Alpha}`], ["ascii", h `\p{ASCII}`], ["blank", h `[\p{Zs}\t]`], ["cntrl", h `\p{Cc}`], ["digit", h `\p{Nd}`], ["graph", h `[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]`], ["lower", h `\p{Lower}`], ["print", h `[[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]\p{Zs}]`], ["punct", h `[\p{P}\p{S}]`], ["space", h `\p{space}`], ["upper", h `\p{Upper}`], ["word", h `[\p{Alpha}\p{M}\p{Nd}\p{Pc}]`], ["xdigit", h `\p{AHex}`]]);
function Nt(e, r) { let t = []; for (let n = e; n <= r; n++)
    t.push(n); return t; }
function D(e) { let r = k(e); return [r.toLowerCase(), r]; }
function Se(e, r) { return Nt(e, r).map(t => D(t)); }
var xr = new Set(["Lower", "Lowercase", "Upper", "Uppercase", "Ll", "Lowercase_Letter", "Lt", "Titlecase_Letter", "Lu", "Uppercase_Letter"]);
function Lt(e, r) { let t = m({ accuracy: "default", asciiWordBoundaries: !1, avoidSubclass: !1, bestEffortTarget: "ES2025" }, r); kr(e); let n = { accuracy: t.accuracy, asciiWordBoundaries: t.asciiWordBoundaries, avoidSubclass: t.avoidSubclass, flagDirectivesByAlt: new Map, jsGroupNameMap: new Map, minTargetEs2024: Le(t.bestEffortTarget, "ES2024"), passedLookbehind: !1, strategy: null, subroutineRefMap: new Map, supportedGNodes: new Set, digitIsAscii: e.flags.digitIsAscii, spaceIsAscii: e.flags.spaceIsAscii, wordIsAscii: e.flags.wordIsAscii }; V(e, Gt, n); let a = { dotAll: e.flags.dotAll, ignoreCase: e.flags.ignoreCase }, s = { currentFlags: a, prevFlags: null, globalFlags: a, groupOriginByCopy: new Map, groupsByName: new Map, multiplexCapturesToLeftByRef: new Map, openRefs: new Map, reffedNodesByReferencer: new Map, subroutineRefMap: n.subroutineRefMap }; V(e, Ft, s); let o = { groupsByName: s.groupsByName, highestOrphanBackref: 0, numCapturesToLeft: 0, reffedNodesByReferencer: s.reffedNodesByReferencer }; return V(e, Pt, o), e._originMap = s.groupOriginByCopy, e._strategy = n.strategy, e; }
var Gt = { AbsenceFunction({ node: e, parent: r, replaceWith: t }) { let { body: n, kind: a } = e; if (a === "repeater") {
        let s = S();
        s.body[0].body.push(O({ negate: !0, body: n }), z("Any"));
        let o = S();
        o.body[0].body.push(be("greedy", 0, 1 / 0, s)), t(b(o, r), { traverse: !0 });
    }
    else
        throw new Error('Unsupported absence function "(?~|"'); }, Alternative: { enter({ node: e, parent: r, key: t }, { flagDirectivesByAlt: n }) { let a = e.body.filter(s => s.kind === "flags"); for (let s = t + 1; s < r.body.length; s++) {
            let o = r.body[s];
            ae(n, o, []).push(...a);
        } }, exit({ node: e }, { flagDirectivesByAlt: r }) { if (r.get(e)?.length) {
            let t = Ar(r.get(e));
            if (t) {
                let n = S({ flags: t });
                n.body[0].body = e.body, e.body = [b(n, e)];
            }
        } } }, Assertion({ node: e, parent: r, key: t, container: n, root: a, remove: s, replaceWith: o }, i) { let { kind: u, negate: c } = e, { asciiWordBoundaries: p, avoidSubclass: l, supportedGNodes: f, wordIsAscii: g } = i; if (u === "text_segment_boundary")
        throw new Error(`Unsupported text segment boundary "\\${c ? "Y" : "y"}"`); if (u === "line_end")
        o(b(O({ body: [F({ body: [pe("string_end")] }), F({ body: [Z(10)] })] }), r));
    else if (u === "line_start")
        o(b(R(h `(?<=\A|\n(?!\z))`, { skipLookbehindValidation: !0 }), r));
    else if (u === "search_start")
        if (f.has(e))
            a.flags.sticky = !0, s();
        else {
            let d = n[t - 1];
            if (d && Tt(d))
                o(b(O({ negate: !0 }), r));
            else {
                if (l)
                    throw new Error(h `Uses "\G" in a way that requires a subclass`);
                o(B(pe("string_start"), r)), i.strategy = "clip_search";
            }
        }
    else if (!(u === "string_end" || u === "string_start"))
        if (u === "string_end_newline")
            o(b(R(h `(?=\n?\z)`), r));
        else if (u === "word_boundary") {
            if (!g && !p) {
                let d = `(?:(?<=${P})(?!${P})|(?<!${P})(?=${P}))`, w = `(?:(?<=${P})(?=${P})|(?<!${P})(?!${P}))`;
                o(b(R(c ? w : d), r));
            }
        }
        else
            throw new Error(`Unexpected assertion kind "${u}"`); }, Backreference({ node: e }, { jsGroupNameMap: r }) { let { ref: t } = e; typeof t == "string" && !Me(t) && (t = _e(t, r), e.ref = t); }, CapturingGroup({ node: e }, { jsGroupNameMap: r, subroutineRefMap: t }) { let { name: n } = e; n && !Me(n) && (n = _e(n, r), e.name = n), t.set(e.number, e), n && t.set(n, e); }, CharacterClassRange({ node: e, parent: r, replaceWith: t }) { if (r.kind === "intersection") {
        let n = re({ body: [e] });
        t(b(n, r), { traverse: !0 });
    } }, CharacterSet({ node: e, parent: r, replaceWith: t }, { accuracy: n, minTargetEs2024: a, digitIsAscii: s, spaceIsAscii: o, wordIsAscii: i }) {
        let { kind: u, negate: c, value: p } = e;
        if (s && (u === "digit" || p === "digit")) {
            t(B(fe("digit", { negate: c }), r));
            return;
        }
        if (o && (u === "space" || p === "space")) {
            t(b(Ne(R(It), c), r));
            return;
        }
        if (i && (u === "word" || p === "word")) {
            t(B(fe("word", { negate: c }), r));
            return;
        }
        if (u === "any")
            t(B(z("Any"), r));
        else if (u === "digit")
            t(B(z("Nd", { negate: c }), r));
        else if (u !== "dot")
            if (u === "text_segment") {
                if (n === "strict")
                    throw new Error(h `Use of "\X" requires non-strict accuracy`);
                let l = "\\p{Emoji}(?:\\p{EMod}|\\uFE0F\\u20E3?|[\\x{E0020}-\\x{E007E}]+\\x{E007F})?", f = h `\p{RI}{2}|${l}(?:\u200D${l})*`;
                t(b(R(h `(?>\r\n|${a ? h `\p{RGI_Emoji}` : f}|\P{M}\p{M}*)`, { skipPropertyNameValidation: !0 }), r));
            }
            else if (u === "hex")
                t(B(z("AHex", { negate: c }), r));
            else if (u === "newline")
                t(b(R(c ? `[^
]` : `(?>\r
?|[
\v\f\x85\u2028\u2029])`), r));
            else if (u === "posix")
                if (!a && (p === "graph" || p === "print")) {
                    if (n === "strict")
                        throw new Error(`POSIX class "${p}" requires min target ES2024 or non-strict accuracy`);
                    let l = { graph: "!-~", print: " -~" }[p];
                    c && (l = `\0-${k(l.codePointAt(0) - 1)}${k(l.codePointAt(2) + 1)}-\u{10FFFF}`), t(b(R(`[${l}]`), r));
                }
                else
                    t(b(Ne(R(Mt.get(p)), c), r));
            else if (u === "property")
                Fe.has(Q(p)) || (e.key = "sc");
            else if (u === "space")
                t(B(z("space", { negate: c }), r));
            else if (u === "word")
                t(b(Ne(R(P), c), r));
            else
                throw new Error(`Unexpected character set kind "${u}"`);
    }, Directive({ node: e, parent: r, root: t, remove: n, replaceWith: a, removeAllPrevSiblings: s, removeAllNextSiblings: o }) { let { kind: i, flags: u } = e; if (i === "flags")
        if (!u.enable && !u.disable)
            n();
        else {
            let c = S({ flags: u });
            c.body[0].body = o(), a(b(c, r), { traverse: !0 });
        }
    else if (i === "keep") {
        let c = t.body[0], l = t.body.length === 1 && ue(c, { type: "Group" }) && c.body[0].body.length === 1 ? c.body[0] : t;
        if (r.parent !== l || l.body.length > 1)
            throw new Error(h `Uses "\K" in a way that's unsupported`);
        let f = O({ behind: !0 });
        f.body[0].body = s(), a(b(f, r));
    }
    else
        throw new Error(`Unexpected directive kind "${i}"`); }, Flags({ node: e, parent: r }) { if (e.posixIsAscii)
        throw new Error('Unsupported flag "P"'); if (e.textSegmentMode === "word")
        throw new Error('Unsupported flag "y{w}"'); ["digitIsAscii", "extended", "posixIsAscii", "spaceIsAscii", "wordIsAscii", "textSegmentMode"].forEach(t => delete e[t]), Object.assign(e, { global: !1, hasIndices: !1, multiline: !1, sticky: e.sticky ?? !1 }), r.options = { disable: { x: !0, n: !0 }, force: { v: !0 } }; }, Group({ node: e }) { if (!e.flags)
        return; let { enable: r, disable: t } = e.flags; r?.extended && delete r.extended, t?.extended && delete t.extended, r?.dotAll && t?.dotAll && delete r.dotAll, r?.ignoreCase && t?.ignoreCase && delete r.ignoreCase, r && !Object.keys(r).length && delete e.flags.enable, t && !Object.keys(t).length && delete e.flags.disable, !e.flags.enable && !e.flags.disable && delete e.flags; }, LookaroundAssertion({ node: e }, r) { let { kind: t } = e; t === "lookbehind" && (r.passedLookbehind = !0); }, NamedCallout({ node: e, parent: r, replaceWith: t }) { let { kind: n } = e; if (n === "fail")
        t(b(O({ negate: !0 }), r));
    else
        throw new Error(`Unsupported named callout "(*${n.toUpperCase()}"`); }, Quantifier({ node: e }) { if (e.body.type === "Quantifier") {
        let r = S();
        r.body[0].body.push(e.body), e.body = b(r, e);
    } }, Regex: { enter({ node: e }, { supportedGNodes: r }) { let t = [], n = !1, a = !1; for (let s of e.body)
            if (s.body.length === 1 && s.body[0].kind === "search_start")
                s.body.pop();
            else {
                let o = $r(s.body);
                o ? (n = !0, Array.isArray(o) ? t.push(...o) : t.push(o)) : a = !0;
            } n && !a && t.forEach(s => r.add(s)); }, exit(e, { accuracy: r, passedLookbehind: t, strategy: n }) { if (r === "strict" && t && n)
            throw new Error(h `Uses "\G" in a way that requires non-strict accuracy`); } }, Subroutine({ node: e }, { jsGroupNameMap: r }) { let { ref: t } = e; typeof t == "string" && !Me(t) && (t = _e(t, r), e.ref = t); } }, Ft = { Backreference({ node: e }, { multiplexCapturesToLeftByRef: r, reffedNodesByReferencer: t }) { let { orphan: n, ref: a } = e; n || t.set(e, [...r.get(a).map(({ node: s }) => s)]); }, CapturingGroup: { enter({ node: e, parent: r, replaceWith: t, skip: n }, { groupOriginByCopy: a, groupsByName: s, multiplexCapturesToLeftByRef: o, openRefs: i, reffedNodesByReferencer: u }) { let c = a.get(e); if (c && i.has(e.number)) {
            let l = B(hr(e.number), r);
            u.set(l, i.get(e.number)), t(l);
            return;
        } i.set(e.number, e), o.set(e.number, []), e.name && ae(o, e.name, []); let p = o.get(e.name ?? e.number); for (let l = 0; l < p.length; l++) {
            let f = p[l];
            if (c === f.node || c && c === f.origin || e === f.origin) {
                p.splice(l, 1);
                break;
            }
        } if (o.get(e.number).push({ node: e, origin: c }), e.name && o.get(e.name).push({ node: e, origin: c }), e.name) {
            let l = ae(s, e.name, new Map), f = !1;
            if (c)
                f = !0;
            else
                for (let g of l.values())
                    if (!g.hasDuplicateNameToRemove) {
                        f = !0;
                        break;
                    }
            s.get(e.name).set(e, { node: e, hasDuplicateNameToRemove: f });
        } }, exit({ node: e }, { openRefs: r }) { r.get(e.number) === e && r.delete(e.number); } }, Group: { enter({ node: e }, r) { r.prevFlags = r.currentFlags, e.flags && (r.currentFlags = he(r.currentFlags, e.flags)); }, exit(e, r) { r.currentFlags = r.prevFlags; } }, Subroutine({ node: e, parent: r, replaceWith: t }, n) { let { isRecursive: a, ref: s } = e; if (a) {
        let p = r;
        for (; (p = p.parent) && !(p.type === "CapturingGroup" && (p.name === s || p.number === s));)
            ;
        n.reffedNodesByReferencer.set(e, p);
        return;
    } let o = n.subroutineRefMap.get(s), i = s === 0, u = i ? hr(0) : Er(o, n.groupOriginByCopy, null), c = u; if (!i) {
        let p = Ar(Ot(o, f => f.type === "Group" && !!f.flags)), l = p ? he(n.globalFlags, p) : n.globalFlags;
        Rt(l, n.currentFlags) || (c = S({ flags: Dt(l) }), c.body[0].body.push(u));
    } t(b(c, r), { traverse: !i }); } }, Pt = { Backreference({ node: e, parent: r, replaceWith: t }, n) { if (e.orphan) {
        n.highestOrphanBackref = Math.max(n.highestOrphanBackref, e.ref);
        return;
    } let s = n.reffedNodesByReferencer.get(e).filter(o => Ut(o, e)); if (!s.length)
        t(b(O({ negate: !0 }), r));
    else if (s.length > 1) {
        let o = S({ atomic: !0, body: s.reverse().map(i => F({ body: [ce(i.number)] })) });
        t(b(o, r));
    }
    else
        e.ref = s[0].number; }, CapturingGroup({ node: e }, r) { e.number = ++r.numCapturesToLeft, e.name && r.groupsByName.get(e.name).get(e).hasDuplicateNameToRemove && delete e.name; }, Regex: { exit({ node: e }, r) { let t = Math.max(r.highestOrphanBackref - r.numCapturesToLeft, 0); for (let n = 0; n < t; n++) {
            let a = Ce();
            e.body.at(-1).body.push(a);
        } } }, Subroutine({ node: e }, r) { !e.isRecursive || e.ref === 0 || (e.ref = r.reffedNodesByReferencer.get(e).number); } };
function kr(e) { V(e, { "*"({ node: r, parent: t }) { r.parent = t; } }); }
function Rt(e, r) { return e.dotAll === r.dotAll && e.ignoreCase === r.ignoreCase; }
function Ut(e, r) { let t = r; do {
    if (t.type === "Regex")
        return !1;
    if (t.type === "Alternative")
        continue;
    if (t === e)
        return !1;
    let n = Ir(t.parent);
    for (let a of n) {
        if (a === t)
            break;
        if (a === e || vr(a, e))
            return !0;
    }
} while (t = t.parent); throw new Error("Unexpected path"); }
function Er(e, r, t, n) { let a = Array.isArray(e) ? [] : {}; for (let [s, o] of Object.entries(e))
    s === "parent" ? a.parent = Array.isArray(t) ? n : t : o && typeof o == "object" ? a[s] = Er(o, r, a, t) : (s === "type" && o === "CapturingGroup" && r.set(a, r.get(e) ?? e), a[s] = o); return a; }
function hr(e) { let r = xe(e); return r.isRecursive = !0, r; }
function Ot(e, r) { let t = []; for (; e = e.parent;)
    (!r || r(e)) && t.push(e); return t; }
function _e(e, r) { if (r.has(e))
    return r.get(e); let t = `$${r.size}_${e.replace(/^[^$_\p{IDS}]|[^$\u200C\u200D\p{IDC}]/ug, "_")}`; return r.set(e, t), t; }
function Ar(e) { let r = ["dotAll", "ignoreCase"], t = { enable: {}, disable: {} }; return e.forEach(({ flags: n }) => { r.forEach(a => { n.enable?.[a] && (delete t.disable[a], t.enable[a] = !0), n.disable?.[a] && (t.disable[a] = !0); }); }), Object.keys(t.enable).length || delete t.enable, Object.keys(t.disable).length || delete t.disable, t.enable || t.disable ? t : null; }
function Dt({ dotAll: e, ignoreCase: r }) { let t = {}; return (e || r) && (t.enable = {}, e && (t.enable.dotAll = !0), r && (t.enable.ignoreCase = !0)), (!e || !r) && (t.disable = {}, !e && (t.disable.dotAll = !0), !r && (t.disable.ignoreCase = !0)), t; }
function Ir(e) { if (!e)
    throw new Error("Node expected"); let { body: r } = e; return Array.isArray(r) ? r : r ? [r] : null; }
function $r(e) { let r = e.find(t => t.kind === "search_start" || zt(t, { negate: !1 }) || !Bt(t)); if (!r)
    return null; if (r.kind === "search_start")
    return r; if (r.type === "LookaroundAssertion")
    return r.body[0].body[0]; if (r.type === "CapturingGroup" || r.type === "Group") {
    let t = [];
    for (let n of r.body) {
        let a = $r(n.body);
        if (!a)
            return null;
        Array.isArray(a) ? t.push(...a) : t.push(a);
    }
    return t;
} return null; }
function vr(e, r) { let t = Ir(e) ?? []; for (let n of t)
    if (n === r || vr(n, r))
        return !0; return !1; }
function Bt({ type: e }) { return e === "Assertion" || e === "Directive" || e === "LookaroundAssertion"; }
function Tt(e) { let r = ["Character", "CharacterClass", "CharacterSet"]; return r.includes(e.type) || e.type === "Quantifier" && e.min && r.includes(e.body.type); }
function zt(e, r) { let t = m({ negate: null }, r); return e.type === "LookaroundAssertion" && (t.negate === null || e.negate === t.negate) && e.body.length === 1 && ue(e.body[0], { type: "Assertion", kind: "search_start" }); }
function Me(e) { return /^[$_\p{IDS}][$\u200C\u200D\p{IDC}]*$/u.test(e); }
function R(e, r) { let n = le(e, v(m({}, r), { unicodePropertyMap: Fe })).body; return n.length > 1 || n[0].body.length > 1 ? S({ body: n }) : n[0].body[0]; }
function Ne(e, r) { return e.negate = r, e; }
function B(e, r) { return e.parent = r, e; }
function b(e, r) { return kr(e), e.parent = r, e; }
function Vt(e, r) { let t = Cr(r), n = Le(t.target, "ES2024"), a = Le(t.target, "ES2025"), s = t.rules.recursionLimit; if (!Number.isInteger(s) || s < 2 || s > 20)
    throw new Error("Invalid recursionLimit; use 2-20"); let o = null, i = null; if (!a) {
    let g = [e.flags.ignoreCase];
    V(e, Wt, { getCurrentModI: () => g.at(-1), popModI() { g.pop(); }, pushModI(d) { g.push(d); }, setHasCasedChar() { g.at(-1) ? o = !0 : i = !0; } });
} let u = { dotAll: e.flags.dotAll, ignoreCase: !!((e.flags.ignoreCase || o) && !i) }, c = e, p = { accuracy: t.accuracy, appliedGlobalFlags: u, captureMap: new Map, currentFlags: { dotAll: e.flags.dotAll, ignoreCase: e.flags.ignoreCase }, inCharClass: !1, lastNode: c, originMap: e._originMap, recursionLimit: s, useAppliedIgnoreCase: !!(!a && o && i), useFlagMods: a, useFlagV: n, verbose: t.verbose }; function l(g) { return p.lastNode = c, c = g, Et(Ht[g.type], `Unexpected node type "${g.type}"`)(g, p, l); } let f = { pattern: e.body.map(l).join("|"), flags: l(e.flags), options: m({}, e.options) }; return n || (delete f.options.force.v, f.options.disable.v = !0, f.options.unicodeSetsPlugin = null), f._captureTransfers = new Map, f._hiddenCaptures = [], p.captureMap.forEach((g, d) => { g.hidden && f._hiddenCaptures.push(d), g.transferTo && ae(f._captureTransfers, g.transferTo, []).push(d); }), f; }
var Wt = { "*": { enter({ node: e }, r) { if (wr(e)) {
            let t = r.getCurrentModI();
            r.pushModI(e.flags ? he({ ignoreCase: t }, e.flags).ignoreCase : t);
        } }, exit({ node: e }, r) { wr(e) && r.popModI(); } }, Backreference(e, r) { r.setHasCasedChar(); }, Character({ node: e }, r) { Pe(k(e.value)) && r.setHasCasedChar(); }, CharacterClassRange({ node: e, skip: r }, t) { r(), Sr(e, { firstOnly: !0 }).length && t.setHasCasedChar(); }, CharacterSet({ node: e }, r) { e.kind === "property" && xr.has(e.value) && r.setHasCasedChar(); } }, Ht = { Alternative({ body: e }, r, t) { return e.map(t).join(""); }, Assertion({ kind: e, negate: r }) { if (e === "string_end")
        return "$"; if (e === "string_start")
        return "^"; if (e === "word_boundary")
        return r ? h `\B` : h `\b`; throw new Error(`Unexpected assertion kind "${e}"`); }, Backreference({ ref: e }, r) { if (typeof e != "number")
        throw new Error("Unexpected named backref in transformed AST"); if (!r.useFlagMods && r.accuracy === "strict" && r.currentFlags.ignoreCase && !r.captureMap.get(e).ignoreCase)
        throw new Error("Use of case-insensitive backref to case-sensitive group requires target ES2025 or non-strict accuracy"); return "\\" + e; }, CapturingGroup(e, r, t) { let { body: n, name: a, number: s } = e, o = { ignoreCase: r.currentFlags.ignoreCase }, i = r.originMap.get(e); return i && (o.hidden = !0, s > i.number && (o.transferTo = i.number)), r.captureMap.set(s, o), `(${a ? `?<${a}>` : ""}${n.map(t).join("|")})`; }, Character({ value: e }, r) { let t = k(e), n = J(e, { escDigit: r.lastNode.type === "Backreference", inCharClass: r.inCharClass, useFlagV: r.useFlagV }); if (n !== t)
        return n; if (r.useAppliedIgnoreCase && r.currentFlags.ignoreCase && Pe(t)) {
        let a = br(t);
        return r.inCharClass ? a.join("") : a.length > 1 ? `[${a.join("")}]` : a[0];
    } return t; }, CharacterClass(e, r, t) { let { kind: n, negate: a, parent: s } = e, { body: o } = e; if (n === "intersection" && !r.useFlagV)
        throw new Error("Use of character class intersection requires min target ES2024"); N.bugFlagVLiteralHyphenIsRange && r.useFlagV && o.some(yr) && (o = [Z(45), ...o.filter(c => !yr(c))]); let i = () => `[${a ? "^" : ""}${o.map(t).join(n === "intersection" ? "&&" : "")}]`; if (!r.inCharClass) {
        if ((!r.useFlagV || N.bugNestedClassIgnoresNegation) && !a) {
            let p = o.filter(l => l.type === "CharacterClass" && l.kind === "union" && l.negate);
            if (p.length) {
                let l = S(), f = l.body[0];
                return l.parent = s, f.parent = l, o = o.filter(g => !p.includes(g)), e.body = o, o.length ? (e.parent = f, f.body.push(e)) : l.body.pop(), p.forEach(g => { let d = F({ body: [g] }); g.parent = d, d.parent = l, l.body.push(d); }), t(l);
            }
        }
        r.inCharClass = !0;
        let c = i();
        return r.inCharClass = !1, c;
    } let u = o[0]; if (n === "union" && !a && u && ((!r.useFlagV || !r.verbose) && s.kind === "union" && !(N.bugFlagVLiteralHyphenIsRange && r.useFlagV) || !r.verbose && s.kind === "intersection" && o.length === 1 && u.type !== "CharacterClassRange"))
        return o.map(t).join(""); if (!r.useFlagV && s.type === "CharacterClass")
        throw new Error("Uses nested character class in a way that requires min target ES2024"); return i(); }, CharacterClassRange(e, r) { let t = e.min.value, n = e.max.value, a = { escDigit: !1, inCharClass: !0, useFlagV: r.useFlagV }, s = J(t, a), o = J(n, a), i = new Set; if (r.useAppliedIgnoreCase && r.currentFlags.ignoreCase) {
        let u = Sr(e);
        qt(u).forEach(p => { i.add(Array.isArray(p) ? `${J(p[0], a)}-${J(p[1], a)}` : J(p, a)); });
    } return `${s}-${o}${[...i].join("")}`; }, CharacterSet({ kind: e, negate: r, value: t, key: n }, a) { if (e === "dot")
        return a.currentFlags.dotAll ? a.appliedGlobalFlags.dotAll || a.useFlagMods ? "." : "[^]" : h `[^\n]`; if (e === "digit")
        return r ? h `\D` : h `\d`; if (e === "property") {
        if (a.useAppliedIgnoreCase && a.currentFlags.ignoreCase && xr.has(t))
            throw new Error(`Unicode property "${t}" can't be case-insensitive when other chars have specific case`);
        return `${r ? h `\P` : h `\p`}{${n ? `${n}=` : ""}${t}}`;
    } if (e === "word")
        return r ? h `\W` : h `\w`; throw new Error(`Unexpected character set kind "${e}"`); }, Flags(e, r) { return (r.appliedGlobalFlags.ignoreCase ? "i" : "") + (e.dotAll ? "s" : "") + (e.sticky ? "y" : ""); }, Group({ atomic: e, body: r, flags: t, parent: n }, a, s) { let o = a.currentFlags; t && (a.currentFlags = he(o, t)); let i = r.map(s).join("|"), u = !a.verbose && r.length === 1 && n.type !== "Quantifier" && !e && (!a.useFlagMods || !t) ? i : `(?${Jt(e, t, a.useFlagMods)}${i})`; return a.currentFlags = o, u; }, LookaroundAssertion({ body: e, kind: r, negate: t }, n, a) { return `(?${`${r === "lookahead" ? "" : "<"}${t ? "!" : "="}`}${e.map(a).join("|")})`; }, Quantifier(e, r, t) { return t(e.body) + Kt(e); }, Subroutine({ isRecursive: e, ref: r }, t) { if (!e)
        throw new Error("Unexpected non-recursive subroutine in transformed AST"); let n = t.recursionLimit; return r === 0 ? `(?R=${n})` : h `\g<${r}&R=${n}>`; } }, jt = new Set(["$", "(", ")", "*", "+", ".", "?", "[", "\\", "]", "^", "{", "|", "}"]), Xt = new Set(["-", "\\", "]", "^", "["]), Zt = new Set(["(", ")", "-", "/", "[", "\\", "]", "^", "{", "|", "}", "!", "#", "$", "%", "&", "*", "+", ",", ".", ":", ";", "<", "=", ">", "?", "@", "`", "~"]), mr = new Map([[9, h `\t`], [10, h `\n`], [11, h `\v`], [12, h `\f`], [13, h `\r`], [8232, h `\u2028`], [8233, h `\u2029`], [65279, h `\uFEFF`]]), Qt = new RegExp("^\\p{Cased}$", "u");
function Pe(e) { return Qt.test(e); }
function Sr(e, r) { let t = !!r?.firstOnly, n = e.min.value, a = e.max.value, s = []; if (n < 65 && (a === 65535 || a >= 131071) || n === 65536 && a >= 131071)
    return s; for (let o = n; o <= a; o++) {
    let i = k(o);
    if (!Pe(i))
        continue;
    let u = br(i).filter(c => { let p = c.codePointAt(0); return p < n || p > a; });
    if (u.length && (s.push(...u), t))
        break;
} return s; }
function J(e, { escDigit: r, inCharClass: t, useFlagV: n }) { if (mr.has(e))
    return mr.get(e); if (e < 32 || e > 126 && e < 160 || e > 262143 || r && Yt(e))
    return e > 255 ? `\\u{${e.toString(16).toUpperCase()}}` : `\\x${e.toString(16).toUpperCase().padStart(2, "0")}`; let a = t ? n ? Zt : Xt : jt, s = k(e); return (a.has(s) ? "\\" : "") + s; }
function qt(e) { let r = e.map(a => a.codePointAt(0)).sort((a, s) => a - s), t = [], n = null; for (let a = 0; a < r.length; a++)
    r[a + 1] === r[a] + 1 ? n ??= r[a] : n === null ? t.push(r[a]) : (t.push([n, r[a]]), n = null); return t; }
function Jt(e, r, t) { if (e)
    return ">"; let n = ""; if (r && t) {
    let { enable: a, disable: s } = r;
    n = (a?.ignoreCase ? "i" : "") + (a?.dotAll ? "s" : "") + (s ? "-" : "") + (s?.ignoreCase ? "i" : "") + (s?.dotAll ? "s" : "");
} return `${n}:`; }
function Kt({ kind: e, max: r, min: t }) { let n; return !t && r === 1 ? n = "?" : !t && r === 1 / 0 ? n = "*" : t === 1 && r === 1 / 0 ? n = "+" : t === r ? n = `{${t}}` : n = `{${t},${r === 1 / 0 ? "" : r}}`, n + { greedy: "", lazy: "?", possessive: "+" }[e]; }
function wr({ type: e }) { return e === "CapturingGroup" || e === "Group" || e === "LookaroundAssertion"; }
function Yt(e) { return e > 47 && e < 58; }
function yr({ type: e, value: r }) { return e === "Character" && r === 45; }
var en = class Ge extends RegExp {
    #r = new Map;
    #e = null;
    #n;
    #t = null;
    #s = null;
    rawOptions = {};
    get source() { return this.#n || "(?:)"; }
    constructor(r, t, n) { let a = !!n?.lazyCompile; if (r instanceof RegExp) {
        if (n)
            throw new Error("Cannot provide options when copying a regexp");
        let s = r;
        super(s, t), this.#n = s.source, s instanceof Ge && (this.#r = s.#r, this.#t = s.#t, this.#s = s.#s, this.rawOptions = s.rawOptions);
    }
    else {
        let s = m({ hiddenCaptures: [], strategy: null, transfers: [] }, n);
        super(a ? "" : r, t), this.#n = r, this.#r = tn(s.hiddenCaptures, s.transfers), this.#s = s.strategy, this.rawOptions = n ?? {};
    } a || (this.#e = this); }
    exec(r) { if (!this.#e) {
        let a = this.rawOptions, { lazyCompile: s } = a, o = Ue(a, ["lazyCompile"]);
        this.#e = new Ge(this.#n, this.flags, o);
    } let t = this.global || this.sticky, n = this.lastIndex; if (this.#s === "clip_search" && t && n) {
        this.lastIndex = 0;
        let s = this.#a(r.slice(n));
        return s && (rn(s, n, r, this.hasIndices), this.lastIndex += n), s;
    } return this.#a(r); }
    #a(r) { this.#e.lastIndex = this.lastIndex; let t = super.exec.call(this.#e, r); if (this.lastIndex = this.#e.lastIndex, !t || !this.#r.size)
        return t; let n = [...t]; t.length = 1; let a; this.hasIndices && (a = [...t.indices], t.indices.length = 1); let s = [0]; for (let o = 1; o < n.length; o++) {
        let { hidden: i, transferTo: u } = this.#r.get(o) ?? {};
        if (i ? s.push(null) : (s.push(t.length), t.push(n[o]), this.hasIndices && t.indices.push(a[o])), u && n[o] !== void 0) {
            let c = s[u];
            if (!c)
                throw new Error(`Invalid capture transfer to "${c}"`);
            if (t[c] = n[o], this.hasIndices && (t.indices[c] = a[o]), t.groups) {
                this.#t || (this.#t = nn(this.source));
                let p = this.#t.get(u);
                p && (t.groups[p] = n[o], this.hasIndices && (t.indices.groups[p] = a[o]));
            }
        }
    } return t; }
};
function rn(e, r, t, n) { if (e.index += r, e.input = t, n) {
    let a = e.indices;
    for (let o = 0; o < a.length; o++) {
        let i = a[o];
        i && (a[o] = [i[0] + r, i[1] + r]);
    }
    let s = a.groups;
    s && Object.keys(s).forEach(o => { let i = s[o]; i && (s[o] = [i[0] + r, i[1] + r]); });
} }
function tn(e, r) { let t = new Map; for (let n of e)
    t.set(n, { hidden: !0 }); for (let [n, a] of r)
    for (let s of a)
        ae(t, s, {}).transferTo = n; return t; }
function nn(e) { let r = /(?<capture>\((?:\?<(?![=!])(?<name>[^>]+)>|(?!\?)))|\\?./gsu, t = new Map, n = 0, a = 0, s; for (; s = r.exec(e);) {
    let { 0: o, groups: { capture: i, name: u } } = s;
    o === "[" ? n++ : n ? o === "]" && n-- : i && (a++, u && t.set(a, u));
} return t; }
function _r(e, r) { let t = sn(e, r); return t.options ? new en(t.pattern, t.flags, t.options) : new RegExp(t.pattern, t.flags); }
function sn(e, r) { let t = Cr(r), n = le(e, { flags: t.flags, normalizeUnknownPropertyNames: !0, rules: { captureGroup: t.rules.captureGroup, singleline: t.rules.singleline }, skipBackrefValidation: t.rules.allowOrphanBackrefs, unicodePropertyMap: Fe }), a = Lt(n, { accuracy: t.accuracy, asciiWordBoundaries: t.rules.asciiWordBoundaries, avoidSubclass: t.avoidSubclass, bestEffortTarget: t.target }), s = Vt(a, t), o = dr(s.pattern, { captureTransfers: s._captureTransfers, hiddenCaptures: s._hiddenCaptures, mode: "external" }), i = Ie(o.pattern), u = Ae(i.pattern, { captureTransfers: o.captureTransfers, hiddenCaptures: o.hiddenCaptures }), c = { pattern: u.pattern, flags: `${t.hasIndices ? "d" : ""}${t.global ? "g" : ""}${s.flags}${s.options.disable.v ? "u" : "v"}` }; if (t.avoidSubclass) {
    if (t.lazyCompileLength !== 1 / 0)
        throw new Error("Lazy compilation requires subclass");
}
else {
    let p = u.hiddenCaptures.sort((d, w) => d - w), l = Array.from(u.captureTransfers), f = a._strategy, g = c.pattern.length >= t.lazyCompileLength;
    (p.length || l.length || f || g) && (c.options = m(m(m(m({}, p.length && { hiddenCaptures: p }), l.length && { transfers: l }), f && { strategy: f }), g && { lazyCompile: g }));
} return c; }
function Mr(e, r) { return _r(e, m({ global: !0, hasIndices: !0, lazyCompileLength: 3e3, rules: { allowOrphanBackrefs: !0, asciiWordBoundaries: !0, captureGroup: !0, recursionLimit: 5, singleline: !0 } }, r)); }
function an(e = {}) { let r = m({ target: "auto", cache: new Map }, e); return r.regexConstructor ||= t => Mr(t, { target: r.target }), { createScanner(t) { return new Y(t, r); }, createString(t) { return { content: t }; } }; }
function on() { let e = { cache: new Map, regexConstructor: () => { throw new Error("JavaScriptRawEngine: only support precompiled grammar"); } }; return { createScanner(r) { return new Y(r, e); }, createString(r) { return { content: r }; } }; }
export { Y as JavaScriptScanner, on as createJavaScriptRawEngine, an as createJavaScriptRegexEngine, Mr as defaultJavaScriptRegexConstructor };
