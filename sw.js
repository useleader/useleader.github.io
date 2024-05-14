/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/09/21/学校课程/可证明安全/可证明安全第三周学习日志/index.html","b8d95ca63297e0b9172f35eae91b9b36"],["/2023/09/21/闲聊/你好，世界！/index.html","0b2feef0bb47a3b373000b8db8e68c4b"],["/2023/09/22/学校课程/数据库/数据库第三周学习日志/index.html","31ff5843e5db59422437af5bb08ad914"],["/2023/09/22/学校课程/自然语言处理/自然语言处理第三周学习日志/index.html","49896cdd2421ee871b9abd65a1d33bea"],["/2023/09/22/环境配置/weblog/index.html","1c45f77c689aca698fc016871924f60f"],["/2023/09/23/学校课程/工科数学分析/淑芬第三周学习日志/index.html","781152a4b91b1b56ec5b1abfd029911d"],["/2023/09/23/科研竞赛/cpp学习日志/index.html","1de2c7f16cde83fffb8373617e99c91c"],["/2023/09/25/学校课程/网络内容安全/网络内容安全第四周学习日志/index.html","69de081d411d8c30eb0e724e0a1b223f"],["/2023/09/26/学校课程/安全协议/安全协议第四周学习日志/index.html","805ccffcc373724e6d03e647582c8494"],["/2023/09/27/学校课程/可证明安全/可证明安全第四周学习日志/index.html","6dd0fb14c1dcacfc8f0fa7466fa8d1c5"],["/2023/09/29/学校课程/网络安全创新实验/网络安全创新实验学习日志/index.html","503592c4f8f8e936c43c12e55c6bf65d"],["/2023/09/30/学校课程/数据库/数据库第四周学习日志/index.html","cb081716c5f1a29043dcf372e46ca789"],["/2023/10/03/学校课程/图像处理与信息隐藏/图像处理与信息隐藏第四周学习日志/index.html","6767a7dab3fdc28f1b445919fedbf5d3"],["/2023/10/04/学校课程/安全协议/安全协议第五周学习日志/index.html","56532570f62972d009586199c966ff45"],["/2023/10/04/学校课程/工科数学分析/淑芬第五周学习日志/index.html","9a5e3541bb42e31b220305c7079f1513"],["/2023/10/05/学校课程/网络内容安全/网络内容安全第五周学习日志/index.html","bc118a3b2d55d3756d9376ab0b1612e2"],["/2023/10/05/学校课程/网络内容安全/网络内容安全第五周学习日志PLUS/index.html","fea2f71bca9f867b8324e6464595c2ec"],["/2023/10/07/学校课程/区块链实践/Go语言学习日志/index.html","dbd47693c7da185f09554a7240dec6cd"],["/2023/10/08/学校课程/数据库/数据库第六周学习日志/index.html","553bc90681465b2923bb24cbda18d6f1"],["/2023/10/08/环境配置/Environment-Blog/index.html","311a0826e330fd07dd3412100b16ab8b"],["/2023/10/10/学校课程/安全协议/安全协议第六周学习日志/index.html","17149d3c8f3ac21a86fce264cdf11c61"],["/2023/10/10/科研竞赛/密码学竞赛代码记录/index.html","686fb4265ccd334bc0f167756abcba84"],["/2023/10/11/学校课程/可证明安全/可证明安全第六周学习日志/index.html","acae17fb7ff5a377983c2d1bc13101f3"],["/2023/10/13/学校课程/自然语言处理/自然语言处理第六周学习日志/index.html","68f4a47d9da2132997c3e6e9c692fe5e"],["/2023/10/17/学校课程/安全协议/安全协议第七周学习日志/index.html","2fb1c22c457aae0085203f1bd704da4d"],["/2023/10/18/学校课程/网络内容安全/贝叶斯中文文本分类/index.html","80bec627470e9d27d75962eeeb0e0e35"],["/2023/10/20/学校课程/图像处理与信息隐藏/图像处理与信息隐藏第七周学习日志/index.html","98dd7fcd3ae851b741c5e27586497535"],["/2023/10/20/学校课程/工科数学分析/淑芬第七周学习日志/index.html","dbcea59056d6569d881b4a4b0aa2b363"],["/2023/10/25/学校课程/可证明安全/可证明安全第八周学习日志/index.html","477f67910284b0e5670cc69070993d09"],["/2023/10/31/学校课程/网络安全创新实验/网络安全创新实验LAB7/index.html","ecb3f6bf8ff89146cbec19f1ee268527"],["/2023/11/02/学校课程/数据库/数据库实验记录/index.html","6c957edf2e9ff5b66e570017ac520ff5"],["/2023/11/13/学校课程/数据库/Database-Manual/index.html","2e39ec75d0dee506f71c0fd2079e257f"],["/2023/11/16/学校课程/数据库/数据库第11周学习日志/index.html","9d1dc0fa3a997f187f9ef398459338eb"],["/2023/11/17/学校课程/数据库/数据库第12周学习日志/index.html","ad676a0a7fd46e40b333e13275be6e43"],["/2023/11/19/学校课程/工科数学分析/数分第11周学习日志/index.html","5d65a0fa4cfbdaedb1198a4901f42c60"],["/2023/11/21/学校课程/可证明安全/可证明安全第12周学习日志/index.html","c925e22f26998c85ca9b0511908b34ee"],["/2023/11/22/科研竞赛/CE-Log/index.html","1b87288880053076b9f8cd0f978f3c3d"],["/2023/11/25/学校课程/工科数学分析/数分第13周学习日志/index.html","4c4b55f5191c36eba3964bd6b853e50a"],["/2023/11/27/科研竞赛/GANLM-Encoder-Decoder-Pre-training-with-an-Auxiliary-Discriminator/index.html","97eb1812c97178ceaf0d74199dbff905"],["/2023/11/27/科研竞赛/机器学习学习记录/index.html","d109b0b0cf356af1b876a405a5542b04"],["/2023/12/06/学校课程/工科数学分析/数分第14周学习日志/index.html","bc69c30a9c46ea0737c2219d71f19986"],["/2023/12/08/学校课程/工科数学分析/数分第15周学习日志/index.html","a71a8709365f9f419474425ae18f6449"],["/2023/12/08/学校课程/数据库/api-fox学习日志/index.html","b8bccfcbf6e633287e6104e905c14a94"],["/2023/12/11/学校课程/数据库/Servlet学习日志/index.html","63efbbea89b6a7309812cd6a718b281e"],["/2023/12/15/学校课程/数据库/数据库实验4学习日志/index.html","ae96d0259297d57efdeaa9e683e729f4"],["/2023/12/28/学校课程/工科数学分析/数分第17周学习日志/index.html","780573f9815f57cfd0184c0cc0e5cf54"],["/2024/01/13/hexo配置文件学习/index.html","7bed0f3793b565084f9807035bc75b3e"],["/2024/01/13/学校课程/安全协议/安全协议课程总结/index.html","375d76602577c9f7e2e7a8fe561e0b17"],["/2024/01/21/科研竞赛/Code-Lemma/index.html","9f315c57e12a31c6f3926b15e366525d"],["/2024/04/29/闲聊/2024-4-29-突发奇想的日记环节/index.html","fc8d8cf37ad7ef9e8be10390f58bcc34"],["/2024/04/30/闲聊/2024-4-30日记/index.html","3d98adfc72dcdf7cf2e3357c42dd35de"],["/2024/05/01/preg-match字符匹配/index.html","531977fce5b13137c599c04dca90bd4d"],["/2024/05/01/闲聊/2024-5-1日记/index.html","a17d3290d22939a750dcc866dd87c785"],["/2024/05/04/2024-05-04补录最近日记/index.html","5162dd02452a36ffe89c06947dbe7331"],["/2024/05/06/2024-05-06小日记来喽/index.html","72dc91d3722e63190fd1099f82c61384"],["/2024/05/07/2024-05-07日记/index.html","55da8877ec4176a03a7ab1c9fd2852c4"],["/2024/05/07/从零开始的狼人杀生活/index.html","a105058b04159e885b44930458f49ff5"],["/2024/05/09/2024-05-08日记/index.html","fa917de628057bef6308fca5a2fda448"],["/2024/05/10/2024-05-09挑战极限的日记/index.html","4d3627970f36969bc178ae0be832e1f7"],["/2024/05/11/2024-05-10又是一日/index.html","47ef29b381371f47a8c7748f2db97e6b"],["/2024/05/12/2024-05-11反思/index.html","c04040873fa234e19da585ec8f5611ea"],["/2024/05/12/sql注入之堆叠注入/index.html","ba57a498e05469549288b56e8ffdb3a6"],["/2024/05/13/2024-05-13又是一日/index.html","4fd517085f9e1a258ba7ee26cf5f3620"],["/2024/05/13/2024-05-13疲惫/index.html","3501b4d79de06ea3c13d162544ed9b17"],["/about/index.html","0cc3d5d330861eed4302274042af3ead"],["/archives/2023/09/index.html","079db547efbac2e6c88e6a58ee59c2e7"],["/archives/2023/09/page/2/index.html","4b1996e0eb531cbb89477f6f3d0a3ef6"],["/archives/2023/10/index.html","0d56411b77a5d2b77d7e17016818c183"],["/archives/2023/10/page/2/index.html","fa46c961c473a7492d0c345af42c356e"],["/archives/2023/11/index.html","fe681e48d6d9f595c4b9cd9e7bedfc27"],["/archives/2023/12/index.html","be7a12a03d7f70d8795a4d5b7cad4acd"],["/archives/2023/index.html","656922cc4c51a105e75c303a79bb4fe0"],["/archives/2023/page/2/index.html","cede21f6abc8ffeb1e82411b0c2e29ac"],["/archives/2023/page/3/index.html","d40423f5262ab7829d38e68399292ada"],["/archives/2023/page/4/index.html","be17549200fc3f54bb5dceffcce668f3"],["/archives/2023/page/5/index.html","1b9a6fce9d8c854594cf3f65e0ae8fa9"],["/archives/2024/01/index.html","620f257918d94b763f5befabac68ddc0"],["/archives/2024/04/index.html","582aba71708b78933ca4cee12f801fdb"],["/archives/2024/05/index.html","c332acee3edad370819b81a16376bc9e"],["/archives/2024/05/page/2/index.html","8ec5c0e43a21075472e66f8faf6f390d"],["/archives/2024/index.html","9bb622ec34bec5767a29031f5d2be2bd"],["/archives/2024/page/2/index.html","44026627fa5fb066038cfdbb9507d47d"],["/archives/index.html","e6ae3c50191a05b441ff0d7299dde857"],["/archives/page/2/index.html","d59ebae517d7e0f97e0654d2814958c6"],["/archives/page/3/index.html","95a11c6e19610bb251400c36a492bb08"],["/archives/page/4/index.html","995807c833884ce5842ab8a44d693712"],["/archives/page/5/index.html","292c4adb0fcf510db99efb2f9090d1ec"],["/archives/page/6/index.html","20c95b461f252cd9db9631cd5e734020"],["/archives/page/7/index.html","c5029fe69991a45ac18a51fe41f1d52f"],["/categories/index.html","142efcd5ad39681889669560c407d056"],["/categories/学习/C-学习/index.html","6ac158ddd93172e7d9cbcc1cdda6de51"],["/categories/学习/Go学习/index.html","387a8046d646cc0b3a6ed5fe308ae13f"],["/categories/学习/index.html","d86861474b9ce76316e12f269f1a931d"],["/categories/学习/page/2/index.html","0806cee78f53a1e102ae1882f5b20657"],["/categories/学习/page/3/index.html","71a61a2f43388cbda36d809b841e0376"],["/categories/学习/page/4/index.html","6003550e2022a6bb8bfd5e1c41bcadfb"],["/categories/学习/可证明安全/index.html","7f01809667fd6b7e66db543583ce0c1a"],["/categories/学习/图像处理/index.html","8487b8913ab702d78a6fcc3360a2cbdc"],["/categories/学习/安全协议/index.html","3c0d1cec8cb72429aa2d165239d90f59"],["/categories/学习/实践知识/index.html","fc0785fa9253866389b9b2fbb16f4f3c"],["/categories/学习/数学/index.html","169fb181d8b15a586861901c5114e29a"],["/categories/学习/数据库/index.html","014c46b6ea8a3c5dea7b52a0008491bb"],["/categories/学习/网络内容安全/index.html","7ef9ce2be4ab40fb44267b8d81af7861"],["/categories/学习/网络创新安全/index.html","725b077eb8714382631d3d5508c6b610"],["/categories/学习/自然语言处理/index.html","2b0026443708f2d3eb8ae5f534b3e2e7"],["/categories/竞赛/index.html","f75415b1047464f1f796bfaa6c354ee4"],["/categories/竞赛/冯如杯专利/index.html","b4a98a0f222866f96edc7365cd2c4b57"],["/categories/竞赛/密码学竞赛/index.html","a9a939e0506512ed0d4aa186623a51a0"],["/categories/闲聊/index.html","d7b8ef2b346c1fefd42c42220feed3c1"],["/categories/闲聊/建站理念/index.html","d006699a8a3833abeab905c0a59f1352"],["/categories/闲聊/生活反思/index.html","bd4fbac04642fed02c7b74e96d11ebf6"],["/css/main.css","26d152abbe98da0ef52961c303149a93"],["/images/PR算法.png","3d684d000595d3b4e93172e74f3008ab"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","575ddfe8a243cb271a6b90686551b174"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.jpg","2ecbcb946d1977860a99ea433eb530af"],["/images/图像处理与信息隐藏/第四周/DMOS.png","f555f8dcb6bca7fc10c20910da8c944f"],["/images/图像处理与信息隐藏/第四周/NMSE.png","9dee9a92ef5a8dbf015610f3faa6934a"],["/images/图像处理与信息隐藏/第四周/PMSE.png","2628eee2cd3a9c798d95a69da747234c"],["/images/图像处理与信息隐藏/第四周/PSNR.png","3a0c36e9ea954e92c09e47860d746f7e"],["/images/图像处理与信息隐藏/第四周/YCbCr.png","c3174aedb51a5a60fcf907e1d6aa2eb4"],["/images/图像处理与信息隐藏/第四周/YIQ.png","b61262f3cecbb244c9fc1e93ad3c8704"],["/images/图像处理与信息隐藏/第四周/YUV.png","bac8edc63d854b150517a01763150a30"],["/images/图像处理与信息隐藏/第四周/噪声.png","c555b14dc5c8f83419263b79cd96807a"],["/images/爬虫原理.png","656ff019ccd83cf7b9d580a03404c3d3"],["/images/网络信息获取流程.png","b046b18fc9bf201edea688eba315f663"],["/images/网络环境下的信息内容获取模型.png","8e39d66bcc37f9a49da9f08df9899df4"],["/index.html","ebc55c7f33baaaa1b9e20bdacc794c25"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","7a4bb16d0190c8d6b27956a955fa971c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","798745b3bc881d61510ee71580c12df3"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","03817acb33764c676c787a95d47783a4"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","a6e7faf54ec98b572938a4da3d9d12c8"],["/page/3/index.html","d4fac53530e352b3fcb56f3cf21c1be5"],["/page/4/index.html","1062d1eabda29f5e158a921043bf97ce"],["/page/5/index.html","b2aa3d8bb271219962aa2a85f2b2da80"],["/page/6/index.html","5ac759a034cb7902fd5951ea6b163075"],["/page/7/index.html","d24423c3ee3466ff2c8f90560cac3623"],["/resources/index.html","ebc097eaf26f8c1c964fbd32e38eaf72"],["/sw-register.js","6c596f2c835d449c24ad24274a92a3a1"],["/tags/CTF/index.html","e8d66f178d2b22aa34800ce9f9156acf"],["/tags/index.html","b604e05ae5e4b7d89a137e6dcab753cb"],["/tags/学校课程/index.html","34c6b66a3ab29c2be2d7982409ba3000"],["/tags/学校课程/page/2/index.html","b205357cff6794975106cf0a06233d89"],["/tags/学校课程/page/3/index.html","27f6addad65c1d2e136fee77b544fc2b"],["/tags/学校课程/page/4/index.html","269fe65164fd966720cc3eb71ceb4a3e"],["/tags/环境开发/index.html","205b17db3ac3357da8655c51009027ce"],["/tags/科研竞赛/index.html","6d38b0b7a906756f9e7a4e315f3d1f5e"],["/tags/编程语言/index.html","f52ca8229b64e235b7216fc3267cb204"],["/tags/闲聊档/index.html","e7714d8234deb7ba1b87e7cdaf8cbce7"]];
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
