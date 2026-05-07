# Obsidian Vault 重构 + 博客部署实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 `D:\Documents\knowledge` 打造成结构清晰的 LifeOS + PARA 知识库，并通过 Quartz 将精选内容发布到 `useleader.github.io`

**Architecture:** LifeOS PARA 结构（`1. Projects` / `2. Areas` / `3. Resources` / `4. Archives`）+ `0. PeriodicNotes`（独立于 PARA）+ Quartz 博客发布层

**Tech Stack:** Obsidian + LifeOS plugin + Templater + Dataview + QuickAdd + Waypoint + Quartz (WSL CLI)

**LifeOS 官方编号：** `1.` Projects / `2.` Areas / `3.` Resources / `4.` Archives / `0.` PeriodicNotes（不是 0-3）

---

## 阶段一：文件夹结构创建（已完成）

### 阶段 1A：Obsidian 内配置（用户在 Windows Obsidian 中操作）

**Templater 设置（设置 → Templater）：**
- Template folder location: `Templates`（WSL 已创建）
- ✅ Trigger Templater on new file creation: **开启**

**LifeOS 激活（设置 → LifeOS）：**
- 不需要重新创建文件夹（WSL 已创建 1-4 和 0. PeriodicNotes）
- ✅ Enable Daily Notes: **开启**
- ✅ Enable Weekly Notes: **开启**

**Obsidian Git 设置：**
- ✅ Auto commit on startup: **开启**
- ✅ Auto pull on startup: **开启**
- ✅ Auto push after commit: **开启**
- Commit message: `vault backup: {{date}} {{time}}`

**Waypoint 设置：**
- ✅ Enable folder notes: **开启**
- ✅ Auto-parse on modify: **开启**

---

### 阶段 1B：模板文件创建（WSL 执行，LifeOS 官方模板）

- [ ] **复制 LifeOS 官方 Periodic Note 模板**

```bash
# 路径包含空格，需要引号
cp "/tmp/lifeos-extracted/LifeOS/0. PeriodicNotes/Templates/Daily.md" "/mnt/d/Documents/knowledge/0. PeriodicNotes/Templates/Daily.md"
cp "/tmp/lifeos-extracted/LifeOS/0. PeriodicNotes/Templates/Weekly.md" "/mnt/d/Documents/knowledge/0. PeriodicNotes/Templates/Weekly.md"
cp "/tmp/lifeos-extracted/LifeOS/0. PeriodicNotes/Templates/Monthly.md" "/mnt/d/Documents/knowledge/0. PeriodicNotes/Templates/Monthly.md"
cp "/tmp/lifeos-extracted/LifeOS/0. PeriodicNotes/Templates/Quarterly.md" "/mnt/d/Documents/knowledge/0. PeriodicNotes/Templates/Quarterly.md"
cp "/tmp/lifeos-extracted/LifeOS/0. PeriodicNotes/Templates/Yearly.md" "/mnt/d/Documents/knowledge/0. PeriodicNotes/Templates/Yearly.md"
```

- [ ] **复制 PARA 模板**
```bash
cp "/tmp/lifeos-extracted/LifeOS/1. Projects/Template.md" "/mnt/d/Documents/knowledge/1. Projects/Template/Project.md"
```

- [ ] **配置 Templater 模板路径**
在 Obsidian 设置 → Templater → Template folder location 填写：
`D:\Documents\knowledge\0. PeriodicNotes\Templates`

---

## 阶段二：vault 内容迁移（WSL 执行）

> ⚠️ 执行前请确认已启用 Obsidian Git 自动备份，或手动在 Obsidian 中做一次 commit

### 迁移清单（PARA 编号 1-4）

| 原路径 | → 新路径 | 说明 |
|--------|---------|------|
| `Paper/` | `3. Resources/论文资料/` | 重命名 |
| `ML/` | `3. Resources/机器学习/` | 重命名 |
| `Fuzz/` + `SecurityMatrix/` | `3. Resources/Fuzzing/` | 合并 |
| `常识杂记/` | `3. Resources/常识杂记/` | 重命名 |
| `CodeAnalysis/` | `3. Resources/代码分析/` | 重命名 |
| `指南写作/` | `1. Projects/指南写作/` | 重命名 |
| `diary/2025-*` | `0. PeriodicNotes/2025/Daily/` | 合并进周期笔记 |
| `diary/2026-1/` | `0. PeriodicNotes/2026/Daily/` | 合并进周期笔记 |
| 根目录 `2026-01-*.md` | `0. PeriodicNotes/2026/Daily/` | 散落日记迁移 |
| `远程同步记录.md` | `3. Resources/工具/git/` | 工具参考笔记 |
| `Archive/` | `4. Archives/` | 重命名 |
| `Fuzzer/` | `4. Archives/` | 合并归档 |
| `office/` | `4. Archives/` | 合并归档 |

