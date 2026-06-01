main():
│
├─变量声明与参数解析
│   ├─ gettimeofday(&tv, &tz) //获取当前时间（秒和微秒）

│   ├─ srandom(tv.tv_sec ^ tv.tv_usec ^ getpid()) //生成随机数种子

│   ├─ getopt循环（处理命令行参数）

│   │   └─ case分支处理-i-o -t -m -x -N -P -Q -E等参数

│   ├─ 检查必选参数：输入/输出目录、网络配置、协议选择

│   └─ 检查网络命名空间权限：调用check_ep_capability

├─模糊测试工具初始化

│   ├─ setup_signal_handlers   //设置信号处理器

│   ├─ check_asan_opts   //检查ASAN选项

│   ├─ 检查是否启用多实例同步，是则调用fix_up_sync修复同步目录路径

│   ├─ 检查输入输出目录、运行模式冲突、调用getenv解析环境变量

│   ├─ save_cmdline(argc, argv)  //保存命令行参数到输出目录

│   ├─ fix_up_banner(argv[optind]) // 修正横幅信息（用于屏幕UI）

│   ├─ check_if_tty()     //检测是否在TTY终端运行

│   ├─ get_core_count()   //获取系统CPU核心数量

│   ├─ check_crash_handling() //检查系统崩溃处理配置（如核心转储权限）

│   ├─ check_cpu_governor()   // 检查CPU是否为性能模式（确保测试效率）

│   ├─ setup_post()      // 初始化后处理模块（日志/统计/性能监控）

│   ├─ setup_shm()       // 设置共享内存（用于覆盖率跟踪和进程间通信）

│   ├─ init_count_class16() //初始化覆盖率计数分类器（命中次数分16类）

│   ├─ setup_ipsm()    //初始化交互式协议状态机（记录服务器状态和响应）

│   ├─ setup_dirs_fds()   //创建输出目录并初始化文件描述符

│   ├─ read_testcases()   //读取输入目录中的测试用例（生成初始队列）

│   ├─ load_auto()      //加载自动生成的测试用例（如重启时恢复历史数据）

│   ├─ pivot_inputs()   // 复制输入文件到临时目录（确保测试环境隔离）

│   ├─ if (extras_dir)则调用load_extras加载用户字典（增强变异策略）

│   ├─ if (!timeout_given)则调用find_timeout动态检测程序执行超时阈值

│   ├─ detect_file_args()  //检测目标程序是否接受文件参数（如`@@`替换）

│   ├─ if (!out_file)则调用setup_stdio_file设置标准输入/输出文件

│   ├─ check_binary() //检查目标程序是否存在、可执行且非脚本

│   ├─ get_cur_time() // 获取当前时间戳（用于计算测试持续时间和速率统计）

│   ├─ if (qemu_mode)则调用get_qemu_argv生成QEMU模式的程序命令行参数

│   ├─ perform_dry_run   //执行初始测试用例，验证目标程序基本功能

│   ├─ cull_queue()     // 精简测试队列，优先保留高覆盖率的测试用例

│   ├─ show_init_stats()  // 显示初始化阶段的统计信息（用例数量/覆盖率）

│   ├─ find_start_position() //确定从队列的哪个位置开始测试（支持恢复）

│   ├─ write_stats_file(0, 0, 0)  //写入初始统计文件（fuzzer_stats）

│   └─ save_auto()     // 保存自动生成的测试用例到输出目录

├─ 模糊测试主循环（状态感知模式）：if (state_aware_mode)

│    ├─先检查服务器状态是否存在

│    └─ while (1)

│         ├─ target_state_id = choose_target_state()//选择目标协议状态

│         ├─ cull_queue()      //根据选中状态更新队列优先级

│         ├─ selected_seed = choose_seed()  //选择与状态关联的种子

│         ├─ 定位种子：移动队列指针选中种子（queue_cur = selected_seed）

│         ├─ 执行测试：skipped_fuzz = fuzz_one(use_argv) //变异和测试

│         │       ├─ calibrate_case()   // 校准用例稳定性

