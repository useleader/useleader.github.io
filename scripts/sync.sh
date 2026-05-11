#!/bin/bash
# Sync knowledge vault to blog
# Usage: ./scripts/sync.sh

set -e

BLOG_DIR="/home/yanzm/useleader.github.io"
KNOWLEDGE_DIR="/mnt/d/Documents/knowledge"

echo "Syncing Projects and Areas from knowledge to blog..."

# Pull latest changes from knowledge
cd "$KNOWLEDGE_DIR"
git pull --quiet

# Sync Projects
rsync -av --delete \
  "$KNOWLEDGE_DIR/1. Projects/" \
  "$BLOG_DIR/content/"

# Sync Areas
rsync -av --delete \
  "$KNOWLEDGE_DIR/2. Areas/" \
  "$BLOG_DIR/content/"

echo "Sync complete!"
echo "Run 'cd $BLOG_DIR && git status' to see changes"