### 迁移命令（逐条执行）

### 阶段二（补充）：Resources 内容分类整理

**目标结构：**
```
3. Resources/
├── 论文阅读/         ← 论文阅读笔记（由原 Paper/ 改名）
├── 工程笔记/          ← 复现论文工具、开源项目记录
├── 课程笔记/           ← 上课记录内容
├── 论文写作/           ← 论文写作技巧
├── 杂记/              ← 小Tips、零散笔记（由原 常识杂记/ 改名）
├── Fuzzing/           ← Fuzzing 研究资料（已有）
├── 机器学习/           ← ML 学习资料（已有）
├── 代码分析/           ← 代码分析工具（已有）
└── 工具/              ← 工具参考（已有）
```

**注意**：日记（Periodic Notes/Daily）不公开，纯私人笔记

**迁移命令：**

- [ ] **论文资料 → 论文阅读**
```bash
mv "/mnt/d/Documents/knowledge/3. Resources/论文资料" "/mnt/d/Documents/knowledge/3. Resources/论文阅读"
```

- [ ] **常识杂记 → 杂记**
```bash
mv "/mnt/d/Documents/knowledge/3. Resources/常识杂记" "/mnt/d/Documents/knowledge/3. Resources/杂记"
```

- [ ] **创建新分类文件夹**
```bash
mkdir -p "/mnt/d/Documents/knowledge/3. Resources/工程笔记"
mkdir -p "/mnt/d/Documents/knowledge/3. Resources/课程笔记"
mkdir -p "/mnt/d/Documents/knowledge/3. Resources/论文写作"
```

- [ ] **验证最终结构**
```bash
find "/mnt/d/Documents/knowledge/3. Resources" -maxdepth 1 -type d | sort
```
```bash
mkdir -p "/mnt/d/Documents/knowledge/3. Resources/论文资料"
mv "/mnt/d/Documents/knowledge/Paper/"* "/mnt/d/Documents/knowledge/3. Resources/论文资料/" 2>/dev/null
rmdir "/mnt/d/Documents/knowledge/Paper/" 2>/dev/null
```

- [ ] **迁移 ML → Resources/机器学习**
```bash
mkdir -p "/mnt/d/Documents/knowledge/3. Resources/机器学习"
mv "/mnt/d/Documents/knowledge/ML/"* "/mnt/d/Documents/knowledge/3. Resources/机器学习/" 2>/dev/null
rmdir "/mnt/d/Documents/knowledge/ML/" 2>/dev/null
```

- [ ] **合并 Fuzz + SecurityMatrix → Resources/Fuzzing**
```bash
mkdir -p "/mnt/d/Documents/knowledge/3. Resources/Fuzzing"
mv "/mnt/d/Documents/knowledge/Fuzz/"* "/mnt/d/Documents/knowledge/3. Resources/Fuzzing/" 2>/dev/null
mv "/mnt/d/Documents/knowledge/SecurityMatrix/"* "/mnt/d/Documents/knowledge/3. Resources/Fuzzing/" 2>/dev/null
rmdir "/mnt/d/Documents/knowledge/Fuzz/" 2>/dev/null
rmdir "/mnt/d/Documents/knowledge/SecurityMatrix/" 2>/dev/null
```

- [ ] **迁移常识杂记 → Resources/常识杂记**
```bash
mkdir -p "/mnt/d/Documents/knowledge/3. Resources/常识杂记"
mv "/mnt/d/Documents/knowledge/常识杂记/"* "/mnt/d/Documents/knowledge/3. Resources/常识杂记/" 2>/dev/null
rmdir "/mnt/d/Documents/knowledge/常识杂记/" 2>/dev/null
```

