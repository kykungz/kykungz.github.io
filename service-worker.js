"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","9386490d0d1b2b9c15a8363564c132ea"],["/static/css/main.fafc3270.css","5f7c4dcda65af0ed6734f45f3495e093"],["/static/js/main.c98be434.js","b9ee5e9ab3eabe69d0b1f0bbe31943dd"],["/static/media/1.0e9a789b.png","0e9a789b31cfee9bcce3a06349abe855"],["/static/media/1.2214067b.png","2214067b220c3c753147258edabee7e7"],["/static/media/1.3fb70b92.png","3fb70b9232233bfdb07a585e4a1db2c1"],["/static/media/1.5d54f074.jpg","5d54f07472ccb2629c762ac574c82432"],["/static/media/1.64318d58.jpg","64318d588079e5054a6b9baf6591665b"],["/static/media/1.802e1b56.png","802e1b567c0b17d5ccf0236355c0db7c"],["/static/media/1.9ba1af36.png","9ba1af3615d8186eaf6419fc58d86c6e"],["/static/media/1.a187547b.jpg","a187547b48cd4f1746fa4c1baf822d35"],["/static/media/1.a35e7a7f.png","a35e7a7f8a678c6ea766e173bfae696c"],["/static/media/1.a5f41494.png","a5f4149484606fc5f15fead499bfc6f0"],["/static/media/1.b186c37f.png","b186c37f3459a77ba19e33aea0ab3df8"],["/static/media/1.bc62be55.png","bc62be552b655c6b1a63301d2c3de8ef"],["/static/media/1.bd89711e.png","bd89711e75ff02d96a0412c8d0b58553"],["/static/media/1.be8172ec.jpg","be8172ecd20f80066b919c7fec0544df"],["/static/media/1.c34cc8a6.png","c34cc8a6ffccb27891454836d100c1a7"],["/static/media/1.fe7fc0d0.png","fe7fc0d02e9a9a3bcd5db4e3f3eba82c"],["/static/media/2.1edac9ca.png","1edac9ca3714932f7303704e6f6cd38b"],["/static/media/2.39d25886.png","39d25886551769954cae8cad4177ba88"],["/static/media/2.3db4ee90.gif","3db4ee90568f32c4c69cb795ffa0cd43"],["/static/media/2.453cfba3.png","453cfba38129ea544cf85f54dc336e4c"],["/static/media/2.71985da0.png","71985da01df369c53644eaffa4650623"],["/static/media/2.81efc4ad.jpg","81efc4ad86e13a855baf6dec8579a229"],["/static/media/2.8d212819.jpg","8d212819d42c3ed0dc7f97533104cbd8"],["/static/media/2.bdc154c0.gif","bdc154c0eb11126a36d0c90801a2adcb"],["/static/media/2.ea5bb6ca.png","ea5bb6ca960f02db4b47cf8c2e66b3a2"],["/static/media/2.f59a588e.png","f59a588e05dfc3cda54c9711212c3885"],["/static/media/2.fddd5673.jpg","fddd56738629f2545dd4a87b19cfcfe0"],["/static/media/3.3ad70973.png","3ad7097378d4c3944e52c20e5840ef4b"],["/static/media/3.9a36d363.jpg","9a36d3631b231149706a13dedd407f68"],["/static/media/3.ccb3aeaf.png","ccb3aeaf484e766b3ba47ad04c73cd1e"],["/static/media/4.f0adaa1f.jpg","f0adaa1f68c5e51e5d978a50929c283e"],["/static/media/5.086c0078.jpg","086c00784c682420819bc3c1c97840f3"],["/static/media/6.fe518610.jpg","fe518610af865f67bc7acc303e33cd38"],["/static/media/Screen Shot 2560-11-26 at 18.41.43.96267ab5.png","96267ab50a912b174003b7f2e8f7dd1d"],["/static/media/Screen Shot 2560-11-26 at 18.44.01.54f8d871.png","54f8d8718f5f456a1c41521c3f1e1e13"],["/static/media/Screen Shot 2560-11-26 at 18.44.59.7767d4cb.png","7767d4cb24258ae91bce8697aaefbf3c"],["/static/media/bcbk8.792d3fa4.png","792d3fa4950ef9b96296add1b2eb4b37"],["/static/media/browserconfig.293dd5c6.xml","293dd5c69ec3190f75e3760681f3ada3"],["/static/media/devicon.0f964a72.woff","0f964a72f8fbdf9c8d4e0122b8effb40"],["/static/media/devicon.29f80b00.ttf","29f80b00a7b4641183f96f08be374697"],["/static/media/devicon.681fa39a.eot","681fa39a79c22f0035a0720e2b2bda3b"],["/static/media/devicon.74e6e6c3.svg","74e6e6c3dcfca56767adabe83a510f2e"],["/static/media/favicon.18d42ce9.ico","18d42ce9f7d5ffe6848502d866d20393"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/gui.168b875b.png","168b875be42884938a52ebbdb9401e3d"],["/static/media/header-blur.fa593651.png","fa593651ff9037b7b3a19ea4010c1145"],["/static/media/pong.a2c73cbe.png","a2c73cbe750c672c975dd593da19e8f5"],["/static/media/portrait.b81a455c.png","b81a455c0a4b2b55f14ce9ed6bbecc34"],["/static/media/remote.11c24c72.png","11c24c72dfbd3965c6e994ae426f0367"],["/static/media/reversi.e2cef217.png","e2cef217b38bbb4612b7c192b8212d5d"],["/static/media/safari-pinned-tab.408280c5.svg","408280c577818fcb28b41d1b344f03f1"],["/static/media/search.4fb2b881.png","4fb2b881692a05dd11eb0334cc7d5f82"],["/static/media/spacefighter.63cab9ad.png","63cab9ad4435dea17662042d6853f346"],["/static/media/takecare-hardware.26c0f4c2.png","26c0f4c2dcf9f8ec51b25bf6a81d9f0f"],["/static/media/takecare-mobile-1.98552fa5.png","98552fa58db0d9fc8f50ea1d5d041115"],["/static/media/takecare-mobile-2.5c1ec40e.png","5c1ec40ef28813c4d861039049825d7a"],["/static/media/ted.32181864.jpg","32181864ac257d7825faaa5caa9d3779"],["/static/media/trirong-thai-400.f3922f6e.woff2","f3922f6eec7c49e36ba132233267c3d2"],["/static/media/whack.b2711aff.gif","b2711afff9acfe3b7d18f4511739f689"],["/static/media/work-sans-latin-400.011f6e38.woff2","011f6e38258d3f22c88254f534c2b308"],["/static/media/ywc15.0a69f8dd.jpg","0a69f8dda761714956c720b76df00635"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,c,t){var f=new URL(e);return t&&f.pathname.match(t)||(f.search+=(f.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),f.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),f=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),f]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});