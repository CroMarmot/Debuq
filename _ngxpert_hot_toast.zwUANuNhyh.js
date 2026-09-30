import { a as l, b as g, c as B, e as V } from "@nf-internal/chunk-JKOY2XUY";
import { isPlatformServer as Q } from "@angular/common";
import * as t from "@angular/core";
import { EventEmitter as m, signal as $, inject as u, Injector as v, Renderer2 as P, NgZone as N, ChangeDetectorRef as E, InjectionToken as Z, PLATFORM_ID as q, makeEnvironmentProviders as U } from "@angular/core";
import { DynamicViewDirective as S, isTemplateRef as G, isComponent as R, ViewService as W } from "@ngneat/overview";
import { Subject as _, race as H, defer as Y } from "rxjs";
import { map as K, filter as w, tap as X } from "rxjs/operators";
function J(n, s) {
    if (n & 1 && (t.\u0275\u0275text(0, `
  `), t.\u0275\u0275element(1, "hot-toast-loader", 1), t.\u0275\u0275text(2, `
  `)), n & 2) {
        let a = t.\u0275\u0275nextContext(2);
        t.\u0275\u0275advance(), t.\u0275\u0275property("theme", a.theme);
    }
}
function tt(n, s) {
    if (n & 1 && (t.\u0275\u0275text(0, `
      `), t.\u0275\u0275elementStart(1, "div"), t.\u0275\u0275text(2, `
        `), t.\u0275\u0275element(3, "hot-toast-error", 1), t.\u0275\u0275text(4, `
      `), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(5, `
      `)), n & 2) {
        let a = t.\u0275\u0275nextContext(3);
        t.\u0275\u0275advance(3), t.\u0275\u0275property("theme", a.theme);
    }
}
function et(n, s) {
    if (n & 1 && (t.\u0275\u0275text(0, `
      `), t.\u0275\u0275elementStart(1, "div"), t.\u0275\u0275text(2, `
        `), t.\u0275\u0275element(3, "hot-toast-checkmark", 1), t.\u0275\u0275text(4, `
      `), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(5, `
      `)), n & 2) {
        let a = t.\u0275\u0275nextContext(3);
        t.\u0275\u0275advance(3), t.\u0275\u0275property("theme", a.theme);
    }
}
function it(n, s) {
    if (n & 1 && (t.\u0275\u0275text(0, `
      `), t.\u0275\u0275elementStart(1, "div"), t.\u0275\u0275text(2, `
        `), t.\u0275\u0275element(3, "hot-toast-warning", 1), t.\u0275\u0275text(4, `
      `), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(5, `
      `)), n & 2) {
        let a = t.\u0275\u0275nextContext(3);
        t.\u0275\u0275advance(3), t.\u0275\u0275property("theme", a.theme);
    }
}
function ot(n, s) {
    if (n & 1 && (t.\u0275\u0275text(0, `
      `), t.\u0275\u0275elementStart(1, "div"), t.\u0275\u0275text(2, `
        `), t.\u0275\u0275element(3, "hot-toast-info", 1), t.\u0275\u0275text(4, `
      `), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(5, `
      `)), n & 2) {
        let a = t.\u0275\u0275nextContext(3);
        t.\u0275\u0275advance(3), t.\u0275\u0275property("theme", a.theme);
    }
}
function nt(n, s) {
    if (n & 1 && (t.\u0275\u0275text(0, `
  `), t.\u0275\u0275elementStart(1, "div", 2), t.\u0275\u0275text(2, `
    `), t.\u0275\u0275elementStart(3, "div"), t.\u0275\u0275text(4, `
      `), t.\u0275\u0275conditionalCreate(5, tt, 6, 1)(6, et, 6, 1)(7, it, 6, 1)(8, ot, 6, 1), t.\u0275\u0275text(9, `
    `), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(10, `
  `), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(11, `
  `)), n & 2) {
        let a, e = t.\u0275\u0275nextContext(2);
        t.\u0275\u0275advance(5), t.\u0275\u0275conditional((a = e.type) === "error" ? 5 : a === "success" ? 6 : a === "warning" ? 7 : a === "info" ? 8 : -1);
    }
}
function st(n, s) {
    if (n & 1 && (t.\u0275\u0275text(0, `
`), t.\u0275\u0275elementStart(1, "div", 0), t.\u0275\u0275text(2, `
  `), t.\u0275\u0275conditionalCreate(3, J, 3, 1), t.\u0275\u0275conditionalCreate(4, nt, 12, 1), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(5, `
`)), n & 2) {
        let a = t.\u0275\u0275nextContext();
        t.\u0275\u0275advance(3), t.\u0275\u0275conditional(a.type === "loading" ? 3 : -1), t.\u0275\u0275advance(), t.\u0275\u0275conditional(a.type !== "loading" ? 4 : -1);
    }
}
function at(n, s) { n & 1 && t.\u0275\u0275elementContainer(0); }
var j = ["hotToastBarBase"];
function rt(n, s) {
    if (n & 1 && (t.\u0275\u0275text(0, `
        `), t.\u0275\u0275elementStart(1, "hot-toast-animated-icon", 7), t.\u0275\u0275text(2), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(3, `
        `)), n & 2) {
        let a = t.\u0275\u0275nextContext(2);
        t.\u0275\u0275advance(), t.\u0275\u0275property("iconTheme", a.toast.iconTheme), t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(a.toast.icon);
    }
}
function lt(n, s) { n & 1 && t.\u0275\u0275elementContainer(0); }
function ht(n, s) {
    if (n & 1 && (t.\u0275\u0275text(0, `
        `), t.\u0275\u0275elementStart(1, "div"), t.\u0275\u0275text(2, `
          `), t.\u0275\u0275template(3, lt, 1, 0, "ng-container", 8), t.\u0275\u0275text(4, `
        `), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(5, `
        `)), n & 2) {
        let a = t.\u0275\u0275nextContext(2);
        t.\u0275\u0275advance(3), t.\u0275\u0275property("dynamicView", a.toast.icon);
    }
}
function ct(n, s) { if (n & 1 && (t.\u0275\u0275text(0, " "), t.\u0275\u0275conditionalCreate(1, rt, 4, 2)(2, ht, 6, 1)), n & 2) {
    let a = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275conditional(a.isIconString ? 1 : 2);
} }
function dt(n, s) {
    if (n & 1 && (t.\u0275\u0275text(0, `
        `), t.\u0275\u0275element(1, "hot-toast-indicator", 9), t.\u0275\u0275text(2, `
        `)), n & 2) {
        let a = t.\u0275\u0275nextContext();
        t.\u0275\u0275advance(), t.\u0275\u0275property("theme", a.toast.iconTheme)("type", a.toast.type);
    }
}
function ut(n, s) { n & 1 && t.\u0275\u0275elementContainer(0); }
function ft(n, s) {
    if (n & 1) {
        let a = t.\u0275\u0275getCurrentView();
        t.\u0275\u0275text(0, `
      `), t.\u0275\u0275elementStart(1, "button", 10), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(a); let o = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(o.close()); }), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(2, `
      `);
    }
    if (n & 2) {
        let a = t.\u0275\u0275nextContext();
        t.\u0275\u0275advance(), t.\u0275\u0275styleMap(a.toast.closeStyle);
    }
}
var pt = (n, s) => s.id;
function mt(n, s) {
    if (n & 1 && (t.\u0275\u0275text(0, `
        `), t.\u0275\u0275element(1, "hot-toast-animated-icon", 7), t.\u0275\u0275text(2, `
        `)), n & 2) {
        let a = t.\u0275\u0275nextContext(2);
        t.\u0275\u0275advance(), t.\u0275\u0275property("iconTheme", a.toast.iconTheme)("icon", a.toast.icon);
    }
}
function gt(n, s) { n & 1 && t.\u0275\u0275elementContainer(0); }
function Ct(n, s) {
    if (n & 1 && (t.\u0275\u0275text(0, `
        `), t.\u0275\u0275elementStart(1, "div"), t.\u0275\u0275text(2, `
          `), t.\u0275\u0275template(3, gt, 1, 0, "ng-container", 8), t.\u0275\u0275text(4, `
        `), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(5, `
        `)), n & 2) {
        let a = t.\u0275\u0275nextContext(2);
        t.\u0275\u0275advance(3), t.\u0275\u0275property("dynamicView", a.toast.icon);
    }
}
function _t(n, s) { if (n & 1 && (t.\u0275\u0275text(0, " "), t.\u0275\u0275conditionalCreate(1, mt, 3, 2)(2, Ct, 6, 1)), n & 2) {
    let a = t.\u0275\u0275nextContext();
    t.\u0275\u0275advance(), t.\u0275\u0275conditional(a.isIconString ? 1 : 2);
} }
function Tt(n, s) {
    if (n & 1 && (t.\u0275\u0275text(0, `
        `), t.\u0275\u0275element(1, "hot-toast-indicator", 9), t.\u0275\u0275text(2, `
        `)), n & 2) {
        let a = t.\u0275\u0275nextContext();
        t.\u0275\u0275advance(), t.\u0275\u0275property("theme", a.toast.iconTheme)("type", a.toast.type);
    }
}
function xt(n, s) { n & 1 && t.\u0275\u0275elementContainer(0); }
function vt(n, s) {
    if (n & 1) {
        let a = t.\u0275\u0275getCurrentView();
        t.\u0275\u0275text(0, `
      `), t.\u0275\u0275elementStart(1, "button", 10), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(a); let o = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(o.toggleToastGroup()); }), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(2, `
      `);
    }
    if (n & 2) {
        let a = t.\u0275\u0275nextContext();
        t.\u0275\u0275advance(), t.\u0275\u0275styleMap(a.toast.group.btnStyle), t.\u0275\u0275classProp("expanded", a.isExpanded), t.\u0275\u0275attribute("aria-label", a.isExpanded ? "Collapse" : "Expand");
    }
}
function yt(n, s) {
    if (n & 1) {
        let a = t.\u0275\u0275getCurrentView();
        t.\u0275\u0275text(0, `
      `), t.\u0275\u0275elementStart(1, "button", 11), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(a); let o = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(o.close()); }), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(2, `
      `);
    }
    if (n & 2) {
        let a = t.\u0275\u0275nextContext();
        t.\u0275\u0275advance(), t.\u0275\u0275styleMap(a.toast.closeStyle);
    }
}
function bt(n, s) {
    if (n & 1) {
        let a = t.\u0275\u0275getCurrentView();
        t.\u0275\u0275text(0, `
      `), t.\u0275\u0275elementStart(1, "hot-toast-group-item", 13), t.\u0275\u0275listener("height", function (o) { let i = t.\u0275\u0275restoreView(a).$implicit, r = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(r.updateHeight(o, i)); })("beforeClosed", function () { let o = t.\u0275\u0275restoreView(a).$implicit, i = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(i.beforeClosedGroupItem(o)); })("afterClosed", function (o) { t.\u0275\u0275restoreView(a); let i = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(i.afterClosedGroupItem(o)); }), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(2, `
      `);
    }
    if (n & 2) {
        let a = s.$implicit, e = s.$index, o = t.\u0275\u0275nextContext(2);
        t.\u0275\u0275advance(), t.\u0275\u0275property("toast", a)("offset", o.calculateOffset(a.id))("toastRef", o.toastRef.groupRefs[e])("toastsAfter", (a.autoClose ? o.groupChildrenToasts.length : o.visibleToasts.length) - 1 - e)("defaultConfig", o.defaultConfig)("isShowingAllToasts", o.isShowingAllToasts);
    }
}
function wt(n, s) {
    if (n & 1 && (t.\u0275\u0275text(0, `
    `), t.\u0275\u0275elementStart(1, "div", 12), t.\u0275\u0275text(2, `
      `), t.\u0275\u0275repeaterCreate(3, bt, 3, 6, null, null, pt), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(5, `
    `)), n & 2) {
        let a = t.\u0275\u0275nextContext();
        t.\u0275\u0275advance(), t.\u0275\u0275classMap(a.toast.group == null ? null : a.toast.group.className), t.\u0275\u0275styleProp("--hot-toast-group-height", a.groupHeight + "px"), t.\u0275\u0275advance(2), t.\u0275\u0275repeater(a.groupChildrenToasts);
    }
}
function At(n, s) {
    n & 1 && t.\u0275\u0275text(0, `
        `);
}
function Et(n, s) {
    if (n & 1) {
        let a = t.\u0275\u0275getCurrentView();
        t.\u0275\u0275text(0, `
          `), t.\u0275\u0275elementStart(1, "hot-toast", 2), t.\u0275\u0275listener("showAllToasts", function (o) { t.\u0275\u0275restoreView(a); let i = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(i.showAllToasts(o)); })("height", function (o) { t.\u0275\u0275restoreView(a); let i = t.\u0275\u0275nextContext().$implicit, r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r.updateHeight(o, i)); })("beforeClosed", function () { t.\u0275\u0275restoreView(a); let o = t.\u0275\u0275nextContext().$implicit, i = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(i.beforeClosed(o)); })("afterClosed", function (o) { t.\u0275\u0275restoreView(a); let i = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(i.afterClosed(o)); })("toggleGroup", function (o) { t.\u0275\u0275restoreView(a); let i = t.\u0275\u0275nextContext(2); return t.\u0275\u0275resetView(i.toggleGroup(o)); }), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(2, `
        `);
    }
    if (n & 2) {
        let a = t.\u0275\u0275nextContext(), e = a.$implicit, o = a.$index, i = t.\u0275\u0275nextContext();
        t.\u0275\u0275advance(), t.\u0275\u0275property("toast", e)("offset", i.calculateOffset(e.id, e.position))("toastRef", i.toastRefs[o])("toastsAfter", (e.autoClose ? i.toasts.length : i.getVisibleToasts(e.position).length) - 1 - o)("defaultConfig", i.defaultConfig)("isShowingAllToasts", i.isShowingAllToasts);
    }
}
function St(n, s) {
    if (n & 1 && (t.\u0275\u0275text(0, `
        `), t.\u0275\u0275conditionalCreate(1, At, 1, 0)(2, Et, 3, 6)), n & 2) {
        let a = s.$implicit;
        t.\u0275\u0275advance(), t.\u0275\u0275conditional(a.group != null && a.group.parent ? 1 : 2);
    }
}
var M = { blank: 4e3, error: 4e3, success: 4e3, loading: 3e4, warning: 4e3, info: 4e3 }, C = 800, y = 350, Gt = 8, I = .05, Rt = 1, T = class {
    constructor(s) { this.toast = s, this.groupRefs = [], this.groupExpanded = !1, this._onClosed = new _, this._onGroupToggle = new _; }
    set data(s) { this.toast.data = s; }
    get data() { return this.toast.data; }
    set dispose(s) { this._dispose = s; }
    getToast() { return this.toast; }
    appendTo(s, a) { let { dispose: e, updateMessage: o, updateToast: i, afterClosed: r, afterGroupToggled: h, afterGroupRefsAttached: c } = s.addToast(this, a); return this.dispose = e, this.updateMessage = o, this.updateToast = i, this.afterClosed = H(this._onClosed.asObservable(), r), this.afterGroupToggled = H(this._onGroupToggle.asObservable(), h), this.afterGroupRefsAttached = c, this; }
    close(s = { dismissedByAction: !1 }) { this.groupRefs.forEach(a => a.close()), this._dispose(), this._onClosed.next({ dismissedByAction: s.dismissedByAction, id: this.toast.id }), this._onClosed.complete(); }
    toggleGroup(s = { byAction: !1 }) { this.groupExpanded = !this.groupExpanded, this._onGroupToggle.next({ byAction: s.byAction, id: this.toast.id, event: this.groupExpanded ? "expand" : "collapse" }); }
    show() { this.toast.visible = !0; }
}, b = (n, s, a) => { n.setStyle(s, "animation", a); }, It = (() => {
    let s = class s {
    };
    s.\u0275fac = function (o) { return new (o || s); }, s.\u0275cmp = t.\u0275\u0275defineComponent({ type: s, selectors: [["hot-toast-loader"]], inputs: { theme: "theme" }, decls: 2, vars: 4, consts: [[1, "hot-toast-loader-icon"]], template: function (o, i) {
            o & 1 && (t.\u0275\u0275domElement(0, "div", 0), t.\u0275\u0275text(1, `
`)), o & 2 && t.\u0275\u0275styleProp("border-color", i.theme == null ? null : i.theme.primary)("border-right-color", i.theme == null ? null : i.theme.secondary);
        }, encapsulation: 2, changeDetection: 0 });
    let n = s;
    return n;
})(), kt = (() => {
    let s = class s {
    };
    s.\u0275fac = function (o) { return new (o || s); }, s.\u0275cmp = t.\u0275\u0275defineComponent({ type: s, selectors: [["hot-toast-error"]], inputs: { theme: "theme" }, decls: 2, vars: 4, consts: [[1, "hot-toast-error-icon"]], template: function (o, i) {
            o & 1 && (t.\u0275\u0275domElement(0, "div", 0), t.\u0275\u0275text(1, `
`)), o & 2 && t.\u0275\u0275styleProp("--error-primary", i.theme == null ? null : i.theme.primary)("--error-secondary", i.theme == null ? null : i.theme.secondary);
        }, encapsulation: 2, changeDetection: 0 });
    let n = s;
    return n;
})(), Bt = (() => {
    let s = class s {
    };
    s.\u0275fac = function (o) { return new (o || s); }, s.\u0275cmp = t.\u0275\u0275defineComponent({ type: s, selectors: [["hot-toast-checkmark"]], inputs: { theme: "theme" }, decls: 2, vars: 4, consts: [[1, "hot-toast-checkmark-icon"]], template: function (o, i) {
            o & 1 && (t.\u0275\u0275domElement(0, "div", 0), t.\u0275\u0275text(1, `
`)), o & 2 && t.\u0275\u0275styleProp("--check-primary", i.theme == null ? null : i.theme.primary)("--check-secondary", i.theme == null ? null : i.theme.secondary);
        }, encapsulation: 2, changeDetection: 0 });
    let n = s;
    return n;
})(), Vt = (() => {
    let s = class s {
    };
    s.\u0275fac = function (o) { return new (o || s); }, s.\u0275cmp = t.\u0275\u0275defineComponent({ type: s, selectors: [["hot-toast-warning"]], inputs: { theme: "theme" }, decls: 2, vars: 4, consts: [[1, "hot-toast-warning-icon"]], template: function (o, i) {
            o & 1 && (t.\u0275\u0275domElement(0, "div", 0), t.\u0275\u0275text(1, `
`)), o & 2 && t.\u0275\u0275styleProp("--warn-primary", i.theme == null ? null : i.theme.primary)("--warn-secondary", i.theme == null ? null : i.theme.secondary);
        }, encapsulation: 2, changeDetection: 0 });
    let n = s;
    return n;
})(), Ht = (() => {
    let s = class s {
    };
    s.\u0275fac = function (o) { return new (o || s); }, s.\u0275cmp = t.\u0275\u0275defineComponent({ type: s, selectors: [["hot-toast-info"]], inputs: { theme: "theme" }, decls: 2, vars: 4, consts: [[1, "hot-toast-info-icon"]], template: function (o, i) {
            o & 1 && (t.\u0275\u0275domElement(0, "div", 0), t.\u0275\u0275text(1, `
`)), o & 2 && t.\u0275\u0275styleProp("--info-primary", i.theme == null ? null : i.theme.primary)("--info-secondary", i.theme == null ? null : i.theme.secondary);
        }, encapsulation: 2, changeDetection: 0 });
    let n = s;
    return n;
})(), L = (() => { let s = class s {
}; s.\u0275fac = function (o) { return new (o || s); }, s.\u0275cmp = t.\u0275\u0275defineComponent({ type: s, selectors: [["hot-toast-indicator"]], inputs: { theme: "theme", type: "type" }, decls: 1, vars: 1, consts: [[1, "hot-toast-indicator-wrapper"], [3, "theme"], [1, "hot-toast-status-wrapper"]], template: function (o, i) { o & 1 && t.\u0275\u0275conditionalCreate(0, st, 6, 2), o & 2 && t.\u0275\u0275conditional(i.type !== "blank" ? 0 : -1); }, dependencies: [It, kt, Bt, Vt, Ht], encapsulation: 2, changeDetection: 0 }); let n = s; return n; })(), z = (() => {
    let s = class s {
    };
    s.\u0275fac = function (o) { return new (o || s); }, s.\u0275cmp = t.\u0275\u0275defineComponent({ type: s, selectors: [["hot-toast-animated-icon"]], inputs: { iconTheme: "iconTheme", icon: "icon" }, decls: 5, vars: 3, consts: [[1, "hot-toast-animated-icon"], [4, "dynamicView"]], template: function (o, i) {
            o & 1 && (t.\u0275\u0275elementStart(0, "div", 0), t.\u0275\u0275text(1, `
  `), t.\u0275\u0275template(2, at, 1, 0, "ng-container", 1), t.\u0275\u0275text(3, `
`), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(4, `
`)), o & 2 && (t.\u0275\u0275styleProp("color", i.iconTheme == null ? null : i.iconTheme.primary), t.\u0275\u0275advance(2), t.\u0275\u0275property("dynamicView", i.icon));
        }, dependencies: [S], encapsulation: 2, changeDetection: 0 });
    let n = s;
    return n;
})(), Mt = (() => {
    let s = class s {
        constructor() { this.offset = 0, this._toastsAfter = 0, this.isShowingAllToasts = !1, this.height = new m, this.beforeClosed = new m, this.afterClosed = new m, this.showAllToasts = new m, this.toggleGroup = new m, this.isManualClose = !1, this.toastBarBaseStylesSignal = $({}), this.unlisteners = [], this.softClosed = !1, this.injector = u(v), this.renderer = u(P), this.ngZone = u(N), this.cdr = u(E); }
        set toast(e) { this._toast = e; let o = this.toastBarBaseStylesSignal(), i = l({}, e.style); if (o.animation?.includes("hotToastExitAnimation"))
            i.animation = o.animation;
        else {
            let h = `hotToastEnterAnimation${e.position.includes("top") ? "Negative" : "Positive"} ${y}ms cubic-bezier(0.21, 1.02, 0.73, 1) forwards`;
            i.animation = h;
        } this.toastBarBaseStylesSignal.set(i); }
        get toast() { return this._toast; }
        get toastsAfter() { return this._toastsAfter; }
        set toastsAfter(e) { this._toastsAfter = e; }
        get toastBarBaseHeight() { return this.toastBarBase.nativeElement.offsetHeight; }
        get scale() { return this.defaultConfig.stacking !== "vertical" && !this.isShowingAllToasts ? this.toastsAfter * -I + 1 : 1; }
        get translateY() { return this.offset * (this.top ? 1 : -1) + "px"; }
        get exitAnimationDelay() { return this.toast.duration + "ms"; }
        get top() { return this.toast.position.includes("top"); }
        get containerPositionStyle() { let e = this.top ? { top: 0 } : { bottom: 0 }, o = "translateY(var(--hot-toast-translate-y)) scale(var(--hot-toast-scale))", i = this.toast.position.includes("left") ? { left: 0 } : this.toast.position.includes("right") ? { right: 0 } : { left: 0, right: 0, justifyContent: "center" }; return l(l({ transform: o }, e), i); }
        get isIconString() { return typeof this.toast.icon == "string"; }
        get groupChildrenToastRefs() { return this.toastRef.groupRefs.filter(e => !!e); }
        set groupChildrenToastRefs(e) { this.toastRef.groupRefs = e; }
        get groupChildrenToasts() { return this.groupChildrenToastRefs.map(e => e.getToast()); }
        get groupHeight() { return this.visibleToasts.map(e => e.height).reduce((e, o) => e + o, 0); }
        get isExpanded() { return this.toastRef.groupExpanded; }
        ngOnChanges(e) { e.toast && !e.toast.firstChange && e.toast.currentValue?.message && requestAnimationFrame(() => { this.height.emit(this.toastBarBase.nativeElement.offsetHeight); }); }
        ngOnInit() { G(this.toast.message) && (this.context = { $implicit: this.toastRef }), R(this.toast.message) && (this.toastComponentInjector = v.create({ providers: [{ provide: T, useValue: this.toastRef }], parent: this.toast.injector || this.injector })); let e = this.toastBarBase.nativeElement; this.ngZone.runOutsideAngular(() => { this.unlisteners.push(this.renderer.listen(e, "animationstart", o => { this.isExitAnimation(o) && this.ngZone.run(() => { this.renderer.setStyle(e, "pointer-events", "none"), this.renderer.setStyle(e.parentElement, "pointer-events", "none"), this.beforeClosed.emit(); }); }), this.renderer.listen(e, "animationend", o => { this.isEnterAnimation(o) && this.ngZone.run(() => { if (this.toast.autoClose) {
            let i = `hotToastExitAnimation${this.top ? "Negative" : "Positive"} ${C}ms forwards cubic-bezier(0.06, 0.71, 0.55, 1) var(--hot-toast-exit-animation-delay) var(--hot-toast-exit-animation-state)`;
            this.toastBarBaseStylesSignal.set(g(l({}, this.toast.style), { animation: i }));
        } }), this.isExitAnimation(o) && this.ngZone.run(() => this.afterClosed.emit({ dismissedByAction: this.isManualClose, id: this.toast.id })); })); }); }
        ngAfterViewInit() { let e = this.toastBarBase.nativeElement; requestAnimationFrame(() => { this.height.emit(e.offsetHeight); }), this.setToastAttributes(); }
        softClose() { let e = `hotToastExitSoftAnimation${this.top ? "Negative" : "Positive"} ${C}ms forwards cubic-bezier(0.06, 0.71, 0.55, 1)`, o = this.toastBarBase.nativeElement; b(this.renderer, o, e), this.softClosed = !0; }
        softOpen() { let e = `hotToastEnterSoftAnimation${top ? "Negative" : "Positive"} ${y}ms cubic-bezier(0.21, 1.02, 0.73, 1) forwards`, o = this.toastBarBase.nativeElement; b(this.renderer, o, e), this.softClosed = !1; }
        close() { this.isManualClose = !0, this.cdr.markForCheck(); let e = `hotToastExitAnimation${this.top ? "Negative" : "Positive"} ${C}ms forwards cubic-bezier(0.06, 0.71, 0.55, 1)`; this.toastBarBaseStylesSignal.set(g(l({}, this.toast.style), { animation: e })); }
        handleMouseEnter() { this.showAllToasts.emit(!0); }
        handleMouseLeave() { this.showAllToasts.emit(!1); }
        ngOnDestroy() { for (this.close(); this.unlisteners.length;)
            this.unlisteners.pop()(); }
        isExitAnimation(e) { return e.animationName.includes("hotToastExitAnimation"); }
        isEnterAnimation(e) { return e.animationName.includes("hotToastEnterAnimation"); }
        setToastAttributes() { let e = this.toast.attributes; for (let [o, i] of Object.entries(e))
            this.renderer.setAttribute(this.toastBarBase.nativeElement, o, i); }
        get visibleToasts() { return this.groupChildrenToasts.filter(e => e.visible); }
    };
    s.\u0275fac = function (o) { return new (o || s); }, s.\u0275cmp = t.\u0275\u0275defineComponent({ type: s, selectors: [["hot-toast-group-item"]], viewQuery: function (o, i) { if (o & 1 && t.\u0275\u0275viewQuery(j, 7), o & 2) {
            let r;
            t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (i.toastBarBase = r.first);
        } }, inputs: { toast: "toast", offset: "offset", defaultConfig: "defaultConfig", toastRef: "toastRef", toastsAfter: "toastsAfter", isShowingAllToasts: "isShowingAllToasts" }, outputs: { height: "height", beforeClosed: "beforeClosed", afterClosed: "afterClosed", showAllToasts: "showAllToasts", toggleGroup: "toggleGroup" }, features: [t.\u0275\u0275NgOnChangesFeature], decls: 21, vars: 25, consts: [["hotToastBarBase", ""], [1, "hot-toast-bar-base-container"], [1, "hot-toast-bar-base-wrapper", 3, "mouseenter", "mouseleave"], [1, "hot-toast-bar-base"], ["aria-hidden", "true", 1, "hot-toast-icon"], [1, "hot-toast-message"], [4, "dynamicView", "dynamicViewContext", "dynamicViewInjector"], [3, "iconTheme"], [4, "dynamicView"], [3, "theme", "type"], ["type", "button", "aria-label", "Close", 1, "hot-toast-close-btn", 3, "click"]], template: function (o, i) {
            if (o & 1) {
                let r = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementStart(0, "div", 1), t.\u0275\u0275text(1, `
  `), t.\u0275\u0275elementStart(2, "div", 2), t.\u0275\u0275listener("mouseenter", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.handleMouseEnter()); })("mouseleave", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.handleMouseLeave()); }), t.\u0275\u0275text(3, `
    `), t.\u0275\u0275elementStart(4, "div", 3, 0), t.\u0275\u0275text(6, `
      `), t.\u0275\u0275elementStart(7, "div", 4), t.\u0275\u0275text(8, `
        `), t.\u0275\u0275conditionalCreate(9, ct, 3, 1)(10, dt, 3, 2), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(11, `
      `), t.\u0275\u0275elementStart(12, "div", 5), t.\u0275\u0275text(13, `
        `), t.\u0275\u0275template(14, ut, 1, 0, "ng-container", 6), t.\u0275\u0275text(15, `
      `), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(16, `
      `), t.\u0275\u0275conditionalCreate(17, ft, 3, 2), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(18, `
  `), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(19, `
`), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(20, `
`);
            }
            o & 2 && (t.\u0275\u0275styleMap(i.containerPositionStyle), t.\u0275\u0275classMap("hot-toast-theme-" + i.toast.theme), t.\u0275\u0275styleProp("--hot-toast-scale", i.scale)("--hot-toast-translate-y", i.translateY), t.\u0275\u0275advance(4), t.\u0275\u0275styleMap(i.toastBarBaseStylesSignal()), t.\u0275\u0275classMap(i.toast.className), t.\u0275\u0275styleProp("--hot-toast-animation-state", i.isManualClose ? "running" : "paused")("--hot-toast-exit-animation-state", i.isShowingAllToasts ? "paused" : "running")("--hot-toast-exit-animation-delay", i.exitAnimationDelay), t.\u0275\u0275attribute("aria-live", i.toast.ariaLive)("role", i.toast.role), t.\u0275\u0275advance(5), t.\u0275\u0275conditional(i.toast.icon !== void 0 ? 9 : 10), t.\u0275\u0275advance(5), t.\u0275\u0275property("dynamicView", i.toast.message)("dynamicViewContext", i.context)("dynamicViewInjector", i.toastComponentInjector), t.\u0275\u0275advance(3), t.\u0275\u0275conditional(i.toast.dismissible ? 17 : -1));
        }, dependencies: [z, L, S], encapsulation: 2, changeDetection: 0 });
    let n = s;
    return n;
})(), O = (() => {
    let s = class s {
        constructor() { this.offset = 0, this._toastsAfter = 0, this.isShowingAllToasts = !1, this.height = new m, this.beforeClosed = new m, this.afterClosed = new m, this.showAllToasts = new m, this.toggleGroup = new m, this.isManualClose = !1, this.isExpanded = !1, this.toastBarBaseStylesSignal = $({}), this.unlisteners = [], this.softClosed = !1, this.groupRefs = [], this.injector = u(v), this.renderer = u(P), this.ngZone = u(N), this.cdr = u(E); }
        set toast(e) { this._toast = e; let o = this.toastBarBaseStylesSignal(), i = l({}, e.style); if (o.animation?.includes("hotToastExitAnimation"))
            i.animation = o.animation;
        else {
            let h = `hotToastEnterAnimation${e.position.includes("top") ? "Negative" : "Positive"} ${y}ms cubic-bezier(0.21, 1.02, 0.73, 1) forwards`;
            i.animation = h;
        } this.toastBarBaseStylesSignal.set(i); }
        get toast() { return this._toast; }
        get toastsAfter() { return this._toastsAfter; }
        set toastsAfter(e) { this._toastsAfter = e, this.defaultConfig?.visibleToasts > 0 && (this.toast.autoClose || (e >= this.defaultConfig?.visibleToasts ? this.softClose() : this.softClosed && this.softOpen())); }
        get toastBarBaseHeight() { return this.toastBarBase.nativeElement.offsetHeight; }
        get scale() { return this.defaultConfig.stacking !== "vertical" && !this.isShowingAllToasts ? this.toastsAfter * -I + 1 : 1; }
        get translateY() { return this.offset * (this.top ? 1 : -1) + "px"; }
        get exitAnimationDelay() { return this.toast.duration + "ms"; }
        get top() { return this.toast.position.includes("top"); }
        get containerPositionStyle() { let e = this.top ? { top: 0 } : { bottom: 0 }, o = "translateY(var(--hot-toast-translate-y)) scale(var(--hot-toast-scale))", i = this.toast.position.includes("left") ? { left: 0 } : this.toast.position.includes("right") ? { right: 0 } : { left: 0, right: 0, justifyContent: "center" }; return l(l({ transform: o }, e), i); }
        get isIconString() { return typeof this.toast.icon == "string"; }
        get groupChildrenToastRefs() { return this.groupRefs.filter(e => !!e); }
        set groupChildrenToastRefs(e) { this.groupRefs = e, this.toastRef.groupRefs = e; }
        get groupChildrenToasts() { return this.groupChildrenToastRefs.map(e => e.getToast()); }
        get groupHeight() { return this.visibleToasts.slice(-this.defaultConfig.visibleToasts).map(e => e.height).reduce((e, o) => e + o, 0); }
        get visibleToasts() { return this.groupChildrenToasts.filter(e => e.visible); }
        ngDoCheck() { this.toastRef.groupRefs.length !== this.groupRefs.length && (this.groupRefs = this.toastRef.groupRefs.slice(), this.cdr.markForCheck(), this.emiHeightWithGroup(this.isExpanded)), this.toastRef.groupExpanded !== this.isExpanded && (this.isExpanded = this.toastRef.groupExpanded, this.cdr.markForCheck(), this.emiHeightWithGroup(this.isExpanded)); }
        ngOnChanges(e) { e.toast && !e.toast.firstChange && e.toast.currentValue?.message && this.emiHeightWithGroup(this.isExpanded); }
        ngOnInit() { G(this.toast.message) && (this.context = { $implicit: this.toastRef }), R(this.toast.message) && (this.toastComponentInjector = v.create({ providers: [{ provide: T, useValue: this.toastRef }], parent: this.toast.injector || this.injector })); let e = this.toastBarBase.nativeElement; this.ngZone.runOutsideAngular(() => { this.unlisteners.push(this.renderer.listen(e, "animationstart", o => { this.isExitAnimation(o) && this.ngZone.run(() => { this.renderer.setStyle(e, "pointer-events", "none"), this.renderer.setStyle(e.parentElement, "pointer-events", "none"), this.beforeClosed.emit(); }); }), this.renderer.listen(e, "animationend", o => { this.isEnterAnimation(o) && this.ngZone.run(() => { if (this.toast.autoClose) {
            let i = `hotToastExitAnimation${this.top ? "Negative" : "Positive"} ${C}ms forwards cubic-bezier(0.06, 0.71, 0.55, 1) var(--hot-toast-exit-animation-delay) var(--hot-toast-exit-animation-state)`;
            this.toastBarBaseStylesSignal.set(g(l({}, this.toast.style), { animation: i }));
        } }), this.isExitAnimation(o) && this.ngZone.run(() => this.afterClosed.emit({ dismissedByAction: this.isManualClose, id: this.toast.id })); })); }); }
        ngAfterViewInit() { let e = this.toastBarBase.nativeElement; requestAnimationFrame(() => { this.height.emit(e.offsetHeight); }), this.setToastAttributes(); }
        softClose() { let e = `hotToastExitSoftAnimation${this.top ? "Negative" : "Positive"} ${C}ms forwards cubic-bezier(0.06, 0.71, 0.55, 1)`, o = this.toastBarBase.nativeElement; b(this.renderer, o, e), this.softClosed = !0, this.isExpanded && this.toggleToastGroup(); }
        softOpen() { let e = `hotToastEnterSoftAnimation${top ? "Negative" : "Positive"} ${y}ms cubic-bezier(0.21, 1.02, 0.73, 1) forwards`, o = this.toastBarBase.nativeElement; b(this.renderer, o, e), this.softClosed = !1; }
        close() { this.isManualClose = !0, this.cdr.markForCheck(); let e = `hotToastExitAnimation${this.top ? "Negative" : "Positive"} ${C}ms forwards cubic-bezier(0.06, 0.71, 0.55, 1)`; this.toastBarBaseStylesSignal.set(g(l({}, this.toast.style), { animation: e })); }
        handleMouseEnter() { this.showAllToasts.emit(!0); }
        handleMouseLeave() { this.showAllToasts.emit(!1); }
        ngOnDestroy() { for (this.close(); this.unlisteners.length;)
            this.unlisteners.pop()(); }
        isExitAnimation(e) { return e.animationName.includes("hotToastExitAnimation"); }
        isEnterAnimation(e) { return e.animationName.includes("hotToastEnterAnimation"); }
        setToastAttributes() { let e = this.toast.attributes; for (let [o, i] of Object.entries(e))
            this.renderer.setAttribute(this.toastBarBase.nativeElement, o, i); }
        calculateOffset(e) { let o = this.visibleToasts, i = o.findIndex(h => h.id === e); return i !== -1 ? o.slice(...this.defaultConfig.reverseOrder ? [i + 1] : [0, i]).reduce((h, c, d) => this.defaultConfig.visibleToasts !== 0 && d < o.length - this.defaultConfig.visibleToasts ? 0 : h + (c.height || 0), 0) : 0; }
        updateHeight(e, o) { o.height = e, this.cdr.markForCheck(); }
        beforeClosedGroupItem(e) { e.visible = !1, this.cdr.markForCheck(), this.visibleToasts.length === 0 && this.isExpanded ? this.toggleToastGroup() : this.emiHeightWithGroup(this.isExpanded); }
        afterClosedGroupItem(e) { this.groupChildrenToasts.findIndex(i => i.id === e.id) > -1 && (this.groupChildrenToastRefs = this.groupChildrenToastRefs.filter(i => i.getToast().id !== e.id), this.cdr.markForCheck()); }
        toggleToastGroup() { let e = this.isExpanded ? "collapse" : "expand"; this.toggleGroup.emit({ byAction: !0, event: e, id: this.toast.id }), this.emiHeightWithGroup(e === "expand"); }
        emiHeightWithGroup(e) { requestAnimationFrame(e ? () => { this.height.emit(this.toastBarBase.nativeElement.offsetHeight + this.groupHeight); } : () => { this.height.emit(this.toastBarBase.nativeElement.offsetHeight); }); }
    };
    s.\u0275fac = function (o) { return new (o || s); }, s.\u0275cmp = t.\u0275\u0275defineComponent({ type: s, selectors: [["hot-toast"]], viewQuery: function (o, i) { if (o & 1 && t.\u0275\u0275viewQuery(j, 7), o & 2) {
            let r;
            t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (i.toastBarBase = r.first);
        } }, inputs: { toast: "toast", offset: "offset", defaultConfig: "defaultConfig", toastRef: "toastRef", toastsAfter: "toastsAfter", isShowingAllToasts: "isShowingAllToasts" }, outputs: { height: "height", beforeClosed: "beforeClosed", afterClosed: "afterClosed", showAllToasts: "showAllToasts", toggleGroup: "toggleGroup" }, features: [t.\u0275\u0275NgOnChangesFeature], decls: 23, vars: 29, consts: [["hotToastBarBase", ""], [1, "hot-toast-bar-base-container"], [1, "hot-toast-bar-base-wrapper", 3, "mouseenter", "mouseleave"], [1, "hot-toast-bar-base"], ["aria-hidden", "true", 1, "hot-toast-icon"], [1, "hot-toast-message"], [4, "dynamicView", "dynamicViewContext", "dynamicViewInjector"], [3, "iconTheme", "icon"], [4, "dynamicView"], [3, "theme", "type"], ["type", "button", 1, "hot-toast-group-btn", 3, "click"], ["type", "button", "aria-label", "Close", 1, "hot-toast-close-btn", 3, "click"], ["role", "list", 1, "hot-toast-bar-base-group"], [3, "height", "beforeClosed", "afterClosed", "toast", "offset", "toastRef", "toastsAfter", "defaultConfig", "isShowingAllToasts"]], template: function (o, i) {
            if (o & 1) {
                let r = t.\u0275\u0275getCurrentView();
                t.\u0275\u0275elementStart(0, "div", 1), t.\u0275\u0275text(1, `
  `), t.\u0275\u0275elementStart(2, "div", 2), t.\u0275\u0275listener("mouseenter", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.handleMouseEnter()); })("mouseleave", function () { return t.\u0275\u0275restoreView(r), t.\u0275\u0275resetView(i.handleMouseLeave()); }), t.\u0275\u0275text(3, `
    `), t.\u0275\u0275elementStart(4, "div", 3, 0), t.\u0275\u0275text(6, `
      `), t.\u0275\u0275elementStart(7, "div", 4), t.\u0275\u0275text(8, `
        `), t.\u0275\u0275conditionalCreate(9, _t, 3, 1)(10, Tt, 3, 2), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(11, `

      `), t.\u0275\u0275elementStart(12, "div", 5), t.\u0275\u0275text(13, `
        `), t.\u0275\u0275template(14, xt, 1, 0, "ng-container", 6), t.\u0275\u0275text(15, `
      `), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(16, `

      `), t.\u0275\u0275conditionalCreate(17, vt, 3, 5), t.\u0275\u0275conditionalCreate(18, yt, 3, 2), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(19, `

    `), t.\u0275\u0275conditionalCreate(20, wt, 6, 4), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(21, `
`), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(22, `
`);
            }
            o & 2 && (t.\u0275\u0275styleMap(i.containerPositionStyle), t.\u0275\u0275classMap("hot-toast-theme-" + i.toast.theme), t.\u0275\u0275styleProp("--hot-toast-scale", i.scale)("--hot-toast-translate-y", i.translateY), t.\u0275\u0275advance(2), t.\u0275\u0275classProp("expanded", i.isExpanded), t.\u0275\u0275advance(2), t.\u0275\u0275styleMap(i.toastBarBaseStylesSignal()), t.\u0275\u0275classMap(i.toast.className), t.\u0275\u0275styleProp("--hot-toast-animation-state", i.isManualClose ? "running" : "paused")("--hot-toast-exit-animation-state", i.isShowingAllToasts ? "paused" : "running")("--hot-toast-exit-animation-delay", i.exitAnimationDelay), t.\u0275\u0275attribute("aria-live", i.toast.ariaLive)("role", i.toast.role), t.\u0275\u0275advance(5), t.\u0275\u0275conditional(i.toast.icon !== void 0 ? 9 : 10), t.\u0275\u0275advance(5), t.\u0275\u0275property("dynamicView", i.toast.message)("dynamicViewContext", i.context)("dynamicViewInjector", i.toastComponentInjector), t.\u0275\u0275advance(3), t.\u0275\u0275conditional(i.toast.group != null && i.toast.group.expandAndCollapsible && (i.toast.group != null && i.toast.group.children) && i.visibleToasts.length > 0 ? 17 : -1), t.\u0275\u0275advance(), t.\u0275\u0275conditional(i.toast.dismissible ? 18 : -1), t.\u0275\u0275advance(2), t.\u0275\u0275conditional(i.toast.visible ? 20 : -1));
        }, dependencies: [S, L, z, Mt], encapsulation: 2, changeDetection: 0 });
    let n = s;
    return n;
})(), D = (() => {
    let s = class s {
        constructor() { this.toasts = [], this.toastRefs = [], this.isShowingAllToasts = !1, this._onClosed = new _, this._onGroupToggle = new _, this._onGroupRefAttached = new _, this.onClosed$ = this._onClosed.asObservable(), this.onGroupToggle$ = this._onGroupToggle.asObservable(), this.onGroupRefAttached$ = this._onGroupRefAttached.asObservable(), this.cdr = u(E), this.toastService = u(Pt); }
        trackById(e, o) { return o.id; }
        getVisibleToasts(e) { return this.unGroupedToasts.filter(o => o.visible && o.position === e); }
        get unGroupedToasts() { return this.toasts.filter(e => e.group?.parent === void 0 || e.group?.children === void 0 || e.group?.children.length === 0); }
        calculateOffset(e, o) { let i = this.getVisibleToasts(o), r = i.findIndex(c => c.id === e); return r !== -1 ? i.slice(...this.defaultConfig.reverseOrder ? [r + 1] : [0, r]).reduce((c, d, f) => { let p = i.length - 1 - f; return this.defaultConfig.visibleToasts !== 0 && f < i.length - this.defaultConfig.visibleToasts ? 0 : c + (this.defaultConfig.stacking === "vertical" || this.isShowingAllToasts ? d.height || 0 : p * I + Rt) + Gt; }, 0) : 0; }
        updateHeight(e, o) { o.height = e, this.cdr.markForCheck(); }
        addToast(e, o) { this.toastRefs.push(e); let i = e.getToast(); return this.toasts.push(e.getToast()), this.defaultConfig.visibleToasts !== 0 && this.unGroupedToasts.length > this.defaultConfig.visibleToasts && this.toasts.slice(0, this.toasts.length - this.defaultConfig.visibleToasts).forEach(h => { h.autoClose && this.closeToast(h.id); }), this.cdr.markForCheck(), this.attachGroupRefs(i, e, o), { dispose: () => { this.closeToast(i.id); }, updateMessage: r => { i.message = r, this.updateToasts(i), this.cdr.markForCheck(); }, updateToast: r => { i = l(l({}, i), r), this.updateToasts(i, r), this.cdr.markForCheck(); }, afterClosed: this.getAfterClosed(i), afterGroupToggled: this.getAfterGroupToggled(i), afterGroupRefsAttached: this.getAfterGroupRefsAttached(i).pipe(K(r => r.groupRefs)) }; }
        attachGroupRefs(e, o, i) { return V(this, null, function* () { let r = []; if (e.group) {
            if (e.group.children) {
                r = yield this.createGroupRefs(e, o);
                let h = this.toastRefs.findIndex(c => c.getToast().id === e.id);
                h > -1 && (this.toastRefs[h].groupRefs = r, this.cdr.markForCheck(), this._onGroupRefAttached.next({ groupRefs: r, id: e.id }));
            }
            else if (e.group.parent && !i) {
                let c = e.group.parent.getToast(), d = this.toastRefs.findIndex(p => p.getToast().id === c.id), f = this.toasts.findIndex(p => p.id === c.id);
                if (d > -1 && f > -1) {
                    this.toastRefs[d].groupRefs.push(o);
                    let p = this.toasts[d].group ?? {}, k = this.toasts[d].group?.children ?? [];
                    k.push({ options: g(l({}, e), { type: e.type, message: e.message }) }), p.children = k, this.toasts[d].group = l({}, p), this.cdr.markForCheck(), this._onGroupRefAttached.next({ groupRefs: r, id: c.id });
                }
            }
        } }); }
        createGroupRefs(e, o) { return new Promise(r => { let c = e.group.children.map(d => new Promise(f => { d.options.group = { parent: o }, setTimeout(() => { try {
            let p = this.toastService.show(d.options.message, d.options, !0);
            f(p);
        }
        catch (p) {
            console.error("Error creating toast", p), f(null);
        } }); })); Promise.all(c).then(d => r(d)); }); }
        closeToast(e) { if (e) {
            let o = this.hotToastComponentList.find(i => i.toast.id === e);
            o && (o.close(), this.cdr.markForCheck());
        }
        else
            this.hotToastComponentList.forEach(o => o.close()), this.cdr.markForCheck(); }
        beforeClosed(e) { e.visible = !1, this.cdr.markForCheck(); }
        afterClosed(e) { this.toasts.findIndex(i => i.id === e.id) > -1 && (this._onClosed.next(e), this.toasts = this.toasts.filter(i => i.id !== e.id), this.toastRefs = this.toastRefs.filter(i => i.getToast().id !== e.id), this.cdr.markForCheck()); }
        toggleGroup(e) { let o = this.toastRefs.findIndex(i => i.getToast().id === e.id); o > -1 && (this._onGroupToggle.next(e), this.toastRefs[o].groupExpanded = e.event === "expand", this.cdr.markForCheck()); }
        hasToast(e) { return this.toasts.findIndex(o => o.id === e) > -1; }
        showAllToasts(e) { this.isShowingAllToasts = e; }
        getAfterClosed(e) { return this.onClosed$.pipe(w(o => o.id === e.id)); }
        getAfterGroupToggled(e) { return this.onGroupToggle$.pipe(w(o => o.id === e.id)); }
        getAfterGroupRefsAttached(e) { return this.onGroupRefAttached$.pipe(w(o => o.id === e.id)); }
        updateToasts(e, o) { this.toasts = this.toasts.map(i => l(l({}, i), i.id === e.id && l(l({}, e), o))), this.cdr.markForCheck(); }
    };
    s.\u0275fac = function (o) { return new (o || s); }, s.\u0275cmp = t.\u0275\u0275defineComponent({ type: s, selectors: [["hot-toast-container"]], viewQuery: function (o, i) { if (o & 1 && t.\u0275\u0275viewQuery(O, 5), o & 2) {
            let r;
            t.\u0275\u0275queryRefresh(r = t.\u0275\u0275loadQuery()) && (i.hotToastComponentList = r);
        } }, inputs: { defaultConfig: "defaultConfig" }, decls: 11, vars: 0, consts: [[1, "hot-toast-container-overlay"], [1, "hot-toast-container-wrapper"], [3, "showAllToasts", "height", "beforeClosed", "afterClosed", "toggleGroup", "toast", "offset", "toastRef", "toastsAfter", "defaultConfig", "isShowingAllToasts"]], template: function (o, i) {
            o & 1 && (t.\u0275\u0275elementStart(0, "div", 0), t.\u0275\u0275text(1, `
  `), t.\u0275\u0275elementStart(2, "div", 1), t.\u0275\u0275text(3, `
    `), t.\u0275\u0275elementStart(4, "div"), t.\u0275\u0275text(5, `
      `), t.\u0275\u0275repeaterCreate(6, St, 3, 1, null, null, i.trackById, !0), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(8, `
  `), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(9, `
`), t.\u0275\u0275elementEnd(), t.\u0275\u0275text(10, `
`)), o & 2 && (t.\u0275\u0275advance(6), t.\u0275\u0275repeater(i.toasts));
        }, dependencies: [O], styles: [".hot-toast-container-overlay[_ngcontent-%COMP%]{position:fixed;z-index:var(--hot-toast-container-overlay-z-index, 9999);inset:0;pointer-events:none}.hot-toast-container-wrapper[_ngcontent-%COMP%]{position:relative;height:100%}"], changeDetection: 0 });
    let n = s;
    return n;
})(), x = class {
    constructor() { this.reverseOrder = !1, this.visibleToasts = 5, this.stacking = "vertical", this.ariaLive = "polite", this.role = "status", this.position = "top-center", this.autoClose = !0, this.theme = "toast", this.attributes = {}, this.info = { content: "" }, this.success = { content: "" }, this.error = { content: "" }, this.loading = { content: "" }, this.blank = { content: "" }, this.warning = { content: "" }; }
}, Ot = n => typeof n == "function", Dt = n => typeof n == "function" && !!n.\u0275cmp, Ft = (n, s) => Dt(n) ? n : Ot(n) ? n(s) : n, A = class {
    constructor() { this.storage = "local", this.key = "ngxpert/hototast-${id}", this.count = 1, this.enabled = !1; }
}, $t = new Z("HOT_TOAST_CONTAINER_TOKEN"), Pt = (() => { let s = class s {
    constructor() { this._isInitialized = !1, this._defaultGlobalConfig = new x, this._defaultPersistConfig = new A, this._viewService = u(W), this._platformId = u(q), this._globalConfig = u(x, { optional: !0 }), this._container = u($t, { optional: !0 }), this._globalConfig && (this._defaultGlobalConfig = l(l({}, this._defaultGlobalConfig), this._globalConfig)); }
    get defaultConfig() { return this._defaultGlobalConfig; }
    set defaultConfig(e) { this._defaultGlobalConfig = l(l({}, this._defaultGlobalConfig), e), this._componentRef && this._componentRef.setInput("defaultConfig", this._defaultGlobalConfig); }
    show(e, o, i) { return this.createToast({ message: e || this._defaultGlobalConfig.blank.content, type: o?.type ?? "blank", options: l(l({}, this._defaultGlobalConfig), o), skipAttachToParent: i }); }
    error(e, o) { return this.createToast({ message: e || this._defaultGlobalConfig.error.content, type: "error", options: l(l(l({}, this._defaultGlobalConfig), this._defaultGlobalConfig?.error), o) }); }
    success(e, o) { return this.createToast({ message: e || this._defaultGlobalConfig.success.content, type: "success", options: l(l(l({}, this._defaultGlobalConfig), this._defaultGlobalConfig?.success), o) }); }
    loading(e, o) { return this.createToast({ message: e || this._defaultGlobalConfig.loading.content, type: "loading", options: l(l(l({}, this._defaultGlobalConfig), this._defaultGlobalConfig?.loading), o) }); }
    warning(e, o) { return this.createToast({ message: e || this._defaultGlobalConfig.warning.content, type: "warning", options: l(l(l({}, this._defaultGlobalConfig), this._defaultGlobalConfig?.warning), o) }); }
    info(e, o) { return this.createToast({ message: e || this._defaultGlobalConfig.info.content, type: "info", options: l(l(l({}, this._defaultGlobalConfig), this._defaultGlobalConfig?.info), o) }); }
    observe(e) { return o => { let i, r = 0, h = e.loading ?? this._defaultGlobalConfig.loading?.content, c = e.success ?? this._defaultGlobalConfig.success?.content, d = e.error ?? this._defaultGlobalConfig.error?.content; return Y(() => (h && (i = this.createLoadingToast(h), r = Date.now()), o.pipe(X(l(l({}, c && { next: f => { i = this.createOrUpdateToast(e, f, i, "success", r === 0 ? r : Date.now() - r); } }), d && { error: f => { i = this.createOrUpdateToast(e, f, i, "error", r === 0 ? r : Date.now() - r); } }))))); }; }
    close(e) { this._componentRef && this._componentRef.ref.instance.closeToast(e); }
    init() { if (!Q(this._platformId))
        if (this._container) {
            let e = document.querySelector(this._container);
            e || (console.warn(`No container element found for selector: ${this._container}, using document.body instead as toast container.`), e = document.body), this._componentRef = this._viewService.createComponent(D).setInput("defaultConfig", this._defaultGlobalConfig).appendTo(e);
        }
        else
            this._componentRef = this._viewService.createComponent(D).setInput("defaultConfig", this._defaultGlobalConfig).appendTo(document.body); }
    createOrUpdateToast(e, o, i, r, h) { try {
        let c = null, d = {};
        if ({ content: c, options: d } = this.getContentAndOptions(r, e[r] || (this._defaultGlobalConfig[r] ? this._defaultGlobalConfig[r].content : "")), c = Ft(c, o), i) {
            d.data && (i.data = d.data), i.updateMessage(c);
            let f = l(l({ type: r, duration: h + M[r] }, d), d.duration && { duration: h + d.duration });
            i.updateToast(f);
        }
        else
            this.createToast({ message: c, type: r, options: d });
        return i;
    }
    catch (c) {
        console.error(c);
    } }
    createToast({ message: e, type: o, options: i, observableMessages: r, skipAttachToParent: h }) { this._isInitialized || (this._isInitialized = !0, this.init()); let c = i?.id ?? `toast-${s.nextId++}`; if (!this.isDuplicate(c) && (!i.persist?.enabled || i.persist?.enabled && this.handleStorageValue(c, i))) {
        let d = l({ ariaLive: i?.ariaLive ?? "polite", createdAt: Date.now(), duration: i?.duration ?? M[o], id: c, message: e, role: i?.role ?? "status", type: o, visible: !0, observableMessages: r ?? void 0 }, i);
        return new T(d).appendTo(this._componentRef.ref.instance, h);
    } }
    isDuplicate(e) { return this._componentRef.ref.instance.hasToast(e); }
    handleStorageValue(e, o) { let i = 1, r = l(l({}, this._defaultPersistConfig), o.persist), h = r.storage === "local" ? localStorage : sessionStorage, c = r.key.replace(/\${id}/g, e), d = h.getItem(c); return d ? (d = parseInt(d, 10), d > 0 ? i = d - 1 : i = d) : i = r.count, h.setItem(c, i.toString()), i; }
    getContentAndOptions(e, o) { var h; let i, r = l(l({}, this._defaultGlobalConfig), this._defaultGlobalConfig[e]); if (typeof o == "string" || G(o) || R(o))
        i = o;
    else {
        let c;
        h = o, { content: i } = h, c = B(h, ["content"]), r = l(l({}, r), c);
    } return { content: i, options: r }; }
    createLoadingToast(e) { let o = null, i = {}; return { content: o, options: i } = this.getContentAndOptions("loading", e), this.loading(o, i); }
}; s.nextId = 0, s.\u0275fac = function (o) { return new (o || s); }, s.\u0275prov = t.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" }); let n = s; return n; })();
function Jt(n) { return U([{ provide: x, useValue: n }]); }
var F = class {
    constructor(s, a) { this.message = s, this.service = a, this.options = {}, this.groupChildren = []; }
    setOptions(s) { return this.options = l(l({}, this.options), s), this; }
    addChild(s) { return this.groupChildren.push(s), this; }
    get afterGroupRefsAttached() { return this.toastRef?.afterGroupRefsAttached; }
    addChildrenToOptions() { if (this.groupChildren.length > 0) {
        let s = this.groupChildren.map(a => ({ options: l({ message: a.message }, a.options) }));
        this.options.group = g(l({}, this.options.group), { children: s });
    } }
    create(s = "show") { return this.addChildrenToOptions(), this.toastRef = this.service[s](this.message, g(l({}, this.options), { visible: !1 })), this.toastRef; }
    createToast(s) { return this.addChildrenToOptions(), this.toastRef = this.service[s](this.message, this.options), this.toastRef; }
    show() { return this.createToast("show"); }
    success() { return this.createToast("success"); }
    error() { return this.createToast("error"); }
    warning() { return this.createToast("warning"); }
    info() { return this.createToast("info"); }
    loading() { return this.createToast("loading"); }
};
export { $t as HOT_TOAST_CONTAINER_TOKEN, F as HotToastBuilder, T as HotToastRef, Pt as HotToastService, x as ToastConfig, A as ToastPersistConfig, Jt as provideHotToastConfig, Ft as resolveValueOrFunction };
