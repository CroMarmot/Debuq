import { a as d } from "@nf-internal/chunk-LDQ7RTNT";
import { a as c } from "@nf-internal/chunk-4MZRILT7";
import { e as s } from "@nf-internal/chunk-5KSFOI5Q";
import * as t from "@angular/core";
import { InjectionToken as m, inject as a, ElementRef as u, NgZone as b, Renderer2 as p, booleanAttribute as r, numberAttribute as f } from "@angular/core";
import { FocusMonitor as h } from "@angular/cdk/a11y";
import { _CdkPrivateStyleLoader as v } from "@angular/cdk/private";
var _ = ["mat-icon-button", ""], g = ["*"], y = new m("MAT_BUTTON_CONFIG");
function l(o) { return o == null ? void 0 : f(o); }
var I = (() => { class o {
    _elementRef = a(u);
    _ngZone = a(b);
    _animationsDisabled = s();
    _config = a(y, { optional: !0 });
    _focusMonitor = a(h);
    _cleanupClick;
    _renderer = a(p);
    _rippleLoader = a(d);
    _isAnchor;
    _isFab = !1;
    color;
    get disableRipple() { return this._disableRipple; }
    set disableRipple(e) { this._disableRipple = e, this._updateRippleDisabled(); }
    _disableRipple = !1;
    get disabled() { return this._disabled; }
    set disabled(e) { this._disabled = e, this._updateRippleDisabled(); }
    _disabled = !1;
    ariaDisabled;
    disabledInteractive;
    tabIndex;
    set _tabindex(e) { this.tabIndex = e; }
    constructor() { a(v).load(c); let e = this._elementRef.nativeElement; this._isAnchor = e.tagName === "A", this.disabledInteractive = this._config?.disabledInteractive ?? !1, this.color = this._config?.color ?? null, this._rippleLoader?.configureRipple(e, { className: "mat-mdc-button-ripple" }); }
    ngAfterViewInit() { this._focusMonitor.monitor(this._elementRef, !0), this._isAnchor && this._setupAsAnchor(); }
    ngOnDestroy() { this._cleanupClick?.(), this._focusMonitor.stopMonitoring(this._elementRef), this._rippleLoader?.destroyRipple(this._elementRef.nativeElement); }
    focus(e = "program", n) { e ? this._focusMonitor.focusVia(this._elementRef.nativeElement, e, n) : this._elementRef.nativeElement.focus(n); }
    _getAriaDisabled() { return this.ariaDisabled != null ? this.ariaDisabled : this._isAnchor ? this.disabled || null : this.disabled && this.disabledInteractive ? !0 : null; }
    _getDisabledAttribute() { return this.disabledInteractive || !this.disabled ? null : !0; }
    _updateRippleDisabled() { this._rippleLoader?.setDisabled(this._elementRef.nativeElement, this.disableRipple || this.disabled); }
    _getTabIndex() { return this._isAnchor ? this.disabled && !this.disabledInteractive ? -1 : this.tabIndex : this.tabIndex; }
    _setupAsAnchor() { this._cleanupClick = this._ngZone.runOutsideAngular(() => this._renderer.listen(this._elementRef.nativeElement, "click", e => { this.disabled && (e.preventDefault(), e.stopImmediatePropagation()); })); }
    static \u0275fac = function (n) { return new (n || o); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: o, hostAttrs: [1, "mat-mdc-button-base"], hostVars: 13, hostBindings: function (n, i) { n & 2 && (t.\u0275\u0275attribute("disabled", i._getDisabledAttribute())("aria-disabled", i._getAriaDisabled())("tabindex", i._getTabIndex()), t.\u0275\u0275classMap(i.color ? "mat-" + i.color : ""), t.\u0275\u0275classProp("mat-mdc-button-disabled", i.disabled)("mat-mdc-button-disabled-interactive", i.disabledInteractive)("mat-unthemed", !i.color)("_mat-animation-noopable", i._animationsDisabled)); }, inputs: { color: "color", disableRipple: [2, "disableRipple", "disableRipple", r], disabled: [2, "disabled", "disabled", r], ariaDisabled: [2, "aria-disabled", "ariaDisabled", r], disabledInteractive: [2, "disabledInteractive", "disabledInteractive", r], tabIndex: [2, "tabIndex", "tabIndex", l], _tabindex: [2, "tabindex", "_tabindex", l] } });
} return o; })(), x = (() => {
    class o extends I {
        constructor() { super(), this._rippleLoader.configureRipple(this._elementRef.nativeElement, { centered: !0 }); }
        static \u0275fac = function (n) { return new (n || o); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: o, selectors: [["button", "mat-icon-button", ""], ["a", "mat-icon-button", ""], ["button", "matIconButton", ""], ["a", "matIconButton", ""]], hostAttrs: [1, "mdc-icon-button", "mat-mdc-icon-button"], exportAs: ["matButton", "matAnchor"], features: [t.\u0275\u0275InheritDefinitionFeature], attrs: _, ngContentSelectors: g, decls: 4, vars: 0, consts: [[1, "mat-mdc-button-persistent-ripple", "mdc-icon-button__ripple"], [1, "mat-focus-indicator"], [1, "mat-mdc-button-touch-target"]], template: function (n, i) { n & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275domElement(0, "span", 0), t.\u0275\u0275projection(1), t.\u0275\u0275domElement(2, "span", 1)(3, "span", 2)); }, styles: [`.mat-mdc-icon-button{-webkit-user-select:none;user-select:none;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;text-decoration:none;cursor:pointer;z-index:0;overflow:visible;border-radius:var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));flex-shrink:0;text-align:center;width:var(--mat-icon-button-state-layer-size, 40px);height:var(--mat-icon-button-state-layer-size, 40px);padding:calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);font-size:var(--mat-icon-button-icon-size, 24px);color:var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label,.mat-mdc-icon-button .mat-icon{z-index:1;position:relative}.mat-mdc-icon-button .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit}.mat-mdc-icon-button:focus>.mat-focus-indicator::before{content:"";border-radius:inherit}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-icon-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-icon-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-icon-button-touch-target-size, 48px);display:var(--mat-icon-button-touch-target-display, block);left:50%;width:var(--mat-icon-button-touch-target-size, 48px);transform:translate(-50%, -50%)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button img,.mat-mdc-icon-button svg{width:var(--mat-icon-button-icon-size, 24px);height:var(--mat-icon-button-icon-size, 24px);vertical-align:baseline}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%))}.mat-mdc-icon-button[hidden]{display:none}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}
`, `@media(forced-colors: active){.mat-mdc-button:not(.mdc-button--outlined),.mat-mdc-unelevated-button:not(.mdc-button--outlined),.mat-mdc-raised-button:not(.mdc-button--outlined),.mat-mdc-outlined-button:not(.mdc-button--outlined),.mat-mdc-button-base.mat-tonal-button,.mat-mdc-icon-button.mat-mdc-icon-button,.mat-mdc-outlined-button .mdc-button__ripple{outline:solid 1px}}
`], encapsulation: 2, changeDetection: 0 });
    }
    return o;
})(), L = x;
export { y as a, I as b, x as c, L as d };
