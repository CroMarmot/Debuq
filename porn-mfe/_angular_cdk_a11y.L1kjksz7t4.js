import { a as M, c as le, d as ue, e as T, f as fe } from "@nf-internal/chunk-SBIOMHD6";
import { a as z, b as Z, c as q, d as Q, e as X, f as J, g as ee, h as te, i as b, j as E, k as ie, l as se, m as re, n as ne, o as ae, p as oe, q as ce, r as de, s as he, t as _e } from "@nf-internal/chunk-XPOW5OUU";
import "@nf-internal/chunk-XSLIODQX";
import "@nf-internal/chunk-H3UJLGDZ";
import "@nf-internal/chunk-QXX5WOHX";
import { a as A } from "@nf-internal/chunk-LYMFQPXM";
import { a as L, b as K } from "@nf-internal/chunk-VP6KNDS4";
import { a as me } from "@nf-internal/chunk-G25BAKAM";
import "@nf-internal/chunk-OIQ2QPHM";
import { a as v } from "@nf-internal/chunk-7N7HFQKY";
import { a as y } from "@nf-internal/chunk-DQM2BKPX";
import "@nf-internal/chunk-FSAIB72R";
import "@nf-internal/chunk-JYXTBF5A";
import { a as R } from "@nf-internal/chunk-SVIUGILY";
import { c as B, m as U, n as j, o as Y, p as G, q as $, r as V, s as W, t as H } from "@nf-internal/chunk-N26NRATF";
import "@nf-internal/chunk-JKOY2XUY";
import * as _ from "@angular/core";
import { inject as o, DOCUMENT as S, APP_ID as pe, InjectionToken as ye, NgZone as ve, Injector as Ae } from "@angular/core";
import { signal as D, QueryList as C, isSignal as O, effect as ge } from "@angular/core";
import { Subscription as Ie, Subject as x } from "rxjs";
var c = class {
    _items;
    _activeItemIndex = D(-1);
    _activeItem = D(null);
    _wrap = !1;
    _typeaheadSubscription = Ie.EMPTY;
    _itemChangesSubscription;
    _vertical = !0;
    _horizontal;
    _allowedModifierKeys = [];
    _homeAndEnd = !1;
    _pageUpAndDown = { enabled: !1, delta: 10 };
    _effectRef;
    _typeahead;
    _skipPredicateFn = i => i.disabled;
    constructor(i, t) { this._items = i, i instanceof C ? this._itemChangesSubscription = i.changes.subscribe(e => this._itemsChanged(e.toArray())) : O(i) && (this._effectRef = ge(() => this._itemsChanged(i()), { injector: t })); }
    tabOut = new x;
    change = new x;
    skipPredicate(i) { return this._skipPredicateFn = i, this; }
    withWrap(i = !0) { return this._wrap = i, this; }
    withVerticalOrientation(i = !0) { return this._vertical = i, this; }
    withHorizontalOrientation(i) { return this._horizontal = i, this; }
    withAllowedModifierKeys(i) { return this._allowedModifierKeys = i, this; }
    withTypeAhead(i = 200) { this._typeaheadSubscription.unsubscribe(); let t = this._getItemsArray(); return this._typeahead = new M(t, { debounceInterval: typeof i == "number" ? i : void 0, skipPredicate: e => this._skipPredicateFn(e) }), this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(e => { this.setActiveItem(e); }), this; }
    cancelTypeahead() { return this._typeahead?.reset(), this; }
    withHomeAndEnd(i = !0) { return this._homeAndEnd = i, this; }
    withPageUpDown(i = !0, t = 10) { return this._pageUpAndDown = { enabled: i, delta: t }, this; }
    setActiveItem(i) { let t = this._activeItem(); this.updateActiveItem(i), this._activeItem() !== t && this.change.next(this._activeItemIndex()); }
    onKeydown(i) { let t = i.keyCode, s = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(n => !i[n] || this._allowedModifierKeys.indexOf(n) > -1); switch (t) {
        case 9:
            this.tabOut.next();
            return;
        case 40: if (this._vertical && s) {
            this.setNextItemActive();
            break;
        }
        else
            return;
        case 38: if (this._vertical && s) {
            this.setPreviousItemActive();
            break;
        }
        else
            return;
        case 39: if (this._horizontal && s) {
            this._horizontal === "rtl" ? this.setPreviousItemActive() : this.setNextItemActive();
            break;
        }
        else
            return;
        case 37: if (this._horizontal && s) {
            this._horizontal === "rtl" ? this.setNextItemActive() : this.setPreviousItemActive();
            break;
        }
        else
            return;
        case 36: if (this._homeAndEnd && s) {
            this.setFirstItemActive();
            break;
        }
        else
            return;
        case 35: if (this._homeAndEnd && s) {
            this.setLastItemActive();
            break;
        }
        else
            return;
        case 33: if (this._pageUpAndDown.enabled && s) {
            let n = this._activeItemIndex() - this._pageUpAndDown.delta;
            this._setActiveItemByIndex(n > 0 ? n : 0, 1);
            break;
        }
        else
            return;
        case 34: if (this._pageUpAndDown.enabled && s) {
            let n = this._activeItemIndex() + this._pageUpAndDown.delta, a = this._getItemsArray().length;
            this._setActiveItemByIndex(n < a ? n : a - 1, -1);
            break;
        }
        else
            return;
        default:
            (s || R(i, "shiftKey")) && this._typeahead?.handleKey(i);
            return;
    } this._typeahead?.reset(), i.preventDefault(); }
    get activeItemIndex() { return this._activeItemIndex(); }
    get activeItem() { return this._activeItem(); }
    isTyping() { return !!this._typeahead && this._typeahead.isTyping(); }
    setFirstItemActive() { this._setActiveItemByIndex(0, 1); }
    setLastItemActive() { this._setActiveItemByIndex(this._getItemsArray().length - 1, -1); }
    setNextItemActive() { this._activeItemIndex() < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1); }
    setPreviousItemActive() { this._activeItemIndex() < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1); }
    updateActiveItem(i) { let t = this._getItemsArray(), e = typeof i == "number" ? i : t.indexOf(i), s = t[e]; this._activeItem.set(s ?? null), this._activeItemIndex.set(e), this._typeahead?.setCurrentSelectedItemIndex(e); }
    destroy() { this._typeaheadSubscription.unsubscribe(), this._itemChangesSubscription?.unsubscribe(), this._effectRef?.destroy(), this._typeahead?.destroy(), this.tabOut.complete(), this.change.complete(); }
    _setActiveItemByDelta(i) { this._wrap ? this._setActiveInWrapMode(i) : this._setActiveInDefaultMode(i); }
    _setActiveInWrapMode(i) { let t = this._getItemsArray(); for (let e = 1; e <= t.length; e++) {
        let s = (this._activeItemIndex() + i * e + t.length) % t.length, n = t[s];
        if (!this._skipPredicateFn(n)) {
            this.setActiveItem(s);
            return;
        }
    } }
    _setActiveInDefaultMode(i) { this._setActiveItemByIndex(this._activeItemIndex() + i, i); }
    _setActiveItemByIndex(i, t) { let e = this._getItemsArray(); if (e[i]) {
        for (; this._skipPredicateFn(e[i]);)
            if (i += t, !e[i])
                return;
        this.setActiveItem(i);
    } }
    _getItemsArray() { return O(this._items) ? this._items() : this._items instanceof C ? this._items.toArray() : this._items; }
    _itemsChanged(i) { this._typeahead?.setItems(i); let t = this._activeItem(); if (t) {
        let e = i.indexOf(t);
        e > -1 && e !== this._activeItemIndex() && (this._activeItemIndex.set(e), this._typeahead?.setCurrentSelectedItemIndex(e));
    } }
};
var m = class extends c {
    setActiveItem(i) { this.activeItem && this.activeItem.setInactiveStyles(), super.setActiveItem(i), this.activeItem && this.activeItem.setActiveStyles(); }
};
var l = class extends c {
    _origin = "program";
    setFocusOrigin(i) { return this._origin = i, this; }
    setActiveItem(i) { super.setActiveItem(i), this.activeItem && this.activeItem.focus(this._origin); }
};
import { Subject as be } from "rxjs";
import "rxjs/operators";
import "@angular/common";
var w = " ";
function Ee(r, i, t) { let e = h(r, i); t = t.trim(), !e.some(s => s.trim() === t) && (e.push(t), r.setAttribute(i, e.join(w))); }
function Me(r, i, t) { let e = h(r, i); t = t.trim(); let s = e.filter(n => n !== t); s.length ? r.setAttribute(i, s.join(w)) : r.removeAttribute(i); }
function h(r, i) { return r.getAttribute(i)?.match(/\S+/g) ?? []; }
var He = "cdk-describedby-message-container", k = "cdk-describedby-message", d = "cdk-describedby-host", f = 0, ze = (() => { class r {
    _platform = o(y);
    _document = o(S);
    _messageRegistry = new Map;
    _messagesContainer = null;
    _id = `${f++}`;
    constructor() { o(v).load(A), this._id = o(pe) + "-" + f++; }
    describe(t, e, s) { if (!this._canBeDescribed(t, e))
        return; let n = u(e, s); typeof e != "string" ? (N(e, this._id), this._messageRegistry.set(n, { messageElement: e, referenceCount: 0 })) : this._messageRegistry.has(n) || this._createMessageElement(e, s), this._isElementDescribedByMessage(t, n) || this._addMessageReference(t, n); }
    removeDescription(t, e, s) { if (!e || !this._isElementNode(t))
        return; let n = u(e, s); if (this._isElementDescribedByMessage(t, n) && this._removeMessageReference(t, n), typeof e == "string") {
        let a = this._messageRegistry.get(n);
        a && a.referenceCount === 0 && this._deleteMessageElement(n);
    } this._messagesContainer?.childNodes.length === 0 && (this._messagesContainer.remove(), this._messagesContainer = null); }
    ngOnDestroy() { let t = this._document.querySelectorAll(`[${d}="${this._id}"]`); for (let e = 0; e < t.length; e++)
        this._removeCdkDescribedByReferenceIds(t[e]), t[e].removeAttribute(d); this._messagesContainer?.remove(), this._messagesContainer = null, this._messageRegistry.clear(); }
    _createMessageElement(t, e) { let s = this._document.createElement("div"); N(s, this._id), s.textContent = t, e && s.setAttribute("role", e), this._createMessagesContainer(), this._messagesContainer.appendChild(s), this._messageRegistry.set(u(t, e), { messageElement: s, referenceCount: 0 }); }
    _deleteMessageElement(t) { this._messageRegistry.get(t)?.messageElement?.remove(), this._messageRegistry.delete(t); }
    _createMessagesContainer() { if (this._messagesContainer)
        return; let t = "cdk-describedby-message-container", e = this._document.querySelectorAll(`.${t}[platform="server"]`); for (let n = 0; n < e.length; n++)
        e[n].remove(); let s = this._document.createElement("div"); s.style.visibility = "hidden", s.classList.add(t), s.classList.add("cdk-visually-hidden"), this._platform.isBrowser || s.setAttribute("platform", "server"), this._document.body.appendChild(s), this._messagesContainer = s; }
    _removeCdkDescribedByReferenceIds(t) { let e = h(t, "aria-describedby").filter(s => s.indexOf(k) != 0); t.setAttribute("aria-describedby", e.join(" ")); }
    _addMessageReference(t, e) { let s = this._messageRegistry.get(e); Ee(t, "aria-describedby", s.messageElement.id), t.setAttribute(d, this._id), s.referenceCount++; }
    _removeMessageReference(t, e) { let s = this._messageRegistry.get(e); s.referenceCount--, Me(t, "aria-describedby", s.messageElement.id), t.removeAttribute(d); }
    _isElementDescribedByMessage(t, e) { let s = h(t, "aria-describedby"), n = this._messageRegistry.get(e), a = n && n.messageElement.id; return !!a && s.indexOf(a) != -1; }
    _canBeDescribed(t, e) { if (!this._isElementNode(t))
        return !1; if (e && typeof e == "object")
        return !0; let s = e == null ? "" : `${e}`.trim(), n = t.getAttribute("aria-label"); return s ? !n || n.trim() !== s : !1; }
    _isElementNode(t) { return t.nodeType === this._document.ELEMENT_NODE; }
    static \u0275fac = function (e) { return new (e || r); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })();
function u(r, i) { return typeof r == "string" ? `${i || ""}/${r}` : r; }
function N(r, i) { r.id || (r.id = `${k}-${i}-${f++}`); }
var g = class {
    _isNoopTreeKeyManager = !0;
    change = new be;
    destroy() { this.change.complete(); }
    onKeydown() { }
    getActiveItemIndex() { return null; }
    getActiveItem() { return null; }
    focusItem() { }
};
function Re() { return () => new g; }
var Ze = { provide: T, useFactory: Re }, I = class extends E {
    _focusTrapManager;
    _inertStrategy;
    get enabled() { return this._enabled; }
    set enabled(i) { this._enabled = i, this._enabled ? this._focusTrapManager.register(this) : this._focusTrapManager.deregister(this); }
    constructor(i, t, e, s, n, a, F, P) { super(i, t, e, s, F.defer, P), this._focusTrapManager = n, this._inertStrategy = a, this._focusTrapManager.register(this); }
    destroy() { this._focusTrapManager.deregister(this), super.destroy(); }
    _enable() { this._inertStrategy.preventFocus(this), this.toggleAnchors(!0); }
    _disable() { this._inertStrategy.allowFocus(this), this.toggleAnchors(!1); }
}, p = class {
    _listener = null;
    preventFocus(i) { this._listener && i._document.removeEventListener("focus", this._listener, !0), this._listener = t => this._trapFocus(i, t), i._ngZone.runOutsideAngular(() => { i._document.addEventListener("focus", this._listener, !0); }); }
    allowFocus(i) { this._listener && (i._document.removeEventListener("focus", this._listener, !0), this._listener = null); }
    _trapFocus(i, t) { let e = t.target, s = i._element; e && !s.contains(e) && !e.closest?.("div.cdk-overlay-pane") && setTimeout(() => { i.enabled && !s.contains(i._document.activeElement) && i.focusFirstTabbableElement(); }); }
}, Te = new ye("FOCUS_TRAP_INERT_STRATEGY"), De = (() => { class r {
    _focusTrapStack = [];
    register(t) { this._focusTrapStack = this._focusTrapStack.filter(s => s !== t); let e = this._focusTrapStack; e.length && e[e.length - 1]._disable(), e.push(t), t._enable(); }
    deregister(t) { t._disable(); let e = this._focusTrapStack, s = e.indexOf(t); s !== -1 && (e.splice(s, 1), e.length && e[e.length - 1]._enable()); }
    static \u0275fac = function (e) { return new (e || r); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })(), qe = (() => { class r {
    _checker = o(b);
    _ngZone = o(ve);
    _focusTrapManager = o(De);
    _document = o(S);
    _inertStrategy;
    _injector = o(Ae);
    constructor() { let t = o(Te, { optional: !0 }); this._inertStrategy = t || new p; }
    create(t, e = { defer: !1 }) { let s; return typeof e == "boolean" ? s = { defer: e } : s = e, new I(t, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, s, this._injector); }
    static \u0275fac = function (e) { return new (e || r); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })();
export { _e as A11yModule, m as ActiveDescendantKeyManager, ze as AriaDescriber, d as CDK_DESCRIBEDBY_HOST_ATTRIBUTE, k as CDK_DESCRIBEDBY_ID_PREFIX, ce as CdkAriaLive, ee as CdkMonitorFocus, se as CdkTrapFocus, I as ConfigurableFocusTrap, qe as ConfigurableFocusTrapFactory, p as EventListenerFocusTrapInertStrategy, X as FOCUS_MONITOR_DEFAULT_OPTIONS, Te as FOCUS_TRAP_INERT_STRATEGY, l as FocusKeyManager, J as FocusMonitor, Q as FocusMonitorDetectionMode, E as FocusTrap, ie as FocusTrapFactory, de as HighContrastMode, he as HighContrastModeDetector, Z as INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS, z as INPUT_MODALITY_DETECTOR_OPTIONS, q as InputModalityDetector, b as InteractivityChecker, te as IsFocusableConfig, ae as LIVE_ANNOUNCER_DEFAULT_OPTIONS, re as LIVE_ANNOUNCER_ELEMENT_TOKEN, ne as LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, c as ListKeyManager, oe as LiveAnnouncer, He as MESSAGES_CONTAINER_ID, Re as NOOP_TREE_KEY_MANAGER_FACTORY, Ze as NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER, g as NoopTreeKeyManager, T as TREE_KEY_MANAGER, ue as TREE_KEY_MANAGER_FACTORY, fe as TREE_KEY_MANAGER_FACTORY_PROVIDER, le as TreeKeyManager, me as _IdGenerator, Ee as addAriaReferencedId, h as getAriaReferenceIds, L as isFakeMousedownFromScreenReader, K as isFakeTouchstartFromScreenReader, Me as removeAriaReferencedId };
