import{S as B,i as E,s as y,k as S,x as _,l as k,m as x,y as m,h as f,p as w,b as $,z as h,f as i,t as u,A as g,e as d,g as A,d as C,K as I,n as N}from"../../../../chunks/index-9ff2dfe8.js";import{_ as q}from"../../../../chunks/3-2-1-grid-6e62da8a.js";import{S as z}from"../../../../chunks/section-420dd623.js";import{B as D}from"../../../../chunks/blog-post-card-f4905dee.js";function b(c,e,o){const n=c.slice();return n[2]=e[o],n}function v(c){let e,o;return e=new D({props:{post:c[2]}}),{c(){_(e.$$.fragment)},l(n){m(e.$$.fragment,n)},m(n,t){h(e,n,t),o=!0},p:N,i(n){o||(i(e.$$.fragment,n),o=!0)},o(n){u(e.$$.fragment,n),o=!1},d(n){g(e,n)}}}function K(c){let e,o,n=c[0],t=[];for(let r=0;r<n.length;r+=1)t[r]=v(b(c,n,r));const a=r=>u(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=d()},l(r){for(let l=0;l<t.length;l+=1)t[l].l(r);e=d()},m(r,l){for(let s=0;s<t.length;s+=1)t[s].m(r,l);$(r,e,l),o=!0},p(r,l){if(l&1){n=r[0];let s;for(s=0;s<n.length;s+=1){const p=b(r,n,s);t[s]?(t[s].p(p,l),i(t[s],1)):(t[s]=v(p),t[s].c(),i(t[s],1),t[s].m(e.parentNode,e))}for(A(),s=n.length;s<t.length;s+=1)a(s);C()}},i(r){if(!o){for(let l=0;l<n.length;l+=1)i(t[l]);o=!0}},o(r){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)u(t[l]);o=!1},d(r){I(t,r),r&&f(e)}}}function O(c){let e,o,n;return o=new q({props:{$$slots:{default:[K]},$$scope:{ctx:c}}}),{c(){e=S("div"),_(o.$$.fragment),this.h()},l(t){e=k(t,"DIV",{class:!0});var a=x(e);m(o.$$.fragment,a),a.forEach(f),this.h()},h(){w(e,"class","container")},m(t,a){$(t,e,a),h(o,e,null),n=!0},p(t,a){const r={};a&32&&(r.$$scope={dirty:a,ctx:t}),o.$set(r)},i(t){n||(i(o.$$.fragment,t),n=!0)},o(t){u(o.$$.fragment,t),n=!1},d(t){t&&f(e),g(o)}}}function P(c){let e,o,n;return o=new z({props:{align:"top",title:"All posts",$$slots:{default:[O]},$$scope:{ctx:c}}}),{c(){e=S("section"),_(o.$$.fragment),this.h()},l(t){e=k(t,"SECTION",{id:!0});var a=x(e);m(o.$$.fragment,a),a.forEach(f),this.h()},h(){w(e,"id","blog")},m(t,a){$(t,e,a),h(o,e,null),n=!0},p(t,[a]){const r={};a&32&&(r.$$scope={dirty:a,ctx:t}),o.$set(r)},i(t){n||(i(o.$$.fragment,t),n=!0)},o(t){u(o.$$.fragment,t),n=!1},d(t){t&&f(e),g(o)}}}function T(c,e,o){let{data:n}=e,{posts:t}=n;return c.$$set=a=>{"data"in a&&o(1,n=a.data)},[t,n]}class H extends B{constructor(e){super(),E(this,e,T,P,y,{data:1})}}export{H as default};