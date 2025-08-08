# Email Setup Guide for Contact Form

## Option 1: Resend (Recommended)

### 1. Sign up for Resend
- Go to [https://resend.com](https://resend.com)
- Create a free account (3,000 emails/month free)
- Verify your domain or use their sandbox domain

### 2. Get your API Key
- Go to your Resend dashboard
- Navigate to API Keys section
- Create a new API key
- Copy the key

### 3. Set up Environment Variables
Create a `.env.local` file in your `site` directory:

```env
# Resend API Key
RESEND_API_KEY=re_your_actual_api_key_here

# Email configuration
FROM_EMAIL=hello@calibrxai.com
TO_EMAIL=hello@calibrxai.com
```

### 4. Domain Verification (Optional but Recommended)
- Add your domain to Resend
- Add the required DNS records
- Verify your domain
- Update FROM_EMAIL to use your verified domain

## Option 2: SendGrid

### 1. Install SendGrid
```bash
npm install @sendgrid/mail
```

### 2. Update the API route
Replace the Resend code in `app/api/contact/route.ts` with:

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// In the POST function:
await sgMail.send({
  to: process.env.TO_EMAIL || 'hello@calibrxai.com',
  from: process.env.FROM_EMAIL || 'hello@calibrxai.com',
  subject: `New Contact Form Submission from ${name}`,
  html: `<h2>New Contact Form Submission</h2>...`,
  replyTo: email,
});
```

### 3. Environment Variables
```env
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=hello@calibrxai.com
TO_EMAIL=hello@calibrxai.com
```

## Option 3: Nodemailer (for custom SMTP)

### 1. Install Nodemailer
```bash
npm install nodemailer
npm install @types/nodemailer --save-dev
```

### 2. Update the API route
```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// In the POST function:
await transporter.sendMail({
  from: process.env.FROM_EMAIL,
  to: process.env.TO_EMAIL,
  subject: `New Contact Form Submission from ${name}`,
  html: `<h2>New Contact Form Submission</h2>...`,
  replyTo: email,
});
```

### 3. Environment Variables
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
FROM_EMAIL=hello@calibrxai.com
TO_EMAIL=hello@calibrxai.com
```

## Testing

1. Start your development server: `npm run dev`
2. Go to `/contact` page
3. Fill out and submit the form
4. Check your email inbox
5. Check the console for any errors

## Production Deployment

### Vercel
- Add environment variables in your Vercel dashboard
- Deploy your app

### Other Platforms
- Add environment variables to your hosting platform
- Ensure the environment variables are properly set

## Security Notes

- Never commit your `.env.local` file to version control
- Use app passwords for Gmail/other providers
- Consider rate limiting for the contact form
- Validate email addresses on both client and server side 