"use strict";(self.webpackChunkDebuq=self.webpackChunkDebuq||[]).push([[373],{373:(ct,C,g)=>{g.r(C),g.d(C,{XqtdModule:()=>rt});var h=g(177),f=g(6661),B=g(467),k=g(6850),t=g(4438);function D(i,c){if(1&i){const n=t.RV6();t.j41(0,"a",3),t.bIt("click",function(){const e=t.eBV(n).$implicit,r=t.XpG();return t.Njj(r.onClick(e))}),t.EFF(1),t.nI1(2,"titlecase"),t.k0s()}if(2&i){const n=c.$implicit,o=t.XpG();t.Y8G("active",o.activeLink===n.link),t.R7$(),t.SpI(" ",t.bMT(2,2,n.title)," ")}}let q=(()=>{class i{constructor(n,o){this.router=n,this.route=o,this.links=[{title:"\u516c\u8f93",link:"gongshu"}],this.activeLink=""}ngOnInit(){this.activeLink=window.location.href.split("?")[0].split("/").pop()||""}onClick({link:n}){var o=this;return(0,B.A)(function*(){(yield o.router.navigate([n],{relativeTo:o.route}))&&(o.activeLink=n)})()}static#t=this.\u0275fac=function(o){return new(o||i)(t.rXU(f.Ix),t.rXU(f.nX))};static#n=this.\u0275cmp=t.VBU({type:i,selectors:[["app-xqtd-main"]],standalone:!0,features:[t.aNF],decls:5,vars:2,consts:[["tabPanel",""],["mat-tab-nav-bar","",3,"tabPanel"],["mat-tab-link","",3,"active","click",4,"ngFor","ngForOf"],["mat-tab-link","",3,"click","active"]],template:function(o,e){if(1&o&&(t.j41(0,"nav",1),t.DNE(1,D,3,4,"a",2),t.k0s(),t.nrm(2,"mat-tab-nav-panel",null,0)(4,"router-outlet")),2&o){const r=t.sdS(3);t.Y8G("tabPanel",r),t.R7$(),t.Y8G("ngForOf",e.links)}},dependencies:[k.RI,k.Bu,k.hQ,k.Ql,h.pM,f.n3,h.PV]})}return i})();var $=g(9493),v=g(8834),R=g(5416);const m=i=>({highlight:i}),M=i=>({"gs-laser-group-highlight":i});function V(i,c){if(1&i&&(t.qex(0),t.j41(1,"div"),t.EFF(2,"\u884c: "),t.j41(3,"button"),t.EFF(4,"-"),t.k0s(),t.EFF(5),t.j41(6,"button"),t.EFF(7,"+"),t.k0s()(),t.j41(8,"div"),t.EFF(9,"\u5217: "),t.j41(10,"button"),t.EFF(11,"-"),t.k0s(),t.EFF(12),t.j41(13,"button"),t.EFF(14,"+"),t.k0s()(),t.bVm()),2&i){const n=t.XpG();t.R7$(5),t.SpI("",n.row," "),t.R7$(7),t.SpI("",n.col," ")}}function N(i,c){1&i&&(t.qex(0),t.EFF(1,"\u{1f388}"),t.bVm())}function O(i,c){if(1&i&&(t.qex(0),t.j41(1,"span",10),t.EFF(2),t.k0s(),t.bVm()),2&i){const n=t.XpG().$implicit,o=t.XpG(2);t.R7$(),t.Y8G("ngClass",t.eq3(2,m,o.state===o.ConfigState.AddLaser&&o.editI===n.groupid)),t.R7$(),t.JRh(n.groupid)}}function Y(i,c){if(1&i&&(t.qex(0),t.j41(1,"span",11),t.EFF(2),t.k0s(),t.bVm()),2&i){const n=t.XpG(3);t.R7$(2),t.JRh(n.dirEmojis[n.emitterDirection])}}function L(i,c){if(1&i){const n=t.RV6();t.j41(0,"div",9),t.bIt("click",function(){const e=t.eBV(n).index,r=t.XpG().index,s=t.XpG();return t.Njj(s.boxClick(r,e))}),t.DNE(1,N,2,0,"ng-container",3)(2,O,3,4,"ng-container",3)(3,Y,3,1,"ng-container",3),t.k0s()}if(2&i){const n=c.$implicit,o=t.XpG(2);t.R7$(),t.Y8G("ngIf",n.itemType===o.ItemType.Balloon),t.R7$(),t.Y8G("ngIf",n.itemType===o.ItemType.Laser),t.R7$(),t.Y8G("ngIf",n.itemType===o.ItemType.Emitter)}}function A(i,c){if(1&i&&(t.j41(0,"div",7),t.DNE(1,L,4,3,"div",8),t.k0s()),2&i){const n=c.$implicit;t.R7$(),t.Y8G("ngForOf",n)}}function P(i,c){if(1&i){const n=t.RV6();t.qex(0),t.j41(1,"h2"),t.EFF(2,"\u9ed8\u8ba4"),t.k0s(),t.j41(3,"button",5),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.setState(e.ConfigState.AddEmitter))}),t.EFF(4," \u53d1\u5c04\u5668 "),t.k0s(),t.j41(5,"button",5),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.setState(e.ConfigState.AddLaser))}),t.EFF(6," \u8f6c\u53d1\u5668 "),t.k0s(),t.j41(7,"button",5),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.setState(e.ConfigState.AddBalloon))}),t.EFF(8," \u6c14\u7403\u{1f388} "),t.k0s(),t.j41(9,"button",5),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.gen())}),t.EFF(10,"\u6e05\u7a7a"),t.k0s(),t.j41(11,"button",5),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.calc())}),t.EFF(12,"\u8ba1\u7b97"),t.k0s(),t.bVm()}}function S(i,c){if(1&i&&(t.qex(0),t.j41(1,"h2"),t.EFF(2," \u7f16\u8f91\u6c14\u7403\u{1f388} "),t.j41(3,"span",12),t.EFF(4,"(\u5728\u5de6\u4fa7\u70b9\u51fb\u65b9\u5757\u589e\u52a0\u6216\u5220\u9664)"),t.k0s()(),t.eu8(5,13),t.bVm()),2&i){t.XpG();const n=t.sdS(15);t.R7$(5),t.Y8G("ngTemplateOutlet",n)}}function w(i,c){if(1&i&&(t.j41(0,"span",18),t.EFF(1),t.k0s()),2&i){const n=c.$implicit;t.R7$(),t.Lme("(",n.i,",",n.j,")")}}function z(i,c){if(1&i){const n=t.RV6();t.j41(0,"div",15)(1,"span"),t.EFF(2),t.k0s(),t.j41(3,"button",5),t.bIt("click",function(){const e=t.eBV(n).index,r=t.XpG(2);return t.Njj(r.delLaserGroup(e))}),t.EFF(4," \u5220\u9664\u274c "),t.k0s(),t.j41(5,"button",16),t.bIt("click",function(){const e=t.eBV(n).index,r=t.XpG(2);return t.Njj(r.editI=e)}),t.EFF(6," \u7f16\u8f91 "),t.k0s(),t.DNE(7,w,2,2,"span",17),t.k0s()}if(2&i){const n=c.$implicit,o=c.index,e=t.XpG(2);t.Y8G("ngClass",t.eq3(4,M,o===e.editI)),t.R7$(2),t.SpI("\u7ec4 ",o,": "),t.R7$(3),t.Y8G("disabled",e.editI===o),t.R7$(2),t.Y8G("ngForOf",n)}}function J(i,c){if(1&i){const n=t.RV6();t.qex(0),t.j41(1,"h2"),t.EFF(2," \u7f16\u8f91\u8f6c\u53d1\u5668 "),t.j41(3,"span",12),t.EFF(4,"(\u5728\u5de6\u4fa7\u70b9\u51fb\u65b9\u5757\u589e\u52a0\u6216\u5220\u9664)"),t.k0s()(),t.eu8(5,13),t.j41(6,"div"),t.DNE(7,z,8,6,"div",14),t.k0s(),t.j41(8,"button",5),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.addLaserGroup())}),t.EFF(9," \u65b0\u589e\u7ec4\u2795 "),t.k0s(),t.bVm()}if(2&i){const n=t.XpG(),o=t.sdS(15);t.R7$(5),t.Y8G("ngTemplateOutlet",o),t.R7$(2),t.Y8G("ngForOf",n.laserGroups)}}function U(i,c){if(1&i){const n=t.RV6();t.qex(0),t.j41(1,"h2"),t.EFF(2,"\u7f16\u8f91\u53d1\u5c04\u5668 "),t.j41(3,"span",12),t.EFF(4,"(\u5de6\u4fa7\u9009\u4f4d\u7f6e,\u4e0b\u65b9\u9009\u65b9\u5411)"),t.k0s()(),t.j41(5,"div",19)(6,"div",20)(7,"div",21),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.emitterDirection=0)}),t.EFF(8," \u2196\ufe0f "),t.k0s(),t.j41(9,"div",21),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.emitterDirection=1)}),t.EFF(10," \u2b06\ufe0f "),t.k0s(),t.j41(11,"div",21),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.emitterDirection=2)}),t.EFF(12," \u2197\ufe0f "),t.k0s()(),t.j41(13,"div",20)(14,"div",21),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.emitterDirection=3)}),t.EFF(15," \u2b05\ufe0f "),t.k0s(),t.j41(16,"div",22),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.setState(e.ConfigState.Init))}),t.EFF(17,"\u274c"),t.k0s(),t.j41(18,"div",21),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.emitterDirection=4)}),t.EFF(19," \u27a1\ufe0f "),t.k0s()(),t.j41(20,"div",20)(21,"div",21),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.emitterDirection=5)}),t.EFF(22," \u2199\ufe0f "),t.k0s(),t.j41(23,"div",21),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.emitterDirection=6)}),t.EFF(24," \u2b07\ufe0f "),t.k0s(),t.j41(25,"div",21),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.emitterDirection=7)}),t.EFF(26," \u2198\ufe0f "),t.k0s()()(),t.eu8(27,13),t.bVm()}if(2&i){const n=t.XpG(),o=t.sdS(15);t.R7$(7),t.Y8G("ngClass",t.eq3(9,m,0===n.emitterDirection)),t.R7$(2),t.Y8G("ngClass",t.eq3(11,m,1===n.emitterDirection)),t.R7$(2),t.Y8G("ngClass",t.eq3(13,m,2===n.emitterDirection)),t.R7$(3),t.Y8G("ngClass",t.eq3(15,m,3===n.emitterDirection)),t.R7$(4),t.Y8G("ngClass",t.eq3(17,m,4===n.emitterDirection)),t.R7$(3),t.Y8G("ngClass",t.eq3(19,m,5===n.emitterDirection)),t.R7$(2),t.Y8G("ngClass",t.eq3(21,m,6===n.emitterDirection)),t.R7$(2),t.Y8G("ngClass",t.eq3(23,m,7===n.emitterDirection)),t.R7$(2),t.Y8G("ngTemplateOutlet",o)}}function Q(i,c){if(1&i){const n=t.RV6();t.j41(0,"button",5),t.bIt("click",function(){t.eBV(n);const e=t.XpG();return t.Njj(e.setState(e.ConfigState.Init))}),t.EFF(1," \u8fd4\u56de\u{1f519} "),t.k0s()}}function W(i,c){1&i&&(t.qex(0),t.EFF(1,"\u{1f388}"),t.bVm())}function H(i,c){if(1&i&&(t.qex(0),t.j41(1,"span",25),t.EFF(2),t.k0s(),t.bVm()),2&i){const n=t.XpG().$implicit,o=t.XpG(2);t.R7$(2),t.JRh(o.dirEmojis[n.direction])}}function K(i,c){if(1&i&&(t.qex(0),t.j41(1,"span",11),t.EFF(2),t.k0s(),t.bVm()),2&i){const n=t.XpG(3);t.R7$(2),t.JRh(n.dirEmojis[n.emitterDirection])}}function Z(i,c){if(1&i){const n=t.RV6();t.j41(0,"div",24),t.bIt("click",function(){const e=t.eBV(n).index,r=t.XpG().index,s=t.XpG();return t.Njj(s.boxClick(r,e))}),t.DNE(1,W,2,0,"ng-container",3)(2,H,3,1,"ng-container",3)(3,K,3,1,"ng-container",3),t.k0s()}if(2&i){const n=c.$implicit,o=t.XpG(2);t.R7$(),t.Y8G("ngIf",n.itemType===o.ItemType.Balloon),t.R7$(),t.Y8G("ngIf",n.itemType===o.ItemType.Laser),t.R7$(),t.Y8G("ngIf",n.itemType===o.ItemType.Emitter)}}function tt(i,c){if(1&i&&(t.j41(0,"div",7),t.DNE(1,Z,4,3,"div",23),t.k0s()),2&i){const n=c.$implicit;t.R7$(),t.Y8G("ngForOf",n)}}function nt(i,c){if(1&i&&(t.j41(0,"div"),t.EFF(1),t.k0s()),2&i){const n=t.XpG();t.R7$(),t.SpI("\u5206\u4eaburl: ",n.exportUrl,"")}}const x=[-1,-1,-1,0,0,1,1,1],et=[-1,0,1,-1,1,-1,0,1];var F=function(i){return i[i.Init=0]="Init",i[i.AddBalloon=1]="AddBalloon",i[i.AddLaser=2]="AddLaser",i[i.AddEmitter=3]="AddEmitter",i}(F||{}),l=function(i){return i[i.Empty=0]="Empty",i[i.Balloon=1]="Balloon",i[i.Laser=2]="Laser",i[i.Emitter=3]="Emitter",i}(l||{});class E{constructor(){this.itemType=l.Empty,this.direction=0,this.touched=!1,this.groupid=-1}}const T="0.0.1";function X(i,c,n,o,e,r,s,u,p){if(i===c.length)return function it(i,c,n,o,e,r,s,u){const p=[];for(let a=0;a<r;a++){const d=[];for(let _=0;_<s;_++)d.push(new E),n[a][_].itemType==l.Balloon&&(d[_].itemType=l.Balloon),n[a][_].itemType==l.Emitter&&(d[_].itemType=l.Emitter);p.push(d)}for(let a=0;a<u.length;a++){const d=i[a][u[a][0]];p[d.i][d.j].itemType=l.Laser,p[d.i][d.j].direction=u[a][1]}let{i:G,j:b}=o,j=e;for(;c;){const a=G+x[j],d=b+et[j];if(a<0||a>=r||d<0||d>=s)return!1;const _=p[a][d];if(_.itemType===l.Balloon)!1===_.touched&&(_.touched=!0,c--);else if(_.itemType===l.Laser){if(_.touched)return!1;_.touched=!0,j=_.direction}else if(_.itemType===l.Emitter)return!1;G=a,b=d}return!0}(c,n,o,e,r,s,u,p);for(let G=0;G<c[i].length;G++)for(let b=0;b<x.length;b++)if(p[i]=[G,b],X(i+1,c,n,o,e,r,s,u,p))return!0;return!1}let I=(()=>{class i{gen(){this.grid=[];for(let n=0;n<this.row;n++){const o=[];for(let e=0;e<this.col;e++)o.push(new E);this.grid.push(o)}this.laserGroups=[[]],this.setEmitter({i:0,j:0}),this.editI=0}constructor(n,o){this._snackBar=n,this.activeRoute=o,this.devMode=(0,t.naY)(),this.row=10,this.col=10,this.ItemType=l,this.grid=[],this.ansGrid=[],this.ConfigState=F,this.state=F.Init,this.laserGroups=[],this.editI=0,this.emitter={i:0,j:0},this.dirEmojis=["\u2196\ufe0f","\u2b06\ufe0f","\u2197\ufe0f","\u2b05\ufe0f","\u27a1\ufe0f","\u2199\ufe0f","\u2b07\ufe0f","\u2198\ufe0f"],this.emitterDirection=0,this.exportText="",this.exportUrl="",this.gen()}ngOnInit(){this.activeRoute.queryParams.pipe((0,$.s)(1)).subscribe(n=>{n.p&&this.importConfig(n.p)})}setState(n){this.state=n}boxClick(n,o){const e=this.grid[n][o];if(this.state==F.AddBalloon)e.itemType===l.Balloon?e.itemType=l.Empty:e.itemType===l.Empty&&(e.itemType=l.Balloon);else if(this.state==F.AddLaser){const r=this.laserGroups[this.editI];if(e.itemType===l.Empty)r.push({i:n,j:o}),e.itemType=l.Laser,e.groupid=this.editI;else if(e.itemType==l.Laser)if(e.groupid==this.editI){e.itemType=l.Empty;for(let s=0;s<r.length;s++)r[s].i==n&&r[s].j==o&&r.splice(s,1)}else this.alert("\u975e\u5f53\u524d\u7f16\u8f91\u7ec4")}else this.state==F.AddEmitter&&e.itemType===l.Empty&&this.setEmitter({i:n,j:o})}calc(){const n=this.laserGroups.filter(s=>s.length>0);if(0==n.length)return void this.alert("\u53ef\u52a8\u8f6c\u53d1\u7ec4\u672a\u7a7a, \u7ed3\u675f");this.laserGroups=n,this.updateLaserGrid();let o=1;if(this.laserGroups.filter(s=>s.length>0).forEach(s=>o*=8*s.length),o>1e8)return void this.alert("\u679a\u4e3e\u91cf:"+o+" \u8fc7\u5927!");if(o>1e3&&!confirm("\u679a\u4e3e\u91cf:"+o+"\u662f\u5426\u7ee7\u7eed"))return void this.alert("\u653e\u5f03");this.alert("\u5f00\u59cb\u8ba1\u7b97");const e=[];if(this.laserGroups.forEach(()=>e.push([0,0])),X(0,this.laserGroups,this.grid.map(s=>s.filter(u=>u.itemType==l.Balloon).length).reduce((s,u)=>s+u,0),this.grid,this.emitter,this.emitterDirection,this.row,this.col,e)){console.log(e),this.alert("\u627e\u5230\u65b9\u6848"),this.ansGrid=[];for(let s=0;s<this.row;s++){const u=[];for(let p=0;p<this.col;p++)u.push(new E),[l.Balloon,l.Emitter].includes(this.grid[s][p].itemType)&&(u[p].itemType=this.grid[s][p].itemType);this.ansGrid.push(u)}for(let s=0;s<this.laserGroups.length;s++){const u=this.laserGroups[s][e[s][0]];this.ansGrid[u.i][u.j].itemType=l.Laser,this.ansGrid[u.i][u.j].direction=e[s][1]}}else this.alert("\u672a\u627e\u5230\u65b9\u6848")}addLaserGroup(){this.laserGroups.push([]),this.editI=this.laserGroups.length-1}updateLaserGrid(){this.laserGroups.forEach((n,o)=>n.forEach(e=>{this.grid[e.i][e.j].itemType=l.Laser,this.grid[e.i][e.j].groupid=o})),this.editI=0}delLaserGroup(n){this.laserGroups[n].forEach(o=>this.grid[o.i][o.j].itemType=l.Empty),this.laserGroups.splice(n,1),0==this.laserGroups.length&&(this.laserGroups=[[]]),this.updateLaserGrid()}alert(n){this._snackBar.open(n,"",{duration:3e3})}setEmitter(n){this.grid[this.emitter.i][this.emitter.j].itemType=l.Empty,this.emitter=n,this.grid[this.emitter.i][this.emitter.j].itemType=l.Emitter}exportConfigClick(){const n=e=>e.i*this.col+e.j,o={v:T,b:[],l:this.laserGroups.filter(e=>e.length>0).map(e=>e.map(r=>n(r))),e:n(this.emitter),d:this.emitterDirection};this.grid.forEach((e,r)=>{e.forEach((s,u)=>{s.itemType==l.Balloon&&o.b.push(n({i:r,j:u}))})}),(0,t.naY)()&&(console.log(o),console.log(JSON.stringify(o)),console.log(btoa(JSON.stringify(o)))),this.exportText=btoa(JSON.stringify(o)),this.exportUrl=`${location.protocol}//${location.host}/#/xqtd/gongshu?p=${this.exportText}`,this.alert("\u5df2\u66f4\u65b0")}importConfigClick(){const n=window.prompt("\u8bf7\u8f93\u5165\u914d\u7f6e");null!==n&&this.importConfig(n)}importConfig(n){const o=e=>({i:Math.floor(e/this.col),j:e%this.col});try{const e=JSON.parse(atob(n));e.v!==T&&this.alert("\u7248\u672c\u4e0d\u4e00\u81f4"),this.gen(),this.setEmitter(o(e.e)),e.b.map(r=>o(r)).forEach(r=>this.grid[r.i][r.j].itemType=l.Balloon),this.laserGroups=(e.l.length?e.l:[[]]).map(r=>r.map(s=>o(s))),this.updateLaserGrid(),this.emitterDirection=e.d,this.alert("\u5b8c\u6210\u5bfc\u5165")}catch(e){console.error(e)}}static#t=this.\u0275fac=function(o){return new(o||i)(t.rXU(R.UG),t.rXU(f.nX))};static#n=this.\u0275cmp=t.VBU({type:i,selectors:[["app-xqtd-gongshu"]],standalone:!0,features:[t.aNF],decls:30,vars:9,consts:[["retbutton",""],[1,"gs-config"],[1,"gs-config-grid"],[4,"ngIf"],["class","gs-row",4,"ngFor","ngForOf"],["mat-raised-button","",1,"gs-button",3,"click"],[2,"word-break","break-all"],[1,"gs-row"],["class","gs-box",3,"click",4,"ngFor","ngForOf"],[1,"gs-box",3,"click"],[1,"gs-box-gid",3,"ngClass"],[1,"gs-box-gid",2,"background-color","greenyellow"],[1,"gs-hint"],[3,"ngTemplateOutlet"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],["mat-raised-button","",1,"gs-button",3,"click","disabled"],["class","gs-laser-group-pos",4,"ngFor","ngForOf"],[1,"gs-laser-group-pos"],[1,"gs-emitter"],[1,"row"],[1,"box",3,"click","ngClass"],[1,"box",3,"click"],["class","gs-box small",3,"click",4,"ngFor","ngForOf"],[1,"gs-box","small",3,"click"],[1,"gs-box-gid",2,"background-color","lightblue"]],template:function(o,e){if(1&o){const r=t.RV6();t.j41(0,"div",1)(1,"div",2)(2,"h1"),t.EFF(3,"\u8bbe\u7f6e"),t.k0s(),t.DNE(4,V,15,2,"ng-container",3),t.j41(5,"div"),t.DNE(6,A,2,1,"div",4),t.k0s()(),t.j41(7,"div",2)(8,"h1"),t.EFF(9,"\u6a21\u5f0f:"),t.k0s(),t.DNE(10,P,13,0,"ng-container",3)(11,S,6,1,"ng-container",3)(12,J,10,2,"ng-container",3)(13,U,28,25,"ng-container",3)(14,Q,2,0,"ng-template",null,0,t.C5r),t.j41(16,"div"),t.DNE(17,tt,2,1,"div",4),t.k0s()()(),t.j41(18,"div",2)(19,"h1"),t.EFF(20,"\u8f85\u52a9"),t.k0s(),t.j41(21,"button",5),t.bIt("click",function(){return t.eBV(r),t.Njj(e.exportConfigClick())}),t.EFF(22," \u{1f4e4}\u5bfc\u51fa\u5f53\u524d\u8bbe\u7f6e "),t.k0s(),t.j41(23,"button",5),t.bIt("click",function(){return t.eBV(r),t.Njj(e.importConfigClick())}),t.EFF(24," \u{1f4e5}\u5bfc\u5165\u5f53\u524d\u8bbe\u7f6e "),t.k0s(),t.j41(25,"div"),t.EFF(26),t.k0s(),t.DNE(27,nt,2,1,"div",3),t.j41(28,"div",6),t.EFF(29," \u4f8b\u5b50: eyJ2IjoiMC4wLjEiLCJiIjpbMTEsMTMsMTQsMjAsMjMsMjQsMzJdLCJsIjpbWzAsMl0sWzMsNV0sWzIxLDIyXSxbMzAsNTBdLFszMywzNF0sWzI1LDM1XV0sImUiOjQyLCJkIjoxfQ== "),t.k0s()()}2&o&&(t.R7$(4),t.Y8G("ngIf",e.devMode),t.R7$(2),t.Y8G("ngForOf",e.grid),t.R7$(4),t.Y8G("ngIf",e.state===e.ConfigState.Init),t.R7$(),t.Y8G("ngIf",e.state===e.ConfigState.AddBalloon),t.R7$(),t.Y8G("ngIf",e.state===e.ConfigState.AddLaser),t.R7$(),t.Y8G("ngIf",e.state===e.ConfigState.AddEmitter),t.R7$(4),t.Y8G("ngForOf",e.ansGrid),t.R7$(9),t.SpI("\u5bfc\u51fa\u914d\u7f6e: ",e.exportText,""),t.R7$(),t.Y8G("ngIf",!1))},dependencies:[h.bT,h.pM,h.YU,v.Hl,v.$z,h.T3],styles:[".gs-button[_ngcontent-%COMP%]{margin:.5em}.gs-hint[_ngcontent-%COMP%]{color:#00008b;font-size:.7em}.gs-config[_ngcontent-%COMP%]{display:flex}.gs-config-grid[_ngcontent-%COMP%]{box-sizing:border-box;padding:2em}.gs-row[_ngcontent-%COMP%]{display:flex}.gs-box[_ngcontent-%COMP%]{position:relative;display:inline-flex;width:4em;height:4em;align-items:center;justify-content:center;border:1px lightblue solid}.gs-box.small[_ngcontent-%COMP%]{width:2em;height:2em}.gs-box-gid[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:100%;display:inline-flex;background-color:#add8e6;justify-content:center;align-items:center;box-sizing:border-box;font-size:1.5em}.gs-box-gid.highlight[_ngcontent-%COMP%]{border:.2em darkblue solid}.gs-laser-group-highlight[_ngcontent-%COMP%]{background-color:#add8e6}.gs-laser-group-pos[_ngcontent-%COMP%]{box-sizing:border-box;border:1px black solid}.gs-emitter[_ngcontent-%COMP%]{display:block;box-sizing:border-box;margin:1em}.gs-emitter[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex}.gs-emitter[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{display:inline-flex;width:3em;height:3em;border:1px lightblue solid;align-items:center;justify-content:center;font-size:1.5em;cursor:pointer}.gs-emitter[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .box.highlight[_ngcontent-%COMP%]{background-color:#adff2f}"]})}return i})();const ot=[{path:"",component:q,children:[{path:"",redirectTo:"gongshu",pathMatch:"full"},{path:"gongshu",component:I}]}];let st=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#n=this.\u0275mod=t.$C({type:i});static#e=this.\u0275inj=t.G2t({imports:[f.iI.forChild(ot),f.iI]})}return i})();var y=g(9417);let rt=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#n=this.\u0275mod=t.$C({type:i});static#e=this.\u0275inj=t.G2t({imports:[h.MD,y.YN,y.X1,st,I]})}return i})()}}]);