│         │       ├─ trim_case()        // 最小化输入

│         │       ├─ perform_mutations() //执行变异（位翻转/字典插入等）

│         │       └─ run_target()       // 运行目标程序并监控结果

│         └─ 多实例同步（启用）：调用sync_fuzzers定期同步测试结果到其他实例

├─ 模糊测试主循环（常规模式）：else

│    └─ while (1)

│        ├─ cull_queue()           // 精简队列

│        ├─ 遍历队列、周期统计、若无新发现则启用拼接变异

│        ├─ 执行模糊测试skipped_fuzz = fuzz_one(use_argv) // 同上

│        └─ show_stats()     // 显示最终测试统计信息

└─ 资源清理与退出

    ├─ write_bitmap()                  // 保存覆盖率位图（用于后续分析）

    ├─ write_stats_file(0, 0, 0)     // 写入最终统计文件

    ├─ save_auto()                     // 保存最新自动生成的测试用例

    ├─ stop_fuzzing标签：输出终止信息

├─fclose(plot_file)     // 关闭统计绘图文件（如plot_data）

├─destroy_queue()         // 销毁测试队列，释放所有测试用例内存

├─destroy_extras()        // 销毁加载的字典数据

├─ck_free(target_path)    // 释放目标程序路径字符串内存

├─ ck_free(sync_id)        // 释放多实例同步ID内存

├─ destroy_ipsm()        // 销毁协议状态机（释放状态跟踪相关资源）

└─ exit(0)                // 正常退出程序

static u8 fuzz_one(char** argv)

├─ 条件编译:是否启用IGNORE_FINDS

│   ├─ 是->再判断queue_cur->depth > 1:是则跳过

│   └─ 否-> 进入状态感知或优先级判断

├─ 状态感知模式与优先级判断:state_aware_mode是否为真

│   ├─ 是->跳转到AFLNET_REGIONS_SELECTION（区域选择）

│   └─ 否->检查pending_favored:真->概率跳过非优先用例,假->跳过旧非优先用例

├─ AFLNET_REGIONS_SELECTION: 选择M2区域

│   ├─ 状态感知模式->基于服务器响应状态定位M2并计算M2区域长度

│   └─ 非状态感知模式->随机选择M2

├─ 构建消息链表kl_messages与边界指针

│   └─ 定位M2边界（M2_prev/M2_next）

├─ 写入缓冲区：复制M2区域数据到in_buf，复制到out_buf，数据隔离

├─ 计算性能评分（perf_score）

├─ 检查跳过条件：满足->跳到havoc_stage,不满足-> doing_det=1（进入确定性变异）

├─ 确定性变异阶段

│   ├─比特翻转

│   │   ├─flip1（单比特翻转）

│   │  │   ├─FLIP_BIT(out_buf, stage_cur)翻转第stage_cur个比特

│   │  │   ├─调用common_fuzz_stuff测试变异后的数据包

│   │  │   ├─每8位判断一下路径哈希是否变化，有变化表示该字节敏感->调用

│   │  │   │   maybe_add_auto收集到自动字典

│   │  │   └─更新统计数据：发现的新路径数、本阶段新增有效路径数、本阶段变异次数

│ │  ├─flip2翻转2位，逻辑相同

│ │  ├─flip4翻转4位，逻辑相同

│   │  ├─Effector Map初始化，用于标记无效字节

│   │   ├─flip8并判断：如字节翻转后未改变路径哈希，EFF_APOS标为无效，后续跳过

│   │   └─flip16、flip32并根据Effector Map跳过无效字节

│   ├─算术运算（skip_bitflip:标签之后）

│   │   ├─arith8

│   │  │   ├─检查Effector Map，跳过无效字节

│   │  │   ├─调用could_be_bitflip排除可通过位翻转生成的值->加（减）运算

│   │  │   └─调用common_fuzz_stuff测试变异后的数据包->更新统计数据

│   │   ├─arith16

│   │  │   ├─检查Effector Map，跳过无效双字节

│   │  │   ├─小端序计算，排除可位翻转生成的值->加（减）运算->测试->恢复值

