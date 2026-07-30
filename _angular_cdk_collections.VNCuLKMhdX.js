import { a as f } from "@nf-internal/chunk-G27PZFYT";
import { a as u, b as m } from "@nf-internal/chunk-I2BRT34V";
import { a, b as l, c as p, d as c } from "@nf-internal/chunk-HXIDEVWT";
import { a as n, b as s } from "@nf-internal/chunk-73GXGGDE";
import "@nf-internal/chunk-JKOY2XUY";
import * as o from "@angular/core";
import "@angular/core";
var S = (() => { class e {
    _listeners = [];
    notify(t, r) { for (let i of this._listeners)
        i(t, r); }
    listen(t) { return this._listeners.push(t), () => { this._listeners = this._listeners.filter(r => t !== r); }; }
    ngOnDestroy() { this._listeners = []; }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
import "@angular/core";
import "rxjs";
export { a as ArrayDataSource, n as DataSource, u as SelectionModel, S as UniqueSelectionDispatcher, f as _DisposeViewRepeaterStrategy, c as _RecycleViewRepeaterStrategy, p as _VIEW_REPEATER_STRATEGY, l as _ViewRepeaterOperation, m as getMultipleValuesInSingleSelectionError, s as isDataSource };
