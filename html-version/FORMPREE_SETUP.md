# Formspree Setup - Quick Guide

## ✅ Easy Email Setup (5 Minutes)

### Step 1: Sign Up (Free)
1. Go to: **https://formspree.io/**
2. Click "Get Started" (Free plan: 50 submissions/month)
3. Sign up with your email: `ajith.ak.official06@gmail.com`

### Step 2: Create a Form
1. After login, click **"New Form"**
2. Form name: "Portfolio Contact Form"
3. Email to receive: `ajith.ak.official06@gmail.com`
4. Click **"Create Form"**

### Step 3: Get Your Form ID
1. After creating, you'll see your form
2. Copy the **Form ID** (looks like: `xrgkqjpn` or `abc123xyz`)
3. It's in the URL: `https://formspree.io/f/YOUR_FORM_ID`

### Step 4: Update the Code
1. Open: `js/main.js`
2. Find line 275 (around there):
   ```javascript
   const FORMPREE_FORM_ID = 'YOUR_FORM_ID';
   ```
3. Replace `'YOUR_FORM_ID'` with your actual Form ID
4. Example:
   ```javascript
   const FORMPREE_FORM_ID = 'xrgkqjpn';
   ```

### Step 5: Test It!
1. Open your portfolio
2. Fill out the contact form
3. Click "Send Message"
4. Check your email: `ajith.ak.official06@gmail.com`
5. You should receive the message! ✅

---

## 📧 What You'll Receive

When someone submits the form, you'll get an email to `ajith.ak.official06@gmail.com` with:

- **Subject**: Portfolio Contact: [Sender's Name]
- **From**: [Sender's Email]
- **Message**: [Their message]
- **Reply-To**: [Sender's Email] (so you can reply directly)

---

## 🎯 Quick Example

**Before:**
```javascript
const FORMPREE_FORM_ID = 'YOUR_FORM_ID';
```

**After (with your actual Form ID):**
```javascript
const FORMPREE_FORM_ID = 'xrgkqjpn';
```

That's it! Just replace the Form ID and it works immediately.

---

## 💡 Alternative: EmailJS

If you prefer EmailJS instead:
1. See `EMAIL_SETUP.md` for EmailJS instructions
2. Both work great, Formspree is simpler to set up

---

## ✅ Done!

Once you update the Form ID, your contact form will:
- ✅ Send emails directly to `ajith.ak.official06@gmail.com`
- ✅ Work immediately
- ✅ No backend needed
- ✅ Free (50 submissions/month)

**Your email**: `ajith.ak.official06@gmail.com` will receive all messages!