│   │  │   ├─大端序计算，排除可位翻转生成的值->加（减）运算->测试->恢复值

│   │  │   └─更新统计数据

│   │   └─arith32与16位原理相同

│   ├─ 特殊值替换（skip_arith:标签之后）

│   │   ├─interest 8/8

│   │  │   ├─检查Effector Map，跳过无效字节

│   │  │   ├─could_be_bitflip排除位翻转的值；could_be_arith排除计算的值

│   │  │   └─替换为特殊值->common_fuzz_stuff测试->恢复原值->更新统计数据

│   │   ├─interest 16/8

│   │  │   ├─跳过无效字节，排除可通过位翻转和计算得到的值

│   │  │   └─分别用大端和小端写入替换的特殊值->测试->恢复值->更新统计数据

│   │   └─interest 32/8 与16位替换原理相同

│   ├─ 用户字典（skip_interest:标签之后）

│   │   ├─user extras (over) 用户字典覆盖

│   │  │   ├─检查字典项（避免过长、重复、区域无效

│   │  │   └─写入缓冲区覆盖->测试->恢复原值->更新统计数据

│   │   └─user extras (insert) 用户字典插入

│   │      └─遍历所有可能的插入位置->头部+字典项+尾部->测试->恢复值->更新统计

│   ├─ 自动字典（skip_user_extras:标签之后）

│   │   └─auto extras (over) 自动字典覆盖操作

│   │      └─检查有无自动字典->写入缓冲区覆盖->测试->恢复原值->更新统计数据

│   └─标记确定性测试完成（skip_extras:标签之后）调用mark_as_det_done

├─ 随机破坏阶段（havoc_stage:标签）：随机的、多次叠加的变异操作

│   ├─普通模式havoc计算perf_score变异次数;拼接模式splice设置最大变异次数

│   ├─初始化参数

│   ├─ 进入变异循环开始随机变异

│   │   ├─ 随机选择叠加次数（use_stacking = 2^(1~7)），循环执行叠加变异

│   │   ├─ 随机选择变异策略（0~20）

│   │   ├─ 执行具体变异（位操作/算术/块操作/字典/区域）

│   │   └─ 提交测试（common_fuzz_stuff）

│   └─ 恢复缓冲区->动态调整stage_max->更新统计数据

├─ 拼接阶段（retry_splicing:标签）

│   ├─ 检查拼接条件->不满足则跳过

│   ├─ 恢复原始数据（in_buf）确保后续拼接操作基于原始数据，避免污染

│   ├─ 随机选择目标用例->遍历队列找到有效target,读取目标用例到new_buf

│   ├─ 定位差异区域（f_diff, l_diff）: 无效->放弃并retry; 有效->继续

│   ├─ 随机选择分割点split_at,拼接数据：in_buf前半段 + new_buf后半段

│   └─更新out_buf → 跳转到havoc_stage

└─清理测试用例（abandon_entry:标签）

   ├─更新队列状态:标记用例为已处理/更新状态跟踪表/减少未处理用例(优先队列)计数

   ├─ 释放内存：原始输入/缓冲区/有效标记eff_map/协议消息链表kl_messages

   └─返回与宏清理: 返回处理结果ret_val/取消宏定义

run_target()：执行目标程序并监控结果（核心执行逻辑）

│

├─ 初始化与内存准备

│    ├─ memset(trace_bits, 0, MAP_SIZE)    // 清空覆盖率跟踪位图

│    └─ MEM_BARRIER()                     // 内存屏障，防止编译器重排序

├─ 执行模式分支fork()（dumb模式/无fork服务器）

│    ├─ 创建子进程child_pid = fork()运行目标程序

│    │   ├─ 设置资源限制（内存限制、核心转储）

│    │   ├─ move_process_to_netns：子进程移至网络命名空间，网络环境隔离

│    │   ├─ 输入输出重定向（stdin/stdout/stderr到/dev/null或文件）

│    │   ├─ 关闭无用文件描述符（dev_null_fd, out_dir_fd等）

