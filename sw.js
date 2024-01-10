/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/09/21/你好，世界！/index.html","0aaba4a955106cf1be2834179ee68148"],["/2023/09/21/可证明安全第三周学习日志/index.html","ec2a244b466ef4ad888c1538238d7245"],["/2023/09/22/weblog/index.html","6909cb0d5071e15ae7ad7d306bb60ee1"],["/2023/09/22/数据库第三周学习日志/index.html","e60064834eb61a307d09fa0cb0372ba1"],["/2023/09/22/自然语言处理第三周学习日志/index.html","bf58e8b4fd1176e17d4e5296be9b7352"],["/2023/09/23/cpp学习日志/index.html","382ae8a180e75a693cb413702dfff01f"],["/2023/09/23/淑芬第三周学习日志/index.html","20bd099ac9d8d9c9c1ac699da764debb"],["/2023/09/25/网络内容安全第四周学习日志/index.html","2e4d0027b9eee67e32a3478057e41625"],["/2023/09/26/安全协议第四周学习日志/index.html","25805204ee555e753568ce096e1cdfde"],["/2023/09/27/可证明安全第四周学习日志/index.html","7bac052ebcac0334955806aad34d8353"],["/2023/09/29/网络安全创新实验学习日志/index.html","5297e2aeaf0ee21ffb9880e3cefc88d4"],["/2023/09/30/数据库第四周学习日志/index.html","e5de15c9b6929247284cb41fe3e67a73"],["/2023/10/03/图像处理与信息隐藏第四周学习日志/index.html","f2464979bb8345ed89034a6ded67cbc4"],["/2023/10/04/安全协议第五周学习日志/index.html","4f78a1237ee3e5cb75afbcd6819d9e9c"],["/2023/10/04/淑芬第五周学习日志/index.html","127664fe3f7ae79bd0c7f6956f8d7bd3"],["/2023/10/05/网络内容安全第五周学习日志/index.html","2ac26e2de2da0db421c54fbbf29da68e"],["/2023/10/05/网络内容安全第五周学习日志PLUS/index.html","ece65356afabcd7b7d2d993ebfb340f4"],["/2023/10/07/Go语言学习日志/index.html","cb1c81fabeac9df6f10c43fd3bc5eb93"],["/2023/10/08/Environment-Blog/index.html","6f250b5e4afa79248efb92e85aa57bdb"],["/2023/10/08/数据库第六周学习日志/index.html","b3e2a210a0ee39c21e0de4380d079a5a"],["/2023/10/10/安全协议第六周学习日志/index.html","13efbac378ffa1067069b2d425e659af"],["/2023/10/10/密码学竞赛代码记录/index.html","f8ae6c04e8e170fc3775a85d31192d10"],["/2023/10/11/可证明安全第六周学习日志/index.html","c9548748a9ca3a9d8f76cb52ebf7b389"],["/2023/10/13/自然语言处理第六周学习日志/index.html","89c35f25f5e691244e3c03cd4e5a1cae"],["/2023/10/17/安全协议第七周学习日志/index.html","5807925b31db47af2e25a29abc7f8698"],["/2023/10/18/贝叶斯中文文本分类/index.html","0d7bbe4ecd778c4fd429d90170ca1f17"],["/2023/10/20/图像处理与信息隐藏第七周学习日志/index.html","88f3c10fc005dccee13d73db69d67178"],["/2023/10/20/淑芬第七周学习日志/index.html","cab0d4eeca279c71d8fe5150f4ab180a"],["/2023/10/25/可证明安全第八周学习日志/index.html","e2efbfe4c67a60bb1185f08cbddb4d38"],["/2023/10/31/网络安全创新实验LAB7/index.html","4c56cf3cc5330c03056754bfbd4e930d"],["/2023/11/02/数据库实验记录/index.html","b27e42ffe0f592d54eba2b354049dd06"],["/2023/11/13/Database-Manual/index.html","4bb411ffe1147b610c77cd1ebe0ef823"],["/2023/11/16/数据库第11周学习日志/index.html","0aed9de6adbaa9f0c1c9edb03f9559ed"],["/2023/11/17/数据库第12周学习日志/index.html","68cc5785d431b68812a955401f5b72b8"],["/2023/11/19/数分第11周学习日志/index.html","ead013f90245dc167afbc62e157efc60"],["/2023/11/21/可证明安全第12周学习日志/index.html","21169e38de3707d6e6a7a659fb7a7825"],["/2023/11/22/CE-Log/index.html","5efcfeefaff710386533bab65443c218"],["/2023/11/25/数分第13周学习日志-DESKTOP-P9VTQEA/index.html","6382f203004f25b78e904ae9096fb8db"],["/2023/11/25/数分第13周学习日志/index.html","59a660b956d846d57202a7316fccea43"],["/2023/11/27/GANLM-Encoder-Decoder-Pre-training-with-an-Auxiliary-Discriminator/index.html","186cf178d76aa55b553471733c54a282"],["/2023/11/27/机器学习学习记录/index.html","6f3b19a8356b8e3fe8d6aba4f46170dc"],["/2023/12/06/数分第14周学习日志/index.html","1ff839f3f76fdf9d491b247b36b12d4e"],["/2023/12/08/api-fox学习日志/index.html","707cd8af0cec8b8738c1946e3749c9dd"],["/2023/12/08/数分第15周学习日志/index.html","035e5a4d4e62f71f538ae692009fe16d"],["/2023/12/11/Servlet学习日志/index.html","19784f4bac5630a491b6f6b85ce217d5"],["/2023/12/15/数据库实验4学习日志/index.html","b341249de94a908b5e439cf7ed17cba7"],["/2023/12/28/数分第17周学习日志/index.html","5cd56a627a5589e7c561a73ffe9acf85"],["/about/index.html","61359a22cdd4f7fc7ff839830395b7bc"],["/archives/2023/09/index.html","7b0201b6131bd7a0df8b945d422b0df2"],["/archives/2023/09/page/2/index.html","1e5c3b04498fb3da6c037b6ec8c54bac"],["/archives/2023/10/index.html","c999fdd26ff78231731ab1711f2b4395"],["/archives/2023/10/page/2/index.html","3479ce0121ca50b4ed8529d74c26b237"],["/archives/2023/11/index.html","d7fabff2a844d8b67caf8e08797bedd3"],["/archives/2023/11/page/2/index.html","2f0215f24c62914fdd733bc92defa763"],["/archives/2023/12/index.html","387fad784b3ac07d8f55aaebae9072f6"],["/archives/2023/index.html","fe0f2f5fe206dffa88182d2ab9f45200"],["/archives/2023/page/2/index.html","cb6ba74cb57cffcca14efbf95ebe8f20"],["/archives/2023/page/3/index.html","8745e603ae41f3ce2ee6893622b05376"],["/archives/2023/page/4/index.html","849bac307b045dee062c18d633d740b5"],["/archives/2023/page/5/index.html","b6d6176f6661eedec3a97d58223b380c"],["/archives/index.html","4c55ba060d753db495122da5b18e28c5"],["/archives/page/2/index.html","a023fcf4d56c5b1c5613b8c49bced5a9"],["/archives/page/3/index.html","f9170d3ca2b0b242411e1234633d7b76"],["/archives/page/4/index.html","d57c6f35be790c5c45694e6e8a486ba4"],["/archives/page/5/index.html","e2f43940648d271fc1703c2787a329cb"],["/categories/index.html","d0e34b8f3f20594837a7abc56ae31d70"],["/categories/学习/C-学习/index.html","5f123f64d771d7d219d5f64891cd01dd"],["/categories/学习/Go学习/index.html","95b7128f0332308598c1505e7c9545cb"],["/categories/学习/index.html","ea996baaae5ddb64b7337d05855dc8d6"],["/categories/学习/page/2/index.html","decfb220c689733365eb6467102e1451"],["/categories/学习/page/3/index.html","4addcc07236af7a58472f207ccea5648"],["/categories/学习/可证明安全/index.html","c24f95bda8ee8196cce2a4daa4c92a99"],["/categories/学习/图像处理/index.html","803d6bc6f38af2c4af52596f31803495"],["/categories/学习/安全协议/index.html","63d1f46290522a8450cd0340953b3b28"],["/categories/学习/实践知识/index.html","6c3220dc6c38d04416cab830e55a937c"],["/categories/学习/数学/index.html","4d2b065c2c16194e7f3e3e4ffdb9fa24"],["/categories/学习/数据库/index.html","da1d2f6cff8426cdf258bad1d12a76ab"],["/categories/学习/网络内容安全/index.html","09339e92bad23d35fb7e72093ea43c8e"],["/categories/学习/自然语言处理/index.html","97f71976af284f729784d0d7b2f1e5b0"],["/categories/竞赛/index.html","f9bde5f14a62621f0088b1afa38072fa"],["/categories/竞赛/密码学竞赛/index.html","d1e79847bad85216852d6c58109639b3"],["/categories/闲聊/index.html","ad95e5b7c8f9ca2226bf4760c20dde10"],["/categories/闲聊/建站理念/index.html","528ac2db2a7ecae52cdb666753995df8"],["/css/main.css","26d152abbe98da0ef52961c303149a93"],["/images/PR算法.png","3d684d000595d3b4e93172e74f3008ab"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","575ddfe8a243cb271a6b90686551b174"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.jpg","2ecbcb946d1977860a99ea433eb530af"],["/images/图像处理与信息隐藏/第四周/DMOS.png","f555f8dcb6bca7fc10c20910da8c944f"],["/images/图像处理与信息隐藏/第四周/NMSE.png","9dee9a92ef5a8dbf015610f3faa6934a"],["/images/图像处理与信息隐藏/第四周/PMSE.png","2628eee2cd3a9c798d95a69da747234c"],["/images/图像处理与信息隐藏/第四周/PSNR.png","3a0c36e9ea954e92c09e47860d746f7e"],["/images/图像处理与信息隐藏/第四周/YCbCr.png","c3174aedb51a5a60fcf907e1d6aa2eb4"],["/images/图像处理与信息隐藏/第四周/YIQ.png","b61262f3cecbb244c9fc1e93ad3c8704"],["/images/图像处理与信息隐藏/第四周/YUV.png","bac8edc63d854b150517a01763150a30"],["/images/图像处理与信息隐藏/第四周/噪声.png","c555b14dc5c8f83419263b79cd96807a"],["/images/爬虫原理.png","656ff019ccd83cf7b9d580a03404c3d3"],["/images/网络信息获取流程.png","b046b18fc9bf201edea688eba315f663"],["/images/网络环境下的信息内容获取模型.png","8e39d66bcc37f9a49da9f08df9899df4"],["/index.html","5a0c16a20b2bc20775ca89b233b75d8f"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","50a33f3253d5b324fba8c591ef6ca7f5"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","f6b62266edd2218dc691e55fcc52e48c"],["/page/3/index.html","c35d7ad6931cc98a5d281504092202ec"],["/page/4/index.html","95daf16514ba5a1b0c4dc554d2dd0e38"],["/page/5/index.html","073884dcc3792bf55fd870316c16be3b"],["/resources/index.html","06f891bb4b5082d216cce73a3a93b654"],["/sw-register.js","313501481a0580c8ef285a0cd8a8dbb5"],["/tags/index.html","6679103a257f9d940be3e22def7ec7ea"],["/tags/学校课程/index.html","c5ecef16dc308eb882776efee1a65f0b"],["/tags/学校课程/page/2/index.html","c982cff4d85f476a8dfd9328c672964d"],["/tags/环境开发/index.html","4fd16919aecf05a20a1c2f2370dad00a"],["/tags/编程语言/index.html","f27322239de1bef5ccc15732f90c67c6"]];
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
