import { MobileNav } from "@/components/mobile-nav"
import { SharedCta } from "@/components/shared-cta"
import { SharedFooter } from "@/components/shared-footer"
import { RevealText } from "@/components/reveal-text"

export const metadata = {
  title: 'Deploymo FAQ | Promotional Staffing Mumbai & Thane',
  description: "Answers about Deploymo's promotional manpower & event staffing: services, coverage in Mumbai, Navi Mumbai & Thane, pricing, lead times and booking.",
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Deploymo FAQ | Promotional Staffing Mumbai & Thane',
    description: "Answers about Deploymo's promotional manpower & event staffing: services, coverage in Mumbai, Navi Mumbai & Thane, pricing, lead times and booking.",
    url: 'https://www.deploymo.com/faq',
    images: [{ url: 'https://www.deploymo.com/images/home-hero.jpeg', width: 1200, height: 630, alt: 'Deploymo FAQ — promotional staffing Mumbai' }],
  },
}

const FAQS = [
  {
    q: "What promotional manpower services does Deploymo offer?",
    a: "Deploymo provides 15 core services including brand promoters, sales promoters, product sampling staff, event hostesses, exhibition staff, registration teams, ushering staff, mall promoters, roadshow staff, field supervisors, team leaders, mystery shoppers, audit staff, and in-store promoters for campaigns across Mumbai, Navi Mumbai, and Thane."
  },
  {
    q: "Which areas do you cover in Mumbai, Navi Mumbai, and Thane?",
    a: "In Mumbai we cover Andheri, Bandra, BKC, Powai, Lower Parel, Goregaon, Borivali, and Malad. Navi Mumbai coverage includes Vashi, Nerul, and Airoli, while Thane coverage focuses on Thane West and its retail corridors. Local manpower pools in each region allow 24 to 48 hour deployments."
  },
  {
    q: "How quickly can Deploymo deploy promoters or event hostesses?",
    a: "Standard turnaround for verified team allocation is 24 to 48 hours, depending on headcount and location. Both planned marketing campaigns and urgent short-notice requirements are accommodated across the Mumbai metropolitan region."
  },
  {
    q: "How are promoters screened and trained?",
    a: "Our staff are screened for communication skills, language proficiency in English, Hindi, and Marathi, grooming, and punctual reporting before being briefed on client-specific product scripts, pitch practice, and dress-code verification."
  },
  {
    q: "What does it cost to hire promotional staff in Mumbai?",
    a: "Pricing depends on staff type, headcount, campaign duration, and location. Share your brief through our contact form or WhatsApp and we will send a transparent, all-inclusive quote — with no hidden deployment charges — within 24 hours."
  },
  {
    q: "Can I hire event hostesses for a single day?",
    a: "Yes. We handle one-day assignments such as product launches, store openings, and private corporate events as readily as multi-week campaigns, with the same screening and supervision standards."
  },
  {
    q: "Do you provide staff for exhibitions and trade shows?",
    a: "Yes — event hostesses, registration staff, ushers, and stall promoters are a core service. We support B2B expos and trade shows across Mumbai convention venues with staff briefed on your stall script and lead-capture process."
  },
  {
    q: "Do you supply staff for permanent corporate roles or security?",
    a: "No. Deploymo is exclusively a B2B promotional manpower and event staffing agency. We focus strictly on short-term, project-based promotional staff, brand promoters, hostesses, and event execution personnel — not permanent HR recruitment or security services."
  },
  {
    q: "How do you ensure staff punctuality and grooming on-ground?",
    a: "All deployed personnel undergo campaign-specific briefing, mandatory dress-code checks, and are supervised on-site by assigned Deploymo team leaders with live attendance check-ins throughout the campaign."
  },
  {
    q: "How can I request a quote for an upcoming event or campaign?",
    a: "Submit an inquiry through our website contact form or message our team directly on WhatsApp at +91 8982652749 with your dates, headcount, and location requirements for an immediate quotation."
  }
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a
    }
  }))
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-mono text-text-muted bg-text-body/5 uppercase">
      {children}
    </span>
  )
}

export default function FaqPage() {
  return (
    <div className="bg-bg-page text-text-body min-h-screen font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <MobileNav />

      {/* Hero */}
      <div className="pt-40 pb-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <Tag>FAQ</Tag>
        <RevealText as="h1" className="mt-5 text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] text-text-heading">
          {"Promotional Staffing FAQs\nfor Mumbai & Beyond."}
        </RevealText>
        <p className="mt-6 text-base text-text-body/70 max-w-2xl leading-relaxed">
          Answers to common questions about Deploymo&apos;s promotional manpower and event staffing services in Mumbai, Navi Mumbai, and Thane — coverage, lead times, screening, pricing, and booking.
        </p>
      </div>

      {/* FAQ list */}
      <section className="py-12 px-6 md:py-16 md:px-12 lg:px-20 border-t border-border-custom" aria-label="Frequently Asked Questions">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 flex flex-col items-center">
            <Tag>COMMON QUESTIONS</Tag>
            <h2 className="mt-5 text-2xl md:text-4xl font-light tracking-tight leading-[1.05] text-text-heading">
              Everything About Our Event Staffing Services
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl border border-border-custom bg-bg-card space-y-2">
                <h3 className="text-base font-medium text-text-heading">{faq.q}</h3>
                <p className="text-xs md:text-sm text-text-body/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SharedCta actionType="contact" />
      <SharedFooter />
    </div>
  )
}