│    │   ├─ 设置内存检测环境变量（ASAN_OPTIONS/MSAN_OPTIONS）

│    │   └─ execv(target_path, argv)：执行目标程序

│    └─ 父进程等待子进程结束waitpid(child_pid, &status, 0)

├─ fork server：与fork服务器通信，获取子进程pid

│    ├─ write(fsrv_ctl_fd, ...)   //发送执行请求给fork服务器

│    └─ read(fsrv_st_fd, ...)     //读取子进程pid

├─ 超时监控

│    ├─ setitimer(ITIMER_REAL, &it, NULL) //设置定时器（用户指定超时）

│    └─ 信号处理：若超时触发SIGALRM，子进程被终止（child_timed_out=1）

├─ 网络测试：send_over_network()  //向目标服务器发送测试数据

├─ 执行时间计算：getitimer()获取剩余定时器时间

├─ 覆盖率处理

│   ├─ MEM_BARRIER()             // 确保trace_bits写入完成

│   └─ classify_counts：将覆盖率分类压缩，更新全局计数器（total_execs++）

├─ 处理子进程退出状态

│   ├─ 信号终止：SIGKILL且超时->FAULT_TMOUT；其他->FAULT_CRASH

│   ├─ ASAN/MSAN特殊处理：若退出码为MSAN_ERROR->返回FAULT_CRASH

│   └─ EXEC_FAIL_SIG检查->返回FAULT_ERROR

└─ 记录最慢执行时间：更新slowest_exec_ms

update_state_aware_variables：更新状态感知测试变量（状态机、路径、种子关联）

│

├─ 协议响应解析

│   ├─ extract_response_codes：从响应数据提取状态序列（如HTTP状态码）

│   └─ get_unique_state_count：计算唯一状态数量

├─ is_state_sequence_interesting()：判断状态序列是否有保存价值

│   ├─ 保存可回放路径

│   │   ├─ state_sequence_to_string()  // 将状态序列转为字符串

│   │   ├─ save_kl_messages_to_file() //保存消息链表到文件用于状态回放

│   ├─ 更新协议状态机（IPSM）

│   │   ├─ 遍历状态序列，两两组合形成状态转移，构建状态转移图

│   │   ├─ 添加节点（agnode）：若状态未存在->创建新节点并插入状态哈希表(红)

│   │   └─ 添加边（agedge）：若转移未存在->创建新边

│   └─ 持久化状态机：调用agwrite将状态机写入ipsm.dot文件（Graphviz格式）

├─ update_region_annotations(q)：区域注释更新，标注输入区域关联的状态序列

├─ 种子与状态关联：将当前种子与它能到达的状态相关联并更新状态表（khms_states）

│   ├─ 所有种子都默认可以到达初始状态（state 0）

│   │   └─ 将q关联到初始状态种子列表，标记种子在该状态未被fuzz过

│   └─ 区域状态关联：遍历所有region并更新其能到达的状态

│        ├─ 遍历每个区域：获取区域末状态ID （reachable_state_id）

│        ├─ 若状态不存在->动态创建并初始化

│        └─ 将q关联到该状态的种子列表，更新was_fuzzed_map

├─ 状态路径统计

│   ├─ khs_state_ids = kh_init(hs32) //创建临时哈希集合（避免重复计数）

│   ├─ 遍历状态序列，统计每个状态被多少不同路径访问过

│   │   └─ 若state_id未在集合中 → 插入并更新该状态的paths计数

│   └─ 销毁临时哈希集合

├─ 目标状态发现计数，记录目标状态的新发现路径数（被很多路径触发的高价值状态）

└─ 资源清理：ck_free(state_sequence)  // 释放状态序列内存

save_if_interesting()：判断并保存有价值的测试用例（新覆盖、崩溃、超时）

│

├─ 处理崩溃模式（fault == crash_mode）

│   ├─ if(has_new_bits(virgin_bits))：检查是否触发新代码覆盖

│   │   ├─ 保存用例到队列

│   │   │   ├─ fn=生成唯一队列文件名（如`queue/id:000123,op:flip1`）

