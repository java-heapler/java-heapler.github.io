"use strict";(self.webpackChunkjoe_heupler_portfolio=self.webpackChunkjoe_heupler_portfolio||[]).push([[448],{448:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var r=o(43),n=o(925),s=o(579);const a=e=>{let{onClose:t}=e;return(0,s.jsx)("div",{className:"privacy-policy-modal",children:(0,s.jsxs)("div",{className:"privacy-policy-content",children:[(0,s.jsx)("h2",{children:"Privacy Policy"}),(0,s.jsxs)("div",{className:"policy-text",children:[(0,s.jsx)("h3",{children:"Analytics and Cookies"}),(0,s.jsx)("p",{children:"This website uses Google Analytics 4 (GA4) to analyze website traffic and improve user experience. GA4 may collect:"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Pages visited and time spent"}),(0,s.jsx)("li",{children:"Device and browser information"}),(0,s.jsx)("li",{children:"Geographic location (country/city level)"}),(0,s.jsx)("li",{children:"Interaction with site features"})]}),(0,s.jsx)("h3",{children:"Data Collection"}),(0,s.jsx)("p",{children:"We implement IP anonymization to protect your privacy. No personally identifiable information is collected or stored. Data collected is processed by Google Analytics in accordance with their privacy policy."}),(0,s.jsx)("h3",{children:"Cookie Usage"}),(0,s.jsx)("p",{children:"This website uses essential cookies and analytics cookies. You can control analytics cookies through the cookie consent banner."}),(0,s.jsx)("h3",{children:"Your Rights"}),(0,s.jsx)("p",{children:"Under GDPR and other privacy laws, you have the right to:"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Access your data"}),(0,s.jsx)("li",{children:"Request deletion of your data"}),(0,s.jsx)("li",{children:"Opt-out of analytics tracking"}),(0,s.jsx)("li",{children:"Lodge a complaint with supervisory authorities"})]}),(0,s.jsx)("h3",{children:"Contact"}),(0,s.jsx)("p",{children:"For any privacy-related questions, please contact: jheupler@berkeley.edu"})]}),(0,s.jsx)("button",{onClick:t,className:"close-button",children:"Close"})]})})};var i=o(379);function c(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{strategy:n="auto",expiry:s=null}=o,[a,c]=(0,r.useState)((()=>{try{return function(e,t,o){switch("auto"===o?d():o){case"local":return function(e,t){if(!y())return t;const o=localStorage.getItem(e);if(!o)return t;try{const r=JSON.parse(o);return r.expiry&&r.expiry<Date.now()?(localStorage.removeItem(e),t):r.value}catch(r){return t}}(e,t);case"session":return function(e,t){if(!h())return t;const o=sessionStorage.getItem(e);if(!o)return t;try{const r=JSON.parse(o);return r.expiry&&r.expiry<Date.now()?(sessionStorage.removeItem(e),t):r.value}catch(r){return t}}(e,t);default:return t}}(e,t,n)}catch(o){return console.error('Error retrieving stored value for key "'.concat(e,'":'),o),t}})),[l,u]=(0,r.useState)({loading:!1,error:null,supported:function(e){switch(e){case"local":return y();case"session":return h();case"indexeddb":return p();case"auto":return y()||h()||p();default:return!1}}(n)});function d(){return"auto"!==n?n:p()?"indexeddb":y()?"local":h()?"session":"memory"}function y(){try{const e="__storage_test__";return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}function h(){try{const e="__storage_test__";return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(e){return!1}}function p(){return"undefined"!==typeof window&&"indexedDB"in window}(0,r.useEffect)((()=>{"indexeddb"!==n&&"auto"!==n||(u((e=>(0,i.A)((0,i.A)({},e),{},{loading:!0}))),function(e){return new Promise(((t,o)=>{if(!p())return void o(new Error("IndexedDB not supported"));const r=indexedDB.open("portfolio-storage",1);r.onupgradeneeded=function(e){const t=e.target.result;t.objectStoreNames.contains("key-value-store")||t.createObjectStore("key-value-store")},r.onerror=function(){o(new Error("Error opening IndexedDB"))},r.onsuccess=function(r){const n=r.target.result,s=n.transaction(["key-value-store"],"readonly").objectStore("key-value-store").get(e);s.onerror=function(){o(new Error("Error getting from IndexedDB"))},s.onsuccess=function(){const o=s.result;if(o){if(o.expiry&&o.expiry<Date.now())return n.transaction(["key-value-store"],"readwrite").objectStore("key-value-store").delete(e),void t(null);t(o.value)}else t(null)}}}))}(e).then((e=>{null!==e&&c(e),u((e=>(0,i.A)((0,i.A)({},e),{},{loading:!1,error:null})))})).catch((e=>{console.error("Error fetching from IndexedDB:",e),u((t=>(0,i.A)((0,i.A)({},t),{},{loading:!1,error:e.message})))})))}),[e,n]);const g=(0,r.useCallback)((t=>{try{const o=t instanceof Function?t(a):t;c(o);const r="auto"===n?d():n,i=s?Date.now()+s:null;switch(r){case"local":y()&&localStorage.setItem(e,JSON.stringify({value:o,expiry:i}));break;case"session":h()&&sessionStorage.setItem(e,JSON.stringify({value:o,expiry:i}));break;case"indexeddb":if(p()){indexedDB.open("portfolio-storage",1).onsuccess=function(t){t.target.result.transaction(["key-value-store"],"readwrite").objectStore("key-value-store").put({value:o,expiry:i},e)}}break;default:console.warn('Storage strategy "'.concat(r,'" not supported'))}}catch(o){console.error('Error setting stored value for key "'.concat(e,'":'),o),u((e=>(0,i.A)((0,i.A)({},e),{},{error:o.message})))}}),[e,a,n,s]),f=(0,r.useCallback)((()=>{try{const o="auto"===n?d():n;switch(o){case"local":y()&&localStorage.removeItem(e);break;case"session":h()&&sessionStorage.removeItem(e);break;case"indexeddb":if(p()){indexedDB.open("portfolio-storage",1).onsuccess=function(t){t.target.result.transaction(["key-value-store"],"readwrite").objectStore("key-value-store").delete(e)}}break;default:console.warn('Storage strategy "'.concat(o,'" not supported'))}c(t)}catch(o){console.error('Error removing stored value for key "'.concat(e,'":'),o),u((e=>(0,i.A)((0,i.A)({},e),{},{error:o.message})))}}),[e,n,t]);return[a,g,f,l]}const l=()=>{const[e,t]=(0,r.useState)(!1),[o,i]=(0,r.useState)(!1),[l,u,d,y]=c("cookieConsent",null,{strategy:"auto",expiry:31536e6});null===l||void 0===l||l.analytics;(0,r.useEffect)((()=>{l?l.analytics&&h():t(!0)}),[l]),(0,r.useEffect)((()=>{0}),[y.error]);const h=()=>{window["ga-disable-G-P1RC04G662"]=!1,window.gtag&&window.gtag("config","G-P1RC04G662",{anonymize_ip:!0})};return e||o?(0,s.jsxs)(s.Fragment,{children:[o&&(0,s.jsx)(a,{onClose:()=>{i(!1)}}),e&&(0,s.jsx)(n.P.div,{className:"cookie-consent",initial:{y:100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},children:(0,s.jsxs)("div",{className:"cookie-content",children:[(0,s.jsxs)("p",{children:["This website uses cookies to enhance your experience and analyze site usage. We use essential cookies for basic functionality and optional analytics cookies to understand how you use our site.",(0,s.jsx)("button",{className:"link-button",onClick:()=>{i(!0)},children:"Learn more"})]}),(0,s.jsxs)("div",{className:"cookie-buttons",children:[(0,s.jsx)("button",{onClick:()=>{u({essential:!0,analytics:!1,timestamp:(new Date).toISOString()}),window["ga-disable-G-P1RC04G662"]=!0,t(!1)},className:"secondary-button",children:"Essential Only"}),(0,s.jsx)("button",{onClick:()=>{u({essential:!0,analytics:!0,timestamp:(new Date).toISOString()}),h(),t(!1)},className:"primary-button",children:"Accept All"}),!1]})]})})]}):null}}}]);
//# sourceMappingURL=448.d0da05f6.chunk.js.map