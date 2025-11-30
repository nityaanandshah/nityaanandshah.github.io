# Web3Forms Setup Guide

Your contact form is now configured to use Web3Forms! Follow these simple steps to start receiving messages.

## Step 1: Get Your Free Access Key

1. Go to **https://web3forms.com**
2. Click **"Get Started for Free"**
3. Enter your email address: **nityashah2801@gmail.com**
4. Click **"Create Access Key"**
5. Check your email inbox for the access key

## Step 2: Add Your Access Key

1. Open the file: `client/src/data/portfolioData.ts`
2. Find the line with `web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE"`
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your actual access key from the email

Example:
```typescript
web3formsKey: "abcd1234-5678-90ef-ghij-klmnopqrstuv",
```

## Step 3: Test Your Form

1. Open your portfolio at http://localhost:3001
2. Scroll to the "Get In Touch" section
3. Fill out the contact form with test data
4. Click "Send Message"
5. Check your email (nityashah2801@gmail.com) for the message!

## How It Works

- When someone fills out your contact form, Web3Forms sends the message directly to your email
- No backend or database needed
- Works perfectly with GitHub Pages static hosting
- Free forever for unlimited form submissions
- Messages include the sender's name, email, and message

## Features Included

✅ Real form submission (not fake anymore!)
✅ Email notifications sent to your inbox
✅ Custom subject line: "New Portfolio Contact from [Name]"
✅ Error handling with fallback to direct email
✅ Success message after submission
✅ Form validation for all fields

## Troubleshooting

**Not receiving emails?**
- Check your spam folder
- Verify the access key is correct in `portfolioData.ts`
- Make sure you copied the key without extra spaces
- Test with a different email address as the sender

**Form not submitting?**
- Check browser console for errors
- Verify you have an active internet connection
- Make sure the access key is activated in your Web3Forms account

## Email Format

When someone contacts you, you'll receive an email like this:

```
From: notifications@web3forms.com
Subject: New Portfolio Contact from John Doe

Name: John Doe
Email: john@example.com

Message:
Hi Nitya, I'd love to discuss a potential opportunity...
```

You can reply directly to these emails, and your response will go to the sender's email address!

## Need Help?

- Web3Forms Documentation: https://docs.web3forms.com
- Web3Forms Support: https://web3forms.com/support

