# Novatide Creative - Official Website

A modern, production-ready Next.js 14 website for Novatide Creative, offering AI receptionist services and website design.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons
- Fully responsive design (mobile-first)
- Dark theme with modern aesthetic
- SEO optimized
- Accessible (ARIA labels, semantic HTML)

## 📦 Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## 🏗️ Project Structure

```
├── app/
│   ├── page.tsx                        # Home page
│   ├── ai-receptionist/page.tsx        # AI Receptionist service page
│   ├── website-design/page.tsx         # Website Design service page
│   ├── pricing/page.tsx                # Pricing page
│   ├── book-demo/page.tsx              # Demo opt-in form page
│   ├── contact/page.tsx                # Contact page
│   ├── terms-and-conditions/page.tsx   # Legal terms
│   ├── privacy-policy/page.tsx         # Privacy policy
│   ├── instructions-for-opt-out/page.tsx # Opt-out instructions
│   ├── layout.tsx                      # Root layout
│   └── globals.css                     # Global styles
├── components/
│   ├── Navigation.tsx                  # Sticky navigation bar
│   ├── Footer.tsx                      # Footer with links
│   ├── Hero.tsx                        # Hero section
│   ├── ServicesOverview.tsx            # Services overview section
│   ├── AIReceptionistSection.tsx       # AI Receptionist packages
│   ├── WebsiteDesignSection.tsx        # Website Design packages
│   ├── PricingCards.tsx                # Pricing cards
│   ├── ProcessSection.tsx              # How it works
│   ├── IndustriesSection.tsx           # Industries we serve
│   ├── TestimonialsSection.tsx         # Client testimonials
│   ├── ComparisonTable.tsx             # Feature comparison
│   ├── CTASection.tsx                  # Call-to-action
│   ├── ProblemSolutionSection.tsx      # Problems we solve
│   └── DemoOptInForm.tsx               # Reusable demo form
└── public/                             # Static assets
```

## 🎨 Design Features

- **Dark Theme**: Modern black (#0a0a0a) background with light text
- **Accent Colors**:
  - Blue (#3b82f6) for primary CTAs
  - Green (#10b981) for success indicators
  - Purple (#8b5cf6) for premium features
- **Glassmorphism**: Subtle backdrop blur effects on cards
- **Smooth Animations**: Fade-in, scroll animations, and hover effects
- **Responsive Grid**: 3 columns → 2 columns → 1 column

## 📄 Pages

### Home Page
Complete landing page with all sections:
- Hero with gradient background
- Services overview
- AI Receptionist packages (Standard & Pro)
- Website Design packages (Starter & Managed)
- Feature comparison table
- Problem/Solution flow
- Process section
- Industries served
- Testimonials
- Pricing summary
- Final CTA

### Service Pages
- **AI Receptionist**: Deep dive into AI services with use cases, integrations, and FAQ
- **Website Design**: Portfolio, design process, tech stack, and SEO benefits

### Pricing Page
Detailed pricing with:
- All package cards
- Feature comparison table
- FAQ section
- Bundle offers
- Trust indicators

### Book Demo Page
Opt-in form with:
- Name, phone, email, business fields
- SMS consent checkbox (required)
- Form validation
- Success state after submission
- Minimal footer

### Legal Pages
- **Terms and Conditions**: Complete terms with SMS section
- **Privacy Policy**: Full privacy policy with SMS privacy section
- **Instructions for Opt Out**: Detailed opt-out instructions for email, SMS, calls, cookies, etc.

### Contact Page
Contact form with contact information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "C:\Users\matthew\OneDrive\Desktop\novatide creative official vercel website"
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (3-4 columns)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Proper heading hierarchy
- Focus states on all interactive elements
- Color contrast meets WCAG AA standards

## 🎯 Key Features

### Navigation
- Sticky header with backdrop blur
- Dropdown menu for Services
- Mobile hamburger menu
- Smooth scroll to sections

### Forms
- Client-side validation
- Email and phone format validation
- Required field checks
- Loading states
- Error messaging
- Success confirmation

### Animations
- Framer Motion scroll animations
- Fade-in on viewport entry
- Staggered grid animations
- Smooth hover effects
- Button transitions

## 📧 Contact Information

- **Location**: Manhasset, NY
- **Phone**: [917-480-6014](tel:917-480-6014)
- **Email**: [novatidecreative@gmail.com](mailto:novatidecreative@gmail.com)

## 🔒 Legal Compliance

- TCPA compliant SMS terms
- CCPA privacy rights
- GDPR considerations
- Complete opt-out mechanisms
- Comprehensive privacy policy

## 🎨 Customization

### Colors
Edit `app/globals.css` to change theme colors:
```css
:root {
  --background: #0a0a0a;
  --foreground: #f5f5f5;
}
```

### Content
All content is in the respective page files. Update text, pricing, features, etc. directly in the component files.

### Images
Replace placeholder images in the Hero component and other sections with actual images.

## 📦 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Other Platforms
Build the project and deploy the `.next` folder with a Node.js server.

## 🐛 Known Issues

None at this time. The application is production-ready.

## 📝 TODO (Future Enhancements)

- [ ] Add actual images/photos
- [ ] Integrate backend API for form submission
- [ ] Add Google Analytics
- [ ] Implement cookie consent banner
- [ ] Add blog section
- [ ] Create admin dashboard
- [ ] Integrate payment processing

## 📄 License

© 2025 Novatide Creative. All rights reserved.

## 🤝 Support

For questions or issues, contact us at novatidecreative@gmail.com

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS
# Novatidecreative
