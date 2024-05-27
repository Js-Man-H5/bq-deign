"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),b=e.defineComponent({name:"NumberAnimate",__name:"NumberAnimate",props:{value:{default:0},math:{default:"ceil"},textMaxWidth:{default:"9.6px"}},setup(g){const o=e.ref(["0"]),s=e.ref(["0"]),f=e.ref("20px"),c=g;e.watch(()=>c.value,(t,r)=>{t!==r&&h(t)});const u=e.ref([]);let m=null;const p=t=>{let r=t;switch(c.math){case"ceil":r=Math.ceil(t);break;case"floor":r=Math.floor(t);break;case"abs":r=Math.abs(t);break;case"none":r=t;break}return r},h=t=>{const r=p(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");for(s.value=o.value,o.value=Array.from(r);s.value.length<o.value.length;)s.value.unshift("0");const a=o.value.length-s.value.length;a<0&&s.value.splice(0,Math.abs(a)),u.value.forEach(l=>{l.style.transform="translateY(0)",l.style.transition="transform 0s ease-in-out"}),e.nextTick(()=>{m&&clearTimeout(m),m=setTimeout(()=>{u.value.forEach((l,n)=>{const i=y(s.value[n],o.value[n]);i?(l.style.transform=i.transform,l.style.transition=i.transition):(l.style.transform="none",l.style.transition="none")})},50)})},v=(t,r)=>{if(isNaN(Number(r)))return[r];if(t===r)return[r];const a=[0,1,2,3,4,5,6,7,8,9];let l=[];return isNaN(Number(t))?l=a.filter(n=>n<=Number(r)):t>r?(l.push(...a.filter(n=>n>=Number(t))),l.push(...a.filter(n=>n<=Number(r)))):l.push(...a.filter(n=>n>=Number(t)&&n<=Number(r))),l},y=(t,r)=>{const a=v(t,r).length;return a===1?null:{transform:`translateY(-${(a-1)/a*100}%)`,transition:"transform 1s ease-in-out"}};return e.onMounted(()=>{if(h(c.value),u.value.length>0){const t=window.getComputedStyle(u.value[0]);f.value=t.height}}),(t,r)=>(e.openBlock(),e.createElementBlock("div",{class:"bq-animate-number",style:e.normalizeStyle({height:e.unref(f)}),ref:""},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(o),(a,l)=>(e.openBlock(),e.createElementBlock("div",{key:"num_"+l},[e.createElementVNode("div",{ref_for:!0,ref_key:"numDiv",ref:u,class:e.normalizeClass(["num-item",a===","?"comma":""])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(v(e.unref(s)[l],a),(n,i)=>(e.openBlock(),e.createElementBlock("div",{style:e.normalizeStyle({width:isNaN(n)?"":c.textMaxWidth}),key:"div_"+l+"_"+i,class:"num-line"},e.toDisplayString(n),5))),128))],2)]))),128))],4))}});exports.default=b;