(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"5za1":function(e,t,n){"use strict";n.d(t,"a",(function(){return J}));var i=n("lJxs"),a=n("SxV6"),s=n("pLZG");class c{constructor(e,t){this.id=Math.random(),this.max=e,this.first=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.CommandListRequest"}}class r{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.GetCommandEditTimesRequest"}}class o{constructor(e){this.time=e}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.SimpleTimerRequest"}}class b{constructor(e,t,n){this.id=Math.random(),this.plan=e,this.cataTarget=t,this.ms=n}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.ImportWorkbenchRequest"}}class l{constructor(e,t,n,i,a,s,c){this.source=e,this.target=t,this.slowestUnit=n,this.commandType=i,this.arrival=a,this.template=s,this.troops=c}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.AddCommandRequest"}}class m{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.DeleteCommandRequest"}}class u{constructor(e,t){this.id=e,this.source=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandSourceRequest"}}class d{constructor(e,t){this.id=e,this.target=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandTargetRequest"}}class p{constructor(e,t){this.id=e,this.slowestUnit=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditSlowestUnitRequest"}}class h{constructor(e,t){this.id=e,this.type=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandTypeRequest"}}class f{constructor(e,t){this.id=e,this.arrivalTime=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandArrivalTimeRequest"}}class g{constructor(e,t){this.id=e,this.sendTime=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandSendTimeRequest"}}class v{constructor(e,t,n){this.id=e,this.template=t,this.troops=n}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandTroopsRequest"}}class T{getName(){return"GetStandardTroopTemplateRequest"}}class w{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.unitengine.ws.packet.incoming.GetStandardTroopTemplateRequest"}}class k{constructor(e,t){this.name=e,this.troops=t}getName(){return"io.robertengel.dsbot.unitengine.ws.packet.incoming.AddStandardTroopTemplateRequest"}}class U{constructor(e,t,n){this.id=e,this.name=t,this.troops=n}getName(){return"io.robertengel.dsbot.unitengine.ws.packet.incoming.EditStandardTroopTemplateRequest"}}class C{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.unitengine.ws.packet.incoming.DeleteStandardTroopTemplateRequest"}}class O{getName(){return"WorkbenchExportRequest"}}class L{getName(){return"GetTimerLogicRequest"}}class S{constructor(e){this.timerLogic=e}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.SetTimerLogicRequest"}}class R{constructor(e,t,n,i,a){this.village=e,this.troops=t,this.second=n,this.msStart=i,this.msEnd=a}getName(){return"io.robertengel.dsbot.feature.tabber.ws.packet.incoming.CancelTabberRequest"}}class P{getName(){return"GetPlannedCancelTabsRequest"}}class D{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.feature.tabber.ws.packet.incoming.CancelPlannedTabRequest"}}class B{constructor(e,t){this.id=e,this.timerLogic=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandTimerRequest"}}class y{constructor(e,t,n,i,a,s,c){this.sources=e,this.target=t,this.slowestUnit=n,this.commandType=i,this.arrival=a,this.template=s,this.troops=c}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.MultiAddCommandRequest"}}class I{constructor(e,t,n){this.ids=e,this.min=t,this.max=n}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandMillisRandomRequest"}}class N{constructor(e,t){this.ids=e,this.ms=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandMillisSetRequest"}}var j=n("fXoL"),$=n("7nMs");let J=(()=>{class e{constructor(e){this.websocket=e}randomizeMillis(e,t,n){this.websocket.sendData(new I(e,t,n))}setMillis(e,t){this.websocket.sendData(new N(e,t))}setOverviewRemove(e){localStorage.setItem("tw.interface.command.overview.remove",String(e))}shouldOverviewRemove(){return"true"===localStorage.getItem("tw.interface.command.overview.remove")}cancelTab(e,t,n,i,a){this.websocket.sendData(new R(e,t,n,i,a))}getCancelTabs(){return this.websocket.observable("ListPlannedCancelTabsResponse",new P)}cancelPlannedCancelTab(e){this.websocket.sendData(new D(e))}addedPlansEvents(){return this.websocket.observable("AddedPlannedTabPacket")}cancelPlansEvents(){return this.websocket.observable("CanceledPlannedTabPacket").pipe(Object(i.a)(e=>e.id))}getTimerLogic(){return this.websocket.observable("TimerLogicResponse",new L)}setTimerLogic(e){this.websocket.sendData(new S(e))}importWorkbenchStart(){return this.websocket.observable("ImportWorkbenchStartEvent").pipe(Object(i.a)(e=>e.id))}importWorkbenchProgress(){return this.websocket.observable("ImportWorkbenchProgressEvent")}importWorkbenchFinish(){return this.websocket.observable("ImportWorkbenchFinishEvent")}getTroopTemplates(){return this.websocket.observable("StandardTroopTemplateListResponse",new T).pipe(Object(a.a)(),Object(i.a)(e=>e.templates))}getTroopTemplate(e){return this.websocket.observable("StandardTroopTemplateResponse",new w(e)).pipe(Object(s.a)(t=>t.id===e),Object(a.a)())}addTroopTemplate(e,t){return this.websocket.observable("StandardTroopTemplateResponse",new k(e,t)).pipe(Object(a.a)())}editTroopTemplate(e,t,n){return this.websocket.observable("StandardTroopTemplateResponse",new U(e,t,n)).pipe(Object(s.a)(t=>t.id===e),Object(a.a)())}deleteTroopTemplate(e){this.websocket.sendData(new C(e))}exportWorkbench(){return this.websocket.observable("WorkbenchExportResponse",new O).pipe(Object(a.a)(),Object(i.a)(e=>e.export))}addCommandEvents(){return this.websocket.observable("AddCommandEvent")}multiAddCommandEvents(){return this.websocket.observable("MultiAddCommandEvent")}editCommandsEvents(){return this.websocket.observable("EditCommandEvent")}removeCommandEvents(){return this.websocket.observable("RemoveCommandEvent").pipe(Object(i.a)(e=>e.id))}simpleTimer(e){this.websocket.sendData(new o(e))}importWorkbench(e,t,n){const i=new b(e,t,n);return this.websocket.sendData(i),i.id}getCommandList(e,t){const n=new c(e,t);return this.websocket.observable("CommandListResponse",n).pipe(Object(s.a)(e=>e.id===n.id),Object(a.a)())}getEditTimes(e){const t=new r(e);return this.websocket.observable("CommandEditTimesResponse",t).pipe(Object(s.a)(t=>t.id===e),Object(a.a)())}addCommand(e,t,n,i,a,s,c){this.websocket.sendData(new l(e,t,n,i,a,s,c))}addCommands(e,t,n,i,a,s,c){this.websocket.sendData(new y(e,t,n,i,a,s,c))}removeCommand(e){this.websocket.sendData(new m(e))}editSource(e,t){this.websocket.sendData(new u(e,t))}editTarget(e,t){this.websocket.sendData(new d(e,t))}editSlowestUnit(e,t){this.websocket.sendData(new p(e,t))}editCommandType(e,t){this.websocket.sendData(new h(e,t))}editArrival(e,t){this.websocket.sendData(new f(e,t))}editTimer(e,t){this.websocket.sendData(new B(e,t))}editSendTime(e,t){this.websocket.sendData(new g(e,t))}editTroops(e,t,n){this.websocket.sendData(new v(e,t,n))}}return e.\u0275fac=function(t){return new(t||e)(j.cc($.a))},e.\u0275prov=j.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},sIr3:function(e,t,n){"use strict";n.r(t),n.d(t,"IncsModule",(function(){return Ee}));var i=n("ofXK"),a=n("tyNb"),s=n("XNiG"),c=n("1G5W"),r=n("fXoL"),o=n("M9ds");const b=function(e){return[e]};function l(e,t){if(1&e){const e=r.Vb();r.Ub(0,"span",2),r.fc("click",(function(){r.Ac(e);const n=t.$implicit;return r.jc().activeLink=n})),r.Lc(1),r.Tb()}if(2&e){const e=t.$implicit,n=r.jc();r.pc("active",n.activeLink===e)("routerLink",r.tc(3,b,e.link)),r.Bb(1),r.Nc(" ",e.title," ")}}let m=(()=>{class e{constructor(e){this.router=e,this.links=[{title:"Home",link:"/incs"},{title:"Eigentruppen tabben",link:"/incs/cancel"}],this.activeLink=this.links[0],this.unsub$=new s.b}ngOnInit(){this.setActive(),this.router.events.pipe(Object(c.a)(this.unsub$)).subscribe(e=>{this.setActive()})}setActive(){for(const e of this.links)this.router.isActive(e.link,!1)&&(this.activeLink=e)}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(a.b))},e.\u0275cmp=r.Ib({type:e,selectors:[["app-incs"]],decls:3,vars:1,consts:[["mat-tab-nav-bar",""],["mat-tab-link","",3,"active","routerLink","click",4,"ngFor","ngForOf"],["mat-tab-link","",3,"active","routerLink","click"]],template:function(e,t){1&e&&(r.Ub(0,"nav",0),r.Jc(1,l,2,5,"span",1),r.Tb(),r.Pb(2,"router-outlet")),2&e&&(r.Bb(1),r.pc("ngForOf",t.links))},directives:[o.b,i.l,a.f,o.a,a.c],styles:[""]}),e})();var u=n("l5mm"),d=n("lJxs"),p=n("UXun"),h=n("Kj3r"),f=n("3Pt+"),g=n("7nMs"),v=n("fer1"),T=n("0MNC"),w=n("PDjf"),k=n("5QHs"),U=n("Q2Ze"),C=n("ZTz/"),O=n("jTwa"),L=n("FKr1"),S=n("pu8Q"),R=n("OaSA"),P=n("irRR"),D=n("DSdR");function B(e,t){1&e&&r.Pb(0,"app-unit-render",8),2&e&&r.pc("value",t.$implicit)}function y(e,t){if(1&e&&(r.Ub(0,"mat-option",9),r.Pb(1,"app-unit-render",9),r.Tb()),2&e){const e=t.$implicit;r.pc("value",e),r.Bb(1),r.pc("value",e)}}function I(e,t){if(1&e&&(r.Ub(0,"mat-form-field",4),r.Ub(1,"mat-label"),r.Lc(2,"Einheit"),r.Tb(),r.Ub(3,"mat-select",5),r.Ub(4,"mat-select-trigger"),r.Jc(5,B,1,1,"app-unit-render",6),r.Tb(),r.Jc(6,y,2,2,"mat-option",7),r.Tb(),r.Tb()),2&e){const e=r.jc();r.Bb(3),r.pc("formControl",e.unitsForm),r.Bb(2),r.pc("ngForOf",e.unitsForm.value),r.Bb(1),r.pc("ngForOf",e.units)}}function N(e,t){1&e&&(r.Ub(0,"div",10),r.Ub(1,"div",11),r.Pb(2,"span"),r.Pb(3,"mat-spinner"),r.Pb(4,"span"),r.Tb(),r.Tb())}function j(e,t){1&e&&(r.Ub(0,"mat-header-cell"),r.Lc(1,"Name"),r.Tb())}function $(e,t){if(1&e&&(r.Ub(0,"mat-cell"),r.Ub(1,"span",24),r.Lc(2,"Name:"),r.Tb(),r.Ub(3,"a",25),r.Lc(4),r.Tb(),r.Tb()),2&e){const e=t.$implicit;r.Bb(3),r.pc("routerLink","/incs/"+e.id),r.Bb(1),r.Mc(e.name)}}function J(e,t){1&e&&r.Pb(0,"app-unit-render",8),2&e&&r.pc("value",t.$implicit)}function x(e,t){if(1&e&&(r.Ub(0,"mat-option",9),r.Pb(1,"app-unit-render",9),r.Tb()),2&e){const e=t.$implicit;r.pc("value",e),r.Bb(1),r.pc("value",e)}}function E(e,t){if(1&e&&(r.Ub(0,"mat-header-cell"),r.Ub(1,"mat-form-field",4),r.Ub(2,"mat-label"),r.Lc(3,"Einheit"),r.Tb(),r.Ub(4,"mat-select",5),r.Ub(5,"mat-select-trigger"),r.Jc(6,J,1,1,"app-unit-render",6),r.Tb(),r.Jc(7,x,2,2,"mat-option",7),r.Tb(),r.Tb(),r.Tb()),2&e){const e=r.jc(2);r.Bb(4),r.pc("formControl",e.unitsForm),r.Bb(2),r.pc("ngForOf",e.unitsForm.value),r.Bb(1),r.pc("ngForOf",e.units)}}function M(e,t){if(1&e&&(r.Ub(0,"mat-cell"),r.Ub(1,"span",24),r.Lc(2,"Einheit:"),r.Tb(),r.Pb(3,"app-unit-render",9),r.Tb()),2&e){const e=t.$implicit;r.Bb(3),r.pc("value",e.slowestUnit)}}function F(e,t){1&e&&(r.Ub(0,"mat-header-cell"),r.Lc(1,"Ziel"),r.Tb())}function q(e,t){if(1&e&&(r.Ub(0,"mat-cell"),r.Ub(1,"span",24),r.Lc(2,"Ziel:"),r.Tb(),r.Pb(3,"app-village-render",9),r.Tb()),2&e){const e=t.$implicit;r.Bb(3),r.pc("value",e.target)}}function A(e,t){1&e&&(r.Ub(0,"mat-header-cell"),r.Lc(1,"Herkunft"),r.Tb())}function z(e,t){if(1&e&&(r.Ub(0,"mat-cell"),r.Ub(1,"span",24),r.Lc(2,"Herkunft:"),r.Tb(),r.Pb(3,"app-village-render",9),r.Tb()),2&e){const e=t.$implicit;r.Bb(3),r.pc("value",e.origin)}}function H(e,t){1&e&&(r.Ub(0,"mat-header-cell"),r.Lc(1,"Spieler"),r.Tb())}function W(e,t){if(1&e&&(r.Ub(0,"mat-cell"),r.Ub(1,"span",24),r.Lc(2,"Spieler:"),r.Tb(),r.Lc(3),r.Tb()),2&e){const e=t.$implicit;r.Bb(3),r.Nc(" ",e.player.name," ")}}function V(e,t){1&e&&(r.Ub(0,"mat-header-cell"),r.Lc(1,"Ankunft"),r.Tb())}function G(e,t){if(1&e&&(r.Ub(0,"mat-cell"),r.Ub(1,"span",24),r.Lc(2,"Ankunft:"),r.Tb(),r.Lc(3),r.Ub(4,"small"),r.Lc(5),r.Tb(),r.Tb()),2&e){const e=t.$implicit;r.Bb(3),r.Nc(" ",e.arrival.display,""),r.Bb(2),r.Nc(":",e.arrival.ms,"")}}function Y(e,t){1&e&&(r.Ub(0,"mat-header-cell"),r.Lc(1,"Verbleibend"),r.Tb())}function _(e,t){if(1&e&&(r.Ub(0,"mat-cell"),r.Ub(1,"span",24),r.Lc(2,"Verbleibend:"),r.Tb(),r.Ub(3,"span"),r.Lc(4),r.kc(5,"hms"),r.Tb(),r.Tb()),2&e){const e=t.$implicit;r.Bb(3),r.Gb("red",e.remaining<300),r.Bb(1),r.Mc(r.lc(5,3,1e3*e.remaining))}}function Z(e,t){1&e&&r.Pb(0,"mat-header-row")}function K(e,t){1&e&&r.Pb(0,"mat-row")}function X(e,t){if(1&e&&(r.Ub(0,"mat-table",12),r.Sb(1,13),r.Jc(2,j,2,0,"mat-header-cell",14),r.Jc(3,$,5,2,"mat-cell",15),r.Rb(),r.Sb(4,16),r.Jc(5,E,8,3,"mat-header-cell",14),r.Jc(6,M,4,1,"mat-cell",15),r.Rb(),r.Sb(7,17),r.Jc(8,F,2,0,"mat-header-cell",14),r.Jc(9,q,4,1,"mat-cell",15),r.Rb(),r.Sb(10,18),r.Jc(11,A,2,0,"mat-header-cell",14),r.Jc(12,z,4,1,"mat-cell",15),r.Rb(),r.Sb(13,19),r.Jc(14,H,2,0,"mat-header-cell",14),r.Jc(15,W,4,1,"mat-cell",15),r.Rb(),r.Sb(16,20),r.Jc(17,V,2,0,"mat-header-cell",14),r.Jc(18,G,6,2,"mat-cell",15),r.Rb(),r.Sb(19,21),r.Jc(20,Y,2,0,"mat-header-cell",14),r.Jc(21,_,6,5,"mat-cell",15),r.Rb(),r.Jc(22,Z,1,0,"mat-header-row",22),r.Jc(23,K,1,0,"mat-row",23),r.Tb()),2&e){const e=r.jc();r.pc("dataSource",e.incs),r.Bb(22),r.pc("matHeaderRowDef",e.displayedColumns),r.Bb(1),r.pc("matRowDefColumns",e.displayedColumns)}}const Q=function(){return[10,50,100,250]};let ee=(()=>{class e{constructor(e,t,n){this.web=e,this.incService=t,this.breakpointObserver=n,this.unsub$=new s.b,this.incs=[],this.size=10,this.unitsForm=new f.e([]),this.cancelled=!1,this.displayedColumns=["name","slowestUnit","target","origin","player","arrival","remaining"],this.isHandset$=this.breakpointObserver.observe("(max-width: 900px)").pipe(Object(d.a)(e=>e.matches),Object(p.a)()),this.loading=!1}ngOnInit(){this.web.info().pipe(Object(c.a)(this.unsub$)).subscribe(e=>{this.units=e.units}),this.loading=!0,this.incService.getIncList(0,10,!1).subscribe(e=>{this.incs=e.incs,this.count=e.count,this.loading=!1}),Object(u.a)(1e3).pipe(Object(c.a)(this.unsub$)).subscribe(e=>{this.incs.forEach((e,t,n)=>{n[t].remaining>0&&(n[t].remaining-=1)})}),this.unitsForm.valueChanges.pipe(Object(c.a)(this.unsub$),Object(h.a)(1e3)).subscribe(e=>{this.loading=!0,this.incService.getIncList(0,this.size,this.cancelled,e).subscribe(e=>{this.incs=e.incs,this.count=e.count,this.loading=!1})})}pageUpdate(e){this.size=e.pageSize,this.loading=!0,this.incService.getIncList(e.pageIndex*e.pageSize,e.pageSize,this.cancelled,this.unitsForm.value).subscribe(e=>{this.incs=e.incs,this.count=e.count,this.loading=!1})}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(g.a),r.Ob(v.a),r.Ob(T.a))},e.\u0275cmp=r.Ib({type:e,selectors:[["app-incs-overview"]],decls:6,vars:9,consts:[["appearance","fill",4,"ngIf"],["class","row",4,"ngIf"],["class","w-100",3,"dataSource",4,"ngIf"],[3,"length","pageSize","pageSizeOptions","page"],["appearance","fill"],["multiple","",3,"formControl"],["class","p-1",3,"value",4,"ngFor","ngForOf"],[3,"value",4,"ngFor","ngForOf"],[1,"p-1",3,"value"],[3,"value"],[1,"row"],[1,"col-md-12","flex-between"],[1,"w-100",3,"dataSource"],["matColumnDef","name"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","slowestUnit"],["matColumnDef","target"],["matColumnDef","origin"],["matColumnDef","player"],["matColumnDef","arrival"],["matColumnDef","remaining"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[1,"mobile-label"],[3,"routerLink"]],template:function(e,t){1&e&&(r.Ub(0,"mat-card"),r.Jc(1,I,7,3,"mat-form-field",0),r.kc(2,"async"),r.Jc(3,N,5,0,"div",1),r.Jc(4,X,24,3,"mat-table",2),r.Ub(5,"mat-paginator",3),r.fc("page",(function(e){return t.pageUpdate(e)})),r.Tb(),r.Tb()),2&e&&(r.Bb(1),r.pc("ngIf",!0===r.lc(2,6,t.isHandset$)),r.Bb(2),r.pc("ngIf",t.loading),r.Bb(1),r.pc("ngIf",!t.loading),r.Bb(1),r.pc("length",t.count)("pageSize",10)("pageSizeOptions",r.sc(8,Q)))},directives:[w.a,i.m,k.a,U.b,U.f,C.a,f.o,f.f,C.c,i.l,O.a,L.l,S.b,R.j,R.c,R.e,R.b,R.g,R.i,R.d,R.a,a.d,P.a,R.f,R.h],pipes:[i.b,D.a],styles:["a[_ngcontent-%COMP%]{color:inherit}.red[_ngcontent-%COMP%]{color:red}.mat-header-cell[_ngcontent-%COMP%]{flex-direction:column;justify-content:center}.mat-cell[_ngcontent-%COMP%]{text-align:center;justify-content:center}.mobile-label[_ngcontent-%COMP%]{display:none}@media (max-width:900px){.mobile-label[_ngcontent-%COMP%]{width:80px;display:inline-block;font-weight:700}mat-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}.mat-header-row[_ngcontent-%COMP%]{display:none}.mat-row[_ngcontent-%COMP%]{flex-direction:column;align-items:start;padding:8px 24px}}"]}),e})();var te=n("bTqV");function ne(e,t){1&e&&(r.Ub(0,"div",2),r.Ub(1,"div",3),r.Pb(2,"span"),r.Pb(3,"mat-spinner"),r.Pb(4,"span"),r.Tb(),r.Tb())}function ie(e,t){1&e&&(r.Sb(0),r.Lc(1," Konnte keinen Inc mit dieser ID finden. "),r.Rb())}function ae(e,t){if(1&e&&(r.Ub(0,"mat-option",9),r.Pb(1,"app-unit-render",9),r.Tb()),2&e){const e=t.$implicit;r.pc("value",e),r.Bb(1),r.pc("value",e)}}const se=function(){return{type:"SUPPORT"}},ce=function(e,t,n){return["/planner/command",e,t,n]},re=function(e,t){return{village:e,time:t}},oe=function(e){return["/incs/cancel",e]},be=function(){return{type:"ATTACK"}};function le(e,t){if(1&e&&(r.Ub(0,"mat-card-content"),r.Ub(1,"div",2),r.Ub(2,"div",4),r.Ub(3,"mat-card",5),r.Ub(4,"div",6),r.Ub(5,"div",7),r.Lc(6),r.Tb(),r.Ub(7,"div",7),r.Ub(8,"mat-select",8),r.Ub(9,"mat-select-trigger"),r.Pb(10,"app-unit-render",9),r.Tb(),r.Jc(11,ae,2,2,"mat-option",10),r.Tb(),r.Tb(),r.Ub(12,"div",11),r.Lc(13," Ziel: "),r.Pb(14,"app-village-render",9),r.Tb(),r.Ub(15,"div",11),r.Lc(16," Herkunft: "),r.Pb(17,"app-village-render",9),r.Tb(),r.Ub(18,"div",7),r.Lc(19),r.Tb(),r.Ub(20,"div",11),r.Lc(21),r.Ub(22,"small"),r.Lc(23),r.Tb(),r.Tb(),r.Ub(24,"div",11),r.Lc(25),r.Tb(),r.Ub(26,"div",7),r.Lc(27),r.kc(28,"hms"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(29,"div",12),r.Ub(30,"div",2),r.Ub(31,"div",13),r.Ub(32,"button",14),r.Lc(33," DEFF planen. "),r.Tb(),r.Tb(),r.Tb(),r.Ub(34,"div",2),r.Ub(35,"div",13),r.Ub(36,"button",15),r.Lc(37," Eigendeff tabben. "),r.Tb(),r.Tb(),r.Tb(),r.Ub(38,"div",2),r.Ub(39,"div",13),r.Ub(40,"button",16),r.Lc(41," Cleaner planen. "),r.Tb(),r.Tb(),r.Tb(),r.Ub(42,"div",2),r.Ub(43,"div",13),r.Ub(44,"button",16),r.Lc(45," Retime planen. "),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb()),2&e){const e=r.jc();r.Bb(6),r.Nc(" ",e.inc.name," "),r.Bb(2),r.pc("formControl",e.unitForm),r.Bb(2),r.pc("value",e.unitForm.value),r.Bb(1),r.pc("ngForOf",e.units),r.Bb(3),r.pc("value",e.inc.target),r.Bb(3),r.pc("value",e.inc.origin),r.Bb(2),r.Nc(" Spieler: ",e.inc.player.name," "),r.Bb(2),r.Nc(" Ankunft: ",e.inc.arrival.display,""),r.Bb(2),r.Nc(":",e.inc.arrival.ms,""),r.Bb(2),r.Nc(" R\xfcckkehr: ",e.inc.return.display," "),r.Bb(2),r.Nc(" Verbleibend: ",r.lc(28,15,1e3*e.inc.remaining)," "),r.Bb(5),r.pc("routerLink",r.vc(18,ce,e.inc.target.id,e.inc.arrival.timestamp,r.sc(17,se))),r.Bb(4),r.pc("routerLink",r.tc(25,oe,r.uc(22,re,e.inc.target.id,e.inc.arrival.timestamp))),r.Bb(4),r.pc("routerLink",r.vc(28,ce,e.inc.target.id,e.inc.arrival.timestamp,r.sc(27,be))),r.Bb(4),r.pc("routerLink",r.vc(33,ce,e.inc.origin.id,e.inc.return.timestamp,r.sc(32,be)))}}let me=(()=>{class e{constructor(e,t,n){this.route=e,this.incService=t,this.web=n,this.unsub$=new s.b,this.routeChange$=new s.b,this.unitForm=new f.e,this.units=[],this.loading=!1}ngOnInit(){this.web.info().subscribe(e=>{this.units=e.units}),this.route.paramMap.subscribe(e=>{this.routeChange$.next(),this.loading=!0,this.incService.getInc(parseInt(e.get("id"),10)).subscribe(e=>{this.inc=e,this.unitForm.setValue(this.inc.slowestUnit),this.loading=!1}),this.incService.incUpdates(parseInt(e.get("id"),10)).pipe(Object(c.a)(this.routeChange$)).subscribe(e=>{this.inc=e,this.unitForm.setValue(this.inc.slowestUnit)})}),Object(u.a)(1e3).pipe(Object(c.a)(this.unsub$)).subscribe(e=>{this.inc&&this.inc.remaining--}),this.unitForm.valueChanges.pipe(Object(h.a)(500)).subscribe(e=>{this.inc&&e!==this.inc.slowestUnit&&this.incService.updateSlowest(this.inc.id,e)})}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete(),this.routeChange$.next(),this.routeChange$.complete()}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(a.a),r.Ob(v.a),r.Ob(g.a))},e.\u0275cmp=r.Ib({type:e,selectors:[["app-incs-details"]],decls:4,vars:3,consts:[["class","row",4,"ngIf"],[4,"ngIf"],[1,"row"],[1,"col-md-12","flex-between"],[1,"col-xl-9"],[1,"mat-elevation-z6","h-100"],[1,"row","align-items-center"],[1,"col-xl-1"],[3,"formControl"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"col-xl-2"],[1,"col-xl-3"],[1,"col-md-12"],["mat-raised-button","","color","accent",1,"w-100","mat-elevation-z6",3,"routerLink"],["mat-raised-button","","color","accent",1,"w-100","mat-elevation-z6","mt-2",3,"routerLink"],["mat-raised-button","","color","warn",1,"w-100","mat-elevation-z6","mt-2",3,"routerLink"]],template:function(e,t){1&e&&(r.Ub(0,"mat-card"),r.Jc(1,ne,5,0,"div",0),r.Jc(2,ie,2,0,"ng-container",1),r.Jc(3,le,46,37,"mat-card-content",1),r.Tb()),2&e&&(r.Bb(1),r.pc("ngIf",t.loading),r.Bb(1),r.pc("ngIf",!t.inc&&!t.loading),r.Bb(1),r.pc("ngIf",t.inc))},directives:[w.a,i.m,S.b,w.c,C.a,f.o,f.f,C.c,O.a,i.l,P.a,te.a,a.c,L.l],pipes:[D.a],styles:[""]}),e})();var ue=n("wd/R"),de=n("PqYM"),pe=n("5za1"),he=n("YWTT"),fe=n("7Ixi"),ge=n("e6WT"),ve=n("TN/R"),Te=n("38Pe");let we=(()=>{class e{constructor(e,t,n,i){this.fb=e,this.commandService=t,this.route=n,this.villageService=i,this.form=this.fb.group({village:[null],troops:{},date:ue(),time:ue().format("HH:mm:ss"),start:0,end:999})}ngOnInit(){this.route.paramMap.subscribe(e=>{e.has("village")&&this.villageService.byId(parseInt(e.get("village"),10)).subscribe(e=>{this.form.patchValue({village:e})}),e.has("time")&&this.form.patchValue({date:ue(parseInt(e.get("time"),10)),time:ue(parseInt(e.get("time"),10)).format("HH:mm:ss")})})}submit(e){if(this.form.disable(),Object(de.a)(1500).subscribe(()=>{this.form.enable()}),null===e.troops)return;const t=ue(e.date.format("DD.MM.YYYY")+" "+e.time,"DD.MM.YYYY HH:mm:ss");this.commandService.cancelTab(e.village.id,e.troops,t.valueOf(),e.start,e.end)}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(f.d),r.Ob(pe.a),r.Ob(a.a),r.Ob(he.a))},e.\u0275cmp=r.Ib({type:e,selectors:[["app-incs-cancel-tab-schedule"]],decls:36,vars:5,consts:[[3,"formGroup","ngSubmit"],[1,"form-group","row"],[1,"col"],["label","Dorf","formControlName","village"],["matInput","","placeholder","Pick Date","formControlName","date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["matInput","","maxlength","8","formControlName","time"],["type","number","matInput","","min","0","max","999","formControlName","start"],["type","number","matInput","","min","0","max","999","formControlName","end"],["formControlName","troops",1,"full-width",3,"hideCataTarget"],["type","submit","mat-raised-button","","color","primary",3,"disabled"]],template:function(e,t){if(1&e&&(r.Ub(0,"mat-card"),r.Ub(1,"form",0),r.fc("ngSubmit",(function(){return t.submit(t.form.value)})),r.Ub(2,"div",1),r.Ub(3,"div",2),r.Pb(4,"app-village-input",3),r.Tb(),r.Tb(),r.Ub(5,"div",1),r.Ub(6,"div",2),r.Ub(7,"mat-form-field"),r.Ub(8,"mat-label"),r.Lc(9,"Ankunft"),r.Tb(),r.Pb(10,"input",4),r.Pb(11,"mat-datepicker-toggle",5),r.Pb(12,"mat-datepicker",null,6),r.Tb(),r.Tb(),r.Ub(14,"div",2),r.Ub(15,"mat-form-field"),r.Ub(16,"mat-label"),r.Lc(17,"Ankunftszeit"),r.Tb(),r.Pb(18,"input",7),r.Tb(),r.Tb(),r.Ub(19,"div",2),r.Ub(20,"mat-form-field"),r.Ub(21,"mat-label"),r.Lc(22,"Min MS"),r.Tb(),r.Pb(23,"input",8),r.Tb(),r.Tb(),r.Ub(24,"div",2),r.Ub(25,"mat-form-field"),r.Ub(26,"mat-label"),r.Lc(27,"Max MS"),r.Tb(),r.Pb(28,"input",9),r.Tb(),r.Tb(),r.Tb(),r.Ub(29,"div",1),r.Ub(30,"div",2),r.Pb(31,"app-units-input",10),r.Tb(),r.Tb(),r.Ub(32,"div",1),r.Ub(33,"div",2),r.Ub(34,"button",11),r.Lc(35," Hinzuf\xfcgen "),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb()),2&e){const e=r.xc(13);r.Bb(1),r.pc("formGroup",t.form),r.Bb(9),r.pc("matDatepicker",e),r.Bb(1),r.pc("for",e),r.Bb(20),r.pc("hideCataTarget",!0),r.Bb(3),r.pc("disabled",!t.form.valid||t.form.disabled)}},directives:[w.a,f.x,f.p,f.i,fe.a,f.o,f.g,U.b,U.f,ge.b,f.c,ve.b,ve.d,U.g,ve.a,f.k,f.s,Te.a,te.a],styles:[""]}),e})();var ke=n("NFeN");function Ue(e,t){1&e&&(r.Ub(0,"th",10),r.Lc(1," Dorf"),r.Tb())}function Ce(e,t){if(1&e&&(r.Ub(0,"td",11),r.Pb(1,"app-village-render",12),r.Tb()),2&e){const e=t.$implicit;r.Bb(1),r.pc("value",e.village)}}function Oe(e,t){1&e&&(r.Ub(0,"th",10),r.Lc(1," Zeit"),r.Tb())}function Le(e,t){if(1&e&&(r.Ub(0,"td",11),r.Lc(1),r.Tb()),2&e){const e=t.$implicit;r.Bb(1),r.Nc(" ",e.time.display," ")}}function Se(e,t){1&e&&(r.Ub(0,"th",10),r.Lc(1," MS Interval"),r.Tb())}function Re(e,t){if(1&e&&(r.Ub(0,"td",11),r.Lc(1),r.Tb()),2&e){const e=t.$implicit;r.Bb(1),r.Oc(" ",e.startMs,"-",e.endMs," ")}}function Pe(e,t){1&e&&r.Pb(0,"th",10)}function De(e,t){if(1&e){const e=r.Vb();r.Ub(0,"td",11),r.Ub(1,"button",13),r.fc("click",(function(){r.Ac(e);const n=t.$implicit;return r.jc(2).cancel(n.id)})),r.Ub(2,"mat-icon"),r.Lc(3,"delete"),r.Tb(),r.Tb(),r.Tb()}}function Be(e,t){1&e&&r.Pb(0,"tr",14)}function ye(e,t){1&e&&r.Pb(0,"tr",15)}function Ie(e,t){if(1&e&&(r.Ub(0,"mat-card"),r.Ub(1,"table",1),r.Sb(2,2),r.Jc(3,Ue,2,0,"th",3),r.Jc(4,Ce,2,1,"td",4),r.Rb(),r.Sb(5,5),r.Jc(6,Oe,2,0,"th",3),r.Jc(7,Le,2,1,"td",4),r.Rb(),r.Sb(8,6),r.Jc(9,Se,2,0,"th",3),r.Jc(10,Re,2,2,"td",4),r.Rb(),r.Sb(11,7),r.Jc(12,Pe,1,0,"th",3),r.Jc(13,De,4,0,"td",4),r.Rb(),r.Jc(14,Be,1,0,"tr",8),r.Jc(15,ye,1,0,"tr",9),r.Tb(),r.Tb()),2&e){const e=r.jc();r.Bb(1),r.pc("dataSource",e.plans),r.Bb(13),r.pc("matHeaderRowDef",e.displayedColumns),r.Bb(1),r.pc("matRowDefColumns",e.displayedColumns)}}let Ne=(()=>{class e{constructor(e){this.command=e,this.unsub$=new s.b,this.displayedColumns=["village","time","ms","cancel"]}ngOnInit(){this.command.getCancelTabs().pipe(Object(c.a)(this.unsub$)).subscribe(e=>{this.plans=e}),this.command.cancelPlansEvents().pipe(Object(c.a)(this.unsub$)).subscribe(e=>{this.plans=this.plans.filter(t=>t.id!==e)}),this.command.addedPlansEvents().pipe(Object(c.a)(this.unsub$)).subscribe(e=>{this.plans=[...this.plans,e]})}cancel(e){this.command.cancelPlannedCancelTab(e)}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(pe.a))},e.\u0275cmp=r.Ib({type:e,selectors:[["app-incs-cancel-tab-list"]],decls:1,vars:1,consts:[[4,"ngIf"],["mat-table","",1,"mat-elevation-z8","w-100",3,"dataSource"],["matColumnDef","village"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","time"],["matColumnDef","ms"],["matColumnDef","cancel"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"value"],["mat-mini-fab","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&r.Jc(0,Ie,16,3,"mat-card",0),2&e&&r.pc("ngIf",t.plans.length>0)},directives:[i.m,w.a,R.j,R.c,R.e,R.b,R.g,R.i,R.d,R.a,P.a,te.a,ke.a,R.f,R.h],styles:[""]}),e})();const je=[{path:"",component:m,children:[{path:"cancel",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Ib({type:e,selectors:[["app-incs-cancel-tab"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-xl-9"],[1,"col-xl-3"]],template:function(e,t){1&e&&(r.Ub(0,"div",0),r.Ub(1,"div",1),r.Pb(2,"app-incs-cancel-tab-schedule"),r.Tb(),r.Ub(3,"div",2),r.Pb(4,"app-incs-cancel-tab-list"),r.Tb(),r.Tb())},directives:[we,Ne],styles:[""]}),e})()},{path:":id",component:me},{path:"",pathMatch:"full",component:ee}]}];let $e=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},imports:[[a.e.forChild(je)],a.e]}),e})();var Je=n("BLWB"),xe=n("1yaQ");let Ee=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},providers:[{provide:L.d,useValue:"de-DE"}],imports:[[i.c,$e,o.c,w.f,Je.a,R.l,te.b,ke.b,k.b,U.d,C.b,f.t,S.a,ve.c,xe.a,ge.c]]}),e})()}}]);