(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{KuHJ:function(t,e,i){"use strict";i.r(e),i.d(e,"CommandModule",(function(){return Zt}));var n=i("ofXK"),o=i("tyNb"),c=i("XNiG"),a=i("1G5W"),s=i("fXoL"),l=i("M9ds"),r=i("PDjf");const b=function(t){return[t]};function m(t,e){if(1&t){const t=s.Vb();s.Ub(0,"span",2),s.fc("click",(function(){s.Ac(t);const i=e.$implicit;return s.jc().activeLink=i})),s.Lc(1),s.Tb()}if(2&t){const t=e.$implicit,i=s.jc();s.pc("active",i.activeLink===t)("routerLink",s.tc(3,b,t.link)),s.Bb(1),s.Nc(" ",t.title," ")}}let d=(()=>{class t{constructor(t){this.router=t,this.links=[{title:"Home",link:"/command"},{title:"Schedule",link:"/command/schedule"},{title:"Simple Timer",link:"/command/timer"},{title:"Import Workbench",link:"/command/import"}],this.activeLink=this.links[0],this.unsub$=new c.b}ngOnInit(){this.setActive(),this.router.events.pipe(Object(a.a)(this.unsub$)).subscribe(t=>{this.setActive()})}setActive(){for(const t of this.links)this.router.isActive(t.link,!1)&&(this.activeLink=t)}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(o.b))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-command"]],decls:4,vars:1,consts:[["mat-tab-nav-bar",""],["mat-tab-link","",3,"active","routerLink","click",4,"ngFor","ngForOf"],["mat-tab-link","",3,"active","routerLink","click"]],template:function(t,e){1&t&&(s.Ub(0,"nav",0),s.Jc(1,m,2,5,"span",1),s.Tb(),s.Ub(2,"mat-card"),s.Pb(3,"router-outlet"),s.Tb()),2&t&&(s.Bb(1),s.pc("ngForOf",e.links))},directives:[l.b,n.l,r.a,o.f,l.a,o.c],encapsulation:2}),t})();var u=i("l5mm"),p=i("5QHs"),f=i("R0Ic"),h=i("0EQZ"),T=i("3Pt+"),g=i("wd/R"),v=i("iELJ"),U=i("7nMs"),k=i("5za1"),w=i("5eHb"),x=i("7Ixi"),C=i("bTqV"),L=i("Q2Ze"),y=i("ZTz/"),B=i("e6WT"),O=i("TN/R"),S=i("jTwa"),D=i("FKr1"),F=i("38Pe");function P(t,e){if(1&t&&(s.Ub(0,"mat-option",19),s.Ub(1,"div",28),s.Ub(2,"span"),s.Lc(3),s.kc(4,"titlecase"),s.Tb(),s.Tb(),s.Tb()),2&t){const t=e.$implicit;s.pc("value",t),s.Bb(3),s.Mc(s.lc(4,2,t))}}function I(t,e){if(1&t&&(s.Ub(0,"mat-option",19),s.Pb(1,"app-unit-render",19),s.Tb()),2&t){const t=e.$implicit;s.pc("value",t),s.Bb(1),s.pc("value",t)}}function j(t,e){if(1&t&&(s.Ub(0,"mat-option",19),s.Lc(1),s.Tb()),2&t){const t=e.$implicit;s.pc("value",t.id),s.Bb(1),s.Nc(" ",t.name," ")}}function R(t,e){if(1&t&&(s.Sb(0,20),s.Pb(1,"app-units-input",29),s.Rb()),2&t){const t=s.jc();s.Bb(1),s.pc("formControl",t.unitsForm)}}let A=(()=>{class t{constructor(t,e,i,n,o,a){this.data=t,this.dialogRef=e,this.fb=i,this.web=n,this.command=o,this.toastr=a,this.unsub$=new c.b,this.fromForm=new T.e(""),this.toForm=new T.e(""),this.unitsForm=new T.e,this.templateForm=new T.e,this.unitForm=new T.e("",T.v.required),this.commandTypeForm=new T.e,this.sendDateTimeForm=this.fb.group({date:g(),time:g().format("HH:mm:ss:SSS")}),this.arrivalDateTimeForm=this.fb.group({date:g(),time:g().format("HH:mm:ss:SSS")}),this.timerForm=new T.e,this.disabled=!1,this.setCommandTask(t)}ngOnInit(){this.web.infoObservable.subscribe(t=>{this.units=t.units}),this.command.getTroopTemplates().subscribe(t=>{this.templates=t}),this.command.getTimerLogic().pipe(Object(a.a)(this.unsub$)).subscribe(t=>{this.timerLogics=t.available}),this.command.editCommandsEvents().pipe(Object(a.a)(this.unsub$)).subscribe(t=>{this.toastr.success("Erfolgreich bearbeitet.",void 0,{timeOut:7e3}),t.id===this.taskId&&this.dialogRef.close(t)})}setCommandTask(t){this.taskId=t.id,this.title=`Bearbeiten von Task ${t.commandType} ${t.sendTime.display}`,this.fromForm.setValue(t.from),this.toForm.setValue(t.to),this.unitsForm.setValue(t.units),this.unitForm.setValue(t.unit),this.templateForm.setValue("custom"),this.commandTypeForm.setValue(t.commandType),this.timerForm.setValue(t.timer.toUpperCase()),this.command.getEditTimes(t.id).subscribe(t=>{this.sendDateTimeForm.setValue({date:g(t.sendTime),time:g(t.sendTime).format("HH:mm:ss:SSS")}),this.arrivalDateTimeForm.setValue({date:g(t.arrivalTime),time:g(t.arrivalTime).format("HH:mm:ss:SSS")})})}updateFrom(t){this.disabled=!0,setTimeout(()=>this.disabled=!1,1500),this.command.editSource(this.taskId,t.id)}updateTo(t){this.disabled=!0,setTimeout(()=>this.disabled=!1,1500),this.command.editTarget(this.taskId,t.id)}updateTimer(t){this.disabled=!0,setTimeout(()=>this.disabled=!1,1500),this.command.editTimer(this.taskId,t)}updateUnits(t,e){this.disabled=!0,setTimeout(()=>this.disabled=!1,1500),this.command.editTroops(this.taskId,"custom"===t?void 0:t,"custom"===t?e:void 0)}updateUnit(t){this.disabled=!0,setTimeout(()=>this.disabled=!1,1500),this.command.editSlowestUnit(this.taskId,t)}updateCommandType(t){this.disabled=!0,setTimeout(()=>this.disabled=!1,1500),this.command.editCommandType(this.taskId,t)}updateArrivalTime(t){const e=g(t.date.format("DD.MM.YYYY")+" "+t.time,"DD.MM.YYYY HH:mm:ss:SSS");this.disabled=!0,setTimeout(()=>this.disabled=!1,1500),this.command.editArrival(this.taskId,e.valueOf())}updateSendTime(t){this.disabled=!0;const e=g(t.date.format("DD.MM.YYYY")+" "+t.time,"DD.MM.YYYY HH:mm:ss:SSS");setTimeout(()=>this.disabled=!1,1500),this.command.editSendTime(this.taskId,e.valueOf())}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(v.a),s.Ob(v.d),s.Ob(T.d),s.Ob(U.a),s.Ob(k.a),s.Ob(w.b))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-command-edit"]],decls:112,vars:29,consts:[[1,"form-group","row"],[1,"label","col-sm-1","col-form-label"],[1,"col-xl-8"],[3,"formControl"],[1,"col-xl-3"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click"],[1,"label","col-xl-1","col-form-label"],[3,"value",4,"ngFor","ngForOf"],[3,"formGroup","ngSubmit"],["matInput","","placeholder","Pick Date","formControlName","date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],[1,"ml-2"],["matInput","","maxlength","12","formControlName","time"],["type","submit","mat-raised-button","","color","primary",3,"disabled"],["arrivalpicker",""],["for","unit",1,"label","col-xl-1","col-form-label"],[1,"example-full-width"],["id","unit",3,"formControl"],[3,"value"],[1,"full-width"],["id","template",3,"formControl"],["value","custom"],["class","full-width",4,"ngIf"],["for","commandType",1,"label","col-xl-1","col-form-label"],["id","commandType",3,"formControl"],["value","ATTACK"],["value","SUPPORT"],[1,"flex-between"],["required","","id","units",3,"formControl"]],template:function(t,e){if(1&t&&(s.Ub(0,"mat-card-title"),s.Lc(1),s.Tb(),s.Ub(2,"div",0),s.Ub(3,"label",1),s.Lc(4,"Herkunft"),s.Tb(),s.Ub(5,"div",2),s.Pb(6,"app-village-input",3),s.Tb(),s.Ub(7,"div",4),s.Ub(8,"button",5),s.fc("click",(function(){return e.updateFrom(e.fromForm.value)})),s.Lc(9," Herkunft Aktualisieren "),s.Tb(),s.Tb(),s.Tb(),s.Ub(10,"div",0),s.Ub(11,"label",6),s.Lc(12,"Ziel"),s.Tb(),s.Ub(13,"div",2),s.Pb(14,"app-village-input",3),s.Tb(),s.Ub(15,"div",4),s.Ub(16,"button",5),s.fc("click",(function(){return e.updateTo(e.toForm.value)})),s.Lc(17," Ziel Aktualisieren "),s.Tb(),s.Tb(),s.Tb(),s.Ub(18,"div",0),s.Ub(19,"label",6),s.Lc(20,"Timer"),s.Tb(),s.Ub(21,"div",2),s.Ub(22,"mat-form-field"),s.Ub(23,"mat-label"),s.Lc(24,"Timer Logik"),s.Tb(),s.Ub(25,"mat-select",3),s.Ub(26,"mat-select-trigger"),s.Lc(27),s.kc(28,"titlecase"),s.Tb(),s.Jc(29,P,5,4,"mat-option",7),s.Tb(),s.Tb(),s.Tb(),s.Ub(30,"div",4),s.Ub(31,"button",5),s.fc("click",(function(){return e.updateTimer(e.timerForm.value)})),s.Lc(32," Timer Logik Aktualisieren "),s.Tb(),s.Tb(),s.Tb(),s.Ub(33,"form",8),s.fc("ngSubmit",(function(){return e.updateSendTime(e.sendDateTimeForm.value)})),s.Ub(34,"div",0),s.Ub(35,"label",6),s.Lc(36,"Abschickzeit"),s.Tb(),s.Ub(37,"div",2),s.Ub(38,"mat-form-field"),s.Ub(39,"mat-label"),s.Lc(40,"Datum"),s.Tb(),s.Pb(41,"input",9),s.Pb(42,"mat-datepicker-toggle",10),s.Pb(43,"mat-datepicker",null,11),s.Tb(),s.Ub(45,"mat-form-field",12),s.Pb(46,"input",13),s.Tb(),s.Tb(),s.Ub(47,"div",4),s.Ub(48,"button",14),s.Lc(49," Abschickzeit aktualisieren "),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(50,"form",8),s.fc("ngSubmit",(function(){return e.updateArrivalTime(e.arrivalDateTimeForm.value)})),s.Ub(51,"div",0),s.Ub(52,"label",6),s.Lc(53,"Ankunft"),s.Tb(),s.Ub(54,"div",2),s.Ub(55,"mat-form-field"),s.Ub(56,"mat-label"),s.Lc(57,"Datum"),s.Tb(),s.Pb(58,"input",9),s.Pb(59,"mat-datepicker-toggle",10),s.Pb(60,"mat-datepicker",null,15),s.Tb(),s.Ub(62,"mat-form-field",12),s.Pb(63,"input",13),s.Tb(),s.Tb(),s.Ub(64,"div",4),s.Ub(65,"button",14),s.Lc(66," Ankunftszeit aktualisieren "),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(67,"div",0),s.Ub(68,"label",16),s.Lc(69,"Einheit"),s.Tb(),s.Ub(70,"div",2),s.Ub(71,"mat-form-field",17),s.Ub(72,"mat-label"),s.Lc(73,"Einheit"),s.Tb(),s.Ub(74,"mat-select",18),s.Ub(75,"mat-select-trigger"),s.Pb(76,"app-unit-render",19),s.Tb(),s.Jc(77,I,2,2,"mat-option",7),s.Tb(),s.Tb(),s.Tb(),s.Ub(78,"div",4),s.Ub(79,"button",5),s.fc("click",(function(){return e.updateUnit(e.unitForm.value)})),s.Lc(80," Einheit Aktualisieren "),s.Tb(),s.Tb(),s.Tb(),s.Ub(81,"div",0),s.Ub(82,"label",6),s.Lc(83,"Einheiten"),s.Tb(),s.Ub(84,"div",2),s.Ub(85,"mat-form-field",20),s.Ub(86,"mat-label"),s.Lc(87,"Standard Angriff"),s.Tb(),s.Ub(88,"mat-select",21),s.Jc(89,j,2,2,"mat-option",7),s.Ub(90,"mat-option",22),s.Lc(91," Custom "),s.Tb(),s.Tb(),s.Tb(),s.Pb(92,"br"),s.Jc(93,R,2,1,"ng-container",23),s.Tb(),s.Ub(94,"div",4),s.Ub(95,"button",5),s.fc("click",(function(){return e.updateUnits(e.templateForm.value,e.unitsForm.value)})),s.Lc(96," Einheiten Aktualisieren "),s.Tb(),s.Tb(),s.Tb(),s.Ub(97,"div",0),s.Ub(98,"label",24),s.Lc(99,"Befehlstyp"),s.Tb(),s.Ub(100,"div",2),s.Ub(101,"mat-form-field",17),s.Ub(102,"mat-label"),s.Lc(103,"Befehlstyp"),s.Tb(),s.Ub(104,"mat-select",25),s.Ub(105,"mat-option",26),s.Lc(106,"Angriff"),s.Tb(),s.Ub(107,"mat-option",27),s.Lc(108,"Unterst\xfctzung"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(109,"div",4),s.Ub(110,"button",5),s.fc("click",(function(){return e.updateCommandType(e.commandTypeForm.value)})),s.Lc(111," Befehlstyp Aktualisieren "),s.Tb(),s.Tb(),s.Tb()),2&t){const t=s.xc(44),i=s.xc(61);s.Bb(1),s.Nc(" ",e.title,"\n"),s.Bb(5),s.pc("formControl",e.fromForm),s.Bb(2),s.pc("disabled",!e.fromForm.valid||e.disabled),s.Bb(6),s.pc("formControl",e.toForm),s.Bb(2),s.pc("disabled",!e.toForm.valid||e.disabled),s.Bb(9),s.pc("formControl",e.timerForm),s.Bb(2),s.Mc(s.lc(28,27,e.timerForm.value)),s.Bb(2),s.pc("ngForOf",e.timerLogics),s.Bb(2),s.pc("disabled",!e.timerForm.valid||e.disabled),s.Bb(2),s.pc("formGroup",e.sendDateTimeForm),s.Bb(8),s.pc("matDatepicker",t),s.Bb(1),s.pc("for",t),s.Bb(6),s.pc("disabled",!e.sendDateTimeForm.valid||e.disabled),s.Bb(2),s.pc("formGroup",e.arrivalDateTimeForm),s.Bb(8),s.pc("matDatepicker",i),s.Bb(1),s.pc("for",i),s.Bb(6),s.pc("disabled",!e.arrivalDateTimeForm.valid||e.disabled),s.Bb(9),s.pc("formControl",e.unitForm),s.Bb(2),s.pc("value",e.unitForm.value),s.Bb(1),s.pc("ngForOf",e.units),s.Bb(2),s.pc("disabled",!e.unitForm.valid||e.disabled),s.Bb(9),s.pc("formControl",e.templateForm),s.Bb(1),s.pc("ngForOf",e.templates),s.Bb(4),s.pc("ngIf","custom"===e.templateForm.value),s.Bb(2),s.pc("disabled",!e.unitsForm.valid||e.disabled),s.Bb(9),s.pc("formControl",e.commandTypeForm),s.Bb(6),s.pc("disabled",!e.commandTypeForm.valid||e.disabled)}},directives:[r.h,x.a,T.o,T.f,C.a,L.b,L.f,y.a,y.c,n.l,T.x,T.p,T.i,B.b,T.c,O.b,T.g,O.d,L.g,O.a,T.k,S.a,D.l,n.m,F.a,T.u],pipes:[n.v],styles:[".full-width[_ngcontent-%COMP%]{width:100%}.shipping-card[_ngcontent-%COMP%]{min-width:120px;margin:20px auto}.mat-radio-button[_ngcontent-%COMP%]{display:block;margin:5px 0}.row[_ngcontent-%COMP%]{display:flex;flex-direction:row}.col[_ngcontent-%COMP%]{flex:1;margin-right:20px}.col[_ngcontent-%COMP%]:last-child{margin-right:0}"]}),t})();class J{constructor(t,e){this._document=e;const i=this._textarea=this._document.createElement("textarea"),n=i.style;n.position="fixed",n.top=n.opacity="0",n.left="-999em",i.setAttribute("aria-hidden","true"),i.value=t,this._document.body.appendChild(i)}copy(){const t=this._textarea;let e=!1;try{if(t){const i=this._document.activeElement;t.select(),t.setSelectionRange(0,t.value.length),e=this._document.execCommand("copy"),i&&i.focus()}}catch(i){}return e}destroy(){const t=this._textarea;t&&(t.parentNode&&t.parentNode.removeChild(t),this._textarea=void 0)}}let M=(()=>{class t{constructor(t){this._document=t}copy(t){const e=this.beginCopy(t),i=e.copy();return e.destroy(),i}beginCopy(t){return new J(t,this._document)}}return t.\u0275fac=function(e){return new(e||t)(s.cc(n.d))},t.\u0275prov=Object(s.Kb)({factory:function(){return new t(Object(s.cc)(n.d))},token:t,providedIn:"root"}),t})();var $=i("jMqV"),_=i("ZFy/"),E=i("NFeN"),z=i("OaSA"),H=i("pu8Q"),V=i("pMoy"),N=i("irRR"),Y=i("k2HR"),W=i("DSdR");function Z(t,e){1&t&&(s.Sb(0),s.Lc(1," Keine Tasks vorhanden.\n"),s.Rb())}function G(t,e){if(1&t){const t=s.Vb();s.Ub(0,"button",28),s.fc("click",(function(){s.Ac(t),s.jc();const e=s.xc(47);return s.jc().deleteSelected(e)})),s.Ub(1,"mat-icon"),s.Lc(2,"delete"),s.Tb(),s.Tb()}}function K(t,e){1&t&&s.Pb(0,"mat-spinner")}function q(t,e){if(1&t&&(s.Ub(0,"div",29),s.Jc(1,K,1,0,"mat-spinner",0),s.Tb()),2&t){const t=s.jc(2);s.Bb(1),s.pc("ngIf",t.isLoadingResults)}}function Q(t,e){if(1&t){const t=s.Vb();s.Ub(0,"th",30),s.Ub(1,"mat-checkbox",31),s.fc("change",(function(e){s.Ac(t);const i=s.jc(2);return e?i.masterToggle():null})),s.Tb(),s.Tb()}if(2&t){const t=s.jc(2);s.Bb(1),s.pc("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())}}function X(t,e){if(1&t){const t=s.Vb();s.Ub(0,"td",32),s.Ub(1,"mat-checkbox",33),s.fc("click",(function(e){return s.Ac(t),e.stopPropagation()}))("change",(function(i){s.Ac(t);const n=e.$implicit,o=s.jc(2);return i?o.selection.toggle(n):null})),s.Tb(),s.Tb()}if(2&t){const t=e.$implicit,i=s.jc(2);s.Bb(1),s.pc("checked",i.selection.isSelected(t))}}function tt(t,e){1&t&&(s.Ub(0,"th",30),s.Lc(1," Herkunft"),s.Tb())}function et(t,e){if(1&t&&(s.Ub(0,"td",32),s.Pb(1,"app-village-render",34),s.Tb()),2&t){const t=e.$implicit;s.Bb(1),s.pc("value",t.from)}}function it(t,e){1&t&&(s.Ub(0,"th",30),s.Lc(1," Ziel"),s.Tb())}function nt(t,e){if(1&t&&(s.Ub(0,"td",32),s.Pb(1,"app-village-render",34),s.Tb()),2&t){const t=e.$implicit;s.Bb(1),s.pc("value",t.to)}}function ot(t,e){1&t&&(s.Ub(0,"th",30),s.Lc(1," Typ"),s.Tb())}function ct(t,e){1&t&&s.Pb(0,"app-unit-render",37),2&t&&s.pc("value","axe")}function at(t,e){1&t&&s.Pb(0,"app-unit-render",38),2&t&&s.pc("value","sword")}function st(t,e){if(1&t&&(s.Ub(0,"td",32),s.Jc(1,ct,1,1,"app-unit-render",35),s.Jc(2,at,1,1,"app-unit-render",36),s.Tb()),2&t){const t=e.$implicit;s.Bb(1),s.pc("ngIf","ATTACK"===t.commandType),s.Bb(1),s.pc("ngIf","SUPPORT"===t.commandType)}}function lt(t,e){1&t&&(s.Ub(0,"th",30),s.Lc(1," Einheit"),s.Tb())}function rt(t,e){if(1&t&&(s.Ub(0,"td",32),s.Pb(1,"app-unit-render",34),s.Tb()),2&t){const t=e.$implicit;s.Bb(1),s.pc("value",t.unit)}}function bt(t,e){1&t&&(s.Ub(0,"th",30),s.Lc(1," Abschickzeit"),s.Tb())}function mt(t,e){if(1&t&&(s.Ub(0,"td",32),s.Lc(1),s.Tb()),2&t){const t=e.$implicit;s.Bb(1),s.Nc(" ",t.sendTime.display," ")}}function dt(t,e){1&t&&(s.Ub(0,"th",30),s.Lc(1," Ankunftszeit"),s.Tb())}function ut(t,e){if(1&t&&(s.Ub(0,"td",32),s.Lc(1),s.Ub(2,"small"),s.Lc(3),s.Tb(),s.Tb()),2&t){const t=e.$implicit;s.Bb(1),s.Nc(" ",t.arrivalTime.display,""),s.Bb(2),s.Nc(":",t.arrivalTime.ms,"")}}function pt(t,e){1&t&&(s.Ub(0,"th",30),s.Lc(1," Verbleibend"),s.Tb())}function ft(t,e){if(1&t&&(s.Sb(0),s.Lc(1),s.kc(2,"hms"),s.Rb()),2&t){const t=s.jc().$implicit;s.Bb(1),s.Nc(" ",s.lc(2,1,1e3*t.remainingDelay)," ")}}function ht(t,e){1&t&&(s.Sb(0),s.Ub(1,"span",39),s.Lc(2,"00:00:00"),s.Tb(),s.Rb())}function Tt(t,e){if(1&t&&(s.Ub(0,"td",32),s.Jc(1,ft,3,3,"ng-container",0),s.Jc(2,ht,3,0,"ng-container",0),s.Tb()),2&t){const t=e.$implicit;s.Bb(1),s.pc("ngIf",1e3*t.remainingDelay>0),s.Bb(1),s.pc("ngIf",1e3*t.remainingDelay<=0)}}function gt(t,e){if(1&t){const t=s.Vb();s.Ub(0,"td",32),s.Ub(1,"div",40),s.Pb(2,"span"),s.Pb(3,"app-units-render",34),s.Ub(4,"div",41),s.Ub(5,"a",42),s.Ub(6,"button",43),s.Ub(7,"mat-icon"),s.Lc(8,"open_in_new"),s.Tb(),s.Tb(),s.Tb(),s.Ub(9,"button",44),s.fc("click",(function(){s.Ac(t);const i=e.$implicit;return s.jc(2).editTask(i)})),s.Ub(10,"mat-icon"),s.Lc(11,"edit"),s.Tb(),s.Tb(),s.Ub(12,"button",45),s.fc("click",(function(){s.Ac(t);const i=e.$implicit;s.jc();const n=s.xc(47);return s.jc().delete(i,n)})),s.Ub(13,"mat-icon"),s.Lc(14,"delete_forever"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb()}if(2&t){const t=e.$implicit,i=s.jc(2);s.Cb("colspan",i.columnsToDisplay.length),s.Bb(1),s.pc("@detailExpand",t==i.expandedElement?"expanded":"collapsed"),s.Bb(2),s.pc("value",t.units),s.Bb(2),s.pc("href",i.placeLink(t),s.Cc)}}function vt(t,e){1&t&&s.Pb(0,"tr",46)}function Ut(t,e){if(1&t){const t=s.Vb();s.Ub(0,"tr",47),s.fc("click",(function(){s.Ac(t);const i=e.$implicit,n=s.jc(2);return n.expandedElement=n.expandedElement===i?null:i})),s.Tb()}if(2&t){const t=e.$implicit,i=s.jc(2);s.Gb("example-expanded-row",t==i.expandedElement)}}function kt(t,e){1&t&&s.Pb(0,"tr",48)}const wt=function(){return["expandedDetail"]},xt=function(){return[10,50,100,250]};function Ct(t,e){if(1&t){const t=s.Vb();s.Sb(0),s.Ub(1,"div",1),s.Ub(2,"div",2),s.Pb(3,"span"),s.Ub(4,"div",3),s.Pb(5,"mat-slide-toggle",4),s.Jc(6,G,3,0,"button",5),s.Ub(7,"button",6),s.fc("click",(function(){return s.Ac(t),s.jc().exportWorkbench()})),s.Ub(8,"mat-icon"),s.Lc(9,"import_export"),s.Tb(),s.Tb(),s.Ub(10,"button",7),s.fc("click",(function(){s.Ac(t);const e=s.xc(47);return s.jc().refresh(e)})),s.Ub(11,"mat-icon"),s.Lc(12,"refresh"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(13,"div",8),s.Jc(14,q,2,1,"div",9),s.Ub(15,"div",10),s.Ub(16,"table",11),s.Sb(17,12),s.Jc(18,Q,2,2,"th",13),s.Jc(19,X,2,1,"td",14),s.Rb(),s.Sb(20,15),s.Jc(21,tt,2,0,"th",13),s.Jc(22,et,2,1,"td",14),s.Rb(),s.Sb(23,16),s.Jc(24,it,2,0,"th",13),s.Jc(25,nt,2,1,"td",14),s.Rb(),s.Sb(26,17),s.Jc(27,ot,2,0,"th",13),s.Jc(28,st,3,2,"td",14),s.Rb(),s.Sb(29,18),s.Jc(30,lt,2,0,"th",13),s.Jc(31,rt,2,1,"td",14),s.Rb(),s.Sb(32,19),s.Jc(33,bt,2,0,"th",13),s.Jc(34,mt,2,1,"td",14),s.Rb(),s.Sb(35,20),s.Jc(36,dt,2,0,"th",13),s.Jc(37,ut,4,2,"td",14),s.Rb(),s.Sb(38,21),s.Jc(39,pt,2,0,"th",13),s.Jc(40,Tt,3,2,"td",14),s.Rb(),s.Sb(41,22),s.Jc(42,gt,15,4,"td",14),s.Rb(),s.Jc(43,vt,1,0,"tr",23),s.Jc(44,Ut,1,2,"tr",24),s.Jc(45,kt,1,0,"tr",25),s.Tb(),s.Tb(),s.Ub(46,"mat-paginator",26,27),s.fc("page",(function(e){return s.Ac(t),s.jc().pageUpdate(e)})),s.Tb(),s.Tb(),s.Rb()}if(2&t){const t=s.jc();s.Bb(5),s.pc("formControl",t.removeControl),s.Bb(1),s.pc("ngIf",t.selection.hasValue()),s.Bb(8),s.pc("ngIf",t.isLoadingResults),s.Bb(2),s.pc("dataSource",t.tasks.tasks),s.Bb(27),s.pc("matHeaderRowDef",t.columnsToDisplay),s.Bb(1),s.pc("matRowDefColumns",t.columnsToDisplay),s.Bb(1),s.pc("matRowDefColumns",s.sc(10,wt)),s.Bb(1),s.pc("length",t.tasks.count)("pageSize",10)("pageSizeOptions",s.sc(11,xt))}}let Lt=(()=>{class t{constructor(t,e,i,n,o){this.commandService=t,this.clipboard=e,this.router=i,this.web=n,this.dialog=o,this.unsub$=new c.b,this.columnsToDisplay=["select","from","to","commandType","unit","sendTime","arrivalTime","remainingDelay"],this.tasks={id:Math.random(),count:0,tasks:[]},this.isLoadingResults=!1,this.selection=new h.c(!0,[]),this.removeControl=new T.e(!1),this.shouldReload=!1}ngOnInit(){this.removeControl.setValue(this.commandService.shouldOverviewRemove(),{emitEvent:!1}),this.removeControl.valueChanges.subscribe(t=>{this.commandService.setOverviewRemove(t)}),this.web.info().subscribe(t=>{this.world=t.world}),this.isLoadingResults=!0,this.commandService.getCommandList(10,0).subscribe(t=>{this.isLoadingResults=!1,this.tasks=t}),this.commandService.addCommandEvents().pipe(Object(a.a)(this.unsub$)).subscribe(t=>{this.tasks.tasks=[...this.tasks.tasks,t],this.tasks.count++,this.tasks.tasks.sort((t,e)=>t.remainingDelay<e.remainingDelay?-1:1)}),this.commandService.removeCommandEvents().pipe(Object(a.a)(this.unsub$)).subscribe(t=>{this.tasks.tasks=this.tasks.tasks.filter((e,i,n)=>e.id!==t),this.tasks.count--}),Object(u.a)(1e3).pipe(Object(a.a)(this.unsub$)).subscribe(t=>{var e,i;let n=!1;null===(i=null===(e=this.tasks)||void 0===e?void 0:e.tasks)||void 0===i||i.forEach((t,e,i)=>{1===t.remainingDelay&&(n=!0),i[e].remainingDelay>0&&(i[e].remainingDelay-=1)}),n&&setTimeout(()=>{this.shouldReload=!0},16500),this.shouldReload&&!0===this.removeControl.value&&(this.shouldReload=!1,this.refresh(this.paginator))})}placeLink(t){return"https://"+this.world+".die-staemme.de/game.php?village="+t.from.id+"&screen=place&mode=command&target="+t.to.id}isAllSelected(){return this.selection.selected.length===this.tasks.tasks.length}masterToggle(){this.isAllSelected()?this.selection.clear():this.tasks.tasks.forEach(t=>this.selection.select(t))}editTask(t){this.dialog.open(A,{data:t}).afterClosed().subscribe(t=>{var e,i;t&&(this.tasks.tasks=null===(i=null===(e=this.tasks)||void 0===e?void 0:e.tasks)||void 0===i?void 0:i.map(e=>e.id===t.id?t:e),this.expandedElement=t)})}refresh(t){this.isLoadingResults=!0,setTimeout(()=>{this.commandService.getCommandList(t.pageSize,t.pageIndex*t.pageSize).subscribe(t=>{this.tasks=t,this.isLoadingResults=!1})},100)}pageUpdate(t){this.isLoadingResults=!0,setTimeout(()=>{this.commandService.getCommandList(t.pageSize,t.pageIndex*t.pageSize).subscribe(t=>{this.tasks=t,this.isLoadingResults=!1})},100)}delete(t,e){this.commandService.removeCommand(t.id),this.refresh(e)}exportWorkbench(){this.commandService.exportWorkbench().subscribe(t=>{this.clipboard.copy(t)})}deleteSelected(t){this.selection.selected.forEach(t=>{this.selection.deselect(t),this.commandService.removeCommand(t.id)}),this.refresh(t)}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(k.a),s.Ob(M),s.Ob(o.b),s.Ob(U.a),s.Ob(v.b))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-command-overview"]],viewQuery:function(t,e){var i;1&t&&s.Rc(p.a,!0),2&t&&s.wc(i=s.gc())&&(e.paginator=i.first)},decls:2,vars:2,consts:[[4,"ngIf"],[1,"row"],[1,"col-xl-12","flex-between"],[1,"flex-between"],["matTooltip","Gesendete Befehle entfernen",3,"formControl"],["mat-icon-button","","matTooltip","Ausgew\xe4hlte l\xf6schen.",3,"click",4,"ngIf"],["mat-icon-button","","matTooltip","Als Workbench Plan exportieren.",3,"click"],["mat-icon-button","","matTooltip","Refresh.",3,"click"],[1,"overview-container"],["class","loading-shade",4,"ngIf"],[1,"table-container"],["mat-table","","multiTemplateDataRows","",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","from"],["matColumnDef","to"],["matColumnDef","commandType"],["matColumnDef","unit"],["matColumnDef","sendTime"],["matColumnDef","arrivalTime"],["matColumnDef","remainingDelay"],["matColumnDef","expandedDetail"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","example-element-row",3,"example-expanded-row","click",4,"matRowDef","matRowDefColumns"],["mat-row","","class","example-detail-row",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions","page"],["paginator",""],["mat-icon-button","","matTooltip","Ausgew\xe4hlte l\xf6schen.",3,"click"],[1,"loading-shade"],["mat-header-cell",""],[3,"checked","indeterminate","change"],["mat-cell",""],[3,"checked","click","change"],[3,"value"],["title","Angriff",3,"value",4,"ngIf"],["title","Unterst\xfctzung",3,"value",4,"ngIf"],["title","Angriff",3,"value"],["title","Unterst\xfctzung",3,"value"],[2,"color","red"],[1,"example-element-detail","centerflex"],[1,"example-element-description"],["target","_blank",3,"href"],["mat-raised-button","","color","primary"],["mat-raised-button","","color","primary",1,"ml-2",3,"click"],["mat-raised-button","","color","warn",1,"ml-2",3,"click"],["mat-header-row",""],["mat-row","",1,"example-element-row",3,"click"],["mat-row","",1,"example-detail-row"]],template:function(t,e){1&t&&(s.Jc(0,Z,2,0,"ng-container",0),s.Jc(1,Ct,48,12,"ng-container",0)),2&t&&(s.pc("ngIf",!e.isLoadingResults&&e.tasks&&0===e.tasks.tasks.length),s.Bb(1),s.pc("ngIf",e.isLoadingResults||e.tasks&&e.tasks.tasks.length>0))},directives:[n.m,$.a,_.a,T.o,T.f,C.a,E.a,z.j,z.c,z.e,z.b,z.g,z.i,p.a,H.b,z.d,V.a,z.a,N.a,S.a,Y.a,z.f,z.h],pipes:[W.a],styles:["table[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{padding:2px!important}.overview-container[_ngcontent-%COMP%]{position:relative;min-height:200px}.table-container[_ngcontent-%COMP%]{position:relative;overflow:auto}.loading-shade[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:56px;right:0;background:rgba(0,0,0,.15);z-index:1;display:flex;align-items:center;justify-content:center}tr.example-detail-row[_ngcontent-%COMP%]{height:0}.centerflex[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}tr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active, tr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover{background:#636363}.example-element-detail[_ngcontent-%COMP%]{overflow:hidden;display:flex;justify-content:space-between}.example-element-diagram[_ngcontent-%COMP%]{min-width:80px;padding:8px;font-weight:lighter;margin:8px 0;height:104px}.example-element-symbol[_ngcontent-%COMP%]{font-weight:700;font-size:40px;line-height:normal}.example-element-description[_ngcontent-%COMP%]{padding:16px}.example-element-description-attribution[_ngcontent-%COMP%]{opacity:.5}"],data:{animation:[Object(f.o)("detailExpand",[Object(f.l)("collapsed",Object(f.m)({height:"0px",minHeight:"0"})),Object(f.l)("expanded",Object(f.m)({height:"*"})),Object(f.n)("expanded <=> collapsed",Object(f.e)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}}),t})();var yt=i("cJCv");let Bt=(()=>{class t{constructor(t){this.command=t,this.control=new T.e("",T.v.required)}ngOnInit(){}submit(t){this.control.disable(),this.command.simpleTimer(t),setTimeout(()=>{this.control.enable()},2e3)}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(k.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-command-simple-timer"]],decls:12,vars:2,consts:[[1,"form-group","row"],["for","time",1,"label","col-sm-1","col-form-label"],[1,"col-sm-11"],[1,"example-full-width"],["autocomplete","off","autocapitalize","off","spellcheck","false","id","time","matInput","","placeholder","Zeit",1,"example-full-width",3,"formControl"],[1,"offset-sm-1","col-sm-11"],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(t,e){1&t&&(s.Ub(0,"div",0),s.Ub(1,"label",1),s.Lc(2,"Zeit"),s.Tb(),s.Ub(3,"div",2),s.Ub(4,"mat-form-field",3),s.Pb(5,"input",4),s.Ub(6,"mat-hint"),s.Lc(7,"z.B. heute um 12:28:22:500"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(8,"div",0),s.Ub(9,"div",5),s.Ub(10,"button",6),s.fc("click",(function(){return e.submit(e.control.value)})),s.Lc(11," Timen "),s.Tb(),s.Tb(),s.Tb()),2&t&&(s.Bb(5),s.pc("formControl",e.control),s.Bb(5),s.pc("disabled",e.control.invalid||e.control.disabled))},directives:[L.b,B.b,T.c,T.o,T.f,L.e,C.a],styles:[""]}),t})();var Ot=i("pLZG"),St=i("lJxs"),Dt=i("BTe0"),Ft=i("MutI");function Pt(t,e){if(1&t&&(s.Ub(0,"div",14),s.Ub(1,"div",2),s.Pb(2,"mat-progress-bar",15),s.Tb(),s.Tb()),2&t){const t=s.jc(2);s.Bb(2),s.pc("value",t.progress)}}function It(t,e){if(1&t&&(s.Ub(0,"mat-list-item"),s.Ub(1,"small"),s.Lc(2),s.Tb(),s.Ub(3,"span",17),s.Lc(4),s.Tb(),s.Tb()),2&t){const t=e.$implicit;s.Bb(2),s.Nc("",t.line," "),s.Bb(2),s.Nc(" ",t.error,"")}}function jt(t,e){if(1&t&&(s.Ub(0,"div"),s.Ub(1,"p"),s.Lc(2),s.Tb(),s.Ub(3,"mat-list"),s.Jc(4,It,5,2,"mat-list-item",16),s.Tb(),s.Tb()),2&t){const t=s.jc(3);s.Bb(2),s.Nc("",t.result.error," Tasks konnten nicht importiert werden."),s.Bb(2),s.pc("ngForOf",t.result.errors)}}function Rt(t,e){if(1&t&&(s.Ub(0,"div",14),s.Ub(1,"div",2),s.Ub(2,"h1"),s.Lc(3,"Import abgeschlossen."),s.Tb(),s.Ub(4,"p"),s.Lc(5),s.Tb(),s.Jc(6,jt,5,2,"div",7),s.Tb(),s.Tb()),2&t){const t=s.jc(2);s.Bb(5),s.Oc("",t.result.success," von ",t.result.tasks," Tasks erfolgreich importiert."),s.Bb(1),s.pc("ngIf",t.result.error>0)}}function At(t,e){if(1&t&&(s.Ub(0,"mat-card",12),s.Ub(1,"mat-card-content"),s.Jc(2,Pt,3,1,"div",13),s.Jc(3,Rt,7,3,"div",13),s.Tb(),s.Tb()),2&t){const t=s.jc();s.Bb(2),s.pc("ngIf",t.importing),s.Bb(1),s.pc("ngIf",t.result)}}function Jt(t,e){if(1&t&&s.Pb(0,"img",20),2&t){const t=s.jc(2);s.pc("src",t.imagebase+"buildings/"+t.catapultControl.value+".png",s.Cc)}}function Mt(t,e){if(1&t&&(s.Ub(0,"mat-select-trigger"),s.Ub(1,"div",18),s.Ub(2,"span"),s.Lc(3),s.kc(4,"titlecase"),s.Tb(),s.Jc(5,Jt,1,1,"img",19),s.Tb(),s.Tb()),2&t){const t=s.jc();s.Bb(3),s.Mc(s.lc(4,2,t.catapultControl.value)),s.Bb(2),s.pc("ngIf",t.imagebase)}}function $t(t,e){if(1&t&&s.Pb(0,"img",20),2&t){const t=s.jc().$implicit,e=s.jc();s.pc("src",e.imagebase+"buildings/"+t+".png",s.Cc)}}function _t(t,e){if(1&t&&(s.Ub(0,"mat-option",21),s.Ub(1,"div",18),s.Ub(2,"span"),s.Lc(3),s.kc(4,"titlecase"),s.Tb(),s.Jc(5,$t,1,1,"img",19),s.Tb(),s.Tb()),2&t){const t=e.$implicit,i=s.jc();s.pc("value",t),s.Bb(3),s.Mc(s.lc(4,3,t)),s.Bb(2),s.pc("ngIf",i.imagebase)}}const Et=[{path:"",component:d,children:[{path:"schedule",component:yt.a},{path:"timer",component:Bt},{path:"import",component:(()=>{class t{constructor(t,e){this.command=t,this.web=e,this.unsub$=new c.b,this.importing=!1,this.progress=0,this.control=new T.e("",T.v.required),this.catapultControl=new T.e("///DEFAULT///",T.v.required),this.buildings=[]}ngOnInit(){this.web.info().subscribe(t=>{this.imagebase=t.imageBase,this.buildings=t.buildings}),this.command.importWorkbenchStart().subscribe(t=>{t===this.id&&(this.importing=!0)}),this.command.importWorkbenchProgress().pipe(Object(Ot.a)(t=>t.id===this.id),Object(St.a)(t=>t.percentage)).subscribe(t=>{this.progress=t}),this.command.importWorkbenchFinish().pipe(Object(Ot.a)(t=>t.id===this.id)).subscribe(t=>{this.importing=!1,this.result=t})}submit(t,e){this.control.disable(),this.id=this.command.importWorkbench(t,e),setTimeout(()=>{this.control.enable()},2e3)}ngOnDestroy(){this.unsub$.next(),this.unsub$.complete()}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(k.a),s.Ob(U.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-command-import-wb"]],decls:22,vars:6,consts:[["class","mat-elevation-z6",4,"ngIf"],[1,"form-group","row"],[1,"col-xl-12"],[1,"full-width"],["rows","10","id","plan","matInput","","placeholder","Plan",1,"example-full-width",3,"formControl"],[1,"col-md-12"],[3,"formControl"],[4,"ngIf"],["value","///DEFAULT///"],[3,"value",4,"ngFor","ngForOf"],[1,"col-sm-11"],["type","submit","mat-raised-button","","color","primary",3,"disabled","click"],[1,"mat-elevation-z6"],["class","row",4,"ngIf"],[1,"row"],[2,"height","20px","border-radius","3px",3,"value"],[4,"ngFor","ngForOf"],[2,"color","red"],[1,"flex-between"],["matSuffix","","class","img-fluid",3,"src",4,"ngIf"],["matSuffix","",1,"img-fluid",3,"src"],[3,"value"]],template:function(t,e){1&t&&(s.Jc(0,At,4,2,"mat-card",0),s.Ub(1,"mat-card-content"),s.Ub(2,"div",1),s.Ub(3,"div",2),s.Ub(4,"mat-form-field",3),s.Pb(5,"textarea",4),s.Ub(6,"mat-hint"),s.Lc(7,"Befehle in der \xdcbersicht ausw\xe4hlen und mit STRG+C kopieren."),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(8,"div",1),s.Ub(9,"div",5),s.Ub(10,"mat-form-field"),s.Ub(11,"mat-label"),s.Lc(12,"Katapult Ziel"),s.Tb(),s.Ub(13,"mat-select",6),s.Jc(14,Mt,6,4,"mat-select-trigger",7),s.Ub(15,"mat-option",8),s.Lc(16,"Default"),s.Tb(),s.Jc(17,_t,6,5,"mat-option",9),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(18,"div",1),s.Ub(19,"div",10),s.Ub(20,"button",11),s.fc("click",(function(){return e.submit(e.control.value,e.catapultControl.value)})),s.Lc(21," Importieren "),s.Tb(),s.Tb(),s.Tb(),s.Tb()),2&t&&(s.pc("ngIf",e.importing||e.result),s.Bb(5),s.pc("formControl",e.control),s.Bb(8),s.pc("formControl",e.catapultControl),s.Bb(1),s.pc("ngIf","///DEFAULT///"!==e.catapultControl.value),s.Bb(3),s.pc("ngForOf",e.buildings),s.Bb(3),s.pc("disabled",e.control.invalid||e.control.disabled))},directives:[n.m,r.c,L.b,B.b,T.c,T.o,T.f,L.e,L.f,y.a,D.l,n.l,C.a,r.a,Dt.a,Ft.a,Ft.b,y.c,L.g],pipes:[n.v],styles:[".full-width[_ngcontent-%COMP%]{width:100%}mat-divider[_ngcontent-%COMP%]{margin-bottom:15px}"]}),t})()},{path:"edit/:id",component:A},{path:"",pathMatch:"full",component:Lt}]}];let zt=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[o.e.forChild(Et)],o.e]}),t})();i("8LU1"),i("R1ws"),i("u47x");let Ht=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[D.r,D.i],D.i]}),t})();var Vt=i("BLWB"),Nt=i("1yaQ"),Yt=i("40+f"),Wt=i("f0Cb");let Zt=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},providers:[{provide:D.d,useValue:"de-DE"}],imports:[[n.c,zt,l.c,r.f,B.c,C.b,y.b,Ht,T.t,p.b,z.l,Vt.a,E.b,O.c,Nt.a,H.a,_.b,Dt.b,Yt.a,Wt.a,Ft.c,V.b,$.b,v.c]]}),t})()}}]);