import{d as ve,o as k,c as re,r as se,n as vt,a as vn,t as ht,b as qe,w as ye,e as Ue,T as io,_ as Ge,u as t0,i as n0,f as i0,g as uu,h as V,j as fe,k as q,p as It,l as Lt,m as nr,q as bc,s as Ce,v as Ye,x as en,y as St,z as Wn,A as Hp,B as ro,C as r0,D as lr,F as ot,E as Bt,G as ze,H as Bs,I as O,J as zr,K as Vp,L as zs,M as Zi,N as Tt,O as o0,P as Xr,Q as a0,R as on,S as $p,U as ks,V as s0,W as Gp,X as gn,Y as l0,Z as du,$ as Sc,a0 as c0,a1 as Wp,a2 as fu,a3 as Xp,a4 as ta,a5 as u0,a6 as d0,a7 as li,a8 as Hs,a9 as Xn,aa as Uo,ab as hu,ac as ni,ad as f0,ae as h0,af as p0,ag as Vs,ah as $s,ai as m0}from"./framework.B9tSPcYo.js";const v0=ve({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(e,n)=>(k(),re("span",{class:vt(["VPBadge",e.type])},[se(e.$slots,"default",{},()=>[vn(ht(e.text),1)])],2))}}),g0={key:0,class:"VPBackdrop"},_0=ve({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(e,n)=>(k(),qe(io,{name:"fade"},{default:ye(()=>[e.show?(k(),re("div",g0)):Ue("",!0)]),_:1}))}}),y0=Ge(_0,[["__scopeId","data-v-21651b53"]]),lt=t0;function x0(t,e){let n,i=!1;return()=>{n&&clearTimeout(n),i?n=setTimeout(t,e):(t(),(i=!0)&&setTimeout(()=>i=!1,e))}}function Mc(t){return/^\//.test(t)?t:`/${t}`}function pu(t){const{pathname:e,search:n,hash:i,protocol:r}=new URL(t,"http://a.com");if(n0(t)||t.startsWith("#")||!r.startsWith("http")||!i0(e))return t;const{site:o}=lt(),a=e.endsWith("/")||e.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${n}${i}`);return uu(a)}function na({correspondingLink:t=!1}={}){const{site:e,localeIndex:n,page:i,theme:r,hash:o}=lt(),a=V(()=>{var l,c;return{label:(l=e.value.locales[n.value])==null?void 0:l.label,link:((c=e.value.locales[n.value])==null?void 0:c.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:V(()=>Object.entries(e.value.locales).flatMap(([l,c])=>a.value.label===c.label?[]:{text:c.label,link:b0(c.link||(l==="root"?"/":`/${l}/`),r.value.i18nRouting!==!1&&t,i.value.relativePath.slice(a.value.link.length-1),!e.value.cleanUrls)+o.value})),currentLang:a}}function b0(t,e,n,i){return e?t.replace(/\/$/,"")+Mc(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,i?".html":"")):t}const S0=t=>(It("data-v-7a671213"),t=t(),Lt(),t),M0={class:"NotFound"},E0={class:"code"},w0={class:"title"},T0=S0(()=>fe("div",{class:"divider"},null,-1)),C0={class:"quote"},A0={class:"action"},P0=["href","aria-label"],R0=ve({__name:"NotFound",setup(t){const{theme:e}=lt(),{currentLang:n}=na();return(i,r)=>{var o,a,s,l,c;return k(),re("div",M0,[fe("p",E0,ht(((o=q(e).notFound)==null?void 0:o.code)??"404"),1),fe("h1",w0,ht(((a=q(e).notFound)==null?void 0:a.title)??"PAGE NOT FOUND"),1),T0,fe("blockquote",C0,ht(((s=q(e).notFound)==null?void 0:s.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),fe("div",A0,[fe("a",{class:"link",href:q(uu)(q(n).link),"aria-label":((l=q(e).notFound)==null?void 0:l.linkLabel)??"go to home"},ht(((c=q(e).notFound)==null?void 0:c.linkText)??"Take me home"),9,P0)])])}}}),I0=Ge(R0,[["__scopeId","data-v-7a671213"]]);function jp(t,e){if(Array.isArray(t))return os(t);if(t==null)return[];e=Mc(e);const n=Object.keys(t).sort((r,o)=>o.split("/").length-r.split("/").length).find(r=>e.startsWith(Mc(r))),i=n?t[n]:[];return Array.isArray(i)?os(i):os(i.items,i.base)}function L0(t){const e=[];let n=0;for(const i in t){const r=t[i];if(r.items){n=e.push(r);continue}e[n]||e.push({items:[]}),e[n].items.push(r)}return e}function O0(t){const e=[];function n(i){for(const r of i)r.text&&r.link&&e.push({text:r.text,link:r.link,docFooterText:r.docFooterText}),r.items&&n(r.items)}return n(t),e}function Ec(t,e){return Array.isArray(e)?e.some(n=>Ec(t,n)):nr(t,e.link)?!0:e.items?Ec(t,e.items):!1}function os(t,e){return[...t].map(n=>{const i={...n},r=i.base||e;return r&&i.link&&(i.link=r+i.link),i.items&&(i.items=os(i.items,r)),i})}function ci(){const{frontmatter:t,page:e,theme:n}=lt(),i=bc("(min-width: 960px)"),r=Ce(!1),o=V(()=>{const g=n.value.sidebar,m=e.value.relativePath;return g?jp(g,m):[]}),a=Ce(o.value);Ye(o,(g,m)=>{JSON.stringify(g)!==JSON.stringify(m)&&(a.value=o.value)});const s=V(()=>t.value.sidebar!==!1&&a.value.length>0&&t.value.layout!=="home"),l=V(()=>c?t.value.aside==null?n.value.aside==="left":t.value.aside==="left":!1),c=V(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:n.value.aside!==!1),u=V(()=>s.value&&i.value),d=V(()=>s.value?L0(a.value):[]);function f(){r.value=!0}function h(){r.value=!1}function v(){r.value?h():f()}return{isOpen:r,sidebar:a,sidebarGroups:d,hasSidebar:s,hasAside:c,leftAside:l,isSidebarEnabled:u,open:f,close:h,toggle:v}}function D0(t,e){let n;en(()=>{n=t.value?document.activeElement:void 0}),St(()=>{window.addEventListener("keyup",i)}),Wn(()=>{window.removeEventListener("keyup",i)});function i(r){r.key==="Escape"&&t.value&&(e(),n==null||n.focus())}}function N0(t){const{page:e,hash:n}=lt(),i=Ce(!1),r=V(()=>t.value.collapsed!=null),o=V(()=>!!t.value.link),a=Ce(!1),s=()=>{a.value=nr(e.value.relativePath,t.value.link)};Ye([e,t,n],s),St(s);const l=V(()=>a.value?!0:t.value.items?Ec(e.value.relativePath,t.value.items):!1),c=V(()=>!!(t.value.items&&t.value.items.length));en(()=>{i.value=!!(r.value&&t.value.collapsed)}),Hp(()=>{(a.value||l.value)&&(i.value=!1)});function u(){r.value&&(i.value=!i.value)}return{collapsed:i,collapsible:r,isLink:o,isActiveLink:a,hasActiveLink:l,hasChildren:c,toggle:u}}function F0(){const{hasSidebar:t}=ci(),e=bc("(min-width: 960px)"),n=bc("(min-width: 1280px)");return{isAsideEnabled:V(()=>!n.value&&!e.value?!1:t.value?n.value:e.value)}}const wc=[];function qp(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function mu(t){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const i=Number(n.tagName[1]);return{element:n,title:U0(n),link:"#"+n.id,level:i}});return B0(e,t)}function U0(t){let e="";for(const n of t.childNodes)if(n.nodeType===1){if(n.classList.contains("VPBadge")||n.classList.contains("header-anchor")||n.classList.contains("ignore-header"))continue;e+=n.textContent}else n.nodeType===3&&(e+=n.textContent);return e.trim()}function B0(t,e){if(e===!1)return[];const n=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[i,r]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;t=t.filter(a=>a.level>=i&&a.level<=r),wc.length=0;for(const{element:a,link:s}of t)wc.push({element:a,link:s});const o=[];e:for(let a=0;a<t.length;a++){const s=t[a];if(a===0)o.push(s);else{for(let l=a-1;l>=0;l--){const c=t[l];if(c.level<s.level){(c.children||(c.children=[])).push(s);continue e}}o.push(s)}}return o}function z0(t,e){const{isAsideEnabled:n}=F0(),i=x0(o,100);let r=null;St(()=>{requestAnimationFrame(o),window.addEventListener("scroll",i)}),ro(()=>{a(location.hash)}),Wn(()=>{window.removeEventListener("scroll",i)});function o(){if(!n.value)return;const s=window.scrollY,l=window.innerHeight,c=document.body.offsetHeight,u=Math.abs(s+l-c)<1,d=wc.map(({element:h,link:v})=>({link:v,top:k0(h)})).filter(({top:h})=>!Number.isNaN(h)).sort((h,v)=>h.top-v.top);if(!d.length){a(null);return}if(s<1){a(null);return}if(u){a(d[d.length-1].link);return}let f=null;for(const{link:h,top:v}of d){if(v>s+r0()+4)break;f=h}a(f)}function a(s){r&&r.classList.remove("active"),s==null?r=null:r=t.value.querySelector(`a[href="${decodeURIComponent(s)}"]`);const l=r;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function k0(t){let e=0;for(;t!==document.body;){if(t===null)return NaN;e+=t.offsetTop,t=t.offsetParent}return e}const H0=["href","title"],V0=ve({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function e({target:n}){const i=n.href.split("#")[1],r=document.getElementById(decodeURIComponent(i));r==null||r.focus({preventScroll:!0})}return(n,i)=>{const r=lr("VPDocOutlineItem",!0);return k(),re("ul",{class:vt(["VPDocOutlineItem",n.root?"root":"nested"])},[(k(!0),re(ot,null,Bt(n.headers,({children:o,link:a,title:s})=>(k(),re("li",null,[fe("a",{class:"outline-link",href:a,onClick:e,title:s},ht(s),9,H0),o!=null&&o.length?(k(),qe(r,{key:0,headers:o},null,8,["headers"])):Ue("",!0)]))),256))],2)}}}),Yp=Ge(V0,[["__scopeId","data-v-16600e15"]]),$0={class:"content"},G0={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},W0=ve({__name:"VPDocAsideOutline",setup(t){const{frontmatter:e,theme:n}=lt(),i=ze([]);Bs(()=>{i.value=mu(e.value.outline??n.value.outline)});const r=Ce(),o=Ce();return z0(r,o),(a,s)=>(k(),re("nav",{"aria-labelledby":"doc-outline-aria-label",class:vt(["VPDocAsideOutline",{"has-outline":i.value.length>0}]),ref_key:"container",ref:r},[fe("div",$0,[fe("div",{class:"outline-marker",ref_key:"marker",ref:o},null,512),fe("div",G0,ht(q(qp)(q(n))),1),O(Yp,{headers:i.value,root:!0},null,8,["headers"])])],2))}}),X0=Ge(W0,[["__scopeId","data-v-b9ff080b"]]),j0={class:"VPDocAsideCarbonAds"},q0=ve({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const e=()=>null;return(n,i)=>(k(),re("div",j0,[O(q(e),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),Y0=t=>(It("data-v-1d4f7e07"),t=t(),Lt(),t),K0={class:"VPDocAside"},Z0=Y0(()=>fe("div",{class:"spacer"},null,-1)),J0=ve({__name:"VPDocAside",setup(t){const{theme:e}=lt();return(n,i)=>(k(),re("div",K0,[se(n.$slots,"aside-top",{},void 0,!0),se(n.$slots,"aside-outline-before",{},void 0,!0),O(X0),se(n.$slots,"aside-outline-after",{},void 0,!0),Z0,se(n.$slots,"aside-ads-before",{},void 0,!0),q(e).carbonAds?(k(),qe(q0,{key:0,"carbon-ads":q(e).carbonAds},null,8,["carbon-ads"])):Ue("",!0),se(n.$slots,"aside-ads-after",{},void 0,!0),se(n.$slots,"aside-bottom",{},void 0,!0)]))}}),Q0=Ge(J0,[["__scopeId","data-v-1d4f7e07"]]);function e_(){const{theme:t,page:e}=lt();return V(()=>{const{text:n="Edit this page",pattern:i=""}=t.value.editLink||{};let r;return typeof i=="function"?r=i(e.value):r=i.replace(/:path/g,e.value.filePath),{url:r,text:n}})}function t_(){const{page:t,theme:e,frontmatter:n}=lt();return V(()=>{var c,u,d,f,h,v,g,m;const i=jp(e.value.sidebar,t.value.relativePath),r=O0(i),o=n_(r,p=>p.link.replace(/[?#].*$/,"")),a=o.findIndex(p=>nr(t.value.relativePath,p.link)),s=((c=e.value.docFooter)==null?void 0:c.prev)===!1&&!n.value.prev||n.value.prev===!1,l=((u=e.value.docFooter)==null?void 0:u.next)===!1&&!n.value.next||n.value.next===!1;return{prev:s?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((d=o[a-1])==null?void 0:d.docFooterText)??((f=o[a-1])==null?void 0:f.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((h=o[a-1])==null?void 0:h.link)},next:l?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((v=o[a+1])==null?void 0:v.docFooterText)??((g=o[a+1])==null?void 0:g.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((m=o[a+1])==null?void 0:m.link)}}})}function n_(t,e){const n=new Set;return t.filter(i=>{const r=e(i);return n.has(r)?!1:n.add(r)})}const Hn=ve({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const e=t,n=V(()=>e.tag??(e.href?"a":"span")),i=V(()=>e.href&&Vp.test(e.href)||e.target==="_blank");return(r,o)=>(k(),qe(zr(n.value),{class:vt(["VPLink",{link:r.href,"vp-external-link-icon":i.value,"no-icon":r.noIcon}]),href:r.href?q(pu)(r.href):void 0,target:r.target??(i.value?"_blank":void 0),rel:r.rel??(i.value?"noreferrer":void 0)},{default:ye(()=>[se(r.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),i_={class:"VPLastUpdated"},r_=["datetime"],o_=ve({__name:"VPDocFooterLastUpdated",setup(t){const{theme:e,page:n,frontmatter:i,lang:r}=lt(),o=V(()=>new Date(i.value.lastUpdated??n.value.lastUpdated)),a=V(()=>o.value.toISOString()),s=Ce("");return St(()=>{en(()=>{var l,c,u;s.value=new Intl.DateTimeFormat((c=(l=e.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&c.forceLocale?r.value:void 0,((u=e.value.lastUpdated)==null?void 0:u.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(l,c)=>{var u;return k(),re("p",i_,[vn(ht(((u=q(e).lastUpdated)==null?void 0:u.text)||q(e).lastUpdatedText||"Last updated")+": ",1),fe("time",{datetime:a.value},ht(s.value),9,r_)])}}}),a_=Ge(o_,[["__scopeId","data-v-2bcf3c51"]]),Kp=t=>(It("data-v-b24a83b2"),t=t(),Lt(),t),s_={key:0,class:"VPDocFooter"},l_={key:0,class:"edit-info"},c_={key:0,class:"edit-link"},u_=Kp(()=>fe("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),d_={key:1,class:"last-updated"},f_={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},h_=Kp(()=>fe("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),p_={class:"pager"},m_=["innerHTML"],v_=["innerHTML"],g_={class:"pager"},__=["innerHTML"],y_=["innerHTML"],x_=ve({__name:"VPDocFooter",setup(t){const{theme:e,page:n,frontmatter:i}=lt(),r=e_(),o=t_(),a=V(()=>e.value.editLink&&i.value.editLink!==!1),s=V(()=>n.value.lastUpdated&&i.value.lastUpdated!==!1),l=V(()=>a.value||s.value||o.value.prev||o.value.next);return(c,u)=>{var d,f,h,v;return l.value?(k(),re("footer",s_,[se(c.$slots,"doc-footer-before",{},void 0,!0),a.value||s.value?(k(),re("div",l_,[a.value?(k(),re("div",c_,[O(Hn,{class:"edit-link-button",href:q(r).url,"no-icon":!0},{default:ye(()=>[u_,vn(" "+ht(q(r).text),1)]),_:1},8,["href"])])):Ue("",!0),s.value?(k(),re("div",d_,[O(a_)])):Ue("",!0)])):Ue("",!0),(d=q(o).prev)!=null&&d.link||(f=q(o).next)!=null&&f.link?(k(),re("nav",f_,[h_,fe("div",p_,[(h=q(o).prev)!=null&&h.link?(k(),qe(Hn,{key:0,class:"pager-link prev",href:q(o).prev.link},{default:ye(()=>{var g;return[fe("span",{class:"desc",innerHTML:((g=q(e).docFooter)==null?void 0:g.prev)||"Previous page"},null,8,m_),fe("span",{class:"title",innerHTML:q(o).prev.text},null,8,v_)]}),_:1},8,["href"])):Ue("",!0)]),fe("div",g_,[(v=q(o).next)!=null&&v.link?(k(),qe(Hn,{key:0,class:"pager-link next",href:q(o).next.link},{default:ye(()=>{var g;return[fe("span",{class:"desc",innerHTML:((g=q(e).docFooter)==null?void 0:g.next)||"Next page"},null,8,__),fe("span",{class:"title",innerHTML:q(o).next.text},null,8,y_)]}),_:1},8,["href"])):Ue("",!0)])])):Ue("",!0)])):Ue("",!0)}}}),b_=Ge(x_,[["__scopeId","data-v-b24a83b2"]]),S_=t=>(It("data-v-1a4d8ce3"),t=t(),Lt(),t),M_={class:"container"},E_=S_(()=>fe("div",{class:"aside-curtain"},null,-1)),w_={class:"aside-container"},T_={class:"aside-content"},C_={class:"content"},A_={class:"content-container"},P_={class:"main"},R_=ve({__name:"VPDoc",setup(t){const{theme:e}=lt(),n=zs(),{hasSidebar:i,hasAside:r,leftAside:o}=ci(),a=V(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(s,l)=>{const c=lr("Content");return k(),re("div",{class:vt(["VPDoc",{"has-sidebar":q(i),"has-aside":q(r)}])},[se(s.$slots,"doc-top",{},void 0,!0),fe("div",M_,[q(r)?(k(),re("div",{key:0,class:vt(["aside",{"left-aside":q(o)}])},[E_,fe("div",w_,[fe("div",T_,[O(Q0,null,{"aside-top":ye(()=>[se(s.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":ye(()=>[se(s.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":ye(()=>[se(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":ye(()=>[se(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":ye(()=>[se(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":ye(()=>[se(s.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):Ue("",!0),fe("div",C_,[fe("div",A_,[se(s.$slots,"doc-before",{},void 0,!0),fe("main",P_,[O(c,{class:vt(["vp-doc",[a.value,q(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),O(b_,null,{"doc-footer-before":ye(()=>[se(s.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),se(s.$slots,"doc-after",{},void 0,!0)])])]),se(s.$slots,"doc-bottom",{},void 0,!0)],2)}}}),I_=Ge(R_,[["__scopeId","data-v-1a4d8ce3"]]),L_=ve({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(t){const e=t,n=V(()=>e.href&&Vp.test(e.href)),i=V(()=>e.tag||e.href?"a":"button");return(r,o)=>(k(),qe(zr(i.value),{class:vt(["VPButton",[r.size,r.theme]]),href:r.href?q(pu)(r.href):void 0,target:e.target??(n.value?"_blank":void 0),rel:e.rel??(n.value?"noreferrer":void 0)},{default:ye(()=>[vn(ht(r.text),1)]),_:1},8,["class","href","target","rel"]))}}),O_=Ge(L_,[["__scopeId","data-v-19867bb8"]]),D_=["src","alt"],N_=ve({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(e,n)=>{const i=lr("VPImage",!0);return e.image?(k(),re(ot,{key:0},[typeof e.image=="string"||"src"in e.image?(k(),re("img",Zi({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:q(uu)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,D_)):(k(),re(ot,{key:1},[O(i,Zi({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),O(i,Zi({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):Ue("",!0)}}}),gs=Ge(N_,[["__scopeId","data-v-cc1fad54"]]),F_=t=>(It("data-v-3532abc2"),t=t(),Lt(),t),U_={class:"container"},B_={class:"main"},z_={key:0,class:"name"},k_=["innerHTML"],H_=["innerHTML"],V_=["innerHTML"],$_={key:0,class:"actions"},G_={key:0,class:"image"},W_={class:"image-container"},X_=F_(()=>fe("div",{class:"image-bg"},null,-1)),j_=ve({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const e=Tt("hero-image-slot-exists");return(n,i)=>(k(),re("div",{class:vt(["VPHero",{"has-image":n.image||q(e)}])},[fe("div",U_,[fe("div",B_,[se(n.$slots,"home-hero-info-before",{},void 0,!0),se(n.$slots,"home-hero-info",{},()=>[n.name?(k(),re("h1",z_,[fe("span",{innerHTML:n.name,class:"clip"},null,8,k_)])):Ue("",!0),n.text?(k(),re("p",{key:1,innerHTML:n.text,class:"text"},null,8,H_)):Ue("",!0),n.tagline?(k(),re("p",{key:2,innerHTML:n.tagline,class:"tagline"},null,8,V_)):Ue("",!0)],!0),se(n.$slots,"home-hero-info-after",{},void 0,!0),n.actions?(k(),re("div",$_,[(k(!0),re(ot,null,Bt(n.actions,r=>(k(),re("div",{key:r.link,class:"action"},[O(O_,{tag:"a",size:"medium",theme:r.theme,text:r.text,href:r.link,target:r.target,rel:r.rel},null,8,["theme","text","href","target","rel"])]))),128))])):Ue("",!0),se(n.$slots,"home-hero-actions-after",{},void 0,!0)]),n.image||q(e)?(k(),re("div",G_,[fe("div",W_,[X_,se(n.$slots,"home-hero-image",{},()=>[n.image?(k(),qe(gs,{key:0,class:"image-src",image:n.image},null,8,["image"])):Ue("",!0)],!0)])])):Ue("",!0)])],2))}}),q_=Ge(j_,[["__scopeId","data-v-3532abc2"]]),Y_=ve({__name:"VPHomeHero",setup(t){const{frontmatter:e}=lt();return(n,i)=>q(e).hero?(k(),qe(q_,{key:0,class:"VPHomeHero",name:q(e).hero.name,text:q(e).hero.text,tagline:q(e).hero.tagline,image:q(e).hero.image,actions:q(e).hero.actions},{"home-hero-info-before":ye(()=>[se(n.$slots,"home-hero-info-before")]),"home-hero-info":ye(()=>[se(n.$slots,"home-hero-info")]),"home-hero-info-after":ye(()=>[se(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":ye(()=>[se(n.$slots,"home-hero-actions-after")]),"home-hero-image":ye(()=>[se(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):Ue("",!0)}}),K_=t=>(It("data-v-86834544"),t=t(),Lt(),t),Z_={class:"box"},J_={key:0,class:"icon"},Q_=["innerHTML"],ey=["innerHTML"],ty=["innerHTML"],ny={key:4,class:"link-text"},iy={class:"link-text-value"},ry=K_(()=>fe("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),oy=ve({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(e,n)=>(k(),qe(Hn,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:ye(()=>[fe("article",Z_,[typeof e.icon=="object"&&e.icon.wrap?(k(),re("div",J_,[O(gs,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(k(),qe(gs,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(k(),re("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Q_)):Ue("",!0),fe("h2",{class:"title",innerHTML:e.title},null,8,ey),e.details?(k(),re("p",{key:3,class:"details",innerHTML:e.details},null,8,ty)):Ue("",!0),e.linkText?(k(),re("div",ny,[fe("p",iy,[vn(ht(e.linkText)+" ",1),ry])])):Ue("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),ay=Ge(oy,[["__scopeId","data-v-86834544"]]),sy={key:0,class:"VPFeatures"},ly={class:"container"},cy={class:"items"},uy=ve({__name:"VPFeatures",props:{features:{}},setup(t){const e=t,n=V(()=>{const i=e.features.length;if(i){if(i===2)return"grid-2";if(i===3)return"grid-3";if(i%3===0)return"grid-6";if(i>3)return"grid-4"}else return});return(i,r)=>i.features?(k(),re("div",sy,[fe("div",ly,[fe("div",cy,[(k(!0),re(ot,null,Bt(i.features,o=>(k(),re("div",{key:o.title,class:vt(["item",[n.value]])},[O(ay,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):Ue("",!0)}}),dy=Ge(uy,[["__scopeId","data-v-4fd4ead6"]]),fy=ve({__name:"VPHomeFeatures",setup(t){const{frontmatter:e}=lt();return(n,i)=>q(e).features?(k(),qe(dy,{key:0,class:"VPHomeFeatures",features:q(e).features},null,8,["features"])):Ue("",!0)}}),hy=ve({__name:"VPHomeContent",setup(t){const{width:e}=o0({initialWidth:0,includeScrollbar:!1});return(n,i)=>(k(),re("div",{class:"vp-doc container",style:Xr(q(e)?{"--vp-offset":`calc(50% - ${q(e)/2}px)`}:{})},[se(n.$slots,"default",{},void 0,!0)],4))}}),py=Ge(hy,[["__scopeId","data-v-7f5b8753"]]),my={class:"VPHome"},vy=ve({__name:"VPHome",setup(t){const{frontmatter:e}=lt();return(n,i)=>{const r=lr("Content");return k(),re("div",my,[se(n.$slots,"home-hero-before",{},void 0,!0),O(Y_,null,{"home-hero-info-before":ye(()=>[se(n.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":ye(()=>[se(n.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":ye(()=>[se(n.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":ye(()=>[se(n.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":ye(()=>[se(n.$slots,"home-hero-image",{},void 0,!0)]),_:3}),se(n.$slots,"home-hero-after",{},void 0,!0),se(n.$slots,"home-features-before",{},void 0,!0),O(fy),se(n.$slots,"home-features-after",{},void 0,!0),q(e).markdownStyles!==!1?(k(),qe(py,{key:0},{default:ye(()=>[O(r)]),_:1})):(k(),qe(r,{key:1}))])}}}),gy=Ge(vy,[["__scopeId","data-v-fe82f954"]]),_y={},yy={class:"VPPage"};function xy(t,e){const n=lr("Content");return k(),re("div",yy,[se(t.$slots,"page-top"),O(n),se(t.$slots,"page-bottom")])}const by=Ge(_y,[["render",xy]]),Sy=ve({__name:"VPContent",setup(t){const{page:e,frontmatter:n}=lt(),{hasSidebar:i}=ci();return(r,o)=>(k(),re("div",{class:vt(["VPContent",{"has-sidebar":q(i),"is-home":q(n).layout==="home"}]),id:"VPContent"},[q(e).isNotFound?se(r.$slots,"not-found",{key:0},()=>[O(I0)],!0):q(n).layout==="page"?(k(),qe(by,{key:1},{"page-top":ye(()=>[se(r.$slots,"page-top",{},void 0,!0)]),"page-bottom":ye(()=>[se(r.$slots,"page-bottom",{},void 0,!0)]),_:3})):q(n).layout==="home"?(k(),qe(gy,{key:2},{"home-hero-before":ye(()=>[se(r.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":ye(()=>[se(r.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":ye(()=>[se(r.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":ye(()=>[se(r.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":ye(()=>[se(r.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":ye(()=>[se(r.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":ye(()=>[se(r.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":ye(()=>[se(r.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":ye(()=>[se(r.$slots,"home-features-after",{},void 0,!0)]),_:3})):q(n).layout&&q(n).layout!=="doc"?(k(),qe(zr(q(n).layout),{key:3})):(k(),qe(I_,{key:4},{"doc-top":ye(()=>[se(r.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":ye(()=>[se(r.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":ye(()=>[se(r.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":ye(()=>[se(r.$slots,"doc-before",{},void 0,!0)]),"doc-after":ye(()=>[se(r.$slots,"doc-after",{},void 0,!0)]),"aside-top":ye(()=>[se(r.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":ye(()=>[se(r.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":ye(()=>[se(r.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":ye(()=>[se(r.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":ye(()=>[se(r.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":ye(()=>[se(r.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),My=Ge(Sy,[["__scopeId","data-v-15046448"]]),Ey={class:"container"},wy=["innerHTML"],Ty=["innerHTML"],Cy=ve({__name:"VPFooter",setup(t){const{theme:e,frontmatter:n}=lt(),{hasSidebar:i}=ci();return(r,o)=>q(e).footer&&q(n).footer!==!1?(k(),re("footer",{key:0,class:vt(["VPFooter",{"has-sidebar":q(i)}])},[fe("div",Ey,[q(e).footer.message?(k(),re("p",{key:0,class:"message",innerHTML:q(e).footer.message},null,8,wy)):Ue("",!0),q(e).footer.copyright?(k(),re("p",{key:1,class:"copyright",innerHTML:q(e).footer.copyright},null,8,Ty)):Ue("",!0)])],2)):Ue("",!0)}}),Ay=Ge(Cy,[["__scopeId","data-v-81ab7996"]]);function Py(){const{theme:t,frontmatter:e}=lt(),n=ze([]),i=V(()=>n.value.length>0);return Bs(()=>{n.value=mu(e.value.outline??t.value.outline)}),{headers:n,hasLocalNav:i}}const Ry=t=>(It("data-v-965b39f8"),t=t(),Lt(),t),Iy={class:"menu-text"},Ly=Ry(()=>fe("span",{class:"vpi-chevron-right icon"},null,-1)),Oy={class:"header"},Dy={class:"outline"},Ny=ve({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const e=t,{theme:n}=lt(),i=Ce(!1),r=Ce(0),o=Ce(),a=Ce();function s(d){var f;(f=o.value)!=null&&f.contains(d.target)||(i.value=!1)}Ye(i,d=>{if(d){document.addEventListener("click",s);return}document.removeEventListener("click",s)}),a0("Escape",()=>{i.value=!1}),Bs(()=>{i.value=!1});function l(){i.value=!i.value,r.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function c(d){d.target.classList.contains("outline-link")&&(a.value&&(a.value.style.transition="none"),on(()=>{i.value=!1}))}function u(){i.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(d,f)=>(k(),re("div",{class:"VPLocalNavOutlineDropdown",style:Xr({"--vp-vh":r.value+"px"}),ref_key:"main",ref:o},[d.headers.length>0?(k(),re("button",{key:0,onClick:l,class:vt({open:i.value})},[fe("span",Iy,ht(q(qp)(q(n))),1),Ly],2)):(k(),re("button",{key:1,onClick:u},ht(q(n).returnToTopLabel||"Return to top"),1)),O(io,{name:"flyout"},{default:ye(()=>[i.value?(k(),re("div",{key:0,ref_key:"items",ref:a,class:"items",onClick:c},[fe("div",Oy,[fe("a",{class:"top-link",href:"#",onClick:u},ht(q(n).returnToTopLabel||"Return to top"),1)]),fe("div",Dy,[O(Yp,{headers:d.headers},null,8,["headers"])])],512)):Ue("",!0)]),_:1})],4))}}),Fy=Ge(Ny,[["__scopeId","data-v-965b39f8"]]),Uy=t=>(It("data-v-e27b93ff"),t=t(),Lt(),t),By={class:"container"},zy=["aria-expanded"],ky=Uy(()=>fe("span",{class:"vpi-align-left menu-icon"},null,-1)),Hy={class:"menu-text"},Vy=ve({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:e,frontmatter:n}=lt(),{hasSidebar:i}=ci(),{headers:r}=Py(),{y:o}=$p(),a=Ce(0);St(()=>{a.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Bs(()=>{r.value=mu(n.value.outline??e.value.outline)});const s=V(()=>r.value.length===0),l=V(()=>s.value&&!i.value),c=V(()=>({VPLocalNav:!0,"has-sidebar":i.value,empty:s.value,fixed:l.value}));return(u,d)=>q(n).layout!=="home"&&(!l.value||q(o)>=a.value)?(k(),re("div",{key:0,class:vt(c.value)},[fe("div",By,[q(i)?(k(),re("button",{key:0,class:"menu","aria-expanded":u.open,"aria-controls":"VPSidebarNav",onClick:d[0]||(d[0]=f=>u.$emit("open-menu"))},[ky,fe("span",Hy,ht(q(e).sidebarMenuLabel||"Menu"),1)],8,zy)):Ue("",!0),O(Fy,{headers:q(r),navHeight:a.value},null,8,["headers","navHeight"])])],2)):Ue("",!0)}}),$y=Ge(Vy,[["__scopeId","data-v-e27b93ff"]]);function Gy(){const t=Ce(!1);function e(){t.value=!0,window.addEventListener("resize",r)}function n(){t.value=!1,window.removeEventListener("resize",r)}function i(){t.value?n():e()}function r(){window.outerWidth>=768&&n()}const o=zs();return Ye(()=>o.path,n),{isScreenOpen:t,openScreen:e,closeScreen:n,toggleScreen:i}}const Wy={},Xy={class:"VPSwitch",type:"button",role:"switch"},jy={class:"check"},qy={key:0,class:"icon"};function Yy(t,e){return k(),re("button",Xy,[fe("span",jy,[t.$slots.default?(k(),re("span",qy,[se(t.$slots,"default",{},void 0,!0)])):Ue("",!0)])])}const Ky=Ge(Wy,[["render",Yy],["__scopeId","data-v-a0ab7f83"]]),Zp=t=>(It("data-v-0f4dc491"),t=t(),Lt(),t),Zy=Zp(()=>fe("span",{class:"vpi-sun sun"},null,-1)),Jy=Zp(()=>fe("span",{class:"vpi-moon moon"},null,-1)),Qy=ve({__name:"VPSwitchAppearance",setup(t){const{isDark:e,theme:n}=lt(),i=Tt("toggle-appearance",()=>{e.value=!e.value}),r=V(()=>e.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme");return(o,a)=>(k(),qe(Ky,{title:r.value,class:"VPSwitchAppearance","aria-checked":q(e),onClick:q(i)},{default:ye(()=>[Zy,Jy]),_:1},8,["title","aria-checked","onClick"]))}}),vu=Ge(Qy,[["__scopeId","data-v-0f4dc491"]]),ex={key:0,class:"VPNavBarAppearance"},tx=ve({__name:"VPNavBarAppearance",setup(t){const{site:e}=lt();return(n,i)=>q(e).appearance&&q(e).appearance!=="force-dark"?(k(),re("div",ex,[O(vu)])):Ue("",!0)}}),nx=Ge(tx,[["__scopeId","data-v-3405dd8c"]]),gu=Ce();let Jp=!1,ml=0;function ix(t){const e=Ce(!1);if(ks){!Jp&&rx(),ml++;const n=Ye(gu,i=>{var r,o,a;i===t.el.value||(r=t.el.value)!=null&&r.contains(i)?(e.value=!0,(o=t.onFocus)==null||o.call(t)):(e.value=!1,(a=t.onBlur)==null||a.call(t))});Wn(()=>{n(),ml--,ml||ox()})}return s0(e)}function rx(){document.addEventListener("focusin",Qp),Jp=!0,gu.value=document.activeElement}function ox(){document.removeEventListener("focusin",Qp)}function Qp(){gu.value=document.activeElement}const ax={class:"VPMenuLink"},sx=ve({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:e}=lt();return(n,i)=>(k(),re("div",ax,[O(Hn,{class:vt({active:q(nr)(q(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel},{default:ye(()=>[vn(ht(n.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),Gs=Ge(sx,[["__scopeId","data-v-3d483615"]]),lx={class:"VPMenuGroup"},cx={key:0,class:"title"},ux=ve({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(e,n)=>(k(),re("div",lx,[e.text?(k(),re("p",cx,ht(e.text),1)):Ue("",!0),(k(!0),re(ot,null,Bt(e.items,i=>(k(),re(ot,null,["link"in i?(k(),qe(Gs,{key:0,item:i},null,8,["item"])):Ue("",!0)],64))),256))]))}}),dx=Ge(ux,[["__scopeId","data-v-9b2819cf"]]),fx={class:"VPMenu"},hx={key:0,class:"items"},px=ve({__name:"VPMenu",props:{items:{}},setup(t){return(e,n)=>(k(),re("div",fx,[e.items?(k(),re("div",hx,[(k(!0),re(ot,null,Bt(e.items,i=>(k(),re(ot,{key:i.text},["link"in i?(k(),qe(Gs,{key:0,item:i},null,8,["item"])):(k(),qe(dx,{key:1,text:i.text,items:i.items},null,8,["text","items"]))],64))),128))])):Ue("",!0),se(e.$slots,"default",{},void 0,!0)]))}}),mx=Ge(px,[["__scopeId","data-v-647cafa1"]]),vx=t=>(It("data-v-43b1ae4b"),t=t(),Lt(),t),gx=["aria-expanded","aria-label"],_x={key:0,class:"text"},yx=["innerHTML"],xx=vx(()=>fe("span",{class:"vpi-chevron-down text-icon"},null,-1)),bx={key:1,class:"vpi-more-horizontal icon"},Sx={class:"menu"},Mx=ve({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const e=Ce(!1),n=Ce();ix({el:n,onBlur:i});function i(){e.value=!1}return(r,o)=>(k(),re("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:o[1]||(o[1]=a=>e.value=!0),onMouseleave:o[2]||(o[2]=a=>e.value=!1)},[fe("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":r.label,onClick:o[0]||(o[0]=a=>e.value=!e.value)},[r.button||r.icon?(k(),re("span",_x,[r.icon?(k(),re("span",{key:0,class:vt([r.icon,"option-icon"])},null,2)):Ue("",!0),r.button?(k(),re("span",{key:1,innerHTML:r.button},null,8,yx)):Ue("",!0),xx])):(k(),re("span",bx))],8,gx),fe("div",Sx,[O(mx,{items:r.items},{default:ye(()=>[se(r.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),_u=Ge(Mx,[["__scopeId","data-v-43b1ae4b"]]),Ex=["href","aria-label","innerHTML"],wx=ve({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const e=t,n=V(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}" />`);return(i,r)=>(k(),re("a",{class:"VPSocialLink no-icon",href:i.link,"aria-label":i.ariaLabel??(typeof i.icon=="string"?i.icon:""),target:"_blank",rel:"noopener",innerHTML:n.value},null,8,Ex))}}),Tx=Ge(wx,[["__scopeId","data-v-37455306"]]),Cx={class:"VPSocialLinks"},Ax=ve({__name:"VPSocialLinks",props:{links:{}},setup(t){return(e,n)=>(k(),re("div",Cx,[(k(!0),re(ot,null,Bt(e.links,({link:i,icon:r,ariaLabel:o})=>(k(),qe(Tx,{key:i,icon:r,link:i,ariaLabel:o},null,8,["icon","link","ariaLabel"]))),128))]))}}),yu=Ge(Ax,[["__scopeId","data-v-e310bcaf"]]),Px={key:0,class:"group translations"},Rx={class:"trans-title"},Ix={key:1,class:"group"},Lx={class:"item appearance"},Ox={class:"label"},Dx={class:"appearance-action"},Nx={key:2,class:"group"},Fx={class:"item social-links"},Ux=ve({__name:"VPNavBarExtra",setup(t){const{site:e,theme:n}=lt(),{localeLinks:i,currentLang:r}=na({correspondingLink:!0}),o=V(()=>i.value.length&&r.value.label||e.value.appearance||n.value.socialLinks);return(a,s)=>o.value?(k(),qe(_u,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:ye(()=>[q(i).length&&q(r).label?(k(),re("div",Px,[fe("p",Rx,ht(q(r).label),1),(k(!0),re(ot,null,Bt(q(i),l=>(k(),qe(Gs,{key:l.link,item:l},null,8,["item"]))),128))])):Ue("",!0),q(e).appearance&&q(e).appearance!=="force-dark"?(k(),re("div",Ix,[fe("div",Lx,[fe("p",Ox,ht(q(n).darkModeSwitchLabel||"Appearance"),1),fe("div",Dx,[O(vu)])])])):Ue("",!0),q(n).socialLinks?(k(),re("div",Nx,[fe("div",Fx,[O(yu,{class:"social-links-list",links:q(n).socialLinks},null,8,["links"])])])):Ue("",!0)]),_:1})):Ue("",!0)}}),Bx=Ge(Ux,[["__scopeId","data-v-b43882d4"]]),zx=t=>(It("data-v-bcfb1741"),t=t(),Lt(),t),kx=["aria-expanded"],Hx=zx(()=>fe("span",{class:"container"},[fe("span",{class:"top"}),fe("span",{class:"middle"}),fe("span",{class:"bottom"})],-1)),Vx=[Hx],$x=ve({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(e,n)=>(k(),re("button",{type:"button",class:vt(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=i=>e.$emit("click"))},Vx,10,kx))}}),Gx=Ge($x,[["__scopeId","data-v-bcfb1741"]]),Wx=["innerHTML"],Xx=ve({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:e}=lt();return(n,i)=>(k(),qe(Hn,{class:vt({VPNavBarMenuLink:!0,active:q(nr)(q(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,noIcon:n.item.noIcon,target:n.item.target,rel:n.item.rel,tabindex:"0"},{default:ye(()=>[fe("span",{innerHTML:n.item.text},null,8,Wx)]),_:1},8,["class","href","noIcon","target","rel"]))}}),jx=Ge(Xx,[["__scopeId","data-v-f1eed6e1"]]),qx=ve({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const e=t,{page:n}=lt(),i=o=>"link"in o?nr(n.value.relativePath,o.link,!!e.item.activeMatch):o.items.some(i),r=V(()=>i(e.item));return(o,a)=>(k(),qe(_u,{class:vt({VPNavBarMenuGroup:!0,active:q(nr)(q(n).relativePath,o.item.activeMatch,!!o.item.activeMatch)||r.value}),button:o.item.text,items:o.item.items},null,8,["class","button","items"]))}}),Yx=t=>(It("data-v-94bdc1ba"),t=t(),Lt(),t),Kx={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Zx=Yx(()=>fe("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),Jx=ve({__name:"VPNavBarMenu",setup(t){const{theme:e}=lt();return(n,i)=>q(e).nav?(k(),re("nav",Kx,[Zx,(k(!0),re(ot,null,Bt(q(e).nav,r=>(k(),re(ot,{key:r.text},["link"in r?(k(),qe(jx,{key:0,item:r},null,8,["item"])):(k(),qe(qx,{key:1,item:r},null,8,["item"]))],64))),128))])):Ue("",!0)}}),Qx=Ge(Jx,[["__scopeId","data-v-94bdc1ba"]]);function eb(t){const{localeIndex:e,theme:n}=lt();function i(r){var v,g,m;const o=r.split("."),a=(v=n.value.search)==null?void 0:v.options,s=a&&typeof a=="object",l=s&&((m=(g=a.locales)==null?void 0:g[e.value])==null?void 0:m.translations)||null,c=s&&a.translations||null;let u=l,d=c,f=t;const h=o.pop();for(const p of o){let b=null;const y=f==null?void 0:f[p];y&&(b=f=y);const _=d==null?void 0:d[p];_&&(b=d=_);const T=u==null?void 0:u[p];T&&(b=u=T),y||(f=b),_||(d=b),T||(u=b)}return(u==null?void 0:u[h])??(d==null?void 0:d[h])??(f==null?void 0:f[h])??""}return i}const tb=["aria-label"],nb={class:"DocSearch-Button-Container"},ib=fe("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1),rb={class:"DocSearch-Button-Placeholder"},ob=fe("span",{class:"DocSearch-Button-Keys"},[fe("kbd",{class:"DocSearch-Button-Key"}),fe("kbd",{class:"DocSearch-Button-Key"},"K")],-1),fd=ve({__name:"VPNavBarSearchButton",setup(t){const n=eb({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(i,r)=>(k(),re("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":q(n)("button.buttonAriaLabel")},[fe("span",nb,[ib,fe("span",rb,ht(q(n)("button.buttonText")),1)]),ob],8,tb))}}),ab={class:"VPNavBarSearch"},sb={id:"local-search"},lb={key:1,id:"docsearch"},cb=ve({__name:"VPNavBarSearch",setup(t){const e=()=>null,n=()=>null,{theme:i}=lt(),r=Ce(!1),o=Ce(!1);St(()=>{});function a(){r.value||(r.value=!0,setTimeout(s,16))}function s(){const u=new Event("keydown");u.key="k",u.metaKey=!0,window.dispatchEvent(u),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||s()},16)}const l=Ce(!1),c="";return(u,d)=>{var f;return k(),re("div",ab,[q(c)==="local"?(k(),re(ot,{key:0},[l.value?(k(),qe(q(e),{key:0,onClose:d[0]||(d[0]=h=>l.value=!1)})):Ue("",!0),fe("div",sb,[O(fd,{onClick:d[1]||(d[1]=h=>l.value=!0)})])],64)):q(c)==="algolia"?(k(),re(ot,{key:1},[r.value?(k(),qe(q(n),{key:0,algolia:((f=q(i).search)==null?void 0:f.options)??q(i).algolia,onVnodeBeforeMount:d[2]||(d[2]=h=>o.value=!0)},null,8,["algolia"])):Ue("",!0),o.value?Ue("",!0):(k(),re("div",lb,[O(fd,{onClick:a})]))],64)):Ue("",!0)])}}}),ub=ve({__name:"VPNavBarSocialLinks",setup(t){const{theme:e}=lt();return(n,i)=>q(e).socialLinks?(k(),qe(yu,{key:0,class:"VPNavBarSocialLinks",links:q(e).socialLinks},null,8,["links"])):Ue("",!0)}}),db=Ge(ub,[["__scopeId","data-v-99b9a86b"]]),fb=["href","rel","target"],hb={key:1},pb={key:2},mb=ve({__name:"VPNavBarTitle",setup(t){const{site:e,theme:n}=lt(),{hasSidebar:i}=ci(),{currentLang:r}=na(),o=V(()=>{var l;return typeof n.value.logoLink=="string"?n.value.logoLink:(l=n.value.logoLink)==null?void 0:l.link}),a=V(()=>{var l;return typeof n.value.logoLink=="string"||(l=n.value.logoLink)==null?void 0:l.rel}),s=V(()=>{var l;return typeof n.value.logoLink=="string"||(l=n.value.logoLink)==null?void 0:l.target});return(l,c)=>(k(),re("div",{class:vt(["VPNavBarTitle",{"has-sidebar":q(i)}])},[fe("a",{class:"title",href:o.value??q(pu)(q(r).link),rel:a.value,target:s.value},[se(l.$slots,"nav-bar-title-before",{},void 0,!0),q(n).logo?(k(),qe(gs,{key:0,class:"logo",image:q(n).logo},null,8,["image"])):Ue("",!0),q(n).siteTitle?(k(),re("span",hb,ht(q(n).siteTitle),1)):q(n).siteTitle===void 0?(k(),re("span",pb,ht(q(e).title),1)):Ue("",!0),se(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,fb)],2))}}),vb=Ge(mb,[["__scopeId","data-v-290ca986"]]),gb={class:"items"},_b={class:"title"},yb=ve({__name:"VPNavBarTranslations",setup(t){const{theme:e}=lt(),{localeLinks:n,currentLang:i}=na({correspondingLink:!0});return(r,o)=>q(n).length&&q(i).label?(k(),qe(_u,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:q(e).langMenuLabel||"Change language"},{default:ye(()=>[fe("div",gb,[fe("p",_b,ht(q(i).label),1),(k(!0),re(ot,null,Bt(q(n),a=>(k(),qe(Gs,{key:a.link,item:a},null,8,["item"]))),128))])]),_:1},8,["label"])):Ue("",!0)}}),xb=Ge(yb,[["__scopeId","data-v-08f20599"]]),bb=t=>(It("data-v-865e2c2f"),t=t(),Lt(),t),Sb={class:"wrapper"},Mb={class:"container"},Eb={class:"title"},wb={class:"content"},Tb={class:"content-body"},Cb=bb(()=>fe("div",{class:"divider"},[fe("div",{class:"divider-line"})],-1)),Ab=ve({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const{y:e}=$p(),{hasSidebar:n}=ci(),{frontmatter:i}=lt(),r=Ce({});return Hp(()=>{r.value={"has-sidebar":n.value,home:i.value.layout==="home",top:e.value===0}}),(o,a)=>(k(),re("div",{class:vt(["VPNavBar",r.value])},[fe("div",Sb,[fe("div",Mb,[fe("div",Eb,[O(vb,null,{"nav-bar-title-before":ye(()=>[se(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":ye(()=>[se(o.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),fe("div",wb,[fe("div",Tb,[se(o.$slots,"nav-bar-content-before",{},void 0,!0),O(cb,{class:"search"}),O(Qx,{class:"menu"}),O(xb,{class:"translations"}),O(nx,{class:"appearance"}),O(db,{class:"social-links"}),O(Bx,{class:"extra"}),se(o.$slots,"nav-bar-content-after",{},void 0,!0),O(Gx,{class:"hamburger",active:o.isScreenOpen,onClick:a[0]||(a[0]=s=>o.$emit("toggle-screen"))},null,8,["active"])])])])]),Cb],2))}}),Pb=Ge(Ab,[["__scopeId","data-v-865e2c2f"]]),Rb={key:0,class:"VPNavScreenAppearance"},Ib={class:"text"},Lb=ve({__name:"VPNavScreenAppearance",setup(t){const{site:e,theme:n}=lt();return(i,r)=>q(e).appearance&&q(e).appearance!=="force-dark"?(k(),re("div",Rb,[fe("p",Ib,ht(q(n).darkModeSwitchLabel||"Appearance"),1),O(vu)])):Ue("",!0)}}),Ob=Ge(Lb,[["__scopeId","data-v-fef61730"]]),Db=ve({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const e=Tt("close-screen");return(n,i)=>(k(),qe(Hn,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:q(e),innerHTML:n.item.text},null,8,["href","target","rel","onClick","innerHTML"]))}}),Nb=Ge(Db,[["__scopeId","data-v-5cc55ce3"]]),Fb=ve({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const e=Tt("close-screen");return(n,i)=>(k(),qe(Hn,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,onClick:q(e)},{default:ye(()=>[vn(ht(n.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),em=Ge(Fb,[["__scopeId","data-v-c93a5a1c"]]),Ub={class:"VPNavScreenMenuGroupSection"},Bb={key:0,class:"title"},zb=ve({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(e,n)=>(k(),re("div",Ub,[e.text?(k(),re("p",Bb,ht(e.text),1)):Ue("",!0),(k(!0),re(ot,null,Bt(e.items,i=>(k(),qe(em,{key:i.text,item:i},null,8,["item"]))),128))]))}}),kb=Ge(zb,[["__scopeId","data-v-c303402d"]]),Hb=t=>(It("data-v-dcb239bf"),t=t(),Lt(),t),Vb=["aria-controls","aria-expanded"],$b=["innerHTML"],Gb=Hb(()=>fe("span",{class:"vpi-plus button-icon"},null,-1)),Wb=["id"],Xb={key:1,class:"group"},jb=ve({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const e=t,n=Ce(!1),i=V(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function r(){n.value=!n.value}return(o,a)=>(k(),re("div",{class:vt(["VPNavScreenMenuGroup",{open:n.value}])},[fe("button",{class:"button","aria-controls":i.value,"aria-expanded":n.value,onClick:r},[fe("span",{class:"button-text",innerHTML:o.text},null,8,$b),Gb],8,Vb),fe("div",{id:i.value,class:"items"},[(k(!0),re(ot,null,Bt(o.items,s=>(k(),re(ot,{key:s.text},["link"in s?(k(),re("div",{key:s.text,class:"item"},[O(em,{item:s},null,8,["item"])])):(k(),re("div",Xb,[O(kb,{text:s.text,items:s.items},null,8,["text","items"])]))],64))),128))],8,Wb)],2))}}),qb=Ge(jb,[["__scopeId","data-v-dcb239bf"]]),Yb={key:0,class:"VPNavScreenMenu"},Kb=ve({__name:"VPNavScreenMenu",setup(t){const{theme:e}=lt();return(n,i)=>q(e).nav?(k(),re("nav",Yb,[(k(!0),re(ot,null,Bt(q(e).nav,r=>(k(),re(ot,{key:r.text},["link"in r?(k(),qe(Nb,{key:0,item:r},null,8,["item"])):(k(),qe(qb,{key:1,text:r.text||"",items:r.items},null,8,["text","items"]))],64))),128))])):Ue("",!0)}}),Zb=ve({__name:"VPNavScreenSocialLinks",setup(t){const{theme:e}=lt();return(n,i)=>q(e).socialLinks?(k(),qe(yu,{key:0,class:"VPNavScreenSocialLinks",links:q(e).socialLinks},null,8,["links"])):Ue("",!0)}}),tm=t=>(It("data-v-f9a9a9f4"),t=t(),Lt(),t),Jb=tm(()=>fe("span",{class:"vpi-languages icon lang"},null,-1)),Qb=tm(()=>fe("span",{class:"vpi-chevron-down icon chevron"},null,-1)),eS={class:"list"},tS=ve({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:e,currentLang:n}=na({correspondingLink:!0}),i=Ce(!1);function r(){i.value=!i.value}return(o,a)=>q(e).length&&q(n).label?(k(),re("div",{key:0,class:vt(["VPNavScreenTranslations",{open:i.value}])},[fe("button",{class:"title",onClick:r},[Jb,vn(" "+ht(q(n).label)+" ",1),Qb]),fe("ul",eS,[(k(!0),re(ot,null,Bt(q(e),s=>(k(),re("li",{key:s.link,class:"item"},[O(Hn,{class:"link",href:s.link},{default:ye(()=>[vn(ht(s.text),1)]),_:2},1032,["href"])]))),128))])],2)):Ue("",!0)}}),nS=Ge(tS,[["__scopeId","data-v-f9a9a9f4"]]),iS={class:"container"},rS=ve({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const e=Ce(null),n=Gp(ks?document.body:null);return(i,r)=>(k(),qe(io,{name:"fade",onEnter:r[0]||(r[0]=o=>n.value=!0),onAfterLeave:r[1]||(r[1]=o=>n.value=!1)},{default:ye(()=>[i.open?(k(),re("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[fe("div",iS,[se(i.$slots,"nav-screen-content-before",{},void 0,!0),O(Kb,{class:"menu"}),O(nS,{class:"translations"}),O(Ob,{class:"appearance"}),O(Zb,{class:"social-links"}),se(i.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):Ue("",!0)]),_:3}))}}),oS=Ge(rS,[["__scopeId","data-v-fbd496ea"]]),aS={key:0,class:"VPNav"},sS=ve({__name:"VPNav",setup(t){const{isScreenOpen:e,closeScreen:n,toggleScreen:i}=Gy(),{frontmatter:r}=lt(),o=V(()=>r.value.navbar!==!1);return gn("close-screen",n),en(()=>{ks&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(a,s)=>o.value?(k(),re("header",aS,[O(Pb,{"is-screen-open":q(e),onToggleScreen:q(i)},{"nav-bar-title-before":ye(()=>[se(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":ye(()=>[se(a.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":ye(()=>[se(a.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":ye(()=>[se(a.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),O(oS,{open:q(e)},{"nav-screen-content-before":ye(()=>[se(a.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":ye(()=>[se(a.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):Ue("",!0)}}),lS=Ge(sS,[["__scopeId","data-v-b8472db6"]]),nm=t=>(It("data-v-e49d860c"),t=t(),Lt(),t),cS=["role","tabindex"],uS=nm(()=>fe("div",{class:"indicator"},null,-1)),dS=nm(()=>fe("span",{class:"vpi-chevron-right caret-icon"},null,-1)),fS=[dS],hS={key:1,class:"items"},pS=ve({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const e=t,{collapsed:n,collapsible:i,isLink:r,isActiveLink:o,hasActiveLink:a,hasChildren:s,toggle:l}=N0(V(()=>e.item)),c=V(()=>s.value?"section":"div"),u=V(()=>r.value?"a":"div"),d=V(()=>s.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),f=V(()=>r.value?void 0:"button"),h=V(()=>[[`level-${e.depth}`],{collapsible:i.value},{collapsed:n.value},{"is-link":r.value},{"is-active":o.value},{"has-active":a.value}]);function v(m){"key"in m&&m.key!=="Enter"||!e.item.link&&l()}function g(){e.item.link&&l()}return(m,p)=>{const b=lr("VPSidebarItem",!0);return k(),qe(zr(c.value),{class:vt(["VPSidebarItem",h.value])},{default:ye(()=>[m.item.text?(k(),re("div",Zi({key:0,class:"item",role:f.value},du(m.item.items?{click:v,keydown:v}:{},!0),{tabindex:m.item.items&&0}),[uS,m.item.link?(k(),qe(Hn,{key:0,tag:u.value,class:"link",href:m.item.link,rel:m.item.rel,target:m.item.target},{default:ye(()=>[(k(),qe(zr(d.value),{class:"text",innerHTML:m.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(k(),qe(zr(d.value),{key:1,class:"text",innerHTML:m.item.text},null,8,["innerHTML"])),m.item.collapsed!=null&&m.item.items&&m.item.items.length?(k(),re("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:g,onKeydown:l0(g,["enter"]),tabindex:"0"},fS,32)):Ue("",!0)],16,cS)):Ue("",!0),m.item.items&&m.item.items.length?(k(),re("div",hS,[m.depth<5?(k(!0),re(ot,{key:0},Bt(m.item.items,y=>(k(),qe(b,{key:y.text,item:y,depth:m.depth+1},null,8,["item","depth"]))),128)):Ue("",!0)])):Ue("",!0)]),_:1},8,["class"])}}}),mS=Ge(pS,[["__scopeId","data-v-e49d860c"]]),im=t=>(It("data-v-b383cc39"),t=t(),Lt(),t),vS=im(()=>fe("div",{class:"curtain"},null,-1)),gS={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},_S=im(()=>fe("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),yS=ve({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:e,hasSidebar:n}=ci(),i=t,r=Ce(null),o=Gp(ks?document.body:null);return Ye([i,r],()=>{var a;i.open?(o.value=!0,(a=r.value)==null||a.focus()):o.value=!1},{immediate:!0,flush:"post"}),(a,s)=>q(n)?(k(),re("aside",{key:0,class:vt(["VPSidebar",{open:a.open}]),ref_key:"navEl",ref:r,onClick:s[0]||(s[0]=Sc(()=>{},["stop"]))},[vS,fe("nav",gS,[_S,se(a.$slots,"sidebar-nav-before",{},void 0,!0),(k(!0),re(ot,null,Bt(q(e),l=>(k(),re("div",{key:l.text,class:"group"},[O(mS,{item:l,depth:0},null,8,["item"])]))),128)),se(a.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):Ue("",!0)}}),xS=Ge(yS,[["__scopeId","data-v-b383cc39"]]),bS=ve({__name:"VPSkipLink",setup(t){const e=zs(),n=Ce();Ye(()=>e.path,()=>n.value.focus());function i({target:r}){const o=document.getElementById(decodeURIComponent(r.hash).slice(1));if(o){const a=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",a)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",a),o.focus(),window.scrollTo(0,0)}}return(r,o)=>(k(),re(ot,null,[fe("span",{ref_key:"backToTop",ref:n,tabindex:"-1"},null,512),fe("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:i}," Skip to content ")],64))}}),SS=Ge(bS,[["__scopeId","data-v-52a3dd23"]]),MS=ve({__name:"Layout",setup(t){const{isOpen:e,open:n,close:i}=ci(),r=zs();Ye(()=>r.path,i),D0(e,i);const{frontmatter:o}=lt(),a=c0(),s=V(()=>!!a["home-hero-image"]);return gn("hero-image-slot-exists",s),(l,c)=>{const u=lr("Content");return q(o).layout!==!1?(k(),re("div",{key:0,class:vt(["Layout",q(o).pageClass])},[se(l.$slots,"layout-top",{},void 0,!0),O(SS),O(y0,{class:"backdrop",show:q(e),onClick:q(i)},null,8,["show","onClick"]),O(lS,null,{"nav-bar-title-before":ye(()=>[se(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":ye(()=>[se(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":ye(()=>[se(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":ye(()=>[se(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":ye(()=>[se(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":ye(()=>[se(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),O($y,{open:q(e),onOpenMenu:q(n)},null,8,["open","onOpenMenu"]),O(xS,{open:q(e)},{"sidebar-nav-before":ye(()=>[se(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":ye(()=>[se(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),O(My,null,{"page-top":ye(()=>[se(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":ye(()=>[se(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":ye(()=>[se(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":ye(()=>[se(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":ye(()=>[se(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":ye(()=>[se(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":ye(()=>[se(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":ye(()=>[se(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":ye(()=>[se(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":ye(()=>[se(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":ye(()=>[se(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":ye(()=>[se(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":ye(()=>[se(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":ye(()=>[se(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":ye(()=>[se(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":ye(()=>[se(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":ye(()=>[se(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":ye(()=>[se(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":ye(()=>[se(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":ye(()=>[se(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":ye(()=>[se(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":ye(()=>[se(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":ye(()=>[se(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),O(Ay),se(l.$slots,"layout-bottom",{},void 0,!0)],2)):(k(),qe(u,{key:1}))}}}),ES=Ge(MS,[["__scopeId","data-v-9fcb0c38"]]),hd={Layout:ES,enhanceApp:({app:t})=>{t.component("Badge",v0)}},wS=t=>(It("data-v-618cf90f"),t=t(),Lt(),t),TS={class:"bq-button"},CS=wS(()=>fe("span",null,"-测试按钮-6",-1)),AS=[CS],PS=ve({name:"BqButton",__name:"Button",setup(t){return(e,n)=>(k(),re("div",TS,AS))}}),RS=Ge(PS,[["__scopeId","data-v-618cf90f"]]),IS=ve({name:"BqBasicsButton",__name:"BasicsButton",setup(t){return(e,n)=>{const i=RS;return k(),re("div",null,[O(i)])}}}),Ai=t=>(t.install=e=>{const n=t.name;n&&e.component(n,t)},t);function LS(t,e=1,n="normal"){if(!t&&t!==0)return t;e<0&&(e=0);const i=Number(t);let r=(i*100).toFixed(e)+"%";return r!=="0.00"&&n==="yoy"&&i>0&&(r="+"+r),r}const as=(t,e=[])=>{if(t===null||typeof t!="object")return t;if(Object.prototype.toString.call(t)==="[object Date]")return new Date(t);if(Object.prototype.toString.call(t)==="[object RegExp]")return new RegExp(t);if(Object.prototype.toString.call(t)==="[object Error]")return new Error(t);const n=e.filter(r=>r.origin===t)[0];if(n)return n.newObj;const i=Array.isArray(t)?[]:{};return e.push({origin:t,newObj:i}),Object.keys(t).forEach(r=>{typeof t[r]=="object"?i[r]=as(t[r],e):i[r]=t[r]}),i},pd=typeof window<"u",OS=Ai(IS);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xu="164",DS=0,md=1,NS=2,rm=1,FS=2,ii=3,Ti=0,an=1,ai=2,Mi=0,kr=1,_s=2,vd=3,gd=4,US=5,Gi=100,BS=101,zS=102,kS=103,HS=104,VS=200,$S=201,GS=202,WS=203,Tc=204,Cc=205,XS=206,jS=207,qS=208,YS=209,KS=210,ZS=211,JS=212,QS=213,eM=214,tM=0,nM=1,iM=2,ys=3,rM=4,oM=5,aM=6,sM=7,om=0,lM=1,cM=2,Ei=0,uM=1,dM=2,fM=3,hM=4,pM=5,mM=6,vM=7,am=300,jr=301,qr=302,Ac=303,Pc=304,Ws=306,Rc=1e3,qi=1001,Ic=1002,Sn=1003,gM=1004,va=1005,Pn=1006,vl=1007,Yi=1008,Ci=1009,_M=1010,yM=1011,sm=1012,lm=1013,Yr=1014,bi=1015,Xs=1016,cm=1017,um=1018,ia=1020,xM=35902,bM=1021,SM=1022,zn=1023,MM=1024,EM=1025,Hr=1026,Bo=1027,wM=1028,dm=1029,TM=1030,fm=1031,hm=1033,gl=33776,_l=33777,yl=33778,xl=33779,_d=35840,yd=35841,xd=35842,bd=35843,Sd=36196,Md=37492,Ed=37496,wd=37808,Td=37809,Cd=37810,Ad=37811,Pd=37812,Rd=37813,Id=37814,Ld=37815,Od=37816,Dd=37817,Nd=37818,Fd=37819,Ud=37820,Bd=37821,bl=36492,zd=36494,kd=36495,CM=36283,Hd=36284,Vd=36285,$d=36286,AM=3200,PM=3201,pm=0,RM=1,yi="",Fn="srgb",Pi="srgb-linear",bu="display-p3",js="display-p3-linear",xs="linear",yt="srgb",bs="rec709",Ss="p3",vr=7680,Gd=519,IM=512,LM=513,OM=514,mm=515,DM=516,NM=517,FM=518,UM=519,Wd=35044,Xd="300 es",si=2e3,Ms=2001;class oo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ss=Math.PI/180,Lc=180/Math.PI;function ao(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function jt(t,e,n){return Math.max(e,Math.min(n,t))}function BM(t,e){return(t%e+e)%e}function Sl(t,e,n){return(1-n)*t+n*e}function mo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,n=0){Oe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,n,i,r,o,a,s,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,a,s,l,c)}set(e,n,i,r,o,a,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=n,u[4]=o,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,a=i[0],s=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],v=i[8],g=r[0],m=r[3],p=r[6],b=r[1],y=r[4],_=r[7],T=r[2],w=r[5],M=r[8];return o[0]=a*g+s*b+l*T,o[3]=a*m+s*y+l*w,o[6]=a*p+s*_+l*M,o[1]=c*g+u*b+d*T,o[4]=c*m+u*y+d*w,o[7]=c*p+u*_+d*M,o[2]=f*g+h*b+v*T,o[5]=f*m+h*y+v*w,o[8]=f*p+h*_+v*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*s*c-i*o*u+i*s*l+r*o*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],d=u*a-s*c,f=s*l-u*o,h=c*o-a*l,v=n*d+i*f+r*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(r*c-u*i)*g,e[2]=(s*i-r*a)*g,e[3]=f*g,e[4]=(u*n-r*l)*g,e[5]=(r*o-s*n)*g,e[6]=h*g,e[7]=(i*l-c*n)*g,e[8]=(a*n-i*o)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,a,s){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*a+c*s)+a+e,-r*c,r*l,-r*(-c*a+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(Ml.makeScale(e,n)),this}rotate(e){return this.premultiply(Ml.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ml.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ml=new rt;function vm(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Es(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function zM(){const t=Es("canvas");return t.style.display="block",t}const jd={};function kM(t){t in jd||(jd[t]=!0,console.warn(t))}const qd=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yd=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ga={[Pi]:{transfer:xs,primaries:bs,toReference:t=>t,fromReference:t=>t},[Fn]:{transfer:yt,primaries:bs,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[js]:{transfer:xs,primaries:Ss,toReference:t=>t.applyMatrix3(Yd),fromReference:t=>t.applyMatrix3(qd)},[bu]:{transfer:yt,primaries:Ss,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Yd),fromReference:t=>t.applyMatrix3(qd).convertLinearToSRGB()}},HM=new Set([Pi,js]),mt={enabled:!0,_workingColorSpace:Pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!HM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ga[e].toReference,r=ga[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ga[t].primaries},getTransfer:function(t){return t===yi?xs:ga[t].transfer}};function Vr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function El(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let gr;class VM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gr===void 0&&(gr=Es("canvas")),gr.width=e.width,gr.height=e.height;const i=gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Es("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Vr(o[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vr(n[i]/255)*255):n[i]=Vr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $M=0;class gm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=ao(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?o.push(wl(r[a].image)):o.push(wl(r[a]))}else o=wl(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function wl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?VM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GM=0;class sn extends oo{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=qi,r=qi,o=Pn,a=Yi,s=zn,l=Ci,c=sn.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=ao(),this.name="",this.source=new gm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==am)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rc:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case Ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rc:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case Ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=am;sn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,n=0,i=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,_=(h+1)/2,T=(p+1)/2,w=(u+f)/4,M=(d+g)/4,A=(v+m)/4;return y>_&&y>T?y<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(y),r=w/i,o=M/i):_>T?_<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(_),i=w/r,o=A/r):T<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(T),i=M/o,r=A/o),this.set(i,r,o,n),this}let b=Math.sqrt((m-v)*(m-v)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-v)/b,this.y=(d-g)/b,this.z=(f-u)/b,this.w=Math.acos((c+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WM extends oo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new kt(0,0,e,n),this.scissorTest=!1,this.viewport=new kt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let s=0;s<a;s++)this.textures[s]=o.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new gm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends WM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class _m extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class XM extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ra{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,a,s){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=o[a+0],h=o[a+1],v=o[a+2],g=o[a+3];if(s===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(s===1){e[n+0]=f,e[n+1]=h,e[n+2]=v,e[n+3]=g;return}if(d!==g||l!==f||c!==h||u!==v){let m=1-s;const p=l*f+c*h+u*v+d*g,b=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const T=Math.sqrt(y),w=Math.atan2(T,p*b);m=Math.sin(m*w)/T,s=Math.sin(s*w)/T}const _=s*b;if(l=l*m+f*_,c=c*m+h*_,u=u*m+v*_,d=d*m+g*_,m===1-s){const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,a){const s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=o[a],f=o[a+1],h=o[a+2],v=o[a+3];return e[n]=s*v+u*d+l*h-c*f,e[n+1]=l*v+u*f+c*d-s*h,e[n+2]=c*v+u*h+s*f-l*d,e[n+3]=u*v-s*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),d=s(o/2),f=l(i/2),h=l(r/2),v=l(o/2);switch(a){case"XYZ":this._x=f*u*d+c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d-f*h*v;break;case"YXZ":this._x=f*u*d+c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d+f*h*v;break;case"ZXY":this._x=f*u*d-c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d-f*h*v;break;case"ZYX":this._x=f*u*d-c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d+f*h*v;break;case"YZX":this._x=f*u*d+c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d-f*h*v;break;case"XZY":this._x=f*u*d-c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d+f*h*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],a=n[1],s=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+s+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(o-c)*h,this._z=(a-r)*h}else if(i>s&&i>d){const h=2*Math.sqrt(1+i-s-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(o+c)/h}else if(s>d){const h=2*Math.sqrt(1+s-i-d);this._w=(o-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-s);this._w=(a-r)/h,this._x=(o+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,a=e._w,s=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*s+r*c-o*l,this._y=r*u+a*l+o*s-i*c,this._z=o*u+a*c+i*l-r*s,this._w=a*u-i*s-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,a=this._w;let s=a*e._w+i*e._x+r*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const h=1-n;return this._w=h*a+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*o+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,a=e.y,s=e.z,l=e.w,c=2*(a*r-s*i),u=2*(s*n-o*r),d=2*(o*i-a*n);return this.x=n+l*c+a*d-s*u,this.y=i+l*u+s*c-o*d,this.z=r+l*d+o*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,a=n.x,s=n.y,l=n.z;return this.x=r*l-o*s,this.y=o*a-i*l,this.z=i*s-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tl.copy(this).projectOnVector(e),this.sub(Tl)}reflect(e){return this.sub(Tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tl=new H,Kd=new ra;class oa{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=o.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(o,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_a.copy(i.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}const r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),ya.subVectors(this.max,vo),_r.subVectors(e.a,vo),yr.subVectors(e.b,vo),xr.subVectors(e.c,vo),hi.subVectors(yr,_r),pi.subVectors(xr,yr),Di.subVectors(_r,xr);let n=[0,-hi.z,hi.y,0,-pi.z,pi.y,0,-Di.z,Di.y,hi.z,0,-hi.x,pi.z,0,-pi.x,Di.z,0,-Di.x,-hi.y,hi.x,0,-pi.y,pi.x,0,-Di.y,Di.x,0];return!Cl(n,_r,yr,xr,ya)||(n=[1,0,0,0,1,0,0,0,1],!Cl(n,_r,yr,xr,ya))?!1:(xa.crossVectors(hi,pi),n=[xa.x,xa.y,xa.z],Cl(n,_r,yr,xr,ya))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new H,new H,new H,new H,new H,new H,new H,new H],wn=new H,_a=new oa,_r=new H,yr=new H,xr=new H,hi=new H,pi=new H,Di=new H,vo=new H,ya=new H,xa=new H,Ni=new H;function Cl(t,e,n,i,r){for(let o=0,a=t.length-3;o<=a;o+=3){Ni.fromArray(t,o);const s=r.x*Math.abs(Ni.x)+r.y*Math.abs(Ni.y)+r.z*Math.abs(Ni.z),l=e.dot(Ni),c=n.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const jM=new oa,go=new H,Al=new H;class aa{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):jM.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);const n=go.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(Al)),this.expandByPoint(go.copy(e.center).sub(Al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new H,Pl=new H,ba=new H,mi=new H,Rl=new H,Sa=new H,Il=new H;class Su{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Kn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,n),Kn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Pl.copy(e).add(n).multiplyScalar(.5),ba.copy(n).sub(e).normalize(),mi.copy(this.origin).sub(Pl);const o=e.distanceTo(n)*.5,a=-this.direction.dot(ba),s=mi.dot(this.direction),l=-mi.dot(ba),c=mi.lengthSq(),u=Math.abs(1-a*a);let d,f,h,v;if(u>0)if(d=a*l-s,f=a*s-l,v=o*u,d>=0)if(f>=-v)if(f<=v){const g=1/u;d*=g,f*=g,h=d*(d+a*f+2*s)+f*(a*d+f+2*l)+c}else f=o,d=Math.max(0,-(a*f+s)),h=-d*d+f*(f+2*l)+c;else f=-o,d=Math.max(0,-(a*f+s)),h=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-a*o+s)),f=d>0?-o:Math.min(Math.max(-o,-l),o),h=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-o,-l),o),h=f*(f+2*l)+c):(d=Math.max(0,-(a*o+s)),f=d>0?o:Math.min(Math.max(-o,-l),o),h=-d*d+f*(f+2*l)+c);else f=a>0?-o:o,d=Math.max(0,-(a*f+s)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Pl).addScaledVector(ba,f),h}intersectSphere(e,n){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),s=i-a,l=i+a;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(o=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),d>=0?(s=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(s=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,n,i,r,o){Rl.subVectors(n,e),Sa.subVectors(i,e),Il.crossVectors(Rl,Sa);let a=this.direction.dot(Il),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;mi.subVectors(this.origin,e);const l=s*this.direction.dot(Sa.crossVectors(mi,Sa));if(l<0)return null;const c=s*this.direction.dot(Rl.cross(mi));if(c<0||l+c>a)return null;const u=-s*mi.dot(Il);return u<0?null:this.at(u/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,o,a,s,l,c,u,d,f,h,v,g,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,a,s,l,c,u,d,f,h,v,g,m)}set(e,n,i,r,o,a,s,l,c,u,d,f,h,v,g,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=o,p[5]=a,p[9]=s,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/br.setFromMatrixColumn(e,0).length(),o=1/br.setFromMatrixColumn(e,1).length(),a=1/br.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=a*u,h=a*d,v=s*u,g=s*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+v*c,n[5]=f-g*c,n[9]=-s*l,n[2]=g-f*c,n[6]=v+h*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,v=c*u,g=c*d;n[0]=f+g*s,n[4]=v*s-h,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-s,n[2]=h*s-v,n[6]=g+f*s,n[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,v=c*u,g=c*d;n[0]=f-g*s,n[4]=-a*d,n[8]=v+h*s,n[1]=h+v*s,n[5]=a*u,n[9]=g-f*s,n[2]=-a*c,n[6]=s,n[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,v=s*u,g=s*d;n[0]=l*u,n[4]=v*c-h,n[8]=f*c+g,n[1]=l*d,n[5]=g*c+f,n[9]=h*c-v,n[2]=-c,n[6]=s*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,v=s*l,g=s*c;n[0]=l*u,n[4]=g-f*d,n[8]=v*d+h,n[1]=d,n[5]=a*u,n[9]=-s*u,n[2]=-c*u,n[6]=h*d+v,n[10]=f-g*d}else if(e.order==="XZY"){const f=a*l,h=a*c,v=s*l,g=s*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+g,n[5]=a*u,n[9]=h*d-v,n[2]=v*d-h,n[6]=s*u,n[10]=g*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qM,e,YM)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),vi.crossVectors(i,un),vi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),vi.crossVectors(i,un)),vi.normalize(),Ma.crossVectors(un,vi),r[0]=vi.x,r[4]=Ma.x,r[8]=un.x,r[1]=vi.y,r[5]=Ma.y,r[9]=un.y,r[2]=vi.z,r[6]=Ma.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,a=i[0],s=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],v=i[2],g=i[6],m=i[10],p=i[14],b=i[3],y=i[7],_=i[11],T=i[15],w=r[0],M=r[4],A=r[8],S=r[12],x=r[1],I=r[5],$=r[9],L=r[13],B=r[2],D=r[6],W=r[10],ie=r[14],X=r[3],F=r[7],ee=r[11],he=r[15];return o[0]=a*w+s*x+l*B+c*X,o[4]=a*M+s*I+l*D+c*F,o[8]=a*A+s*$+l*W+c*ee,o[12]=a*S+s*L+l*ie+c*he,o[1]=u*w+d*x+f*B+h*X,o[5]=u*M+d*I+f*D+h*F,o[9]=u*A+d*$+f*W+h*ee,o[13]=u*S+d*L+f*ie+h*he,o[2]=v*w+g*x+m*B+p*X,o[6]=v*M+g*I+m*D+p*F,o[10]=v*A+g*$+m*W+p*ee,o[14]=v*S+g*L+m*ie+p*he,o[3]=b*w+y*x+_*B+T*X,o[7]=b*M+y*I+_*D+T*F,o[11]=b*A+y*$+_*W+T*ee,o[15]=b*S+y*L+_*ie+T*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],a=e[1],s=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+o*l*d-r*c*d-o*s*f+i*c*f+r*s*h-i*l*h)+g*(+n*l*h-n*c*f+o*a*f-r*a*h+r*c*u-o*l*u)+m*(+n*c*d-n*s*h-o*a*d+i*a*h+o*s*u-i*c*u)+p*(-r*s*u-n*l*d+n*s*f+r*a*d-i*a*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],v=e[12],g=e[13],m=e[14],p=e[15],b=d*m*c-g*f*c+g*l*h-s*m*h-d*l*p+s*f*p,y=v*f*c-u*m*c-v*l*h+a*m*h+u*l*p-a*f*p,_=u*g*c-v*d*c+v*s*h-a*g*h-u*s*p+a*d*p,T=v*d*l-u*g*l-v*s*f+a*g*f+u*s*m-a*d*m,w=n*b+i*y+r*_+o*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=b*M,e[1]=(g*f*o-d*m*o-g*r*h+i*m*h+d*r*p-i*f*p)*M,e[2]=(s*m*o-g*l*o+g*r*c-i*m*c-s*r*p+i*l*p)*M,e[3]=(d*l*o-s*f*o-d*r*c+i*f*c+s*r*h-i*l*h)*M,e[4]=y*M,e[5]=(u*m*o-v*f*o+v*r*h-n*m*h-u*r*p+n*f*p)*M,e[6]=(v*l*o-a*m*o-v*r*c+n*m*c+a*r*p-n*l*p)*M,e[7]=(a*f*o-u*l*o+u*r*c-n*f*c-a*r*h+n*l*h)*M,e[8]=_*M,e[9]=(v*d*o-u*g*o-v*i*h+n*g*h+u*i*p-n*d*p)*M,e[10]=(a*g*o-v*s*o+v*i*c-n*g*c-a*i*p+n*s*p)*M,e[11]=(u*s*o-a*d*o-u*i*c+n*d*c+a*i*h-n*s*h)*M,e[12]=T*M,e[13]=(u*g*r-v*d*r+v*i*f-n*g*f-u*i*m+n*d*m)*M,e[14]=(v*s*r-a*g*r-v*i*l+n*g*l+a*i*m-n*s*m)*M,e[15]=(a*d*r-u*s*r+u*i*l-n*d*l-a*i*f+n*s*f)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,a=e.x,s=e.y,l=e.z,c=o*a,u=o*s;return this.set(c*a+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*a,0,c*l-r*s,u*l+r*a,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,a=n._y,s=n._z,l=n._w,c=o+o,u=a+a,d=s+s,f=o*c,h=o*u,v=o*d,g=a*u,m=a*d,p=s*d,b=l*c,y=l*u,_=l*d,T=i.x,w=i.y,M=i.z;return r[0]=(1-(g+p))*T,r[1]=(h+_)*T,r[2]=(v-y)*T,r[3]=0,r[4]=(h-_)*w,r[5]=(1-(f+p))*w,r[6]=(m+b)*w,r[7]=0,r[8]=(v+y)*M,r[9]=(m-b)*M,r[10]=(1-(f+g))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=br.set(r[0],r[1],r[2]).length();const a=br.set(r[4],r[5],r[6]).length(),s=br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Tn.copy(this);const c=1/o,u=1/a,d=1/s;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,n.setFromRotationMatrix(Tn),i.x=o,i.y=a,i.z=s,this}makePerspective(e,n,i,r,o,a,s=si){const l=this.elements,c=2*o/(n-e),u=2*o/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let h,v;if(s===si)h=-(a+o)/(a-o),v=-2*a*o/(a-o);else if(s===Ms)h=-a/(a-o),v=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,a,s=si){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(a-o),f=(n+e)*c,h=(i+r)*u;let v,g;if(s===si)v=(a+o)*d,g=-2*d;else if(s===Ms)v=o*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const br=new H,Tn=new Ct,qM=new H(0,0,0),YM=new H(1,1,1),vi=new H,Ma=new H,un=new H,Zd=new Ct,Jd=new ra;class Vn{constructor(e=0,n=0,i=0,r=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],a=r[4],s=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(s,h));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jd.setFromEuler(this),this.setFromQuaternion(Jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class ym{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let KM=0;const Qd=new H,Sr=new ra,Zn=new Ct,Ea=new H,_o=new H,ZM=new H,JM=new ra,ef=new H(1,0,0),tf=new H(0,1,0),nf=new H(0,0,1),rf={type:"added"},QM={type:"removed"},Mr={type:"childadded",child:null},Ll={type:"childremoved",child:null};class Jt extends oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new H,n=new Vn,i=new ra,r=new H(1,1,1);function o(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new rt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ym,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Sr.setFromAxisAngle(e,n),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,n){return Sr.setFromAxisAngle(e,n),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(ef,e)}rotateY(e){return this.rotateOnAxis(tf,e)}rotateZ(e){return this.rotateOnAxis(nf,e)}translateOnAxis(e,n){return Qd.copy(e).applyQuaternion(this.quaternion),this.position.add(Qd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ef,e)}translateY(e){return this.translateOnAxis(tf,e)}translateZ(e){return this.translateOnAxis(nf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ea.copy(e):Ea.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(_o,Ea,this.up):Zn.lookAt(Ea,_o,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),Sr.setFromRotationMatrix(Zn),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rf),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(QM),Ll.child=e,this.dispatchEvent(Ll),Ll.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rf),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,ZM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,JM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++){const s=r[o];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(o(e.materials,this.material[l]));r.material=s}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(o(e.animations,l))}}if(n){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),v=a(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new H(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new H,Jn=new H,Ol=new H,Qn=new H,Er=new H,wr=new H,of=new H,Dl=new H,Nl=new H,Fl=new H;class Rn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Cn.subVectors(e,n),r.cross(Cn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Cn.subVectors(r,n),Jn.subVectors(i,n),Ol.subVectors(e,n);const a=Cn.dot(Cn),s=Cn.dot(Jn),l=Cn.dot(Ol),c=Jn.dot(Jn),u=Jn.dot(Ol),d=a*c-s*s;if(d===0)return o.set(0,0,0),null;const f=1/d,h=(c*l-s*u)*f,v=(a*u-s*l)*f;return o.set(1-h-v,v,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,n,i,r,o,a,s,l){return this.getBarycoord(e,n,i,r,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(s,Qn.z),l)}static isFrontFacing(e,n,i,r){return Cn.subVectors(i,n),Jn.subVectors(e,n),Cn.cross(Jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Cn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Rn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Rn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let a,s;Er.subVectors(r,i),wr.subVectors(o,i),Dl.subVectors(e,i);const l=Er.dot(Dl),c=wr.dot(Dl);if(l<=0&&c<=0)return n.copy(i);Nl.subVectors(e,r);const u=Er.dot(Nl),d=wr.dot(Nl);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Er,a);Fl.subVectors(e,o);const h=Er.dot(Fl),v=wr.dot(Fl);if(v>=0&&h<=v)return n.copy(o);const g=h*c-l*v;if(g<=0&&c>=0&&v<=0)return s=c/(c-v),n.copy(i).addScaledVector(wr,s);const m=u*v-h*d;if(m<=0&&d-u>=0&&h-v>=0)return of.subVectors(o,r),s=(d-u)/(d-u+(h-v)),n.copy(r).addScaledVector(of,s);const p=1/(m+g+f);return a=g*p,s=f*p,n.copy(i).addScaledVector(Er,a).addScaledVector(wr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},wa={h:0,s:0,l:0};function Ul(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ft{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=mt.workingColorSpace){return this.r=e,this.g=n,this.b=i,mt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=mt.workingColorSpace){if(e=BM(e,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,a=2*i-o;this.r=Ul(a,o,e+1/3),this.g=Ul(a,o,e),this.b=Ul(a,o,e-1/3)}return mt.toWorkingColorSpace(this,r),this}setStyle(e,n=Fn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const i=xm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}copyLinearToSRGB(e){return this.r=El(e.r),this.g=El(e.g),this.b=El(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return mt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(jt(Xt.r*255,0,255))*65536+Math.round(jt(Xt.g*255,0,255))*256+Math.round(jt(Xt.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=mt.workingColorSpace){mt.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,o=Xt.b,a=Math.max(i,r,o),s=Math.min(i,r,o);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const d=a-s;switch(c=u<=.5?d/(a+s):d/(2-a-s),a){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=mt.workingColorSpace){return mt.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Fn){mt.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+n,gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(gi),e.getHSL(wa);const i=Sl(gi.h,wa.h,n),r=Sl(gi.s,wa.s,n),o=Sl(gi.l,wa.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new ft;ft.NAMES=xm;let e1=0;class cr extends oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=kr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tc,this.blendDst=Cc,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Tc&&(i.blendSrc=this.blendSrc),this.blendDst!==Cc&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const s in o){const l=o[s];delete l.metadata,a.push(l)}return a}if(n){const o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mu extends cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=om,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new H,Ta=new Oe;class pn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return kM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ta.fromBufferAttribute(this,n),Ta.applyMatrix3(e),this.setXY(n,Ta.x,Ta.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=mo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=mo(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=mo(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=mo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=mo(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),o=nn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wd&&(e.usage=this.usage),e}}class bm extends pn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Sm extends pn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Qt extends pn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let t1=0;const xn=new Ct,Bl=new Jt,Tr=new H,dn=new oa,yo=new oa,Ft=new H;class ln extends oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vm(e)?Sm:bm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new rt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,n,i){return xn.makeTranslation(e,n,i),this.applyMatrix4(xn),this}scale(e,n,i){return xn.makeScale(e,n,i),this.applyMatrix4(xn),this}lookAt(e){return Bl.lookAt(e),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Qt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];dn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let o=0,a=n.length;o<a;o++){const s=n[o];yo.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(dn.min,yo.min),dn.expandByPoint(Ft),Ft.addVectors(dn.max,yo.max),dn.expandByPoint(Ft)):(dn.expandByPoint(yo.min),dn.expandByPoint(yo.max))}dn.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)Ft.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let o=0,a=n.length;o<a;o++){const s=n[o],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Ft.fromBufferAttribute(s,c),l&&(Tr.fromBufferAttribute(e,c),Ft.add(Tr)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),s=[],l=[];for(let A=0;A<i.count;A++)s[A]=new H,l[A]=new H;const c=new H,u=new H,d=new H,f=new Oe,h=new Oe,v=new Oe,g=new H,m=new H;function p(A,S,x){c.fromBufferAttribute(i,A),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,x),f.fromBufferAttribute(o,A),h.fromBufferAttribute(o,S),v.fromBufferAttribute(o,x),u.sub(c),d.sub(c),h.sub(f),v.sub(f);const I=1/(h.x*v.y-v.x*h.y);isFinite(I)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-h.y).multiplyScalar(I),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-v.x).multiplyScalar(I),s[A].add(g),s[S].add(g),s[x].add(g),l[A].add(m),l[S].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let A=0,S=b.length;A<S;++A){const x=b[A],I=x.start,$=x.count;for(let L=I,B=I+$;L<B;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new H,_=new H,T=new H,w=new H;function M(A){T.fromBufferAttribute(r,A),w.copy(T);const S=s[A];y.copy(S),y.sub(T.multiplyScalar(T.dot(S))).normalize(),_.crossVectors(w,S);const I=_.dot(l[A])<0?-1:1;a.setXYZW(A,y.x,y.y,y.z,I)}for(let A=0,S=b.length;A<S;++A){const x=b[A],I=x.start,$=x.count;for(let L=I,B=I+$;L<B;L+=3)M(e.getX(L+0)),M(e.getX(L+1)),M(e.getX(L+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new H,o=new H,a=new H,s=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let f=0,h=e.count;f<h;f+=3){const v=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,g),a.fromBufferAttribute(n,m),u.subVectors(a,o),d.subVectors(r,o),u.cross(d),s.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),s.add(u),l.add(u),c.add(u),i.setXYZ(v,s.x,s.y,s.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)r.fromBufferAttribute(n,f+0),o.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,o),d.subVectors(r,o),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,d=s.normalized,f=new c.constructor(l.length*u);let h=0,v=0;for(let g=0,m=l.length;g<m;g++){s.isInterleavedBufferAttribute?h=l[g]*s.data.stride+s.offset:h=l[g]*u;for(let p=0;p<u;p++)f[v++]=c[h++]}return new pn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ln,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);n.setAttribute(s,c)}const o=this.morphAttributes;for(const s in o){const l=[],c=o[s];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const af=new Ct,Fi=new Su,Ca=new aa,sf=new H,Cr=new H,Ar=new H,Pr=new H,zl=new H,Aa=new H,Pa=new Oe,Ra=new Oe,Ia=new Oe,lf=new H,cf=new H,uf=new H,La=new H,Oa=new H;class In extends Jt{constructor(e=new ln,n=new Mu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(o&&s){Aa.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=s[l],d=o[l];u!==0&&(zl.fromBufferAttribute(d,e),a?Aa.addScaledVector(zl,u):Aa.addScaledVector(zl.sub(n),u))}n.add(Aa)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(o),Fi.copy(e.ray).recast(e.near),!(Ca.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Ca,sf)===null||Fi.origin.distanceToSquared(sf)>(e.far-e.near)**2))&&(af.copy(o).invert(),Fi.copy(e.ray).applyMatrix4(af),!(i.boundingBox!==null&&Fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Fi)))}_computeIntersections(e,n,i){let r;const o=this.geometry,a=this.material,s=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,h=o.drawRange;if(s!==null)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=a[m.materialIndex],b=Math.max(m.start,h.start),y=Math.min(s.count,Math.min(m.start+m.count,h.start+h.count));for(let _=b,T=y;_<T;_+=3){const w=s.getX(_),M=s.getX(_+1),A=s.getX(_+2);r=Da(this,p,e,i,c,u,d,w,M,A),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,h.start),g=Math.min(s.count,h.start+h.count);for(let m=v,p=g;m<p;m+=3){const b=s.getX(m),y=s.getX(m+1),_=s.getX(m+2);r=Da(this,a,e,i,c,u,d,b,y,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=a[m.materialIndex],b=Math.max(m.start,h.start),y=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let _=b,T=y;_<T;_+=3){const w=_,M=_+1,A=_+2;r=Da(this,p,e,i,c,u,d,w,M,A),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let m=v,p=g;m<p;m+=3){const b=m,y=m+1,_=m+2;r=Da(this,a,e,i,c,u,d,b,y,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function n1(t,e,n,i,r,o,a,s){let l;if(e.side===an?l=i.intersectTriangle(a,o,r,!0,s):l=i.intersectTriangle(r,o,a,e.side===Ti,s),l===null)return null;Oa.copy(s),Oa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Oa);return c<n.near||c>n.far?null:{distance:c,point:Oa.clone(),object:t}}function Da(t,e,n,i,r,o,a,s,l,c){t.getVertexPosition(s,Cr),t.getVertexPosition(l,Ar),t.getVertexPosition(c,Pr);const u=n1(t,e,n,i,Cr,Ar,Pr,La);if(u){r&&(Pa.fromBufferAttribute(r,s),Ra.fromBufferAttribute(r,l),Ia.fromBufferAttribute(r,c),u.uv=Rn.getInterpolation(La,Cr,Ar,Pr,Pa,Ra,Ia,new Oe)),o&&(Pa.fromBufferAttribute(o,s),Ra.fromBufferAttribute(o,l),Ia.fromBufferAttribute(o,c),u.uv1=Rn.getInterpolation(La,Cr,Ar,Pr,Pa,Ra,Ia,new Oe)),a&&(lf.fromBufferAttribute(a,s),cf.fromBufferAttribute(a,l),uf.fromBufferAttribute(a,c),u.normal=Rn.getInterpolation(La,Cr,Ar,Pr,lf,cf,uf,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:s,b:l,c,normal:new H,materialIndex:0};Rn.getNormal(Cr,Ar,Pr,d.normal),u.face=d}return u}class sa extends ln{constructor(e=1,n=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const s=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;v("z","y","x",-1,-1,i,n,e,a,o,0),v("z","y","x",1,-1,i,n,-e,a,o,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,o,4),v("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function v(g,m,p,b,y,_,T,w,M,A,S){const x=_/M,I=T/A,$=_/2,L=T/2,B=w/2,D=M+1,W=A+1;let ie=0,X=0;const F=new H;for(let ee=0;ee<W;ee++){const he=ee*I-L;for(let ce=0;ce<D;ce++){const De=ce*x-$;F[g]=De*b,F[m]=he*y,F[p]=B,c.push(F.x,F.y,F.z),F[g]=0,F[m]=0,F[p]=w>0?1:-1,u.push(F.x,F.y,F.z),d.push(ce/M),d.push(1-ee/A),ie+=1}}for(let ee=0;ee<A;ee++)for(let he=0;he<M;he++){const ce=f+he+D*ee,De=f+he+D*(ee+1),Z=f+(he+1)+D*(ee+1),me=f+(he+1)+D*ee;l.push(ce,De,me),l.push(De,Z,me),X+=6}s.addGroup(h,X,S),h+=X,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Kr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=Kr(t[n]);for(const r in i)e[r]=i[r]}return e}function i1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Mm(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const r1={clone:Kr,merge:qt};var o1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o1,this.fragmentShader=a1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=i1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Em extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new H,df=new Oe,ff=new Oe;class bn extends Em{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lc*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,n){return this.getViewBounds(e,df,ff),n.subVectors(ff,df)}setViewOffset(e,n,i,r,o,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ss*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Rr=-90,Ir=1;class s1 extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(Rr,Ir,e,n);r.layers=this.layers,this.add(r);const o=new bn(Rr,Ir,e,n);o.layers=this.layers,this.add(o);const a=new bn(Rr,Ir,e,n);a.layers=this.layers,this.add(a);const s=new bn(Rr,Ir,e,n);s.layers=this.layers,this.add(s);const l=new bn(Rr,Ir,e,n);l.layers=this.layers,this.add(l);const c=new bn(Rr,Ir,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,a,s,l]=n;for(const c of n)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ms)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,s,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,s),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class wm extends sn{constructor(e,n,i,r,o,a,s,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:jr,super(e,n,i,r,o,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l1 extends ir{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wm(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new sa(5,5,5),o=new Ln({name:"CubemapFromEquirect",uniforms:Kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Mi});o.uniforms.tEquirect.value=n;const a=new In(r,o),s=n.minFilter;return n.minFilter===Yi&&(n.minFilter=Pn),new s1(1,10,this).update(e,a),n.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(o)}}const kl=new H,c1=new H,u1=new rt;class Vi{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=kl.subVectors(i,n).cross(c1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(kl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||u1.getNormalMatrix(e),r=this.coplanarPoint(kl).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new aa,Na=new H;class Tm{constructor(e=new Vi,n=new Vi,i=new Vi,r=new Vi,o=new Vi,a=new Vi){this.planes=[e,n,i,r,o,a]}set(e,n,i,r,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(i),s[3].copy(r),s[4].copy(o),s[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=si){const i=this.planes,r=e.elements,o=r[0],a=r[1],s=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],h=r[8],v=r[9],g=r[10],m=r[11],p=r[12],b=r[13],y=r[14],_=r[15];if(i[0].setComponents(l-o,f-c,m-h,_-p).normalize(),i[1].setComponents(l+o,f+c,m+h,_+p).normalize(),i[2].setComponents(l+a,f+u,m+v,_+b).normalize(),i[3].setComponents(l-a,f-u,m-v,_-b).normalize(),i[4].setComponents(l-s,f-d,m-g,_-y).normalize(),n===si)i[5].setComponents(l+s,f+d,m+g,_+y).normalize();else if(n===Ms)i[5].setComponents(s,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ui.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Na.x=r.normal.x>0?e.max.x:e.min.x,Na.y=r.normal.y>0?e.max.y:e.min.y,Na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cm(){let t=null,e=!1,n=null,i=null;function r(o,a){n(o,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function d1(t){const e=new WeakMap;function n(s,l){const c=s.array,u=s.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),s.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:d}}function i(s,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,s),d.count===-1&&f.length===0&&t.bufferSubData(c,0,u),f.length!==0){for(let h=0,v=f.length;h<v;h++){const g=f[h];t.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(t.deleteBuffer(l.buffer),e.delete(s))}function a(s,l){if(s.isGLBufferAttribute){const u=e.get(s);(!u||u.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);if(c===void 0)e.set(s,n(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,s,l),c.version=s.version}}return{get:r,remove:o,update:a}}class qs extends ln{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,a=n/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,d=e/s,f=n/l,h=[],v=[],g=[],m=[];for(let p=0;p<u;p++){const b=p*f-a;for(let y=0;y<c;y++){const _=y*d-o;v.push(_,-b,0),g.push(0,0,1),m.push(y/s),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<s;b++){const y=b+c*p,_=b+c*(p+1),T=b+1+c*(p+1),w=b+1+c*p;h.push(y,_,w),h.push(_,T,w)}this.setIndex(h),this.setAttribute("position",new Qt(v,3)),this.setAttribute("normal",new Qt(g,3)),this.setAttribute("uv",new Qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.widthSegments,e.heightSegments)}}var f1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,p1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,y1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,S1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,w1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,T1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,N1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,F1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,U1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,B1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V1="gl_FragColor = linearToOutputTexel( gl_FragColor );",$1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,G1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,j1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_E=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ME=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,CE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,AE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,PE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,NE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ew=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ow=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_w=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ew=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ww=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Aw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ow=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$w=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:f1,alphahash_pars_fragment:h1,alphamap_fragment:p1,alphamap_pars_fragment:m1,alphatest_fragment:v1,alphatest_pars_fragment:g1,aomap_fragment:_1,aomap_pars_fragment:y1,batching_pars_vertex:x1,batching_vertex:b1,begin_vertex:S1,beginnormal_vertex:M1,bsdfs:E1,iridescence_fragment:w1,bumpmap_pars_fragment:T1,clipping_planes_fragment:C1,clipping_planes_pars_fragment:A1,clipping_planes_pars_vertex:P1,clipping_planes_vertex:R1,color_fragment:I1,color_pars_fragment:L1,color_pars_vertex:O1,color_vertex:D1,common:N1,cube_uv_reflection_fragment:F1,defaultnormal_vertex:U1,displacementmap_pars_vertex:B1,displacementmap_vertex:z1,emissivemap_fragment:k1,emissivemap_pars_fragment:H1,colorspace_fragment:V1,colorspace_pars_fragment:$1,envmap_fragment:G1,envmap_common_pars_fragment:W1,envmap_pars_fragment:X1,envmap_pars_vertex:j1,envmap_physical_pars_fragment:rE,envmap_vertex:q1,fog_vertex:Y1,fog_pars_vertex:K1,fog_fragment:Z1,fog_pars_fragment:J1,gradientmap_pars_fragment:Q1,lightmap_pars_fragment:eE,lights_lambert_fragment:tE,lights_lambert_pars_fragment:nE,lights_pars_begin:iE,lights_toon_fragment:oE,lights_toon_pars_fragment:aE,lights_phong_fragment:sE,lights_phong_pars_fragment:lE,lights_physical_fragment:cE,lights_physical_pars_fragment:uE,lights_fragment_begin:dE,lights_fragment_maps:fE,lights_fragment_end:hE,logdepthbuf_fragment:pE,logdepthbuf_pars_fragment:mE,logdepthbuf_pars_vertex:vE,logdepthbuf_vertex:gE,map_fragment:_E,map_pars_fragment:yE,map_particle_fragment:xE,map_particle_pars_fragment:bE,metalnessmap_fragment:SE,metalnessmap_pars_fragment:ME,morphinstance_vertex:EE,morphcolor_vertex:wE,morphnormal_vertex:TE,morphtarget_pars_vertex:CE,morphtarget_vertex:AE,normal_fragment_begin:PE,normal_fragment_maps:RE,normal_pars_fragment:IE,normal_pars_vertex:LE,normal_vertex:OE,normalmap_pars_fragment:DE,clearcoat_normal_fragment_begin:NE,clearcoat_normal_fragment_maps:FE,clearcoat_pars_fragment:UE,iridescence_pars_fragment:BE,opaque_fragment:zE,packing:kE,premultiplied_alpha_fragment:HE,project_vertex:VE,dithering_fragment:$E,dithering_pars_fragment:GE,roughnessmap_fragment:WE,roughnessmap_pars_fragment:XE,shadowmap_pars_fragment:jE,shadowmap_pars_vertex:qE,shadowmap_vertex:YE,shadowmask_pars_fragment:KE,skinbase_vertex:ZE,skinning_pars_vertex:JE,skinning_vertex:QE,skinnormal_vertex:ew,specularmap_fragment:tw,specularmap_pars_fragment:nw,tonemapping_fragment:iw,tonemapping_pars_fragment:rw,transmission_fragment:ow,transmission_pars_fragment:aw,uv_pars_fragment:sw,uv_pars_vertex:lw,uv_vertex:cw,worldpos_vertex:uw,background_vert:dw,background_frag:fw,backgroundCube_vert:hw,backgroundCube_frag:pw,cube_vert:mw,cube_frag:vw,depth_vert:gw,depth_frag:_w,distanceRGBA_vert:yw,distanceRGBA_frag:xw,equirect_vert:bw,equirect_frag:Sw,linedashed_vert:Mw,linedashed_frag:Ew,meshbasic_vert:ww,meshbasic_frag:Tw,meshlambert_vert:Cw,meshlambert_frag:Aw,meshmatcap_vert:Pw,meshmatcap_frag:Rw,meshnormal_vert:Iw,meshnormal_frag:Lw,meshphong_vert:Ow,meshphong_frag:Dw,meshphysical_vert:Nw,meshphysical_frag:Fw,meshtoon_vert:Uw,meshtoon_frag:Bw,points_vert:zw,points_frag:kw,shadow_vert:Hw,shadow_frag:Vw,sprite_vert:$w,sprite_frag:Gw},Re={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Bn={basic:{uniforms:qt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:qt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ft(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:qt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:qt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:qt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ft(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:qt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:qt([Re.points,Re.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:qt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:qt([Re.common,Re.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:qt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:qt([Re.sprite,Re.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:qt([Re.common,Re.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:qt([Re.lights,Re.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Bn.physical={uniforms:qt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Fa={r:0,b:0,g:0},Bi=new Vn,Ww=new Ct;function Xw(t,e,n,i,r,o,a){const s=new ft(0);let l=o===!0?0:1,c,u,d=null,f=0,h=null;function v(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?n:e).get(y)),y}function g(b){let y=!1;const _=v(b);_===null?p(s,l):_&&_.isColor&&(p(_,1),y=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||y)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function m(b,y){const _=v(y);_&&(_.isCubeTexture||_.mapping===Ws)?(u===void 0&&(u=new In(new sa(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Kr(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Bi.copy(y.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ww.makeRotationFromEuler(Bi)),u.material.toneMapped=mt.getTransfer(_.colorSpace)!==yt,(d!==_||f!==_.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,h=t.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new In(new qs(2,2),new Ln({name:"BackgroundMaterial",uniforms:Kr(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=mt.getTransfer(_.colorSpace)!==yt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,h=t.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,y){b.getRGB(Fa,Mm(t)),i.buffers.color.setClear(Fa.r,Fa.g,Fa.b,y,a)}return{getClearColor:function(){return s},setClearColor:function(b,y=1){s.set(b),l=y,p(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(s,l)},render:g,addToRenderList:m}}function jw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let o=r,a=!1;function s(x,I,$,L,B){let D=!1;const W=d(L,$,I);o!==W&&(o=W,c(o.object)),D=h(x,L,$,B),D&&v(x,L,$,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,_(x,I,$,L),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function d(x,I,$){const L=$.wireframe===!0;let B=i[x.id];B===void 0&&(B={},i[x.id]=B);let D=B[I.id];D===void 0&&(D={},B[I.id]=D);let W=D[L];return W===void 0&&(W=f(l()),D[L]=W),W}function f(x){const I=[],$=[],L=[];for(let B=0;B<n;B++)I[B]=0,$[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:$,attributeDivisors:L,object:x,attributes:{},index:null}}function h(x,I,$,L){const B=o.attributes,D=I.attributes;let W=0;const ie=$.getAttributes();for(const X in ie)if(ie[X].location>=0){const ee=B[X];let he=D[X];if(he===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(he=x.instanceColor)),ee===void 0||ee.attribute!==he||he&&ee.data!==he.data)return!0;W++}return o.attributesNum!==W||o.index!==L}function v(x,I,$,L){const B={},D=I.attributes;let W=0;const ie=$.getAttributes();for(const X in ie)if(ie[X].location>=0){let ee=D[X];ee===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor));const he={};he.attribute=ee,ee&&ee.data&&(he.data=ee.data),B[X]=he,W++}o.attributes=B,o.attributesNum=W,o.index=L}function g(){const x=o.newAttributes;for(let I=0,$=x.length;I<$;I++)x[I]=0}function m(x){p(x,0)}function p(x,I){const $=o.newAttributes,L=o.enabledAttributes,B=o.attributeDivisors;$[x]=1,L[x]===0&&(t.enableVertexAttribArray(x),L[x]=1),B[x]!==I&&(t.vertexAttribDivisor(x,I),B[x]=I)}function b(){const x=o.newAttributes,I=o.enabledAttributes;for(let $=0,L=I.length;$<L;$++)I[$]!==x[$]&&(t.disableVertexAttribArray($),I[$]=0)}function y(x,I,$,L,B,D,W){W===!0?t.vertexAttribIPointer(x,I,$,B,D):t.vertexAttribPointer(x,I,$,L,B,D)}function _(x,I,$,L){g();const B=L.attributes,D=$.getAttributes(),W=I.defaultAttributeValues;for(const ie in D){const X=D[ie];if(X.location>=0){let F=B[ie];if(F===void 0&&(ie==="instanceMatrix"&&x.instanceMatrix&&(F=x.instanceMatrix),ie==="instanceColor"&&x.instanceColor&&(F=x.instanceColor)),F!==void 0){const ee=F.normalized,he=F.itemSize,ce=e.get(F);if(ce===void 0)continue;const De=ce.buffer,Z=ce.type,me=ce.bytesPerElement,Ee=Z===t.INT||Z===t.UNSIGNED_INT||F.gpuType===lm;if(F.isInterleavedBufferAttribute){const xe=F.data,Xe=xe.stride,ae=F.offset;if(xe.isInstancedInterleavedBuffer){for(let P=0;P<X.locationSize;P++)p(X.location+P,xe.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let P=0;P<X.locationSize;P++)m(X.location+P);t.bindBuffer(t.ARRAY_BUFFER,De);for(let P=0;P<X.locationSize;P++)y(X.location+P,he/X.locationSize,Z,ee,Xe*me,(ae+he/X.locationSize*P)*me,Ee)}else{if(F.isInstancedBufferAttribute){for(let xe=0;xe<X.locationSize;xe++)p(X.location+xe,F.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let xe=0;xe<X.locationSize;xe++)m(X.location+xe);t.bindBuffer(t.ARRAY_BUFFER,De);for(let xe=0;xe<X.locationSize;xe++)y(X.location+xe,he/X.locationSize,Z,ee,he*me,he/X.locationSize*xe*me,Ee)}}else if(W!==void 0){const ee=W[ie];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(X.location,ee);break;case 3:t.vertexAttrib3fv(X.location,ee);break;case 4:t.vertexAttrib4fv(X.location,ee);break;default:t.vertexAttrib1fv(X.location,ee)}}}}b()}function T(){A();for(const x in i){const I=i[x];for(const $ in I){const L=I[$];for(const B in L)u(L[B].object),delete L[B];delete I[$]}delete i[x]}}function w(x){if(i[x.id]===void 0)return;const I=i[x.id];for(const $ in I){const L=I[$];for(const B in L)u(L[B].object),delete L[B];delete I[$]}delete i[x.id]}function M(x){for(const I in i){const $=i[I];if($[x.id]===void 0)continue;const L=$[x.id];for(const B in L)u(L[B].object),delete L[B];delete $[x.id]}}function A(){S(),a=!0,o!==r&&(o=r,c(o.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:A,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function qw(t,e,n){let i;function r(c){i=c}function o(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function s(c,u,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<d;h++)this.render(c[h],u[h]);else{f.multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let v=0;v<d;v++)h+=u[v];n.update(h,i,1)}}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let v=0;v<c.length;v++)a(c[v],u[v],f[v]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g];for(let g=0;g<f.length;g++)n.update(v,i,f[g])}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function Yw(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==zn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(w){const M=w===Xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ci&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==bi&&!M)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:_,maxSamples:T}}function Kw(t){const e=this;let n=null,i=0,r=!1,o=!1;const a=new Vi,s=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const v=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!r||v===null||v.length===0||o&&!m)o?u(null):c();else{const b=o?0:i,y=b*4;let _=p.clippingState||null;l.value=_,_=u(v,f,y,h);for(let T=0;T!==y;++T)_[T]=n[T];p.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,v){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=h+g*4,b=f.matrixWorldInverse;s.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=h;y!==g;++y,_+=4)a.copy(d[y]).applyMatrix4(b,s),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Zw(t){let e=new WeakMap;function n(a,s){return s===Ac?a.mapping=jr:s===Pc&&(a.mapping=qr),a}function i(a){if(a&&a.isTexture){const s=a.mapping;if(s===Ac||s===Pc)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new l1(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Am extends Em{constructor(e=-1,n=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,a=i+e,s=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fr=4,hf=[.125,.215,.35,.446,.526,.582],Wi=20,Hl=new Am,pf=new ft;let Vl=null,$l=0,Gl=0,Wl=!1;const $i=(1+Math.sqrt(5))/2,Lr=1/$i,mf=[new H(-$i,Lr,0),new H($i,Lr,0),new H(-Lr,0,$i),new H(Lr,0,$i),new H(0,$i,-Lr),new H(0,$i,Lr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class vf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Vl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vl,$l,Gl),this._renderer.xr.enabled=Wl,e.scissorTest=!1,Ua(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===jr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Xs,format:zn,colorSpace:Pi,depthBuffer:!1},r=gf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gf(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jw(o)),this._blurMaterial=Qw(o,e,n)}return r}_compileMaterial(e){const n=new In(this._lodPlanes[0],e);this._renderer.compile(n,Hl)}_sceneToCubeUV(e,n,i,r){const s=new bn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(pf),u.toneMapping=Ei,u.autoClear=!1;const h=new Mu({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),v=new In(new sa,h);let g=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,g=!0):(h.color.copy(pf),g=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(s.up.set(0,l[p],0),s.lookAt(c[p],0,0)):b===1?(s.up.set(0,0,l[p]),s.lookAt(0,c[p],0)):(s.up.set(0,l[p],0),s.lookAt(0,0,c[p]));const y=this._cubeSize;Ua(r,b*y,p>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(v,s),u.render(e,s)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===jr||e.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_f());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new In(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const l=this._cubeSize;Ua(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Hl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),s=mf[(r-o-1)%mf.length];this._blur(e,o-1,o,a,s)}n.autoClear=i}_blur(e,n,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new In(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*Wi-1),g=o/v,m=isFinite(o)?1+Math.floor(u*g):Wi;m>Wi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const p=[];let b=0;for(let M=0;M<Wi;++M){const A=M/g,S=Math.exp(-A*A/2);p.push(S),M===0?b+=S:M<m&&(b+=2*S)}for(let M=0;M<p.length;M++)p[M]=p[M]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-i;const _=this._sizeLods[r],T=3*_*(r>y-Fr?r-y+Fr:0),w=4*(this._cubeSize-_);Ua(n,T,w,3*_,2*_),l.setRenderTarget(n),l.render(d,Hl)}}function Jw(t){const e=[],n=[],i=[];let r=t;const o=t-Fr+1+hf.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);n.push(s);let l=1/s;a>t-Fr?l=hf[a-t+Fr-1]:a===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,v=6,g=3,m=2,p=1,b=new Float32Array(g*v*h),y=new Float32Array(m*v*h),_=new Float32Array(p*v*h);for(let w=0;w<h;w++){const M=w%3*2/3-1,A=w>2?0:-1,S=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];b.set(S,g*v*w),y.set(f,m*v*w);const x=[w,w,w,w,w,w];_.set(x,p*v*w)}const T=new ln;T.setAttribute("position",new pn(b,g)),T.setAttribute("uv",new pn(y,m)),T.setAttribute("faceIndex",new pn(_,p)),e.push(T),r>Fr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function gf(t,e,n){const i=new ir(t,e,n);return i.texture.mapping=Ws,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ua(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Qw(t,e,n){const i=new Float32Array(Wi),r=new H(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function _f(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function yf(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Eu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eT(t){let e=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===Ac||l===Pc,u=l===jr||l===qr;if(c||u){let d=e.get(s);const f=d!==void 0?d.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==f)return n===null&&(n=new vf(t)),d=c?n.fromEquirectangular(s,d):n.fromCubemap(s,d),d.texture.pmremVersion=s.pmremVersion,e.set(s,d),d.texture;if(d!==void 0)return d.texture;{const h=s.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new vf(t)),d=c?n.fromEquirectangular(s):n.fromCubemap(s),d.texture.pmremVersion=s.pmremVersion,e.set(s,d),s.addEventListener("dispose",o),d.texture):null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function o(s){const l=s.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function tT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nT(t,e,n,i){const r={},o=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}f.removeEventListener("dispose",a),delete r[f.id];const h=o.get(f);h&&(e.remove(h),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function s(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],t.ARRAY_BUFFER);const h=d.morphAttributes;for(const v in h){const g=h[v];for(let m=0,p=g.length;m<p;m++)e.update(g[m],t.ARRAY_BUFFER)}}function c(d){const f=[],h=d.index,v=d.attributes.position;let g=0;if(h!==null){const b=h.array;g=h.version;for(let y=0,_=b.length;y<_;y+=3){const T=b[y+0],w=b[y+1],M=b[y+2];f.push(T,w,w,M,M,T)}}else if(v!==void 0){const b=v.array;g=v.version;for(let y=0,_=b.length/3-1;y<_;y+=3){const T=y+0,w=y+1,M=y+2;f.push(T,w,w,M,M,T)}}else return;const m=new(vm(f)?Sm:bm)(f,1);m.version=g;const p=o.get(d);p&&e.remove(p),o.set(d,m)}function u(d){const f=o.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return o.get(d)}return{get:s,update:l,getWireframeAttribute:u}}function iT(t,e,n){let i;function r(f){i=f}let o,a;function s(f){o=f.type,a=f.bytesPerElement}function l(f,h){t.drawElements(i,h,o,f*a),n.update(h,i,1)}function c(f,h,v){v!==0&&(t.drawElementsInstanced(i,h,o,f*a,v),n.update(h,i,v))}function u(f,h,v){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<v;m++)this.render(f[m]/a,h[m]);else{g.multiDrawElementsWEBGL(i,h,0,o,f,0,v);let m=0;for(let p=0;p<v;p++)m+=h[p];n.update(m,i,1)}}function d(f,h,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,h[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,o,f,0,g,0,v);let p=0;for(let b=0;b<v;b++)p+=h[b];for(let b=0;b<g.length;b++)n.update(p,i,g[b])}}this.setMode=r,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function rT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,s){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=s*(o/3);break;case t.LINES:n.lines+=s*(o/2);break;case t.LINE_STRIP:n.lines+=s*(o-1);break;case t.LINE_LOOP:n.lines+=s*o;break;case t.POINTS:n.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function oT(t,e,n){const i=new WeakMap,r=new kt;function o(a,s,l){const c=a.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(s);if(f===void 0||f.count!==d){let S=function(){M.dispose(),i.delete(s),s.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const h=s.morphAttributes.position!==void 0,v=s.morphAttributes.normal!==void 0,g=s.morphAttributes.color!==void 0,m=s.morphAttributes.position||[],p=s.morphAttributes.normal||[],b=s.morphAttributes.color||[];let y=0;h===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let _=s.attributes.position.count*y,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const w=new Float32Array(_*T*4*d),M=new _m(w,_,T,d);M.type=bi,M.needsUpdate=!0;const A=y*4;for(let x=0;x<d;x++){const I=m[x],$=p[x],L=b[x],B=_*T*4*x;for(let D=0;D<I.count;D++){const W=D*A;h===!0&&(r.fromBufferAttribute(I,D),w[B+W+0]=r.x,w[B+W+1]=r.y,w[B+W+2]=r.z,w[B+W+3]=0),v===!0&&(r.fromBufferAttribute($,D),w[B+W+4]=r.x,w[B+W+5]=r.y,w[B+W+6]=r.z,w[B+W+7]=0),g===!0&&(r.fromBufferAttribute(L,D),w[B+W+8]=r.x,w[B+W+9]=r.y,w[B+W+10]=r.z,w[B+W+11]=L.itemSize===4?r.w:1)}}f={count:d,texture:M,size:new Oe(_,T)},i.set(s,f),s.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let h=0;for(let g=0;g<c.length;g++)h+=c[g];const v=s.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:o}}function aT(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:a}}class Pm extends sn{constructor(e,n,i,r,o,a,s,l,c,u){if(u=u!==void 0?u:Hr,u!==Hr&&u!==Bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hr&&(i=Yr),i===void 0&&u===Bo&&(i=ia),super(null,r,o,a,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Rm=new sn,Im=new Pm(1,1);Im.compareFunction=mm;const Lm=new _m,Om=new XM,Dm=new wm,xf=[],bf=[],Sf=new Float32Array(16),Mf=new Float32Array(9),Ef=new Float32Array(4);function so(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=xf[r];if(o===void 0&&(o=new Float32Array(r),xf[r]=o),e!==0){i.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=n,t[a].toArray(o,s)}return o}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ys(t,e){let n=bf[e];n===void 0&&(n=new Int32Array(e),bf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function sT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function dT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Ot(n,i))return;Ef.set(i),t.uniformMatrix2fv(this.addr,!1,Ef),Dt(n,i)}}function fT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Ot(n,i))return;Mf.set(i),t.uniformMatrix3fv(this.addr,!1,Mf),Dt(n,i)}}function hT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Ot(n,i))return;Sf.set(i),t.uniformMatrix4fv(this.addr,!1,Sf),Dt(n,i)}}function pT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function _T(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?Im:Rm;n.setTexture2D(e||o,r)}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Om,r)}function ET(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Dm,r)}function wT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Lm,r)}function TT(t){switch(t){case 5126:return sT;case 35664:return lT;case 35665:return cT;case 35666:return uT;case 35674:return dT;case 35675:return fT;case 35676:return hT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return vT;case 35669:case 35673:return gT;case 5125:return _T;case 36294:return yT;case 36295:return xT;case 36296:return bT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return wT}}function CT(t,e){t.uniform1fv(this.addr,e)}function AT(t,e){const n=so(e,this.size,2);t.uniform2fv(this.addr,n)}function PT(t,e){const n=so(e,this.size,3);t.uniform3fv(this.addr,n)}function RT(t,e){const n=so(e,this.size,4);t.uniform4fv(this.addr,n)}function IT(t,e){const n=so(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function LT(t,e){const n=so(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function OT(t,e){const n=so(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function DT(t,e){t.uniform1iv(this.addr,e)}function NT(t,e){t.uniform2iv(this.addr,e)}function FT(t,e){t.uniform3iv(this.addr,e)}function UT(t,e){t.uniform4iv(this.addr,e)}function BT(t,e){t.uniform1uiv(this.addr,e)}function zT(t,e){t.uniform2uiv(this.addr,e)}function kT(t,e){t.uniform3uiv(this.addr,e)}function HT(t,e){t.uniform4uiv(this.addr,e)}function VT(t,e,n){const i=this.cache,r=e.length,o=Ys(n,r);Ot(i,o)||(t.uniform1iv(this.addr,o),Dt(i,o));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Rm,o[a])}function $T(t,e,n){const i=this.cache,r=e.length,o=Ys(n,r);Ot(i,o)||(t.uniform1iv(this.addr,o),Dt(i,o));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Om,o[a])}function GT(t,e,n){const i=this.cache,r=e.length,o=Ys(n,r);Ot(i,o)||(t.uniform1iv(this.addr,o),Dt(i,o));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Dm,o[a])}function WT(t,e,n){const i=this.cache,r=e.length,o=Ys(n,r);Ot(i,o)||(t.uniform1iv(this.addr,o),Dt(i,o));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Lm,o[a])}function XT(t){switch(t){case 5126:return CT;case 35664:return AT;case 35665:return PT;case 35666:return RT;case 35674:return IT;case 35675:return LT;case 35676:return OT;case 5124:case 35670:return DT;case 35667:case 35671:return NT;case 35668:case 35672:return FT;case 35669:case 35673:return UT;case 5125:return BT;case 36294:return zT;case 36295:return kT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return WT}}class jT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=TT(n.type)}}class qT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XT(n.type)}}class YT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(e,n[s.id],i)}}}const Xl=/(\w+)(\])?(\[|\.)?/g;function wf(t,e){t.seq.push(e),t.map[e.id]=e}function KT(t,e,n){const i=t.name,r=i.length;for(Xl.lastIndex=0;;){const o=Xl.exec(i),a=Xl.lastIndex;let s=o[1];const l=o[2]==="]",c=o[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===r){wf(n,c===void 0?new jT(s,t,e):new qT(s,t,e));break}else{let d=n.map[s];d===void 0&&(d=new YT(s),wf(n,d)),n=d}}}class ls{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),a=e.getUniformLocation(n,o.name);KT(o,a,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,a=n.length;o!==a;++o){const s=n[o],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Tf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ZT=37297;let JT=0;function QT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let a=r;a<o;a++){const s=a+1;i.push(`${s===e?">":" "} ${s}: ${n[a]}`)}return i.join(`
`)}function eC(t){const e=mt.getPrimaries(mt.workingColorSpace),n=mt.getPrimaries(t);let i;switch(e===n?i="":e===Ss&&n===bs?i="LinearDisplayP3ToLinearSRGB":e===bs&&n===Ss&&(i="LinearSRGBToLinearDisplayP3"),t){case Pi:case js:return[i,"LinearTransferOETF"];case Fn:case bu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Cf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+QT(t.getShaderSource(e),a)}else return r}function tC(t,e){const n=eC(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function nC(t,e){let n;switch(e){case uM:n="Linear";break;case dM:n="Reinhard";break;case fM:n="OptimizedCineon";break;case hM:n="ACESFilmic";break;case mM:n="AgX";break;case vM:n="Neutral";break;case pM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function iC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function rC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function oC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),a=o.name;let s=1;o.type===t.FLOAT_MAT2&&(s=2),o.type===t.FLOAT_MAT3&&(s=3),o.type===t.FLOAT_MAT4&&(s=4),n[a]={type:o.type,location:t.getAttribLocation(e,a),locationSize:s}}return n}function wo(t){return t!==""}function Af(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(t){return t.replace(aC,lC)}const sC=new Map;function lC(t,e){let n=it[e];if(n===void 0){const i=sC.get(e);if(i!==void 0)n=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Oc(n)}const cC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rf(t){return t.replace(cC,uC)}function uC(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function If(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===rm?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===FS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function fC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case jr:case qr:e="ENVMAP_TYPE_CUBE";break;case Ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}function pC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case om:e="ENVMAP_BLENDING_MULTIPLY";break;case lM:e="ENVMAP_BLENDING_MIX";break;case cM:e="ENVMAP_BLENDING_ADD";break}return e}function mC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function vC(t,e,n,i){const r=t.getContext(),o=n.defines;let a=n.vertexShader,s=n.fragmentShader;const l=dC(n),c=fC(n),u=hC(n),d=pC(n),f=mC(n),h=iC(n),v=rC(o),g=r.createProgram();let m,p,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(wo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(wo).join(`
`),p.length>0&&(p+=`
`)):(m=[If(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),p=[If(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ei?"#define TONE_MAPPING":"",n.toneMapping!==Ei?it.tonemapping_pars_fragment:"",n.toneMapping!==Ei?nC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,tC("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wo).join(`
`)),a=Oc(a),a=Af(a,n),a=Pf(a,n),s=Oc(s),s=Af(s,n),s=Pf(s,n),a=Rf(a),s=Rf(s),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=b+m+a,_=b+p+s,T=Tf(r,r.VERTEX_SHADER,y),w=Tf(r,r.FRAGMENT_SHADER,_);r.attachShader(g,T),r.attachShader(g,w),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function M(I){if(t.debug.checkShaderErrors){const $=r.getProgramInfoLog(g).trim(),L=r.getShaderInfoLog(T).trim(),B=r.getShaderInfoLog(w).trim();let D=!0,W=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,T,w);else{const ie=Cf(r,T,"vertex"),X=Cf(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+$+`
`+ie+`
`+X)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(L===""||B==="")&&(W=!1);W&&(I.diagnostics={runnable:D,programLog:$,vertexShader:{log:L,prefix:m},fragmentShader:{log:B,prefix:p}})}r.deleteShader(T),r.deleteShader(w),A=new ls(r,g),S=oC(r,g)}let A;this.getUniforms=function(){return A===void 0&&M(this),A};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(g,ZT)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=w,this}let gC=0;class _C{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new yC(e),n.set(e,i)),i}}class yC{constructor(e){this.id=gC++,this.code=e,this.usedTimes=0}}function xC(t,e,n,i,r,o,a){const s=new ym,l=new _C,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let h=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,I,$,L){const B=$.fog,D=L.geometry,W=S.isMeshStandardMaterial?$.environment:null,ie=(S.isMeshStandardMaterial?n:e).get(S.envMap||W),X=ie&&ie.mapping===Ws?ie.image.height:null,F=v[S.type];S.precision!==null&&(h=r.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const ee=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,he=ee!==void 0?ee.length:0;let ce=0;D.morphAttributes.position!==void 0&&(ce=1),D.morphAttributes.normal!==void 0&&(ce=2),D.morphAttributes.color!==void 0&&(ce=3);let De,Z,me,Ee;if(F){const dt=Bn[F];De=dt.vertexShader,Z=dt.fragmentShader}else De=S.vertexShader,Z=S.fragmentShader,l.update(S),me=l.getVertexShaderID(S),Ee=l.getFragmentShaderID(S);const xe=t.getRenderTarget(),Xe=L.isInstancedMesh===!0,ae=L.isBatchedMesh===!0,P=!!S.map,te=!!S.matcap,U=!!ie,j=!!S.aoMap,Y=!!S.lightMap,de=!!S.bumpMap,oe=!!S.normalMap,Me=!!S.displacementMap,we=!!S.emissiveMap,R=!!S.metalnessMap,E=!!S.roughnessMap,K=S.anisotropy>0,le=S.clearcoat>0,ge=S.dispersion>0,pe=S.iridescence>0,He=S.sheen>0,Pe=S.transmission>0,Ae=K&&!!S.anisotropyMap,Je=le&&!!S.clearcoatMap,Te=le&&!!S.clearcoatNormalMap,Ve=le&&!!S.clearcoatRoughnessMap,at=pe&&!!S.iridescenceMap,je=pe&&!!S.iridescenceThicknessMap,Fe=He&&!!S.sheenColorMap,tt=He&&!!S.sheenRoughnessMap,ct=!!S.specularMap,Mt=!!S.specularColorMap,nt=!!S.specularIntensityMap,z=Pe&&!!S.transmissionMap,_e=Pe&&!!S.thicknessMap,ue=!!S.gradientMap,Le=!!S.alphaMap,Ne=S.alphaTest>0,ut=!!S.alphaHash,_t=!!S.extensions;let Et=Ei;S.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Et=t.toneMapping);const zt={shaderID:F,shaderType:S.type,shaderName:S.name,vertexShader:De,fragmentShader:Z,defines:S.defines,customVertexShaderID:me,customFragmentShaderID:Ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:ae,instancing:Xe,instancingColor:Xe&&L.instanceColor!==null,instancingMorph:Xe&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:xe===null?t.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Pi,alphaToCoverage:!!S.alphaToCoverage,map:P,matcap:te,envMap:U,envMapMode:U&&ie.mapping,envMapCubeUVHeight:X,aoMap:j,lightMap:Y,bumpMap:de,normalMap:oe,displacementMap:f&&Me,emissiveMap:we,normalMapObjectSpace:oe&&S.normalMapType===RM,normalMapTangentSpace:oe&&S.normalMapType===pm,metalnessMap:R,roughnessMap:E,anisotropy:K,anisotropyMap:Ae,clearcoat:le,clearcoatMap:Je,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ve,dispersion:ge,iridescence:pe,iridescenceMap:at,iridescenceThicknessMap:je,sheen:He,sheenColorMap:Fe,sheenRoughnessMap:tt,specularMap:ct,specularColorMap:Mt,specularIntensityMap:nt,transmission:Pe,transmissionMap:z,thicknessMap:_e,gradientMap:ue,opaque:S.transparent===!1&&S.blending===kr&&S.alphaToCoverage===!1,alphaMap:Le,alphaTest:Ne,alphaHash:ut,combine:S.combine,mapUv:P&&g(S.map.channel),aoMapUv:j&&g(S.aoMap.channel),lightMapUv:Y&&g(S.lightMap.channel),bumpMapUv:de&&g(S.bumpMap.channel),normalMapUv:oe&&g(S.normalMap.channel),displacementMapUv:Me&&g(S.displacementMap.channel),emissiveMapUv:we&&g(S.emissiveMap.channel),metalnessMapUv:R&&g(S.metalnessMap.channel),roughnessMapUv:E&&g(S.roughnessMap.channel),anisotropyMapUv:Ae&&g(S.anisotropyMap.channel),clearcoatMapUv:Je&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Te&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:je&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:tt&&g(S.sheenRoughnessMap.channel),specularMapUv:ct&&g(S.specularMap.channel),specularColorMapUv:Mt&&g(S.specularColorMap.channel),specularIntensityMapUv:nt&&g(S.specularIntensityMap.channel),transmissionMapUv:z&&g(S.transmissionMap.channel),thicknessMapUv:_e&&g(S.thicknessMap.channel),alphaMapUv:Le&&g(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(oe||K),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(P||Le),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:ce,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Et,useLegacyLights:t._useLegacyLights,decodeVideoTexture:P&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===yt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ai,flipSided:S.side===an,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:_t&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:_t&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)x.push(I),x.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(b(x,S),y(x,S),x.push(t.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function b(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function y(S,x){s.disableAll(),x.supportsVertexTextures&&s.enable(0),x.instancing&&s.enable(1),x.instancingColor&&s.enable(2),x.instancingMorph&&s.enable(3),x.matcap&&s.enable(4),x.envMap&&s.enable(5),x.normalMapObjectSpace&&s.enable(6),x.normalMapTangentSpace&&s.enable(7),x.clearcoat&&s.enable(8),x.iridescence&&s.enable(9),x.alphaTest&&s.enable(10),x.vertexColors&&s.enable(11),x.vertexAlphas&&s.enable(12),x.vertexUv1s&&s.enable(13),x.vertexUv2s&&s.enable(14),x.vertexUv3s&&s.enable(15),x.vertexTangents&&s.enable(16),x.anisotropy&&s.enable(17),x.alphaHash&&s.enable(18),x.batching&&s.enable(19),x.dispersion&&s.enable(20),S.push(s.mask),s.disableAll(),x.fog&&s.enable(0),x.useFog&&s.enable(1),x.flatShading&&s.enable(2),x.logarithmicDepthBuffer&&s.enable(3),x.skinning&&s.enable(4),x.morphTargets&&s.enable(5),x.morphNormals&&s.enable(6),x.morphColors&&s.enable(7),x.premultipliedAlpha&&s.enable(8),x.shadowMapEnabled&&s.enable(9),x.useLegacyLights&&s.enable(10),x.doubleSided&&s.enable(11),x.flipSided&&s.enable(12),x.useDepthPacking&&s.enable(13),x.dithering&&s.enable(14),x.transmission&&s.enable(15),x.sheen&&s.enable(16),x.opaque&&s.enable(17),x.pointsUvs&&s.enable(18),x.decodeVideoTexture&&s.enable(19),x.alphaToCoverage&&s.enable(20),S.push(s.mask)}function _(S){const x=v[S.type];let I;if(x){const $=Bn[x];I=r1.clone($.uniforms)}else I=S.uniforms;return I}function T(S,x){let I;for(let $=0,L=u.length;$<L;$++){const B=u[$];if(B.cacheKey===x){I=B,++I.usedTimes;break}}return I===void 0&&(I=new vC(t,x,S,o),u.push(I)),I}function w(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:T,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:A}}function bC(){let t=new WeakMap;function e(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function n(o){t.delete(o)}function i(o,a,s){t.get(o)[a]=s}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function SC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Lf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Of(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function a(d,f,h,v,g,m){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},t[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=g,p.group=m),e++,p}function s(d,f,h,v,g,m){const p=a(d,f,h,v,g,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(d,f,h,v,g,m){const p=a(d,f,h,v,g,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(d,f){n.length>1&&n.sort(d||SC),i.length>1&&i.sort(f||Lf),r.length>1&&r.sort(f||Lf)}function u(){for(let d=e,f=t.length;d<f;d++){const h=t[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:s,unshift:l,finish:u,sort:c}}function MC(){let t=new WeakMap;function e(i,r){const o=t.get(i);let a;return o===void 0?(a=new Of,t.set(i,[a])):r>=o.length?(a=new Of,o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function EC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new ft};break;case"SpotLight":n={position:new H,direction:new H,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":n={color:new ft,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function wC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let TC=0;function CC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function AC(t){const e=new EC,n=wC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,o=new Ct,a=new Ct;function s(c,u){let d=0,f=0,h=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let v=0,g=0,m=0,p=0,b=0,y=0,_=0,T=0,w=0,M=0,A=0;c.sort(CC);const S=u===!0?Math.PI:1;for(let I=0,$=c.length;I<$;I++){const L=c[I],B=L.color,D=L.intensity,W=L.distance,ie=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=B.r*D*S,f+=B.g*D*S,h+=B.b*D*S;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],D);A++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){const F=L.shadow,ee=n.get(L);ee.shadowBias=F.bias,ee.shadowNormalBias=F.normalBias,ee.shadowRadius=F.radius,ee.shadowMapSize=F.mapSize,i.directionalShadow[v]=ee,i.directionalShadowMap[v]=ie,i.directionalShadowMatrix[v]=L.shadow.matrix,y++}i.directional[v]=X,v++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(D*S),X.distance=W,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[m]=X;const F=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,F.updateMatrices(L),L.castShadow&&M++),i.spotLightMatrix[m]=F.matrix,L.castShadow){const ee=n.get(L);ee.shadowBias=F.bias,ee.shadowNormalBias=F.normalBias,ee.shadowRadius=F.radius,ee.shadowMapSize=F.mapSize,i.spotShadow[m]=ee,i.spotShadowMap[m]=ie,T++}m++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(B).multiplyScalar(D),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=X,p++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*S),X.distance=L.distance,X.decay=L.decay,L.castShadow){const F=L.shadow,ee=n.get(L);ee.shadowBias=F.bias,ee.shadowNormalBias=F.normalBias,ee.shadowRadius=F.radius,ee.shadowMapSize=F.mapSize,ee.shadowCameraNear=F.camera.near,ee.shadowCameraFar=F.camera.far,i.pointShadow[g]=ee,i.pointShadowMap[g]=ie,i.pointShadowMatrix[g]=L.shadow.matrix,_++}i.point[g]=X,g++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(D*S),X.groundColor.copy(L.groundColor).multiplyScalar(D*S),i.hemi[b]=X,b++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==v||x.pointLength!==g||x.spotLength!==m||x.rectAreaLength!==p||x.hemiLength!==b||x.numDirectionalShadows!==y||x.numPointShadows!==_||x.numSpotShadows!==T||x.numSpotMaps!==w||x.numLightProbes!==A)&&(i.directional.length=v,i.spot.length=m,i.rectArea.length=p,i.point.length=g,i.hemi.length=b,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=T+w-M,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=A,x.directionalLength=v,x.pointLength=g,x.spotLength=m,x.rectAreaLength=p,x.hemiLength=b,x.numDirectionalShadows=y,x.numPointShadows=_,x.numSpotShadows=T,x.numSpotMaps=w,x.numLightProbes=A,i.version=TC++)}function l(c,u){let d=0,f=0,h=0,v=0,g=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const y=c[p];if(y.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(y.isSpotLight){const _=i.spot[h];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),h++}else if(y.isRectAreaLight){const _=i.rectArea[v];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const _=i.hemi[g];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:s,setupView:l,state:i}}function Df(t){const e=new AC(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function s(u){e.setup(n,u)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:s,setupLightsView:l,pushLight:o,pushShadow:a}}function PC(t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let s;return a===void 0?(s=new Df(t),e.set(r,[s])):o>=a.length?(s=new Df(t),a.push(s)):s=a[o],s}function i(){e=new WeakMap}return{get:n,dispose:i}}class RC extends cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IC extends cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const LC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DC(t,e,n){let i=new Tm;const r=new Oe,o=new Oe,a=new kt,s=new RC({depthPacking:PM}),l=new IC,c={},u=n.maxTextureSize,d={[Ti]:an,[an]:Ti,[ai]:ai},f=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:LC,fragmentShader:OC}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const v=new ln;v.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new In(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rm;let p=this.type;this.render=function(w,M,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=t.getRenderTarget(),x=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),$=t.state;$.setBlending(Mi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const L=p!==ii&&this.type===ii,B=p===ii&&this.type!==ii;for(let D=0,W=w.length;D<W;D++){const ie=w[D],X=ie.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const F=X.getFrameExtents();if(r.multiply(F),o.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/F.x),r.x=o.x*F.x,X.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/F.y),r.y=o.y*F.y,X.mapSize.y=o.y)),X.map===null||L===!0||B===!0){const he=this.type!==ii?{minFilter:Sn,magFilter:Sn}:{};X.map!==null&&X.map.dispose(),X.map=new ir(r.x,r.y,he),X.map.texture.name=ie.name+".shadowMap",X.camera.updateProjectionMatrix()}t.setRenderTarget(X.map),t.clear();const ee=X.getViewportCount();for(let he=0;he<ee;he++){const ce=X.getViewport(he);a.set(o.x*ce.x,o.y*ce.y,o.x*ce.z,o.y*ce.w),$.viewport(a),X.updateMatrices(ie,he),i=X.getFrustum(),_(M,A,X.camera,ie,this.type)}X.isPointLightShadow!==!0&&this.type===ii&&b(X,A),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(S,x,I)};function b(w,M){const A=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ir(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(M,null,A,f,g,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(M,null,A,h,g,null)}function y(w,M,A,S){let x=null;const I=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)x=I;else if(x=A.isPointLight===!0?l:s,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const $=x.uuid,L=M.uuid;let B=c[$];B===void 0&&(B={},c[$]=B);let D=B[L];D===void 0&&(D=x.clone(),B[L]=D,M.addEventListener("dispose",T)),x=D}if(x.visible=M.visible,x.wireframe=M.wireframe,S===ii?x.side=M.shadowSide!==null?M.shadowSide:M.side:x.side=M.shadowSide!==null?M.shadowSide:d[M.side],x.alphaMap=M.alphaMap,x.alphaTest=M.alphaTest,x.map=M.map,x.clipShadows=M.clipShadows,x.clippingPlanes=M.clippingPlanes,x.clipIntersection=M.clipIntersection,x.displacementMap=M.displacementMap,x.displacementScale=M.displacementScale,x.displacementBias=M.displacementBias,x.wireframeLinewidth=M.wireframeLinewidth,x.linewidth=M.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const $=t.properties.get(x);$.light=A}return x}function _(w,M,A,S,x){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===ii)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const L=e.update(w),B=w.material;if(Array.isArray(B)){const D=L.groups;for(let W=0,ie=D.length;W<ie;W++){const X=D[W],F=B[X.materialIndex];if(F&&F.visible){const ee=y(w,F,S,x);w.onBeforeShadow(t,w,M,A,L,ee,X),t.renderBufferDirect(A,null,L,ee,w,X),w.onAfterShadow(t,w,M,A,L,ee,X)}}}else if(B.visible){const D=y(w,B,S,x);w.onBeforeShadow(t,w,M,A,L,D,null),t.renderBufferDirect(A,null,L,D,w,null),w.onAfterShadow(t,w,M,A,L,D,null)}}const $=w.children;for(let L=0,B=$.length;L<B;L++)_($[L],M,A,S,x)}function T(w){w.target.removeEventListener("dispose",T);for(const A in c){const S=c[A],x=w.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}function NC(t){function e(){let z=!1;const _e=new kt;let ue=null;const Le=new kt(0,0,0,0);return{setMask:function(Ne){ue!==Ne&&!z&&(t.colorMask(Ne,Ne,Ne,Ne),ue=Ne)},setLocked:function(Ne){z=Ne},setClear:function(Ne,ut,_t,Et,zt){zt===!0&&(Ne*=Et,ut*=Et,_t*=Et),_e.set(Ne,ut,_t,Et),Le.equals(_e)===!1&&(t.clearColor(Ne,ut,_t,Et),Le.copy(_e))},reset:function(){z=!1,ue=null,Le.set(-1,0,0,0)}}}function n(){let z=!1,_e=null,ue=null,Le=null;return{setTest:function(Ne){Ne?Ee(t.DEPTH_TEST):xe(t.DEPTH_TEST)},setMask:function(Ne){_e!==Ne&&!z&&(t.depthMask(Ne),_e=Ne)},setFunc:function(Ne){if(ue!==Ne){switch(Ne){case tM:t.depthFunc(t.NEVER);break;case nM:t.depthFunc(t.ALWAYS);break;case iM:t.depthFunc(t.LESS);break;case ys:t.depthFunc(t.LEQUAL);break;case rM:t.depthFunc(t.EQUAL);break;case oM:t.depthFunc(t.GEQUAL);break;case aM:t.depthFunc(t.GREATER);break;case sM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=Ne}},setLocked:function(Ne){z=Ne},setClear:function(Ne){Le!==Ne&&(t.clearDepth(Ne),Le=Ne)},reset:function(){z=!1,_e=null,ue=null,Le=null}}}function i(){let z=!1,_e=null,ue=null,Le=null,Ne=null,ut=null,_t=null,Et=null,zt=null;return{setTest:function(dt){z||(dt?Ee(t.STENCIL_TEST):xe(t.STENCIL_TEST))},setMask:function(dt){_e!==dt&&!z&&(t.stencilMask(dt),_e=dt)},setFunc:function(dt,tn,Nt){(ue!==dt||Le!==tn||Ne!==Nt)&&(t.stencilFunc(dt,tn,Nt),ue=dt,Le=tn,Ne=Nt)},setOp:function(dt,tn,Nt){(ut!==dt||_t!==tn||Et!==Nt)&&(t.stencilOp(dt,tn,Nt),ut=dt,_t=tn,Et=Nt)},setLocked:function(dt){z=dt},setClear:function(dt){zt!==dt&&(t.clearStencil(dt),zt=dt)},reset:function(){z=!1,_e=null,ue=null,Le=null,Ne=null,ut=null,_t=null,Et=null,zt=null}}}const r=new e,o=new n,a=new i,s=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],h=null,v=!1,g=null,m=null,p=null,b=null,y=null,_=null,T=null,w=new ft(0,0,0),M=0,A=!1,S=null,x=null,I=null,$=null,L=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,W=0;const ie=t.getParameter(t.VERSION);ie.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ie)[1]),D=W>=1):ie.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),D=W>=2);let X=null,F={};const ee=t.getParameter(t.SCISSOR_BOX),he=t.getParameter(t.VIEWPORT),ce=new kt().fromArray(ee),De=new kt().fromArray(he);function Z(z,_e,ue,Le){const Ne=new Uint8Array(4),ut=t.createTexture();t.bindTexture(z,ut),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let _t=0;_t<ue;_t++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(_e,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,Ne):t.texImage2D(_e+_t,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ne);return ut}const me={};me[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ee(t.DEPTH_TEST),o.setFunc(ys),de(!1),oe(md),Ee(t.CULL_FACE),j(Mi);function Ee(z){c[z]!==!0&&(t.enable(z),c[z]=!0)}function xe(z){c[z]!==!1&&(t.disable(z),c[z]=!1)}function Xe(z,_e){return u[z]!==_e?(t.bindFramebuffer(z,_e),u[z]=_e,z===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=_e),z===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=_e),!0):!1}function ae(z,_e){let ue=f,Le=!1;if(z){ue=d.get(_e),ue===void 0&&(ue=[],d.set(_e,ue));const Ne=z.textures;if(ue.length!==Ne.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let ut=0,_t=Ne.length;ut<_t;ut++)ue[ut]=t.COLOR_ATTACHMENT0+ut;ue.length=Ne.length,Le=!0}}else ue[0]!==t.BACK&&(ue[0]=t.BACK,Le=!0);Le&&t.drawBuffers(ue)}function P(z){return h!==z?(t.useProgram(z),h=z,!0):!1}const te={[Gi]:t.FUNC_ADD,[BS]:t.FUNC_SUBTRACT,[zS]:t.FUNC_REVERSE_SUBTRACT};te[kS]=t.MIN,te[HS]=t.MAX;const U={[VS]:t.ZERO,[$S]:t.ONE,[GS]:t.SRC_COLOR,[Tc]:t.SRC_ALPHA,[KS]:t.SRC_ALPHA_SATURATE,[qS]:t.DST_COLOR,[XS]:t.DST_ALPHA,[WS]:t.ONE_MINUS_SRC_COLOR,[Cc]:t.ONE_MINUS_SRC_ALPHA,[YS]:t.ONE_MINUS_DST_COLOR,[jS]:t.ONE_MINUS_DST_ALPHA,[ZS]:t.CONSTANT_COLOR,[JS]:t.ONE_MINUS_CONSTANT_COLOR,[QS]:t.CONSTANT_ALPHA,[eM]:t.ONE_MINUS_CONSTANT_ALPHA};function j(z,_e,ue,Le,Ne,ut,_t,Et,zt,dt){if(z===Mi){v===!0&&(xe(t.BLEND),v=!1);return}if(v===!1&&(Ee(t.BLEND),v=!0),z!==US){if(z!==g||dt!==A){if((m!==Gi||y!==Gi)&&(t.blendEquation(t.FUNC_ADD),m=Gi,y=Gi),dt)switch(z){case kr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _s:t.blendFunc(t.ONE,t.ONE);break;case vd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case kr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _s:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case vd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}p=null,b=null,_=null,T=null,w.set(0,0,0),M=0,g=z,A=dt}return}Ne=Ne||_e,ut=ut||ue,_t=_t||Le,(_e!==m||Ne!==y)&&(t.blendEquationSeparate(te[_e],te[Ne]),m=_e,y=Ne),(ue!==p||Le!==b||ut!==_||_t!==T)&&(t.blendFuncSeparate(U[ue],U[Le],U[ut],U[_t]),p=ue,b=Le,_=ut,T=_t),(Et.equals(w)===!1||zt!==M)&&(t.blendColor(Et.r,Et.g,Et.b,zt),w.copy(Et),M=zt),g=z,A=!1}function Y(z,_e){z.side===ai?xe(t.CULL_FACE):Ee(t.CULL_FACE);let ue=z.side===an;_e&&(ue=!ue),de(ue),z.blending===kr&&z.transparent===!1?j(Mi):j(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const Le=z.stencilWrite;a.setTest(Le),Le&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),we(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ee(t.SAMPLE_ALPHA_TO_COVERAGE):xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function de(z){S!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),S=z)}function oe(z){z!==DS?(Ee(t.CULL_FACE),z!==x&&(z===md?t.cullFace(t.BACK):z===NS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):xe(t.CULL_FACE),x=z}function Me(z){z!==I&&(D&&t.lineWidth(z),I=z)}function we(z,_e,ue){z?(Ee(t.POLYGON_OFFSET_FILL),($!==_e||L!==ue)&&(t.polygonOffset(_e,ue),$=_e,L=ue)):xe(t.POLYGON_OFFSET_FILL)}function R(z){z?Ee(t.SCISSOR_TEST):xe(t.SCISSOR_TEST)}function E(z){z===void 0&&(z=t.TEXTURE0+B-1),X!==z&&(t.activeTexture(z),X=z)}function K(z,_e,ue){ue===void 0&&(X===null?ue=t.TEXTURE0+B-1:ue=X);let Le=F[ue];Le===void 0&&(Le={type:void 0,texture:void 0},F[ue]=Le),(Le.type!==z||Le.texture!==_e)&&(X!==ue&&(t.activeTexture(ue),X=ue),t.bindTexture(z,_e||me[z]),Le.type=z,Le.texture=_e)}function le(){const z=F[X];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ge(){try{t.compressedTexImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function He(){try{t.texSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pe(){try{t.texSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Je(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{t.texStorage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ve(){try{t.texStorage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{t.texImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function je(){try{t.texImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(z){ce.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),ce.copy(z))}function tt(z){De.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),De.copy(z))}function ct(z,_e){let ue=l.get(_e);ue===void 0&&(ue=new WeakMap,l.set(_e,ue));let Le=ue.get(z);Le===void 0&&(Le=t.getUniformBlockIndex(_e,z.name),ue.set(z,Le))}function Mt(z,_e){const Le=l.get(_e).get(z);s.get(_e)!==Le&&(t.uniformBlockBinding(_e,Le,z.__bindingPointIndex),s.set(_e,Le))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},X=null,F={},u={},d=new WeakMap,f=[],h=null,v=!1,g=null,m=null,p=null,b=null,y=null,_=null,T=null,w=new ft(0,0,0),M=0,A=!1,S=null,x=null,I=null,$=null,L=null,ce.set(0,0,t.canvas.width,t.canvas.height),De.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Ee,disable:xe,bindFramebuffer:Xe,drawBuffers:ae,useProgram:P,setBlending:j,setMaterial:Y,setFlipSided:de,setCullFace:oe,setLineWidth:Me,setPolygonOffset:we,setScissorTest:R,activeTexture:E,bindTexture:K,unbindTexture:le,compressedTexImage2D:ge,compressedTexImage3D:pe,texImage2D:at,texImage3D:je,updateUBOMapping:ct,uniformBlockBinding:Mt,texStorage2D:Te,texStorage3D:Ve,texSubImage2D:He,texSubImage3D:Pe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Je,scissor:Fe,viewport:tt,reset:nt}}function FC(t,e,n,i,r,o,a){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,E){return h?new OffscreenCanvas(R,E):Es("canvas")}function g(R,E,K){let le=1;const ge=we(R);if((ge.width>K||ge.height>K)&&(le=K/Math.max(ge.width,ge.height)),le<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const pe=Math.floor(le*ge.width),He=Math.floor(le*ge.height);d===void 0&&(d=v(pe,He));const Pe=E?v(pe,He):d;return Pe.width=pe,Pe.height=He,Pe.getContext("2d").drawImage(R,0,0,pe,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+pe+"x"+He+")."),Pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Sn&&R.minFilter!==Pn}function p(R){t.generateMipmap(R)}function b(R,E,K,le,ge=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pe=E;if(E===t.RED&&(K===t.FLOAT&&(pe=t.R32F),K===t.HALF_FLOAT&&(pe=t.R16F),K===t.UNSIGNED_BYTE&&(pe=t.R8)),E===t.RED_INTEGER&&(K===t.UNSIGNED_BYTE&&(pe=t.R8UI),K===t.UNSIGNED_SHORT&&(pe=t.R16UI),K===t.UNSIGNED_INT&&(pe=t.R32UI),K===t.BYTE&&(pe=t.R8I),K===t.SHORT&&(pe=t.R16I),K===t.INT&&(pe=t.R32I)),E===t.RG&&(K===t.FLOAT&&(pe=t.RG32F),K===t.HALF_FLOAT&&(pe=t.RG16F),K===t.UNSIGNED_BYTE&&(pe=t.RG8)),E===t.RG_INTEGER&&(K===t.UNSIGNED_BYTE&&(pe=t.RG8UI),K===t.UNSIGNED_SHORT&&(pe=t.RG16UI),K===t.UNSIGNED_INT&&(pe=t.RG32UI),K===t.BYTE&&(pe=t.RG8I),K===t.SHORT&&(pe=t.RG16I),K===t.INT&&(pe=t.RG32I)),E===t.RGB&&K===t.UNSIGNED_INT_5_9_9_9_REV&&(pe=t.RGB9_E5),E===t.RGBA){const He=ge?xs:mt.getTransfer(le);K===t.FLOAT&&(pe=t.RGBA32F),K===t.HALF_FLOAT&&(pe=t.RGBA16F),K===t.UNSIGNED_BYTE&&(pe=He===yt?t.SRGB8_ALPHA8:t.RGBA8),K===t.UNSIGNED_SHORT_4_4_4_4&&(pe=t.RGBA4),K===t.UNSIGNED_SHORT_5_5_5_1&&(pe=t.RGB5_A1)}return(pe===t.R16F||pe===t.R32F||pe===t.RG16F||pe===t.RG32F||pe===t.RGBA16F||pe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function y(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Sn&&R.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function _(R){const E=R.target;E.removeEventListener("dispose",_),w(E),E.isVideoTexture&&u.delete(E)}function T(R){const E=R.target;E.removeEventListener("dispose",T),A(E)}function w(R){const E=i.get(R);if(E.__webglInit===void 0)return;const K=R.source,le=f.get(K);if(le){const ge=le[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&M(R),Object.keys(le).length===0&&f.delete(K)}i.remove(R)}function M(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const K=R.source,le=f.get(K);delete le[E.__cacheKey],a.memory.textures--}function A(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(E.__webglFramebuffer[le]))for(let ge=0;ge<E.__webglFramebuffer[le].length;ge++)t.deleteFramebuffer(E.__webglFramebuffer[le][ge]);else t.deleteFramebuffer(E.__webglFramebuffer[le]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[le])}else{if(Array.isArray(E.__webglFramebuffer))for(let le=0;le<E.__webglFramebuffer.length;le++)t.deleteFramebuffer(E.__webglFramebuffer[le]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let le=0;le<E.__webglColorRenderbuffer.length;le++)E.__webglColorRenderbuffer[le]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[le]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=R.textures;for(let le=0,ge=K.length;le<ge;le++){const pe=i.get(K[le]);pe.__webglTexture&&(t.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(K[le])}i.remove(R)}let S=0;function x(){S=0}function I(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function $(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function L(R,E){const K=i.get(R);if(R.isVideoTexture&&oe(R),R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){const le=R.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(K,R,E);return}}n.bindTexture(t.TEXTURE_2D,K.__webglTexture,t.TEXTURE0+E)}function B(R,E){const K=i.get(R);if(R.version>0&&K.__version!==R.version){ce(K,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,K.__webglTexture,t.TEXTURE0+E)}function D(R,E){const K=i.get(R);if(R.version>0&&K.__version!==R.version){ce(K,R,E);return}n.bindTexture(t.TEXTURE_3D,K.__webglTexture,t.TEXTURE0+E)}function W(R,E){const K=i.get(R);if(R.version>0&&K.__version!==R.version){De(K,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture,t.TEXTURE0+E)}const ie={[Rc]:t.REPEAT,[qi]:t.CLAMP_TO_EDGE,[Ic]:t.MIRRORED_REPEAT},X={[Sn]:t.NEAREST,[gM]:t.NEAREST_MIPMAP_NEAREST,[va]:t.NEAREST_MIPMAP_LINEAR,[Pn]:t.LINEAR,[vl]:t.LINEAR_MIPMAP_NEAREST,[Yi]:t.LINEAR_MIPMAP_LINEAR},F={[IM]:t.NEVER,[UM]:t.ALWAYS,[LM]:t.LESS,[mm]:t.LEQUAL,[OM]:t.EQUAL,[FM]:t.GEQUAL,[DM]:t.GREATER,[NM]:t.NOTEQUAL};function ee(R,E){if(E.type===bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Pn||E.magFilter===vl||E.magFilter===va||E.magFilter===Yi||E.minFilter===Pn||E.minFilter===vl||E.minFilter===va||E.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,ie[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ie[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ie[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,X[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,X[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,F[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Sn||E.minFilter!==va&&E.minFilter!==Yi||E.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function he(R,E){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",_));const le=E.source;let ge=f.get(le);ge===void 0&&(ge={},f.set(le,ge));const pe=$(E);if(pe!==R.__cacheKey){ge[pe]===void 0&&(ge[pe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ge[pe].usedTimes++;const He=ge[R.__cacheKey];He!==void 0&&(ge[R.__cacheKey].usedTimes--,He.usedTimes===0&&M(E)),R.__cacheKey=pe,R.__webglTexture=ge[pe].texture}return K}function ce(R,E,K){let le=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=t.TEXTURE_3D);const ge=he(R,E),pe=E.source;n.bindTexture(le,R.__webglTexture,t.TEXTURE0+K);const He=i.get(pe);if(pe.version!==He.__version||ge===!0){n.activeTexture(t.TEXTURE0+K);const Pe=mt.getPrimaries(mt.workingColorSpace),Ae=E.colorSpace===yi?null:mt.getPrimaries(E.colorSpace),Je=E.colorSpace===yi||Pe===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let Te=g(E.image,!1,r.maxTextureSize);Te=Me(E,Te);const Ve=o.convert(E.format,E.colorSpace),at=o.convert(E.type);let je=b(E.internalFormat,Ve,at,E.colorSpace,E.isVideoTexture);ee(le,E);let Fe;const tt=E.mipmaps,ct=E.isVideoTexture!==!0,Mt=He.__version===void 0||ge===!0,nt=pe.dataReady,z=y(E,Te);if(E.isDepthTexture)je=t.DEPTH_COMPONENT16,E.type===bi?je=t.DEPTH_COMPONENT32F:E.type===Yr?je=t.DEPTH_COMPONENT24:E.type===ia&&(je=t.DEPTH24_STENCIL8),Mt&&(ct?n.texStorage2D(t.TEXTURE_2D,1,je,Te.width,Te.height):n.texImage2D(t.TEXTURE_2D,0,je,Te.width,Te.height,0,Ve,at,null));else if(E.isDataTexture)if(tt.length>0){ct&&Mt&&n.texStorage2D(t.TEXTURE_2D,z,je,tt[0].width,tt[0].height);for(let _e=0,ue=tt.length;_e<ue;_e++)Fe=tt[_e],ct?nt&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Fe.width,Fe.height,Ve,at,Fe.data):n.texImage2D(t.TEXTURE_2D,_e,je,Fe.width,Fe.height,0,Ve,at,Fe.data);E.generateMipmaps=!1}else ct?(Mt&&n.texStorage2D(t.TEXTURE_2D,z,je,Te.width,Te.height),nt&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te.width,Te.height,Ve,at,Te.data)):n.texImage2D(t.TEXTURE_2D,0,je,Te.width,Te.height,0,Ve,at,Te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ct&&Mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,z,je,tt[0].width,tt[0].height,Te.depth);for(let _e=0,ue=tt.length;_e<ue;_e++)Fe=tt[_e],E.format!==zn?Ve!==null?ct?nt&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Fe.width,Fe.height,Te.depth,Ve,Fe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,_e,je,Fe.width,Fe.height,Te.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?nt&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Fe.width,Fe.height,Te.depth,Ve,at,Fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,_e,je,Fe.width,Fe.height,Te.depth,0,Ve,at,Fe.data)}else{ct&&Mt&&n.texStorage2D(t.TEXTURE_2D,z,je,tt[0].width,tt[0].height);for(let _e=0,ue=tt.length;_e<ue;_e++)Fe=tt[_e],E.format!==zn?Ve!==null?ct?nt&&n.compressedTexSubImage2D(t.TEXTURE_2D,_e,0,0,Fe.width,Fe.height,Ve,Fe.data):n.compressedTexImage2D(t.TEXTURE_2D,_e,je,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?nt&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Fe.width,Fe.height,Ve,at,Fe.data):n.texImage2D(t.TEXTURE_2D,_e,je,Fe.width,Fe.height,0,Ve,at,Fe.data)}else if(E.isDataArrayTexture)ct?(Mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,z,je,Te.width,Te.height,Te.depth),nt&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Ve,at,Te.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,je,Te.width,Te.height,Te.depth,0,Ve,at,Te.data);else if(E.isData3DTexture)ct?(Mt&&n.texStorage3D(t.TEXTURE_3D,z,je,Te.width,Te.height,Te.depth),nt&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Ve,at,Te.data)):n.texImage3D(t.TEXTURE_3D,0,je,Te.width,Te.height,Te.depth,0,Ve,at,Te.data);else if(E.isFramebufferTexture){if(Mt)if(ct)n.texStorage2D(t.TEXTURE_2D,z,je,Te.width,Te.height);else{let _e=Te.width,ue=Te.height;for(let Le=0;Le<z;Le++)n.texImage2D(t.TEXTURE_2D,Le,je,_e,ue,0,Ve,at,null),_e>>=1,ue>>=1}}else if(tt.length>0){if(ct&&Mt){const _e=we(tt[0]);n.texStorage2D(t.TEXTURE_2D,z,je,_e.width,_e.height)}for(let _e=0,ue=tt.length;_e<ue;_e++)Fe=tt[_e],ct?nt&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Ve,at,Fe):n.texImage2D(t.TEXTURE_2D,_e,je,Ve,at,Fe);E.generateMipmaps=!1}else if(ct){if(Mt){const _e=we(Te);n.texStorage2D(t.TEXTURE_2D,z,je,_e.width,_e.height)}nt&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ve,at,Te)}else n.texImage2D(t.TEXTURE_2D,0,je,Ve,at,Te);m(E)&&p(le),He.__version=pe.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function De(R,E,K){if(E.image.length!==6)return;const le=he(R,E),ge=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+K);const pe=i.get(ge);if(ge.version!==pe.__version||le===!0){n.activeTexture(t.TEXTURE0+K);const He=mt.getPrimaries(mt.workingColorSpace),Pe=E.colorSpace===yi?null:mt.getPrimaries(E.colorSpace),Ae=E.colorSpace===yi||He===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Je=E.isCompressedTexture||E.image[0].isCompressedTexture,Te=E.image[0]&&E.image[0].isDataTexture,Ve=[];for(let ue=0;ue<6;ue++)!Je&&!Te?Ve[ue]=g(E.image[ue],!0,r.maxCubemapSize):Ve[ue]=Te?E.image[ue].image:E.image[ue],Ve[ue]=Me(E,Ve[ue]);const at=Ve[0],je=o.convert(E.format,E.colorSpace),Fe=o.convert(E.type),tt=b(E.internalFormat,je,Fe,E.colorSpace),ct=E.isVideoTexture!==!0,Mt=pe.__version===void 0||le===!0,nt=ge.dataReady;let z=y(E,at);ee(t.TEXTURE_CUBE_MAP,E);let _e;if(Je){ct&&Mt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,z,tt,at.width,at.height);for(let ue=0;ue<6;ue++){_e=Ve[ue].mipmaps;for(let Le=0;Le<_e.length;Le++){const Ne=_e[Le];E.format!==zn?je!==null?ct?nt&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le,0,0,Ne.width,Ne.height,je,Ne.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le,tt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?nt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le,0,0,Ne.width,Ne.height,je,Fe,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le,tt,Ne.width,Ne.height,0,je,Fe,Ne.data)}}}else{if(_e=E.mipmaps,ct&&Mt){_e.length>0&&z++;const ue=we(Ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,z,tt,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Te){ct?nt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ve[ue].width,Ve[ue].height,je,Fe,Ve[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,tt,Ve[ue].width,Ve[ue].height,0,je,Fe,Ve[ue].data);for(let Le=0;Le<_e.length;Le++){const ut=_e[Le].image[ue].image;ct?nt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le+1,0,0,ut.width,ut.height,je,Fe,ut.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le+1,tt,ut.width,ut.height,0,je,Fe,ut.data)}}else{ct?nt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,je,Fe,Ve[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,tt,je,Fe,Ve[ue]);for(let Le=0;Le<_e.length;Le++){const Ne=_e[Le];ct?nt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le+1,0,0,je,Fe,Ne.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le+1,tt,je,Fe,Ne.image[ue])}}}m(E)&&p(t.TEXTURE_CUBE_MAP),pe.__version=ge.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Z(R,E,K,le,ge,pe){const He=o.convert(K.format,K.colorSpace),Pe=o.convert(K.type),Ae=b(K.internalFormat,He,Pe,K.colorSpace);if(!i.get(E).__hasExternalTextures){const Te=Math.max(1,E.width>>pe),Ve=Math.max(1,E.height>>pe);ge===t.TEXTURE_3D||ge===t.TEXTURE_2D_ARRAY?n.texImage3D(ge,pe,Ae,Te,Ve,E.depth,0,He,Pe,null):n.texImage2D(ge,pe,Ae,Te,Ve,0,He,Pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),de(E)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,ge,i.get(K).__webglTexture,0,Y(E)):(ge===t.TEXTURE_2D||ge>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,le,ge,i.get(K).__webglTexture,pe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function me(R,E,K){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let le=t.DEPTH_COMPONENT24;if(K||de(E)){const ge=E.depthTexture;ge&&ge.isDepthTexture&&(ge.type===bi?le=t.DEPTH_COMPONENT32F:ge.type===Yr&&(le=t.DEPTH_COMPONENT24));const pe=Y(E);de(E)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,le,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,le,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,le,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const le=Y(E);K&&de(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,t.DEPTH24_STENCIL8,E.width,E.height):de(E)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const le=E.textures;for(let ge=0;ge<le.length;ge++){const pe=le[ge],He=o.convert(pe.format,pe.colorSpace),Pe=o.convert(pe.type),Ae=b(pe.internalFormat,He,Pe,pe.colorSpace),Je=Y(E);K&&de(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Je,Ae,E.width,E.height):de(E)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Je,Ae,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Ae,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ee(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),L(E.depthTexture,0);const le=i.get(E.depthTexture).__webglTexture,ge=Y(E);if(E.depthTexture.format===Hr)de(E)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,ge):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(E.depthTexture.format===Bo)de(E)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,ge):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function xe(R){const E=i.get(R),K=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Ee(E.__webglFramebuffer,R)}else if(K){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]=t.createRenderbuffer(),me(E.__webglDepthbuffer[le],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),me(E.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Xe(R,E,K){const le=i.get(R);E!==void 0&&Z(le.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),K!==void 0&&xe(R)}function ae(R){const E=R.texture,K=i.get(R),le=i.get(E);R.addEventListener("dispose",T);const ge=R.textures,pe=R.isWebGLCubeRenderTarget===!0,He=ge.length>1;if(He||(le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture()),le.__version=E.version,a.memory.textures++),pe){K.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[Pe]=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)K.__webglFramebuffer[Pe][Ae]=t.createFramebuffer()}else K.__webglFramebuffer[Pe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let Pe=0;Pe<E.mipmaps.length;Pe++)K.__webglFramebuffer[Pe]=t.createFramebuffer()}else K.__webglFramebuffer=t.createFramebuffer();if(He)for(let Pe=0,Ae=ge.length;Pe<Ae;Pe++){const Je=i.get(ge[Pe]);Je.__webglTexture===void 0&&(Je.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&de(R)===!1){K.__webglMultisampledFramebuffer=t.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Pe=0;Pe<ge.length;Pe++){const Ae=ge[Pe];K.__webglColorRenderbuffer[Pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,K.__webglColorRenderbuffer[Pe]);const Je=o.convert(Ae.format,Ae.colorSpace),Te=o.convert(Ae.type),Ve=b(Ae.internalFormat,Je,Te,Ae.colorSpace,R.isXRRenderTarget===!0),at=Y(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,at,Ve,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,K.__webglColorRenderbuffer[Pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=t.createRenderbuffer(),me(K.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(pe){n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),ee(t.TEXTURE_CUBE_MAP,E);for(let Pe=0;Pe<6;Pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ae=0;Ae<E.mipmaps.length;Ae++)Z(K.__webglFramebuffer[Pe][Ae],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ae);else Z(K.__webglFramebuffer[Pe],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);m(E)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(He){for(let Pe=0,Ae=ge.length;Pe<Ae;Pe++){const Je=ge[Pe],Te=i.get(Je);n.bindTexture(t.TEXTURE_2D,Te.__webglTexture),ee(t.TEXTURE_2D,Je),Z(K.__webglFramebuffer,R,Je,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,0),m(Je)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let Pe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Pe,le.__webglTexture),ee(Pe,E),E.mipmaps&&E.mipmaps.length>0)for(let Ae=0;Ae<E.mipmaps.length;Ae++)Z(K.__webglFramebuffer[Ae],R,E,t.COLOR_ATTACHMENT0,Pe,Ae);else Z(K.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,Pe,0);m(E)&&p(Pe),n.unbindTexture()}R.depthBuffer&&xe(R)}function P(R){const E=R.textures;for(let K=0,le=E.length;K<le;K++){const ge=E[K];if(m(ge)){const pe=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,He=i.get(ge).__webglTexture;n.bindTexture(pe,He),p(pe),n.unbindTexture()}}}const te=[],U=[];function j(R){if(R.samples>0){if(de(R)===!1){const E=R.textures,K=R.width,le=R.height;let ge=t.COLOR_BUFFER_BIT;const pe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,He=i.get(R),Pe=E.length>1;if(Pe)for(let Ae=0;Ae<E.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,He.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ae=0;Ae<E.length;Ae++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ge|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ge|=t.STENCIL_BUFFER_BIT)),Pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,He.__webglColorRenderbuffer[Ae]);const Je=i.get(E[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Je,0)}t.blitFramebuffer(0,0,K,le,0,0,K,le,ge,t.NEAREST),l===!0&&(te.length=0,U.length=0,te.push(t.COLOR_ATTACHMENT0+Ae),R.depthBuffer&&R.resolveDepthBuffer===!1&&(te.push(pe),U.push(pe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,U)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Pe)for(let Ae=0;Ae<E.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,He.__webglColorRenderbuffer[Ae]);const Je=i.get(E[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,He.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Je,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Y(R){return Math.min(r.maxSamples,R.samples)}function de(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function oe(R){const E=a.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function Me(R,E){const K=R.colorSpace,le=R.format,ge=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||K!==Pi&&K!==yi&&(mt.getTransfer(K)===yt?(le!==zn||ge!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}function we(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=x,this.setTexture2D=L,this.setTexture2DArray=B,this.setTexture3D=D,this.setTextureCube=W,this.rebindTextures=Xe,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=de}function UC(t,e){function n(i,r=yi){let o;const a=mt.getTransfer(r);if(i===Ci)return t.UNSIGNED_BYTE;if(i===cm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===um)return t.UNSIGNED_SHORT_5_5_5_1;if(i===xM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===_M)return t.BYTE;if(i===yM)return t.SHORT;if(i===sm)return t.UNSIGNED_SHORT;if(i===lm)return t.INT;if(i===Yr)return t.UNSIGNED_INT;if(i===bi)return t.FLOAT;if(i===Xs)return t.HALF_FLOAT;if(i===bM)return t.ALPHA;if(i===SM)return t.RGB;if(i===zn)return t.RGBA;if(i===MM)return t.LUMINANCE;if(i===EM)return t.LUMINANCE_ALPHA;if(i===Hr)return t.DEPTH_COMPONENT;if(i===Bo)return t.DEPTH_STENCIL;if(i===wM)return t.RED;if(i===dm)return t.RED_INTEGER;if(i===TM)return t.RG;if(i===fm)return t.RG_INTEGER;if(i===hm)return t.RGBA_INTEGER;if(i===gl||i===_l||i===yl||i===xl)if(a===yt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===gl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_l)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===gl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_l)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_d||i===yd||i===xd||i===bd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===_d)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sd||i===Md||i===Ed)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Sd||i===Md)return a===yt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Ed)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wd||i===Td||i===Cd||i===Ad||i===Pd||i===Rd||i===Id||i===Ld||i===Od||i===Dd||i===Nd||i===Fd||i===Ud||i===Bd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===wd)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Td)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ad)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pd)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rd)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Id)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ld)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Od)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dd)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nd)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fd)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ud)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bd)return a===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bl||i===zd||i===kd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===bl)return a===yt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===CM||i===Hd||i===Vd||i===$d)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===bl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Hd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$d)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ia?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class BC extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class To extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zC={type:"move"};class jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new To,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new To,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new To,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,v=.005;c.inputState.pinching&&f>h+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(zC)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new To;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const kC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new sn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Ln({vertexShader:kC,fragmentShader:HC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new In(new qs(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class $C extends oo{constructor(e,n){super();const i=this;let r=null,o=1,a=null,s="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,v=null;const g=new VC,m=n.getContextAttributes();let p=null,b=null;const y=[],_=[],T=new Oe;let w=null;const M=new bn;M.layers.enable(1),M.viewport=new kt;const A=new bn;A.layers.enable(2),A.viewport=new kt;const S=[M,A],x=new BC;x.layers.enable(1),x.layers.enable(2);let I=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let me=y[Z];return me===void 0&&(me=new jl,y[Z]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Z){let me=y[Z];return me===void 0&&(me=new jl,y[Z]=me),me.getGripSpace()},this.getHand=function(Z){let me=y[Z];return me===void 0&&(me=new jl,y[Z]=me),me.getHandSpace()};function L(Z){const me=_.indexOf(Z.inputSource);if(me===-1)return;const Ee=y[me];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,c||a),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",D);for(let Z=0;Z<y.length;Z++){const me=_[Z];me!==null&&(_[Z]=null,y[Z].disconnect(me))}I=null,$=null,g.reset(),e.setRenderTarget(p),h=null,f=null,d=null,r=null,b=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",B),r.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){const me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,n,me),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new ir(h.framebufferWidth,h.framebufferHeight,{format:zn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let me=null,Ee=null,xe=null;m.depth&&(xe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=m.stencil?Bo:Hr,Ee=m.stencil?ia:Yr);const Xe={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:o};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Xe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new ir(f.textureWidth,f.textureHeight,{format:zn,type:Ci,depthTexture:new Pm(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(s),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(Z){for(let me=0;me<Z.removed.length;me++){const Ee=Z.removed[me],xe=_.indexOf(Ee);xe>=0&&(_[xe]=null,y[xe].disconnect(Ee))}for(let me=0;me<Z.added.length;me++){const Ee=Z.added[me];let xe=_.indexOf(Ee);if(xe===-1){for(let ae=0;ae<y.length;ae++)if(ae>=_.length){_.push(Ee),xe=ae;break}else if(_[ae]===null){_[ae]=Ee,xe=ae;break}if(xe===-1)break}const Xe=y[xe];Xe&&Xe.connect(Ee)}}const W=new H,ie=new H;function X(Z,me,Ee){W.setFromMatrixPosition(me.matrixWorld),ie.setFromMatrixPosition(Ee.matrixWorld);const xe=W.distanceTo(ie),Xe=me.projectionMatrix.elements,ae=Ee.projectionMatrix.elements,P=Xe[14]/(Xe[10]-1),te=Xe[14]/(Xe[10]+1),U=(Xe[9]+1)/Xe[5],j=(Xe[9]-1)/Xe[5],Y=(Xe[8]-1)/Xe[0],de=(ae[8]+1)/ae[0],oe=P*Y,Me=P*de,we=xe/(-Y+de),R=we*-Y;me.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(R),Z.translateZ(we),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const E=P+we,K=te+we,le=oe-R,ge=Me+(xe-R),pe=U*te/K*E,He=j*te/K*E;Z.projectionMatrix.makePerspective(le,ge,pe,He,E,K),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function F(Z,me){me===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(me.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;g.texture!==null&&(Z.near=g.depthNear,Z.far=g.depthFar),x.near=A.near=M.near=Z.near,x.far=A.far=M.far=Z.far,(I!==x.near||$!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,$=x.far,M.near=I,M.far=$,A.near=I,A.far=$,M.updateProjectionMatrix(),A.updateProjectionMatrix(),Z.updateProjectionMatrix());const me=Z.parent,Ee=x.cameras;F(x,me);for(let xe=0;xe<Ee.length;xe++)F(Ee[xe],me);Ee.length===2?X(x,M,A):x.projectionMatrix.copy(M.projectionMatrix),ee(Z,x,me)};function ee(Z,me,Ee){Ee===null?Z.matrix.copy(me.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(me.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(me.projectionMatrix),Z.projectionMatrixInverse.copy(me.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Lc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null};let he=null;function ce(Z,me){if(u=me.getViewerPose(c||a),v=me,u!==null){const Ee=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let xe=!1;Ee.length!==x.cameras.length&&(x.cameras.length=0,xe=!0);for(let ae=0;ae<Ee.length;ae++){const P=Ee[ae];let te=null;if(h!==null)te=h.getViewport(P);else{const j=d.getViewSubImage(f,P);te=j.viewport,ae===0&&(e.setRenderTargetTextures(b,j.colorTexture,f.ignoreDepthValues?void 0:j.depthStencilTexture),e.setRenderTarget(b))}let U=S[ae];U===void 0&&(U=new bn,U.layers.enable(ae),U.viewport=new kt,S[ae]=U),U.matrix.fromArray(P.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(P.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(te.x,te.y,te.width,te.height),ae===0&&(x.matrix.copy(U.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),xe===!0&&x.cameras.push(U)}const Xe=r.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")){const ae=d.getDepthInformation(Ee[0]);ae&&ae.isValid&&ae.texture&&g.init(e,ae,r.renderState)}}for(let Ee=0;Ee<y.length;Ee++){const xe=_[Ee],Xe=y[Ee];xe!==null&&Xe!==void 0&&Xe.update(xe,me,c||a)}g.render(e,x),he&&he(Z,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),v=null}const De=new Cm;De.setAnimationLoop(ce),this.setAnimationLoop=function(Z){he=Z},this.dispose=function(){}}}const zi=new Vn,GC=new Ct;function WC(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Mm(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),d(m,p)):p.isMeshPhongMaterial?(o(m,p),u(m,p)):p.isMeshStandardMaterial?(o(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,_)):p.isMeshMatcapMaterial?(o(m,p),v(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),g(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?l(m,p,b,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),y=b.envMap,_=b.envMapRotation;if(y&&(m.envMap.value=y,zi.copy(_),zi.x*=-1,zi.y*=-1,zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),m.envMapRotation.value.setFromMatrix4(GC.makeRotationFromEuler(zi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const T=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*T,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=y*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function XC(t,e,n,i){let r={},o={},a=[];const s=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const _=y.program;i.uniformBlockBinding(b,_)}function c(b,y){let _=r[b.id];_===void 0&&(v(b),_=u(b),r[b.id]=_,b.addEventListener("dispose",m));const T=y.program;i.updateUBOMapping(b,T);const w=e.render.frame;o[b.id]!==w&&(f(b),o[b.id]=w)}function u(b){const y=d();b.__bindingPointIndex=y;const _=t.createBuffer(),T=b.__size,w=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,T,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,_),_}function d(){for(let b=0;b<s;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const y=r[b.id],_=b.uniforms,T=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let w=0,M=_.length;w<M;w++){const A=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,x=A.length;S<x;S++){const I=A[S];if(h(I,w,S,T)===!0){const $=I.__offset,L=Array.isArray(I.value)?I.value:[I.value];let B=0;for(let D=0;D<L.length;D++){const W=L[D],ie=g(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,$+B,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,B),B+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(b,y,_,T){const w=b.value,M=y+"_"+_;if(T[M]===void 0)return typeof w=="number"||typeof w=="boolean"?T[M]=w:T[M]=w.clone(),!0;{const A=T[M];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return T[M]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function v(b){const y=b.uniforms;let _=0;const T=16;for(let M=0,A=y.length;M<A;M++){const S=Array.isArray(y[M])?y[M]:[y[M]];for(let x=0,I=S.length;x<I;x++){const $=S[x],L=Array.isArray($.value)?$.value:[$.value];for(let B=0,D=L.length;B<D;B++){const W=L[B],ie=g(W),X=_%T;X!==0&&T-X<ie.boundary&&(_+=T-X),$.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=_,_+=ie.storage}}}const w=_%T;return w>0&&(_+=T-w),b.__size=_,b.__cache={},this}function g(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){const y=b.target;y.removeEventListener("dispose",m);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function p(){for(const b in r)t.deleteBuffer(r[b]);a=[],r={},o={}}return{bind:l,update:c,dispose:p}}class Nm{constructor(e={}){const{canvas:n=zM(),context:i=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const h=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const p=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this._useLegacyLights=!1,this.toneMapping=Ei,this.toneMappingExposure=1;const y=this;let _=!1,T=0,w=0,M=null,A=-1,S=null;const x=new kt,I=new kt;let $=null;const L=new ft(0);let B=0,D=n.width,W=n.height,ie=1,X=null,F=null;const ee=new kt(0,0,D,W),he=new kt(0,0,D,W);let ce=!1;const De=new Tm;let Z=!1,me=!1;const Ee=new Ct,xe=new H,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return M===null?ie:1}let P=i;function te(C,G){return n.getContext(C,G)}try{const C={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xu}`),n.addEventListener("webglcontextlost",z,!1),n.addEventListener("webglcontextrestored",_e,!1),n.addEventListener("webglcontextcreationerror",ue,!1),P===null){const G="webgl2";if(P=te(G,C),P===null)throw te(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let U,j,Y,de,oe,Me,we,R,E,K,le,ge,pe,He,Pe,Ae,Je,Te,Ve,at,je,Fe,tt,ct;function Mt(){U=new tT(P),U.init(),Fe=new UC(P,U),j=new Yw(P,U,e,Fe),Y=new NC(P),de=new rT(P),oe=new bC,Me=new FC(P,U,Y,oe,j,Fe,de),we=new Zw(y),R=new eT(y),E=new d1(P),tt=new jw(P,E),K=new nT(P,E,de,tt),le=new aT(P,K,E,de),Ve=new oT(P,j,Me),Ae=new Kw(oe),ge=new xC(y,we,R,U,j,tt,Ae),pe=new WC(y,oe),He=new MC,Pe=new PC(U),Te=new Xw(y,we,R,Y,le,f,l),Je=new DC(y,le,j),ct=new XC(P,de,j,Y),at=new qw(P,U,de),je=new iT(P,U,de),de.programs=ge.programs,y.capabilities=j,y.extensions=U,y.properties=oe,y.renderLists=He,y.shadowMap=Je,y.state=Y,y.info=de}Mt();const nt=new $C(y,P);this.xr=nt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const C=U.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=U.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(C){C!==void 0&&(ie=C,this.setSize(D,W,!1))},this.getSize=function(C){return C.set(D,W)},this.setSize=function(C,G,ne=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=C,W=G,n.width=Math.floor(C*ie),n.height=Math.floor(G*ie),ne===!0&&(n.style.width=C+"px",n.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(D*ie,W*ie).floor()},this.setDrawingBufferSize=function(C,G,ne){D=C,W=G,ie=ne,n.width=Math.floor(C*ne),n.height=Math.floor(G*ne),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(x)},this.getViewport=function(C){return C.copy(ee)},this.setViewport=function(C,G,ne,J){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,G,ne,J),Y.viewport(x.copy(ee).multiplyScalar(ie).round())},this.getScissor=function(C){return C.copy(he)},this.setScissor=function(C,G,ne,J){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,G,ne,J),Y.scissor(I.copy(he).multiplyScalar(ie).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(C){Y.setScissorTest(ce=C)},this.setOpaqueSort=function(C){X=C},this.setTransparentSort=function(C){F=C},this.getClearColor=function(C){return C.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(C=!0,G=!0,ne=!0){let J=0;if(C){let Q=!1;if(M!==null){const Ie=M.texture.format;Q=Ie===hm||Ie===fm||Ie===dm}if(Q){const Ie=M.texture.type,Be=Ie===Ci||Ie===Yr||Ie===sm||Ie===ia||Ie===cm||Ie===um,ke=Te.getClearColor(),We=Te.getClearAlpha(),Ke=ke.r,Qe=ke.g,st=ke.b;Be?(h[0]=Ke,h[1]=Qe,h[2]=st,h[3]=We,P.clearBufferuiv(P.COLOR,0,h)):(v[0]=Ke,v[1]=Qe,v[2]=st,v[3]=We,P.clearBufferiv(P.COLOR,0,v))}else J|=P.COLOR_BUFFER_BIT}G&&(J|=P.DEPTH_BUFFER_BIT),ne&&(J|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",z,!1),n.removeEventListener("webglcontextrestored",_e,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),He.dispose(),Pe.dispose(),oe.dispose(),we.dispose(),R.dispose(),le.dispose(),tt.dispose(),ct.dispose(),ge.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",dt),nt.removeEventListener("sessionend",tn),Nt.stop()};function z(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const C=de.autoReset,G=Je.enabled,ne=Je.autoUpdate,J=Je.needsUpdate,Q=Je.type;Mt(),de.autoReset=C,Je.enabled=G,Je.autoUpdate=ne,Je.needsUpdate=J,Je.type=Q}function ue(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Le(C){const G=C.target;G.removeEventListener("dispose",Le),Ne(G)}function Ne(C){ut(C),oe.remove(C)}function ut(C){const G=oe.get(C).programs;G!==void 0&&(G.forEach(function(ne){ge.releaseProgram(ne)}),C.isShaderMaterial&&ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,ne,J,Q,Ie){G===null&&(G=Xe);const Be=Q.isMesh&&Q.matrixWorld.determinant()<0,ke=Li(C,G,ne,J,Q);Y.setMaterial(J,Be);let We=ne.index,Ke=1;if(J.wireframe===!0){if(We=K.getWireframeAttribute(ne),We===void 0)return;Ke=2}const Qe=ne.drawRange,st=ne.attributes.position;let At=Qe.start*Ke,$t=(Qe.start+Qe.count)*Ke;Ie!==null&&(At=Math.max(At,Ie.start*Ke),$t=Math.min($t,(Ie.start+Ie.count)*Ke)),We!==null?(At=Math.max(At,0),$t=Math.min($t,We.count)):st!=null&&(At=Math.max(At,0),$t=Math.min($t,st.count));const cn=$t-At;if(cn<0||cn===1/0)return;tt.setup(Q,J,ke,ne,We);let qn,pt=at;if(We!==null&&(qn=E.get(We),pt=je,pt.setIndex(qn)),Q.isMesh)J.wireframe===!0?(Y.setLineWidth(J.wireframeLinewidth*ae()),pt.setMode(P.LINES)):pt.setMode(P.TRIANGLES);else if(Q.isLine){let et=J.linewidth;et===void 0&&(et=1),Y.setLineWidth(et*ae()),Q.isLineSegments?pt.setMode(P.LINES):Q.isLineLoop?pt.setMode(P.LINE_LOOP):pt.setMode(P.LINE_STRIP)}else Q.isPoints?pt.setMode(P.POINTS):Q.isSprite&&pt.setMode(P.TRIANGLES);if(Q.isBatchedMesh)Q._multiDrawInstances!==null?pt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances):pt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)pt.renderInstances(At,cn,Q.count);else if(ne.isInstancedBufferGeometry){const et=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,ho=Math.min(ne.instanceCount,et);pt.renderInstances(At,cn,ho)}else pt.render(At,cn)};function _t(C,G,ne){C.transparent===!0&&C.side===ai&&C.forceSinglePass===!1?(C.side=an,C.needsUpdate=!0,mr(C,G,ne),C.side=Ti,C.needsUpdate=!0,mr(C,G,ne),C.side=ai):mr(C,G,ne)}this.compile=function(C,G,ne=null){ne===null&&(ne=C),m=Pe.get(ne),m.init(G),b.push(m),ne.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),C!==ne&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(y._useLegacyLights);const J=new Set;return C.traverse(function(Q){const Ie=Q.material;if(Ie)if(Array.isArray(Ie))for(let Be=0;Be<Ie.length;Be++){const ke=Ie[Be];_t(ke,ne,Q),J.add(ke)}else _t(Ie,ne,Q),J.add(Ie)}),b.pop(),m=null,J},this.compileAsync=function(C,G,ne=null){const J=this.compile(C,G,ne);return new Promise(Q=>{function Ie(){if(J.forEach(function(Be){oe.get(Be).currentProgram.isReady()&&J.delete(Be)}),J.size===0){Q(C);return}setTimeout(Ie,10)}U.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Et=null;function zt(C){Et&&Et(C)}function dt(){Nt.stop()}function tn(){Nt.start()}const Nt=new Cm;Nt.setAnimationLoop(zt),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(C){Et=C,nt.setAnimationLoop(C),C===null?Nt.stop():Nt.start()},nt.addEventListener("sessionstart",dt),nt.addEventListener("sessionend",tn),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(G),G=nt.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,G,M),m=Pe.get(C,b.length),m.init(G),b.push(m),Ee.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),De.setFromProjectionMatrix(Ee),me=this.localClippingEnabled,Z=Ae.init(this.clippingPlanes,me),g=He.get(C,p.length),g.init(),p.push(g),Ii(C,G,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(X,F);const ne=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1;ne&&Te.addToRenderList(g,C),this.info.render.frame++,Z===!0&&Ae.beginShadows();const J=m.state.shadowsArray;Je.render(J,C,G),Z===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=g.opaque,Ie=g.transmissive;if(m.setupLights(y._useLegacyLights),G.isArrayCamera){const Be=G.cameras;if(Ie.length>0)for(let ke=0,We=Be.length;ke<We;ke++){const Ke=Be[ke];fa(Q,Ie,C,Ke)}ne&&Te.render(C);for(let ke=0,We=Be.length;ke<We;ke++){const Ke=Be[ke];da(g,C,Ke,Ke.viewport)}}else Ie.length>0&&fa(Q,Ie,C,G),ne&&Te.render(C),da(g,C,G);M!==null&&(Me.updateMultisampleRenderTarget(M),Me.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(y,C,G),tt.resetDefaultState(),A=-1,S=null,b.pop(),b.length>0?(m=b[b.length-1],Z===!0&&Ae.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Ii(C,G,ne,J){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||De.intersectsSprite(C)){J&&xe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ee);const Be=le.update(C),ke=C.material;ke.visible&&g.push(C,Be,ke,ne,xe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||De.intersectsObject(C))){const Be=le.update(C),ke=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),xe.copy(C.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),xe.copy(Be.boundingSphere.center)),xe.applyMatrix4(C.matrixWorld).applyMatrix4(Ee)),Array.isArray(ke)){const We=Be.groups;for(let Ke=0,Qe=We.length;Ke<Qe;Ke++){const st=We[Ke],At=ke[st.materialIndex];At&&At.visible&&g.push(C,Be,At,ne,xe.z,st)}}else ke.visible&&g.push(C,Be,ke,ne,xe.z,null)}}const Ie=C.children;for(let Be=0,ke=Ie.length;Be<ke;Be++)Ii(Ie[Be],G,ne,J)}function da(C,G,ne,J){const Q=C.opaque,Ie=C.transmissive,Be=C.transparent;m.setupLightsView(ne),Z===!0&&Ae.setGlobalState(y.clippingPlanes,ne),J&&Y.viewport(x.copy(J)),Q.length>0&&pr(Q,G,ne),Ie.length>0&&pr(Ie,G,ne),Be.length>0&&pr(Be,G,ne),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function fa(C,G,ne,J){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new ir(1,1,{generateMipmaps:!0,type:U.has("EXT_color_buffer_half_float")||U.has("EXT_color_buffer_float")?Xs:Ci,minFilter:Yi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Ie=m.state.transmissionRenderTarget[J.id],Be=J.viewport||x;Ie.setSize(Be.z,Be.w);const ke=y.getRenderTarget();y.setRenderTarget(Ie),y.getClearColor(L),B=y.getClearAlpha(),B<1&&y.setClearColor(16777215,.5),y.clear();const We=y.toneMapping;y.toneMapping=Ei;const Ke=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),Z===!0&&Ae.setGlobalState(y.clippingPlanes,J),pr(C,ne,J),Me.updateMultisampleRenderTarget(Ie),Me.updateRenderTargetMipmap(Ie),U.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let st=0,At=G.length;st<At;st++){const $t=G[st],cn=$t.object,qn=$t.geometry,pt=$t.material,et=$t.group;if(pt.side===ai&&cn.layers.test(J.layers)){const ho=pt.side;pt.side=an,pt.needsUpdate=!0,ha(cn,ne,J,qn,pt,et),pt.side=ho,pt.needsUpdate=!0,Qe=!0}}Qe===!0&&(Me.updateMultisampleRenderTarget(Ie),Me.updateRenderTargetMipmap(Ie))}y.setRenderTarget(ke),y.setClearColor(L,B),Ke!==void 0&&(J.viewport=Ke),y.toneMapping=We}function pr(C,G,ne){const J=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,Ie=C.length;Q<Ie;Q++){const Be=C[Q],ke=Be.object,We=Be.geometry,Ke=J===null?Be.material:J,Qe=Be.group;ke.layers.test(ne.layers)&&ha(ke,G,ne,We,Ke,Qe)}}function ha(C,G,ne,J,Q,Ie){C.onBeforeRender(y,G,ne,J,Q,Ie),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(y,G,ne,J,C,Ie),Q.transparent===!0&&Q.side===ai&&Q.forceSinglePass===!1?(Q.side=an,Q.needsUpdate=!0,y.renderBufferDirect(ne,G,J,Q,C,Ie),Q.side=Ti,Q.needsUpdate=!0,y.renderBufferDirect(ne,G,J,Q,C,Ie),Q.side=ai):y.renderBufferDirect(ne,G,J,Q,C,Ie),C.onAfterRender(y,G,ne,J,Q,Ie)}function mr(C,G,ne){G.isScene!==!0&&(G=Xe);const J=oe.get(C),Q=m.state.lights,Ie=m.state.shadowsArray,Be=Q.state.version,ke=ge.getParameters(C,Q.state,Ie,G,ne),We=ge.getProgramCacheKey(ke);let Ke=J.programs;J.environment=C.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(C.isMeshStandardMaterial?R:we).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Ke===void 0&&(C.addEventListener("dispose",Le),Ke=new Map,J.programs=Ke);let Qe=Ke.get(We);if(Qe!==void 0){if(J.currentProgram===Qe&&J.lightsStateVersion===Be)return uo(C,ke),Qe}else ke.uniforms=ge.getUniforms(C),C.onBuild(ne,ke,y),C.onBeforeCompile(ke,y),Qe=ge.acquireProgram(ke,We),Ke.set(We,Qe),J.uniforms=ke.uniforms;const st=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(st.clippingPlanes=Ae.uniform),uo(C,ke),J.needsLights=ma(C),J.lightsStateVersion=Be,J.needsLights&&(st.ambientLightColor.value=Q.state.ambient,st.lightProbe.value=Q.state.probe,st.directionalLights.value=Q.state.directional,st.directionalLightShadows.value=Q.state.directionalShadow,st.spotLights.value=Q.state.spot,st.spotLightShadows.value=Q.state.spotShadow,st.rectAreaLights.value=Q.state.rectArea,st.ltc_1.value=Q.state.rectAreaLTC1,st.ltc_2.value=Q.state.rectAreaLTC2,st.pointLights.value=Q.state.point,st.pointLightShadows.value=Q.state.pointShadow,st.hemisphereLights.value=Q.state.hemi,st.directionalShadowMap.value=Q.state.directionalShadowMap,st.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,st.spotShadowMap.value=Q.state.spotShadowMap,st.spotLightMatrix.value=Q.state.spotLightMatrix,st.spotLightMap.value=Q.state.spotLightMap,st.pointShadowMap.value=Q.state.pointShadowMap,st.pointShadowMatrix.value=Q.state.pointShadowMatrix),J.currentProgram=Qe,J.uniformsList=null,Qe}function pa(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=ls.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function uo(C,G){const ne=oe.get(C);ne.outputColorSpace=G.outputColorSpace,ne.batching=G.batching,ne.instancing=G.instancing,ne.instancingColor=G.instancingColor,ne.instancingMorph=G.instancingMorph,ne.skinning=G.skinning,ne.morphTargets=G.morphTargets,ne.morphNormals=G.morphNormals,ne.morphColors=G.morphColors,ne.morphTargetsCount=G.morphTargetsCount,ne.numClippingPlanes=G.numClippingPlanes,ne.numIntersection=G.numClipIntersection,ne.vertexAlphas=G.vertexAlphas,ne.vertexTangents=G.vertexTangents,ne.toneMapping=G.toneMapping}function Li(C,G,ne,J,Q){G.isScene!==!0&&(G=Xe),Me.resetTextureUnits();const Ie=G.fog,Be=J.isMeshStandardMaterial?G.environment:null,ke=M===null?y.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Pi,We=(J.isMeshStandardMaterial?R:we).get(J.envMap||Be),Ke=J.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Qe=!!ne.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),st=!!ne.morphAttributes.position,At=!!ne.morphAttributes.normal,$t=!!ne.morphAttributes.color;let cn=Ei;J.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(cn=y.toneMapping);const qn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,pt=qn!==void 0?qn.length:0,et=oe.get(J),ho=m.state.lights;if(Z===!0&&(me===!0||C!==S)){const yn=C===S&&J.id===A;Ae.setState(J,C,yn)}let bt=!1;J.version===et.__version?(et.needsLights&&et.lightsStateVersion!==ho.state.version||et.outputColorSpace!==ke||Q.isBatchedMesh&&et.batching===!1||!Q.isBatchedMesh&&et.batching===!0||Q.isInstancedMesh&&et.instancing===!1||!Q.isInstancedMesh&&et.instancing===!0||Q.isSkinnedMesh&&et.skinning===!1||!Q.isSkinnedMesh&&et.skinning===!0||Q.isInstancedMesh&&et.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&et.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&et.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&et.instancingMorph===!1&&Q.morphTexture!==null||et.envMap!==We||J.fog===!0&&et.fog!==Ie||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ae.numPlanes||et.numIntersection!==Ae.numIntersection)||et.vertexAlphas!==Ke||et.vertexTangents!==Qe||et.morphTargets!==st||et.morphNormals!==At||et.morphColors!==$t||et.toneMapping!==cn||et.morphTargetsCount!==pt)&&(bt=!0):(bt=!0,et.__version=J.version);let Oi=et.currentProgram;bt===!0&&(Oi=mr(J,G,Q));let ud=!1,po=!1,fl=!1;const Gt=Oi.getUniforms(),fi=et.uniforms;if(Y.useProgram(Oi.program)&&(ud=!0,po=!0,fl=!0),J.id!==A&&(A=J.id,po=!0),ud||S!==C){Gt.setValue(P,"projectionMatrix",C.projectionMatrix),Gt.setValue(P,"viewMatrix",C.matrixWorldInverse);const yn=Gt.map.cameraPosition;yn!==void 0&&yn.setValue(P,xe.setFromMatrixPosition(C.matrixWorld)),j.logarithmicDepthBuffer&&Gt.setValue(P,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Gt.setValue(P,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,po=!0,fl=!0)}if(Q.isSkinnedMesh){Gt.setOptional(P,Q,"bindMatrix"),Gt.setOptional(P,Q,"bindMatrixInverse");const yn=Q.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Gt.setValue(P,"boneTexture",yn.boneTexture,Me))}Q.isBatchedMesh&&(Gt.setOptional(P,Q,"batchingTexture"),Gt.setValue(P,"batchingTexture",Q._matricesTexture,Me));const hl=ne.morphAttributes;if((hl.position!==void 0||hl.normal!==void 0||hl.color!==void 0)&&Ve.update(Q,ne,Oi),(po||et.receiveShadow!==Q.receiveShadow)&&(et.receiveShadow=Q.receiveShadow,Gt.setValue(P,"receiveShadow",Q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(fi.envMap.value=We,fi.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&G.environment!==null&&(fi.envMapIntensity.value=G.environmentIntensity),po&&(Gt.setValue(P,"toneMappingExposure",y.toneMappingExposure),et.needsLights&&fo(fi,fl),Ie&&J.fog===!0&&pe.refreshFogUniforms(fi,Ie),pe.refreshMaterialUniforms(fi,J,ie,W,m.state.transmissionRenderTarget[C.id]),ls.upload(P,pa(et),fi,Me)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ls.upload(P,pa(et),fi,Me),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Gt.setValue(P,"center",Q.center),Gt.setValue(P,"modelViewMatrix",Q.modelViewMatrix),Gt.setValue(P,"normalMatrix",Q.normalMatrix),Gt.setValue(P,"modelMatrix",Q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const yn=J.uniformsGroups;for(let pl=0,e0=yn.length;pl<e0;pl++){const dd=yn[pl];ct.update(dd,Oi),ct.bind(dd,Oi)}}return Oi}function fo(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function ma(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,G,ne){oe.get(C.texture).__webglTexture=G,oe.get(C.depthTexture).__webglTexture=ne;const J=oe.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=ne===void 0,J.__autoAllocateDepthBuffer||U.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,G){const ne=oe.get(C);ne.__webglFramebuffer=G,ne.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,ne=0){M=C,T=G,w=ne;let J=!0,Q=null,Ie=!1,Be=!1;if(C){const We=oe.get(C);We.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(P.FRAMEBUFFER,null),J=!1):We.__webglFramebuffer===void 0?Me.setupRenderTarget(C):We.__hasExternalTextures&&Me.rebindTextures(C,oe.get(C.texture).__webglTexture,oe.get(C.depthTexture).__webglTexture);const Ke=C.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Be=!0);const Qe=oe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[G])?Q=Qe[G][ne]:Q=Qe[G],Ie=!0):C.samples>0&&Me.useMultisampledRTT(C)===!1?Q=oe.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?Q=Qe[ne]:Q=Qe,x.copy(C.viewport),I.copy(C.scissor),$=C.scissorTest}else x.copy(ee).multiplyScalar(ie).floor(),I.copy(he).multiplyScalar(ie).floor(),$=ce;if(Y.bindFramebuffer(P.FRAMEBUFFER,Q)&&J&&Y.drawBuffers(C,Q),Y.viewport(x),Y.scissor(I),Y.setScissorTest($),Ie){const We=oe.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+G,We.__webglTexture,ne)}else if(Be){const We=oe.get(C.texture),Ke=G||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,We.__webglTexture,ne||0,Ke)}A=-1},this.readRenderTargetPixels=function(C,G,ne,J,Q,Ie,Be){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(ke=ke[Be]),ke){Y.bindFramebuffer(P.FRAMEBUFFER,ke);try{const We=C.texture,Ke=We.format,Qe=We.type;if(!j.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-J&&ne>=0&&ne<=C.height-Q&&P.readPixels(G,ne,J,Q,Fe.convert(Ke),Fe.convert(Qe),Ie)}finally{const We=M!==null?oe.get(M).__webglFramebuffer:null;Y.bindFramebuffer(P.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(C,G,ne=0){const J=Math.pow(2,-ne),Q=Math.floor(G.image.width*J),Ie=Math.floor(G.image.height*J);Me.setTexture2D(G,0),P.copyTexSubImage2D(P.TEXTURE_2D,ne,0,0,C.x,C.y,Q,Ie),Y.unbindTexture()},this.copyTextureToTexture=function(C,G,ne,J=0){const Q=G.image.width,Ie=G.image.height,Be=Fe.convert(ne.format),ke=Fe.convert(ne.type);Me.setTexture2D(ne,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,ne.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,ne.unpackAlignment),G.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,J,C.x,C.y,Q,Ie,Be,ke,G.image.data):G.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,J,C.x,C.y,G.mipmaps[0].width,G.mipmaps[0].height,Be,G.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,J,C.x,C.y,Be,ke,G.image),J===0&&ne.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(C,G,ne,J,Q=0){const Ie=C.max.x-C.min.x,Be=C.max.y-C.min.y,ke=C.max.z-C.min.z,We=Fe.convert(J.format),Ke=Fe.convert(J.type);let Qe;if(J.isData3DTexture)Me.setTexture3D(J,0),Qe=P.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)Me.setTexture2DArray(J,0),Qe=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,J.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,J.unpackAlignment);const st=P.getParameter(P.UNPACK_ROW_LENGTH),At=P.getParameter(P.UNPACK_IMAGE_HEIGHT),$t=P.getParameter(P.UNPACK_SKIP_PIXELS),cn=P.getParameter(P.UNPACK_SKIP_ROWS),qn=P.getParameter(P.UNPACK_SKIP_IMAGES),pt=ne.isCompressedTexture?ne.mipmaps[Q]:ne.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,pt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,C.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,C.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,C.min.z),ne.isDataTexture||ne.isData3DTexture?P.texSubImage3D(Qe,Q,G.x,G.y,G.z,Ie,Be,ke,We,Ke,pt.data):J.isCompressedArrayTexture?P.compressedTexSubImage3D(Qe,Q,G.x,G.y,G.z,Ie,Be,ke,We,pt.data):P.texSubImage3D(Qe,Q,G.x,G.y,G.z,Ie,Be,ke,We,Ke,pt),P.pixelStorei(P.UNPACK_ROW_LENGTH,st),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,At),P.pixelStorei(P.UNPACK_SKIP_PIXELS,$t),P.pixelStorei(P.UNPACK_SKIP_ROWS,cn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,qn),Q===0&&J.generateMipmaps&&P.generateMipmap(Qe),Y.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Me.setTextureCube(C,0):C.isData3DTexture?Me.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Me.setTexture2DArray(C,0):Me.setTexture2D(C,0),Y.unbindTexture()},this.resetState=function(){T=0,w=0,M=null,Y.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===bu?"display-p3":"srgb",n.unpackColorSpace=mt.workingColorSpace===js?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Fm extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class jC extends cr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ws=new H,Ts=new H,Nf=new Ct,xo=new Su,Ba=new aa,ql=new H,Ff=new H;class qC extends Jt{constructor(e=new ln,n=new jC){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)ws.fromBufferAttribute(n,r-1),Ts.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ws.distanceTo(Ts);e.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(r),Ba.radius+=o,e.ray.intersectsSphere(Ba)===!1)return;Nf.copy(r).invert(),xo.copy(e.ray).applyMatrix4(Nf);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let g=h,m=v-1;g<m;g+=c){const p=u.getX(g),b=u.getX(g+1),y=za(this,e,xo,l,p,b);y&&n.push(y)}if(this.isLineLoop){const g=u.getX(v-1),m=u.getX(h),p=za(this,e,xo,l,g,m);p&&n.push(p)}}else{const h=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let g=h,m=v-1;g<m;g+=c){const p=za(this,e,xo,l,g,g+1);p&&n.push(p)}if(this.isLineLoop){const g=za(this,e,xo,l,v-1,h);g&&n.push(g)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}function za(t,e,n,i,r,o){const a=t.geometry.attributes.position;if(ws.fromBufferAttribute(a,r),Ts.fromBufferAttribute(a,o),n.distanceSqToSegment(ws,Ts,ql,Ff)>i)return;ql.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(ql);if(!(l<e.near||l>e.far))return{distance:l,point:Ff.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const Uf=new H,Bf=new H;class YC extends qC{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)Uf.fromBufferAttribute(n,r),Bf.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Uf.distanceTo(Bf);e.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class KC extends cr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zf=new Ct,Dc=new Su,ka=new aa,Ha=new H;class kf extends Jt{constructor(e=new ln,n=new KC){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(r),ka.radius+=o,e.ray.intersectsSphere(ka)===!1)return;zf.copy(r).invert(),Dc.copy(e.ray).applyMatrix4(zf);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let v=f,g=h;v<g;v++){const m=c.getX(v);Ha.fromBufferAttribute(d,m),Hf(Ha,m,l,r,e,n,this)}}else{const f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let v=f,g=h;v<g;v++)Ha.fromBufferAttribute(d,v),Hf(Ha,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}function Hf(t,e,n,i,r,o,a){const s=Dc.distanceSqToPoint(t);if(s<n){const l=new H;Dc.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:a})}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),o=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),o+=i.distanceTo(r),n.push(o),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const o=i.length;let a;n?a=n:a=e*i[o-1];let s=0,l=o-1,c;for(;s<=l;)if(r=Math.floor(s+(l-s)/2),c=i[r]-a,c<0)s=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(o-1);const u=i[r],f=i[r+1]-u,h=(a-u)/f;return(r+h)/(o-1)}getTangent(e,n){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const a=this.getPoint(r),s=this.getPoint(o),l=n||(a.isVector2?new Oe:new H);return l.copy(s).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new H,r=[],o=[],a=[],s=new H,l=new Ct;for(let h=0;h<=e;h++){const v=h/e;r[h]=this.getTangentAt(v,new H)}o[0]=new H,a[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),o[0].crossVectors(r[0],s),a[0].crossVectors(r[0],o[0]);for(let h=1;h<=e;h++){if(o[h]=o[h-1].clone(),a[h]=a[h-1].clone(),s.crossVectors(r[h-1],r[h]),s.length()>Number.EPSILON){s.normalize();const v=Math.acos(jt(r[h-1].dot(r[h]),-1,1));o[h].applyMatrix4(l.makeRotationAxis(s,v))}a[h].crossVectors(r[h],o[h])}if(n===!0){let h=Math.acos(jt(o[0].dot(o[e]),-1,1));h/=e,r[0].dot(s.crossVectors(o[0],o[e]))>0&&(h=-h);for(let v=1;v<=e;v++)o[v].applyMatrix4(l.makeRotationAxis(r[v],h*v)),a[v].crossVectors(r[v],o[v])}return{tangents:r,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class wu extends jn{constructor(e=0,n=0,i=1,r=1,o=0,a=Math.PI*2,s=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=s,this.aRotation=l}getPoint(e,n=new Oe){const i=n,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(a?o=0:o=r),this.aClockwise===!0&&!a&&(o===r?o=-r:o=o-r);const s=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(s),c=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ZC extends wu{constructor(e,n,i,r,o,a){super(e,n,i,i,r,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Tu(){let t=0,e=0,n=0,i=0;function r(o,a,s,l){t=o,e=s,n=-3*o+3*a-2*s-l,i=2*o-2*a+s+l}return{initCatmullRom:function(o,a,s,l,c){r(a,s,c*(s-o),c*(l-a))},initNonuniformCatmullRom:function(o,a,s,l,c,u,d){let f=(a-o)/c-(s-o)/(c+u)+(s-a)/u,h=(s-a)/u-(l-a)/(u+d)+(l-s)/d;f*=u,h*=u,r(a,s,f,h)},calc:function(o){const a=o*o,s=a*o;return t+e*o+n*a+i*s}}}const Va=new H,Yl=new Tu,Kl=new Tu,Zl=new Tu;class JC extends jn{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new H){const i=n,r=this.points,o=r.length,a=(o-(this.closed?0:1))*e;let s=Math.floor(a),l=a-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/o)+1)*o:l===0&&s===o-1&&(s=o-2,l=1);let c,u;this.closed||s>0?c=r[(s-1)%o]:(Va.subVectors(r[0],r[1]).add(r[0]),c=Va);const d=r[s%o],f=r[(s+1)%o];if(this.closed||s+2<o?u=r[(s+2)%o]:(Va.subVectors(r[o-1],r[o-2]).add(r[o-1]),u=Va),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(d),h),g=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);g<1e-4&&(g=1),v<1e-4&&(v=g),m<1e-4&&(m=g),Yl.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,v,g,m),Kl.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,v,g,m),Zl.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,v,g,m)}else this.curveType==="catmullrom"&&(Yl.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),Kl.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Zl.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(Yl.calc(l),Kl.calc(l),Zl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new H().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Vf(t,e,n,i,r){const o=(i-e)*.5,a=(r-n)*.5,s=t*t,l=t*s;return(2*n-2*i+o+a)*l+(-3*n+3*i-2*o-a)*s+o*t+n}function QC(t,e){const n=1-t;return n*n*e}function eA(t,e){return 2*(1-t)*t*e}function tA(t,e){return t*t*e}function Io(t,e,n,i){return QC(t,e)+eA(t,n)+tA(t,i)}function nA(t,e){const n=1-t;return n*n*n*e}function iA(t,e){const n=1-t;return 3*n*n*t*e}function rA(t,e){return 3*(1-t)*t*t*e}function oA(t,e){return t*t*t*e}function Lo(t,e,n,i,r){return nA(t,e)+iA(t,n)+rA(t,i)+oA(t,r)}class Um extends jn{constructor(e=new Oe,n=new Oe,i=new Oe,r=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Oe){const i=n,r=this.v0,o=this.v1,a=this.v2,s=this.v3;return i.set(Lo(e,r.x,o.x,a.x,s.x),Lo(e,r.y,o.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class aA extends jn{constructor(e=new H,n=new H,i=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new H){const i=n,r=this.v0,o=this.v1,a=this.v2,s=this.v3;return i.set(Lo(e,r.x,o.x,a.x,s.x),Lo(e,r.y,o.y,a.y,s.y),Lo(e,r.z,o.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bm extends jn{constructor(e=new Oe,n=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Oe){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Oe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sA extends jn{constructor(e=new H,n=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new H){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new H){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zm extends jn{constructor(e=new Oe,n=new Oe,i=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Oe){const i=n,r=this.v0,o=this.v1,a=this.v2;return i.set(Io(e,r.x,o.x,a.x),Io(e,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lA extends jn{constructor(e=new H,n=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new H){const i=n,r=this.v0,o=this.v1,a=this.v2;return i.set(Io(e,r.x,o.x,a.x),Io(e,r.y,o.y,a.y),Io(e,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class km extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Oe){const i=n,r=this.points,o=(r.length-1)*e,a=Math.floor(o),s=o-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return i.set(Vf(s,l.x,c.x,u.x,d.x),Vf(s,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Oe().fromArray(r))}return this}}var Nc=Object.freeze({__proto__:null,ArcCurve:ZC,CatmullRomCurve3:JC,CubicBezierCurve:Um,CubicBezierCurve3:aA,EllipseCurve:wu,LineCurve:Bm,LineCurve3:sA,QuadraticBezierCurve:zm,QuadraticBezierCurve3:lA,SplineCurve:km});class cA extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nc[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let o=0;for(;o<r.length;){if(r[o]>=i){const a=r[o]-i,s=this.curves[o],l=s.getLength(),c=l===0?0:1-a/l;return s.getPointAt(c,n)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,o=this.curves;r<o.length;r++){const a=o[r],s=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(s);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Nc[r.type]().fromJSON(r))}return this}}class $f extends cA{constructor(e){super(),this.type="Path",this.currentPoint=new Oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Bm(this.currentPoint.clone(),new Oe(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const o=new zm(this.currentPoint.clone(),new Oe(e,n),new Oe(i,r));return this.curves.push(o),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,o,a){const s=new Um(this.currentPoint.clone(),new Oe(e,n),new Oe(i,r),new Oe(o,a));return this.curves.push(s),this.currentPoint.set(o,a),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new km(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,o,a){const s=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+s,n+l,i,r,o,a),this}absarc(e,n,i,r,o,a){return this.absellipse(e,n,i,i,r,o,a),this}ellipse(e,n,i,r,o,a,s,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,o,a,s,l),this}absellipse(e,n,i,r,o,a,s,l){const c=new wu(e,n,i,r,o,a,s,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}const $a=new H,Ga=new H,Jl=new H,Wa=new Rn;class uA extends ln{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),o=Math.cos(ss*n),a=e.getIndex(),s=e.getAttribute("position"),l=a?a.count:s.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},h=[];for(let v=0;v<l;v+=3){a?(c[0]=a.getX(v),c[1]=a.getX(v+1),c[2]=a.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:g,b:m,c:p}=Wa;if(g.fromBufferAttribute(s,c[0]),m.fromBufferAttribute(s,c[1]),p.fromBufferAttribute(s,c[2]),Wa.getNormal(Jl),d[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const y=(b+1)%3,_=d[b],T=d[y],w=Wa[u[b]],M=Wa[u[y]],A=`${_}_${T}`,S=`${T}_${_}`;S in f&&f[S]?(Jl.dot(f[S].normal)<=o&&(h.push(w.x,w.y,w.z),h.push(M.x,M.y,M.z)),f[S]=null):A in f||(f[A]={index0:c[b],index1:c[y],normal:Jl.clone()})}}for(const v in f)if(f[v]){const{index0:g,index1:m}=f[v];$a.fromBufferAttribute(s,g),Ga.fromBufferAttribute(s,m),h.push($a.x,$a.y,$a.z),h.push(Ga.x,Ga.y,Ga.z)}this.setAttribute("position",new Qt(h,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Hm extends $f{constructor(e){super(e),this.uuid=ao(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new $f().fromJSON(r))}return this}}const dA={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let o=Vm(t,0,r,n,!0);const a=[];if(!o||o.next===o.prev)return a;let s,l,c,u,d,f,h;if(i&&(o=vA(t,e,o,n)),t.length>80*n){s=c=t[0],l=u=t[1];for(let v=n;v<r;v+=n)d=t[v],f=t[v+1],d<s&&(s=d),f<l&&(l=f),d>c&&(c=d),f>u&&(u=f);h=Math.max(c-s,u-l),h=h!==0?32767/h:0}return zo(o,a,n,s,l,h,0),a}};function Vm(t,e,n,i,r){let o,a;if(r===CA(t,e,n,i)>0)for(o=e;o<n;o+=i)a=Gf(o,t[o],t[o+1],a);else for(o=n-i;o>=e;o-=i)a=Gf(o,t[o],t[o+1],a);return a&&Ks(a,a.next)&&(Ho(a),a=a.next),a}function rr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Ks(n,n.next)||wt(n.prev,n,n.next)===0)){if(Ho(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function zo(t,e,n,i,r,o,a){if(!t)return;!a&&o&&bA(t,i,r,o);let s=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,o?hA(t,i,r,o):fA(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Ho(t),t=c.next,s=c.next;continue}if(t=c,t===s){a?a===1?(t=pA(rr(t),e,n),zo(t,e,n,i,r,o,2)):a===2&&mA(t,e,n,i,r,o):zo(rr(t),e,n,i,r,o,1);break}}}function fA(t){const e=t.prev,n=t,i=t.next;if(wt(e,n,i)>=0)return!1;const r=e.x,o=n.x,a=i.x,s=e.y,l=n.y,c=i.y,u=r<o?r<a?r:a:o<a?o:a,d=s<l?s<c?s:c:l<c?l:c,f=r>o?r>a?r:a:o>a?o:a,h=s>l?s>c?s:c:l>c?l:c;let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=f&&v.y>=d&&v.y<=h&&Ur(r,s,o,l,a,c,v.x,v.y)&&wt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function hA(t,e,n,i){const r=t.prev,o=t,a=t.next;if(wt(r,o,a)>=0)return!1;const s=r.x,l=o.x,c=a.x,u=r.y,d=o.y,f=a.y,h=s<l?s<c?s:c:l<c?l:c,v=u<d?u<f?u:f:d<f?d:f,g=s>l?s>c?s:c:l>c?l:c,m=u>d?u>f?u:f:d>f?d:f,p=Fc(h,v,e,n,i),b=Fc(g,m,e,n,i);let y=t.prevZ,_=t.nextZ;for(;y&&y.z>=p&&_&&_.z<=b;){if(y.x>=h&&y.x<=g&&y.y>=v&&y.y<=m&&y!==r&&y!==a&&Ur(s,u,l,d,c,f,y.x,y.y)&&wt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=h&&_.x<=g&&_.y>=v&&_.y<=m&&_!==r&&_!==a&&Ur(s,u,l,d,c,f,_.x,_.y)&&wt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=h&&y.x<=g&&y.y>=v&&y.y<=m&&y!==r&&y!==a&&Ur(s,u,l,d,c,f,y.x,y.y)&&wt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=b;){if(_.x>=h&&_.x<=g&&_.y>=v&&_.y<=m&&_!==r&&_!==a&&Ur(s,u,l,d,c,f,_.x,_.y)&&wt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function pA(t,e,n){let i=t;do{const r=i.prev,o=i.next.next;!Ks(r,o)&&$m(r,i,i.next,o)&&ko(r,o)&&ko(o,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(o.i/n|0),Ho(i),Ho(i.next),i=t=o),i=i.next}while(i!==t);return rr(i)}function mA(t,e,n,i,r,o){let a=t;do{let s=a.next.next;for(;s!==a.prev;){if(a.i!==s.i&&EA(a,s)){let l=Gm(a,s);a=rr(a,a.next),l=rr(l,l.next),zo(a,e,n,i,r,o,0),zo(l,e,n,i,r,o,0);return}s=s.next}a=a.next}while(a!==t)}function vA(t,e,n,i){const r=[];let o,a,s,l,c;for(o=0,a=e.length;o<a;o++)s=e[o]*i,l=o<a-1?e[o+1]*i:t.length,c=Vm(t,s,l,i,!1),c===c.next&&(c.steiner=!0),r.push(MA(c));for(r.sort(gA),o=0;o<r.length;o++)n=_A(r[o],n);return n}function gA(t,e){return t.x-e.x}function _A(t,e){const n=yA(t,e);if(!n)return e;const i=Gm(n,t);return rr(i,i.next),rr(n,n.next)}function yA(t,e){let n=e,i=-1/0,r;const o=t.x,a=t.y;do{if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){const f=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=o&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===o))return r}n=n.next}while(n!==e);if(!r)return null;const s=r,l=r.x,c=r.y;let u=1/0,d;n=r;do o>=n.x&&n.x>=l&&o!==n.x&&Ur(a<c?o:i,a,l,c,a<c?i:o,a,n.x,n.y)&&(d=Math.abs(a-n.y)/(o-n.x),ko(n,t)&&(d<u||d===u&&(n.x>r.x||n.x===r.x&&xA(r,n)))&&(r=n,u=d)),n=n.next;while(n!==s);return r}function xA(t,e){return wt(t.prev,t,e.prev)<0&&wt(e.next,t,t.next)<0}function bA(t,e,n,i){let r=t;do r.z===0&&(r.z=Fc(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,SA(r)}function SA(t){let e,n,i,r,o,a,s,l,c=1;do{for(n=t,t=null,o=null,a=0;n;){for(a++,i=n,s=0,e=0;e<c&&(s++,i=i.nextZ,!!i);e++);for(l=c;s>0||l>0&&i;)s!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,s--):(r=i,i=i.nextZ,l--),o?o.nextZ=r:t=r,r.prevZ=o,o=r;n=i}o.nextZ=null,c*=2}while(a>1);return t}function Fc(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function MA(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Ur(t,e,n,i,r,o,a,s){return(r-a)*(e-s)>=(t-a)*(o-s)&&(t-a)*(i-s)>=(n-a)*(e-s)&&(n-a)*(o-s)>=(r-a)*(i-s)}function EA(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!wA(t,e)&&(ko(t,e)&&ko(e,t)&&TA(t,e)&&(wt(t.prev,t,e.prev)||wt(t,e.prev,e))||Ks(t,e)&&wt(t.prev,t,t.next)>0&&wt(e.prev,e,e.next)>0)}function wt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Ks(t,e){return t.x===e.x&&t.y===e.y}function $m(t,e,n,i){const r=ja(wt(t,e,n)),o=ja(wt(t,e,i)),a=ja(wt(n,i,t)),s=ja(wt(n,i,e));return!!(r!==o&&a!==s||r===0&&Xa(t,n,e)||o===0&&Xa(t,i,e)||a===0&&Xa(n,t,i)||s===0&&Xa(n,e,i))}function Xa(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function ja(t){return t>0?1:t<0?-1:0}function wA(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&$m(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function ko(t,e){return wt(t.prev,t,t.next)<0?wt(t,e,t.next)>=0&&wt(t,t.prev,e)>=0:wt(t,e,t.prev)<0||wt(t,t.next,e)<0}function TA(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,o=(t.y+e.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&r<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Gm(t,e){const n=new Uc(t.i,t.x,t.y),i=new Uc(e.i,e.x,e.y),r=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,o.next=i,i.prev=o,i}function Gf(t,e,n,i){const r=new Uc(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ho(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Uc(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function CA(t,e,n,i){let r=0;for(let o=e,a=n-i;o<n;o+=i)r+=(t[a]-t[o])*(t[o+1]+t[a+1]),a=o;return r}class Oo{static area(e){const n=e.length;let i=0;for(let r=n-1,o=0;o<n;r=o++)i+=e[r].x*e[o].y-e[o].x*e[r].y;return i*.5}static isClockWise(e){return Oo.area(e)<0}static triangulateShape(e,n){const i=[],r=[],o=[];Wf(e),Xf(i,e);let a=e.length;n.forEach(Wf);for(let l=0;l<n.length;l++)r.push(a),a+=n[l].length,Xf(i,n[l]);const s=dA.triangulate(i,r);for(let l=0;l<s.length;l+=3)o.push(s.slice(l,l+3));return o}}function Wf(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Xf(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Cs extends ln{constructor(e=new Hm([new Oe(.5,.5),new Oe(-.5,.5),new Oe(-.5,-.5),new Oe(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],o=[];for(let s=0,l=e.length;s<l;s++){const c=e[s];a(c)}this.setAttribute("position",new Qt(r,3)),this.setAttribute("uv",new Qt(o,2)),this.computeVertexNormals();function a(s){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1;let f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,h=n.bevelThickness!==void 0?n.bevelThickness:.2,v=n.bevelSize!==void 0?n.bevelSize:h-.1,g=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const p=n.extrudePath,b=n.UVGenerator!==void 0?n.UVGenerator:AA;let y,_=!1,T,w,M,A;p&&(y=p.getSpacedPoints(u),_=!0,f=!1,T=p.computeFrenetFrames(u,!1),w=new H,M=new H,A=new H),f||(m=0,h=0,v=0,g=0);const S=s.extractPoints(c);let x=S.shape;const I=S.holes;if(!Oo.isClockWise(x)){x=x.reverse();for(let U=0,j=I.length;U<j;U++){const Y=I[U];Oo.isClockWise(Y)&&(I[U]=Y.reverse())}}const L=Oo.triangulateShape(x,I),B=x;for(let U=0,j=I.length;U<j;U++){const Y=I[U];x=x.concat(Y)}function D(U,j,Y){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(j,Y)}const W=x.length,ie=L.length;function X(U,j,Y){let de,oe,Me;const we=U.x-j.x,R=U.y-j.y,E=Y.x-U.x,K=Y.y-U.y,le=we*we+R*R,ge=we*K-R*E;if(Math.abs(ge)>Number.EPSILON){const pe=Math.sqrt(le),He=Math.sqrt(E*E+K*K),Pe=j.x-R/pe,Ae=j.y+we/pe,Je=Y.x-K/He,Te=Y.y+E/He,Ve=((Je-Pe)*K-(Te-Ae)*E)/(we*K-R*E);de=Pe+we*Ve-U.x,oe=Ae+R*Ve-U.y;const at=de*de+oe*oe;if(at<=2)return new Oe(de,oe);Me=Math.sqrt(at/2)}else{let pe=!1;we>Number.EPSILON?E>Number.EPSILON&&(pe=!0):we<-Number.EPSILON?E<-Number.EPSILON&&(pe=!0):Math.sign(R)===Math.sign(K)&&(pe=!0),pe?(de=-R,oe=we,Me=Math.sqrt(le)):(de=we,oe=R,Me=Math.sqrt(le/2))}return new Oe(de/Me,oe/Me)}const F=[];for(let U=0,j=B.length,Y=j-1,de=U+1;U<j;U++,Y++,de++)Y===j&&(Y=0),de===j&&(de=0),F[U]=X(B[U],B[Y],B[de]);const ee=[];let he,ce=F.concat();for(let U=0,j=I.length;U<j;U++){const Y=I[U];he=[];for(let de=0,oe=Y.length,Me=oe-1,we=de+1;de<oe;de++,Me++,we++)Me===oe&&(Me=0),we===oe&&(we=0),he[de]=X(Y[de],Y[Me],Y[we]);ee.push(he),ce=ce.concat(he)}for(let U=0;U<m;U++){const j=U/m,Y=h*Math.cos(j*Math.PI/2),de=v*Math.sin(j*Math.PI/2)+g;for(let oe=0,Me=B.length;oe<Me;oe++){const we=D(B[oe],F[oe],de);xe(we.x,we.y,-Y)}for(let oe=0,Me=I.length;oe<Me;oe++){const we=I[oe];he=ee[oe];for(let R=0,E=we.length;R<E;R++){const K=D(we[R],he[R],de);xe(K.x,K.y,-Y)}}}const De=v+g;for(let U=0;U<W;U++){const j=f?D(x[U],ce[U],De):x[U];_?(M.copy(T.normals[0]).multiplyScalar(j.x),w.copy(T.binormals[0]).multiplyScalar(j.y),A.copy(y[0]).add(M).add(w),xe(A.x,A.y,A.z)):xe(j.x,j.y,0)}for(let U=1;U<=u;U++)for(let j=0;j<W;j++){const Y=f?D(x[j],ce[j],De):x[j];_?(M.copy(T.normals[U]).multiplyScalar(Y.x),w.copy(T.binormals[U]).multiplyScalar(Y.y),A.copy(y[U]).add(M).add(w),xe(A.x,A.y,A.z)):xe(Y.x,Y.y,d/u*U)}for(let U=m-1;U>=0;U--){const j=U/m,Y=h*Math.cos(j*Math.PI/2),de=v*Math.sin(j*Math.PI/2)+g;for(let oe=0,Me=B.length;oe<Me;oe++){const we=D(B[oe],F[oe],de);xe(we.x,we.y,d+Y)}for(let oe=0,Me=I.length;oe<Me;oe++){const we=I[oe];he=ee[oe];for(let R=0,E=we.length;R<E;R++){const K=D(we[R],he[R],de);_?xe(K.x,K.y+y[u-1].y,y[u-1].x+Y):xe(K.x,K.y,d+Y)}}}Z(),me();function Z(){const U=r.length/3;if(f){let j=0,Y=W*j;for(let de=0;de<ie;de++){const oe=L[de];Xe(oe[2]+Y,oe[1]+Y,oe[0]+Y)}j=u+m*2,Y=W*j;for(let de=0;de<ie;de++){const oe=L[de];Xe(oe[0]+Y,oe[1]+Y,oe[2]+Y)}}else{for(let j=0;j<ie;j++){const Y=L[j];Xe(Y[2],Y[1],Y[0])}for(let j=0;j<ie;j++){const Y=L[j];Xe(Y[0]+W*u,Y[1]+W*u,Y[2]+W*u)}}i.addGroup(U,r.length/3-U,0)}function me(){const U=r.length/3;let j=0;Ee(B,j),j+=B.length;for(let Y=0,de=I.length;Y<de;Y++){const oe=I[Y];Ee(oe,j),j+=oe.length}i.addGroup(U,r.length/3-U,1)}function Ee(U,j){let Y=U.length;for(;--Y>=0;){const de=Y;let oe=Y-1;oe<0&&(oe=U.length-1);for(let Me=0,we=u+m*2;Me<we;Me++){const R=W*Me,E=W*(Me+1),K=j+de+R,le=j+oe+R,ge=j+oe+E,pe=j+de+E;ae(K,le,ge,pe)}}}function xe(U,j,Y){l.push(U),l.push(j),l.push(Y)}function Xe(U,j,Y){P(U),P(j),P(Y);const de=r.length/3,oe=b.generateTopUV(i,r,de-3,de-2,de-1);te(oe[0]),te(oe[1]),te(oe[2])}function ae(U,j,Y,de){P(U),P(j),P(de),P(j),P(Y),P(de);const oe=r.length/3,Me=b.generateSideWallUV(i,r,oe-6,oe-3,oe-2,oe-1);te(Me[0]),te(Me[1]),te(Me[3]),te(Me[1]),te(Me[2]),te(Me[3])}function P(U){r.push(l[U*3+0]),r.push(l[U*3+1]),r.push(l[U*3+2])}function te(U){o.push(U.x),o.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return PA(n,i,e)}static fromJSON(e,n){const i=[];for(let o=0,a=e.shapes.length;o<a;o++){const s=n[e.shapes[o]];i.push(s)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Nc[r.type]().fromJSON(r)),new Cs(i,e.options)}}const AA={generateTopUV:function(t,e,n,i,r){const o=e[n*3],a=e[n*3+1],s=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Oe(o,a),new Oe(s,l),new Oe(c,u)]},generateSideWallUV:function(t,e,n,i,r,o){const a=e[n*3],s=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[r*3],h=e[r*3+1],v=e[r*3+2],g=e[o*3],m=e[o*3+1],p=e[o*3+2];return Math.abs(s-u)<Math.abs(a-c)?[new Oe(a,1-l),new Oe(c,1-d),new Oe(f,1-v),new Oe(g,1-p)]:[new Oe(s,1-l),new Oe(u,1-d),new Oe(h,1-v),new Oe(m,1-p)]}};function PA(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const o=t[i];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Cu extends ln{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:a,thetaLength:s},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+s,Math.PI);let c=0;const u=[],d=new H,f=new H,h=[],v=[],g=[],m=[];for(let p=0;p<=i;p++){const b=[],y=p/i;let _=0;p===0&&a===0?_=.5/n:p===i&&l===Math.PI&&(_=-.5/n);for(let T=0;T<=n;T++){const w=T/n;d.x=-e*Math.cos(r+w*o)*Math.sin(a+y*s),d.y=e*Math.cos(a+y*s),d.z=e*Math.sin(r+w*o)*Math.sin(a+y*s),v.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),m.push(w+_,1-y),b.push(c++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<n;b++){const y=u[p][b+1],_=u[p][b],T=u[p+1][b],w=u[p+1][b+1];(p!==0||a>0)&&h.push(y,_,w),(p!==i-1||l<Math.PI)&&h.push(_,T,w)}this.setIndex(h),this.setAttribute("position",new Qt(v,3)),this.setAttribute("normal",new Qt(g,3)),this.setAttribute("uv",new Qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class RA extends cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pm,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class IA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=jf();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function jf(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xu);const LA={class:"three-pie-container"},OA={class:"three-pie-main"},DA={class:"pie-value"},NA={class:"pie-label"},qf=65,FA=ve({name:"BqPie",__name:"Pie",props:{data:{default:()=>[{value:.6637,label:"TM"},{value:.2171,label:"DOUYIN"},{value:.0764,label:"JD"},{value:.0237,label:"VIP"},{value:.0191,label:"Others"}]},colorList:{default:()=>["#93DBFF","#4B84F0","#FFD982","#00D7FF","#49C384"]},innerRadius:{default:60},outRadius:{default:84},depth:{default:15},centerTooltip:{type:Boolean,default:!0}},setup(t){let e=0;const n=t;let i=["#93DBFF","#4B84F0","#FFD982","#00D7FF","#49C384"];const r=Ce();let o=null,a=null;const s=new Fm;let l=null;const c=()=>{var A;if(r.value){const S=((A=r.value)==null?void 0:A.clientWidth)/r.value.clientHeight,I=Math.min(r.value.clientWidth,r.value.clientHeight)/2;l=new Am(-I*S,I*S,I,-I,1,1e3),l.position.set(0,0,686),l.lookAt(s.position),o&&s.remove(o),o=u(),M(),s.add(o),a=new Nm({canvas:r.value,antialias:!0,alpha:!0}),a.setSize(r.value.clientWidth,r.value.clientHeight),a.setClearColor(16777215,0),a.setPixelRatio(2),a.render(s,l)}},u=()=>{const A=new To;return b.value.forEach((S,x)=>{const I=i[x%i.length],$=n.colorList[x%n.colorList.length],L=h(S.startAngle,S.endAngle,I,"sector");A.add(L);const B=h(S.startAngle,S.endAngle,$,"bottomSector");B.renderOrder=999,A.add(B);const D=v(S.startAngle,S.endAngle);A.add(D)}),A},d=V(()=>({curveSegments:40,depth:n.depth,bevelEnabled:!1,bevelSegments:9,steps:2,bevelSize:0,bevelThickness:0})),f=(A,S,x,I)=>{const $=new Hm;return $.moveTo(n.outRadius,0),$.absarc(0,0,x,A,S,!0),$.absarc(0,0,I,S,A,!1),$},h=(A,S,x,I)=>{const $=f(A,S,n.innerRadius,n.outRadius),L=as(d.value);let B=.9;I==="bottomSector"&&(B=.6,L.depth=1);const D=new Cs($,L),W=new Mu({color:x,opacity:B,transparent:!0,depthTest:!0}),ie=new In(D,W);return ie.position.set(0,0,0),ie.renderOrder=2,ie.rotateX(-(qf/180)*Math.PI),ie},v=(A,S)=>{const x=f(A,S,n.innerRadius+1,n.outRadius-1),I=as(d.value),$=new Cs(x,I),L=new uA($,10),B=new RA({fog:!1,color:16777215,emissive:16777215,transparent:!0,opacity:.5,roughness:0}),D=new YC(L,B);return D.rotateX(-(qf/180)*Math.PI),D.renderOrder=4,D},g=function(){let A=!1;return n.data.length!==n.colorList.length&&(console.warn("颜色和数据长度不匹配"),A=!0),A}(),m=.3*Math.PI*2,p=Ce(0),b=Ce([]);let y=0;en(()=>{if(g)return!1;if(i=n.colorList||i,b.value=as(n.data)||[],b.value.length===0)return;y=b.value.reduce((S,x)=>typeof x.value=="number"?S+x.value:S,0);let A=m;b.value.forEach(S=>{S.startAngle=A,S.endAngle=S.startAngle-S.value/y*Math.PI*2,A=S.endAngle}),on(()=>{c(),w()})});const _=Ce(0);let T=0;const w=()=>{const A=b.value.length;if((p.value%1>.99||p.value%1<.01)&&T<1){_.value=Math.round(p.value)>=A?0:Math.round(p.value),T+=.01,pd&&(e=requestAnimationFrame(w));return}T=0,p.value+=.01,p.value>A&&(p.value=0),M(),l&&(a==null||a.render(s,l)),pd&&(e=requestAnimationFrame(w))},M=()=>{const A=b.value.length,S=(p.value+1)*10%(A*10)/10;o==null||o.children.forEach((x,I)=>{if(Math.floor(p.value)===Math.ceil((I-2)/3)){const $=1-p.value%1;x.scale.set(1,1,1+$)}if(Math.floor(S)===Math.ceil((I-2)/3)){const $=p.value%1;x.scale.set(1,1,1+$)}})};return Wn(()=>{cancelAnimationFrame(e)}),(A,S)=>(k(),re("div",LA,[fe("div",OA,[fe("canvas",{ref_key:"pieRef",ref:r,class:"pie-canvas"},null,512),n.centerTooltip?(k(!0),re(ot,{key:0},Bt(n.data,(x,I)=>(k(),re("div",{key:x.value,class:"pie-info",style:Xr({opacity:q(_)===I?1:0})},[fe("div",DA,ht(q(LS)(x.value)),1),fe("div",NA,ht(x.label),1)],4))),128)):Ue("",!0)]),se(A.$slots,"footer",{},void 0,!0)]))}}),Wm=Ge(FA,[["__scopeId","data-v-0910c0b8"]]),UA={class:"basics-pie"},BA=ve({name:"BqBasicsPie",__name:"BasicsPie",setup(t){return(e,n)=>{const i=Wm;return k(),re("div",UA,[O(i,Zi(e.$attrs,du(e.$props)),null,16)])}}}),zA=Ge(BA,[["__scopeId","data-v-e2db0cd2"]]),kA={class:"slot-pie"},HA="https://tqa.oss-cn-shanghai.aliyuncs.com/val/024af179-9e6d-4ce1-84c6-86a2ddb42ca5.png",VA=ve({name:"BqSlotPie",__name:"SlotPie",setup(t){return(e,n)=>{const i=Wm;return k(),re("div",kA,[O(i,Zi(e.$attrs,du(e.$props)),{footer:ye(()=>[fe("div",{class:"footer"},[fe("img",{src:HA})])]),_:1},16)])}}}),$A=Ge(VA,[["__scopeId","data-v-4142430c"]]),GA=Ai(zA),WA=Ai($A),XA=ve({name:"BqScaleBox",__name:"ScaleBox",props:{width:{default:1920},height:{default:1080}},setup(t){const e=t,n=Ce(0),i=Ce(),r=()=>{const{width:a,height:s}=Xp(e),{clientWidth:l,clientHeight:c}=i.value,u=c/s.value,d=l/a.value;return d<u?d:u},o=()=>{console.log("执行了"),n.value=r()};return(a,s)=>{const l=Wp("dom-resize");return fu((k(),re("div",{class:"bq-scale-box",ref_key:"scaleContainer",ref:i},[fe("div",{class:"scale-box",ref:"ScaleBox",style:Xr({"--scale":q(n),width:e.width+"px",height:e.height+"px"})},[se(a.$slots,"default")],4)])),[[l,o]])}}}),jA=t=>(It("data-v-683b8998"),t=t(),Lt(),t),qA={class:"basics-scale-box"},YA=jA(()=>fe("img",{src:"https://tqa.oss-cn-shanghai.aliyuncs.com/val/d73b649b-cf14-4475-8b91-bdd26ef35367.jpeg",alt:""},null,-1)),KA=ve({name:"BqBasicsScaleBox",__name:"BasicsScaleBox",setup(t){return(e,n)=>{const i=XA;return k(),re("div",qA,[O(i,null,{default:ye(()=>[YA]),_:1})])}}}),ZA=Ge(KA,[["__scopeId","data-v-683b8998"]]),JA=Ai(ZA);function Vo(t){"@babel/helpers - typeof";return Vo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vo(t)}function QA(t,e){if(Vo(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Vo(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function eP(t){var e=QA(t,"string");return Vo(e)=="symbol"?e:e+""}function tP(t,e,n){return e=eP(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Yf(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function $e(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Yf(Object(n),!0).forEach(function(i){tP(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yf(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function N(){return N=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},N.apply(this,arguments)}const nP=t=>typeof t=="function",iP=Array.isArray,rP=t=>typeof t=="string",oP=t=>t!==null&&typeof t=="object",aP=/^on[^a-z]/,sP=t=>aP.test(t),Xm=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},lP=/-(\w)/g,cP=Xm(t=>t.replace(lP,(e,n)=>n?n.toUpperCase():"")),uP=/\B([A-Z])/g,dP=Xm(t=>t.replace(uP,"-$1").toLowerCase()),fP=Object.prototype.hasOwnProperty,Kf=(t,e)=>fP.call(t,e);function hP(t,e,n,i){const r=t[n];if(r!=null){const o=Kf(r,"default");if(o&&i===void 0){const a=r.default;i=r.type!==Function&&nP(a)?a():a}r.type===Boolean&&(!Kf(e,n)&&!o?i=!1:i===""&&(i=!0))}return i}function gt(){const t=[];for(let e=0;e<arguments.length;e++){const n=e<0||arguments.length<=e?void 0:arguments[e];if(n){if(rP(n))t.push(n);else if(iP(n))for(let i=0;i<n.length;i++){const r=gt(n[i]);r&&t.push(r)}else if(oP(n))for(const i in n)n[i]&&t.push(i)}}return t.join(" ")}var jm=function(){if(typeof Map<"u")return Map;function t(e,n){var i=-1;return e.some(function(r,o){return r[0]===n?(i=o,!0):!1}),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var i=t(this.__entries__,n),r=this.__entries__[i];return r&&r[1]},e.prototype.set=function(n,i){var r=t(this.__entries__,n);~r?this.__entries__[r][1]=i:this.__entries__.push([n,i])},e.prototype.delete=function(n){var i=this.__entries__,r=t(i,n);~r&&i.splice(r,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,i){i===void 0&&(i=null);for(var r=0,o=this.__entries__;r<o.length;r++){var a=o[r];n.call(i,a[1],a[0])}},e}()}(),Bc=typeof window<"u"&&typeof document<"u"&&window.document===document,As=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),pP=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(As):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),mP=2;function vP(t,e){var n=!1,i=!1,r=0;function o(){n&&(n=!1,t()),i&&s()}function a(){pP(o)}function s(){var l=Date.now();if(n){if(l-r<mP)return;i=!0}else n=!0,i=!1,setTimeout(a,e);r=l}return s}var gP=20,_P=["top","right","bottom","left","width","height","size","weight"],yP=typeof MutationObserver<"u",xP=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=vP(this.refresh.bind(this),gP)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,i=n.indexOf(e);~i&&n.splice(i,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!Bc||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),yP?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!Bc||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,i=n===void 0?"":n,r=_P.some(function(o){return!!~i.indexOf(o)});r&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),qm=function(t,e){for(var n=0,i=Object.keys(e);n<i.length;n++){var r=i[n];Object.defineProperty(t,r,{value:e[r],enumerable:!1,writable:!1,configurable:!0})}return t},Zr=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||As},Ym=Zs(0,0,0,0);function Ps(t){return parseFloat(t)||0}function Zf(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(i,r){var o=t["border-"+r+"-width"];return i+Ps(o)},0)}function bP(t){for(var e=["top","right","bottom","left"],n={},i=0,r=e;i<r.length;i++){var o=r[i],a=t["padding-"+o];n[o]=Ps(a)}return n}function SP(t){var e=t.getBBox();return Zs(0,0,e.width,e.height)}function MP(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return Ym;var i=Zr(t).getComputedStyle(t),r=bP(i),o=r.left+r.right,a=r.top+r.bottom,s=Ps(i.width),l=Ps(i.height);if(i.boxSizing==="border-box"&&(Math.round(s+o)!==e&&(s-=Zf(i,"left","right")+o),Math.round(l+a)!==n&&(l-=Zf(i,"top","bottom")+a)),!wP(t)){var c=Math.round(s+o)-e,u=Math.round(l+a)-n;Math.abs(c)!==1&&(s-=c),Math.abs(u)!==1&&(l-=u)}return Zs(r.left,r.top,s,l)}var EP=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof Zr(t).SVGGraphicsElement}:function(t){return t instanceof Zr(t).SVGElement&&typeof t.getBBox=="function"}}();function wP(t){return t===Zr(t).document.documentElement}function TP(t){return Bc?EP(t)?SP(t):MP(t):Ym}function CP(t){var e=t.x,n=t.y,i=t.width,r=t.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(o.prototype);return qm(a,{x:e,y:n,width:i,height:r,top:n,right:e+i,bottom:r+n,left:e}),a}function Zs(t,e,n,i){return{x:t,y:e,width:n,height:i}}var AP=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Zs(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=TP(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),PP=function(){function t(e,n){var i=CP(n);qm(this,{target:e,contentRect:i})}return t}(),RP=function(){function t(e,n,i){if(this.activeObservations_=[],this.observations_=new jm,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=i}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Zr(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new AP(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Zr(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(i){return new PP(i.target,i.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),Km=typeof WeakMap<"u"?new WeakMap:new jm,Zm=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=xP.getInstance(),i=new RP(e,n,this);Km.set(this,i)}return t}();["observe","unobserve","disconnect"].forEach(function(t){Zm.prototype[t]=function(){var e;return(e=Km.get(this))[t].apply(e,arguments)}});var Au=function(){return typeof As.ResizeObserver<"u"?As.ResizeObserver:Zm}();const IP=t=>t!=null&&t!=="",Js=(t,e)=>{const n=N({},t);return Object.keys(e).forEach(i=>{const r=n[i];if(r)r.type||r.default?r.default=e[i]:r.def?r.def(e[i]):n[i]={type:r,default:e[i]};else throw new Error(`not have ${i} prop`)}),n},LP=t=>{const e=Object.keys(t),n={},i={},r={};for(let o=0,a=e.length;o<a;o++){const s=e[o];sP(s)?(n[s[2].toLowerCase()+s.slice(3)]=t[s],i[s]=t[s]):r[s]=t[s]}return{onEvents:i,events:n,extraAttrs:r}},OP=(t,e)=>t[e]!==void 0,DP=Symbol("skipFlatten"),mn=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=Array.isArray(t)?t:[t],i=[];return n.forEach(r=>{Array.isArray(r)?i.push(...mn(r,e)):r&&r.type===ot?r.key===DP?i.push(r):i.push(...mn(r.children,e)):r&&ta(r)?e&&!Jm(r)?i.push(r):e||i.push(r):IP(r)&&i.push(r)}),i},NP=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"default",n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(ta(t))return t.type===ot?e==="default"?mn(t.children):[]:t.children&&t.children[e]?mn(t.children[e](n)):[];{const i=t.$slots[e]&&t.$slots[e](n);return mn(i)}},Co=t=>{var e;let n=((e=t==null?void 0:t.vnode)===null||e===void 0?void 0:e.el)||t&&(t.$el||t);for(;n&&!n.tagName;)n=n.nextSibling;return n},FP=t=>{const e={};if(t.$&&t.$.vnode){const n=t.$.vnode.props||{};Object.keys(t.$props).forEach(i=>{const r=t.$props[i],o=dP(i);(r!==void 0||o in n)&&(e[i]=r)})}else if(ta(t)&&typeof t.type=="object"){const n=t.props||{},i={};Object.keys(n).forEach(o=>{i[cP(o)]=n[o]});const r=t.type.props||{};Object.keys(r).forEach(o=>{const a=hP(r,i,o,i[o]);(a!==void 0||o in i)&&(e[o]=a)})}return e},UP=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"default",n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,r;if(t.$){const o=t[e];if(o!==void 0)return typeof o=="function"&&i?o(n):o;r=t.$slots[e],r=i&&r?r(n):r}else if(ta(t)){const o=t.props&&t.props[e];if(o!==void 0&&t.props!==null)return typeof o=="function"&&i?o(n):o;t.type===ot?r=t.children:t.children&&t.children[e]&&(r=t.children[e],r=i&&r?r(n):r)}return Array.isArray(r)&&(r=mn(r),r=r.length===1?r[0]:r,r=r.length===0?void 0:r),r};function Jf(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,n={};return t.$?n=N(N({},n),t.$attrs):n=N(N({},n),t.props),LP(n)[e?"onEvents":"events"]}function Jm(t){return t&&(t.type===u0||t.type===ot&&t.children.length===0||t.type===d0&&t.children.trim()==="")}function Qs(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];const e=[];return t.forEach(n=>{Array.isArray(n)?e.push(...n):(n==null?void 0:n.type)===ot?e.push(...Qs(n.children)):e.push(n)}),e.filter(n=>!Jm(n))}function Pu(t){return Array.isArray(t)&&t.length===1&&(t=t[0]),t&&t.__v_isVNode&&typeof t.type!="symbol"}const Ru=ve({compatConfig:{MODE:3},name:"ResizeObserver",props:{disabled:Boolean,onResize:Function},emits:["resize"],setup(t,e){let{slots:n}=e;const i=li({width:0,height:0,offsetHeight:0,offsetWidth:0});let r=null,o=null;const a=()=>{o&&(o.disconnect(),o=null)},s=u=>{const{onResize:d}=t,f=u[0].target,{width:h,height:v}=f.getBoundingClientRect(),{offsetWidth:g,offsetHeight:m}=f,p=Math.floor(h),b=Math.floor(v);if(i.width!==p||i.height!==b||i.offsetWidth!==g||i.offsetHeight!==m){const y={width:p,height:b,offsetWidth:g,offsetHeight:m};N(i,y),d&&Promise.resolve().then(()=>{d(N(N({},y),{offsetWidth:g,offsetHeight:m}),f)})}},l=Hs(),c=()=>{const{disabled:u}=t;if(u){a();return}const d=Co(l);d!==r&&(a(),r=d),!o&&d&&(o=new Au(s),o.observe(d))};return St(()=>{c()}),ro(()=>{c()}),Wn(()=>{a()}),Ye(()=>t.disabled,()=>{c()},{flush:"post"}),()=>{var u;return(u=n.default)===null||u===void 0?void 0:u.call(n)[0]}}});let Qm=t=>setTimeout(t,16),ev=t=>clearTimeout(t);typeof window<"u"&&"requestAnimationFrame"in window&&(Qm=t=>window.requestAnimationFrame(t),ev=t=>window.cancelAnimationFrame(t));let Qf=0;const Iu=new Map;function tv(t){Iu.delete(t)}function Ut(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;Qf+=1;const n=Qf;function i(r){if(r===0)tv(n),t();else{const o=Qm(()=>{i(r-1)});Iu.set(n,o)}}return i(e),n}Ut.cancel=t=>{const e=Iu.get(t);return tv(e),ev(e)};const Rs=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e},Lu=t=>{const e=t;return e.install=function(n){n.component(e.displayName||e.name,t)},t};function nv(t){return{type:Object,default:t}}function Yt(t){return{type:Boolean,default:t}}function $r(t){return{type:Function,default:t}}function zc(t,e){const n={validator:()=>!0,default:t};return n}function $o(t){return{type:Array,default:t}}function xi(t){return{type:String,default:t}}function kc(t,e){return t?{type:t,default:e}:zc(e)}let Kt=!1;try{const t=Object.defineProperty({},"passive",{get(){Kt=!0}});window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}catch{}function Ao(t,e,n,i){if(t&&t.addEventListener){let r=i;r===void 0&&Kt&&(e==="touchstart"||e==="touchmove"||e==="wheel")&&(r={passive:!1}),t.addEventListener(e,n,r)}return{remove:()=>{t&&t.removeEventListener&&t.removeEventListener(e,n)}}}const BP="anticon",iv=Symbol("configProvider"),rv={getPrefixCls:(t,e)=>e||(t?`ant-${t}`:"ant"),iconPrefixCls:V(()=>BP),getPopupContainer:V(()=>()=>document.body),direction:V(()=>"ltr")},zP=()=>Tt(iv,rv),kP=Symbol("DisabledContextKey"),Ou=()=>Tt(kP,Ce(void 0)),HP={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages"},VP={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"Ok",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},ov={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},eh={lang:N({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},VP),timePickerLocale:N({},ov)},fn="${label} is not a valid ${type}",th={locale:"en",Pagination:HP,DatePicker:eh,TimePicker:ov,Calendar:eh,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:fn,method:fn,array:fn,object:fn,number:fn,date:fn,boolean:fn,integer:fn,float:fn,regexp:fn,email:fn,url:fn,hex:fn},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh",scanned:"Scanned"}},$P=ve({compatConfig:{MODE:3},name:"LocaleReceiver",props:{componentName:String,defaultLocale:{type:[Object,Function]},children:{type:Function}},setup(t,e){let{slots:n}=e;const i=Tt("localeData",{}),r=V(()=>{const{componentName:a="global",defaultLocale:s}=t,l=s||th[a||"global"],{antLocale:c}=i,u=a&&c?c[a]:{};return N(N({},typeof l=="function"?l():l),u||{})}),o=V(()=>{const{antLocale:a}=i,s=a&&a.locale;return a&&a.exist&&!s?th.locale:s});return()=>{const a=t.children||n.default,{antLocale:s}=i;return a==null?void 0:a(r.value,o.value,s)}}});function Du(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}const nh="%";class GP{constructor(e){this.cache=new Map,this.instanceId=e}get(e){return this.cache.get(Array.isArray(e)?e.join(nh):e)||null}update(e,n){const i=Array.isArray(e)?e.join(nh):e,r=this.cache.get(i),o=n(r);o===null?this.cache.delete(i):this.cache.set(i,o)}}const av="data-token-hash",Ji="data-css-hash",Br="__cssinjs_instance__";function Go(){const t=Math.random().toString(12).slice(2);if(typeof document<"u"&&document.head&&document.body){const e=document.body.querySelectorAll(`style[${Ji}]`)||[],{firstChild:n}=document.head;Array.from(e).forEach(r=>{r[Br]=r[Br]||t,r[Br]===t&&document.head.insertBefore(r,n)});const i={};Array.from(document.querySelectorAll(`style[${Ji}]`)).forEach(r=>{var o;const a=r.getAttribute(Ji);i[a]?r[Br]===t&&((o=r.parentNode)===null||o===void 0||o.removeChild(r)):i[a]=!0})}return new GP(t)}const sv=Symbol("StyleContextKey"),WP=()=>{var t,e,n;const i=Hs();let r;if(i&&i.appContext){const o=(n=(e=(t=i.appContext)===null||t===void 0?void 0:t.config)===null||e===void 0?void 0:e.globalProperties)===null||n===void 0?void 0:n.__ANTDV_CSSINJS_CACHE__;o?r=o:(r=Go(),i.appContext.config.globalProperties&&(i.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__=r))}else r=Go();return r},lv={cache:Go(),defaultCache:!0,hashPriority:"low"},el=()=>{const t=WP();return Tt(sv,ze(N(N({},lv),{cache:t})))},XP=t=>{const e=el(),n=ze(N(N({},lv),{cache:Go()}));return Ye([()=>q(t),e],()=>{const i=N({},e.value),r=q(t);Object.keys(r).forEach(a=>{const s=r[a];r[a]!==void 0&&(i[a]=s)});const{cache:o}=r;i.cache=i.cache||Go(),i.defaultCache=!o&&e.value.defaultCache,n.value=i},{immediate:!0}),gn(sv,n),n},jP=()=>({autoClear:Yt(),mock:xi(),cache:nv(),defaultCache:Yt(),hashPriority:xi(),container:kc(),ssrInline:Yt(),transformers:$o(),linters:$o()});Lu(ve({name:"AStyleProvider",inheritAttrs:!1,props:jP(),setup(t,e){let{slots:n}=e;return XP(t),()=>{var i;return(i=n.default)===null||i===void 0?void 0:i.call(n)}}}));function cv(t,e,n,i){const r=el(),o=ze(""),a=ze();en(()=>{o.value=[t,...e.value].join("%")});const s=l=>{r.value.cache.update(l,c=>{const[u=0,d]=c||[];return u-1===0?(i==null||i(d,!1),null):[u-1,d]})};return Ye(o,(l,c)=>{c&&s(c),r.value.cache.update(l,u=>{const[d=0,f]=u||[],v=f||n();return[d+1,v]}),a.value=r.value.cache.get(o.value)[1]},{immediate:!0}),Xn(()=>{s(o.value)}),a}function $n(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Xi(t,e){return t&&t.contains?t.contains(e):!1}const ih="data-vc-order",qP="vc-util-key",Hc=new Map;function uv(){let{mark:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return t?t.startsWith("data-")?t:`data-${t}`:qP}function tl(t){return t.attachTo?t.attachTo:document.querySelector("head")||document.body}function YP(t){return t==="queue"?"prependQueue":t?"prepend":"append"}function dv(t){return Array.from((Hc.get(t)||t).children).filter(e=>e.tagName==="STYLE")}function fv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!$n())return null;const{csp:n,prepend:i}=e,r=document.createElement("style");r.setAttribute(ih,YP(i)),n!=null&&n.nonce&&(r.nonce=n==null?void 0:n.nonce),r.innerHTML=t;const o=tl(e),{firstChild:a}=o;if(i){if(i==="queue"){const s=dv(o).filter(l=>["prepend","prependQueue"].includes(l.getAttribute(ih)));if(s.length)return o.insertBefore(r,s[s.length-1].nextSibling),r}o.insertBefore(r,a)}else o.appendChild(r);return r}function hv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=tl(e);return dv(n).find(i=>i.getAttribute(uv(e))===t)}function Is(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=hv(t,e);n&&tl(e).removeChild(n)}function KP(t,e){const n=Hc.get(t);if(!n||!Xi(document,n)){const i=fv("",e),{parentNode:r}=i;Hc.set(t,r),t.removeChild(i)}}function Ls(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};var i,r,o;const a=tl(n);KP(a,n);const s=hv(e,n);if(s)return!((i=n.csp)===null||i===void 0)&&i.nonce&&s.nonce!==((r=n.csp)===null||r===void 0?void 0:r.nonce)&&(s.nonce=(o=n.csp)===null||o===void 0?void 0:o.nonce),s.innerHTML!==t&&(s.innerHTML=t),s;const l=fv(t,n);return l.setAttribute(uv(n),e),l}function ZP(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}class Jr{constructor(){this.cache=new Map,this.keys=[],this.cacheCallTimes=0}size(){return this.keys.length}internalGet(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i={map:this.cache};return e.forEach(r=>{var o;i?i=(o=i==null?void 0:i.map)===null||o===void 0?void 0:o.get(r):i=void 0}),i!=null&&i.value&&n&&(i.value[1]=this.cacheCallTimes++),i==null?void 0:i.value}get(e){var n;return(n=this.internalGet(e,!0))===null||n===void 0?void 0:n[0]}has(e){return!!this.internalGet(e)}set(e,n){if(!this.has(e)){if(this.size()+1>Jr.MAX_CACHE_SIZE+Jr.MAX_CACHE_OFFSET){const[r]=this.keys.reduce((o,a)=>{const[,s]=o;return this.internalGet(a)[1]<s?[a,this.internalGet(a)[1]]:o},[this.keys[0],this.cacheCallTimes]);this.delete(r)}this.keys.push(e)}let i=this.cache;e.forEach((r,o)=>{if(o===e.length-1)i.set(r,{value:[n,this.cacheCallTimes++]});else{const a=i.get(r);a?a.map||(a.map=new Map):i.set(r,{map:new Map}),i=i.get(r).map}})}deleteByPath(e,n){var i;const r=e.get(n[0]);if(n.length===1)return r.map?e.set(n[0],{map:r.map}):e.delete(n[0]),(i=r.value)===null||i===void 0?void 0:i[0];const o=this.deleteByPath(r.map,n.slice(1));return(!r.map||r.map.size===0)&&!r.value&&e.delete(n[0]),o}delete(e){if(this.has(e))return this.keys=this.keys.filter(n=>!ZP(n,e)),this.deleteByPath(this.cache,e)}}Jr.MAX_CACHE_SIZE=20;Jr.MAX_CACHE_OFFSET=5;function JP(){}let Nu=JP,rh=0;class pv{constructor(e){this.derivatives=Array.isArray(e)?e:[e],this.id=rh,e.length===0&&Nu(e.length>0),rh+=1}getDerivativeToken(e){return this.derivatives.reduce((n,i)=>i(e,n),void 0)}}const Ql=new Jr;function QP(t){const e=Array.isArray(t)?t:[t];return Ql.has(e)||Ql.set(e,new pv(e)),Ql.get(e)}const oh=new WeakMap;function Os(t){let e=oh.get(t)||"";return e||(Object.keys(t).forEach(n=>{const i=t[n];e+=n,i instanceof pv?e+=i.id:i&&typeof i=="object"?e+=Os(i):e+=i}),oh.set(t,e)),e}function eR(t,e){return Du(`${e}_${Os(t)}`)}const Do=`random-${Date.now()}-${Math.random()}`.replace(/\./g,""),mv="_bAmBoO_";function tR(t,e,n){var i,r;if($n()){Ls(t,Do);const o=document.createElement("div");o.style.position="fixed",o.style.left="0",o.style.top="0",e==null||e(o),document.body.appendChild(o);const a=n?n(o):(i=getComputedStyle(o).content)===null||i===void 0?void 0:i.includes(mv);return(r=o.parentNode)===null||r===void 0||r.removeChild(o),Is(Do),a}return!1}let ec;function nR(){return ec===void 0&&(ec=tR(`@layer ${Do} { .${Do} { content: "${mv}"!important; } }`,t=>{t.className=Do})),ec}const ah={},iR=!0,rR=!1,oR=!iR&&!rR?"css-dev-only-do-not-override":"css",ji=new Map;function aR(t){ji.set(t,(ji.get(t)||0)+1)}function sR(t,e){typeof document<"u"&&document.querySelectorAll(`style[${av}="${t}"]`).forEach(i=>{var r;i[Br]===e&&((r=i.parentNode)===null||r===void 0||r.removeChild(i))})}const lR=0;function cR(t,e){ji.set(t,(ji.get(t)||0)-1);const n=Array.from(ji.keys()),i=n.filter(r=>(ji.get(r)||0)<=0);n.length-i.length>lR&&i.forEach(r=>{sR(r,e),ji.delete(r)})}const uR=(t,e,n,i)=>{const r=n.getDerivativeToken(t);let o=N(N({},r),e);return i&&(o=i(o)),o};function dR(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ce({});const i=el(),r=V(()=>N({},...e.value)),o=V(()=>Os(r.value)),a=V(()=>Os(n.value.override||ah));return cv("token",V(()=>[n.value.salt||"",t.value.id,o.value,a.value]),()=>{const{salt:l="",override:c=ah,formatToken:u,getComputedToken:d}=n.value,f=d?d(r.value,c,t.value):uR(r.value,c,t.value,u),h=eR(f,l);f._tokenKey=h,aR(h);const v=`${oR}-${Du(h)}`;return f._hashId=v,[f,v]},l=>{var c;cR(l[0]._tokenKey,(c=i.value)===null||c===void 0?void 0:c.cache.instanceId)})}var fR={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vv="comm",gv="rule",_v="decl",hR="@import",pR="@keyframes",mR="@layer",yv=Math.abs,Fu=String.fromCharCode;function xv(t){return t.trim()}function cs(t,e,n){return t.replace(e,n)}function vR(t,e,n){return t.indexOf(e,n)}function Wo(t,e){return t.charCodeAt(e)|0}function Xo(t,e,n){return t.slice(e,n)}function ri(t){return t.length}function gR(t){return t.length}function qa(t,e){return e.push(t),t}var nl=1,Qr=1,bv=0,En=0,Rt=0,lo="";function Uu(t,e,n,i,r,o,a,s){return{value:t,root:e,parent:n,type:i,props:r,children:o,line:nl,column:Qr,length:a,return:"",siblings:s}}function _R(){return Rt}function yR(){return Rt=En>0?Wo(lo,--En):0,Qr--,Rt===10&&(Qr=1,nl--),Rt}function On(){return Rt=En<bv?Wo(lo,En++):0,Qr++,Rt===10&&(Qr=1,nl++),Rt}function Qi(){return Wo(lo,En)}function us(){return En}function il(t,e){return Xo(lo,t,e)}function Vc(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xR(t){return nl=Qr=1,bv=ri(lo=t),En=0,[]}function bR(t){return lo="",t}function tc(t){return xv(il(En-1,$c(t===91?t+2:t===40?t+1:t)))}function SR(t){for(;(Rt=Qi())&&Rt<33;)On();return Vc(t)>2||Vc(Rt)>3?"":" "}function MR(t,e){for(;--e&&On()&&!(Rt<48||Rt>102||Rt>57&&Rt<65||Rt>70&&Rt<97););return il(t,us()+(e<6&&Qi()==32&&On()==32))}function $c(t){for(;On();)switch(Rt){case t:return En;case 34:case 39:t!==34&&t!==39&&$c(Rt);break;case 40:t===41&&$c(t);break;case 92:On();break}return En}function ER(t,e){for(;On()&&t+Rt!==57;)if(t+Rt===84&&Qi()===47)break;return"/*"+il(e,En-1)+"*"+Fu(t===47?t:On())}function wR(t){for(;!Vc(Qi());)On();return il(t,En)}function TR(t){return bR(ds("",null,null,null,[""],t=xR(t),0,[0],t))}function ds(t,e,n,i,r,o,a,s,l){for(var c=0,u=0,d=a,f=0,h=0,v=0,g=1,m=1,p=1,b=0,y="",_=r,T=o,w=i,M=y;m;)switch(v=b,b=On()){case 40:if(v!=108&&Wo(M,d-1)==58){vR(M+=cs(tc(b),"&","&\f"),"&\f",yv(c?s[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:M+=tc(b);break;case 9:case 10:case 13:case 32:M+=SR(v);break;case 92:M+=MR(us()-1,7);continue;case 47:switch(Qi()){case 42:case 47:qa(CR(ER(On(),us()),e,n,l),l);break;default:M+="/"}break;case 123*g:s[c++]=ri(M)*p;case 125*g:case 59:case 0:switch(b){case 0:case 125:m=0;case 59+u:p==-1&&(M=cs(M,/\f/g,"")),h>0&&ri(M)-d&&qa(h>32?lh(M+";",i,n,d-1,l):lh(cs(M," ","")+";",i,n,d-2,l),l);break;case 59:M+=";";default:if(qa(w=sh(M,e,n,c,u,r,s,y,_=[],T=[],d,o),o),b===123)if(u===0)ds(M,e,w,w,_,o,d,s,T);else switch(f===99&&Wo(M,3)===110?100:f){case 100:case 108:case 109:case 115:ds(t,w,w,i&&qa(sh(t,w,w,0,0,r,s,y,r,_=[],d,T),T),r,T,d,s,i?_:T);break;default:ds(M,w,w,w,[""],T,0,s,T)}}c=u=h=0,g=p=1,y=M="",d=a;break;case 58:d=1+ri(M),h=v;default:if(g<1){if(b==123)--g;else if(b==125&&g++==0&&yR()==125)continue}switch(M+=Fu(b),b*g){case 38:p=u>0?1:(M+="\f",-1);break;case 44:s[c++]=(ri(M)-1)*p,p=1;break;case 64:Qi()===45&&(M+=tc(On())),f=Qi(),u=d=ri(y=M+=wR(us())),b++;break;case 45:v===45&&ri(M)==2&&(g=0)}}return o}function sh(t,e,n,i,r,o,a,s,l,c,u,d){for(var f=r-1,h=r===0?o:[""],v=gR(h),g=0,m=0,p=0;g<i;++g)for(var b=0,y=Xo(t,f+1,f=yv(m=a[g])),_=t;b<v;++b)(_=xv(m>0?h[b]+" "+y:cs(y,/&\f/g,h[b])))&&(l[p++]=_);return Uu(t,e,n,r===0?gv:s,l,c,u,d)}function CR(t,e,n,i){return Uu(t,e,n,vv,Fu(_R()),Xo(t,2,-2),0,i)}function lh(t,e,n,i,r){return Uu(t,e,n,_v,Xo(t,0,i),Xo(t,i+1,-1),i,r)}function Gc(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function AR(t,e,n,i){switch(t.type){case mR:if(t.children.length)break;case hR:case _v:return t.return=t.return||t.value;case vv:return"";case pR:return t.return=t.value+"{"+Gc(t.children,i)+"}";case gv:if(!ri(t.value=t.props.join(",")))return""}return ri(n=Gc(t.children,i))?t.return=t.value+"{"+n+"}":""}const ch="data-ant-cssinjs-cache-path",PR="_FILE_STYLE__";let er,Sv=!0;function RR(){var t;if(!er&&(er={},$n())){const e=document.createElement("div");e.className=ch,e.style.position="fixed",e.style.visibility="hidden",e.style.top="-9999px",document.body.appendChild(e);let n=getComputedStyle(e).content||"";n=n.replace(/^"/,"").replace(/"$/,""),n.split(";").forEach(r=>{const[o,a]=r.split(":");er[o]=a});const i=document.querySelector(`style[${ch}]`);i&&(Sv=!1,(t=i.parentNode)===null||t===void 0||t.removeChild(i)),document.body.removeChild(e)}}function IR(t){return RR(),!!er[t]}function LR(t){const e=er[t];let n=null;if(e&&$n())if(Sv)n=PR;else{const i=document.querySelector(`style[${Ji}="${er[t]}"]`);i?n=i.innerHTML:delete er[t]}return[n,e]}const uh=$n(),OR="_skip_check_",Mv="_multi_value_";function dh(t){return Gc(TR(t),AR).replace(/\{%%%\:[^;];}/g,";")}function DR(t){return typeof t=="object"&&t&&(OR in t||Mv in t)}function NR(t,e,n){if(!e)return t;const i=`.${e}`,r=n==="low"?`:where(${i})`:i;return t.split(",").map(a=>{var s;const l=a.trim().split(/\s+/);let c=l[0]||"";const u=((s=c.match(/^\w+/))===null||s===void 0?void 0:s[0])||"";return c=`${u}${r}${c.slice(u.length)}`,[c,...l.slice(1)].join(" ")}).join(",")}const fh=new Set,Wc=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{root:n,injectHash:i,parentSelectors:r}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{root:!0,parentSelectors:[]};const{hashId:o,layer:a,path:s,hashPriority:l,transformers:c=[],linters:u=[]}=e;let d="",f={};function h(m){const p=m.getName(o);if(!f[p]){const[b]=Wc(m.style,e,{root:!1,parentSelectors:r});f[p]=`@keyframes ${m.getName(o)}${b}`}}function v(m){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return m.forEach(b=>{Array.isArray(b)?v(b,p):b&&p.push(b)}),p}if(v(Array.isArray(t)?t:[t]).forEach(m=>{const p=typeof m=="string"&&!n?{}:m;if(typeof p=="string")d+=`${p}
`;else if(p._keyframe)h(p);else{const b=c.reduce((y,_)=>{var T;return((T=_==null?void 0:_.visit)===null||T===void 0?void 0:T.call(_,y))||y},p);Object.keys(b).forEach(y=>{var _;const T=b[y];if(typeof T=="object"&&T&&(y!=="animationName"||!T._keyframe)&&!DR(T)){let w=!1,M=y.trim(),A=!1;(n||i)&&o?M.startsWith("@")?w=!0:M=NR(y,o,l):n&&!o&&(M==="&"||M==="")&&(M="",A=!0);const[S,x]=Wc(T,e,{root:A,injectHash:w,parentSelectors:[...r,M]});f=N(N({},f),x),d+=`${M}${S}`}else{let w=function(A,S){const x=A.replace(/[A-Z]/g,$=>`-${$.toLowerCase()}`);let I=S;!fR[A]&&typeof I=="number"&&I!==0&&(I=`${I}px`),A==="animationName"&&(S!=null&&S._keyframe)&&(h(S),I=S.getName(o)),d+=`${x}:${I};`};const M=(_=T==null?void 0:T.value)!==null&&_!==void 0?_:T;typeof T=="object"&&(T!=null&&T[Mv])&&Array.isArray(M)?M.forEach(A=>{w(y,A)}):w(y,M)}})}}),!n)d=`{${d}}`;else if(a&&nR()){const m=a.split(",");d=`@layer ${m[m.length-1].trim()} {${d}}`,m.length>1&&(d=`@layer ${a}{%%%:%}${d}`)}return[d,f]};function FR(t,e){return Du(`${t.join("%")}${e}`)}function hh(t,e){const n=el(),i=V(()=>t.value.token._tokenKey),r=V(()=>[i.value,...t.value.path]);let o=uh;return cv("style",r,()=>{const{path:a,hashId:s,layer:l,nonce:c,clientOnly:u,order:d=0}=t.value,f=r.value.join("|");if(IR(f)){const[M,A]=LR(f);if(M)return[M,i.value,A,{},u,d]}const h=e(),{hashPriority:v,container:g,transformers:m,linters:p,cache:b}=n.value,[y,_]=Wc(h,{hashId:s,hashPriority:v,layer:l,path:a.join("-"),transformers:m,linters:p}),T=dh(y),w=FR(r.value,T);if(o){const M={mark:Ji,prepend:"queue",attachTo:g,priority:d},A=typeof c=="function"?c():c;A&&(M.csp={nonce:A});const S=Ls(T,w,M);S[Br]=b.instanceId,S.setAttribute(av,i.value),Object.keys(_).forEach(x=>{fh.has(x)||(fh.add(x),Ls(dh(_[x]),`_effect-${x}`,{mark:Ji,prepend:"queue",attachTo:g}))})}return[T,i.value,w,_,u,d]},(a,s)=>{let[,,l]=a;(s||n.value.autoClear)&&uh&&Is(l,{mark:Ji})}),a=>a}class Vt{constructor(e,n){this._keyframe=!0,this.name=e,this.style=n}getName(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e?`${e}-${this.name}`:this.name}}const UR="4.2.1";function Ht(t,e){BR(t)&&(t="100%");var n=zR(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function Ya(t){return Math.min(1,Math.max(0,t))}function BR(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function zR(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Ev(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Ka(t){return t<=1?"".concat(Number(t)*100,"%"):t}function Ki(t){return t.length===1?"0"+t:String(t)}function kR(t,e,n){return{r:Ht(t,255)*255,g:Ht(e,255)*255,b:Ht(n,255)*255}}function ph(t,e,n){t=Ht(t,255),e=Ht(e,255),n=Ht(n,255);var i=Math.max(t,e,n),r=Math.min(t,e,n),o=0,a=0,s=(i+r)/2;if(i===r)a=0,o=0;else{var l=i-r;switch(a=s>.5?l/(2-i-r):l/(i+r),i){case t:o=(e-n)/l+(e<n?6:0);break;case e:o=(n-t)/l+2;break;case n:o=(t-e)/l+4;break}o/=6}return{h:o,s:a,l:s}}function nc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*(6*n):n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function HR(t,e,n){var i,r,o;if(t=Ht(t,360),e=Ht(e,100),n=Ht(n,100),e===0)r=n,o=n,i=n;else{var a=n<.5?n*(1+e):n+e-n*e,s=2*n-a;i=nc(s,a,t+1/3),r=nc(s,a,t),o=nc(s,a,t-1/3)}return{r:i*255,g:r*255,b:o*255}}function Xc(t,e,n){t=Ht(t,255),e=Ht(e,255),n=Ht(n,255);var i=Math.max(t,e,n),r=Math.min(t,e,n),o=0,a=i,s=i-r,l=i===0?0:s/i;if(i===r)o=0;else{switch(i){case t:o=(e-n)/s+(e<n?6:0);break;case e:o=(n-t)/s+2;break;case n:o=(t-e)/s+4;break}o/=6}return{h:o,s:l,v:a}}function VR(t,e,n){t=Ht(t,360)*6,e=Ht(e,100),n=Ht(n,100);var i=Math.floor(t),r=t-i,o=n*(1-e),a=n*(1-r*e),s=n*(1-(1-r)*e),l=i%6,c=[n,a,o,o,s,n][l],u=[s,n,n,a,o,o][l],d=[o,o,s,n,n,a][l];return{r:c*255,g:u*255,b:d*255}}function jc(t,e,n,i){var r=[Ki(Math.round(t).toString(16)),Ki(Math.round(e).toString(16)),Ki(Math.round(n).toString(16))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function $R(t,e,n,i,r){var o=[Ki(Math.round(t).toString(16)),Ki(Math.round(e).toString(16)),Ki(Math.round(n).toString(16)),Ki(GR(i))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function GR(t){return Math.round(parseFloat(t)*255).toString(16)}function mh(t){return hn(t)/255}function hn(t){return parseInt(t,16)}function WR(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var qc={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Nr(t){var e={r:0,g:0,b:0},n=1,i=null,r=null,o=null,a=!1,s=!1;return typeof t=="string"&&(t=qR(t)),typeof t=="object"&&(ei(t.r)&&ei(t.g)&&ei(t.b)?(e=kR(t.r,t.g,t.b),a=!0,s=String(t.r).substr(-1)==="%"?"prgb":"rgb"):ei(t.h)&&ei(t.s)&&ei(t.v)?(i=Ka(t.s),r=Ka(t.v),e=VR(t.h,i,r),a=!0,s="hsv"):ei(t.h)&&ei(t.s)&&ei(t.l)&&(i=Ka(t.s),o=Ka(t.l),e=HR(t.h,i,o),a=!0,s="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(n=t.a)),n=Ev(n),{ok:a,format:t.format||s,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:n}}var XR="[-\\+]?\\d+%?",jR="[-\\+]?\\d*\\.\\d+%?",Si="(?:".concat(jR,")|(?:").concat(XR,")"),ic="[\\s|\\(]+(".concat(Si,")[,|\\s]+(").concat(Si,")[,|\\s]+(").concat(Si,")\\s*\\)?"),rc="[\\s|\\(]+(".concat(Si,")[,|\\s]+(").concat(Si,")[,|\\s]+(").concat(Si,")[,|\\s]+(").concat(Si,")\\s*\\)?"),An={CSS_UNIT:new RegExp(Si),rgb:new RegExp("rgb"+ic),rgba:new RegExp("rgba"+rc),hsl:new RegExp("hsl"+ic),hsla:new RegExp("hsla"+rc),hsv:new RegExp("hsv"+ic),hsva:new RegExp("hsva"+rc),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function qR(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;var e=!1;if(qc[t])t=qc[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=An.rgb.exec(t);return n?{r:n[1],g:n[2],b:n[3]}:(n=An.rgba.exec(t),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=An.hsl.exec(t),n?{h:n[1],s:n[2],l:n[3]}:(n=An.hsla.exec(t),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=An.hsv.exec(t),n?{h:n[1],s:n[2],v:n[3]}:(n=An.hsva.exec(t),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=An.hex8.exec(t),n?{r:hn(n[1]),g:hn(n[2]),b:hn(n[3]),a:mh(n[4]),format:e?"name":"hex8"}:(n=An.hex6.exec(t),n?{r:hn(n[1]),g:hn(n[2]),b:hn(n[3]),format:e?"name":"hex"}:(n=An.hex4.exec(t),n?{r:hn(n[1]+n[1]),g:hn(n[2]+n[2]),b:hn(n[3]+n[3]),a:mh(n[4]+n[4]),format:e?"name":"hex8"}:(n=An.hex3.exec(t),n?{r:hn(n[1]+n[1]),g:hn(n[2]+n[2]),b:hn(n[3]+n[3]),format:e?"name":"hex"}:!1)))))))))}function ei(t){return!!An.CSS_UNIT.exec(String(t))}var rn=function(){function t(e,n){e===void 0&&(e=""),n===void 0&&(n={});var i;if(e instanceof t)return e;typeof e=="number"&&(e=WR(e)),this.originalInput=e;var r=Nr(e);this.originalInput=e,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=(i=n.format)!==null&&i!==void 0?i:r.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},t.prototype.getLuminance=function(){var e=this.toRgb(),n,i,r,o=e.r/255,a=e.g/255,s=e.b/255;return o<=.03928?n=o/12.92:n=Math.pow((o+.055)/1.055,2.4),a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),s<=.03928?r=s/12.92:r=Math.pow((s+.055)/1.055,2.4),.2126*n+.7152*i+.0722*r},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(e){return this.a=Ev(e),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){var e=this.toHsl().s;return e===0},t.prototype.toHsv=function(){var e=Xc(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},t.prototype.toHsvString=function(){var e=Xc(this.r,this.g,this.b),n=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?"hsv(".concat(n,", ").concat(i,"%, ").concat(r,"%)"):"hsva(".concat(n,", ").concat(i,"%, ").concat(r,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var e=ph(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},t.prototype.toHslString=function(){var e=ph(this.r,this.g,this.b),n=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?"hsl(".concat(n,", ").concat(i,"%, ").concat(r,"%)"):"hsla(".concat(n,", ").concat(i,"%, ").concat(r,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(e){return e===void 0&&(e=!1),jc(this.r,this.g,this.b,e)},t.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},t.prototype.toHex8=function(e){return e===void 0&&(e=!1),$R(this.r,this.g,this.b,this.a,e)},t.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},t.prototype.toHexShortString=function(e){return e===void 0&&(e=!1),this.a===1?this.toHexString(e):this.toHex8String(e)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var e=Math.round(this.r),n=Math.round(this.g),i=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(n,", ").concat(i,")"):"rgba(".concat(e,", ").concat(n,", ").concat(i,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var e=function(n){return"".concat(Math.round(Ht(n,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var e=function(n){return Math.round(Ht(n,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+jc(this.r,this.g,this.b,!1),n=0,i=Object.entries(qc);n<i.length;n++){var r=i[n],o=r[0],a=r[1];if(e===a)return o}return!1},t.prototype.toString=function(e){var n=!!e;e=e??this.format;var i=!1,r=this.a<1&&this.a>=0,o=!n&&r&&(e.startsWith("hex")||e==="name");return o?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.l+=e/100,n.l=Ya(n.l),new t(n)},t.prototype.brighten=function(e){e===void 0&&(e=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(e/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(e/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(e/100)))),new t(n)},t.prototype.darken=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.l-=e/100,n.l=Ya(n.l),new t(n)},t.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},t.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},t.prototype.desaturate=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.s-=e/100,n.s=Ya(n.s),new t(n)},t.prototype.saturate=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.s+=e/100,n.s=Ya(n.s),new t(n)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var n=this.toHsl(),i=(n.h+e)%360;return n.h=i<0?360+i:i,new t(n)},t.prototype.mix=function(e,n){n===void 0&&(n=50);var i=this.toRgb(),r=new t(e).toRgb(),o=n/100,a={r:(r.r-i.r)*o+i.r,g:(r.g-i.g)*o+i.g,b:(r.b-i.b)*o+i.b,a:(r.a-i.a)*o+i.a};return new t(a)},t.prototype.analogous=function(e,n){e===void 0&&(e=6),n===void 0&&(n=30);var i=this.toHsl(),r=360/n,o=[this];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,o.push(new t(i));return o},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var n=this.toHsv(),i=n.h,r=n.s,o=n.v,a=[],s=1/e;e--;)a.push(new t({h:i,s:r,v:o})),o=(o+s)%1;return a},t.prototype.splitcomplement=function(){var e=this.toHsl(),n=e.h;return[this,new t({h:(n+72)%360,s:e.s,l:e.l}),new t({h:(n+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var n=this.toRgb(),i=new t(e).toRgb(),r=n.a+i.a*(1-n.a);return new t({r:(n.r*n.a+i.r*i.a*(1-n.a))/r,g:(n.g*n.a+i.g*i.a*(1-n.a))/r,b:(n.b*n.a+i.b*i.a*(1-n.a))/r,a:r})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var n=this.toHsl(),i=n.h,r=[this],o=360/e,a=1;a<e;a++)r.push(new t({h:(i+a*o)%360,s:n.s,l:n.l}));return r},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}(),Za=2,vh=.16,YR=.05,KR=.05,ZR=.15,wv=5,Tv=4,JR=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function gh(t){var e=t.r,n=t.g,i=t.b,r=Xc(e,n,i);return{h:r.h*360,s:r.s,v:r.v}}function Ja(t){var e=t.r,n=t.g,i=t.b;return"#".concat(jc(e,n,i,!1))}function QR(t,e,n){var i=n/100,r={r:(e.r-t.r)*i+t.r,g:(e.g-t.g)*i+t.g,b:(e.b-t.b)*i+t.b};return r}function _h(t,e,n){var i;return Math.round(t.h)>=60&&Math.round(t.h)<=240?i=n?Math.round(t.h)-Za*e:Math.round(t.h)+Za*e:i=n?Math.round(t.h)+Za*e:Math.round(t.h)-Za*e,i<0?i+=360:i>=360&&(i-=360),i}function yh(t,e,n){if(t.h===0&&t.s===0)return t.s;var i;return n?i=t.s-vh*e:e===Tv?i=t.s+vh:i=t.s+YR*e,i>1&&(i=1),n&&e===wv&&i>.1&&(i=.1),i<.06&&(i=.06),Number(i.toFixed(2))}function xh(t,e,n){var i;return n?i=t.v+KR*e:i=t.v-ZR*e,i>1&&(i=1),Number(i.toFixed(2))}function jo(t){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[],i=Nr(t),r=wv;r>0;r-=1){var o=gh(i),a=Ja(Nr({h:_h(o,r,!0),s:yh(o,r,!0),v:xh(o,r,!0)}));n.push(a)}n.push(Ja(i));for(var s=1;s<=Tv;s+=1){var l=gh(i),c=Ja(Nr({h:_h(l,s),s:yh(l,s),v:xh(l,s)}));n.push(c)}return e.theme==="dark"?JR.map(function(u){var d=u.index,f=u.opacity,h=Ja(QR(Nr(e.backgroundColor||"#141414"),Nr(n[d]),f*100));return h}):n}var oc={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},fs={},ac={};Object.keys(oc).forEach(function(t){fs[t]=jo(oc[t]),fs[t].primary=fs[t][5],ac[t]=jo(oc[t],{theme:"dark",backgroundColor:"#141414"}),ac[t].primary=ac[t][5]});var e2=fs.blue;const t2=t=>{const{controlHeight:e}=t;return{controlHeightSM:e*.75,controlHeightXS:e*.5,controlHeightLG:e*1.25}};function n2(t){const{sizeUnit:e,sizeStep:n}=t;return{sizeXXL:e*(n+8),sizeXL:e*(n+4),sizeLG:e*(n+2),sizeMD:e*(n+1),sizeMS:e*n,size:e*n,sizeSM:e*(n-1),sizeXS:e*(n-2),sizeXXS:e*(n-3)}}const Cv={blue:"#1677ff",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#eb2f96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},Bu=N(N({},Cv),{colorPrimary:"#1677ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1677ff",colorTextBase:"",colorBgBase:"",fontFamily:`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,fontSize:14,lineWidth:1,lineType:"solid",motionUnit:.1,motionBase:0,motionEaseOutCirc:"cubic-bezier(0.08, 0.82, 0.17, 1)",motionEaseInOutCirc:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",motionEaseOut:"cubic-bezier(0.215, 0.61, 0.355, 1)",motionEaseInOut:"cubic-bezier(0.645, 0.045, 0.355, 1)",motionEaseOutBack:"cubic-bezier(0.12, 0.4, 0.29, 1.46)",motionEaseInBack:"cubic-bezier(0.71, -0.46, 0.88, 0.6)",motionEaseInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",motionEaseOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",borderRadius:6,sizeUnit:4,sizeStep:4,sizePopupArrow:16,controlHeight:32,zIndexBase:0,zIndexPopupBase:1e3,opacityImage:1,wireframe:!1});function i2(t,e){let{generateColorPalettes:n,generateNeutralColorPalettes:i}=e;const{colorSuccess:r,colorWarning:o,colorError:a,colorInfo:s,colorPrimary:l,colorBgBase:c,colorTextBase:u}=t,d=n(l),f=n(r),h=n(o),v=n(a),g=n(s),m=i(c,u);return N(N({},m),{colorPrimaryBg:d[1],colorPrimaryBgHover:d[2],colorPrimaryBorder:d[3],colorPrimaryBorderHover:d[4],colorPrimaryHover:d[5],colorPrimary:d[6],colorPrimaryActive:d[7],colorPrimaryTextHover:d[8],colorPrimaryText:d[9],colorPrimaryTextActive:d[10],colorSuccessBg:f[1],colorSuccessBgHover:f[2],colorSuccessBorder:f[3],colorSuccessBorderHover:f[4],colorSuccessHover:f[4],colorSuccess:f[6],colorSuccessActive:f[7],colorSuccessTextHover:f[8],colorSuccessText:f[9],colorSuccessTextActive:f[10],colorErrorBg:v[1],colorErrorBgHover:v[2],colorErrorBorder:v[3],colorErrorBorderHover:v[4],colorErrorHover:v[5],colorError:v[6],colorErrorActive:v[7],colorErrorTextHover:v[8],colorErrorText:v[9],colorErrorTextActive:v[10],colorWarningBg:h[1],colorWarningBgHover:h[2],colorWarningBorder:h[3],colorWarningBorderHover:h[4],colorWarningHover:h[4],colorWarning:h[6],colorWarningActive:h[7],colorWarningTextHover:h[8],colorWarningText:h[9],colorWarningTextActive:h[10],colorInfoBg:g[1],colorInfoBgHover:g[2],colorInfoBorder:g[3],colorInfoBorderHover:g[4],colorInfoHover:g[4],colorInfo:g[6],colorInfoActive:g[7],colorInfoTextHover:g[8],colorInfoText:g[9],colorInfoTextActive:g[10],colorBgMask:new rn("#000").setAlpha(.45).toRgbString(),colorWhite:"#fff"})}const r2=t=>{let e=t,n=t,i=t,r=t;return t<6&&t>=5?e=t+1:t<16&&t>=6?e=t+2:t>=16&&(e=16),t<7&&t>=5?n=4:t<8&&t>=7?n=5:t<14&&t>=8?n=6:t<16&&t>=14?n=7:t>=16&&(n=8),t<6&&t>=2?i=1:t>=6&&(i=2),t>4&&t<8?r=4:t>=8&&(r=6),{borderRadius:t>16?16:t,borderRadiusXS:i,borderRadiusSM:n,borderRadiusLG:e,borderRadiusOuter:r}};function o2(t){const{motionUnit:e,motionBase:n,borderRadius:i,lineWidth:r}=t;return N({motionDurationFast:`${(n+e).toFixed(1)}s`,motionDurationMid:`${(n+e*2).toFixed(1)}s`,motionDurationSlow:`${(n+e*3).toFixed(1)}s`,lineWidthBold:r+1},r2(i))}const ti=(t,e)=>new rn(t).setAlpha(e).toRgbString(),bo=(t,e)=>new rn(t).darken(e).toHexString(),a2=t=>{const e=jo(t);return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[4],6:e[5],7:e[6],8:e[4],9:e[5],10:e[6]}},s2=(t,e)=>{const n=t||"#fff",i=e||"#000";return{colorBgBase:n,colorTextBase:i,colorText:ti(i,.88),colorTextSecondary:ti(i,.65),colorTextTertiary:ti(i,.45),colorTextQuaternary:ti(i,.25),colorFill:ti(i,.15),colorFillSecondary:ti(i,.06),colorFillTertiary:ti(i,.04),colorFillQuaternary:ti(i,.02),colorBgLayout:bo(n,4),colorBgContainer:bo(n,0),colorBgElevated:bo(n,0),colorBgSpotlight:ti(i,.85),colorBorder:bo(n,15),colorBorderSecondary:bo(n,6)}};function l2(t){const e=new Array(10).fill(null).map((n,i)=>{const r=i-1,o=t*Math.pow(2.71828,r/5),a=i>1?Math.floor(o):Math.ceil(o);return Math.floor(a/2)*2});return e[1]=t,e.map(n=>{const i=n+8;return{size:n,lineHeight:i/n}})}const c2=t=>{const e=l2(t),n=e.map(r=>r.size),i=e.map(r=>r.lineHeight);return{fontSizeSM:n[0],fontSize:n[1],fontSizeLG:n[2],fontSizeXL:n[3],fontSizeHeading1:n[6],fontSizeHeading2:n[5],fontSizeHeading3:n[4],fontSizeHeading4:n[3],fontSizeHeading5:n[2],lineHeight:i[1],lineHeightLG:i[2],lineHeightSM:i[0],lineHeightHeading1:i[6],lineHeightHeading2:i[5],lineHeightHeading3:i[4],lineHeightHeading4:i[3],lineHeightHeading5:i[2]}};function u2(t){const e=Object.keys(Cv).map(n=>{const i=jo(t[n]);return new Array(10).fill(1).reduce((r,o,a)=>(r[`${n}-${a+1}`]=i[a],r),{})}).reduce((n,i)=>(n=N(N({},n),i),n),{});return N(N(N(N(N(N(N({},t),e),i2(t,{generateColorPalettes:a2,generateNeutralColorPalettes:s2})),c2(t.fontSize)),n2(t)),t2(t)),o2(t))}function sc(t){return t>=0&&t<=255}function Qa(t,e){const{r:n,g:i,b:r,a:o}=new rn(t).toRgb();if(o<1)return t;const{r:a,g:s,b:l}=new rn(e).toRgb();for(let c=.01;c<=1;c+=.01){const u=Math.round((n-a*(1-c))/c),d=Math.round((i-s*(1-c))/c),f=Math.round((r-l*(1-c))/c);if(sc(u)&&sc(d)&&sc(f))return new rn({r:u,g:d,b:f,a:Math.round(c*100)/100}).toRgbString()}return new rn({r:n,g:i,b:r,a:1}).toRgbString()}var d2=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};function f2(t){const{override:e}=t,n=d2(t,["override"]),i=N({},e);Object.keys(Bu).forEach(h=>{delete i[h]});const r=N(N({},n),i),o=480,a=576,s=768,l=992,c=1200,u=1600,d=2e3;return N(N(N({},r),{colorLink:r.colorInfoText,colorLinkHover:r.colorInfoHover,colorLinkActive:r.colorInfoActive,colorFillContent:r.colorFillSecondary,colorFillContentHover:r.colorFill,colorFillAlter:r.colorFillQuaternary,colorBgContainerDisabled:r.colorFillTertiary,colorBorderBg:r.colorBgContainer,colorSplit:Qa(r.colorBorderSecondary,r.colorBgContainer),colorTextPlaceholder:r.colorTextQuaternary,colorTextDisabled:r.colorTextQuaternary,colorTextHeading:r.colorText,colorTextLabel:r.colorTextSecondary,colorTextDescription:r.colorTextTertiary,colorTextLightSolid:r.colorWhite,colorHighlight:r.colorError,colorBgTextHover:r.colorFillSecondary,colorBgTextActive:r.colorFill,colorIcon:r.colorTextTertiary,colorIconHover:r.colorText,colorErrorOutline:Qa(r.colorErrorBg,r.colorBgContainer),colorWarningOutline:Qa(r.colorWarningBg,r.colorBgContainer),fontSizeIcon:r.fontSizeSM,lineWidth:r.lineWidth,controlOutlineWidth:r.lineWidth*2,controlInteractiveSize:r.controlHeight/2,controlItemBgHover:r.colorFillTertiary,controlItemBgActive:r.colorPrimaryBg,controlItemBgActiveHover:r.colorPrimaryBgHover,controlItemBgActiveDisabled:r.colorFill,controlTmpOutline:r.colorFillQuaternary,controlOutline:Qa(r.colorPrimaryBg,r.colorBgContainer),lineType:r.lineType,borderRadius:r.borderRadius,borderRadiusXS:r.borderRadiusXS,borderRadiusSM:r.borderRadiusSM,borderRadiusLG:r.borderRadiusLG,fontWeightStrong:600,opacityLoading:.65,linkDecoration:"none",linkHoverDecoration:"none",linkFocusDecoration:"none",controlPaddingHorizontal:12,controlPaddingHorizontalSM:8,paddingXXS:r.sizeXXS,paddingXS:r.sizeXS,paddingSM:r.sizeSM,padding:r.size,paddingMD:r.sizeMD,paddingLG:r.sizeLG,paddingXL:r.sizeXL,paddingContentHorizontalLG:r.sizeLG,paddingContentVerticalLG:r.sizeMS,paddingContentHorizontal:r.sizeMS,paddingContentVertical:r.sizeSM,paddingContentHorizontalSM:r.size,paddingContentVerticalSM:r.sizeXS,marginXXS:r.sizeXXS,marginXS:r.sizeXS,marginSM:r.sizeSM,margin:r.size,marginMD:r.sizeMD,marginLG:r.sizeLG,marginXL:r.sizeXL,marginXXL:r.sizeXXL,boxShadow:`
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,boxShadowSecondary:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTertiary:`
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,screenXS:o,screenXSMin:o,screenXSMax:a-1,screenSM:a,screenSMMin:a,screenSMMax:s-1,screenMD:s,screenMDMin:s,screenMDMax:l-1,screenLG:l,screenLGMin:l,screenLGMax:c-1,screenXL:c,screenXLMin:c,screenXLMax:u-1,screenXXL:u,screenXXLMin:u,screenXXLMax:d-1,screenXXXL:d,screenXXXLMin:d,boxShadowPopoverArrow:"3px 3px 7px rgba(0, 0, 0, 0.1)",boxShadowCard:`
      0 1px 2px -2px ${new rn("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new rn("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new rn("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,boxShadowDrawerRight:`
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerLeft:`
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerUp:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerDown:`
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTabsOverflowLeft:"inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowRight:"inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowTop:"inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowBottom:"inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"}),i)}const Yc={overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},tr=t=>({boxSizing:"border-box",margin:0,padding:0,color:t.colorText,fontSize:t.fontSize,lineHeight:t.lineHeight,listStyle:"none",fontFamily:t.fontFamily}),Av=()=>({display:"inline-flex",alignItems:"center",color:"inherit",fontStyle:"normal",lineHeight:0,textAlign:"center",textTransform:"none",verticalAlign:"-0.125em",textRendering:"optimizeLegibility","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","> *":{lineHeight:1},svg:{display:"inline-block"}}),h2=t=>({a:{color:t.colorLink,textDecoration:t.linkDecoration,backgroundColor:"transparent",outline:"none",cursor:"pointer",transition:`color ${t.motionDurationSlow}`,"-webkit-text-decoration-skip":"objects","&:hover":{color:t.colorLinkHover},"&:active":{color:t.colorLinkActive},"&:active,\n  &:hover":{textDecoration:t.linkHoverDecoration,outline:0},"&:focus":{textDecoration:t.linkFocusDecoration,outline:0},"&[disabled]":{color:t.colorTextDisabled,cursor:"not-allowed"}}}),p2=(t,e)=>{const{fontFamily:n,fontSize:i}=t,r=`[class^="${e}"], [class*=" ${e}"]`;return{[r]:{fontFamily:n,fontSize:i,boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"},[r]:{boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"}}}}},m2=t=>({outline:`${t.lineWidthBold}px solid ${t.colorPrimaryBorder}`,outlineOffset:1,transition:"outline-offset 0s, outline 0s"});function la(t,e,n){return i=>{const r=V(()=>i==null?void 0:i.value),[o,a,s]=zu(),{getPrefixCls:l,iconPrefixCls:c}=zP(),u=V(()=>l()),d=V(()=>({theme:o.value,token:a.value,hashId:s.value,path:["Shared",u.value]}));hh(d,()=>[{"&":h2(a.value)}]);const f=V(()=>({theme:o.value,token:a.value,hashId:s.value,path:[t,r.value,c.value]}));return[hh(f,()=>{const{token:h,flush:v}=g2(a.value),g=typeof n=="function"?n(h):n,m=N(N({},g),a.value[t]),p=`.${r.value}`,b=Mn(h,{componentCls:p,prefixCls:r.value,iconCls:`.${c.value}`,antCls:`.${u.value}`},m),y=e(b,{hashId:s.value,prefixCls:r.value,rootPrefixCls:u.value,iconPrefixCls:c.value,overrideComponentToken:a.value[t]});return v(t,m),[p2(a.value,r.value),y]}),s]}}const Pv=typeof CSSINJS_STATISTIC<"u";let Kc=!0;function Mn(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!Pv)return N({},...e);Kc=!1;const i={};return e.forEach(r=>{Object.keys(r).forEach(a=>{Object.defineProperty(i,a,{configurable:!0,enumerable:!0,get:()=>r[a]})})}),Kc=!0,i}function v2(){}function g2(t){let e,n=t,i=v2;return Pv&&(e=new Set,n=new Proxy(t,{get(r,o){return Kc&&e.add(o),r[o]}}),i=(r,o)=>{Array.from(e)}),{token:n,keys:e,flush:i}}const _2=QP(u2),y2={token:Bu,hashed:!0},x2=Symbol("DesignTokenContext"),b2=ze();function zu(){const t=Tt(x2,V(()=>b2.value||y2)),e=V(()=>`${UR}-${t.value.hashed||""}`),n=V(()=>t.value.theme||_2),i=dR(n,V(()=>[Bu,t.value.token]),V(()=>({salt:e.value,override:N({override:t.value.token},t.value.components),formatToken:f2})));return[n,V(()=>i.value[0]),V(()=>t.value.hashed?i.value[1]:"")]}const Rv=ve({compatConfig:{MODE:3},setup(){const[,t]=zu(),e=V(()=>new rn(t.value.colorBgBase).toHsl().l<.5?{opacity:.65}:{});return()=>O("svg",{style:e.value,width:"184",height:"152",viewBox:"0 0 184 152",xmlns:"http://www.w3.org/2000/svg"},[O("g",{fill:"none","fill-rule":"evenodd"},[O("g",{transform:"translate(24 31.67)"},[O("ellipse",{"fill-opacity":".8",fill:"#F5F5F7",cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"},null),O("path",{d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",fill:"#AEB8C2"},null),O("path",{d:"M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",fill:"url(#linearGradient-1)",transform:"translate(13.56)"},null),O("path",{d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",fill:"#F5F5F7"},null),O("path",{d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",fill:"#DCE0E6"},null)]),O("path",{d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",fill:"#DCE0E6"},null),O("g",{transform:"translate(149.65 15.383)",fill:"#FFF"},[O("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"},null),O("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"},null)])])])}});Rv.PRESENTED_IMAGE_DEFAULT=!0;const Iv=ve({compatConfig:{MODE:3},setup(){const[,t]=zu(),e=V(()=>{const{colorFill:n,colorFillTertiary:i,colorFillQuaternary:r,colorBgContainer:o}=t.value;return{borderColor:new rn(n).onBackground(o).toHexString(),shadowColor:new rn(i).onBackground(o).toHexString(),contentColor:new rn(r).onBackground(o).toHexString()}});return()=>O("svg",{width:"64",height:"41",viewBox:"0 0 64 41",xmlns:"http://www.w3.org/2000/svg"},[O("g",{transform:"translate(0 1)",fill:"none","fill-rule":"evenodd"},[O("ellipse",{fill:e.value.shadowColor,cx:"32",cy:"33",rx:"32",ry:"7"},null),O("g",{"fill-rule":"nonzero",stroke:e.value.borderColor},[O("path",{d:"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"},null),O("path",{d:"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",fill:e.value.contentColor},null)])])])}});Iv.PRESENTED_IMAGE_SIMPLE=!0;const S2=t=>{const{componentCls:e,margin:n,marginXS:i,marginXL:r,fontSize:o,lineHeight:a}=t;return{[e]:{marginInline:i,fontSize:o,lineHeight:a,textAlign:"center",[`${e}-image`]:{height:t.emptyImgHeight,marginBottom:i,opacity:t.opacityImage,img:{height:"100%"},svg:{height:"100%",margin:"auto"}},[`${e}-footer`]:{marginTop:n},"&-normal":{marginBlock:r,color:t.colorTextDisabled,[`${e}-image`]:{height:t.emptyImgHeightMD}},"&-small":{marginBlock:i,color:t.colorTextDisabled,[`${e}-image`]:{height:t.emptyImgHeightSM}}}}},M2=la("Empty",t=>{const{componentCls:e,controlHeightLG:n}=t,i=Mn(t,{emptyImgCls:`${e}-img`,emptyImgHeight:n*2.5,emptyImgHeightMD:n,emptyImgHeightSM:n*.875});return[S2(i)]});var E2=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};const Lv=O(Rv,null,null),Ov=O(Iv,null,null),w2=()=>({prefixCls:String,imageStyle:nv(),image:zc(),description:zc()}),ku=ve({name:"AEmpty",compatConfig:{MODE:3},inheritAttrs:!1,props:w2(),setup(t,e){let{slots:n={},attrs:i}=e;const{direction:r,prefixCls:o}=ur("empty",t),[a,s]=M2(o);return()=>{var l,c;const u=o.value,d=N(N({},t),i),{image:f=((l=n.image)===null||l===void 0?void 0:l.call(n))||Lv,description:h=((c=n.description)===null||c===void 0?void 0:c.call(n))||void 0,imageStyle:v,class:g=""}=d,m=E2(d,["image","description","imageStyle","class"]);return a(O($P,{componentName:"Empty",children:p=>{const b=typeof h<"u"?h:p.description,y=typeof b=="string"?b:"empty";let _=null;return typeof f=="string"?_=O("img",{alt:y,src:f},null):_=f,O("div",$e({class:gt(u,g,s.value,{[`${u}-normal`]:f===Ov,[`${u}-rtl`]:r.value==="rtl"})},m),[O("div",{class:`${u}-image`,style:v},[_]),b&&O("p",{class:`${u}-description`},[b]),n.default&&O("div",{class:`${u}-footer`},[Qs(n.default())])])}},null))}}});ku.PRESENTED_IMAGE_DEFAULT=Lv;ku.PRESENTED_IMAGE_SIMPLE=Ov;const So=Lu(ku),Dv=t=>{const{prefixCls:e}=ur("empty",t);return(i=>{switch(i){case"Table":case"List":return O(So,{image:So.PRESENTED_IMAGE_SIMPLE},null);case"Select":case"TreeSelect":case"Cascader":case"Transfer":case"Mentions":return O(So,{image:So.PRESENTED_IMAGE_SIMPLE,class:`${e.value}-small`},null);default:return O(So,null,null)}})(t.componentName)},T2=Symbol("SizeContextKey"),C2=()=>Tt(T2,Ce(void 0)),ur=(t,e)=>{const n=C2(),i=Ou(),r=Tt(iv,N(N({},rv),{renderEmpty:M=>Uo(Dv,{componentName:M})})),o=V(()=>r.getPrefixCls(t,e.prefixCls)),a=V(()=>{var M,A;return(M=e.direction)!==null&&M!==void 0?M:(A=r.direction)===null||A===void 0?void 0:A.value}),s=V(()=>{var M;return(M=e.iconPrefixCls)!==null&&M!==void 0?M:r.iconPrefixCls.value}),l=V(()=>r.getPrefixCls()),c=V(()=>{var M;return(M=r.autoInsertSpaceInButton)===null||M===void 0?void 0:M.value}),u=r.renderEmpty,d=r.space,f=r.pageHeader,h=r.form,v=V(()=>{var M,A;return(M=e.getTargetContainer)!==null&&M!==void 0?M:(A=r.getTargetContainer)===null||A===void 0?void 0:A.value}),g=V(()=>{var M,A,S;return(A=(M=e.getContainer)!==null&&M!==void 0?M:e.getPopupContainer)!==null&&A!==void 0?A:(S=r.getPopupContainer)===null||S===void 0?void 0:S.value}),m=V(()=>{var M,A;return(M=e.dropdownMatchSelectWidth)!==null&&M!==void 0?M:(A=r.dropdownMatchSelectWidth)===null||A===void 0?void 0:A.value}),p=V(()=>{var M;return(e.virtual===void 0?((M=r.virtual)===null||M===void 0?void 0:M.value)!==!1:e.virtual!==!1)&&m.value!==!1}),b=V(()=>e.size||n.value),y=V(()=>{var M,A,S;return(M=e.autocomplete)!==null&&M!==void 0?M:(S=(A=r.input)===null||A===void 0?void 0:A.value)===null||S===void 0?void 0:S.autocomplete}),_=V(()=>{var M;return(M=e.disabled)!==null&&M!==void 0?M:i.value}),T=V(()=>{var M;return(M=e.csp)!==null&&M!==void 0?M:r.csp}),w=V(()=>{var M,A;return(M=e.wave)!==null&&M!==void 0?M:(A=r.wave)===null||A===void 0?void 0:A.value});return{configProvider:r,prefixCls:o,direction:a,size:b,getTargetContainer:v,getPopupContainer:g,space:d,pageHeader:f,form:h,autoInsertSpaceInButton:c,renderEmpty:u,virtual:p,dropdownMatchSelectWidth:m,rootPrefixCls:l,getPrefixCls:r.getPrefixCls,autocomplete:y,csp:T,iconPrefixCls:s,disabled:_,select:r.select,wave:w}};function rl(t,e){const n=N({},t);for(let i=0;i<e.length;i+=1){const r=e[i];delete n[r]}return n}function A2(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Nv(t,e,n){return n&&A2(t,n),t}function hs(){return(hs=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function Fv(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function Uv(t,e){if(t==null)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)e.indexOf(n=o[i])>=0||(r[n]=t[n]);return r}function bh(t){return((e=t)!=null&&typeof e=="object"&&Array.isArray(e)===!1)==1&&Object.prototype.toString.call(t)==="[object Object]";var e}var Bv=Object.prototype,zv=Bv.toString,P2=Bv.hasOwnProperty,kv=/^\s*function (\w+)/;function Sh(t){var e,n=(e=t==null?void 0:t.type)!==null&&e!==void 0?e:t;if(n){var i=n.toString().match(kv);return i?i[1]:""}return""}var or=function(t){var e,n;return bh(t)!==!1&&typeof(e=t.constructor)=="function"&&bh(n=e.prototype)!==!1&&n.hasOwnProperty("isPrototypeOf")!==!1},R2=function(t){return t},Zt=R2,qo=function(t,e){return P2.call(t,e)},I2=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t},eo=Array.isArray||function(t){return zv.call(t)==="[object Array]"},to=function(t){return zv.call(t)==="[object Function]"},Ds=function(t){return or(t)&&qo(t,"_vueTypes_name")},Hv=function(t){return or(t)&&(qo(t,"type")||["_vueTypes_name","validator","default","required"].some(function(e){return qo(t,e)}))};function Hu(t,e){return Object.defineProperty(t.bind(e),"__original",{value:t})}function dr(t,e,n){var i;n===void 0&&(n=!1);var r=!0,o="";i=or(t)?t:{type:t};var a=Ds(i)?i._vueTypes_name+" - ":"";if(Hv(i)&&i.type!==null){if(i.type===void 0||i.type===!0||!i.required&&e===void 0)return r;eo(i.type)?(r=i.type.some(function(d){return dr(d,e,!0)===!0}),o=i.type.map(function(d){return Sh(d)}).join(" or ")):r=(o=Sh(i))==="Array"?eo(e):o==="Object"?or(e):o==="String"||o==="Number"||o==="Boolean"||o==="Function"?function(d){if(d==null)return"";var f=d.constructor.toString().match(kv);return f?f[1]:""}(e)===o:e instanceof i.type}if(!r){var s=a+'value "'+e+'" should be of type "'+o+'"';return n===!1?(Zt(s),!1):s}if(qo(i,"validator")&&to(i.validator)){var l=Zt,c=[];if(Zt=function(d){c.push(d)},r=i.validator(e),Zt=l,!r){var u=(c.length>1?"* ":"")+c.join(`
* `);return c.length=0,n===!1?(Zt(u),r):u}}return r}function _n(t,e){var n=Object.defineProperties(e,{_vueTypes_name:{value:t,writable:!0},isRequired:{get:function(){return this.required=!0,this}},def:{value:function(r){return r!==void 0||this.default?to(r)||dr(this,r,!0)===!0?(this.default=eo(r)?function(){return[].concat(r)}:or(r)?function(){return Object.assign({},r)}:r,this):(Zt(this._vueTypes_name+' - invalid default value: "'+r+'"'),this):this}}}),i=n.validator;return to(i)&&(n.validator=Hu(i,n)),n}function Gn(t,e){var n=_n(t,e);return Object.defineProperty(n,"validate",{value:function(i){return to(this.validator)&&Zt(this._vueTypes_name+` - calling .validate() will overwrite the current custom validator function. Validator info:
`+JSON.stringify(this)),this.validator=Hu(i,this),this}})}function Mh(t,e,n){var i,r,o=(i=e,r={},Object.getOwnPropertyNames(i).forEach(function(d){r[d]=Object.getOwnPropertyDescriptor(i,d)}),Object.defineProperties({},r));if(o._vueTypes_name=t,!or(n))return o;var a,s,l=n.validator,c=Uv(n,["validator"]);if(to(l)){var u=o.validator;u&&(u=(s=(a=u).__original)!==null&&s!==void 0?s:a),o.validator=Hu(u?function(d){return u.call(this,d)&&l.call(this,d)}:l,o)}return Object.assign(o,c)}function ol(t){return t.replace(/^(?!\s*$)/gm,"  ")}var L2=function(){return Gn("any",{})},O2=function(){return Gn("function",{type:Function})},D2=function(){return Gn("boolean",{type:Boolean})},N2=function(){return Gn("string",{type:String})},F2=function(){return Gn("number",{type:Number})},U2=function(){return Gn("array",{type:Array})},B2=function(){return Gn("object",{type:Object})},z2=function(){return _n("integer",{type:Number,validator:function(t){return I2(t)}})},k2=function(){return _n("symbol",{validator:function(t){return typeof t=="symbol"}})};function H2(t,e){if(e===void 0&&(e="custom validation failed"),typeof t!="function")throw new TypeError("[VueTypes error]: You must provide a function as argument");return _n(t.name||"<<anonymous function>>",{validator:function(n){var i=t(n);return i||Zt(this._vueTypes_name+" - "+e),i}})}function V2(t){if(!eo(t))throw new TypeError("[VueTypes error]: You must provide an array as argument.");var e='oneOf - value should be one of "'+t.join('", "')+'".',n=t.reduce(function(i,r){if(r!=null){var o=r.constructor;i.indexOf(o)===-1&&i.push(o)}return i},[]);return _n("oneOf",{type:n.length>0?n:void 0,validator:function(i){var r=t.indexOf(i)!==-1;return r||Zt(e),r}})}function $2(t){if(!eo(t))throw new TypeError("[VueTypes error]: You must provide an array as argument");for(var e=!1,n=[],i=0;i<t.length;i+=1){var r=t[i];if(Hv(r)){if(Ds(r)&&r._vueTypes_name==="oneOf"){n=n.concat(r.type);continue}if(to(r.validator)&&(e=!0),r.type!==!0&&r.type){n=n.concat(r.type);continue}}n.push(r)}return n=n.filter(function(o,a){return n.indexOf(o)===a}),_n("oneOfType",e?{type:n,validator:function(o){var a=[],s=t.some(function(l){var c=dr(Ds(l)&&l._vueTypes_name==="oneOf"?l.type||null:l,o,!0);return typeof c=="string"&&a.push(c),c===!0});return s||Zt("oneOfType - provided value does not match any of the "+a.length+` passed-in validators:
`+ol(a.join(`
`))),s}}:{type:n})}function G2(t){return _n("arrayOf",{type:Array,validator:function(e){var n,i=e.every(function(r){return(n=dr(t,r,!0))===!0});return i||Zt(`arrayOf - value validation error:
`+ol(n)),i}})}function W2(t){return _n("instanceOf",{type:t})}function X2(t){return _n("objectOf",{type:Object,validator:function(e){var n,i=Object.keys(e).every(function(r){return(n=dr(t,e[r],!0))===!0});return i||Zt(`objectOf - value validation error:
`+ol(n)),i}})}function j2(t){var e=Object.keys(t),n=e.filter(function(r){var o;return!!(!((o=t[r])===null||o===void 0)&&o.required)}),i=_n("shape",{type:Object,validator:function(r){var o=this;if(!or(r))return!1;var a=Object.keys(r);if(n.length>0&&n.some(function(l){return a.indexOf(l)===-1})){var s=n.filter(function(l){return a.indexOf(l)===-1});return Zt(s.length===1?'shape - required property "'+s[0]+'" is not defined.':'shape - required properties "'+s.join('", "')+'" are not defined.'),!1}return a.every(function(l){if(e.indexOf(l)===-1)return o._vueTypes_isLoose===!0||(Zt('shape - shape definition does not include a "'+l+'" property. Allowed keys: "'+e.join('", "')+'".'),!1);var c=dr(t[l],r[l],!0);return typeof c=="string"&&Zt('shape - "'+l+`" property validation error:
 `+ol(c)),c===!0})}});return Object.defineProperty(i,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(i,"loose",{get:function(){return this._vueTypes_isLoose=!0,this}}),i}var Nn=function(){function t(){}return t.extend=function(e){var n=this;if(eo(e))return e.forEach(function(d){return n.extend(d)}),this;var i=e.name,r=e.validate,o=r!==void 0&&r,a=e.getter,s=a!==void 0&&a,l=Uv(e,["name","validate","getter"]);if(qo(this,i))throw new TypeError('[VueTypes error]: Type "'+i+'" already defined');var c,u=l.type;return Ds(u)?(delete l.type,Object.defineProperty(this,i,s?{get:function(){return Mh(i,u,l)}}:{value:function(){var d,f=Mh(i,u,l);return f.validator&&(f.validator=(d=f.validator).bind.apply(d,[f].concat([].slice.call(arguments)))),f}})):(c=s?{get:function(){var d=Object.assign({},l);return o?Gn(i,d):_n(i,d)},enumerable:!0}:{value:function(){var d,f,h=Object.assign({},l);return d=o?Gn(i,h):_n(i,h),h.validator&&(d.validator=(f=h.validator).bind.apply(f,[d].concat([].slice.call(arguments)))),d},enumerable:!0},Object.defineProperty(this,i,c))},Nv(t,null,[{key:"any",get:function(){return L2()}},{key:"func",get:function(){return O2().def(this.defaults.func)}},{key:"bool",get:function(){return D2().def(this.defaults.bool)}},{key:"string",get:function(){return N2().def(this.defaults.string)}},{key:"number",get:function(){return F2().def(this.defaults.number)}},{key:"array",get:function(){return U2().def(this.defaults.array)}},{key:"object",get:function(){return B2().def(this.defaults.object)}},{key:"integer",get:function(){return z2().def(this.defaults.integer)}},{key:"symbol",get:function(){return k2()}}]),t}();function Vv(t){var e;return t===void 0&&(t={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}),(e=function(n){function i(){return n.apply(this,arguments)||this}return Fv(i,n),Nv(i,null,[{key:"sensibleDefaults",get:function(){return hs({},this.defaults)},set:function(r){this.defaults=r!==!1?hs({},r!==!0?r:t):{}}}]),i}(Nn)).defaults=hs({},t),e}Nn.defaults={},Nn.custom=H2,Nn.oneOf=V2,Nn.instanceOf=W2,Nn.oneOfType=$2,Nn.arrayOf=G2,Nn.objectOf=X2,Nn.shape=j2,Nn.utils={validate:function(t,e){return dr(e,t,!0)===!0},toType:function(t,e,n){return n===void 0&&(n=!1),n?Gn(t,e):_n(t,e)}};(function(t){function e(){return t.apply(this,arguments)||this}return Fv(e,t),e})(Vv());const be=Vv({func:void 0,bool:void 0,string:void 0,number:void 0,array:void 0,object:void 0,integer:void 0});be.extend([{name:"looseBool",getter:!0,type:Boolean,default:void 0},{name:"style",getter:!0,type:[String,Object],default:void 0},{name:"VueNode",getter:!0,type:null}]);function Eh(t,e){const{key:n}=t;let i;return"value"in t&&({value:i}=t),n??(i!==void 0?i:`rc-index-key-${e}`)}function $v(t,e){const{label:n,value:i,options:r}=t||{};return{label:n||(e?"children":"label"),value:i||"value",options:r||"options"}}function q2(t){let{fieldNames:e,childrenAsData:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=[],{label:r,value:o,options:a}=$v(e,!1);function s(l,c){l.forEach(u=>{const d=u[r];if(c||!(a in u)){const f=u[o];i.push({key:Eh(u,i.length),groupOption:c,data:u,label:d,value:f})}else{let f=d;f===void 0&&n&&(f=u.label),i.push({key:Eh(u,i.length),group:!0,data:u,label:f}),s(u[a],!0)}})}return s(t,!1),i}function Zc(t){const e=N({},t);return"props"in e||Object.defineProperty(e,"props",{get(){return e}}),e}function Y2(t,e){if(!e||!e.length)return null;let n=!1;function i(o,a){let[s,...l]=a;if(!s)return[o];const c=o.split(s);return n=n||c.length>1,c.reduce((u,d)=>[...u,...i(d,l)],[]).filter(u=>u)}const r=i(t,e);return n?r:null}function K2(){return""}function Z2(t){return t?t.ownerDocument:window.document}function Gv(){}const J2=()=>({action:be.oneOfType([be.string,be.arrayOf(be.string)]).def([]),showAction:be.any.def([]),hideAction:be.any.def([]),getPopupClassNameFromAlign:be.any.def(K2),onPopupVisibleChange:Function,afterPopupVisibleChange:be.func.def(Gv),popup:be.any,arrow:be.bool.def(!0),popupStyle:{type:Object,default:void 0},prefixCls:be.string.def("rc-trigger-popup"),popupClassName:be.string.def(""),popupPlacement:String,builtinPlacements:be.object,popupTransitionName:String,popupAnimation:be.any,mouseEnterDelay:be.number.def(0),mouseLeaveDelay:be.number.def(.1),zIndex:Number,focusDelay:be.number.def(0),blurDelay:be.number.def(.15),getPopupContainer:Function,getDocument:be.func.def(Z2),forceRender:{type:Boolean,default:void 0},destroyPopupOnHide:{type:Boolean,default:!1},mask:{type:Boolean,default:!1},maskClosable:{type:Boolean,default:!0},popupAlign:be.object.def(()=>({})),popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},maskTransitionName:String,maskAnimation:String,stretch:String,alignPoint:{type:Boolean,default:void 0},autoDestroy:{type:Boolean,default:!1},mobile:Object,getTriggerDOMNode:Function}),Vu={visible:Boolean,prefixCls:String,zIndex:Number,destroyPopupOnHide:Boolean,forceRender:Boolean,arrow:{type:Boolean,default:!0},animation:[String,Object],transitionName:String,stretch:{type:String},align:{type:Object},point:{type:Object},getRootDomNode:{type:Function},getClassNameFromAlign:{type:Function},onAlign:{type:Function},onMouseenter:{type:Function},onMouseleave:{type:Function},onMousedown:{type:Function},onTouchstart:{type:Function}},Q2=N(N({},Vu),{mobile:{type:Object}}),eI=N(N({},Vu),{mask:Boolean,mobile:{type:Object},maskAnimation:String,maskTransitionName:String});function Wv(t){let{prefixCls:e,animation:n,transitionName:i}=t;return n?{name:`${e}-${n}`}:i?{name:i}:{}}function Xv(t){const{prefixCls:e,visible:n,zIndex:i,mask:r,maskAnimation:o,maskTransitionName:a}=t;if(!r)return null;let s={};return(a||o)&&(s=Wv({prefixCls:e,transitionName:a,animation:o})),O(io,$e({appear:!0},s),{default:()=>[fu(O("div",{style:{zIndex:i},class:`${e}-mask`},null),[[Wp("if"),n]])]})}Xv.displayName="Mask";const tI=ve({compatConfig:{MODE:3},name:"MobilePopupInner",inheritAttrs:!1,props:Q2,emits:["mouseenter","mouseleave","mousedown","touchstart","align"],setup(t,e){let{expose:n,slots:i}=e;const r=Ce();return n({forceAlign:()=>{},getElement:()=>r.value}),()=>{var o;const{zIndex:a,visible:s,prefixCls:l,mobile:{popupClassName:c,popupStyle:u,popupMotion:d={},popupRender:f}={}}=t,h=N({zIndex:a},u);let v=mn((o=i.default)===null||o===void 0?void 0:o.call(i));v.length>1&&(v=O("div",{class:`${l}-content`},[v])),f&&(v=f(v));const g=gt(l,c);return O(io,$e({ref:r},d),{default:()=>[s?O("div",{class:g,style:h},[v]):null]})}}});var nI=function(t,e,n,i){function r(o){return o instanceof n?o:new n(function(a){a(o)})}return new(n||(n=Promise))(function(o,a){function s(u){try{c(i.next(u))}catch(d){a(d)}}function l(u){try{c(i.throw(u))}catch(d){a(d)}}function c(u){u.done?o(u.value):r(u.value).then(s,l)}c((i=i.apply(t,e||[])).next())})};const wh=["measure","align",null,"motion"],iI=(t,e)=>{const n=ze(null),i=ze(),r=ze(!1);function o(l){r.value||(n.value=l)}function a(){Ut.cancel(i.value)}function s(l){a(),i.value=Ut(()=>{let c=n.value;switch(n.value){case"align":c="motion";break;case"motion":c="stable";break}o(c),l==null||l()})}return Ye(t,()=>{o("measure")},{immediate:!0,flush:"post"}),St(()=>{Ye(n,()=>{switch(n.value){case"measure":e();break}n.value&&(i.value=Ut(()=>nI(void 0,void 0,void 0,function*(){const l=wh.indexOf(n.value),c=wh[l+1];c&&l!==-1&&o(c)})))},{immediate:!0,flush:"post"})}),Xn(()=>{r.value=!0,a()}),[n,s]},rI=t=>{const e=ze({width:0,height:0});function n(r){e.value={width:r.offsetWidth,height:r.offsetHeight}}return[V(()=>{const r={};if(t.value){const{width:o,height:a}=e.value;t.value.indexOf("height")!==-1&&a?r.height=`${a}px`:t.value.indexOf("minHeight")!==-1&&a&&(r.minHeight=`${a}px`),t.value.indexOf("width")!==-1&&o?r.width=`${o}px`:t.value.indexOf("minWidth")!==-1&&o&&(r.minWidth=`${o}px`)}return r}),n]};function Th(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Ch(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Th(Object(n),!0).forEach(function(i){oI(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Th(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Jc(t){"@babel/helpers - typeof";return Jc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jc(t)}function oI(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Mo,aI={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function Ns(){if(Mo!==void 0)return Mo;Mo="";var t=document.createElement("p").style,e="Transform";for(var n in aI)n+e in t&&(Mo=n);return Mo}function jv(){return Ns()?"".concat(Ns(),"TransitionProperty"):"transitionProperty"}function al(){return Ns()?"".concat(Ns(),"Transform"):"transform"}function Ah(t,e){var n=jv();n&&(t.style[n]=e,n!=="transitionProperty"&&(t.style.transitionProperty=e))}function lc(t,e){var n=al();n&&(t.style[n]=e,n!=="transform"&&(t.style.transform=e))}function sI(t){return t.style.transitionProperty||t.style[jv()]}function lI(t){var e=window.getComputedStyle(t,null),n=e.getPropertyValue("transform")||e.getPropertyValue(al());if(n&&n!=="none"){var i=n.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(i[12]||i[4],0),y:parseFloat(i[13]||i[5],0)}}return{x:0,y:0}}var cI=/matrix\((.*)\)/,uI=/matrix3d\((.*)\)/;function dI(t,e){var n=window.getComputedStyle(t,null),i=n.getPropertyValue("transform")||n.getPropertyValue(al());if(i&&i!=="none"){var r,o=i.match(cI);if(o)o=o[1],r=o.split(",").map(function(s){return parseFloat(s,10)}),r[4]=e.x,r[5]=e.y,lc(t,"matrix(".concat(r.join(","),")"));else{var a=i.match(uI)[1];r=a.split(",").map(function(s){return parseFloat(s,10)}),r[12]=e.x,r[13]=e.y,lc(t,"matrix3d(".concat(r.join(","),")"))}}else lc(t,"translateX(".concat(e.x,"px) translateY(").concat(e.y,"px) translateZ(0)"))}var fI=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,ca;function Ph(t){var e=t.style.display;t.style.display="none",t.offsetHeight,t.style.display=e}function Gr(t,e,n){var i=n;if(Jc(e)==="object"){for(var r in e)e.hasOwnProperty(r)&&Gr(t,r,e[r]);return}if(typeof i<"u"){typeof i=="number"&&(i="".concat(i,"px")),t.style[e]=i;return}return ca(t,e)}function hI(t){var e,n,i,r=t.ownerDocument,o=r.body,a=r&&r.documentElement;return e=t.getBoundingClientRect(),n=Math.floor(e.left),i=Math.floor(e.top),n-=a.clientLeft||o.clientLeft||0,i-=a.clientTop||o.clientTop||0,{left:n,top:i}}function qv(t,e){var n=t["page".concat(e?"Y":"X","Offset")],i="scroll".concat(e?"Top":"Left");if(typeof n!="number"){var r=t.document;n=r.documentElement[i],typeof n!="number"&&(n=r.body[i])}return n}function Yv(t){return qv(t)}function Kv(t){return qv(t,!0)}function Yo(t){var e=hI(t),n=t.ownerDocument,i=n.defaultView||n.parentWindow;return e.left+=Yv(i),e.top+=Kv(i),e}function $u(t){return t!=null&&t==t.window}function Zv(t){return $u(t)?t.document:t.nodeType===9?t:t.ownerDocument}function pI(t,e,n){var i=n,r="",o=Zv(t);return i=i||o.defaultView.getComputedStyle(t,null),i&&(r=i.getPropertyValue(e)||i[e]),r}var mI=new RegExp("^(".concat(fI,")(?!px)[a-z%]+$"),"i"),vI=/^(top|right|bottom|left)$/,cc="currentStyle",uc="runtimeStyle",ki="left",gI="px";function _I(t,e){var n=t[cc]&&t[cc][e];if(mI.test(n)&&!vI.test(e)){var i=t.style,r=i[ki],o=t[uc][ki];t[uc][ki]=t[cc][ki],i[ki]=e==="fontSize"?"1em":n||0,n=i.pixelLeft+gI,i[ki]=r,t[uc][ki]=o}return n===""?"auto":n}typeof window<"u"&&(ca=window.getComputedStyle?pI:_I);function es(t,e){return t==="left"?e.useCssRight?"right":t:e.useCssBottom?"bottom":t}function Rh(t){if(t==="left")return"right";if(t==="right")return"left";if(t==="top")return"bottom";if(t==="bottom")return"top"}function Ih(t,e,n){Gr(t,"position")==="static"&&(t.style.position="relative");var i=-999,r=-999,o=es("left",n),a=es("top",n),s=Rh(o),l=Rh(a);o!=="left"&&(i=999),a!=="top"&&(r=999);var c="",u=Yo(t);("left"in e||"top"in e)&&(c=sI(t)||"",Ah(t,"none")),"left"in e&&(t.style[s]="",t.style[o]="".concat(i,"px")),"top"in e&&(t.style[l]="",t.style[a]="".concat(r,"px")),Ph(t);var d=Yo(t),f={};for(var h in e)if(e.hasOwnProperty(h)){var v=es(h,n),g=h==="left"?i:r,m=u[h]-d[h];v===h?f[v]=g+m:f[v]=g-m}Gr(t,f),Ph(t),("left"in e||"top"in e)&&Ah(t,c);var p={};for(var b in e)if(e.hasOwnProperty(b)){var y=es(b,n),_=e[b]-u[b];b===y?p[y]=f[y]+_:p[y]=f[y]-_}Gr(t,p)}function yI(t,e){var n=Yo(t),i=lI(t),r={x:i.x,y:i.y};"left"in e&&(r.x=i.x+e.left-n.left),"top"in e&&(r.y=i.y+e.top-n.top),dI(t,r)}function xI(t,e,n){if(n.ignoreShake){var i=Yo(t),r=i.left.toFixed(0),o=i.top.toFixed(0),a=e.left.toFixed(0),s=e.top.toFixed(0);if(r===a&&o===s)return}n.useCssRight||n.useCssBottom?Ih(t,e,n):n.useCssTransform&&al()in document.body.style?yI(t,e):Ih(t,e,n)}function Gu(t,e){for(var n=0;n<t.length;n++)e(t[n])}function Jv(t){return ca(t,"boxSizing")==="border-box"}var bI=["margin","border","padding"],Qc=-1,SI=2,eu=1,MI=0;function EI(t,e,n){var i={},r=t.style,o;for(o in e)e.hasOwnProperty(o)&&(i[o]=r[o],r[o]=e[o]);n.call(t);for(o in e)e.hasOwnProperty(o)&&(r[o]=i[o])}function Po(t,e,n){var i=0,r,o,a;for(o=0;o<e.length;o++)if(r=e[o],r)for(a=0;a<n.length;a++){var s=void 0;r==="border"?s="".concat(r).concat(n[a],"Width"):s=r+n[a],i+=parseFloat(ca(t,s))||0}return i}var kn={getParent:function(e){var n=e;do n.nodeType===11&&n.host?n=n.host:n=n.parentNode;while(n&&n.nodeType!==1&&n.nodeType!==9);return n}};Gu(["Width","Height"],function(t){kn["doc".concat(t)]=function(e){var n=e.document;return Math.max(n.documentElement["scroll".concat(t)],n.body["scroll".concat(t)],kn["viewport".concat(t)](n))},kn["viewport".concat(t)]=function(e){var n="client".concat(t),i=e.document,r=i.body,o=i.documentElement,a=o[n];return i.compatMode==="CSS1Compat"&&a||r&&r[n]||a}});function Lh(t,e,n){var i=n;if($u(t))return e==="width"?kn.viewportWidth(t):kn.viewportHeight(t);if(t.nodeType===9)return e==="width"?kn.docWidth(t):kn.docHeight(t);var r=e==="width"?["Left","Right"]:["Top","Bottom"],o=Math.floor(e==="width"?t.getBoundingClientRect().width:t.getBoundingClientRect().height),a=Jv(t),s=0;(o==null||o<=0)&&(o=void 0,s=ca(t,e),(s==null||Number(s)<0)&&(s=t.style[e]||0),s=Math.floor(parseFloat(s))||0),i===void 0&&(i=a?eu:Qc);var l=o!==void 0||a,c=o||s;return i===Qc?l?c-Po(t,["border","padding"],r):s:l?i===eu?c:c+(i===SI?-Po(t,["border"],r):Po(t,["margin"],r)):s+Po(t,bI.slice(i),r)}var wI={position:"absolute",visibility:"hidden",display:"block"};function Oh(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i,r=e[0];return r.offsetWidth!==0?i=Lh.apply(void 0,e):EI(r,wI,function(){i=Lh.apply(void 0,e)}),i}Gu(["width","height"],function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);kn["outer".concat(e)]=function(i,r){return i&&Oh(i,t,r?MI:eu)};var n=t==="width"?["Left","Right"]:["Top","Bottom"];kn[t]=function(i,r){var o=r;if(o!==void 0){if(i){var a=Jv(i);return a&&(o+=Po(i,["padding","border"],n)),Gr(i,t,o)}return}return i&&Oh(i,t,Qc)}});function Qv(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}var Ze={getWindow:function(e){if(e&&e.document&&e.setTimeout)return e;var n=e.ownerDocument||e;return n.defaultView||n.parentWindow},getDocument:Zv,offset:function(e,n,i){if(typeof n<"u")xI(e,n,i||{});else return Yo(e)},isWindow:$u,each:Gu,css:Gr,clone:function(e){var n,i={};for(n in e)e.hasOwnProperty(n)&&(i[n]=e[n]);var r=e.overflow;if(r)for(n in e)e.hasOwnProperty(n)&&(i.overflow[n]=e.overflow[n]);return i},mix:Qv,getWindowScrollLeft:function(e){return Yv(e)},getWindowScrollTop:function(e){return Kv(e)},merge:function(){for(var e={},n=0;n<arguments.length;n++)Ze.mix(e,n<0||arguments.length<=n?void 0:arguments[n]);return e},viewportWidth:0,viewportHeight:0};Qv(Ze,kn);var dc=Ze.getParent;function tu(t){if(Ze.isWindow(t)||t.nodeType===9)return null;var e=Ze.getDocument(t),n=e.body,i,r=Ze.css(t,"position"),o=r==="fixed"||r==="absolute";if(!o)return t.nodeName.toLowerCase()==="html"?null:dc(t);for(i=dc(t);i&&i!==n&&i.nodeType!==9;i=dc(i))if(r=Ze.css(i,"position"),r!=="static")return i;return null}var Dh=Ze.getParent;function TI(t){if(Ze.isWindow(t)||t.nodeType===9)return!1;var e=Ze.getDocument(t),n=e.body,i=null;for(i=Dh(t);i&&i!==n&&i!==e;i=Dh(i)){var r=Ze.css(i,"position");if(r==="fixed")return!0}return!1}function Wu(t,e){for(var n={left:0,right:1/0,top:0,bottom:1/0},i=tu(t),r=Ze.getDocument(t),o=r.defaultView||r.parentWindow,a=r.body,s=r.documentElement;i;){if((navigator.userAgent.indexOf("MSIE")===-1||i.clientWidth!==0)&&i!==a&&i!==s&&Ze.css(i,"overflow")!=="visible"){var l=Ze.offset(i);l.left+=i.clientLeft,l.top+=i.clientTop,n.top=Math.max(n.top,l.top),n.right=Math.min(n.right,l.left+i.clientWidth),n.bottom=Math.min(n.bottom,l.top+i.clientHeight),n.left=Math.max(n.left,l.left)}else if(i===a||i===s)break;i=tu(i)}var c=null;if(!Ze.isWindow(t)&&t.nodeType!==9){c=t.style.position;var u=Ze.css(t,"position");u==="absolute"&&(t.style.position="fixed")}var d=Ze.getWindowScrollLeft(o),f=Ze.getWindowScrollTop(o),h=Ze.viewportWidth(o),v=Ze.viewportHeight(o),g=s.scrollWidth,m=s.scrollHeight,p=window.getComputedStyle(a);if(p.overflowX==="hidden"&&(g=o.innerWidth),p.overflowY==="hidden"&&(m=o.innerHeight),t.style&&(t.style.position=c),e||TI(t))n.left=Math.max(n.left,d),n.top=Math.max(n.top,f),n.right=Math.min(n.right,d+h),n.bottom=Math.min(n.bottom,f+v);else{var b=Math.max(g,d+h);n.right=Math.min(n.right,b);var y=Math.max(m,f+v);n.bottom=Math.min(n.bottom,y)}return n.top>=0&&n.left>=0&&n.bottom>n.top&&n.right>n.left?n:null}function CI(t,e,n,i){var r=Ze.clone(t),o={width:e.width,height:e.height};return i.adjustX&&r.left<n.left&&(r.left=n.left),i.resizeWidth&&r.left>=n.left&&r.left+o.width>n.right&&(o.width-=r.left+o.width-n.right),i.adjustX&&r.left+o.width>n.right&&(r.left=Math.max(n.right-o.width,n.left)),i.adjustY&&r.top<n.top&&(r.top=n.top),i.resizeHeight&&r.top>=n.top&&r.top+o.height>n.bottom&&(o.height-=r.top+o.height-n.bottom),i.adjustY&&r.top+o.height>n.bottom&&(r.top=Math.max(n.bottom-o.height,n.top)),Ze.mix(r,o)}function Xu(t){var e,n,i;if(!Ze.isWindow(t)&&t.nodeType!==9)e=Ze.offset(t),n=Ze.outerWidth(t),i=Ze.outerHeight(t);else{var r=Ze.getWindow(t);e={left:Ze.getWindowScrollLeft(r),top:Ze.getWindowScrollTop(r)},n=Ze.viewportWidth(r),i=Ze.viewportHeight(r)}return e.width=n,e.height=i,e}function Nh(t,e){var n=e.charAt(0),i=e.charAt(1),r=t.width,o=t.height,a=t.left,s=t.top;return n==="c"?s+=o/2:n==="b"&&(s+=o),i==="c"?a+=r/2:i==="r"&&(a+=r),{left:a,top:s}}function ts(t,e,n,i,r){var o=Nh(e,n[1]),a=Nh(t,n[0]),s=[a.left-o.left,a.top-o.top];return{left:Math.round(t.left-s[0]+i[0]-r[0]),top:Math.round(t.top-s[1]+i[1]-r[1])}}function Fh(t,e,n){return t.left<n.left||t.left+e.width>n.right}function Uh(t,e,n){return t.top<n.top||t.top+e.height>n.bottom}function AI(t,e,n){return t.left>n.right||t.left+e.width<n.left}function PI(t,e,n){return t.top>n.bottom||t.top+e.height<n.top}function ns(t,e,n){var i=[];return Ze.each(t,function(r){i.push(r.replace(e,function(o){return n[o]}))}),i}function is(t,e){return t[e]=-t[e],t}function Bh(t,e){var n;return/%$/.test(t)?n=parseInt(t.substring(0,t.length-1),10)/100*e:n=parseInt(t,10),n||0}function zh(t,e){t[0]=Bh(t[0],e.width),t[1]=Bh(t[1],e.height)}function eg(t,e,n,i){var r=n.points,o=n.offset||[0,0],a=n.targetOffset||[0,0],s=n.overflow,l=n.source||t;o=[].concat(o),a=[].concat(a),s=s||{};var c={},u=0,d=!!(s&&s.alwaysByViewport),f=Wu(l,d),h=Xu(l);zh(o,h),zh(a,e);var v=ts(h,e,r,o,a),g=Ze.merge(h,v);if(f&&(s.adjustX||s.adjustY)&&i){if(s.adjustX&&Fh(v,h,f)){var m=ns(r,/[lr]/gi,{l:"r",r:"l"}),p=is(o,0),b=is(a,0),y=ts(h,e,m,p,b);AI(y,h,f)||(u=1,r=m,o=p,a=b)}if(s.adjustY&&Uh(v,h,f)){var _=ns(r,/[tb]/gi,{t:"b",b:"t"}),T=is(o,1),w=is(a,1),M=ts(h,e,_,T,w);PI(M,h,f)||(u=1,r=_,o=T,a=w)}u&&(v=ts(h,e,r,o,a),Ze.mix(g,v));var A=Fh(v,h,f),S=Uh(v,h,f);if(A||S){var x=r;A&&(x=ns(r,/[lr]/gi,{l:"r",r:"l"})),S&&(x=ns(r,/[tb]/gi,{t:"b",b:"t"})),r=x,o=n.offset||[0,0],a=n.targetOffset||[0,0]}c.adjustX=s.adjustX&&A,c.adjustY=s.adjustY&&S,(c.adjustX||c.adjustY)&&(g=CI(v,h,f,c))}return g.width!==h.width&&Ze.css(l,"width",Ze.width(l)+g.width-h.width),g.height!==h.height&&Ze.css(l,"height",Ze.height(l)+g.height-h.height),Ze.offset(l,{left:g.left,top:g.top},{useCssRight:n.useCssRight,useCssBottom:n.useCssBottom,useCssTransform:n.useCssTransform,ignoreShake:n.ignoreShake}),{points:r,offset:o,targetOffset:a,overflow:c}}function RI(t,e){var n=Wu(t,e),i=Xu(t);return!n||i.left+i.width<=n.left||i.top+i.height<=n.top||i.left>=n.right||i.top>=n.bottom}function ju(t,e,n){var i=n.target||e,r=Xu(i),o=!RI(i,n.overflow&&n.overflow.alwaysByViewport);return eg(t,r,n,o)}ju.__getOffsetParent=tu;ju.__getVisibleRectForElement=Wu;function II(t,e,n){var i,r,o=Ze.getDocument(t),a=o.defaultView||o.parentWindow,s=Ze.getWindowScrollLeft(a),l=Ze.getWindowScrollTop(a),c=Ze.viewportWidth(a),u=Ze.viewportHeight(a);"pageX"in e?i=e.pageX:i=s+e.clientX,"pageY"in e?r=e.pageY:r=l+e.clientY;var d={left:i,top:r,width:0,height:0},f=i>=0&&i<=s+c&&r>=0&&r<=l+u,h=[n.points[0],"cc"];return eg(t,d,Ch(Ch({},n),{},{points:h}),f)}function sl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=t;if(Array.isArray(t)&&(r=Qs(t)[0]),!r)return null;const o=hu(r,e,i);return o.props=n?N(N({},o.props),e):o.props,Nu(typeof o.props.class!="object"),o}const LI=t=>{if(!t)return!1;if(t.offsetParent)return!0;if(t.getBBox){const e=t.getBBox();if(e.width||e.height)return!0}if(t.getBoundingClientRect){const e=t.getBoundingClientRect();if(e.width||e.height)return!0}return!1};function OI(t,e){return t===e?!0:!t||!e?!1:"pageX"in e&&"pageY"in e?t.pageX===e.pageX&&t.pageY===e.pageY:"clientX"in e&&"clientY"in e?t.clientX===e.clientX&&t.clientY===e.clientY:!1}function DI(t,e){t!==document.activeElement&&Xi(e,t)&&typeof t.focus=="function"&&t.focus()}function kh(t,e){let n=null,i=null;function r(a){let[{target:s}]=a;if(!document.documentElement.contains(s))return;const{width:l,height:c}=s.getBoundingClientRect(),u=Math.floor(l),d=Math.floor(c);(n!==u||i!==d)&&Promise.resolve().then(()=>{e({width:u,height:d})}),n=u,i=d}const o=new Au(r);return t&&o.observe(t),()=>{o.disconnect()}}const NI=(t,e)=>{let n=!1,i=null;function r(){clearTimeout(i)}function o(a){if(!n||a===!0){if(t()===!1)return;n=!0,r(),i=setTimeout(()=>{n=!1},e.value)}else r(),i=setTimeout(()=>{n=!1,o()},e.value)}return[o,()=>{n=!1,r()}]};function FI(){this.__data__=[],this.size=0}function tg(t,e){return t===e||t!==t&&e!==e}function ll(t,e){for(var n=t.length;n--;)if(tg(t[n][0],e))return n;return-1}var UI=Array.prototype,BI=UI.splice;function zI(t){var e=this.__data__,n=ll(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():BI.call(e,n,1),--this.size,!0}function kI(t){var e=this.__data__,n=ll(e,t);return n<0?void 0:e[n][1]}function HI(t){return ll(this.__data__,t)>-1}function VI(t,e){var n=this.__data__,i=ll(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}function ui(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}ui.prototype.clear=FI;ui.prototype.delete=zI;ui.prototype.get=kI;ui.prototype.has=HI;ui.prototype.set=VI;function $I(){this.__data__=new ui,this.size=0}function GI(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function WI(t){return this.__data__.get(t)}function XI(t){return this.__data__.has(t)}var ng=typeof global=="object"&&global&&global.Object===Object&&global,jI=typeof self=="object"&&self&&self.Object===Object&&self,di=ng||jI||Function("return this")(),no=di.Symbol,ig=Object.prototype,qI=ig.hasOwnProperty,YI=ig.toString,Eo=no?no.toStringTag:void 0;function KI(t){var e=qI.call(t,Eo),n=t[Eo];try{t[Eo]=void 0;var i=!0}catch{}var r=YI.call(t);return i&&(e?t[Eo]=n:delete t[Eo]),r}var ZI=Object.prototype,JI=ZI.toString;function QI(t){return JI.call(t)}var eL="[object Null]",tL="[object Undefined]",Hh=no?no.toStringTag:void 0;function ua(t){return t==null?t===void 0?tL:eL:Hh&&Hh in Object(t)?KI(t):QI(t)}function rg(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var nL="[object AsyncFunction]",iL="[object Function]",rL="[object GeneratorFunction]",oL="[object Proxy]";function og(t){if(!rg(t))return!1;var e=ua(t);return e==iL||e==rL||e==nL||e==oL}var fc=di["__core-js_shared__"],Vh=function(){var t=/[^.]+$/.exec(fc&&fc.keys&&fc.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function aL(t){return!!Vh&&Vh in t}var sL=Function.prototype,lL=sL.toString;function fr(t){if(t!=null){try{return lL.call(t)}catch{}try{return t+""}catch{}}return""}var cL=/[\\^$.*+?()[\]{}|]/g,uL=/^\[object .+?Constructor\]$/,dL=Function.prototype,fL=Object.prototype,hL=dL.toString,pL=fL.hasOwnProperty,mL=RegExp("^"+hL.call(pL).replace(cL,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function vL(t){if(!rg(t)||aL(t))return!1;var e=og(t)?mL:uL;return e.test(fr(t))}function gL(t,e){return t==null?void 0:t[e]}function co(t,e){var n=gL(t,e);return vL(n)?n:void 0}var Ko=co(di,"Map"),Zo=co(Object,"create");function _L(){this.__data__=Zo?Zo(null):{},this.size=0}function yL(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var xL="__lodash_hash_undefined__",bL=Object.prototype,SL=bL.hasOwnProperty;function ML(t){var e=this.__data__;if(Zo){var n=e[t];return n===xL?void 0:n}return SL.call(e,t)?e[t]:void 0}var EL=Object.prototype,wL=EL.hasOwnProperty;function TL(t){var e=this.__data__;return Zo?e[t]!==void 0:wL.call(e,t)}var CL="__lodash_hash_undefined__";function AL(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Zo&&e===void 0?CL:e,this}function ar(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}ar.prototype.clear=_L;ar.prototype.delete=yL;ar.prototype.get=ML;ar.prototype.has=TL;ar.prototype.set=AL;function PL(){this.size=0,this.__data__={hash:new ar,map:new(Ko||ui),string:new ar}}function RL(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function cl(t,e){var n=t.__data__;return RL(e)?n[typeof e=="string"?"string":"hash"]:n.map}function IL(t){var e=cl(this,t).delete(t);return this.size-=e?1:0,e}function LL(t){return cl(this,t).get(t)}function OL(t){return cl(this,t).has(t)}function DL(t,e){var n=cl(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}function hr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}hr.prototype.clear=PL;hr.prototype.delete=IL;hr.prototype.get=LL;hr.prototype.has=OL;hr.prototype.set=DL;var NL=200;function FL(t,e){var n=this.__data__;if(n instanceof ui){var i=n.__data__;if(!Ko||i.length<NL-1)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new hr(i)}return n.set(t,e),this.size=n.size,this}function wi(t){var e=this.__data__=new ui(t);this.size=e.size}wi.prototype.clear=$I;wi.prototype.delete=GI;wi.prototype.get=WI;wi.prototype.has=XI;wi.prototype.set=FL;var UL="__lodash_hash_undefined__";function BL(t){return this.__data__.set(t,UL),this}function zL(t){return this.__data__.has(t)}function Fs(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new hr;++e<n;)this.add(t[e])}Fs.prototype.add=Fs.prototype.push=BL;Fs.prototype.has=zL;function kL(t,e){for(var n=-1,i=t==null?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1}function HL(t,e){return t.has(e)}var VL=1,$L=2;function ag(t,e,n,i,r,o){var a=n&VL,s=t.length,l=e.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(t),u=o.get(e);if(c&&u)return c==e&&u==t;var d=-1,f=!0,h=n&$L?new Fs:void 0;for(o.set(t,e),o.set(e,t);++d<s;){var v=t[d],g=e[d];if(i)var m=a?i(g,v,d,e,t,o):i(v,g,d,t,e,o);if(m!==void 0){if(m)continue;f=!1;break}if(h){if(!kL(e,function(p,b){if(!HL(h,b)&&(v===p||r(v,p,n,i,o)))return h.push(b)})){f=!1;break}}else if(!(v===g||r(v,g,n,i,o))){f=!1;break}}return o.delete(t),o.delete(e),f}var $h=di.Uint8Array;function GL(t){var e=-1,n=Array(t.size);return t.forEach(function(i,r){n[++e]=[r,i]}),n}function WL(t){var e=-1,n=Array(t.size);return t.forEach(function(i){n[++e]=i}),n}var XL=1,jL=2,qL="[object Boolean]",YL="[object Date]",KL="[object Error]",ZL="[object Map]",JL="[object Number]",QL="[object RegExp]",eO="[object Set]",tO="[object String]",nO="[object Symbol]",iO="[object ArrayBuffer]",rO="[object DataView]",Gh=no?no.prototype:void 0,hc=Gh?Gh.valueOf:void 0;function oO(t,e,n,i,r,o,a){switch(n){case rO:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case iO:return!(t.byteLength!=e.byteLength||!o(new $h(t),new $h(e)));case qL:case YL:case JL:return tg(+t,+e);case KL:return t.name==e.name&&t.message==e.message;case QL:case tO:return t==e+"";case ZL:var s=GL;case eO:var l=i&XL;if(s||(s=WL),t.size!=e.size&&!l)return!1;var c=a.get(t);if(c)return c==e;i|=jL,a.set(t,e);var u=ag(s(t),s(e),i,r,o,a);return a.delete(t),u;case nO:if(hc)return hc.call(t)==hc.call(e)}return!1}function aO(t,e){for(var n=-1,i=e.length,r=t.length;++n<i;)t[r+n]=e[n];return t}var Jo=Array.isArray;function sO(t,e,n){var i=e(t);return Jo(t)?i:aO(i,n(t))}function lO(t,e){for(var n=-1,i=t==null?0:t.length,r=0,o=[];++n<i;){var a=t[n];e(a,n,t)&&(o[r++]=a)}return o}function cO(){return[]}var uO=Object.prototype,dO=uO.propertyIsEnumerable,Wh=Object.getOwnPropertySymbols,fO=Wh?function(t){return t==null?[]:(t=Object(t),lO(Wh(t),function(e){return dO.call(t,e)}))}:cO;function hO(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i}function Qo(t){return t!=null&&typeof t=="object"}var pO="[object Arguments]";function Xh(t){return Qo(t)&&ua(t)==pO}var sg=Object.prototype,mO=sg.hasOwnProperty,vO=sg.propertyIsEnumerable,lg=Xh(function(){return arguments}())?Xh:function(t){return Qo(t)&&mO.call(t,"callee")&&!vO.call(t,"callee")};function gO(){return!1}var cg=typeof exports=="object"&&exports&&!exports.nodeType&&exports,jh=cg&&typeof module=="object"&&module&&!module.nodeType&&module,_O=jh&&jh.exports===cg,qh=_O?di.Buffer:void 0,yO=qh?qh.isBuffer:void 0,Us=yO||gO,xO=9007199254740991,bO=/^(?:0|[1-9]\d*)$/;function SO(t,e){var n=typeof t;return e=e??xO,!!e&&(n=="number"||n!="symbol"&&bO.test(t))&&t>-1&&t%1==0&&t<e}var MO=9007199254740991;function ug(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=MO}var EO="[object Arguments]",wO="[object Array]",TO="[object Boolean]",CO="[object Date]",AO="[object Error]",PO="[object Function]",RO="[object Map]",IO="[object Number]",LO="[object Object]",OO="[object RegExp]",DO="[object Set]",NO="[object String]",FO="[object WeakMap]",UO="[object ArrayBuffer]",BO="[object DataView]",zO="[object Float32Array]",kO="[object Float64Array]",HO="[object Int8Array]",VO="[object Int16Array]",$O="[object Int32Array]",GO="[object Uint8Array]",WO="[object Uint8ClampedArray]",XO="[object Uint16Array]",jO="[object Uint32Array]",xt={};xt[zO]=xt[kO]=xt[HO]=xt[VO]=xt[$O]=xt[GO]=xt[WO]=xt[XO]=xt[jO]=!0;xt[EO]=xt[wO]=xt[UO]=xt[TO]=xt[BO]=xt[CO]=xt[AO]=xt[PO]=xt[RO]=xt[IO]=xt[LO]=xt[OO]=xt[DO]=xt[NO]=xt[FO]=!1;function qO(t){return Qo(t)&&ug(t.length)&&!!xt[ua(t)]}function YO(t){return function(e){return t(e)}}var dg=typeof exports=="object"&&exports&&!exports.nodeType&&exports,No=dg&&typeof module=="object"&&module&&!module.nodeType&&module,KO=No&&No.exports===dg,pc=KO&&ng.process,Yh=function(){try{var t=No&&No.require&&No.require("util").types;return t||pc&&pc.binding&&pc.binding("util")}catch{}}(),Kh=Yh&&Yh.isTypedArray,qu=Kh?YO(Kh):qO,ZO=Object.prototype,JO=ZO.hasOwnProperty;function QO(t,e){var n=Jo(t),i=!n&&lg(t),r=!n&&!i&&Us(t),o=!n&&!i&&!r&&qu(t),a=n||i||r||o,s=a?hO(t.length,String):[],l=s.length;for(var c in t)JO.call(t,c)&&!(a&&(c=="length"||r&&(c=="offset"||c=="parent")||o&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||SO(c,l)))&&s.push(c);return s}var eD=Object.prototype;function fg(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||eD;return t===n}function tD(t,e){return function(n){return t(e(n))}}var nD=tD(Object.keys,Object),iD=Object.prototype,rD=iD.hasOwnProperty;function hg(t){if(!fg(t))return nD(t);var e=[];for(var n in Object(t))rD.call(t,n)&&n!="constructor"&&e.push(n);return e}function pg(t){return t!=null&&ug(t.length)&&!og(t)}function oD(t){return pg(t)?QO(t):hg(t)}function Zh(t){return sO(t,oD,fO)}var aD=1,sD=Object.prototype,lD=sD.hasOwnProperty;function cD(t,e,n,i,r,o){var a=n&aD,s=Zh(t),l=s.length,c=Zh(e),u=c.length;if(l!=u&&!a)return!1;for(var d=l;d--;){var f=s[d];if(!(a?f in e:lD.call(e,f)))return!1}var h=o.get(t),v=o.get(e);if(h&&v)return h==e&&v==t;var g=!0;o.set(t,e),o.set(e,t);for(var m=a;++d<l;){f=s[d];var p=t[f],b=e[f];if(i)var y=a?i(b,p,f,e,t,o):i(p,b,f,t,e,o);if(!(y===void 0?p===b||r(p,b,n,i,o):y)){g=!1;break}m||(m=f=="constructor")}if(g&&!m){var _=t.constructor,T=e.constructor;_!=T&&"constructor"in t&&"constructor"in e&&!(typeof _=="function"&&_ instanceof _&&typeof T=="function"&&T instanceof T)&&(g=!1)}return o.delete(t),o.delete(e),g}var nu=co(di,"DataView"),iu=co(di,"Promise"),ru=co(di,"Set"),ou=co(di,"WeakMap"),Jh="[object Map]",uD="[object Object]",Qh="[object Promise]",ep="[object Set]",tp="[object WeakMap]",np="[object DataView]",dD=fr(nu),fD=fr(Ko),hD=fr(iu),pD=fr(ru),mD=fr(ou),oi=ua;(nu&&oi(new nu(new ArrayBuffer(1)))!=np||Ko&&oi(new Ko)!=Jh||iu&&oi(iu.resolve())!=Qh||ru&&oi(new ru)!=ep||ou&&oi(new ou)!=tp)&&(oi=function(t){var e=ua(t),n=e==uD?t.constructor:void 0,i=n?fr(n):"";if(i)switch(i){case dD:return np;case fD:return Jh;case hD:return Qh;case pD:return ep;case mD:return tp}return e});var vD=1,ip="[object Arguments]",rp="[object Array]",rs="[object Object]",gD=Object.prototype,op=gD.hasOwnProperty;function _D(t,e,n,i,r,o){var a=Jo(t),s=Jo(e),l=a?rp:oi(t),c=s?rp:oi(e);l=l==ip?rs:l,c=c==ip?rs:c;var u=l==rs,d=c==rs,f=l==c;if(f&&Us(t)){if(!Us(e))return!1;a=!0,u=!1}if(f&&!u)return o||(o=new wi),a||qu(t)?ag(t,e,n,i,r,o):oO(t,e,l,n,i,r,o);if(!(n&vD)){var h=u&&op.call(t,"__wrapped__"),v=d&&op.call(e,"__wrapped__");if(h||v){var g=h?t.value():t,m=v?e.value():e;return o||(o=new wi),r(g,m,n,i,o)}}return f?(o||(o=new wi),cD(t,e,n,i,r,o)):!1}function mg(t,e,n,i,r){return t===e?!0:t==null||e==null||!Qo(t)&&!Qo(e)?t!==t&&e!==e:_D(t,e,n,i,mg,r)}function yD(t,e){return mg(t,e)}const xD={align:Object,target:[Object,Function],onAlign:Function,monitorBufferTime:Number,monitorWindowResize:Boolean,disabled:Boolean};function ap(t){return typeof t!="function"?null:t()}function sp(t){return typeof t!="object"||!t?null:t}const bD=ve({compatConfig:{MODE:3},name:"Align",props:xD,emits:["align"],setup(t,e){let{expose:n,slots:i}=e;const r=Ce({}),o=Ce(),[a,s]=NI(()=>{const{disabled:f,target:h,align:v,onAlign:g}=t;if(!f&&h&&o.value){const m=o.value;let p;const b=ap(h),y=sp(h);r.value.element=b,r.value.point=y,r.value.align=v;const{activeElement:_}=document;return b&&LI(b)?p=ju(m,b,v):y&&(p=II(m,y,v)),DI(_,m),g&&p&&g(m,p),!0}return!1},V(()=>t.monitorBufferTime)),l=Ce({cancel:()=>{}}),c=Ce({cancel:()=>{}}),u=()=>{const f=t.target,h=ap(f),v=sp(f);o.value!==c.value.element&&(c.value.cancel(),c.value.element=o.value,c.value.cancel=kh(o.value,a)),(r.value.element!==h||!OI(r.value.point,v)||!yD(r.value.align,t.align))&&(a(),l.value.element!==h&&(l.value.cancel(),l.value.element=h,l.value.cancel=kh(h,a)))};St(()=>{on(()=>{u()})}),ro(()=>{on(()=>{u()})}),Ye(()=>t.disabled,f=>{f?s():a()},{immediate:!0,flush:"post"});const d=Ce(null);return Ye(()=>t.monitorWindowResize,f=>{f?d.value||(d.value=Ao(window,"resize",a)):d.value&&(d.value.remove(),d.value=null)},{flush:"post"}),Wn(()=>{l.value.cancel(),c.value.cancel(),d.value&&d.value.remove(),s()}),n({forceAlign:()=>a(!0)}),()=>{const f=i==null?void 0:i.default();return f?sl(f[0],{ref:o},!0,!0):null}}});Rs("bottomLeft","bottomRight","topLeft","topRight");const SD=t=>t!==void 0&&(t==="topLeft"||t==="topRight")?"slide-down":"slide-up",MD=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return N(t?{name:t,appear:!0,enterFromClass:`${t}-enter ${t}-enter-prepare ${t}-enter-start`,enterActiveClass:`${t}-enter ${t}-enter-prepare`,enterToClass:`${t}-enter ${t}-enter-active`,leaveFromClass:` ${t}-leave`,leaveActiveClass:`${t}-leave ${t}-leave-active`,leaveToClass:`${t}-leave ${t}-leave-active`}:{css:!1},e)},ED=(t,e,n)=>n!==void 0?n:`${t}-${e}`,wD=ve({compatConfig:{MODE:3},name:"PopupInner",inheritAttrs:!1,props:Vu,emits:["mouseenter","mouseleave","mousedown","touchstart","align"],setup(t,e){let{expose:n,attrs:i,slots:r}=e;const o=ze(),a=ze(),s=ze(),[l,c]=rI(ni(t,"stretch")),u=()=>{t.stretch&&c(t.getRootDomNode())},d=ze(!1);let f;Ye(()=>t.visible,w=>{clearTimeout(f),w?f=setTimeout(()=>{d.value=t.visible}):d.value=!1},{immediate:!0});const[h,v]=iI(d,u),g=ze(),m=()=>t.point?t.point:t.getRootDomNode,p=()=>{var w;(w=o.value)===null||w===void 0||w.forceAlign()},b=(w,M)=>{var A;const S=t.getClassNameFromAlign(M),x=s.value;s.value!==S&&(s.value=S),h.value==="align"&&(x!==S?Promise.resolve().then(()=>{p()}):v(()=>{var I;(I=g.value)===null||I===void 0||I.call(g)}),(A=t.onAlign)===null||A===void 0||A.call(t,w,M))},y=V(()=>{const w=typeof t.animation=="object"?t.animation:Wv(t);return["onAfterEnter","onAfterLeave"].forEach(M=>{const A=w[M];w[M]=S=>{v(),h.value="stable",A==null||A(S)}}),w}),_=()=>new Promise(w=>{g.value=w});Ye([y,h],()=>{!y.value&&h.value==="motion"&&v()},{immediate:!0}),n({forceAlign:p,getElement:()=>a.value.$el||a.value});const T=V(()=>{var w;return!(!((w=t.align)===null||w===void 0)&&w.points&&(h.value==="align"||h.value==="stable"))});return()=>{var w;const{zIndex:M,align:A,prefixCls:S,destroyPopupOnHide:x,onMouseenter:I,onMouseleave:$,onTouchstart:L=()=>{},onMousedown:B}=t,D=h.value,W=[N(N({},l.value),{zIndex:M,opacity:D==="motion"||D==="stable"||!d.value?null:0,pointerEvents:!d.value&&D!=="stable"?"none":null}),i.style];let ie=mn((w=r.default)===null||w===void 0?void 0:w.call(r,{visible:t.visible}));ie.length>1&&(ie=O("div",{class:`${S}-content`},[ie]));const X=gt(S,i.class,s.value,!t.arrow&&`${S}-arrow-hidden`),ee=d.value||!t.visible?MD(y.value.name,y.value):{};return O(io,$e($e({ref:a},ee),{},{onBeforeEnter:_}),{default:()=>!x||t.visible?fu(O(bD,{target:m(),key:"popup",ref:o,monitorWindowResize:!0,disabled:T.value,align:A,onAlign:b},{default:()=>O("div",{class:X,onMouseenter:I,onMouseleave:$,onMousedown:Sc(B,["capture"]),[Kt?"onTouchstartPassive":"onTouchstart"]:Sc(L,["capture"]),style:W},[ie])}),[[f0,d.value]]):null})}}}),TD=ve({compatConfig:{MODE:3},name:"Popup",inheritAttrs:!1,props:eI,setup(t,e){let{attrs:n,slots:i,expose:r}=e;const o=ze(!1),a=ze(!1),s=ze(),l=ze();return Ye([()=>t.visible,()=>t.mobile],()=>{o.value=t.visible,t.visible&&t.mobile&&(a.value=!0)},{immediate:!0,flush:"post"}),r({forceAlign:()=>{var c;(c=s.value)===null||c===void 0||c.forceAlign()},getElement:()=>{var c;return(c=s.value)===null||c===void 0?void 0:c.getElement()}}),()=>{const c=N(N(N({},t),n),{visible:o.value}),u=a.value?O(tI,$e($e({},c),{},{mobile:t.mobile,ref:s}),{default:i.default}):O(wD,$e($e({},c),{},{ref:s}),{default:i.default});return O("div",{ref:l},[O(Xv,c,null),u])}}});function CD(t,e,n){return n?t[0]===e[0]:t[0]===e[0]&&t[1]===e[1]}function lp(t,e,n){const i=t[e]||{};return N(N({},i),n)}function AD(t,e,n,i){const{points:r}=n,o=Object.keys(t);for(let a=0;a<o.length;a+=1){const s=o[a];if(CD(t[s].points,r,i))return`${e}-placement-${s}`}return""}const PD={methods:{setState(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=typeof t=="function"?t(this.$data,this.$props):t;if(this.getDerivedStateFromProps){const i=this.getDerivedStateFromProps(FP(this),N(N({},this.$data),n));if(i===null)return;n=N(N({},n),i||{})}N(this.$data,n),this._.isMounted&&this.$forceUpdate(),on(()=>{e&&e()})},__emit(){const t=[].slice.call(arguments,0);let e=t[0];e=`on${e[0].toUpperCase()}${e.substring(1)}`;const n=this.$props[e]||this.$attrs[e];if(t.length&&n)if(Array.isArray(n))for(let i=0,r=n.length;i<r;i++)n[i](...t.slice(1));else n(...t.slice(1))}}},vg=Symbol("PortalContextKey"),gg=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inTriggerContext:!0};gn(vg,{inTriggerContext:e.inTriggerContext,shouldRender:V(()=>{const{sPopupVisible:n,popupRef:i,forceRender:r,autoDestroy:o}=t||{};let a=!1;return(n||i||r)&&(a=!0),!n&&o&&(a=!1),a})})},RD=()=>{gg({},{inTriggerContext:!1});const t=Tt(vg,{shouldRender:V(()=>!1),inTriggerContext:!1});return{shouldRender:V(()=>t.shouldRender.value||t.inTriggerContext===!1)}},ID=ve({compatConfig:{MODE:3},name:"Portal",inheritAttrs:!1,props:{getContainer:be.func.isRequired,didUpdate:Function},setup(t,e){let{slots:n}=e,i=!0,r;const{shouldRender:o}=RD();function a(){o.value&&(r=t.getContainer())}h0(()=>{i=!1,a()}),St(()=>{r||a()});const s=Ye(o,()=>{o.value&&!r&&(r=t.getContainer()),r&&s()});return ro(()=>{on(()=>{var l;o.value&&((l=t.didUpdate)===null||l===void 0||l.call(t,t))})}),()=>{var l;return o.value?i?(l=n.default)===null||l===void 0?void 0:l.call(n):r?O(p0,{to:r},n):null:null}}});let mc;function LD(t){if(typeof document>"u")return 0;if(mc===void 0){const e=document.createElement("div");e.style.width="100%",e.style.height="200px";const n=document.createElement("div"),i=n.style;i.position="absolute",i.top="0",i.left="0",i.pointerEvents="none",i.visibility="hidden",i.width="200px",i.height="150px",i.overflow="hidden",n.appendChild(e),document.body.appendChild(n);const r=e.offsetWidth;n.style.overflow="scroll";let o=e.offsetWidth;r===o&&(o=n.clientWidth),document.body.removeChild(n),mc=r-o}return mc}const OD=`vc-util-locker-${Date.now()}`;let cp=0;function DD(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}function ND(t){const e=V(()=>!!t&&!!t.value);cp+=1;const n=`${OD}_${cp}`;en(i=>{if($n()){if(e.value){const r=LD(),o=DD();Ls(`
html body {
  overflow-y: hidden;
  ${o?`width: calc(100% - ${r}px);`:""}
}`,n)}else Is(n);i(()=>{Is(n)})}},{flush:"post"})}let Hi=0;const ps=$n(),up=t=>{if(!ps)return null;if(t){if(typeof t=="string")return document.querySelectorAll(t)[0];if(typeof t=="function")return t();if(typeof t=="object"&&t instanceof window.HTMLElement)return t}return document.body},FD=ve({compatConfig:{MODE:3},name:"PortalWrapper",inheritAttrs:!1,props:{wrapperClassName:String,forceRender:{type:Boolean,default:void 0},getContainer:be.any,visible:{type:Boolean,default:void 0},autoLock:Yt(),didUpdate:Function},setup(t,e){let{slots:n}=e;const i=ze(),r=ze(),o=ze(),a=ze(1),s=$n()&&document.createElement("div"),l=()=>{var h,v;i.value===s&&((v=(h=i.value)===null||h===void 0?void 0:h.parentNode)===null||v===void 0||v.removeChild(i.value)),i.value=null};let c=null;const u=function(){return(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)||i.value&&!i.value.parentNode?(c=up(t.getContainer),c?(c.appendChild(i.value),!0):!1):!0},d=()=>ps?(i.value||(i.value=s,u(!0)),f(),i.value):null,f=()=>{const{wrapperClassName:h}=t;i.value&&h&&h!==i.value.className&&(i.value.className=h)};return ro(()=>{f(),u()}),ND(V(()=>t.autoLock&&t.visible&&$n()&&(i.value===document.body||i.value===s))),St(()=>{let h=!1;Ye([()=>t.visible,()=>t.getContainer],(v,g)=>{let[m,p]=v,[b,y]=g;ps&&(c=up(t.getContainer),c===document.body&&(m&&!b?Hi+=1:h&&(Hi-=1))),h&&(typeof p=="function"&&typeof y=="function"?p.toString()!==y.toString():p!==y)&&l(),h=!0},{immediate:!0,flush:"post"}),on(()=>{u()||(o.value=Ut(()=>{a.value+=1}))})}),Xn(()=>{const{visible:h}=t;ps&&c===document.body&&(Hi=h&&Hi?Hi-1:Hi),l(),Ut.cancel(o.value)}),()=>{const{forceRender:h,visible:v}=t;let g=null;const m={getOpenCount:()=>Hi,getContainer:d};return a.value&&(h||v||r.value)&&(g=O(ID,{getContainer:d,ref:r,didUpdate:t.didUpdate},{default:()=>{var p;return(p=n.default)===null||p===void 0?void 0:p.call(n,m)}})),g}}}),UD=["onClick","onMousedown","onTouchstart","onMouseenter","onMouseleave","onFocus","onBlur","onContextmenu"],BD=ve({compatConfig:{MODE:3},name:"Trigger",mixins:[PD],inheritAttrs:!1,props:J2(),setup(t){const e=V(()=>{const{popupPlacement:r,popupAlign:o,builtinPlacements:a}=t;return r&&a?lp(a,r,o):o}),n=ze(null),i=r=>{n.value=r};return{vcTriggerContext:Tt("vcTriggerContext",{}),popupRef:n,setPopupRef:i,triggerRef:ze(null),align:e,focusTime:null,clickOutsideHandler:null,contextmenuOutsideHandler1:null,contextmenuOutsideHandler2:null,touchOutsideHandler:null,attachId:null,delayTimer:null,hasPopupMouseDown:!1,preClickTime:null,preTouchTime:null,mouseDownTimeout:null,childOriginEvents:{}}},data(){const t=this.$props;let e;return this.popupVisible!==void 0?e=!!t.popupVisible:e=!!t.defaultPopupVisible,UD.forEach(n=>{this[`fire${n}`]=i=>{this.fireEvents(n,i)}}),{prevPopupVisible:e,sPopupVisible:e,point:null}},watch:{popupVisible(t){t!==void 0&&(this.prevPopupVisible=this.sPopupVisible,this.sPopupVisible=t)}},created(){gn("vcTriggerContext",{onPopupMouseDown:this.onPopupMouseDown,onPopupMouseenter:this.onPopupMouseenter,onPopupMouseleave:this.onPopupMouseleave}),gg(this)},deactivated(){this.setPopupVisible(!1)},mounted(){this.$nextTick(()=>{this.updatedCal()})},updated(){this.$nextTick(()=>{this.updatedCal()})},beforeUnmount(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),Ut.cancel(this.attachId)},methods:{updatedCal(){const t=this.$props;if(this.$data.sPopupVisible){let n;!this.clickOutsideHandler&&(this.isClickToHide()||this.isContextmenuToShow())&&(n=t.getDocument(this.getRootDomNode()),this.clickOutsideHandler=Ao(n,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(n=n||t.getDocument(this.getRootDomNode()),this.touchOutsideHandler=Ao(n,"touchstart",this.onDocumentClick,Kt?{passive:!1}:!1)),!this.contextmenuOutsideHandler1&&this.isContextmenuToShow()&&(n=n||t.getDocument(this.getRootDomNode()),this.contextmenuOutsideHandler1=Ao(n,"scroll",this.onContextmenuClose)),!this.contextmenuOutsideHandler2&&this.isContextmenuToShow()&&(this.contextmenuOutsideHandler2=Ao(window,"blur",this.onContextmenuClose))}else this.clearOutsideHandler()},onMouseenter(t){const{mouseEnterDelay:e}=this.$props;this.fireEvents("onMouseenter",t),this.delaySetPopupVisible(!0,e,e?null:t)},onMouseMove(t){this.fireEvents("onMousemove",t),this.setPoint(t)},onMouseleave(t){this.fireEvents("onMouseleave",t),this.delaySetPopupVisible(!1,this.$props.mouseLeaveDelay)},onPopupMouseenter(){const{vcTriggerContext:t={}}=this;t.onPopupMouseenter&&t.onPopupMouseenter(),this.clearDelayTimer()},onPopupMouseleave(t){var e;if(t&&t.relatedTarget&&!t.relatedTarget.setTimeout&&Xi((e=this.popupRef)===null||e===void 0?void 0:e.getElement(),t.relatedTarget))return;this.isMouseLeaveToHide()&&this.delaySetPopupVisible(!1,this.$props.mouseLeaveDelay);const{vcTriggerContext:n={}}=this;n.onPopupMouseleave&&n.onPopupMouseleave(t)},onFocus(t){this.fireEvents("onFocus",t),this.clearDelayTimer(),this.isFocusToShow()&&(this.focusTime=Date.now(),this.delaySetPopupVisible(!0,this.$props.focusDelay))},onMousedown(t){this.fireEvents("onMousedown",t),this.preClickTime=Date.now()},onTouchstart(t){this.fireEvents("onTouchstart",t),this.preTouchTime=Date.now()},onBlur(t){Xi(t.target,t.relatedTarget||document.activeElement)||(this.fireEvents("onBlur",t),this.clearDelayTimer(),this.isBlurToHide()&&this.delaySetPopupVisible(!1,this.$props.blurDelay))},onContextmenu(t){t.preventDefault(),this.fireEvents("onContextmenu",t),this.setPopupVisible(!0,t)},onContextmenuClose(){this.isContextmenuToShow()&&this.close()},onClick(t){if(this.fireEvents("onClick",t),this.focusTime){let n;if(this.preClickTime&&this.preTouchTime?n=Math.min(this.preClickTime,this.preTouchTime):this.preClickTime?n=this.preClickTime:this.preTouchTime&&(n=this.preTouchTime),Math.abs(n-this.focusTime)<20)return;this.focusTime=0}this.preClickTime=0,this.preTouchTime=0,this.isClickToShow()&&(this.isClickToHide()||this.isBlurToHide())&&t&&t.preventDefault&&t.preventDefault(),t&&t.domEvent&&t.domEvent.preventDefault();const e=!this.$data.sPopupVisible;(this.isClickToHide()&&!e||e&&this.isClickToShow())&&this.setPopupVisible(!this.$data.sPopupVisible,t)},onPopupMouseDown(){const{vcTriggerContext:t={}}=this;this.hasPopupMouseDown=!0,clearTimeout(this.mouseDownTimeout),this.mouseDownTimeout=setTimeout(()=>{this.hasPopupMouseDown=!1},0),t.onPopupMouseDown&&t.onPopupMouseDown(...arguments)},onDocumentClick(t){if(this.$props.mask&&!this.$props.maskClosable)return;const e=t.target,n=this.getRootDomNode(),i=this.getPopupDomNode();(!Xi(n,e)||this.isContextMenuOnly())&&!Xi(i,e)&&!this.hasPopupMouseDown&&this.delaySetPopupVisible(!1,.1)},getPopupDomNode(){var t;return((t=this.popupRef)===null||t===void 0?void 0:t.getElement())||null},getRootDomNode(){var t,e,n,i;const{getTriggerDOMNode:r}=this.$props;if(r){const o=((e=(t=this.triggerRef)===null||t===void 0?void 0:t.$el)===null||e===void 0?void 0:e.nodeName)==="#comment"?null:Co(this.triggerRef);return Co(r(o))}try{const o=((i=(n=this.triggerRef)===null||n===void 0?void 0:n.$el)===null||i===void 0?void 0:i.nodeName)==="#comment"?null:Co(this.triggerRef);if(o)return o}catch{}return Co(this)},handleGetPopupClassFromAlign(t){const e=[],n=this.$props,{popupPlacement:i,builtinPlacements:r,prefixCls:o,alignPoint:a,getPopupClassNameFromAlign:s}=n;return i&&r&&e.push(AD(r,o,t,a)),s&&e.push(s(t)),e.join(" ")},getPopupAlign(){const t=this.$props,{popupPlacement:e,popupAlign:n,builtinPlacements:i}=t;return e&&i?lp(i,e,n):n},getComponent(){const t={};this.isMouseEnterToShow()&&(t.onMouseenter=this.onPopupMouseenter),this.isMouseLeaveToHide()&&(t.onMouseleave=this.onPopupMouseleave),t.onMousedown=this.onPopupMouseDown,t[Kt?"onTouchstartPassive":"onTouchstart"]=this.onPopupMouseDown;const{handleGetPopupClassFromAlign:e,getRootDomNode:n,$attrs:i}=this,{prefixCls:r,destroyPopupOnHide:o,popupClassName:a,popupAnimation:s,popupTransitionName:l,popupStyle:c,mask:u,maskAnimation:d,maskTransitionName:f,zIndex:h,stretch:v,alignPoint:g,mobile:m,arrow:p,forceRender:b}=this.$props,{sPopupVisible:y,point:_}=this.$data,T=N(N({prefixCls:r,arrow:p,destroyPopupOnHide:o,visible:y,point:g?_:null,align:this.align,animation:s,getClassNameFromAlign:e,stretch:v,getRootDomNode:n,mask:u,zIndex:h,transitionName:l,maskAnimation:d,maskTransitionName:f,class:a,style:c,onAlign:i.onPopupAlign||Gv},t),{ref:this.setPopupRef,mobile:m,forceRender:b});return O(TD,T,{default:this.$slots.popup||(()=>UP(this,"popup"))})},attachParent(t){Ut.cancel(this.attachId);const{getPopupContainer:e,getDocument:n}=this.$props,i=this.getRootDomNode();let r;e?(i||e.length===0)&&(r=e(i)):r=n(this.getRootDomNode()).body,r?r.appendChild(t):this.attachId=Ut(()=>{this.attachParent(t)})},getContainer(){const{$props:t}=this,{getDocument:e}=t,n=e(this.getRootDomNode()).createElement("div");return n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.width="100%",this.attachParent(n),n},setPopupVisible(t,e){const{alignPoint:n,sPopupVisible:i,onPopupVisibleChange:r}=this;this.clearDelayTimer(),i!==t&&(OP(this,"popupVisible")||this.setState({sPopupVisible:t,prevPopupVisible:i}),r&&r(t)),n&&e&&t&&this.setPoint(e)},setPoint(t){const{alignPoint:e}=this.$props;!e||!t||this.setState({point:{pageX:t.pageX,pageY:t.pageY}})},handlePortalUpdate(){this.prevPopupVisible!==this.sPopupVisible&&this.afterPopupVisibleChange(this.sPopupVisible)},delaySetPopupVisible(t,e,n){const i=e*1e3;if(this.clearDelayTimer(),i){const r=n?{pageX:n.pageX,pageY:n.pageY}:null;this.delayTimer=setTimeout(()=>{this.setPopupVisible(t,r),this.clearDelayTimer()},i)}else this.setPopupVisible(t,n)},clearDelayTimer(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)},clearOutsideHandler(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextmenuOutsideHandler1&&(this.contextmenuOutsideHandler1.remove(),this.contextmenuOutsideHandler1=null),this.contextmenuOutsideHandler2&&(this.contextmenuOutsideHandler2.remove(),this.contextmenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)},createTwoChains(t){let e=()=>{};const n=Jf(this);return this.childOriginEvents[t]&&n[t]?this[`fire${t}`]:(e=this.childOriginEvents[t]||n[t]||e,e)},isClickToShow(){const{action:t,showAction:e}=this.$props;return t.indexOf("click")!==-1||e.indexOf("click")!==-1},isContextMenuOnly(){const{action:t}=this.$props;return t==="contextmenu"||t.length===1&&t[0]==="contextmenu"},isContextmenuToShow(){const{action:t,showAction:e}=this.$props;return t.indexOf("contextmenu")!==-1||e.indexOf("contextmenu")!==-1},isClickToHide(){const{action:t,hideAction:e}=this.$props;return t.indexOf("click")!==-1||e.indexOf("click")!==-1},isMouseEnterToShow(){const{action:t,showAction:e}=this.$props;return t.indexOf("hover")!==-1||e.indexOf("mouseenter")!==-1},isMouseLeaveToHide(){const{action:t,hideAction:e}=this.$props;return t.indexOf("hover")!==-1||e.indexOf("mouseleave")!==-1},isFocusToShow(){const{action:t,showAction:e}=this.$props;return t.indexOf("focus")!==-1||e.indexOf("focus")!==-1},isBlurToHide(){const{action:t,hideAction:e}=this.$props;return t.indexOf("focus")!==-1||e.indexOf("blur")!==-1},forcePopupAlign(){var t;this.$data.sPopupVisible&&((t=this.popupRef)===null||t===void 0||t.forceAlign())},fireEvents(t,e){this.childOriginEvents[t]&&this.childOriginEvents[t](e);const n=this.$props[t]||this.$attrs[t];n&&n(e)},close(){this.setPopupVisible(!1)}},render(){const{$attrs:t}=this,e=Qs(NP(this)),{alignPoint:n,getPopupContainer:i}=this.$props,r=e[0];this.childOriginEvents=Jf(r);const o={key:"trigger"};this.isContextmenuToShow()?o.onContextmenu=this.onContextmenu:o.onContextmenu=this.createTwoChains("onContextmenu"),this.isClickToHide()||this.isClickToShow()?(o.onClick=this.onClick,o.onMousedown=this.onMousedown,o[Kt?"onTouchstartPassive":"onTouchstart"]=this.onTouchstart):(o.onClick=this.createTwoChains("onClick"),o.onMousedown=this.createTwoChains("onMousedown"),o[Kt?"onTouchstartPassive":"onTouchstart"]=this.createTwoChains("onTouchstart")),this.isMouseEnterToShow()?(o.onMouseenter=this.onMouseenter,n&&(o.onMousemove=this.onMouseMove)):o.onMouseenter=this.createTwoChains("onMouseenter"),this.isMouseLeaveToHide()?o.onMouseleave=this.onMouseleave:o.onMouseleave=this.createTwoChains("onMouseleave"),this.isFocusToShow()||this.isBlurToHide()?(o.onFocus=this.onFocus,o.onBlur=this.onBlur):(o.onFocus=this.createTwoChains("onFocus"),o.onBlur=c=>{c&&(!c.relatedTarget||!Xi(c.target,c.relatedTarget))&&this.createTwoChains("onBlur")(c)});const a=gt(r&&r.props&&r.props.class,t.class);a&&(o.class=a);const s=sl(r,N(N({},o),{ref:"triggerRef"}),!0,!0),l=O(FD,{key:"portal",getContainer:i&&(()=>i(this.getRootDomNode())),didUpdate:this.handlePortalUpdate,visible:this.$data.sPopupVisible},{default:this.getComponent});return O(ot,null,[s,l])}});var zD=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};const kD=t=>{const e=t===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:e,adjustY:1}},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:e,adjustY:1}},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:e,adjustY:1}},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:e,adjustY:1}}}},HD=ve({name:"SelectTrigger",inheritAttrs:!1,props:{dropdownAlign:Object,visible:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},dropdownClassName:String,dropdownStyle:be.object,placement:String,empty:{type:Boolean,default:void 0},prefixCls:String,popupClassName:String,animation:String,transitionName:String,getPopupContainer:Function,dropdownRender:Function,containerWidth:Number,dropdownMatchSelectWidth:be.oneOfType([Number,Boolean]).def(!0),popupElement:be.any,direction:String,getTriggerDOMNode:Function,onPopupVisibleChange:Function,onPopupMouseEnter:Function,onPopupFocusin:Function,onPopupFocusout:Function},setup(t,e){let{slots:n,attrs:i,expose:r}=e;const o=V(()=>{const{dropdownMatchSelectWidth:s}=t;return kD(s)}),a=Ce();return r({getPopupElement:()=>a.value}),()=>{const s=N(N({},t),i),{empty:l=!1}=s,c=zD(s,["empty"]),{visible:u,dropdownAlign:d,prefixCls:f,popupElement:h,dropdownClassName:v,dropdownStyle:g,direction:m="ltr",placement:p,dropdownMatchSelectWidth:b,containerWidth:y,dropdownRender:_,animation:T,transitionName:w,getPopupContainer:M,getTriggerDOMNode:A,onPopupVisibleChange:S,onPopupMouseEnter:x,onPopupFocusin:I,onPopupFocusout:$}=c,L=`${f}-dropdown`;let B=h;_&&(B=_({menuNode:h,props:t}));const D=T?`${L}-${T}`:w,W=N({minWidth:`${y}px`},g);return typeof b=="number"?W.width=`${b}px`:b&&(W.width=`${y}px`),O(BD,$e($e({},t),{},{showAction:S?["click"]:[],hideAction:S?["click"]:[],popupPlacement:p||(m==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:o.value,prefixCls:L,popupTransitionName:D,popupAlign:d,popupVisible:u,getPopupContainer:M,popupClassName:gt(v,{[`${L}-empty`]:l}),popupStyle:W,getTriggerDOMNode:A,onPopupVisibleChange:S}),{default:n.default,popup:()=>O("div",{ref:a,onMouseenter:x,onFocusin:I,onFocusout:$},[B])})}}}),Se={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){const{keyCode:n}=e;if(e.altKey&&!e.ctrlKey||e.metaKey||n>=Se.F1&&n<=Se.F12)return!1;switch(n){case Se.ALT:case Se.CAPS_LOCK:case Se.CONTEXT_MENU:case Se.CTRL:case Se.DOWN:case Se.END:case Se.ESC:case Se.HOME:case Se.INSERT:case Se.LEFT:case Se.MAC_FF_META:case Se.META:case Se.NUMLOCK:case Se.NUM_CENTER:case Se.PAGE_DOWN:case Se.PAGE_UP:case Se.PAUSE:case Se.PRINT_SCREEN:case Se.RIGHT:case Se.SHIFT:case Se.UP:case Se.WIN_KEY:case Se.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=Se.ZERO&&e<=Se.NINE||e>=Se.NUM_ZERO&&e<=Se.NUM_MULTIPLY||e>=Se.A&&e<=Se.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&e===0)return!0;switch(e){case Se.SPACE:case Se.QUESTION_MARK:case Se.NUM_PLUS:case Se.NUM_MINUS:case Se.NUM_PERIOD:case Se.NUM_DIVISION:case Se.SEMICOLON:case Se.DASH:case Se.EQUALS:case Se.COMMA:case Se.PERIOD:case Se.SLASH:case Se.APOSTROPHE:case Se.SINGLE_QUOTE:case Se.OPEN_SQUARE_BRACKET:case Se.BACKSLASH:case Se.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},sr=(t,e)=>{let{slots:n}=e;var i;const{class:r,customizeIcon:o,customizeIconProps:a,onMousedown:s,onClick:l}=t;let c;return typeof o=="function"?c=o(a):c=ta(o)?hu(o):o,O("span",{class:r,onMousedown:u=>{u.preventDefault(),s&&s(u)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:l,"aria-hidden":!0},[c!==void 0?c:O("span",{class:r.split(/\s+/).map(u=>`${u}-icon`)},[(i=n.default)===null||i===void 0?void 0:i.call(n)])])};sr.inheritAttrs=!1;sr.displayName="TransBtn";sr.props={class:String,customizeIcon:be.any,customizeIconProps:be.any,onMousedown:Function,onClick:Function};var VD=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};const $D=ve({compatConfig:{MODE:3},inheritAttrs:!1,props:{disabled:be.looseBool,type:be.string,value:be.any,lazy:be.bool.def(!0),tag:{type:String,default:"input"},size:be.string},emits:["change","input","blur","keydown","focus","compositionstart","compositionend","keyup"],setup(t,e){let{emit:n,attrs:i,expose:r}=e;const o=ze(null),a=Ce(),s=Ce(!1);Ye([()=>t.value,s],()=>{s.value||(a.value=t.value)},{immediate:!0});const l=_=>{n("change",_)},c=_=>{s.value=!0,_.target.composing=!0,n("compositionstart",_)},u=_=>{s.value=!1,_.target.composing=!1,n("compositionend",_);const T=document.createEvent("HTMLEvents");T.initEvent("input",!0,!0),_.target.dispatchEvent(T)},d=_=>{if(s.value&&t.lazy){a.value=_.target.value;return}n("input",_)},f=_=>{n("blur",_)},h=_=>{n("focus",_)},v=()=>{o.value&&o.value.focus()},g=()=>{o.value&&o.value.blur()},m=_=>{n("keydown",_)},p=_=>{n("keyup",_)};return r({focus:v,blur:g,input:o,setSelectionRange:(_,T,w)=>{var M;(M=o.value)===null||M===void 0||M.setSelectionRange(_,T,w)},select:()=>{var _;(_=o.value)===null||_===void 0||_.select()},getSelectionStart:()=>{var _;return(_=o.value)===null||_===void 0?void 0:_.selectionStart},getSelectionEnd:()=>{var _;return(_=o.value)===null||_===void 0?void 0:_.selectionEnd},getScrollTop:()=>{var _;return(_=o.value)===null||_===void 0?void 0:_.scrollTop}}),()=>{const{tag:_}=t,T=VD(t,["tag"]);return O(_,$e($e($e({},T),i),{},{onInput:d,onChange:l,onBlur:f,onFocus:h,ref:o,value:a.value,onCompositionstart:c,onCompositionend:u,onKeyup:p,onKeydown:m}),null)}}}),GD={inputRef:be.any,prefixCls:String,id:String,inputElement:be.VueNode,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0},autocomplete:String,editable:{type:Boolean,default:void 0},activeDescendantId:String,value:String,open:{type:Boolean,default:void 0},tabindex:be.oneOfType([be.number,be.string]),attrs:be.object,onKeydown:{type:Function},onMousedown:{type:Function},onChange:{type:Function},onPaste:{type:Function},onCompositionstart:{type:Function},onCompositionend:{type:Function},onFocus:{type:Function},onBlur:{type:Function}},_g=ve({compatConfig:{MODE:3},name:"SelectInput",inheritAttrs:!1,props:GD,setup(t){let e=null;const n=Tt("VCSelectContainerEvent");return()=>{var i;const{prefixCls:r,id:o,inputElement:a,disabled:s,tabindex:l,autofocus:c,autocomplete:u,editable:d,activeDescendantId:f,value:h,onKeydown:v,onMousedown:g,onChange:m,onPaste:p,onCompositionstart:b,onCompositionend:y,onFocus:_,onBlur:T,open:w,inputRef:M,attrs:A}=t;let S=a||O($D,null,null);const x=S.props||{},{onKeydown:I,onInput:$,onFocus:L,onBlur:B,onMousedown:D,onCompositionstart:W,onCompositionend:ie,style:X}=x;return S=sl(S,N(N(N(N(N({type:"search"},x),{id:o,ref:M,disabled:s,tabindex:l,autocomplete:u||"off",autofocus:c,class:gt(`${r}-selection-search-input`,(i=S==null?void 0:S.props)===null||i===void 0?void 0:i.class),role:"combobox","aria-expanded":w,"aria-haspopup":"listbox","aria-owns":`${o}_list`,"aria-autocomplete":"list","aria-controls":`${o}_list`,"aria-activedescendant":f}),A),{value:d?h:"",readonly:!d,unselectable:d?null:"on",style:N(N({},X),{opacity:d?null:0}),onKeydown:F=>{v(F),I&&I(F)},onMousedown:F=>{g(F),D&&D(F)},onInput:F=>{m(F),$&&$(F)},onCompositionstart(F){b(F),W&&W(F)},onCompositionend(F){y(F),ie&&ie(F)},onPaste:p,onFocus:function(){clearTimeout(e),L&&L(arguments.length<=0?void 0:arguments[0]),_&&_(arguments.length<=0?void 0:arguments[0]),n==null||n.focus(arguments.length<=0?void 0:arguments[0])},onBlur:function(){for(var F=arguments.length,ee=new Array(F),he=0;he<F;he++)ee[he]=arguments[he];e=setTimeout(()=>{B&&B(ee[0]),T&&T(ee[0]),n==null||n.blur(ee[0])},100)}}),S.type==="textarea"?{}:{type:"search"}),!0,!0),S}}}),WD=`accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`,XD=`onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`,dp=`${WD} ${XD}`.split(/[\s\n]+/),jD="aria-",qD="data-";function fp(t,e){return t.indexOf(e)===0}function Yu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n;e===!1?n={aria:!0,data:!0,attr:!0}:e===!0?n={aria:!0}:n=N({},e);const i={};return Object.keys(t).forEach(r=>{(n.aria&&(r==="role"||fp(r,jD))||n.data&&fp(r,qD)||n.attr&&(dp.includes(r)||dp.includes(r.toLowerCase())))&&(i[r]=t[r])}),i}const yg=Symbol("OverflowContextProviderKey"),au=ve({compatConfig:{MODE:3},name:"OverflowContextProvider",inheritAttrs:!1,props:{value:{type:Object}},setup(t,e){let{slots:n}=e;return gn(yg,V(()=>t.value)),()=>{var i;return(i=n.default)===null||i===void 0?void 0:i.call(n)}}}),YD=()=>Tt(yg,V(()=>null));var KD=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};const Or=void 0,ms=ve({compatConfig:{MODE:3},name:"Item",props:{prefixCls:String,item:be.any,renderItem:Function,responsive:Boolean,itemKey:{type:[String,Number]},registerSize:Function,display:Boolean,order:Number,component:be.any,invalidate:Boolean},setup(t,e){let{slots:n,expose:i}=e;const r=V(()=>t.responsive&&!t.display),o=Ce();i({itemNodeRef:o});function a(s){t.registerSize(t.itemKey,s)}return Wn(()=>{a(null)}),()=>{var s;const{prefixCls:l,invalidate:c,item:u,renderItem:d,responsive:f,registerSize:h,itemKey:v,display:g,order:m,component:p="div"}=t,b=KD(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","display","order","component"]),y=(s=n.default)===null||s===void 0?void 0:s.call(n),_=d&&u!==Or?d(u):y;let T;c||(T={opacity:r.value?0:1,height:r.value?0:Or,overflowY:r.value?"hidden":Or,order:f?m:Or,pointerEvents:r.value?"none":Or,position:r.value?"absolute":Or});const w={};return r.value&&(w["aria-hidden"]=!0),O(Ru,{disabled:!f,onResize:M=>{let{offsetWidth:A}=M;a(A)}},{default:()=>O(p,$e($e($e({class:gt(!c&&l),style:T},w),b),{},{ref:o}),{default:()=>[_]})})}}});var vc=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};const ZD=ve({compatConfig:{MODE:3},name:"RawItem",inheritAttrs:!1,props:{component:be.any,title:be.any,id:String,onMouseenter:{type:Function},onMouseleave:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onFocus:{type:Function},role:String,tabindex:Number},setup(t,e){let{slots:n,attrs:i}=e;const r=YD();return()=>{var o;if(!r.value){const{component:d="div"}=t,f=vc(t,["component"]);return O(d,$e($e({},f),i),{default:()=>[(o=n.default)===null||o===void 0?void 0:o.call(n)]})}const a=r.value,{className:s}=a,l=vc(a,["className"]),{class:c}=i,u=vc(i,["class"]);return O(au,{value:null},{default:()=>[O(ms,$e($e($e({class:gt(s,c)},l),u),t),n)]})}}});var JD=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};const xg="responsive",bg="invalidate";function QD(t){return`+ ${t.length} ...`}const e3=()=>({id:String,prefixCls:String,data:Array,itemKey:[String,Number,Function],itemWidth:{type:Number,default:10},renderItem:Function,renderRawItem:Function,maxCount:[Number,String],renderRest:Function,renderRawRest:Function,suffix:be.any,component:String,itemComponent:be.any,onVisibleChange:Function,ssr:String,onMousedown:Function}),ul=ve({name:"Overflow",inheritAttrs:!1,props:e3(),emits:["visibleChange"],setup(t,e){let{attrs:n,emit:i,slots:r}=e;const o=V(()=>t.ssr==="full"),a=ze(null),s=V(()=>a.value||0),l=ze(new Map),c=ze(0),u=ze(0),d=ze(0),f=ze(null),h=ze(null),v=V(()=>h.value===null&&o.value?Number.MAX_SAFE_INTEGER:h.value||0),g=ze(!1),m=V(()=>`${t.prefixCls}-item`),p=V(()=>Math.max(c.value,u.value)),b=V(()=>!!(t.data.length&&t.maxCount===xg)),y=V(()=>t.maxCount===bg),_=V(()=>b.value||typeof t.maxCount=="number"&&t.data.length>t.maxCount),T=V(()=>{let D=t.data;return b.value?a.value===null&&o.value?D=t.data:D=t.data.slice(0,Math.min(t.data.length,s.value/t.itemWidth)):typeof t.maxCount=="number"&&(D=t.data.slice(0,t.maxCount)),D}),w=V(()=>b.value?t.data.slice(v.value+1):t.data.slice(T.value.length)),M=(D,W)=>{var ie;return typeof t.itemKey=="function"?t.itemKey(D):(ie=t.itemKey&&(D==null?void 0:D[t.itemKey]))!==null&&ie!==void 0?ie:W},A=V(()=>t.renderItem||(D=>D)),S=(D,W)=>{h.value=D,W||(g.value=D<t.data.length-1,i("visibleChange",D))},x=(D,W)=>{a.value=W.clientWidth},I=(D,W)=>{const ie=new Map(l.value);W===null?ie.delete(D):ie.set(D,W),l.value=ie},$=(D,W)=>{c.value=u.value,u.value=W},L=(D,W)=>{d.value=W},B=D=>l.value.get(M(T.value[D],D));return Ye([s,l,u,d,()=>t.itemKey,T],()=>{if(s.value&&p.value&&T.value){let D=d.value;const W=T.value.length,ie=W-1;if(!W){S(0),f.value=null;return}for(let X=0;X<W;X+=1){const F=B(X);if(F===void 0){S(X-1,!0);break}if(D+=F,ie===0&&D<=s.value||X===ie-1&&D+B(ie)<=s.value){S(ie),f.value=null;break}else if(D+p.value>s.value){S(X-1),f.value=D-F-d.value+u.value;break}}t.suffix&&B(0)+d.value>s.value&&(f.value=null)}}),()=>{const D=g.value&&!!w.value.length,{itemComponent:W,renderRawItem:ie,renderRawRest:X,renderRest:F,prefixCls:ee="rc-overflow",suffix:he,component:ce="div",id:De,onMousedown:Z}=t,{class:me,style:Ee}=n,xe=JD(n,["class","style"]);let Xe={};f.value!==null&&b.value&&(Xe={position:"absolute",left:`${f.value}px`,top:0});const ae={prefixCls:m.value,responsive:b.value,component:W,invalidate:y.value},P=ie?(Y,de)=>{const oe=M(Y,de);return O(au,{key:oe,value:N(N({},ae),{order:de,item:Y,itemKey:oe,registerSize:I,display:de<=v.value})},{default:()=>[ie(Y,de)]})}:(Y,de)=>{const oe=M(Y,de);return O(ms,$e($e({},ae),{},{order:de,key:oe,item:Y,renderItem:A.value,itemKey:oe,registerSize:I,display:de<=v.value}),null)};let te=()=>null;const U={order:D?v.value:Number.MAX_SAFE_INTEGER,className:`${m.value} ${m.value}-rest`,registerSize:$,display:D};if(X)X&&(te=()=>O(au,{value:N(N({},ae),U)},{default:()=>[X(w.value)]}));else{const Y=F||QD;te=()=>O(ms,$e($e({},ae),U),{default:()=>typeof Y=="function"?Y(w.value):Y})}const j=()=>{var Y;return O(ce,$e({id:De,class:gt(!y.value&&ee,me),style:Ee,onMousedown:Z},xe),{default:()=>[T.value.map(P),_.value?te():null,he&&O(ms,$e($e({},ae),{},{order:v.value,class:`${m.value}-suffix`,registerSize:L,display:!0,style:Xe}),{default:()=>he}),(Y=r.default)===null||Y===void 0?void 0:Y.call(r)]})};return O(Ru,{disabled:!b.value,onResize:x},{default:j})}}});ul.Item=ZD;ul.RESPONSIVE=xg;ul.INVALIDATE=bg;const t3=Symbol("TreeSelectLegacyContextPropsKey");function Ku(){return Tt(t3,{})}const n3={id:String,prefixCls:String,values:be.array,open:{type:Boolean,default:void 0},searchValue:String,inputRef:be.any,placeholder:be.any,disabled:{type:Boolean,default:void 0},mode:String,showSearch:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0},autocomplete:String,activeDescendantId:String,tabindex:be.oneOfType([be.number,be.string]),removeIcon:be.any,choiceTransitionName:String,maxTagCount:be.oneOfType([be.number,be.string]),maxTagTextLength:Number,maxTagPlaceholder:be.any.def(()=>t=>`+ ${t.length} ...`),tagRender:Function,onToggleOpen:{type:Function},onRemove:Function,onInputChange:Function,onInputPaste:Function,onInputKeyDown:Function,onInputMouseDown:Function,onInputCompositionStart:Function,onInputCompositionEnd:Function},hp=t=>{t.preventDefault(),t.stopPropagation()},i3=ve({name:"MultipleSelectSelector",inheritAttrs:!1,props:n3,setup(t){const e=ze(),n=ze(0),i=ze(!1),r=Ku(),o=V(()=>`${t.prefixCls}-selection`),a=V(()=>t.open||t.mode==="tags"?t.searchValue:""),s=V(()=>t.mode==="tags"||t.showSearch&&(t.open||i.value));St(()=>{Ye(a,()=>{n.value=e.value.scrollWidth},{flush:"post",immediate:!0})});function l(f,h,v,g,m){return O("span",{class:gt(`${o.value}-item`,{[`${o.value}-item-disabled`]:v}),title:typeof f=="string"||typeof f=="number"?f.toString():void 0},[O("span",{class:`${o.value}-item-content`},[h]),g&&O(sr,{class:`${o.value}-item-remove`,onMousedown:hp,onClick:m,customizeIcon:t.removeIcon},{default:()=>[vn("×")]})])}function c(f,h,v,g,m,p){var b;const y=T=>{hp(T),t.onToggleOpen(!open)};let _=p;return r.keyEntities&&(_=((b=r.keyEntities[f])===null||b===void 0?void 0:b.node)||{}),O("span",{key:f,onMousedown:y},[t.tagRender({label:h,value:f,disabled:v,closable:g,onClose:m,option:_})])}function u(f){const{disabled:h,label:v,value:g,option:m}=f,p=!t.disabled&&!h;let b=v;if(typeof t.maxTagTextLength=="number"&&(typeof v=="string"||typeof v=="number")){const _=String(b);_.length>t.maxTagTextLength&&(b=`${_.slice(0,t.maxTagTextLength)}...`)}const y=_=>{var T;_&&_.stopPropagation(),(T=t.onRemove)===null||T===void 0||T.call(t,f)};return typeof t.tagRender=="function"?c(g,b,h,p,y,m):l(v,b,h,p,y)}function d(f){const{maxTagPlaceholder:h=g=>`+ ${g.length} ...`}=t,v=typeof h=="function"?h(f):h;return l(v,v,!1)}return()=>{const{id:f,prefixCls:h,values:v,open:g,inputRef:m,placeholder:p,disabled:b,autofocus:y,autocomplete:_,activeDescendantId:T,tabindex:w,onInputChange:M,onInputPaste:A,onInputKeyDown:S,onInputMouseDown:x,onInputCompositionStart:I,onInputCompositionEnd:$}=t,L=O("div",{class:`${o.value}-search`,style:{width:n.value+"px"},key:"input"},[O(_g,{inputRef:m,open:g,prefixCls:h,id:f,inputElement:null,disabled:b,autofocus:y,autocomplete:_,editable:s.value,activeDescendantId:T,value:a.value,onKeydown:S,onMousedown:x,onChange:M,onPaste:A,onCompositionstart:I,onCompositionend:$,tabindex:w,attrs:Yu(t,!0),onFocus:()=>i.value=!0,onBlur:()=>i.value=!1},null),O("span",{ref:e,class:`${o.value}-search-mirror`,"aria-hidden":!0},[a.value,vn(" ")])]),B=O(ul,{prefixCls:`${o.value}-overflow`,data:v,renderItem:u,renderRest:d,suffix:L,itemKey:"key",maxCount:t.maxTagCount,key:"overflow"},null);return O(ot,null,[B,!v.length&&!a.value&&O("span",{class:`${o.value}-placeholder`},[p])])}}}),r3={inputElement:be.any,id:String,prefixCls:String,values:be.array,open:{type:Boolean,default:void 0},searchValue:String,inputRef:be.any,placeholder:be.any,disabled:{type:Boolean,default:void 0},mode:String,showSearch:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0},autocomplete:String,activeDescendantId:String,tabindex:be.oneOfType([be.number,be.string]),activeValue:String,backfill:{type:Boolean,default:void 0},optionLabelRender:Function,onInputChange:Function,onInputPaste:Function,onInputKeyDown:Function,onInputMouseDown:Function,onInputCompositionStart:Function,onInputCompositionEnd:Function},Zu=ve({name:"SingleSelector",setup(t){const e=ze(!1),n=V(()=>t.mode==="combobox"),i=V(()=>n.value||t.showSearch),r=V(()=>{let c=t.searchValue||"";return n.value&&t.activeValue&&!e.value&&(c=t.activeValue),c}),o=Ku();Ye([n,()=>t.activeValue],()=>{n.value&&(e.value=!1)},{immediate:!0});const a=V(()=>t.mode!=="combobox"&&!t.open&&!t.showSearch?!1:!!r.value),s=V(()=>{const c=t.values[0];return c&&(typeof c.label=="string"||typeof c.label=="number")?c.label.toString():void 0}),l=()=>{if(t.values[0])return null;const c=a.value?{visibility:"hidden"}:void 0;return O("span",{class:`${t.prefixCls}-selection-placeholder`,style:c},[t.placeholder])};return()=>{var c,u,d,f;const{inputElement:h,prefixCls:v,id:g,values:m,inputRef:p,disabled:b,autofocus:y,autocomplete:_,activeDescendantId:T,open:w,tabindex:M,optionLabelRender:A,onInputKeyDown:S,onInputMouseDown:x,onInputChange:I,onInputPaste:$,onInputCompositionStart:L,onInputCompositionEnd:B}=t,D=m[0];let W=null;if(D&&o.customSlots){const ie=(c=D.key)!==null&&c!==void 0?c:D.value,X=((u=o.keyEntities[ie])===null||u===void 0?void 0:u.node)||{};W=o.customSlots[(d=X.slots)===null||d===void 0?void 0:d.title]||o.customSlots.title||D.label,typeof W=="function"&&(W=W(X))}else W=A&&D?A(D.option):D==null?void 0:D.label;return O(ot,null,[O("span",{class:`${v}-selection-search`},[O(_g,{inputRef:p,prefixCls:v,id:g,open:w,inputElement:h,disabled:b,autofocus:y,autocomplete:_,editable:i.value,activeDescendantId:T,value:r.value,onKeydown:S,onMousedown:x,onChange:ie=>{e.value=!0,I(ie)},onPaste:$,onCompositionstart:L,onCompositionend:B,tabindex:M,attrs:Yu(t,!0)},null)]),!n.value&&D&&!a.value&&O("span",{class:`${v}-selection-item`,title:s.value},[O(ot,{key:(f=D.key)!==null&&f!==void 0?f:D.value},[W])]),l()])}}});Zu.props=r3;Zu.inheritAttrs=!1;function o3(t){return![Se.ESC,Se.SHIFT,Se.BACKSPACE,Se.TAB,Se.WIN_KEY,Se.ALT,Se.META,Se.WIN_KEY_RIGHT,Se.CTRL,Se.SEMICOLON,Se.EQUALS,Se.CAPS_LOCK,Se.CONTEXT_MENU,Se.F1,Se.F2,Se.F3,Se.F4,Se.F5,Se.F6,Se.F7,Se.F8,Se.F9,Se.F10,Se.F11,Se.F12].includes(t)}function Sg(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,e=null,n;Xn(()=>{clearTimeout(n)});function i(r){(r||e===null)&&(e=r),clearTimeout(n),n=setTimeout(()=>{e=null},t)}return[()=>e,i]}function ea(){const t=e=>{t.current=e};return t}const a3=ve({name:"Selector",inheritAttrs:!1,props:{id:String,prefixCls:String,showSearch:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},values:be.array,multiple:{type:Boolean,default:void 0},mode:String,searchValue:String,activeValue:String,inputElement:be.any,autofocus:{type:Boolean,default:void 0},activeDescendantId:String,tabindex:be.oneOfType([be.number,be.string]),disabled:{type:Boolean,default:void 0},placeholder:be.any,removeIcon:be.any,maxTagCount:be.oneOfType([be.number,be.string]),maxTagTextLength:Number,maxTagPlaceholder:be.any,tagRender:Function,optionLabelRender:Function,tokenWithEnter:{type:Boolean,default:void 0},choiceTransitionName:String,onToggleOpen:{type:Function},onSearch:Function,onSearchSubmit:Function,onRemove:Function,onInputKeyDown:{type:Function},domRef:Function},setup(t,e){let{expose:n}=e;const i=ea();let r=!1;const[o,a]=Sg(0),s=p=>{const{which:b}=p;(b===Se.UP||b===Se.DOWN)&&p.preventDefault(),t.onInputKeyDown&&t.onInputKeyDown(p),b===Se.ENTER&&t.mode==="tags"&&!r&&!t.open&&t.onSearchSubmit(p.target.value),o3(b)&&t.onToggleOpen(!0)},l=()=>{a(!0)};let c=null;const u=p=>{t.onSearch(p,!0,r)!==!1&&t.onToggleOpen(!0)},d=()=>{r=!0},f=p=>{r=!1,t.mode!=="combobox"&&u(p.target.value)},h=p=>{let{target:{value:b}}=p;if(t.tokenWithEnter&&c&&/[\r\n]/.test(c)){const y=c.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");b=b.replace(y,c)}c=null,u(b)},v=p=>{const{clipboardData:b}=p;c=b.getData("text")},g=p=>{let{target:b}=p;b!==i.current&&(document.body.style.msTouchAction!==void 0?setTimeout(()=>{i.current.focus()}):i.current.focus())},m=p=>{const b=o();p.target!==i.current&&!b&&p.preventDefault(),(t.mode!=="combobox"&&(!t.showSearch||!b)||!t.open)&&(t.open&&t.onSearch("",!0,!1),t.onToggleOpen())};return n({focus:()=>{i.current.focus()},blur:()=>{i.current.blur()}}),()=>{const{prefixCls:p,domRef:b,mode:y}=t,_={inputRef:i,onInputKeyDown:s,onInputMouseDown:l,onInputChange:h,onInputPaste:v,onInputCompositionStart:d,onInputCompositionEnd:f},T=y==="multiple"||y==="tags"?O(i3,$e($e({},t),_),null):O(Zu,$e($e({},t),_),null);return O("div",{ref:b,class:`${p}-selector`,onClick:g,onMousedown:m},[T])}}});function s3(t,e,n){function i(r){var o,a,s;let l=r.target;l.shadowRoot&&r.composed&&(l=r.composedPath()[0]||l);const c=[(o=t[0])===null||o===void 0?void 0:o.value,(s=(a=t[1])===null||a===void 0?void 0:a.value)===null||s===void 0?void 0:s.getPopupElement()];e.value&&c.every(u=>u&&!u.contains(l)&&u!==l)&&n(!1)}St(()=>{window.addEventListener("mousedown",i)}),Xn(()=>{window.removeEventListener("mousedown",i)})}function l3(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10;const e=ze(!1);let n;const i=()=>{clearTimeout(n)};return St(()=>{i()}),[e,(o,a)=>{i(),n=setTimeout(()=>{e.value=o,a&&a()},t)},i]}const Mg=Symbol("BaseSelectContextKey");function c3(t){return gn(Mg,t)}function u3(){return Tt(Mg,{})}const d3=()=>{if(typeof navigator>"u"||typeof window>"u")return!1;const t=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t==null?void 0:t.substring(0,4))};function Eg(t){if(!Vs(t))return li(t);const e=new Proxy({},{get(n,i,r){return Reflect.get(t.value,i,r)},set(n,i,r){return t.value[i]=r,!0},deleteProperty(n,i){return Reflect.deleteProperty(t.value,i)},has(n,i){return Reflect.has(t.value,i)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return li(e)}var f3=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};const h3=["value","onChange","removeIcon","placeholder","autofocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabindex","OptionList","notFoundContent"],p3=()=>({prefixCls:String,id:String,omitDomProps:Array,displayValues:Array,onDisplayValuesChange:Function,activeValue:String,activeDescendantId:String,onActiveValueChange:Function,searchValue:String,onSearch:Function,onSearchSplit:Function,maxLength:Number,OptionList:be.any,emptyOptions:Boolean}),wg=()=>({showSearch:{type:Boolean,default:void 0},tagRender:{type:Function},optionLabelRender:{type:Function},direction:{type:String},tabindex:Number,autofocus:Boolean,notFoundContent:be.any,placeholder:be.any,onClear:Function,choiceTransitionName:String,mode:String,disabled:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:void 0},onDropdownVisibleChange:{type:Function},getInputElement:{type:Function},getRawInputElement:{type:Function},maxTagTextLength:Number,maxTagCount:{type:[String,Number]},maxTagPlaceholder:be.any,tokenSeparators:{type:Array},allowClear:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:void 0},inputIcon:be.any,clearIcon:be.any,removeIcon:be.any,animation:String,transitionName:String,dropdownStyle:{type:Object},dropdownClassName:String,dropdownMatchSelectWidth:{type:[Boolean,Number],default:void 0},dropdownRender:{type:Function},dropdownAlign:Object,placement:{type:String},getPopupContainer:{type:Function},showAction:{type:Array},onBlur:{type:Function},onFocus:{type:Function},onKeyup:Function,onKeydown:Function,onMousedown:Function,onPopupScroll:Function,onInputKeyDown:Function,onMouseenter:Function,onMouseleave:Function,onClick:Function}),m3=()=>N(N({},p3()),wg());function Tg(t){return t==="tags"||t==="multiple"}const v3=ve({compatConfig:{MODE:3},name:"BaseSelect",inheritAttrs:!1,props:Js(m3(),{showAction:[],notFoundContent:"Not Found"}),setup(t,e){let{attrs:n,expose:i,slots:r}=e;const o=V(()=>Tg(t.mode)),a=V(()=>t.showSearch!==void 0?t.showSearch:o.value||t.mode==="combobox"),s=ze(!1);St(()=>{s.value=d3()});const l=Ku(),c=ze(null),u=ea(),d=ze(null),f=ze(null),h=ze(null),v=Ce(!1),[g,m,p]=l3();i({focus:()=>{var P;(P=f.value)===null||P===void 0||P.focus()},blur:()=>{var P;(P=f.value)===null||P===void 0||P.blur()},scrollTo:P=>{var te;return(te=h.value)===null||te===void 0?void 0:te.scrollTo(P)}});const _=V(()=>{var P;if(t.mode!=="combobox")return t.searchValue;const te=(P=t.displayValues[0])===null||P===void 0?void 0:P.value;return typeof te=="string"||typeof te=="number"?String(te):""}),T=t.open!==void 0?t.open:t.defaultOpen,w=ze(T),M=ze(T),A=P=>{w.value=t.open!==void 0?t.open:P,M.value=w.value};Ye(()=>t.open,()=>{A(t.open)});const S=V(()=>!t.notFoundContent&&t.emptyOptions);en(()=>{M.value=w.value,(t.disabled||S.value&&M.value&&t.mode==="combobox")&&(M.value=!1)});const x=V(()=>S.value?!1:M.value),I=P=>{const te=P!==void 0?P:!M.value;M.value!==te&&!t.disabled&&(A(te),t.onDropdownVisibleChange&&t.onDropdownVisibleChange(te))},$=V(()=>(t.tokenSeparators||[]).some(P=>[`
`,`\r
`].includes(P))),L=(P,te,U)=>{var j,Y;let de=!0,oe=P;(j=t.onActiveValueChange)===null||j===void 0||j.call(t,null);const Me=U?null:Y2(P,t.tokenSeparators);return t.mode!=="combobox"&&Me&&(oe="",(Y=t.onSearchSplit)===null||Y===void 0||Y.call(t,Me),I(!1),de=!1),t.onSearch&&_.value!==oe&&t.onSearch(oe,{source:te?"typing":"effect"}),de},B=P=>{var te;!P||!P.trim()||(te=t.onSearch)===null||te===void 0||te.call(t,P,{source:"submit"})};Ye(M,()=>{!M.value&&!o.value&&t.mode!=="combobox"&&L("",!1,!1)},{immediate:!0,flush:"post"}),Ye(()=>t.disabled,()=>{w.value&&t.disabled&&A(!1),t.disabled&&!v.value&&m(!1)},{immediate:!0});const[D,W]=Sg(),ie=function(P){var te;const U=D(),{which:j}=P;if(j===Se.ENTER&&(t.mode!=="combobox"&&P.preventDefault(),M.value||I(!0)),W(!!_.value),j===Se.BACKSPACE&&!U&&o.value&&!_.value&&t.displayValues.length){const Me=[...t.displayValues];let we=null;for(let R=Me.length-1;R>=0;R-=1){const E=Me[R];if(!E.disabled){Me.splice(R,1),we=E;break}}we&&t.onDisplayValuesChange(Me,{type:"remove",values:[we]})}for(var Y=arguments.length,de=new Array(Y>1?Y-1:0),oe=1;oe<Y;oe++)de[oe-1]=arguments[oe];M.value&&h.value&&h.value.onKeydown(P,...de),(te=t.onKeydown)===null||te===void 0||te.call(t,P,...de)},X=function(P){for(var te=arguments.length,U=new Array(te>1?te-1:0),j=1;j<te;j++)U[j-1]=arguments[j];M.value&&h.value&&h.value.onKeyup(P,...U),t.onKeyup&&t.onKeyup(P,...U)},F=P=>{const te=t.displayValues.filter(U=>U!==P);t.onDisplayValuesChange(te,{type:"remove",values:[P]})},ee=ze(!1),he=function(){m(!0),t.disabled||(t.onFocus&&!ee.value&&t.onFocus(...arguments),t.showAction&&t.showAction.includes("focus")&&I(!0)),ee.value=!0},ce=Ce(!1),De=function(){if(ce.value||(v.value=!0,m(!1,()=>{ee.value=!1,v.value=!1,I(!1)}),t.disabled))return;const P=_.value;P&&(t.mode==="tags"?t.onSearch(P,{source:"submit"}):t.mode==="multiple"&&t.onSearch("",{source:"blur"})),t.onBlur&&t.onBlur(...arguments)},Z=()=>{ce.value=!0},me=()=>{ce.value=!1};gn("VCSelectContainerEvent",{focus:he,blur:De});const Ee=[];St(()=>{Ee.forEach(P=>clearTimeout(P)),Ee.splice(0,Ee.length)}),Xn(()=>{Ee.forEach(P=>clearTimeout(P)),Ee.splice(0,Ee.length)});const xe=function(P){var te,U;const{target:j}=P,Y=(te=d.value)===null||te===void 0?void 0:te.getPopupElement();if(Y&&Y.contains(j)){const we=setTimeout(()=>{var R;const E=Ee.indexOf(we);E!==-1&&Ee.splice(E,1),p(),!s.value&&!Y.contains(document.activeElement)&&((R=f.value)===null||R===void 0||R.focus())});Ee.push(we)}for(var de=arguments.length,oe=new Array(de>1?de-1:0),Me=1;Me<de;Me++)oe[Me-1]=arguments[Me];(U=t.onMousedown)===null||U===void 0||U.call(t,P,...oe)},Xe=ze(null),ae=()=>{};return St(()=>{Ye(x,()=>{var P;if(x.value){const te=Math.ceil((P=c.value)===null||P===void 0?void 0:P.offsetWidth);Xe.value!==te&&!Number.isNaN(te)&&(Xe.value=te)}},{immediate:!0,flush:"post"})}),s3([c,d],x,I),c3(Eg(N(N({},Xp(t)),{open:M,triggerOpen:x,showSearch:a,multiple:o,toggleOpen:I}))),()=>{const P=N(N({},t),n),{prefixCls:te,id:U,open:j,defaultOpen:Y,mode:de,showSearch:oe,searchValue:Me,onSearch:we,allowClear:R,clearIcon:E,showArrow:K,inputIcon:le,disabled:ge,loading:pe,getInputElement:He,getPopupContainer:Pe,placement:Ae,animation:Je,transitionName:Te,dropdownStyle:Ve,dropdownClassName:at,dropdownMatchSelectWidth:je,dropdownRender:Fe,dropdownAlign:tt,showAction:ct,direction:Mt,tokenSeparators:nt,tagRender:z,optionLabelRender:_e,onPopupScroll:ue,onDropdownVisibleChange:Le,onFocus:Ne,onBlur:ut,onKeyup:_t,onKeydown:Et,onMousedown:zt,onClear:dt,omitDomProps:tn,getRawInputElement:Nt,displayValues:Ii,onDisplayValuesChange:da,emptyOptions:fa,activeDescendantId:pr,activeValue:ha,OptionList:mr}=P,pa=f3(P,["prefixCls","id","open","defaultOpen","mode","showSearch","searchValue","onSearch","allowClear","clearIcon","showArrow","inputIcon","disabled","loading","getInputElement","getPopupContainer","placement","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","showAction","direction","tokenSeparators","tagRender","optionLabelRender","onPopupScroll","onDropdownVisibleChange","onFocus","onBlur","onKeyup","onKeydown","onMousedown","onClear","omitDomProps","getRawInputElement","displayValues","onDisplayValuesChange","emptyOptions","activeDescendantId","activeValue","OptionList"]),uo=de==="combobox"&&He&&He()||null,Li=typeof Nt=="function"&&Nt(),fo=N({},pa);let ma;Li&&(ma=We=>{I(We)}),h3.forEach(We=>{delete fo[We]}),tn==null||tn.forEach(We=>{delete fo[We]});const C=K!==void 0?K:pe||!o.value&&de!=="combobox";let G;C&&(G=O(sr,{class:gt(`${te}-arrow`,{[`${te}-arrow-loading`]:pe}),customizeIcon:le,customizeIconProps:{loading:pe,searchValue:_.value,open:M.value,focused:g.value,showSearch:a.value}},null));let ne;const J=()=>{dt==null||dt(),da([],{type:"clear",values:Ii}),L("",!1,!1)};!ge&&R&&(Ii.length||_.value)&&(ne=O(sr,{class:`${te}-clear`,onMousedown:J,customizeIcon:E},{default:()=>[vn("×")]}));const Q=O(mr,{ref:h},N(N({},l.customSlots),{option:r.option})),Ie=gt(te,n.class,{[`${te}-focused`]:g.value,[`${te}-multiple`]:o.value,[`${te}-single`]:!o.value,[`${te}-allow-clear`]:R,[`${te}-show-arrow`]:C,[`${te}-disabled`]:ge,[`${te}-loading`]:pe,[`${te}-open`]:M.value,[`${te}-customize-input`]:uo,[`${te}-show-search`]:a.value}),Be=O(HD,{ref:d,disabled:ge,prefixCls:te,visible:x.value,popupElement:Q,containerWidth:Xe.value,animation:Je,transitionName:Te,dropdownStyle:Ve,dropdownClassName:at,direction:Mt,dropdownMatchSelectWidth:je,dropdownRender:Fe,dropdownAlign:tt,placement:Ae,getPopupContainer:Pe,empty:fa,getTriggerDOMNode:()=>u.current,onPopupVisibleChange:ma,onPopupMouseEnter:ae,onPopupFocusin:Z,onPopupFocusout:me},{default:()=>Li?Pu(Li)&&sl(Li,{ref:u},!1,!0):O(a3,$e($e({},t),{},{domRef:u,prefixCls:te,inputElement:uo,ref:f,id:U,showSearch:a.value,mode:de,activeDescendantId:pr,tagRender:z,optionLabelRender:_e,values:Ii,open:M.value,onToggleOpen:I,activeValue:ha,searchValue:_.value,onSearch:L,onSearchSubmit:B,onRemove:F,tokenWithEnter:$.value}),null)});let ke;return Li?ke=Be:ke=O("div",$e($e({},fo),{},{class:Ie,ref:c,onMousedown:xe,onKeydown:ie,onKeyup:X}),[g.value&&!M.value&&O("span",{style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0},"aria-live":"polite"},[`${Ii.map(We=>{let{label:Ke,value:Qe}=We;return["number","string"].includes(typeof Ke)?Ke:Qe}).join(", ")}`]),Be,G,ne]),ke}}}),dl=(t,e)=>{let{height:n,offset:i,prefixCls:r,onInnerResize:o}=t,{slots:a}=e;var s;let l={},c={display:"flex",flexDirection:"column"};return i!==void 0&&(l={height:`${n}px`,position:"relative",overflow:"hidden"},c=N(N({},c),{transform:`translateY(${i}px)`,position:"absolute",left:0,right:0,top:0})),O("div",{style:l},[O(Ru,{onResize:u=>{let{offsetHeight:d}=u;d&&o&&o()}},{default:()=>[O("div",{style:c,class:gt({[`${r}-holder-inner`]:r})},[(s=a.default)===null||s===void 0?void 0:s.call(a)])]})])};dl.displayName="Filter";dl.inheritAttrs=!1;dl.props={prefixCls:String,height:Number,offset:Number,onInnerResize:Function};const Cg=(t,e)=>{let{setRef:n}=t,{slots:i}=e;var r;const o=mn((r=i.default)===null||r===void 0?void 0:r.call(i));return o&&o.length?hu(o[0],{ref:n}):o};Cg.props={setRef:{type:Function,default:()=>{}}};const g3=20;function pp(t){return"touches"in t?t.touches[0].pageY:t.pageY}const _3=ve({compatConfig:{MODE:3},name:"ScrollBar",inheritAttrs:!1,props:{prefixCls:String,scrollTop:Number,scrollHeight:Number,height:Number,count:Number,onScroll:{type:Function},onStartMove:{type:Function},onStopMove:{type:Function}},setup(){return{moveRaf:null,scrollbarRef:ea(),thumbRef:ea(),visibleTimeout:null,state:li({dragging:!1,pageY:null,startTop:null,visible:!1})}},watch:{scrollTop:{handler(){this.delayHidden()},flush:"post"}},mounted(){var t,e;(t=this.scrollbarRef.current)===null||t===void 0||t.addEventListener("touchstart",this.onScrollbarTouchStart,Kt?{passive:!1}:!1),(e=this.thumbRef.current)===null||e===void 0||e.addEventListener("touchstart",this.onMouseDown,Kt?{passive:!1}:!1)},beforeUnmount(){this.removeEvents(),clearTimeout(this.visibleTimeout)},methods:{delayHidden(){clearTimeout(this.visibleTimeout),this.state.visible=!0,this.visibleTimeout=setTimeout(()=>{this.state.visible=!1},2e3)},onScrollbarTouchStart(t){t.preventDefault()},onContainerMouseDown(t){t.stopPropagation(),t.preventDefault()},patchEvents(){window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),this.thumbRef.current.addEventListener("touchmove",this.onMouseMove,Kt?{passive:!1}:!1),this.thumbRef.current.addEventListener("touchend",this.onMouseUp)},removeEvents(){window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),this.scrollbarRef.current.removeEventListener("touchstart",this.onScrollbarTouchStart,Kt?{passive:!1}:!1),this.thumbRef.current&&(this.thumbRef.current.removeEventListener("touchstart",this.onMouseDown,Kt?{passive:!1}:!1),this.thumbRef.current.removeEventListener("touchmove",this.onMouseMove,Kt?{passive:!1}:!1),this.thumbRef.current.removeEventListener("touchend",this.onMouseUp)),Ut.cancel(this.moveRaf)},onMouseDown(t){const{onStartMove:e}=this.$props;N(this.state,{dragging:!0,pageY:pp(t),startTop:this.getTop()}),e(),this.patchEvents(),t.stopPropagation(),t.preventDefault()},onMouseMove(t){const{dragging:e,pageY:n,startTop:i}=this.state,{onScroll:r}=this.$props;if(Ut.cancel(this.moveRaf),e){const o=pp(t)-n,a=i+o,s=this.getEnableScrollRange(),l=this.getEnableHeightRange(),c=l?a/l:0,u=Math.ceil(c*s);this.moveRaf=Ut(()=>{r(u)})}},onMouseUp(){const{onStopMove:t}=this.$props;this.state.dragging=!1,t(),this.removeEvents()},getSpinHeight(){const{height:t,scrollHeight:e}=this.$props;let n=t/e*100;return n=Math.max(n,g3),n=Math.min(n,t/2),Math.floor(n)},getEnableScrollRange(){const{scrollHeight:t,height:e}=this.$props;return t-e||0},getEnableHeightRange(){const{height:t}=this.$props,e=this.getSpinHeight();return t-e||0},getTop(){const{scrollTop:t}=this.$props,e=this.getEnableScrollRange(),n=this.getEnableHeightRange();return t===0||e===0?0:t/e*n},showScroll(){const{height:t,scrollHeight:e}=this.$props;return e>t}},render(){const{dragging:t,visible:e}=this.state,{prefixCls:n}=this.$props,i=this.getSpinHeight()+"px",r=this.getTop()+"px",o=this.showScroll(),a=o&&e;return O("div",{ref:this.scrollbarRef,class:gt(`${n}-scrollbar`,{[`${n}-scrollbar-show`]:o}),style:{width:"8px",top:0,bottom:0,right:0,position:"absolute",display:a?void 0:"none"},onMousedown:this.onContainerMouseDown,onMousemove:this.delayHidden},[O("div",{ref:this.thumbRef,class:gt(`${n}-scrollbar-thumb`,{[`${n}-scrollbar-thumb-moving`]:t}),style:{width:"100%",height:i,top:r,left:0,position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:"99px",cursor:"pointer",userSelect:"none"},onMousedown:this.onMouseDown},null)])}});function y3(t,e,n,i){const r=new Map,o=new Map,a=Ce(Symbol("update"));Ye(t,()=>{a.value=Symbol("update")});let s;function l(){Ut.cancel(s)}function c(){l(),s=Ut(()=>{r.forEach((d,f)=>{if(d&&d.offsetParent){const{offsetHeight:h}=d;o.get(f)!==h&&(a.value=Symbol("update"),o.set(f,d.offsetHeight))}})})}function u(d,f){const h=e(d);r.get(h),f?(r.set(h,f.$el||f),c()):r.delete(h)}return Wn(()=>{l()}),[u,c,o,a]}function x3(t,e,n,i,r,o,a,s){let l;return c=>{if(c==null){s();return}Ut.cancel(l);const u=e.value,d=i.itemHeight;if(typeof c=="number")a(c);else if(c&&typeof c=="object"){let f;const{align:h}=c;"index"in c?{index:f}=c:f=u.findIndex(m=>r(m)===c.key);const{offset:v=0}=c,g=(m,p)=>{if(m<0||!t.value)return;const b=t.value.clientHeight;let y=!1,_=p;if(b){const T=p||h;let w=0,M=0,A=0;const S=Math.min(u.length,f);for(let $=0;$<=S;$+=1){const L=r(u[$]);M=w;const B=n.get(L);A=M+(B===void 0?d:B),w=A,$===f&&B===void 0&&(y=!0)}const x=t.value.scrollTop;let I=null;switch(T){case"top":I=M-v;break;case"bottom":I=A-b+v;break;default:{const $=x+b;M<x?_="top":A>$&&(_="bottom")}}I!==null&&I!==x&&a(I)}l=Ut(()=>{y&&o(),g(m-1,_)},2)};g(5)}}}const b3=typeof navigator=="object"&&/Firefox/i.test(navigator.userAgent),Ag=(t,e)=>{let n=!1,i=null;function r(){clearTimeout(i),n=!0,i=setTimeout(()=>{n=!1},50)}return function(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const s=o<0&&t.value||o>0&&e.value;return a&&s?(clearTimeout(i),n=!1):(!s||n)&&r(),!n&&s}};function S3(t,e,n,i){let r=0,o=null,a=null,s=!1;const l=Ag(e,n);function c(d){if(!t.value)return;Ut.cancel(o);const{deltaY:f}=d;r+=f,a=f,!l(f)&&(b3||d.preventDefault(),o=Ut(()=>{i(r*(s?10:1)),r=0}))}function u(d){t.value&&(s=d.detail===a)}return[c,u]}const M3=14/15;function E3(t,e,n){let i=!1,r=0,o=null,a=null;const s=()=>{o&&(o.removeEventListener("touchmove",l),o.removeEventListener("touchend",c))},l=f=>{if(i){const h=Math.ceil(f.touches[0].pageY);let v=r-h;r=h,n(v)&&f.preventDefault(),clearInterval(a),a=setInterval(()=>{v*=M3,(!n(v,!0)||Math.abs(v)<=.1)&&clearInterval(a)},16)}},c=()=>{i=!1,s()},u=f=>{s(),f.touches.length===1&&!i&&(i=!0,r=Math.ceil(f.touches[0].pageY),o=f.target,o.addEventListener("touchmove",l,{passive:!1}),o.addEventListener("touchend",c))},d=()=>{};St(()=>{document.addEventListener("touchmove",d,{passive:!1}),Ye(t,f=>{e.value.removeEventListener("touchstart",u),s(),clearInterval(a),f&&e.value.addEventListener("touchstart",u,{passive:!1})},{immediate:!0})}),Xn(()=>{document.removeEventListener("touchmove",d)})}var w3=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};const T3=[],C3={overflowY:"auto",overflowAnchor:"none"};function A3(t,e,n,i,r,o){let{getKey:a}=o;return t.slice(e,n+1).map((s,l)=>{const c=e+l,u=r(s,c,{}),d=a(s);return O(Cg,{key:d,setRef:f=>i(s,f)},{default:()=>[u]})})}const P3=ve({compatConfig:{MODE:3},name:"List",inheritAttrs:!1,props:{prefixCls:String,data:be.array,height:Number,itemHeight:Number,fullHeight:{type:Boolean,default:void 0},itemKey:{type:[String,Number,Function],required:!0},component:{type:[String,Object]},virtual:{type:Boolean,default:void 0},children:Function,onScroll:Function,onMousedown:Function,onMouseenter:Function,onVisibleChange:Function},setup(t,e){let{expose:n}=e;const i=V(()=>{const{height:F,itemHeight:ee,virtual:he}=t;return!!(he!==!1&&F&&ee)}),r=V(()=>{const{height:F,itemHeight:ee,data:he}=t;return i.value&&he&&ee*he.length>F}),o=li({scrollTop:0,scrollMoving:!1}),a=V(()=>t.data||T3),s=ze([]);Ye(a,()=>{s.value=$s(a.value).slice()},{immediate:!0});const l=ze(F=>{});Ye(()=>t.itemKey,F=>{typeof F=="function"?l.value=F:l.value=ee=>ee==null?void 0:ee[F]},{immediate:!0});const c=ze(),u=ze(),d=ze(),f=F=>l.value(F),h={getKey:f};function v(F){let ee;typeof F=="function"?ee=F(o.scrollTop):ee=F;const he=w(ee);c.value&&(c.value.scrollTop=he),o.scrollTop=he}const[g,m,p,b]=y3(s,f),y=li({scrollHeight:void 0,start:0,end:0,offset:void 0}),_=ze(0);St(()=>{on(()=>{var F;_.value=((F=u.value)===null||F===void 0?void 0:F.offsetHeight)||0})}),ro(()=>{on(()=>{var F;_.value=((F=u.value)===null||F===void 0?void 0:F.offsetHeight)||0})}),Ye([i,s],()=>{i.value||N(y,{scrollHeight:void 0,start:0,end:s.value.length-1,offset:void 0})},{immediate:!0}),Ye([i,s,_,r],()=>{i.value&&!r.value&&N(y,{scrollHeight:_.value,start:0,end:s.value.length-1,offset:void 0}),c.value&&(o.scrollTop=c.value.scrollTop)},{immediate:!0}),Ye([r,i,()=>o.scrollTop,s,b,()=>t.height,_],()=>{if(!i.value||!r.value)return;let F=0,ee,he,ce;const De=s.value.length,Z=s.value,me=o.scrollTop,{itemHeight:Ee,height:xe}=t,Xe=me+xe;for(let ae=0;ae<De;ae+=1){const P=Z[ae],te=f(P);let U=p.get(te);U===void 0&&(U=Ee);const j=F+U;ee===void 0&&j>=me&&(ee=ae,he=F),ce===void 0&&j>Xe&&(ce=ae),F=j}ee===void 0&&(ee=0,he=0,ce=Math.ceil(xe/Ee)),ce===void 0&&(ce=De-1),ce=Math.min(ce+1,De),N(y,{scrollHeight:F,start:ee,end:ce,offset:he})},{immediate:!0});const T=V(()=>y.scrollHeight-t.height);function w(F){let ee=F;return Number.isNaN(T.value)||(ee=Math.min(ee,T.value)),ee=Math.max(ee,0),ee}const M=V(()=>o.scrollTop<=0),A=V(()=>o.scrollTop>=T.value),S=Ag(M,A);function x(F){v(F)}function I(F){var ee;const{scrollTop:he}=F.currentTarget;he!==o.scrollTop&&v(he),(ee=t.onScroll)===null||ee===void 0||ee.call(t,F)}const[$,L]=S3(i,M,A,F=>{v(ee=>ee+F)});E3(i,c,(F,ee)=>S(F,ee)?!1:($({preventDefault(){},deltaY:F}),!0));function B(F){i.value&&F.preventDefault()}const D=()=>{c.value&&(c.value.removeEventListener("wheel",$,Kt?{passive:!1}:!1),c.value.removeEventListener("DOMMouseScroll",L),c.value.removeEventListener("MozMousePixelScroll",B))};en(()=>{on(()=>{c.value&&(D(),c.value.addEventListener("wheel",$,Kt?{passive:!1}:!1),c.value.addEventListener("DOMMouseScroll",L),c.value.addEventListener("MozMousePixelScroll",B))})}),Xn(()=>{D()});const W=x3(c,s,p,t,f,m,v,()=>{var F;(F=d.value)===null||F===void 0||F.delayHidden()});n({scrollTo:W});const ie=V(()=>{let F=null;return t.height&&(F=N({[t.fullHeight?"height":"maxHeight"]:t.height+"px"},C3),i.value&&(F.overflowY="hidden",o.scrollMoving&&(F.pointerEvents="none"))),F});return Ye([()=>y.start,()=>y.end,s],()=>{if(t.onVisibleChange){const F=s.value.slice(y.start,y.end+1);t.onVisibleChange(F,s.value)}},{flush:"post"}),{state:o,mergedData:s,componentStyle:ie,onFallbackScroll:I,onScrollBar:x,componentRef:c,useVirtual:i,calRes:y,collectHeight:m,setInstance:g,sharedConfig:h,scrollBarRef:d,fillerInnerRef:u,delayHideScrollBar:()=>{var F;(F=d.value)===null||F===void 0||F.delayHidden()}}},render(){const t=N(N({},this.$props),this.$attrs),{prefixCls:e="rc-virtual-list",height:n,itemHeight:i,fullHeight:r,data:o,itemKey:a,virtual:s,component:l="div",onScroll:c,children:u=this.$slots.default,style:d,class:f}=t,h=w3(t,["prefixCls","height","itemHeight","fullHeight","data","itemKey","virtual","component","onScroll","children","style","class"]),v=gt(e,f),{scrollTop:g}=this.state,{scrollHeight:m,offset:p,start:b,end:y}=this.calRes,{componentStyle:_,onFallbackScroll:T,onScrollBar:w,useVirtual:M,collectHeight:A,sharedConfig:S,setInstance:x,mergedData:I,delayHideScrollBar:$}=this;return O("div",$e({style:N(N({},d),{position:"relative"}),class:v},h),[O(l,{class:`${e}-holder`,style:_,ref:"componentRef",onScroll:T,onMouseenter:$},{default:()=>[O(dl,{prefixCls:e,height:m,offset:p,onInnerResize:A,ref:"fillerInnerRef"},{default:()=>A3(I,b,y,x,u,S)})]}),M&&O(_3,{ref:"scrollBarRef",prefixCls:e,scrollTop:g,height:n,scrollHeight:m,count:I.length,onScroll:w,onStartMove:()=>{this.state.scrollMoving=!0},onStopMove:()=>{this.state.scrollMoving=!1}},null)])}});function R3(t,e,n){const i=Ce(t());return Ye(e,(r,o)=>{n?n(r,o)&&(i.value=t()):i.value=t()}),i}function I3(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}const Pg=Symbol("SelectContextKey");function L3(t){return gn(Pg,t)}function O3(){return Tt(Pg,{})}var D3=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};function mp(t){return typeof t=="string"||typeof t=="number"}const N3=ve({compatConfig:{MODE:3},name:"OptionList",inheritAttrs:!1,setup(t,e){let{expose:n,slots:i}=e;const r=u3(),o=O3(),a=V(()=>`${r.prefixCls}-item`),s=R3(()=>o.flattenOptions,[()=>r.open,()=>o.flattenOptions],T=>T[0]),l=ea(),c=T=>{T.preventDefault()},u=T=>{l.current&&l.current.scrollTo(typeof T=="number"?{index:T}:T)},d=function(T){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const M=s.value.length;for(let A=0;A<M;A+=1){const S=(T+A*w+M)%M,{group:x,data:I}=s.value[S];if(!x&&!I.disabled)return S}return-1},f=li({activeIndex:d(0)}),h=function(T){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;f.activeIndex=T;const M={source:w?"keyboard":"mouse"},A=s.value[T];if(!A){o.onActiveValue(null,-1,M);return}o.onActiveValue(A.value,T,M)};Ye([()=>s.value.length,()=>r.searchValue],()=>{h(o.defaultActiveFirstOption!==!1?d(0):-1)},{immediate:!0});const v=T=>o.rawValues.has(T)&&r.mode!=="combobox";Ye([()=>r.open,()=>r.searchValue],()=>{if(!r.multiple&&r.open&&o.rawValues.size===1){const T=Array.from(o.rawValues)[0],w=$s(s.value).findIndex(M=>{let{data:A}=M;return A[o.fieldNames.value]===T});w!==-1&&(h(w),on(()=>{u(w)}))}r.open&&on(()=>{var T;(T=l.current)===null||T===void 0||T.scrollTo(void 0)})},{immediate:!0,flush:"post"});const g=T=>{T!==void 0&&o.onSelect(T,{selected:!o.rawValues.has(T)}),r.multiple||r.toggleOpen(!1)},m=T=>typeof T.label=="function"?T.label():T.label;function p(T){const w=s.value[T];if(!w)return null;const M=w.data||{},{value:A}=M,{group:S}=w,x=Yu(M,!0),I=m(w);return w?O("div",$e($e({"aria-label":typeof I=="string"&&!S?I:null},x),{},{key:T,role:S?"presentation":"option",id:`${r.id}_list_${T}`,"aria-selected":v(A)}),[A]):null}return n({onKeydown:T=>{const{which:w,ctrlKey:M}=T;switch(w){case Se.N:case Se.P:case Se.UP:case Se.DOWN:{let A=0;if(w===Se.UP?A=-1:w===Se.DOWN?A=1:I3()&&M&&(w===Se.N?A=1:w===Se.P&&(A=-1)),A!==0){const S=d(f.activeIndex+A,A);u(S),h(S,!0)}break}case Se.ENTER:{const A=s.value[f.activeIndex];A&&!A.data.disabled?g(A.value):g(void 0),r.open&&T.preventDefault();break}case Se.ESC:r.toggleOpen(!1),r.open&&T.stopPropagation()}},onKeyup:()=>{},scrollTo:T=>{u(T)}}),()=>{const{id:T,notFoundContent:w,onPopupScroll:M}=r,{menuItemSelectedIcon:A,fieldNames:S,virtual:x,listHeight:I,listItemHeight:$}=o,L=i.option,{activeIndex:B}=f,D=Object.keys(S).map(W=>S[W]);return s.value.length===0?O("div",{role:"listbox",id:`${T}_list`,class:`${a.value}-empty`,onMousedown:c},[w]):O(ot,null,[O("div",{role:"listbox",id:`${T}_list`,style:{height:0,width:0,overflow:"hidden"}},[p(B-1),p(B),p(B+1)]),O(P3,{itemKey:"key",ref:l,data:s.value,height:I,itemHeight:$,fullHeight:!1,onMousedown:c,onScroll:M,virtual:x},{default:(W,ie)=>{var X;const{group:F,groupOption:ee,data:he,value:ce}=W,{key:De}=he,Z=typeof W.label=="function"?W.label():W.label;if(F){const E=(X=he.title)!==null&&X!==void 0?X:mp(Z)&&Z;return O("div",{class:gt(a.value,`${a.value}-group`),title:E},[L?L(he):Z!==void 0?Z:De])}const{disabled:me,title:Ee,children:xe,style:Xe,class:ae,className:P}=he,te=D3(he,["disabled","title","children","style","class","className"]),U=rl(te,D),j=v(ce),Y=`${a.value}-option`,de=gt(a.value,Y,ae,P,{[`${Y}-grouped`]:ee,[`${Y}-active`]:B===ie&&!me,[`${Y}-disabled`]:me,[`${Y}-selected`]:j}),oe=m(W),Me=!A||typeof A=="function"||j,we=typeof oe=="number"?oe:oe||ce;let R=mp(we)?we.toString():void 0;return Ee!==void 0&&(R=Ee),O("div",$e($e({},U),{},{"aria-selected":j,class:de,title:R,onMousemove:E=>{te.onMousemove&&te.onMousemove(E),!(B===ie||me)&&h(ie)},onClick:E=>{me||g(ce),te.onClick&&te.onClick(E)},style:Xe}),[O("div",{class:`${Y}-content`},[L?L(he):we]),Pu(A)||j,Me&&O(sr,{class:`${a.value}-option-state`,customizeIcon:A,customizeIconProps:{isSelected:j}},{default:()=>[j?"✓":null]})])}})])}}});var F3=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};function U3(t){const e=t,{key:n,children:i}=e,r=e.props,{value:o,disabled:a}=r,s=F3(r,["value","disabled"]),l=i==null?void 0:i.default;return N({key:n,value:o!==void 0?o:n,children:l,disabled:a||a===""},s)}function Rg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return mn(t).map((i,r)=>{var o;if(!Pu(i)||!i.type)return null;const{type:{isSelectOptGroup:a},key:s,children:l,props:c}=i;if(e||!a)return U3(i);const u=l&&l.default?l.default():void 0,d=(c==null?void 0:c.label)||((o=l.label)===null||o===void 0?void 0:o.call(l))||s;return N(N({key:`__RC_SELECT_GRP__${s===null?r:String(s)}__`},c),{label:d,options:Rg(u||[])})}).filter(i=>i)}function B3(t,e,n){const i=ze(),r=ze(),o=ze(),a=ze([]);return Ye([t,e],()=>{t.value?a.value=$s(t.value).slice():a.value=Rg(e.value)},{immediate:!0,deep:!0}),en(()=>{const s=a.value,l=new Map,c=new Map,u=n.value;function d(f){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(let v=0;v<f.length;v+=1){const g=f[v];!g[u.options]||h?(l.set(g[u.value],g),c.set(g[u.label],g)):d(g[u.options],!0)}}d(s),i.value=s,r.value=l,o.value=c}),{options:i,valueOptions:r,labelOptions:o}}let vp=0;const z3=$n();function k3(){let t;return z3?(t=vp,vp+=1):t="TEST_OR_SSR",t}function H3(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ce("");const e=`rc_select_${k3()}`;return t.value||e}function Ig(t){return Array.isArray(t)?t:t!==void 0?[t]:[]}function gc(t,e){return Ig(t).join("").toUpperCase().includes(e)}const V3=(t,e,n,i,r)=>V(()=>{const o=n.value,a=r==null?void 0:r.value,s=i==null?void 0:i.value;if(!o||s===!1)return t.value;const{options:l,label:c,value:u}=e.value,d=[],f=typeof s=="function",h=o.toUpperCase(),v=f?s:(m,p)=>a?gc(p[a],h):p[l]?gc(p[c!=="children"?c:"label"],h):gc(p[u],h),g=f?m=>Zc(m):m=>m;return t.value.forEach(m=>{if(m[l]){if(v(o,g(m)))d.push(m);else{const b=m[l].filter(y=>v(o,g(y)));b.length&&d.push(N(N({},m),{[l]:b}))}return}v(o,g(m))&&d.push(m)}),d}),$3=(t,e)=>{const n=ze({values:new Map,options:new Map});return[V(()=>{const{values:o,options:a}=n.value,s=t.value.map(u=>{var d;return u.label===void 0?N(N({},u),{label:(d=o.get(u.value))===null||d===void 0?void 0:d.label}):u}),l=new Map,c=new Map;return s.forEach(u=>{l.set(u.value,u),c.set(u.value,e.value.get(u.value)||a.get(u.value))}),n.value.values=l,n.value.options=c,s}),o=>e.value.get(o)||n.value.options.get(o)]};function gp(t,e){const{defaultValue:n,value:i=Ce()}=e||{};let r=typeof t=="function"?t():t;i.value!==void 0&&(r=q(i)),n!==void 0&&(r=typeof n=="function"?n():n);const o=Ce(r),a=Ce(r);en(()=>{let l=i.value!==void 0?i.value:o.value;e.postState&&(l=e.postState(l)),a.value=l});function s(l){const c=a.value;o.value=l,$s(a.value)!==l&&e.onChange&&e.onChange(l,c)}return Ye(i,()=>{o.value=i.value}),[a,s]}function _p(t){const e=typeof t=="function"?t():t,n=Ce(e);function i(r){n.value=r}return[n,i]}const G3=["inputValue"];function Lg(){return N(N({},wg()),{prefixCls:String,id:String,backfill:{type:Boolean,default:void 0},fieldNames:Object,inputValue:String,searchValue:String,onSearch:Function,autoClearSearchValue:{type:Boolean,default:void 0},onSelect:Function,onDeselect:Function,filterOption:{type:[Boolean,Function],default:void 0},filterSort:Function,optionFilterProp:String,optionLabelProp:String,options:Array,defaultActiveFirstOption:{type:Boolean,default:void 0},virtual:{type:Boolean,default:void 0},listHeight:Number,listItemHeight:Number,menuItemSelectedIcon:be.any,mode:String,labelInValue:{type:Boolean,default:void 0},value:be.any,defaultValue:be.any,onChange:Function,children:Array})}function W3(t){return!t||typeof t!="object"}const X3=ve({compatConfig:{MODE:3},name:"VcSelect",inheritAttrs:!1,props:Js(Lg(),{prefixCls:"vc-select",autoClearSearchValue:!0,listHeight:200,listItemHeight:20,dropdownMatchSelectWidth:!0}),setup(t,e){let{expose:n,attrs:i,slots:r}=e;const o=H3(ni(t,"id")),a=V(()=>Tg(t.mode)),s=V(()=>!!(!t.options&&t.children)),l=V(()=>t.filterOption===void 0&&t.mode==="combobox"?!1:t.filterOption),c=V(()=>$v(t.fieldNames,s.value)),[u,d]=gp("",{value:V(()=>t.searchValue!==void 0?t.searchValue:t.inputValue),postState:ae=>ae||""}),f=B3(ni(t,"options"),ni(t,"children"),c),{valueOptions:h,labelOptions:v,options:g}=f,m=ae=>Ig(ae).map(te=>{var U,j;let Y,de,oe,Me;W3(te)?Y=te:(oe=te.key,de=te.label,Y=(U=te.value)!==null&&U!==void 0?U:oe);const we=h.value.get(Y);return we&&(de===void 0&&(de=we==null?void 0:we[t.optionLabelProp||c.value.label]),oe===void 0&&(oe=(j=we==null?void 0:we.key)!==null&&j!==void 0?j:Y),Me=we==null?void 0:we.disabled),{label:de,value:Y,key:oe,disabled:Me,option:we}}),[p,b]=gp(t.defaultValue,{value:ni(t,"value")}),y=V(()=>{var ae;const P=m(p.value);return t.mode==="combobox"&&!(!((ae=P[0])===null||ae===void 0)&&ae.value)?[]:P}),[_,T]=$3(y,h),w=V(()=>{if(!t.mode&&_.value.length===1){const ae=_.value[0];if(ae.value===null&&(ae.label===null||ae.label===void 0))return[]}return _.value.map(ae=>{var P;return N(N({},ae),{label:(P=typeof ae.label=="function"?ae.label():ae.label)!==null&&P!==void 0?P:ae.value})})}),M=V(()=>new Set(_.value.map(ae=>ae.value)));en(()=>{var ae;if(t.mode==="combobox"){const P=(ae=_.value[0])===null||ae===void 0?void 0:ae.value;P!=null&&d(String(P))}},{flush:"post"});const A=(ae,P)=>{const te=P??ae;return{[c.value.value]:ae,[c.value.label]:te}},S=ze();en(()=>{if(t.mode!=="tags"){S.value=g.value;return}const ae=g.value.slice(),P=te=>h.value.has(te);[..._.value].sort((te,U)=>te.value<U.value?-1:1).forEach(te=>{const U=te.value;P(U)||ae.push(A(U,te.label))}),S.value=ae});const x=V3(S,c,u,l,ni(t,"optionFilterProp")),I=V(()=>t.mode!=="tags"||!u.value||x.value.some(ae=>ae[t.optionFilterProp||"value"]===u.value)?x.value:[A(u.value),...x.value]),$=V(()=>t.filterSort?[...I.value].sort((ae,P)=>t.filterSort(ae,P)):I.value),L=V(()=>q2($.value,{fieldNames:c.value,childrenAsData:s.value})),B=ae=>{const P=m(ae);if(b(P),t.onChange&&(P.length!==_.value.length||P.some((te,U)=>{var j;return((j=_.value[U])===null||j===void 0?void 0:j.value)!==(te==null?void 0:te.value)}))){const te=t.labelInValue?P.map(j=>N(N({},j),{originLabel:j.label,label:typeof j.label=="function"?j.label():j.label})):P.map(j=>j.value),U=P.map(j=>Zc(T(j.value)));t.onChange(a.value?te:te[0],a.value?U:U[0])}},[D,W]=_p(null),[ie,X]=_p(0),F=V(()=>t.defaultActiveFirstOption!==void 0?t.defaultActiveFirstOption:t.mode!=="combobox"),ee=function(ae,P){let{source:te="keyboard"}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};X(P),t.backfill&&t.mode==="combobox"&&ae!==null&&te==="keyboard"&&W(String(ae))},he=(ae,P)=>{const te=()=>{var U;const j=T(ae),Y=j==null?void 0:j[c.value.label];return[t.labelInValue?{label:typeof Y=="function"?Y():Y,originLabel:Y,value:ae,key:(U=j==null?void 0:j.key)!==null&&U!==void 0?U:ae}:ae,Zc(j)]};if(P&&t.onSelect){const[U,j]=te();t.onSelect(U,j)}else if(!P&&t.onDeselect){const[U,j]=te();t.onDeselect(U,j)}},ce=(ae,P)=>{let te;const U=a.value?P.selected:!0;U?te=a.value?[..._.value,ae]:[ae]:te=_.value.filter(j=>j.value!==ae),B(te),he(ae,U),t.mode==="combobox"?W(""):(!a.value||t.autoClearSearchValue)&&(d(""),W(""))},De=(ae,P)=>{B(ae),(P.type==="remove"||P.type==="clear")&&P.values.forEach(te=>{he(te.value,!1)})},Z=(ae,P)=>{var te;if(d(ae),W(null),P.source==="submit"){const U=(ae||"").trim();if(U){const j=Array.from(new Set([...M.value,U]));B(j),he(U,!0),d("")}return}P.source!=="blur"&&(t.mode==="combobox"&&B(ae),(te=t.onSearch)===null||te===void 0||te.call(t,ae))},me=ae=>{let P=ae;t.mode!=="tags"&&(P=ae.map(U=>{const j=v.value.get(U);return j==null?void 0:j.value}).filter(U=>U!==void 0));const te=Array.from(new Set([...M.value,...P]));B(te),te.forEach(U=>{he(U,!0)})},Ee=V(()=>t.virtual!==!1&&t.dropdownMatchSelectWidth!==!1);L3(Eg(N(N({},f),{flattenOptions:L,onActiveValue:ee,defaultActiveFirstOption:F,onSelect:ce,menuItemSelectedIcon:ni(t,"menuItemSelectedIcon"),rawValues:M,fieldNames:c,virtual:Ee,listHeight:ni(t,"listHeight"),listItemHeight:ni(t,"listItemHeight"),childrenAsData:s})));const xe=Ce();n({focus(){var ae;(ae=xe.value)===null||ae===void 0||ae.focus()},blur(){var ae;(ae=xe.value)===null||ae===void 0||ae.blur()},scrollTo(ae){var P;(P=xe.value)===null||P===void 0||P.scrollTo(ae)}});const Xe=V(()=>rl(t,["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","listHeight","listItemHeight","value","defaultValue","labelInValue","onChange"]));return()=>O(v3,$e($e($e({},Xe.value),i),{},{id:o,prefixCls:t.prefixCls,ref:xe,omitDomProps:G3,mode:t.mode,displayValues:w.value,onDisplayValuesChange:De,searchValue:u.value,onSearch:Z,onSearchSplit:me,dropdownMatchSelectWidth:t.dropdownMatchSelectWidth,OptionList:N3,emptyOptions:!L.value.length,activeValue:D.value,activeDescendantId:`${o}_list_${ie.value}`}),r)}}),Ju=()=>null;Ju.isSelectOption=!0;Ju.displayName="ASelectOption";const Qu=()=>null;Qu.isSelectOptGroup=!0;Qu.displayName="ASelectOptGroup";var j3={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},q3=Symbol("iconContext"),Og=function(){return Tt(q3,{prefixCls:Ce("anticon"),rootClassName:Ce(""),csp:Ce()})};function ed(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Y3(t,e){return t&&t.contains?t.contains(e):!1}var yp="data-vc-order",K3="vc-icon-key",su=new Map;function Dg(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.mark;return e?e.startsWith("data-")?e:"data-".concat(e):K3}function td(t){if(t.attachTo)return t.attachTo;var e=document.querySelector("head");return e||document.body}function Z3(t){return t==="queue"?"prependQueue":t?"prepend":"append"}function Ng(t){return Array.from((su.get(t)||t).children).filter(function(e){return e.tagName==="STYLE"})}function Fg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!ed())return null;var n=e.csp,i=e.prepend,r=document.createElement("style");r.setAttribute(yp,Z3(i)),n&&n.nonce&&(r.nonce=n.nonce),r.innerHTML=t;var o=td(e),a=o.firstChild;if(i){if(i==="queue"){var s=Ng(o).filter(function(l){return["prepend","prependQueue"].includes(l.getAttribute(yp))});if(s.length)return o.insertBefore(r,s[s.length-1].nextSibling),r}o.insertBefore(r,a)}else o.appendChild(r);return r}function J3(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=td(e);return Ng(n).find(function(i){return i.getAttribute(Dg(e))===t})}function Q3(t,e){var n=su.get(t);if(!n||!Y3(document,n)){var i=Fg("",e),r=i.parentNode;su.set(t,r),t.removeChild(i)}}function eN(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=td(n);Q3(i,n);var r=J3(e,n);if(r)return n.csp&&n.csp.nonce&&r.nonce!==n.csp.nonce&&(r.nonce=n.csp.nonce),r.innerHTML!==t&&(r.innerHTML=t),r;var o=Fg(t,n);return o.setAttribute(Dg(n),e),o}function xp(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){tN(t,r,n[r])})}return t}function tN(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function bp(t){return typeof t=="object"&&typeof t.name=="string"&&typeof t.theme=="string"&&(typeof t.icon=="object"||typeof t.icon=="function")}function lu(t,e,n){return n?Uo(t.tag,xp({key:e},n,t.attrs),(t.children||[]).map(function(i,r){return lu(i,"".concat(e,"-").concat(t.tag,"-").concat(r))})):Uo(t.tag,xp({key:e},t.attrs),(t.children||[]).map(function(i,r){return lu(i,"".concat(e,"-").concat(t.tag,"-").concat(r))}))}function Ug(t){return jo(t)[0]}function Bg(t){return t?Array.isArray(t)?t:[t]:[]}var nN=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;function zg(t){return t&&t.getRootNode&&t.getRootNode()}function iN(t){return ed()?zg(t)instanceof ShadowRoot:!1}function rN(t){return iN(t)?zg(t):null}var oN=function(){var e=Og(),n=e.prefixCls,i=e.csp,r=Hs(),o=nN;n&&(o=o.replace(/anticon/g,n.value)),on(function(){if(ed()){var a=r.vnode.el,s=rN(a);eN(o,"@ant-design-vue-icons",{prepend:!0,csp:i.value,attachTo:s})}})},aN=["icon","primaryColor","secondaryColor"];function sN(t,e){if(t==null)return{};var n=lN(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function lN(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function vs(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){cN(t,r,n[r])})}return t}function cN(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Fo=li({primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1});function uN(t){var e=t.primaryColor,n=t.secondaryColor;Fo.primaryColor=e,Fo.secondaryColor=n||Ug(e),Fo.calculated=!!n}function dN(){return vs({},Fo)}var Ri=function(e,n){var i=vs({},e,n.attrs),r=i.icon,o=i.primaryColor,a=i.secondaryColor,s=sN(i,aN),l=Fo;if(o&&(l={primaryColor:o,secondaryColor:a||Ug(o)}),bp(r),!bp(r))return null;var c=r;return c&&typeof c.icon=="function"&&(c=vs({},c,{icon:c.icon(l.primaryColor,l.secondaryColor)})),lu(c.icon,"svg-".concat(c.name),vs({},s,{"data-icon":c.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}))};Ri.props={icon:Object,primaryColor:String,secondaryColor:String,focusable:String};Ri.inheritAttrs=!1;Ri.displayName="IconBase";Ri.getTwoToneColors=dN;Ri.setTwoToneColors=uN;function fN(t,e){return vN(t)||mN(t,e)||pN(t,e)||hN()}function hN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pN(t,e){if(t){if(typeof t=="string")return Sp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sp(t,e)}}function Sp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function mN(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,o=!1,a,s;try{for(n=n.call(t);!(r=(a=n.next()).done)&&(i.push(a.value),!(e&&i.length===e));r=!0);}catch(l){o=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw s}}return i}}function vN(t){if(Array.isArray(t))return t}function kg(t){var e=Bg(t),n=fN(e,2),i=n[0],r=n[1];return Ri.setTwoToneColors({primaryColor:i,secondaryColor:r})}function gN(){var t=Ri.getTwoToneColors();return t.calculated?[t.primaryColor,t.secondaryColor]:t.primaryColor}var _N=ve({name:"InsertStyles",setup:function(){return oN(),function(){return null}}}),yN=["class","icon","spin","rotate","tabindex","twoToneColor","onClick"];function xN(t,e){return EN(t)||MN(t,e)||SN(t,e)||bN()}function bN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function SN(t,e){if(t){if(typeof t=="string")return Mp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mp(t,e)}}function Mp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function MN(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,o=!1,a,s;try{for(n=n.call(t);!(r=(a=n.next()).done)&&(i.push(a.value),!(e&&i.length===e));r=!0);}catch(l){o=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw s}}return i}}function EN(t){if(Array.isArray(t))return t}function Ep(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){Ro(t,r,n[r])})}return t}function Ro(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wN(t,e){if(t==null)return{};var n=TN(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function TN(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}kg(e2.primary);var Dn=function(e,n){var i,r=Ep({},e,n.attrs),o=r.class,a=r.icon,s=r.spin,l=r.rotate,c=r.tabindex,u=r.twoToneColor,d=r.onClick,f=wN(r,yN),h=Og(),v=h.prefixCls,g=h.rootClassName,m=(i={},Ro(i,g.value,!!g.value),Ro(i,v.value,!0),Ro(i,"".concat(v.value,"-").concat(a.name),!!a.name),Ro(i,"".concat(v.value,"-spin"),!!s||a.name==="loading"),i),p=c;p===void 0&&d&&(p=-1);var b=l?{msTransform:"rotate(".concat(l,"deg)"),transform:"rotate(".concat(l,"deg)")}:void 0,y=Bg(u),_=xN(y,2),T=_[0],w=_[1];return O("span",Ep({role:"img","aria-label":a.name},f,{onClick:d,class:[m,o],tabindex:p}),[O(Ri,{icon:a,primaryColor:T,secondaryColor:w,style:b},null),O(_N,null,null)])};Dn.props={spin:Boolean,rotate:Number,icon:Object,twoToneColor:[String,Array]};Dn.displayName="AntdIcon";Dn.inheritAttrs=!1;Dn.getTwoToneColor=gN;Dn.setTwoToneColor=kg;function wp(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){CN(t,r,n[r])})}return t}function CN(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var nd=function(e,n){var i=wp({},e,n.attrs);return O(Dn,wp({},i,{icon:j3}),null)};nd.displayName="DownOutlined";nd.inheritAttrs=!1;var AN={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};function Tp(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){PN(t,r,n[r])})}return t}function PN(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var id=function(e,n){var i=Tp({},e,n.attrs);return O(Dn,Tp({},i,{icon:AN}),null)};id.displayName="LoadingOutlined";id.inheritAttrs=!1;var RN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};function Cp(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){IN(t,r,n[r])})}return t}function IN(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var rd=function(e,n){var i=Cp({},e,n.attrs);return O(Dn,Cp({},i,{icon:RN}),null)};rd.displayName="CheckOutlined";rd.inheritAttrs=!1;var LN={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"};function Ap(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){ON(t,r,n[r])})}return t}function ON(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var od=function(e,n){var i=Ap({},e,n.attrs);return O(Dn,Ap({},i,{icon:LN}),null)};od.displayName="CloseOutlined";od.inheritAttrs=!1;var DN={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"};function Pp(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){NN(t,r,n[r])})}return t}function NN(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ad=function(e,n){var i=Pp({},e,n.attrs);return O(Dn,Pp({},i,{icon:DN}),null)};ad.displayName="CloseCircleFilled";ad.inheritAttrs=!1;var FN={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"};function Rp(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){UN(t,r,n[r])})}return t}function UN(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var sd=function(e,n){var i=Rp({},e,n.attrs);return O(Dn,Rp({},i,{icon:FN}),null)};sd.displayName="SearchOutlined";sd.inheritAttrs=!1;function BN(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{loading:n,multiple:i,prefixCls:r,hasFeedback:o,feedbackIcon:a,showArrow:s}=t,l=t.suffixIcon||e.suffixIcon&&e.suffixIcon(),c=t.clearIcon||e.clearIcon&&e.clearIcon(),u=t.menuItemSelectedIcon||e.menuItemSelectedIcon&&e.menuItemSelectedIcon(),d=t.removeIcon||e.removeIcon&&e.removeIcon(),f=c??O(ad,null,null),h=p=>O(ot,null,[s!==!1&&p,o&&a]);let v=null;if(l!==void 0)v=h(l);else if(n)v=h(O(id,{spin:!0},null));else{const p=`${r}-suffix`;v=b=>{let{open:y,showSearch:_}=b;return h(y&&_?O(sd,{class:p},null):O(nd,{class:p},null))}}let g=null;u!==void 0?g=u:i?g=O(rd,null,null):g=null;let m=null;return d!==void 0?m=d:m=O(od,null,null),{clearIcon:f,suffixIcon:v,itemIcon:g,removeIcon:m}}function Hg(t){const e=Symbol("contextKey");return{useProvide:(r,o)=>{const a=li({});return gn(e,a),en(()=>{N(a,r,o||{})}),a},useInject:()=>Tt(e,t)||{}}}const Ip=Symbol("ContextProps"),Lp=Symbol("InternalContextProps"),Op={id:V(()=>{}),onFieldBlur:()=>{},onFieldChange:()=>{},clearValidate:()=>{}},Dp={addFormItemField:()=>{},removeFormItemField:()=>{}},ld=()=>{const t=Tt(Lp,Dp),e=Symbol("FormItemFieldKey"),n=Hs();return t.addFormItemField(e,n.type),Xn(()=>{t.removeFormItemField(e)}),gn(Lp,Dp),gn(Ip,Op),Tt(Ip,Op)},Vg=Hg({});function zN(t,e,n){return gt({[`${t}-status-success`]:e==="success",[`${t}-status-warning`]:e==="warning",[`${t}-status-error`]:e==="error",[`${t}-status-validating`]:e==="validating",[`${t}-has-feedback`]:n})}const kN=(t,e)=>e||t,HN=t=>{const{componentCls:e}=t;return{[e]:{display:"inline-flex","&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}},VN=t=>{const{componentCls:e}=t;return{[e]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${e}-space-item`]:{"&:empty":{display:"none"}}}}},$N=la("Space",t=>[VN(t),HN(t)]);var GN="[object Map]",WN="[object Set]",XN=Object.prototype,jN=XN.hasOwnProperty;function $g(t){if(t==null)return!0;if(pg(t)&&(Jo(t)||typeof t=="string"||typeof t.splice=="function"||Us(t)||qu(t)||lg(t)))return!t.length;var e=oi(t);if(e==GN||e==WN)return!t.size;if(fg(t))return!hg(t).length;for(var n in t)if(jN.call(t,n))return!1;return!0}const qN=()=>({compactSize:String,compactDirection:be.oneOf(Rs("horizontal","vertical")).def("horizontal"),isFirstItem:Yt(),isLastItem:Yt()}),cd=Hg(null),YN=(t,e)=>{const n=cd.useInject(),i=V(()=>{if(!n||$g(n))return"";const{compactDirection:r,isFirstItem:o,isLastItem:a}=n,s=r==="vertical"?"-vertical-":"-";return gt({[`${t.value}-compact${s}item`]:!0,[`${t.value}-compact${s}first-item`]:o,[`${t.value}-compact${s}last-item`]:a,[`${t.value}-compact${s}item-rtl`]:e.value==="rtl"})});return{compactSize:V(()=>n==null?void 0:n.compactSize),compactDirection:V(()=>n==null?void 0:n.compactDirection),compactItemClassnames:i}},KN=()=>({prefixCls:String,size:{type:String},direction:be.oneOf(Rs("horizontal","vertical")).def("horizontal"),align:be.oneOf(Rs("start","end","center","baseline")),block:{type:Boolean,default:void 0}}),ZN=ve({name:"CompactItem",props:qN(),setup(t,e){let{slots:n}=e;return cd.useProvide(t),()=>{var i;return(i=n.default)===null||i===void 0?void 0:i.call(n)}}});ve({name:"ASpaceCompact",inheritAttrs:!1,props:KN(),setup(t,e){let{attrs:n,slots:i}=e;const{prefixCls:r,direction:o}=ur("space-compact",t),a=cd.useInject(),[s,l]=$N(r),c=V(()=>gt(r.value,l.value,{[`${r.value}-rtl`]:o.value==="rtl",[`${r.value}-block`]:t.block,[`${r.value}-vertical`]:t.direction==="vertical"}));return()=>{var u;const d=mn(((u=i.default)===null||u===void 0?void 0:u.call(i))||[]);return d.length===0?null:s(O("div",$e($e({},n),{},{class:[c.value,n.class]}),[d.map((f,h)=>{var v;const g=f&&f.key||`${r.value}-item-${h}`,m=!a||$g(a);return O(ZN,{key:g,compactSize:(v=t.size)!==null&&v!==void 0?v:"middle",compactDirection:t.direction,isFirstItem:h===0&&(m||(a==null?void 0:a.isFirstItem)),isLastItem:h===d.length-1&&(m||(a==null?void 0:a.isLastItem))},{default:()=>[f]})})]))}}});const JN=t=>({animationDuration:t,animationFillMode:"both"}),QN=t=>({animationDuration:t,animationFillMode:"both"}),Gg=function(t,e,n,i){const o=(arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1)?"&":"";return{[`
      ${o}${t}-enter,
      ${o}${t}-appear
    `]:N(N({},JN(i)),{animationPlayState:"paused"}),[`${o}${t}-leave`]:N(N({},QN(i)),{animationPlayState:"paused"}),[`
      ${o}${t}-enter${t}-enter-active,
      ${o}${t}-appear${t}-appear-active
    `]:{animationName:e,animationPlayState:"running"},[`${o}${t}-leave${t}-leave-active`]:{animationName:n,animationPlayState:"running",pointerEvents:"none"}}},eF=new Vt("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),tF=new Vt("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),nF=new Vt("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),iF=new Vt("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),rF=new Vt("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),oF=new Vt("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),aF=new Vt("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),sF=new Vt("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}}),lF={"move-up":{inKeyframes:aF,outKeyframes:sF},"move-down":{inKeyframes:eF,outKeyframes:tF},"move-left":{inKeyframes:nF,outKeyframes:iF},"move-right":{inKeyframes:rF,outKeyframes:oF}},Np=(t,e)=>{const{antCls:n}=t,i=`${n}-${e}`,{inKeyframes:r,outKeyframes:o}=lF[e];return[Gg(i,r,o,t.motionDurationMid),{[`
        ${i}-enter,
        ${i}-appear
      `]:{opacity:0,animationTimingFunction:t.motionEaseOutCirc},[`${i}-leave`]:{animationTimingFunction:t.motionEaseInOutCirc}}]},Wg=new Vt("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),Xg=new Vt("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),jg=new Vt("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),qg=new Vt("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),cF=new Vt("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),uF=new Vt("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),dF=new Vt("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),fF=new Vt("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),hF={"slide-up":{inKeyframes:Wg,outKeyframes:Xg},"slide-down":{inKeyframes:jg,outKeyframes:qg},"slide-left":{inKeyframes:cF,outKeyframes:uF},"slide-right":{inKeyframes:dF,outKeyframes:fF}},Fp=(t,e)=>{const{antCls:n}=t,i=`${n}-${e}`,{inKeyframes:r,outKeyframes:o}=hF[e];return[Gg(i,r,o,t.motionDurationMid),{[`
      ${i}-enter,
      ${i}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:t.motionEaseOutQuint},[`${i}-leave`]:{animationTimingFunction:t.motionEaseInQuint}}]},Up=t=>{const{controlPaddingHorizontal:e}=t;return{position:"relative",display:"block",minHeight:t.controlHeight,padding:`${(t.controlHeight-t.fontSize*t.lineHeight)/2}px ${e}px`,color:t.colorText,fontWeight:"normal",fontSize:t.fontSize,lineHeight:t.lineHeight,boxSizing:"border-box"}},pF=t=>{const{antCls:e,componentCls:n}=t,i=`${n}-item`;return[{[`${n}-dropdown`]:N(N({},tr(t)),{position:"absolute",top:-9999,zIndex:t.zIndexPopup,boxSizing:"border-box",padding:t.paddingXXS,overflow:"hidden",fontSize:t.fontSize,fontVariant:"initial",backgroundColor:t.colorBgElevated,borderRadius:t.borderRadiusLG,outline:"none",boxShadow:t.boxShadowSecondary,[`
            &${e}-slide-up-enter${e}-slide-up-enter-active${n}-dropdown-placement-bottomLeft,
            &${e}-slide-up-appear${e}-slide-up-appear-active${n}-dropdown-placement-bottomLeft
          `]:{animationName:Wg},[`
            &${e}-slide-up-enter${e}-slide-up-enter-active${n}-dropdown-placement-topLeft,
            &${e}-slide-up-appear${e}-slide-up-appear-active${n}-dropdown-placement-topLeft
          `]:{animationName:jg},[`&${e}-slide-up-leave${e}-slide-up-leave-active${n}-dropdown-placement-bottomLeft`]:{animationName:Xg},[`&${e}-slide-up-leave${e}-slide-up-leave-active${n}-dropdown-placement-topLeft`]:{animationName:qg},"&-hidden":{display:"none"},"&-empty":{color:t.colorTextDisabled},[`${i}-empty`]:N(N({},Up(t)),{color:t.colorTextDisabled}),[`${i}`]:N(N({},Up(t)),{cursor:"pointer",transition:`background ${t.motionDurationSlow} ease`,borderRadius:t.borderRadiusSM,"&-group":{color:t.colorTextDescription,fontSize:t.fontSizeSM,cursor:"default"},"&-option":{display:"flex","&-content":N({flex:"auto"},Yc),"&-state":{flex:"none"},[`&-active:not(${i}-option-disabled)`]:{backgroundColor:t.controlItemBgHover},[`&-selected:not(${i}-option-disabled)`]:{color:t.colorText,fontWeight:t.fontWeightStrong,backgroundColor:t.controlItemBgActive,[`${i}-option-state`]:{color:t.colorPrimary}},"&-disabled":{[`&${i}-option-selected`]:{backgroundColor:t.colorBgContainerDisabled},color:t.colorTextDisabled,cursor:"not-allowed"},"&-grouped":{paddingInlineStart:t.controlPaddingHorizontal*2}}}),"&-rtl":{direction:"rtl"}})},Fp(t,"slide-up"),Fp(t,"slide-down"),Np(t,"move-up"),Np(t,"move-down")]},Dr=2;function Yg(t){let{controlHeightSM:e,controlHeight:n,lineWidth:i}=t;const r=(n-e)/2-i,o=Math.ceil(r/2);return[r,o]}function _c(t,e){const{componentCls:n,iconCls:i}=t,r=`${n}-selection-overflow`,o=t.controlHeightSM,[a]=Yg(t),s=e?`${n}-${e}`:"";return{[`${n}-multiple${s}`]:{fontSize:t.fontSize,[r]:{position:"relative",display:"flex",flex:"auto",flexWrap:"wrap",maxWidth:"100%","&-item":{flex:"none",alignSelf:"center",maxWidth:"100%",display:"inline-flex"}},[`${n}-selector`]:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:`${a-Dr}px ${Dr*2}px`,borderRadius:t.borderRadius,[`${n}-show-search&`]:{cursor:"text"},[`${n}-disabled&`]:{background:t.colorBgContainerDisabled,cursor:"not-allowed"},"&:after":{display:"inline-block",width:0,margin:`${Dr}px 0`,lineHeight:`${o}px`,content:'"\\a0"'}},[`
        &${n}-show-arrow ${n}-selector,
        &${n}-allow-clear ${n}-selector
      `]:{paddingInlineEnd:t.fontSizeIcon+t.controlPaddingHorizontal},[`${n}-selection-item`]:{position:"relative",display:"flex",flex:"none",boxSizing:"border-box",maxWidth:"100%",height:o,marginTop:Dr,marginBottom:Dr,lineHeight:`${o-t.lineWidth*2}px`,background:t.colorFillSecondary,border:`${t.lineWidth}px solid ${t.colorSplit}`,borderRadius:t.borderRadiusSM,cursor:"default",transition:`font-size ${t.motionDurationSlow}, line-height ${t.motionDurationSlow}, height ${t.motionDurationSlow}`,userSelect:"none",marginInlineEnd:Dr*2,paddingInlineStart:t.paddingXS,paddingInlineEnd:t.paddingXS/2,[`${n}-disabled&`]:{color:t.colorTextDisabled,borderColor:t.colorBorder,cursor:"not-allowed"},"&-content":{display:"inline-block",marginInlineEnd:t.paddingXS/2,overflow:"hidden",whiteSpace:"pre",textOverflow:"ellipsis"},"&-remove":N(N({},Av()),{display:"inline-block",color:t.colorIcon,fontWeight:"bold",fontSize:10,lineHeight:"inherit",cursor:"pointer",[`> ${i}`]:{verticalAlign:"-0.2em"},"&:hover":{color:t.colorIconHover}})},[`${r}-item + ${r}-item`]:{[`${n}-selection-search`]:{marginInlineStart:0}},[`${n}-selection-search`]:{display:"inline-flex",position:"relative",maxWidth:"100%",marginInlineStart:t.inputPaddingHorizontalBase-a,"\n          &-input,\n          &-mirror\n        ":{height:o,fontFamily:t.fontFamily,lineHeight:`${o}px`,transition:`all ${t.motionDurationSlow}`},"&-input":{width:"100%",minWidth:4.1},"&-mirror":{position:"absolute",top:0,insetInlineStart:0,insetInlineEnd:"auto",zIndex:999,whiteSpace:"pre",visibility:"hidden"}},[`${n}-selection-placeholder `]:{position:"absolute",top:"50%",insetInlineStart:t.inputPaddingHorizontalBase,insetInlineEnd:t.inputPaddingHorizontalBase,transform:"translateY(-50%)",transition:`all ${t.motionDurationSlow}`}}}}function mF(t){const{componentCls:e}=t,n=Mn(t,{controlHeight:t.controlHeightSM,controlHeightSM:t.controlHeightXS,borderRadius:t.borderRadiusSM,borderRadiusSM:t.borderRadiusXS}),[,i]=Yg(t);return[_c(t),_c(n,"sm"),{[`${e}-multiple${e}-sm`]:{[`${e}-selection-placeholder`]:{insetInlineStart:t.controlPaddingHorizontalSM-t.lineWidth,insetInlineEnd:"auto"},[`${e}-selection-search`]:{marginInlineStart:i}}},_c(Mn(t,{fontSize:t.fontSizeLG,controlHeight:t.controlHeightLG,controlHeightSM:t.controlHeight,borderRadius:t.borderRadiusLG,borderRadiusSM:t.borderRadius}),"lg")]}function yc(t,e){const{componentCls:n,inputPaddingHorizontalBase:i,borderRadius:r}=t,o=t.controlHeight-t.lineWidth*2,a=Math.ceil(t.fontSize*1.25),s=e?`${n}-${e}`:"";return{[`${n}-single${s}`]:{fontSize:t.fontSize,[`${n}-selector`]:N(N({},tr(t)),{display:"flex",borderRadius:r,[`${n}-selection-search`]:{position:"absolute",top:0,insetInlineStart:i,insetInlineEnd:i,bottom:0,"&-input":{width:"100%"}},[`
          ${n}-selection-item,
          ${n}-selection-placeholder
        `]:{padding:0,lineHeight:`${o}px`,transition:`all ${t.motionDurationSlow}`,"@supports (-moz-appearance: meterbar)":{lineHeight:`${o}px`}},[`${n}-selection-item`]:{position:"relative",userSelect:"none"},[`${n}-selection-placeholder`]:{transition:"none",pointerEvents:"none"},[["&:after",`${n}-selection-item:after`,`${n}-selection-placeholder:after`].join(",")]:{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'}}),[`
        &${n}-show-arrow ${n}-selection-item,
        &${n}-show-arrow ${n}-selection-placeholder
      `]:{paddingInlineEnd:a},[`&${n}-open ${n}-selection-item`]:{color:t.colorTextPlaceholder},[`&:not(${n}-customize-input)`]:{[`${n}-selector`]:{width:"100%",height:t.controlHeight,padding:`0 ${i}px`,[`${n}-selection-search-input`]:{height:o},"&:after":{lineHeight:`${o}px`}}},[`&${n}-customize-input`]:{[`${n}-selector`]:{"&:after":{display:"none"},[`${n}-selection-search`]:{position:"static",width:"100%"},[`${n}-selection-placeholder`]:{position:"absolute",insetInlineStart:0,insetInlineEnd:0,padding:`0 ${i}px`,"&:after":{display:"none"}}}}}}}function vF(t){const{componentCls:e}=t,n=t.controlPaddingHorizontalSM-t.lineWidth;return[yc(t),yc(Mn(t,{controlHeight:t.controlHeightSM,borderRadius:t.borderRadiusSM}),"sm"),{[`${e}-single${e}-sm`]:{[`&:not(${e}-customize-input)`]:{[`${e}-selection-search`]:{insetInlineStart:n,insetInlineEnd:n},[`${e}-selector`]:{padding:`0 ${n}px`},[`&${e}-show-arrow ${e}-selection-search`]:{insetInlineEnd:n+t.fontSize*1.5},[`
            &${e}-show-arrow ${e}-selection-item,
            &${e}-show-arrow ${e}-selection-placeholder
          `]:{paddingInlineEnd:t.fontSize*1.5}}}},yc(Mn(t,{controlHeight:t.controlHeightLG,fontSize:t.fontSizeLG,borderRadius:t.borderRadiusLG}),"lg")]}function gF(t,e,n){const{focusElCls:i,focus:r,borderElCls:o}=n,a=o?"> *":"",s=["hover",r?"focus":null,"active"].filter(Boolean).map(l=>`&:${l} ${a}`).join(",");return{[`&-item:not(${e}-last-item)`]:{marginInlineEnd:-t.lineWidth},"&-item":N(N({[s]:{zIndex:2}},i?{[`&${i}`]:{zIndex:2}}:{}),{[`&[disabled] ${a}`]:{zIndex:0}})}}function _F(t,e,n){const{borderElCls:i}=n,r=i?`> ${i}`:"";return{[`&-item:not(${e}-first-item):not(${e}-last-item) ${r}`]:{borderRadius:0},[`&-item:not(${e}-last-item)${e}-first-item`]:{[`& ${r}, &${t}-sm ${r}, &${t}-lg ${r}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${e}-first-item)${e}-last-item`]:{[`& ${r}, &${t}-sm ${r}, &${t}-lg ${r}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function yF(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{focus:!0};const{componentCls:n}=t,i=`${n}-compact`;return{[i]:N(N({},gF(t,i,e)),_F(n,i,e))}}const xF=t=>{const{componentCls:e}=t;return{position:"relative",backgroundColor:t.colorBgContainer,border:`${t.lineWidth}px ${t.lineType} ${t.colorBorder}`,transition:`all ${t.motionDurationMid} ${t.motionEaseInOut}`,input:{cursor:"pointer"},[`${e}-show-search&`]:{cursor:"text",input:{cursor:"auto",color:"inherit"}},[`${e}-disabled&`]:{color:t.colorTextDisabled,background:t.colorBgContainerDisabled,cursor:"not-allowed",[`${e}-multiple&`]:{background:t.colorBgContainerDisabled},input:{cursor:"not-allowed"}}}},xc=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const{componentCls:i,borderHoverColor:r,outlineColor:o,antCls:a}=e,s=n?{[`${i}-selector`]:{borderColor:r}}:{};return{[t]:{[`&:not(${i}-disabled):not(${i}-customize-input):not(${a}-pagination-size-changer)`]:N(N({},s),{[`${i}-focused& ${i}-selector`]:{borderColor:r,boxShadow:`0 0 0 ${e.controlOutlineWidth}px ${o}`,borderInlineEndWidth:`${e.controlLineWidth}px !important`,outline:0},[`&:hover ${i}-selector`]:{borderColor:r,borderInlineEndWidth:`${e.controlLineWidth}px !important`}})}}},bF=t=>{const{componentCls:e}=t;return{[`${e}-selection-search-input`]:{margin:0,padding:0,background:"transparent",border:"none",outline:"none",appearance:"none","&::-webkit-search-cancel-button":{display:"none","-webkit-appearance":"none"}}}},SF=t=>{const{componentCls:e,inputPaddingHorizontalBase:n,iconCls:i}=t;return{[e]:N(N({},tr(t)),{position:"relative",display:"inline-block",cursor:"pointer",[`&:not(${e}-customize-input) ${e}-selector`]:N(N({},xF(t)),bF(t)),[`${e}-selection-item`]:N({flex:1,fontWeight:"normal"},Yc),[`${e}-selection-placeholder`]:N(N({},Yc),{flex:1,color:t.colorTextPlaceholder,pointerEvents:"none"}),[`${e}-arrow`]:N(N({},Av()),{position:"absolute",top:"50%",insetInlineStart:"auto",insetInlineEnd:n,height:t.fontSizeIcon,marginTop:-t.fontSizeIcon/2,color:t.colorTextQuaternary,fontSize:t.fontSizeIcon,lineHeight:1,textAlign:"center",pointerEvents:"none",display:"flex",alignItems:"center",[i]:{verticalAlign:"top",transition:`transform ${t.motionDurationSlow}`,"> svg":{verticalAlign:"top"},[`&:not(${e}-suffix)`]:{pointerEvents:"auto"}},[`${e}-disabled &`]:{cursor:"not-allowed"},"> *:not(:last-child)":{marginInlineEnd:8}}),[`${e}-clear`]:{position:"absolute",top:"50%",insetInlineStart:"auto",insetInlineEnd:n,zIndex:1,display:"inline-block",width:t.fontSizeIcon,height:t.fontSizeIcon,marginTop:-t.fontSizeIcon/2,color:t.colorTextQuaternary,fontSize:t.fontSizeIcon,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",background:t.colorBgContainer,cursor:"pointer",opacity:0,transition:`color ${t.motionDurationMid} ease, opacity ${t.motionDurationSlow} ease`,textRendering:"auto","&:before":{display:"block"},"&:hover":{color:t.colorTextTertiary}},"&:hover":{[`${e}-clear`]:{opacity:1}}}),[`${e}-has-feedback`]:{[`${e}-clear`]:{insetInlineEnd:n+t.fontSize+t.paddingXXS}}}},MF=t=>{const{componentCls:e}=t;return[{[e]:{[`&-borderless ${e}-selector`]:{backgroundColor:"transparent !important",borderColor:"transparent !important",boxShadow:"none !important"},[`&${e}-in-form-item`]:{width:"100%"}}},SF(t),vF(t),mF(t),pF(t),{[`${e}-rtl`]:{direction:"rtl"}},xc(e,Mn(t,{borderHoverColor:t.colorPrimaryHover,outlineColor:t.controlOutline})),xc(`${e}-status-error`,Mn(t,{borderHoverColor:t.colorErrorHover,outlineColor:t.colorErrorOutline}),!0),xc(`${e}-status-warning`,Mn(t,{borderHoverColor:t.colorWarningHover,outlineColor:t.colorWarningOutline}),!0),yF(t,{borderElCls:`${e}-selector`,focusElCls:`${e}-focused`})]},EF=la("Select",(t,e)=>{let{rootPrefixCls:n}=e;const i=Mn(t,{rootPrefixCls:n,inputPaddingHorizontalBase:t.paddingSM-1});return[MF(i)]},t=>({zIndexPopup:t.zIndexPopupBase+50})),wF=()=>N(N({},rl(Lg(),["inputIcon","mode","getInputElement","getRawInputElement","backfill"])),{value:kc([Array,Object,String,Number]),defaultValue:kc([Array,Object,String,Number]),notFoundContent:be.any,suffixIcon:be.any,itemIcon:be.any,size:xi(),mode:xi(),bordered:Yt(!0),transitionName:String,choiceTransitionName:xi(""),popupClassName:String,dropdownClassName:String,placement:xi(),status:xi(),"onUpdate:value":$r()}),Bp="SECRET_COMBOBOX_MODE_DO_NOT_USE",Un=ve({compatConfig:{MODE:3},name:"ASelect",Option:Ju,OptGroup:Qu,inheritAttrs:!1,props:Js(wF(),{listHeight:256,listItemHeight:24}),SECRET_COMBOBOX_MODE_DO_NOT_USE:Bp,slots:Object,setup(t,e){let{attrs:n,emit:i,slots:r,expose:o}=e;const a=Ce(),s=ld(),l=Vg.useInject(),c=V(()=>kN(l.status,t.status)),u=()=>{var ce;(ce=a.value)===null||ce===void 0||ce.focus()},d=()=>{var ce;(ce=a.value)===null||ce===void 0||ce.blur()},f=ce=>{var De;(De=a.value)===null||De===void 0||De.scrollTo(ce)},h=V(()=>{const{mode:ce}=t;if(ce!=="combobox")return ce===Bp?"combobox":ce}),{prefixCls:v,direction:g,configProvider:m,renderEmpty:p,size:b,getPrefixCls:y,getPopupContainer:_,disabled:T,select:w}=ur("select",t),{compactSize:M,compactItemClassnames:A}=YN(v,g),S=V(()=>M.value||b.value),x=Ou(),I=V(()=>{var ce;return(ce=T.value)!==null&&ce!==void 0?ce:x.value}),[$,L]=EF(v),B=V(()=>y()),D=V(()=>t.placement!==void 0?t.placement:g.value==="rtl"?"bottomRight":"bottomLeft"),W=V(()=>ED(B.value,SD(D.value),t.transitionName)),ie=V(()=>gt({[`${v.value}-lg`]:S.value==="large",[`${v.value}-sm`]:S.value==="small",[`${v.value}-rtl`]:g.value==="rtl",[`${v.value}-borderless`]:!t.bordered,[`${v.value}-in-form-item`]:l.isFormItemInput},zN(v.value,c.value,l.hasFeedback),A.value,L.value)),X=function(){for(var ce=arguments.length,De=new Array(ce),Z=0;Z<ce;Z++)De[Z]=arguments[Z];i("update:value",De[0]),i("change",...De),s.onFieldChange()},F=ce=>{i("blur",ce),s.onFieldBlur()};o({blur:d,focus:u,scrollTo:f});const ee=V(()=>h.value==="multiple"||h.value==="tags"),he=V(()=>t.showArrow!==void 0?t.showArrow:t.loading||!(ee.value||h.value==="combobox"));return()=>{var ce,De,Z,me;const{notFoundContent:Ee,listHeight:xe=256,listItemHeight:Xe=24,popupClassName:ae,dropdownClassName:P,virtual:te,dropdownMatchSelectWidth:U,id:j=s.id.value,placeholder:Y=(ce=r.placeholder)===null||ce===void 0?void 0:ce.call(r),showArrow:de}=t,{hasFeedback:oe,feedbackIcon:Me}=l;let we;Ee!==void 0?we=Ee:r.notFoundContent?we=r.notFoundContent():h.value==="combobox"?we=null:we=(p==null?void 0:p("Select"))||O(Dv,{componentName:"Select"},null);const{suffixIcon:R,itemIcon:E,removeIcon:K,clearIcon:le}=BN(N(N({},t),{multiple:ee.value,prefixCls:v.value,hasFeedback:oe,feedbackIcon:Me,showArrow:he.value}),r),ge=rl(t,["prefixCls","suffixIcon","itemIcon","removeIcon","clearIcon","size","bordered","status"]),pe=gt(ae||P,{[`${v.value}-dropdown-${g.value}`]:g.value==="rtl"},L.value);return $(O(X3,$e($e($e({ref:a,virtual:te,dropdownMatchSelectWidth:U},ge),n),{},{showSearch:(De=t.showSearch)!==null&&De!==void 0?De:(Z=w==null?void 0:w.value)===null||Z===void 0?void 0:Z.showSearch,placeholder:Y,listHeight:xe,listItemHeight:Xe,mode:h.value,prefixCls:v.value,direction:g.value,inputIcon:R,menuItemSelectedIcon:E,removeIcon:K,clearIcon:le,notFoundContent:we,class:[ie.value,n.class],getPopupContainer:_==null?void 0:_.value,dropdownClassName:pe,onChange:X,onBlur:F,id:j,dropdownRender:ge.dropdownRender||r.dropdownRender,transitionName:W.value,children:(me=r.default)===null||me===void 0?void 0:me.call(r),tagRender:t.tagRender||r.tagRender,optionLabelRender:r.optionLabel,maxTagPlaceholder:t.maxTagPlaceholder||r.maxTagPlaceholder,showArrow:oe||de,disabled:I.value}),{option:r.option}))}}});Un.install=function(t){return t.component(Un.name,Un),t.component(Un.Option.displayName,Un.Option),t.component(Un.OptGroup.displayName,Un.OptGroup),t};Un.Option;Un.OptGroup;var TF=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};const CF={prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:be.any,required:Boolean},AF=ve({compatConfig:{MODE:3},name:"Checkbox",inheritAttrs:!1,props:Js(CF,{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup(t,e){let{attrs:n,emit:i,expose:r}=e;const o=Ce(t.checked===void 0?t.defaultChecked:t.checked),a=Ce();Ye(()=>t.checked,()=>{o.value=t.checked}),r({focus(){var u;(u=a.value)===null||u===void 0||u.focus()},blur(){var u;(u=a.value)===null||u===void 0||u.blur()}});const s=Ce(),l=u=>{if(t.disabled)return;t.checked===void 0&&(o.value=u.target.checked),u.shiftKey=s.value;const d={target:N(N({},t),{checked:u.target.checked}),stopPropagation(){u.stopPropagation()},preventDefault(){u.preventDefault()},nativeEvent:u};t.checked!==void 0&&(a.value.checked=!!t.checked),i("change",d),s.value=!1},c=u=>{i("click",u),s.value=u.shiftKey};return()=>{const{prefixCls:u,name:d,id:f,type:h,disabled:v,readonly:g,tabindex:m,autofocus:p,value:b,required:y}=t,_=TF(t,["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"]),{class:T,onFocus:w,onBlur:M,onKeydown:A,onKeypress:S,onKeyup:x}=n,I=N(N({},_),n),$=Object.keys(I).reduce((D,W)=>((W.startsWith("data-")||W.startsWith("aria-")||W==="role")&&(D[W]=I[W]),D),{}),L=gt(u,T,{[`${u}-checked`]:o.value,[`${u}-disabled`]:v}),B=N(N({name:d,id:f,type:h,readonly:g,disabled:v,tabindex:m,class:`${u}-input`,checked:!!o.value,autofocus:p,value:b},$),{onChange:l,onClick:c,onFocus:w,onBlur:M,onKeydown:A,onKeypress:S,onKeyup:x,required:y});return O("span",{class:L},[O("input",$e({ref:a},B),null),O("span",{class:`${u}-inner`},null)])}}}),PF=new Vt("antCheckboxEffect",{"0%":{transform:"scale(1)",opacity:.5},"100%":{transform:"scale(1.6)",opacity:0}}),RF=t=>{const{checkboxCls:e}=t,n=`${e}-wrapper`;return[{[`${e}-group`]:N(N({},tr(t)),{display:"inline-flex",flexWrap:"wrap",columnGap:t.marginXS,[`> ${t.antCls}-row`]:{flex:1}}),[n]:N(N({},tr(t)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${n}`]:{marginInlineStart:0},[`&${n}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[e]:N(N({},tr(t)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",alignSelf:"center",[`${e}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${e}-inner`]:N({},m2(t))},[`${e}-inner`]:{boxSizing:"border-box",position:"relative",top:0,insetInlineStart:0,display:"block",width:t.checkboxSize,height:t.checkboxSize,direction:"ltr",backgroundColor:t.colorBgContainer,border:`${t.lineWidth}px ${t.lineType} ${t.colorBorder}`,borderRadius:t.borderRadiusSM,borderCollapse:"separate",transition:`all ${t.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:t.checkboxSize/14*5,height:t.checkboxSize/14*8,border:`${t.lineWidthBold}px solid ${t.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${t.motionDurationFast} ${t.motionEaseInBack}, opacity ${t.motionDurationFast}`}},"& + span":{paddingInlineStart:t.paddingXS,paddingInlineEnd:t.paddingXS}})},{[e]:{"&-indeterminate":{[`${e}-inner`]:{"&:after":{top:"50%",insetInlineStart:"50%",width:t.fontSizeLG/2,height:t.fontSizeLG/2,backgroundColor:t.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${n}:hover ${e}:after`]:{visibility:"visible"},[`
        ${n}:not(${n}-disabled),
        ${e}:not(${e}-disabled)
      `]:{[`&:hover ${e}-inner`]:{borderColor:t.colorPrimary}},[`${n}:not(${n}-disabled)`]:{[`&:hover ${e}-checked:not(${e}-disabled) ${e}-inner`]:{backgroundColor:t.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${e}-checked:not(${e}-disabled):after`]:{borderColor:t.colorPrimaryHover}}},{[`${e}-checked`]:{[`${e}-inner`]:{backgroundColor:t.colorPrimary,borderColor:t.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${t.motionDurationMid} ${t.motionEaseOutBack} ${t.motionDurationFast}`}},"&:after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderRadius:t.borderRadiusSM,visibility:"hidden",border:`${t.lineWidthBold}px solid ${t.colorPrimary}`,animationName:PF,animationDuration:t.motionDurationSlow,animationTimingFunction:"ease-in-out",animationFillMode:"backwards",content:'""',transition:`all ${t.motionDurationSlow}`}},[`
        ${n}-checked:not(${n}-disabled),
        ${e}-checked:not(${e}-disabled)
      `]:{[`&:hover ${e}-inner`]:{backgroundColor:t.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${e}:after`]:{borderColor:t.colorPrimaryHover}}},{[`${n}-disabled`]:{cursor:"not-allowed"},[`${e}-disabled`]:{[`&, ${e}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${e}-inner`]:{background:t.colorBgContainerDisabled,borderColor:t.colorBorder,"&:after":{borderColor:t.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:t.colorTextDisabled},[`&${e}-indeterminate ${e}-inner::after`]:{background:t.colorTextDisabled}}}]};function IF(t,e){const n=Mn(e,{checkboxCls:`.${t}`,checkboxSize:e.controlInteractiveSize});return[RF(n)]}const Kg=la("Checkbox",(t,e)=>{let{prefixCls:n}=e;return[IF(n,t)]}),LF=()=>({name:String,prefixCls:String,options:$o([]),disabled:Boolean,id:String}),OF=()=>N(N({},LF()),{defaultValue:$o(),value:$o(),onChange:$r(),"onUpdate:value":$r()}),DF=()=>({prefixCls:String,defaultChecked:Yt(),checked:Yt(),disabled:Yt(),isGroup:Yt(),value:be.any,name:String,id:String,indeterminate:Yt(),type:xi("checkbox"),autofocus:Yt(),onChange:$r(),"onUpdate:checked":$r(),onClick:$r(),skipGroup:Yt(!1)}),NF=()=>N(N({},DF()),{indeterminate:Yt(!1)}),Zg=Symbol("CheckboxGroupContext");var zp=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};const Wr=ve({compatConfig:{MODE:3},name:"ACheckbox",inheritAttrs:!1,__ANT_CHECKBOX:!0,props:NF(),setup(t,e){let{emit:n,attrs:i,slots:r,expose:o}=e;const a=ld(),s=Vg.useInject(),{prefixCls:l,direction:c,disabled:u}=ur("checkbox",t),d=Ou(),[f,h]=Kg(l),v=Tt(Zg,void 0),g=Symbol("checkboxUniId"),m=V(()=>(v==null?void 0:v.disabled.value)||u.value);en(()=>{!t.skipGroup&&v&&v.registerValue(g,t.value)}),Xn(()=>{v&&v.cancelValue(g)}),St(()=>{Nu(!!(t.checked!==void 0||v||t.value===void 0))});const p=T=>{const w=T.target.checked;n("update:checked",w),n("change",T),a.onFieldChange()},b=Ce();return o({focus:()=>{var T;(T=b.value)===null||T===void 0||T.focus()},blur:()=>{var T;(T=b.value)===null||T===void 0||T.blur()}}),()=>{var T;const w=mn((T=r.default)===null||T===void 0?void 0:T.call(r)),{indeterminate:M,skipGroup:A,id:S=a.id.value}=t,x=zp(t,["indeterminate","skipGroup","id"]),{onMouseenter:I,onMouseleave:$,onInput:L,class:B,style:D}=i,W=zp(i,["onMouseenter","onMouseleave","onInput","class","style"]),ie=N(N(N(N({},x),{id:S,prefixCls:l.value}),W),{disabled:m.value});v&&!A?(ie.onChange=function(){for(var he=arguments.length,ce=new Array(he),De=0;De<he;De++)ce[De]=arguments[De];n("change",...ce),v.toggleOption({label:w,value:t.value})},ie.name=v.name.value,ie.checked=v.mergedValue.value.includes(t.value),ie.disabled=m.value||d.value,ie.indeterminate=M):ie.onChange=p;const X=gt({[`${l.value}-wrapper`]:!0,[`${l.value}-rtl`]:c.value==="rtl",[`${l.value}-wrapper-checked`]:ie.checked,[`${l.value}-wrapper-disabled`]:ie.disabled,[`${l.value}-wrapper-in-form-item`]:s.isFormItemInput},B,h.value),F=gt({[`${l.value}-indeterminate`]:M},h.value);return f(O("label",{class:X,style:D,onMouseenter:I,onMouseleave:$},[O(AF,$e($e({"aria-checked":M?"mixed":void 0},ie),{},{class:F,ref:b}),null),w.length?O("span",null,[w]):null]))}}}),cu=ve({compatConfig:{MODE:3},name:"ACheckboxGroup",inheritAttrs:!1,props:OF(),setup(t,e){let{slots:n,attrs:i,emit:r,expose:o}=e;const a=ld(),{prefixCls:s,direction:l}=ur("checkbox",t),c=V(()=>`${s.value}-group`),[u,d]=Kg(c),f=Ce((t.value===void 0?t.defaultValue:t.value)||[]);Ye(()=>t.value,()=>{f.value=t.value||[]});const h=V(()=>t.options.map(_=>typeof _=="string"||typeof _=="number"?{label:_,value:_}:_)),v=Ce(Symbol()),g=Ce(new Map),m=_=>{g.value.delete(_),v.value=Symbol()},p=(_,T)=>{g.value.set(_,T),v.value=Symbol()},b=Ce(new Map);return Ye(v,()=>{const _=new Map;for(const T of g.value.values())_.set(T,!0);b.value=_}),gn(Zg,{cancelValue:m,registerValue:p,toggleOption:_=>{const T=f.value.indexOf(_.value),w=[...f.value];T===-1?w.push(_.value):w.splice(T,1),t.value===void 0&&(f.value=w);const M=w.filter(A=>b.value.has(A)).sort((A,S)=>{const x=h.value.findIndex($=>$.value===A),I=h.value.findIndex($=>$.value===S);return x-I});r("update:value",M),r("change",M),a.onFieldChange()},mergedValue:f,name:V(()=>t.name),disabled:V(()=>t.disabled)}),o({mergedValue:f}),()=>{var _;const{id:T=a.id.value}=t;let w=null;return h.value&&h.value.length>0&&(w=h.value.map(M=>{var A;return O(Wr,{prefixCls:s.value,key:M.value.toString(),disabled:"disabled"in M?M.disabled:t.disabled,indeterminate:M.indeterminate,value:M.value,checked:f.value.indexOf(M.value)!==-1,onChange:M.onChange,class:`${c.value}-item`},{default:()=>[n.label!==void 0?(A=n.label)===null||A===void 0?void 0:A.call(n,M):M.label]})})),u(O("div",$e($e({},i),{},{class:[c.value,{[`${c.value}-rtl`]:l.value==="rtl"},i.class,d.value],id:T}),[w||((_=n.default)===null||_===void 0?void 0:_.call(n))]))}}});Wr.Group=cu;Wr.install=function(t){return t.component(Wr.name,Wr),t.component(cu.name,cu),t};const FF=t=>{const{componentCls:e,sizePaddingEdgeHorizontal:n,colorSplit:i,lineWidth:r}=t;return{[e]:N(N({},tr(t)),{borderBlockStart:`${r}px solid ${i}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${t.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${r}px solid ${i}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${t.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${e}-with-text`]:{display:"flex",alignItems:"center",margin:`${t.dividerHorizontalWithTextGutterMargin}px 0`,color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${i}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${r}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${e}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${e}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${e}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:i,borderStyle:"dashed",borderWidth:`${r}px 0 0`},[`&-horizontal${e}-with-text${e}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${e}-dashed`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${e}-with-text`]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},[`&-horizontal${e}-with-text-left${e}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${e}-inner-text`]:{paddingInlineStart:n}},[`&-horizontal${e}-with-text-right${e}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${e}-inner-text`]:{paddingInlineEnd:n}}})}},UF=la("Divider",t=>{const e=Mn(t,{dividerVerticalGutterMargin:t.marginXS,dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG});return[FF(e)]},{sizePaddingEdgeHorizontal:0}),BF=()=>({prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"},plain:{type:Boolean,default:!1},orientationMargin:[String,Number]}),zF=ve({name:"ADivider",inheritAttrs:!1,compatConfig:{MODE:3},props:BF(),setup(t,e){let{slots:n,attrs:i}=e;const{prefixCls:r,direction:o}=ur("divider",t),[a,s]=UF(r),l=V(()=>t.orientation==="left"&&t.orientationMargin!=null),c=V(()=>t.orientation==="right"&&t.orientationMargin!=null),u=V(()=>{const{type:h,dashed:v,plain:g}=t,m=r.value;return{[m]:!0,[s.value]:!!s.value,[`${m}-${h}`]:!0,[`${m}-dashed`]:!!v,[`${m}-plain`]:!!g,[`${m}-rtl`]:o.value==="rtl",[`${m}-no-default-orientation-margin-left`]:l.value,[`${m}-no-default-orientation-margin-right`]:c.value}}),d=V(()=>{const h=typeof t.orientationMargin=="number"?`${t.orientationMargin}px`:t.orientationMargin;return N(N({},l.value&&{marginLeft:h}),c.value&&{marginRight:h})}),f=V(()=>t.orientation.length>0?"-"+t.orientation:t.orientation);return()=>{var h;const v=mn((h=n.default)===null||h===void 0?void 0:h.call(n));return a(O("div",$e($e({},i),{},{class:[u.value,v.length?`${r.value}-with-text ${r.value}-with-text${f.value}`:"",i.class],role:"separator"}),[v.length?O("span",{class:`${r.value}-inner-text`,style:d.value},[v]):null]))}}}),kF=Lu(zF),HF={style:{"padding-left":"11px"}},Jg=ve({name:"BqSelectAll",__name:"SelectAll",emits:["change"],setup(t,{emit:e}){const n=e,i=m0(),r=Ce(!1),o=Ce(!1),a=ve({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),s=(u,d)=>{n("change",u,d)},l=u=>{if(i["onUpdate:value"]||console.warn("v-model:value 不存在"),u.target.checked)if(i.options&&i.options.length>0){r.value=u.target.value;const d=i.options.map(f=>f.value);i["onUpdate:value"]&&i["onUpdate:value"](d),s(d,i.options)}else r.value=!1;else i["onUpdate:value"]&&i["onUpdate:value"]([]),r.value=u.target.value,s([],[])},c=()=>{var u,d;o.value=Array.isArray(i.value)&&!!i.value.length&&i.value.length!==((u=i.options)==null?void 0:u.length),r.value=Array.isArray(i.value)&&i.value.length===((d=i.options)==null?void 0:d.length)};return St(()=>{c()}),Ye(()=>i.value,()=>{c()},{deep:!0}),(u,d)=>(k(),qe(q(Un),Zi(u.$attrs,{mode:"multiple",onChange:s}),{dropdownRender:ye(({menuNode:f})=>[O(q(a),{vnodes:f},null,8,["vnodes"]),O(q(kF),{style:{margin:"4px 0"}}),fe("div",HF,[O(q(Wr),{indeterminate:q(o),checked:q(r),"onUpdate:checked":d[0]||(d[0]=h=>Vs(r)?r.value=h:null),onChange:l},null,8,["indeterminate","checked"]),vn(" 全选")])]),_:1},16))}}),VF=ve({name:"BqBasicsSelectAll",__name:"BasicsSelectAll",setup(t){const e=Ce([1,2]),n=[{label:"张三",value:1},{label:"李四",value:2},{label:"王五",value:3}];return(i,r)=>{const o=Jg;return k(),re("div",null,[O(o,{style:{width:"250px"},value:q(e),"onUpdate:value":r[0]||(r[0]=a=>Vs(e)?e.value=a:null),options:n},null,8,["value"])])}}}),$F=ve({name:"BqAntdSelectAll",__name:"AntdSelectAll",setup(t){const e=(r,o)=>o.label.toLowerCase().indexOf(r.toLowerCase())>=0,n=Ce([1,2]),i=[{label:"张三",value:1},{label:"李四",value:2},{label:"王五",value:3}];return(r,o)=>{const a=Jg;return k(),qe(a,{style:{width:"250px"},filterOption:e,value:q(n),"onUpdate:value":o[0]||(o[0]=s=>Vs(n)?n.value=s:null),options:i},null,8,["value"])}}}),GF=Ai(VF),WF=Ai($F),XF=ve({name:"NumberAnimate",__name:"NumberAnimate",props:{value:{default:0},math:{default:"ceil"},textMaxWidth:{default:"9.6px"}},setup(t){const e=Ce(["0"]),n=Ce(["0"]),i=Ce("20px"),r=t;Ye(()=>r.value,(d,f)=>{d!==f&&l(d)});const o=Ce([]);let a=null;const s=d=>{let f=d;switch(r.math){case"ceil":f=Math.ceil(d);break;case"floor":f=Math.floor(d);break;case"abs":f=Math.abs(d);break;case"none":f=d;break}return f},l=d=>{const f=s(d).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");for(n.value=e.value,e.value=Array.from(f);n.value.length<e.value.length;)n.value.unshift("0");const h=e.value.length-n.value.length;h<0&&n.value.splice(0,Math.abs(h)),o.value.forEach(v=>{v.style.transform="translateY(0)",v.style.transition="transform 0s ease-in-out"}),on(()=>{a&&clearTimeout(a),a=setTimeout(()=>{o.value.forEach((v,g)=>{const m=u(n.value[g],e.value[g]);m?(v.style.transform=m.transform,v.style.transition=m.transition):(v.style.transform="none",v.style.transition="none")})},50)})},c=(d,f)=>{if(isNaN(Number(f)))return[f];if(d===f)return[f];const h=[0,1,2,3,4,5,6,7,8,9];let v=[];return isNaN(Number(d))?v=h.filter(g=>g<=Number(f)):d>f?(v.push(...h.filter(g=>g>=Number(d))),v.push(...h.filter(g=>g<=Number(f)))):v.push(...h.filter(g=>g>=Number(d)&&g<=Number(f))),v},u=(d,f)=>{const h=c(d,f).length;return h===1?null:{transform:`translateY(-${(h-1)/h*100}%)`,transition:"transform 1s ease-in-out"}};return St(()=>{if(l(r.value),o.value.length>0){const d=window.getComputedStyle(o.value[0]);i.value=d.height}}),(d,f)=>(k(),re("div",{class:"bq-animate-number",style:Xr({height:q(i)}),ref:""},[(k(!0),re(ot,null,Bt(q(e),(h,v)=>(k(),re("div",{key:"num_"+v},[fe("div",{ref_for:!0,ref_key:"numDiv",ref:o,class:vt(["num-item",h===","?"comma":""])},[(k(!0),re(ot,null,Bt(c(q(n)[v],h),(g,m)=>(k(),re("div",{style:Xr({width:isNaN(g)?"":r.textMaxWidth}),key:"div_"+v+"_"+m,class:"num-line"},ht(g),5))),128))],2)]))),128))],4))}}),jF=Ge(XF,[["__scopeId","data-v-a66dd055"]]),qF={class:"container"},YF=ve({name:"BqNumberAnimate",__name:"BasicsNumberAnimate",setup(t){const e=Ce(5216731711211e-3);let n=0,i=0;const r=o=>{o&&o-i>=2e3&&(i=o,e.value+=1e3),n=requestAnimationFrame(r)};return St(()=>{r()}),Wn(()=>{cancelAnimationFrame(n)}),(o,a)=>{const s=jF;return k(),re("div",qF,[O(s,{value:q(e),textMaxWidth:"22.5px"},null,8,["value"])])}}}),KF=Ge(YF,[["__scopeId","data-v-73bade49"]]),ZF=Ai(KF),JF=t=>(It("data-v-21b6f5a6"),t=t(),Lt(),t),QF={class:"wrapper"},eU=JF(()=>fe("div",{class:"bg"},null,-1)),tU=Object.assign({name:"BqDocImage"},{__name:"BasicsDocImage",setup(t){let e=0;const n=Ce();return St(()=>{var F,ee,he;const i=(F=n.value)==null?void 0:F.clientWidth,r=(ee=n.value)==null?void 0:ee.clientHeight,o=new Fm,a=new bn(75,i/r,.001,1e3);a.position.set(0,0,4),a.lookAt(new H);const s=new Nm({antialias:!0,alpha:!0});s.setPixelRatio(2),s.setSize(i,r),(he=n.value)==null||he.appendChild(s.domElement);const l=new Cu(1,200,200),u=`
  uniform float uTime;

  varying vec3 vColor;
  varying vec3 vNormal;

  
//	Simplex 4D Noise
//	by Ian McEwan, Ashima Arts
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

vec4 grad4(float j, vec4 ip){
const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
vec4 p,s;

p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
s = vec4(lessThan(p, vec4(0.0)));
p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;

return p;
}

float snoise(vec4 v){
const vec2  C = vec2( 0.138196601125010504,  // (5 - sqrt(5))/20  G4
                      0.309016994374947451); // (sqrt(5) - 1)/4   F4
// First corner
vec4 i  = floor(v + dot(v, C.yyyy) );
vec4 x0 = v -   i + dot(i, C.xxxx);

// Other corners

// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)
vec4 i0;

vec3 isX = step( x0.yzw, x0.xxx );
vec3 isYZ = step( x0.zww, x0.yyz );
//  i0.x = dot( isX, vec3( 1.0 ) );
i0.x = isX.x + isX.y + isX.z;
i0.yzw = 1.0 - isX;

//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );
i0.y += isYZ.x + isYZ.y;
i0.zw += 1.0 - isYZ.xy;

i0.z += isYZ.z;
i0.w += 1.0 - isYZ.z;

// i0 now contains the unique values 0,1,2,3 in each channel
vec4 i3 = clamp( i0, 0.0, 1.0 );
vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

//  x0 = x0 - 0.0 + 0.0 * C
vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

// Permutations
i = mod(i, 289.0);
float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
vec4 j1 = permute( permute( permute( permute (
            i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
          + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
          + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
          + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));
// Gradients
// ( 7*7*6 points uniformly over a cube, mapped onto a 4-octahedron.)
// 7*7*6 = 294, which is close to the ring size 17*17 = 289.

vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

vec4 p0 = grad4(j0,   ip);
vec4 p1 = grad4(j1.x, ip);
vec4 p2 = grad4(j1.y, ip);
vec4 p3 = grad4(j1.z, ip);
vec4 p4 = grad4(j1.w, ip);

// Normalise gradients
vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
p0 *= norm.x;
p1 *= norm.y;
p2 *= norm.z;
p3 *= norm.w;
p4 *= taylorInvSqrt(dot(p4,p4));

// Mix contributions from the five corners
vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
m0 = m0 * m0;
m1 = m1 * m1;
return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
              + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;
}


  // https://gist.github.com/983/e170a24ae8eba2cd174f
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

  void main() {
    vNormal = normal;

    // float noise = snoise(vec4(position * 10.0, 0.0));
    float noise = snoise(vec4(position * 10.0, uTime * 0.2));

    // vColor = vec3(noise);
    // vColor = vec3(noise, 0.0, 0.0);
    // vColor = hsv2rgb(vec3(noise, 1.0, 1.0));
    // vColor = hsv2rgb(vec3(noise * 0.1, 1.0, 1.0));
    vColor = hsv2rgb(vec3(noise * 0.1 + 0.04, 0.8, 1.0));

    vec3 newPos = position + 0.8 * normal * noise;

    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
  }
`,d=`
varying vec3 vColor;
varying vec3 vNormal;

void main() {
  gl_FragColor = vec4(vec3(1.0), 1.0);
  gl_FragColor = vec4(vNormal, 1.0);
  gl_FragColor = vec4(vColor, 1.0);
}
`,f=new Ln({vertexShader:u,fragmentShader:d,uniforms:{uTime:{value:0}}}),h=new In(l,f);o.add(h);const v=`
  uniform float uTime;

  void main() {
    vec3 newPos = position;
    newPos.y += 0.1 * sin(newPos.y * 6.0 + uTime);
    newPos.z += 0.05 * sin(newPos.y * 10.0 + uTime);
    vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
    gl_PointSize = 6.0 / -mvPosition.z; // 3.5 6.0
    gl_Position = projectionMatrix * mvPosition;
  }
`,g=`
  void main() {
    gl_FragColor = vec4(vec3(1.0), 0.6);
  }
`,m=new ln,p=1e4,b=new Float32Array(p*3),y=Math.PI*(3-Math.sqrt(5)),_=2/p,T=2;for(let ce=0;ce<p;ce++){const De=ce*_-1+_/2,Z=Math.sqrt(1-De*De),me=ce*y;b[3*ce]=T*Math.cos(me)*Z,b[3*ce+1]=T*De,b[3*ce+2]=T*Math.sin(me)*Z}m.setAttribute("position",new pn(b,3));const w=new Ln({vertexShader:v,fragmentShader:g,uniforms:{uTime:{value:0}},transparent:!0,blending:_s}),M=new kf(m,w);o.add(M);const A=new ln,S=500,x=new Float32Array(S*3),I=new Float32Array(S);for(let ce=0;ce<S;ce++){const De=Math.random()*5+5;x[ce*3+0]=(Math.random()-.5)*De,x[ce*3+1]=(Math.random()-.5)*De,x[ce*3+2]=(Math.random()-.5)*De,I[ce]=Math.random()+.4}A.setAttribute("position",new pn(x,3)),A.setAttribute("aSize",new pn(I,1));const $=`
  uniform float uTime;
  attribute float aSize;

  void main() {
      vec3 newPos = position;
      newPos.y += sin(uTime * 0.5 + newPos.x * 100.0) * aSize * 0.2;
      newPos.x += sin(uTime * 0.5 + newPos.x * 200.0) * aSize * 0.1;
      vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
      gl_PointSize = 40.0 * aSize / -mvPosition.z; // 70 30 50
      gl_Position = projectionMatrix * mvPosition;
  }
`,L=`
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    float strength = clamp(0.05 / d - 0.05 * 2.0, 0.0, 1.0);
    gl_FragColor = vec4(vec3(1.0), strength);
}
`,B=new Ln({uniforms:{uTime:{value:0}},vertexShader:$,fragmentShader:L,transparent:!0,blending:_s,depthWrite:!1}),D=new kf(A,B);o.add(D);const W=new IA;function ie(){const ce=W.getElapsedTime();f.uniforms.uTime.value=ce,w.uniforms.uTime.value=ce,M.rotation.y=ce*.1,B.uniforms.uTime.value=ce,s.render(o,a),e=requestAnimationFrame(ie)}ie();function X(){var Z,me;const ce=(Z=n.value)==null?void 0:Z.clientWidth,De=(me=n.value)==null?void 0:me.clientHeight;s.setSize(ce,De),a.aspect=ce/De,a.updateProjectionMatrix()}window.addEventListener("resize",X)}),Wn(()=>{cancelAnimationFrame(e)}),(i,r)=>(k(),re("div",QF,[eU,fe("div",{class:"container",ref_key:"domRef",ref:n},null,512)]))}}),nU=Ge(tU,[["__scopeId","data-v-21b6f5a6"]]),Qg=Ai(nU),kp=Object.freeze(Object.defineProperty({__proto__:null,BqAntdSelectAll:WF,BqBasicsButton:OS,BqBasicsDocsImage:Qg,BqBasicsNumberAnimate:ZF,BqBasicsPie:GA,BqBasicsScaleBox:JA,BqBasicsSelectAll:GF,BqSlotPie:WA},Symbol.toStringTag,{value:"Module"})),iU={mounted(t,e){const n=r=>{e.value(r)},i=new Au(n);i.observe(t),t._observer=i},unmounted(t){t._observer.disconnect(),t._observer=null,delete t._observer}},oU={...hd,Layout(){return Uo(hd.Layout,null,{"home-hero-image":()=>Uo(Qg)})},enhanceApp({app:t}){t.directive("domResize",iU);for(let e in kp)t.use(kp[e])}};export{oU as R};
