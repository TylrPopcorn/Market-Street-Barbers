var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function a(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode&&t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function d(){return t=" ",document.createTextNode(t);var t}function u(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let p;function f(t){p=t}const m=[],v=[];let b=[];const h=[],g=Promise.resolve();let $=!1;function C(t){b.push(t)}const y=new Set;let T=0;function w(){if(0!==T)return;const t=p;do{try{for(;T<m.length;){const t=m[T];T++,f(t),x(t.$$)}}catch(t){throw m.length=0,T=0,t}for(f(null),m.length=0,T=0;v.length;)v.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];y.has(e)||(y.add(e),e())}b.length=0}while(m.length);for(;h.length;)h.pop()();$=!1,y.clear(),f(t)}function x(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const k=new Set;function _(t,e){t&&t.i&&(k.delete(t),t.i(e))}function A(t,e,n,a){if(t&&t.o){if(k.has(t))return;k.add(t),undefined.c.push((()=>{k.delete(t),a&&(n&&t.d(1),a())})),t.o(e)}else a&&a()}function S(t){t&&t.c()}function F(t,n,s,o){const{fragment:l,after_update:c}=t.$$;l&&l.m(n,s),o||C((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):a(n),t.$$.on_mount=[]})),c.forEach(C)}function O(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];b.forEach((a=>-1===t.indexOf(a)?e.push(a):n.push(a))),n.forEach((t=>t())),b=e}(n.after_update),a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(m.push(t),$||($=!0,g.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,r,s,o,l,i,d,u=[-1]){const m=p;f(e);const v=e.$$={fragment:null,ctx:[],props:i,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(m?m.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:r.target||m.$$.root};d&&d(v.root);let b=!1;if(v.ctx=s?s(e,r.props||{},((t,n,...a)=>{const r=a.length?a[0]:n;return v.ctx&&l(v.ctx[t],v.ctx[t]=r)&&(!v.skip_bound&&v.bound[t]&&v.bound[t](r),b&&M(e,t)),n})):[],v.update(),b=!0,a(v.before_update),v.fragment=!!o&&o(v.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);v.fragment&&v.fragment.l(t),t.forEach(c)}else v.fragment&&v.fragment.c();r.intro&&_(e.$$.fragment),F(e,r.target,r.anchor,r.customElement),w()}f(m)}class E{$destroy(){O(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const t=a.indexOf(n);-1!==t&&a.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function N(e){let n;return{c(){n=i("nav"),n.innerHTML='<div class="container"><a class="navbar-brand" href="#hero"><div class="navbar-LOGO"></div></a> \n        <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span class="navbar-toggler-icon"></span></button> \n\n        <div class="collapse navbar-collapse justify-content-end" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link px-5" href="#about">ABOUT</a></li> \n            <li class="nav-item"><a class="nav-link px-5" href="#footer">CONTACT</a></li></ul></div></div>',u(n,"class","navbar navbar-expand-lg")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class B extends E{constructor(t){super(),H(this,t,null,N,s,{})}}function I(e){let n;return{c(){n=i("div"),n.innerHTML='<div class="container Hero-Center-Content"><h1 class="hero-title">Market Street <br/> Barbers</h1> \n        <a href="https://booksy.com/en-us/1291904_market-street-barbers_barber-shop_26503_concord" class="hero-book-btn btn btn-custom" target="_blank" rel="noopener noreferrer">BOOK A CUT</a></div> \n    <div class="container Hero-Center-Content-2"><div class="hero-arrow" alt=""></div></div>',u(n,"class","HeroSection")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class L extends E{constructor(t){super(),H(this,t,null,I,s,{})}}function G(e){let n;return{c(){n=i("div"),n.innerHTML='<div class="ABT-title-section"><div class="container ABT-Center-Content">OUR STORY</div></div> \n    <div class="container ABT-pg-section">At Market Street Barbers, we provide quality haircuts and shaves in a\n        welcoming space where everyone feels like family. Our mission is to\n        offer top-notch service while fostering community connections, ensuring\n        every visit feels like home.</div> \n\t<div class="ABT-img"></div>',u(n,"id","about"),u(n,"class","AboutUs")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class U extends E{constructor(t){super(),H(this,t,null,G,s,{})}}function R(e){let n;return{c(){n=i("div"),n.innerHTML='<div class="container OurTeam-Header">MEET THE TEAM</div> \n      <div class="container Cards row g-4"><div class="col-md-4 Col"><div class="Card"><div class="card-1-img"></div> \n            <div class="Stylist-Text">Stylist</div></div> \n          <div class="Card-Info"><p class="Card-Title">EASTON NESBITT</p> \n            <p class="Card-Paragraph">Co-Founder</p> \n            <a href="https://booksy.com/en-us/instant-experiences/widget/538459?instant_experiences_enabled=true&amp;ig_ix=true" class="OurTeam-book-btn btn btn-custom" target="_blank" rel="noopener noreferrer">BOOK A CUT</a></div></div> \n        <div class="col-md-4 Col" style="margin-top: 15rem;"><div class="Card"><div class="card-2-img"></div> \n            <div class="Stylist-Text">Stylist</div></div> \n          <div class="Card-Info"><p class="Card-Title">KEVIN VILLACIS</p> \n            <p class="Card-Paragraph">Co-Founder</p> \n            <a href="https://booksy.com/en-us/instant-experiences/widget/996910" class="OurTeam-book-btn btn btn-custom" target="_blank" rel="noopener noreferrer">BOOK A CUT</a></div></div></div>',u(n,"class","OurTeam")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class j extends E{constructor(t){super(),H(this,t,null,R,s,{})}}function P(e){let n;return{c(){n=i("div"),n.innerHTML='<div id="barberCarousel" class="carousel slide" data-bs-ride="carousel"><ol class="carousel-indicators"><li data-bs-target="#barberCarousel" data-bs-slide-to="0" class="active"></li> \n          <li data-bs-target="#barberCarousel" data-bs-slide-to="1"></li> \n          <li data-bs-target="#barberCarousel" data-bs-slide-to="2"></li></ol> \n        <div class="carousel-inner"><div class="carousel-item active"><div class="d-block w-100 carousel_IMG1" src="" alt=""></div></div> \n          <div class="carousel-item"><div class="d-block w-100 carousel_IMG2" src="" alt=""></div></div> \n          <div class="carousel-item"><div class="d-block w-100 carousel_IMG3" src="" alt=""></div></div></div> \n        <a class="carousel-control-prev" href="#barberCarousel" role="button" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span> \n          <span class="sr-only"></span></a> \n        <a class="carousel-control-next" href="#barberCarousel" role="button" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span> \n          <span class="sr-only"></span></a></div>',u(n,"class","Gallery")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class K extends E{constructor(t){super(),H(this,t,null,P,s,{})}}function W(e){let n;return{c(){n=i("div"),n.innerHTML='<div class="container CTA-Content"><div class="CTA-Title">FINDING THE RIGHT BARBER <br/> CAN BE TOUGH.</div> \n\t\t<div class="CTA-Paragraph">It’s not just about skill; it’s about finding someone whose\n\t\t\tpersonality clicks with yours – and that’s exactly what we’re here\n\t\t\tfor.</div></div>',u(n,"class","CTA")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class q extends E{constructor(t){super(),H(this,t,null,W,s,{})}}function V(e){let n;return{c(){n=i("div"),n.innerHTML='<div class="container Footer-wrapper"><div class="container row Footer-row"><div class="col-12 col-sm-6 col-md-2 Footer-logo-wrapper"><div class="Footer-logo"></div></div> \n          <div class="col-md-4 Footer-Hours"><h5 class="Footer-Header">HOURS</h5> \n            <p class="Footer-Content">Tuesday - 8:00 am to 7:00 pm</p> \n            <p class="Footer-Content">Wednesday - 8:00 am to 5:00 pm</p> \n            <p class="Footer-Content">Thursday - 8:00 am to 7:00 pm</p> \n            <p class="Footer-Content">Friday - 8:00 am to 6:00 pm</p> \n            <p class="Footer-Content">Saturday - 7:00 am to 3:00 pm</p></div> \n          <div class="col-md-3 Footer-Contact-Social"><div class="Footer-Contact"><h5 class="Footer-Header">CONTACT</h5> \n              <p class="Footer-Content">704-260-7464</p> \n              <p class="Footer-Content">Marketstreetbarbers24@gmail.com</p> \n              <a class="Footer-Content" href="https://www.google.com/maps/place/15+Market+St+SW,+Concord,+NC+28025/data=!4m2!3m1!1s0x88540e5147113705:0x8566b0d1bfccd174?entry=s&amp;sa=X&amp;ved=1t:78214&amp;ictx=111" target="_blank" rel="noopener noreferrer">5 Market St SW Concord, NC 28025 <br/>\n                United States</a></div> \n            <div class="Footer-Social"><h5 class="Footer-Header">SOCIAL</h5> \n              <a class="Footer-Social-Instagram" href="https://www.instagram.com/marketstreetbarbers/" target="_blank" rel="noopener noreferrer"><span></span></a></div></div> \n          <div class="col-md-2 Footer-Maps"><div class="map-container"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.9794312986884!2d-80.57951438477892!3d35.40875128024588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541d089f80e281%3A0x48a1f1c18b1636b8!2s5%20Market%20St%20SW%2C%20Concord%2C%20NC%2028025!5e0!3m2!1sen!2sus!4v1613942292645!5m2!1sen!2sus" allowfullscreen="" loading="lazy" class="MAP" title="Google Maps location of Market Street Barbers in Concord, NC"></iframe></div></div></div></div>',u(n,"id","footer"),u(n,"class","Footer")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class z extends E{constructor(t){super(),H(this,t,null,V,s,{})}}function D(e){let n,a,r,s,p,f,m,v,b,h,g,$,C,y,T,w,x;return s=new B({}),f=new L({}),v=new U({}),h=new j({}),$=new K({}),y=new q({}),w=new z({}),{c(){n=i("main"),a=i("div"),r=i("div"),S(s.$$.fragment),p=d(),S(f.$$.fragment),m=d(),S(v.$$.fragment),b=d(),S(h.$$.fragment),g=d(),S($.$$.fragment),C=d(),S(y.$$.fragment),T=d(),S(w.$$.fragment),u(r,"id","hero"),u(r,"class","Hero"),u(a,"class","App")},m(t,e){l(t,n,e),o(n,a),o(a,r),F(s,r,null),o(r,p),F(f,r,null),o(a,m),F(v,a,null),o(a,b),F(h,a,null),o(a,g),F($,a,null),o(a,C),F(y,a,null),o(a,T),F(w,a,null),x=!0},p:t,i(t){x||(_(s.$$.fragment,t),_(f.$$.fragment,t),_(v.$$.fragment,t),_(h.$$.fragment,t),_($.$$.fragment,t),_(y.$$.fragment,t),_(w.$$.fragment,t),x=!0)},o(t){A(s.$$.fragment,t),A(f.$$.fragment,t),A(v.$$.fragment,t),A(h.$$.fragment,t),A($.$$.fragment,t),A(y.$$.fragment,t),A(w.$$.fragment,t),x=!1},d(t){t&&c(n),O(s),O(f),O(v),O(h),O($),O(y),O(w)}}}return new class extends E{constructor(t){super(),H(this,t,null,D,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
