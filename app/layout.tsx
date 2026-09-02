import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, IBM_Plex_Sans, Courier_Prime } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _courierPrime = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const _ibmPlexSans = IBM_Plex_Sans({ weight: ["300", "400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Promotional Manpower & Event Staffing Agency Mumbai | Deploymo',
  description: 'Deploymo provides trained promotional manpower, brand promoters, sales promoters, hostesses, registration staff and exhibition staff across Mumbai, Navi Mumbai, and Thane. Request a deployment quote today.',
  keywords: [
    'Promotional Manpower Mumbai',
    'Promotional Staffing Mumbai',
    'Event Staffing Mumbai',
    'Brand Promoters Mumbai',
    'Sales Promoters Mumbai',
    'Brand Ambassadors Mumbai',
    'Product Sampling Staff Mumbai',
    'Retail Promoters Mumbai',
    'Mall Promoters Mumbai',
    'Exhibition Staff Mumbai',
    'Corporate Event Staffing Mumbai',
    'Marketing Activation Agency Mumbai',
    'On Ground Marketing Staff Mumbai',
    'Field Executives Mumbai',
    'Hostess Agency Mumbai',
    'Registration Staff Mumbai',
    'Event Manpower Mumbai',
    'Temporary Promotional Staff Mumbai',
    'In Store Promoters Mumbai',
    'Merchandisers Mumbai',
    'Promotional Agency Mumbai',
    'Hire Brand Promoters',
    'Hire Event Staff',
    'Hire Promotional Staff',
    'Product Launch Staffing',
    'Retail Activation Agency',
    'Trade Show Staffing',
    'Exhibition Promoters',
    'Marketing Campaign Staff',
    'Brand Activation Mumbai',
    'Mumbai',
    'Navi Mumbai',
    'Thane',
    'Andheri',
    'Bandra',
    'Powai',
    'Lower Parel',
    'BKC',
    'Goregaon',
    'Borivali',
    'Malad',
    'Vashi',
    'Nerul',
    'Airoli',
    'Thane West'
  ],
  authors: [{ name: 'Deploymo' }],
  metadataBase: new URL('https://deploymo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Promotional Manpower & Event Staffing Agency Mumbai | Deploymo',
    description: 'Deploy trained promoters, brand ambassadors, hostesses, exhibition staff and event professionals quickly across Mumbai, Navi Mumbai, and Thane.',
    type: 'website',
    url: 'https://deploymo.com',
    siteName: 'Deploymo',
    locale: 'en_IN',
    images: [
      {
        url: 'https://deploymo.com/images/home-hero.jpeg',
        width: 1200,
        height: 630,
        alt: 'Deploymo - Professional Promotional Staffing Team Mumbai',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promotional Manpower & Event Staffing Agency Mumbai | Deploymo',
    description: 'Deploy trained promoters, brand ambassadors, hostesses, exhibition staff and event professionals quickly across Mumbai, Navi Mumbai, and Thane.',
    images: ['https://deploymo.com/images/home-hero.jpeg'],
  },
  icons: {
    icon: [
      {
        url: '/icon.png',
        type: 'image/png',
      },
      {
        url: '/logo.png',
        type: 'image/png',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
    shortcut: '/logo.png',
  },
}

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://deploymo.com/#organization",
      "name": "Deploymo",
      "url": "https://deploymo.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://deploymo.com/icon.svg",
        "width": 512,
        "height": 512
      },
      "image": "https://deploymo.com/images/home-hero.jpeg",
      "email": "info@deploymo.com",
      "telephone": "+91-6261652749",
      "description": "B2B Promotional Manpower & Event Staffing Agency in Mumbai, Navi Mumbai, and Thane. We deploy trained brand promoters, sales promoters, hostesses, exhibition staff, and event manpower.",
      "foundingDate": "2023",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 50,
        "maxValue": 200
      },
      "areaServed": [
        { "@type": "City", "name": "Mumbai" },
        { "@type": "City", "name": "Navi Mumbai" },
        { "@type": "City", "name": "Thane" }
      ],
      "knowsAbout": [
        "Promotional Staffing",
        "Event Manpower",
        "Brand Promoters",
        "Sales Promoters",
        "Product Sampling",
        "Exhibition Staffing",
        "Mall Activations",
        "Roadshow Staffing",
        "Corporate Event Staffing"
      ],
      "sameAs": [
        "https://www.instagram.com/deploy.mo",
        "https://www.linkedin.com/company/deploymo",
        "https://wa.me/message/4ZTBQI5MAZ6UP1"
      ]
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://deploymo.com/#localbusiness",
      "name": "Deploymo Promotional Manpower & Event Staffing",
      "image": "https://deploymo.com/images/home-hero.jpeg",
      "url": "https://deploymo.com",
      "telephone": "+91-6261652749",
      "email": "info@deploymo.com",
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Bank Transfer, UPI",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Off Juhu Circle, New Link Road, Opp. The Club New D.N. Nagar, Andheri West",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400053",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.1197,
        "longitude": 72.8264
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "47",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Promotional Staffing Services",
        "itemListElement": [
          { "@type": "OfferCatalog", "name": "Brand Promoters" },
          { "@type": "OfferCatalog", "name": "Sales Promoters" },
          { "@type": "OfferCatalog", "name": "Event Hostesses" },
          { "@type": "OfferCatalog", "name": "Product Sampling Staff" },
          { "@type": "OfferCatalog", "name": "Exhibition Staff" },
          { "@type": "OfferCatalog", "name": "Mall Promoters" },
          { "@type": "OfferCatalog", "name": "Roadshow Staff" },
          { "@type": "OfferCatalog", "name": "Registration Staff" },
          { "@type": "OfferCatalog", "name": "Ushering Staff" },
          { "@type": "OfferCatalog", "name": "Field Supervisors" }
        ]
      },
      "areaServed": [
        { "@type": "City", "name": "Mumbai", "sameAs": "https://en.wikipedia.org/wiki/Mumbai" },
        { "@type": "City", "name": "Navi Mumbai", "sameAs": "https://en.wikipedia.org/wiki/Navi_Mumbai" },
        { "@type": "City", "name": "Thane", "sameAs": "https://en.wikipedia.org/wiki/Thane" }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://deploymo.com/#website",
      "url": "https://deploymo.com",
      "name": "Deploymo",
      "description": "Professional promotional manpower and event staffing agency serving Mumbai, Navi Mumbai, and Thane.",
      "publisher": { "@id": "https://deploymo.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://deploymo.com/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "en-IN"
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className={`font-sans antialiased theme-transition`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

