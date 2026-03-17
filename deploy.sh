#!/bin/bash

# Deploy script for Burger Bliss
# Run: ./deploy.sh

echo "🚀 Starting deployment..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Run lint
echo "🔍 Running linter..."
npm run lint
if [ $? -ne 0 ]; then
  echo "❌ Lint failed! Fix errors before deploying."
  exit 1
fi

# Run build
echo "🏗️ Building..."
npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build failed! Fix errors before deploying."
  exit 1
fi

# Add changes
echo "📝 Committing changes..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
  echo "✅ No changes to commit."
else
  # Get commit message or use default
  COMMIT_MSG="${1:-$(date '+%Y-%m-%d %H:%M')}"
  git commit -m "$COMMIT_MSG"
  
  # Push
  echo "📤 Pushing to GitHub..."
  git push
fi

echo "✅ Deployment complete!"
