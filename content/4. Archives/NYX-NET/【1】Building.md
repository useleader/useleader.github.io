### Building

```bash
git clone https://github.com/RUB-SysSec/nyx-net.git
cd nyx-net
./setup.sh

# ERROR: pkg-config binary 'pkg-config' not found
sudo apt-get install pkg-config  
sudo apt-get install libavahi-ui-gtk3-dev

# ./setup.sh: 行 11: cargo: 未找到命令 -> 安装 rust cargo
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
sudo apt install cargo  # method 2 yes

# warning: `fuzz_runner` (lib) generated 1 warning
# error: could not compile `fuzz_runner` (lib) due to previous error; 1 warning emitted
# warning: build failed, waiting for other jobs to finish...
## https://blog.cn.net/ERIC_TWELL/article/details/130103342


# error[E0793]: reference to packed field is unaligned
```

实在部署不成功的话就直接用docker来使用profuzzbench吧
