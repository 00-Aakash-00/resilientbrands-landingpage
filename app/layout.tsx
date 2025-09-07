import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/providers'
import { dmSans, instrumentSerif } from '@/lib/fonts'

export const metadata: Metadata = {
  metadataBase: new URL('https://resilientbrands.com'),
  title: {
    default: 'Resilient Brands - AI-Powered Brand Management & Tech Solutions Platform',
    template: '%s | Resilient Brands'
  },
  description: 'Resilient Brands connects you to trusted providers and experts for brand management, tech solutions, security, and compliance. Transform your digital presence with AI-powered analysis and professional services. Get started today.',
  keywords: 'Resilient Brands, ResilientBrands.com, brand management platform, digital transformation, tech solutions provider, AI-powered analysis, brand performance, compliance tracking, security solutions, professional services, digital presence, brand optimization, technology consulting, enterprise solutions, startup resources, business growth, brand positioning',
  authors: [{ name: 'Resilient Brands Team' }],
  creator: 'Resilient Brands',
  publisher: 'Resilient Brands',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'gNdJAuVqO7u_cUYY0g9qHNU_AOEM8U9PKOdo8rRbuCc',
  },
  other: {
    'msvalidate.01': 'YOUR_BING_VERIFICATION_CODE',
    'yandex-verification': 'YOUR_YANDEX_VERIFICATION_CODE',
    'p:domain_verify': 'YOUR_PINTEREST_VERIFICATION_CODE',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://resilientbrands.com',
    siteName: 'Resilient Brands',
    title: 'Resilient Brands - AI-Powered Brand Management & Tech Solutions Platform',
    description: 'Connect with trusted providers and experts for comprehensive brand management, tech solutions, security, and compliance. AI-powered analysis meets professional services for digital transformation.',
    images: [
      {
        url: 'https://resilientbrands.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resilient Brands - AI Market Research Platform',
        type: 'image/png',
      },
      {
        url: 'https://resilientbrands.com/logo.png',
        width: 800,
        height: 800,
        alt: 'Resilient Brands Logo',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@resilientbrands_ai',
    creator: '@resilientbrands_ai',
    title: 'Resilient Brands - Brand Management & Tech Solutions',
    description: 'Professional brand management and tech solutions. Connect with trusted providers for security, compliance, and digital transformation services.',
    images: {
      url: 'https://resilientbrands.com/twitter-image.png',
      alt: 'Resilient Brands Preview'
    },
  },
  alternates: {
    canonical: 'https://resilientbrands.com',
    languages: {
      'en-US': 'https://resilientbrands.com',
    },
  },
  category: 'technology',
  classification: 'Business Software',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <head>
        {/* Favicon and logo */}
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional SEO Tags */}
        <link rel="canonical" href="https://resilientbrands.com" />
        <link rel="alternate" type="application/rss+xml" title="Resilient Brands RSS Feed" href="https://resilientbrands.com/rss.xml" />
        <meta name="theme-color" content="#2E8A84" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="gNdJAuVqO7u_cUYY0g9qHNU_AOEM8U9PKOdo8rRbuCc" />
        
        {/* Microsoft Clarity Analytics */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "srch7p6ro3");
            `
          }}
        />
        
        {/* Additional Meta Tags for Better SEO */}
        <meta name="application-name" content="Resilient Brands" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Resilient Brands" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2E8A84" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Resilient Brands",
              "alternateName": ["ResilientBrands", "Resilient Brands AI", "ResilientBrands AI"],
              "url": "https://resilientbrands.com",
              "description": "AI-powered brand management and technology solutions platform connecting businesses with trusted providers and experts for digital transformation, security, compliance, and growth.",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "softwareVersion": "2.0",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "USD",
                "lowPrice": "0",
                "highPrice": "2000",
                "offerCount": "4",
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "Free Consultation",
                    "price": "0",
                    "priceCurrency": "USD",
                    "description": "Free initial consultation and brand assessment"
                  },
                  {
                    "@type": "Offer",
                    "name": "Basic Services",
                    "price": "500",
                    "priceCurrency": "USD",
                    "description": "Essential brand management and tech solutions"
                  },
                  {
                    "@type": "Offer", 
                    "name": "Professional Services",
                    "price": "1200",
                    "priceCurrency": "USD",
                    "description": "Comprehensive brand management with security and compliance"
                  },
                  {
                    "@type": "Offer",
                    "name": "Enterprise Solutions",
                    "price": "2000",
                    "priceCurrency": "USD",
                    "description": "Full-service digital transformation with dedicated support"
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Resilient Brands",
                "url": "https://resilientbrands.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://resilientbrands.com/logo.png",
                  "width": "512",
                  "height": "512"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-555-000-0000",
                  "contactType": "customer service",
                  "email": "hello@resilientbrands.com",
                  "availableLanguage": "English"
                },
                "sameAs": [
                  "https://twitter.com/resilientbrands_ai",
                  "https://linkedin.com/company/resilient-brands",
                  "https://github.com/resilient-brands"
                ]
              },
              "featureList": [
                "AI-Powered Brand Analysis",
                "Tech Solutions Marketplace",
                "Security & Compliance Services",
                "Brand Performance Monitoring",
                "Digital Transformation Consulting",
                "Expert Network Access",
                "Real-time Analytics Dashboard",
                "Professional Service Matching"
              ],
              "screenshot": "https://resilientbrands.com/screenshot.png"
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Resilient Brands",
              "alternateName": "ResilientBrands",
              "url": "https://resilientbrands.com",
              "logo": "https://resilientbrands.com/logo.png",
              "description": "AI-powered brand management and technology solutions platform connecting businesses with trusted providers and experts",
              "foundingDate": "2023",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Resilient Brands Team",
                  "email": "hello@resilientbrands.com"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://twitter.com/resilientbrands_ai",
                "https://linkedin.com/company/resilient-brands"
              ],
              "knowsAbout": [
                "Brand Management",
                "Digital Transformation", 
                "Technology Solutions",
                "AI Technology",
                "Security & Compliance",
                "Professional Services"
              ]
            })
          }}
        />
        
        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://resilientbrands.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Features",
                  "item": "https://resilientbrands.com/#tech-solutions"
                },
                {
                  "@type": "ListItem", 
                  "position": 3,
                  "name": "Services",
                  "item": "https://resilientbrands.com/#popular-services"
                }
              ]
            })
          }}
        />
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Resilient Brands?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Resilient Brands is an AI-powered brand management and technology solutions platform that connects businesses with trusted providers and experts. We offer comprehensive services including brand performance monitoring, security solutions, compliance tracking, and digital transformation consulting."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What services does Resilient Brands offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Resilient Brands offers brand performance optimization, security and IT solutions, compliance tracking, tech solutions marketplace, AI-powered analysis, and expert consultation services. We connect you with trusted providers in your specific tech stack and business needs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Resilient Brands help my business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We help you manage your brand before others define it by providing real-time monitoring, expert guidance, trusted provider connections, and AI-powered insights. Our platform ensures your digital presence is resilient and positions you for sustainable growth."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I get started with Resilient Brands?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Getting started is easy! Simply describe your business needs through our AI prompt, and we'll connect you with the right experts and solutions. You can start with a free consultation to identify your brand maturity outcomes and next steps."
                  }
                }
              ]
            })
          }}
        />

      </head>
      <body className={`${dmSans.className} font-sans`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
