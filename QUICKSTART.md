# Quick Start Guide 🚀

Get the Novatide Creative website running in 3 simple steps!

## Step 1: Install Dependencies

Open PowerShell or Command Prompt and run:

```powershell
cd "C:\Users\matthew\OneDrive\Desktop\novatide creative official vercel website"
npm install
```

⏱️ This will take 1-2 minutes.

## Step 2: Start Development Server

```powershell
npm run dev
```

You should see:
```
✓ Ready in 2.5s
○ Local: http://localhost:3000
```

## Step 3: Open in Browser

Navigate to: **http://localhost:3000**

🎉 Your website is now running!

---

## What's Included?

✅ **9 Complete Pages:**
- Home (with all sections)
- AI Receptionist
- Website Design
- Pricing
- Book Demo (with form)
- Contact
- Terms & Conditions
- Privacy Policy
- Instructions for Opt Out

✅ **14 Reusable Components:**
- Navigation with dropdown & mobile menu
- Footer with all links
- Hero, Services, Pricing cards
- Testimonials, Industries, Process
- Comparison tables
- CTA sections
- Demo opt-in form

✅ **Features:**
- 🎨 Modern dark theme design
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth Framer Motion animations
- ♿ Accessible (ARIA labels, semantic HTML)
- 🚀 Fast (Next.js 14 App Router)
- 🔒 Complete legal pages (Terms, Privacy, Opt-Out)
- 📝 Working form with validation
- 🎯 SEO optimized

---

## Navigation Map

### Main Pages
- **/** - Home page with all sections
- **/ai-receptionist** - AI service details
- **/website-design** - Website service details
- **/pricing** - All pricing packages
- **/book-demo** - Contact form (opt-in)
- **/contact** - Contact page

### Legal Pages
- **/terms-and-conditions** - Full T&C with SMS terms
- **/privacy-policy** - Privacy policy with SMS section
- **/instructions-for-opt-out** - Opt-out instructions

### Anchor Links (on home page)
- **/#process** - How It Works section
- **/#industries** - Industries We Serve section

---

## Making Changes

### Update Content

**Change prices:**
Edit the pricing arrays in:
- `components/PricingCards.tsx`
- `components/AIReceptionistSection.tsx`
- `components/WebsiteDesignSection.tsx`

**Change contact info:**
Edit in:
- `components/Footer.tsx`
- Legal pages

**Change colors:**
Edit `app/globals.css` or Tailwind classes

### Add Images

Replace placeholders in `components/Hero.tsx`:
```tsx
// Replace this:
<div className="bg-gradient-to-br from-gray-800 to-gray-900">

// With:
<Image src="/your-image.jpg" alt="Description" />
```

### Connect Form to Backend

Edit `components/DemoOptInForm.tsx` around line 50:
```tsx
// Replace simulated API call with real endpoint
const response = await fetch('/api/submit-demo', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

---

## Deploy to Production

### Option 1: Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

✅ Done! Your site is live.

### Option 2: Build Locally

```bash
npm run build
npm start
```

See `DEPLOYMENT.md` for detailed deployment instructions.

---

## File Structure at a Glance

```
novatide creative official vercel website/
├── app/                          # Pages
│   ├── page.tsx                  # Home
│   ├── ai-receptionist/          
│   ├── website-design/           
│   ├── pricing/                  
│   ├── book-demo/                
│   ├── contact/                  
│   ├── terms-and-conditions/     
│   ├── privacy-policy/           
│   └── instructions-for-opt-out/ 
├── components/                   # Reusable components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── DemoOptInForm.tsx
│   └── ... (11 more)
├── public/                       # Static files (add images here)
├── README.md                     # Full documentation
├── DEPLOYMENT.md                 # Deployment guide
├── DEVELOPMENT.md                # Development guide
└── QUICKSTART.md                 # This file
```

---

## Common Tasks

### View on Mobile
1. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Make sure phone is on same WiFi
3. Visit `http://YOUR-IP:3000` on phone

### Stop Development Server
Press `Ctrl + C` in the terminal

### Clear Cache
```bash
# Delete .next folder
rm -rf .next
# Or manually delete the .next folder
```

### Check for Errors
```bash
npm run lint
```

---

## Need Help?

📧 Email: novatidecreative@gmail.com  
📞 Phone: 917-480-6014

### Documentation
- 📖 `README.md` - Full project overview
- 🚀 `DEPLOYMENT.md` - Production deployment
- 💻 `DEVELOPMENT.md` - Development details

### External Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

## Troubleshooting

**Server won't start:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
# Or kill the process using port 3000
```

**Build errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

---

**Ready to go?** Run `npm run dev` and start building! 🎉
