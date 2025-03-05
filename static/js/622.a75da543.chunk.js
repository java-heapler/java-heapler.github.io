"use strict";(self.webpackChunkjoe_heupler_portfolio=self.webpackChunkjoe_heupler_portfolio||[]).push([[622],{622:(e,a,s)=>{s.r(a),s.d(a,{default:()=>n});var r=s(555),i=s(43),m=s(469),t=s(662),l=s(579);const n=function(){const[e,a]=(0,i.useState)({name:"",email:"",message:""}),[s,n]=(0,i.useState)({}),[d,o]=(0,i.useState)(!1),[c,u]=(0,i.useState)(!1),[h,g]=(0,i.useState)(null),b=e=>{const{name:i,value:m}=e.target;a((e=>(0,r.A)((0,r.A)({},e),{},{[i]:m}))),s[i]&&n((0,r.A)((0,r.A)({},s),{},{[i]:null}))},j=a=>{const{name:i}=a.target,m=(0,r.A)({},s);"name"===i&&(e.name.trim()?e.name.trim().length<2?m.name="Name must be at least 2 characters":delete m.name:m.name="Name is required"),"email"===i&&(e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)?delete m.email:m.email="Please enter a valid email address":m.email="Email is required"),"message"===i&&(e.message.trim()?e.message.trim().length<10?m.message="Message must be at least 10 characters":delete m.message:m.message="Message is required"),n(m)};return(0,l.jsxs)("section",{className:"contact-section",id:"contact",children:[(0,l.jsx)("h2",{children:"Contact Me"}),c?(0,l.jsxs)("div",{className:"success-message",children:[(0,l.jsx)("p",{children:"Thank you for your message! I'll get back to you soon."}),(0,l.jsx)("button",{onClick:()=>{u(!1),a({name:"",email:"",message:""}),n({})},className:"send-another-btn",children:"Send Another Message"})]}):(0,l.jsxs)("form",{onSubmit:async a=>{if(a.preventDefault(),(()=>{const a={};return e.name.trim()?e.name.trim().length<2&&(a.name="Name must be at least 2 characters"):a.name="Name is required",e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(a.email="Please enter a valid email address"):a.email="Email is required",e.message.trim()?e.message.trim().length<10&&(a.message="Message must be at least 10 characters"):a.message="Message is required",n(a),0===Object.keys(a).length})()){o(!0),g(null);try{if(!(await fetch("https://formspree.io/f/xbjnkdvw",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok)throw new Error("Form submission failed");(0,t.$s)("Contact","Form Submitted","Contact Form"),u(!0)}catch(s){(0,m.O)(s,"ContactForm"),g("There was a problem submitting your form. Please try again or email me directly.")}finally{o(!1)}}},noValidate:!0,children:[(0,l.jsxs)("div",{className:"form-group ".concat(s.name?"has-error":""),children:[(0,l.jsx)("label",{htmlFor:"name",children:"Your name:"}),(0,l.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:b,onBlur:j,required:!0,disabled:d,"aria-invalid":!!s.name,"aria-describedby":s.name?"name-error":void 0}),s.name&&(0,l.jsx)("div",{className:"field-error",id:"name-error",children:s.name})]}),(0,l.jsxs)("div",{className:"form-group ".concat(s.email?"has-error":""),children:[(0,l.jsx)("label",{htmlFor:"email",children:"Your email:"}),(0,l.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:b,onBlur:j,required:!0,disabled:d,"aria-invalid":!!s.email,"aria-describedby":s.email?"email-error":void 0}),s.email&&(0,l.jsx)("div",{className:"field-error",id:"email-error",children:s.email})]}),(0,l.jsxs)("div",{className:"form-group ".concat(s.message?"has-error":""),children:[(0,l.jsx)("label",{htmlFor:"message",children:"Message:"}),(0,l.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:b,onBlur:j,required:!0,disabled:d,"aria-invalid":!!s.message,"aria-describedby":s.message?"message-error":void 0}),s.message&&(0,l.jsx)("div",{className:"field-error",id:"message-error",children:s.message})]}),h&&(0,l.jsx)("div",{className:"error-message",role:"alert",children:h}),(0,l.jsx)("button",{type:"submit",disabled:d,className:d?"submitting":"",children:d?"Sending...":"Send Message"})]}),(0,l.jsx)("div",{className:"direct-contact",children:(0,l.jsxs)("p",{children:["Or reach me directly at: ",(0,l.jsx)("a",{href:"mailto:jheupler@berkeley.edu",children:"jheupler@berkeley.edu"})]})})]})}}}]);
//# sourceMappingURL=622.a75da543.chunk.js.map