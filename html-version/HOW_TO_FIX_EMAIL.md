# 🔧 How to Fix the Email Error

## ❌ Current Error:
```
Email service not configured. Please set up Formspree...
```

## ✅ Solution: Add Your Formspree Form ID

### Step 1: Open the File
**File**: `js/main.js`  
**Line**: 274

### Step 2: What You See Now:
```javascript
const FORMPREE_FORM_ID = 'YOUR_FORM_ID';  // ❌ This causes the error
```

### Step 3: Get Your Formspree Form ID

1. **Go to**: https://formspree.io/
2. **Click**: "Get Started" (top right, FREE)
3. **Sign up** (takes 30 seconds)
4. **Click**: "New Form" (big button)
5. **Enter**:
   - Form Name: `Portfolio Contact`
   - Email: `ajith.ak.official06@gmail.com`
6. **Click**: "Create Form"
7. **Look at the URL** - it will be like:
   ```
   https://formspree.io/f/xrgkqjpn
                              ^^^^^^^^
                              This is your Form ID!
   ```
8. **Copy** the Form ID (the part after `/f/`)

### Step 4: Update the Code

**Change this:**
```javascript
const FORMPREE_FORM_ID = 'YOUR_FORM_ID';
```

**To this** (use YOUR Form ID):
```javascript
const FORMPREE_FORM_ID = 'xrgkqjpn';  // ✅ Your actual Form ID
```

### Step 5: Save and Test

1. **Save** the file (Ctrl+S)
2. **Refresh** your browser (F5)
3. **Fill the form** and click "Send Message"
4. **Error will be gone!** ✅
5. **Check email**: `ajith.ak.official06@gmail.com`

---

## 📍 Exact Location in Code

**File**: `html-version/js/main.js`  
**Line 274**:

```javascript
272|// Your Formspree Form ID - Get it from https://formspree.io/
273|// After signing up, create a form and replace 'YOUR_FORM_ID' with your actual form ID
274|const FORMPREE_FORM_ID = 'YOUR_FORM_ID'; // ← CHANGE THIS LINE
275|const RECIPIENT_EMAIL = 'ajith.ak.official06@gmail.com';
```

**Just replace `'YOUR_FORM_ID'` with your actual Form ID!**

---

## ⚠️ Important

- You **MUST** sign up for Formspree (it's free)
- You **MUST** create a form to get a Form ID
- Without a Form ID, the email cannot work
- This is the only way for static HTML to send emails

---

## ✅ After Setup

Once you add your Form ID:
- ✅ No more error messages
- ✅ Emails sent to: `ajith.ak.official06@gmail.com`
- ✅ No email client opens
- ✅ Works in background

---

**Need help?** The Formspree signup takes 2 minutes and it's completely free!

