# Email Setup Guide - Contact Form

## Current Configuration

**Your Email**: `ajith.ak.official06@gmail.com`

The contact form is currently configured to send messages to your email address.

## Setup Options

### Option 1: EmailJS (Recommended - Free Tier Available)

EmailJS allows you to send emails directly from the frontend without a backend.

#### Steps:

1. **Sign up for EmailJS** (Free):
   - Go to: https://www.emailjs.com/
   - Create a free account (200 emails/month free)

2. **Create an Email Service**:
   - Go to Dashboard → Email Services
   - Add a new service (Gmail, Outlook, etc.)
   - Connect your email: `ajith.ak.official06@gmail.com`

3. **Create an Email Template**:
   - Go to Dashboard → Email Templates
   - Create a new template
   - Use these variables:
     - `{{to_email}}` - Recipient email
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{reply_to}}` - Reply-to email

4. **Get Your Keys**:
   - Go to Dashboard → Account → General
   - Copy your **Public Key**
   - Copy your **Service ID**
   - Copy your **Template ID**

5. **Update the Code**:
   - Open `js/main.js`
   - Find these lines (around line 250):
     ```javascript
     const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
     const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
     const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
     ```
   - Replace with your actual keys

#### Example Template:
```
Subject: Portfolio Contact: {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Reply to: {{reply_to}}
```

---

### Option 2: Formspree (Alternative - Free Tier Available)

1. **Sign up**: https://formspree.io/
2. **Create a form**: Get your form endpoint
3. **Update the form action** in `index.html`

---

### Option 3: Backend API (For Production)

If you have a backend (NestJS), you can:
1. Create an API endpoint: `POST /api/contact`
2. Use Nodemailer or similar to send emails
3. Update the form to submit to your API

---

### Option 4: Current Fallback (mailto:)

Currently, if EmailJS is not configured, the form will:
- Open the user's email client
- Pre-fill with the message
- Send to: `ajith.ak.official06@gmail.com`

This works but requires the user to have an email client configured.

---

## Quick Setup (EmailJS)

1. Visit: https://www.emailjs.com/
2. Sign up (free)
3. Connect Gmail service
4. Create template
5. Copy keys to `js/main.js`
6. Done! ✅

---

## Testing

After setup:
1. Fill out the contact form
2. Submit
3. Check your email: `ajith.ak.official06@gmail.com`
4. You should receive the message!

---

## Security Note

- EmailJS public key is safe to expose (it's meant for frontend use)
- Service ID and Template ID are also safe
- Never expose private keys or API secrets

---

## Support

If you need help setting up EmailJS, visit:
- Documentation: https://www.emailjs.com/docs/
- Support: https://www.emailjs.com/support/

