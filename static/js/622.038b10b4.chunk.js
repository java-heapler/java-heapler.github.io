"use strict";(self.webpackChunkjoe_heupler_portfolio=self.webpackChunkjoe_heupler_portfolio||[]).push([[622],{622:(e,a,s)=>{s.r(a),s.d(a,{default:()=>m});var i=s(379),r=s(43),n=s(579);const m=function(){const[e,a]=(0,r.useState)({name:"",email:"",message:""}),[s,m]=(0,r.useState)(!1),[l,o]=(0,r.useState)({}),t=e=>{const{name:s,value:r}=e.target;a((e=>(0,i.A)((0,i.A)({},e),{},{[s]:r}))),l[s]&&o((0,i.A)((0,i.A)({},l),{},{[s]:void 0}))};return(0,n.jsxs)("section",{className:"contact-section",id:"contact","aria-labelledby":"contact-heading",children:[(0,n.jsx)("h2",{id:"contact-heading",children:"Contact Me"}),s?(0,n.jsxs)("div",{className:"success-message",children:[(0,n.jsx)("p",{children:"Your message has been sent. Thank you!"}),(0,n.jsx)("button",{onClick:()=>m(!1),children:"Send another message"})]}):(0,n.jsxs)("form",{onSubmit:a=>{if(a.preventDefault(),(()=>{const a={};return e.name.trim()||(a.name="Name is required"),e.email.trim()?/\S+@\S+\.\S+/.test(e.email)||(a.email="Email is invalid"):a.email="Email is required",e.message.trim()||(a.message="Message is required"),o(a),0===Object.keys(a).length})()){const a="Message from ".concat(e.name," (").concat(e.email,")"),s="Name: ".concat(e.name,"\n\nMessage: ").concat(e.message);window.location.href="mailto:jheupler@berkeley.edu?subject=".concat(encodeURIComponent(a),"&body=").concat(encodeURIComponent(s)),m(!0)}},noValidate:!0,children:[(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"name",children:"Your name:"}),(0,n.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:t,required:!0,"aria-invalid":!!l.name,"aria-describedby":l.name?"name-error":void 0}),l.name&&(0,n.jsx)("div",{className:"error-message",id:"name-error",children:l.name})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"email",children:"Your email:"}),(0,n.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:t,required:!0,"aria-invalid":!!l.email,"aria-describedby":l.email?"email-error":void 0}),l.email&&(0,n.jsx)("div",{className:"error-message",id:"email-error",children:l.email})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"message",children:"Message:"}),(0,n.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:t,required:!0,"aria-invalid":!!l.message,"aria-describedby":l.message?"message-error":void 0}),l.message&&(0,n.jsx)("div",{className:"error-message",id:"message-error",children:l.message})]}),(0,n.jsx)("button",{type:"submit",children:"Send Message"})]})]})}}}]);
//# sourceMappingURL=622.038b10b4.chunk.js.map