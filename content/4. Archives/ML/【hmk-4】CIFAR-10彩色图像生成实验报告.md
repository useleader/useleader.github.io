## 1. 问题描述

### 1.1 研究背景
生成对抗网络（Generative Adversarial Networks, GANs）是深度学习领域的重要突破，能够学习数据分布并生成高质量的合成数据。彩色图像生成作为计算机视觉的核心任务，在数据增强、艺术创作、图像编辑等领域具有广泛应用价值。

### 1.2 问题定义
本实验旨在基于CIFAR-10数据集训练深度卷积生成对抗网络（DCGAN），实现32×32像素彩色图像的自动生成。CIFAR-10包含10个类别（飞机、汽车、鸟类、猫、鹿、狗、青蛙、马、船、卡车）的60,000张彩色图像，其中50,000张用于训练，10,000张用于测试。

### 1.3 技术挑战
- **训练稳定性**：生成器和判别器的对抗训练容易出现模式崩塌
- **图像质量**：生成32×32彩色图像需要保持细节清晰度和颜色真实性
- **评估标准**：需要客观指标（IS、FID）和主观评价相结合

## 2. 实验模型原理和概述

### 2.1 DCGAN架构原理
深度卷积生成对抗网络（DCGAN）是GAN在计算机视觉领域的重要发展，其核心思想是通过两个神经网络的对抗训练来学习数据分布：

**生成器（Generator）G**：将随机噪声z映射为图像数据
```
G: z ∈ ℝ^100 → x ∈ ℝ^(32×32×3)
```

**判别器（Discriminator）D**：区分真实图像和生成图像
```
D: x ∈ ℝ^(32×32×3) → [0,1]
```

### 2.2 损失函数设计
GAN的训练目标是求解以下极小极大博弈问题：

```
min_G max_D V(D,G) = E_{x~p_data(x)}[log D(x)] + E_{z~p_z(z)}[log(1-D(G(z)))]
```

其中：
- 判别器目标：最大化识别真假图像的能力
- 生成器目标：最小化生成图像被识别为假的概率

### 2.3 DCGAN关键改进
1. **全卷积架构**：使用转置卷积替代全连接层
2. **批归一化**：稳定训练过程，加速收敛
3. **激活函数选择**：生成器使用ReLU和Tanh，判别器使用LeakyReLU
4. **Adam优化器**：自适应学习率，提升训练效果

## 3. 实验模型结构和参数

### 3.1 生成器网络结构

```python
Generator Architecture:
Input: 100-dim noise vector
├── ConvTranspose2d(100 → 512, kernel=4, stride=1, padding=0)  # 4×4×512
├── BatchNorm2d + ReLU
├── ConvTranspose2d(512 → 256, kernel=4, stride=2, padding=1)  # 8×8×256
├── BatchNorm2d + ReLU
├── ConvTranspose2d(256 → 128, kernel=4, stride=2, padding=1)  # 16×16×128
├── BatchNorm2d + ReLU
└── ConvTranspose2d(128 → 3, kernel=4, stride=2, padding=1)    # 32×32×3
    └── Tanh (输出范围[-1,1])
```

### 3.2 判别器网络结构

```python
Discriminator Architecture:
Input: 32×32×3 RGB image
├── Conv2d(3 → 64, kernel=4, stride=2, padding=1)     # 16×16×64
├── LeakyReLU(0.2)
├── Conv2d(64 → 128, kernel=4, stride=2, padding=1)   # 8×8×128
├── BatchNorm2d + LeakyReLU(0.2)
├── Conv2d(128 → 256, kernel=4, stride=2, padding=1)  # 4×4×256
├── BatchNorm2d + LeakyReLU(0.2)
└── Conv2d(256 → 1, kernel=4, stride=1, padding=0)    # 1×1×1
    └── Sigmoid (输出概率[0,1])
```

### 3.3 训练参数配置

| 参数类别 | 参数名称 | 数值 | 说明 |
|---------|----------|------|------|
| **网络参数** | 噪声维度(nz) | 100 | 输入随机噪声向量维度 |
| | 生成器特征数(ngf) | 64 | 生成器基础特征映射数 |
| | 判别器特征数(ndf) | 64 | 判别器基础特征映射数 |
| **训练参数** | 批次大小(batch_size) | 128 | 每批训练样本数 |
| | 学习率(lr) | 0.0002 | Adam优化器学习率 |
| | Beta1 | 0.5 | Adam动量参数 |
| | 训练轮数(epochs) | 100 | 总训练轮数 |
| **数据参数** | 图像尺寸 | 32×32×3 | CIFAR-10标准尺寸 |
| | 归一化范围 | [-1,1] | 匹配Tanh输出范围 |
