(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"38Pe":function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var o=n("fXoL"),i=n("3Pt+"),a=n("lJxs"),s=n("UXun"),c=n("ZTz/"),r=n("DNTf"),b=n("0MNC"),l=n("7nMs"),d=n("ofXK"),m=n("Q2Ze"),u=n("e6WT"),p=n("bTqV"),f=n("FKr1");function h(e,t){if(1&e&&o.Pb(0,"img",8),2&e){const e=o.jc().$implicit,t=o.jc();o.pc("src",t.imagebase+"unit/unit_"+e+".png",o.Cc)}}const g=function(e,t){return{"col-xl-12":e,pad:t}};function T(e,t){if(1&e){const e=o.Vb();o.Ub(0,"span",0),o.kc(1,"async"),o.kc(2,"async"),o.Ub(3,"mat-form-field",3),o.Ub(4,"mat-label"),o.Lc(5),o.kc(6,"titlecase"),o.Tb(),o.Ub(7,"input",4,5),o.fc("change",(function(){o.Ac(e);const n=t.$implicit,i=o.xc(8);return o.jc().input(i.value,n)})),o.Tb(),o.Ub(9,"button",6),o.fc("click",(function(){o.Ac(e);const n=t.$implicit,i=o.xc(8);return o.jc().input("alle",n),i.value="alle"})),o.Jc(10,h,1,1,"img",7),o.Tb(),o.Tb(),o.Tb()}if(2&e){const e=t.$implicit,n=o.jc();o.pc("ngClass",o.uc(10,g,n.forceVertical||!0===o.lc(1,4,n.isHandset$),!(n.forceVertical||!0===o.lc(2,6,n.isHandset$)))),o.Bb(5),o.Mc(o.lc(6,8,e)),o.Bb(2),o.pc("id","troop_input_"+e),o.Bb(3),o.pc("ngIf",n.imagebase)}}function v(e,t){if(1&e&&o.Pb(0,"img",18),2&e){const e=o.jc(3);o.pc("src",e.imagebase+"buildings/"+e.formControl.value.cataTarget+".png",o.Cc)}}function w(e,t){if(1&e&&(o.Ub(0,"mat-select-trigger"),o.Ub(1,"div",16),o.Ub(2,"span"),o.Lc(3),o.kc(4,"titlecase"),o.Tb(),o.Jc(5,v,1,1,"img",17),o.Tb(),o.Tb()),2&e){const e=o.jc(2);o.Bb(3),o.Mc(o.lc(4,2,e.formControl.value.cataTarget)),o.Bb(2),o.pc("ngIf",e.imagebase)}}function k(e,t){if(1&e&&o.Pb(0,"img",18),2&e){const e=o.jc().$implicit,t=o.jc(2);o.pc("src",t.imagebase+"buildings/"+e+".png",o.Cc)}}function U(e,t){if(1&e&&(o.Ub(0,"mat-option",19),o.Ub(1,"div",16),o.Ub(2,"span"),o.Lc(3),o.kc(4,"titlecase"),o.Tb(),o.Jc(5,k,1,1,"img",17),o.Tb(),o.Tb()),2&e){const e=t.$implicit,n=o.jc(2);o.pc("value",e),o.Bb(3),o.Mc(o.lc(4,3,e)),o.Bb(2),o.pc("ngIf",n.imagebase)}}function C(e,t){if(1&e){const e=o.Vb();o.Ub(0,"div",9),o.Ub(1,"div",10),o.Ub(2,"mat-form-field"),o.Ub(3,"mat-label"),o.Lc(4,"Katapult Ziel"),o.Tb(),o.Ub(5,"mat-select",11,12),o.fc("valueChange",(function(){o.Ac(e);const t=o.xc(6);return o.jc().input(t.value,"cataTarget")})),o.Jc(7,w,6,4,"mat-select-trigger",13),o.Ub(8,"mat-option",14),o.Lc(9,"Default"),o.Tb(),o.Jc(10,U,6,5,"mat-option",15),o.Tb(),o.Tb(),o.Tb(),o.Tb()}if(2&e){const e=o.jc();o.Bb(7),o.pc("ngIf","///DEFAULT///"!==e.formControl.value.cataTarget),o.Bb(3),o.pc("ngForOf",e.buildings)}}const L=function(e,t){return{spread:e,row:t}};let O=(()=>{class e{constructor(e,t){this.breakpointObserver=e,this.web=t,this.forceVertical=!1,this.hideCataTarget=!1,this.units=[],this.buildings=[],this.formControl=new i.e({cataTarget:"///DEFAULT///"}),this.isHandset$=this.breakpointObserver.observe(r.a).pipe(Object(a.a)(e=>e.matches),Object(s.a)()),this.propagateChange=e=>{}}ngOnInit(){this.web.infoObservable.subscribe(e=>{this.units=e.units,this.imagebase=e.imageBase,this.buildings=e.buildings}),this.units.forEach(e=>{const t={};t[e]="0",this.formControl.patchValue(t)}),this.formControl.valueChanges.subscribe(e=>{this.propagateChange(e)})}input(e,t){const n={};n[t]=e,this.formControl.setValue(Object.assign(Object.assign({},this.formControl.value),n))}get cata(){return this.formControl.value.catapult&&"0"!==this.formControl.value.catapult}writeValue(e){null==e&&(e={cataTarget:"///DEFAULT///"}),this.formControl.setValue(e),setTimeout(()=>{void 0!==this.select&&(this.select.value=e.cataTarget),this.units.forEach(t=>{const n=document.getElementById("troop_input_"+t);null!==n&&e.hasOwnProperty(t)&&(n.value=e[t])})},10)}registerOnChange(e){this.propagateChange=e}registerOnTouched(e){}setDisabledState(e){e?this.formControl.disable():this.formControl.enable()}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(b.a),o.Ob(l.a))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-units-input"]],viewQuery:function(e,t){var n;1&e&&o.Rc(c.a,!0),2&e&&o.wc(n=o.gc())&&(t.select=n.first)},inputs:{forceVertical:"forceVertical",hideCataTarget:"hideCataTarget"},features:[o.Ab([{provide:i.m,multi:!0,useExisting:Object(o.V)(()=>e)}])],decls:5,vars:10,consts:[[3,"ngClass"],[3,"ngClass",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[1,"full-width"],["matInput","","type","text",3,"id","change"],["t",""],["mat-button","","matSuffix","","mat-icon-button","",3,"click"],["class","img-fluid",3,"src",4,"ngIf"],[1,"img-fluid",3,"src"],[1,"row"],[1,"col-12"],[3,"valueChange"],["select",""],[4,"ngIf"],["value","///DEFAULT///"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-between"],["matSuffix","","class","img-fluid",3,"src",4,"ngIf"],["matSuffix","",1,"img-fluid",3,"src"],[3,"value"]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.kc(1,"async"),o.kc(2,"async"),o.Jc(3,T,11,13,"span",1),o.Tb(),o.Jc(4,C,11,2,"div",2)),2&e&&(o.pc("ngClass",o.uc(7,L,!(t.forceVertical||!0===o.lc(1,3,t.isHandset$)),t.forceVertical||!0===o.lc(2,5,t.isHandset$))),o.Bb(3),o.pc("ngForOf",t.units),o.Bb(1),o.pc("ngIf",t.cata&&!t.hideCataTarget))},directives:[d.k,d.l,d.m,m.b,m.f,u.b,p.a,m.g,c.a,f.l,c.c],pipes:[d.b,d.v],styles:[".full-width[_ngcontent-%COMP%]{width:99%}.pad[_ngcontent-%COMP%]{padding-left:6px;padding-right:6px}div.spread[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}div.spread[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:table-cell;text-align:center}"]}),e})()},"5za1":function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var o=n("lJxs"),i=n("SxV6"),a=n("pLZG");class s{constructor(e,t){this.id=Math.random(),this.max=e,this.first=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.CommandListRequest"}}class c{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.GetCommandEditTimesRequest"}}class r{constructor(e){this.time=e}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.SimpleTimerRequest"}}class b{constructor(e,t,n){this.id=Math.random(),this.plan=e,this.cataTarget=t,this.ms=n}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.ImportWorkbenchRequest"}}class l{constructor(e,t,n,o,i,a,s){this.source=e,this.target=t,this.slowestUnit=n,this.commandType=o,this.arrival=i,this.template=a,this.troops=s}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.AddCommandRequest"}}class d{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.DeleteCommandRequest"}}class m{constructor(e,t){this.id=e,this.source=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandSourceRequest"}}class u{constructor(e,t){this.id=e,this.target=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandTargetRequest"}}class p{constructor(e,t){this.id=e,this.slowestUnit=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditSlowestUnitRequest"}}class f{constructor(e,t){this.id=e,this.type=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandTypeRequest"}}class h{constructor(e,t){this.id=e,this.arrivalTime=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandArrivalTimeRequest"}}class g{constructor(e,t){this.id=e,this.sendTime=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandSendTimeRequest"}}class T{constructor(e,t,n){this.id=e,this.template=t,this.troops=n}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandTroopsRequest"}}class v{getName(){return"GetStandardTroopTemplateRequest"}}class w{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.unitengine.ws.packet.incoming.GetStandardTroopTemplateRequest"}}class k{constructor(e,t){this.name=e,this.troops=t}getName(){return"io.robertengel.dsbot.unitengine.ws.packet.incoming.AddStandardTroopTemplateRequest"}}class U{constructor(e,t,n){this.id=e,this.name=t,this.troops=n}getName(){return"io.robertengel.dsbot.unitengine.ws.packet.incoming.EditStandardTroopTemplateRequest"}}class C{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.unitengine.ws.packet.incoming.DeleteStandardTroopTemplateRequest"}}class L{getName(){return"WorkbenchExportRequest"}}class O{getName(){return"GetTimerLogicRequest"}}class E{constructor(e){this.timerLogic=e}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.SetTimerLogicRequest"}}class y{constructor(e,t,n,o,i){this.village=e,this.troops=t,this.second=n,this.msStart=o,this.msEnd=i}getName(){return"io.robertengel.dsbot.feature.tabber.ws.packet.incoming.CancelTabberRequest"}}class R{getName(){return"GetPlannedCancelTabsRequest"}}class S{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.feature.tabber.ws.packet.incoming.CancelPlannedTabRequest"}}class j{constructor(e,t){this.id=e,this.timerLogic=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandTimerRequest"}}class I{constructor(e,t,n,o,i,a,s){this.sources=e,this.target=t,this.slowestUnit=n,this.commandType=o,this.arrival=i,this.template=a,this.troops=s}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.MultiAddCommandRequest"}}class x{constructor(e,t,n){this.ids=e,this.min=t,this.max=n}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandMillisRandomRequest"}}class B{constructor(e,t){this.ids=e,this.ms=t}getName(){return"io.robertengel.dsbot.feature.command.ws.packet.incoming.EditCommandMillisSetRequest"}}var N=n("fXoL"),D=n("7nMs");let P=(()=>{class e{constructor(e){this.websocket=e}randomizeMillis(e,t,n){this.websocket.sendData(new x(e,t,n))}setMillis(e,t){this.websocket.sendData(new B(e,t))}setOverviewRemove(e){localStorage.setItem("tw.interface.command.overview.remove",String(e))}shouldOverviewRemove(){return"true"===localStorage.getItem("tw.interface.command.overview.remove")}cancelTab(e,t,n,o,i){this.websocket.sendData(new y(e,t,n,o,i))}getCancelTabs(){return this.websocket.observable("ListPlannedCancelTabsResponse",new R)}cancelPlannedCancelTab(e){this.websocket.sendData(new S(e))}addedPlansEvents(){return this.websocket.observable("AddedPlannedTabPacket")}cancelPlansEvents(){return this.websocket.observable("CanceledPlannedTabPacket").pipe(Object(o.a)(e=>e.id))}getTimerLogic(){return this.websocket.observable("TimerLogicResponse",new O)}setTimerLogic(e){this.websocket.sendData(new E(e))}importWorkbenchStart(){return this.websocket.observable("ImportWorkbenchStartEvent").pipe(Object(o.a)(e=>e.id))}importWorkbenchProgress(){return this.websocket.observable("ImportWorkbenchProgressEvent")}importWorkbenchFinish(){return this.websocket.observable("ImportWorkbenchFinishEvent")}getTroopTemplates(){return this.websocket.observable("StandardTroopTemplateListResponse",new v).pipe(Object(i.a)(),Object(o.a)(e=>e.templates))}getTroopTemplate(e){return this.websocket.observable("StandardTroopTemplateResponse",new w(e)).pipe(Object(a.a)(t=>t.id===e),Object(i.a)())}addTroopTemplate(e,t){return this.websocket.observable("StandardTroopTemplateResponse",new k(e,t)).pipe(Object(i.a)())}editTroopTemplate(e,t,n){return this.websocket.observable("StandardTroopTemplateResponse",new U(e,t,n)).pipe(Object(a.a)(t=>t.id===e),Object(i.a)())}deleteTroopTemplate(e){this.websocket.sendData(new C(e))}exportWorkbench(){return this.websocket.observable("WorkbenchExportResponse",new L).pipe(Object(i.a)(),Object(o.a)(e=>e.export))}addCommandEvents(){return this.websocket.observable("AddCommandEvent")}multiAddCommandEvents(){return this.websocket.observable("MultiAddCommandEvent")}editCommandsEvents(){return this.websocket.observable("EditCommandEvent")}removeCommandEvents(){return this.websocket.observable("RemoveCommandEvent").pipe(Object(o.a)(e=>e.id))}simpleTimer(e){this.websocket.sendData(new r(e))}importWorkbench(e,t,n){const o=new b(e,t,n);return this.websocket.sendData(o),o.id}getCommandList(e,t){const n=new s(e,t);return this.websocket.observable("CommandListResponse",n).pipe(Object(a.a)(e=>e.id===n.id),Object(i.a)())}getEditTimes(e){const t=new c(e);return this.websocket.observable("CommandEditTimesResponse",t).pipe(Object(a.a)(t=>t.id===e),Object(i.a)())}addCommand(e,t,n,o,i,a,s){this.websocket.sendData(new l(e,t,n,o,i,a,s))}addCommands(e,t,n,o,i,a,s){this.websocket.sendData(new I(e,t,n,o,i,a,s))}removeCommand(e){this.websocket.sendData(new d(e))}editSource(e,t){this.websocket.sendData(new m(e,t))}editTarget(e,t){this.websocket.sendData(new u(e,t))}editSlowestUnit(e,t){this.websocket.sendData(new p(e,t))}editCommandType(e,t){this.websocket.sendData(new f(e,t))}editArrival(e,t){this.websocket.sendData(new h(e,t))}editTimer(e,t){this.websocket.sendData(new j(e,t))}editSendTime(e,t){this.websocket.sendData(new g(e,t))}editTroops(e,t,n){this.websocket.sendData(new T(e,t,n))}}return e.\u0275fac=function(t){return new(t||e)(N.cc(D.a))},e.\u0275prov=N.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},DNTf:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o="(max-width: 1100.99px)"},yPrK:function(e,t,n){"use strict";n.r(t),n.d(t,"SettingsModule",(function(){return se}));var o=n("ofXK"),i=n("tyNb"),a=n("fXoL");let s=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Ib({type:e,selectors:[["app-settings"]],decls:1,vars:0,template:function(e,t){1&e&&a.Pb(0,"router-outlet")},directives:[i.f],encapsulation:2}),e})();var c=n("OaSA"),r=n("3Pt+"),b=n("5za1"),l=n("PDjf"),d=n("Q2Ze"),m=n("e6WT"),u=n("8Qe2"),p=n("38Pe"),f=n("bTqV"),h=n("k2HR");function g(e,t){if(1&e){const e=a.Vb();a.Ub(0,"button",22),a.fc("click",(function(){a.Ac(e);const t=a.jc();return t.edit(t.form.value)})),a.Lc(1," Bearbeiten. "),a.Tb()}if(2&e){const e=a.jc();a.pc("disabled",!e.form.valid)}}function T(e,t){if(1&e){const e=a.Vb();a.Ub(0,"button",23),a.fc("click",(function(){return a.Ac(e),a.jc().delete()})),a.Lc(1," L\xf6schen. "),a.Tb()}}function v(e,t){1&e&&(a.Ub(0,"th",24),a.Lc(1," Name"),a.Tb())}function w(e,t){if(1&e&&(a.Ub(0,"td",25),a.Lc(1),a.Tb()),2&e){const e=t.$implicit;a.Bb(1),a.Nc(" ",e.name," ")}}function k(e,t){1&e&&(a.Ub(0,"th",24),a.Lc(1," Einheiten"),a.Tb())}function U(e,t){if(1&e&&(a.Ub(0,"td",25),a.Pb(1,"app-units-render",26),a.Tb()),2&e){const e=t.$implicit;a.Bb(1),a.pc("value",e.troops)}}function C(e,t){1&e&&a.Pb(0,"tr",27)}function L(e,t){if(1&e){const e=a.Vb();a.Ub(0,"tr",28),a.fc("click",(function(){a.Ac(e);const n=t.$implicit;return a.jc().select(n)})),a.Tb()}}let O=(()=>{class e{constructor(e,t){this.command=e,this.fb=t,this.dataSource=new c.k,this.columnsToDisplay=["name","troops"],this.form=this.fb.group({name:["",r.v.required],troops:[{},r.v.required]})}ngOnInit(){this.command.getTroopTemplates().subscribe(e=>{this.dataSource.data=e})}add(e){this.command.addTroopTemplate(e.name,e.troops).subscribe(e=>{this.dataSource.data=[...this.dataSource.data,e]})}edit(e){this.command.editTroopTemplate(this.selected.id,e.name,e.troops).subscribe(e=>{this.dataSource.data=this.dataSource.data.filter((e,t,n)=>e.id!==this.selected.id),this.dataSource.data=[...this.dataSource.data,e]})}delete(){this.command.deleteTroopTemplate(this.selected.id),this.dataSource.data=this.dataSource.data.filter((e,t,n)=>e.id!==this.selected.id),this.selected=void 0}select(e){this.selected=e,this.form.setValue({name:e.name,troops:e.troops})}}return e.\u0275fac=function(t){return new(t||e)(a.Ob(b.a),a.Ob(r.d))},e.\u0275cmp=a.Ib({type:e,selectors:[["app-troop-template"]],decls:33,vars:7,consts:[[1,"row"],[1,"col-md-7"],[3,"formGroup"],[1,"form-group","row"],["for","name",1,"label","col-sm-3","col-form-label"],[1,"col-sm-9"],[1,"example-full-width"],["id","name","matInput","","placeholder","Name","formControlName","name","matBadge","i",1,"example-full-width"],["for","troops",1,"label","col-sm-3","col-form-label"],["forceVertical","true","id","troops","formControlName","troops"],[1,"offset-sm-3","col-sm-9"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click"],["mat-raised-button","","color","info",3,"disabled","click",4,"ngIf"],["mat-raised-button","","color","danger",3,"click",4,"ngIf"],[1,"col-md-5",2,"max-height","650px"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","troops"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","style","cursor: pointer",3,"click",4,"matRowDef","matRowDefColumns"],["mat-raised-button","","color","info",3,"disabled","click"],["mat-raised-button","","color","danger",3,"click"],["mat-header-cell",""],["mat-cell",""],[3,"value"],["mat-header-row",""],["mat-row","",2,"cursor","pointer",3,"click"]],template:function(e,t){1&e&&(a.Ub(0,"div",0),a.Ub(1,"div",1),a.Ub(2,"mat-card"),a.Ub(3,"mat-card-content"),a.Ub(4,"form",2),a.Ub(5,"div",3),a.Ub(6,"label",4),a.Lc(7,"Name"),a.Tb(),a.Ub(8,"div",5),a.Ub(9,"mat-form-field",6),a.Pb(10,"input",7),a.Tb(),a.Tb(),a.Tb(),a.Ub(11,"div",3),a.Ub(12,"label",8),a.Lc(13,"Einheiten"),a.Tb(),a.Ub(14,"div",5),a.Pb(15,"app-units-input",9),a.Tb(),a.Tb(),a.Ub(16,"div",3),a.Ub(17,"div",10),a.Ub(18,"button",11),a.fc("click",(function(){return t.add(t.form.value)})),a.Lc(19," Hinzuf\xfcgen. "),a.Tb(),a.Jc(20,g,2,1,"button",12),a.Jc(21,T,2,0,"button",13),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(22,"div",14),a.Ub(23,"mat-card"),a.Ub(24,"table",15),a.Sb(25,16),a.Jc(26,v,2,0,"th",17),a.Jc(27,w,2,1,"td",18),a.Rb(),a.Sb(28,19),a.Jc(29,k,2,0,"th",17),a.Jc(30,U,2,1,"td",18),a.Rb(),a.Jc(31,C,1,0,"tr",20),a.Jc(32,L,1,0,"tr",21),a.Tb(),a.Tb(),a.Tb(),a.Tb()),2&e&&(a.Bb(4),a.pc("formGroup",t.form),a.Bb(14),a.pc("disabled",!t.form.valid),a.Bb(2),a.pc("ngIf",t.selected),a.Bb(1),a.pc("ngIf",t.selected),a.Bb(3),a.pc("dataSource",t.dataSource),a.Bb(7),a.pc("matHeaderRowDef",t.columnsToDisplay),a.Bb(1),a.pc("matRowDefColumns",t.columnsToDisplay))},directives:[l.a,l.c,r.x,r.p,r.i,d.b,m.b,r.c,r.o,r.g,u.a,p.a,f.a,o.m,c.j,c.c,c.e,c.b,c.g,c.i,c.d,c.a,h.a,c.f,c.h],styles:["button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-left:10px}"]}),e})();var E=n("XNiG"),y=n("1G5W");class R{getName(){return"GetPossibleWebhooks"}}var S=n("lJxs"),j=n("SxV6");class I{getName(){return"GetSetupWebhooks"}}class x{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.discord.webhook.ws.packet.incoming.DeleteWebhookRequest"}}class B{constructor(e,t,n,o){this.ordinal=e,this.template=t,this.username=n,this.url=o}getName(){return"io.robertengel.dsbot.discord.webhook.ws.packet.incoming.AddWebhookRequest"}}var N=n("7nMs");let D=(()=>{class e{constructor(e){this.web=e}addEvents(){return this.web.observable("WebhookAddedEvent")}deleteEvents(){return this.web.observable("WebhookDeletedEvent").pipe(Object(S.a)(e=>e.id))}getPossible(){return this.web.observable("PossibleWebhooksResponse",new R).pipe(Object(j.a)())}getSetup(){return this.web.observable("SetupWebhooksResponse",new I).pipe(Object(j.a)())}delete(e){this.web.sendData(new x(e))}add(e,t,n,o){this.web.sendData(new B(e,t,n,o))}}return e.\u0275fac=function(t){return new(t||e)(a.cc(N.a))},e.\u0275prov=a.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var P=n("ZTz/"),q=n("FKr1"),V=n("MutI");function $(e,t){if(1&e&&(a.Ub(0,"mat-option",19),a.Lc(1),a.Tb()),2&e){const e=t.$implicit;a.pc("value",e),a.Bb(1),a.Mc(e.name)}}function J(e,t){if(1&e&&(a.Sb(0),a.Lc(1),a.Rb()),2&e){const e=t.$implicit;a.Bb(1),a.Oc(" $","{","",e,"} ")}}function A(e,t){if(1&e&&(a.Ub(0,"mat-hint"),a.Lc(1," Variablen: "),a.Jc(2,J,2,2,"ng-container",20),a.Lc(3),a.Tb()),2&e){const e=a.jc();a.Bb(2),a.pc("ngForOf",e.selected.fields),a.Bb(1),a.Oc(" $","{","world} $","{","account} ")}}function M(e,t){if(1&e){const e=a.Vb();a.Ub(0,"button",21),a.fc("click",(function(){a.Ac(e);const t=a.jc();return t.delete(t.editEntity.id)})),a.Lc(1," L\xf6schen "),a.Tb()}}function F(e,t){if(1&e){const e=a.Vb();a.Ub(0,"a",23),a.fc("click",(function(){a.Ac(e);const n=t.$implicit;return a.jc(2).edit(n)})),a.Ub(1,"span",24),a.Lc(2),a.Tb(),a.Ub(3,"span",24),a.Lc(4),a.Tb(),a.Tb()}if(2&e){const e=t.$implicit;a.Bb(2),a.Mc(e.webhook),a.Bb(2),a.Mc(e.template)}}function W(e,t){if(1&e&&(a.Ub(0,"mat-card"),a.Ub(1,"mat-nav-list"),a.Jc(2,F,5,2,"a",22),a.Tb(),a.Tb()),2&e){const e=a.jc();a.Bb(2),a.pc("ngForOf",e.setup)}}let G=(()=>{class e{constructor(e,t){this.discord=e,this.fb=t,this.unsub$=new E.b,this.possible=[],this.setup=[],this.form=this.fb.group({ordinal:["",r.v.required],template:["",r.v.required],username:["",r.v.required],url:["",r.v.required]})}ngOnInit(){this.form.get("ordinal").valueChanges.subscribe(e=>{this.selected=e,this.form.patchValue({username:e.username,template:e.template},{emitEvent:!1})}),this.discord.getPossible().pipe(Object(y.a)(this.unsub$)).subscribe(e=>{this.possible=e}),this.discord.getSetup().pipe(Object(y.a)(this.unsub$)).subscribe(e=>{this.setup=e}),this.discord.addEvents().pipe(Object(y.a)(this.unsub$)).subscribe(e=>{this.setup=[...this.setup,e]}),this.discord.deleteEvents().pipe(Object(y.a)(this.unsub$)).subscribe(e=>{this.setup=this.setup.filter(t=>t.id!==e)})}delete(e){this.discord.delete(e),this.editEntity=void 0}submit(e){this.discord.add(e.ordinal.ordinal,e.template,e.username,e.url)}edit(e){let t;this.editEntity=e,this.possible.forEach(n=>{n.name===e.webhook&&(t=n)}),this.form.setValue({ordinal:t,template:e.template,username:e.username,url:e.url},{emitEvent:!1})}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return e.\u0275fac=function(t){return new(t||e)(a.Ob(D),a.Ob(r.d))},e.\u0275cmp=a.Ib({type:e,selectors:[["app-discord-webhooks"]],decls:50,vars:7,consts:[[1,"row"],[1,"col-xl-6"],[3,"formGroup"],[1,"form-group","row"],["for","event",1,"label","col-sm-3","col-form-label"],[1,"col-sm-9"],[1,"w-100"],["id","event","formControlName","ordinal"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["for","template",1,"label","col-sm-3","col-form-label"],["id","template","matInput","","placeholder","Template","formControlName","template","matBadge","i"],["for","username",1,"label","col-sm-3","col-form-label"],["id","username","matInput","","placeholder","Username","formControlName","username"],["for","url",1,"label","col-sm-3","col-form-label"],["type","url","id","url","matInput","","placeholder","https://discordapp.com/api/webhooks/...","formControlName","url"],[1,"offset-sm-3","col-sm-9"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click"],["class","ml-2","mat-raised-button","","color","warn",3,"click",4,"ngIf"],[3,"value"],[4,"ngFor","ngForOf"],["mat-raised-button","","color","warn",1,"ml-2",3,"click"],["mat-list-item","",3,"click",4,"ngFor","ngForOf"],["mat-list-item","",3,"click"],["mat-line",""]],template:function(e,t){1&e&&(a.Ub(0,"div",0),a.Ub(1,"div",1),a.Ub(2,"mat-card"),a.Ub(3,"mat-card-content"),a.Ub(4,"form",2),a.Ub(5,"div",3),a.Ub(6,"label",4),a.Lc(7,"Event"),a.Tb(),a.Ub(8,"div",5),a.Ub(9,"mat-form-field",6),a.Ub(10,"mat-label"),a.Lc(11,"Event"),a.Tb(),a.Ub(12,"mat-select",7),a.Jc(13,$,2,2,"mat-option",8),a.Tb(),a.Jc(14,A,4,3,"mat-hint",9),a.Tb(),a.Tb(),a.Tb(),a.Ub(15,"div",3),a.Ub(16,"label",10),a.Lc(17,"Template"),a.Tb(),a.Ub(18,"div",5),a.Ub(19,"mat-form-field",6),a.Pb(20,"input",11),a.Ub(21,"mat-hint"),a.Lc(22," Nachricht die bei ausgew\xe4hltem Event gesendet werden soll."),a.Pb(23,"br"),a.Lc(24," Variablen k\xf6nnen so eingesetzt werden: "),a.Ub(25,"i"),a.Lc(26),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(27,"div",3),a.Ub(28,"label",12),a.Lc(29,"Username"),a.Tb(),a.Ub(30,"div",5),a.Ub(31,"mat-form-field",6),a.Pb(32,"input",13),a.Ub(33,"mat-hint"),a.Lc(34,"Nutzername unter welchem die Nachricht gesendet wird."),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(35,"div",3),a.Ub(36,"label",14),a.Lc(37,"URL"),a.Tb(),a.Ub(38,"div",5),a.Ub(39,"mat-form-field",6),a.Pb(40,"input",15),a.Ub(41,"mat-hint"),a.Lc(42,"Discord-Webhook URL"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(43,"div",3),a.Ub(44,"div",16),a.Ub(45,"button",17),a.fc("click",(function(){return t.submit(t.form.value)})),a.Lc(46," Hinzuf\xfcgen. "),a.Tb(),a.Jc(47,M,2,0,"button",18),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(48,"div",1),a.Jc(49,W,3,1,"mat-card",9),a.Tb(),a.Tb()),2&e&&(a.Bb(4),a.pc("formGroup",t.form),a.Bb(9),a.pc("ngForOf",t.possible),a.Bb(1),a.pc("ngIf",t.selected),a.Bb(12),a.Nc("$","{","variablenname}"),a.Bb(19),a.pc("disabled",!t.form.valid),a.Bb(2),a.pc("ngIf",t.editEntity),a.Bb(2),a.pc("ngIf",t.setup.length>0))},directives:[l.a,l.c,r.x,r.p,r.i,d.b,d.f,P.a,r.o,r.g,o.l,o.m,m.b,r.c,u.a,d.e,f.a,q.l,V.e,V.b,q.j],styles:[""]}),e})();var K=n("ZFy/"),_=n("Tr4x"),H=n("NFeN");function z(e,t){if(1&e){const e=a.Vb();a.Ub(0,"button",18),a.fc("click",(function(){return a.Ac(e),a.jc(2).refreshKey()})),a.Ub(1,"mat-icon"),a.Lc(2,"refresh"),a.Tb(),a.Tb()}}function Z(e,t){1&e&&(a.Sb(0),a.Lc(1," Bot kann von au\xdfen gesteuert werden. "),a.Rb())}function X(e,t){1&e&&(a.Sb(0),a.Lc(1," Bot kann nicht von au\xdfen gesteuert werden. "),a.Rb())}function Q(e,t){if(1&e){const e=a.Vb();a.Ub(0,"button",19),a.fc("click",(function(){return a.Ac(e),a.jc(2).closeExternal()})),a.Lc(1," Schlie\xdfen "),a.Tb()}}function Y(e,t){if(1&e){const e=a.Vb();a.Ub(0,"button",10),a.fc("click",(function(){return a.Ac(e),a.jc(2).openExternal()})),a.Lc(1," \xd6ffnen "),a.Tb()}}function ee(e,t){if(1&e&&(a.Ub(0,"div",2),a.Ub(1,"mat-card"),a.Ub(2,"mat-card-title"),a.Lc(3," Erlauben den Bot von extern zu steuern "),a.Tb(),a.Ub(4,"mat-card-content"),a.Ub(5,"div",0),a.Ub(6,"div",11),a.Ub(7,"mat-form-field",4),a.Ub(8,"mat-label"),a.Lc(9,"Token"),a.Tb(),a.Pb(10,"input",12),a.Jc(11,z,3,0,"button",13),a.Ub(12,"button",14),a.Ub(13,"mat-icon"),a.Lc(14,"content_copy"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(15,"div",0),a.Ub(16,"div",3),a.Jc(17,Z,2,0,"ng-container",15),a.Jc(18,X,2,0,"ng-container",15),a.Tb(),a.Ub(19,"div",6),a.Jc(20,Q,2,0,"button",16),a.Jc(21,Y,2,0,"button",17),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb()),2&e){const e=a.jc();a.Bb(10),a.pc("value",e.key),a.Bb(1),a.pc("ngIf",!e.open),a.Bb(1),a.pc("cdkCopyToClipboard",e.key),a.Bb(5),a.pc("ngIf",e.open),a.Bb(1),a.pc("ngIf",!e.open),a.Bb(2),a.pc("ngIf",e.open),a.Bb(1),a.pc("ngIf",!e.open)}}let te=(()=>{class e{constructor(e){this.web=e,this.unsub$=new E.b,this.control=new r.e,this.open=!1}ngOnInit(){this.web.isOpen(this.unsub$).subscribe(e=>{this.open=e}),this.web.getKey(this.unsub$).subscribe(e=>{this.key=e});const e=localStorage.getItem("tw.token");null!=e&&this.control.setValue(e)}refreshKey(){this.web.refreshKey()}valid(){var e;return null===(e=this.control.value)||void 0===e?void 0:e.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)}connectExternal(e){this.web.connectExternal(e)}connectLocal(){this.web.connectLocal()}openExternal(){this.web.open()}closeExternal(){this.web.close()}get connected(){return this.web.isConnected()}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return e.\u0275fac=function(t){return new(t||e)(a.Ob(N.a))},e.\u0275cmp=a.Ib({type:e,selectors:[["app-bot-ip"]],decls:22,vars:5,consts:[[1,"row"],["class","col-xl-4",4,"ngIf"],[1,"col-xl-4"],[1,"col-md-9"],[1,"w-100"],["matInput","",3,"formControl"],[1,"col-xm-3"],[1,"row","mb-1"],[1,"col-md-12"],["mat-raised-button","","color","primary",3,"disabled","click"],["mat-raised-button","","color","primary",3,"click"],[1,"col-xl-12"],["matInput","","type","text","readonly","",3,"value"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Refresh","matTooltip","Neu generieren",3,"click",4,"ngIf"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Copy","matTooltip","Kopieren",3,"cdkCopyToClipboard"],[4,"ngIf"],["mat-raised-button","","color","warn",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Refresh","matTooltip","Neu generieren",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(e,t){1&e&&(a.Ub(0,"div",0),a.Jc(1,ee,22,7,"div",1),a.Ub(2,"div",2),a.Ub(3,"mat-card"),a.Ub(4,"mat-card-title"),a.Lc(5," Einen Bot extern steuern "),a.Tb(),a.Ub(6,"mat-card-content"),a.Ub(7,"div",0),a.Ub(8,"div",3),a.Ub(9,"mat-form-field",4),a.Ub(10,"mat-label"),a.Lc(11,"Token"),a.Tb(),a.Pb(12,"input",5),a.Tb(),a.Tb(),a.Ub(13,"div",6),a.Ub(14,"div",7),a.Ub(15,"div",8),a.Ub(16,"button",9),a.fc("click",(function(){return t.connectExternal(t.control.value)})),a.Lc(17," Verbinden "),a.Tb(),a.Tb(),a.Tb(),a.Ub(18,"div",0),a.Ub(19,"div",8),a.Ub(20,"button",10),a.fc("click",(function(){return t.connectLocal()})),a.Lc(21," Lokal Verbinden "),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb()),2&e&&(a.Bb(1),a.pc("ngIf",t.connected),a.Bb(1),a.Gb("offset-xl-4",!t.connected),a.Bb(10),a.pc("formControl",t.control),a.Bb(4),a.pc("disabled",!t.valid()))},directives:[o.m,l.a,l.h,l.c,d.b,d.f,m.b,r.c,r.o,r.f,f.a,d.g,K.a,_.a,H.a],styles:[""]}),e})();var ne=n("n2/Z");const oe=[{path:"",component:s,children:[{path:"discord",component:G,canActivate:[ne.a]},{path:"troops",component:O,canActivate:[ne.a]},{path:"ip",component:te}]}];let ie=(()=>{class e{}return e.\u0275mod=a.Mb({type:e}),e.\u0275inj=a.Lb({factory:function(t){return new(t||e)},imports:[[i.e.forChild(oe)],i.e]}),e})();var ae=n("BLWB");let se=(()=>{class e{}return e.\u0275mod=a.Mb({type:e}),e.\u0275inj=a.Lb({factory:function(t){return new(t||e)},imports:[[o.c,ie,f.b,ae.a,l.f,c.l,r.t,d.d,m.c,u.b,P.b,V.c,H.b,_.c,K.b]]}),e})()}}]);