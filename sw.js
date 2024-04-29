/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/09/21/学校课程/可证明安全/可证明安全第三周学习日志/index.html","5e7487dde73f689b49ff52e4092d843c"],["/2023/09/21/闲聊/你好，世界！/index.html","2e01c42a702d2370c2247d8a17f87ad7"],["/2023/09/22/学校课程/数据库/数据库第三周学习日志/index.html","65354f248ba40d06e67c7dbbdf15da42"],["/2023/09/22/学校课程/自然语言处理/自然语言处理第三周学习日志/index.html","2baa08129f335df3da2c6ad2ad717148"],["/2023/09/22/环境配置/weblog/index.html","5043bceccc9686007386fa501132d1bb"],["/2023/09/23/学校课程/工科数学分析/淑芬第三周学习日志/index.html","edf1d69b7dffdb177ed1ec498d655f35"],["/2023/09/23/科研竞赛/cpp学习日志/index.html","f2fcb6cd2e204c1b81686196befa1c7f"],["/2023/09/25/学校课程/网络内容安全/网络内容安全第四周学习日志/index.html","0cb6ed5e325e3382b63408b85bc139ea"],["/2023/09/26/学校课程/安全协议/安全协议第四周学习日志/index.html","ed7d9fecf59cfccf1b4b38b37f0abe08"],["/2023/09/27/学校课程/可证明安全/可证明安全第四周学习日志/index.html","78b19f2537c1bea77b7274f5996fe8c4"],["/2023/09/29/学校课程/网络安全创新实验/网络安全创新实验学习日志/index.html","6ac01018d590eb392cf0c1d1f5be5816"],["/2023/09/30/学校课程/数据库/数据库第四周学习日志/index.html","3274d8b00e11dfa657ba209302928172"],["/2023/10/03/学校课程/图像处理与信息隐藏/图像处理与信息隐藏第四周学习日志/index.html","7f0b38608ff3598d25c83990ce6547e0"],["/2023/10/04/学校课程/安全协议/安全协议第五周学习日志/index.html","ce30691c21a9461342502e89fafb47ec"],["/2023/10/04/学校课程/工科数学分析/淑芬第五周学习日志/index.html","5df334b1e35144b46158b177269b0d97"],["/2023/10/05/学校课程/网络内容安全/网络内容安全第五周学习日志/index.html","cc034269281351543ded881a996ddfe2"],["/2023/10/05/学校课程/网络内容安全/网络内容安全第五周学习日志PLUS/index.html","d6e024be8260890a5738cce58dc7eebd"],["/2023/10/07/学校课程/区块链实践/Go语言学习日志/index.html","6911d60ab7df52b1a23b2b2ef93da8a8"],["/2023/10/08/学校课程/数据库/数据库第六周学习日志/index.html","877ad914568839248fe9cc31b80f0604"],["/2023/10/08/环境配置/Environment-Blog/index.html","20d093e15e0065a03634d5c9de8dd100"],["/2023/10/10/学校课程/安全协议/安全协议第六周学习日志/index.html","e18c2e7cf65a408aa1a8d80712420b3e"],["/2023/10/10/科研竞赛/密码学竞赛代码记录/index.html","f630999ea18fb5182df2b222704771b0"],["/2023/10/11/学校课程/可证明安全/可证明安全第六周学习日志/index.html","ab2665ce84cf842c3001df6b55a8932f"],["/2023/10/13/学校课程/自然语言处理/自然语言处理第六周学习日志/index.html","30ce991cb67ae33c05413e2a8033f01f"],["/2023/10/17/学校课程/安全协议/安全协议第七周学习日志/index.html","2d2a98f639928bf597aa45eb644427c1"],["/2023/10/18/学校课程/网络内容安全/贝叶斯中文文本分类/index.html","ee8dd7afe24f1b763814d20b9d7e4a25"],["/2023/10/20/学校课程/图像处理与信息隐藏/图像处理与信息隐藏第七周学习日志/index.html","73aa8b72ddcca3deb2f3bade0a5f1ae1"],["/2023/10/20/学校课程/工科数学分析/淑芬第七周学习日志/index.html","6ddfef74a6a2640db2843d4f67c89d81"],["/2023/10/25/学校课程/可证明安全/可证明安全第八周学习日志/index.html","4f247d78992a94c31681a198df9b9b44"],["/2023/10/31/学校课程/网络安全创新实验/网络安全创新实验LAB7/index.html","21e5b6ada7c044b28b6e855086011de2"],["/2023/11/02/学校课程/数据库/数据库实验记录/index.html","d123af1f5860dc1fdfd8b09964ceb017"],["/2023/11/13/学校课程/数据库/Database-Manual/index.html","38fbd6147d46aeacc74a39f7e60fba8c"],["/2023/11/16/学校课程/数据库/数据库第11周学习日志/index.html","b9a58268c9feae82d4532dc7843d4c11"],["/2023/11/17/学校课程/数据库/数据库第12周学习日志/index.html","6cb74fba207337c317ce3940a4820242"],["/2023/11/19/学校课程/工科数学分析/数分第11周学习日志/index.html","43cf76259267991db34f25021747a50e"],["/2023/11/21/学校课程/可证明安全/可证明安全第12周学习日志/index.html","750ac555d1c9c1d76cba30e7c96afc0f"],["/2023/11/22/科研竞赛/CE-Log/index.html","9a8f75a5b0f969da96e4a12995b48005"],["/2023/11/25/学校课程/工科数学分析/数分第13周学习日志/index.html","e7584c279d8f5fbfeb38f1f485078eca"],["/2023/11/27/科研竞赛/GANLM-Encoder-Decoder-Pre-training-with-an-Auxiliary-Discriminator/index.html","66ba8733fe278773e283426bb9686f79"],["/2023/11/27/科研竞赛/机器学习学习记录/index.html","d601b51f1be7e34877b5e9c56a630940"],["/2023/12/06/学校课程/工科数学分析/数分第14周学习日志/index.html","2b6f0d50297c1ef3ffd20d215896fbac"],["/2023/12/08/学校课程/工科数学分析/数分第15周学习日志/index.html","965c1c452fbfcaa7d5bcd36ba6f6a26e"],["/2023/12/08/学校课程/数据库/api-fox学习日志/index.html","aa3843596840f6ff8342759940761be5"],["/2023/12/11/学校课程/数据库/Servlet学习日志/index.html","9c3037d626bdbb8657364fa3ec65265f"],["/2023/12/15/学校课程/数据库/数据库实验4学习日志/index.html","a9db46e59b83855d2f742183e3803ab3"],["/2023/12/28/学校课程/工科数学分析/数分第17周学习日志/index.html","a7decf2cdb7b1eb0f60881bfddd0047b"],["/2024/01/13/hexo配置文件学习/index.html","397547f579560ac14136ce0275844e64"],["/2024/01/13/学校课程/安全协议/安全协议课程总结/index.html","cef0bfe9124cc1c9ec28a4e1a6b301db"],["/2024/01/21/科研竞赛/Code-Lemma/index.html","9efa221af73c20abb3ed84c48669e9ed"],["/about/index.html","38a1a4cdb832769bc0eae2cf62c58a4e"],["/archives/2023/09/index.html","294726df11e7c7127ab4ced4e36d6177"],["/archives/2023/09/page/2/index.html","0675dc7ebfdef3d93416b5a5fb69ba7b"],["/archives/2023/10/index.html","456d049de081f61fb0bcc894ca750104"],["/archives/2023/10/page/2/index.html","e7f9f5cf269308b4f95203e95c123ac5"],["/archives/2023/11/index.html","6f5e789bee9d839254a28017b13b5e1d"],["/archives/2023/12/index.html","7fd3f496e0bb9b1610aa6d31621ce304"],["/archives/2023/index.html","e56bbe3412ef56f4b9dc8a5a39da70b2"],["/archives/2023/page/2/index.html","3029d46d7241b2996dcd2e2653935f87"],["/archives/2023/page/3/index.html","be634d8ddaa5c64d1ce3a100debe5a42"],["/archives/2023/page/4/index.html","80b0e36f59dfed2603004f05c5b31575"],["/archives/2023/page/5/index.html","b395275dd3b03e38db857c4a80e3c545"],["/archives/2024/01/index.html","a71c4480a7adfae02d1b5c83381cb102"],["/archives/2024/index.html","effc42316490b3c0759b7eb5f2a9252c"],["/archives/index.html","393ae8f4b4887562e2c6dcef3df3e30c"],["/archives/page/2/index.html","2c5c5cd6e66763dccf811f985dae327b"],["/archives/page/3/index.html","e621f04806931beb4aade8c13f80094a"],["/archives/page/4/index.html","5bff6301cbd02d33168ab80b46a2b7ac"],["/archives/page/5/index.html","6d4455426b8fc1abb6a5738992474a2a"],["/categories/index.html","d3c22b1de180e9fbbaed2fe8e9fdd4a9"],["/categories/学习/C-学习/index.html","d945fdc8f930090bc1e9a267e977d3a9"],["/categories/学习/Go学习/index.html","1cdbe00caf5a2887bb9fabf37aa62ae4"],["/categories/学习/index.html","90ed8c6b0a7b20351e81a42ea0bf7ae9"],["/categories/学习/page/2/index.html","c70d5fbec05dd3eb53a41736436ba799"],["/categories/学习/page/3/index.html","324610755d44df53206e30a0d707e6ca"],["/categories/学习/page/4/index.html","12d505b875cfa010c390efcdadc0b69f"],["/categories/学习/可证明安全/index.html","c01e5ddeb552000280d3db92362dfd02"],["/categories/学习/图像处理/index.html","7520861b9b72ecd23ff6103c5f3579e8"],["/categories/学习/安全协议/index.html","8f959526189e720d763558cfef73fb21"],["/categories/学习/实践知识/index.html","10009382861b9969a52acf0337e75128"],["/categories/学习/数学/index.html","3f69b2f72867e95e3790bb92a02e24d6"],["/categories/学习/数据库/index.html","7d9c129d84f68f60758bebdd89cf1f6c"],["/categories/学习/网络内容安全/index.html","d2b07476c39d1db844df316921dab59e"],["/categories/学习/网络创新安全/index.html","48c318e3634c6ebfb93464cf0222e465"],["/categories/学习/自然语言处理/index.html","5a2ce597f8d7b763c5f055e8c87b0118"],["/categories/竞赛/index.html","e4c11321123e605c8d92997895eed835"],["/categories/竞赛/冯如杯专利/index.html","41445ad4a08be510a290cde5352b624e"],["/categories/竞赛/密码学竞赛/index.html","7fc69be73226f0f95073430e6d61718f"],["/categories/闲聊/index.html","4566785d5f8f7918c18aa64c298a8238"],["/categories/闲聊/建站理念/index.html","2130af37a3c0cd2859e7faccd0941fdf"],["/css/main.css","26d152abbe98da0ef52961c303149a93"],["/images/PR算法.png","3d684d000595d3b4e93172e74f3008ab"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","575ddfe8a243cb271a6b90686551b174"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.jpg","2ecbcb946d1977860a99ea433eb530af"],["/images/图像处理与信息隐藏/第四周/DMOS.png","f555f8dcb6bca7fc10c20910da8c944f"],["/images/图像处理与信息隐藏/第四周/NMSE.png","9dee9a92ef5a8dbf015610f3faa6934a"],["/images/图像处理与信息隐藏/第四周/PMSE.png","2628eee2cd3a9c798d95a69da747234c"],["/images/图像处理与信息隐藏/第四周/PSNR.png","3a0c36e9ea954e92c09e47860d746f7e"],["/images/图像处理与信息隐藏/第四周/YCbCr.png","c3174aedb51a5a60fcf907e1d6aa2eb4"],["/images/图像处理与信息隐藏/第四周/YIQ.png","b61262f3cecbb244c9fc1e93ad3c8704"],["/images/图像处理与信息隐藏/第四周/YUV.png","bac8edc63d854b150517a01763150a30"],["/images/图像处理与信息隐藏/第四周/噪声.png","c555b14dc5c8f83419263b79cd96807a"],["/images/爬虫原理.png","656ff019ccd83cf7b9d580a03404c3d3"],["/images/网络信息获取流程.png","b046b18fc9bf201edea688eba315f663"],["/images/网络环境下的信息内容获取模型.png","8e39d66bcc37f9a49da9f08df9899df4"],["/index.html","de5d186a607b02eed7c9bfbf8b5ba058"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","798745b3bc881d61510ee71580c12df3"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","03817acb33764c676c787a95d47783a4"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","246686998c69a349f946c512054be34d"],["/page/3/index.html","f373e661cdf30a2961aabf67be76cde1"],["/page/4/index.html","81ae53c12c6df92e4e4e7420f6aba71e"],["/page/5/index.html","1b853e64721ce2e8ce1f814c9cb877ed"],["/resources/index.html","6781397e860ba17ffc37c360cd78ba5a"],["/sw-register.js","06cf484c8e452a3002058431bfad3ba7"],["/tags/index.html","d561f2495cd4fbc1f4ad0bd87b2330c4"],["/tags/学校课程/index.html","8aa8249c32067b8ae12ea77dde787303"],["/tags/学校课程/page/2/index.html","2d4db7d510316660733f024d8754c38e"],["/tags/学校课程/page/3/index.html","3816ba3a508000979ed3deab9adf9bc0"],["/tags/学校课程/page/4/index.html","4b09b59d0faccb0024f7246945bcd183"],["/tags/环境开发/index.html","d8d3c5c89fbed2b809025b0d0f679450"],["/tags/科研竞赛/index.html","fd81034ff80291b54b446733ad0ec8b1"],["/tags/编程语言/index.html","6828835adfdb02fd0bd32b10f23f0f59"],["/tags/闲聊档/index.html","844259576280d32594d0aeac1cb86138"]];
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
