function _createForOfIteratorHelper(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r,a=!0,s=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return a=t.done,t},e:function(t){s=!0,r=t},f:function(){try{a||null==i.return||i.return()}finally{if(s)throw r}}}}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function _get(t,e,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=_superPropBase(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,i=_getPrototypeOf(t);if(e){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"34hJ":function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var i,r,a=n("fXoL"),s=function(){return(s=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},o=function(){function t(t,e,n){var i=this;this.target=t,this.endVal=e,this.options=n,this.version="2.0.5",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.frameVal=i.useEasing?i.countDown?i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.countDown?i.startVal-e/i.duration*(i.startVal-i.endVal):i.startVal+e/i.duration*(i.endVal-i.startVal),i.frameVal=i.countDown?i.frameVal<i.endVal?i.endVal:i.frameVal:i.frameVal>i.endVal?i.endVal:i.frameVal,i.frameVal=Math.round(i.frameVal*i.decimalMult)/i.decimalMult,i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(t){var e,n,r,a,s,o=t<0?"-":"";if(e=Math.abs(t).toFixed(i.options.decimalPlaces),r=(n=(e+="").split("."))[0],a=n.length>1?i.options.decimal+n[1]:"",i.options.useGrouping){s="";for(var u=0,c=r.length;u<c;++u)0!==u&&u%3==0&&(s=i.options.separator+s),s=r[c-u-1]+s;r=s}return i.options.numerals&&i.options.numerals.length&&(r=r.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),a=a.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),o+i.options.prefix+r+a+i.options.suffix},this.easeOutExpo=function(t,e,n,i){return n*(1-Math.pow(2,-10*t/i))*1024/1023+e},this.options=s(s({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t,Math.abs(t-this.startVal)>this.options.smartEasingThreshold?(this.finalEndVal=t,this.endVal=t+(this.countDown?1:-1)*this.options.smartEasingAmount,this.duration=this.duration/2):(this.endVal=t,this.finalEndVal=null),this.useEasing=!this.finalEndVal&&this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}(),u=n("ofXK"),c=((r=function(){function t(e,n,i){_classCallCheck(this,t),this.el=e,this.zone=n,this.platformId=i,this.options={},this.reanimateOnClick=!0,this.complete=new a.n}return _createClass(t,[{key:"onClick",value:function(){this.reanimateOnClick&&this.animate()}},{key:"ngOnChanges",value:function(t){Object(u.m)(this.platformId)&&t.endVal&&void 0!==t.endVal.currentValue&&(void 0!==this.previousEndVal&&(this.options=Object.assign({},this.options,{startVal:this.previousEndVal})),this.countUp=new o(this.el.nativeElement,this.endVal,this.options),this.animate(),this.previousEndVal=this.endVal)}},{key:"animate",value:function(){var t=this;this.zone.runOutsideAngular((function(){t.countUp.reset(),t.countUp.start((function(){t.zone.run((function(){t.complete.emit()}))}))}))}}]),t}()).\u0275fac=function(t){return new(t||r)(a.Gb(a.l),a.Gb(a.z),a.Gb(a.B))},r.\u0275dir=a.Bb({type:r,selectors:[["","countUp",""]],hostBindings:function(t,e){1&t&&a.Qb("click",(function(){return e.onClick()}))},inputs:{options:"options",reanimateOnClick:"reanimateOnClick",endVal:["countUp","endVal"]},outputs:{complete:"complete"},features:[a.vb]}),r),l=((i=function t(){_classCallCheck(this,t)}).\u0275mod=a.Eb({type:i}),i.\u0275inj=a.Db({factory:function(t){return new(t||i)},imports:[[]]}),i)},"5+sL":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("ofXK"),r=n("34hJ"),a=n("fXoL"),s=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=a.Eb({type:t}),t.\u0275inj=a.Db({factory:function(e){return new(e||t)},imports:[[i.b,r.b]]}),t}()},Lquv:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("fXoL"),r=n("34hJ"),a=function(){var t=function(){function t(){_classCallCheck(this,t),this.totalConfirmed=0,this.totalActive=0,this.totalDeaths=0,this.totalRecovered=0}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ab({type:t,selectors:[["app-dashboard"]],inputs:{totalConfirmed:"totalConfirmed",totalActive:"totalActive",totalDeaths:"totalDeaths",totalRecovered:"totalRecovered"},decls:25,vars:4,consts:[[1,"row"],[1,"card","col","p-3","m-3"],[1,"ui","statistic"],[1,"label"],[1,"value"],[1,"value",3,"countUp"]],template:function(t,e){1&t&&(i.Jb(0,"div",0),i.Jb(1,"div",1),i.Jb(2,"div",2),i.Jb(3,"div",3),i.ec(4," Confirmed "),i.Ib(),i.Jb(5,"div",4),i.ec(6),i.Ib(),i.Ib(),i.Ib(),i.Jb(7,"div",1),i.Jb(8,"div",2),i.Jb(9,"div",3),i.ec(10," Recovered "),i.Ib(),i.Jb(11,"div",5),i.ec(12," 0 "),i.Ib(),i.Ib(),i.Ib(),i.Jb(13,"div",1),i.Jb(14,"div",2),i.Jb(15,"div",3),i.ec(16," Deaths "),i.Ib(),i.Jb(17,"div",4),i.ec(18),i.Ib(),i.Ib(),i.Ib(),i.Jb(19,"div",1),i.Jb(20,"div",2),i.Jb(21,"div",3),i.ec(22," Active "),i.Ib(),i.Jb(23,"div",5),i.ec(24," 0 "),i.Ib(),i.Ib(),i.Ib(),i.Ib()),2&t&&(i.wb(6),i.gc(" ",e.totalConfirmed," "),i.wb(5),i.Wb("countUp",e.totalRecovered),i.wb(7),i.gc(" ",e.totalDeaths," "),i.wb(5),i.Wb("countUp",e.totalActive))},directives:[r.a],styles:[""]}),t}()},icpI:function(t,e,n){"use strict";n.d(e,"a",(function(){return U})),n.d(e,"b",(function(){return B})),n.d(e,"c",(function(){return F}));var i,r=n("XNiG"),a=n("HDdC"),s=n("LRne"),o=n("quSY"),u=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,i){var r;return _classCallCheck(this,n),(r=e.call(this,t,i)).scheduler=t,r.work=i,r.pending=!1,r}return _createClass(n,[{key:"schedule",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(this.closed)return this;this.state=t;var n=this.id,i=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(i,n,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(i,this.id,e),this}},{key:"requestAsyncId",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return setInterval(t.flush.bind(t,this),n)}},{key:"recycleAsyncId",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(null!==n&&this.delay===n&&!1===this.pending)return e;clearInterval(e)}},{key:"execute",value:function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}},{key:"_execute",value:function(t,e){var n=!1,i=void 0;try{this.work(t)}catch(r){n=!0,i=!!r&&r||new Error(r)}if(n)return this.unsubscribe(),i}},{key:"_unsubscribe",value:function(){var t=this.id,e=this.scheduler,n=e.actions,i=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==i&&n.splice(i,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null}}]),n}(function(t){_inherits(n,t);var e=_createSuper(n);function n(t,i){return _classCallCheck(this,n),e.call(this)}return _createClass(n,[{key:"schedule",value:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this}}]),n}(o.a)),c=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,i){var r;return _classCallCheck(this,n),(r=e.call(this,t,i)).scheduler=t,r.work=i,r}return _createClass(n,[{key:"schedule",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e>0?_get(_getPrototypeOf(n.prototype),"schedule",this).call(this,t,e):(this.delay=e,this.state=t,this.scheduler.flush(this),this)}},{key:"execute",value:function(t,e){return e>0||this.closed?_get(_getPrototypeOf(n.prototype),"execute",this).call(this,t,e):this._execute(t,e)}},{key:"requestAsyncId",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return null!==i&&i>0||null===i&&this.delay>0?_get(_getPrototypeOf(n.prototype),"requestAsyncId",this).call(this,t,e,i):t.flush(this)}}]),n}(u),l=function(){var t=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.now;_classCallCheck(this,t),this.SchedulerAction=e,this.now=n}return _createClass(t,[{key:"schedule",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0;return new this.SchedulerAction(this,t).schedule(n,e)}}]),t}();return t.now=function(){return Date.now()},t}(),h=function(t){_inherits(n,t);var e=_createSuper(n);function n(t){var i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.now;return _classCallCheck(this,n),(i=e.call(this,t,(function(){return n.delegate&&n.delegate!==_assertThisInitialized(i)?n.delegate.now():r()}))).actions=[],i.active=!1,i.scheduled=void 0,i}return _createClass(n,[{key:"schedule",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0;return n.delegate&&n.delegate!==this?n.delegate.schedule(t,e,i):_get(_getPrototypeOf(n.prototype),"schedule",this).call(this,t,e,i)}},{key:"flush",value:function(t){var e=this.actions;if(this.active)e.push(t);else{var n;this.active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}}}]),n}(l),d=new(function(t){_inherits(n,t);var e=_createSuper(n);function n(){return _classCallCheck(this,n),e.apply(this,arguments)}return n}(h))(c),f=n("7o/Q"),p=n("EY2u"),v=((i=function(){function t(e,n,i){_classCallCheck(this,t),this.kind=e,this.value=n,this.error=i,this.hasValue="N"===e}return _createClass(t,[{key:"observe",value:function(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}}},{key:"do",value:function(t,e,n){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return n&&n()}}},{key:"accept",value:function(t,e,n){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,n)}},{key:"toObservable",value:function(){switch(this.kind){case"N":return Object(s.a)(this.value);case"E":return t=this.error,new a.a((function(e){return e.error(t)}));case"C":return Object(p.b)()}var t;throw new Error("unexpected notification kind value")}}],[{key:"createNext",value:function(e){return void 0!==e?new t("N",e):t.undefinedValueNotification}},{key:"createError",value:function(e){return new t("E",void 0,e)}},{key:"createComplete",value:function(){return t.completeNotification}}]),t}()).completeNotification=new i("C"),i.undefinedValueNotification=new i("N",void 0),i),y=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,i){var r,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return _classCallCheck(this,n),(r=e.call(this,t)).scheduler=i,r.delay=a,r}return _createClass(n,[{key:"scheduleMessage",value:function(t){this.destination.add(this.scheduler.schedule(n.dispatch,this.delay,new b(t,this.destination)))}},{key:"_next",value:function(t){this.scheduleMessage(v.createNext(t))}},{key:"_error",value:function(t){this.scheduleMessage(v.createError(t)),this.unsubscribe()}},{key:"_complete",value:function(){this.scheduleMessage(v.createComplete()),this.unsubscribe()}}],[{key:"dispatch",value:function(t){var e=t.notification,n=t.destination;e.observe(n),this.unsubscribe()}}]),n}(f.a),b=function t(e,n){_classCallCheck(this,t),this.notification=e,this.destination=n},m=n("9ppp"),g=n("Ylt2"),_=function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Number.POSITIVE_INFINITY,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.POSITIVE_INFINITY,a=arguments.length>2?arguments[2]:void 0;return _classCallCheck(this,n),(t=e.call(this)).scheduler=a,t._events=[],t._infiniteTimeWindow=!1,t._bufferSize=i<1?1:i,t._windowTime=r<1?1:r,r===Number.POSITIVE_INFINITY?(t._infiniteTimeWindow=!0,t.next=t.nextInfiniteTimeWindow):t.next=t.nextTimeWindow,t}return _createClass(n,[{key:"nextInfiniteTimeWindow",value:function(t){var e=this._events;e.push(t),e.length>this._bufferSize&&e.shift(),_get(_getPrototypeOf(n.prototype),"next",this).call(this,t)}},{key:"nextTimeWindow",value:function(t){this._events.push(new w(this._getNow(),t)),this._trimBufferThenGetEvents(),_get(_getPrototypeOf(n.prototype),"next",this).call(this,t)}},{key:"_subscribe",value:function(t){var e,n=this._infiniteTimeWindow,i=n?this._events:this._trimBufferThenGetEvents(),r=this.scheduler,a=i.length;if(this.closed)throw new m.a;if(this.isStopped||this.hasError?e=o.a.EMPTY:(this.observers.push(t),e=new g.a(this,t)),r&&t.add(t=new y(t,r)),n)for(var s=0;s<a&&!t.closed;s++)t.next(i[s]);else for(var u=0;u<a&&!t.closed;u++)t.next(i[u].value);return this.hasError?t.error(this.thrownError):this.isStopped&&t.complete(),e}},{key:"_getNow",value:function(){return(this.scheduler||d).now()}},{key:"_trimBufferThenGetEvents",value:function(){for(var t=this._getNow(),e=this._bufferSize,n=this._windowTime,i=this._events,r=i.length,a=0;a<r&&!(t-i[a].time<n);)a++;return r>e&&(a=Math.max(a,r-e)),a>0&&i.splice(0,a),i}}]),n}(r.a),w=function t(e,n){_classCallCheck(this,t),this.time=e,this.value=n},C=n("itXk"),k=n("DH7j"),O=n("n6bG"),V=n("lJxs");n("mrSG");var S=n("fXoL"),A=n("eIep"),D=new h(u),I=function(){function t(e,n){_classCallCheck(this,t),this.dueTime=e,this.scheduler=n}return _createClass(t,[{key:"call",value:function(t,e){return e.subscribe(new E(t,this.dueTime,this.scheduler))}}]),t}(),E=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,i,r){var a;return _classCallCheck(this,n),(a=e.call(this,t)).dueTime=i,a.scheduler=r,a.debouncedSubscription=null,a.lastValue=null,a.hasValue=!1,a}return _createClass(n,[{key:"_next",value:function(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(T,this.dueTime,this))}},{key:"_complete",value:function(){this.debouncedNext(),this.destination.complete()}},{key:"debouncedNext",value:function(){if(this.clearDebounce(),this.hasValue){var t=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}}},{key:"clearDebounce",value:function(){var t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)}}]),n}(f.a);function T(t){t.debouncedNext()}var x,j,z,P,N,L,R=["*"],W=new S.q("GOOGLE_CHARTS_CONFIG"),G={mapsApiKey:"",version:"current",safeMode:!1},F=((P=function(){function t(e,n,i){_classCallCheck(this,t),this.zone=e,this.localeId=n,this.config=i,this.scriptSource="https://www.gstatic.com/charts/loader.js",this.scriptLoadSubject=new r.a,this.config=Object.assign(Object.assign({},G),i||{})}return _createClass(t,[{key:"isGoogleChartsAvailable",value:function(){return"undefined"!=typeof google&&void 0!==google.charts}},{key:"loadChartPackages",value:function(){for(var t=this,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return this.loadGoogleCharts().pipe(Object(A.a)((function(){return new a.a((function(e){google.charts.load(t.config.version,{packages:n,language:t.localeId,mapsApiKey:t.config.mapsApiKey,safeMode:t.config.safeMode}),google.charts.setOnLoadCallback((function(){t.zone.run((function(){e.next(),e.complete()}))}))}))})))}},{key:"loadGoogleCharts",value:function(){var t=this;if(this.isGoogleChartsAvailable())return Object(s.a)(null);if(!this.isLoadingGoogleCharts()){var e=this.createGoogleChartsScript();e.onload=function(){t.zone.run((function(){t.scriptLoadSubject.next(),t.scriptLoadSubject.complete()}))},e.onerror=function(){t.zone.run((function(){console.error("Failed to load the google charts script!"),t.scriptLoadSubject.error(new Error("Failed to load the google charts script!"))}))}}return this.scriptLoadSubject.asObservable()}},{key:"isLoadingGoogleCharts",value:function(){return null!=this.getGoogleChartsScript()}},{key:"getGoogleChartsScript",value:function(){var t=this;return Array.from(document.getElementsByTagName("script")).find((function(e){return e.src===t.scriptSource}))}},{key:"createGoogleChartsScript",value:function(){var t=document.createElement("script");return t.type="text/javascript",t.src=this.scriptSource,t.async=!0,document.getElementsByTagName("head")[0].appendChild(t),t}}]),t}()).\u0275fac=function(t){return new(t||P)(S.Mb(S.z),S.Mb(S.u),S.Mb(W,8))},P.\u0275prov=Object(S.Cb)({factory:function(){return new P(Object(S.Mb)(S.z),Object(S.Mb)(S.u),Object(S.Mb)(W,8))},token:P,providedIn:"root"}),P),M=((z=function(){function t(e){_classCallCheck(this,t),this.loaderService=e,this.error=new S.n,this.ready=new S.n,this.stateChange=new S.n,this.id="_"+Math.random().toString(36).substr(2,9),this.wrapperReadySubject=new _(1),this.initialized=!1}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.loaderService.loadChartPackages("controls").subscribe((function(){t.createControlWrapper(),t.initialized=!0}))}},{key:"ngOnChanges",value:function(t){this.initialized&&(t.type&&this._controlWrapper.setControlType(this.type),t.options&&this._controlWrapper.setOptions(this.options),t.state&&this._controlWrapper.setState(this.state))}},{key:"createControlWrapper",value:function(){this._controlWrapper=new google.visualization.ControlWrapper({containerId:this.id,controlType:this.type,state:this.state,options:this.options}),this.addEventListeners(),this.wrapperReadySubject.next(this._controlWrapper)}},{key:"addEventListeners",value:function(){var t=this;google.visualization.events.removeAllListeners(this._controlWrapper),google.visualization.events.addListener(this._controlWrapper,"ready",(function(e){return t.ready.emit(e)})),google.visualization.events.addListener(this._controlWrapper,"error",(function(e){return t.error.emit(e)})),google.visualization.events.addListener(this._controlWrapper,"statechange",(function(e){return t.stateChange.emit(e)}))}},{key:"wrapperReady$",get:function(){return this.wrapperReadySubject.asObservable()}},{key:"controlWrapper",get:function(){return this._controlWrapper}}]),t}()).\u0275fac=function(t){return new(t||z)(S.Gb(F))},z.\u0275cmp=S.Ab({type:z,selectors:[["control-wrapper"]],hostAttrs:[1,"control-wrapper"],hostVars:1,hostBindings:function(t,e){2&t&&S.Lb("id",e.id)},inputs:{for:"for",type:"type",options:"options",state:"state"},outputs:{error:"error",ready:"ready",stateChange:"stateChange"},exportAs:["controlWrapper"],features:[S.vb],decls:0,vars:0,template:function(t,e){},encapsulation:2,changeDetection:0}),z),J=((j=function(){function t(e,n){_classCallCheck(this,t),this.element=e,this.loaderService=n,this.ready=new S.n,this.error=new S.n,this.initialized=!1}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.loaderService.loadChartPackages("controls").subscribe((function(){t.createDataTable(),t.createDashboard(),t.initialized=!0}))}},{key:"ngOnChanges",value:function(t){this.initialized&&(t.data||t.columns)&&(this.createDataTable(),this.dashboard.draw(this.dataTable))}},{key:"createDashboard",value:function(){var t=this,e=this.controlWrappers.map((function(t){return t.wrapperReady$})),n=this.controlWrappers.map((function(t){return t.for})).map((function(t){return Array.isArray(t)?Object(C.a)(t.map((function(t){return t.wrapperReady$}))):t.wrapperReady$}));Object(C.a)([].concat(_toConsumableArray(e),_toConsumableArray(n))).subscribe((function(){t.dashboard=new google.visualization.Dashboard(t.element.nativeElement),t.initializeBindings(),t.dashboard.draw(t.dataTable)}))}},{key:"initializeBindings",value:function(){var t=this;this.controlWrappers.forEach((function(e){if(Array.isArray(e.for)){var n=e.for.map((function(t){return t.chartWrapper}));t.dashboard.bind(e.controlWrapper,n)}else t.dashboard.bind(e.controlWrapper,e.for.chartWrapper)}))}},{key:"createDataTable",value:function(){if(null!=this.data){var t=!0;null!=this.columns&&(t=!1),this.dataTable=google.visualization.arrayToDataTable(this.getDataAsTable(),t)}}},{key:"getDataAsTable",value:function(){return this.columns?[this.columns].concat(_toConsumableArray(this.data)):this.data}}]),t}()).\u0275fac=function(t){return new(t||j)(S.Gb(S.l),S.Gb(F))},j.\u0275cmp=S.Ab({type:j,selectors:[["dashboard"]],contentQueries:function(t,e,n){var i;1&t&&S.zb(n,M,!1),2&t&&S.Yb(i=S.Rb())&&(e.controlWrappers=i)},hostAttrs:[1,"dashboard"],inputs:{data:"data",columns:"columns"},outputs:{ready:"ready",error:"error"},exportAs:["dashboard"],features:[S.vb],ngContentSelectors:R,decls:1,vars:0,template:function(t,e){1&t&&(S.Vb(),S.Ub(0))},encapsulation:2,changeDetection:0}),j),U=((x=function(){function t(e,n,i){_classCallCheck(this,t),this.element=e,this.scriptLoaderService=n,this.dashboard=i,this.options={},this.dynamicResize=!1,this.ready=new S.n,this.error=new S.n,this.select=new S.n,this.mouseover=new S.n,this.mouseleave=new S.n,this.wrapperReadySubject=new _(1),this.initialized=!1}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.scriptLoaderService.loadChartPackages().subscribe((function(){t.createDataTable(),t.wrapper=new google.visualization.ChartWrapper({container:t.element.nativeElement,chartType:t.type,dataTable:t.dataTable,options:t.mergeOptions()}),t.registerChartEvents(),t.wrapperReadySubject.next(t.wrapper),t.initialized=!0,t.drawChart()}))}},{key:"ngOnChanges",value:function(t){if(t.dynamicResize&&this.updateResizeListener(),this.initialized){var e=!1;(t.data||t.columns||t.formatters)&&(this.createDataTable(),this.wrapper.setDataTable(this.dataTable),e=!0),t.type&&(this.wrapper.setChartType(this.type),e=!0),(t.options||t.width||t.height||t.title)&&(this.wrapper.setOptions(this.mergeOptions()),e=!0),e&&this.drawChart()}}},{key:"createDataTable",value:function(){if(null!=this.data){var t=!0;null!=this.columns&&(t=!1),this.dataTable=google.visualization.arrayToDataTable(this.getDataAsTable(),t),this.applyFormatters(this.dataTable)}}},{key:"getDataAsTable",value:function(){return this.columns?[this.columns].concat(_toConsumableArray(this.data)):this.data}},{key:"updateResizeListener",value:function(){var t=this;null!=this.resizeSubscription&&(this.resizeSubscription.unsubscribe(),this.resizeSubscription=null),this.dynamicResize&&(this.resizeSubscription=function t(e,n,i,r){return Object(O.a)(i)&&(r=i,i=void 0),r?t(e,n,i).pipe(Object(V.a)((function(t){return Object(k.a)(t)?r.apply(void 0,_toConsumableArray(t)):r(t)}))):new a.a((function(t){!function t(e,n,i,r,a){var s;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(e)){var o=e;e.addEventListener(n,i,a),s=function(){return o.removeEventListener(n,i,a)}}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(e)){var u=e;e.on(n,i),s=function(){return u.off(n,i)}}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(e)){var c=e;e.addListener(n,i),s=function(){return c.removeListener(n,i)}}else{if(!e||!e.length)throw new TypeError("Invalid event target");for(var l=0,h=e.length;l<h;l++)t(e[l],n,i,r,a)}r.add(s)}(e,n,(function(e){t.next(arguments.length>1?Array.prototype.slice.call(arguments):e)}),t,i)}))}(window,"resize").pipe(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D;return function(n){return n.lift(new I(t,e))}}(100)).subscribe((function(){t.initialized&&t.drawChart()})))}},{key:"mergeOptions",value:function(){return Object.assign({title:this.title,width:this.width,height:this.height},this.options)}},{key:"applyFormatters",value:function(t){if(null!=this.formatters){var e,n=_createForOfIteratorHelper(this.formatters);try{for(n.s();!(e=n.n()).done;){var i=e.value;i.formatter.format(t,i.colIndex)}}catch(r){n.e(r)}finally{n.f()}}}},{key:"registerChartEvents",value:function(){var t=this;google.visualization.events.removeAllListeners(this.wrapper);var e=function(t,e,n){google.visualization.events.addListener(t,e,n)};e(this.wrapper,"ready",(function(){google.visualization.events.removeAllListeners(t.chart),e(t.chart,"onmouseover",(function(e){return t.mouseover.emit(e)})),e(t.chart,"onmouseout",(function(e){return t.mouseleave.emit(e)})),e(t.chart,"select",(function(){var e=t.chart.getSelection();t.select.emit({selection:e})})),t.ready.emit({chart:t.chart})})),e(this.wrapper,"error",(function(e){return t.error.emit(e)}))}},{key:"drawChart",value:function(){null==this.dashboard&&this.wrapper.draw()}},{key:"chart",get:function(){return this.wrapper?this.wrapper.getChart():null}},{key:"wrapperReady$",get:function(){return this.wrapperReadySubject.asObservable()}},{key:"chartWrapper",get:function(){return this.wrapper},set:function(t){this.wrapper=t,this.drawChart()}}]),t}()).\u0275fac=function(t){return new(t||x)(S.Gb(S.l),S.Gb(F),S.Gb(J,8))},x.\u0275cmp=S.Ab({type:x,selectors:[["google-chart"]],hostAttrs:[1,"google-chart"],inputs:{options:"options",dynamicResize:"dynamicResize",type:"type",data:"data",columns:"columns",title:"title",width:"width",height:"height",formatters:"formatters"},outputs:{ready:"ready",error:"error",select:"select",mouseover:"mouseover",mouseleave:"mouseleave"},exportAs:["googleChart"],features:[S.vb],decls:0,vars:0,template:function(t,e){},styles:["[_nghost-%COMP%] { width: fit-content; display: block; }"],changeDetection:0}),x),B=((L=N=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"forRoot",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:N,providers:[{provide:W,useValue:t}]}}}]),t}()).\u0275mod=S.Eb({type:L}),L.\u0275inj=S.Db({factory:function(t){return new(t||L)}}),L)},mrSG:function(t,e,n){"use strict";function i(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}n.d(e,"a",(function(){return i}))},njzu:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("lJxs"),r=n("JIr8"),a=n("fXoL"),s=n("tk/3"),o=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e,this.extention=".csv",this.DateWiseDataUrl="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",this.baseDataUrl="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/",this.now=new Date,this.setDatesString(),this.DataUrl="".concat(this.baseDataUrl).concat(this.getDate(this.month),"-").concat(this.getDate(this.day),"-").concat(this.year).concat(this.extention)}return _createClass(t,[{key:"getDate",value:function(t){return t<10?"0"+t:t}},{key:"setDatesString",value:function(){this.month=this.now.getMonth()+1,this.day=this.now.getDate(),this.year=this.now.getFullYear()}},{key:"getDateWiseData",value:function(){return this.http.get(this.DateWiseDataUrl,{responseType:"text"}).pipe(Object(i.a)((function(t){var e=t.split("\n"),n={},i=e[0].split(/,(?=\S)/);return i.splice(0,4),e.splice(0,1),e.forEach((function(t){var e=t.split(/,(?=\S)/),r=e[1];e.splice(0,4),n[r]=[],e.forEach((function(t,e){var a={cases:+t,country:r,date:new Date(Date.parse(i[e]))};n[r].push(a)}))})),n})))}},{key:"getGlobalData",value:function(){var t=this;return this.http.get(this.DataUrl,{responseType:"text"}).pipe(Object(i.a)((function(t){var e={},n=t.split("\n");return n.splice(0,1),n.forEach((function(t){var n=t.split(/,(?=\S)/),i={country:n[3],confirmed:+n[7],deaths:+n[8],recovered:+n[9],active:+n[10]},r=e[i.country];r?(r.active+=i.active,r.confirmed+=i.confirmed,r.deaths+=i.deaths,r.recovered+=i.recovered,e[i.country]=r):e[i.country]=i})),Object.values(e)})),Object(r.a)((function(e){if(404===e.status)return t.now=t.subDays(t.now,1),t.setDatesString(),t.DataUrl="".concat(t.baseDataUrl).concat(t.getDate(t.month),"-").concat(t.getDate(t.day),"-").concat(t.year).concat(t.extention),t.getGlobalData()})))}},{key:"subDays",value:function(t,e){var n=new Date(t);return n.setDate(n.getDate()-e),n}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Mb(s.a))},t.\u0275prov=a.Cb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);