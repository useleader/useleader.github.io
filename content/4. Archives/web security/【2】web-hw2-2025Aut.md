密码：Cst.1021
http://www.wsb.com/Assignment2


## 04 存储型XSS

1.  阅读DOM，发现对于内容的处理直接当做html里面的文本，所以对于带标签内容是按照HTML的语法来解析的，因此存在存储型XSS漏洞
2. 针对&<>符号有了一个转义，在tagsToReplace里面，然后在replaceTag里面多了一个||tag，意思是如果不是dict里面的元素则保持原样，对于指令alert之类的并没有转义，说明可以通过转义来实现XSS注入
3. 展示内容如下：
```python
#sample exploit for sample case

import urllib, urllib2, cookielib

  

# do POST to the form

url_2 = 'http://www.wsb.com/Assignment2/case04.php'

# prepare the value of the form which includes the attack payload

values = dict(title='here i come', content='Exploit... <script>alert(document.cookie)</script>)' )

data = urllib.urlencode(values)

#submit the form

req = urllib2.Request(url_2, data)

rsp = urllib2.urlopen(req)

#read the return result

content = rsp.read()

  

import webbrowser

url = "http://www.wsb.com/Assignment2/case04.php"

new = 2 #open in new window

webbrowser.open(url,new=new)
```

![[Pasted image 20251107085932.png]]



## 06 混合内容
1. 打开后发现条形码，阅读网站DOM，发现进行了两次资源访问，访问的方式是制定了具体的访问路径，可以将图片路径编辑为`><script>alert(document.cookie)</script>`，利用XSS攻击进行；另外可以直接通过读取存储的cookie来获取flag
2. 使用Python获取网站信息，读取cookie
3. 运行结果如下：

![[Pasted image 20251116192553.png]]

## 07 反射型 XSS
1. 查看php文件，显示里面对于数据的提交是通过GET来进行的，点击后发送?time=xxx的参数，然后发送`<script>`符号，发现并没有变化说明，没有对其进行处理，说明存在反射型XSS漏洞
2. 直接在url里面传递timer参数，直接输入可执行的指令来利用漏洞
3. 具体利用过程如下：

```python
#sample exploit for sample case

import urllib, urllib2, cookielib

  

import webbrowser

url = "http://www.wsb.com/Assignment2/case07.php?timer=<script>alert(document.cookie)</script>"

new = 2 #open in new window

webbrowser.open(url,new=new)
```
运行结果如下：
![[Pasted image 20251116161838.png]]

## 09 CSRF
1. 在案例中发送数据，发现是以POST形式实现，同样以07的方式可以实现攻击，并且Flag是一样的，同时直接使用的是cookie，说明存在CSRF攻击，可以让受害者在访问恶意网站时误将cookie
2. 攻击这通过构造一个恶意网站，然后在受害者访问时自动跳转或向被本想访问的网站发送POST请求，利用受害者的cookie 实现攻击
3. 具体利用过程如下：
观察POST请求形式：
![[Pasted image 20251110164324.png]]
![[Pasted image 20251110164710.png]]
可以判断出需要传递三种参数，value，csrf_token, submit，其中value是恶意载荷，submit是固定字段，需要获取动态的csrf_token，所以考虑连续发送两次，第一次读取response中的csrf_token，第二次携带token来进行cstf攻击

构造脚本，创建了两次访问，先获取csrf_token，然后基于这次的csrf_token获取cookie
攻击结果如下：
![[6fcda6b57a8c767885597e9ad7967622.png]]


## 14 参数污染
1. 观察DOM代码，发现点击可以触发超链接`?payee=alice&sum=10`，并没有对其进行过滤或筛选，可以考虑重写url进行参数污染
2. 重新发送url，可以通过编辑错误的数据观察是否会暴露flag信息，任意编辑一个异常内容：`?payee=alice&sum=-1`
3. 自动化脚本如下：
```python
#sample exploit for sample case

import urllib, urllib2, cookielib

  

import webbrowser

url = "http://www.wsb.com/Assignment2/case14.php?payee=alice&sum=-1"

new = 2 #open in new window

webbrowser.open(url,new=new)
```
攻击结果如下：
![[Pasted image 20251115162018.png]]
## 23 认证缺陷
1. 在按照正常登录的过程中发现在protected_page里面显示传递了admin=false参数，说明可能存在认证缺陷；
2. 正常注册普通用户，然后在访问界面传递新参数，admin=true来实现利用，相关的步骤如下
创建用户：
alice
alice@eg.com
Alice666
Alice666
![[Pasted image 20251115162700.png]]
![[Pasted image 20251115162725.png]]
![[Pasted image 20251115162750.png]]
进入正常登录页面：
![[Pasted image 20251115162852.png]]
发现url包括一个admin=false，怀疑存在认证缺陷，考虑通过传递admin=true来绕过登录
![[Pasted image 20251115162949.png]]
3. 首先构造登录页面，传递的参数为hash值，然后构造登录界面，接着访问安全页面传递admin=true
![[Pasted image 20251115164250.png]]
![[Pasted image 20251116175421.png]]

## 24 SQL注入

1. 进入网页进行正常操作，查询id=1；直接传递的是数字，怀疑可能是存在Sql注入问题，通过注入常见的注释操作能够报错，并且提供了具体的报错信息，则通过Union来实现信息泄露
![[Pasted image 20251115174447.png]]
2. 通过结合UNION来进行查询获取额外数据，然后选定表名与字段名来获取隐藏信息，构造字段`' UNION SELECT first_name, lastname FROM table24 --#`
3. 具体结果如下：
![[Pasted image 20251116170212.png]]
## 25 本地文件包含
1. 阅读源码，看到lang里面会提交一个字段，然后发现他更换文件的方式是通过读取includes文件夹内的不同文件来实现的，可以POST设置访问路径实现本地文件包含
2. 在文件夹内可以看到fi.txt.php这个文件是在includes的上一层目录下，因此在lang里面传递恶意路径../lfi.txt来获取
![[Pasted image 20251115214134.png]]
3. 构造脚本后执行，读取html，运行结果如下：
![[Pasted image 20251115221255.png]]
找到其中的flag
## 31 远程代码执行

1. 进入页面后查看源码，发现传递的cmd_url直接是指令内容，说明存在远程代码执行漏洞
2. 然后将post的内容指定为cat /etc/passwd实现
3. 具体结果如下：
![[Pasted image 20251115221613.png]]
## 32 重定向后执行

1. 进入页面观察，发现可能的问题出现在超链接位置，点击后依然发现url对应的是case32-1.php，然后再network中可以看到GET访问的case32.php，说明存在重定向的漏洞
2. 直接用python访问case32的真实url，额外添加禁止重定向的字段,，通过多次尝试判断出php中使用的字段是redirect_url，然后发现直接固定了redirect_url，只好通过创建自定义处理器来禁止重定向
3. 具体结果如下：
![[Pasted image 20251116165430.png]]