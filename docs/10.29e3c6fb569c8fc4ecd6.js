(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"38Pe":function(e,t,i){"use strict";i.d(t,"a",(function(){return O}));var a=i("fXoL"),n=i("3Pt+"),r=i("lJxs"),s=i("UXun"),o=i("ZTz/"),c=i("DNTf"),l=i("0MNC"),b=i("7nMs"),u=i("ofXK"),d=i("Q2Ze"),m=i("e6WT"),f=i("bTqV"),p=i("FKr1");function v(e,t){if(1&e&&a.Pb(0,"img",8),2&e){const e=a.jc().$implicit,t=a.jc();a.pc("src",t.imagebase+"unit/unit_"+e+".png",a.Cc)}}const h=function(e,t){return{"col-xl-12":e,pad:t}};function g(e,t){if(1&e){const e=a.Vb();a.Ub(0,"span",0),a.kc(1,"async"),a.kc(2,"async"),a.Ub(3,"mat-form-field",3),a.Ub(4,"mat-label"),a.Lc(5),a.kc(6,"titlecase"),a.Tb(),a.Ub(7,"input",4,5),a.fc("change",(function(){a.Ac(e);const i=t.$implicit,n=a.xc(8);return a.jc().input(n.value,i)})),a.Tb(),a.Ub(9,"button",6),a.fc("click",(function(){a.Ac(e);const i=t.$implicit,n=a.xc(8);return a.jc().input("alle",i),n.value="alle"})),a.Jc(10,v,1,1,"img",7),a.Tb(),a.Tb(),a.Tb()}if(2&e){const e=t.$implicit,i=a.jc();a.pc("ngClass",a.uc(10,h,i.forceVertical||!0===a.lc(1,4,i.isHandset$),!(i.forceVertical||!0===a.lc(2,6,i.isHandset$)))),a.Bb(5),a.Mc(a.lc(6,8,e)),a.Bb(2),a.pc("id","troop_input_"+e),a.Bb(3),a.pc("ngIf",i.imagebase)}}function T(e,t){if(1&e&&a.Pb(0,"img",18),2&e){const e=a.jc(3);a.pc("src",e.imagebase+"buildings/"+e.formControl.value.cataTarget+".png",a.Cc)}}function U(e,t){if(1&e&&(a.Ub(0,"mat-select-trigger"),a.Ub(1,"div",16),a.Ub(2,"span"),a.Lc(3),a.kc(4,"titlecase"),a.Tb(),a.Jc(5,T,1,1,"img",17),a.Tb(),a.Tb()),2&e){const e=a.jc(2);a.Bb(3),a.Mc(a.lc(4,2,e.formControl.value.cataTarget)),a.Bb(2),a.pc("ngIf",e.imagebase)}}function w(e,t){if(1&e&&a.Pb(0,"img",18),2&e){const e=a.jc().$implicit,t=a.jc(2);a.pc("src",t.imagebase+"buildings/"+e+".png",a.Cc)}}function k(e,t){if(1&e&&(a.Ub(0,"mat-option",19),a.Ub(1,"div",16),a.Ub(2,"span"),a.Lc(3),a.kc(4,"titlecase"),a.Tb(),a.Jc(5,w,1,1,"img",17),a.Tb(),a.Tb()),2&e){const e=t.$implicit,i=a.jc(2);a.pc("value",e),a.Bb(3),a.Mc(a.lc(4,3,e)),a.Bb(2),a.pc("ngIf",i.imagebase)}}function x(e,t){if(1&e){const e=a.Vb();a.Ub(0,"div",9),a.Ub(1,"div",10),a.Ub(2,"mat-form-field"),a.Ub(3,"mat-label"),a.Lc(4,"Katapult Ziel"),a.Tb(),a.Ub(5,"mat-select",11,12),a.fc("valueChange",(function(){a.Ac(e);const t=a.xc(6);return a.jc().input(t.value,"cataTarget")})),a.Jc(7,U,6,4,"mat-select-trigger",13),a.Ub(8,"mat-option",14),a.Lc(9,"Default"),a.Tb(),a.Jc(10,k,6,5,"mat-option",15),a.Tb(),a.Tb(),a.Tb(),a.Tb()}if(2&e){const e=a.jc();a.Bb(7),a.pc("ngIf","///DEFAULT///"!==e.formControl.value.cataTarget),a.Bb(3),a.pc("ngForOf",e.buildings)}}const C=function(e,t){return{spread:e,row:t}};let O=(()=>{class e{constructor(e,t){this.breakpointObserver=e,this.web=t,this.forceVertical=!1,this.hideCataTarget=!1,this.units=[],this.buildings=[],this.formControl=new n.e({cataTarget:"///DEFAULT///"}),this.isHandset$=this.breakpointObserver.observe(c.a).pipe(Object(r.a)(e=>e.matches),Object(s.a)()),this.propagateChange=e=>{}}ngOnInit(){this.web.infoObservable.subscribe(e=>{this.units=e.units,this.imagebase=e.imageBase,this.buildings=e.buildings}),this.units.forEach(e=>{const t={};t[e]="0",this.formControl.patchValue(t)}),this.formControl.valueChanges.subscribe(e=>{this.propagateChange(e)})}input(e,t){const i={};i[t]=e,this.formControl.setValue(Object.assign(Object.assign({},this.formControl.value),i))}get cata(){return this.formControl.value.catapult&&"0"!==this.formControl.value.catapult}writeValue(e){null==e&&(e={cataTarget:"///DEFAULT///"}),this.formControl.setValue(e),setTimeout(()=>{void 0!==this.select&&(this.select.value=e.cataTarget),this.units.forEach(t=>{const i=document.getElementById("troop_input_"+t);null!==i&&e.hasOwnProperty(t)&&(i.value=e[t])})},10)}registerOnChange(e){this.propagateChange=e}registerOnTouched(e){}setDisabledState(e){e?this.formControl.disable():this.formControl.enable()}}return e.\u0275fac=function(t){return new(t||e)(a.Ob(l.a),a.Ob(b.a))},e.\u0275cmp=a.Ib({type:e,selectors:[["app-units-input"]],viewQuery:function(e,t){var i;1&e&&a.Rc(o.a,!0),2&e&&a.wc(i=a.gc())&&(t.select=i.first)},inputs:{forceVertical:"forceVertical",hideCataTarget:"hideCataTarget"},features:[a.Ab([{provide:n.m,multi:!0,useExisting:Object(a.V)(()=>e)}])],decls:5,vars:10,consts:[[3,"ngClass"],[3,"ngClass",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[1,"full-width"],["matInput","","type","text",3,"id","change"],["t",""],["mat-button","","matSuffix","","mat-icon-button","",3,"click"],["class","img-fluid",3,"src",4,"ngIf"],[1,"img-fluid",3,"src"],[1,"row"],[1,"col-12"],[3,"valueChange"],["select",""],[4,"ngIf"],["value","///DEFAULT///"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-between"],["matSuffix","","class","img-fluid",3,"src",4,"ngIf"],["matSuffix","",1,"img-fluid",3,"src"],[3,"value"]],template:function(e,t){1&e&&(a.Ub(0,"div",0),a.kc(1,"async"),a.kc(2,"async"),a.Jc(3,g,11,13,"span",1),a.Tb(),a.Jc(4,x,11,2,"div",2)),2&e&&(a.pc("ngClass",a.uc(7,C,!(t.forceVertical||!0===a.lc(1,3,t.isHandset$)),t.forceVertical||!0===a.lc(2,5,t.isHandset$))),a.Bb(3),a.pc("ngForOf",t.units),a.Bb(1),a.pc("ngIf",t.cata&&!t.hideCataTarget))},directives:[u.k,u.l,u.m,d.b,d.f,m.b,f.a,d.g,o.a,p.n,o.c],pipes:[u.b,u.v],styles:[".full-width[_ngcontent-%COMP%]{width:99%}.pad[_ngcontent-%COMP%]{padding-left:6px;padding-right:6px}div.spread[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}div.spread[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:table-cell;text-align:center}"]}),e})()},"7Ixi":function(e,t,i){"use strict";i.d(t,"a",(function(){return g}));var a=i("fXoL"),n=i("3Pt+"),r=i("LRne"),s=i("Kj3r"),o=i("eIep"),c=i("YWTT"),l=i("Q2Ze"),b=i("e6WT"),u=i("vrAh"),d=i("ofXK"),m=i("bTqV"),f=i("NFeN"),p=i("FKr1");function v(e,t){if(1&e){const e=a.Vb();a.Ub(0,"button",6),a.fc("click",(function(){return a.Ac(e),a.jc().formControl.reset()})),a.Ub(1,"mat-icon"),a.Lc(2,"close"),a.Tb(),a.Tb()}}function h(e,t){if(1&e&&(a.Ub(0,"mat-option",7),a.Ub(1,"span"),a.Lc(2),a.Tb(),a.Ub(3,"small"),a.Lc(4),a.Tb(),a.Tb()),2&e){const e=t.$implicit;a.pc("value",e),a.Bb(2),a.Mc(e.search),a.Bb(2),a.Nc(" | Punkte: ",e.points,"")}}let g=(()=>{class e{constructor(e){this.villageService=e,this.label="Dorf",this.showClear=!1,this.formControl=new n.e("",e=>null==e.value||!e.value.id||"number"!=typeof e.value.id||e.value.id<0?{source:!0}:null),this.propagateChange=e=>{}}ngOnInit(){this.formControl.valueChanges.subscribe(e=>{this.propagateChange(e)})}writeValue(e){this.formControl.setValue(e)}registerOnChange(e){this.propagateChange=e}registerOnTouched(e){}setDisabledState(e){e?this.formControl.disable():this.formControl.enable()}displayFn(e){return e?e.search:""}ngAfterViewInit(){this.villages$=this.formControl.valueChanges.pipe(Object(s.a)(300),Object(o.a)(e=>"string"==typeof e?this.villageService.searchVillages(e):"object"==typeof e&&null!==e?this.villageService.searchVillages(e.search):Object(r.a)(void 0)))}}return e.\u0275fac=function(t){return new(t||e)(a.Ob(c.a))},e.\u0275cmp=a.Ib({type:e,selectors:[["app-village-input"]],inputs:{label:"label",showClear:"showClear"},features:[a.Ab([{provide:n.m,multi:!0,useExisting:Object(a.V)(()=>e)},{provide:n.l,useValue:e=>null==e.value||!e.value.id||"number"!=typeof e.value.id||e.value.id<0?{source:!0}:null,multi:!0}])],decls:7,vars:8,consts:[[1,"full-width"],["autocomplete","off","autocapitalize","off","spellcheck","false","matInput","",1,"full-width",3,"placeholder","matAutocomplete","formControl"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["panelWidth","450px",3,"displayWith"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],[3,"value"]],template:function(e,t){if(1&e&&(a.Ub(0,"mat-form-field",0),a.Pb(1,"input",1),a.Jc(2,v,3,0,"button",2),a.Tb(),a.Ub(3,"mat-autocomplete",3,4),a.Jc(5,h,5,3,"mat-option",5),a.kc(6,"async"),a.Tb()),2&e){const e=a.xc(4);a.Bb(1),a.pc("placeholder",t.label)("matAutocomplete",e)("formControl",t.formControl),a.Bb(1),a.pc("ngIf",t.showClear&&t.formControl.value),a.Bb(1),a.pc("displayWith",t.displayFn),a.Bb(2),a.pc("ngForOf",a.lc(6,6,t.villages$))}},directives:[l.b,b.b,u.c,n.c,n.o,n.f,d.m,u.a,d.l,m.a,l.g,f.a,p.n],pipes:[d.b],styles:[".full-width[_ngcontent-%COMP%]{width:100%}"]}),e})()},MjV7:function(e,t,i){"use strict";i.r(t),i.d(t,"FarmModule",(function(){return he}));var a=i("ofXK"),n=i("tyNb"),r=i("XNiG"),s=i("1G5W"),o=i("fXoL"),c=i("M9ds");const l=function(e){return[e]};function b(e,t){if(1&e){const e=o.Vb();o.Ub(0,"span",2),o.fc("click",(function(){o.Ac(e);const i=t.$implicit;return o.jc().activeLink=i})),o.Lc(1),o.Tb()}if(2&e){const e=t.$implicit,i=o.jc();o.pc("active",i.activeLink===e)("routerLink",o.tc(3,l,e.link)),o.Bb(1),o.Nc(" ",e.title," ")}}let u=(()=>{class e{constructor(e){this.router=e,this.links=[{title:"Home",link:"/farm"},{title:"Routen",link:"/farm/routes"}],this.activeLink=this.links[0],this.unsub$=new r.b}ngOnInit(){this.setActive(),this.router.events.pipe(Object(s.a)(this.unsub$)).subscribe(e=>{this.setActive()})}setActive(){for(const e of this.links)this.router.isActive(e.link,!1)&&(this.activeLink=e)}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(n.c))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-farm"]],decls:3,vars:1,consts:[["mat-tab-nav-bar",""],["mat-tab-link","",3,"active","routerLink","click",4,"ngFor","ngForOf"],["mat-tab-link","",3,"active","routerLink","click"]],template:function(e,t){1&e&&(o.Ub(0,"nav",0),o.Jc(1,b,2,5,"span",1),o.Tb(),o.Pb(2,"router-outlet")),2&e&&(o.Bb(1),o.pc("ngForOf",t.links))},directives:[c.b,a.l,n.g,c.a,n.d],styles:[""]}),e})();var d=i("iELJ"),m=i("3Pt+");class f{constructor(e,t,i,a){this.farmGroup=e,this.units=t,this.timerInterval=i,this.maxDistance=a}getName(){return"io.robertengel.dsbot.feature.farm.assist.ws.packet.incoming.AddFarmEntityRequest"}}class p{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.feature.farm.assist.ws.packet.incoming.DeleteFarmEntityRequest"}}class v{constructor(e,t,i,a,n){this.id=e,this.farmGroup=t,this.units=i,this.timerInterval=a,this.maxDistance=n}getName(){return"io.robertengel.dsbot.feature.farm.assist.ws.packet.incoming.EditFarmEntityRequest"}}class h{constructor(e,t){this.id=e,this.village=t}getName(){return"io.robertengel.dsbot.feature.farm.assist.ws.packet.incoming.FarmEntityAddVillageRequest"}}class g{constructor(e,t){this.id=e,this.village=t}getName(){return"io.robertengel.dsbot.feature.farm.assist.ws.packet.incoming.FarmEntityRemoveVillageRequest"}}class T{constructor(e,t){this.id=e,this.enabled=t}getName(){return"io.robertengel.dsbot.feature.farm.assist.ws.packet.incoming.FarmEntitySetEnabledRequest"}}class U{constructor(e){this.enabled=e}getName(){return"io.robertengel.dsbot.feature.farm.assist.ws.packet.incoming.FarmerSetEnabledRequest"}}class w{getName(){return"GetFarmerConfigRequest"}}class k{getName(){return"ListFarmEntityRequest"}}class x{constructor(e){this.max=e}getName(){return"io.robertengel.dsbot.feature.farm.assist.ws.packet.incoming.FarmerSetMaxIncsRequest"}}var C=i("SxV6"),O=i("pLZG"),y=i("lJxs"),L=i("7nMs");let I=(()=>{class e{constructor(e){this.websocketService=e}list(e){return this.websocketService.observable("ListFarmEntityResponse",new k).pipe(Object(s.a)(e))}addEntity(e,t,i,a){return this.websocketService.observable("AddFarmEntityResponse",new f(e,t,i,a)).pipe(Object(C.a)())}deleteEntity(e){return this.websocketService.observable("DeleteFarmEntityResponse",new p(e)).pipe(Object(O.a)(t=>t.id===e),Object(C.a)(),Object(y.a)(e=>e.id))}editEntity(e,t,i,a,n){return this.websocketService.observable("EditFarmEntityResponse",new v(e,t,i,a,n)).pipe(Object(O.a)(t=>t.id===e),Object(C.a)())}addVillage(e,t){return this.websocketService.observable("FarmEntityAddVillageResponse",new h(e,t)).pipe(Object(O.a)(i=>i.id===e&&i.village.id===t),Object(C.a)())}removeVillage(e,t){return this.websocketService.observable("FarmEntityRemoveVillageResponse",new g(e,t)).pipe(Object(O.a)(i=>i.id===e&&i.village.id===t),Object(C.a)())}setTaskEnabled(e,t){return this.websocketService.observable("FarmEntitySetEnabledResponse",new T(e,t)).pipe(Object(O.a)(t=>t.id===e),Object(C.a)())}config(e){return this.websocketService.observable("FarmerConfigResponse",new w).pipe(Object(s.a)(e))}setEnabled(e){this.websocketService.sendData(new U(e))}setMaxIncs(e){this.websocketService.sendData(new x(e))}}return e.\u0275fac=function(t){return new(t||e)(o.cc(L.a))},e.\u0275prov=o.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var R=i("Q2Ze"),F=i("ZTz/"),j=i("FKr1"),B=i("mPVK"),P=i("NFeN"),E=i("ZFy/"),V=i("TIdL"),S=i("bTqV");let D=(()=>{class e{constructor(e,t,i){this.dialogRef=e,this.fb=t,this.farm=i,this.form=this.fb.group({farmGroup:"A",units:{},timerInterval:30,maxDistance:20}),this.nonFarmUnits=["militia","ram","catapult","snob"]}ngOnInit(){}submit(e){this.form.disable(),this.farm.addEntity(e.farmGroup,e.units,e.timerInterval,e.maxDistance).subscribe(e=>{this.dialogRef.close(e)})}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(d.g),o.Ob(m.d),o.Ob(I))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-farm-task-add"]],decls:38,vars:3,consts:[[1,"row"],[1,"col-xl-12"],[3,"formGroup","ngSubmit"],[1,"form-group","row"],[1,"w-100"],["formControlName","farmGroup"],["value","A"],["value","B"],[1,"col-xl-3"],["for","timerInterval"],[1,"col-xl-9"],["id","timerInterval","formControlName","timerInterval","min","1","max","120","thumbLabel","true",1,"w-100"],["for","maxDistance"],["id","maxDistance","formControlName","maxDistance","min","1","max","100","thumbLabel","true",1,"w-100"],["matTooltip","Leer lassen um Gruppe nicht zu \xe4ndern."],["formControlName","units",3,"excludeUnits"],[1,"col-xl-12","flex-between"],["type","submit","mat-raised-button","","color","primary",3,"disabled"]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"form",2),o.fc("ngSubmit",(function(){return t.submit(t.form.value)})),o.Ub(3,"div",3),o.Ub(4,"div",1),o.Ub(5,"mat-form-field",4),o.Ub(6,"mat-label"),o.Lc(7,"Gruppe"),o.Tb(),o.Ub(8,"mat-select",5),o.Ub(9,"mat-option",6),o.Lc(10,"A"),o.Tb(),o.Ub(11,"mat-option",7),o.Lc(12,"B"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(13,"div",3),o.Ub(14,"div",8),o.Ub(15,"label",9),o.Lc(16,"Interval (Minuten)"),o.Tb(),o.Tb(),o.Ub(17,"div",10),o.Pb(18,"mat-slider",11),o.Tb(),o.Tb(),o.Ub(19,"div",3),o.Ub(20,"div",8),o.Ub(21,"label",12),o.Lc(22,"Max Entfernung"),o.Tb(),o.Tb(),o.Ub(23,"div",10),o.Pb(24,"mat-slider",13),o.Tb(),o.Tb(),o.Ub(25,"div",3),o.Ub(26,"div",8),o.Ub(27,"label",12),o.Lc(28,"Einheiten "),o.Ub(29,"mat-icon",14),o.Lc(30,"info"),o.Tb(),o.Tb(),o.Tb(),o.Ub(31,"div",10),o.Pb(32,"app-units-holder-input",15),o.Tb(),o.Tb(),o.Ub(33,"div",3),o.Ub(34,"div",16),o.Pb(35,"span"),o.Ub(36,"button",17),o.Lc(37," Hinzuf\xfcgen "),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb()),2&e&&(o.Bb(2),o.pc("formGroup",t.form),o.Bb(30),o.pc("excludeUnits",t.nonFarmUnits),o.Bb(4),o.pc("disabled",!t.form.valid||t.form.disabled))},directives:[m.x,m.p,m.i,R.b,R.f,F.a,m.o,m.g,j.n,B.a,P.a,E.a,V.a,S.a],styles:[""]}),e})();var N=i("7Ixi"),A=i("OaSA"),M=i("irRR");function $(e,t){1&e&&(o.Ub(0,"th",31),o.Lc(1,"Dorf"),o.Tb())}function J(e,t){if(1&e&&(o.Ub(0,"td",32),o.Pb(1,"app-village-render",33),o.Tb()),2&e){const e=t.$implicit;o.Bb(1),o.pc("value",e)}}function G(e,t){1&e&&o.Pb(0,"th",31)}function q(e,t){if(1&e){const e=o.Vb();o.Ub(0,"td",32),o.Ub(1,"button",34),o.fc("click",(function(){o.Ac(e);const i=t.$implicit;return o.jc(2).removeVillage(i.id)})),o.Ub(2,"mat-icon"),o.Lc(3,"delete"),o.Tb(),o.Tb(),o.Tb()}}function _(e,t){1&e&&o.Pb(0,"tr",35)}function H(e,t){1&e&&o.Pb(0,"tr",36)}function K(e,t){if(1&e&&(o.Ub(0,"div",23),o.Ub(1,"table",24),o.Sb(2,25),o.Jc(3,$,2,0,"th",26),o.Jc(4,J,2,1,"td",27),o.Rb(),o.Sb(5,28),o.Jc(6,G,1,0,"th",26),o.Jc(7,q,4,0,"td",27),o.Rb(),o.Jc(8,_,1,0,"tr",29),o.Jc(9,H,1,0,"tr",30),o.Tb(),o.Tb()),2&e){const e=o.jc();o.Bb(1),o.pc("dataSource",e.data.villages),o.Bb(7),o.pc("matHeaderRowDef",e.displayedColumns),o.Bb(1),o.pc("matRowDefColumns",e.displayedColumns)}}let z=(()=>{class e{constructor(e,t,i,a){this.data=e,this.dialogRef=t,this.fb=i,this.farm=a,this.form=this.fb.group({farmGroup:"A",units:{},timerInterval:30,maxDistance:20}),this.villageForm=new m.e(m.v.required),this.nonFarmUnits=["militia","ram","catapult","snob"],this.displayedColumns=["village","delete"],this.form.setValue({farmGroup:e.farmGroup,units:e.units,timerInterval:e.timerInterval,maxDistance:e.maxDistance})}ngOnInit(){}addVillage(){this.farm.addVillage(this.data.id,this.villageForm.value.id).subscribe(e=>{this.data.villages=[...this.data.villages,e.village]})}removeVillage(e){this.farm.removeVillage(this.data.id,e).subscribe(e=>{this.data.villages=this.data.villages.filter(t=>t.id!==e.id)})}submit(e){this.form.disable(),this.farm.editEntity(this.data.id,e.farmGroup,e.units,e.timerInterval,e.maxDistance).subscribe(e=>{this.dialogRef.close(e)})}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(d.a),o.Ob(d.g),o.Ob(m.d),o.Ob(I))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-farm-task-edit"]],decls:47,vars:6,consts:[[1,"row"],[1,"col-xl-12"],[3,"formGroup","ngSubmit"],[1,"form-group","row"],[1,"w-100"],["formControlName","farmGroup"],["value","A"],["value","B"],[1,"col-xl-3"],["for","timerInterval"],[1,"col-xl-9"],["id","timerInterval","formControlName","timerInterval","min","1","max","120","thumbLabel","true",1,"w-100"],["for","maxDistance"],["id","maxDistance","formControlName","maxDistance","min","1","max","100","thumbLabel","true",1,"w-100"],["matTooltip","Leer lassen um Gruppe nicht zu \xe4ndern."],["formControlName","units",3,"excludeUnits"],[1,"col-xl-12","flex-between"],["type","submit","mat-raised-button","","color","primary",3,"disabled"],[1,"col-xl-6"],[1,"col-md-9"],[3,"formControl"],["mat-raised-button","","color","primary",3,"disabled","click"],["class","col-xl-6 list",4,"ngIf"],[1,"col-xl-6","list"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","village"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","delete"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"value"],["type","button","mat-mini-fab","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"form",2),o.fc("ngSubmit",(function(){return t.submit(t.form.value)})),o.Ub(3,"div",3),o.Ub(4,"div",1),o.Ub(5,"mat-form-field",4),o.Ub(6,"mat-label"),o.Lc(7,"Gruppe"),o.Tb(),o.Ub(8,"mat-select",5),o.Ub(9,"mat-option",6),o.Lc(10,"A"),o.Tb(),o.Ub(11,"mat-option",7),o.Lc(12,"B"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(13,"div",3),o.Ub(14,"div",8),o.Ub(15,"label",9),o.Lc(16,"Interval (Minuten)"),o.Tb(),o.Tb(),o.Ub(17,"div",10),o.Pb(18,"mat-slider",11),o.Tb(),o.Tb(),o.Ub(19,"div",3),o.Ub(20,"div",8),o.Ub(21,"label",12),o.Lc(22,"Max Entfernung"),o.Tb(),o.Tb(),o.Ub(23,"div",10),o.Pb(24,"mat-slider",13),o.Tb(),o.Tb(),o.Ub(25,"div",3),o.Ub(26,"div",8),o.Ub(27,"label",12),o.Lc(28,"Einheiten "),o.Ub(29,"mat-icon",14),o.Lc(30,"info"),o.Tb(),o.Tb(),o.Tb(),o.Ub(31,"div",10),o.Pb(32,"app-units-holder-input",15),o.Tb(),o.Tb(),o.Ub(33,"div",3),o.Ub(34,"div",16),o.Pb(35,"span"),o.Ub(36,"button",17),o.Lc(37," Bearbeiten "),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(38,"div",0),o.Ub(39,"div",18),o.Ub(40,"div",0),o.Ub(41,"div",19),o.Pb(42,"app-village-input",20),o.Tb(),o.Ub(43,"div",8),o.Ub(44,"button",21),o.fc("click",(function(){return t.addVillage()})),o.Lc(45," Dorf hinzuf\xfcgen. "),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Jc(46,K,10,3,"div",22),o.Tb()),2&e&&(o.Bb(2),o.pc("formGroup",t.form),o.Bb(30),o.pc("excludeUnits",t.nonFarmUnits),o.Bb(4),o.pc("disabled",!t.form.valid||t.form.disabled),o.Bb(6),o.pc("formControl",t.villageForm),o.Bb(2),o.pc("disabled",t.villageForm.disabled||t.villageForm.invalid),o.Bb(2),o.pc("ngIf",t.data.villages.length>0))},directives:[m.x,m.p,m.i,R.b,R.f,F.a,m.o,m.g,j.n,B.a,P.a,E.a,V.a,S.a,N.a,m.f,a.m,A.j,A.c,A.e,A.b,A.g,A.i,A.d,A.a,M.a,A.f,A.h],styles:[".list[_ngcontent-%COMP%]{overflow:scroll;max-height:50%}"]}),e})();var X=i("PDjf"),Z=i("jMqV"),W=i("e6WT"),Q=i("k2HR");let Y=(()=>{class e{constructor(e,t){this.dialog=e,this.farm=t,this.nonFarmUnits=["militia","ram","catapult","snob"],this.delete=new o.o,this.slide=new m.e}set task(e){this.internalTask=e,this.slide.setValue(this.internalTask.enabled,{emitEvent:!1})}ngOnInit(){this.slide.valueChanges.subscribe(e=>{this.farm.setTaskEnabled(this.internalTask.id,e).subscribe()})}remove(){this.farm.deleteEntity(this.internalTask.id).subscribe(e=>{this.delete.emit(e)})}edit(){this.dialog.open(z,{data:this.internalTask}).afterClosed().subscribe(e=>{void 0!==e&&(this.task=e)})}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(d.b),o.Ob(I))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-farm-task"]],inputs:{task:"task"},outputs:{delete:"delete"},decls:35,vars:7,consts:[[1,"row"],[1,"col-xl-12"],[1,"col-xl-12","flex-between"],[1,"mr-2",3,"formControl"],["mat-mini-fab","",1,"mr-2",3,"click"],["mat-mini-fab","","matTooltip","Unwiderruflich l\xf6schen.",3,"click"],[1,"row","mb-1"],[1,"col-sm-2"],[1,"col-sm-10"],[1,"col-md-2"],[1,"col-xl-10"],[3,"value","excludeUnits"]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"mat-card"),o.Ub(3,"div",0),o.Ub(4,"div",2),o.Ub(5,"h1"),o.Lc(6,"Farmtask"),o.Tb(),o.Ub(7,"div"),o.Pb(8,"mat-slide-toggle",3),o.Ub(9,"button",4),o.fc("click",(function(){return t.edit()})),o.Ub(10,"mat-icon"),o.Lc(11,"edit"),o.Tb(),o.Tb(),o.Ub(12,"button",5),o.fc("click",(function(){return t.remove()})),o.Ub(13,"mat-icon"),o.Lc(14,"delete"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(15,"div",6),o.Ub(16,"div",7),o.Lc(17," Interval "),o.Tb(),o.Ub(18,"div",8),o.Lc(19),o.Tb(),o.Tb(),o.Ub(20,"div",6),o.Ub(21,"div",7),o.Lc(22," Max Entfernung "),o.Tb(),o.Ub(23,"div",8),o.Lc(24),o.Tb(),o.Tb(),o.Ub(25,"div",6),o.Ub(26,"div",7),o.Lc(27," D\xf6rfer "),o.Tb(),o.Ub(28,"div",8),o.Lc(29),o.Tb(),o.Tb(),o.Ub(30,"div",0),o.Ub(31,"div",9),o.Lc(32),o.Tb(),o.Ub(33,"div",10),o.Pb(34,"app-units-render",11),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb()),2&e&&(o.Bb(8),o.pc("formControl",t.slide),o.Bb(11),o.Nc(" ",t.internalTask.timerInterval," Minuten "),o.Bb(5),o.Nc(" ",t.internalTask.maxDistance.toFixed(1)," Felder "),o.Bb(5),o.Nc(" ",t.internalTask.villages.length," "),o.Bb(3),o.Nc(" Einheiten (Gruppe ",t.internalTask.farmGroup.toUpperCase(),") "),o.Bb(2),o.pc("value",t.internalTask.units)("excludeUnits",t.nonFarmUnits))},directives:[X.a,Z.a,m.o,m.f,S.a,P.a,E.a,Q.a],styles:[""]}),e})();function ee(e,t){if(1&e){const e=o.Vb();o.Ub(0,"app-farm-task",10),o.fc("delete",(function(t){return o.Ac(e),o.jc().delete(t)})),o.Tb()}2&e&&o.pc("task",t.$implicit)}function te(e,t){if(1&e){const e=o.Vb();o.Ub(0,"div",0),o.Ub(1,"div",11),o.Pb(2,"span"),o.Ub(3,"span",12),o.Lc(4," Keine Tasks vorhanden."),o.Pb(5,"br"),o.Ub(6,"button",13),o.fc("click",(function(){return o.Ac(e),o.jc().add()})),o.Lc(7," Hinzuf\xfcgen. "),o.Tb(),o.Tb(),o.Pb(8,"span"),o.Tb(),o.Tb()}}let ie=(()=>{class e{constructor(e,t){this.farm=e,this.dialog=t,this.unsub$=new r.b,this.slide=new m.e,this.max=new m.e}ngOnInit(){this.farm.list(this.unsub$).subscribe(e=>{this.tasks=e}),this.farm.config(this.unsub$).subscribe(e=>{this.slide.setValue(e.enabled,{emitEvent:!1}),this.max.setValue(e.maxIncsPerVillage,{emitEvent:!1})}),this.slide.valueChanges.subscribe(e=>{this.farm.setEnabled(e)}),this.max.valueChanges.subscribe(e=>{this.farm.setMaxIncs(e)})}add(){this.dialog.open(D).afterClosed().subscribe(e=>{void 0!==e&&(this.tasks.push(e),this.dialog.open(z,{data:e}))})}delete(e){this.tasks=this.tasks.filter(t=>t.id!==e)}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(I),o.Ob(d.b))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-farm-overview"]],decls:17,vars:4,consts:[[1,"row"],[1,"col-xl-12"],[1,"mb-3"],[1,"flex-between"],[3,"formControl"],[1,"ml-3"],["matInput","","type","number",3,"formControl"],["mat-mini-fab","","color","primary",3,"click"],[3,"task","delete",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[3,"task","delete"],[1,"col-xl-12","flex-between"],[1,"text-center"],["mat-raised-button","",3,"click"]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"mat-card",2),o.Ub(3,"div",3),o.Ub(4,"div"),o.Pb(5,"mat-slide-toggle",4),o.Ub(6,"mat-form-field",5),o.Ub(7,"mat-label"),o.Lc(8,"Max Angriffe"),o.Tb(),o.Pb(9,"input",6),o.Ub(10,"mat-hint"),o.Lc(11,"Maximale Anzahl an Angriffen pro Babarendorf."),o.Tb(),o.Tb(),o.Tb(),o.Ub(12,"button",7),o.fc("click",(function(){return t.add()})),o.Ub(13,"mat-icon"),o.Lc(14,"add"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Jc(15,ee,1,1,"app-farm-task",8),o.Jc(16,te,9,0,"div",9)),2&e&&(o.Bb(5),o.pc("formControl",t.slide),o.Bb(4),o.pc("formControl",t.max),o.Bb(6),o.pc("ngForOf",t.tasks),o.Bb(1),o.pc("ngIf",t.tasks&&0===t.tasks.length))},directives:[X.a,Z.a,m.o,m.f,R.b,R.f,W.b,m.s,m.c,R.e,S.a,P.a,a.l,a.m,Y],styles:[""]}),e})();class ae{getName(){return"ListFarmRouteRequest"}}class ne{constructor(e,t,i,a){this.source=e,this.target=t,this.troops=i,this.timerInterval=a}getName(){return"io.robertengel.dsbot.feature.farm.route.ws.packet.incoming.AddFarmRouteRequest"}}class re{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.feature.farm.route.ws.packet.incoming.DeleteFarmRouteRequest"}}class se{constructor(e,t,i,a,n){this.id=e,this.source=t,this.target=i,this.troops=a,this.timerInterval=n}getName(){return"io.robertengel.dsbot.feature.farm.route.ws.packet.incoming.EditFarmRouteRequest"}}class oe{constructor(e,t){this.id=e,this.enabled=t}getName(){return"io.robertengel.dsbot.feature.farm.route.ws.packet.incoming.FarmRouteSetEnabledRequest"}}let ce=(()=>{class e{constructor(e){this.websocketService=e}list(e){return this.websocketService.observable("ListFarmRouteResponse",new ae).pipe(Object(s.a)(e))}addEntity(e,t,i,a){return this.websocketService.observable("AddFarmRouteResponse",new ne(e,t,i,a)).pipe(Object(C.a)())}deleteEntity(e){return this.websocketService.observable("DeleteFarmRouteResponse",new re(e)).pipe(Object(O.a)(t=>t.id===e),Object(C.a)(),Object(y.a)(e=>e.id))}editEntity(e,t,i,a,n){return this.websocketService.observable("EditFarmRouteResponse",new se(e,t,i,a,n)).pipe(Object(C.a)())}setTaskEnabled(e,t){return this.websocketService.observable("FarmRouteSetEnabledResponse",new oe(e,t)).pipe(Object(O.a)(t=>t.id===e),Object(C.a)())}}return e.\u0275fac=function(t){return new(t||e)(o.cc(L.a))},e.\u0275prov=o.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var le=i("38Pe");let be=(()=>{class e{constructor(e,t,i){this.dialogRef=e,this.fb=t,this.farm=i,this.form=this.fb.group({source:[void 0,m.v.required],target:[void 0,m.v.required],troops:{},timerInterval:[30,m.v.min(1)]})}ngOnInit(){}submit(e){this.form.disable(),this.farm.addEntity(e.source.id,e.target.id,e.troops,e.timerInterval).subscribe(e=>{console.log("got route from service:"),console.log(e),this.dialogRef.close(e)})}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(d.g),o.Ob(m.d),o.Ob(ce))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-farm-route-add"]],decls:26,vars:2,consts:[[1,"row"],[1,"col-xl-12"],[3,"formGroup","ngSubmit"],[1,"form-group","row"],["label","Herkunft","formControlName","source"],["label","Ziel","formControlName","target"],[1,"col-xl-3"],["for","timerInterval"],[1,"col-xl-9"],["id","timerInterval","formControlName","timerInterval","min","1","max","120","thumbLabel","true",1,"w-100"],[1,"col-sm-2"],["formControlName","troops"],[1,"col-xl-12","flex-between"],["type","submit","mat-raised-button","","color","primary",3,"disabled"]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"form",2),o.fc("ngSubmit",(function(){return t.submit(t.form.value)})),o.Ub(3,"div",3),o.Ub(4,"div",1),o.Pb(5,"app-village-input",4),o.Tb(),o.Tb(),o.Ub(6,"div",3),o.Ub(7,"div",1),o.Pb(8,"app-village-input",5),o.Tb(),o.Tb(),o.Ub(9,"div",3),o.Ub(10,"div",6),o.Ub(11,"label",7),o.Lc(12,"Interval (Minuten)"),o.Tb(),o.Tb(),o.Ub(13,"div",8),o.Pb(14,"mat-slider",9),o.Tb(),o.Tb(),o.Ub(15,"div",3),o.Ub(16,"div",10),o.Ub(17,"label"),o.Lc(18," Einheiten "),o.Tb(),o.Tb(),o.Ub(19,"div",1),o.Pb(20,"app-units-input",11),o.Tb(),o.Tb(),o.Ub(21,"div",3),o.Ub(22,"div",12),o.Pb(23,"span"),o.Ub(24,"button",13),o.Lc(25," Hinzuf\xfcgen "),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb()),2&e&&(o.Bb(2),o.pc("formGroup",t.form),o.Bb(22),o.pc("disabled",!t.form.valid||t.form.disabled))},directives:[m.x,m.p,m.i,N.a,m.o,m.g,B.a,le.a,S.a],styles:[""]}),e})(),ue=(()=>{class e{constructor(e,t){this.dialog=e,this.farm=t,this.delete=new o.o,this.slide=new m.e}set route(e){this.internalRoute=e,this.slide.setValue(this.internalRoute.enabled,{emitEvent:!1})}ngOnInit(){this.slide.valueChanges.subscribe(e=>{this.farm.setTaskEnabled(this.internalRoute.id,e).subscribe()})}remove(){this.farm.deleteEntity(this.internalRoute.id).subscribe(e=>{this.delete.emit(e)})}edit(){this.dialog.open(z,{data:this.internalRoute}).afterClosed().subscribe(e=>{void 0!==e&&(this.route=e)})}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(d.b),o.Ob(ce))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-farm-route-display"]],inputs:{route:"route"},outputs:{delete:"delete"},decls:35,vars:5,consts:[[1,"row"],[1,"col-xl-12"],[1,"col-xl-12","flex-between"],[1,"mr-2",3,"formControl"],["mat-mini-fab","",1,"mr-2",3,"click"],["mat-mini-fab","","matTooltip","Unwiderruflich l\xf6schen.",3,"click"],[1,"row","mb-1"],[1,"col-sm-2"],[1,"col-sm-10"],[3,"value"],[1,"col-md-2"],[1,"col-xl-10"]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"mat-card"),o.Ub(3,"div",0),o.Ub(4,"div",2),o.Ub(5,"h1"),o.Lc(6,"Farmroute"),o.Tb(),o.Ub(7,"div"),o.Pb(8,"mat-slide-toggle",3),o.Ub(9,"button",4),o.fc("click",(function(){return t.edit()})),o.Ub(10,"mat-icon"),o.Lc(11,"edit"),o.Tb(),o.Tb(),o.Ub(12,"button",5),o.fc("click",(function(){return t.remove()})),o.Ub(13,"mat-icon"),o.Lc(14,"delete"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(15,"div",6),o.Ub(16,"div",7),o.Lc(17," Herkunftsdorf "),o.Tb(),o.Ub(18,"div",8),o.Pb(19,"app-village-render",9),o.Tb(),o.Tb(),o.Ub(20,"div",6),o.Ub(21,"div",7),o.Lc(22," Zieldorf "),o.Tb(),o.Ub(23,"div",8),o.Pb(24,"app-village-render",9),o.Tb(),o.Tb(),o.Ub(25,"div",6),o.Ub(26,"div",7),o.Lc(27," Interval "),o.Tb(),o.Ub(28,"div",8),o.Lc(29),o.Tb(),o.Tb(),o.Ub(30,"div",0),o.Ub(31,"div",10),o.Lc(32," Einheiten "),o.Tb(),o.Ub(33,"div",11),o.Pb(34,"app-units-render",9),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb()),2&e&&(o.Bb(8),o.pc("formControl",t.slide),o.Bb(11),o.pc("value",t.internalRoute.source),o.Bb(5),o.pc("value",t.internalRoute.target),o.Bb(5),o.Nc(" ",t.internalRoute.timerInterval," Minuten "),o.Bb(5),o.pc("value",t.internalRoute.troops))},directives:[X.a,Z.a,m.o,m.f,S.a,P.a,E.a,M.a,Q.a],styles:[""]}),e})();function de(e,t){if(1&e){const e=o.Vb();o.Ub(0,"app-farm-route-display",7),o.fc("delete",(function(t){return o.Ac(e),o.jc().delete(t)})),o.Tb()}2&e&&o.pc("route",t.$implicit)}function me(e,t){if(1&e){const e=o.Vb();o.Ub(0,"div",0),o.Ub(1,"div",8),o.Pb(2,"span"),o.Ub(3,"span",9),o.Lc(4," Keine Routen vorhanden."),o.Pb(5,"br"),o.Ub(6,"button",10),o.fc("click",(function(){return o.Ac(e),o.jc().add()})),o.Lc(7," Hinzuf\xfcgen. "),o.Tb(),o.Tb(),o.Pb(8,"span"),o.Tb(),o.Tb()}}const fe=[{path:"",component:u,children:[{path:"routes",component:(()=>{class e{constructor(e,t){this.farm=e,this.dialog=t,this.unsub$=new r.b}ngOnInit(){this.farm.list(this.unsub$).subscribe(e=>{this.routes=e})}add(){this.dialog.open(be).afterClosed().subscribe(e=>{console.log("got route from add component:"),console.log(e),void 0!==e&&this.routes.push(e)})}delete(e){this.routes=this.routes.filter(t=>t.id!==e)}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(ce),o.Ob(d.b))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-farm-route"]],decls:10,vars:2,consts:[[1,"row"],[1,"col-xl-12"],[1,"mb-3"],[1,"flex-between"],["mat-mini-fab","","color","primary",3,"click"],[3,"route","delete",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[3,"route","delete"],[1,"col-xl-12","flex-between"],[1,"text-center"],["mat-raised-button","",3,"click"]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"mat-card",2),o.Ub(3,"div",3),o.Pb(4,"div"),o.Ub(5,"button",4),o.fc("click",(function(){return t.add()})),o.Ub(6,"mat-icon"),o.Lc(7,"add"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Jc(8,de,1,1,"app-farm-route-display",5),o.Jc(9,me,9,0,"div",6)),2&e&&(o.Bb(8),o.pc("ngForOf",t.routes),o.Bb(1),o.pc("ngIf",t.routes&&0===t.routes.length))},directives:[X.a,S.a,P.a,a.l,a.m,ue],styles:[""]}),e})()},{path:"",pathMatch:"full",component:ie}]}];let pe=(()=>{class e{}return e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({factory:function(t){return new(t||e)},imports:[[n.f.forChild(fe)],n.f]}),e})();var ve=i("BLWB");let he=(()=>{class e{}return e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({factory:function(t){return new(t||e)},imports:[[a.c,pe,c.c,X.f,Z.b,m.t,ve.a,R.d,F.b,P.b,S.b,d.f,B.b,E.b,W.c,A.l]]}),e})()},YWTT:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));class a{constructor(e){this.id=Math.random(),this.query=e}getName(){return"io.robertengel.dsbot.feature.village.ws.packet.incoming.VillageSearchRequest"}}var n=i("pLZG"),r=i("SxV6"),s=i("lJxs");class o{constructor(e){this.id=e}getName(){return"io.robertengel.dsbot.feature.village.ws.packet.incoming.GetVillageByIdRequest"}}class c{constructor(e){this.id=Math.random(),this.paste=e}getName(){return"io.robertengel.dsbot.feature.village.ws.packet.incoming.VillageCoordPasteRequest"}}var l=i("fXoL"),b=i("7nMs");let u=(()=>{class e{constructor(e){this.web=e}searchVillages(e){const t=new a(e);return this.web.observable("VillageSearchResponse",t).pipe(Object(n.a)(e=>e.id===t.id),Object(r.a)(),Object(s.a)(e=>e.villages))}coordPaste(e){const t=new c(e);return this.web.observable("VillageSearchResponse",t).pipe(Object(n.a)(e=>e.id===t.id),Object(r.a)(),Object(s.a)(e=>e.villages))}byId(e){return this.web.observable("VillageResponse",new o(e)).pipe(Object(n.a)(t=>t.id===e),Object(r.a)())}}return e.\u0275fac=function(t){return new(t||e)(l.cc(b.a))},e.\u0275prov=l.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},irRR:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var a=i("fXoL"),n=i("7nMs"),r=i("ofXK");function s(e,t){if(1&e){const e=a.Vb();a.Ub(0,"a",2),a.fc("click",(function(t){return a.Ac(e),t.stopPropagation()})),a.Lc(1),a.Pb(2,"br"),a.Tb()}if(2&e){const e=a.jc(2);a.pc("href",e.link,a.Cc),a.Bb(1),a.Pc(" ",e.value.name," (",e.value.x,"|",e.value.y,")")}}function o(e,t){if(1&e&&(a.Ub(0,"span"),a.Lc(1),a.Pb(2,"br"),a.Tb()),2&e){const e=a.jc(2);a.Bb(1),a.Pc(" ",e.value.name," (",e.value.x,"|",e.value.y,")")}}function c(e,t){if(1&e&&(a.Sb(0),a.Jc(1,s,3,4,"a",1),a.Jc(2,o,3,3,"span",0),a.Ub(3,"small"),a.Lc(4),a.kc(5,"number"),a.Tb(),a.Rb()),2&e){const e=a.jc();a.Bb(1),a.pc("ngIf",e.link),a.Bb(1),a.pc("ngIf",!e.link),a.Bb(2),a.Nc("Punkte: ",a.mc(5,3,e.value.points,"1.0","de"),"")}}let l=(()=>{class e{constructor(e){this.web=e}ngOnInit(){this.web.info().subscribe(e=>{this.world=e.world})}get link(){return this.world&&this.value?"https://"+this.world+".die-staemme.de/game.php?screen=info_village&id="+this.value.id:void 0}navigateTo(e){this.world&&this.value&&(e.stopPropagation(),window.open("https://"+this.world+".die-staemme.de/game.php?screen=info_village&id="+this.value.id,"_blank"))}}return e.\u0275fac=function(t){return new(t||e)(a.Ob(n.a))},e.\u0275cmp=a.Ib({type:e,selectors:[["app-village-render"]],inputs:{value:"value"},decls:1,vars:1,consts:[[4,"ngIf"],["target","_blank",3,"href","click",4,"ngIf"],["target","_blank",3,"href","click"]],template:function(e,t){1&e&&a.Jc(0,c,6,7,"ng-container",0),2&e&&a.pc("ngIf",t.value)},directives:[r.m],pipes:[r.e],styles:[".link[_ngcontent-%COMP%]{cursor:pointer}a[_ngcontent-%COMP%]{color:inherit}"]}),e})()}}]);