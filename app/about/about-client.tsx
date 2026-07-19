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
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-text-muted bg-text-body/5">
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
    { n: "01", title: "Share Requirement",  desc: "Tell us about your project scale, location, scope of work, and timeline." },
    { n: "02", title: "Project Planning",   desc: "We analyze feasibility, allocate local resources, and define reporting structures." },
    { n: "03", title: "Team Deployment",    desc: "Personnel are screened, briefed, and mobilized across required regions." },
    { n: "04", title: "Field Execution",    desc: "Our on-ground teams execute tasks as per your predefined brand guidelines." },
    { n: "05", title: "Supervision & Coordination", desc: "Central ops monitor daily activity, troubleshoot issues, and ensure compliance." },
    { n: "06", title: "Project Reporting",  desc: "Receive actionable data, attendance metrics, and execution insights upon completion." }
  ];
  
  const clients = [
    "Brand Activation Agencies", 
    "BTL Marketing Agencies",
    "Experiential Marketing Agencies",
    "Event Management Companies", 
    "Market Research Companies", 
    "Retail Brands", 
    "FMCG Companies",
    "Consumer Electronics Brands",
    "Automobile Companies",
    "BFSI Companies",
    "Education Companies", 
    "D2C Brands",
    "Marketing Agencies",
    "Exhibition Companies",
    "Corporate Event Companies"
  ];

  return (
    <div className="bg-bg-page text-text-body min-h-screen font-sans antialiased">
      <MobileNav />

      {/* Hero */}
      <div className="pt-40 pb-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <Tag>ABOUT US</Tag>
        <RevealText className="mt-5 text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] text-text-heading">
          {"Your On-Ground\nField Execution Partner"}
        </RevealText>
      </div>

      {/* Positioning Section */}
      <section className="py-12 px-6 md:py-16 md:px-12 lg:px-20 border-t border-border-custom">
        <div className="max-w-4xl mx-auto text-center" onMouseMove={handleMouse}>
            <BentoCard className="p-6 md:p-12" delay={0}>
              <h3 className="text-xl md:text-2xl font-light mb-6 leading-relaxed text-text-heading">
                Deploymo helps companies quickly deploy managed on-ground teams for field marketing campaigns, retail projects, events, brand activations, surveys and multi-location field operations. 
              </h3>
              <p className="text-sm md:text-base text-text-body/70 leading-relaxed">
                Clients share their project location, team requirement, campaign duration and scope of work. Deploymo supports team sourcing, deployment, coordination, field supervision and project reporting based on the agreed scope. Teams can include promoters, field executives, brand ambassadors, surveyors, retail auditors, event staff, team leaders and field supervisors.
              </p>
            </BentoCard>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 px-6 md:py-24 md:px-12 lg:px-20 border-t border-border-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <Tag>PROCESS</Tag>
            <h2 className="mt-5 text-2xl md:text-4xl font-light tracking-tight leading-[1.05] text-text-heading">How We Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" onMouseMove={handleMouse}>
            {steps.map((step, i) => (
              <BentoCard key={step.n} className="p-6 md:p-8 flex flex-col min-h-[240px]" delay={i * 60}>
                <div className="font-pixel text-[11px] text-text-muted/40 tracking-widest mb-6 block">{step.n}</div>
                <h3 className="text-xl font-light mb-3 text-text-heading">{step.title}</h3>
                <p className="text-sm text-text-body/75 leading-relaxed">{step.desc}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 px-6 md:py-24 md:px-12 lg:px-20 border-t border-border-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 flex flex-col items-center">
            <Tag>PARTNERS</Tag>
            <h2 className="mt-5 text-2xl md:text-4xl font-light tracking-tight leading-[1.05] text-text-heading">Who We Work With</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
             {clients.map((client, i) => (
               <div key={i} className="px-5 py-3 rounded-xl border border-border-custom bg-bg-card text-sm text-text-heading shadow-sm">
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
