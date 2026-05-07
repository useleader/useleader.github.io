# 内容清理与字体优化设计方案

**日期**：2026-05-07
**目的**：清理敏感内容，优化 OG Image 中文渲染

---

## 1. 敏感内容清理

### 1.1 删除根目录下的敏感文件夹

| 目录 | 操作 | 原因 |
|------|------|------|
| `2023/` | 删除 | 敏感年份文档，不打算发布 |
| `2024/` | 删除 | 敏感年份文档，不打算发布 |
| `1.-Projects/` | 删除 | 敏感项目文档，不打算发布 |
| `4.-Archives/` | 删除 | 敏感归档文档，不打算发布 |
| `about/` | 删除 | warm-fire 遗留文档，已归档到其他仓库 |
| `categories/` | 删除 | warm-fire 遗留文档，已归档到其他仓库 |
| `archives/` | 删除 | warm-fire 遗留文档，已归档到其他仓库 |

### 1.2 清理 content/ 内的敏感内容

| 目录 | 操作 | 原因 |
|------|------|------|
| `content/0. PeriodicNotes/` | 删除 | 隐私日记内容，不打算发布 |
| `content/1. Projects/` | 保留 | 可能用于分享的项目文档 |
| `content/4. Archives/` | 保留 | 可能用于分享的归档文档 |
| `content/3. Resources/` | 保留 | 正常发布的资源文档 |

---

## 2. OG Image 中文符号渲染优化

### 2.1 问题

当前 OG Image 使用的 header 字体 `Schibsted Grotesk` 不支持中文字符，导致中文标点（如【】）显示为乱码。

### 2.2 解决方案

将 header 字体替换为支持中文的开源字体 **Noto Sans SC**（Google Fonts 流行字体，对中文支持完善）。

### 2.3 修改配置

**文件**：`quartz.config.ts`

**修改前**：
```typescript
typography: {
  header: "Schibsted Grotesk",
  body: "Source Sans Pro",
  code: "IBM Plex Mono",
},
```

**修改后**：
```typescript
typography: {
  header: "Noto Sans SC",
  body: "Source Sans Pro",
  code: "IBM Plex Mono",
},
```

---

## 3. 执行步骤

1. **删除根目录敏感文件夹**：2023, 2024, 1.-Projects, 4.-Archives, about, categories, archives
2. **删除 content/0. PeriodicNotes**：隐私日记内容
3. **更新 quartz.config.ts**：将 header 字体改为 Noto Sans SC
4. **重新构建**：运行 `npx quartz build` 生成新的 OG Image
5. **验证**：检查生成的 .webp 文件中中文符号是否正常显示

---

## 4. 注意事项

- 删除前确认 about, categories, archives 已归档到其他仓库
- content/ 目录是 Obsidian Vault 根目录，删除时注意不要误删整个目录
- 重新构建后需要检查 public/ 目录，确保敏感内容已被移除
