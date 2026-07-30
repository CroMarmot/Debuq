import { c as b, d as v } from "@nf-internal/chunk-3SCFRELA";
import { a as C } from "@nf-internal/chunk-NGVFN3SM";
import { a as D, e as _ } from "@nf-internal/chunk-HPKIA4F4";
import "@nf-internal/chunk-ARUHDGKS";
import { c as O } from "@nf-internal/chunk-IYZ7XEE5";
import { m as A } from "@nf-internal/chunk-NTUBA7QY";
import "@nf-internal/chunk-LDQ7RTNT";
import "@nf-internal/chunk-SD4DQCMX";
import "@nf-internal/chunk-4MZRILT7";
import { e as M } from "@nf-internal/chunk-5KSFOI5Q";
import "@nf-internal/chunk-JKOY2XUY";
import * as i from "@angular/core";
import { InjectionToken as x, inject as o, Injector as R, ViewContainerRef as S, signal as f, viewChild as L, viewChildren as F, input as d, output as y, booleanAttribute as c, computed as p, effect as g, ElementRef as V, afterNextRender as P, untracked as k, model as q, Renderer2 as K, HostAttributeToken as j } from "@angular/core";
import { Directionality as B } from "@angular/cdk/bidi";
import { createRepositionScrollStrategy as H, createFlexibleConnectedPositionStrategy as z, createOverlayRef as G } from "@angular/cdk/overlay";
import { TemplatePortal as U } from "@angular/cdk/portal";
import { _getEventTarget as Y, _getFocusedElementPierceShadowDom as Q } from "@angular/cdk/platform";
import { TAB as W, ESCAPE as w, hasModifierKey as E, ENTER as X, DOWN_ARROW as Z, UP_ARROW as $ } from "@angular/cdk/keycodes";
import { ActiveDescendantKeyManager as J, _IdGenerator as ee } from "@angular/cdk/a11y";
import { Validators as te, NG_VALUE_ACCESSOR as ie, NG_VALIDATORS as ae } from "@angular/forms";
import { CdkScrollableModule as ne } from "@angular/cdk/scrolling";
import "rxjs";
import "@angular/cdk/layout";
import "@angular/cdk/coercion";
import "@angular/cdk/private";
import "@angular/common";
import "rxjs/operators";
import "@angular/cdk/observers/private";
var re = ["panelTemplate"], se = (n, l) => l.value;
function oe(n, l) { if (n & 1) {
    let e = i.\u0275\u0275getCurrentView();
    i.\u0275\u0275elementStart(0, "mat-option", 3), i.\u0275\u0275listener("onSelectionChange", function (a) { i.\u0275\u0275restoreView(e); let r = i.\u0275\u0275nextContext(2); return i.\u0275\u0275resetView(r._selectValue(a.source)); }), i.\u0275\u0275text(1), i.\u0275\u0275elementEnd();
} if (n & 2) {
    let e = l.$implicit;
    i.\u0275\u0275property("value", e.value), i.\u0275\u0275advance(), i.\u0275\u0275textInterpolate(e.label);
} }
function le(n, l) { if (n & 1) {
    let e = i.\u0275\u0275getCurrentView();
    i.\u0275\u0275elementStart(0, "div", 1), i.\u0275\u0275listener("animationend", function (a) { i.\u0275\u0275restoreView(e); let r = i.\u0275\u0275nextContext(); return i.\u0275\u0275resetView(r._handleAnimationEnd(a)); }), i.\u0275\u0275repeaterCreate(1, oe, 2, 2, "mat-option", 2, se), i.\u0275\u0275elementEnd();
} if (n & 2) {
    let e = i.\u0275\u0275nextContext();
    i.\u0275\u0275classProp("mat-timepicker-panel-animations-enabled", !e._animationsDisabled)("mat-timepicker-panel-exit", !e.isOpen()), i.\u0275\u0275property("id", e.panelId), i.\u0275\u0275attribute("aria-label", e.ariaLabel() || null)("aria-labelledby", e._getAriaLabelledby()), i.\u0275\u0275advance(), i.\u0275\u0275repeater(e._timeOptions);
} }
var de = [[["", "matTimepickerToggleIcon", ""]]], pe = ["[matTimepickerToggleIcon]"];
function ce(n, l) { n & 1 && (i.\u0275\u0275namespaceSVG(), i.\u0275\u0275elementStart(0, "svg", 1), i.\u0275\u0275element(1, "path", 2), i.\u0275\u0275elementEnd()); }
var me = /^(\d*\.?\d+)\s*(h|hour|hours|m|min|minute|minutes|s|second|seconds)?$/i, N = new x("MAT_TIMEPICKER_CONFIG");
function I(n) { let l; if (n === null)
    return null; if (typeof n == "number")
    l = n;
else {
    if (n.trim().length === 0)
        return null;
    let e = n.match(me), t = e ? parseFloat(e[1]) : null, a = e?.[2]?.toLowerCase() || null;
    if (!e || t === null || isNaN(t))
        return null;
    a === "h" || a === "hour" || a === "hours" ? l = t * 3600 : a === "m" || a === "min" || a === "minute" || a === "minutes" ? l = t * 60 : l = t;
} return l; }
function ue(n, l, e, t, a) { let r = [], s = n.compareTime(e, t) < 1 ? e : t; for (; n.sameDate(s, e) && n.compareTime(s, t) < 1 && n.isValid(s);)
    r.push({ value: s, label: n.format(s, l.display.timeOptionLabel) }), s = n.addSeconds(s, a); return r; }
