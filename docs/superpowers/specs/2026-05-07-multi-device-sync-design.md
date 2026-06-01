# Multi-Device Sync + AI Auto-Commit 设计文档

**Date:** 2026-05-07
**Goal:** 实现 vault 和博客的自动化多端同步，AI 生成有意义的 git commit message

---

## Architecture

### System Components

| Component | Role | Trigger |
|-----------|------|---------|
| Obsidian (Windows) | 主要写作工具 | User writes |
| obsidian-git plugin | Vault 自动同步 | Startup pull; 30min auto push |
| warm-fire repo | Vault 备份仓库（private） | git push |
| GitHub Actions | 检测 push 事件，触发 Quartz build | vault push event |
| Quartz | 只发布 publish:true 的笔记 | GitHub Actions |
| useleader.github.io | 博客（public） | Quartz deploy |
| WSL git hook | AI 生成英文 commit message | pre-commit |

### Data Flow

```
Windows Obsidian
      │
      │ write notes
      ▼
obsidian-git (auto sync)
      │
      │ 30min auto commit + push
      ▼
warm-fire repo (vault backup)
      │
      │ push event
      ▼
GitHub Actions → quartz build (publish:true only)
      │
      ▼
useleader.github.io (GitHub Pages)
```

### Private Content Strategy

- **Daily Notes (Periodic Notes/Daily/)**: NOT published to blog, only synced via git
- **Resources content**: Only notes with `publish: true` frontmatter appear on blog
- Blog URL: https://useleader.github.io/

---

## Component Specifications

### 1. Obsidian Git Plugin Config

Settings in Obsidian:
- ✅ Auto commit on startup: ON
- ✅ Auto pull on startup: ON
- ✅ Auto push after commit: ON
- Pull interval: 30 minutes
- Commit message template: (AI-generated, see below)

### 2. AI Commit Message Hook

**File:** `.git/hooks/prepare-commit-msg` (executable bash script)

**Logic:**
1. Detects non-AI commit message (template like "vault backup:")
2. Collects changed files from `git diff --cached --name-only`
3. Calls GitHub API with Claude model: `gh api /models/chat/completions`
4. Generates English commit message describing what changed
5. Replaces template message with AI-generated one

**Example messages:**
- `feat: add daily note on Fuzzing research progress`
- `docs: update paper reading notes on LLM alignment`
- `refactor: reorganize knowledge base structure`

### 3. GitHub Actions Workflow

**Trigger:** Push to `warm-fire` repository

**Steps:**
1. Checkout vault repo
2. Run `npx quartz build` (Quartz reads vault, builds publish:true notes)
3. Deploy `public/` directory to GitHub Pages via `peaceiris/actions-gh-pages`

### 4. Periodic Notes (Private, Not Published)

**Location:** `0. PeriodicNotes/Daily/`
- All daily notes are private, never published
- Managed by obsidian-git for backup only
- LifeOS plugin creates daily notes with templates

---

## Vault Sync Settings

| Setting | Value | Reason |
|---------|-------|--------|
| Auto pull on startup | ✅ ON | Get latest on each open |
| Auto commit on startup | ✅ ON | Ensure changes tracked |
| Auto push after commit | ✅ ON | Continuous backup |
| Pull interval | 30 min | Balance sync vs interference |
| Commit message | AI-generated | Descriptive, not template |

---

## Acceptance Criteria

- [ ] Opening Obsidian pulls latest vault version from GitHub
- [ ] After writing, vault auto-commits with AI-generated English message
- [ ] Vault push triggers Quartz blog rebuild
- [ ] Only `publish: true` notes appear on useleader.github.io
- [ ] Daily notes (PeriodicNotes/Daily/) remain private, not on blog
- [ ] Multi-device sync works seamlessly (no manual intervention needed)
