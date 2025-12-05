# Email Setup Guide - Contact Form

## Current Configuration

**Your Email**: `ajith.ak.official06@gmail.com`

The contact form is configured to send messages directly to your email address.

## Quick Setup (2 Minutes)

### Option 1: FormSubmit (Works Immediately - No Signup!)

✅ **Already configured!** The form works out of the box using FormSubmit.

- No signup required
- Works immediately
- Free and unlimited
- Emails sent to: `ajith.ak.official06@gmail.com`

**That's it!** The form should work right now. Just test it by filling out and submitting the form.

---

### Option 2: Formspree (Recommended for Production)

Formspree provides better analytics and spam protection.

#### Steps:

1. **Sign up for Formspree** (Free):
   - Go to: https://formspree.io/
   - Click "Get Started" (top right)
   - Sign up with Google/GitHub or email (FREE)

2. **Create a Form**:
   - Click "New Form"
   - Set email to: `ajith.ak.official06@gmail.com`
   - Click "Create"

3. **Copy Your Form ID**:
   - After creating, you'll see a URL like: `https://formspree.io/f/xrgkqjpn`
   - Copy the Form ID: `xrgkqjpn` (the part after `/f/`)

4. **Update the Code**:
   - Open: `my-profile/js/main.js`
   - Find line 283:
     ```javascript
     const FORMPREE_FORM_ID = 'YOUR_FORM_ID';
     ```
   - Replace `'YOUR_FORM_ID'` with your Form ID:
     ```javascript
     const FORMPREE_FORM_ID = 'xrgkqjpn';  // Your Form ID
     ```
   - Change line 287 to use Formspree:
     ```javascript
     const EMAIL_SERVICE = 'formspree';  // Change from 'formsubmit'
     ```

5. **Save and Test**:
   - Refresh your browser
   - Fill out the form
   - Submit and check your email!

---

## Current Setup

The form currently uses **FormSubmit** by default, which works immediately without any configuration.

To switch to Formspree:
1. Get your Form ID from https://formspree.io/
2. Update `FORMPREE_FORM_ID` in `js/main.js` (line 283)
3. Change `EMAIL_SERVICE` to `'formspree'` (line 287)

---

## Testing

1. Fill out the contact form on your portfolio
2. Click "Send Message"
3. Check your email: `ajith.ak.official06@gmail.com`
4. You should receive the message!

---

## Troubleshooting

### "Email service not configured" error

This means you're trying to use Formspree but haven't set up the Form ID yet.

**Fix**: 
- Either keep using FormSubmit (already works)
- Or set up Formspree and update the Form ID in `js/main.js`

### Form not submitting

1. Check browser console for errors (F12)
2. Make sure all form fields are filled correctly
3. Check your internet connection
4. Try again after a few seconds

---

## Security

- ✅ All inputs are sanitized
- ✅ Email validation is in place
- ✅ XSS protection enabled
- ✅ Formspree/FormSubmit handle spam protection

---

## Support

- **Formspree Docs**: https://help.formspree.io/
- **FormSubmit**: https://formsubmit.co/

---

**Status**: ✅ FormSubmit is already configured and working!
