#!/bin/bash

# GitHub Push Helper Script
# This script helps you push your portfolio to GitHub

echo "🚀 GitHub Push Helper"
echo "===================="
echo ""

# Check current status
echo "📊 Current Git Status:"
echo "----------------------"
git remote -v
echo ""

if [ -z "$(git remote -v)" ]; then
    echo "⚠️  No remote repository configured yet."
    echo ""
    echo "📝 To push your code, you need to:"
    echo ""
    echo "1️⃣  Find your GitHub repository:"
    echo "   Visit: https://github.com/ajithkumarramalingam?tab=repositories"
    echo "   Look for your portfolio repository"
    echo ""
    echo "2️⃣  Or create a new repository:"
    echo "   Visit: https://github.com/new"
    echo "   Name: my-portfolio (or any name)"
    echo "   Don't initialize with README"
    echo ""
    echo "3️⃣  Then run these commands:"
    echo ""
    echo "   git remote add origin https://github.com/ajithkumarramalingam/YOUR-REPO-NAME.git"
    echo "   git push -u origin main"
    echo ""
    echo "💡 Or provide the repository URL and I'll help you push!"
    echo ""
else
    echo "✅ Remote repository configured:"
    git remote -v
    echo ""
    echo "📤 To push your code, run:"
    echo "   git push -u origin main"
    echo ""
fi

echo "📋 Your local commits:"
git log --oneline -3
echo ""



