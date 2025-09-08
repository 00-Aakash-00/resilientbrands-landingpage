# Resilient Brands Landing Page

AI-powered tools for startup founders to validate ideas, research markets, and analyze competitors.

## 🚀 Live Site

Visit: [https://www.resilientbrands.ai](https://www.resilientbrands.ai)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui patterns
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Email**: Resend API
- **Fonts**: Geist Sans & Mono
- **Package Manager**: pnpm

## 🎨 Design System

### Colors

- Primary: Teal (#2E8A84)
- Background: Off-white (#F1F1F1)
- Accent: Gray-blue (#5D8CAE)
- Highlight: Warm sand (#E2BE9F)
- Text: Dark (#0F172A)

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd resilientbrands_landing_page

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
```

### Environment Variables

Create a `.env` file with:

```env
RESEND_API_KEY=your_resend_api_key_here
```

### Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## 📁 Project Structure

```
resilientbrands_landing_page/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections
│   │   ├── hero-section.tsx
│   │   ├── features-section.tsx
│   │   ├── pricing-section.tsx
│   │   └── ...
│   ├── ui/                # Base UI components
│   ├── contact-modal.tsx  # Contact form modal
│   ├── floating-nav.tsx   # Navigation bar
│   └── providers.tsx      # App providers
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── public/                # Static assets

```

## 🔧 Key Features Implementation

### Contact Form

- Validates user input with Zod
- Sends emails via Resend API to brandon@resilientbrands.ai and sami@resilientbrands.ai
- Reply-to header set to user's email
- Beautiful, minimalistic modal design

### SEO Optimization

- Comprehensive meta tags
- Open Graph and Twitter cards
- Structured data (Schema.org)
- Canonical URLs
- Sitemap ready

### Performance

- Optimized images with Next.js Image
- Lazy loading components
- Minimal bundle size
- Fast page loads

## 📱 Responsive Design

The site is fully responsive with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Resilient Brands.

## 📞 Contact

- Email: brandon@resilientbrands.ai
- Website: [https://www.resilientbrands.ai](https://www.resilientbrands.ai)

---

Built with ❤️ for startup founders
