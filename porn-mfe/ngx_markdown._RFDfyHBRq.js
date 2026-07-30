import { a as m, b as O, e as E } from "@nf-internal/chunk-JKOY2XUY";
import * as h from "@angular/core";
import { computed as kt, InjectionToken as D, SecurityContext as ze, PLATFORM_ID as xt, EventEmitter as re } from "@angular/core";
import { toSignal as bt } from "@angular/core/rxjs-interop";
import { Subject as se, merge as wt, of as yt, timer as St } from "rxjs";
import { switchMap as Rt, mapTo as Tt, distinctUntilChanged as Et, shareReplay as $t, map as At, takeUntil as Ot, first as _t } from "rxjs/operators";
import { isPlatformBrowser as _ } from "@angular/common";
function K() { return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null }; }
var A = K();
function ke(r) { A = r; }
var C = { exec: () => null };
function f(r, e = "") { let i = typeof r == "string" ? r : r.source, n = { replace: (t, l) => { let s = typeof l == "string" ? l : l.source; return s = s.replace(w.caret, "$1"), i = i.replace(t, s), n; }, getRegex: () => new RegExp(i, e) }; return n; }
var Ce = (() => { try {
    return !!new RegExp("(?<=1)(?<!1)");
}
catch {
    return !1;
} })(), w = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: r => new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: r => new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: r => new RegExp(`^ {0,${Math.min(3, r - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: r => new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: r => new RegExp(`^ {0,${Math.min(3, r - 1)}}#`), htmlBeginRegex: r => new RegExp(`^ {0,${Math.min(3, r - 1)}}<(?:[a-z].*>|!--)`, "i") }, Le = /^(?:[ \t]*(?:\n|$))+/, De = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Ne = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, L = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Me = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, X = /(?:[*+-]|\d{1,9}[.)])/, xe = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, be = f(xe).replace(/bull/g, X).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), je = f(xe).replace(/bull/g, X).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), G = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Be = /^[^\n]+/, V = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Fe = f(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", V).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), qe = f(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, X).getRegex(), B = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", J = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, He = f("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", J).replace("tag", B).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), we = f(G).replace("hr", L).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", B).getRegex(), Ze = f(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", we).getRegex(), Y = { blockquote: Ze, code: De, def: Fe, fences: Ne, heading: Me, hr: L, html: He, lheading: be, list: qe, newline: Le, paragraph: we, table: C, text: Be }, pe = f("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", L).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", B).getRegex(), Ue = O(m({}, Y), { lheading: je, table: pe, paragraph: f(G).replace("hr", L).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", pe).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", B).getRegex() }), We = O(m({}, Y), { html: f(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", J).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: C, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: f(G).replace("hr", L).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", be).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }), Qe = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ke = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, ye = /^( {2,}|\\)\n(?!\s*$)/, Xe = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, F = /[\p{P}\p{S}]/u, ee = /[\s\p{P}\p{S}]/u, Se = /[^\s\p{P}\p{S}]/u, Ge = f(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ee).getRegex(), Re = /(?!~)[\p{P}\p{S}]/u, Ve = /(?!~)[\s\p{P}\p{S}]/u, Je = /(?:[^\s\p{P}\p{S}]|~)/u, Ye = f(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Ce ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Te = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, et = f(Te, "u").replace(/punct/g, F).getRegex(), tt = f(Te, "u").replace(/punct/g, Re).getRegex(), Ee = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", nt = f(Ee, "gu").replace(/notPunctSpace/g, Se).replace(/punctSpace/g, ee).replace(/punct/g, F).getRegex(), rt = f(Ee, "gu").replace(/notPunctSpace/g, Je).replace(/punctSpace/g, Ve).replace(/punct/g, Re).getRegex(), it = f("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Se).replace(/punctSpace/g, ee).replace(/punct/g, F).getRegex(), st = f(/\\(punct)/, "gu").replace(/punct/g, F).getRegex(), lt = f(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), at = f(J).replace("(?:-->|$)", "-->").getRegex(), ot = f("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", at).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), M = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, ct = f(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", M).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), $e = f(/^!?\[(label)\]\[(ref)\]/).replace("label", M).replace("ref", V).getRegex(), Ae = f(/^!?\[(ref)\](?:\[\])?/).replace("ref", V).getRegex(), ht = f("reflink|nolink(?!\\()", "g").replace("reflink", $e).replace("nolink", Ae).getRegex(), ue = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, te = { _backpedal: C, anyPunctuation: st, autolink: lt, blockSkip: Ye, br: ye, code: Ke, del: C, emStrongLDelim: et, emStrongRDelimAst: nt, emStrongRDelimUnd: it, escape: Qe, link: ct, nolink: Ae, punctuation: Ge, reflink: $e, reflinkSearch: ht, tag: ot, text: Xe, url: C }, pt = O(m({}, te), { link: f(/^!?\[(label)\]\((.*?)\)/).replace("label", M).getRegex(), reflink: f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", M).getRegex() }), U = O(m({}, te), { emStrongRDelimAst: rt, emStrongLDelim: tt, url: f(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ue).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: f(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ue).getRegex() }), ut = O(m({}, U), { br: f(ye).replace("{2,}", "*").getRegex(), text: f(U.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }), N = { normal: Y, gfm: Ue, pedantic: We }, I = { normal: te, gfm: U, breaks: ut, pedantic: pt }, dt = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, de = r => dt[r];
function R(r, e) { if (e) {
    if (w.escapeTest.test(r))
        return r.replace(w.escapeReplace, de);
}
else if (w.escapeTestNoEncode.test(r))
    return r.replace(w.escapeReplaceNoEncode, de); return r; }
function ge(r) { try {
    r = encodeURI(r).replace(w.percentDecode, "%");
}
catch {
    return null;
} return r; }
function fe(r, e) { let i = r.replace(w.findPipe, (l, s, o) => { let a = !1, p = s; for (; --p >= 0 && o[p] === "\\";)
    a = !a; return a ? "|" : " |"; }), n = i.split(w.splitPipe), t = 0; if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e)
    if (n.length > e)
        n.splice(e);
    else
        for (; n.length < e;)
            n.push(""); for (; t < n.length; t++)
    n[t] = n[t].trim().replace(w.slashPipe, "|"); return n; }
function v(r, e, i) { let n = r.length; if (n === 0)
    return ""; let t = 0; for (; t < n;) {
    let l = r.charAt(n - t - 1);
    if (l === e && !i)
        t++;
    else if (l !== e && i)
        t++;
    else
        break;
} return r.slice(0, n - t); }
function gt(r, e) { if (r.indexOf(e[1]) === -1)
    return -1; let i = 0; for (let n = 0; n < r.length; n++)
    if (r[n] === "\\")
        n++;
    else if (r[n] === e[0])
        i++;
    else if (r[n] === e[1] && (i--, i < 0))
        return n; return i > 0 ? -2 : -1; }
