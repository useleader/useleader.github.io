```c++
// 主函数调用链

fuzz_one()

→ send_over_network() // 发送数据到目标

→ lightweight_trace_collect() // 轻量级轨迹收集

→ add_function_call() // 记录关键函数调用

→ add_memory_operation() // 记录内存操作

→ extract_requests() // 提取服务器的响应

→ extract_response_codes() // 提取状态码

→ run_target() // 执行目标程序

→ analyze_trace_semantics() // LLM分析轨迹语义
```

Q1: lightweight_trace_collect()函数为什么不需要传递参数，他收集的信息是谁的信息，我想要的是针对每条消息进行收集对应的运行轨迹
A1：不传递参数是因为存在一系列全局变量，并且会有初始化和重置机制确保变量无误
```C++
// 函数声明
void lightweight_trace_collect();

// 依赖的全局变量
static execution_trace_t* current_trace = NULL;  // 当前轨迹
extern u32 semantic_state_enabled;               // 语义分析开关
extern u8* out_buf;                              // 当前要发送的数据缓冲区
extern u32 len;                                  // 数据缓冲区长度
extern u32 messages_sent;                        // 已发送的消息数量
extern klist_t(lms) *kl_messages;                // 消息链表
```

T1.1：收集的逻辑是先记录消息发送，然后发送给服务器，获得响应后，我再记录接受吗？我的理解是我应该记录消息发送给服务器，服务器运行过程中触发的各种函数或内存状态等信息进行记录
A1.1:进行的操作是发送消息前的轨迹记录，记录发送的协议动作，发送消息到服务器，等待服务器响应，接收服务器响应，记录接收到的响应处理，处理相应的轨迹记录，提取请求与响应码；
T1.2: 那发送消息前后的轨迹记录是记录服务器对应时刻运行的状态吗，然后对于消息的处理是从语法结构层面进行解析来获知都是进行了哪些协议动作是吗
A1.2：ai的反馈是无法感知，但是对于插桩的服务器来说这部分信息应该是能反馈的，这个是一个可能的优化点，但是就是得后续的工作了，这篇论文大致上不能通过这个方式进行了；对于语法结构的解析也并没有一个明确的实行方案
T1.3：我问一下ai是否能够通过插桩的程序来获取不同输入触发的函数调用等内容来做信息记录，如果可以且不麻烦的话就能够顺着这个思路继续，明确运行状态对应的是编译时插桩
A1.3：ai提供给了我一份修改的很彻底的代码，定义了新的插桩宏，重新设置了回调函数
T1.4：我目前不想要修改编译插桩方式，因为在对协议打补丁等过程当中每个协议都已经明确好了如何编译，一旦我这里进行修改，剩余的部分都要进行修改；我想要的是基于AFLNet现有编译插桩的方式不变，先确定目前能够获取哪些信息，再确定哪些信息能用来帮我们补全对于状态感知机更深层次的建模，最后确定如何能够记录这些信息并用于状态机建模且服务于以后的突变
A1.4:先定义了一个协议状态
```C
// 协议状态枚举
typedef enum {
    PROTOCOL_STATE_INIT,              // 初始状态
    PROTOCOL_STATE_CONNECTED,         // 已连接
    PROTOCOL_STATE_AUTHENTICATED,     // 已认证  
    PROTOCOL_STATE_COMMAND_RECEIVED,  // 命令已接收
    PROTOCOL_STATE_DATA_PROCESSING,  // 数据处理中
    PROTOCOL_STATE_RESPONSE_SENT,    // 响应已发送
    PROTOCOL_STATE_ERROR,             // 错误状态
    PROTOCOL_STATE_CLOSED             // 连接关闭
} protocol_state_t;

```
接着提供了一个从轨迹推断协议状态的方式，通过分析trace中记录的func_calls是否包含特定的函数来确定所处的状态；
然后提供给我了一个状态转换图的构建
T1.5：首先得和常见的协议状态机定义方式确保一致，再看看chatafl是如何定义的协议状态机，我感觉他这个直接给的定义有可能覆盖面并不是很广，没法起到一个普适化的效果，倒是可以针对协议提供一个特定的协议状态机定义我觉得也可以；这个从轨迹推断协议状态直接用状态码就能够获知一大部分状态，func_calls是如何填充的呢，这个方式是否合理呢；状态转换图像直接基于chatafl来做工作了；要不推翻重来吧，这个工作要想推进我感觉得从插桩部分下手了，这个可以等后续再憋一篇
Q2：是否应该针对不同协议实现不同的收集方式，不同协议间的函数并不相通

Q3：add_function_call, add_memory_operation等操作是如何实现的提取