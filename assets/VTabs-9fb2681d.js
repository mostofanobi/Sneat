import{b as K}from"./index-c496b50f.js";import{x as Y,I as j,y as re,B as se,co as ce,E as D,cS as ve,u as de,cr as fe,s as T,l as y,cV as Z,cW as me,w as ge,M as W,i as f,V as J,cX as be,cc as he,c6 as Se,cY as ye,K as xe,r as Q,c0 as ee,R as X,cZ as pe,c_ as Ce,cu as ze,c8 as ke,cC as Te,F as Ve,G as k,cn as we,ce as Pe}from"./index-b0764633.js";function te(e){const n=Math.abs(e);return Math.sign(e)*(n/((1/.501-2)*(1-n)+1))}function le(e){let{selectedElement:r,containerSize:n,contentSize:c,isRtl:b,currentScrollOffset:a,isHorizontal:o}=e;const t=o?r.clientWidth:r.clientHeight,u=o?r.offsetLeft:r.offsetTop,i=b&&o?c-u-t:u,v=n+a,S=t+i,m=t*.4;return i<=a?a=Math.max(i-m,0):v<=S&&(a=Math.min(a-(v-S-m),c-n)),a}function Re(e){let{selectedElement:r,containerSize:n,contentSize:c,isRtl:b,isHorizontal:a}=e;const o=a?r.clientWidth:r.clientHeight,t=a?r.offsetLeft:r.offsetTop,u=b&&a?c-t-o/2-n/2:t+o/2-n/2;return Math.min(c-n,Math.max(0,u))}const Be=Symbol.for("vuetify:v-slide-group"),ne=Y({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Be},nextIcon:{type:j,default:"$next"},prevIcon:{type:j,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...re(),...se(),...ce({selectedClass:"v-slide-group-item--active"})},"v-slide-group"),ae=D()({name:"VSlideGroup",props:ne(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:n}=r;const{isRtl:c}=ve(),{mobile:b}=de(),a=fe(e,e.symbol),o=T(!1),t=T(0),u=T(0),i=T(0),v=y(()=>e.direction==="horizontal"),{resizeRef:S,contentRect:m}=Z(),{resizeRef:d,contentRect:V}=Z(),w=y(()=>a.selected.value.length?a.items.value.findIndex(l=>l.id===a.selected.value[0]):-1),$=y(()=>a.selected.value.length?a.items.value.findIndex(l=>l.id===a.selected.value[a.selected.value.length-1]):-1);if(me){let l=-1;ge(()=>[a.selected.value,m.value,V.value,v.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(m.value&&V.value){const s=v.value?"width":"height";u.value=m.value[s],i.value=V.value[s],o.value=u.value+1<i.value}if(w.value>=0&&d.value){const s=d.value.children[$.value];w.value===0||!o.value?t.value=0:e.centerActive?t.value=Re({selectedElement:s,containerSize:u.value,contentSize:i.value,isRtl:c.value,isHorizontal:v.value}):o.value&&(t.value=le({selectedElement:s,containerSize:u.value,contentSize:i.value,isRtl:c.value,currentScrollOffset:t.value,isHorizontal:v.value}))}})})}const P=T(!1);let x=0,p=0;function R(l){const s=v.value?"clientX":"clientY";p=(c.value&&v.value?-1:1)*t.value,x=l.touches[0][s],P.value=!0}function B(l){if(!o.value)return;const s=v.value?"clientX":"clientY",h=c.value&&v.value?-1:1;t.value=h*(p+x-l.touches[0][s])}function I(l){const s=i.value-u.value;t.value<0||!o.value?t.value=0:t.value>=s&&(t.value=s),P.value=!1}function C(){S.value&&(S.value[v.value?"scrollLeft":"scrollTop"]=0)}const M=T(!1);function A(l){if(M.value=!0,!(!o.value||!d.value)){for(const s of l.composedPath())for(const h of d.value.children)if(h===s){t.value=le({selectedElement:h,containerSize:u.value,contentSize:i.value,isRtl:c.value,currentScrollOffset:t.value,isHorizontal:v.value});return}}}function z(l){M.value=!1}function F(l){var s;!M.value&&!(l.relatedTarget&&((s=d.value)!=null&&s.contains(l.relatedTarget)))&&g()}function q(l){d.value&&(v.value?l.key==="ArrowRight"?g(c.value?"prev":"next"):l.key==="ArrowLeft"&&g(c.value?"next":"prev"):l.key==="ArrowDown"?g("next"):l.key==="ArrowUp"&&g("prev"),l.key==="Home"?g("first"):l.key==="End"&&g("last"))}function g(l){var s,h,L,N,U;if(d.value)if(!l)(s=be(d.value)[0])==null||s.focus();else if(l==="next"){const _=(h=d.value.querySelector(":focus"))==null?void 0:h.nextElementSibling;_?_.focus():g("first")}else if(l==="prev"){const _=(L=d.value.querySelector(":focus"))==null?void 0:L.previousElementSibling;_?_.focus():g("last")}else l==="first"?(N=d.value.firstElementChild)==null||N.focus():l==="last"&&((U=d.value.lastElementChild)==null||U.focus())}function E(l){const s=t.value+(l==="prev"?-1:1)*u.value;t.value=he(s,0,i.value-u.value)}const O=y(()=>{let l=t.value>i.value-u.value?-(i.value-u.value)+te(i.value-u.value-t.value):-t.value;t.value<=0&&(l=te(-t.value));const s=c.value&&v.value?-1:1;return{transform:`translate${v.value?"X":"Y"}(${s*l}px)`,transition:P.value?"none":"",willChange:P.value?"transform":""}}),H=y(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),G=y(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!b.value;case!0:return o.value||Math.abs(t.value)>0;case"mobile":return b.value||o.value||Math.abs(t.value)>0;default:return!b.value&&(o.value||Math.abs(t.value)>0)}}),ie=y(()=>Math.abs(t.value)>0),ue=y(()=>i.value>Math.abs(t.value)+u.value);return W(()=>f(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!v.value,"v-slide-group--has-affixes":G.value,"v-slide-group--is-overflowing":o.value},e.class],style:e.style,tabindex:M.value||a.selected.value.length?-1:0,onFocus:F},{default:()=>{var l,s,h;return[G.value&&f("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!ie.value}],onClick:()=>E("prev")},[((l=n.prev)==null?void 0:l.call(n,H.value))??f(K,null,{default:()=>[f(J,{icon:c.value?e.nextIcon:e.prevIcon},null)]})]),f("div",{key:"container",ref:S,class:"v-slide-group__container",onScroll:C},[f("div",{ref:d,class:"v-slide-group__content",style:O.value,onTouchstartPassive:R,onTouchmovePassive:B,onTouchendPassive:I,onFocusin:A,onFocusout:z,onKeydown:q},[(s=n.default)==null?void 0:s.call(n,H.value)])]),G.value&&f("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ue.value}],onClick:()=>E("next")},[((h=n.next)==null?void 0:h.call(n,H.value))??f(K,null,{default:()=>[f(J,{icon:c.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:E,scrollOffset:t,focus:g}}});const oe=Symbol.for("vuetify:v-tabs"),Me=Y({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Se(ye({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"v-tabs"),_e=D()({name:"VTab",props:Me(),setup(e,r){let{slots:n,attrs:c}=r;const{textColorClasses:b,textColorStyles:a}=xe(e,"sliderColor"),o=y(()=>e.direction==="horizontal"),t=T(!1),u=Q(),i=Q();function v(S){var d,V;let{value:m}=S;if(t.value=m,m){const w=(V=(d=u.value)==null?void 0:d.$el.parentElement)==null?void 0:V.querySelector(".v-tab--selected .v-tab__slider"),$=i.value;if(!w||!$)return;const P=getComputedStyle(w).color,x=w.getBoundingClientRect(),p=$.getBoundingClientRect(),R=o.value?"x":"y",B=o.value?"X":"Y",I=o.value?"right":"bottom",C=o.value?"width":"height",M=x[R],A=p[R],z=M>A?x[I]-p[I]:x[R]-p[R],F=Math.sign(z)>0?o.value?"right":"bottom":Math.sign(z)<0?o.value?"left":"top":"center",g=(Math.abs(z)+(Math.sign(z)<0?x[C]:p[C]))/Math.max(x[C],p[C]),E=x[C]/p[C],O=1.5;pe($,{backgroundColor:[P,""],transform:[`translate${B}(${z}px) scale${B}(${E})`,`translate${B}(${z/O}px) scale${B}(${(g-1)/O+1})`,""],transformOrigin:Array(3).fill(F)},{duration:225,easing:Ce})}}return W(()=>{const[S]=ee.filterProps(e);return f(ee,X({symbol:oe,ref:u,class:["v-tab",e.class],style:e.style,tabindex:t.value?0:-1,role:"tab","aria-selected":String(t.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,rounded:0},S,c,{"onGroup:selected":v}),{default:()=>{var m;return[((m=n.default)==null?void 0:m.call(n))??e.text,!e.hideSlider&&f("div",{ref:i,class:["v-tab__slider",b.value],style:a.value},null)]}})}),{}}});function $e(e){return e?e.map(r=>typeof r=="string"?{title:r,value:r}:r):[]}const Ee=Y({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...ne({mandatory:"force"}),...ze(),...se()},"v-tabs"),Ae=D()({name:"VTabs",props:Ee(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:n}=r;const c=ke(e,"modelValue"),b=y(()=>$e(e.items)),{densityClasses:a}=Te(e),{backgroundColorClasses:o,backgroundColorStyles:t}=Ve(k(e,"bgColor"));return we({VTab:{color:k(e,"color"),direction:k(e,"direction"),stacked:k(e,"stacked"),fixed:k(e,"fixedTabs"),sliderColor:k(e,"sliderColor"),hideSlider:k(e,"hideSlider")}}),W(()=>{const[u]=ae.filterProps(e);return f(ae,X(u,{modelValue:c.value,"onUpdate:modelValue":i=>c.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},a.value,o.value,e.class],style:[{"--v-tabs-height":Pe(e.height)},t.value,e.style],role:"tablist",symbol:oe}),{default:()=>[n.default?n.default():b.value.map(i=>f(_e,X(i,{key:i.title}),null))]})}),{}}});export{Ae as V,_e as a};
