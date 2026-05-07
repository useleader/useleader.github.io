```
环境结构设计
实验组1：仅L1+L2
实验组2：仅L2+L3  
实验组3：完整L1+L2+L3
对照组1：原始AFLNet
对照组2：ChatAFL
对照组3：ChatAFL-CL1
对照组4：ChatAFL-CL2

```

执行指令：
```
KEY=sk-Hc6IGVxPkGHUw6tp3c9b78574f2d41C3Aa69EeD974893bD2 ./setup.sh

# 调试镜像 
export MAKE_OPT="-j$(nproc)" && cd ~/hierarchical/benchmark/subjects/RTSP/Live555 && docker build . -t live555 --build-arg MAKE_OPT $NO_CACHE

rm -r ~/hierarchical/benchmark/subjects/RTSP/Live555/chatafl 2>&1 >/dev/null ; cp -r  ~/hierarchical/ChatAFL ~/hierarchical/benchmark/subjects/RTSP/Live555/chatafl
cd ~/hierarchical && python run.py 1 60 live555 chatafl 

docker run --privileged --cpus=1 -d -it -v ~/hierarchical/ChatAF:/home/ubuntu/chatafl live555 /bin/bash -c "cd /home/ubuntu/chatafl && make clean all -j32&& cd llvm_mode && make -j32 && cd /home/ubuntu/experiments && run chatafl out-live555-chatafl '-P RTSP -D 10000 -q 3 -s 3 -E -K -R -m none -t 5000' 3600 1"

# 先讲各种github库安装在本地用于benchmark
git clone https://github.com/ejurgensen/forked-daapd.git
wget https://sourceforge.net/projects/bftpd/files/bftpd/bftpd-6.1/bftpd-6.1.tar.gz
git clone https://github.com/hfiref0x/LightFTP.git
git clone https://github.com/proftpd/proftpd.git
git clone https://github.com/jedisct1/pure-ftpd.git
git clone https://git.lighttpd.net/lighttpd/lighttpd1.4.git
git clone https://github.com/kamailio/kamailio.git
git clone https://github.com/pjsip/pjproject.git
git clone https://github.com/Exim/exim.git

# 镜像网站如下
git clone https://gitee.com/mirrors_ejurgensen/forked-daapd.git
git clone https://gitee.com/useleader/bftpd-6.1.git && mv bftpd-6.1/bftpd-6.1.tar.gz .
git clone https://gitee.com/dingrui523/LightFTP.git
git clone https://gitee.com/yan_mu_yi/proftpd.git
git clone https://gitee.com/zhangadiu/pure-ftpd.git
git clone https://gitee.com/yan_mu_yi/lighttpd1.4.git
git clone https://gitee.com/CCTVLT/kamailio.git
git clone https://gitee.com/zhongzhi206/pjproject.git
git clone https://gitee.com/renxin0911/exim.git

```

依次筛查，镜像已安装成功
接着运行协议目标
```
# 使用5个容器，运行12小时
./run.sh 5 720 all all

# 使用20个容器，运行48小时  
./run.sh 20 2880 all all

# 只测试FTP协议的所有fuzzer
./run.sh 10 1440 "lightftp,bftpd,proftpd,pure-ftpd" all

# 只测试ChatAFL系列的所有协议
./run.sh 10 1440 all "chatafl,chatafl-cl1,chatafl-cl2"

./run.sh 10 1440 all all

## 参数说明：

- **10**: NUM_CONTAINERS - 并行容器数量
- **1440**: TIMEOUT - 超时时间（分钟，1440分钟=24小时）
- **all**: TARGET_LIST - 所有协议目标
- **all**: FUZZER_LIST - 所有模糊测试器

## 支持的协议目标：

- lightftp, bftpd, proftpd, pure-ftpd (FTP协议)
- exim (SMTP协议)
- live555 (RTSP协议)
- kamailio (SIP协议)
- forked-daapd (DAAP协议)
- lighttpd1 (HTTP协议)

## 支持的模糊测试器：

- aflnet
- chatafl, chatafl-cl1, chatafl-cl2 (ChatAFL系列)
- hierarchical, hierarchical-l12, hierarchical-l23 (Hierarchical系列)
```

```
# 中断所有操作
docker stop $(docker ps -q)

# 删除所有容器
docker rm $(docker ps -aq)

# aflnet系列操作
./run.sh 1 60 live555 aflnet

# Hierarchical系列操作
./run.sh 5 10 all "hierarchical,hierarchical-l12,hierarchical-l23"
./run.sh 1 60 all hierarchical

# Chatafl 系列操作
./run.sh 5 10 all "chatafl,chatafl-cl1,chatafl-cl2"
./run.sh 1 60 live555 chatafl
./run.sh 20 60 all all

# live555协议比对 - 这里面的并行是为了
./run.sh 1 60 live555 all

# 运行所有实验
./run.sh 1 1440 all all

# 针对所有协议运行所有fuzzer确保能够运行，除了chatafl-cl1,chatafl-cl2
./run.sh 1 60 all "aflnet,stateafl,aflnwe,chatafl,hierarchical,hierarchical-l12,hierarchical-l23"

./run.sh 1 60 lightftp stateafl
```

```
# 为所有容器执行echo 'core' > /proc/sys/kernel/core_pattern。在Dockerfile里面实现了，同时修改好了run.sh
``` 

aflnwe为什么不需要环境变量
协议依次修改
1. 将stateafl合并到Dockerfile中
	- forked-daapd - finish
	- dcmtk - finish
	- dnsmasq - finish
	- tinydls - finish
	- bftpd - finish
	- lightftp - finish
	- proftpd - finish
2. 能够运行的清单
	- forked-daapd
	- lighttpd1
	- tinydtls
	- openssl
	- kamailio 
	- dnsmasq
proftpd\live555\exim\

fuzzer综述7
协议综述 14
1. forked-daapd
2. dcmtk
3. dnsmasq
4. tinydtls
5. bftpd
6. lightftp
7. proftpd
8. pureftpd
9. lighttpd1
10. live555
11. kamailio
12. exim
13. openssh
14. openssl

```
export MAKE_OPT="-j$(nproc)" && cd /home/yan/ChatAFL/benchmark/subjects/RTSP/Live555 && docker build . -t live555 --build-arg MAKE_OPT $NO_CACHE 

docker run --privileged --cpus=1 -d -it live555 /bin/bash -c "cd /home/ubuntu/experiments && run aflnet out-live555-aflnet '-P RTSP -D 10000 -q 3 -s 3 -E -K -R -m none -t 5000' 3600 1"

docker run --privileged --cpus=1 -it live555 /bin/bash


cd /home/ubuntu/experiments && run stateafl out-live555-stateafl '-P RTSP -D 10000 -q 3 -s 3 -E -K -R -m none -u /home/ubuntu/experiments/live555-stateafl/testProgs/testOnDemandRTSPServer -t 5000' 3600 1
```

```python
# 运行单个测试
python3 universal_run.py --single RTSP aflnet Live555 \
    --containers 3 --timeout 720 --test-timeout 3000

### 批量运行测试
# 特定协议和fuzzer组合
python3 universal_run.py --protocols RTSP,DNS,FTP --fuzzers aflnet,chatafl,stateafl \
    --containers 2 --timeout 1440 --parallel 6

# 所有主要协议
python3 universal_run.py --all --fuzzers aflnet,chatafl,hierarchical \
    --containers 1 --timeout 2880

```