var he = new x("MAT_TIMEPICKER_SCROLL_STRATEGY", { providedIn: "root", factory: () => { let n = o(R); return () => H(n); } }), _e = (() => {
    class n {
        _dir = o(B, { optional: !0 });
        _viewContainerRef = o(S);
        _injector = o(R);
        _defaultConfig = o(N, { optional: !0 });
        _dateAdapter = o(b, { optional: !0 });
        _dateFormats = o(v, { optional: !0 });
        _scrollStrategyFactory = o(he);
        _animationsDisabled = M();
        _isOpen = f(!1);
        _activeDescendant = f(null);
        _input = f(null);
        _overlayRef = null;
        _portal = null;
        _optionsCacheKey = null;
        _localeChanges;
        _onOpenRender = null;
        _panelTemplate = L.required("panelTemplate");
        _timeOptions = [];
        _options = F(_);
        _keyManager = new J(this._options, this._injector).withHomeAndEnd(!0).withPageUpDown(!0).withVerticalOrientation(!0);
        interval = d(I(this._defaultConfig?.interval || null), { transform: I });
        options = d(null);
        isOpen = this._isOpen.asReadonly();
        selected = y();
        opened = y();
        closed = y();
        activeDescendant = this._activeDescendant.asReadonly();
        panelId = o(ee).getId("mat-timepicker-panel-");
        disableRipple = d(this._defaultConfig?.disableRipple ?? !1, { transform: c });
        ariaLabel = d(null, { alias: "aria-label" });
        ariaLabelledby = d(null, { alias: "aria-labelledby" });
        disabled = p(() => !!this._input()?.disabled());
        constructor() { o(V).nativeElement.setAttribute("mat-timepicker-panel-id", this.panelId), this._handleLocaleChanges(), this._handleInputStateChanges(), this._keyManager.change.subscribe(() => this._activeDescendant.set(this._keyManager.activeItem?.id || null)); }
        open() { let e = this._input(); if (!e || (e.focus(), this._isOpen()))
            return; this._isOpen.set(!0), this._generateOptions(); let t = this._getOverlayRef(); t.updateSize({ width: e.getOverlayOrigin().nativeElement.offsetWidth }), this._portal ??= new U(this._panelTemplate(), this._viewContainerRef), t.hasAttached() || t.attach(this._portal), this._onOpenRender?.destroy(), this._onOpenRender = P(() => { let a = this._options(); this._syncSelectedState(e.value(), a, a[0]), this._onOpenRender = null; }, { injector: this._injector }), this.opened.emit(); }
        close() { this._isOpen() && (this._isOpen.set(!1), this.closed.emit(), this._animationsDisabled && this._overlayRef?.detach()); }
        registerInput(e) { let t = this._input(); this._input.set(e); }
        ngOnDestroy() { this._keyManager.destroy(), this._localeChanges.unsubscribe(), this._onOpenRender?.destroy(), this._overlayRef?.dispose(); }
        _selectValue(e) { this.close(), this._keyManager.setActiveItem(e), this._options().forEach(t => { t !== e && t.deselect(!1); }), this._input()?._timepickerValueAssigned(e.value), this.selected.emit({ value: e.value, source: this }), this._input()?.focus(); }
        _getAriaLabelledby() { return this.ariaLabel() ? null : this.ariaLabelledby() || this._input()?._getLabelId() || null; }
        _handleAnimationEnd(e) { e.animationName === "_mat-timepicker-exit" && this._overlayRef?.detach(); }
        _getOverlayRef() { if (this._overlayRef)
            return this._overlayRef; let e = z(this._injector, this._input().getOverlayOrigin()).withFlexibleDimensions(!1).withPush(!1).withTransformOriginOn(".mat-timepicker-panel").withPositions([{ originX: "start", originY: "bottom", overlayX: "start", overlayY: "top" }, { originX: "start", originY: "top", overlayX: "start", overlayY: "bottom", panelClass: "mat-timepicker-above" }]); return this._overlayRef = G(this._injector, { positionStrategy: e, scrollStrategy: this._scrollStrategyFactory(), direction: this._dir || "ltr", hasBackdrop: !1, disableAnimations: this._animationsDisabled }), this._overlayRef.detachments().subscribe(() => this.close()), this._overlayRef.keydownEvents().subscribe(t => this._handleKeydown(t)), this._overlayRef.outsidePointerEvents().subscribe(t => { let a = Y(t), r = this._input()?.getOverlayOrigin().nativeElement; a && r && a !== r && !r.contains(a) && this.close(); }), this._overlayRef; }
        _generateOptions() { let e = this.interval() ?? 1800, t = this.options(); if (t !== null)
            this._timeOptions = t;
        else {
            let a = this._input(), r = this._dateAdapter, s = this._dateFormats.display.timeInput, m = a?.min() || r.setTime(r.today(), 0, 0, 0), u = a?.max() || r.setTime(r.today(), 23, 59, 0), h = e + "/" + r.format(m, s) + "/" + r.format(u, s);
            h !== this._optionsCacheKey && (this._optionsCacheKey = h, this._timeOptions = ue(r, this._dateFormats, m, u, e));
        } }
        _syncSelectedState(e, t, a) { let r = !1; for (let s of t)
            e && this._dateAdapter.sameTime(s.value, e) ? (s.select(!1), T(s, "center"), k(() => this._keyManager.setActiveItem(s)), r = !0) : s.deselect(!1); r || (a ? (k(() => this._keyManager.setActiveItem(a)), T(a, "center")) : k(() => this._keyManager.setActiveItem(-1))); }
        _handleKeydown(e) { let t = e.keyCode; if (t === W)
            this.close();
        else if (t === w && !E(e))
            e.preventDefault(), this.close();
        else if (t === X)
            e.preventDefault(), this._keyManager.activeItem ? this._selectValue(this._keyManager.activeItem) : this.close();
        else {
            let a = this._keyManager.activeItem;
            this._keyManager.onKeydown(e);
            let r = this._keyManager.activeItem;
            r && r !== a && T(r, "nearest");
        } }
        _handleLocaleChanges() { this._localeChanges = this._dateAdapter.localeChanges.subscribe(() => { this._optionsCacheKey = null, this.isOpen() && this._generateOptions(); }); }
        _handleInputStateChanges() { g(() => { let e = this._input(), t = this._options(); this._isOpen() && e && this._syncSelectedState(e.value(), t, null); }); }
        static \u0275fac = function (t) { return new (t || n); };
        static \u0275cmp = i.\u0275\u0275defineComponent({ type: n, selectors: [["mat-timepicker"]], viewQuery: function (t, a) { t & 1 && (i.\u0275\u0275viewQuerySignal(a._panelTemplate, re, 5), i.\u0275\u0275viewQuerySignal(a._options, _, 5)), t & 2 && i.\u0275\u0275queryAdvance(2); }, inputs: { interval: [1, "interval"], options: [1, "options"], disableRipple: [1, "disableRipple"], ariaLabel: [1, "aria-label", "ariaLabel"], ariaLabelledby: [1, "aria-labelledby", "ariaLabelledby"] }, outputs: { selected: "selected", opened: "opened", closed: "closed" }, exportAs: ["matTimepicker"], features: [i.\u0275\u0275ProvidersFeature([{ provide: D, useExisting: n }])], decls: 2, vars: 0, consts: [["panelTemplate", ""], ["role", "listbox", 1, "mat-timepicker-panel", 3, "animationend", "id"], [3, "value"], [3, "onSelectionChange", "value"]], template: function (t, a) { t & 1 && i.\u0275\u0275template(0, le, 3, 7, "ng-template", null, 0, i.\u0275\u0275templateRefExtractor); }, dependencies: [_], styles: [`@keyframes _mat-timepicker-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-timepicker-exit{from{opacity:1}to{opacity:0}}mat-timepicker{display:none}.mat-timepicker-panel{width:100%;max-height:256px;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:relative;border-bottom-left-radius:var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small));box-shadow:var(--mat-timepicker-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));background-color:var(--mat-timepicker-container-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){.mat-timepicker-panel{outline:solid 1px}}.mat-timepicker-above .mat-timepicker-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small));border-top-right-radius:var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small))}.mat-timepicker-panel-animations-enabled{animation:_mat-timepicker-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-timepicker-panel-animations-enabled.mat-timepicker-panel-exit{animation:_mat-timepicker-exit 100ms linear}.mat-timepicker-input[readonly]{cursor:pointer}@media(forced-colors: active){.mat-timepicker-toggle-default-icon{color:CanvasText}}
`], encapsulation: 2, changeDetection: 0 });
    }
    return n;
})();
function T(n, l) { n._getHostElement().scrollIntoView({ block: l, inline: l }); }
var ze = (() => { class n {
    _elementRef = o(V);
    _dateAdapter = o(b, { optional: !0 });
    _dateFormats = o(v, { optional: !0 });
    _formField = o(A, { optional: !0 });
    _onChange;
    _onTouched;
    _validatorOnChange;
    _cleanupClick;
    _accessorDisabled = f(!1);
    _localeSubscription;
    _timepickerSubscription;
    _validator;
    _lastValueValid = !0;
    _lastValidDate = null;
    _ariaActiveDescendant = p(() => { let e = this.timepicker(), t = e.isOpen(), a = e.activeDescendant(); return t && a ? a : null; });
    _ariaExpanded = p(() => this.timepicker().isOpen() + "");
    _ariaControls = p(() => { let e = this.timepicker(); return e.isOpen() ? e.panelId : null; });
    value = q(null);
    timepicker = d.required({ alias: "matTimepicker" });
    min = d(null, { alias: "matTimepickerMin", transform: e => this._transformDateInput(e) });
    max = d(null, { alias: "matTimepickerMax", transform: e => this._transformDateInput(e) });
    openOnClick = d(!0, { alias: "matTimepickerOpenOnClick", transform: c });
    disabled = p(() => this.disabledInput() || this._accessorDisabled());
    disabledInput = d(!1, { transform: c, alias: "disabled" });
    constructor() { let e = o(K); this._validator = this._getValidator(), this._respondToValueChanges(), this._respondToMinMaxChanges(), this._registerTimepicker(), this._localeSubscription = this._dateAdapter.localeChanges.subscribe(() => { this._hasFocus() || this._formatValue(this.value()); }), this._cleanupClick = e.listen(this.getOverlayOrigin().nativeElement, "click", this._handleClick); }
    writeValue(e) { let t = this._dateAdapter.deserialize(e); this.value.set(this._dateAdapter.getValidDateOrNull(t)); }
    registerOnChange(e) { this._onChange = e; }
    registerOnTouched(e) { this._onTouched = e; }
    setDisabledState(e) { this._accessorDisabled.set(e); }
    validate(e) { return this._validator(e); }
    registerOnValidatorChange(e) { this._validatorOnChange = e; }
    getOverlayOrigin() { return this._formField?.getConnectedOverlayOrigin() || this._elementRef; }
    focus() { this._elementRef.nativeElement.focus(); }
    ngOnDestroy() { this._cleanupClick(), this._timepickerSubscription?.unsubscribe(), this._localeSubscription.unsubscribe(); }
    _getLabelId() { return this._formField?.getLabelId() || null; }
    _handleClick = () => { !this.disabled() && this.openOnClick() && this.timepicker().open(); };
    _handleInput(e) { let t = e.target.value, a = this.value(), r = this._dateAdapter.parseTime(t, this._dateFormats.parse.timeInput), s = !this._dateAdapter.sameTime(r, a); !r || s || t && !a ? this._assignUserSelection(r, !0) : this._validatorOnChange?.(); }
    _handleBlur() { let e = this.value(); e && this._isValid(e) && this._formatValue(e), this.timepicker().isOpen() || this._onTouched?.(); }
    _handleKeydown(e) { this.timepicker().isOpen() || this.disabled() || (e.keyCode === w && !E(e) && this.value() !== null ? (e.preventDefault(), this.value.set(null), this._formatValue(null)) : (e.keyCode === Z || e.keyCode === $) && (e.preventDefault(), this.timepicker().open())); }
    _timepickerValueAssigned(e) { this._dateAdapter.sameTime(e, this.value()) || (this._assignUserSelection(e, !0), this._formatValue(e)); }
    _respondToValueChanges() { g(() => { let e = this._dateAdapter.deserialize(this.value()), t = this._lastValueValid; this._lastValueValid = this._isValid(e), this._hasFocus() || this._formatValue(e), e && this._lastValueValid && (this._lastValidDate = e), t !== this._lastValueValid && this._validatorOnChange?.(); }); }
    _registerTimepicker() { g(() => { let e = this.timepicker(); e.registerInput(this), e.closed.subscribe(() => this._onTouched?.()); }); }
    _respondToMinMaxChanges() { g(() => { this.min(), this.max(), this._validatorOnChange?.(); }); }
    _assignUserSelection(e, t) { let a; if (e == null || !this._isValid(e))
        a = e;
    else {
        let r = this._dateAdapter, s = r.getValidDateOrNull(this._lastValidDate || this.value()), m = r.getHours(e), u = r.getMinutes(e), h = r.getSeconds(e);
        a = s ? r.setTime(s, m, u, h) : e;
    } t && this._onChange?.(a), this.value.set(a); }
    _formatValue(e) { e = this._dateAdapter.getValidDateOrNull(e), this._elementRef.nativeElement.value = e == null ? "" : this._dateAdapter.format(e, this._dateFormats.display.timeInput); }
    _isValid(e) { return !e || this._dateAdapter.isValid(e); }
    _transformDateInput(e) { let t = typeof e == "string" ? this._dateAdapter.parseTime(e, this._dateFormats.parse.timeInput) : this._dateAdapter.deserialize(e); return t && this._dateAdapter.isValid(t) ? t : null; }
    _hasFocus() { return Q() === this._elementRef.nativeElement; }
    _getValidator() { return te.compose([() => this._lastValueValid ? null : { matTimepickerParse: { text: this._elementRef.nativeElement.value } }, e => { let t = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)), a = this.min(); return !a || !t || this._dateAdapter.compareTime(a, t) <= 0 ? null : { matTimepickerMin: { min: a, actual: t } }; }, e => { let t = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)), a = this.max(); return !a || !t || this._dateAdapter.compareTime(a, t) >= 0 ? null : { matTimepickerMax: { max: a, actual: t } }; }]); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275dir = i.\u0275\u0275defineDirective({ type: n, selectors: [["input", "matTimepicker", ""]], hostAttrs: ["role", "combobox", "type", "text", "aria-haspopup", "listbox", 1, "mat-timepicker-input"], hostVars: 5, hostBindings: function (t, a) { if (t & 1 && i.\u0275\u0275listener("blur", function () { return a._handleBlur(); })("input", function (s) { return a._handleInput(s); })("keydown", function (s) { return a._handleKeydown(s); }), t & 2) {
            let r;
            i.\u0275\u0275domProperty("disabled", a.disabled()), i.\u0275\u0275attribute("aria-activedescendant", a._ariaActiveDescendant())("aria-expanded", a._ariaExpanded())("aria-controls", a._ariaControls())("mat-timepicker-id", (r = a.timepicker()) == null ? null : r.panelId);
        } }, inputs: { value: [1, "value"], timepicker: [1, "matTimepicker", "timepicker"], min: [1, "matTimepickerMin", "min"], max: [1, "matTimepickerMax", "max"], openOnClick: [1, "matTimepickerOpenOnClick", "openOnClick"], disabledInput: [1, "disabled", "disabledInput"] }, outputs: { value: "valueChange" }, exportAs: ["matTimepickerInput"], features: [i.\u0275\u0275ProvidersFeature([{ provide: ie, useExisting: n, multi: !0 }, { provide: ae, useExisting: n, multi: !0 }, { provide: C, useExisting: n }])] });
} return n; })(), fe = (() => { class n {
    _defaultConfig = o(N, { optional: !0 });
    _defaultTabIndex = (() => { let e = o(new j("tabindex"), { optional: !0 }), t = Number(e); return isNaN(t) ? null : t; })();
    _isDisabled = p(() => { let e = this.timepicker(); return this.disabled() || e.disabled(); });
    timepicker = d.required({ alias: "for" });
    ariaLabel = d(void 0, { alias: "aria-label" });
    ariaLabelledby = d(void 0, { alias: "aria-labelledby" });
    _defaultAriaLabel = "Open timepicker options";
    disabled = d(!1, { transform: c, alias: "disabled" });
    tabIndex = d(this._defaultTabIndex);
    disableRipple = d(this._defaultConfig?.disableRipple ?? !1, { transform: c });
    _open(e) { this.timepicker() && !this._isDisabled() && (this.timepicker().open(), e.stopPropagation()); }
    getAriaLabel() { return this.ariaLabelledby() ? null : this.ariaLabel() || this._defaultAriaLabel; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275cmp = i.\u0275\u0275defineComponent({ type: n, selectors: [["mat-timepicker-toggle"]], hostAttrs: [1, "mat-timepicker-toggle"], hostVars: 1, hostBindings: function (t, a) { t & 1 && i.\u0275\u0275listener("click", function (s) { return a._open(s); }), t & 2 && i.\u0275\u0275attribute("tabindex", null); }, inputs: { timepicker: [1, "for", "timepicker"], ariaLabel: [1, "aria-label", "ariaLabel"], ariaLabelledby: [1, "aria-labelledby", "ariaLabelledby"], disabled: [1, "disabled"], tabIndex: [1, "tabIndex"], disableRipple: [1, "disableRipple"] }, exportAs: ["matTimepickerToggle"], ngContentSelectors: pe, decls: 3, vars: 6, consts: [["matIconButton", "", "type", "button", "aria-haspopup", "listbox", 3, "tabIndex", "disabled", "disableRipple"], ["height", "24px", "width", "24px", "viewBox", "0 -960 960 960", "fill", "currentColor", "focusable", "false", "aria-hidden", "true", 1, "mat-timepicker-toggle-default-icon"], ["d", "m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"]], template: function (t, a) { t & 1 && (i.\u0275\u0275projectionDef(de), i.\u0275\u0275elementStart(0, "button", 0), i.\u0275\u0275projection(1, 0, null, ce, 2, 0), i.\u0275\u0275elementEnd()), t & 2 && (i.\u0275\u0275property("tabIndex", a._isDisabled() ? -1 : a.tabIndex())("disabled", a._isDisabled())("disableRipple", a.disableRipple()), i.\u0275\u0275attribute("aria-label", a.getAriaLabel())("aria-labelledby", a.ariaLabelledby())("aria-expanded", a.timepicker().isOpen())); }, dependencies: [O], encapsulation: 2, changeDetection: 0 });
} return n; })(), Ge = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = i.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = i.\u0275\u0275defineInjector({ imports: [_e, fe, ne] });
} return n; })();
export { N as MAT_TIMEPICKER_CONFIG, he as MAT_TIMEPICKER_SCROLL_STRATEGY, _e as MatTimepicker, ze as MatTimepickerInput, Ge as MatTimepickerModule, fe as MatTimepickerToggle };
