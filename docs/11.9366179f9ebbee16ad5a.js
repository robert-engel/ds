(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{KuHJ:function(t,e,i){"use strict";i.r(e),i.d(e,"CommandModule",(function(){return te}));var n=i("ofXK"),a=i("tyNb"),o=i("XNiG"),c=i("1G5W"),s=i("fXoL"),r=i("M9ds");const b=function(t){return[t]};function l(t,e){if(1&t){const t=s.Vb();s.Ub(0,"span",2),s.fc("click",(function(){s.Cc(t);const i=e.$implicit;return s.jc().activeLink=i})),s.Nc(1),s.Tb()}if(2&t){const t=e.$implicit,i=s.jc();s.pc("active",i.activeLink===t)("routerLink",s.tc(3,b,t.link)),s.Bb(1),s.Pc(" ",t.title," ")}}let m=(()=>{class t{constructor(t){this.router=t,this.links=[{title:"Home",link:"/command"},{title:"Schedule",link:"/command/schedule"},{title:"Simple Timer",link:"/command/timer"},{title:"Import Workbench",link:"/command/import"}],this.activeLink=this.links[0],this.unsub$=new o.b}ngOnInit(){this.setActive(),this.router.events.pipe(Object(c.a)(this.unsub$)).subscribe(t=>{this.setActive()})}setActive(){for(const t of this.links)this.router.isActive(t.link,!1)&&(this.activeLink=t)}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(a.b))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-command"]],decls:3,vars:1,consts:[["mat-tab-nav-bar",""],["mat-tab-link","",3,"active","routerLink","click",4,"ngFor","ngForOf"],["mat-tab-link","",3,"active","routerLink","click"]],template:function(t,e){1&t&&(s.Ub(0,"nav",0),s.Lc(1,l,2,5,"span",1),s.Tb(),s.Pb(2,"router-outlet")),2&t&&(s.Bb(1),s.pc("ngForOf",e.links))},directives:[r.b,n.l,a.f,r.a,a.c],encapsulation:2}),t})();var d=i("l5mm"),u=i("R0Ic"),p=i("0EQZ"),f=i("3Pt+"),h=i("wd/R"),T=i("7nMs"),g=i("5za1"),v=i("5eHb"),U=i("PDjf"),k=i("7Ixi"),w=i("bTqV"),y=i("Q2Ze"),C=i("e6WT"),x=i("TN/R"),O=i("ZTz/"),S=i("jTwa"),B=i("FKr1"),P=i("38Pe");function N(t,e){if(1&t&&(s.Ub(0,"mat-option",17),s.Pb(1,"app-unit-render",17),s.Tb()),2&t){const t=e.$implicit;s.pc("value",t),s.Bb(1),s.pc("value",t)}}function L(t,e){if(1&t&&(s.Ub(0,"mat-option",17),s.Nc(1),s.Tb()),2&t){const t=e.$implicit;s.pc("value",t.id),s.Bb(1),s.Pc(" ",t.name," ")}}function D(t,e){if(1&t&&(s.Sb(0,19),s.Pb(1,"app-units-input",27),s.Rb()),2&t){const t=s.jc();s.Bb(1),s.pc("formControl",t.unitsForm)}}let I=(()=>{class t{constructor(t,e,i,n,a,c){this.fb=t,this.web=e,this.command=i,this.route=n,this.router=a,this.toastr=c,this.unsub$=new o.b,this.fromForm=new f.e(""),this.toForm=new f.e(""),this.unitsForm=new f.e,this.templateForm=new f.e,this.unitForm=new f.e("",f.v.required),this.commandTypeForm=new f.e,this.sendDateTimeForm=this.fb.group({date:h(),time:h().format("HH:mm:ss:SSS")}),this.arrivalDateTimeForm=this.fb.group({date:h(),time:h().format("HH:mm:ss:SSS")}),this.disabled=!1}ngOnInit(){this.web.infoObservable.subscribe(t=>{this.units=t.units}),this.command.getTroopTemplates().subscribe(t=>{this.templates=t}),this.command.getEditTask().pipe(Object(c.a)(this.unsub$)).subscribe(t=>{t?(this.taskId=t.id,this.title=`Bearbeiten von Task ${t.commandType} ${t.sendTime.display}`,this.fromForm.setValue(t.from),this.toForm.setValue(t.to),this.unitsForm.setValue(t.units),this.unitForm.setValue(t.unit),this.templateForm.setValue("custom"),this.commandTypeForm.setValue(t.commandType),this.command.getEditTimes(t.id).subscribe(t=>{this.sendDateTimeForm.setValue({date:h(t.sendTime),time:h(t.sendTime).format("HH:mm:ss:SSS")}),this.arrivalDateTimeForm.setValue({date:h(t.arrivalTime),time:h(t.arrivalTime).format("HH:mm:ss:SSS")})})):this.router.navigate(["/command"])}),this.command.editCommandsEvents().pipe(Object(c.a)(this.unsub$)).subscribe(t=>{this.toastr.success("Erfolgreich bearbeitet.",void 0,{timeOut:7e3})}),this.route.params.pipe(Object(c.a)(this.unsub$)).subscribe(t=>{})}updateFrom(t){this.disabled=!0,setTimeout(()=>this.disabled=!1,1500),this.command.editSource(this.taskId,t.id)}updateTo(t){this.disabled=!0,setTimeout(()=>this.disabled=!1,1500),this.command.editTarget(this.taskId,t.id)}updateUnits(t,e){this.disabled=!0,setTimeout(()=>this.disabled=!1,1500),this.command.editTroops(this.taskId,"custom"===t?void 0:t,"custom"===t?e:void 0)}updateUnit(t){this.disabled=!0,setTimeout(()=>this.disabled=!1,1500),this.command.editSlowestUnit(this.taskId,t)}updateCommandType(t){this.disabled=!0,setTimeout(()=>this.disabled=!1,1500),this.command.editCommandType(this.taskId,t)}updateArrivalTime(t){const e=h(t.date.format("DD.MM.YYYY")+" "+t.time,"DD.MM.YYYY HH:mm:ss:SSS");this.disabled=!0,setTimeout(()=>this.disabled=!1,1500),this.command.editArrival(this.taskId,e.valueOf())}updateSendTime(t){this.disabled=!0;const e=h(t.date.format("DD.MM.YYYY")+" "+t.time,"DD.MM.YYYY HH:mm:ss:SSS");setTimeout(()=>this.disabled=!1,1500),this.command.editSendTime(this.taskId,e.valueOf())}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(f.d),s.Ob(T.a),s.Ob(g.a),s.Ob(a.a),s.Ob(a.b),s.Ob(v.b))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-command-edit"]],decls:97,vars:23,consts:[[1,"form-group","row"],[1,"label","col-sm-1","col-form-label"],[1,"col-xl-8"],[3,"formControl"],[1,"col-xl-3"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click"],[1,"label","col-xl-1","col-form-label"],[3,"formGroup","ngSubmit"],["matInput","","placeholder","Pick Date","formControlName","date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["matInput","","maxlength","12","formControlName","time"],["type","submit","mat-raised-button","","color","primary",3,"disabled"],["arrivalpicker",""],["for","unit",1,"label","col-xl-1","col-form-label"],[1,"example-full-width"],["id","unit",3,"formControl"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"full-width"],["id","template",3,"formControl"],["value","custom"],["class","full-width",4,"ngIf"],["for","commandType",1,"label","col-xl-1","col-form-label"],["id","commandType",3,"formControl"],["value","ATTACK"],["value","SUPPORT"],["required","","id","units",3,"formControl"]],template:function(t,e){if(1&t&&(s.Ub(0,"mat-card-title"),s.Nc(1),s.Tb(),s.Ub(2,"div",0),s.Ub(3,"label",1),s.Nc(4,"Herkunft"),s.Tb(),s.Ub(5,"div",2),s.Pb(6,"app-village-input",3),s.Tb(),s.Ub(7,"div",4),s.Ub(8,"button",5),s.fc("click",(function(){return e.updateFrom(e.fromForm.value)})),s.Nc(9," Herkunft Aktualisieren "),s.Tb(),s.Tb(),s.Tb(),s.Ub(10,"div",0),s.Ub(11,"label",6),s.Nc(12,"Ziel"),s.Tb(),s.Ub(13,"div",2),s.Pb(14,"app-village-input",3),s.Tb(),s.Ub(15,"div",4),s.Ub(16,"button",5),s.fc("click",(function(){return e.updateTo(e.toForm.value)})),s.Nc(17," Ziel Aktualisieren "),s.Tb(),s.Tb(),s.Tb(),s.Ub(18,"form",7),s.fc("ngSubmit",(function(){return e.updateSendTime(e.sendDateTimeForm.value)})),s.Ub(19,"div",0),s.Ub(20,"label",6),s.Nc(21,"Abschickzeit"),s.Tb(),s.Ub(22,"div",2),s.Ub(23,"mat-form-field"),s.Ub(24,"mat-label"),s.Nc(25,"Datum"),s.Tb(),s.Pb(26,"input",8),s.Pb(27,"mat-datepicker-toggle",9),s.Pb(28,"mat-datepicker",null,10),s.Tb(),s.Ub(30,"mat-form-field"),s.Pb(31,"input",11),s.Tb(),s.Tb(),s.Ub(32,"div",4),s.Ub(33,"button",12),s.Nc(34," Abschickzeit aktualisieren "),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(35,"form",7),s.fc("ngSubmit",(function(){return e.updateArrivalTime(e.arrivalDateTimeForm.value)})),s.Ub(36,"div",0),s.Ub(37,"label",6),s.Nc(38,"Ankunft"),s.Tb(),s.Ub(39,"div",2),s.Ub(40,"mat-form-field"),s.Ub(41,"mat-label"),s.Nc(42,"Datum"),s.Tb(),s.Pb(43,"input",8),s.Pb(44,"mat-datepicker-toggle",9),s.Pb(45,"mat-datepicker",null,13),s.Tb(),s.Ub(47,"mat-form-field"),s.Pb(48,"input",11),s.Tb(),s.Tb(),s.Ub(49,"div",4),s.Ub(50,"button",12),s.Nc(51," Ankunftszeit aktualisieren "),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(52,"div",0),s.Ub(53,"label",14),s.Nc(54,"Einheit"),s.Tb(),s.Ub(55,"div",2),s.Ub(56,"mat-form-field",15),s.Ub(57,"mat-label"),s.Nc(58,"Einheit"),s.Tb(),s.Ub(59,"mat-select",16),s.Ub(60,"mat-select-trigger"),s.Pb(61,"app-unit-render",17),s.Tb(),s.Lc(62,N,2,2,"mat-option",18),s.Tb(),s.Tb(),s.Tb(),s.Ub(63,"div",4),s.Ub(64,"button",5),s.fc("click",(function(){return e.updateUnit(e.unitForm.value)})),s.Nc(65," Einheit Aktualisieren "),s.Tb(),s.Tb(),s.Tb(),s.Ub(66,"div",0),s.Ub(67,"label",6),s.Nc(68,"Einheiten"),s.Tb(),s.Ub(69,"div",2),s.Ub(70,"mat-form-field",19),s.Ub(71,"mat-label"),s.Nc(72,"Standard Angriff"),s.Tb(),s.Ub(73,"mat-select",20),s.Lc(74,L,2,2,"mat-option",18),s.Ub(75,"mat-option",21),s.Nc(76," Custom "),s.Tb(),s.Tb(),s.Tb(),s.Pb(77,"br"),s.Lc(78,D,2,1,"ng-container",22),s.Tb(),s.Ub(79,"div",4),s.Ub(80,"button",5),s.fc("click",(function(){return e.updateUnits(e.templateForm.value,e.unitsForm.value)})),s.Nc(81," Einheiten Aktualisieren "),s.Tb(),s.Tb(),s.Tb(),s.Ub(82,"div",0),s.Ub(83,"label",23),s.Nc(84,"Befehlstyp"),s.Tb(),s.Ub(85,"div",2),s.Ub(86,"mat-form-field",15),s.Ub(87,"mat-label"),s.Nc(88,"Befehlstyp"),s.Tb(),s.Ub(89,"mat-select",24),s.Ub(90,"mat-option",25),s.Nc(91,"Angriff"),s.Tb(),s.Ub(92,"mat-option",26),s.Nc(93,"Unterst\xfctzung"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(94,"div",4),s.Ub(95,"button",5),s.fc("click",(function(){return e.updateCommandType(e.commandTypeForm.value)})),s.Nc(96," Befehlstyp Aktualisieren "),s.Tb(),s.Tb(),s.Tb()),2&t){const t=s.zc(29),i=s.zc(46);s.Bb(1),s.Pc(" ",e.title," "),s.Bb(5),s.pc("formControl",e.fromForm),s.Bb(2),s.pc("disabled",!e.fromForm.valid||e.disabled),s.Bb(6),s.pc("formControl",e.toForm),s.Bb(2),s.pc("disabled",!e.toForm.valid||e.disabled),s.Bb(2),s.pc("formGroup",e.sendDateTimeForm),s.Bb(8),s.pc("matDatepicker",t),s.Bb(1),s.pc("for",t),s.Bb(6),s.pc("disabled",!e.sendDateTimeForm.valid||e.disabled),s.Bb(2),s.pc("formGroup",e.arrivalDateTimeForm),s.Bb(8),s.pc("matDatepicker",i),s.Bb(1),s.pc("for",i),s.Bb(6),s.pc("disabled",!e.arrivalDateTimeForm.valid||e.disabled),s.Bb(9),s.pc("formControl",e.unitForm),s.Bb(2),s.pc("value",e.unitForm.value),s.Bb(1),s.pc("ngForOf",e.units),s.Bb(2),s.pc("disabled",!e.unitForm.valid||e.disabled),s.Bb(9),s.pc("formControl",e.templateForm),s.Bb(1),s.pc("ngForOf",e.templates),s.Bb(4),s.pc("ngIf","custom"===e.templateForm.value),s.Bb(2),s.pc("disabled",!e.unitsForm.valid||e.disabled),s.Bb(9),s.pc("formControl",e.commandTypeForm),s.Bb(6),s.pc("disabled",!e.commandTypeForm.valid||e.disabled)}},directives:[U.h,k.a,f.o,f.f,w.a,f.x,f.p,f.i,y.b,y.f,C.b,f.c,x.b,f.g,x.d,y.g,x.a,f.k,O.a,O.c,S.a,n.l,B.l,n.m,P.a,f.u],styles:[".full-width[_ngcontent-%COMP%]{width:100%}.shipping-card[_ngcontent-%COMP%]{min-width:120px;margin:20px auto}.mat-radio-button[_ngcontent-%COMP%]{display:block;margin:5px 0}.row[_ngcontent-%COMP%]{display:flex;flex-direction:row}.col[_ngcontent-%COMP%]{flex:1;margin-right:20px}.col[_ngcontent-%COMP%]:last-child{margin-right:0}"]}),t})();class F{constructor(t,e){this._document=e;const i=this._textarea=this._document.createElement("textarea"),n=i.style;n.position="fixed",n.top=n.opacity="0",n.left="-999em",i.setAttribute("aria-hidden","true"),i.value=t,this._document.body.appendChild(i)}copy(){const t=this._textarea;let e=!1;try{if(t){const i=this._document.activeElement;t.select(),t.setSelectionRange(0,t.value.length),e=this._document.execCommand("copy"),i&&i.focus()}}catch(i){}return e}destroy(){const t=this._textarea;t&&(t.parentNode&&t.parentNode.removeChild(t),this._textarea=void 0)}}let j=(()=>{class t{constructor(t){this._document=t}copy(t){const e=this.beginCopy(t),i=e.copy();return e.destroy(),i}beginCopy(t){return new F(t,this._document)}}return t.\u0275fac=function(e){return new(e||t)(s.cc(n.d))},t.\u0275prov=Object(s.Kb)({factory:function(){return new t(Object(s.cc)(n.d))},token:t,providedIn:"root"}),t})();var $=i("iELJ"),A=i("ZFy/"),M=i("NFeN"),R=i("OaSA"),_=i("5QHs"),H=i("pu8Q"),E=i("pMoy"),V=i("irRR"),z=i("k2HR"),Y=i("DSdR");function W(t,e){1&t&&(s.Sb(0),s.Nc(1,"Keine Tasks vorhanden. "),s.Rb())}function Z(t,e){if(1&t){const t=s.Vb();s.Ub(0,"button",24),s.fc("click",(function(){return s.Cc(t),s.jc(2).deleteSelected()})),s.Ub(1,"mat-icon"),s.Nc(2,"delete"),s.Tb(),s.Tb()}}function G(t,e){1&t&&s.Pb(0,"mat-spinner")}function K(t,e){if(1&t&&(s.Ub(0,"div",25),s.Lc(1,G,1,0,"mat-spinner",0),s.Tb()),2&t){const t=s.jc(2);s.Bb(1),s.pc("ngIf",t.isLoadingResults)}}function q(t,e){if(1&t){const t=s.Vb();s.Ub(0,"th",26),s.Ub(1,"mat-checkbox",27),s.fc("change",(function(e){s.Cc(t);const i=s.jc(2);return e?i.masterToggle():null})),s.Tb(),s.Tb()}if(2&t){const t=s.jc(2);s.Bb(1),s.pc("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())}}function J(t,e){if(1&t){const t=s.Vb();s.Ub(0,"td",28),s.Ub(1,"mat-checkbox",29),s.fc("click",(function(e){return s.Cc(t),e.stopPropagation()}))("change",(function(i){s.Cc(t);const n=e.$implicit,a=s.jc(2);return i?a.selection.toggle(n):null})),s.Tb(),s.Tb()}if(2&t){const t=e.$implicit,i=s.jc(2);s.Bb(1),s.pc("checked",i.selection.isSelected(t))}}function Q(t,e){1&t&&(s.Ub(0,"th",26),s.Nc(1," Herkunft"),s.Tb())}function X(t,e){if(1&t&&(s.Ub(0,"td",28),s.Pb(1,"app-village-render",30),s.Tb()),2&t){const t=e.$implicit;s.Bb(1),s.pc("value",t.from)}}function tt(t,e){1&t&&(s.Ub(0,"th",26),s.Nc(1," Ziel"),s.Tb())}function et(t,e){if(1&t&&(s.Ub(0,"td",28),s.Pb(1,"app-village-render",30),s.Tb()),2&t){const t=e.$implicit;s.Bb(1),s.pc("value",t.to)}}function it(t,e){1&t&&(s.Ub(0,"th",26),s.Nc(1," Typ"),s.Tb())}function nt(t,e){1&t&&s.Pb(0,"app-unit-render",33),2&t&&s.pc("value","axe")}function at(t,e){1&t&&s.Pb(0,"app-unit-render",34),2&t&&s.pc("value","sword")}function ot(t,e){if(1&t&&(s.Ub(0,"td",28),s.Lc(1,nt,1,1,"app-unit-render",31),s.Lc(2,at,1,1,"app-unit-render",32),s.Tb()),2&t){const t=e.$implicit;s.Bb(1),s.pc("ngIf","ATTACK"===t.commandType),s.Bb(1),s.pc("ngIf","SUPPORT"===t.commandType)}}function ct(t,e){1&t&&(s.Ub(0,"th",26),s.Nc(1," Einheit"),s.Tb())}function st(t,e){if(1&t&&(s.Ub(0,"td",28),s.Pb(1,"app-unit-render",30),s.Tb()),2&t){const t=e.$implicit;s.Bb(1),s.pc("value",t.unit)}}function rt(t,e){1&t&&(s.Ub(0,"th",26),s.Nc(1," Abschickzeit"),s.Tb())}function bt(t,e){if(1&t&&(s.Ub(0,"td",28),s.Nc(1),s.Tb()),2&t){const t=e.$implicit;s.Bb(1),s.Pc(" ",t.sendTime.display," ")}}function lt(t,e){1&t&&(s.Ub(0,"th",26),s.Nc(1," Ankunftszeit"),s.Tb())}function mt(t,e){if(1&t&&(s.Ub(0,"td",28),s.Nc(1),s.Ub(2,"small"),s.Nc(3),s.Tb(),s.Tb()),2&t){const t=e.$implicit;s.Bb(1),s.Pc(" ",t.arrivalTime.display,""),s.Bb(2),s.Pc(":",t.arrivalTime.ms,"")}}function dt(t,e){1&t&&(s.Ub(0,"th",26),s.Nc(1," Verbleibend"),s.Tb())}function ut(t,e){if(1&t&&(s.Sb(0),s.Nc(1),s.kc(2,"hms"),s.Rb()),2&t){const t=s.jc().$implicit;s.Bb(1),s.Pc(" ",s.lc(2,1,1e3*t.remainingDelay)," ")}}function pt(t,e){1&t&&(s.Sb(0),s.Ub(1,"span",35),s.Nc(2,"00:00:00"),s.Tb(),s.Rb())}function ft(t,e){if(1&t&&(s.Ub(0,"td",28),s.Lc(1,ut,3,3,"ng-container",0),s.Lc(2,pt,3,0,"ng-container",0),s.Tb()),2&t){const t=e.$implicit;s.Bb(1),s.pc("ngIf",1e3*t.remainingDelay>0),s.Bb(1),s.pc("ngIf",1e3*t.remainingDelay<=0)}}function ht(t,e){if(1&t){const t=s.Vb();s.Ub(0,"td",28),s.Ub(1,"div",36),s.Pb(2,"span"),s.Pb(3,"app-units-render",30),s.Ub(4,"div",37),s.Ub(5,"a",38),s.Ub(6,"button",39),s.Ub(7,"mat-icon"),s.Nc(8,"open_in_new"),s.Tb(),s.Tb(),s.Tb(),s.Ub(9,"button",40),s.fc("click",(function(){s.Cc(t);const i=e.$implicit;return s.jc(2).editTask(i)})),s.Ub(10,"mat-icon"),s.Nc(11,"edit"),s.Tb(),s.Tb(),s.Ub(12,"button",41),s.fc("click",(function(){s.Cc(t);const i=e.$implicit;return s.jc(2).delete(i)})),s.Ub(13,"mat-icon"),s.Nc(14,"delete_forever"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb()}if(2&t){const t=e.$implicit,i=s.jc(2);s.Cb("colspan",i.columnsToDisplay.length),s.Bb(1),s.pc("@detailExpand",t==i.expandedElement?"expanded":"collapsed"),s.Bb(2),s.pc("value",t.units),s.Bb(2),s.pc("href",i.placeLink(t),s.Ec)}}function Tt(t,e){1&t&&s.Pb(0,"tr",42)}function gt(t,e){if(1&t){const t=s.Vb();s.Ub(0,"tr",43),s.fc("click",(function(){s.Cc(t);const i=e.$implicit,n=s.jc(2);return n.expandedElement=n.expandedElement===i?null:i})),s.Tb()}if(2&t){const t=e.$implicit,i=s.jc(2);s.Gb("example-expanded-row",t==i.expandedElement)}}function vt(t,e){1&t&&s.Pb(0,"tr",44)}const Ut=function(){return["expandedDetail"]},kt=function(){return[10,50,100,250]};function wt(t,e){if(1&t){const t=s.Vb();s.Sb(0),s.Ub(1,"div",1),s.Ub(2,"div",2),s.Pb(3,"span"),s.Ub(4,"span"),s.Lc(5,Z,3,0,"button",3),s.Ub(6,"button",4),s.fc("click",(function(){return s.Cc(t),s.jc().exportWorkbench()})),s.Ub(7,"mat-icon"),s.Nc(8,"import_export"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(9,"div",5),s.Lc(10,K,2,1,"div",6),s.Ub(11,"div",7),s.Ub(12,"table",8),s.Sb(13,9),s.Lc(14,q,2,2,"th",10),s.Lc(15,J,2,1,"td",11),s.Rb(),s.Sb(16,12),s.Lc(17,Q,2,0,"th",10),s.Lc(18,X,2,1,"td",11),s.Rb(),s.Sb(19,13),s.Lc(20,tt,2,0,"th",10),s.Lc(21,et,2,1,"td",11),s.Rb(),s.Sb(22,14),s.Lc(23,it,2,0,"th",10),s.Lc(24,ot,3,2,"td",11),s.Rb(),s.Sb(25,15),s.Lc(26,ct,2,0,"th",10),s.Lc(27,st,2,1,"td",11),s.Rb(),s.Sb(28,16),s.Lc(29,rt,2,0,"th",10),s.Lc(30,bt,2,1,"td",11),s.Rb(),s.Sb(31,17),s.Lc(32,lt,2,0,"th",10),s.Lc(33,mt,4,2,"td",11),s.Rb(),s.Sb(34,18),s.Lc(35,dt,2,0,"th",10),s.Lc(36,ft,3,2,"td",11),s.Rb(),s.Sb(37,19),s.Lc(38,ht,15,4,"td",11),s.Rb(),s.Lc(39,Tt,1,0,"tr",20),s.Lc(40,gt,1,2,"tr",21),s.Lc(41,vt,1,0,"tr",22),s.Tb(),s.Tb(),s.Ub(42,"mat-paginator",23),s.fc("page",(function(e){return s.Cc(t),s.jc().pageUpdate(e)})),s.Tb(),s.Tb(),s.Rb()}if(2&t){const t=s.jc();s.Bb(5),s.pc("ngIf",t.selection.hasValue()),s.Bb(5),s.pc("ngIf",t.isLoadingResults),s.Bb(2),s.pc("dataSource",t.tasks.tasks),s.Bb(27),s.pc("matHeaderRowDef",t.columnsToDisplay),s.Bb(1),s.pc("matRowDefColumns",t.columnsToDisplay),s.Bb(1),s.pc("matRowDefColumns",s.sc(9,Ut)),s.Bb(1),s.pc("length",t.tasks.count)("pageSize",10)("pageSizeOptions",s.sc(10,kt))}}let yt=(()=>{class t{constructor(t,e,i,n,a){this.commandService=t,this.clipboard=e,this.router=i,this.web=n,this.dialog=a,this.unsub$=new o.b,this.columnsToDisplay=["select","from","to","commandType","unit","sendTime","arrivalTime","remainingDelay"],this.tasks={id:Math.random(),count:0,tasks:[]},this.isLoadingResults=!1,this.selection=new p.c(!0,[])}ngOnInit(){this.web.info().subscribe(t=>{this.world=t.world}),this.isLoadingResults=!0,this.commandService.getCommandList(10,0).subscribe(t=>{this.isLoadingResults=!1,this.tasks=t}),this.commandService.addCommandEvents().pipe(Object(c.a)(this.unsub$)).subscribe(t=>{this.tasks.tasks=[...this.tasks.tasks,t],this.tasks.count++,this.tasks.tasks.sort((t,e)=>t.remainingDelay<e.remainingDelay?-1:1)}),this.commandService.removeCommandEvents().pipe(Object(c.a)(this.unsub$)).subscribe(t=>{this.tasks.tasks=this.tasks.tasks.filter((e,i,n)=>e.id!==t),this.tasks.count--}),Object(d.a)(1e3).pipe(Object(c.a)(this.unsub$)).subscribe(t=>{try{this.tasks.tasks.forEach((t,e,i)=>{i[e].remainingDelay>0&&(i[e].remainingDelay-=1)})}catch(e){}})}placeLink(t){return"https://"+this.world+".die-staemme.de/game.php?village="+t.from.id+"&screen=place&mode=command&target="+t.to.id}isAllSelected(){return this.selection.selected.length===this.tasks.tasks.length}masterToggle(){this.isAllSelected()?this.selection.clear():this.tasks.tasks.forEach(t=>this.selection.select(t))}editTask(t){this.commandService.setEditTask(t),this.dialog.open(I)}pageUpdate(t){this.isLoadingResults=!0,setTimeout(()=>{this.commandService.getCommandList(t.pageSize,t.pageIndex*t.pageSize).subscribe(t=>{this.tasks=t,this.isLoadingResults=!1})},100)}delete(t){this.commandService.removeCommand(t.id)}exportWorkbench(){this.commandService.exportWorkbench().subscribe(t=>{this.clipboard.copy(t)})}deleteSelected(){this.selection.selected.forEach(t=>{this.selection.deselect(t),this.commandService.removeCommand(t.id)})}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(g.a),s.Ob(j),s.Ob(a.b),s.Ob(T.a),s.Ob($.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-command-overview"]],decls:3,vars:2,consts:[[4,"ngIf"],[1,"row"],[1,"col-xl-12","flex-between"],["mat-icon-button","","matTooltip","Ausgew\xe4hlte l\xf6schen.",3,"click",4,"ngIf"],["mat-icon-button","","matTooltip","Als Workbench Plan exportieren.",3,"click"],[1,"overview-container"],["class","loading-shade",4,"ngIf"],[1,"table-container"],["mat-table","","multiTemplateDataRows","",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","from"],["matColumnDef","to"],["matColumnDef","commandType"],["matColumnDef","unit"],["matColumnDef","sendTime"],["matColumnDef","arrivalTime"],["matColumnDef","remainingDelay"],["matColumnDef","expandedDetail"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","example-element-row",3,"example-expanded-row","click",4,"matRowDef","matRowDefColumns"],["mat-row","","class","example-detail-row",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions","page"],["mat-icon-button","","matTooltip","Ausgew\xe4hlte l\xf6schen.",3,"click"],[1,"loading-shade"],["mat-header-cell",""],[3,"checked","indeterminate","change"],["mat-cell",""],[3,"checked","click","change"],[3,"value"],["title","Angriff",3,"value",4,"ngIf"],["title","Unterst\xfctzung",3,"value",4,"ngIf"],["title","Angriff",3,"value"],["title","Unterst\xfctzung",3,"value"],[2,"color","red"],[1,"example-element-detail","centerflex"],[1,"example-element-description"],["target","_blank",3,"href"],["mat-raised-button","","color","primary"],["mat-raised-button","","color","primary",1,"ml-2",3,"click"],["mat-raised-button","","color","warn",1,"ml-2",3,"click"],["mat-header-row",""],["mat-row","",1,"example-element-row",3,"click"],["mat-row","",1,"example-detail-row"]],template:function(t,e){1&t&&(s.Ub(0,"mat-card"),s.Lc(1,W,2,0,"ng-container",0),s.Lc(2,wt,43,11,"ng-container",0),s.Tb()),2&t&&(s.Bb(1),s.pc("ngIf",!e.isLoadingResults&&e.tasks&&0===e.tasks.tasks.length),s.Bb(1),s.pc("ngIf",e.isLoadingResults||e.tasks&&e.tasks.tasks.length>0))},directives:[U.a,n.m,w.a,A.a,M.a,R.j,R.c,R.e,R.b,R.g,R.i,_.a,H.b,R.d,E.a,R.a,V.a,S.a,z.a,R.f,R.h],pipes:[Y.a],styles:["table[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{padding:2px!important}.overview-container[_ngcontent-%COMP%]{position:relative;min-height:200px}.table-container[_ngcontent-%COMP%]{position:relative;overflow:auto}.loading-shade[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:56px;right:0;background:rgba(0,0,0,.15);z-index:1;display:flex;align-items:center;justify-content:center}tr.example-detail-row[_ngcontent-%COMP%]{height:0}.centerflex[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}tr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active, tr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover{background:#636363}.example-element-detail[_ngcontent-%COMP%]{overflow:hidden;display:flex;justify-content:space-between}.example-element-diagram[_ngcontent-%COMP%]{min-width:80px;padding:8px;font-weight:lighter;margin:8px 0;height:104px}.example-element-symbol[_ngcontent-%COMP%]{font-weight:700;font-size:40px;line-height:normal}.example-element-description[_ngcontent-%COMP%]{padding:16px}.example-element-description-attribution[_ngcontent-%COMP%]{opacity:.5}"],data:{animation:[Object(u.o)("detailExpand",[Object(u.l)("collapsed",Object(u.m)({height:"0px",minHeight:"0"})),Object(u.l)("expanded",Object(u.m)({height:"*"})),Object(u.n)("expanded <=> collapsed",Object(u.e)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}}),t})();var Ct=i("r/ba"),xt=i("PqYM"),Ot=i("YWTT");function St(t,e){1&t&&(s.Ub(0,"div",1),s.Ub(1,"div",2),s.Pb(2,"span"),s.Pb(3,"mat-spinner"),s.Pb(4,"span"),s.Tb(),s.Tb())}function Bt(t,e){1&t&&s.Pb(0,"app-village-input",25)}function Pt(t,e){if(1&t&&(s.Sb(0),s.Ub(1,"h3"),s.Nc(2),s.Tb(),s.Rb()),2&t){const t=s.jc(2);s.Bb(2),s.Pc("",t.form.value.from.length," D\xf6rfer als Herkunft ausgew\xe4hlt.")}}function Nt(t,e){if(1&t&&(s.Ub(0,"mat-icon",28),s.Nc(1,"info"),s.Tb()),2&t){const t=s.jc().$implicit,e=s.jc(2);s.pc("matTooltip",e.tooltip(t))}}function Lt(t,e){if(1&t&&(s.Ub(0,"mat-option",17),s.Ub(1,"div",26),s.Ub(2,"span"),s.Nc(3),s.kc(4,"titlecase"),s.Tb(),s.Lc(5,Nt,2,1,"mat-icon",27),s.Tb(),s.Tb()),2&t){const t=e.$implicit,i=s.jc(2);s.pc("value",t),s.Bb(3),s.Oc(s.lc(4,3,t)),s.Bb(2),s.pc("ngIf",i.tooltip(t))}}function Dt(t,e){if(1&t&&(s.Ub(0,"mat-option",17),s.Pb(1,"app-unit-render",17),s.Tb()),2&t){const t=e.$implicit;s.pc("value",t),s.Bb(1),s.pc("value",t)}}function It(t,e){if(1&t&&(s.Ub(0,"mat-option",17),s.Nc(1),s.Tb()),2&t){const t=e.$implicit;s.pc("value",t.id),s.Bb(1),s.Pc(" ",t.name," ")}}function Ft(t,e){1&t&&s.Pb(0,"app-units-input",29)}function jt(t,e){if(1&t){const t=s.Vb();s.Ub(0,"div",1),s.Ub(1,"div",3),s.Ub(2,"form",4),s.fc("ngSubmit",(function(){s.Cc(t);const e=s.jc();return e.submit(e.form.value)})),s.Ub(3,"div",5),s.Ub(4,"div",6),s.Lc(5,Bt,1,0,"app-village-input",7),s.Lc(6,Pt,3,1,"ng-container",8),s.Tb(),s.Tb(),s.Ub(7,"div",5),s.Ub(8,"div",6),s.Pb(9,"app-village-input",9),s.Tb(),s.Tb(),s.Ub(10,"div",5),s.Ub(11,"div",6),s.Ub(12,"mat-form-field"),s.Ub(13,"mat-label"),s.Nc(14,"Ankunft"),s.Tb(),s.Pb(15,"input",10),s.Pb(16,"mat-datepicker-toggle",11),s.Pb(17,"mat-datepicker",null,12),s.Tb(),s.Tb(),s.Ub(19,"div",6),s.Ub(20,"mat-form-field"),s.Ub(21,"mat-label"),s.Nc(22,"Ankunftszeit"),s.Tb(),s.Pb(23,"input",13),s.Tb(),s.Tb(),s.Ub(24,"div",6),s.Ub(25,"mat-form-field"),s.Ub(26,"mat-label"),s.Nc(27,"Timer Logik"),s.Tb(),s.Ub(28,"mat-select",14),s.Ub(29,"mat-select-trigger"),s.Nc(30),s.kc(31,"titlecase"),s.Tb(),s.Lc(32,Lt,6,5,"mat-option",15),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(33,"div",5),s.Ub(34,"div",6),s.Ub(35,"mat-form-field"),s.Ub(36,"mat-label"),s.Nc(37,"Langsamste Einheit"),s.Tb(),s.Ub(38,"mat-select",16),s.Ub(39,"mat-select-trigger"),s.Pb(40,"app-unit-render",17),s.Tb(),s.Lc(41,Dt,2,2,"mat-option",15),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(42,"div",5),s.Ub(43,"div",6),s.Ub(44,"mat-form-field"),s.Ub(45,"mat-label"),s.Nc(46,"Einheiten"),s.Tb(),s.Ub(47,"mat-select",18),s.Lc(48,It,2,2,"mat-option",15),s.Ub(49,"mat-option",19),s.Nc(50," Custom "),s.Tb(),s.Tb(),s.Tb(),s.Pb(51,"br"),s.Lc(52,Ft,1,0,"app-units-input",20),s.Tb(),s.Tb(),s.Ub(53,"div",5),s.Ub(54,"div",6),s.Ub(55,"mat-form-field"),s.Ub(56,"mat-label"),s.Nc(57,"Befehlstyp"),s.Tb(),s.Ub(58,"mat-select",21),s.Ub(59,"mat-option",22),s.Nc(60,"Angriff"),s.Tb(),s.Ub(61,"mat-option",23),s.Nc(62,"Unterst\xfctzung"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(63,"div",5),s.Ub(64,"div",6),s.Ub(65,"button",24),s.Nc(66," Hinzuf\xfcgen "),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb()}if(2&t){const t=s.zc(18),e=s.jc();s.Bb(2),s.pc("formGroup",e.form),s.Bb(3),s.pc("ngIf",!e.multiSource),s.Bb(1),s.pc("ngIf",e.multiSource),s.Bb(9),s.pc("matDatepicker",t),s.Bb(1),s.pc("for",t),s.Bb(12),s.pc("formControl",e.timerForm),s.Bb(2),s.Oc(s.lc(31,13,e.timerForm.value)),s.Bb(2),s.pc("ngForOf",e.timerLogics),s.Bb(8),s.pc("value",e.form.value.unit),s.Bb(1),s.pc("ngForOf",e.units),s.Bb(7),s.pc("ngForOf",e.templates),s.Bb(4),s.pc("ngIf","custom"===e.form.value.template),s.Bb(13),s.pc("disabled",!e.form.valid||e.disabled)}}let $t=(()=>{class t{constructor(t,e,i,n,a,c){this.fb=t,this.commandService=e,this.web=i,this.toastr=n,this.route=a,this.villageService=c,this.unsub$=new o.b,this.form=this.fb.group({from:[null],to:[null],units:{},template:[null,f.v.required],unit:["ram",f.v.required],commandType:Ct.a.ATTACK,date:h(),time:h().format("HH:mm:ss:SSS")}),this.disabled=!1,this.loading=!1,this.timerForm=new f.e}ngOnInit(){this.route.paramMap.subscribe(t=>{if(t.has("source")){let e=JSON.parse(t.get("source"));!1===Array.isArray(e)&&(e=[e]),1===e.length?this.villageService.byId(parseInt(e[0],10)).subscribe(t=>{this.form.patchValue({from:t})}):this.form.patchValue({from:e})}t.has("target")&&this.villageService.byId(parseInt(t.get("target"),10)).subscribe(t=>{this.form.patchValue({to:t})}),t.has("unit")&&this.form.patchValue({unit:t.get("unit")}),t.has("type")&&this.form.patchValue({commandType:t.get("type")}),t.has("time")&&this.form.patchValue({date:h(parseInt(t.get("time"),10)),time:h(parseInt(t.get("time"),10)).format("HH:mm:ss:SSS")})}),this.commandService.getTroopTemplates().subscribe(t=>{this.templates=t}),this.web.infoObservable.subscribe(t=>{this.units=t.units}),this.commandService.addCommandEvents().pipe(Object(c.a)(this.unsub$)).subscribe(t=>{this.toastr.success(`Von ${t.from.search} nach ${t.to.search}. Ankunft: ${t.arrivalTime.display}`,t.commandType,{timeOut:7e3})}),this.commandService.getTimerLogic().pipe(Object(c.a)(this.unsub$)).subscribe(t=>{this.timerLogics=t.available,this.timerForm.setValue(t.timerLogic,{emitEvent:!1})}),this.timerForm.valueChanges.subscribe(t=>{this.commandService.setTimerLogic(t)})}get multiSource(){return Array.isArray(this.form.value.from)}submit(t){if(this.disabled=!0,Object(xt.a)(1500).subscribe(()=>{this.disabled=!1}),-1===t.template&&null===t.units)return;const e=h(t.date.format("DD.MM.YYYY")+" "+t.time,"DD.MM.YYYY HH:mm:ss:SSS");!1===Array.isArray(t.from)?this.commandService.addCommand(t.from.id,t.to.id,t.unit,t.commandType,e.valueOf(),"custom"===t.template?void 0:t.template,"custom"===t.template?t.units:void 0):t.from.forEach(i=>{this.commandService.addCommand(i,t.to.id,t.unit,t.commandType,e.valueOf(),"custom"===t.template?void 0:t.template,"custom"===t.template?t.units:void 0)})}tooltip(t){switch(t){case"HTTP":return"Kann verwendet werden um Trains zu schicken."}}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(f.d),s.Ob(g.a),s.Ob(T.a),s.Ob(v.b),s.Ob(a.a),s.Ob(Ot.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-command-schedule"]],decls:4,vars:2,consts:[["class","row",4,"ngIf"],[1,"row"],[1,"col-xl-12","flex-between"],[1,"col-xl-12"],[3,"formGroup","ngSubmit"],[1,"form-group","row"],[1,"col"],["label","Herkunft","formControlName","from","id","from",4,"ngIf"],[4,"ngIf"],["label","Ziel","formControlName","to","id","to",1,"full-width"],["matInput","","placeholder","Pick Date","formControlName","date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["matInput","","maxlength","12","formControlName","time"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["id","unit","formControlName","unit"],[3,"value"],["id","template","formControlName","template"],["value","custom"],["class","full-width","id","units","formControlName","units",4,"ngIf"],["id","commandType","formControlName","commandType"],["value","ATTACK"],["value","SUPPORT"],["type","submit","mat-raised-button","","color","primary",3,"disabled"],["label","Herkunft","formControlName","from","id","from"],[1,"flex-between"],[3,"matTooltip",4,"ngIf"],[3,"matTooltip"],["id","units","formControlName","units",1,"full-width"]],template:function(t,e){1&t&&(s.Ub(0,"mat-card"),s.Ub(1,"mat-card-content"),s.Lc(2,St,5,0,"div",0),s.Lc(3,jt,67,15,"div",0),s.Tb(),s.Tb()),2&t&&(s.Bb(2),s.pc("ngIf",e.loading),s.Bb(1),s.pc("ngIf",!e.loading))},directives:[U.a,U.c,n.m,H.b,f.x,f.p,f.i,k.a,f.o,f.g,y.b,y.f,C.b,f.c,x.b,x.d,y.g,x.a,f.k,O.a,f.f,O.c,n.l,S.a,B.l,w.a,M.a,A.a,P.a],pipes:[n.v],styles:[".full-width[_ngcontent-%COMP%]{width:100%}"]}),t})(),At=(()=>{class t{constructor(t){this.command=t,this.control=new f.e("",f.v.required)}ngOnInit(){}submit(t){this.control.disable(),this.command.simpleTimer(t),setTimeout(()=>{this.control.enable()},2e3)}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(g.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-command-simple-timer"]],decls:13,vars:2,consts:[[1,"form-group","row"],["for","time",1,"label","col-sm-1","col-form-label"],[1,"col-sm-11"],[1,"example-full-width"],["autocomplete","off","autocapitalize","off","spellcheck","false","id","time","matInput","","placeholder","Zeit",1,"example-full-width",3,"formControl"],[1,"offset-sm-1","col-sm-11"],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(t,e){1&t&&(s.Ub(0,"mat-card"),s.Ub(1,"div",0),s.Ub(2,"label",1),s.Nc(3,"Zeit"),s.Tb(),s.Ub(4,"div",2),s.Ub(5,"mat-form-field",3),s.Pb(6,"input",4),s.Ub(7,"mat-hint"),s.Nc(8,"z.B. heute um 12:28:22:500"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(9,"div",0),s.Ub(10,"div",5),s.Ub(11,"button",6),s.fc("click",(function(){return e.submit(e.control.value)})),s.Nc(12," Timen "),s.Tb(),s.Tb(),s.Tb(),s.Tb()),2&t&&(s.Bb(6),s.pc("formControl",e.control),s.Bb(5),s.pc("disabled",e.control.invalid||e.control.disabled))},directives:[U.a,y.b,C.b,f.c,f.o,f.f,y.e,w.a],styles:[""]}),t})();var Mt=i("pLZG"),Rt=i("lJxs"),_t=i("BTe0"),Ht=i("MutI");function Et(t,e){if(1&t&&(s.Ub(0,"div",9),s.Ub(1,"div",10),s.Pb(2,"mat-progress-bar",11),s.Tb(),s.Tb()),2&t){const t=s.jc(2);s.Bb(2),s.pc("value",t.progress)}}function Vt(t,e){if(1&t&&(s.Ub(0,"mat-list-item"),s.Ub(1,"small"),s.Nc(2),s.Tb(),s.Ub(3,"span",13),s.Nc(4),s.Tb(),s.Tb()),2&t){const t=e.$implicit;s.Bb(2),s.Pc("",t.line," "),s.Bb(2),s.Pc(" ",t.error,"")}}function zt(t,e){if(1&t&&(s.Ub(0,"div"),s.Ub(1,"p"),s.Nc(2),s.Tb(),s.Ub(3,"mat-list"),s.Lc(4,Vt,5,2,"mat-list-item",12),s.Tb(),s.Tb()),2&t){const t=s.jc(3);s.Bb(2),s.Pc("",t.result.error," Tasks konnten nicht importiert werden."),s.Bb(2),s.pc("ngForOf",t.result.errors)}}function Yt(t,e){if(1&t&&(s.Ub(0,"div",9),s.Ub(1,"div",10),s.Ub(2,"h1"),s.Nc(3,"Import abgeschlossen."),s.Tb(),s.Ub(4,"p"),s.Nc(5),s.Tb(),s.Lc(6,zt,5,2,"div",0),s.Tb(),s.Tb()),2&t){const t=s.jc(2);s.Bb(5),s.Qc("",t.result.success," von ",t.result.tasks," Tasks erfolgreich importiert."),s.Bb(1),s.pc("ngIf",t.result.error>0)}}function Wt(t,e){if(1&t&&(s.Ub(0,"mat-card"),s.Ub(1,"mat-card-content"),s.Lc(2,Et,3,1,"div",8),s.Lc(3,Yt,7,3,"div",8),s.Tb(),s.Tb()),2&t){const t=s.jc();s.Bb(2),s.pc("ngIf",t.importing),s.Bb(1),s.pc("ngIf",t.result)}}const Zt=[{path:"",component:m,children:[{path:"schedule",component:$t},{path:"timer",component:At},{path:"import",component:(()=>{class t{constructor(t){this.command=t,this.unsub$=new o.b,this.importing=!1,this.progress=0,this.control=new f.e("",f.v.required)}ngOnInit(){this.command.importWorkbenchStart().subscribe(t=>{t===this.id&&(this.importing=!0)}),this.command.importWorkbenchProgress().pipe(Object(Mt.a)(t=>t.id===this.id),Object(Rt.a)(t=>t.percentage)).subscribe(t=>{this.progress=t}),this.command.importWorkbenchFinish().pipe(Object(Mt.a)(t=>t.id===this.id)).subscribe(t=>{this.importing=!1,this.result=t})}submit(t){this.control.disable(),this.id=this.command.importWorkbench(t),setTimeout(()=>{this.control.enable()},2e3)}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(g.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-command-import-wb"]],decls:15,vars:3,consts:[[4,"ngIf"],[1,"form-group","row"],["for","plan",1,"label","col-sm-1","col-form-label"],[1,"col-sm-11"],[1,"full-width"],["rows","10","id","plan","matInput","","placeholder","Plan",1,"example-full-width",3,"formControl"],[1,"offset-sm-1","col-sm-11"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click"],["class","row",4,"ngIf"],[1,"row"],[1,"col-xl-12"],[2,"height","20px","border-radius","3px",3,"value"],[4,"ngFor","ngForOf"],[2,"color","red"]],template:function(t,e){1&t&&(s.Lc(0,Wt,4,2,"mat-card",0),s.Ub(1,"mat-card"),s.Ub(2,"mat-card-content"),s.Ub(3,"div",1),s.Ub(4,"label",2),s.Nc(5,"Plan"),s.Tb(),s.Ub(6,"div",3),s.Ub(7,"mat-form-field",4),s.Pb(8,"textarea",5),s.Ub(9,"mat-hint"),s.Nc(10,"Befehle in der \xdcbersicht ausw\xe4hlen und mit STRG+C kopieren."),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(11,"div",1),s.Ub(12,"div",6),s.Ub(13,"button",7),s.fc("click",(function(){return e.submit(e.control.value)})),s.Nc(14," Importieren "),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb()),2&t&&(s.pc("ngIf",e.importing||e.result),s.Bb(8),s.pc("formControl",e.control),s.Bb(5),s.pc("disabled",e.control.invalid||e.control.disabled))},directives:[n.m,U.a,U.c,y.b,C.b,f.c,f.o,f.f,y.e,w.a,_t.a,Ht.a,n.l,Ht.b],styles:[".full-width[_ngcontent-%COMP%]{width:100%}mat-divider[_ngcontent-%COMP%]{margin-bottom:15px}"]}),t})()},{path:"edit/:id",component:I},{path:"",pathMatch:"full",component:yt}]}];let Gt=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[a.e.forChild(Zt)],a.e]}),t})();i("8LU1"),i("R1ws"),i("u47x");let Kt=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[B.r,B.i],B.i]}),t})();var qt=i("BLWB"),Jt=i("1yaQ"),Qt=i("40+f"),Xt=i("f0Cb");let te=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},providers:[{provide:B.d,useValue:"de-DE"}],imports:[[n.c,Gt,r.c,U.f,C.c,w.b,O.b,Kt,f.t,_.b,R.l,qt.a,M.b,x.c,Jt.a,H.a,A.b,_t.b,Qt.a,Xt.a,Ht.c,E.b]]}),t})()}}]);