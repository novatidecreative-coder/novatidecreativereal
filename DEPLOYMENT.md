# Deployment Guide

## Quick Start

To run the development server:

```bash
# Navigate to project directory
cd "C:\Users\matthew\OneDrive\Desktop\novatide creative official vercel website"

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Steps:

1. **Create a GitHub repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/novatide-creative.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in
   - Click "Import Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure settings
   - Click "Deploy"

3. **Custom Domain** (optional):
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain (e.g., novatidecreative.com)
   - Follow DNS configuration instructions

### Environment Variables

If you add API integrations in the future, set environment variables in Vercel:

1. Go to Project Settings → Environment Variables
2. Add variables:
   - `NEXT_PUBLIC_API_URL` (if using custom API)
   - Email service credentials
   - Analytics IDs
   - etc.

## Deploy to Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

## Deploy to Other Platforms

### Build for Production

```bash
npm run build
npm start
```

The site will be available at `http://localhost:3000`

### Requirements for Hosting

- Node.js 18+ runtime
- Support for Next.js App Router
- Environment variables support (if needed)

### Platforms that support Next.js:
- ✅ Vercel (Recommended)
- ✅ Netlify
- ✅ AWS Amplify
- ✅ Railway
- ✅ Render
- ✅ Heroku (with buildpack)
- ✅ DigitalOcean App Platform

## Pre-Deployment Checklist

Before deploying to production, ensure:

- [ ] All images are optimized and added
- [ ] Form submission endpoint is configured
- [ ] Google Analytics is set up (if desired)
- [ ] Meta tags are updated in `app/layout.tsx`
- [ ] Custom domain DNS is configured
- [ ] SSL certificate is active (automatic on Vercel/Netlify)
- [ ] Environment variables are set
- [ ] Test all forms and links
- [ ] Check mobile responsiveness
- [ ] Run accessibility audit
- [ ] Test page load speed

## Post-Deployment

### Analytics

Add Google Analytics by modifying `app/layout.tsx`:

```tsx
// Add to head section
<Script
  src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR-GA-ID');
  `}
</Script>
```

### Form Backend Integration

To make the demo form functional, integrate with:

**Option 1: Formspree**
```tsx
// In DemoOptInForm.tsx
const response = await fetch('https://formspree.io/f/YOUR-FORM-ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

**Option 2: EmailJS**
```bash
npm install @emailjs/browser
```

**Option 3: Custom API**
Create API route in `app/api/submit-demo/route.ts`:
```tsx
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  // Send to your CRM or email service
  // ... implementation
  
  return NextResponse.json({ success: true });
}
```

### SMS Integration

For actual SMS functionality, integrate with:
- Twilio
- MessageBird
- AWS SNS
- Vonage

### Monitor Performance

- Use Vercel Analytics (built-in on Vercel)
- Google PageSpeed Insights
- Lighthouse CI
- Web Vitals monitoring

## Troubleshooting

### Build Errors

If build fails:
1. Delete `.next` folder and `node_modules`
2. Run `npm install` again
3. Run `npm run build`

### Image Optimization

Replace placeholder images with Next.js Image component:
```tsx
import Image from 'next/image';

<Image 
  src="/path-to-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority
/>
```

### Dynamic Color Classes Issue

If Tailwind dynamic colors don't work in production, use safelist in `tailwind.config.ts`:
```ts
module.exports = {
  safelist: [
    'bg-blue-600',
    'bg-purple-600',
    'bg-green-600',
    'border-blue-500',
    'border-purple-500',
    'border-green-500',
    // ... add all dynamic classes
  ],
  // ... rest of config
}
```

## Support

For deployment issues:
- Email: novatidecreative@gmail.com
- Phone: 917-480-6014

---

**Ready to Deploy?** Follow the Vercel steps above for the easiest deployment experience! 🚀
