/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/09/21/你好，世界！/index.html","1456781d837d31bb93816cf3e34e5722"],["/2023/09/21/可证明安全第三周学习日志/index.html","722722adfc216c62e681f8d66461575f"],["/2023/09/22/weblog/index.html","98c03b94b0cfb30cfcb9ab141467dbb8"],["/2023/09/22/数据库第三周学习日志/index.html","79e919259fb35859bcd1a9b7ab538d21"],["/2023/09/22/自然语言处理第三周学习日志/index.html","e53d7617549709d9b369e7d97d5a0be1"],["/2023/09/23/cpp学习日志/index.html","9f0ece74ea88d48a8165ef6e1ff4ae83"],["/2023/09/23/淑芬第三周学习日志/index.html","86a5f2e2e4eca4d1770b9ceaae4f0796"],["/2023/09/25/网络内容安全第四周学习日志/index.html","49ecbb1451dbea3af5e17ce7a370a301"],["/2023/09/26/安全协议第四周学习日志/index.html","e907afdd963805c8897b9a49ee6307fc"],["/2023/09/27/可证明安全第四周学习日志/index.html","12690d81778bb99711cdd63fdcb0b5a2"],["/2023/09/29/网络安全创新实验学习日志/index.html","477c1e7c1833adc39e6f00327e19ba30"],["/2023/09/30/数据库第四周学习日志/index.html","ef111371ee9d6cd88319b2ad886c9e89"],["/2023/10/03/图像处理与信息隐藏第四周学习日志/index.html","e442e8c73fb82cac1722ffa0948a81c1"],["/2023/10/04/安全协议第五周学习日志/index.html","ba11691974f86a1f356aae60694b2d04"],["/2023/10/04/淑芬第五周学习日志/index.html","84008aa8455c3966ec6d43380180209e"],["/2023/10/05/网络内容安全第五周学习日志/index.html","337f75216fb7919e24886d38ca4620da"],["/2023/10/05/网络内容安全第五周学习日志PLUS/index.html","6abdfce4885deb46e1610f4e26f2e344"],["/2023/10/07/Go语言学习日志/index.html","89e1f3bdd7d9b030ab9a8bee9b68dac4"],["/2023/10/08/Environment-Blog/index.html","945d9e8e64cbe13ba77c2b7735dce33c"],["/2023/10/08/数据库第六周学习日志/index.html","7e7ff1133b7e92fbc15aa9471cbfb508"],["/2023/10/10/安全协议第六周学习日志/index.html","d9fe3722f94f253896744104d3c8c28c"],["/2023/10/10/密码学竞赛代码记录/index.html","3df5056086d79b085247902253e01610"],["/2023/10/11/可证明安全第六周学习日志/index.html","2921ec4ea5e44797bf7b61240bce7b65"],["/2023/10/13/自然语言处理第六周学习日志/index.html","5c04156a399127d57b8a5aad99b32a76"],["/2023/10/17/安全协议第七周学习日志/index.html","58dcca0072c2a2da032cfcbcc497627f"],["/2023/10/18/贝叶斯中文文本分类/index.html","2377879d5df8659a7ad84f0b4e07d2d0"],["/2023/10/20/图像处理与信息隐藏第七周学习日志/index.html","775ea425e526b72105f0e6ed769ed0ed"],["/2023/10/20/淑芬第七周学习日志/index.html","986cff4f9382efa53606ef1443293d3d"],["/2023/10/25/可证明安全第八周学习日志/index.html","b58966566f4d99595320107147cd024c"],["/2023/10/31/网络安全创新实验LAB7/index.html","51ff7dc8880a8e1196e930c90660b60d"],["/2023/11/02/数据库实验记录/index.html","721d9c925f2eb60e4cafc1d6041c2a2c"],["/2023/11/13/Database-Manual/index.html","cafaa77795314a244c6f7ca3213514ec"],["/2023/11/16/数据库第11周学习日志/index.html","a0afc75881d63497419501c0c237217a"],["/2023/11/17/数据库第12周学习日志/index.html","55d6553b70d7ec5b22dcfed7732fc340"],["/2023/11/19/数分第11周学习日志/index.html","da45f7bccfe3c8e4c52e5fda88c24a9d"],["/2023/11/21/可证明安全第12周学习日志/index.html","eb30ced2f82234215ff01ef465e16b70"],["/2023/11/22/CE-Log/index.html","5b9ed98988b9f8722f53df556e59d3a8"],["/2023/11/25/数分第13周学习日志/index.html","0247179b6180efbe8e6db7b214ad80e9"],["/about/index.html","6a59403f7ef673114440ce591a4c38f7"],["/archives/2023/09/index.html","4d5d49b78eddba18f661955041b4b8ef"],["/archives/2023/09/page/2/index.html","7403b505772e791bde26639e44732dc7"],["/archives/2023/10/index.html","ceb8d2c75fd65fa4555265f73dc70bc0"],["/archives/2023/10/page/2/index.html","d00cf897cff66aac1730c385aaa6f2aa"],["/archives/2023/11/index.html","013d44b65263ddc07cd3fd44f18f65d0"],["/archives/2023/index.html","269dc32aa66573de9ad3cc635e3d24a5"],["/archives/2023/page/2/index.html","969595f453896b3ab2639936ab823c53"],["/archives/2023/page/3/index.html","51440c5b1ec4c593ebd3ab68bb64c9a4"],["/archives/2023/page/4/index.html","3f0bf46b7e7b46cd3be7930ab39d5f2f"],["/archives/index.html","2295319c600dd000ccc573eaf026eb6e"],["/archives/page/2/index.html","b0d0029c32f4ae1947a3efe14183262c"],["/archives/page/3/index.html","da8016ac63ad7867b9e7de488b5ae584"],["/archives/page/4/index.html","142254625e04b942e864c108d9844c3b"],["/categories/index.html","7b34979ae78a1538f7030a72c5c2ef1f"],["/categories/学习/C-学习/index.html","23a6c2c9d354f9b9154c59ecf5871cb9"],["/categories/学习/Go学习/index.html","acb39a0f1ce5858aa9f13ae1f6296b29"],["/categories/学习/index.html","3615f085d639009248b710bb96538b5b"],["/categories/学习/page/2/index.html","5c8b78ae303e5caa50d0105667cea570"],["/categories/学习/page/3/index.html","4acf033c549cf29770475a3359240315"],["/categories/学习/可证明安全/index.html","5a49ba7cfaec207294223cb1b7993f55"],["/categories/学习/图像处理/index.html","b60df5ffbfe57b18dfc3725d000900c6"],["/categories/学习/安全协议/index.html","3899a372633a5f7ae5607071b661b24f"],["/categories/学习/实践知识/index.html","bfa0dd530817c4253b99bf449efc74fc"],["/categories/学习/数学/index.html","6a30bab614a240498832a836565d2514"],["/categories/学习/数据库/index.html","943e39c56873c83983415b7a80b95f23"],["/categories/学习/网络内容安全/index.html","4866e737be71a9e674ef237f95900e3e"],["/categories/学习/自然语言处理/index.html","15fdcb5e78a95bed08ac4be9f0ef2809"],["/categories/竞赛/index.html","c87c098a7c519a294594ca7c87db0f1a"],["/categories/竞赛/密码学竞赛/index.html","f41b05418494ab007963a8265498ff1c"],["/categories/闲聊/index.html","6711ff55cf4910dc71a298dc42b7d620"],["/categories/闲聊/建站理念/index.html","457cd33cc8ca5be5094c7330561b0617"],["/css/main.css","926c988332a980e2ab466da4f82f68c5"],["/images/PR算法.png","3d684d000595d3b4e93172e74f3008ab"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","575ddfe8a243cb271a6b90686551b174"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.jpg","2ecbcb946d1977860a99ea433eb530af"],["/images/图像处理与信息隐藏/第四周/DMOS.png","f555f8dcb6bca7fc10c20910da8c944f"],["/images/图像处理与信息隐藏/第四周/NMSE.png","9dee9a92ef5a8dbf015610f3faa6934a"],["/images/图像处理与信息隐藏/第四周/PMSE.png","2628eee2cd3a9c798d95a69da747234c"],["/images/图像处理与信息隐藏/第四周/PSNR.png","3a0c36e9ea954e92c09e47860d746f7e"],["/images/图像处理与信息隐藏/第四周/YCbCr.png","c3174aedb51a5a60fcf907e1d6aa2eb4"],["/images/图像处理与信息隐藏/第四周/YIQ.png","b61262f3cecbb244c9fc1e93ad3c8704"],["/images/图像处理与信息隐藏/第四周/YUV.png","bac8edc63d854b150517a01763150a30"],["/images/图像处理与信息隐藏/第四周/噪声.png","c555b14dc5c8f83419263b79cd96807a"],["/images/爬虫原理.png","656ff019ccd83cf7b9d580a03404c3d3"],["/images/网络信息获取流程.png","b046b18fc9bf201edea688eba315f663"],["/images/网络环境下的信息内容获取模型.png","8e39d66bcc37f9a49da9f08df9899df4"],["/index.html","40115843f4b0c9d6197322a56ea69835"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","50a33f3253d5b324fba8c591ef6ca7f5"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","6ca3784b9496fcab4621113fa4346188"],["/page/3/index.html","116cbeb86a60ca684d2c9573ae2db261"],["/page/4/index.html","24d8d04b7519df4ca96bd6f9caa8992d"],["/resources/index.html","bd423f65e2cadf1e598929a7111a657c"],["/sw-register.js","9db6b93753bc3931346cc1cf010566ea"],["/tags/index.html","d26dcfa5ebfe217845367284c7205c6e"],["/tags/学校课程/index.html","13b63ca60f098aadab5b4fdd5f7b6277"],["/tags/学校课程/page/2/index.html","de03ed8eeb62cf3b0cdd2d5c514727c1"],["/tags/环境开发/index.html","271639b8e2e6313d31567c5a7172527f"],["/tags/编程语言/index.html","505ae467394399de106bc2daee0c8bc9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