│   │   │   ├─ save_kl_messages_to_file：保存协议消息链表到队列目录

│   │   │   └─ add_to_queue()：将用例加入测试队列

│   │   ├─ 状态感知模式：update_state_aware_variables更新状态机关联

│   │   ├─ 保存可回放路径：保存消息链表到`replayable-queue`目录

│   │   ├─ 校准用例calibrate_case()：重新运行以确认稳定性，更新覆盖率分数

│   └─ else：忽略无新覆盖的崩溃（total_crashes++后返回0）

├─ 处理超时（fault == FAULT_TMOUT）

│   ├─ 若唯一超时数已达上限（KEEP_UNIQUE_HANG）->跳过

│   ├─ 非dumb模式下检查是否为新超时路径（has_new_bits(virgin_tmout)）

│   ├─ 重新验证超时：用更长超时（hang_tmout）重新运行，避免误判

│   │    └─ 若新运行导致崩溃->转至崩溃处理（goto keep_as_crash标签）

│   ├─ 生成超时用例文件名（如`replayable-hangs/id:000001,op:hang`）

│   └─ 更新统计（unique_hangs++，记录时间）

├─ 处理崩溃（fault == FAULT_CRASH，keep_as_crash:标签）

│   ├─ 若唯一崩溃数已达上限（KEEP_UNIQUE_CRASH）->跳过

│   ├─ 非dumb模式下检查是否为新崩溃路径（has_new_bits(virgin_crash)）

│   ├─ 首次崩溃时生成README文件（write_crash_readme()）

│   ├─ 生成崩溃用例文件名（如`replayable-crashes/id:000001,sig:11`）

│   └─ 更新统计（unique_crashes++，记录时间和执行次数）

├─ 错误处理（fault == FAULT_ERROR）：终止程序（FATAL）

└─ 最终保存与清理

     ├─ save_kl_messages_to_file()：保存协议消息到对应目录（超时/崩溃）

     └─ ck_free(fn)：释放文件名内存，返回keeping（1保存/0忽略）

perform_dry_run()：执行初始测试用例验证（确保目标程序基本功能正常）

│

├─ 遍历测试队列：while (q = queue)

│   ├─ 初始化标记q->is_initial_seed：标记为初始种子（后续校准不重复处理）

│   ├─ 加载测试用例文件：open打开输入文件，read读取文件内容到内存

│   ├─ 协议消息链表构造：construct_kl_messages根据区域构建消息链表

│   ├─ 校准用例：calibrate_case运行目标程序，验证用例稳定性，返回状态码

│   ├─ 状态感知模式：res=update_state_aware_variables记录dry_run状态

│   ├─ 保存回放路径：生成回放文件名，save_kl_messages_to_file保存到文件

│   ├─ 释放协议消息链表：delete_kl_messages

│   └─ 处理校准结果：switch (res)

│        ├─ 正常情况（FAULT_NONE）：check_map_coverage检查初始覆盖率

│        ├─ 超时（FAULT_TMOUT）：允许跳过则标记用例失败并跳过，否则终止程序

│        ├─ 崩溃（FAULT_CRASH）：若启用AFL_SKIP_CRASHES则跳过，否则终止

│        ├─ 其他错误：如FAULT_NOBITS（无新覆盖率）->标记为无用用例

│        └─ 统计失败用例: cal_failures++ 记录超时/崩溃的用例数量

└─ 最终统计与提示:if (cal_failures)->输出跳过的用例比例和警告，完成提示

common_fuzz_stuff

├─ post_handler (如果存在，处理数据并返回新的缓冲区)

├─ write_to_testcase (写入变异后的用例)

├─ extract_requests (解析out_buf，提取请求区域regions)

├─ 为每个region创建消息message_t，并将其插入kl_messages 链表中

├─ run_target (执行目标程序)

├─ 如果启用状态感知模式则调用update_fuzzs更新状态命中次数（用于优先级计算）

├─ 检查stop_soon以提前退出；检查连续超时、检查是否需要跳过->跳过当前用例

└─ save_if_interesting (保存新发现的有趣用例)