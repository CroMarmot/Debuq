"use strict";(self.webpackChunkDebuq=self.webpackChunkDebuq||[]).push([[354],{9354:(A,c,a)=>{a.r(c),a.d(c,{AdminModule:()=>C});var r=a(177),o=a(6661),t=a(4438);const d=()=>({exact:!0});let h=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-admin"]],standalone:!0,features:[t.aNF],decls:10,vars:2,consts:[["routerLink","./","routerLinkActive","active",3,"routerLinkActiveOptions"],["routerLink","./crises","routerLinkActive","active"],["routerLink","./heroes","routerLinkActive","active"]],template:function(n,i){1&n&&(t.j41(0,"h3"),t.EFF(1,"ADMIN"),t.k0s(),t.j41(2,"nav")(3,"a",0),t.EFF(4,"Dashboard"),t.k0s(),t.j41(5,"a",1),t.EFF(6,"Manage Crises"),t.k0s(),t.j41(7,"a",2),t.EFF(8,"Manage Heroes"),t.k0s()(),t.nrm(9,"router-outlet")),2&n&&(t.R7$(3),t.Y8G("routerLinkActiveOptions",t.lJ4(1,d)))},dependencies:[o.Wk,o.wQ,o.n3]})}return e})();var u=a(9928),l=a(5006),m=a(4421);let f=(()=>{class e{constructor(){this.preloadedModules=[]}preload(s,n){return s.data&&s.data.preload?(this.preloadedModules.push(s.path),n()):(0,m.of)(null)}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275prov=t.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function F(e,j){if(1&e&&(t.j41(0,"li"),t.EFF(1),t.k0s()),2&e){const s=j.$implicit;t.R7$(),t.JRh(s)}}let v=(()=>{class e{constructor(s,n){this.route=s,this.sessionId=new u.t(""),this.token=new u.t(""),this.modules=n.preloadedModules}ngOnInit(){this.sessionId=this.route.queryParamMap.pipe((0,l.T)(s=>s.get("session_id")||"None")),this.token=this.route.fragment.pipe((0,l.T)(s=>s||"None"))}static#t=this.\u0275fac=function(n){return new(n||e)(t.rXU(o.nX),t.rXU(f))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-admin-dashboard"]],standalone:!0,features:[t.aNF],decls:12,vars:7,consts:[["id","anchor"],[4,"ngFor","ngForOf"]],template:function(n,i){1&n&&(t.j41(0,"p"),t.EFF(1,"Dashboard"),t.k0s(),t.j41(2,"p"),t.EFF(3),t.nI1(4,"async"),t.k0s(),t.nrm(5,"a",0),t.j41(6,"p"),t.EFF(7),t.nI1(8,"async"),t.k0s(),t.EFF(9," Preloaded Modules\n"),t.j41(10,"ul"),t.DNE(11,F,2,1,"li",1),t.k0s()),2&n&&(t.R7$(3),t.SpI("Session ID: ",t.bMT(4,3,i.sessionId),""),t.R7$(4),t.SpI("Token: ",t.bMT(8,5,i.token),""),t.R7$(4),t.Y8G("ngForOf",i.modules))},dependencies:[r.pM,r.Jj]})}return e})(),M=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-manage-crises"]],standalone:!0,features:[t.aNF],decls:2,vars:0,template:function(n,i){1&n&&(t.j41(0,"p"),t.EFF(1,"Manage your crises here"),t.k0s())}})}return e})(),k=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-manage-hereos"]],standalone:!0,features:[t.aNF],decls:2,vars:0,template:function(n,i){1&n&&(t.j41(0,"p"),t.EFF(1,"Manage your heroes here"),t.k0s())}})}return e})();var p=a(4140);const y=[{path:"",pathMatch:"full",component:h,canActivate:[p.q],children:[{path:"",pathMatch:"full",canActivateChild:[p.q],children:[{path:"crises",component:M},{path:"heroes",component:k},{path:"",component:v}]}]}];let g=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.$C({type:e});static#n=this.\u0275inj=t.G2t({imports:[o.iI.forChild(y),o.iI]})}return e})(),C=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.$C({type:e});static#n=this.\u0275inj=t.G2t({imports:[r.MD,g]})}return e})()}}]);