import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.resilientbrands.ai'),
  title: {
    default: 'Resilient Brands - AI Market Research & Startup Validation Tool | Get Your Business Report',
    template: '%s | Resilient Brands'
  },
  description: 'Resilient Brands helps entrepreneurs validate startup ideas with AI-powered market research reports. Get TAM/SAM/SOM analysis, competitor insights, SWOT analysis & business plans in minutes. Start free.',
  keywords: 'Resilient Brands, ResilientBrands.ai, Resilient Brands AI, startup validation tool, AI market research, business idea validation, TAM SAM SOM calculator, competitor analysis tool, SWOT analysis generator, AI business plan creator, startup market research, entrepreneur tools, startup founder resources, AI startup tools, market size calculator, business validation software, startup idea analyzer, AI competitor research, automated market analysis',
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
    url: 'https://www.resilientbrands.ai',
    siteName: 'Resilient Brands',
    title: 'Resilient Brands - AI-Powered Market Research for Startup Founders',
    description: 'Validate your startup idea in minutes with AI. Get comprehensive market research reports including TAM/SAM/SOM, competitor analysis, SWOT, and business plans. Start free today.',
    images: [
      {
        url: 'https://www.resilientbrands.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resilient Brands - AI Market Research Platform',
        type: 'image/png',
      },
      {
        url: 'https://www.resilientbrands.ai/logo.png',
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
    title: 'Resilient Brands - AI Market Research for Startups',
    description: 'Get instant AI-powered market research reports. TAM/SAM/SOM, competitors, SWOT analysis & more. Start validating your startup idea today.',
    images: {
      url: 'https://www.resilientbrands.ai/twitter-image.png',
      alt: 'Resilient Brands Preview'
    },
  },
  alternates: {
    canonical: 'https://www.resilientbrands.ai',
    languages: {
      'en-US': 'https://www.resilientbrands.ai',
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
    <html lang="en" className={dmSans.variable}>
      <head>
        {/* Favicon and logo */}
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional SEO Tags */}
        <link rel="canonical" href="https://www.resilientbrands.ai" />
        <link rel="alternate" type="application/rss+xml" title="Resilient Brands RSS Feed" href="https://www.resilientbrands.ai/rss.xml" />
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
              "url": "https://www.resilientbrands.ai",
              "description": "AI-powered market research and business validation platform for startup founders. Get instant TAM/SAM/SOM calculations, competitor analysis, SWOT reports, and business plans.",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "softwareVersion": "2.0",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "USD",
                "lowPrice": "95",
                "highPrice": "499",
                "offerCount": "3",
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "Entrepreneur Plan",
                    "price": "95",
                    "priceCurrency": "USD",
                    "description": "1 custom market research report with TAM/SAM/SOM"
                  },
                  {
                    "@type": "Offer", 
                    "name": "Serial Entrepreneur Plan",
                    "price": "159",
                    "priceCurrency": "USD",
                    "priceValidUntil": "2024-12-31",
                    "description": "Everything in Entrepreneur plus competitor analysis and business plan"
                  },
                  {
                    "@type": "Offer",
                    "name": "Professional Plan",
                    "price": "499",
                    "priceCurrency": "USD",
                    "description": "Everything plus 1-hour consultation"
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
                "url": "https://www.resilientbrands.ai",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.resilientbrands.ai/logo.png",
                  "width": "512",
                  "height": "512"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-555-000-0000",
                  "contactType": "customer service",
                  "email": "chris@resilientbrands.ai",
                  "availableLanguage": "English"
                },
                "sameAs": [
                  "https://twitter.com/resilientbrands_ai",
                  "https://linkedin.com/company/resilient-brands",
                  "https://github.com/resilient-brands"
                ]
              },
              "featureList": [
                "AI-Powered Market Research",
                "TAM/SAM/SOM Calculations",
                "Competitor Analysis",
                "SWOT Analysis",
                "Business Plan Generation",
                "Brand Positioning",
                "Market Size Analysis"
              ],
              "screenshot": "https://www.resilientbrands.ai/screenshot.png"
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
              "url": "https://www.resilientbrands.ai",
              "logo": "https://www.resilientbrands.ai/logo.png",
              "description": "AI-powered startup validation and market research platform",
              "foundingDate": "2023",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Chris",
                  "email": "chris@resilientbrands.ai"
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
                "Startup Validation",
                "Market Research", 
                "Business Analysis",
                "AI Technology",
                "Entrepreneurship"
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
                  "item": "https://www.resilientbrands.ai"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Features",
                  "item": "https://www.resilientbrands.ai/#features"
                },
                {
                  "@type": "ListItem", 
                  "position": 3,
                  "name": "Pricing",
                  "item": "https://www.resilientbrands.ai/#pricing"
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
                    "text": "Resilient Brands is an AI-powered market research platform that helps entrepreneurs validate startup ideas. It generates comprehensive reports including TAM/SAM/SOM calculations, competitor analysis, SWOT reports, and business plans in minutes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does Resilient Brands cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Resilient Brands offers three pricing plans: Entrepreneur Plan at $95 for a single report, Serial Entrepreneur Plan at $159/year with additional features, and Professional Plan at $499 which includes a 1-hour consultation with a business strategist."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How fast can I get my market research report?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "With Resilient Brands, you can get your comprehensive market research report in under 10 minutes. The Serial Entrepreneur and Professional plans offer priority delivery for even faster results."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's included in the market research report?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Each report includes Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and Serviceable Obtainable Market (SOM) calculations, top 5 competitor analysis, SWOT analysis, and depending on your plan, a one-page business plan and brand positioning recommendations."
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
