(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"38Pe":function(t,e,i){"use strict";i.d(e,"a",(function(){return y}));var n=i("fXoL"),a=i("3Pt+"),s=i("lJxs"),c=i("UXun"),l=i("ZTz/"),o=i("DNTf"),r=i("0MNC"),b=i("7nMs"),u=i("ofXK"),d=i("Q2Ze"),f=i("e6WT"),m=i("bTqV"),p=i("FKr1");function h(t,e){if(1&t&&n.Pb(0,"img",8),2&t){const t=n.jc().$implicit,e=n.jc();n.pc("src",e.imagebase+"unit/unit_"+t+".png",n.Cc)}}const g=function(t,e){return{"col-xl-12":t,pad:e}};function v(t,e){if(1&t){const t=n.Vb();n.Ub(0,"span",0),n.kc(1,"async"),n.kc(2,"async"),n.Ub(3,"mat-form-field",3),n.Ub(4,"mat-label"),n.Lc(5),n.kc(6,"titlecase"),n.Tb(),n.Ub(7,"input",4,5),n.fc("change",(function(){n.Ac(t);const i=e.$implicit,a=n.xc(8);return n.jc().input(a.value,i)})),n.Tb(),n.Ub(9,"button",6),n.fc("click",(function(i){n.Ac(t);const a=e.$implicit,s=n.xc(8),c=n.jc();return i.preventDefault(),c.input("alle",a),s.value="alle"})),n.Jc(10,h,1,1,"img",7),n.Tb(),n.Tb(),n.Tb()}if(2&t){const t=e.$implicit,i=n.jc();n.pc("ngClass",n.uc(10,g,i.forceVertical||!0===n.lc(1,4,i.isHandset$),!(i.forceVertical||!0===n.lc(2,6,i.isHandset$)))),n.Bb(5),n.Mc(n.lc(6,8,t)),n.Bb(2),n.pc("id","troop_input_"+t),n.Bb(3),n.pc("ngIf",i.imagebase)}}function T(t,e){if(1&t&&n.Pb(0,"img",18),2&t){const t=n.jc(3);n.pc("src",t.imagebase+"buildings/"+t.formControl.value.cataTarget+".png",n.Cc)}}function w(t,e){if(1&t&&(n.Ub(0,"mat-select-trigger"),n.Ub(1,"div",16),n.Ub(2,"span"),n.Lc(3),n.kc(4,"titlecase"),n.Tb(),n.Jc(5,T,1,1,"img",17),n.Tb(),n.Tb()),2&t){const t=n.jc(2);n.Bb(3),n.Mc(n.lc(4,2,t.formControl.value.cataTarget)),n.Bb(2),n.pc("ngIf",t.imagebase)}}function U(t,e){if(1&t&&n.Pb(0,"img",18),2&t){const t=n.jc().$implicit,e=n.jc(2);n.pc("src",e.imagebase+"buildings/"+t+".png",n.Cc)}}function k(t,e){if(1&t&&(n.Ub(0,"mat-option",19),n.Ub(1,"div",16),n.Ub(2,"span"),n.Lc(3),n.kc(4,"titlecase"),n.Tb(),n.Jc(5,U,1,1,"img",17),n.Tb(),n.Tb()),2&t){const t=e.$implicit,i=n.jc(2);n.pc("value",t),n.Bb(3),n.Mc(n.lc(4,3,t)),n.Bb(2),n.pc("ngIf",i.imagebase)}}function C(t,e){if(1&t){const t=n.Vb();n.Ub(0,"div",9),n.Ub(1,"div",10),n.Ub(2,"mat-form-field"),n.Ub(3,"mat-label"),n.Lc(4,"Katapult Ziel"),n.Tb(),n.Ub(5,"mat-select",11,12),n.fc("valueChange",(function(){n.Ac(t);const e=n.xc(6);return n.jc().input(e.value,"cataTarget")})),n.Jc(7,w,6,4,"mat-select-trigger",13),n.Ub(8,"mat-option",14),n.Lc(9,"Default"),n.Tb(),n.Jc(10,k,6,5,"mat-option",15),n.Tb(),n.Tb(),n.Tb(),n.Tb()}if(2&t){const t=n.jc();n.Bb(7),n.pc("ngIf","///DEFAULT///"!==t.formControl.value.cataTarget),n.Bb(3),n.pc("ngForOf",t.buildings)}}const O=function(t,e){return{spread:t,row:e}};let y=(()=>{class t{constructor(t,e){this.breakpointObserver=t,this.web=e,this.forceVertical=!1,this.hideCataTarget=!1,this.excludeUnits=[],this.units=[],this.buildings=[],this.formControl=new a.e({cataTarget:"///DEFAULT///"}),this.isHandset$=this.breakpointObserver.observe(o.a).pipe(Object(s.a)(t=>t.matches),Object(c.a)()),this.propagateChange=t=>{}}ngOnInit(){this.web.infoObservable.subscribe(t=>{this.units=t.units,this.units=this.units.filter(t=>!this.excludeUnits.includes(t)),this.imagebase=t.imageBase,this.buildings=t.buildings}),this.units.forEach(t=>{const e={};e[t]="0",this.formControl.patchValue(e)}),this.formControl.valueChanges.subscribe(t=>{this.propagateChange(t)})}input(t,e){const i={};i[e]=t,this.formControl.setValue(Object.assign(Object.assign({},this.formControl.value),i))}get cata(){return this.formControl.value.catapult&&"0"!==this.formControl.value.catapult}writeValue(t){null==t&&(t={cataTarget:"///DEFAULT///"}),this.formControl.setValue(t),setTimeout(()=>{void 0!==this.select&&(this.select.value=t.cataTarget),this.units.forEach(e=>{const i=document.getElementById("troop_input_"+e);null!==i&&t.hasOwnProperty(e)&&(i.value=t[e])})},10)}registerOnChange(t){this.propagateChange=t}registerOnTouched(t){}setDisabledState(t){t?this.formControl.disable():this.formControl.enable()}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(r.a),n.Ob(b.a))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-units-input"]],viewQuery:function(t,e){var i;1&t&&n.Rc(l.a,!0),2&t&&n.wc(i=n.gc())&&(e.select=i.first)},inputs:{forceVertical:"forceVertical",hideCataTarget:"hideCataTarget",excludeUnits:"excludeUnits"},features:[n.Ab([{provide:a.m,multi:!0,useExisting:Object(n.V)(()=>t)}])],decls:5,vars:10,consts:[[3,"ngClass"],[3,"ngClass",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[1,"full-width"],["matInput","","type","text",3,"id","change"],["t",""],["mat-button","","matSuffix","","mat-icon-button","",3,"click"],["class","img-fluid",3,"src",4,"ngIf"],[1,"img-fluid",3,"src"],[1,"row"],[1,"col-12"],[3,"valueChange"],["select",""],[4,"ngIf"],["value","///DEFAULT///"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-between"],["matSuffix","","class","img-fluid",3,"src",4,"ngIf"],["matSuffix","",1,"img-fluid",3,"src"],[3,"value"]],template:function(t,e){1&t&&(n.Ub(0,"div",0),n.kc(1,"async"),n.kc(2,"async"),n.Jc(3,v,11,13,"span",1),n.Tb(),n.Jc(4,C,11,2,"div",2)),2&t&&(n.pc("ngClass",n.uc(7,O,!(e.forceVertical||!0===n.lc(1,3,e.isHandset$)),e.forceVertical||!0===n.lc(2,5,e.isHandset$))),n.Bb(3),n.pc("ngForOf",e.units),n.Bb(1),n.pc("ngIf",e.cata&&!e.hideCataTarget))},directives:[u.k,u.l,u.m,d.b,d.f,f.b,m.a,d.g,l.a,p.n,l.c],pipes:[u.b,u.v],styles:[".full-width[_ngcontent-%COMP%]{width:99%}.pad[_ngcontent-%COMP%]{padding-left:6px;padding-right:6px}div.spread[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}div.spread[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:table-cell;text-align:center}"]}),t})()},"7Ixi":function(t,e,i){"use strict";i.d(e,"a",(function(){return v}));var n=i("fXoL"),a=i("3Pt+"),s=i("LRne"),c=i("Kj3r"),l=i("eIep"),o=i("YWTT"),r=i("Q2Ze"),b=i("e6WT"),u=i("vrAh"),d=i("ofXK"),f=i("bTqV"),m=i("NFeN"),p=i("FKr1");function h(t,e){if(1&t){const t=n.Vb();n.Ub(0,"button",6),n.fc("click",(function(){return n.Ac(t),n.jc().formControl.reset()})),n.Ub(1,"mat-icon"),n.Lc(2,"close"),n.Tb(),n.Tb()}}function g(t,e){if(1&t&&(n.Ub(0,"mat-option",7),n.Ub(1,"span"),n.Lc(2),n.Tb(),n.Ub(3,"small"),n.Lc(4),n.Tb(),n.Tb()),2&t){const t=e.$implicit;n.pc("value",t),n.Bb(2),n.Mc(t.search),n.Bb(2),n.Nc(" | Punkte: ",t.points,"")}}let v=(()=>{class t{constructor(t){this.villageService=t,this.label="Dorf",this.showClear=!1,this.onlyOwn=!1,this.formControl=new a.e("",t=>null==t.value||!t.value.id||"number"!=typeof t.value.id||t.value.id<0?{source:!0}:null),this.propagateChange=t=>{}}ngOnInit(){this.formControl.valueChanges.subscribe(t=>{this.propagateChange(t)})}writeValue(t){this.formControl.setValue(t)}registerOnChange(t){this.propagateChange=t}registerOnTouched(t){}setDisabledState(t){t?this.formControl.disable():this.formControl.enable()}displayFn(t){return t?t.search:""}ngAfterViewInit(){this.villages$=this.formControl.valueChanges.pipe(Object(c.a)(300),Object(l.a)(t=>"string"==typeof t?this.villageService.searchVillages(t,this.onlyOwn):"object"==typeof t&&null!==t?this.villageService.searchVillages(t.search,this.onlyOwn):Object(s.a)(void 0)))}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(o.a))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-village-input"]],inputs:{label:"label",showClear:"showClear",onlyOwn:"onlyOwn"},features:[n.Ab([{provide:a.m,multi:!0,useExisting:Object(n.V)(()=>t)},{provide:a.l,useValue:t=>null==t.value||!t.value.id||"number"!=typeof t.value.id||t.value.id<0?{source:!0}:null,multi:!0}])],decls:7,vars:8,consts:[[1,"full-width"],["autocomplete","off","autocapitalize","off","spellcheck","false","matInput","",1,"full-width",3,"placeholder","matAutocomplete","formControl"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["panelWidth","450px",3,"displayWith"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],[3,"value"]],template:function(t,e){if(1&t&&(n.Ub(0,"mat-form-field",0),n.Pb(1,"input",1),n.Jc(2,h,3,0,"button",2),n.Tb(),n.Ub(3,"mat-autocomplete",3,4),n.Jc(5,g,5,3,"mat-option",5),n.kc(6,"async"),n.Tb()),2&t){const t=n.xc(4);n.Bb(1),n.pc("placeholder",e.label)("matAutocomplete",t)("formControl",e.formControl),n.Bb(1),n.pc("ngIf",e.showClear&&e.formControl.value),n.Bb(1),n.pc("displayWith",e.displayFn),n.Bb(2),n.pc("ngForOf",n.lc(6,6,e.villages$))}},directives:[r.b,b.b,u.c,a.c,a.o,a.f,d.m,u.a,d.l,f.a,r.g,m.a,p.n],pipes:[d.b],styles:[".full-width[_ngcontent-%COMP%]{width:100%}"]}),t})()},DNTf:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));const n="(max-width: 1100.99px)"},YWTT:function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));class n{constructor(t,e){this.id=Math.random(),this.query=t,this.onlyOwn=e}getName(){return"io.robertengel.dsbot.feature.village.ws.packet.incoming.VillageSearchRequest"}}var a=i("pLZG"),s=i("SxV6"),c=i("lJxs");class l{constructor(t){this.id=t}getName(){return"io.robertengel.dsbot.feature.village.ws.packet.incoming.GetVillageByIdRequest"}}class o{constructor(t){this.id=Math.random(),this.paste=t}getName(){return"io.robertengel.dsbot.feature.village.ws.packet.incoming.VillageCoordPasteRequest"}}var r=i("fXoL"),b=i("7nMs");let u=(()=>{class t{constructor(t){this.web=t}searchVillages(t,e=!1){const i=new n(t,e);return this.web.observable("VillageSearchResponse",i).pipe(Object(a.a)(t=>t.id===i.id),Object(s.a)(),Object(c.a)(t=>t.villages))}coordPaste(t){const e=new o(t);return this.web.observable("VillageSearchResponse",e).pipe(Object(a.a)(t=>t.id===e.id),Object(s.a)(),Object(c.a)(t=>t.villages))}byId(t){return this.web.observable("VillageResponse",new l(t)).pipe(Object(a.a)(e=>e.id===t),Object(s.a)())}}return t.\u0275fac=function(e){return new(e||t)(r.cc(b.a))},t.\u0275prov=r.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},irRR:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("fXoL"),a=i("7nMs"),s=i("ofXK");function c(t,e){if(1&t){const t=n.Vb();n.Ub(0,"a",2),n.fc("click",(function(e){return n.Ac(t),e.stopPropagation()})),n.Lc(1),n.Pb(2,"br"),n.Tb()}if(2&t){const t=n.jc(2);n.pc("href",t.link,n.Cc),n.Bb(1),n.Pc(" ",t.value.name," (",t.value.x,"|",t.value.y,")")}}function l(t,e){if(1&t&&(n.Ub(0,"span"),n.Lc(1),n.Pb(2,"br"),n.Tb()),2&t){const t=n.jc(2);n.Bb(1),n.Pc(" ",t.value.name," (",t.value.x,"|",t.value.y,")")}}function o(t,e){if(1&t&&(n.Sb(0),n.Jc(1,c,3,4,"a",1),n.Jc(2,l,3,3,"span",0),n.Ub(3,"small"),n.Lc(4),n.kc(5,"number"),n.Tb(),n.Rb()),2&t){const t=n.jc();n.Bb(1),n.pc("ngIf",t.link),n.Bb(1),n.pc("ngIf",!t.link),n.Bb(2),n.Nc("Punkte: ",n.mc(5,3,t.value.points,"1.0","de"),"")}}let r=(()=>{class t{constructor(t){this.web=t}ngOnInit(){this.web.info().subscribe(t=>{this.world=t.world})}get link(){return this.world&&this.value?"https://"+this.world+".die-staemme.de/game.php?screen=info_village&id="+this.value.id:void 0}navigateTo(t){this.world&&this.value&&(t.stopPropagation(),window.open("https://"+this.world+".die-staemme.de/game.php?screen=info_village&id="+this.value.id,"_blank"))}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(a.a))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-village-render"]],inputs:{value:"value"},decls:1,vars:1,consts:[[4,"ngIf"],["target","_blank",3,"href","click",4,"ngIf"],["target","_blank",3,"href","click"]],template:function(t,e){1&t&&n.Jc(0,o,6,7,"ng-container",0),2&t&&n.pc("ngIf",e.value)},directives:[s.m],pipes:[s.e],styles:[".link[_ngcontent-%COMP%]{cursor:pointer}a[_ngcontent-%COMP%]{color:inherit}"]}),t})()},qriC:function(t,e,i){"use strict";i.r(e),i.d(e,"ScavengeModule",(function(){return Z}));var n=i("ofXK"),a=i("tyNb"),s=i("XNiG"),c=i("1G5W"),l=i("fXoL"),o=i("M9ds"),r=i("PDjf");const b=function(t){return[t]};function u(t,e){if(1&t){const t=l.Vb();l.Ub(0,"span",2),l.fc("click",(function(){l.Ac(t);const i=e.$implicit;return l.jc().activeLink=i})),l.Lc(1),l.Tb()}if(2&t){const t=e.$implicit,i=l.jc();l.pc("active",i.activeLink===t)("routerLink",l.tc(3,b,t.link)),l.Bb(1),l.Nc(" ",t.title," ")}}let d=(()=>{class t{constructor(t){this.router=t,this.links=[{title:"Home",link:"/scavenge"}],this.activeLink=this.links[0],this.unsub$=new s.b}ngOnInit(){this.setActive(),this.router.events.pipe(Object(c.a)(this.unsub$)).subscribe(t=>{this.setActive()})}setActive(){for(const t of this.links)this.router.isActive(t.link,!1)&&(this.activeLink=t)}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(a.c))},t.\u0275cmp=l.Ib({type:t,selectors:[["app-scavenge"]],decls:4,vars:1,consts:[["mat-tab-nav-bar",""],["mat-tab-link","",3,"active","routerLink","click",4,"ngFor","ngForOf"],["mat-tab-link","",3,"active","routerLink","click"]],template:function(t,e){1&t&&(l.Ub(0,"nav",0),l.Jc(1,u,2,5,"span",1),l.Tb(),l.Ub(2,"mat-card"),l.Pb(3,"router-outlet"),l.Tb()),2&t&&(l.Bb(1),l.pc("ngForOf",e.links))},directives:[o.b,n.l,r.a,a.g,o.a,a.d],styles:[""]}),t})();var f=i("3Pt+"),m=i("iELJ"),p=i("Vfqt"),h=i("5eHb"),g=i("NFeN"),v=i("ZFy/"),T=i("38Pe"),w=i("bTqV"),U=i("7Ixi"),k=i("e6WT"),C=i("OaSA"),O=i("irRR");function y(t,e){1&t&&(l.Ub(0,"th",24),l.Lc(1,"Dorf"),l.Tb())}function x(t,e){if(1&t&&(l.Ub(0,"td",25),l.Pb(1,"app-village-render",26),l.Tb()),2&t){const t=e.$implicit;l.Bb(1),l.pc("value",t)}}function V(t,e){1&t&&l.Pb(0,"th",24)}function L(t,e){if(1&t){const t=l.Vb();l.Ub(0,"td",25),l.Ub(1,"button",27),l.fc("click",(function(){l.Ac(t);const i=e.$implicit;return l.jc(2).removeVillage(i.id)})),l.Ub(2,"mat-icon"),l.Lc(3,"delete"),l.Tb(),l.Tb(),l.Tb()}}function j(t,e){1&t&&l.Pb(0,"tr",28)}function B(t,e){1&t&&l.Pb(0,"tr",29)}function P(t,e){if(1&t&&(l.Ub(0,"div",16),l.Ub(1,"table",17),l.Sb(2,18),l.Jc(3,y,2,0,"th",19),l.Jc(4,x,2,1,"td",20),l.Rb(),l.Sb(5,21),l.Jc(6,V,1,0,"th",19),l.Jc(7,L,4,0,"td",20),l.Rb(),l.Jc(8,j,1,0,"tr",22),l.Jc(9,B,1,0,"tr",23),l.Tb(),l.Tb()),2&t){const t=l.jc();l.Bb(1),l.pc("dataSource",t.data.villages),l.Bb(7),l.pc("matHeaderRowDef",t.displayedColumns),l.Bb(1),l.pc("matRowDefColumns",t.displayedColumns)}}let I=(()=>{class t{constructor(t,e,i,n){this.data=t,this.dialogRef=e,this.scavenge=i,this.toastr=n,this.unsub$=new s.b,this.form=new f.e({},f.v.required),this.villageForm=new f.e("",f.v.required),this.massVillageForm=new f.e("",f.v.required),this.nonFarmUnits=["militia","ram","catapult","snob","spy"],this.displayedColumns=["village","delete"],this.form.setValue(t.troops)}ngOnInit(){this.scavenge.taskEditEvent(this.unsub$).subscribe(t=>{t.id===this.data.id&&(this.toastr.success("Erfolgreich bearbeitet.",void 0,{timeOut:7e3}),this.form.enable())}),this.scavenge.villageAddedEvent(this.unsub$).subscribe(t=>{t.id===this.data.id&&(this.data.villages=[...this.data.villages,...t.villages])}),this.scavenge.villageRemovedEvent(this.unsub$).subscribe(t=>{t.id===this.data.id&&(this.data.villages=this.data.villages.filter(e=>!t.villages.includes(e.id)))})}massAdd(){this.scavenge.massAddVillage(this.data.id,this.massVillageForm.value)}massRemove(){this.scavenge.massRemoveVillage(this.data.id,this.massVillageForm.value)}addVillage(){this.scavenge.addVillage(this.data.id,this.villageForm.value.id)}removeVillage(t){this.scavenge.removeVillage(this.data.id,t)}submit(t){this.form.disable(),this.scavenge.editTask(this.data.id,t)}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(m.a),l.Ob(m.g),l.Ob(p.a),l.Ob(h.b))},t.\u0275cmp=l.Ib({type:t,selectors:[["app-scavenge-task-edit"]],decls:33,vars:10,consts:[[1,"row"],[1,"col-xl-12"],[1,"form-group","row"],[1,"col-xl-3"],["matTooltip","Maximale Einheiten die \xfcber alle Raubz\xfcge verteilt werden."],[1,"col-xl-9"],[3,"formControl","excludeUnits"],[1,"col-xl-12","flex-between"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click"],[1,"col-xl-6"],[1,"col-md-9"],[3,"formControl","onlyOwn"],["mat-raised-button","","color","primary",3,"disabled","click"],["placeholder","Massen Hinzuf\xfcgen/Entfernen","matInput","",3,"formControl"],["mat-raised-button","","color","primary",1,"mt-1",3,"disabled","click"],["class","col-xl-6 list",4,"ngIf"],[1,"col-xl-6","list"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","village"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","delete"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"value"],["type","button","mat-mini-fab","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(l.Ub(0,"div",0),l.Ub(1,"div",1),l.Ub(2,"div",2),l.Ub(3,"div",3),l.Ub(4,"label"),l.Lc(5,"Einheiten "),l.Ub(6,"mat-icon",4),l.Lc(7,"info "),l.Tb(),l.Tb(),l.Tb(),l.Ub(8,"div",5),l.Pb(9,"app-units-input",6),l.Tb(),l.Tb(),l.Ub(10,"div",2),l.Ub(11,"div",7),l.Pb(12,"span"),l.Ub(13,"button",8),l.fc("click",(function(){return e.submit(e.form.value)})),l.Lc(14," Bearbeiten "),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Ub(15,"div",0),l.Ub(16,"div",9),l.Ub(17,"div",0),l.Ub(18,"div",10),l.Pb(19,"app-village-input",11),l.Tb(),l.Ub(20,"div",3),l.Ub(21,"button",12),l.fc("click",(function(){return e.addVillage()})),l.Lc(22," Dorf hinzuf\xfcgen. "),l.Tb(),l.Tb(),l.Tb(),l.Ub(23,"div",0),l.Ub(24,"div",10),l.Pb(25,"textarea",13),l.Tb(),l.Ub(26,"div",3),l.Ub(27,"button",12),l.fc("click",(function(){return e.massAdd()})),l.Lc(28," D\xf6rfer hinzuf\xfcgen. "),l.Tb(),l.Pb(29,"br"),l.Ub(30,"button",14),l.fc("click",(function(){return e.massRemove()})),l.Lc(31," D\xf6rfer entfernen. "),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Jc(32,P,10,3,"div",15),l.Tb()),2&t&&(l.Bb(9),l.pc("formControl",e.form)("excludeUnits",e.nonFarmUnits),l.Bb(4),l.pc("disabled",!e.form.valid||e.form.disabled),l.Bb(6),l.pc("formControl",e.villageForm)("onlyOwn",!0),l.Bb(2),l.pc("disabled",e.villageForm.disabled||e.villageForm.invalid),l.Bb(4),l.pc("formControl",e.massVillageForm),l.Bb(2),l.pc("disabled",e.massVillageForm.disabled||e.massVillageForm.invalid),l.Bb(3),l.pc("disabled",e.massVillageForm.disabled||e.massVillageForm.invalid),l.Bb(2),l.pc("ngIf",e.data.villages.length>0))},directives:[g.a,v.a,T.a,f.o,f.f,w.a,U.a,k.b,f.c,n.m,C.j,C.c,C.e,C.b,C.g,C.i,C.d,C.a,O.a,C.f,C.h],styles:[".list[_ngcontent-%COMP%]{overflow-y:auto;max-height:50vh}"]}),t})(),R=(()=>{class t{constructor(t,e){this.dialogRef=t,this.scavenge=e,this.form=new f.e({},f.v.required),this.nonFarmUnits=["militia","ram","catapult","snob","spy"]}ngOnInit(){}submit(t){this.form.disable(),this.scavenge.addTask(t)}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(m.g),l.Ob(p.a))},t.\u0275cmp=l.Ib({type:t,selectors:[["app-scavenge-task-add"]],decls:15,vars:3,consts:[[1,"row"],[1,"col-xl-12"],[1,"form-group","row"],[1,"col-xl-3"],["matTooltip","Maximale Einheiten die \xfcber alle Raubz\xfcge verteilt werden."],[1,"col-xl-9"],[3,"formControl","excludeUnits"],[1,"col-xl-12","flex-between"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click"]],template:function(t,e){1&t&&(l.Ub(0,"div",0),l.Ub(1,"div",1),l.Ub(2,"div",2),l.Ub(3,"div",3),l.Ub(4,"label"),l.Lc(5,"Einheiten "),l.Ub(6,"mat-icon",4),l.Lc(7," info "),l.Tb(),l.Tb(),l.Tb(),l.Ub(8,"div",5),l.Pb(9,"app-units-input",6),l.Tb(),l.Tb(),l.Ub(10,"div",2),l.Ub(11,"div",7),l.Pb(12,"span"),l.Ub(13,"button",8),l.fc("click",(function(){return e.submit(e.form.value)})),l.Lc(14," Hinzuf\xfcgen "),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb()),2&t&&(l.Bb(9),l.pc("formControl",e.form)("excludeUnits",e.nonFarmUnits),l.Bb(4),l.pc("disabled",!e.form.valid||e.form.disabled))},directives:[g.a,v.a,T.a,f.o,f.f,w.a],styles:[""]}),t})();var F=i("hC39");function D(t,e){1&t&&(l.Ub(0,"th",10),l.Lc(1,"D\xf6rfer"),l.Tb())}function $(t,e){if(1&t&&(l.Ub(0,"td",11),l.Lc(1),l.Tb()),2&t){const t=e.$implicit;l.Bb(1),l.Nc(" ",t.villages.length," ")}}function J(t,e){1&t&&(l.Ub(0,"th",10),l.Lc(1,"Einheiten"),l.Tb())}function A(t,e){if(1&t&&(l.Ub(0,"td",11),l.Pb(1,"app-units-render-min",12),l.Tb()),2&t){const t=e.$implicit;l.Bb(1),l.pc("value",t.troops)}}function M(t,e){if(1&t){const t=l.Vb();l.Ub(0,"th",10),l.Ub(1,"button",13),l.fc("click",(function(){return l.Ac(t),l.jc(2).add()})),l.Ub(2,"mat-icon"),l.Lc(3,"add"),l.Tb(),l.Tb(),l.Tb()}}function E(t,e){if(1&t){const t=l.Vb();l.Ub(0,"td",11),l.Ub(1,"button",14),l.fc("click",(function(){l.Ac(t);const i=e.$implicit;return l.jc(2).edit(i)})),l.Ub(2,"mat-icon"),l.Lc(3,"edit"),l.Tb(),l.Tb(),l.Ub(4,"button",15),l.fc("click",(function(){l.Ac(t);const i=e.$implicit;return l.jc(2).delete(i.id)})),l.Ub(5,"mat-icon"),l.Lc(6,"delete"),l.Tb(),l.Tb(),l.Tb()}}function S(t,e){1&t&&l.Pb(0,"tr",16)}function _(t,e){1&t&&l.Pb(0,"tr",17)}function H(t,e){if(1&t&&(l.Ub(0,"table",2),l.Sb(1,3),l.Jc(2,D,2,0,"th",4),l.Jc(3,$,2,1,"td",5),l.Rb(),l.Sb(4,6),l.Jc(5,J,2,0,"th",4),l.Jc(6,A,2,1,"td",5),l.Rb(),l.Sb(7,7),l.Jc(8,M,4,0,"th",4),l.Jc(9,E,7,0,"td",5),l.Rb(),l.Jc(10,S,1,0,"tr",8),l.Jc(11,_,1,0,"tr",9),l.Tb()),2&t){const t=l.jc();l.pc("dataSource",t.tasks),l.Bb(10),l.pc("matHeaderRowDef",t.displayedColumns),l.Bb(1),l.pc("matRowDefColumns",t.displayedColumns)}}function N(t,e){if(1&t){const t=l.Vb();l.Ub(0,"div",18),l.Ub(1,"div",19),l.Pb(2,"span"),l.Ub(3,"span",20),l.Lc(4," Keine Tasks vorhanden."),l.Pb(5,"br"),l.Ub(6,"button",21),l.fc("click",(function(){return l.Ac(t),l.jc().add()})),l.Lc(7," Hinzuf\xfcgen. "),l.Tb(),l.Tb(),l.Pb(8,"span"),l.Tb(),l.Tb()}}const q=[{path:"",component:d,children:[{path:"",pathMatch:"full",component:(()=>{class t{constructor(t,e){this.scavenge=t,this.dialog=e,this.unsub$=new s.b,this.slide=new f.e,this.dialogRef=void 0,this.displayedColumns=["villages","units","control"]}ngOnInit(){this.scavenge.listTasks().subscribe(t=>{this.tasks=t}),this.scavenge.enableEvent(this.unsub$).subscribe(t=>{this.slide.setValue(t,{emitEvent:!1})}),this.slide.valueChanges.subscribe(t=>{this.scavenge.setEnabled(t)}),this.scavenge.taskEditEvent(this.unsub$).subscribe(t=>{this.tasks=this.tasks.map(e=>e.id===t.id?t:e)}),this.scavenge.taskAddedEvent(this.unsub$).subscribe(t=>{void 0!==this.dialogRef&&(this.dialogRef.close(),this.tasks=[...this.tasks,t],this.dialog.open(I,{data:t}))}),this.scavenge.taskRemovedEvent(this.unsub$).subscribe(t=>{this.tasks=this.tasks.filter(e=>e.id!==t)})}delete(t){this.scavenge.removeTask(t)}edit(t){this.dialog.open(I,{data:t})}add(){this.dialogRef=this.dialog.open(R)}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(p.a),l.Ob(m.b))},t.\u0275cmp=l.Ib({type:t,selectors:[["app-scavenge-overview"]],decls:2,vars:2,consts:[["mat-table","","class","w-100",3,"dataSource",4,"ngIf"],["class","row",4,"ngIf"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","villages"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","units"],["matColumnDef","control"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"value"],["mat-mini-fab","","color","primary",3,"click"],["mat-mini-fab","",1,"mr-2",3,"click"],["mat-mini-fab","","matTooltip","Unwiderruflich l\xf6schen.",3,"click"],["mat-header-row",""],["mat-row",""],[1,"row"],[1,"col-xl-12","flex-between"],[1,"text-center"],["mat-raised-button","",3,"click"]],template:function(t,e){1&t&&(l.Jc(0,H,12,3,"table",0),l.Jc(1,N,9,0,"div",1)),2&t&&(l.pc("ngIf",e.tasks&&e.tasks.length>0),l.Bb(1),l.pc("ngIf",e.tasks&&0===e.tasks.length))},directives:[n.m,C.j,C.c,C.e,C.b,C.g,C.i,C.d,C.a,F.a,w.a,g.a,v.a,C.f,C.h],styles:[".mat-column-control[_ngcontent-%COMP%]{width:10%}"]}),t})()}]}];let X=(()=>{class t{}return t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({factory:function(e){return new(e||t)},imports:[[a.f.forChild(q)],a.f]}),t})();var K=i("BLWB"),W=i("Q2Ze"),z=i("jMqV");let Z=(()=>{class t{}return t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({factory:function(e){return new(e||t)},imports:[[n.c,X,o.c,r.f,K.a,g.b,v.b,w.b,f.t,W.d,k.c,C.l,z.b]]}),t})()}}]);