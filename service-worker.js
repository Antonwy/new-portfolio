"use strict";var precacheConfig=[["/new-portfolio/index.html","1fda3e2b0d1b5a77ee3a5ba1fb0651f2"],["/new-portfolio/static/css/main.c9439673.css","eca71d88539063700901dc564c47a830"],["/new-portfolio/static/js/main.c517843e.js","ea46c16c4bbc785300aad421b62c1d16"],["/new-portfolio/static/media/about_me_style_dark.4d01eff8.svg","4d01eff8327469b61e513a73b26a36dc"],["/new-portfolio/static/media/about_me_style_dark_mobile.26cd1d90.svg","26cd1d90047d55be443284fdc51156a8"],["/new-portfolio/static/media/about_me_style_light.63038153.svg","630381535fd6e4340d517a94d7c0cf12"],["/new-portfolio/static/media/about_me_style_light_mobile.64178efa.svg","64178efa80e1346be479e6b42dca1c88"],["/new-portfolio/static/media/close_dark.14196d45.svg","14196d4501c965a3759d02e450c5b33f"],["/new-portfolio/static/media/close_light.0daa087b.svg","0daa087b51854d328a22b0572fdf7dfc"],["/new-portfolio/static/media/facebookIcon.e07fa2b9.svg","e07fa2b9760da7aa4cf2bc162519999c"],["/new-portfolio/static/media/githubIcon.1e5461be.svg","1e5461be99f07caa8672eecca5ea5e69"],["/new-portfolio/static/media/gmailIcon.f3bca5cc.svg","f3bca5cc38adab4889af73ec49dae7e2"],["/new-portfolio/static/media/hamburger_dark.8d6d6296.svg","8d6d62966c9ea119b4ebb15fabff333d"],["/new-portfolio/static/media/hamburger_light.eec769f7.svg","eec769f77a5f8a3c331295faafb508a2"],["/new-portfolio/static/media/home_style_dark.a2805f6e.svg","a2805f6e3e73b8681524bc523caa5939"],["/new-portfolio/static/media/home_style_dark_mobile.fe7db15f.svg","fe7db15f2ce9c0f06167c475f6ff0ede"],["/new-portfolio/static/media/home_style_light.f0aa7f13.svg","f0aa7f138072332b919bccb8c0b55053"],["/new-portfolio/static/media/home_style_light_mobile.38290fce.svg","38290fce935e369aeb95783543a82511"],["/new-portfolio/static/media/instaIcon.7b075d20.svg","7b075d2088d618f01434281dcb672502"],["/new-portfolio/static/media/openIcon.dbae4915.svg","dbae4915dd420297e50ae319219fe87c"],["/new-portfolio/static/media/twitterIcon.6d905d0b.svg","6d905d0b55d0ddc8cfe44425e638c1e7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/new-portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});