- [ ] **迁移 CodeAnalysis → Resources/代码分析**
```bash
mkdir -p "/mnt/d/Documents/knowledge/3. Resources/代码分析"
mv "/mnt/d/Documents/knowledge/CodeAnalysis/"* "/mnt/d/Documents/knowledge/3. Resources/代码分析/" 2>/dev/null
rmdir "/mnt/d/Documents/knowledge/CodeAnalysis/" 2>/dev/null
```

- [ ] **迁移指南写作 → Projects/指南写作**
```bash
mkdir -p "/mnt/d/Documents/knowledge/1. Projects/指南写作"
mv "/mnt/d/Documents/knowledge/指南写作/"* "/mnt/d/Documents/knowledge/1. Projects/指南写作/" 2>/dev/null
rmdir "/mnt/d/Documents/knowledge/指南写作/" 2>/dev/null
```

- [ ] **迁移日记 → Periodic Notes/Daily**
```bash
mkdir -p "/mnt/d/Documents/knowledge/0. PeriodicNotes/2026/Daily"
mkdir -p "/mnt/d/Documents/knowledge/0. PeriodicNotes/2025/Daily"
mv "/mnt/d/Documents/knowledge/diary/"* "/mnt/d/Documents/knowledge/0. PeriodicNotes/2026/Daily/" 2>/dev/null
mv "/mnt/d/Documents/knowledge/"2026-01-"*.md "/mnt/d/Documents/knowledge/0. PeriodicNotes/2026/Daily/" 2>/dev/null
rmdir "/mnt/d/Documents/knowledge/diary/" 2>/dev/null
```

- [ ] **归档空/旧文件夹 → Archives**
```bash
mkdir -p "/mnt/d/Documents/knowledge/4. Archives"
mv "/mnt/d/Documents/knowledge/Archive/"* "/mnt/d/Documents/knowledge/4. Archives/" 2>/dev/null
mv "/mnt/d/Documents/knowledge/Fuzzer/"* "/mnt/d/Documents/knowledge/4. Archives/" 2>/dev/null
mv "/mnt/d/Documents/knowledge/office/"* "/mnt/d/Documents/knowledge/4. Archives/" 2>/dev/null
rmdir "/mnt/d/Documents/knowledge/Archive/" 2>/dev/null
rmdir "/mnt/d/Documents/knowledge/Fuzzer/" 2>/dev/null
rmdir "/mnt/d/Documents/knowledge/office/" 2>/dev/null
```

- [ ] **创建工具类 Resource 并迁移远程同步记录**
```bash
mkdir -p "/mnt/d/Documents/knowledge/3. Resources/工具/git"
mv "/mnt/d/Documents/knowledge/远程同步记录.md" "/mnt/d/Documents/knowledge/3. Resources/工具/git/" 2>/dev/null
```

- [ ] **验证迁移结果**
```bash
echo "=== 新 PARA 结构 ==="
find "/mnt/d/Documents/knowledge" -maxdepth 2 -type d | grep -v "\.git" | grep -v "\.obsidian" | grep -E "(PeriodicNotes|Projects|Areas|Resources|Archives)" | sort
echo "=== 散落根目录md文件 ==="
find "/mnt/d/Documents/knowledge" -maxdepth 1 -name "*.md" | wc -l
```

---

## 阶段三：Quartz 博客部署（WSL 执行）

### 任务 1：安装 Quartz CLI
```bash
npm install -g quartz
```

### 任务 2：初始化 Quartz 项目
```bash
cd /home/yanzm/useleader.github.io
npx quartz create --force
```
交互选项选择：
- Content folder: `/mnt/d/Documents/knowledge`
- Site name: `useleader`

### 任务 3：配置 GitHub Actions 自动部署

编辑 `/home/yanzm/useleader.github.io/.github/workflows/deploy.yml` 确保包含：
```yaml
- name: Build Quartz
  run: |
    npx quartz build
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./public
```

### 任务 4：测试发布
- 在 vault 中创建一篇带 `publish: true` frontmatter 的测试笔记
- 运行 `npx quartz build`
- 验证 `useleader.github.io` 显示博客内容

---

## 验收标准

- [ ] LifeOS PARA 文件夹结构已创建（0-4 号文件夹）
- [ ] 所有现有笔记已迁移到 PARA 正确位置
- [ ] Daily/Weekly Notes 模板正常工作
- [ ] Obsidian Git 自动备份正常
- [ ] Quartz 构建成功，博客可访问
- [ ] 新笔记通过 `publish: true` 可以发布到博客
