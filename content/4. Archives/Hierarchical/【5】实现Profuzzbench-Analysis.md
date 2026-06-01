
需要先收集结果
```bash
cd $PFBENCH/results-lightftp
profuzzbench_generate_csv.sh lightftp 1 aflnet results.csv 0
```
具体来说，这些tar文件是所有模糊测试实例生成的输出文件夹的压缩版本。如果模糊测试器是基于AFL的（例如，AFLNet，AFLnwe），每个文件夹应包含诸如 crashes、hangs、queue 等子文件夹。
使用profuzzbench_generate_csv.sh脚本可以收集代码覆盖率随时间变化的结果。该脚本需要以下5个参数：
第一个参数 (PROG)：目标程序的名称（例如，lightftp）。
第二个参数 (RUNS)：运行次数。
第三个参数 (FUZZER)：模糊测试器的名称（例如，aflnet）。
第四个参数 (COVFILE)：用于保存结果的 CSV 格式的输出文件。
第五个参数 (APPEND)：追加模式；对第一个模糊测试器设置为0，对后续的模糊测试器设置为1。


profuzzbench_gen


## `profuzzbench_generate_all.sh` 脚本功能详解

这个脚本是**批量分析和可视化模糊测试结果**的自动化工具，主要执行以下操作：

### 核心功能流程

#### 1. **数据收集阶段**
```bash
# 查找所有results-开头的目录
declare -a FOLDERS=$(ls | grep results-)
```
- 扫描当前目录下所有 `results-*` 文件夹，对应的是benchmark目录下
- 每个文件夹对应一个目标程序的实验结果

#### 2. **实验参数解析**
```bash
TARGET=$(echo $RESULTDIR | perl -n -l -e '/results-(.*)/; print $1;')
FUZZERS=$(ls *.tar.gz | perl -n -l -e 'print $1 if /^out-.+-(\w+)_\d+\.tar\.gz/;'|sort|uniq)
REPS=$(ls *.tar.gz | perl -n -l -e 'print $1 if /^out-.+-\w+_(\d+)\.tar\.gz/;'|sort -r|head -1)
```

**提取信息：**
- `TARGET`: 目标程序名称（从文件夹名提取）
- `FUZZERS`: 参与测试的fuzzer列表
- `REPS`: 实验重复次数

#### 3. **数据处理核心循环**

对每个fuzzer执行：
```bash
profuzzbench_generate_csv.sh $TARGET $REPS $FUZZER results.csv $APPEND states.csv
```

**`profuzzbench_generate_csv.sh` 的作用：**
- **解压tar.gz文件**：提取实验输出数据
- **数据格式转换**：
  - 原始格式：`time,l_per,l_abs,b_per,b_abs`
  - 转换格式：`time,subject,fuzzer,run,cov_type,cov`
- **处理两种覆盖率数据**：
  - **代码覆盖率**：行覆盖(`l_*`)和分支覆盖(`b_*`)
  - **状态覆盖率**：节点数(`nodes`)和边数(`edges`)

#### 4. **可视化生成**

```bash
profuzzbench_plot.py -i results.csv -p $TARGET -r $REPS -c $TIME -s 1 -o cov_over_time_${TARGET}.png -f $FUZZERS
profuzzbench_state.py -i states.csv -p $TARGET -r $REPS -c $TIME -s 1 -o state_over_time_${TARGET}.png -f $FUZZERS
```

**生成图表：**
- **`cov_over_time_${TARGET}.png`**：代码覆盖率随时间变化对比图
- **`state_over_time_${TARGET}.png`**：状态覆盖率随时间变化对比图

### 输出结果

#### 1. **CSV数据文件**
- `results.csv`：标准化的代码覆盖率数据
- `states.csv`：标准化的状态覆盖率数据

#### 2. **PNG可视化图表**
- `cov_over_time_${TARGET}.png`：所有fuzzer的代码覆盖率对比
- `state_over_time_${TARGET}.png`：所有fuzzer的状态覆盖率对比

#### 3. **数据格式示例**

**results.csv:**
```csv
time,subject,fuzzer,run,cov_type,cov
60,lightftp,aflnet,1,l_per,45.2
60,lightftp,chatafl,1,l_per,52.8
...
```

**states.csv:**
```csv
time,subject,fuzzer,run,state_type,state
60,lightftp,aflnet,1,nodes,15
60,lightftp,chatafl,1,nodes,23
...
```

### 使用场景

这个脚本通常在 `./analyze.sh` 执行后自动运行，用于：
1. **批量处理**多个目标的实验结果
2. **标准化**不同格式的输出数据
3. **可视化**生成对比图表
4. **归档**完整的实验结果

它是ChatAFL实验分析流水线的关键组件，将原始的模糊测试输出转换为易于分析和展示的标准化格式。