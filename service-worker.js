if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let d={};const o=e=>n(e,t),f={module:{uri:t},exports:d,require:o};i[t]=Promise.all(s.map((e=>f[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-020e1147"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DAxG9GNl.css",revision:null},{url:"assets/index-Dn7_Ij8u.js",revision:null},{url:"googlee807713a9c92aaab.html",revision:"824896f7e586d509e60e72a10c56f779"},{url:"index.html",revision:"8a3d7d529415430d79397e86003f9f17"},{url:"registerSW.js",revision:"6313bddce9b6e47301332fee8f8f5d97"},{url:"favicon.ico",revision:"b681b6bb0ff152de1938924bc1875a5d"},{url:"meet-app-144.png",revision:"dae5f3d5d35396e6e3c04e8ef6e70cb6"},{url:"meet-app-192.png",revision:"4ad85c7f381794f8fc16e5ba53cd1f8f"},{url:"meet-app-512.png",revision:"365b42cb16441d855f01d1c094011c15"},{url:"manifest.webmanifest",revision:"8da8937a7081d66dd1134bdf9fd476ab"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\/.*\.png$/,new e.StaleWhileRevalidate({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
