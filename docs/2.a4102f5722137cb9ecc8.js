(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"38Pe":function(t,e,i){"use strict";i.d(e,"a",(function(){return C}));var n=i("fXoL"),a=i("3Pt+"),s=i("lJxs"),o=i("UXun"),r=i("ZTz/"),c=i("0MNC"),l=i("7nMs"),b=i("ofXK"),h=i("Q2Ze"),d=i("e6WT"),u=i("bTqV"),p=i("FKr1");function f(t,e){if(1&t&&n.Pb(0,"img",8),2&t){const t=n.jc().$implicit,e=n.jc();n.pc("src",e.imagebase+"unit/unit_"+t+".png",n.Bc)}}const g=function(t,e){return{"col-xl-12":t,pad:e}};function m(t,e){if(1&t){const t=n.Vb();n.Ub(0,"span",0),n.kc(1,"async"),n.kc(2,"async"),n.Ub(3,"mat-form-field",3),n.Ub(4,"mat-label"),n.Kc(5),n.kc(6,"titlecase"),n.Tb(),n.Ub(7,"input",4,5),n.fc("change",(function(){n.zc(t);const i=e.$implicit,a=n.xc(8);return n.jc().input(a.value,i)})),n.Tb(),n.Ub(9,"button",6),n.fc("click",(function(){n.zc(t);const i=e.$implicit,a=n.xc(8);return n.jc().input("alle",i),a.value="alle"})),n.Ic(10,f,1,1,"img",7),n.Tb(),n.Tb(),n.Tb()}if(2&t){const t=e.$implicit,i=n.jc();n.pc("ngClass",n.uc(10,g,i.forceVertical||!0===n.lc(1,4,i.isHandset$),!(i.forceVertical||!0===n.lc(2,6,i.isHandset$)))),n.Bb(5),n.Lc(n.lc(6,8,t)),n.Bb(2),n.pc("id","troop_input_"+t),n.Bb(3),n.pc("ngIf",i.imagebase)}}function _(t,e){if(1&t&&n.Pb(0,"img",18),2&t){const t=n.jc(3);n.pc("src",t.imagebase+"buildings/"+t.formControl.value.cataTarget+".png",n.Bc)}}function v(t,e){if(1&t&&(n.Ub(0,"mat-select-trigger"),n.Ub(1,"div",16),n.Ub(2,"span"),n.Kc(3),n.kc(4,"titlecase"),n.Tb(),n.Ic(5,_,1,1,"img",17),n.Tb(),n.Tb()),2&t){const t=n.jc(2);n.Bb(3),n.Lc(n.lc(4,2,t.formControl.value.cataTarget)),n.Bb(2),n.pc("ngIf",t.imagebase)}}function k(t,e){if(1&t&&n.Pb(0,"img",18),2&t){const t=n.jc().$implicit,e=n.jc(2);n.pc("src",e.imagebase+"buildings/"+t+".png",n.Bc)}}function w(t,e){if(1&t&&(n.Ub(0,"mat-option",19),n.Ub(1,"div",16),n.Ub(2,"span"),n.Kc(3),n.kc(4,"titlecase"),n.Tb(),n.Ic(5,k,1,1,"img",17),n.Tb(),n.Tb()),2&t){const t=e.$implicit,i=n.jc(2);n.pc("value",t),n.Bb(3),n.Lc(n.lc(4,3,t)),n.Bb(2),n.pc("ngIf",i.imagebase)}}function x(t,e){if(1&t){const t=n.Vb();n.Ub(0,"div",9),n.Ub(1,"div",10),n.Ub(2,"mat-form-field"),n.Ub(3,"mat-label"),n.Kc(4,"Katapult Ziel"),n.Tb(),n.Ub(5,"mat-select",11,12),n.fc("valueChange",(function(){n.zc(t);const e=n.xc(6);return n.jc().input(e.value,"cataTarget")})),n.Ic(7,v,6,4,"mat-select-trigger",13),n.Ub(8,"mat-option",14),n.Kc(9,"Default"),n.Tb(),n.Ic(10,w,6,5,"mat-option",15),n.Tb(),n.Tb(),n.Tb(),n.Tb()}if(2&t){const t=n.jc();n.Bb(7),n.pc("ngIf","///DEFAULT///"!==t.formControl.value.cataTarget),n.Bb(3),n.pc("ngForOf",t.buildings)}}const y=function(t,e){return{spread:t,row:e}};let C=(()=>{class t{constructor(t,e){this.breakpointObserver=t,this.web=e,this.forceVertical=!1,this.hideCataTarget=!1,this.units=[],this.buildings=[],this.formControl=new a.e({cataTarget:"///DEFAULT///"}),this.isHandset$=this.breakpointObserver.observe("(max-width: 839.99px) and (orientation: portrait), (max-width: 1279.99px) and (orientation: landscape)").pipe(Object(s.a)(t=>t.matches),Object(o.a)()),this.propagateChange=t=>{}}ngOnInit(){this.web.infoObservable.subscribe(t=>{this.units=t.units,this.imagebase=t.imageBase,this.buildings=t.buildings}),this.units.forEach(t=>{const e={};e[t]="0",this.formControl.patchValue(e)}),this.formControl.valueChanges.subscribe(t=>{this.propagateChange(t)})}input(t,e){const i={};i[e]=t,this.formControl.setValue(Object.assign(Object.assign({},this.formControl.value),i))}get cata(){return this.formControl.value.catapult&&"0"!==this.formControl.value.catapult}writeValue(t){null==t&&(t={cataTarget:"///DEFAULT///"}),this.formControl.setValue(t),setTimeout(()=>{void 0!==this.select&&(this.select.value=t.cataTarget),this.units.forEach(e=>{const i=document.getElementById("troop_input_"+e);null!==i&&t.hasOwnProperty(e)&&(i.value=t[e])})},10)}registerOnChange(t){this.propagateChange=t}registerOnTouched(t){}setDisabledState(t){t?this.formControl.disable():this.formControl.enable()}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(c.a),n.Ob(l.a))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-units-input"]],viewQuery:function(t,e){var i;1&t&&n.Pc(r.a,!0),2&t&&n.wc(i=n.gc())&&(e.select=i.first)},inputs:{forceVertical:"forceVertical",hideCataTarget:"hideCataTarget"},features:[n.Ab([{provide:a.l,multi:!0,useExisting:Object(n.V)(()=>t)}])],decls:5,vars:10,consts:[[3,"ngClass"],[3,"ngClass",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[1,"full-width"],["matInput","","type","text",3,"id","change"],["t",""],["mat-button","","matSuffix","","mat-icon-button","",3,"click"],["class","img-fluid",3,"src",4,"ngIf"],[1,"img-fluid",3,"src"],[1,"row"],[1,"col-12"],[3,"valueChange"],["select",""],[4,"ngIf"],["value","///DEFAULT///"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-between"],["matSuffix","","class","img-fluid",3,"src",4,"ngIf"],["matSuffix","",1,"img-fluid",3,"src"],[3,"value"]],template:function(t,e){1&t&&(n.Ub(0,"div",0),n.kc(1,"async"),n.kc(2,"async"),n.Ic(3,m,11,13,"span",1),n.Tb(),n.Ic(4,x,11,2,"div",2)),2&t&&(n.pc("ngClass",n.uc(7,y,!(e.forceVertical||!0===n.lc(1,3,e.isHandset$)),e.forceVertical||!0===n.lc(2,5,e.isHandset$))),n.Bb(3),n.pc("ngForOf",e.units),n.Bb(1),n.pc("ngIf",e.cata&&!e.hideCataTarget))},directives:[b.k,b.l,b.m,h.b,h.f,d.b,u.a,h.g,r.a,p.l,r.c],pipes:[b.b,b.v],styles:[".full-width[_ngcontent-%COMP%]{width:99%}.pad[_ngcontent-%COMP%]{padding-left:6px;padding-right:6px}div.spread[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}div.spread[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:table-cell;text-align:center}"]}),t})()},"7Ixi":function(t,e,i){"use strict";i.d(e,"a",(function(){return p}));var n=i("fXoL"),a=i("3Pt+"),s=i("Kj3r"),o=i("eIep"),r=i("YWTT"),c=i("Q2Ze"),l=i("e6WT"),b=i("vrAh"),h=i("ofXK"),d=i("FKr1");function u(t,e){if(1&t&&(n.Ub(0,"mat-option",5),n.Ub(1,"span"),n.Kc(2),n.Tb(),n.Ub(3,"small"),n.Kc(4),n.Tb(),n.Tb()),2&t){const t=e.$implicit;n.pc("value",t),n.Bb(2),n.Lc(t.search),n.Bb(2),n.Mc(" | Punkte: ",t.points,"")}}let p=(()=>{class t{constructor(t){this.villageService=t,this.label="Dorf",this.formControl=new a.e("",t=>null==t.value||!t.value.id||"number"!=typeof t.value.id||t.value.id<0?{source:!0}:null),this.propagateChange=t=>{}}ngOnInit(){this.formControl.valueChanges.subscribe(t=>{this.propagateChange(t)})}writeValue(t){this.formControl.setValue(t)}registerOnChange(t){this.propagateChange=t}registerOnTouched(t){}setDisabledState(t){t?this.formControl.disable():this.formControl.enable()}displayFn(t){return t?t.search:""}ngAfterViewInit(){this.villages$=this.formControl.valueChanges.pipe(Object(s.a)(300),Object(o.a)(t=>"string"==typeof t?this.villageService.searchVillages(t):"object"==typeof t?this.villageService.searchVillages(t.search):void 0))}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(r.a))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-village-input"]],inputs:{label:"label"},features:[n.Ab([{provide:a.l,multi:!0,useExisting:Object(n.V)(()=>t)},{provide:a.k,useValue:t=>null==t.value||!t.value.id||"number"!=typeof t.value.id||t.value.id<0?{source:!0}:null,multi:!0}])],decls:6,vars:7,consts:[[1,"full-width"],["autocomplete","off","autocapitalize","off","spellcheck","false","matInput","",1,"full-width",3,"placeholder","matAutocomplete","formControl"],["panelWidth","450px",3,"displayWith"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){if(1&t&&(n.Ub(0,"mat-form-field",0),n.Pb(1,"input",1),n.Tb(),n.Ub(2,"mat-autocomplete",2,3),n.Ic(4,u,5,3,"mat-option",4),n.kc(5,"async"),n.Tb()),2&t){const t=n.xc(3);n.Bb(1),n.pc("placeholder",e.label)("matAutocomplete",t)("formControl",e.formControl),n.Bb(1),n.pc("displayWith",e.displayFn),n.Bb(2),n.pc("ngForOf",n.lc(5,5,e.villages$))}},directives:[c.b,l.b,b.c,a.c,a.n,a.f,b.a,h.l,d.l],pipes:[h.b],styles:[".full-width[_ngcontent-%COMP%]{width:100%}"]}),t})()},M9ds:function(t,e,i){"use strict";i.d(e,"a",(function(){return E})),i.d(e,"b",(function(){return R})),i.d(e,"c",(function(){return U}));var n=i("u47x"),a=i("GU7r"),s=i("1z/I"),o=i("ofXK"),r=i("fXoL"),c=i("FKr1"),l=i("R1ws"),b=i("XNiG"),h=(i("quSY"),i("VRyK")),d=i("xgIS"),u=i("LRne"),p=i("PqYM"),f=(i("R0Ic"),i("JX91")),g=(i("/uUt"),i("1G5W")),m=i("8LU1"),_=i("nLfN"),v=i("FtGj"),k=i("cH1L"),w=i("vxfF");const x=["*"],y=["tabListContainer"],C=["tabList"],O=["nextPaginator"],I=["previousPaginator"],T=["mat-tab-nav-bar",""],P=new r.s("MatInkBarPositioner",{providedIn:"root",factory:function(){return t=>({left:t?(t.offsetLeft||0)+"px":"0",width:t?(t.offsetWidth||0)+"px":"0"})}});let j=(()=>{class t{constructor(t,e,i,n){this._elementRef=t,this._ngZone=e,this._inkBarPositioner=i,this._animationMode=n}alignToElement(t){this.show(),"undefined"!=typeof requestAnimationFrame?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._setStyles(t))}):this._setStyles(t)}show(){this._elementRef.nativeElement.style.visibility="visible"}hide(){this._elementRef.nativeElement.style.visibility="hidden"}_setStyles(t){const e=this._inkBarPositioner(t),i=this._elementRef.nativeElement;i.style.left=e.left,i.style.width=e.width}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(r.l),r.Ob(r.B),r.Ob(P),r.Ob(l.a,8))},t.\u0275dir=r.Jb({type:t,selectors:[["mat-ink-bar"]],hostAttrs:[1,"mat-ink-bar"],hostVars:2,hostBindings:function(t,e){2&t&&r.Gb("_mat-animation-noopable","NoopAnimations"===e._animationMode)}}),t})();const B=Object(_.f)({passive:!0});let D=(()=>{class t{constructor(t,e,i,n,a,s,o){this._elementRef=t,this._changeDetectorRef=e,this._viewportRuler=i,this._dir=n,this._ngZone=a,this._platform=s,this._animationMode=o,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new b.b,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new b.b,this.disablePagination=!1,this._selectedIndex=0,this.selectFocusedIndex=new r.o,this.indexFocused=new r.o,a.runOutsideAngular(()=>{Object(d.a)(t.nativeElement,"mouseleave").pipe(Object(g.a)(this._destroyed)).subscribe(()=>{this._stopInterval()})})}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){t=Object(m.f)(t),this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}ngAfterViewInit(){Object(d.a)(this._previousPaginator.nativeElement,"touchstart",B).pipe(Object(g.a)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),Object(d.a)(this._nextPaginator.nativeElement,"touchstart",B).pipe(Object(g.a)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){const t=this._dir?this._dir.change:Object(u.a)(null),e=this._viewportRuler.change(150),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new n.g(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap(),this._keyManager.updateActiveItem(this._selectedIndex),"undefined"!=typeof requestAnimationFrame?requestAnimationFrame(i):i(),Object(h.a)(t,e,this._items.changes).pipe(Object(g.a)(this._destroyed)).subscribe(()=>{Promise.resolve().then(i),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.pipe(Object(g.a)(this._destroyed)).subscribe(t=>{this.indexFocused.emit(t),this._setTabFocus(t)})}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Object(v.s)(t))switch(t.keyCode){case v.f:case v.n:this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t));break;default:this._keyManager.onKeydown(t)}}_onContentChanges(){const t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){this._isValidIndex(t)&&this.focusIndex!==t&&this._keyManager&&this._keyManager.setActiveItem(t)}_isValidIndex(t){if(!this._items)return!0;const e=this._items?this._items.toArray()[t]:null;return!!e&&!e.disabled}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();const e=this._tabListContainer.nativeElement,i=this._getLayoutDirection();e.scrollLeft="ltr"==i?0:e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;const t=this.scrollDistance,e=this._platform,i="ltr"===this._getLayoutDirection()?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,e&&(e.TRIDENT||e.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){return this._scrollTo(this._scrollDistance+("before"==t?-1:1)*this._tabListContainer.nativeElement.offsetWidth/3)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;const e=this._items?this._items.toArray()[t]:null;if(!e)return;const i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:n,offsetWidth:a}=e.elementRef.nativeElement;let s,o;"ltr"==this._getLayoutDirection()?(s=n,o=s+a):(o=this._tabList.nativeElement.offsetWidth-n,s=o-a);const r=this.scrollDistance,c=this.scrollDistance+i;s<r?this.scrollDistance-=r-s+60:o>c&&(this.scrollDistance+=o-c+60)}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{const t=this._tabList.nativeElement.scrollWidth>this._elementRef.nativeElement.offsetWidth;t||(this.scrollDistance=0),t!==this._showPaginationControls&&this._changeDetectorRef.markForCheck(),this._showPaginationControls=t}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=0==this.scrollDistance,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabList.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){const t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&null!=e.button&&0!==e.button||(this._stopInterval(),Object(p.a)(650,100).pipe(Object(g.a)(Object(h.a)(this._stopScrolling,this._destroyed))).subscribe(()=>{const{maxScrollDistance:e,distance:i}=this._scrollHeader(t);(0===i||i>=e)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};const e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(r.l),r.Ob(r.h),r.Ob(w.e),r.Ob(k.b,8),r.Ob(r.B),r.Ob(_.a),r.Ob(l.a,8))},t.\u0275dir=r.Jb({type:t,inputs:{disablePagination:"disablePagination"}}),t})(),L=(()=>{class t extends D{constructor(t,e,i,n,a,s,o){super(t,n,a,e,i,s,o),this._disableRipple=!1,this.color="primary"}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){const e=this._elementRef.nativeElement.classList;e.remove("mat-background-"+this.backgroundColor),t&&e.add("mat-background-"+t),this._backgroundColor=t}get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Object(m.c)(t)}_itemSelected(){}ngAfterContentInit(){this._items.changes.pipe(Object(f.a)(null),Object(g.a)(this._destroyed)).subscribe(()=>{this.updateActiveLink()}),super.ngAfterContentInit()}updateActiveLink(t){if(!this._items)return;const e=this._items.toArray();for(let i=0;i<e.length;i++)if(e[i].active)return this.selectedIndex=i,void this._changeDetectorRef.markForCheck();this.selectedIndex=-1,this._inkBar.hide()}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(r.l),r.Ob(k.b,8),r.Ob(r.B),r.Ob(r.h),r.Ob(w.e),r.Ob(_.a),r.Ob(l.a,8))},t.\u0275dir=r.Jb({type:t,inputs:{color:"color",backgroundColor:"backgroundColor",disableRipple:"disableRipple"},features:[r.yb]}),t})(),R=(()=>{class t extends L{constructor(t,e,i,n,a,s,o){super(t,e,i,n,a,s,o)}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(r.l),r.Ob(k.b,8),r.Ob(r.B),r.Ob(r.h),r.Ob(w.e),r.Ob(_.a),r.Ob(l.a,8))},t.\u0275cmp=r.Ib({type:t,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(t,e,i){var n;1&t&&r.Hb(i,E,!0),2&t&&r.wc(n=r.gc())&&(e._items=n)},viewQuery:function(t,e){var i;1&t&&(r.Ec(j,!0),r.Ec(y,!0),r.Ec(C,!0),r.Pc(O,!0),r.Pc(I,!0)),2&t&&(r.wc(i=r.gc())&&(e._inkBar=i.first),r.wc(i=r.gc())&&(e._tabListContainer=i.first),r.wc(i=r.gc())&&(e._tabList=i.first),r.wc(i=r.gc())&&(e._nextPaginator=i.first),r.wc(i=r.gc())&&(e._previousPaginator=i.first))},hostAttrs:[1,"mat-tab-nav-bar","mat-tab-header"],hostVars:10,hostBindings:function(t,e){2&t&&r.Gb("mat-tab-header-pagination-controls-enabled",e._showPaginationControls)("mat-tab-header-rtl","rtl"==e._getLayoutDirection())("mat-primary","warn"!==e.color&&"accent"!==e.color)("mat-accent","accent"===e.color)("mat-warn","warn"===e.color)},inputs:{color:"color"},exportAs:["matTabNavBar","matTabNav"],features:[r.yb],attrs:T,ngContentSelectors:x,decls:13,vars:8,consts:[["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-before","mat-elevation-z4",3,"matRippleDisabled","click","mousedown","touchend"],["previousPaginator",""],[1,"mat-tab-header-pagination-chevron"],[1,"mat-tab-link-container",3,"keydown"],["tabListContainer",""],[1,"mat-tab-list",3,"cdkObserveContent"],["tabList",""],[1,"mat-tab-links"],["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-after","mat-elevation-z4",3,"matRippleDisabled","mousedown","click","touchend"],["nextPaginator",""]],template:function(t,e){1&t&&(r.oc(),r.Ub(0,"div",0,1),r.fc("click",(function(){return e._handlePaginatorClick("before")}))("mousedown",(function(t){return e._handlePaginatorPress("before",t)}))("touchend",(function(){return e._stopInterval()})),r.Pb(2,"div",2),r.Tb(),r.Ub(3,"div",3,4),r.fc("keydown",(function(t){return e._handleKeydown(t)})),r.Ub(5,"div",5,6),r.fc("cdkObserveContent",(function(){return e._onContentChanges()})),r.Ub(7,"div",7),r.nc(8),r.Tb(),r.Pb(9,"mat-ink-bar"),r.Tb(),r.Tb(),r.Ub(10,"div",8,9),r.fc("mousedown",(function(t){return e._handlePaginatorPress("after",t)}))("click",(function(){return e._handlePaginatorClick("after")}))("touchend",(function(){return e._stopInterval()})),r.Pb(12,"div",2),r.Tb()),2&t&&(r.Gb("mat-tab-header-pagination-disabled",e._disableScrollBefore),r.pc("matRippleDisabled",e._disableScrollBefore||e.disableRipple),r.Bb(5),r.Gb("_mat-animation-noopable","NoopAnimations"===e._animationMode),r.Bb(5),r.Gb("mat-tab-header-pagination-disabled",e._disableScrollAfter),r.pc("matRippleDisabled",e._disableScrollAfter||e.disableRipple))},directives:[c.q,a.a,j],styles:['.mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:"";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n'],encapsulation:2}),t})();class A{}const S=Object(c.A)(Object(c.w)(Object(c.x)(A)));let M=(()=>{class t extends S{constructor(t,e,i,n,a,s){super(),this._tabNavBar=t,this.elementRef=e,this._focusMonitor=a,this._isActive=!1,this.rippleConfig=i||{},this.tabIndex=parseInt(n)||0,"NoopAnimations"===s&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0})}get active(){return this._isActive}set active(t){t!==this._isActive&&(this._isActive=t,this._tabNavBar.updateActiveLink(this.elementRef))}get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this.elementRef)}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(L),r.Ob(r.l),r.Ob(c.h,8),r.dc("tabindex"),r.Ob(n.h),r.Ob(l.a,8))},t.\u0275dir=r.Jb({type:t,inputs:{active:"active"},features:[r.yb]}),t})(),E=(()=>{class t extends M{constructor(t,e,i,n,a,s,o,r){super(t,e,a,s,o,r),this._tabLinkRipple=new c.s(this,i,e,n),this._tabLinkRipple.setupTriggerEvents(e.nativeElement)}ngOnDestroy(){super.ngOnDestroy(),this._tabLinkRipple._removeTriggerEvents()}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(R),r.Ob(r.l),r.Ob(r.B),r.Ob(_.a),r.Ob(c.h,8),r.dc("tabindex"),r.Ob(n.h),r.Ob(l.a,8))},t.\u0275dir=r.Jb({type:t,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mat-tab-link","mat-focus-indicator"],hostVars:7,hostBindings:function(t,e){2&t&&(r.Cb("aria-current",e.active?"page":null)("aria-disabled",e.disabled)("tabIndex",e.tabIndex),r.Gb("mat-tab-disabled",e.disabled)("mat-tab-label-active",e.active))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matTabLink"],features:[r.yb]}),t})(),U=(()=>{class t{}return t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({factory:function(e){return new(e||t)},imports:[[o.c,c.i,s.g,c.r,a.c,n.a],c.i]}),t})()},YWTT:function(t,e,i){"use strict";i.d(e,"a",(function(){return b}));class n{constructor(t){this.id=Math.random(),this.query=t}getName(){return"io.robertengel.dsbot.feature.village.ws.packet.incoming.VillageSearchRequest"}}var a=i("pLZG"),s=i("SxV6"),o=i("lJxs");class r{constructor(t){this.id=t}getName(){return"io.robertengel.dsbot.feature.village.ws.packet.incoming.GetVillageByIdRequest"}}var c=i("fXoL"),l=i("7nMs");let b=(()=>{class t{constructor(t){this.web=t}searchVillages(t){const e=new n(t);return this.web.observable("VillageSearchResponse",e).pipe(Object(a.a)(t=>t.id===e.id),Object(s.a)(),Object(o.a)(t=>t.villages))}byId(t){return this.web.observable("VillageResponse",new r(t)).pipe(Object(a.a)(e=>e.id===t),Object(s.a)())}}return t.\u0275fac=function(e){return new(e||t)(c.cc(l.a))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},irRR:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i("fXoL"),a=i("7nMs"),s=i("ofXK");function o(t,e){if(1&t){const t=n.Vb();n.Ub(0,"a",2),n.fc("click",(function(e){return n.zc(t),e.stopPropagation()})),n.Kc(1),n.Pb(2,"br"),n.Tb()}if(2&t){const t=n.jc(2);n.pc("href",t.link,n.Bc),n.Bb(1),n.Oc(" ",t.value.name," (",t.value.x,"|",t.value.y,")")}}function r(t,e){if(1&t&&(n.Ub(0,"span"),n.Kc(1),n.Pb(2,"br"),n.Tb()),2&t){const t=n.jc(2);n.Bb(1),n.Oc(" ",t.value.name," (",t.value.x,"|",t.value.y,")")}}function c(t,e){if(1&t&&(n.Sb(0),n.Ic(1,o,3,4,"a",1),n.Ic(2,r,3,3,"span",0),n.Ub(3,"small"),n.Kc(4),n.kc(5,"number"),n.Tb(),n.Rb()),2&t){const t=n.jc();n.Bb(1),n.pc("ngIf",t.link),n.Bb(1),n.pc("ngIf",!t.link),n.Bb(2),n.Mc("Punkte: ",n.mc(5,3,t.value.points,"1.0","de"),"")}}let l=(()=>{class t{constructor(t){this.web=t}ngOnInit(){this.web.info().subscribe(t=>{this.world=t.world})}get link(){return this.world&&this.value?"https://"+this.world+".die-staemme.de/game.php?screen=info_village&id="+this.value.id:void 0}navigateTo(t){this.world&&this.value&&(t.stopPropagation(),window.open("https://"+this.world+".die-staemme.de/game.php?screen=info_village&id="+this.value.id,"_blank"))}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(a.a))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-village-render"]],inputs:{value:"value"},decls:1,vars:1,consts:[[4,"ngIf"],["target","_blank",3,"href","click",4,"ngIf"],["target","_blank",3,"href","click"]],template:function(t,e){1&t&&n.Ic(0,c,6,7,"ng-container",0),2&t&&n.pc("ngIf",e.value)},directives:[s.m],pipes:[s.e],styles:[".link[_ngcontent-%COMP%]{cursor:pointer}a[_ngcontent-%COMP%]{color:inherit}"]}),t})()},jTwa:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("fXoL"),a=i("7nMs"),s=i("ofXK");function o(t,e){if(1&t&&n.Pb(0,"img",1),2&t){const t=n.jc();n.pc("src",t.imagebase+"unit/unit_"+t.value+".png",n.Bc)}}let r=(()=>{class t{constructor(t){this.web=t}ngOnInit(){this.web.infoObservable.subscribe(t=>{this.units=t.units,this.imagebase=t.imageBase})}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(a.a))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-unit-render"]],inputs:{value:"value"},decls:1,vars:1,consts:[["class","img-fluid",3,"src",4,"ngIf"],[1,"img-fluid",3,"src"]],template:function(t,e){1&t&&n.Ic(0,o,1,1,"img",0),2&t&&n.pc("ngIf",e.imagebase)},directives:[s.m],styles:[""]}),t})()}}]);