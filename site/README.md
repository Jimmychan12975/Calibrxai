# Calibrx AI Website

A modern, responsive website built with Next.js 15, TypeScript, and Tailwind CSS for Calibrx AI - an AI solutions company.

## 🚀 Features

- **Modern Stack**: Next.js 15, React 19, TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Image optimization, lazy loading, code splitting
- **Accessibility**: WCAG AA compliant with proper ARIA labels
- **SEO Ready**: Meta tags, structured data, sitemap
- **Form Handling**: Contact form with validation and error handling
- **Error Boundaries**: Graceful error handling throughout the app

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Remix Icons
- **Fonts**: Plus Jakarta Sans, Geist Mono
- **Form Handling**: Formspree
- **Analytics**: Google Analytics

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd site
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run export` - Export static site
- `npm run deploy` - Build and prepare for deployment

## 📁 Project Structure

```
site/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products pages
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Button.tsx         # Button component
│   ├── ContactSection.tsx # Contact form
│   ├── ErrorBoundary.tsx  # Error handling
│   ├── Footer.tsx         # Footer component
│   ├── Header.tsx         # Navigation header
│   ├── Logo.tsx           # Logo component
│   ├── ProductCard.tsx    # Product card
│   └── SkeletonLoader.tsx # Loading states
├── hooks/                 # Custom React hooks
│   └── useForm.ts         # Form management hook
├── lib/                   # Utility libraries
│   ├── constants.ts       # App constants
│   ├── products.ts        # Product data
│   └── utils.ts           # Utility functions
├── types/                 # TypeScript type definitions
│   └── index.ts           # Type definitions
└── public/                # Static assets
    ├── robots.txt         # SEO robots file
    └── sitemap.xml        # SEO sitemap
```

## 🎨 Design System

### Colors
- Primary: #003557 (Dark Blue)
- Secondary: #004d7a (Lighter Blue)
- Accent: #10b981 (Green for Calipet theme)
- Background: #ffffff (White)
- Text: #0f172a (Dark Gray)

### Typography
- Primary Font: Plus Jakarta Sans
- Monospace Font: Geist Mono
- Custom Font: AlibabaSans (for specific sections)

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file with:
```
NEXT_PUBLIC_SITE_URL=https://www.calibrxai.com
NEXT_PUBLIC_GA_ID=G-EE96KFFCG0
```

### Form Configuration
Update the Formspree endpoint in `lib/constants.ts`:
```typescript
export const FORM_CONFIG = {
  formspreeEndpoint: "https://formspree.io/f/your-form-id",
  // ...
};
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility Features

- Skip navigation links
- Proper ARIA labels
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

## 🚀 Deployment

### Static Export (GitHub Pages)
```bash
npm run export
```

### Vercel
1. Connect your repository to Vercel
2. Deploy automatically on push to main

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out`

## 📈 Performance

- Lighthouse Performance Score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is proprietary to Calibrx AI. All rights reserved.

## 📞 Support

For support, email hello@calibrxai.com or visit our contact page.