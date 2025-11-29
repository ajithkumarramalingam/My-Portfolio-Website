# ⚡ Instant Email Setup - No Email Client Needed!

## ✅ What You Need

The form will send emails **directly to your inbox** without opening any email client (like Thunderbird).

**Your Email**: `ajith.ak.official06@gmail.com`

---

## 🚀 Quick Setup (2 Minutes)

### Step 1: Get Formspree Form ID

1. **Visit**: https://formspree.io/
2. **Click**: "Get Started" (Free - 50 emails/month)
3. **Sign up** (use any email)
4. **Create New Form**:
   - Form Name: "Portfolio Contact"
   - **Email to receive**: `ajith.ak.official06@gmail.com`
   - Click **"Create"**
5. **Copy your Form ID** from the URL:
   - URL looks like: `https://formspree.io/f/xrgkqjpn`
   - Your Form ID is: `xrgkqjpn` (the part after `/f/`)

### Step 2: Update Code

1. **Open**: `js/main.js`
2. **Find line 274**:
   ```javascript
   const FORMPREE_FORM_ID = 'YOUR_FORM_ID';
   ```
3. **Replace** with your Form ID:
   ```javascript
   const FORMPREE_FORM_ID = 'xrgkqjpn';  // Put your Form ID here
   ```
4. **Save** the file

---

## ✅ How It Works

1. User fills the form
2. Clicks "Send Message"
3. **Email sent directly** to `ajith.ak.official06@gmail.com`
4. **No email client opens** - everything happens in background!
5. User sees success message
6. You receive email in your inbox

---

## 📧 Email You'll Receive

**To**: `ajith.ak.official06@gmail.com`

**Subject**: Portfolio Contact: [Sender's Name]

**Content**:
```
Name: [Sender's Name]
Email: [Sender's Email Address]
Message: [Their message]
```

You can **reply directly** to the sender!

---

## 🎯 Example

**Before**:
```javascript
const FORMPREE_FORM_ID = 'YOUR_FORM_ID';
```

**After** (with your Form ID):
```javascript
const FORMPREE_FORM_ID = 'xrgkqjpn';
```

That's it! Just replace the Form ID and emails will be sent directly to your inbox.

---

## ✅ Benefits

- ✅ **No email client needed** - sends in background
- ✅ **Direct to inbox** - `ajith.ak.official06@gmail.com`
- ✅ **No page reload** - smooth user experience
- ✅ **Free** - 50 emails/month
- ✅ **Works immediately** - after Form ID setup

---

## 🆘 Need Help?

1. See `QUICK_EMAIL_SETUP.md` for detailed steps
2. Formspree Docs: https://help.formspree.io/

---

**Once configured, all form submissions go directly to: `ajith.ak.official06@gmail.com`** ✅

