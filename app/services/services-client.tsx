"use client"

import React, { useRef, useEffect, useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { SharedFooter } from "@/components/shared-footer"
import { SharedCta } from "@/components/shared-cta"
import { RevealText } from "@/components/reveal-text"

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

function BentoCard({ children, className = "", delay = 0, onMouseMove }: any) {
  const { ref, inView } = useInView(0.1)
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={`group relative rounded-2xl border border-border-custom bg-bg-card overflow-hidden transition-all duration-700 hover:border-text-heading/15 hover:bg-bg-page/50 ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms, border-color 0.3s ease, background-color 0.3s ease`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"
        style={{ background: "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--text-heading), transparent 60%)" }}
      />
      {children}
    </div>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-mono text-text-muted bg-text-body/5 uppercase">
      {children}
    </span>
  )
}

export default function ServicesClient() {
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const serviceCategories = [
    {
      title: "Brand & Sales Promoters",
      desc: "Trained, well-groomed promoters for product launches, brand awareness campaigns, and sales conversions.",
      services: ["Brand Promoters", "Sales Promoters", "In-Store Promoters", "Mall Promoters"],
      who: "FMCG, Consumer Electronics, and Retail Brands."
    },
    {
      title: "Product Sampling & Distribution",
      desc: "Energetic field staff for direct consumer sampling, leaflet distribution, and trial campaigns.",
      services: ["Product Sampling Staff", "Flier Distribution Staff", "Roadshow Staff"],
      who: "Beverage, Snacks, Beauty, and D2C Brands."
    },
    {
      title: "Event & Exhibition Staffing",
      desc: "Professional hostesses, registration executives, ushers, and exhibition staff for B2B expos.",
      services: ["Event Hostesses", "Exhibition Staff", "Registration Staff", "Ushering Staff"],
      who: "Event Organizers, Corporate Agencies, and Trade Shows."
    },
    {
      title: "Field Operations & Supervision",
      desc: "Experienced supervisors and team leaders to manage attendance, briefing, and campaign KPIs.",
      services: ["Field Supervisors", "Team Leaders"],
      who: "Marketing Agencies and Multi-Location Campaign Managers."
    },
    {
      title: "Retail Compliance & Audits",
      desc: "Discreet mystery shoppers and audit staff to measure product placement, store pitch, and compliance.",
      services: ["Mystery Shoppers", "Audit Staff"],
      who: "Franchise Owners, Retail Chains, and Quality Assurance Teams."
    }
  ];

  const faqs = [
    { q: "What promotional manpower services does Deploymo offer?", a: "Deploymo provides 15 core services including Brand Promoters, Sales Promoters, Product Sampling Staff, Event Hostesses, Exhibition Staff, Registration Staff, Mall Promoters, Roadshow Staff, Ushering Staff, Flier Distribution Staff, Field Supervisors, Team Leaders, Mystery Shoppers, Audit Staff, and In-Store Promoters." },
    { q: "What areas do you serve?", a: "Deploymo operates across Mumbai (Andheri, Bandra, BKC, Powai, Goregaon, Malad, Borivali, Lower Parel), Navi Mumbai (Vashi, Nerul, Airoli), and Thane West." },
    { q: "Do you supply permanent staff or security personnel?", a: "No. Deploymo is exclusively a B2B Promotional Manpower & Event Staffing agency. We focus strictly on temporary, project-based promotional and event workforce deployment." },
    { q: "How are promoters screened and trained?", a: "Our staff are screened for communication, language proficiency (English, Hindi, Marathi), grooming, and punctual reporting before being briefed on client-specific product scripts." },
    { q: "What is your lead time for deploying field teams?", a: "We can fulfill requirements within 24 to 48 hours for standard campaign setups depending on headcount and location." },
    { q: "How can I request a quote for my campaign?", a: "Fill out our online contact form or message our team directly via WhatsApp (+91 6261652749) with your dates, headcount, and location requirements." }
  ];

  return (
    <div className="bg-bg-page text-text-body min-h-screen font-sans antialiased">
      <MobileNav />

      {/* Hero Section */}
      <div className="pt-40 pb-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <Tag>PROMOTIONAL SERVICES</Tag>
        <RevealText className="mt-5 text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] text-text-heading">
          {"B2B Promotional Manpower\n& Event Staffing Solutions"}
        </RevealText>
        <p className="mt-6 text-base text-text-body/70 max-w-2xl leading-relaxed">
          Deploymo provides trained field staff and event manpower for brand activations, trade expos, retail promotions, and product sampling across Mumbai, Navi Mumbai, and Thane.
        </p>
      </div>

      {/* 15 Core Services Grid */}
      <section className="py-12 px-6 md:py-16 md:px-12 lg:px-20 border-t border-border-custom">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-light text-text-heading mb-3">Our 15 Core Services</h2>
            <p className="text-xs text-text-muted font-mono uppercase tracking-widest">Strictly Focused Scope</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" onMouseMove={handleMouse}>
            {serviceCategories.map((cat, i) => (
              <BentoCard key={i} className="p-6 md:p-8 flex flex-col h-full" delay={i * 80}>
                <h3 className="text-xl font-light mb-3 text-text-heading">{cat.title}</h3>
                <p className="text-sm text-text-body/75 leading-relaxed mb-6">{cat.desc}</p>
                
                <div className="mt-auto">
                  <div className="text-[11px] font-mono text-text-muted tracking-widest uppercase mb-3">SERVICES INCLUDED</div>
                  <ul className="space-y-2.5 mb-6">
                    {cat.services.map((svc, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-xs text-text-heading font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-text-heading/60 shrink-0" />
                        {svc}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border-custom">
                    <p className="text-xs text-text-body/70 font-medium">
                      <span className="text-text-muted tracking-widest uppercase text-[10px] font-mono mr-2">PRIMARY CLIENTS:</span> {cat.who}
                    </p>
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>

          {/* Scope Exclusion Reminder */}
          <div className="mt-12 p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 text-xs text-text-body/80 leading-relaxed">
            <strong className="text-amber-600 dark:text-amber-400 font-semibold block mb-1">Agency Scope Notice:</strong>
            Deploymo exclusively specializes in promotional manpower and event staffing. We do not provide permanent HR placement, security guards, or office administrative staff.
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-6 md:py-24 md:px-12 lg:px-20 border-t border-border-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <Tag>FAQ</Tag>
            <h2 className="mt-5 text-2xl md:text-4xl font-light tracking-tight leading-[1.05] text-text-heading">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4" onMouseMove={handleMouse}>
            {faqs.map((faq, i) => (
              <BentoCard key={i} className="" delay={i * 50}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full relative z-10 px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="text-base font-light pr-4 text-text-heading">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full border border-border-custom flex flex-shrink-0 items-center justify-center transition-transform duration-300" style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </button>
                <div 
                  className="px-6 overflow-hidden transition-all duration-500 ease-in-out relative z-10"
                  style={{ maxHeight: openFaq === i ? '200px' : '0px', opacity: openFaq === i ? 1 : 0, paddingBottom: openFaq === i ? '1.5rem' : '0' }}
                >
                  <p className="text-xs md:text-sm text-text-body/85 leading-relaxed">{faq.a}</p>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      <SharedCta actionType="contact" />
      <SharedFooter />
    </div>
  )
}

