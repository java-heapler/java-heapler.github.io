"use strict";(self.webpackChunkjoe_heupler_portfolio=self.webpackChunkjoe_heupler_portfolio||[]).push([[792],{902:(e,t,n)=>{n.d(t,{D:()=>s,N:()=>a});var o=n(43),i=n(579);const r=(0,o.createContext)(),a=e=>{let{children:t}=e;const[n,a]=(0,o.useState)((()=>"dark"===localStorage.getItem("theme")));(0,o.useEffect)((()=>{document.documentElement.setAttribute("data-theme",n?"dark":"light"),localStorage.setItem("theme",n?"dark":"light")}),[n]);return(0,i.jsx)(r.Provider,{value:{isDark:n,toggleTheme:()=>{a(!n)}},children:t})},s=()=>{const e=(0,o.useContext)(r);if(void 0===e)throw new Error("useTheme must be used within a ThemeProvider");return e}},434:(e,t,n)=>{var o=n(43),i=n(391),r=n(379),a=n(580),s=n(902),c=n(367);var l=n(662),d=n(579);const h=()=>{const[e,t]=(0,o.useState)(!1),[n,i]=(0,o.useState)(!1),r=(0,a.Zp)(),s=(0,a.zy)();(0,o.useEffect)((()=>{const e=e=>{const t=e.target.closest('a[href^="#"]');if(!t)return;e.preventDefault();const n=t.getAttribute("href").slice(1),o=document.getElementById(n);if(o){var i;const e=(null===(i=document.querySelector(".navigation"))||void 0===i?void 0:i.offsetHeight)||0,t=o.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:t,behavior:"smooth"})}},t=e=>{window.touchStartY=e.touches[0].pageY},n=e=>{const t=e.changedTouches[0].pageY,n=window.touchStartY-t;Math.abs(n)>50&&e.preventDefault()};return document.addEventListener("click",e),document.addEventListener("touchstart",t,{passive:!0}),document.addEventListener("touchend",n,{passive:!1}),()=>{document.removeEventListener("click",e),document.removeEventListener("touchstart",t),document.removeEventListener("touchend",n)}}),[]),(0,o.useEffect)((()=>{let e=!1;const n=()=>{e||(window.requestAnimationFrame((()=>{t(window.scrollY>50),e=!1})),e=!0)};return window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)}),[]);const c=(e,t)=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t())},h=()=>{i(!n),document.body.style.overflow=n?"":"hidden"},p=e=>{if("/"!==s.pathname)r("/"),setTimeout((()=>{const t=document.getElementById(e);if(t){var n;const e=(null===(n=document.querySelector(".navigation"))||void 0===n?void 0:n.offsetHeight)||0,o=t.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:o,behavior:"smooth"})}}),100);else{const n=document.getElementById(e);if(n){var t;const e=(null===(t=document.querySelector(".navigation"))||void 0===t?void 0:t.offsetHeight)||0,o=n.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:o,behavior:"smooth"})}}i(!1),document.body.style.overflow=""};return(0,d.jsx)("nav",{className:"navigation ".concat(e?"scrolled":""," ").concat(n?"open":""),role:"navigation","aria-label":"Main navigation",children:(0,d.jsxs)("div",{className:"nav-container",children:[(0,d.jsx)("a",{href:"#top",className:"logo",onClick:e=>{e.preventDefault(),"/"!==s.pathname?r("/"):window.scrollTo({top:0,behavior:"smooth"})},"aria-label":"Back to top",children:"JH"}),(0,d.jsx)("button",{className:"menu-toggle",onClick:h,onKeyPress:e=>c(e,h),"aria-expanded":n,"aria-label":n?"Close menu":"Open menu",children:(0,d.jsx)("span",{className:"menu-icon"})}),(0,d.jsxs)("div",{className:"nav-links ".concat(n?"active":""),role:"menubar",onClick:e=>{e.target===e.currentTarget&&(i(!1),document.body.style.overflow="")},children:[["about","projects","contact"].map((e=>(0,d.jsx)("a",{href:"#".concat(e),onClick:t=>{t.preventDefault(),p(e)},role:"menuitem",tabIndex:0,onKeyPress:t=>c(t,(()=>p(e))),"aria-label":"Navigate to ".concat(e," section"),children:e.charAt(0).toUpperCase()+e.slice(1)},e))),(0,d.jsx)("a",{href:"".concat("","/assets/resume/softwareEngineeringResume.pdf"),className:"resume-button",target:"_blank",rel:"noopener noreferrer",onClick:()=>{(0,l.$s)("Navigation","Clicked Resume","Header Resume Button")},role:"menuitem","aria-label":"Open Resume PDF in new tab",children:"Resume"})]})]})})},p=()=>(0,d.jsxs)("div",{className:"privacy-container",children:[(0,d.jsx)("h1",{children:"Privacy Policy"}),(0,d.jsxs)("div",{className:"privacy-content",children:[(0,d.jsxs)("section",{children:[(0,d.jsx)("h2",{children:"Introduction"}),(0,d.jsx)("p",{children:"This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website. We are committed to ensuring your privacy and protecting any personal information you share with us."})]}),(0,d.jsxs)("section",{children:[(0,d.jsx)("h2",{children:"Information We Collect"}),(0,d.jsx)("p",{children:"We collect information that you voluntarily provide to us, such as when you contact us through our website. We also automatically collect certain information about your device, including:"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"Browser type and version"}),(0,d.jsx)("li",{children:"Operating system"}),(0,d.jsx)("li",{children:"Pages you visit on our website"}),(0,d.jsx)("li",{children:"Time and date of your visit"}),(0,d.jsx)("li",{children:"Time spent on pages"})]})]}),(0,d.jsxs)("section",{children:[(0,d.jsx)("h2",{children:"How We Use Your Information"}),(0,d.jsx)("p",{children:"We use the information we collect to:"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"Improve our website and user experience"}),(0,d.jsx)("li",{children:"Analyze website traffic and usage patterns"}),(0,d.jsx)("li",{children:"Respond to your inquiries"}),(0,d.jsx)("li",{children:"Send you updates or information you've requested"})]})]}),(0,d.jsxs)("section",{children:[(0,d.jsx)("h2",{children:"Cookies"}),(0,d.jsx)("p",{children:"We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website."})]}),(0,d.jsxs)("section",{children:[(0,d.jsx)("h2",{children:"Data Security"}),(0,d.jsx)("p",{children:"We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."})]}),(0,d.jsxs)("section",{children:[(0,d.jsx)("h2",{children:"Third-Party Links"}),(0,d.jsx)("p",{children:"Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites."})]}),(0,d.jsxs)("section",{children:[(0,d.jsx)("h2",{children:"Changes to This Policy"}),(0,d.jsx)("p",{children:"We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date."})]}),(0,d.jsxs)("section",{children:[(0,d.jsx)("h2",{children:"Contact Us"}),(0,d.jsx)("p",{children:"If you have any questions about this Privacy Policy, please contact us at joeheupler@berkeley.edu."})]})]})]}),u=e=>{let{title:t="Joseph Heupler | Software Engineer",description:n="Full-stack developer and UC Berkeley graduate specializing in scalable applications, cloud architecture, and data-driven solutions.",image:o="/profile-optimized.jpg",pathname:i="",article:r=!1,datePublished:s="",dateModified:l="",schemaType:h="WebPage",keywords:p="software engineer, full stack developer, machine learning, cloud architecture, UC Berkeley, portfolio",sameAs:u=["https://github.com/java-heapler","https://linkedin.com/in/joe-heupler"]}=e;const{hash:m}=(0,a.zy)(),g="https://java-heapler.github.io/portfolio",x=(i?"".concat(g).concat(i):g)+(m||""),y=o.startsWith("http")?o:"".concat(g).concat(o),j={"@context":"https://schema.org","@type":h};return"WebPage"===h?Object.assign(j,{name:t,description:n,url:x,mainEntityOfPage:{"@type":"WebPage","@id":x}}):"Person"===h?Object.assign(j,{name:"Joseph Heupler",jobTitle:"Software Engineer",description:n,url:g,sameAs:u,alumniOf:{"@type":"CollegeOrUniversity",name:"UC Berkeley"},knowsAbout:["Full Stack Development","Machine Learning","Augmented Reality","Cloud Infrastructure"],image:y}):"Article"===h&&r&&Object.assign(j,{headline:t,description:n,image:y,datePublished:s,dateModified:l||s,author:{"@type":"Person",name:"Joseph Heupler"},publisher:{"@type":"Person",name:"Joseph Heupler",logo:{"@type":"ImageObject",url:"".concat(g,"/logo192.png")}},mainEntityOfPage:{"@type":"WebPage","@id":x}}),(0,d.jsxs)(c.mg,{children:[(0,d.jsx)("html",{lang:"en"}),(0,d.jsx)("title",{children:t}),(0,d.jsx)("link",{rel:"canonical",href:x}),(0,d.jsx)("meta",{name:"description",content:n}),(0,d.jsx)("meta",{name:"keywords",content:p}),(0,d.jsx)("meta",{name:"author",content:"Joseph Heupler"}),(0,d.jsx)("meta",{property:"og:type",content:r?"article":"website"}),(0,d.jsx)("meta",{property:"og:url",content:x}),(0,d.jsx)("meta",{property:"og:title",content:t}),(0,d.jsx)("meta",{property:"og:description",content:n}),(0,d.jsx)("meta",{property:"og:image",content:y}),(0,d.jsx)("meta",{property:"og:image:alt",content:"Image for ".concat(t)}),(0,d.jsx)("meta",{property:"og:site_name",content:"Joseph Heupler Portfolio"}),(0,d.jsx)("meta",{property:"og:locale",content:"en_US"}),r&&s&&(0,d.jsx)("meta",{property:"article:published_time",content:s}),r&&l&&(0,d.jsx)("meta",{property:"article:modified_time",content:l}),(0,d.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,d.jsx)("meta",{name:"twitter:title",content:t}),(0,d.jsx)("meta",{name:"twitter:description",content:n}),(0,d.jsx)("meta",{name:"twitter:image",content:y}),(0,d.jsx)("meta",{name:"twitter:image:alt",content:"Image for ".concat(t)}),(0,d.jsx)("meta",{name:"twitter:creator",content:"@java_heapler"}),(0,d.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,d.jsx)("meta",{name:"theme-color",content:"#0a1929"}),(0,d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, viewport-fit=cover"}),(0,d.jsx)("script",{type:"application/ld+json",children:JSON.stringify(j)}),(0,d.jsx)("link",{rel:"sitemap",type:"application/xml",href:"/sitemap.xml"})]})};var m=n(270),g=n(404);class x extends o.Component{constructor(e){super(e),this.state={hasError:!1,errorMessage:"",errorInfo:""}}static getDerivedStateFromError(e){return{hasError:!0,errorMessage:e.toString()}}componentDidCatch(e,t){console.error("ErrorBoundary caught an error",e,t),(0,l.c_)("".concat(e.toString()," - ").concat(t.componentStack),!0),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,l.c_)("".concat(e.message||e.toString()," ").concat(t.context?"in ".concat(t.context):""),!1)}(e,{extra:t}),this.setState({errorInfo:t.componentStack})}render(){return this.state.hasError?(0,d.jsxs)("div",{role:"alert","aria-live":"assertive",className:"error-boundary",style:{padding:"2rem",textAlign:"center",backgroundColor:"var(--card-bg)",color:"var(--text-primary)",borderRadius:"8px",margin:"2rem auto",maxWidth:"800px",boxShadow:"0 4px 8px var(--shadow-color)"},children:[(0,d.jsx)("h1",{children:"Something went wrong"}),(0,d.jsx)("p",{children:"We're sorry, but an error occurred while rendering this page."}),(0,d.jsx)("button",{onClick:()=>window.location.reload(),style:{marginTop:"1rem",padding:"0.75rem 1.5rem",fontSize:"1rem",backgroundColor:"var(--secondary)",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Reload Page"}),!1]}):this.props.children}}const y=x;var j=n(925),v=n(204);const f=(0,o.lazy)((()=>n.e(516).then(n.bind(n,516))));const w=function(){const[e,t]=(0,o.useState)(!1),[n,i]=(0,o.useState)(!1),{isDesktop:r}=(()=>{const[e,t]=(0,o.useState)(window.innerWidth>=1024),[n,i]=(0,o.useState)(window.innerWidth>=768&&window.innerWidth<1024),[r,a]=(0,o.useState)(window.innerWidth<768);return(0,o.useEffect)((()=>{const e=()=>{const e=window.innerWidth;t(e>=1024),i(e>=768&&e<1024),a(e<768)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),{isDesktop:e,isTablet:n,isMobile:r}})(),a=(0,o.useRef)(null),s=(0,o.useRef)(null);return(0,o.useEffect)((()=>{if(t(!0),a.current)try{m.os.fromTo(a.current,{opacity:0,y:-20},{opacity:1,y:0,duration:1.2,onError:()=>{console.error("GSAP animation error caught and handled"),a.current&&(a.current.style.opacity=1,a.current.style.transform="translateY(0)")}})}catch(e){console.error("Error in GSAP animation:",e),a.current&&(a.current.style.opacity=1,a.current.style.transform="translateY(0)")}}),[]),(0,o.useEffect)((()=>{const e=setTimeout((()=>{s.current&&s.current.complete&&i(!0)}),100);return()=>clearTimeout(e)}),[]),(0,d.jsxs)("header",{ref:a,className:"header",children:[(0,d.jsx)("div",{className:"header-content",children:(0,d.jsxs)("div",{className:"header-main",children:[(0,d.jsxs)("div",{className:"header-text",children:[(0,d.jsx)(j.P.div,{initial:{opacity:0,y:20},animate:{opacity:e?1:0,y:e?0:20},transition:{duration:.3},children:(0,d.jsxs)("h1",{children:[(0,d.jsx)("span",{className:"greeting",children:"Hello, I'm"}),(0,d.jsx)("span",{className:"name",children:"Joseph Heupler"})]})}),(0,d.jsx)(j.P.div,{initial:{opacity:0,y:20},animate:{opacity:e?1:0,y:e?0:20},transition:{delay:.1,duration:.3},children:(0,d.jsx)("h2",{className:"title",children:"Software Engineer"})}),r?(0,d.jsx)("p",{className:"description","data-priority":"high",children:"Full-stack developer and UC Berkeley graduate specializing in scalable applications, cloud architecture, and data-driven solutions. Experienced in building robust backend systems and deploying production-ready applications with modern DevOps practices."}):(0,d.jsx)("p",{className:"description description-mobile","data-priority":"high",children:"Full-stack developer and UC Berkeley graduate specializing in scalable applications and cloud solutions."}),(0,d.jsxs)(j.P.div,{initial:{opacity:0,y:20},animate:{opacity:e?1:0,y:e?0:20},transition:{delay:.3,duration:.3},className:"cta-buttons",children:[(0,d.jsx)("a",{href:"#projects",className:"primary-btn",children:"View Projects"}),(0,d.jsx)("a",{href:"#contact",className:"secondary-btn",children:"Get in Touch"})]}),r&&(0,d.jsxs)(j.P.div,{initial:{opacity:0,y:20},animate:{opacity:e?1:0,y:e?0:20},transition:{delay:1,duration:.5},className:"social-links",children:[(0,d.jsx)("a",{href:"https://github.com/java-heapler",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:(0,d.jsx)(v.hL4,{})}),(0,d.jsx)("a",{href:"https://www.linkedin.com/in/joseph-heupler/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:(0,d.jsx)(v.QEs,{})}),(0,d.jsx)("a",{href:"mailto:jheupler@berkeley.edu","aria-label":"Email",children:(0,d.jsx)(v.maD,{})})]})]}),(0,d.jsx)("div",{className:"header-image ".concat(n?"":"loading"),children:(0,d.jsx)(j.P.div,{initial:{opacity:0},animate:{opacity:n?1:0},transition:{duration:.5},children:(0,d.jsxs)("picture",{children:[(0,d.jsx)("source",{srcSet:"".concat("","/profile-optimized.avif"),type:"image/avif"}),(0,d.jsx)("source",{srcSet:"".concat("","/profile-optimized.jpg"),type:"image/jpeg"}),(0,d.jsx)("img",{ref:s,src:"".concat("","/profile-fallback.jpg"),alt:"Joseph Heupler",className:"profile-image",loading:"eager",width:300,height:300,onLoad:()=>i(!0),onError:e=>{console.error("Image failed to load:",e),i(!0)}})]})})})]})}),r&&(0,d.jsx)("div",{className:"header-background",children:(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)("div",{className:"gradient-placeholder"}),children:(0,d.jsx)(f,{})})})]})},b=()=>{const{isDark:e,toggleTheme:t}=(0,s.D)();return(0,d.jsx)("button",{onClick:t,className:"theme-toggle","aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?(0,d.jsx)(v.wQq,{}):(0,d.jsx)(v.V6H,{})})};const k=function(){const[e,t]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{const e=()=>{window.pageYOffset>300?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),(0,d.jsx)(d.Fragment,{children:e&&(0,d.jsx)("button",{className:"back-to-top",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},"aria-label":"Back to top",children:(0,d.jsx)(v.uCC,{})})})},E=(0,o.lazy)((()=>n.e(59).then(n.bind(n,59)))),P=(0,o.lazy)((()=>n.e(448).then(n.bind(n,448)))),S=(0,o.lazy)((()=>n.e(776).then(n.bind(n,776))));m.os.registerPlugin(g.u);const N=()=>(0,d.jsxs)("div",{className:"loading-skeleton",children:[(0,d.jsx)("div",{className:"skeleton-header"}),(0,d.jsxs)("div",{className:"skeleton-content",children:[(0,d.jsx)("div",{className:"skeleton-text"}),(0,d.jsx)("div",{className:"skeleton-text"}),(0,d.jsx)("div",{className:"skeleton-text"})]})]}),C=()=>{const e=(0,a.zy)(),{pathname:t,hash:n}=e;let o={schemaType:"WebPage"};return"/"!==t||n?"#projects"===n?o={title:"Projects | Joseph Heupler",description:"View my latest software projects, including full-stack applications, cloud solutions, and data-driven implementations.",pathname:"/",image:"/profile-optimized.jpg"}:"#about"===n?o={title:"About | Joseph Heupler",description:"UC Berkeley graduate with expertise in software engineering, cloud technologies, and modern development frameworks.",pathname:"/",image:"/profile-optimized.jpg"}:"#contact"===n?o={title:"Contact | Joseph Heupler",description:"Get in touch with me for collaboration, job opportunities, or questions about my portfolio.",pathname:"/"}:"/privacy"===t&&(o={title:"Privacy Policy | Joseph Heupler",description:"Privacy policy and data handling information for Joseph Heupler's portfolio website.",pathname:"/privacy"}):o={schemaType:"Person",title:"Joseph Heupler | Software Engineer Portfolio",description:"Full-stack developer and UC Berkeley graduate specializing in scalable applications, cloud architecture, and modern web development.",image:"/profile-optimized.jpg"},(0,d.jsx)(u,(0,r.A)({},o))};const T=function(){return(0,o.useEffect)((()=>{(0,l.h1)(),"performance"in window&&"timing"in window.performance&&window.addEventListener("load",(()=>{setTimeout((()=>{const e=performance.getEntriesByType("navigation")[0];if(e){const t=e.loadEventEnd-e.startTime;(0,l.RT)("Performance","page_load",t,"Page Load Time")}}),0)}))}),[]),(0,d.jsx)(c.vd,{children:(0,d.jsx)(s.N,{children:(0,d.jsx)(a.I9,{children:(0,d.jsx)(y,{children:(0,d.jsxs)("div",{className:"app",children:[(0,d.jsx)(C,{}),(0,d.jsx)(h,{}),(0,d.jsxs)(a.BV,{children:[(0,d.jsx)(a.qh,{path:"/",element:(0,d.jsx)("main",{id:"mainContent",role:"main",className:"container",children:(0,d.jsxs)(y,{children:[(0,d.jsx)(w,{}),(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)(N,{}),children:(0,d.jsx)(S,{})})]})})}),(0,d.jsx)(a.qh,{path:"/privacy",element:(0,d.jsx)(y,{children:(0,d.jsx)(p,{})})})]}),(0,d.jsx)(y,{children:(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)("div",{}),children:(0,d.jsx)(E,{})})}),(0,d.jsx)(b,{}),(0,d.jsx)(k,{}),(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)("div",{}),children:(0,d.jsx)(P,{})})]})})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then((e=>{e.forEach((e=>{console.log("Unregistering service worker"),e.unregister()}))})).catch((e=>{console.error("Service worker unregister failed:",e)}));try{const e=document.getElementById("root");if(!e)throw new Error("Root element not found");(0,i.H)(e).render((0,d.jsx)(o.StrictMode,{children:(0,d.jsx)(T,{})}))}catch(W){console.error("Fatal error during application initialization:",W);const e=document.getElementById("root");e&&(e.innerHTML='\n      <div style="font-family: sans-serif; padding: 20px; text-align: center;">\n        <h2>Something went wrong</h2>\n        <p>The application failed to initialize. Please try refreshing the page.</p>\n        <button onclick="window.location.reload()" style="padding: 10px 20px; margin-top: 20px;">\n          Refresh Page\n        </button>\n      </div>\n    ')}"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))},662:(e,t,n)=>{n.d(t,{$s:()=>a,D_:()=>r,RT:()=>s,c_:()=>c,h1:()=>i});var o=n(279);const i=()=>{o.Ay.initialize("G-P1RC04G662")},r=e=>{o.Ay.send({hitType:"pageview",page:e})},a=(e,t,n)=>{console.log("Analytics Event:",{category:e,action:t,label:n}),o.Ay.event({category:e,action:t,label:n})},s=(e,t,n,i)=>{o.Ay.timing({category:e,variable:t,value:n,label:i})},c=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];o.Ay.exception({description:e,fatal:t})}}},e=>{e.O(0,[792],(()=>{e.E(776)}),5);e.O(0,[952],(()=>{return t=434,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=main.aac946ca.js.map