#!/bin/bash
# Sync knowledge vault to blog
# Usage: ./scripts/sync.sh

set -e

BLOG_DIR="/home/yanzm/useleader.github.io"
KNOWLEDGE_DIR="/mnt/d/Documents/knowledge"

echo "Syncing all content from knowledge to blog..."

# Pull latest changes from knowledge
cd "$KNOWLEDGE_DIR"
git pull --quiet 2>/dev/null || true

# Sync Projects
rsync -av --delete \
  --exclude '.obsidian' \
  "$KNOWLEDGE_DIR/1. Projects/" \
  "$BLOG_DIR/content/1. Projects/"

# Sync Areas
rsync -av --delete \
  --exclude '.obsidian' \
  "$KNOWLEDGE_DIR/2. Areas/" \
  "$BLOG_DIR/content/2. Areas/"

# Sync Resources
rsync -av --delete \
  --exclude '.obsidian' \
  "$KNOWLEDGE_DIR/3. Resources/" \
  "$BLOG_DIR/content/3. Resources/"

# Sync Archives
rsync -av --delete \
  --exclude '.obsidian' \
  "$KNOWLEDGE_DIR/4. Archives/" \
  "$BLOG_DIR/content/4. Archives/"

echo "Sync complete!"
echo "Run 'cd $BLOG_DIR && git status' to see changes"
