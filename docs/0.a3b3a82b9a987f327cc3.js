(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{M9ds:function(t,e,i){"use strict";i.d(e,"a",(function(){return M})),i.d(e,"b",(function(){return S})),i.d(e,"c",(function(){return F}));var n=i("u47x"),a=i("GU7r"),s=i("1z/I"),o=i("ofXK"),r=i("fXoL"),l=i("FKr1"),c=i("R1ws"),h=i("XNiG"),d=(i("quSY"),i("VRyK")),b=i("xgIS"),u=i("LRne"),p=i("PqYM"),m=(i("R0Ic"),i("JX91")),f=(i("/uUt"),i("1G5W")),g=i("8LU1"),_=i("nLfN"),v=i("FtGj"),k=i("cH1L"),x=i("vxfF");const y=["*"],w=["tabListContainer"],O=["tabList"],I=["nextPaginator"],C=["previousPaginator"],P=["mat-tab-nav-bar",""],R=new r.s("MatInkBarPositioner",{providedIn:"root",factory:function(){return t=>({left:t?(t.offsetLeft||0)+"px":"0",width:t?(t.offsetWidth||0)+"px":"0"})}});let D=(()=>{class t{constructor(t,e,i,n){this._elementRef=t,this._ngZone=e,this._inkBarPositioner=i,this._animationMode=n}alignToElement(t){this.show(),"undefined"!=typeof requestAnimationFrame?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._setStyles(t))}):this._setStyles(t)}show(){this._elementRef.nativeElement.style.visibility="visible"}hide(){this._elementRef.nativeElement.style.visibility="hidden"}_setStyles(t){const e=this._inkBarPositioner(t),i=this._elementRef.nativeElement;i.style.left=e.left,i.style.width=e.width}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(r.l),r.Ob(r.B),r.Ob(R),r.Ob(c.a,8))},t.\u0275dir=r.Jb({type:t,selectors:[["mat-ink-bar"]],hostAttrs:[1,"mat-ink-bar"],hostVars:2,hostBindings:function(t,e){2&t&&r.Gb("_mat-animation-noopable","NoopAnimations"===e._animationMode)}}),t})();const L=Object(_.f)({passive:!0});let T=(()=>{class t{constructor(t,e,i,n,a,s,o){this._elementRef=t,this._changeDetectorRef=e,this._viewportRuler=i,this._dir=n,this._ngZone=a,this._platform=s,this._animationMode=o,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new h.b,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new h.b,this.disablePagination=!1,this._selectedIndex=0,this.selectFocusedIndex=new r.o,this.indexFocused=new r.o,a.runOutsideAngular(()=>{Object(b.a)(t.nativeElement,"mouseleave").pipe(Object(f.a)(this._destroyed)).subscribe(()=>{this._stopInterval()})})}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){t=Object(g.f)(t),this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}ngAfterViewInit(){Object(b.a)(this._previousPaginator.nativeElement,"touchstart",L).pipe(Object(f.a)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),Object(b.a)(this._nextPaginator.nativeElement,"touchstart",L).pipe(Object(f.a)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){const t=this._dir?this._dir.change:Object(u.a)(null),e=this._viewportRuler.change(150),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new n.g(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap(),this._keyManager.updateActiveItem(this._selectedIndex),"undefined"!=typeof requestAnimationFrame?requestAnimationFrame(i):i(),Object(d.a)(t,e,this._items.changes).pipe(Object(f.a)(this._destroyed)).subscribe(()=>{Promise.resolve().then(i),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.pipe(Object(f.a)(this._destroyed)).subscribe(t=>{this.indexFocused.emit(t),this._setTabFocus(t)})}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Object(v.s)(t))switch(t.keyCode){case v.f:case v.n:this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t));break;default:this._keyManager.onKeydown(t)}}_onContentChanges(){const t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){this._isValidIndex(t)&&this.focusIndex!==t&&this._keyManager&&this._keyManager.setActiveItem(t)}_isValidIndex(t){if(!this._items)return!0;const e=this._items?this._items.toArray()[t]:null;return!!e&&!e.disabled}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();const e=this._tabListContainer.nativeElement,i=this._getLayoutDirection();e.scrollLeft="ltr"==i?0:e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;const t=this.scrollDistance,e=this._platform,i="ltr"===this._getLayoutDirection()?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,e&&(e.TRIDENT||e.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){return this._scrollTo(this._scrollDistance+("before"==t?-1:1)*this._tabListContainer.nativeElement.offsetWidth/3)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;const e=this._items?this._items.toArray()[t]:null;if(!e)return;const i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:n,offsetWidth:a}=e.elementRef.nativeElement;let s,o;"ltr"==this._getLayoutDirection()?(s=n,o=s+a):(o=this._tabList.nativeElement.offsetWidth-n,s=o-a);const r=this.scrollDistance,l=this.scrollDistance+i;s<r?this.scrollDistance-=r-s+60:o>l&&(this.scrollDistance+=o-l+60)}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{const t=this._tabList.nativeElement.scrollWidth>this._elementRef.nativeElement.offsetWidth;t||(this.scrollDistance=0),t!==this._showPaginationControls&&this._changeDetectorRef.markForCheck(),this._showPaginationControls=t}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=0==this.scrollDistance,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabList.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){const t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&null!=e.button&&0!==e.button||(this._stopInterval(),Object(p.a)(650,100).pipe(Object(f.a)(Object(d.a)(this._stopScrolling,this._destroyed))).subscribe(()=>{const{maxScrollDistance:e,distance:i}=this._scrollHeader(t);(0===i||i>=e)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};const e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(r.l),r.Ob(r.h),r.Ob(x.e),r.Ob(k.b,8),r.Ob(r.B),r.Ob(_.a),r.Ob(c.a,8))},t.\u0275dir=r.Jb({type:t,inputs:{disablePagination:"disablePagination"}}),t})(),A=(()=>{class t extends T{constructor(t,e,i,n,a,s,o){super(t,n,a,e,i,s,o),this._disableRipple=!1,this.color="primary"}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){const e=this._elementRef.nativeElement.classList;e.remove("mat-background-"+this.backgroundColor),t&&e.add("mat-background-"+t),this._backgroundColor=t}get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Object(g.c)(t)}_itemSelected(){}ngAfterContentInit(){this._items.changes.pipe(Object(m.a)(null),Object(f.a)(this._destroyed)).subscribe(()=>{this.updateActiveLink()}),super.ngAfterContentInit()}updateActiveLink(t){if(!this._items)return;const e=this._items.toArray();for(let i=0;i<e.length;i++)if(e[i].active)return this.selectedIndex=i,void this._changeDetectorRef.markForCheck();this.selectedIndex=-1,this._inkBar.hide()}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(r.l),r.Ob(k.b,8),r.Ob(r.B),r.Ob(r.h),r.Ob(x.e),r.Ob(_.a),r.Ob(c.a,8))},t.\u0275dir=r.Jb({type:t,inputs:{color:"color",backgroundColor:"backgroundColor",disableRipple:"disableRipple"},features:[r.yb]}),t})(),S=(()=>{class t extends A{constructor(t,e,i,n,a,s,o){super(t,e,i,n,a,s,o)}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(r.l),r.Ob(k.b,8),r.Ob(r.B),r.Ob(r.h),r.Ob(x.e),r.Ob(_.a),r.Ob(c.a,8))},t.\u0275cmp=r.Ib({type:t,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(t,e,i){var n;1&t&&r.Hb(i,M,!0),2&t&&r.yc(n=r.gc())&&(e._items=n)},viewQuery:function(t,e){var i;1&t&&(r.Hc(D,!0),r.Hc(w,!0),r.Hc(O,!0),r.Tc(I,!0),r.Tc(C,!0)),2&t&&(r.yc(i=r.gc())&&(e._inkBar=i.first),r.yc(i=r.gc())&&(e._tabListContainer=i.first),r.yc(i=r.gc())&&(e._tabList=i.first),r.yc(i=r.gc())&&(e._nextPaginator=i.first),r.yc(i=r.gc())&&(e._previousPaginator=i.first))},hostAttrs:[1,"mat-tab-nav-bar","mat-tab-header"],hostVars:10,hostBindings:function(t,e){2&t&&r.Gb("mat-tab-header-pagination-controls-enabled",e._showPaginationControls)("mat-tab-header-rtl","rtl"==e._getLayoutDirection())("mat-primary","warn"!==e.color&&"accent"!==e.color)("mat-accent","accent"===e.color)("mat-warn","warn"===e.color)},inputs:{color:"color"},exportAs:["matTabNavBar","matTabNav"],features:[r.yb],attrs:P,ngContentSelectors:y,decls:13,vars:8,consts:[["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-before","mat-elevation-z4",3,"matRippleDisabled","click","mousedown","touchend"],["previousPaginator",""],[1,"mat-tab-header-pagination-chevron"],[1,"mat-tab-link-container",3,"keydown"],["tabListContainer",""],[1,"mat-tab-list",3,"cdkObserveContent"],["tabList",""],[1,"mat-tab-links"],["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-after","mat-elevation-z4",3,"matRippleDisabled","mousedown","click","touchend"],["nextPaginator",""]],template:function(t,e){1&t&&(r.oc(),r.Ub(0,"div",0,1),r.fc("click",(function(){return e._handlePaginatorClick("before")}))("mousedown",(function(t){return e._handlePaginatorPress("before",t)}))("touchend",(function(){return e._stopInterval()})),r.Pb(2,"div",2),r.Tb(),r.Ub(3,"div",3,4),r.fc("keydown",(function(t){return e._handleKeydown(t)})),r.Ub(5,"div",5,6),r.fc("cdkObserveContent",(function(){return e._onContentChanges()})),r.Ub(7,"div",7),r.nc(8),r.Tb(),r.Pb(9,"mat-ink-bar"),r.Tb(),r.Tb(),r.Ub(10,"div",8,9),r.fc("mousedown",(function(t){return e._handlePaginatorPress("after",t)}))("click",(function(){return e._handlePaginatorClick("after")}))("touchend",(function(){return e._stopInterval()})),r.Pb(12,"div",2),r.Tb()),2&t&&(r.Gb("mat-tab-header-pagination-disabled",e._disableScrollBefore),r.pc("matRippleDisabled",e._disableScrollBefore||e.disableRipple),r.Bb(5),r.Gb("_mat-animation-noopable","NoopAnimations"===e._animationMode),r.Bb(5),r.Gb("mat-tab-header-pagination-disabled",e._disableScrollAfter),r.pc("matRippleDisabled",e._disableScrollAfter||e.disableRipple))},directives:[l.q,a.a,D],styles:['.mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:"";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n'],encapsulation:2}),t})();class B{}const j=Object(l.A)(Object(l.w)(Object(l.x)(B)));let E=(()=>{class t extends j{constructor(t,e,i,n,a,s){super(),this._tabNavBar=t,this.elementRef=e,this._focusMonitor=a,this._isActive=!1,this.rippleConfig=i||{},this.tabIndex=parseInt(n)||0,"NoopAnimations"===s&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0})}get active(){return this._isActive}set active(t){t!==this._isActive&&(this._isActive=t,this._tabNavBar.updateActiveLink(this.elementRef))}get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this.elementRef)}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(A),r.Ob(r.l),r.Ob(l.h,8),r.dc("tabindex"),r.Ob(n.h),r.Ob(c.a,8))},t.\u0275dir=r.Jb({type:t,inputs:{active:"active"},features:[r.yb]}),t})(),M=(()=>{class t extends E{constructor(t,e,i,n,a,s,o,r){super(t,e,a,s,o,r),this._tabLinkRipple=new l.s(this,i,e,n),this._tabLinkRipple.setupTriggerEvents(e.nativeElement)}ngOnDestroy(){super.ngOnDestroy(),this._tabLinkRipple._removeTriggerEvents()}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(S),r.Ob(r.l),r.Ob(r.B),r.Ob(_.a),r.Ob(l.h,8),r.dc("tabindex"),r.Ob(n.h),r.Ob(c.a,8))},t.\u0275dir=r.Jb({type:t,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mat-tab-link","mat-focus-indicator"],hostVars:7,hostBindings:function(t,e){2&t&&(r.Cb("aria-current",e.active?"page":null)("aria-disabled",e.disabled)("tabIndex",e.tabIndex),r.Gb("mat-tab-disabled",e.disabled)("mat-tab-label-active",e.active))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matTabLink"],features:[r.yb]}),t})(),F=(()=>{class t{}return t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({factory:function(e){return new(e||t)},imports:[[o.c,l.i,s.g,l.r,a.c,n.a],l.i]}),t})()},irRR:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("fXoL"),a=i("7nMs"),s=i("ofXK");function o(t,e){if(1&t){const t=n.Vb();n.Ub(0,"a",2),n.fc("click",(function(e){return n.Cc(t),e.stopPropagation()})),n.Nc(1),n.Pb(2,"br"),n.Tb()}if(2&t){const t=n.jc(2);n.pc("href",t.link,n.Ec),n.Bb(1),n.Rc(" ",t.value.name," (",t.value.x,"|",t.value.y,")")}}function r(t,e){if(1&t&&(n.Ub(0,"span"),n.Nc(1),n.Pb(2,"br"),n.Tb()),2&t){const t=n.jc(2);n.Bb(1),n.Rc(" ",t.value.name," (",t.value.x,"|",t.value.y,")")}}function l(t,e){if(1&t&&(n.Sb(0),n.Lc(1,o,3,4,"a",1),n.Lc(2,r,3,3,"span",0),n.Ub(3,"small"),n.Nc(4),n.kc(5,"number"),n.Tb(),n.Rb()),2&t){const t=n.jc();n.Bb(1),n.pc("ngIf",t.link),n.Bb(1),n.pc("ngIf",!t.link),n.Bb(2),n.Pc("Punkte: ",n.mc(5,3,t.value.points,"1.0","de"),"")}}let c=(()=>{class t{constructor(t){this.web=t}ngOnInit(){this.web.info().subscribe(t=>{this.world=t.world})}get link(){return this.world&&this.value?"https://"+this.world+".die-staemme.de/game.php?screen=info_village&id="+this.value.id:void 0}navigateTo(t){this.world&&this.value&&(t.stopPropagation(),window.open("https://"+this.world+".die-staemme.de/game.php?screen=info_village&id="+this.value.id,"_blank"))}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(a.a))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-village-render"]],inputs:{value:"value"},decls:1,vars:1,consts:[[4,"ngIf"],["target","_blank",3,"href","click",4,"ngIf"],["target","_blank",3,"href","click"]],template:function(t,e){1&t&&n.Lc(0,l,6,7,"ng-container",0),2&t&&n.pc("ngIf",e.value)},directives:[s.m],pipes:[s.e],styles:[".link[_ngcontent-%COMP%]{cursor:pointer}a[_ngcontent-%COMP%]{color:inherit}"]}),t})()},jTwa:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("fXoL"),a=i("7nMs"),s=i("ofXK");function o(t,e){if(1&t&&n.Pb(0,"img",1),2&t){const t=n.jc();n.pc("src",t.imagebase+"unit/unit_"+t.value+".png",n.Ec)}}let r=(()=>{class t{constructor(t){this.web=t}ngOnInit(){this.web.infoObservable.subscribe(t=>{this.units=t.units,this.imagebase=t.imageBase})}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(a.a))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-unit-render"]],inputs:{value:"value"},decls:1,vars:1,consts:[["class","img-fluid",3,"src",4,"ngIf"],[1,"img-fluid",3,"src"]],template:function(t,e){1&t&&n.Lc(0,o,1,1,"img",0),2&t&&n.pc("ngIf",e.imagebase)},directives:[s.m],styles:[""]}),t})()}}]);