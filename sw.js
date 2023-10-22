/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/09/21/你好，世界！/index.html","014c97a9acb640965f66bf6801f6a03f"],["/2023/09/21/可证明安全第三周学习日志/index.html","39008995830673f1c2975b0e4ad979d9"],["/2023/09/22/weblog/index.html","bb3c2e4d689a57e5342cd0b9bdb6f85d"],["/2023/09/22/数据库第三周学习日志/index.html","8661a8eb42f2ebabb8d82d4b94340452"],["/2023/09/22/自然语言处理第三周学习日志/index.html","aba475f780b3fbce022f4d4d4d00a9a7"],["/2023/09/23/cpp学习日志/index.html","7f53500a4145566dd22d167d4ea2d823"],["/2023/09/23/淑芬第三周学习日志/index.html","d2361f60d10d44a485b87dfebd4f84c8"],["/2023/09/25/网络内容安全第四周学习日志/index.html","0e00f2e9f8bbcf2e78daa9c92360d36a"],["/2023/09/26/安全协议第四周学习日志/index.html","f459015e95b6cf21f50d3eb71d633708"],["/2023/09/27/可证明安全第四周学习日志/index.html","158f1a4d628bb6bcec795181e0f9e53d"],["/2023/09/29/网络安全创新实验学习日志/index.html","fd2e8059af830242b798f74d41ee5582"],["/2023/09/30/数据库第四周学习日志/index.html","240ba21af83a945baa3b9b49a8d934a1"],["/2023/10/03/图像处理与信息隐藏第四周学习日志/index.html","e8e9e67a722f68a781989be479450ac0"],["/2023/10/04/安全协议第五周学习日志/index.html","d49e6db03c4a552a441c435a24740e56"],["/2023/10/04/淑芬第五周学习日志/index.html","6bdc80fc9a16e1c369335e790fc5f9ee"],["/2023/10/05/网络内容安全第五周学习日志/index.html","76651a96f2e94bdee94bb8d67b3b07c0"],["/2023/10/05/网络内容安全第五周学习日志PLUS/index.html","c3a9afb017b8b5cc10fad369662191fd"],["/2023/10/07/Go语言学习日志/index.html","b6dd0f7a7bb1a76aadc9a20b81dfc78c"],["/2023/10/08/Environment-Blog/index.html","8c926ba58408df3ca7a34298b4d9bcca"],["/2023/10/08/数据库第六周学习日志/index.html","7ad08aca3a4be8734da8bf86be17b720"],["/2023/10/10/安全协议第六周学习日志/index.html","fde0b996b4c0f86ab78292c66cd1728f"],["/2023/10/10/密码学竞赛代码记录/index.html","f7ee8a1b97e31d0e45ea602ade68aefd"],["/2023/10/11/可证明安全第六周学习日志/index.html","8daf0786da93a8dc7fa60d94b978bdee"],["/2023/10/13/自然语言处理第六周学习日志/index.html","cadea33a66c4637e24cb428ff90ddd3b"],["/2023/10/17/安全协议第七周学习日志/index.html","bae87cb5a4dd391adf282f1ad403142f"],["/2023/10/18/贝叶斯中文文本分类/index.html","e98bc510ec45573eea69e23ea2598f2f"],["/2023/10/20/图像处理与信息隐藏第七周学习日志/index.html","83d9c1e7f1ed597c6f710837506522aa"],["/2023/10/20/淑芬第七周学习日志/index.html","ea40491e6948c50aad00bbfa4f1e8b65"],["/about/index.html","7e2cc25d765afdefa48e75955d4361ba"],["/archives/2023/09/index.html","6fa62b1b658da0c11c642e8f2e148071"],["/archives/2023/09/page/2/index.html","75108b979c7fc3887e629e5a83ae4127"],["/archives/2023/10/index.html","d49cee6a6e986d2b029d3c117218e1ee"],["/archives/2023/10/page/2/index.html","461b5bf4bc6209312437cd73f934d3d1"],["/archives/2023/index.html","e7d863d87d45bd1e878792fb9ac52a86"],["/archives/2023/page/2/index.html","fb123dda0e8610dd56fc2717af9de2ca"],["/archives/2023/page/3/index.html","0a6a414415b33ba556eda022bae7c5e1"],["/archives/index.html","464f0443370fa74ab0dc1e46d3df5575"],["/archives/page/2/index.html","1c21cdbb3a2b973b32170b2beceb1cca"],["/archives/page/3/index.html","ad4ff6c025fb74afba9985c7211778c5"],["/categories/index.html","4b9963eefcaa3e53e85a9e62f047313c"],["/categories/学习/C-学习/index.html","0d5aad5b66e8bc9b3e9715bcde8b54f8"],["/categories/学习/Go学习/index.html","8abe07d2604821096bd7234744ccac45"],["/categories/学习/index.html","d0da19122df2290a6c351faec345cdc9"],["/categories/学习/page/2/index.html","fbdbb92d5cdd3919f79829a086b7e8cb"],["/categories/学习/page/3/index.html","e2be85c029640ea538e2cf80cdccb66f"],["/categories/学习/可证明安全/index.html","333a51ed4058c3fa4b2d5500423fec37"],["/categories/学习/图像处理/index.html","24fb65db15579bda4c3c29220ed147f2"],["/categories/学习/安全协议/index.html","2d0eef5993922d0662efddb962194c11"],["/categories/学习/实践知识/index.html","bd019568631595d3dfebc73eb6d3dea4"],["/categories/学习/数学/index.html","ccc01cfd36a64efec37ae9aff61380ae"],["/categories/学习/数据库/index.html","6585776d54a38797290c00c235243f53"],["/categories/学习/网络内容安全/index.html","d7827574f4db89b105b33f685aacf810"],["/categories/学习/自然语言处理/index.html","fae1bbb5b45c60206a0aabffc0e2b5cb"],["/categories/竞赛/index.html","ff978eef29bd47495623f06428988b05"],["/categories/竞赛/密码学竞赛/index.html","d1596458e8a9edac364096b1394ce1d5"],["/categories/闲聊/index.html","dbbe22ec52f1a0075f0b532ae187ab44"],["/categories/闲聊/建站理念/index.html","8456f418e607a74ccf3cb272562bb6ce"],["/css/main.css","926c988332a980e2ab466da4f82f68c5"],["/images/PR算法.png","3d684d000595d3b4e93172e74f3008ab"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","575ddfe8a243cb271a6b90686551b174"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.jpg","2ecbcb946d1977860a99ea433eb530af"],["/images/图像处理与信息隐藏/第四周/DMOS.png","f555f8dcb6bca7fc10c20910da8c944f"],["/images/图像处理与信息隐藏/第四周/NMSE.png","9dee9a92ef5a8dbf015610f3faa6934a"],["/images/图像处理与信息隐藏/第四周/PMSE.png","2628eee2cd3a9c798d95a69da747234c"],["/images/图像处理与信息隐藏/第四周/PSNR.png","3a0c36e9ea954e92c09e47860d746f7e"],["/images/图像处理与信息隐藏/第四周/YCbCr.png","c3174aedb51a5a60fcf907e1d6aa2eb4"],["/images/图像处理与信息隐藏/第四周/YIQ.png","b61262f3cecbb244c9fc1e93ad3c8704"],["/images/图像处理与信息隐藏/第四周/YUV.png","bac8edc63d854b150517a01763150a30"],["/images/图像处理与信息隐藏/第四周/噪声.png","c555b14dc5c8f83419263b79cd96807a"],["/images/爬虫原理.png","656ff019ccd83cf7b9d580a03404c3d3"],["/images/网络信息获取流程.png","b046b18fc9bf201edea688eba315f663"],["/images/网络环境下的信息内容获取模型.png","8e39d66bcc37f9a49da9f08df9899df4"],["/index.html","d8e8826ac23c0e6feb571af56ed294d3"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","50a33f3253d5b324fba8c591ef6ca7f5"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","191061181ec7c1006f3665c4765fe5f6"],["/page/3/index.html","e765744a774ee0407beb8a9f9cee16d5"],["/resources/index.html","53de7f5a5efbe03188ea014b7fe85fcd"],["/sw-register.js","eda6c833d970e08f178b67287c0973c2"],["/tags/index.html","b62ec4e55a1ca5b5ece2062951d545ff"],["/tags/学校课程/index.html","f00c8bf18d61ff647dbc9f2867935704"],["/tags/学校课程/page/2/index.html","e339ba71c9f048802802ef2bcfc95da4"],["/tags/环境开发/index.html","c61efb51ec238b4d67dc0010e774af9f"],["/tags/编程语言/index.html","91e97be998dd08b42f379b28f9ecb772"]];
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
