# 📧 Step-by-Step Email Setup

## Why You See the Error

The error appears because the Formspree Form ID is not set yet. The code is ready, you just need to add your Form ID (takes 2 minutes).

---

## ✅ Quick Fix (2 Minutes)

### Step 1: Create Formspree Account

1. **Open**: https://formspree.io/
2. **Click**: "Get Started" (top right)
3. **Sign up** (you can use Google/GitHub or email)
4. **Verify your email** (check inbox)

### Step 2: Create a Form

1. After login, click **"New Form"** (big button)
2. **Form Name**: `Portfolio Contact` (any name is fine)
3. **Email to receive**: `ajith.ak.official06@gmail.com`
4. Click **"Create Form"**

### Step 3: Get Your Form ID

After creating, you'll see a page with your form. Look at the URL:

```
https://formspree.io/f/xrgkqjpn
                          ^^^^^^^^
                          This is your Form ID
```

**Copy the Form ID** (the part after `/f/`)

Examples:
- `xrgkqjpn`
- `abc123xyz`
- `myname123`

### Step 4: Update Your Code

1. **Open**: `js/main.js`
2. **Find line 274** (look for this):
   ```javascript
   const FORMPREE_FORM_ID = 'YOUR_FORM_ID';
   ```
3. **Replace** `'YOUR_FORM_ID'` with your actual Form ID:
   ```javascript
   const FORMPREE_FORM_ID = 'xrgkqjpn';  // Your Form ID here
   ```
4. **Save** the file (Ctrl+S or Cmd+S)

### Step 5: Test It!

1. Open your portfolio in browser
2. Go to Contact section
3. Fill the form:
   - Name: Test
   - Email: test@example.com
   - Message: This is a test
4. Click "Send Message"
5. You should see: **"Thank you for your message! I will get back to you soon."**
6. Check your email: `ajith.ak.official06@gmail.com`
7. **You should receive the email!** ✅

---

## 🎯 Visual Guide

**Before (line 274 in js/main.js):**
```javascript
const FORMPREE_FORM_ID = 'YOUR_FORM_ID';  // ❌ This causes the error
```

**After:**
```javascript
const FORMPREE_FORM_ID = 'xrgkqjpn';  // ✅ Your actual Form ID
```

---

## ✅ That's It!

Once you update the Form ID, the error will disappear and emails will be sent directly to:
**`ajith.ak.official06@gmail.com`**

---

## 🆘 Still Having Issues?

1. **Make sure** you copied the Form ID correctly (no spaces)
2. **Make sure** you saved the file after editing
3. **Refresh** your browser (Ctrl+F5 or Cmd+Shift+R)
4. **Check** Formspree dashboard - make sure form is active

---

## 💡 Why Formspree?

- ✅ **Free** - 50 emails/month
- ✅ **No backend needed** - works with static HTML
- ✅ **No email client opens** - sends in background
- ✅ **Direct to inbox** - `ajith.ak.official06@gmail.com`
- ✅ **Takes 2 minutes** to set up

---

**Your email**: `ajith.ak.official06@gmail.com` will receive all messages!

