import "@nf-internal/chunk-JKOY2XUY";
import * as t from "@angular/core";
import "@angular/core";
import * as r from "@angular/common/http";
var a = (() => { class i {
    http;
    prefix;
    suffix;
    constructor(e, n = "/assets/i18n/", s = ".json") { this.http = e, this.prefix = n, this.suffix = s; }
    getTranslation(e) { return this.http.get(`${this.prefix}${e}${this.suffix}`); }
    static \u0275fac = function (n) { return new (n || i)(t.\u0275\u0275inject(r.HttpClient), t.\u0275\u0275inject(String), t.\u0275\u0275inject(String)); };
    static \u0275prov = t.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac });
} return i; })();
export { a as TranslateHttpLoader };
