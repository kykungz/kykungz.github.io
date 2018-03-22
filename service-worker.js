"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","efd9612782aec3360462e1cc0a7f3d57"],["/static/css/main.34908ec2.css","197580eccbd7ea2cd705e5e1d462ee4d"],["/static/js/main.6eb95d26.js","50e445d72bc7aa914e2de34145efe1c6"],["/static/media/1.01f98518.jpg","01f98518fc44347d78eaf0df2f9a7179"],["/static/media/1.25416bb2.png","25416bb24390ca1b4a459df7ddaab667"],["/static/media/1.29c0b861.png","29c0b861dfaf738136ace2d82baab46e"],["/static/media/1.32af44b1.jpg","32af44b19d4a37c43f429a85dc925308"],["/static/media/1.38d9794c.png","38d9794c9013aa44b225724ab6756d3b"],["/static/media/1.4ecdcf87.png","4ecdcf87bba7989cf63705aa3b2c92f8"],["/static/media/1.6240c71c.png","6240c71c5e385fab17c47edf16fc9d35"],["/static/media/1.64318d58.jpg","64318d588079e5054a6b9baf6591665b"],["/static/media/1.73a968a8.png","73a968a836ed1ab8ad733a3b4044a982"],["/static/media/1.7c459a8a.png","7c459a8ad618dc3f5f96250232d34764"],["/static/media/1.9126e001.jpg","9126e001aa13fcdc44afd1b9e15af1a2"],["/static/media/1.9353c220.png","9353c220caa480bf05632169f393dedd"],["/static/media/1.9f21b6a7.png","9f21b6a72bf5ceee55b34fb99bb31363"],["/static/media/1.b137d0c4.png","b137d0c4172594e1261e0d85d9a0c513"],["/static/media/1.b570da7b.jpg","b570da7b74fecd0bf7ce9d6bde0be58a"],["/static/media/1.c6ac9bc0.jpg","c6ac9bc0431768e3cbf365ceb922f495"],["/static/media/1.e9a609aa.png","e9a609aab3dd535a3e667589c0ba3198"],["/static/media/1.f58bb1aa.png","f58bb1aaeb81122134d05c3c16577961"],["/static/media/2.0f41bff0.jpg","0f41bff0101070da97431b53b61b4c2b"],["/static/media/2.26736dd5.png","26736dd58e4a85d742e17dcfc668a29c"],["/static/media/2.3db4ee90.gif","3db4ee90568f32c4c69cb795ffa0cd43"],["/static/media/2.3f87ae6f.png","3f87ae6fb17ce58ac0dc07a32e383ceb"],["/static/media/2.453cfba3.png","453cfba38129ea544cf85f54dc336e4c"],["/static/media/2.6798fe68.png","6798fe6819bdc7b826a4befb558f33e9"],["/static/media/2.6927c444.jpg","6927c444b7629565c08148aba49b8e99"],["/static/media/2.73d811fd.png","73d811fd127c9d784eee742143eb1cf3"],["/static/media/2.81efc4ad.jpg","81efc4ad86e13a855baf6dec8579a229"],["/static/media/2.bdc154c0.gif","bdc154c0eb11126a36d0c90801a2adcb"],["/static/media/2.e0ee1c35.jpg","e0ee1c353aad440366f8da04ccdc14b1"],["/static/media/2.f59a588e.png","f59a588e05dfc3cda54c9711212c3885"],["/static/media/3.da08be29.jpg","da08be290fb2cf89d586c90bb616c37a"],["/static/media/3.e349b78e.png","e349b78ee46933fd25456bddc7fb9249"],["/static/media/3.f65df317.png","f65df3176197d67bcb29b1c4ff360903"],["/static/media/4.0e72a095.jpg","0e72a095f849a001f42306ae0e62cfac"],["/static/media/5.abecf3ae.jpg","abecf3ae70d55b5a3ca55ec4ae640843"],["/static/media/6.f63045c9.jpg","f63045c9c806a14593152e777c603fe7"],["/static/media/Screen Shot 2560-11-26 at 18.41.43.96267ab5.png","96267ab50a912b174003b7f2e8f7dd1d"],["/static/media/Screen Shot 2560-11-26 at 18.44.01.54f8d871.png","54f8d8718f5f456a1c41521c3f1e1e13"],["/static/media/Screen Shot 2560-11-26 at 18.44.59.7767d4cb.png","7767d4cb24258ae91bce8697aaefbf3c"],["/static/media/bcbk8.792d3fa4.png","792d3fa4950ef9b96296add1b2eb4b37"],["/static/media/browserconfig.293dd5c6.xml","293dd5c69ec3190f75e3760681f3ada3"],["/static/media/devicon.0f964a72.woff","0f964a72f8fbdf9c8d4e0122b8effb40"],["/static/media/devicon.29f80b00.ttf","29f80b00a7b4641183f96f08be374697"],["/static/media/devicon.681fa39a.eot","681fa39a79c22f0035a0720e2b2bda3b"],["/static/media/devicon.74e6e6c3.svg","74e6e6c3dcfca56767adabe83a510f2e"],["/static/media/favicon.18d42ce9.ico","18d42ce9f7d5ffe6848502d866d20393"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/gui.168b875b.png","168b875be42884938a52ebbdb9401e3d"],["/static/media/header-blur.fa593651.png","fa593651ff9037b7b3a19ea4010c1145"],["/static/media/ku.03acce5c.jpg","03acce5cf3ec3685cc2b5bc221496c92"],["/static/media/pong.a2c73cbe.png","a2c73cbe750c672c975dd593da19e8f5"],["/static/media/portrait.b81a455c.png","b81a455c0a4b2b55f14ce9ed6bbecc34"],["/static/media/remote.11c24c72.png","11c24c72dfbd3965c6e994ae426f0367"],["/static/media/reversi.e2cef217.png","e2cef217b38bbb4612b7c192b8212d5d"],["/static/media/safari-pinned-tab.408280c5.svg","408280c577818fcb28b41d1b344f03f1"],["/static/media/search.4fb2b881.png","4fb2b881692a05dd11eb0334cc7d5f82"],["/static/media/spacefighter.63cab9ad.png","63cab9ad4435dea17662042d6853f346"],["/static/media/takecare-hardware.26c0f4c2.png","26c0f4c2dcf9f8ec51b25bf6a81d9f0f"],["/static/media/takecare-mobile-1.98552fa5.png","98552fa58db0d9fc8f50ea1d5d041115"],["/static/media/takecare-mobile-2.5c1ec40e.png","5c1ec40ef28813c4d861039049825d7a"],["/static/media/ted.a8b267c2.jpg","a8b267c2f6c99ddeb4d7c34cfa314f8d"],["/static/media/whack.b2711aff.gif","b2711afff9acfe3b7d18f4511739f689"],["/static/media/ywc15.4a9d7808.jpg","4a9d7808ead49564eb4ddf35bbfc67d5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});