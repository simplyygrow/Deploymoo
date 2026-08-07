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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promotional Manpower & Event Staffing Agency Mumbai | Deploymo',
    description: 'Deploy trained promoters, brand ambassadors, hostesses, exhibition staff and event professionals quickly across Mumbai, Navi Mumbai, and Thane.',
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
      "logo": "https://deploymo.com/icon.svg",
      "email": "info@deploymo.com",
      "telephone": "+91-6261652749",
      "description": "B2B Promotional Manpower & Event Staffing Agency in Mumbai, Navi Mumbai, and Thane.",
      "areaServed": [
        { "@type": "City", "name": "Mumbai" },
        { "@type": "City", "name": "Navi Mumbai" },
        { "@type": "City", "name": "Thane" }
      ],
      "sameAs": [
        "https://www.instagram.com/deploy.mo",
        "https://www.linkedin.com/company/deploymo",
        "https://wa.me/message/4ZTBQI5MAZ6UP1"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://deploymo.com/#localbusiness",
      "name": "Deploymo Promotional Manpower & Event Staffing",
      "image": "https://deploymo.com/icon.svg",
      "url": "https://deploymo.com",
      "telephone": "+91-6261652749",
      "email": "info@deploymo.com",
      "priceRange": "₹₹",
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
      "areaServed": ["Mumbai", "Navi Mumbai", "Thane", "Andheri", "Bandra", "Powai", "Lower Parel", "BKC", "Goregaon", "Borivali", "Malad", "Vashi", "Nerul", "Airoli", "Thane West"]
    },
    {
      "@type": "WebSite",
      "@id": "https://deploymo.com/#website",
      "url": "https://deploymo.com",
      "name": "Deploymo",
      "publisher": { "@id": "https://deploymo.com/#organization" }
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

