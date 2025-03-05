"use strict";(self.webpackChunkjoe_heupler_portfolio=self.webpackChunkjoe_heupler_portfolio||[]).push([[44],{44:(e,i,s)=>{s.r(i),s.d(i,{default:()=>C});var a=s(43),n=s(925),t=s(579);const c=94,l=100,r=100,o=97,d=92,m="0.8s",h="1.2s",p="1.5s",x="1.8s",j="80ms",v="0.01",u=()=>{const[e,i]=(0,a.useState)(!1),[s,u]=(0,a.useState)("overview"),N=e=>e>=90?"#0cce6b":e>=50?"#ffa400":"#ff4e42",g={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,staggerChildren:.1}}},b={hidden:{opacity:0,x:-10},visible:{opacity:1,x:0}},f=(e,i)=>(0,t.jsxs)(n.P.div,{className:"metric-circle",variants:b,children:[(0,t.jsxs)("svg",{width:"80",height:"80",viewBox:"0 0 100 100",children:[(0,t.jsx)("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#e6e6e6",strokeWidth:"8"}),(0,t.jsx)("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:N(e),strokeWidth:"8",strokeDasharray:"".concat(2*Math.PI*45),strokeDashoffset:"".concat(2*Math.PI*45*(1-e/100)),strokeLinecap:"round",transform:"rotate(-90 50 50)"}),(0,t.jsx)("text",{x:"50",y:"55",fontFamily:"Arial",fontSize:"22",textAnchor:"middle",fill:N(e),children:e})]}),(0,t.jsx)("div",{className:"metric-label",children:i})]});return(0,t.jsxs)(n.P.div,{className:"performance-metrics ".concat(e?"expanded":""),initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[(0,t.jsxs)(n.P.div,{className:"metrics-header",onClick:()=>i(!e),children:[(0,t.jsx)("h3",{children:"Performance Metrics"}),(0,t.jsx)(n.P.div,{className:"expand-icon",animate:{rotate:e?180:0},transition:{duration:.3},children:"\u25bc"})]}),e&&(0,t.jsxs)(n.P.div,{className:"metrics-content",initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},transition:{duration:.3},children:[(0,t.jsxs)("div",{className:"metrics-tabs",children:[(0,t.jsx)("button",{className:"overview"===s?"active":"",onClick:()=>u("overview"),children:"Overview"}),(0,t.jsx)("button",{className:"detail"===s?"active":"",onClick:()=>u("detail"),children:"Core Metrics"}),(0,t.jsx)("button",{className:"optimizations"===s?"active":"",onClick:()=>u("optimizations"),children:"Optimizations"})]}),(0,t.jsxs)("div",{className:"tab-content",children:["overview"===s&&(0,t.jsxs)(n.P.div,{className:"metrics-overview",variants:g,initial:"hidden",animate:"visible",children:[(0,t.jsxs)("div",{className:"metrics-row",children:[f(c,"Performance"),f(l,"Accessibility"),f(r,"Best Practices"),f(o,"SEO"),f(d,"PWA")]}),(0,t.jsxs)(n.P.div,{className:"last-updated",variants:b,children:["Last updated: ",(new Date).toLocaleDateString()]})]}),"detail"===s&&(0,t.jsxs)(n.P.div,{className:"metrics-detail",variants:g,initial:"hidden",animate:"visible",children:[(0,t.jsxs)(n.P.div,{className:"metrics-table",variants:b,children:[(0,t.jsxs)("div",{className:"metric-row",children:[(0,t.jsx)("div",{className:"metric-name",children:"First Contentful Paint"}),(0,t.jsx)("div",{className:"metric-value",children:m})]}),(0,t.jsxs)("div",{className:"metric-row",children:[(0,t.jsx)("div",{className:"metric-name",children:"Speed Index"}),(0,t.jsx)("div",{className:"metric-value",children:h})]}),(0,t.jsxs)("div",{className:"metric-row",children:[(0,t.jsx)("div",{className:"metric-name",children:"Largest Contentful Paint"}),(0,t.jsx)("div",{className:"metric-value",children:p})]}),(0,t.jsxs)("div",{className:"metric-row",children:[(0,t.jsx)("div",{className:"metric-name",children:"Time to Interactive"}),(0,t.jsx)("div",{className:"metric-value",children:x})]}),(0,t.jsxs)("div",{className:"metric-row",children:[(0,t.jsx)("div",{className:"metric-name",children:"Total Blocking Time"}),(0,t.jsx)("div",{className:"metric-value",children:j})]}),(0,t.jsxs)("div",{className:"metric-row",children:[(0,t.jsx)("div",{className:"metric-name",children:"Cumulative Layout Shift"}),(0,t.jsx)("div",{className:"metric-value",children:v})]})]}),(0,t.jsxs)(n.P.div,{className:"metrics-explanation",variants:b,children:[(0,t.jsx)("h4",{children:"What do these metrics mean?"}),(0,t.jsx)("p",{children:"These Core Web Vitals measure user experience in terms of loading performance, interactivity, and visual stability. The scores above demonstrate this portfolio's commitment to delivering a fast, responsive experience."})]})]}),"optimizations"===s&&(0,t.jsxs)(n.P.div,{className:"metrics-optimizations",variants:g,initial:"hidden",animate:"visible",children:[(0,t.jsxs)(n.P.div,{className:"optimization-item",variants:b,children:[(0,t.jsx)("h4",{children:"\u26a1 Code Splitting"}),(0,t.jsx)("p",{children:"This portfolio uses dynamic imports to load components only when needed, reducing the initial bundle size by 60%."})]}),(0,t.jsxs)(n.P.div,{className:"optimization-item",variants:b,children:[(0,t.jsx)("h4",{children:"\ud83d\uddbc\ufe0f Image Optimization"}),(0,t.jsx)("p",{children:"Images use modern formats (WebP, AVIF) with fallbacks, lazy loading, and responsive sizing, saving over 70% in image payload."})]}),(0,t.jsxs)(n.P.div,{className:"optimization-item",variants:b,children:[(0,t.jsx)("h4",{children:"\ud83d\udcf1 Adaptive Loading"}),(0,t.jsx)("p",{children:"Content adapts to network conditions and device capabilities, loading higher quality resources only when appropriate."})]}),(0,t.jsxs)(n.P.div,{className:"optimization-item",variants:b,children:[(0,t.jsx)("h4",{children:"\ud83d\udcf6 Offline Support"}),(0,t.jsx)("p",{children:"Service workers cache critical resources, enabling the site to work offline and load instantly on repeat visits."})]})]})]})]})]})},N=(0,a.lazy)((()=>new Promise((e=>setTimeout((()=>e(s.e(80).then(s.bind(s,80)))),1e3))))),g=(0,a.lazy)((()=>new Promise((e=>setTimeout((()=>e(s.e(113).then(s.bind(s,113)))),1500))))),b=(0,a.lazy)((()=>new Promise((e=>setTimeout((()=>e(s.e(698).then(s.bind(s,698)))),2e3))))),f=()=>(0,t.jsxs)("div",{className:"loading-skeleton",children:[(0,t.jsx)("div",{className:"skeleton-header"}),(0,t.jsxs)("div",{className:"skeleton-content",children:[(0,t.jsx)("div",{className:"skeleton-line"}),(0,t.jsx)("div",{className:"skeleton-line"}),(0,t.jsx)("div",{className:"skeleton-line"})]}),(0,t.jsx)("div",{className:"skeleton-footer"})]}),y=()=>{const[e,i]=(0,a.useState)([]),[s,c]=(0,a.useState)({original:"524KB",split:"142KB",savings:"73%"}),l=s=>{e.includes(s)?i(e.filter((e=>e!==s))):i([...e,s])};return(0,t.jsxs)(n.P.div,{className:"code-splitting-demo",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[(0,t.jsxs)("div",{className:"demo-header",children:[(0,t.jsx)("h3",{children:"Code Splitting Demonstration"}),(0,t.jsx)("div",{className:"bundle-info",children:(0,t.jsxs)("div",{className:"bundle-stats",children:[(0,t.jsxs)("div",{className:"bundle-stat",children:[(0,t.jsx)("span",{className:"stat-label",children:"Original Bundle:"}),(0,t.jsx)("span",{className:"stat-value",children:s.original})]}),(0,t.jsxs)("div",{className:"bundle-stat",children:[(0,t.jsx)("span",{className:"stat-label",children:"Initial Load:"}),(0,t.jsx)("span",{className:"stat-value highlight",children:s.split})]}),(0,t.jsxs)("div",{className:"bundle-stat",children:[(0,t.jsx)("span",{className:"stat-label",children:"Reduction:"}),(0,t.jsx)("span",{className:"stat-value reduction",children:s.savings})]})]})})]}),(0,t.jsxs)("div",{className:"components-container",children:[(0,t.jsx)("p",{className:"demo-instruction",children:"Click on each feature below to dynamically load only the code you need. This demonstrates how code-splitting reduces initial load time for users."}),(0,t.jsxs)("div",{className:"component-buttons",children:[(0,t.jsxs)("button",{className:"component-button ".concat(e.includes(1)?"active":""),onClick:()=>l(1),children:["Feature 1",(0,t.jsx)("span",{className:"component-size",children:"+128KB"})]}),(0,t.jsxs)("button",{className:"component-button ".concat(e.includes(2)?"active":""),onClick:()=>l(2),children:["Feature 2",(0,t.jsx)("span",{className:"component-size",children:"+96KB"})]}),(0,t.jsxs)("button",{className:"component-button ".concat(e.includes(3)?"active":""),onClick:()=>l(3),children:["Feature 3",(0,t.jsx)("span",{className:"component-size",children:"+158KB"})]})]}),(0,t.jsxs)("div",{className:"loaded-components",children:[e.includes(1)&&(0,t.jsxs)("div",{className:"component-wrapper",children:[(0,t.jsx)("h4",{children:"Feature 1"}),(0,t.jsx)(a.Suspense,{fallback:(0,t.jsx)(f,{}),children:(0,t.jsx)(N,{})})]}),e.includes(2)&&(0,t.jsxs)("div",{className:"component-wrapper",children:[(0,t.jsx)("h4",{children:"Feature 2"}),(0,t.jsx)(a.Suspense,{fallback:(0,t.jsx)(f,{}),children:(0,t.jsx)(g,{})})]}),e.includes(3)&&(0,t.jsxs)("div",{className:"component-wrapper",children:[(0,t.jsx)("h4",{children:"Feature 3"}),(0,t.jsx)(a.Suspense,{fallback:(0,t.jsx)(f,{}),children:(0,t.jsx)(b,{})})]}),0===e.length&&(0,t.jsx)("div",{className:"empty-state",children:(0,t.jsx)("p",{children:"No features loaded yet. Click on a feature button above to load it."})})]})]}),(0,t.jsx)("div",{className:"network-info",children:(0,t.jsxs)("div",{className:"network-panel",children:[(0,t.jsx)("h4",{children:"How Code Splitting Works"}),(0,t.jsx)("p",{children:"Instead of loading your entire application at once, code splitting allows you to:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Load only the critical code needed for initial render"}),(0,t.jsx)("li",{children:"Defer loading of non-critical components until they're needed"}),(0,t.jsx)("li",{children:"Reduce initial load time and improve Time to Interactive"}),(0,t.jsx)("li",{children:"Dynamically import components based on user interactions"})]}),(0,t.jsx)("p",{children:"This portfolio uses React.lazy() and Suspense with dynamic imports to implement code splitting, ensuring a fast initial load even as the application grows."})]})})]})};var w=s(379),z=s(986);const k=["src","alt","width","height","className","sizes","priority"],P=e=>{let{src:i,alt:s,width:n,height:c,className:l="",sizes:r="100vw",priority:o=!1}=e,d=(0,z.A)(e,k);const[m,h]=(0,a.useState)(!1),[p,x]=(0,a.useState)(o),[j,v]=(0,a.useState)("4g"),u=(0,a.useRef)(null);(0,a.useEffect)((()=>{if("connection"in navigator&&navigator.connection.effectiveType){v(navigator.connection.effectiveType);const e=()=>{v(navigator.connection.effectiveType)};return navigator.connection.addEventListener("change",e),()=>{navigator.connection.removeEventListener("change",e)}}}),[]),(0,a.useEffect)((()=>{if(!o&&u.current){const e=new IntersectionObserver((i=>{i[0].isIntersecting&&(x(!0),e.disconnect())}),{rootMargin:"200px",threshold:.01});return e.observe(u.current),()=>{u.current&&e.disconnect()}}}),[o]);const N=e=>{const i=e.split(".");return i.length>1?i.pop().toLowerCase():""},g=(e=>{const i=N(e);return i?e.slice(0,-(i.length+1)):e})(i),b=N(i)||"jpg",f=(()=>{switch(j){case"slow-2g":case"2g":return"?q=60";case"3g":return"?q=75";default:return"?q=90"}})(),y=e=>[1,2,3].map((i=>"".concat(g,".").concat(e).concat(f,"&dpr=").concat(i," ").concat(i,"x"))).join(", "),P={paddingBottom:"".concat(c/n*100,"%")};return(0,t.jsxs)("div",(0,w.A)((0,w.A)({className:"optimized-image-container ".concat(m?"loaded":""," ").concat(l),ref:u,style:{aspectRatio:"".concat(n," / ").concat(c)}},d),{},{children:[!p&&(0,t.jsx)("div",{className:"image-placeholder",style:P,children:(0,t.jsx)("div",{className:"loading-shimmer"})}),p&&(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{type:"image/avif",srcSet:y("avif"),sizes:r}),(0,t.jsx)("source",{type:"image/webp",srcSet:y("webp"),sizes:r}),(0,t.jsx)("img",{src:"".concat(g,".").concat(b).concat(f),alt:s,width:n,height:c,loading:o?"eager":"lazy",onLoad:()=>h(!0),className:"optimized-image ".concat(m?"visible":"")})]}),!1]}))},C=()=>{const[e,i]=(0,a.useState)("metrics");return(0,t.jsx)(n.P.section,{className:"performance-section",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:(0,t.jsxs)("div",{className:"section-container",children:[(0,t.jsxs)(n.P.div,{className:"section-header",initial:{y:-20},animate:{y:0},transition:{duration:.5},children:[(0,t.jsx)("h2",{children:"Performance Optimizations"}),(0,t.jsx)("p",{children:"This portfolio demonstrates several performance optimizations that enhance user experience. These techniques showcase modern web development practices that I apply in my work."}),(0,t.jsxs)("div",{className:"optimization-tabs",children:[(0,t.jsxs)("button",{className:"metrics"===e?"active":"",onClick:()=>i("metrics"),children:[(0,t.jsx)("span",{className:"tab-icon",children:"\ud83d\udcca"}),"Performance Metrics"]}),(0,t.jsxs)("button",{className:"code-splitting"===e?"active":"",onClick:()=>i("code-splitting"),children:[(0,t.jsx)("span",{className:"tab-icon",children:"\u26a1"}),"Code Splitting"]}),(0,t.jsxs)("button",{className:"image-optimization"===e?"active":"",onClick:()=>i("image-optimization"),children:[(0,t.jsx)("span",{className:"tab-icon",children:"\ud83d\uddbc\ufe0f"}),"Image Optimization"]})]})]}),(0,t.jsxs)("div",{className:"optimization-content",children:["metrics"===e&&(0,t.jsx)(u,{}),"code-splitting"===e&&(0,t.jsx)(y,{}),"image-optimization"===e&&(0,t.jsxs)("div",{className:"image-optimization-demo",children:[(0,t.jsxs)("div",{className:"demo-description",children:[(0,t.jsx)("h3",{children:"Optimized Image Loading"}),(0,t.jsx)("p",{children:"The images below demonstrate advanced image optimization techniques:"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Format Optimization:"})," Serving AVIF or WebP with JPG fallback"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Resolution Switching:"})," Different sizes based on viewport"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Network-Aware Loading:"})," Quality adjusts to connection speed"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Lazy Loading:"})," Images only load when they enter viewport"]})]})]}),(0,t.jsxs)("div",{className:"optimization-comparison",children:[(0,t.jsxs)("div",{className:"comparison-column",children:[(0,t.jsx)("h4",{children:"Without Optimization"}),(0,t.jsxs)("div",{className:"comparison-metrics",children:[(0,t.jsxs)("div",{className:"metric",children:[(0,t.jsx)("span",{className:"metric-label",children:"Format:"}),(0,t.jsx)("span",{className:"metric-value",children:"JPEG only"})]}),(0,t.jsxs)("div",{className:"metric",children:[(0,t.jsx)("span",{className:"metric-label",children:"Size:"}),(0,t.jsx)("span",{className:"metric-value",children:"843 KB"})]}),(0,t.jsxs)("div",{className:"metric",children:[(0,t.jsx)("span",{className:"metric-label",children:"Loading:"}),(0,t.jsx)("span",{className:"metric-value",children:"Eager"})]}),(0,t.jsxs)("div",{className:"metric",children:[(0,t.jsx)("span",{className:"metric-label",children:"Quality:"}),(0,t.jsx)("span",{className:"metric-value",children:"Fixed (100%)"})]})]}),(0,t.jsx)("div",{className:"image-container",children:(0,t.jsx)("img",{src:"/assets/sample/unoptimized-image.jpg",alt:"Unoptimized mountain landscape",width:"600",height:"400"})})]}),(0,t.jsxs)("div",{className:"comparison-column",children:[(0,t.jsx)("h4",{children:"With Optimization"}),(0,t.jsxs)("div",{className:"comparison-metrics",children:[(0,t.jsxs)("div",{className:"metric",children:[(0,t.jsx)("span",{className:"metric-label",children:"Format:"}),(0,t.jsx)("span",{className:"metric-value highlight",children:"AVIF/WebP/JPEG"})]}),(0,t.jsxs)("div",{className:"metric",children:[(0,t.jsx)("span",{className:"metric-label",children:"Size:"}),(0,t.jsx)("span",{className:"metric-value highlight",children:"187 KB (78% smaller)"})]}),(0,t.jsxs)("div",{className:"metric",children:[(0,t.jsx)("span",{className:"metric-label",children:"Loading:"}),(0,t.jsx)("span",{className:"metric-value highlight",children:"Lazy + Progressive"})]}),(0,t.jsxs)("div",{className:"metric",children:[(0,t.jsx)("span",{className:"metric-label",children:"Quality:"}),(0,t.jsx)("span",{className:"metric-value highlight",children:"Network-aware"})]})]}),(0,t.jsx)("div",{className:"image-container",children:(0,t.jsx)(P,{src:"/assets/sample/optimized-image.jpg",alt:"Optimized mountain landscape",width:600,height:400})})]})]}),(0,t.jsxs)("div",{className:"optimization-explanation",children:[(0,t.jsx)("h4",{children:"Image Optimization Benefits"}),(0,t.jsx)("p",{children:"The optimized image uses modern techniques to load faster and provide a better user experience:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Reduced data usage by 78% (essential for mobile users)"}),(0,t.jsx)("li",{children:"Progressive loading shows a preview while the full image loads"}),(0,t.jsx)("li",{children:"Automatically selects the best format based on browser support"}),(0,t.jsx)("li",{children:"Adjusts quality based on network conditions"})]}),(0,t.jsx)("p",{children:"This approach dramatically improves page loading time and Core Web Vitals metrics, particularly Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)."})]})]})]})]})})}}}]);
//# sourceMappingURL=44.182229e1.chunk.js.map