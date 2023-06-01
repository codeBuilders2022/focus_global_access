"use strict";(self.webpackChunkfocus_global_access=self.webpackChunkfocus_global_access||[]).push([[588],{8004:function(t,n,e){e.d(n,{K:function(){return D}});var o=e(2791);function r(){return r=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},r.apply(this,arguments)}function s(t,n){if(null==t)return{};var e,o,r={},s=Object.keys(t);for(o=0;o<s.length;o++)e=s[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}var i=e(9611);function a(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,(0,i.Z)(t,n)}function p(t,n){return t.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var u=e(4164),l=!1,c=o.createContext(null),f=function(t){return t.scrollTop},d="unmounted",E="exited",h="entering",m="entered",v="exiting",g=function(t){function n(n,e){var o;o=t.call(this,n,e)||this;var r,s=e&&!e.isMounting?n.enter:n.appear;return o.appearStatus=null,n.in?s?(r=E,o.appearStatus=h):r=m:r=n.unmountOnExit||n.mountOnEnter?d:E,o.state={status:r},o.nextCallback=null,o}a(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===d?{status:E}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==h&&e!==m&&(n=h):e!==h&&e!==m||(n=v)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,o=this.props.timeout;return t=n=e=o,null!=o&&"number"!==typeof o&&(t=o.exit,n=o.enter,e=void 0!==o.appear?o.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){if(void 0===t&&(t=!1),null!==n)if(this.cancelNextCallback(),n===h){if(this.props.unmountOnExit||this.props.mountOnEnter){var e=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this);e&&f(e)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:d})},e.performEnter=function(t){var n=this,e=this.props.enter,o=this.context?this.context.isMounting:t,r=this.props.nodeRef?[o]:[u.findDOMNode(this),o],s=r[0],i=r[1],a=this.getTimeouts(),p=o?a.appear:a.enter;!t&&!e||l?this.safeSetState({status:m},(function(){n.props.onEntered(s)})):(this.props.onEnter(s,i),this.safeSetState({status:h},(function(){n.props.onEntering(s,i),n.onTransitionEnd(p,(function(){n.safeSetState({status:m},(function(){n.props.onEntered(s,i)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),o=this.props.nodeRef?void 0:u.findDOMNode(this);n&&!l?(this.props.onExit(o),this.safeSetState({status:v},(function(){t.props.onExiting(o),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:E},(function(){t.props.onExited(o)}))}))}))):this.safeSetState({status:E},(function(){t.props.onExited(o)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(o){e&&(e=!1,n.nextCallback=null,t(o))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this),o=null==t&&!this.props.addEndListener;if(e&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],s=r[0],i=r[1];this.props.addEndListener(s,i)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===d)return null;var n=this.props,e=n.children,r=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,s(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(c.Provider,{value:null},"function"===typeof e?e(t,r):o.cloneElement(o.Children.only(e),r))},n}(o.Component);function x(){}g.contextType=c,g.propTypes={},g.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x},g.UNMOUNTED=d,g.EXITED=E,g.ENTERING=h,g.ENTERED=m,g.EXITING=v;var C=g,b=function(t,n){return t&&n&&n.split(" ").forEach((function(n){return o=n,void((e=t).classList?e.classList.remove(o):"string"===typeof e.className?e.className=p(e.className,o):e.setAttribute("class",p(e.className&&e.className.baseVal||"",o)));var e,o}))},y=function(t){function n(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))||this).appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(t,e){var o=n.resolveArguments(t,e),r=o[0],s=o[1];n.removeClasses(r,"exit"),n.addClass(r,s?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(t,e)},n.onEntering=function(t,e){var o=n.resolveArguments(t,e),r=o[0],s=o[1]?"appear":"enter";n.addClass(r,s,"active"),n.props.onEntering&&n.props.onEntering(t,e)},n.onEntered=function(t,e){var o=n.resolveArguments(t,e),r=o[0],s=o[1]?"appear":"enter";n.removeClasses(r,s),n.addClass(r,s,"done"),n.props.onEntered&&n.props.onEntered(t,e)},n.onExit=function(t){var e=n.resolveArguments(t)[0];n.removeClasses(e,"appear"),n.removeClasses(e,"enter"),n.addClass(e,"exit","base"),n.props.onExit&&n.props.onExit(t)},n.onExiting=function(t){var e=n.resolveArguments(t)[0];n.addClass(e,"exit","active"),n.props.onExiting&&n.props.onExiting(t)},n.onExited=function(t){var e=n.resolveArguments(t)[0];n.removeClasses(e,"exit"),n.addClass(e,"exit","done"),n.props.onExited&&n.props.onExited(t)},n.resolveArguments=function(t,e){return n.props.nodeRef?[n.props.nodeRef.current,t]:[t,e]},n.getClassNames=function(t){var e=n.props.classNames,o="string"===typeof e,r=o?""+(o&&e?e+"-":"")+t:e[t];return{baseClassName:r,activeClassName:o?r+"-active":e[t+"Active"],doneClassName:o?r+"-done":e[t+"Done"]}},n}a(n,t);var e=n.prototype;return e.addClass=function(t,n,e){var o=this.getClassNames(n)[e+"ClassName"],r=this.getClassNames("enter").doneClassName;"appear"===n&&"done"===e&&r&&(o+=" "+r),"active"===e&&t&&f(t),o&&(this.appliedClasses[n][e]=o,function(t,n){t&&n&&n.split(" ").forEach((function(n){return o=n,void((e=t).classList?e.classList.add(o):function(t,n){return t.classList?!!n&&t.classList.contains(n):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+n+" ")}(e,o)||("string"===typeof e.className?e.className=e.className+" "+o:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+o)));var e,o}))}(t,o))},e.removeClasses=function(t,n){var e=this.appliedClasses[n],o=e.base,r=e.active,s=e.done;this.appliedClasses[n]={},o&&b(t,o),r&&b(t,r),s&&b(t,s)},e.render=function(){var t=this.props,n=(t.classNames,s(t,["classNames"]));return o.createElement(C,r({},n,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n}(o.Component);y.defaultProps={classNames:""},y.propTypes={};var O=y,N=e(7890),S=e(2062),w=e(5854);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function j(t){var n=function(t,n){if("object"!==P(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,n||"default");if("object"!==P(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===P(n)?n:String(n)}function T(t,n,e){return(n=j(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var k={defaultProps:{__TYPE:"CSSTransition",children:void 0},getProps:function(t){return w.gb.getMergedProps(t,k.defaultProps)},getOtherProps:function(t){return w.gb.getDiffProps(t,k.defaultProps)}};function L(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function R(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?L(Object(e),!0).forEach((function(n){T(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):L(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var D=o.forwardRef((function(t,n){var e=k.getProps(t),r=e.disabled||e.options&&e.options.disabled||!N.ZP.cssTransition,s=function(t,n){e.onEnter&&e.onEnter(t,n),e.options&&e.options.onEnter&&e.options.onEnter(t,n)},i=function(t,n){e.onEntering&&e.onEntering(t,n),e.options&&e.options.onEntering&&e.options.onEntering(t,n)},a=function(t,n){e.onEntered&&e.onEntered(t,n),e.options&&e.options.onEntered&&e.options.onEntered(t,n)},p=function(t){e.onExit&&e.onExit(t),e.options&&e.options.onExit&&e.options.onExit(t)},u=function(t){e.onExiting&&e.onExiting(t),e.options&&e.options.onExiting&&e.options.onExiting(t)},l=function(t){e.onExited&&e.onExited(t),e.options&&e.options.onExited&&e.options.onExited(t)};if((0,S.rf)((function(){if(r){var t=w.gb.getRefElement(e.nodeRef);e.in?(s(t,!0),i(t,!0),a(t,!0)):(p(t),u(t),l(t))}}),[e.in]),r)return e.in?e.children:null;var c={nodeRef:e.nodeRef,in:e.in,onEnter:s,onEntering:i,onEntered:a,onExit:p,onExiting:u,onExited:l},f=R(R(R({},{classNames:e.classNames,timeout:e.timeout,unmountOnExit:e.unmountOnExit}),e.options||{}),c);return o.createElement(O,f,e.children)}));D.displayName="CSSTransition"},987:function(t,n,e){e.d(n,{v:function(){return i}});var o=e(2791),r=e(5036);function s(){return s=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},s.apply(this,arguments)}var i=o.memo(o.forwardRef((function(t,n){var e=r.A.getPTI(t);return o.createElement("svg",s({ref:n,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),o.createElement("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"}))})));i.displayName="ChevronDownIcon"},8718:function(t,n,e){e.d(n,{q:function(){return i}});var o=e(2791),r=e(5036);function s(){return s=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},s.apply(this,arguments)}var i=o.memo(o.forwardRef((function(t,n){var e=r.A.getPTI(t);return o.createElement("svg",s({ref:n,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),o.createElement("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"}))})));i.displayName="TimesIcon"}}]);
//# sourceMappingURL=588.36abf5d0.chunk.js.map