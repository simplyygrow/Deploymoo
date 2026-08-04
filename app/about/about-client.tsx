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

export default function AboutClient() {
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  const steps = [
    { n: "01", title: "Requirement Intake", desc: "Clients submit campaign dates, location (Mumbai/Navi Mumbai/Thane), staff count, and profile specifications." },
    { n: "02", title: "Promoter Shortlisting", desc: "We screen local candidates for communication skills, language fluency, and grooming standards." },
    { n: "03", title: "Campaign Briefing", desc: "Staff undergo pre-event product briefing, pitch practice, and dress code verification." },
    { n: "04", title: "On-Ground Deployment", desc: "Teams report on-site punctually with supervisor attendance checks and live reporting." },
    { n: "05", title: "Field Supervision", desc: "Supervisors oversee on-ground performance, smooth guest interactions, and pitch adherence." },
    { n: "06", title: "Campaign Closure", desc: "End-of-day attendance summary, sample distribution metrics, and operational reports delivered." }
  ];
  
  const targetClients = [
    "Brand Activation Agencies", 
    "BTL & Experiential Agencies",
    "Event Management Firms", 
    "FMCG & Beverage Brands", 
    "Consumer Electronics Companies",
    "Retail Chains & Malls", 
    "Exhibition & Trade Show Organizers",
    "D2C & Fashion Brands",
    "Corporate Event Planners"
  ];

  return (
    <div className="bg-bg-page text-text-body min-h-screen font-sans antialiased">
      <MobileNav />

      {/* Hero */}
      <div className="pt-40 pb-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <Tag>ABOUT DEPLOYMO</Tag>
        <RevealText className="mt-5 text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] text-text-heading">
          {"Mumbai's Specialized Promotional\n& Event Staffing Partner"}
        </RevealText>
      </div>

      {/* Corporate Overview */}
      <section className="py-12 px-6 md:py-16 md:px-12 lg:px-20 border-t border-border-custom">
        <div className="max-w-4xl mx-auto" onMouseMove={handleMouse}>
            <BentoCard className="p-6 md:p-12" delay={0}>
              <h3 className="text-xl md:text-2xl font-light mb-6 leading-relaxed text-text-heading">
                Deploymo is a specialized B2B promotional manpower and event staffing agency based in Mumbai, supplying trained field personnel across Mumbai, Navi Mumbai, and Thane.
              </h3>
              <p className="text-sm md:text-base text-text-body/70 leading-relaxed mb-6">
                We supply brand promoters, sales promoters, event hostesses, product sampling staff, registration teams, and field supervisors for marketing activations, exhibitions, mall campaigns, and corporate events.
              </p>
              <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 text-xs text-text-body/80 leading-relaxed">
                <strong className="text-amber-600 dark:text-amber-400 font-semibold block mb-1">Agency Focus Note:</strong>
                Deploymo operates exclusively in promotional manpower and event staffing. We do not provide permanent HR recruitment, corporate office placements, or security guard services.
              </div>
            </BentoCard>
        </div>
      </section>

      {/* Operational Process */}
      <section className="py-16 px-6 md:py-24 md:px-12 lg:px-20 border-t border-border-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <Tag>OPERATIONAL QUALITY</Tag>
            <h2 className="mt-5 text-2xl md:text-4xl font-light tracking-tight leading-[1.05] text-text-heading">Our 6-Step Execution Standard</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" onMouseMove={handleMouse}>
            {steps.map((step, i) => (
              <BentoCard key={step.n} className="p-6 md:p-8 flex flex-col min-h-[240px]" delay={i * 60}>
                <div className="font-mono text-[11px] text-text-muted/60 tracking-widest mb-6 block">{step.n}</div>
                <h3 className="text-xl font-light mb-3 text-text-heading">{step.title}</h3>
                <p className="text-sm text-text-body/75 leading-relaxed">{step.desc}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="py-16 px-6 md:py-24 md:px-12 lg:px-20 border-t border-border-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 flex flex-col items-center">
            <Tag>CLIENTELE</Tag>
            <h2 className="mt-5 text-2xl md:text-4xl font-light tracking-tight leading-[1.05] text-text-heading">Who We Partner With</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
             {targetClients.map((client, i) => (
               <div key={i} className="px-5 py-3 rounded-xl border border-border-custom bg-bg-card text-xs md:text-sm text-text-heading font-medium shadow-sm">
                 {client}
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

