"use client"

import React from "react"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What regions in Mumbai do you cover for promotional staffing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Deploymo covers all major areas across Mumbai (Andheri, Bandra, BKC, Powai, Goregaon, Malad, Borivali, Lower Parel), Navi Mumbai (Vashi, Nerul, Airoli), and Thane (Thane West)."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can Deploymo deploy promoters or event hostesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accommodate both planned marketing campaigns and urgent short-notice requirements. Standard turnaround for verified team allocation is 24 to 48 hours."
      }
    },
    {
      "@type": "Question",
      "name": "Do you supply staff for permanent corporate roles or security?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Deploymo is exclusively a B2B Promotional Manpower and Event Staffing agency. We focus strictly on short-term promotional staff, brand promoters, hostesses, and event execution personnel."
      }
    },
    {
      "@type": "Question",
      "name": "How do you ensure staff punctuality and grooming on-ground?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All deployed personnel undergo campaign-specific briefing, mandatory dress code checks, and are supervised on-site by assigned Deploymo Team Leaders with live check-ins."
      }
    },
    {
      "@type": "Question",
      "name": "How can I request a quote for an upcoming event or campaign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can submit an inquiry through our website contact form or directly message our team on WhatsApp at +91 6261652749 for immediate quotation."
      }
    }
  ]
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Brand Promoters Mumbai",
        "description": "Trained brand promoters for product launches, retail activations, and promotional campaigns across Mumbai, Navi Mumbai, and Thane.",
        "provider": { "@id": "https://deploymo.com/#organization" },
        "areaServed": [
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Navi Mumbai" },
          { "@type": "City", "name": "Thane" }
        ],
        "url": "https://deploymo.com/services"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Event Hostesses Mumbai",
        "description": "Professional event hostesses and registration staff for corporate events, exhibitions, trade shows, and conferences in Mumbai.",
        "provider": { "@id": "https://deploymo.com/#organization" },
        "areaServed": [
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Navi Mumbai" },
          { "@type": "City", "name": "Thane" }
        ],
        "url": "https://deploymo.com/services"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Product Sampling Staff Mumbai",
        "description": "Experienced product sampling teams for in-store demos, mall activations, and retail sampling campaigns across Mumbai region.",
        "provider": { "@id": "https://deploymo.com/#organization" },
        "areaServed": [
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Navi Mumbai" },
          { "@type": "City", "name": "Thane" }
        ],
        "url": "https://deploymo.com/services"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Exhibition Staff Mumbai",
        "description": "Dedicated exhibition staff, booth operators, and registration personnel for trade shows, expos, and corporate exhibitions.",
        "provider": { "@id": "https://deploymo.com/#organization" },
        "areaServed": [
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Navi Mumbai" },
          { "@type": "City", "name": "Thane" }
        ],
        "url": "https://deploymo.com/services"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "Mall Promoters & Roadshow Staff Mumbai",
        "description": "Mall activation promoters and roadshow execution teams for high-footfall retail marketing campaigns across Mumbai, Navi Mumbai, and Thane.",
        "provider": { "@id": "https://deploymo.com/#organization" },
        "areaServed": [
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Navi Mumbai" },
          { "@type": "City", "name": "Thane" }
        ],
        "url": "https://deploymo.com/services"
      }
    }
  ]
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://deploymo.com"
    }
  ]
}

export function HomepageSchemas() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
