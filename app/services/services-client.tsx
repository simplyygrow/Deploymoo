"use client"

import React, { useRef, useEffect, useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { SharedFooter } from "@/components/shared-footer"
import { SharedCta } from "@/components/shared-cta"
import { RevealText } from "@/components/reveal-text"

// ─── Shared minimal components from page.tsx ───
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
      className={`group relative rounded-2xl border border-black/[0.07] bg-white overflow-hidden transition-all duration-700 hover:border-black/[0.15] hover:bg-[#fafaf8] ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms, border-color 0.3s ease, background-color 0.3s ease`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,0,0,0.03), transparent 60%)" }}
      />
      {children}
    </div>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-black/40 bg-black/[0.04]">
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

  const services = [
    {
      title: "Field Marketing",
      desc: "Managed field teams for customer outreach, lead generation and on-ground marketing campaigns.",
      included: ["Field Marketing Campaigns", "Field Executive Deployment", "Customer Outreach Campaigns", "Local Market Campaigns", "Door-to-Door Campaign Teams", "Lead Generation Teams", "Market Outreach Teams", "Customer Acquisition Support", "Multi-Location Field Campaigns", "Field Campaign Supervision", "Campaign Reporting"],
      who: "Retail and FMCG brands entering new markets."
    },
    {
      title: "Promoter Staffing",
      desc: "Brand promoters, retail promoters and product demonstration teams for temporary campaigns.",
      included: ["Brand Promoters", "Sales Promoters", "Mall Promoters", "Retail Promoters", "In-Store Promoters", "Product Demonstrators", "Exhibition Promoters", "Promotional Staff", "Brand Ambassadors", "Temporary Promotion Teams", "Product Sampling Staff", "Customer Engagement Teams"],
      who: "Brands needing active in-store representation."
    },
    {
      title: "Event Staffing",
      desc: "Registration teams, ushers, exhibition staff and event support workforce.",
      included: ["Registration Staff", "Ushers", "Event Coordinators", "Event Support Staff", "Hospitality Staff", "Exhibition Staff", "Guest Management Teams", "Ground Support Teams", "Event Helpers", "Temporary Event Crew", "Brand Representatives", "Event Supervisors"],
      who: "Event managers and brand activation agencies."
    },
    {
      title: "Brand Activation",
      desc: "On-ground teams for product sampling, mall activations, retail campaigns and roadshows.",
      included: ["Mall Activations", "Retail Activations", "Product Sampling", "Product Demonstrations", "Roadshows", "College Activations", "Market Activations", "Exhibition Activations", "Product Launch Support", "Consumer Engagement Campaigns", "In-Store Activations", "Promotional Campaigns"],
      who: "BTL and experiential marketing agencies."
    },
    {
      title: "Retail Audits",
      desc: "Field auditors for store visits, product checks, retail visibility and market mapping.",
      included: ["Retail Store Audits", "Store Visits", "Product Availability Checks", "Price Audits", "Competitor Price Checks", "POSM Verification", "Retail Visibility Audits", "Shelf Visibility Checks", "Product Display Verification", "Geo-Tagged Store Visits", "Retail Census Projects", "Market Mapping", "Outlet Verification", "Store Data Collection"],
      who: "FMCG and retail brands requiring shelf visibility."
    },
    {
      title: "Field Surveys",
      desc: "Survey teams for consumer research, retailer surveys and offline data collection.",
      included: ["Consumer Surveys", "Retailer Surveys", "Market Surveys", "Field Surveys", "Product Feedback Surveys", "Customer Feedback Collection", "Offline Data Collection", "Market Mapping", "Competitor Surveys", "Location Surveys", "Multi-City Surveys", "On-Ground Research Support"],
      who: "Market research firms and D2C brands."
    }
  ];

  const faqs = [
    { q: "What services does Deploymo provide?", a: "Deploymo provides managed field teams for field marketing, promoter staffing, event staffing, brand activations, retail audits and field survey projects." },
    { q: "Can Deploymo provide temporary promoters?", a: "Deploymo supports project-based promoter deployment for retail promotions, mall campaigns, exhibitions, product demonstrations and brand activation projects." },
    { q: "Does Deploymo provide event staff?", a: "Yes. Depending on project requirements and location availability, Deploymo can coordinate registration staff, ushers, exhibition staff, event support teams and other temporary event workforce." },
    { q: "Can Deploymo deploy large field teams?", a: "Deploymo supports small and high-volume field team requirements based on project scope, location, timeline and workforce availability." },
    { q: "Does Deploymo execute retail audits?", a: "Yes. Deploymo supports retail store visits, product availability checks, pricing audits, POSM verification, retail visibility audits and market mapping projects." },
    { q: "Does Deploymo provide field survey teams?", a: "Yes. Deploymo provides project-based teams for consumer surveys, retailer surveys, market research fieldwork and offline data collection." },
    { q: "Which locations does Deploymo serve?", a: "Deploymo supports Mumbai and selected major cities in India. Project coverage depends on location, team requirement, timeline and scope of work." },
    { q: "How can I request a field team?", a: "Share the project location, number of people required, project duration, scope of work and reporting requirements with Deploymo. The team will review the requirement and discuss the deployment plan." }
  ];

  return (
    <div className="bg-[#F5F4F0] text-[#111] min-h-screen font-sans antialiased">
      <MobileNav />

      {/* Hero Section Spacer */}
      <div className="pt-40 pb-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <Tag>SERVICES</Tag>
        <RevealText className="mt-5 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
          {"Our Field Execution Services"}
        </RevealText>
      </div>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" onMouseMove={handleMouse}>
          {services.map((svc, i) => (
            <BentoCard key={i} className="p-8 flex flex-col h-full" delay={i * 80}>
              <h3 className="text-xl font-light mb-3">{svc.title}</h3>
              <p className="text-sm text-black/45 leading-relaxed mb-6">{svc.desc}</p>
              
              <div className="mt-auto">
                <div className="text-xs text-black/30 tracking-widest uppercase mb-3">WHAT'S INCLUDED</div>
                <ul className="space-y-3 mb-8">
                  {svc.included.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-black/55">
                      <div className="w-1.5 h-1.5 rounded-full bg-black/25 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-5 border-t border-black/[0.06]">
                  <p className="text-xs text-black/45 font-medium"><span className="text-black/30 tracking-widest uppercase text-[10px] mr-2">FOR</span> {svc.who}</p>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <Tag>FAQ</Tag>
            <h2 className="mt-5 text-3xl md:text-4xl font-light tracking-tight leading-[1.05]">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4" onMouseMove={handleMouse}>
            {faqs.map((faq, i) => (
              <BentoCard key={i} className="" delay={i * 50}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full relative z-10 px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-light pr-4">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full border border-black/10 flex flex-shrink-0 items-center justify-center transition-transform duration-300" style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </button>
                <div 
                  className="px-6 overflow-hidden transition-all duration-500 ease-in-out relative z-10"
                  style={{ maxHeight: openFaq === i ? '200px' : '0px', opacity: openFaq === i ? 1 : 0, paddingBottom: openFaq === i ? '1.5rem' : '0' }}
                >
                  <p className="text-sm text-black/55 leading-relaxed">{faq.a}</p>
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
