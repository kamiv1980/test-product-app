(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[255],{3668:(e,a,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/[product_id]",function(){return s(5466)}])},4591:(e,a,s)=>{"use strict";s.d(a,{Z:()=>d});var c=s(5893),i=s(1664),r=s.n(i),t=s(9711),o=s.n(t),n=s(2469);function l(){return(0,c.jsxs)("nav",{className:o().navbar,children:[(0,c.jsx)("div",{className:o().navLink,children:(0,c.jsx)(r(),{href:"/",children:(0,c.jsx)("p",{children:"Home"})})}),(0,c.jsx)(r(),{href:"https://github.com/kamiv1980/test-product-app",target:"_blank",children:(0,c.jsx)(n.wGg,{color:"#fff",width:"32px",height:"32px"})})]})}function d(e){let{children:a}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l,{}),(0,c.jsx)("main",{children:a})]})}},5466:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>j});var c=s(5893),i=s(4591),r=s(7294),t=s(4173);s(9568);var o=s(167),n=s(2277),l=s(5675),d=s.n(l),h=s(2469);function m(e){let{product:a}=e,[s,i]=(0,r.useState)(a.options.colors[0]),[l,m]=(0,r.useState)(a.options.sizes[0]),[x,p]=(0,r.useState)(0);return(0,c.jsxs)("div",{className:"product-card",children:[(0,c.jsx)("h2",{className:"product-name",children:a.name}),(0,c.jsxs)("div",{className:"product-content",children:[(0,c.jsxs)("div",{className:"image-slider",children:[(0,c.jsx)("div",{className:"slider-image",style:{transform:"translateX(-".concat(100*x,"%)")},children:a.images.map((e,a)=>(0,c.jsx)(d(),{src:e,alt:"Product image ".concat(a+1),width:0,height:0,sizes:"100vw"},a))}),(0,c.jsx)(n.hU,{size:"3",variant:"soft",onClick:()=>{p(e=>0===e?a.images.length-1:e-1)},className:"prev-btn","aria-label":"Previous Image",style:0===x?{display:"none"}:{},children:(0,c.jsx)(h.wyc,{width:"32",height:"32"})}),(0,c.jsx)(n.hU,{size:"3",variant:"soft",onClick:()=>{p(e=>e===a.images.length-1?0:e+1)},className:"next-btn","aria-label":"Next Image",style:x===a.images.length-1?{display:"none"}:{},children:(0,c.jsx)(h.XCv,{width:"32",height:"32"})})]}),(0,c.jsxs)("div",{className:"product-info",children:[(0,c.jsx)("p",{children:a.description}),(0,c.jsxs)(n.xv,{className:"product-price",children:["Price: $",a.price]}),(0,c.jsxs)("div",{className:"option-select",children:[(0,c.jsx)("h3",{children:"Select Color"}),(0,c.jsx)(o.fC,{defaultValue:s,onValueChange:e=>i(e),className:"color-radio-group",children:a.options.colors.map((e,a)=>(0,c.jsxs)(o.ck,{value:e,className:"color-radio-item",id:"color-".concat(e),children:[(0,c.jsx)(o.z$,{className:"radio-indicator"}),(0,c.jsx)("span",{style:{marginLeft:"auto"},children:e})]},a))})]}),(0,c.jsxs)("div",{className:"option-select",children:[(0,c.jsx)("h3",{children:"Select Size"}),(0,c.jsx)(o.fC,{defaultValue:l,onValueChange:e=>m(e),className:"color-radio-group",children:a.options.sizes.map((e,a)=>(0,c.jsxs)(o.ck,{value:e,className:"color-radio-item",id:"color-".concat(e),children:[(0,c.jsx)(o.z$,{className:"radio-indicator"}),(0,c.jsx)("span",{style:{marginLeft:"auto"},children:e})]},a))})]}),(0,c.jsx)(n.zx,{onClick:()=>{t.Am.success("".concat(a.name," (Color: ").concat(s,", Size: ").concat(l,") added to cart!"),{position:"top-right",autoClose:2e3,hideProgressBar:!1})},className:"add-to-cart-btn",children:"Add to Cart"})]})]}),(0,c.jsx)(t.Ix,{})]})}var x=s(1163);function p(e){let{product:a}=e,[s,i]=(0,r.useState)(a.options.colors[0]),[l,h]=(0,r.useState)(a.options.sizes[0]),[m,x]=(0,r.useState)(0);return(0,c.jsxs)("div",{className:"card2",children:[(0,c.jsx)("div",{className:"card2-content",children:(0,c.jsxs)("div",{className:"card2-image-gallery",children:[(0,c.jsx)("div",{className:"card2-main-image",children:(0,c.jsx)(d(),{src:a.images[m],alt:"Product image ".concat(m+1),width:0,height:0,sizes:"100vw",style:{width:"100%",height:"100%",aspectRatio:1,objectFit:"cover",borderRadius:"8px"}})}),(0,c.jsx)("div",{className:"card2-thumbnails",children:a.images.map((e,a)=>(0,c.jsx)("button",{onClick:()=>x(a),className:"card2-thumbnail-btn ".concat(m===a?"active":""),children:(0,c.jsx)(d(),{src:e,alt:"Thumbnail ".concat(a+1),width:60,height:60,style:{borderRadius:"4px",objectFit:"cover"}})},a))})]})}),(0,c.jsxs)("div",{className:"card2-info",children:[(0,c.jsx)("h2",{className:"card2-title",children:a.name}),(0,c.jsx)(n.xv,{className:"card2-description",children:a.description}),(0,c.jsxs)("div",{className:"card2-option-select",children:[(0,c.jsx)("h3",{className:"card2-option-title",children:"Select Color"}),(0,c.jsx)(o.fC,{defaultValue:s,onValueChange:e=>i(e),className:"card2-color-options",children:a.options.colors.map((e,a)=>(0,c.jsx)(o.ck,{value:e,className:"card2-color-option",id:"color-".concat(e),children:e},a))})]}),(0,c.jsxs)("div",{className:"card2-option-select",children:[(0,c.jsx)("h3",{className:"card2-option-title",children:"Select Size"}),(0,c.jsx)(o.fC,{defaultValue:l,onValueChange:e=>h(e),className:"card2-size-options",children:a.options.sizes.map((e,a)=>(0,c.jsx)(o.ck,{value:e,className:"card2-size-option",id:"color-".concat(e),children:e},a))})]}),(0,c.jsxs)("div",{className:"card2-actions",children:[(0,c.jsxs)(n.xv,{className:"card2-price",children:["Price: $",a.price]}),(0,c.jsx)(n.zx,{onClick:()=>{t.Am.success("".concat(a.name," (Color: ").concat(s,", Size: ").concat(l,") added to cart!"),{position:"top-right",autoClose:2e3,hideProgressBar:!1})},className:"card2-add-to-cart-btn",children:"Add to Cart"})]})]}),(0,c.jsx)(t.Ix,{})]})}let u={name:"Minimalist Chair",description:"A sleek and modern chair for any room. A sleek and modern chair for any room.A sleek and modern chair for any room. A sleek and modern chair for any room.",price:150,options:{colors:["Black","White","Gray"],sizes:["Small","Medium","Large"]},images:["/images/image1.jpg","/images/image2.jpg","/images/image3.jpg","/images/image4.jpg"]};function j(){let e=(0,x.useRouter)().query.product_id;return(0,c.jsxs)(i.Z,{children:["1"===e&&(0,c.jsx)(m,{product:u}),"2"===e&&(0,c.jsx)(p,{product:u})]})}},9711:e=>{e.exports={navbar:"Navbar_navbar__2GufN",navLink:"Navbar_navLink__eZP1y"}}},e=>{var a=a=>e(e.s=a);e.O(0,[409,664,278,888,774,179],()=>a(3668)),_N_E=e.O()}]);