import{m as J,V as H,a as K,b as W}from"./VRow-5qdfWXCX.js";import{p as S,m as E,a as R,g as V,u as k,c as i,T as Y,b as $,h as z,d as Q,e as X,t as I,f as Z,i as ee,s as x,j as g,k as te,l as C,r as D,n as ae,w as A,o as ne,q as oe,v as le,x as se,y as ie,z as re,A as ue,B as F,C as de,D as M,E as q,F as O,G as b,H as ce,I as ve,J as fe,V as me,K as ge,L as ye}from"./index-D95GQJsZ.js";import{m as he,a as be,b as pe,u as _e,c as xe,d as Se,e as Ve,V as Te,f as L}from"./VImg-qAekRZFY.js";const Be=S({text:String,...E(),...R()},"VToolbarTitle"),we=V()({name:"VToolbarTitle",props:Be(),setup(e,r){let{slots:t}=r;return k(()=>{const o=!!(t.default||t.text||e.text);return i(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[o&&i("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),ke=S({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function f(e,r,t){return V()({name:e,props:ke({mode:t,origin:r}),setup(o,s){let{slots:l}=s;const a={onBeforeEnter(n){o.origin&&(n.style.transformOrigin=o.origin)},onLeave(n){if(o.leaveAbsolute){const{offsetTop:c,offsetLeft:y,offsetWidth:d,offsetHeight:h}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${c}px`,n.style.left=`${y}px`,n.style.width=`${d}px`,n.style.height=`${h}px`}o.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(o.leaveAbsolute&&(n!=null&&n._transitionInitialStyles)){const{position:c,top:y,left:d,width:h,height:m}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=c||"",n.style.top=y||"",n.style.left=d||"",n.style.width=h||"",n.style.height=m||""}}};return()=>{const n=o.group?Y:$;return z(n,{name:o.disabled?"":e,css:!o.disabled,...o.group?void 0:{mode:o.mode},...o.disabled?{}:a},l.default)}}})}function U(e,r){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return V()({name:e,props:{mode:{type:String,default:t},disabled:Boolean},setup(o,s){let{slots:l}=s;return()=>z($,{name:o.disabled?"":e,css:!o.disabled,...o.disabled?{}:r},l.default)}})}function G(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",o=Q(`offset-${t}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[t]:a.style[t]}},onEnter(a){const n=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const c=`${a[o]}px`;a.style[t]="0",a.offsetHeight,a.style.transition=n.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[t]=c})},onAfterEnter:l,onEnterCancelled:l,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[t]:a.style[t]},a.style.overflow="hidden",a.style[t]=`${a[o]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[t]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(a){e&&a._parent&&a._parent.classList.remove(e),l(a)}function l(a){const n=a._initialStyle[t];a.style.overflow=a._initialStyle.overflow,n!=null&&(a.style[t]=n),delete a._initialStyle}}f("fab-transition","center center","out-in");f("dialog-bottom-transition");f("dialog-top-transition");f("fade-transition");f("scale-transition");f("scroll-x-transition");f("scroll-x-reverse-transition");f("scroll-y-transition");f("scroll-y-reverse-transition");f("slide-x-transition");f("slide-x-reverse-transition");f("slide-y-transition");f("slide-y-reverse-transition");const Pe=U("expand-transition",G());U("expand-x-transition",G("",!0));const Ce=[null,"prominent","default","comfortable","compact"],j=S({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ce.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...he(),...E(),...be(),...pe(),...R({tag:"header"}),...X()},"VToolbar"),N=V()({name:"VToolbar",props:j(),setup(e,r){var v;let{slots:t}=r;const{backgroundColorClasses:o,backgroundColorStyles:s}=_e(I(e,"color")),{borderClasses:l}=xe(e),{elevationClasses:a}=Se(e),{roundedClasses:n}=Ve(e),{themeClasses:c}=Z(e),{rtlClasses:y}=ee(),d=x(!!(e.extended||(v=t.extension)!=null&&v.call(t))),h=g(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),m=g(()=>d.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return te({VBtn:{variant:"text"}}),k(()=>{var u;const p=!!(e.title||t.title),T=!!(t.image||e.image),P=(u=t.extension)==null?void 0:u.call(t);return d.value=!!(e.extended||P),i(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,l.value,a.value,n.value,c.value,y.value,e.class],style:[s.value,e.style]},{default:()=>[T&&i("div",{key:"image",class:"v-toolbar__image"},[t.image?i(L,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):i(Te,{key:"image-img",cover:!0,src:e.image},null)]),i(L,{defaults:{VTabs:{height:C(h.value)}}},{default:()=>{var _,B,w;return[i("div",{class:"v-toolbar__content",style:{height:C(h.value)}},[t.prepend&&i("div",{class:"v-toolbar__prepend"},[(_=t.prepend)==null?void 0:_.call(t)]),p&&i(we,{key:"title",text:e.title},{text:t.title}),(B=t.default)==null?void 0:B.call(t),t.append&&i("div",{class:"v-toolbar__append"},[(w=t.append)==null?void 0:w.call(t)])])]}}),i(L,{defaults:{VTabs:{height:C(m.value)}}},{default:()=>[i(Pe,null,{default:()=>[d.value&&i("div",{class:"v-toolbar__extension",style:{height:C(m.value)}},[P])]})]})]})}),{contentHeight:h,extensionHeight:m}}}),Ae=S({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Le(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=r;let o=0;const s=D(null),l=x(0),a=x(0),n=x(0),c=x(!1),y=x(!1),d=g(()=>Number(e.scrollThreshold)),h=g(()=>ae((d.value-l.value)/d.value||0)),m=()=>{const v=s.value;!v||t&&!t.value||(o=l.value,l.value="window"in v?v.pageYOffset:v.scrollTop,y.value=l.value<o,n.value=Math.abs(l.value-d.value))};return A(y,()=>{a.value=a.value||l.value}),A(c,()=>{a.value=0}),ne(()=>{A(()=>e.scrollTarget,v=>{var T;const p=v?document.querySelector(v):window;p&&p!==s.value&&((T=s.value)==null||T.removeEventListener("scroll",m),s.value=p,s.value.addEventListener("scroll",m,{passive:!0}))},{immediate:!0})}),oe(()=>{var v;(v=s.value)==null||v.removeEventListener("scroll",m)}),t&&A(t,m,{immediate:!0}),{scrollThreshold:d,currentScroll:l,currentThreshold:n,isScrollActive:c,scrollRatio:h,isScrollingUp:y,savedScroll:a}}const Ie=S({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...j(),...le(),...Ae(),height:{type:[Number,String],default:64}},"VAppBar"),Ee=V()({name:"VAppBar",props:Ie(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:t}=r;const o=D(),s=se(e,"modelValue"),l=g(()=>{var _;const u=new Set(((_=e.scrollBehavior)==null?void 0:_.split(" "))??[]);return{hide:u.has("hide"),inverted:u.has("inverted"),collapse:u.has("collapse"),elevate:u.has("elevate"),fadeImage:u.has("fade-image")}}),a=g(()=>{const u=l.value;return u.hide||u.inverted||u.collapse||u.elevate||u.fadeImage||!s.value}),{currentScroll:n,scrollThreshold:c,isScrollingUp:y,scrollRatio:d}=Le(e,{canScroll:a}),h=g(()=>e.collapse||l.value.collapse&&(l.value.inverted?d.value>0:d.value===0)),m=g(()=>e.flat||l.value.elevate&&(l.value.inverted?n.value>0:n.value===0)),v=g(()=>l.value.fadeImage?l.value.inverted?1-d.value:d.value:void 0),p=g(()=>{var B,w;if(l.value.hide&&l.value.inverted)return 0;const u=((B=o.value)==null?void 0:B.contentHeight)??0,_=((w=o.value)==null?void 0:w.extensionHeight)??0;return u+_});ie(g(()=>!!e.scrollBehavior),()=>{de(()=>{l.value.hide?l.value.inverted?s.value=n.value>c.value:s.value=y.value||n.value<c.value:s.value=!0})});const{ssrBootStyles:T}=re(),{layoutItemStyles:P}=ue({id:e.name,order:g(()=>parseInt(e.order,10)),position:I(e,"location"),layoutSize:p,elementSize:x(void 0),active:s,absolute:I(e,"absolute")});return k(()=>{const u=N.filterProps(e);return i(N,F({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...P.value,"--v-toolbar-image-opacity":v.value,height:void 0,...T.value},e.style]},u,{collapse:h.value,flat:m.value}),t)}),{}}}),Ne=S({...J({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),He=V()({name:"VAppBarNavIcon",props:Ne(),setup(e,r){let{slots:t}=r;return k(()=>i(H,F(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),Re=M({__name:"AppBar",setup(e){const r=()=>{window.open("../../Amos-Adu-Mensah-CV.pdf","_parent")};return(t,o)=>(q(),O(Ee,{elevation:"0",class:"",style:{"background-color":"#577e7c"}},{prepend:b(()=>[i(He)]),append:b(()=>[i(H,{onClick:o[0]||(o[0]=s=>r()),size:"large",rounded:"xl",variant:"tonal"},{default:b(()=>[ce("Download CV")]),_:1})]),default:b(()=>[i(K,null,{default:b(()=>[i(W,{class:"d-flex justify-center"})]),_:1})]),_:1}))}}),$e=S({...E(),...ve()},"VLayout"),ze=V()({name:"VLayout",props:$e(),setup(e,r){let{slots:t}=r;const{layoutClasses:o,layoutStyles:s,getLayoutItem:l,items:a,layoutRef:n}=fe(e);return k(()=>{var c;return i("div",{ref:n,class:[o.value,e.class],style:[s.value,e.style]},[(c=t.default)==null?void 0:c.call(t)])}),{getLayoutItem:l,items:a}}}),qe=M({__name:"default",setup(e){return(r,t)=>{const o=Re,s=ge("router-view");return q(),O(me,null,{default:b(()=>[i(ze,null,{default:b(()=>[i(o,{style:{padding:"0 15%"}}),i(ye,{style:{"background-color":"white",padding:"0 15%"}},{default:b(()=>[i(s)]),_:1})]),_:1})]),_:1})}}});export{qe as default};
