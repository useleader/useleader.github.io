/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/09/21/学校课程/可证明安全/可证明安全第三周学习日志/index.html","b23db1844e147f67549f8b689b179bfe"],["/2023/09/21/闲聊/你好，世界！/index.html","60bdac67603765962ba42330d49a47a0"],["/2023/09/22/学校课程/数据库/数据库第三周学习日志/index.html","69f9f9503277b9340b93b5ed4c1335f7"],["/2023/09/22/学校课程/自然语言处理/自然语言处理第三周学习日志/index.html","06fa51591fe2d951f9cd6d55d5930211"],["/2023/09/22/环境配置/weblog/index.html","6e26afac9deebd61cd8d75b2d279210f"],["/2023/09/23/学校课程/工科数学分析/淑芬第三周学习日志/index.html","c27c2c100dc3e560c9b187626f27254c"],["/2023/09/23/科研竞赛/cpp学习日志/index.html","2bf5cc592c4dec022e83df3ea65bca32"],["/2023/09/25/学校课程/网络内容安全/网络内容安全第四周学习日志/index.html","ba2990104b540880a69d496ebbcb2fc8"],["/2023/09/26/学校课程/安全协议/安全协议第四周学习日志/index.html","3642452b90951e7bb13e28cad29bba85"],["/2023/09/27/学校课程/可证明安全/可证明安全第四周学习日志/index.html","6de91e6c05c3e59e4d0c14672e7139d1"],["/2023/09/29/学校课程/网络安全创新实验/网络安全创新实验学习日志/index.html","5e30211de93f17cbb341fd3ac41abb91"],["/2023/09/30/学校课程/数据库/数据库第四周学习日志/index.html","a7c1dc35f33c7d8a00f9ad6afca426d7"],["/2023/10/03/学校课程/图像处理与信息隐藏/图像处理与信息隐藏第四周学习日志/index.html","df295ee79360de405f1502f8cbfc0b3f"],["/2023/10/04/学校课程/安全协议/安全协议第五周学习日志/index.html","f5bdd86d346ae423608c54b34e95b857"],["/2023/10/04/学校课程/工科数学分析/淑芬第五周学习日志/index.html","27c60bc231e6b8a78bd74c27a889617d"],["/2023/10/05/学校课程/网络内容安全/网络内容安全第五周学习日志/index.html","9d42452058008250e806d2b200d1c7f1"],["/2023/10/05/学校课程/网络内容安全/网络内容安全第五周学习日志PLUS/index.html","2baebf4dc80279f47979d83a26008cff"],["/2023/10/07/学校课程/区块链实践/Go语言学习日志/index.html","ac34af46a6c84cd20fbdba892c472256"],["/2023/10/08/学校课程/数据库/数据库第六周学习日志/index.html","6fee1304e4f8b201e65cea70c6df5a5e"],["/2023/10/08/环境配置/Environment-Blog/index.html","bb4356a5addd5aed517664510f32d1e0"],["/2023/10/10/学校课程/安全协议/安全协议第六周学习日志/index.html","38e161f96bcb57e2a2e0b18e38924363"],["/2023/10/10/科研竞赛/密码学竞赛代码记录/index.html","48678bf8fd2e0be71994d74ae7a48f38"],["/2023/10/11/学校课程/可证明安全/可证明安全第六周学习日志/index.html","d11166bbbc07aa00698fca9e1830143d"],["/2023/10/13/学校课程/自然语言处理/自然语言处理第六周学习日志/index.html","13dfd93e056454855fdfeffceb5f5523"],["/2023/10/17/学校课程/安全协议/安全协议第七周学习日志/index.html","34c600e70f11f91133cfd09e5c1bc91e"],["/2023/10/18/学校课程/网络内容安全/贝叶斯中文文本分类/index.html","4e53f5c14690411bbb06809f6fe51929"],["/2023/10/20/学校课程/图像处理与信息隐藏/图像处理与信息隐藏第七周学习日志/index.html","8399d9021077a17d4ab7f65cbf56a868"],["/2023/10/20/学校课程/工科数学分析/淑芬第七周学习日志/index.html","5ec6f7e4cfa32c7682323c83c6cd2b71"],["/2023/10/25/学校课程/可证明安全/可证明安全第八周学习日志/index.html","033480aeeb10aa902af4874fc81bd285"],["/2023/10/31/学校课程/网络安全创新实验/网络安全创新实验LAB7/index.html","81b9e3f7805a29e94546c06fcae3a57f"],["/2023/11/02/学校课程/数据库/数据库实验记录/index.html","eb88abc5aa8f9eb9af4adafd6d6e198c"],["/2023/11/13/学校课程/数据库/Database-Manual/index.html","46071e4e667c24fe29eb0627f2cc45bd"],["/2023/11/16/学校课程/数据库/数据库第11周学习日志/index.html","f0afbc8b1f9714330dc9b37619481839"],["/2023/11/17/学校课程/数据库/数据库第12周学习日志/index.html","a14a68c6aba1e980867ee18f45d24d82"],["/2023/11/19/学校课程/工科数学分析/数分第11周学习日志/index.html","98f2583e47cfc7ae0a109ddda78ebe11"],["/2023/11/21/学校课程/可证明安全/可证明安全第12周学习日志/index.html","fdb192a14d87d38a31501a4fe2026314"],["/2023/11/22/科研竞赛/CE-Log/index.html","5f3c905d01260b9c9427b20813c44bbd"],["/2023/11/25/学校课程/工科数学分析/数分第13周学习日志/index.html","91c67329383275ace94dc90096ef3522"],["/2023/11/27/科研竞赛/GANLM-Encoder-Decoder-Pre-training-with-an-Auxiliary-Discriminator/index.html","1823ccbb9249ad5beab09ca1d0a73965"],["/2023/11/27/科研竞赛/机器学习学习记录/index.html","3df2e06a7470fc1e96a2902a797e9b21"],["/2023/12/06/学校课程/工科数学分析/数分第14周学习日志/index.html","8db184882d04bc19b3d633b7c8258837"],["/2023/12/08/学校课程/工科数学分析/数分第15周学习日志/index.html","a8aa1fedba105eb3fe54eca59161341b"],["/2023/12/08/学校课程/数据库/api-fox学习日志/index.html","40ee710c4e3e6993615783ca1cb14fbb"],["/2023/12/11/学校课程/数据库/Servlet学习日志/index.html","02b7f0758fa907ccf04920fae81947b3"],["/2023/12/15/学校课程/数据库/数据库实验4学习日志/index.html","9aef9b3d0d4a467544012e5be1bb64ad"],["/2023/12/28/学校课程/工科数学分析/数分第17周学习日志/index.html","8032c17ddc2292f255328bb434c17103"],["/about/index.html","a5323ed520f71e7466069f483fa7d977"],["/archives/2023/09/index.html","6a0dbe3b12bf631a3fd07644714bb6fb"],["/archives/2023/09/page/2/index.html","364e19f4569ce302cd4f7148532b7c62"],["/archives/2023/10/index.html","5cb7a288e3331633d936388bb0100df0"],["/archives/2023/10/page/2/index.html","153eecc2c6d51417e884c9467b80053f"],["/archives/2023/11/index.html","ce9751b3fcc4c6c09f95c6656fdd9226"],["/archives/2023/12/index.html","756bcbae41e1e2df0738c736cf10d2d4"],["/archives/2023/index.html","c1452b94d5340db99327c1d4a7d85fce"],["/archives/2023/page/2/index.html","b48b930b6ec37cbf1fefd80cf635b5bf"],["/archives/2023/page/3/index.html","0c4c8aa58e1faf9ac1865af16a8f5cdb"],["/archives/2023/page/4/index.html","ed8ed3c426347cf3e5bf67b0458f0085"],["/archives/2023/page/5/index.html","49e1415f49380457b6978740c312ced4"],["/archives/index.html","48b83407ff3eb12e0c8692854565f6da"],["/archives/page/2/index.html","5c0cab7f594df571b79dd7ef86b24d32"],["/archives/page/3/index.html","1f8184ead2bbaee2d13acb20bcf8cd9c"],["/archives/page/4/index.html","5e3a6f38358e3f0f85a4f6a23eefa27c"],["/archives/page/5/index.html","fd0e1c36c42c909ed5b879b80c942943"],["/categories/index.html","95d5ba6c9f6abb30230936a3092c1fca"],["/categories/学习/C-学习/index.html","2e4e2e104012458173ffc59d5e91a7d1"],["/categories/学习/Go学习/index.html","b5cab6f84eda1c96e1eafb675ba2ead6"],["/categories/学习/index.html","8c4fad3daf955e7e4595bf6511e0efef"],["/categories/学习/page/2/index.html","fa469d5661e87b95886193c50e2cd942"],["/categories/学习/page/3/index.html","81eb07361c801722005e5313436e6364"],["/categories/学习/page/4/index.html","6bf04cf5b6fc3042e67ef712b5f9a9c3"],["/categories/学习/可证明安全/index.html","e6193b02956e379856cee5286b10770d"],["/categories/学习/图像处理/index.html","5a2a52dac30a6606876ff8c37b203709"],["/categories/学习/安全协议/index.html","bdda5584acbf20c83ab124499469cace"],["/categories/学习/实践知识/index.html","5d8e1f56c623d501b54ea54e559a4b2c"],["/categories/学习/数学/index.html","2a69257c5f03f7afe10d6912c76bebf4"],["/categories/学习/数据库/index.html","0fb99ae2eeb621bbb96223d40faaa1d4"],["/categories/学习/网络内容安全/index.html","161af974a049407826527353ecab82b5"],["/categories/学习/网络创新安全/index.html","2e6bb186410f48b66743aa1e69bb9fe3"],["/categories/学习/自然语言处理/index.html","bfe7345e0caba9394fe867b1b8054237"],["/categories/竞赛/index.html","56a05f15590f16c4932898e90ddc0a5e"],["/categories/竞赛/冯如杯专利/index.html","1e2f0b164339e2251edefe9fc83b3174"],["/categories/竞赛/密码学竞赛/index.html","03992cdba33ac007c123d9881197aad5"],["/categories/闲聊/index.html","a5c8ff4a9428b71e6248525af679ec57"],["/categories/闲聊/建站理念/index.html","9d1795e3dddcfb1cbcd06bd64f2c5746"],["/css/main.css","26d152abbe98da0ef52961c303149a93"],["/images/PR算法.png","3d684d000595d3b4e93172e74f3008ab"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","575ddfe8a243cb271a6b90686551b174"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.jpg","2ecbcb946d1977860a99ea433eb530af"],["/images/图像处理与信息隐藏/第四周/DMOS.png","f555f8dcb6bca7fc10c20910da8c944f"],["/images/图像处理与信息隐藏/第四周/NMSE.png","9dee9a92ef5a8dbf015610f3faa6934a"],["/images/图像处理与信息隐藏/第四周/PMSE.png","2628eee2cd3a9c798d95a69da747234c"],["/images/图像处理与信息隐藏/第四周/PSNR.png","3a0c36e9ea954e92c09e47860d746f7e"],["/images/图像处理与信息隐藏/第四周/YCbCr.png","c3174aedb51a5a60fcf907e1d6aa2eb4"],["/images/图像处理与信息隐藏/第四周/YIQ.png","b61262f3cecbb244c9fc1e93ad3c8704"],["/images/图像处理与信息隐藏/第四周/YUV.png","bac8edc63d854b150517a01763150a30"],["/images/图像处理与信息隐藏/第四周/噪声.png","c555b14dc5c8f83419263b79cd96807a"],["/images/爬虫原理.png","656ff019ccd83cf7b9d580a03404c3d3"],["/images/网络信息获取流程.png","b046b18fc9bf201edea688eba315f663"],["/images/网络环境下的信息内容获取模型.png","8e39d66bcc37f9a49da9f08df9899df4"],["/index.html","d079aaa50fe5ff35fd5a4806e31470f4"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","50a33f3253d5b324fba8c591ef6ca7f5"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","efe3c9eedbdac77e9e3d42b821ade1e0"],["/page/3/index.html","d7988ed54e30d53c38a02a6812c926fd"],["/page/4/index.html","79a40bca1772234aca7cdf3d323e2c8c"],["/page/5/index.html","666dccf8fb8db2eff9e34ad29e8bebfe"],["/resources/index.html","95aae85aa159a3a49b3dece11df2c3df"],["/sw-register.js","b53cb0c302fbfdfa0f0376fc9ee81d5f"],["/tags/index.html","f6b97146c3195ec92167dd31396b0be0"],["/tags/学校课程/index.html","aab5126a504b8751a30b2ad1d5e8a5ae"],["/tags/学校课程/page/2/index.html","e897b18dd49629f8adb1ba20db872e3c"],["/tags/学校课程/page/3/index.html","16646f972f4ebc44e7dce1e9fc5da373"],["/tags/学校课程/page/4/index.html","59bd16a5ca1c015c1ece6dcc605d46ba"],["/tags/环境开发/index.html","f0ae59428ba101bf42df92fb542be1f5"],["/tags/科研竞赛/index.html","3c76b754f299dd5c55fe326e9e910416"],["/tags/编程语言/index.html","ac62b23da93b980ab7e423c960175c17"],["/tags/闲聊档/index.html","383b151fd768091d42d1aefcb9c1bccf"]];
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