function me(r, e, i, n, t) { let l = e.href, s = e.title || null, o = r[1].replace(t.other.outputLinkReplace, "$1"); n.state.inLink = !0; let a = { type: r[0].charAt(0) === "!" ? "image" : "link", raw: i, href: l, title: s, text: o, tokens: n.inlineTokens(o) }; return n.state.inLink = !1, a; }
function ft(r, e, i) {
    let n = r.match(i.other.indentCodeCompensation);
    if (n === null)
        return e;
    let t = n[1];
    return e.split(`
`).map(l => { let s = l.match(i.other.beginningSpace); if (s === null)
        return l; let [o] = s; return o.length >= t.length ? l.slice(t.length) : l; }).join(`
`);
}
var j = class {
    options;
    rules;
    lexer;
    constructor(r) { this.options = r || A; }
    space(r) { let e = this.rules.block.newline.exec(r); if (e && e[0].length > 0)
        return { type: "space", raw: e[0] }; }
    code(r) {
        let e = this.rules.block.code.exec(r);
        if (e) {
            let i = e[0].replace(this.rules.other.codeRemoveIndent, "");
            return { type: "code", raw: e[0], codeBlockStyle: "indented", text: this.options.pedantic ? i : v(i, `
`) };
        }
    }
    fences(r) { let e = this.rules.block.fences.exec(r); if (e) {
        let i = e[0], n = ft(i, e[3] || "", this.rules);
        return { type: "code", raw: i, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: n };
    } }
    heading(r) { let e = this.rules.block.heading.exec(r); if (e) {
        let i = e[2].trim();
        if (this.rules.other.endingHash.test(i)) {
            let n = v(i, "#");
            (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (i = n.trim());
        }
        return { type: "heading", raw: e[0], depth: e[1].length, text: i, tokens: this.lexer.inline(i) };
    } }
    hr(r) {
        let e = this.rules.block.hr.exec(r);
        if (e)
            return { type: "hr", raw: v(e[0], `
`) };
    }
    blockquote(r) {
        let e = this.rules.block.blockquote.exec(r);
        if (e) {
            let i = v(e[0], `
`).split(`
`), n = "", t = "", l = [];
            for (; i.length > 0;) {
                let s = !1, o = [], a;
                for (a = 0; a < i.length; a++)
                    if (this.rules.other.blockquoteStart.test(i[a]))
                        o.push(i[a]), s = !0;
                    else if (!s)
                        o.push(i[a]);
                    else
                        break;
                i = i.slice(a);
                let p = o.join(`
`), c = p.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
                n = n ? `${n}
${p}` : p, t = t ? `${t}
${c}` : c;
                let d = this.lexer.state.top;
                if (this.lexer.state.top = !0, this.lexer.blockTokens(c, l, !0), this.lexer.state.top = d, i.length === 0)
                    break;
                let u = l.at(-1);
                if (u?.type === "code")
                    break;
                if (u?.type === "blockquote") {
                    let k = u, x = k.raw + `
` + i.join(`
`), b = this.blockquote(x);
                    l[l.length - 1] = b, n = n.substring(0, n.length - k.raw.length) + b.raw, t = t.substring(0, t.length - k.text.length) + b.text;
                    break;
                }
                else if (u?.type === "list") {
                    let k = u, x = k.raw + `
` + i.join(`
`), b = this.list(x);
                    l[l.length - 1] = b, n = n.substring(0, n.length - u.raw.length) + b.raw, t = t.substring(0, t.length - k.raw.length) + b.raw, i = x.substring(l.at(-1).raw.length).split(`
`);
                    continue;
                }
            }
            return { type: "blockquote", raw: n, tokens: l, text: t };
        }
    }
    list(r) {
        let e = this.rules.block.list.exec(r);
        if (e) {
            let i = e[1].trim(), n = i.length > 1, t = { type: "list", raw: "", ordered: n, start: n ? +i.slice(0, -1) : "", loose: !1, items: [] };
            i = n ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = n ? i : "[*+-]");
            let l = this.rules.other.listItemRegex(i), s = !1;
            for (; r;) {
                let a = !1, p = "", c = "";
                if (!(e = l.exec(r)) || this.rules.block.hr.test(r))
                    break;
                p = e[0], r = r.substring(p.length);
                let d = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, H => " ".repeat(3 * H.length)), u = r.split(`
`, 1)[0], k = !d.trim(), x = 0;
                if (this.options.pedantic ? (x = 2, c = d.trimStart()) : k ? x = e[1].length + 1 : (x = e[2].search(this.rules.other.nonSpaceChar), x = x > 4 ? 1 : x, c = d.slice(x), x += e[1].length), k && this.rules.other.blankLine.test(u) && (p += u + `
`, r = r.substring(u.length + 1), a = !0), !a) {
                    let H = this.rules.other.nextBulletRegex(x), oe = this.rules.other.hrRegex(x), ce = this.rules.other.fencesBeginRegex(x), he = this.rules.other.headingBeginRegex(x), Pe = this.rules.other.htmlBeginRegex(x);
                    for (; r;) {
                        let Z = r.split(`
`, 1)[0], z;
                        if (u = Z, this.options.pedantic ? (u = u.replace(this.rules.other.listReplaceNesting, "  "), z = u) : z = u.replace(this.rules.other.tabCharGlobal, "    "), ce.test(u) || he.test(u) || Pe.test(u) || H.test(u) || oe.test(u))
                            break;
                        if (z.search(this.rules.other.nonSpaceChar) >= x || !u.trim())
                            c += `
` + z.slice(x);
                        else {
                            if (k || d.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || ce.test(d) || he.test(d) || oe.test(d))
                                break;
                            c += `
` + u;
                        }
                        !k && !u.trim() && (k = !0), p += Z + `
`, r = r.substring(Z.length + 1), d = z.slice(x);
                    }
                }
                t.loose || (s ? t.loose = !0 : this.rules.other.doubleBlankLine.test(p) && (s = !0));
                let b = null, q;
                this.options.gfm && (b = this.rules.other.listIsTask.exec(c), b && (q = b[0] !== "[ ] ", c = c.replace(this.rules.other.listReplaceTask, ""))), t.items.push({ type: "list_item", raw: p, task: !!b, checked: q, loose: !1, text: c, tokens: [] }), t.raw += p;
            }
            let o = t.items.at(-1);
            if (o)
                o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
            else
                return;
            t.raw = t.raw.trimEnd();
            for (let a = 0; a < t.items.length; a++)
                if (this.lexer.state.top = !1, t.items[a].tokens = this.lexer.blockTokens(t.items[a].text, []), !t.loose) {
                    let p = t.items[a].tokens.filter(d => d.type === "space"), c = p.length > 0 && p.some(d => this.rules.other.anyLine.test(d.raw));
                    t.loose = c;
                }
            if (t.loose)
                for (let a = 0; a < t.items.length; a++)
                    t.items[a].loose = !0;
            return t;
        }
    }
    html(r) { let e = this.rules.block.html.exec(r); if (e)
        return { type: "html", block: !0, raw: e[0], pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: e[0] }; }
    def(r) { let e = this.rules.block.def.exec(r); if (e) {
        let i = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", t = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
        return { type: "def", tag: i, raw: e[0], href: n, title: t };
    } }
    table(r) {
        let e = this.rules.block.table.exec(r);
        if (!e || !this.rules.other.tableDelimiter.test(e[2]))
            return;
        let i = fe(e[1]), n = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), t = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], l = { type: "table", raw: e[0], header: [], align: [], rows: [] };
        if (i.length === n.length) {
            for (let s of n)
                this.rules.other.tableAlignRight.test(s) ? l.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? l.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? l.align.push("left") : l.align.push(null);
            for (let s = 0; s < i.length; s++)
                l.header.push({ text: i[s], tokens: this.lexer.inline(i[s]), header: !0, align: l.align[s] });
            for (let s of t)
                l.rows.push(fe(s, l.header.length).map((o, a) => ({ text: o, tokens: this.lexer.inline(o), header: !1, align: l.align[a] })));
            return l;
        }
    }
    lheading(r) { let e = this.rules.block.lheading.exec(r); if (e)
        return { type: "heading", raw: e[0], depth: e[2].charAt(0) === "=" ? 1 : 2, text: e[1], tokens: this.lexer.inline(e[1]) }; }
    paragraph(r) {
        let e = this.rules.block.paragraph.exec(r);
        if (e) {
            let i = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
            return { type: "paragraph", raw: e[0], text: i, tokens: this.lexer.inline(i) };
        }
    }
    text(r) { let e = this.rules.block.text.exec(r); if (e)
        return { type: "text", raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) }; }
    escape(r) { let e = this.rules.inline.escape.exec(r); if (e)
        return { type: "escape", raw: e[0], text: e[1] }; }
    tag(r) { let e = this.rules.inline.tag.exec(r); if (e)
        return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: e[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: e[0] }; }
    link(r) { let e = this.rules.inline.link.exec(r); if (e) {
        let i = e[2].trim();
        if (!this.options.pedantic && this.rules.other.startAngleBracket.test(i)) {
            if (!this.rules.other.endAngleBracket.test(i))
                return;
            let l = v(i.slice(0, -1), "\\");
            if ((i.length - l.length) % 2 === 0)
                return;
        }
        else {
            let l = gt(e[2], "()");
            if (l === -2)
                return;
            if (l > -1) {
                let s = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + l;
                e[2] = e[2].substring(0, l), e[0] = e[0].substring(0, s).trim(), e[3] = "";
            }
        }
        let n = e[2], t = "";
        if (this.options.pedantic) {
            let l = this.rules.other.pedanticHrefTitle.exec(n);
            l && (n = l[1], t = l[3]);
        }
        else
            t = e[3] ? e[3].slice(1, -1) : "";
        return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(i) ? n = n.slice(1) : n = n.slice(1, -1)), me(e, { href: n && n.replace(this.rules.inline.anyPunctuation, "$1"), title: t && t.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
    } }
    reflink(r, e) { let i; if ((i = this.rules.inline.reflink.exec(r)) || (i = this.rules.inline.nolink.exec(r))) {
        let n = (i[2] || i[1]).replace(this.rules.other.multipleSpaceGlobal, " "), t = e[n.toLowerCase()];
        if (!t) {
            let l = i[0].charAt(0);
            return { type: "text", raw: l, text: l };
        }
        return me(i, t, i[0], this.lexer, this.rules);
    } }
    emStrong(r, e, i = "") { let n = this.rules.inline.emStrongLDelim.exec(r); if (!(!n || n[3] && i.match(this.rules.other.unicodeAlphaNumeric)) && (!(n[1] || n[2]) || !i || this.rules.inline.punctuation.exec(i))) {
        let t = [...n[0]].length - 1, l, s, o = t, a = 0, p = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
        for (p.lastIndex = 0, e = e.slice(-1 * r.length + t); (n = p.exec(e)) != null;) {
            if (l = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !l)
                continue;
            if (s = [...l].length, n[3] || n[4]) {
                o += s;
                continue;
            }
            else if ((n[5] || n[6]) && t % 3 && !((t + s) % 3)) {
                a += s;
                continue;
            }
            if (o -= s, o > 0)
                continue;
            s = Math.min(s, s + o + a);
            let c = [...n[0]][0].length, d = r.slice(0, t + n.index + c + s);
            if (Math.min(t, s) % 2) {
                let k = d.slice(1, -1);
                return { type: "em", raw: d, text: k, tokens: this.lexer.inlineTokens(k) };
            }
            let u = d.slice(2, -2);
            return { type: "strong", raw: d, text: u, tokens: this.lexer.inlineTokens(u) };
        }
    } }
    codespan(r) { let e = this.rules.inline.code.exec(r); if (e) {
        let i = e[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(i), t = this.rules.other.startingSpaceChar.test(i) && this.rules.other.endingSpaceChar.test(i);
        return n && t && (i = i.substring(1, i.length - 1)), { type: "codespan", raw: e[0], text: i };
    } }
    br(r) { let e = this.rules.inline.br.exec(r); if (e)
        return { type: "br", raw: e[0] }; }
    del(r) { let e = this.rules.inline.del.exec(r); if (e)
        return { type: "del", raw: e[0], text: e[2], tokens: this.lexer.inlineTokens(e[2]) }; }
    autolink(r) { let e = this.rules.inline.autolink.exec(r); if (e) {
        let i, n;
        return e[2] === "@" ? (i = e[1], n = "mailto:" + i) : (i = e[1], n = i), { type: "link", raw: e[0], text: i, href: n, tokens: [{ type: "text", raw: i, text: i }] };
    } }
    url(r) { let e; if (e = this.rules.inline.url.exec(r)) {
        let i, n;
        if (e[2] === "@")
            i = e[0], n = "mailto:" + i;
        else {
            let t;
            do
                t = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
            while (t !== e[0]);
            i = e[0], e[1] === "www." ? n = "http://" + e[0] : n = e[0];
        }
        return { type: "link", raw: e[0], text: i, href: n, tokens: [{ type: "text", raw: i, text: i }] };
    } }
    inlineText(r) { let e = this.rules.inline.text.exec(r); if (e) {
        let i = this.lexer.state.inRawBlock;
        return { type: "text", raw: e[0], text: e[0], escaped: i };
    } }
}, y = class W {
    tokens;
    options;
    state;
    tokenizer;
    inlineQueue;
    constructor(e) { this.tokens = [], this.tokens.links = Object.create(null), this.options = e || A, this.options.tokenizer = this.options.tokenizer || new j, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 }; let i = { other: w, block: N.normal, inline: I.normal }; this.options.pedantic ? (i.block = N.pedantic, i.inline = I.pedantic) : this.options.gfm && (i.block = N.gfm, this.options.breaks ? i.inline = I.breaks : i.inline = I.gfm), this.tokenizer.rules = i; }
    static get rules() { return { block: N, inline: I }; }
    static lex(e, i) { return new W(i).lex(e); }
    static lexInline(e, i) { return new W(i).inlineTokens(e); }
    lex(e) {
        e = e.replace(w.carriageReturn, `
`), this.blockTokens(e, this.tokens);
        for (let i = 0; i < this.inlineQueue.length; i++) {
            let n = this.inlineQueue[i];
            this.inlineTokens(n.src, n.tokens);
        }
        return this.inlineQueue = [], this.tokens;
    }
    blockTokens(e, i = [], n = !1) {
        for (this.options.pedantic && (e = e.replace(w.tabCharGlobal, "    ").replace(w.spaceLine, "")); e;) {
            let t;
            if (this.options.extensions?.block?.some(s => (t = s.call({ lexer: this }, e, i)) ? (e = e.substring(t.raw.length), i.push(t), !0) : !1))
                continue;
            if (t = this.tokenizer.space(e)) {
                e = e.substring(t.raw.length);
                let s = i.at(-1);
                t.raw.length === 1 && s !== void 0 ? s.raw += `
` : i.push(t);
                continue;
            }
            if (t = this.tokenizer.code(e)) {
                e = e.substring(t.raw.length);
                let s = i.at(-1);
                s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + t.raw, s.text += `
` + t.text, this.inlineQueue.at(-1).src = s.text) : i.push(t);
                continue;
            }
            if (t = this.tokenizer.fences(e)) {
                e = e.substring(t.raw.length), i.push(t);
                continue;
            }
            if (t = this.tokenizer.heading(e)) {
                e = e.substring(t.raw.length), i.push(t);
                continue;
            }
            if (t = this.tokenizer.hr(e)) {
                e = e.substring(t.raw.length), i.push(t);
                continue;
            }
            if (t = this.tokenizer.blockquote(e)) {
                e = e.substring(t.raw.length), i.push(t);
                continue;
            }
            if (t = this.tokenizer.list(e)) {
                e = e.substring(t.raw.length), i.push(t);
                continue;
            }
            if (t = this.tokenizer.html(e)) {
                e = e.substring(t.raw.length), i.push(t);
                continue;
            }
            if (t = this.tokenizer.def(e)) {
                e = e.substring(t.raw.length);
                let s = i.at(-1);
                s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + t.raw, s.text += `
` + t.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[t.tag] || (this.tokens.links[t.tag] = { href: t.href, title: t.title }, i.push(t));
                continue;
            }
            if (t = this.tokenizer.table(e)) {
                e = e.substring(t.raw.length), i.push(t);
                continue;
            }
            if (t = this.tokenizer.lheading(e)) {
                e = e.substring(t.raw.length), i.push(t);
                continue;
            }
            let l = e;
            if (this.options.extensions?.startBlock) {
                let s = 1 / 0, o = e.slice(1), a;
                this.options.extensions.startBlock.forEach(p => { a = p.call({ lexer: this }, o), typeof a == "number" && a >= 0 && (s = Math.min(s, a)); }), s < 1 / 0 && s >= 0 && (l = e.substring(0, s + 1));
            }
            if (this.state.top && (t = this.tokenizer.paragraph(l))) {
                let s = i.at(-1);
                n && s?.type === "paragraph" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + t.raw, s.text += `
` + t.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : i.push(t), n = l.length !== e.length, e = e.substring(t.raw.length);
                continue;
            }
            if (t = this.tokenizer.text(e)) {
                e = e.substring(t.raw.length);
                let s = i.at(-1);
                s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + t.raw, s.text += `
` + t.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : i.push(t);
                continue;
            }
            if (e) {
                let s = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                    console.error(s);
                    break;
                }
                else
                    throw new Error(s);
            }
        }
        return this.state.top = !0, i;
    }
    inline(e, i = []) { return this.inlineQueue.push({ src: e, tokens: i }), i; }
    inlineTokens(e, i = []) { let n = e, t = null; if (this.tokens.links) {
        let a = Object.keys(this.tokens.links);
        if (a.length > 0)
            for (; (t = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null;)
                a.includes(t[0].slice(t[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, t.index) + "[" + "a".repeat(t[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    } for (; (t = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null;)
        n = n.slice(0, t.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex); let l; for (; (t = this.tokenizer.rules.inline.blockSkip.exec(n)) != null;)
        l = t[2] ? t[2].length : 0, n = n.slice(0, t.index + l) + "[" + "a".repeat(t[0].length - l - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex); n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n; let s = !1, o = ""; for (; e;) {
        s || (o = ""), s = !1;
        let a;
        if (this.options.extensions?.inline?.some(c => (a = c.call({ lexer: this }, e, i)) ? (e = e.substring(a.raw.length), i.push(a), !0) : !1))
            continue;
        if (a = this.tokenizer.escape(e)) {
            e = e.substring(a.raw.length), i.push(a);
            continue;
        }
        if (a = this.tokenizer.tag(e)) {
            e = e.substring(a.raw.length), i.push(a);
            continue;
        }
        if (a = this.tokenizer.link(e)) {
            e = e.substring(a.raw.length), i.push(a);
            continue;
        }
        if (a = this.tokenizer.reflink(e, this.tokens.links)) {
            e = e.substring(a.raw.length);
            let c = i.at(-1);
            a.type === "text" && c?.type === "text" ? (c.raw += a.raw, c.text += a.text) : i.push(a);
            continue;
        }
        if (a = this.tokenizer.emStrong(e, n, o)) {
            e = e.substring(a.raw.length), i.push(a);
            continue;
        }
        if (a = this.tokenizer.codespan(e)) {
            e = e.substring(a.raw.length), i.push(a);
            continue;
        }
        if (a = this.tokenizer.br(e)) {
            e = e.substring(a.raw.length), i.push(a);
            continue;
        }
        if (a = this.tokenizer.del(e)) {
            e = e.substring(a.raw.length), i.push(a);
            continue;
        }
        if (a = this.tokenizer.autolink(e)) {
            e = e.substring(a.raw.length), i.push(a);
            continue;
        }
        if (!this.state.inLink && (a = this.tokenizer.url(e))) {
            e = e.substring(a.raw.length), i.push(a);
            continue;
        }
        let p = e;
        if (this.options.extensions?.startInline) {
            let c = 1 / 0, d = e.slice(1), u;
            this.options.extensions.startInline.forEach(k => { u = k.call({ lexer: this }, d), typeof u == "number" && u >= 0 && (c = Math.min(c, u)); }), c < 1 / 0 && c >= 0 && (p = e.substring(0, c + 1));
        }
        if (a = this.tokenizer.inlineText(p)) {
            e = e.substring(a.raw.length), a.raw.slice(-1) !== "_" && (o = a.raw.slice(-1)), s = !0;
            let c = i.at(-1);
            c?.type === "text" ? (c.raw += a.raw, c.text += a.text) : i.push(a);
            continue;
        }
        if (e) {
            let c = "Infinite loop on byte: " + e.charCodeAt(0);
            if (this.options.silent) {
                console.error(c);
                break;
            }
            else
                throw new Error(c);
        }
    } return i; }
}, T = class {
    options;
    parser;
    constructor(r) { this.options = r || A; }
    space(r) { return ""; }
    code({ text: r, lang: e, escaped: i }) {
        let n = (e || "").match(w.notSpaceStart)?.[0], t = r.replace(w.endingNewline, "") + `
`;
        return n ? '<pre><code class="language-' + R(n) + '">' + (i ? t : R(t, !0)) + `</code></pre>
` : "<pre><code>" + (i ? t : R(t, !0)) + `</code></pre>
`;
    }
    blockquote({ tokens: r }) {
        return `<blockquote>
${this.parser.parse(r)}</blockquote>
`;
    }
    html({ text: r }) { return r; }
    def(r) { return ""; }
    heading({ tokens: r, depth: e }) {
        return `<h${e}>${this.parser.parseInline(r)}</h${e}>
`;
    }
    hr(r) {
        return `<hr>
`;
    }
    list(r) {
        let e = r.ordered, i = r.start, n = "";
        for (let s = 0; s < r.items.length; s++) {
            let o = r.items[s];
            n += this.listitem(o);
        }
        let t = e ? "ol" : "ul", l = e && i !== 1 ? ' start="' + i + '"' : "";
        return "<" + t + l + `>
` + n + "</" + t + `>
`;
    }
    listitem(r) {
        let e = "";
        if (r.task) {
            let i = this.checkbox({ checked: !!r.checked });
            r.loose ? r.tokens[0]?.type === "paragraph" ? (r.tokens[0].text = i + " " + r.tokens[0].text, r.tokens[0].tokens && r.tokens[0].tokens.length > 0 && r.tokens[0].tokens[0].type === "text" && (r.tokens[0].tokens[0].text = i + " " + R(r.tokens[0].tokens[0].text), r.tokens[0].tokens[0].escaped = !0)) : r.tokens.unshift({ type: "text", raw: i + " ", text: i + " ", escaped: !0 }) : e += i + " ";
        }
        return e += this.parser.parse(r.tokens, !!r.loose), `<li>${e}</li>
`;
    }
    checkbox({ checked: r }) { return "<input " + (r ? 'checked="" ' : "") + 'disabled="" type="checkbox">'; }
    paragraph({ tokens: r }) {
        return `<p>${this.parser.parseInline(r)}</p>
`;
    }
    table(r) {
        let e = "", i = "";
        for (let t = 0; t < r.header.length; t++)
            i += this.tablecell(r.header[t]);
        e += this.tablerow({ text: i });
        let n = "";
        for (let t = 0; t < r.rows.length; t++) {
            let l = r.rows[t];
            i = "";
            for (let s = 0; s < l.length; s++)
                i += this.tablecell(l[s]);
            n += this.tablerow({ text: i });
        }
        return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + n + `</table>
`;
    }
    tablerow({ text: r }) {
        return `<tr>
${r}</tr>
`;
    }
    tablecell(r) {
        let e = this.parser.parseInline(r.tokens), i = r.header ? "th" : "td";
        return (r.align ? `<${i} align="${r.align}">` : `<${i}>`) + e + `</${i}>
`;
    }
    strong({ tokens: r }) { return `<strong>${this.parser.parseInline(r)}</strong>`; }
    em({ tokens: r }) { return `<em>${this.parser.parseInline(r)}</em>`; }
    codespan({ text: r }) { return `<code>${R(r, !0)}</code>`; }
    br(r) { return "<br>"; }
    del({ tokens: r }) { return `<del>${this.parser.parseInline(r)}</del>`; }
    link({ href: r, title: e, tokens: i }) { let n = this.parser.parseInline(i), t = ge(r); if (t === null)
        return n; r = t; let l = '<a href="' + r + '"'; return e && (l += ' title="' + R(e) + '"'), l += ">" + n + "</a>", l; }
    image({ href: r, title: e, text: i, tokens: n }) { n && (i = this.parser.parseInline(n, this.parser.textRenderer)); let t = ge(r); if (t === null)
        return R(i); r = t; let l = `<img src="${r}" alt="${i}"`; return e && (l += ` title="${R(e)}"`), l += ">", l; }
    text(r) { return "tokens" in r && r.tokens ? this.parser.parseInline(r.tokens) : "escaped" in r && r.escaped ? r.text : R(r.text); }
}, ne = class {
    strong({ text: r }) { return r; }
    em({ text: r }) { return r; }
    codespan({ text: r }) { return r; }
    del({ text: r }) { return r; }
    html({ text: r }) { return r; }
    text({ text: r }) { return r; }
    link({ text: r }) { return "" + r; }
    image({ text: r }) { return "" + r; }
    br() { return ""; }
}, S = class Q {
    options;
    renderer;
    textRenderer;
    constructor(e) { this.options = e || A, this.options.renderer = this.options.renderer || new T, this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new ne; }
    static parse(e, i) { return new Q(i).parse(e); }
    static parseInline(e, i) { return new Q(i).parseInline(e); }
    parse(e, i = !0) {
        let n = "";
        for (let t = 0; t < e.length; t++) {
            let l = e[t];
            if (this.options.extensions?.renderers?.[l.type]) {
                let o = l, a = this.options.extensions.renderers[o.type].call({ parser: this }, o);
                if (a !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(o.type)) {
                    n += a || "";
                    continue;
                }
            }
            let s = l;
            switch (s.type) {
                case "space": {
                    n += this.renderer.space(s);
                    continue;
                }
                case "hr": {
                    n += this.renderer.hr(s);
                    continue;
                }
                case "heading": {
                    n += this.renderer.heading(s);
                    continue;
                }
                case "code": {
                    n += this.renderer.code(s);
                    continue;
                }
                case "table": {
                    n += this.renderer.table(s);
                    continue;
                }
                case "blockquote": {
                    n += this.renderer.blockquote(s);
                    continue;
                }
                case "list": {
                    n += this.renderer.list(s);
                    continue;
                }
                case "html": {
                    n += this.renderer.html(s);
                    continue;
                }
                case "def": {
                    n += this.renderer.def(s);
                    continue;
                }
                case "paragraph": {
                    n += this.renderer.paragraph(s);
                    continue;
                }
                case "text": {
                    let o = s, a = this.renderer.text(o);
                    for (; t + 1 < e.length && e[t + 1].type === "text";)
                        o = e[++t], a += `
` + this.renderer.text(o);
                    i ? n += this.renderer.paragraph({ type: "paragraph", raw: a, text: a, tokens: [{ type: "text", raw: a, text: a, escaped: !0 }] }) : n += a;
                    continue;
                }
                default: {
                    let o = 'Token with "' + s.type + '" type was not found.';
                    if (this.options.silent)
                        return console.error(o), "";
                    throw new Error(o);
                }
            }
        }
        return n;
    }
    parseInline(e, i = this.renderer) { let n = ""; for (let t = 0; t < e.length; t++) {
        let l = e[t];
        if (this.options.extensions?.renderers?.[l.type]) {
            let o = this.options.extensions.renderers[l.type].call({ parser: this }, l);
            if (o !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(l.type)) {
                n += o || "";
                continue;
            }
        }
        let s = l;
        switch (s.type) {
            case "escape": {
                n += i.text(s);
                break;
            }
            case "html": {
                n += i.html(s);
                break;
            }
            case "link": {
                n += i.link(s);
                break;
            }
            case "image": {
                n += i.image(s);
                break;
            }
            case "strong": {
                n += i.strong(s);
                break;
            }
            case "em": {
                n += i.em(s);
                break;
            }
            case "codespan": {
                n += i.codespan(s);
                break;
            }
            case "br": {
                n += i.br(s);
                break;
            }
            case "del": {
                n += i.del(s);
                break;
            }
            case "text": {
                n += i.text(s);
                break;
            }
            default: {
                let o = 'Token with "' + s.type + '" type was not found.';
                if (this.options.silent)
                    return console.error(o), "";
                throw new Error(o);
            }
        }
    } return n; }
}, P = class {
    options;
    block;
    constructor(r) { this.options = r || A; }
    static passThroughHooks = new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
    static passThroughHooksRespectAsync = new Set(["preprocess", "postprocess", "processAllTokens"]);
    preprocess(r) { return r; }
    postprocess(r) { return r; }
    processAllTokens(r) { return r; }
    emStrongMask(r) { return r; }
    provideLexer() { return this.block ? y.lex : y.lexInline; }
    provideParser() { return this.block ? S.parse : S.parseInline; }
}, mt = class {
    defaults = K();
    options = this.setOptions;
    parse = this.parseMarkdown(!0);
    parseInline = this.parseMarkdown(!1);
    Parser = S;
    Renderer = T;
    TextRenderer = ne;
    Lexer = y;
    Tokenizer = j;
    Hooks = P;
    constructor(...r) { this.use(...r); }
    walkTokens(r, e) { let i = []; for (let n of r)
        switch (i = i.concat(e.call(this, n)), n.type) {
            case "table": {
                let t = n;
                for (let l of t.header)
                    i = i.concat(this.walkTokens(l.tokens, e));
                for (let l of t.rows)
                    for (let s of l)
                        i = i.concat(this.walkTokens(s.tokens, e));
                break;
            }
            case "list": {
                let t = n;
                i = i.concat(this.walkTokens(t.items, e));
                break;
            }
            default: {
                let t = n;
                this.defaults.extensions?.childTokens?.[t.type] ? this.defaults.extensions.childTokens[t.type].forEach(l => { let s = t[l].flat(1 / 0); i = i.concat(this.walkTokens(s, e)); }) : t.tokens && (i = i.concat(this.walkTokens(t.tokens, e)));
            }
        } return i; }
    use(...r) { let e = this.defaults.extensions || { renderers: {}, childTokens: {} }; return r.forEach(i => { let n = m({}, i); if (n.async = this.defaults.async || n.async || !1, i.extensions && (i.extensions.forEach(t => { if (!t.name)
        throw new Error("extension name required"); if ("renderer" in t) {
        let l = e.renderers[t.name];
        l ? e.renderers[t.name] = function (...s) { let o = t.renderer.apply(this, s); return o === !1 && (o = l.apply(this, s)), o; } : e.renderers[t.name] = t.renderer;
    } if ("tokenizer" in t) {
        if (!t.level || t.level !== "block" && t.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
        let l = e[t.level];
        l ? l.unshift(t.tokenizer) : e[t.level] = [t.tokenizer], t.start && (t.level === "block" ? e.startBlock ? e.startBlock.push(t.start) : e.startBlock = [t.start] : t.level === "inline" && (e.startInline ? e.startInline.push(t.start) : e.startInline = [t.start]));
    } "childTokens" in t && t.childTokens && (e.childTokens[t.name] = t.childTokens); }), n.extensions = e), i.renderer) {
        let t = this.defaults.renderer || new T(this.defaults);
        for (let l in i.renderer) {
            if (!(l in t))
                throw new Error(`renderer '${l}' does not exist`);
            if (["options", "parser"].includes(l))
                continue;
            let s = l, o = i.renderer[s], a = t[s];
            t[s] = (...p) => { let c = o.apply(t, p); return c === !1 && (c = a.apply(t, p)), c || ""; };
        }
        n.renderer = t;
    } if (i.tokenizer) {
        let t = this.defaults.tokenizer || new j(this.defaults);
        for (let l in i.tokenizer) {
            if (!(l in t))
                throw new Error(`tokenizer '${l}' does not exist`);
            if (["options", "rules", "lexer"].includes(l))
                continue;
            let s = l, o = i.tokenizer[s], a = t[s];
            t[s] = (...p) => { let c = o.apply(t, p); return c === !1 && (c = a.apply(t, p)), c; };
        }
        n.tokenizer = t;
    } if (i.hooks) {
        let t = this.defaults.hooks || new P;
        for (let l in i.hooks) {
            if (!(l in t))
                throw new Error(`hook '${l}' does not exist`);
            if (["options", "block"].includes(l))
                continue;
            let s = l, o = i.hooks[s], a = t[s];
            P.passThroughHooks.has(l) ? t[s] = p => { if (this.defaults.async && P.passThroughHooksRespectAsync.has(l))
                return E(this, null, function* () { let d = yield o.call(t, p); return a.call(t, d); }); let c = o.call(t, p); return a.call(t, c); } : t[s] = (...p) => { if (this.defaults.async)
                return E(this, null, function* () { let d = yield o.apply(t, p); return d === !1 && (d = yield a.apply(t, p)), d; }); let c = o.apply(t, p); return c === !1 && (c = a.apply(t, p)), c; };
        }
        n.hooks = t;
    } if (i.walkTokens) {
        let t = this.defaults.walkTokens, l = i.walkTokens;
        n.walkTokens = function (s) { let o = []; return o.push(l.call(this, s)), t && (o = o.concat(t.call(this, s))), o; };
    } this.defaults = m(m({}, this.defaults), n); }), this; }
    setOptions(r) { return this.defaults = m(m({}, this.defaults), r), this; }
    lexer(r, e) { return y.lex(r, e ?? this.defaults); }
    parser(r, e) { return S.parse(r, e ?? this.defaults); }
    parseMarkdown(r) { return (e, i) => { let n = m({}, i), t = m(m({}, this.defaults), n), l = this.onError(!!t.silent, !!t.async); if (this.defaults.async === !0 && n.async === !1)
        return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.")); if (typeof e > "u" || e === null)
        return l(new Error("marked(): input parameter is undefined or null")); if (typeof e != "string")
        return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected")); if (t.hooks && (t.hooks.options = t, t.hooks.block = r), t.async)
        return E(this, null, function* () { let s = t.hooks ? yield t.hooks.preprocess(e) : e, o = yield (t.hooks ? yield t.hooks.provideLexer() : r ? y.lex : y.lexInline)(s, t), a = t.hooks ? yield t.hooks.processAllTokens(o) : o; t.walkTokens && (yield Promise.all(this.walkTokens(a, t.walkTokens))); let p = yield (t.hooks ? yield t.hooks.provideParser() : r ? S.parse : S.parseInline)(a, t); return t.hooks ? yield t.hooks.postprocess(p) : p; }).catch(l); try {
        t.hooks && (e = t.hooks.preprocess(e));
        let s = (t.hooks ? t.hooks.provideLexer() : r ? y.lex : y.lexInline)(e, t);
        t.hooks && (s = t.hooks.processAllTokens(s)), t.walkTokens && this.walkTokens(s, t.walkTokens);
        let o = (t.hooks ? t.hooks.provideParser() : r ? S.parse : S.parseInline)(s, t);
        return t.hooks && (o = t.hooks.postprocess(o)), o;
    }
    catch (s) {
        return l(s);
    } }; }
    onError(r, e) {
        return i => {
            if (i.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
                let n = "<p>An error occurred:</p><pre>" + R(i.message + "", !0) + "</pre>";
                return e ? Promise.resolve(n) : n;
            }
            if (e)
                return Promise.reject(i);
            throw i;
        };
    }
}, $ = new mt;
function g(r, e) { return $.parse(r, e); }
g.options = g.setOptions = function (r) { return $.setOptions(r), g.defaults = $.defaults, ke(g.defaults), g; };
g.getDefaults = K;
g.defaults = A;
g.use = function (...r) { return $.use(...r), g.defaults = $.defaults, ke(g.defaults), g; };
g.walkTokens = function (r, e) { return $.walkTokens(r, e); };
g.parseInline = $.parseInline;
g.Parser = S;
g.parser = S.parse;
g.Renderer = T;
g.TextRenderer = ne;
g.Lexer = y;
g.lexer = y.lex;
g.Tokenizer = j;
g.Hooks = P;
g.parse = g;
var Kt = g.options, Xt = g.setOptions, Gt = g.use, Vt = g.walkTokens, Jt = g.parseInline;
var Yt = S.parse, en = y.lex;
import * as Ie from "@angular/common/http";
import * as le from "@angular/platform-browser";
var zt = ["*"], It = "Copy", vt = "Copied", Pt = (() => { let e = class e {
    constructor() { this._buttonClick$ = new se, this.copied = bt(this._buttonClick$.pipe(Rt(() => wt(yt(!0), St(3e3).pipe(Tt(!1)))), Et(), $t(1))), this.copiedText = kt(() => this.copied() ? vt : It); }
    onCopyToClipboardClick() { this._buttonClick$.next(); }
}; e.\u0275fac = function (t) { return new (t || e); }, e.\u0275cmp = h.\u0275\u0275defineComponent({ type: e, selectors: [["markdown-clipboard"]], decls: 2, vars: 3, consts: [[1, "markdown-clipboard-button", 3, "click"]], template: function (t, l) { t & 1 && (h.\u0275\u0275domElementStart(0, "button", 0), h.\u0275\u0275domListener("click", function () { return l.onCopyToClipboardClick(); }), h.\u0275\u0275text(1), h.\u0275\u0275domElementEnd()), t & 2 && (h.\u0275\u0275classProp("copied", l.copied()), h.\u0275\u0275advance(), h.\u0275\u0275textInterpolate(l.copiedText())); }, encapsulation: 2, changeDetection: 0 }); let r = e; return r; })(), Ct = new D("CLIPBOARD_OPTIONS"), Oe = class {
}, Tn = (() => {
    let e = class e {
        transform(n, t) {
            return n == null && (n = ""), t == null && (t = ""), typeof n != "string" ? (console.error(`LanguagePipe has been invoked with an invalid value type [${typeof n}]`), n) : typeof t != "string" ? (console.error(`LanguagePipe has been invoked with an invalid parameter [${typeof t}]`), n) : "```" + t + `
` + n + "\n```";
        }
    };
    e.\u0275fac = function (t) { return new (t || e); }, e.\u0275pipe = h.\u0275\u0275definePipe({ name: "language", type: e, pure: !0 });
    let r = e;
    return r;
})(), ie = (function (r) { return r.CommandLine = "command-line", r.LineHighlight = "line-highlight", r.LineNumbers = "line-numbers", r; })(ie || {}), Lt = new D("MARKED_EXTENSIONS"), Dt = new D("MARKED_OPTIONS"), Nt = new D("MERMAID_OPTIONS"), ve = new D("SANITIZE");
function Mt(r) { return typeof r == "function"; }
var jt = "[ngx-markdown] When using the `emoji` attribute you *have to* include Emoji-Toolkit files to `angular.json` or use imports. See README for more information", Bt = "[ngx-markdown] When using the `katex` attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information", Ft = "[ngx-markdown] When using the `mermaid` attribute you *have to* include Mermaid files to `angular.json` or use imports. See README for more information", qt = "[ngx-markdown] When using the `clipboard` attribute you *have to* include Clipboard files to `angular.json` or use imports. See README for more information", Ht = "[ngx-markdown] When using the `clipboard` attribute you *have to* provide the `viewContainerRef` parameter to `MarkdownService.render()` function", Zt = "[ngx-markdown] When using the `src` attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information", _e = class extends T {
    constructor() { super(...arguments), this.\u0275NgxMarkdownRendererExtendedForExtensions = !1, this.\u0275NgxMarkdownRendererExtendedForMermaid = !1; }
}, ae = (() => {
    let e = class e {
        get options() { return this._options; }
        set options(n) { this._options = m(m({}, this.DEFAULT_MARKED_OPTIONS), n); }
        get renderer() { return this.options.renderer; }
        set renderer(n) { this.options.renderer = n; }
        constructor(n, t, l, s, o, a, p, c) { this.clipboardOptions = n, this.extensions = t, this.mermaidOptions = s, this.platform = o, this.sanitize = a, this.http = p, this.sanitizer = c, this.DEFAULT_MARKED_OPTIONS = { renderer: new T }, this.DEFAULT_KATEX_OPTIONS = { delimiters: [{ left: "$$", right: "$$", display: !0 }, { left: "$", right: "$", display: !1 }, { left: "\\(", right: "\\)", display: !1 }, { left: "\\begin{equation}", right: "\\end{equation}", display: !0 }, { left: "\\begin{align}", right: "\\end{align}", display: !0 }, { left: "\\begin{alignat}", right: "\\end{alignat}", display: !0 }, { left: "\\begin{gather}", right: "\\end{gather}", display: !0 }, { left: "\\begin{CD}", right: "\\end{CD}", display: !0 }, { left: "\\[", right: "\\]", display: !0 }] }, this.DEFAULT_MERMAID_OPTIONS = { startOnLoad: !1 }, this.DEFAULT_CLIPBOARD_OPTIONS = { buttonComponent: void 0 }, this.DEFAULT_PARSE_OPTIONS = { decodeHtml: !1, inline: !1, emoji: !1, mermaid: !1, markedOptions: void 0, disableSanitizer: !1 }, this.DEFAULT_RENDER_OPTIONS = { clipboard: !1, clipboardOptions: void 0, katex: !1, katexOptions: void 0, mermaid: !1, mermaidOptions: void 0 }, this._reload$ = new se, this.reload$ = this._reload$.asObservable(), this.options = l; }
        parse(n, t = this.DEFAULT_PARSE_OPTIONS) { let { decodeHtml: l, inline: s, emoji: o, mermaid: a, disableSanitizer: p } = t, c = m(m({}, this.options), t.markedOptions), d = c.renderer || this.renderer || new T; this.extensions && (this.renderer = this.extendsRendererForExtensions(d)), a && (this.renderer = this.extendsRendererForMermaid(d)); let u = this.trimIndentation(n), k = l ? this.decodeHtml(u) : u, x = o ? this.parseEmoji(k) : k, b = this.parseMarked(x, c, s); return p ? b : this.sanitizeHtml(b); }
        render(n, t = this.DEFAULT_RENDER_OPTIONS, l) { let { clipboard: s, clipboardOptions: o, katex: a, katexOptions: p, mermaid: c, mermaidOptions: d } = t; a && this.renderKatex(n, m(m({}, this.DEFAULT_KATEX_OPTIONS), p)), c && this.renderMermaid(n, m(m(m({}, this.DEFAULT_MERMAID_OPTIONS), this.mermaidOptions), d)), s && this.renderClipboard(n, l, m(m(m({}, this.DEFAULT_CLIPBOARD_OPTIONS), this.clipboardOptions), o)), this.highlight(n); }
        reload() { this._reload$.next(); }
        getSource(n) { if (!this.http)
            throw new Error(Zt); return this.http.get(n, { responseType: "text" }).pipe(At(t => this.handleExtension(n, t))); }
        highlight(n) { if (!_(this.platform) || typeof Prism > "u" || typeof Prism.highlightAllUnder > "u")
            return; n || (n = document); let t = n.querySelectorAll('pre code:not([class*="language-"])'); Array.prototype.forEach.call(t, l => l.classList.add("language-none")), Prism.highlightAllUnder(n); }
        decodeHtml(n) { if (!_(this.platform))
            return n; let t = document.createElement("textarea"); return t.innerHTML = n, t.value; }
        extendsRendererForExtensions(n) { let t = n; return t.\u0275NgxMarkdownRendererExtendedForExtensions === !0 || (this.extensions?.length > 0 && g.use(...this.extensions), t.\u0275NgxMarkdownRendererExtendedForExtensions = !0), n; }
        extendsRendererForMermaid(n) { let t = n; if (t.\u0275NgxMarkdownRendererExtendedForMermaid === !0)
            return n; let l = n.code; return n.code = s => s.lang === "mermaid" ? `<div class="mermaid">${s.text}</div>` : l(s), t.\u0275NgxMarkdownRendererExtendedForMermaid = !0, n; }
        handleExtension(n, t) {
            let l = n.lastIndexOf("://"), s = l > -1 ? n.substring(l + 4) : n, o = s.lastIndexOf("/"), a = o > -1 ? s.substring(o + 1).split("?")[0] : "", p = a.lastIndexOf("."), c = p > -1 ? a.substring(p + 1) : "";
            return c && c !== "md" ? "```" + c + `
` + t + "\n```" : t;
        }
        parseMarked(n, t, l = !1) { if (t.renderer) {
            let s = m({}, t.renderer);
            delete s.\u0275NgxMarkdownRendererExtendedForExtensions, delete s.\u0275NgxMarkdownRendererExtendedForMermaid, delete t.renderer, g.use({ renderer: s });
        } return l ? g.parseInline(n, t) : g.parse(n, t); }
        parseEmoji(n) { if (!_(this.platform))
            return n; if (typeof joypixels > "u" || typeof joypixels.shortnameToUnicode > "u")
            throw new Error(jt); return joypixels.shortnameToUnicode(n); }
        renderKatex(n, t) { if (_(this.platform)) {
            if (typeof katex > "u" || typeof renderMathInElement > "u")
                throw new Error(Bt);
            renderMathInElement(n, t);
        } }
        renderClipboard(n, t, l) { if (!_(this.platform))
            return; if (typeof ClipboardJS > "u")
            throw new Error(qt); if (!t)
            throw new Error(Ht); let { buttonComponent: s, buttonTemplate: o } = l, a = n.querySelectorAll("pre"); for (let p = 0; p < a.length; p++) {
            let c = a.item(p), d = document.createElement("div");
            d.style.position = "relative", c.parentNode.insertBefore(d, c), d.appendChild(c);
            let u = document.createElement("div");
            u.classList.add("markdown-clipboard-toolbar"), u.style.position = "absolute", u.style.top = ".5em", u.style.right = ".5em", u.style.zIndex = "1", d.insertAdjacentElement("beforeend", u), d.onmouseenter = () => u.classList.add("hover"), d.onmouseleave = () => u.classList.remove("hover");
            let k;
            if (s) {
                let b = t.createComponent(s);
                k = b.hostView, b.changeDetectorRef.markForCheck();
            }
            else if (o)
                k = t.createEmbeddedView(o);
            else {
                let b = t.createComponent(Pt);
                k = b.hostView, b.changeDetectorRef.markForCheck();
            }
            let x;
            k.rootNodes.forEach(b => { u.appendChild(b), x = new ClipboardJS(b, { text: () => c.innerText }); }), k.onDestroy(() => x.destroy());
        } }
        renderMermaid(n, t = this.DEFAULT_MERMAID_OPTIONS) { if (!_(this.platform))
            return; if (typeof mermaid > "u" || typeof mermaid.initialize > "u")
            throw new Error(Ft); let l = n.querySelectorAll(".mermaid"); l.length !== 0 && (mermaid.initialize(t), mermaid.run({ nodes: l })); }
        trimIndentation(n) {
            if (!n)
                return "";
            let t;
            return n.split(`
`).map(l => { let s = t; return l.length > 0 && (s = isNaN(s) ? l.search(/\S|$/) : Math.min(l.search(/\S|$/), s)), isNaN(t) && (t = s), s ? l.substring(s) : l; }).join(`
`);
        }
        sanitizeHtml(n) { return E(this, null, function* () { return Mt(this.sanitize) ? this.sanitize(yield n) : this.sanitize !== ze.NONE ? this.sanitizer.sanitize(this.sanitize, n) ?? "" : n; }); }
    };
    e.\u0275fac = function (t) { return new (t || e)(h.\u0275\u0275inject(Ct, 8), h.\u0275\u0275inject(Lt, 8), h.\u0275\u0275inject(Dt, 8), h.\u0275\u0275inject(Nt, 8), h.\u0275\u0275inject(xt), h.\u0275\u0275inject(ve), h.\u0275\u0275inject(Ie.HttpClient, 8), h.\u0275\u0275inject(le.DomSanitizer)); }, e.\u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
    let r = e;
    return r;
})(), En = (() => { let e = class e {
    get disableSanitizer() { return this._disableSanitizer; }
    set disableSanitizer(n) { this._disableSanitizer = this.coerceBooleanProperty(n); }
    get inline() { return this._inline; }
    set inline(n) { this._inline = this.coerceBooleanProperty(n); }
    get clipboard() { return this._clipboard; }
    set clipboard(n) { this._clipboard = this.coerceBooleanProperty(n); }
    get emoji() { return this._emoji; }
    set emoji(n) { this._emoji = this.coerceBooleanProperty(n); }
    get katex() { return this._katex; }
    set katex(n) { this._katex = this.coerceBooleanProperty(n); }
    get mermaid() { return this._mermaid; }
    set mermaid(n) { this._mermaid = this.coerceBooleanProperty(n); }
    get lineHighlight() { return this._lineHighlight; }
    set lineHighlight(n) { this._lineHighlight = this.coerceBooleanProperty(n); }
    get lineNumbers() { return this._lineNumbers; }
    set lineNumbers(n) { this._lineNumbers = this.coerceBooleanProperty(n); }
    get commandLine() { return this._commandLine; }
    set commandLine(n) { this._commandLine = this.coerceBooleanProperty(n); }
    constructor(n, t, l) { this.element = n, this.markdownService = t, this.viewContainerRef = l, this.error = new re, this.load = new re, this.ready = new re, this._clipboard = !1, this._commandLine = !1, this._disableSanitizer = !1, this._emoji = !1, this._inline = !1, this._katex = !1, this._lineHighlight = !1, this._lineNumbers = !1, this._mermaid = !1, this.destroyed$ = new se; }
    ngOnChanges() { this.loadContent(); }
    loadContent() { if (this.data != null) {
        this.handleData();
        return;
    } if (this.src != null) {
        this.handleSrc();
        return;
    } }
    ngAfterViewInit() { !this.data && !this.src && this.handleTransclusion(), this.markdownService.reload$.pipe(Ot(this.destroyed$)).subscribe(() => this.loadContent()); }
    ngOnDestroy() { this.destroyed$.next(), this.destroyed$.complete(); }
    render(n, t = !1) { return E(this, null, function* () { let l = { decodeHtml: t, inline: this.inline, emoji: this.emoji, mermaid: this.mermaid, disableSanitizer: this.disableSanitizer }, s = { clipboard: this.clipboard, clipboardOptions: this.getClipboardOptions(), katex: this.katex, katexOptions: this.katexOptions, mermaid: this.mermaid, mermaidOptions: this.mermaidOptions }, o = yield this.markdownService.parse(n, l); this.element.nativeElement.innerHTML = o, this.handlePlugins(), this.markdownService.render(this.element.nativeElement, s, this.viewContainerRef), this.ready.emit(); }); }
    coerceBooleanProperty(n) { return n != null && `${String(n)}` != "false"; }
    getClipboardOptions() { if (this.clipboardButtonComponent || this.clipboardButtonTemplate)
        return { buttonComponent: this.clipboardButtonComponent, buttonTemplate: this.clipboardButtonTemplate }; }
    handleData() { this.render(this.data); }
    handleSrc() { this.markdownService.getSource(this.src).subscribe({ next: n => { this.render(n).then(() => { this.load.emit(n); }); }, error: n => this.error.emit(n) }); }
    handleTransclusion() { this.render(this.element.nativeElement.innerHTML, !0); }
    handlePlugins() { this.commandLine && (this.setPluginClass(this.element.nativeElement, ie.CommandLine), this.setPluginOptions(this.element.nativeElement, { dataFilterOutput: this.filterOutput, dataHost: this.host, dataPrompt: this.prompt, dataOutput: this.output, dataUser: this.user })), this.lineHighlight && this.setPluginOptions(this.element.nativeElement, { dataLine: this.line, dataLineOffset: this.lineOffset }), this.lineNumbers && (this.setPluginClass(this.element.nativeElement, ie.LineNumbers), this.setPluginOptions(this.element.nativeElement, { dataStart: this.start })); }
    setPluginClass(n, t) { let l = n.querySelectorAll("pre"); for (let s = 0; s < l.length; s++) {
        let o = t instanceof Array ? t : [t];
        l.item(s).classList.add(...o);
    } }
    setPluginOptions(n, t) { let l = n.querySelectorAll("pre"); for (let s = 0; s < l.length; s++)
        Object.keys(t).forEach(o => { let a = t[o]; if (a) {
            let p = this.toLispCase(o);
            l.item(s).setAttribute(p, a.toString());
        } }); }
    toLispCase(n) { let t = n.match(/([A-Z])/g); if (!t)
        return n; let l = n.toString(); for (let s = 0, o = t.length; s < o; s++)
        l = l.replace(new RegExp(t[s]), "-" + t[s].toLowerCase()); return l.slice(0, 1) === "-" && (l = l.slice(1)), l; }
}; e.\u0275fac = function (t) { return new (t || e)(h.\u0275\u0275directiveInject(h.ElementRef), h.\u0275\u0275directiveInject(ae), h.\u0275\u0275directiveInject(h.ViewContainerRef)); }, e.\u0275cmp = h.\u0275\u0275defineComponent({ type: e, selectors: [["markdown"], ["", "markdown", ""]], inputs: { data: "data", src: "src", disableSanitizer: "disableSanitizer", inline: "inline", clipboard: "clipboard", clipboardButtonComponent: "clipboardButtonComponent", clipboardButtonTemplate: "clipboardButtonTemplate", emoji: "emoji", katex: "katex", katexOptions: "katexOptions", mermaid: "mermaid", mermaidOptions: "mermaidOptions", lineHighlight: "lineHighlight", line: "line", lineOffset: "lineOffset", lineNumbers: "lineNumbers", start: "start", commandLine: "commandLine", filterOutput: "filterOutput", host: "host", prompt: "prompt", output: "output", user: "user" }, outputs: { error: "error", load: "load", ready: "ready" }, features: [h.\u0275\u0275NgOnChangesFeature], ngContentSelectors: zt, decls: 1, vars: 0, template: function (t, l) { t & 1 && (h.\u0275\u0275projectionDef(), h.\u0275\u0275projection(0)); }, encapsulation: 2 }); let r = e; return r; })(), $n = (() => { let e = class e {
    constructor(n, t, l, s, o) { this.domSanitizer = n, this.elementRef = t, this.markdownService = l, this.viewContainerRef = s, this.zone = o; }
    transform(n, t) { return E(this, null, function* () { if (n == null)
        return ""; if (typeof n != "string")
        return console.error(`MarkdownPipe has been invoked with an invalid value type [${typeof n}]`), n; let l = yield this.markdownService.parse(n, t); return this.zone.onStable.pipe(_t()).subscribe(() => this.markdownService.render(this.elementRef.nativeElement, t, this.viewContainerRef)), this.domSanitizer.bypassSecurityTrustHtml(l); }); }
}; e.\u0275fac = function (t) { return new (t || e)(h.\u0275\u0275directiveInject(le.DomSanitizer, 16), h.\u0275\u0275directiveInject(h.ElementRef, 16), h.\u0275\u0275directiveInject(ae, 16), h.\u0275\u0275directiveInject(h.ViewContainerRef, 16), h.\u0275\u0275directiveInject(h.NgZone, 16)); }, e.\u0275pipe = h.\u0275\u0275definePipe({ name: "markdown", type: e, pure: !0 }); let r = e; return r; })();
function Ut(r) { return [ae, r?.loader ?? [], r?.clipboardOptions ?? [], r?.markedOptions ?? [], r?.mermaidOptions ?? [], r?.markedExtensions ?? [], Qt(r?.sanitize) ?? []]; }
function Wt(r) { return r != null && r.provide != null; }
function Qt(r) { return Wt(r) ? r : { provide: ve, useValue: r ?? ze.HTML }; }
var An = (() => { let e = class e {
    static forRoot(n) { return { ngModule: e, providers: [Ut(n)] }; }
    static forChild() { return { ngModule: e }; }
}; e.\u0275fac = function (t) { return new (t || e); }, e.\u0275mod = h.\u0275\u0275defineNgModule({ type: e }), e.\u0275inj = h.\u0275\u0275defineInjector({}); let r = e; return r; })();
export { Ct as CLIPBOARD_OPTIONS, Pt as ClipboardButtonComponent, _e as ExtendedRenderer, Oe as KatexSpecificOptions, Tn as LanguagePipe, Lt as MARKED_EXTENSIONS, Dt as MARKED_OPTIONS, Nt as MERMAID_OPTIONS, En as MarkdownComponent, An as MarkdownModule, $n as MarkdownPipe, ae as MarkdownService, T as MarkedRenderer, ie as PrismPlugin, ve as SANITIZE, qt as errorClipboardNotLoaded, Ht as errorClipboardViewContainerRequired, jt as errorJoyPixelsNotLoaded, Bt as errorKatexNotLoaded, Ft as errorMermaidNotLoaded, Zt as errorSrcWithoutHttpClient, Qt as getSanitizeProvider, Mt as isSanitizeFunction, Wt as isTypedProvider, Ut as provideMarkdown };
