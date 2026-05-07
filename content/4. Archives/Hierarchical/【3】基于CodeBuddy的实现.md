代码生成完之后，使用live555进行调试指令如下：
```
docker build -t hierarchical -f tutorials/live555/Dockerfile.hierarchical .

docker run -it --privileged=true -v ~/ChatAFL/Hierarchical:/home/ubuntu/aflnet hierarchical /bin/bash

echo core > /proc/sys/kernel/core_pattern
export OPENAI_TOKEN=sk-Hc6IGVxPkGHUw6tp3c9b78574f2d41C3Aa69EeD974893bD2
export LLVM_CONFIG="llvm-config-10"
export AFLNET="/home/ubuntu/aflnet"
export PATH="${PATH}:${AFLNET}"
export AFL_PATH="${AFLNET}"
export AFL_I_DONT_CARE_ABOUT_MISSING_CRASHES=1
export AFL_SKIP_CPUFREQ=1


$AFLNET/afl-fuzz -d -i $AFLNET/tutorials/live555/in-rtsp -x $AFLNET/tutorials/live555/rtsp.dict -o out-live555-chatafl -N tcp://127.0.0.1/8554 -P RTSP -D 10000 -q 3 -s 3 -E -K -R -m none ./testOnDemandRTSPServer 8554 -L1 -p $AFLNET/tutorials/live555/rtsp.dict -pn RTSP

----
vim aflnet/hierarchical_llm_controller.c

cd $AFLNET/ && make clean all -j8 && cd llvm_mode && make -j8 && cd /home/yan/hierarchical/ && \
rm -rf live555 && \
git clone https://gitee.com/magicor/live555.git && \
cd /home/yan/hierarchical/live555 && git checkout ceeb4f4 && \
patch -p1 < $AFLNET/tutorials/live555/ceeb4f4_states_decomposed.patch && \
./genMakefiles linux && \
make clean all -j8 && \
cd /home/yan/hierarchical/live555/testProgs

---

cd $AFLNET/ && make clean all -j8 && cd /home/yan/hierarchical/live555/testProgs && $AFLNET/afl-fuzz -d -i $AFLNET/tutorials/live555/in-rtsp -x $AFLNET/tutorials/live555/rtsp.dict -o out-live555-chatafl -N tcp://127.0.0.1/8554 -P RTSP -D 10000 -q 3 -s 3 -E -K -R -m none ./testOnDemandRTSPServer 8554 -L1 -p $AFLNET/tutorials/live555/rtsp.dict -pn RTSP

---

cd $AFLNET/ && make clean all -j8 && cd /home/ubuntu/live555/testProgs && $AFLNET/afl-fuzz -d -i $AFLNET/tutorials/live555/in-rtsp -x $AFLNET/tutorials/live555/rtsp.dict -o out-live555-chatafl -N tcp://127.0.0.1/8554 -P RTSP -D 10000 -q 3 -s 3 -E -K -R -m none ./testOnDemandRTSPServer 8554 -L1 -p $AFLNET/tutorials/live555/rtsp.dict -pn RTSP
```

