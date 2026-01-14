# Development Guide

## Setup Development Environment

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- Code editor (VS Code recommended)

### Initial Setup

1. **Clone/Open the project**:
   ```bash
   cd "C:\Users\matthew\OneDrive\Desktop\novatide creative official vercel website"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Structure Explained

### `/app` Directory (Next.js App Router)

- **`page.tsx`**: Route files that define pages
- **`layout.tsx`**: Layouts that wrap pages
- **`globals.css`**: Global styles with Tailwind directives

### `/components` Directory

Reusable React components used across pages:
- **Navigation.tsx**: Site-wide navigation
- **Footer.tsx**: Site-wide footer
- **Section components**: Hero, Services, Pricing, etc.
- **DemoOptInForm.tsx**: Reusable form component

## Styling Guide

### Tailwind CSS Classes

The project uses Tailwind CSS with these conventions:

**Colors:**
- Background: `bg-black`, `bg-gray-900`, `bg-gray-800`
- Text: `text-white`, `text-gray-300`, `text-gray-400`
- Accent: `text-blue-500`, `bg-blue-600`, etc.

**Spacing:**
- Sections: `py-20` (vertical padding)
- Cards: `p-6` to `p-8` (padding)
- Gaps: `gap-6`, `gap-8` (grid/flex gaps)

**Responsive Design:**
- Mobile first: base classes apply to mobile
- Tablet: `md:` prefix (768px+)
- Desktop: `lg:` prefix (1024px+)

**Example:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  // 1 column mobile, 2 tablet, 3 desktop
</div>
```

### Custom Styles

Global styles in `app/globals.css`:
```css
.glassmorphism {
  background: rgba(26, 26, 26, 0.7);
  backdrop-filter: blur(10px);
}
```

## Animation Guide

### Framer Motion

Used for scroll animations and interactions:

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  // Content
</motion.div>
```

**Common patterns:**
- Fade in from bottom: `y: 20` → `y: 0`
- Staggered animations: `delay: index * 0.1`
- Hover effects: `whileHover={{ scale: 1.05 }}`

## Adding New Pages

1. **Create page file**:
   ```bash
   app/new-page/page.tsx
   ```

2. **Add page content**:
   ```tsx
   export default function NewPage() {
     return (
       <main className="min-h-screen pt-16">
         <h1>New Page</h1>
       </main>
     );
   }
   ```

3. **Add to navigation**:
   Edit `components/Navigation.tsx` to add link

4. **Update metadata**:
   Add metadata export for SEO:
   ```tsx
   export const metadata = {
     title: "Page Title",
     description: "Page description"
   };
   ```

## Adding New Components

1. **Create component file**:
   ```bash
   components/MyComponent.tsx
   ```

2. **Component template**:
   ```tsx
   "use client"; // If using hooks or Framer Motion
   
   import { motion } from "framer-motion";
   
   export default function MyComponent() {
     return (
       <section className="py-20 px-4 bg-black">
         <div className="max-w-7xl mx-auto">
           {/* Content */}
         </div>
       </section>
     );
   }
   ```

3. **Import and use**:
   ```tsx
   import MyComponent from "@/components/MyComponent";
   ```

## Form Handling

### Current Implementation

Forms use controlled components with useState:

```tsx
const [formData, setFormData] = useState({
  field: ""
});

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  // Handle submission
};
```

### Adding Backend Integration

Replace the simulated API call in `DemoOptInForm.tsx`:

```tsx
const response = await fetch('/api/submit-demo', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});

if (response.ok) {
  setIsSuccess(true);
}
```

Create API route in `app/api/submit-demo/route.ts`:

```tsx
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  // Process form data
  // Send to CRM, email service, etc.
  
  return NextResponse.json({ 
    success: true,
    message: "Form submitted successfully" 
  });
}
```

## Icons

Using Lucide React:

```tsx
import { Icon } from "lucide-react";

<Icon className="w-6 h-6 text-white" />
```

Available icons used:
- `Phone`, `Mail`, `MapPin`
- `CheckCircle`, `X`
- `ArrowRight`, `ChevronDown`
- `Menu`, `Globe`, `Shield`
- And many more...

## TypeScript Tips

### Type Safety

Add types for props:

```tsx
interface Props {
  title: string;
  items: string[];
  onClick?: () => void;
}

export default function MyComponent({ title, items, onClick }: Props) {
  // Component code
}
```

### Type Common Patterns

```tsx
// Form events
const handleSubmit = (e: FormEvent) => { ... }
const handleChange = (e: ChangeEvent<HTMLInputElement>) => { ... }

// State
const [data, setData] = useState<string>("");
const [items, setItems] = useState<Item[]>([]);
```

## Best Practices

### Performance

1. **Use `"use client"` only when needed**
   - For components using hooks
   - For Framer Motion components
   - Keep server components when possible

2. **Lazy load images**
   ```tsx
   <Image loading="lazy" ... />
   ```

3. **Minimize re-renders**
   - Use useCallback for functions
   - Use useMemo for expensive calculations

### Accessibility

1. **Semantic HTML**
   ```tsx
   <main>, <section>, <article>, <nav>, <footer>
   ```

2. **ARIA labels**
   ```tsx
   <button aria-label="Close menu">
   ```

3. **Keyboard navigation**
   - Ensure all interactive elements are keyboard accessible
   - Test with Tab key

### Code Style

1. **Component organization**:
   ```tsx
   // 1. Imports
   // 2. Types/Interfaces
   // 3. Component
   // 4. Exports
   ```

2. **Naming conventions**:
   - Components: PascalCase
   - Functions: camelCase
   - Constants: UPPER_SNAKE_CASE

3. **File structure**:
   - One component per file
   - Co-locate related components
   - Keep components focused and small

## Common Issues

### Tailwind Classes Not Working

If dynamic classes don't work:
```tsx
// Don't do this:
className={`bg-${color}-600`}

// Do this:
className={color === 'blue' ? 'bg-blue-600' : 'bg-green-600'}
```

### Framer Motion Errors

Always use `"use client"` directive:
```tsx
"use client";

import { motion } from "framer-motion";
```

### Build Errors

Clear cache and rebuild:
```bash
rm -rf .next
npm run build
```

## Testing Locally

1. **Visual testing**: Check each page in browser
2. **Responsive testing**: Use browser dev tools
3. **Accessibility**: Use Lighthouse in Chrome DevTools
4. **Forms**: Test all validation and submission flows
5. **Navigation**: Click every link
6. **Mobile**: Test on actual mobile device if possible

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to remote
git push origin feature/new-feature

# Create pull request on GitHub
```

## Need Help?

- Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Framer Motion docs: [framer.com/motion](https://www.framer.com/motion/)

---

Happy coding! 🚀
