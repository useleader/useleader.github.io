显示通过find_obj获取包含 `afl-llvm-pass.so` / `afl-llvm-rt.o` 的目录
然后edit_params来生成运行编译的指令，通过追加-Xclang -load -Xclang <obj_path>/afl-llvm-pass.so来加载自定义的llvm pass
核心插桩逻辑在afl-llvm-pass.so.cc中