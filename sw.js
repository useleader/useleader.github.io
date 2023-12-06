/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/09/21/你好，世界！/index-DESKTOP-P9VTQEA.html","1456781d837d31bb93816cf3e34e5722"],["/2023/09/21/你好，世界！/index.html","209f55e1f71abfc26c07be0f196f3447"],["/2023/09/21/可证明安全第三周学习日志/index-DESKTOP-P9VTQEA.html","722722adfc216c62e681f8d66461575f"],["/2023/09/21/可证明安全第三周学习日志/index.html","132315ec55db7eb18cd3734e8ebdfcf0"],["/2023/09/22/weblog/index-DESKTOP-P9VTQEA.html","98c03b94b0cfb30cfcb9ab141467dbb8"],["/2023/09/22/weblog/index.html","39db1776313b0512e8d90e2de45c9519"],["/2023/09/22/数据库第三周学习日志/index-DESKTOP-P9VTQEA.html","79e919259fb35859bcd1a9b7ab538d21"],["/2023/09/22/数据库第三周学习日志/index.html","541795c8f8c3f3d5de79e109dc13ff09"],["/2023/09/22/自然语言处理第三周学习日志/index-DESKTOP-P9VTQEA.html","e53d7617549709d9b369e7d97d5a0be1"],["/2023/09/22/自然语言处理第三周学习日志/index.html","fd246bc70ec5fcd4b7efe042a7777d81"],["/2023/09/23/cpp学习日志/index-DESKTOP-P9VTQEA.html","9f0ece74ea88d48a8165ef6e1ff4ae83"],["/2023/09/23/cpp学习日志/index.html","886d7ac5e6feb00a52d389ca535e65b2"],["/2023/09/23/淑芬第三周学习日志/index-DESKTOP-P9VTQEA.html","86a5f2e2e4eca4d1770b9ceaae4f0796"],["/2023/09/23/淑芬第三周学习日志/index.html","63a4e5e4d7060cea32fea24213bf54e0"],["/2023/09/25/网络内容安全第四周学习日志/index-DESKTOP-P9VTQEA.html","49ecbb1451dbea3af5e17ce7a370a301"],["/2023/09/25/网络内容安全第四周学习日志/index.html","c59c9b64ca69b7adffff4f2749f9c7f8"],["/2023/09/26/安全协议第四周学习日志/index-DESKTOP-P9VTQEA.html","e907afdd963805c8897b9a49ee6307fc"],["/2023/09/26/安全协议第四周学习日志/index.html","d54daaef2f009d34c1908597627d6700"],["/2023/09/27/可证明安全第四周学习日志/index-DESKTOP-P9VTQEA.html","12690d81778bb99711cdd63fdcb0b5a2"],["/2023/09/27/可证明安全第四周学习日志/index.html","3a19cfd872c06891052e4b6c7c874b01"],["/2023/09/29/网络安全创新实验学习日志/index-DESKTOP-P9VTQEA.html","477c1e7c1833adc39e6f00327e19ba30"],["/2023/09/29/网络安全创新实验学习日志/index.html","6e72168ed2de2bf0c0c8e386b1169ac4"],["/2023/09/30/数据库第四周学习日志/index-DESKTOP-P9VTQEA.html","ef111371ee9d6cd88319b2ad886c9e89"],["/2023/09/30/数据库第四周学习日志/index.html","c23c078dbe00bd42b16272a2c8a8db67"],["/2023/10/03/图像处理与信息隐藏第四周学习日志/index-DESKTOP-P9VTQEA.html","e442e8c73fb82cac1722ffa0948a81c1"],["/2023/10/03/图像处理与信息隐藏第四周学习日志/index.html","a647088a89f97dead7d5b3cc7dd59283"],["/2023/10/04/安全协议第五周学习日志/index-DESKTOP-P9VTQEA.html","ba11691974f86a1f356aae60694b2d04"],["/2023/10/04/安全协议第五周学习日志/index.html","e40872ae6b5b8ace9663a69259844f05"],["/2023/10/04/淑芬第五周学习日志/index-DESKTOP-P9VTQEA.html","84008aa8455c3966ec6d43380180209e"],["/2023/10/04/淑芬第五周学习日志/index.html","8faff1f3a872fd20dc8d629a35341c0f"],["/2023/10/05/网络内容安全第五周学习日志/index-DESKTOP-P9VTQEA.html","337f75216fb7919e24886d38ca4620da"],["/2023/10/05/网络内容安全第五周学习日志/index.html","4007067e7c614595cc9959b00b27db12"],["/2023/10/05/网络内容安全第五周学习日志PLUS/index-DESKTOP-P9VTQEA.html","6abdfce4885deb46e1610f4e26f2e344"],["/2023/10/05/网络内容安全第五周学习日志PLUS/index.html","d4165f0568f2a9186d7abeb961753661"],["/2023/10/07/Go语言学习日志/index-DESKTOP-P9VTQEA.html","89e1f3bdd7d9b030ab9a8bee9b68dac4"],["/2023/10/07/Go语言学习日志/index.html","90ea515c3f84857ad179556a6560cf32"],["/2023/10/08/Environment-Blog/index-DESKTOP-P9VTQEA.html","945d9e8e64cbe13ba77c2b7735dce33c"],["/2023/10/08/Environment-Blog/index.html","a0c3a48e2ec0b598a2e9d040c62c651d"],["/2023/10/08/数据库第六周学习日志/index-DESKTOP-P9VTQEA.html","7e7ff1133b7e92fbc15aa9471cbfb508"],["/2023/10/08/数据库第六周学习日志/index.html","e7829711ff0b397ef62ea5969a19ea03"],["/2023/10/10/安全协议第六周学习日志/index-DESKTOP-P9VTQEA.html","d9fe3722f94f253896744104d3c8c28c"],["/2023/10/10/安全协议第六周学习日志/index.html","cc852e3c1c3580b20fcc3d3fe6c36046"],["/2023/10/10/密码学竞赛代码记录/index-DESKTOP-P9VTQEA.html","3df5056086d79b085247902253e01610"],["/2023/10/10/密码学竞赛代码记录/index.html","b3cfb429b2eace4c9bd4bf9187a54d8d"],["/2023/10/11/可证明安全第六周学习日志/index-DESKTOP-P9VTQEA.html","2921ec4ea5e44797bf7b61240bce7b65"],["/2023/10/11/可证明安全第六周学习日志/index.html","63f9091fb13e4bd6daf97703649f2956"],["/2023/10/13/自然语言处理第六周学习日志/index-DESKTOP-P9VTQEA.html","5c04156a399127d57b8a5aad99b32a76"],["/2023/10/13/自然语言处理第六周学习日志/index.html","ef76f8cddd8658e5fa167012521e8bbb"],["/2023/10/17/安全协议第七周学习日志/index-DESKTOP-P9VTQEA.html","58dcca0072c2a2da032cfcbcc497627f"],["/2023/10/17/安全协议第七周学习日志/index.html","8f71786989013a8d39f7aa1f130ec738"],["/2023/10/18/贝叶斯中文文本分类/index-DESKTOP-P9VTQEA.html","2377879d5df8659a7ad84f0b4e07d2d0"],["/2023/10/18/贝叶斯中文文本分类/index.html","59ea7a368e1eebd73e0449de5df7f06f"],["/2023/10/20/图像处理与信息隐藏第七周学习日志/index-DESKTOP-P9VTQEA.html","775ea425e526b72105f0e6ed769ed0ed"],["/2023/10/20/图像处理与信息隐藏第七周学习日志/index.html","3e8a7261bcf63c68085f11f723e0fc93"],["/2023/10/20/淑芬第七周学习日志/index-DESKTOP-P9VTQEA.html","986cff4f9382efa53606ef1443293d3d"],["/2023/10/20/淑芬第七周学习日志/index.html","1943f5f457b204f3942b4773d0f91079"],["/2023/10/25/可证明安全第八周学习日志/index.html","7a353e4e6eaee485d25d7b87ef2432c2"],["/2023/10/31/网络安全创新实验LAB7/index.html","fdf6d5ceb2ac0d89f88de0db45d6401c"],["/2023/11/02/数据库实验记录/index.html","d175e58f8a82fe926bc9875711211fae"],["/2023/11/13/Database-Manual-DESKTOP-P9VTQEA/index.html","1fc609d9b2a79173730b289346e5c060"],["/2023/11/13/Database-Manual/index.html","6dee4cec2008bae93071e9598c5b456f"],["/2023/11/16/数据库第11周学习日志/index.html","562c5a41cf8cda56bcbd435368f6302b"],["/2023/11/17/数据库第12周学习日志/index.html","eb7fd0882c113e312c3c0ae07f07bbef"],["/2023/11/19/数分第11周学习日志/index.html","07e12b826e609f650c74b3473b506e7d"],["/2023/11/21/可证明安全第12周学习日志/index.html","350fccbd40bbd24e0a4da3ebab407991"],["/2023/11/22/CE-Log/index.html","dfe0c0e4677dd510e0432722457be623"],["/2023/11/25/数分第13周学习日志-DESKTOP-P9VTQEA/index.html","b21bbeffb8d2d50bc56af20e079d4133"],["/2023/11/25/数分第13周学习日志/index.html","4f53c131182f13366ec7fbf899bae2c6"],["/2023/11/27/GANLM-Encoder-Decoder-Pre-training-with-an-Auxiliary-Discriminator/index.html","8a4f84643739b8ca0e705c0bd7a00adf"],["/2023/11/27/机器学习学习记录/index.html","9cc5f31de306cecf461a533ec52422a1"],["/2023/12/06/数分第14周学习日志/index.html","dd1e10c4aaf7eec9e037e020e2e043c1"],["/about/index-DESKTOP-P9VTQEA.html","6a59403f7ef673114440ce591a4c38f7"],["/about/index.html","fc9bc2061f9eaf6743507f2e6b391a06"],["/archives/2023/09/index-DESKTOP-P9VTQEA.html","4d5d49b78eddba18f661955041b4b8ef"],["/archives/2023/09/index.html","1397c65172a8bf4e8a0c3eb27d9959c6"],["/archives/2023/09/page/2/index-DESKTOP-P9VTQEA.html","7403b505772e791bde26639e44732dc7"],["/archives/2023/09/page/2/index.html","466016fb9b5af9bf4fca1a3d9c85f697"],["/archives/2023/10/index-DESKTOP-P9VTQEA.html","ceb8d2c75fd65fa4555265f73dc70bc0"],["/archives/2023/10/index.html","5c0c466587f08ec8551a500fbdb4bfa1"],["/archives/2023/10/page/2/index-DESKTOP-P9VTQEA.html","d00cf897cff66aac1730c385aaa6f2aa"],["/archives/2023/10/page/2/index.html","8ff35fd977f4681b018f14c53208a631"],["/archives/2023/11/index.html","02f1ce63cbfe36446aecdb132851c51b"],["/archives/2023/11/page/2/index.html","918a8806cba66d4888ce70d9a97badee"],["/archives/2023/12/index.html","304083342e8b0a8f7dc87b64ff5ae77a"],["/archives/2023/index-DESKTOP-P9VTQEA.html","269dc32aa66573de9ad3cc635e3d24a5"],["/archives/2023/index.html","7dc7a2adf9759450315c2dec133e5074"],["/archives/2023/page/2/index-DESKTOP-P9VTQEA.html","969595f453896b3ab2639936ab823c53"],["/archives/2023/page/2/index.html","049b0e0df358331ad30d0135dd4c48ef"],["/archives/2023/page/3/index-DESKTOP-P9VTQEA.html","51440c5b1ec4c593ebd3ab68bb64c9a4"],["/archives/2023/page/3/index.html","83b2bc7ef8c4f91086aac7c83b161f9b"],["/archives/2023/page/4/index.html","ca8610cec333611474401a3c1c695bc1"],["/archives/2023/page/5/index.html","2bc38823fe294e71887dbc5528131f7e"],["/archives/index-DESKTOP-P9VTQEA.html","2295319c600dd000ccc573eaf026eb6e"],["/archives/index.html","908773d72e0d49ee0f7e66759fbef23c"],["/archives/page/2/index-DESKTOP-P9VTQEA.html","b0d0029c32f4ae1947a3efe14183262c"],["/archives/page/2/index.html","f18d00673017afc0d1a907db13b0083e"],["/archives/page/3/index-DESKTOP-P9VTQEA.html","da8016ac63ad7867b9e7de488b5ae584"],["/archives/page/3/index.html","7a440a2fdceb61009375d2e2ca2b9be2"],["/archives/page/4/index.html","8541f4060ec85192b91db6906af9e85f"],["/archives/page/5/index.html","4ddebc42869c3d28ce702f14e372e08a"],["/categories/index-DESKTOP-P9VTQEA.html","7b34979ae78a1538f7030a72c5c2ef1f"],["/categories/index.html","91f46423635f25ad4f2491c0121a6c1d"],["/categories/学习/C-学习/index-DESKTOP-P9VTQEA.html","23a6c2c9d354f9b9154c59ecf5871cb9"],["/categories/学习/C-学习/index.html","d80aed35cdf80c4d432ca84f07f53761"],["/categories/学习/Go学习/index-DESKTOP-P9VTQEA.html","acb39a0f1ce5858aa9f13ae1f6296b29"],["/categories/学习/Go学习/index.html","5f0f4cc0c613ef8da3a952a261c90228"],["/categories/学习/index-DESKTOP-P9VTQEA.html","3615f085d639009248b710bb96538b5b"],["/categories/学习/index.html","7dfcf99172ef95215106261e11071c90"],["/categories/学习/page/2/index-DESKTOP-P9VTQEA.html","5c8b78ae303e5caa50d0105667cea570"],["/categories/学习/page/2/index.html","a8f1a52d9b8183eafbd344c852dc2b51"],["/categories/学习/page/3/index-DESKTOP-P9VTQEA.html","4acf033c549cf29770475a3359240315"],["/categories/学习/page/3/index.html","b6cf28b7a1c18678cd759c1159327095"],["/categories/学习/可证明安全/index-DESKTOP-P9VTQEA.html","5a49ba7cfaec207294223cb1b7993f55"],["/categories/学习/可证明安全/index.html","ee6e166036213747b6e62d280211f598"],["/categories/学习/图像处理/index-DESKTOP-P9VTQEA.html","b60df5ffbfe57b18dfc3725d000900c6"],["/categories/学习/图像处理/index.html","3c8bc3ef70214750d284cf186f9a1ae5"],["/categories/学习/安全协议/index-DESKTOP-P9VTQEA.html","3899a372633a5f7ae5607071b661b24f"],["/categories/学习/安全协议/index.html","19112f04f0d9426cede3bfec1075d2fe"],["/categories/学习/实践知识/index-DESKTOP-P9VTQEA.html","bfa0dd530817c4253b99bf449efc74fc"],["/categories/学习/实践知识/index.html","f95d6002e6ce2b615feba65d8a5aec64"],["/categories/学习/数学/index-DESKTOP-P9VTQEA.html","6a30bab614a240498832a836565d2514"],["/categories/学习/数学/index.html","fcf34c48e08d8b827a29841a7e9b5cb4"],["/categories/学习/数据库/index-DESKTOP-P9VTQEA.html","943e39c56873c83983415b7a80b95f23"],["/categories/学习/数据库/index.html","b096a141ebaae81d2c06e420ce3d8872"],["/categories/学习/网络内容安全/index-DESKTOP-P9VTQEA.html","4866e737be71a9e674ef237f95900e3e"],["/categories/学习/网络内容安全/index.html","a53371e2a7fb02c93bd25076b9e1cda3"],["/categories/学习/自然语言处理/index-DESKTOP-P9VTQEA.html","15fdcb5e78a95bed08ac4be9f0ef2809"],["/categories/学习/自然语言处理/index.html","8f0969a93d1a699221af39225ebc3e66"],["/categories/竞赛/index-DESKTOP-P9VTQEA.html","c87c098a7c519a294594ca7c87db0f1a"],["/categories/竞赛/index.html","7223f37173a774a4d6a2fdf1e1aaf597"],["/categories/竞赛/密码学竞赛/index-DESKTOP-P9VTQEA.html","f41b05418494ab007963a8265498ff1c"],["/categories/竞赛/密码学竞赛/index.html","65e81c9564a772ff791e91677e8835c6"],["/categories/闲聊/index-DESKTOP-P9VTQEA.html","6711ff55cf4910dc71a298dc42b7d620"],["/categories/闲聊/index.html","00511769c176735a84a5918ecbd1f4f9"],["/categories/闲聊/建站理念/index-DESKTOP-P9VTQEA.html","457cd33cc8ca5be5094c7330561b0617"],["/categories/闲聊/建站理念/index.html","dac7ecbe3b33bee0b4fb0f7a72a55dfa"],["/css/main.css","926c988332a980e2ab466da4f82f68c5"],["/images/PR算法.png","3d684d000595d3b4e93172e74f3008ab"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","575ddfe8a243cb271a6b90686551b174"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.jpg","2ecbcb946d1977860a99ea433eb530af"],["/images/图像处理与信息隐藏/第四周/DMOS.png","f555f8dcb6bca7fc10c20910da8c944f"],["/images/图像处理与信息隐藏/第四周/NMSE.png","9dee9a92ef5a8dbf015610f3faa6934a"],["/images/图像处理与信息隐藏/第四周/PMSE.png","2628eee2cd3a9c798d95a69da747234c"],["/images/图像处理与信息隐藏/第四周/PSNR.png","3a0c36e9ea954e92c09e47860d746f7e"],["/images/图像处理与信息隐藏/第四周/YCbCr.png","c3174aedb51a5a60fcf907e1d6aa2eb4"],["/images/图像处理与信息隐藏/第四周/YIQ.png","b61262f3cecbb244c9fc1e93ad3c8704"],["/images/图像处理与信息隐藏/第四周/YUV.png","bac8edc63d854b150517a01763150a30"],["/images/图像处理与信息隐藏/第四周/噪声.png","c555b14dc5c8f83419263b79cd96807a"],["/images/爬虫原理.png","656ff019ccd83cf7b9d580a03404c3d3"],["/images/网络信息获取流程.png","b046b18fc9bf201edea688eba315f663"],["/images/网络环境下的信息内容获取模型.png","8e39d66bcc37f9a49da9f08df9899df4"],["/index-DESKTOP-P9VTQEA.html","40115843f4b0c9d6197322a56ea69835"],["/index.html","c43e8a5357eba7801eb7624dfd9bbf18"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","fbd086a805e5674b41d92a71aa853c37"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","50a33f3253d5b324fba8c591ef6ca7f5"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index-DESKTOP-P9VTQEA.html","6ca3784b9496fcab4621113fa4346188"],["/page/2/index.html","4c777e94d2b2cfed32fe309d72b61bec"],["/page/3/index-DESKTOP-P9VTQEA.html","116cbeb86a60ca684d2c9573ae2db261"],["/page/3/index.html","00cd562e9316303e81f02103f4b3938a"],["/page/4/index.html","caf2f2af39712eec2152a00382736e51"],["/page/5/index.html","48aab277d129be776175d528a5272589"],["/resources/index-DESKTOP-P9VTQEA.html","bd423f65e2cadf1e598929a7111a657c"],["/resources/index.html","d5dc6595de12014ce178760d95dc79aa"],["/sw-DESKTOP-P9VTQEA.js","121b9bdd804c128300fa88fe43b6fa23"],["/sw-register-DESKTOP-P9VTQEA.js","c6a314d36b2ecccde44a35698f04dddb"],["/sw-register.js","9826f9787884ef6f28976f1d6ba09870"],["/tags/index-DESKTOP-P9VTQEA.html","d26dcfa5ebfe217845367284c7205c6e"],["/tags/index.html","587ae7fc152cd69944a579f08903bc41"],["/tags/学校课程/index-DESKTOP-P9VTQEA.html","13b63ca60f098aadab5b4fdd5f7b6277"],["/tags/学校课程/index.html","21a4f73e17c712c47fafbb3b7ea6f89c"],["/tags/学校课程/page/2/index-DESKTOP-P9VTQEA.html","de03ed8eeb62cf3b0cdd2d5c514727c1"],["/tags/学校课程/page/2/index.html","9425c5c96fba16e173baef48ca3b53b1"],["/tags/环境开发/index-DESKTOP-P9VTQEA.html","271639b8e2e6313d31567c5a7172527f"],["/tags/环境开发/index.html","16e6f255b604461a35f88668e808c14e"],["/tags/编程语言/index-DESKTOP-P9VTQEA.html","505ae467394399de106bc2daee0c8bc9"],["/tags/编程语言/index.html","c9a28ab22d6f9762afd087c95c1d61f8"]];
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
