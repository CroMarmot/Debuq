import { e as y } from "@nf-internal/chunk-JKOY2XUY";
function k(r, t) { return y(this, null, function* () { let n = r.getReader(), e; for (; !(e = yield n.read()).done;)
    t(e.value); }); }
function S(r) { let t, n, e, o = !1; return function (s) { t === void 0 ? (t = s, n = 0, e = -1) : t = _(t, s); let i = t.length, a = 0; for (; n < i;) {
    o && (t[n] === 10 && (a = ++n), o = !1);
    let c = -1;
    for (; n < i && c === -1; ++n)
        switch (t[n]) {
            case 58:
                e === -1 && (e = n - a);
                break;
            case 13: o = !0;
            case 10:
                c = n;
                break;
        }
    if (c === -1)
        break;
    r(t.subarray(a, c), e), a = n, e = -1;
} a === i ? t = void 0 : a !== 0 && (t = t.subarray(a), n -= a); }; }
function j(r, t, n) {
    let e = T(), o = new TextDecoder;
    return function (s, i) {
        if (s.length === 0)
            n?.(e), e = T();
        else if (i > 0) {
            let a = o.decode(s.subarray(0, i)), c = i + (s[i + 1] === 32 ? 2 : 1), d = o.decode(s.subarray(c));
            switch (a) {
                case "data":
                    e.data = e.data ? e.data + `
` + d : d;
                    break;
                case "event":
                    e.event = d;
                    break;
                case "id":
                    r(e.id = d);
                    break;
                case "retry":
                    let u = parseInt(d, 10);
                    isNaN(u) || t(e.retry = u);
                    break;
            }
        }
    };
}
function _(r, t) { let n = new Uint8Array(r.length + t.length); return n.set(r), n.set(t, r.length), n; }
function T() { return { data: "", event: "", id: "", retry: void 0 }; }
var A = function (r, t) { var n = {}; for (var e in r)
    Object.prototype.hasOwnProperty.call(r, e) && t.indexOf(e) < 0 && (n[e] = r[e]); if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, e = Object.getOwnPropertySymbols(r); o < e.length; o++)
        t.indexOf(e[o]) < 0 && Object.prototype.propertyIsEnumerable.call(r, e[o]) && (n[e[o]] = r[e[o]]); return n; }, h = "text/event-stream", H = 1e3, C = "last-event-id";
function N(r, t) { var { signal: n, headers: e, onopen: o, onmessage: b, onclose: s, onerror: i, openWhenHidden: a, fetch: c } = t, d = A(t, ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "openWhenHidden", "fetch"]); return new Promise((u, L) => { let f = Object.assign({}, e); f.accept || (f.accept = h); let v; function E() { v.abort(), document.hidden || m(); } a || document.addEventListener("visibilitychange", E); let x = H, g = 0; function w() { document.removeEventListener("visibilitychange", E), window.clearTimeout(g), v.abort(); } n?.addEventListener("abort", () => { w(), u(); }); let I = c ?? window.fetch, P = o ?? R; function m() { return y(this, null, function* () { var O; v = new AbortController; try {
    let p = yield I(r, Object.assign(Object.assign({}, d), { headers: f, signal: v.signal }));
    yield P(p), yield k(p.body, S(j(l => { l ? f[C] = l : delete f[C]; }, l => { x = l; }, b))), s?.(), w(), u();
}
catch (p) {
    if (!v.signal.aborted)
        try {
            let l = (O = i?.(p)) !== null && O !== void 0 ? O : x;
            window.clearTimeout(g), g = window.setTimeout(m, l);
        }
        catch (l) {
            w(), L(l);
        }
} }); } m(); }); }
function R(r) { let t = r.headers.get("content-type"); if (!t?.startsWith(h))
    throw new Error(`Expected content-type to be ${h}, Actual: ${t}`); }
export { h as EventStreamContentType, N as fetchEventSource };
