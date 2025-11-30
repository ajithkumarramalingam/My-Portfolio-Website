# 🚀 Push to GitHub - Step by Step Guide

## ✅ Step 1: Create GitHub Repository (if you haven't)

1. **Go to**: https://github.com/new
2. **Repository name**: `my-portfolio` (or any name you like)
3. **Description**: "My Portfolio Website - Full Stack Developer"
4. **Visibility**: 
   - ✅ **Public** (recommended - free hosting on GitHub Pages)
   - Or Private (if you prefer)
5. **DO NOT** check "Initialize with README" (we already have files)
6. **Click**: "Create repository"

---

## ✅ Step 2: Copy Your Repository URL

After creating the repository, GitHub will show you a URL like:
```
https://github.com/ajithkumarramalingam/my-portfolio.git
```

**Copy this URL** - you'll need it in the next step!

---

## ✅ Step 3: Connect and Push to GitHub

Run these commands in your terminal:

```bash
# Navigate to your project
cd /home/finstein-emp1/Documents/outside-project/my-portfolio

# Add GitHub remote (replace with YOUR repository URL)
git remote add origin https://github.com/ajithkumarramalingam/my-portfolio.git

# Rename branch to main (GitHub's default)
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## 🔐 If You Get Authentication Error

If GitHub asks for authentication, you have 2 options:

### Option 1: Use Personal Access Token (Recommended)

1. **Go to**: https://github.com/settings/tokens
2. **Click**: "Generate new token" → "Generate new token (classic)"
3. **Name**: `Portfolio Push`
4. **Select scopes**: Check `repo` (full control)
5. **Click**: "Generate token"
6. **Copy the token** (you'll only see it once!)
7. **When pushing**, use the token as password:
   - Username: `ajithkumarramalingam`
   - Password: `paste-your-token-here`

### Option 2: Use GitHub CLI

```bash
# Install GitHub CLI (if not installed)
# Then authenticate
gh auth login

# Then push
git push -u origin main
```

---

## ✅ Step 4: Verify

After pushing, go to:
```
https://github.com/ajithkumarramalingam/my-portfolio
```

You should see all your files! 🎉

---

## 🌐 Optional: Enable GitHub Pages (Free Hosting!)

1. **Go to**: Your repository on GitHub
2. **Click**: "Settings" tab
3. **Scroll down**: "Pages" section
4. **Source**: Select `main` branch
5. **Folder**: `/html-version` (or root)
6. **Click**: "Save"
7. **Wait 2-3 minutes**, then visit:
   ```
   https://ajithkumarramalingam.github.io/my-portfolio/
   ```

Your portfolio will be live! 🚀

---

## 📝 Quick Commands Summary

```bash
# Add remote
git remote add origin https://github.com/ajithkumarramalingam/my-portfolio.git

# Rename branch
git branch -M main

# Push
git push -u origin main
```

---

## 🆘 Troubleshooting

### "remote origin already exists"
```bash
# Remove existing remote
git remote remove origin

# Add again with correct URL
git remote add origin https://github.com/ajithkumarramalingam/my-portfolio.git
```

### "Authentication failed"
- Use Personal Access Token (see Option 1 above)
- Or set up SSH keys

### "Permission denied"
- Make sure you're logged into GitHub
- Check repository name is correct
- Verify you have write access

---

**Your code is ready to push!** 🎉

