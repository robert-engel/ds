(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5za1":function(e,t,s){"use strict";s.d(t,"a",(function(){return J}));var i=s("1G5W"),o=s("lJxs"),n=s("SxV6"),a=s("pLZG");class r{constructor(e,t,s,i,o,n){this.id=Math.random(),this.max=e,this.first=t,this.origin=s,this.target=i,this.type=o,this.unit=n}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.CommandListRequest"}}class c{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.GetCommandEditTimesRequest"}}class m{constructor(e){this.time=e}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.SimpleTimerRequest"}}class b{constructor(e,t,s){this.id=Math.random(),this.plan=e,this.cataTarget=t,this.ms=s}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.ImportWorkbenchRequest"}}class d{constructor(e,t,s,i,o,n,a){this.source=e,this.target=t,this.slowestUnit=s,this.commandType=i.name,this.arrival=o,this.template=n,this.troops=a}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.AddCommandRequest"}}class u{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.DeleteCommandRequest"}}class l{constructor(e,t){this.id=e,this.source=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandSourceRequest"}}class p{constructor(e,t){this.id=e,this.target=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandTargetRequest"}}class h{constructor(e,t){this.id=e,this.slowestUnit=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditSlowestUnitRequest"}}class g{constructor(e,t){this.id=e,this.type=t.name}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandTypeRequest"}}class f{constructor(e,t){this.id=e,this.arrivalTime=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandArrivalTimeRequest"}}class T{constructor(e,t){this.id=e,this.sendTime=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandSendTimeRequest"}}class w{constructor(e,t,s){this.id=e,this.template=t,this.troops=s}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandTroopsRequest"}}class v{getName(){return"GetStandardTroopTemplateRequest"}}class k{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.unitengine.ws.packet.incoming.GetStandardTroopTemplateRequest"}}class C{constructor(e,t){this.name=e,this.troops=t}getName(){return"io.robertengel.dsbot.unitengine.ws.packet.incoming.AddStandardTroopTemplateRequest"}}class U{constructor(e,t,s){this.id=e,this.name=t,this.troops=s}getName(){return"io.robertengel.dsbot.unitengine.ws.packet.incoming.EditStandardTroopTemplateRequest"}}class E{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.unitengine.ws.packet.incoming.DeleteStandardTroopTemplateRequest"}}class R{getName(){return"WorkbenchExportRequest"}}class S{getName(){return"GetTimerLogicRequest"}}class N{constructor(e){this.timerLogic=e}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.SetTimerLogicRequest"}}class O{constructor(e,t,s,i,o){this.village=e,this.troops=t,this.second=s,this.msStart=i,this.msEnd=o}getName(){return"io.robertengel.dsbot.feature.tabber.ws.packet.incoming.CancelTabberRequest"}}class L{getName(){return"GetPlannedCancelTabsRequest"}}class q{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.feature.tabber.ws.packet.incoming.CancelPlannedTabRequest"}}class D{constructor(e,t){this.id=e,this.timerLogic=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandTimerRequest"}}class P{constructor(e,t,s,i,o,n,a){this.sources=e,this.target=t,this.slowestUnit=s,this.commandType=i.name,this.arrival=o,this.template=n,this.troops=a}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.MultiAddCommandRequest"}}class y{constructor(e,t,s){this.ids=e,this.plus=t,this.unit=s}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.multi.MultiEditCommandTimeAddRequest"}}class A{constructor(e,t,s){this.ids=e,this.min=t,this.max=s}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.multi.MultiEditCommandMillisRandomRequest"}}class M{constructor(e,t){this.ids=e,this.ms=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.multi.MultiEditCommandMillisSetRequest"}}class j{constructor(e,t){this.ids=e,this.timerLogic=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.multi.MultiEditCommandTimerRequest"}}class B{constructor(e,t,s){this.ids=e,this.template=t,this.troops=s}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.multi.MultiEditCommandTroopsRequest"}}class I{constructor(e,t){this.ids=e,this.type=t.name}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.multi.MultiEditCommandTypeRequest"}}class F{constructor(e,t){this.ids=e,this.slowestUnit=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.multi.MultiEditCommandUnitRequest"}}class x{getName(){return"CommandListUsedTypesRequest"}}var W=s("fXoL"),G=s("7nMs");let J=(()=>{class e{constructor(e){this.websocket=e}multiEditEvents(e){return this.websocket.observable("MultiEditCommandResponse").pipe(Object(i.a)(e))}addMillis(e,t,s){this.websocket.sendData(new y(e,t,s))}randomizeMillis(e,t,s){this.websocket.sendData(new A(e,t,s))}setMillis(e,t){this.websocket.sendData(new M(e,t))}multiEditTimer(e,t){this.websocket.sendData(new j(e,t))}multiEditTroops(e,t,s){this.websocket.sendData(new B(e,t,s))}multiEditType(e,t){this.websocket.sendData(new I(e,t))}multiEditUnit(e,t){this.websocket.sendData(new F(e,t))}setOverviewRemove(e){localStorage.setItem("tw.interface.command.overview.remove",String(e))}shouldOverviewRemove(){return"true"===localStorage.getItem("tw.interface.command.overview.remove")}cancelTab(e,t,s,i,o){this.websocket.sendData(new O(e,t,s,i,o))}getCancelTabs(){return this.websocket.observable("ListPlannedCancelTabsResponse",new L)}cancelPlannedCancelTab(e){this.websocket.sendData(new q(e))}addedPlansEvents(){return this.websocket.observable("AddedPlannedTabPacket")}cancelPlansEvents(){return this.websocket.observable("CanceledPlannedTabPacket").pipe(Object(o.a)(e=>e.id))}getTimerLogic(){return this.websocket.observable("TimerLogicResponse",new S)}setTimerLogic(e){this.websocket.sendData(new N(e))}importWorkbenchStart(){return this.websocket.observable("ImportWorkbenchStartEvent").pipe(Object(o.a)(e=>e.id))}importWorkbenchProgress(){return this.websocket.observable("ImportWorkbenchProgressEvent")}importWorkbenchFinish(){return this.websocket.observable("ImportWorkbenchFinishEvent")}getTroopTemplates(){return this.websocket.observable("StandardTroopTemplateListResponse",new v).pipe(Object(n.a)(),Object(o.a)(e=>e.templates))}getTroopTemplate(e){return this.websocket.observable("StandardTroopTemplateResponse",new k(e)).pipe(Object(a.a)(t=>t.id===e),Object(n.a)())}addTroopTemplate(e,t){return this.websocket.observable("StandardTroopTemplateResponse",new C(e,t)).pipe(Object(n.a)())}editTroopTemplate(e,t,s){return this.websocket.observable("StandardTroopTemplateResponse",new U(e,t,s)).pipe(Object(a.a)(t=>t.id===e),Object(n.a)())}deleteTroopTemplate(e){this.websocket.sendData(new E(e))}exportWorkbench(){return this.websocket.observable("WorkbenchExportResponse",new R).pipe(Object(n.a)(),Object(o.a)(e=>e.export))}addCommandEvents(){return this.websocket.observable("AddCommandEvent")}multiAddCommandEvents(){return this.websocket.observable("MultiAddCommandEvent")}editCommandsEvents(){return this.websocket.observable("EditCommandEvent")}removeCommandEvents(){return this.websocket.observable("RemoveCommandEvent").pipe(Object(o.a)(e=>e.id))}simpleTimer(e){this.websocket.sendData(new m(e))}importWorkbench(e,t,s){const i=new b(e,t,s);return this.websocket.sendData(i),i.id}getCommandTypes(){return this.websocket.observable("CommandListTypesResponse",new x).pipe(Object(n.a)())}getCommandList(e,t,s,i,o,c){const m=new r(e,t,s,i,o,c);return this.websocket.observable("CommandListResponse",m).pipe(Object(a.a)(e=>e.id===m.id),Object(n.a)())}getEditTimes(e){const t=new c(e);return this.websocket.observable("CommandEditTimesResponse",t).pipe(Object(a.a)(t=>t.id===e),Object(n.a)())}addCommand(e,t,s,i,o,n,a){this.websocket.sendData(new d(e,t,s,i,o,n,a))}addCommands(e,t,s,i,o,n,a){this.websocket.sendData(new P(e,t,s,i,o,n,a))}removeCommand(e){this.websocket.sendData(new u(e))}editSource(e,t){this.websocket.sendData(new l(e,t))}editTarget(e,t){this.websocket.sendData(new p(e,t))}editSlowestUnit(e,t){this.websocket.sendData(new h(e,t))}editCommandType(e,t){this.websocket.sendData(new g(e,t))}editArrival(e,t){this.websocket.sendData(new f(e,t))}editTimer(e,t){this.websocket.sendData(new D(e,t))}editSendTime(e,t){this.websocket.sendData(new T(e,t))}editTroops(e,t,s){this.websocket.sendData(new w(e,t,s))}}return e.\u0275fac=function(t){return new(t||e)(W.cc(G.a))},e.\u0275prov=W.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},SvEG:function(e,t,s){"use strict";s.d(t,"a",(function(){return i})),s.d(t,"c",(function(){return o})),s.d(t,"b",(function(){return n}));const i={image:"graphics/icons/axe.png",name:"AXE"},o={image:"graphics/icons/sword.png",name:"SWORD"},n={image:"graphics/icons/def_fake.png",name:"FAKE_DEF"}},cJCv:function(e,t,s){"use strict";s.d(t,"a",(function(){return y}));var i=s("3Pt+"),o=s("wd/R"),n=s("XNiG"),a=s("PqYM"),r=s("1G5W"),c=s("iELJ"),m=s("SvEG"),b=s("fXoL"),d=s("5za1"),u=s("7nMs"),l=s("5eHb"),p=s("ofXK"),h=s("pu8Q"),g=s("7Ixi"),f=s("Q2Ze"),T=s("e6WT"),w=s("TN/R"),v=s("ZTz/"),k=s("jTwa"),C=s("FKr1"),U=s("bTqV"),E=s("38Pe");function R(e,t){1&e&&(b.Ub(0,"div",1),b.Ub(1,"div",2),b.Pb(2,"span"),b.Pb(3,"mat-spinner"),b.Pb(4,"span"),b.Tb(),b.Tb())}function S(e,t){1&e&&b.Pb(0,"app-village-input",23)}function N(e,t){if(1&e&&(b.Sb(0),b.Ub(1,"h3"),b.Lc(2),b.Tb(),b.Rb()),2&e){const e=b.jc(2);b.Bb(2),b.Nc("",e.form.value.from.length," D\xf6rfer als Herkunft ausgew\xe4hlt.")}}function O(e,t){if(1&e&&(b.Ub(0,"mat-option",17),b.Ub(1,"div",24),b.Ub(2,"span"),b.Lc(3),b.kc(4,"titlecase"),b.Tb(),b.Tb(),b.Tb()),2&e){const e=t.$implicit;b.pc("value",e),b.Bb(3),b.Mc(b.lc(4,2,e))}}function L(e,t){if(1&e&&(b.Ub(0,"mat-option",17),b.Pb(1,"app-unit-render",17),b.Tb()),2&e){const e=t.$implicit;b.pc("value",e),b.Bb(1),b.pc("value",e)}}function q(e,t){if(1&e&&(b.Ub(0,"mat-option",17),b.Lc(1),b.Tb()),2&e){const e=t.$implicit;b.pc("value",e.id),b.Bb(1),b.Nc(" ",e.name," ")}}function D(e,t){1&e&&b.Pb(0,"app-units-input",25)}function P(e,t){if(1&e){const e=b.Vb();b.Ub(0,"div",1),b.Ub(1,"div",3),b.Ub(2,"form",4),b.fc("ngSubmit",(function(){b.Ac(e);const t=b.jc();return t.submit(t.form.value)})),b.Ub(3,"div",5),b.Ub(4,"div",6),b.Jc(5,S,1,0,"app-village-input",7),b.Jc(6,N,3,1,"ng-container",8),b.Tb(),b.Tb(),b.Ub(7,"div",5),b.Ub(8,"div",6),b.Pb(9,"app-village-input",9),b.Tb(),b.Tb(),b.Ub(10,"div",5),b.Ub(11,"div",6),b.Ub(12,"mat-form-field"),b.Ub(13,"mat-label"),b.Lc(14,"Ankunft"),b.Tb(),b.Pb(15,"input",10),b.Pb(16,"mat-datepicker-toggle",11),b.Pb(17,"mat-datepicker",null,12),b.Tb(),b.Tb(),b.Ub(19,"div",6),b.Ub(20,"mat-form-field"),b.Ub(21,"mat-label"),b.Lc(22,"Ankunftszeit"),b.Tb(),b.Pb(23,"input",13),b.Tb(),b.Tb(),b.Ub(24,"div",6),b.Ub(25,"mat-form-field"),b.Ub(26,"mat-label"),b.Lc(27,"Timer Logik"),b.Tb(),b.Ub(28,"mat-select",14),b.Ub(29,"mat-select-trigger"),b.Lc(30),b.kc(31,"titlecase"),b.Tb(),b.Jc(32,O,5,4,"mat-option",15),b.Tb(),b.Tb(),b.Tb(),b.Tb(),b.Ub(33,"div",5),b.Ub(34,"div",6),b.Ub(35,"mat-form-field"),b.Ub(36,"mat-label"),b.Lc(37,"Langsamste Einheit"),b.Tb(),b.Ub(38,"mat-select",16),b.Ub(39,"mat-select-trigger"),b.Pb(40,"app-unit-render",17),b.Tb(),b.Jc(41,L,2,2,"mat-option",15),b.Tb(),b.Tb(),b.Tb(),b.Tb(),b.Ub(42,"div",5),b.Ub(43,"div",6),b.Ub(44,"mat-form-field"),b.Ub(45,"mat-label"),b.Lc(46,"Einheiten"),b.Tb(),b.Ub(47,"mat-select",18),b.Jc(48,q,2,2,"mat-option",15),b.Ub(49,"mat-option",19),b.Lc(50," Custom "),b.Tb(),b.Tb(),b.Tb(),b.Pb(51,"br"),b.Jc(52,D,1,0,"app-units-input",20),b.Tb(),b.Tb(),b.Ub(53,"div",5),b.Ub(54,"div",6),b.Ub(55,"mat-form-field"),b.Ub(56,"mat-label"),b.Lc(57,"Befehlstyp"),b.Tb(),b.Ub(58,"mat-select",21),b.Ub(59,"mat-option",17),b.Lc(60,"Angriff"),b.Tb(),b.Ub(61,"mat-option",17),b.Lc(62,"Unterst\xfctzung"),b.Tb(),b.Ub(63,"mat-option",17),b.Lc(64,"Fake-Unterst\xfctzung"),b.Tb(),b.Tb(),b.Tb(),b.Tb(),b.Tb(),b.Ub(65,"div",5),b.Ub(66,"div",6),b.Ub(67,"button",22),b.Lc(68," Hinzuf\xfcgen "),b.Tb(),b.Tb(),b.Tb(),b.Tb(),b.Tb(),b.Tb()}if(2&e){const e=b.xc(18),t=b.jc();b.Bb(2),b.pc("formGroup",t.form),b.Bb(3),b.pc("ngIf",!t.multiSource),b.Bb(1),b.pc("ngIf",t.multiSource),b.Bb(9),b.pc("matDatepicker",e),b.Bb(1),b.pc("for",e),b.Bb(12),b.pc("formControl",t.timerForm),b.Bb(2),b.Mc(b.lc(31,16,t.timerForm.value)),b.Bb(2),b.pc("ngForOf",t.timerLogics),b.Bb(8),b.pc("value",t.form.value.unit),b.Bb(1),b.pc("ngForOf",t.units),b.Bb(7),b.pc("ngForOf",t.templates),b.Bb(4),b.pc("ngIf","custom"===t.form.value.template),b.Bb(7),b.pc("value",t.ATTACK),b.Bb(2),b.pc("value",t.SUPPORT),b.Bb(2),b.pc("value",t.FAKE_UT),b.Bb(4),b.pc("disabled",!t.form.valid||t.disabled)}}let y=(()=>{class e{constructor(e,t,s,a,r){this.data=e,this.fb=t,this.commandService=s,this.web=a,this.toastr=r,this.unsub$=new n.b,this.ATTACK=m.a,this.SUPPORT=m.c,this.FAKE_UT=m.b,this.form=this.fb.group({from:[null],to:[null],units:{},template:[null,i.v.required],unit:["ram",i.v.required],commandType:this.ATTACK,date:o(),time:[o().format("HH:mm:ss:SSS"),i.v.pattern("^\\d{2}:\\d{2}:\\d{2}:\\d{3}$")]}),this.disabled=!1,this.loading=!1,this.timerForm=new i.e,e&&(1===e.sources.length?this.form.get("from").setValue(e.sources[0]):this.form.get("from").setValue(e.sources.map(e=>e.id)),this.form.patchValue({to:e.target,unit:e.unit,commandType:e.type,date:o(e.time),time:o(e.time).format("HH:mm:ss:SSS")}))}ngOnInit(){this.commandService.getTroopTemplates().subscribe(e=>{this.templates=e}),this.web.infoObservable.subscribe(e=>{this.units=e.units}),this.commandService.addCommandEvents().pipe(Object(r.a)(this.unsub$)).subscribe(e=>{this.toastr.success(`Von ${e.from.search} nach ${e.to.search}. Ankunft: ${e.arrivalTime.display}`,e.commandType.name,{timeOut:7e3})}),this.commandService.multiAddCommandEvents().pipe(Object(r.a)(this.unsub$)).subscribe(e=>{e.success>0&&this.toastr.success(e.success+" Befehle wurden hinzugef\xfcgt.","Scheduled",{timeOut:7e3}),e.failed>0&&this.toastr.error(e.failed+" Befehle konnten nicht hinzugef\xfcgt werden.","Fehler",{timeOut:7e3})}),this.commandService.getTimerLogic().pipe(Object(r.a)(this.unsub$)).subscribe(e=>{this.timerLogics=e.available,this.timerForm.setValue(e.timerLogic,{emitEvent:!1})}),this.timerForm.valueChanges.subscribe(e=>{this.commandService.setTimerLogic(e)})}get multiSource(){return Array.isArray(this.form.value.from)}submit(e){if(this.disabled=!0,Object(a.a)(1500).subscribe(()=>{this.disabled=!1}),-1===e.template&&null===e.units)return;const t=o(e.date.format("DD.MM.YYYY")+" "+e.time,"DD.MM.YYYY HH:mm:ss:SSS");!1===Array.isArray(e.from)?this.commandService.addCommand(e.from.id,e.to.id,e.unit,e.commandType,t.valueOf(),"custom"===e.template?void 0:e.template,"custom"===e.template?e.units:void 0):this.commandService.addCommands(e.from,e.to.id,e.unit,e.commandType,t.valueOf(),"custom"===e.template?void 0:e.template,"custom"===e.template?e.units:void 0)}tooltip(e){switch(e){case"HTTP":return"Kann Befehle mit Pflichtabstand schicken."}}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return e.\u0275fac=function(t){return new(t||e)(b.Ob(c.a,8),b.Ob(i.d),b.Ob(d.a),b.Ob(u.a),b.Ob(l.b))},e.\u0275cmp=b.Ib({type:e,selectors:[["app-command-schedule"]],decls:2,vars:2,consts:[["class","row",4,"ngIf"],[1,"row"],[1,"col-xl-12","flex-between"],[1,"col-xl-12"],[3,"formGroup","ngSubmit"],[1,"form-group","row"],[1,"col"],["label","Herkunft","formControlName","from","id","from",4,"ngIf"],[4,"ngIf"],["label","Ziel","formControlName","to","id","to",1,"full-width"],["matInput","","placeholder","Pick Date","formControlName","date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["matInput","","formControlName","time"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["id","unit","formControlName","unit"],[3,"value"],["id","template","formControlName","template"],["value","custom"],["class","full-width","id","units","formControlName","units",4,"ngIf"],["id","commandType","formControlName","commandType"],["type","submit","mat-raised-button","","color","primary",3,"disabled"],["label","Herkunft","formControlName","from","id","from"],[1,"flex-between"],["id","units","formControlName","units",1,"full-width"]],template:function(e,t){1&e&&(b.Jc(0,R,5,0,"div",0),b.Jc(1,P,69,18,"div",0)),2&e&&(b.pc("ngIf",t.loading),b.Bb(1),b.pc("ngIf",!t.loading))},directives:[p.m,h.b,i.x,i.p,i.i,g.a,i.o,i.g,f.b,f.f,T.b,i.c,w.b,w.d,f.g,w.a,v.a,i.f,v.c,p.l,k.a,C.n,U.a,E.a],pipes:[p.v],styles:[".full-width[_ngcontent-%COMP%]{width:100%}"]}),e})()}}]);