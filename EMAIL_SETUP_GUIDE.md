# Email Setup Guide for Form Submissions

Your form is now configured to send emails to **novatidecreative@gmail.com** when someone submits the demo form.

## Quick Setup (Recommended - Web3Forms)

Web3Forms is free, easy to set up, and requires no credit card.

### Steps:

1. **Get Your Access Key** (Free):
   - Go to https://web3forms.com
   - Click "Get Started Free"
   - Enter your email: **novatidecreative@gmail.com**
   - You'll receive an access key via email

2. **Add the Key to Your Project**:
   - Create a file named `.env.local` in your project root
   - Add this line:
     ```
     WEB3FORMS_ACCESS_KEY=your_access_key_from_email
     ```

3. **Restart Your Development Server**:
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

4. **Test It**:
   - Fill out the form at http://localhost:3000/book-demo
   - Submit it
   - Check novatidecreative@gmail.com for the email!

### What You'll Receive:

Every form submission will send an email to **novatidecreative@gmail.com** with:
- **Subject**: "New Lead from [Name] - [Business]"
- **Content**:
  - Name
  - Phone number
  - Email address
  - Business type
  - SMS consent status
  - Submission timestamp
  - Source page

---

## Alternative Option 1: Resend (Modern & Professional)

If you want a more professional email service:

1. **Sign up at https://resend.com** (Free tier: 100 emails/day)

2. **Get your API key** from the dashboard

3. **Install Resend**:
   ```bash
   npm install resend
   ```

4. **Update the API route** (`app/api/submit-demo/route.ts`):
   ```typescript
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   // In the POST function:
   await resend.emails.send({
     from: 'Novatide Creative <onboarding@resend.dev>',
     to: 'novatidecreative@gmail.com',
     subject: emailSubject,
     text: emailBody,
   });
   ```

5. **Add to `.env.local`**:
   ```
   RESEND_API_KEY=re_your_key_here
   ```

---

## Alternative Option 2: SendGrid (Enterprise-Grade)

For higher volume or more features:

1. **Sign up at https://sendgrid.com** (Free tier: 100 emails/day)

2. **Create an API key** in settings

3. **Install SendGrid**:
   ```bash
   npm install @sendgrid/mail
   ```

4. **Update the API route**:
   ```typescript
   import sgMail from '@sendgrid/mail';
   
   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
   
   // In the POST function:
   await sgMail.send({
     to: 'novatidecreative@gmail.com',
     from: 'noreply@yourdomain.com', // Must be verified in SendGrid
     subject: emailSubject,
     text: emailBody,
   });
   ```

5. **Add to `.env.local`**:
   ```
   SENDGRID_API_KEY=SG.your_key_here
   ```

---

## Alternative Option 3: Gmail SMTP (No External Service)

Use Gmail directly (not recommended for production):

1. **Enable 2-Step Verification** in your Google Account

2. **Create App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Generate password for "Mail"

3. **Install Nodemailer**:
   ```bash
   npm install nodemailer
   ```

4. **Update the API route**:
   ```typescript
   import nodemailer from 'nodemailer';
   
   const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: 'novatidecreative@gmail.com',
       pass: process.env.GMAIL_APP_PASSWORD
     }
   });
   
   // In the POST function:
   await transporter.sendMail({
     from: 'novatidecreative@gmail.com',
     to: 'novatidecreative@gmail.com',
     subject: emailSubject,
     text: emailBody,
   });
   ```

5. **Add to `.env.local`**:
   ```
   GMAIL_APP_PASSWORD=your_16_char_app_password
   ```

---

## Testing Locally

1. Make sure your `.env.local` file exists with the correct key
2. Restart the dev server
3. Go to http://localhost:3000/book-demo
4. Fill out and submit the form
5. Check your email!

---

## Deployment (Vercel)

When deploying to Vercel:

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add your key:
   - Name: `WEB3FORMS_ACCESS_KEY` (or whichever service you chose)
   - Value: Your actual key
4. Redeploy your site

---

## Troubleshooting

**Form submits but no email received?**
- Check spam/junk folder
- Verify your API key is correct in `.env.local`
- Check the browser console for errors
- Check Vercel logs (if deployed)

**Getting CORS errors?**
- The API route should handle CORS automatically
- Make sure you're calling `/api/submit-demo` not an external URL

**Email sends but formatting is weird?**
- Web3Forms uses plain text by default
- Consider upgrading to Resend for HTML email formatting

---

## Current Status

✅ API route created at `app/api/submit-demo/route.ts`
✅ Form updated to call the API at `components/DemoOptInForm.tsx`
✅ Email template includes all form fields
✅ Error handling implemented
✅ Success state shows after submission

**Next Step**: Get your Web3Forms access key and add it to `.env.local`!

---

## Questions?

Email: novatidecreative@gmail.com
Phone: 917-480-6014
