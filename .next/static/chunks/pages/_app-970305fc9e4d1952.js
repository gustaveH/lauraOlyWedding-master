(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(t,o,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return s(3493)}])},3493:function(t,o,s){"use strict";s.r(o),s.d(o,{default:function(){return _app}});var a=s(5893);s(1431),s(2611),s(1144),s(178),s(9772),s(2261),s(9831),s(6735);var i=s(7294),clsx_m=function(){for(var t,o,s=0,a="";s<arguments.length;)(t=arguments[s++])&&(o=function r(t){var o,s,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(o=0;o<t.length;o++)t[o]&&(s=r(t[o]))&&(a&&(a+=" "),a+=s);else for(o in t)t[o]&&(a&&(a+=" "),a+=o)}return a}(t))&&(a&&(a+=" "),a+=o);return a};let u=t=>"number"==typeof t&&!isNaN(t),d=t=>"string"==typeof t,p=t=>"function"==typeof t,m=t=>d(t)||p(t)?t:null,f=t=>(0,i.isValidElement)(t)||d(t)||p(t)||u(t);function h(t){let{enter:o,exit:s,appendPosition:a=!1,collapse:c=!0,collapseDuration:g=300}=t;return function(t){let{children:x,position:w,preventExitTransition:R,done:k,nodeRef:P,isIn:$}=t,B=a?`${o}--${w}`:o,A=a?`${s}--${w}`:s,D=(0,i.useRef)(0);return(0,i.useLayoutEffect)(()=>{let t=P.current,o=B.split(" "),n=s=>{s.target===P.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",n),t.removeEventListener("animationcancel",n),0===D.current&&"animationcancel"!==s.type&&t.classList.remove(...o))};t.classList.add(...o),t.addEventListener("animationend",n),t.addEventListener("animationcancel",n)},[]),(0,i.useEffect)(()=>{let t=P.current,e=()=>{t.removeEventListener("animationend",e),c?function(t,o,s){void 0===s&&(s=300);let{scrollHeight:a,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=a+"px",i.transition=`all ${s}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(o,s)})})}(t,k,g):k()};$||(R?e():(D.current=1,t.className+=` ${A}`,t.addEventListener("animationend",e)))},[$]),i.createElement(i.Fragment,null,x)}}function y(t,o){return null!=t?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:o}:{}}let c={list:new Map,emitQueue:new Map,on(t,o){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(o),this},off(t,o){if(o){let s=this.list.get(t).filter(t=>t!==o);return this.list.set(t,s),this}return this.list.delete(t),this},cancelEmit(t){let o=this.emitQueue.get(t);return o&&(o.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(o=>{let s=setTimeout(()=>{o(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(s)})}},T=t=>{let{theme:o,type:s,...a}=t;return i.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===o?"currentColor":`var(--toastify-icon-color-${s})`,...a})},g={info:function(t){return i.createElement(T,{...t},i.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return i.createElement(T,{...t},i.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return i.createElement(T,{...t},i.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return i.createElement(T,{...t},i.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return i.createElement("div",{className:"Toastify__spinner"})}};function b(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function I(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function L(t){let{closeToast:o,theme:s,ariaLabel:a="close"}=t;return i.createElement("button",{className:`Toastify__close-button Toastify__close-button--${s}`,type:"button",onClick:t=>{t.stopPropagation(),o(t)},"aria-label":a},i.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function O(t){let{delay:o,isRunning:s,closeToast:a,type:c="default",hide:g,className:x,style:w,controlledProgress:R,progress:k,rtl:P,isIn:$,theme:B}=t,A=g||R&&0===k,D={...w,animationDuration:`${o}ms`,animationPlayState:s?"running":"paused",opacity:A?0:1};R&&(D.transform=`scaleX(${k})`);let z=clsx_m("Toastify__progress-bar",R?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${B}`,`Toastify__progress-bar--${c}`,{"Toastify__progress-bar--rtl":P}),F=p(x)?x({rtl:P,type:c,defaultClassName:z}):clsx_m(z,x);return i.createElement("div",{role:"progressbar","aria-hidden":A?"true":"false","aria-label":"notification timer",className:F,style:D,[R&&k>=1?"onTransitionEnd":"onAnimationEnd"]:R&&k<1?null:()=>{$&&a()}})}let N=t=>{let{isRunning:o,preventExitTransition:s,toastRef:a,eventHandlers:c}=function(t){let[o,s]=(0,i.useState)(!1),[a,c]=(0,i.useState)(!1),g=(0,i.useRef)(null),x=(0,i.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,w=(0,i.useRef)(t),{autoClose:R,pauseOnHover:k,closeToast:P,onClick:$,closeOnClick:B}=t;function v(o){if(t.draggable){"touchstart"===o.nativeEvent.type&&o.nativeEvent.preventDefault(),x.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",L),document.addEventListener("touchmove",_),document.addEventListener("touchend",L);let s=g.current;x.canCloseOnClick=!0,x.canDrag=!0,x.boundingRect=s.getBoundingClientRect(),s.style.transition="",x.x=b(o.nativeEvent),x.y=I(o.nativeEvent),"x"===t.draggableDirection?(x.start=x.x,x.removalDistance=s.offsetWidth*(t.draggablePercent/100)):(x.start=x.y,x.removalDistance=s.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function T(o){if(x.boundingRect){let{top:s,bottom:a,left:i,right:c}=x.boundingRect;"touchend"!==o.nativeEvent.type&&t.pauseOnHover&&x.x>=i&&x.x<=c&&x.y>=s&&x.y<=a?C():E()}}function E(){s(!0)}function C(){s(!1)}function _(s){let a=g.current;x.canDrag&&a&&(x.didMove=!0,o&&C(),x.x=b(s),x.y=I(s),x.delta="x"===t.draggableDirection?x.x-x.start:x.y-x.start,x.start!==x.x&&(x.canCloseOnClick=!1),a.style.transform=`translate${t.draggableDirection}(${x.delta}px)`,a.style.opacity=""+(1-Math.abs(x.delta/x.removalDistance)))}function L(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",L);let o=g.current;if(x.canDrag&&x.didMove&&o){if(x.canDrag=!1,Math.abs(x.delta)>x.removalDistance)return c(!0),void t.closeToast();o.style.transition="transform 0.2s, opacity 0.2s",o.style.transform=`translate${t.draggableDirection}(0)`,o.style.opacity="1"}}(0,i.useEffect)(()=>{w.current=t}),(0,i.useEffect)(()=>(g.current&&g.current.addEventListener("d",E,{once:!0}),p(t.onOpen)&&t.onOpen((0,i.isValidElement)(t.children)&&t.children.props),()=>{let t=w.current;p(t.onClose)&&t.onClose((0,i.isValidElement)(t.children)&&t.children.props)}),[]),(0,i.useEffect)(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",E),window.addEventListener("blur",C)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",C))}),[t.pauseOnFocusLoss]);let A={onMouseDown:v,onTouchStart:v,onMouseUp:T,onTouchEnd:T};return R&&k&&(A.onMouseEnter=C,A.onMouseLeave=E),B&&(A.onClick=t=>{$&&$(t),x.canCloseOnClick&&P()}),{playToast:E,pauseToast:C,isRunning:o,preventExitTransition:a,toastRef:g,eventHandlers:A}}(t),{closeButton:g,children:x,autoClose:w,onClick:R,type:k,hideProgressBar:P,closeToast:$,transition:B,position:A,className:D,style:z,bodyClassName:F,bodyStyle:j,progressClassName:V,progressStyle:X,updateId:U,role:W,progress:G,rtl:Y,toastId:K,deleteToast:J,isIn:Z,isLoading:ee,iconOut:et,closeOnClick:en,theme:eo}=t,es=clsx_m("Toastify__toast",`Toastify__toast-theme--${eo}`,`Toastify__toast--${k}`,{"Toastify__toast--rtl":Y},{"Toastify__toast--close-on-click":en}),ea=p(D)?D({rtl:Y,position:A,type:k,defaultClassName:es}):clsx_m(es,D),ei=!!G||!w,er={closeToast:$,type:k,theme:eo},el=null;return!1===g||(el=p(g)?g(er):(0,i.isValidElement)(g)?(0,i.cloneElement)(g,er):L(er)),i.createElement(B,{isIn:Z,done:J,position:A,preventExitTransition:s,nodeRef:a},i.createElement("div",{id:K,onClick:R,className:ea,...c,style:z,ref:a},i.createElement("div",{...Z&&{role:W},className:p(F)?F({type:k}):clsx_m("Toastify__toast-body",F),style:j},null!=et&&i.createElement("div",{className:clsx_m("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!ee})},et),i.createElement("div",null,x)),el,i.createElement(O,{...U&&!ei?{key:`pb-${U}`}:{},rtl:Y,theme:eo,delay:w,isRunning:o,isIn:Z,closeToast:$,hide:P,type:k,style:X,className:V,controlledProgress:ei,progress:G||0})))},M=function(t,o){return void 0===o&&(o=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:o}},x=h(M("bounce",!0)),w=(h(M("slide",!0)),h(M("zoom")),h(M("flip")),(0,i.forwardRef)((t,o)=>{let{getToastToRender:s,containerRef:a,isToastActive:x}=function(t){let[,o]=(0,i.useReducer)(t=>t+1,0),[s,a]=(0,i.useState)([]),x=(0,i.useRef)(null),w=(0,i.useRef)(new Map).current,T=t=>-1!==s.indexOf(t),R=(0,i.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:T,getToast:t=>w.get(t)}).current;function b(t){let{containerId:o}=t,{limit:s}=R.props;!s||o&&R.containerId!==o||(R.count-=R.queue.length,R.queue=[])}function I(t){a(o=>null==t?[]:o.filter(o=>o!==t))}function _(){let{toastContent:t,toastProps:o,staleId:s}=R.queue.shift();O(t,o,s)}function L(t,s){var a,k;let{delay:P,staleId:$,...B}=s;if(!f(t)||!x.current||R.props.enableMultiContainer&&B.containerId!==R.props.containerId||w.has(B.toastId)&&null==B.updateId)return;let{toastId:A,updateId:D,data:z}=B,{props:F}=R,L=()=>I(A),j=null==D;j&&R.count++;let V={...F,style:F.toastStyle,key:R.toastKey++,...Object.fromEntries(Object.entries(B).filter(t=>{let[o,s]=t;return null!=s})),toastId:A,updateId:D,data:z,closeToast:L,isIn:!1,className:m(B.className||F.toastClassName),bodyClassName:m(B.bodyClassName||F.bodyClassName),progressClassName:m(B.progressClassName||F.progressClassName),autoClose:!B.isLoading&&(a=B.autoClose,k=F.autoClose,!1===a||u(a)&&a>0?a:k),deleteToast(){let t=y(w.get(A),"removed");w.delete(A),c.emit(4,t);let s=R.queue.length;if(R.count=null==A?R.count-R.displayedToast:R.count-1,R.count<0&&(R.count=0),s>0){let t=null==A?R.props.limit:1;if(1===s||1===t)R.displayedToast++,_();else{let o=t>s?s:t;R.displayedToast=o;for(let t=0;t<o;t++)_()}}else o()}};V.iconOut=function(t){let{theme:o,type:s,isLoading:a,icon:c}=t,x=null,w={theme:o,type:s};return!1===c||(p(c)?x=c(w):(0,i.isValidElement)(c)?x=(0,i.cloneElement)(c,w):d(c)||u(c)?x=c:a?x=g.spinner():s in g&&(x=g[s](w))),x}(V),p(B.onOpen)&&(V.onOpen=B.onOpen),p(B.onClose)&&(V.onClose=B.onClose),V.closeButton=F.closeButton,!1===B.closeButton||f(B.closeButton)?V.closeButton=B.closeButton:!0===B.closeButton&&(V.closeButton=!f(F.closeButton)||F.closeButton);let X=t;(0,i.isValidElement)(t)&&!d(t.type)?X=(0,i.cloneElement)(t,{closeToast:L,toastProps:V,data:z}):p(t)&&(X=t({closeToast:L,toastProps:V,data:z})),F.limit&&F.limit>0&&R.count>F.limit&&j?R.queue.push({toastContent:X,toastProps:V,staleId:$}):u(P)?setTimeout(()=>{O(X,V,$)},P):O(X,V,$)}function O(t,o,s){let{toastId:i}=o;s&&w.delete(s);let g={content:t,props:o};w.set(i,g),a(t=>[...t,i].filter(t=>t!==s)),c.emit(4,y(g,null==g.props.updateId?"added":"updated"))}return(0,i.useEffect)(()=>(R.containerId=t.containerId,c.cancelEmit(3).on(0,L).on(1,t=>x.current&&I(t)).on(5,b).emit(2,R),()=>{w.clear(),c.emit(3,R)}),[]),(0,i.useEffect)(()=>{R.props=t,R.isToastActive=T,R.displayedToast=s.length}),{getToastToRender:function(o){let s=new Map,a=Array.from(w.values());return t.newestOnTop&&a.reverse(),a.forEach(t=>{let{position:o}=t.props;s.has(o)||s.set(o,[]),s.get(o).push(t)}),Array.from(s,t=>o(t[0],t[1]))},containerRef:x,isToastActive:T}}(t),{className:w,style:R,rtl:k,containerId:P}=t;return(0,i.useEffect)(()=>{o&&(o.current=a.current)},[]),i.createElement("div",{ref:a,className:"Toastify",id:P},s((t,o)=>{let s=o.length?{...R}:{...R,pointerEvents:"none"};return i.createElement("div",{className:function(t){let o=clsx_m("Toastify__toast-container",`Toastify__toast-container--${t}`,{"Toastify__toast-container--rtl":k});return p(w)?w({position:t,rtl:k,defaultClassName:o}):clsx_m(o,m(w))}(t),style:s,key:`container-${t}`},o.map((t,s)=>{let{content:a,props:c}=t;return i.createElement(N,{...c,isIn:x(c.toastId),style:{...c.style,"--nth":s+1,"--len":o.length},key:`toast-${c.key}`},a)}))}))}));w.displayName="ToastContainer",w.defaultProps={position:"top-right",transition:x,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let R,k=new Map,P=[],$=1;function H(t,o){return k.size>0?c.emit(0,t,o):P.push({content:t,options:o}),o.toastId}function S(t,o){return{...o,type:o&&o.type||t,toastId:o&&(d(o.toastId)||u(o.toastId))?o.toastId:""+$++}}function q(t){return(o,s)=>H(o,S(t,s))}function Q(t,o){return H(t,S("default",o))}Q.loading=(t,o)=>H(t,S("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...o})),Q.promise=function(t,o,s){let a,{pending:i,error:c,success:g}=o;i&&(a=d(i)?Q.loading(i,s):Q.loading(i.render,{...s,...i}));let x={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(t,o,i)=>{if(null==o)return void Q.dismiss(a);let c={type:t,...x,...s,data:i},g=d(o)?{render:o}:o;return a?Q.update(a,{...c,...g}):Q(g.render,{...c,...g}),i},w=p(t)?t():t;return w.then(t=>l("success",g,t)).catch(t=>l("error",c,t)),w},Q.success=q("success"),Q.info=q("info"),Q.error=q("error"),Q.warning=q("warning"),Q.warn=Q.warning,Q.dark=(t,o)=>H(t,S("default",{theme:"dark",...o})),Q.dismiss=t=>{k.size>0?c.emit(1,t):P=P.filter(o=>null!=t&&o.options.toastId!==t)},Q.clearWaitingQueue=function(t){return void 0===t&&(t={}),c.emit(5,t)},Q.isActive=t=>{let o=!1;return k.forEach(s=>{s.isToastActive&&s.isToastActive(t)&&(o=!0)}),o},Q.update=function(t,o){void 0===o&&(o={}),setTimeout(()=>{let s=function(t,o){let{containerId:s}=o,a=k.get(s||R);return a&&a.getToast(t)}(t,o);if(s){let{props:a,content:i}=s,c={delay:100,...a,...o,toastId:o.toastId||t,updateId:""+$++};c.toastId!==t&&(c.staleId=t);let g=c.render||i;delete c.render,H(g,c)}},0)},Q.done=t=>{Q.update(t,{progress:1})},Q.onChange=t=>(c.on(4,t),()=>{c.off(4,t)}),Q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},c.on(2,t=>{R=t.containerId||t,k.set(R,t),P.forEach(t=>{c.emit(0,t.content,t.options)}),P=[]}).on(3,t=>{k.delete(t.containerId||t),0===k.size&&c.off(0).off(1).off(5)}),s(7967),s(9321),s(6780),s(5392);var B=s(9008),A=s.n(B),_app=function(t){let{Component:o,pageProps:s}=t;return(0,a.jsxs)("div",{children:[(0,a.jsx)(A(),{children:(0,a.jsx)("title",{children:"Uza Wa Nsengiyumva"})}),(0,a.jsx)(o,{...s}),(0,a.jsx)(w,{})]})}},2611:function(){},7967:function(){},1431:function(){},6780:function(){},9321:function(){},9831:function(){},6735:function(){},2261:function(){},1144:function(){},178:function(){},9772:function(){},5392:function(){},9008:function(t,o,s){t.exports=s(9201)}},function(t){var __webpack_exec__=function(o){return t(t.s=o)};t.O(0,[774,179],function(){return __webpack_exec__(1118),__webpack_exec__(9974)}),_N_E=t.O()}]);