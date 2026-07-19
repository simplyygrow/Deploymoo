"use client"

import React, { useRef, useEffect, useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { SharedFooter } from "@/components/shared-footer"
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

export default function ContactClient() {
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-[#F5F4F0] text-[#111] min-h-screen font-sans antialiased">
      <MobileNav />

      {/* Hero Section Spacer */}
      <div className="pt-40 pb-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <Tag>CONTACT</Tag>
        <RevealText className="mt-5 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
          {"Need a Team On-Ground?\nShare Your Project Requirement."}
        </RevealText>
      </div>

      <section className="py-16 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8" onMouseMove={handleMouse}>
            
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-4">
              
              <BentoCard className="p-8" delay={0}>
                <div className="text-xs text-black/30 tracking-widest uppercase mb-6">HEAD OFFICE</div>
                <p className="text-sm text-black/60 leading-relaxed mb-6">
                  Near Mundipura Masjid, Ramganj Ward<br/>
                  Parshad Office, Ward No. 43,<br/>
                  Khandwa, Madhya Pradesh 450001,<br/>
                  India
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-[#111]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    +91 8982652749
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#111]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg>
                    info@deploymo.com
                  </div>
                </div>
              </BentoCard>

              <BentoCard className="p-8" delay={80}>
                <div className="text-xs text-black/30 tracking-widest uppercase mb-6">CORPORATE / OPS OFFICE</div>
                <p className="text-sm text-black/60 leading-relaxed mb-6">
                  Off Juhu Circle, New Link Road,<br/>
                  Opp. The Club New D.N. Nagar,<br/>
                  Andheri West, Mumbai,<br/>
                  Maharashtra 400053, India
                </p>
                <div className="flex items-center gap-3 text-sm text-[#111]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  +91 6261652749
                </div>
              </BentoCard>

              <BentoCard className="p-8" delay={160}>
                <div className="text-xs text-black/30 tracking-widest uppercase mb-6">SOCIAL</div>
                <div className="flex space-x-6">
                  <a href="https://wa.me/message/4ZTBQI5MAZ6UP1" target="_blank" rel="noopener noreferrer" className="text-sm text-black/60 hover:text-[#111] transition-colors underline underline-offset-4">WhatsApp</a>
                  <a href="https://www.instagram.com/deploy.mo" target="_blank" rel="noopener noreferrer" className="text-sm text-black/60 hover:text-[#111] transition-colors underline underline-offset-4">Instagram</a>
                  <a href="https://www.linkedin.com/company/deploymo" target="_blank" rel="noopener noreferrer" className="text-sm text-black/60 hover:text-[#111] transition-colors underline underline-offset-4">LinkedIn</a>
                </div>
              </BentoCard>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
               <BentoCard className="p-8 md:p-10 h-full" delay={120}>
                 <div className="text-xs text-black/30 tracking-widest uppercase mb-8">QUOTE REQUEST</div>
                 {!submitted ? (
                   <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] uppercase tracking-widest text-black/50 mb-2">Full Name</label>
                            <input required type="text" className="w-full bg-[#fcfcfc] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-black/25 focus:outline-none focus:border-black/30 transition-colors" placeholder="John Doe" />
                          </div>
                          <div>
                            <label className="block text-[11px] uppercase tracking-widest text-black/50 mb-2">Company Name</label>
                            <input required type="text" className="w-full bg-[#fcfcfc] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-black/25 focus:outline-none focus:border-black/30 transition-colors" placeholder="Acme Inc." />
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] uppercase tracking-widest text-black/50 mb-2">Work Email</label>
                            <input required type="email" className="w-full bg-[#fcfcfc] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-black/25 focus:outline-none focus:border-black/30 transition-colors" placeholder="john@company.com" />
                          </div>
                          <div>
                            <label className="block text-[11px] uppercase tracking-widest text-black/50 mb-2">Phone Number</label>
                            <input required type="tel" className="w-full bg-[#fcfcfc] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-black/25 focus:outline-none focus:border-black/30 transition-colors" placeholder="+91 90000 00000" />
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] uppercase tracking-widest text-black/50 mb-2">Project Type</label>
                            <select required className="w-full bg-[#fcfcfc] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] focus:outline-none focus:border-black/30 transition-colors appearance-none flex-1">
                              <option value="">Select a type...</option>
                              <option>Field Marketing</option>
                              <option>Promoter Staffing</option>
                              <option>Event Staffing</option>
                              <option>Brand Activation</option>
                              <option>Retail Audit</option>
                              <option>Field Survey</option>
                              <option>Managed Field Team</option>
                              <option>Other</option>
                            </select>
                          </div>
                          <div>
                             <label className="block text-[11px] uppercase tracking-widest text-black/50 mb-2">Number of People Required</label>
                             <input type="text" className="w-full bg-[#fcfcfc] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-black/25 focus:outline-none focus:border-black/30 transition-colors" placeholder="e.g. 10 - 50" />
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                             <label className="block text-[11px] uppercase tracking-widest text-black/50 mb-2">Project Start Date</label>
                             <input type="text" className="w-full bg-[#fcfcfc] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-black/25 focus:outline-none focus:border-black/30 transition-colors" placeholder="MM/YYYY or ASAP" />
                          </div>
                          <div>
                             <label className="block text-[11px] uppercase tracking-widest text-black/50 mb-2">Project Duration</label>
                             <input type="text" className="w-full bg-[#fcfcfc] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-black/25 focus:outline-none focus:border-black/30 transition-colors" placeholder="e.g. 3 Months" />
                          </div>
                      </div>

                      <div className="space-y-4 pt-2">
                          <div>
                             <label className="block text-[11px] uppercase tracking-widest text-black/50 mb-2">Project Location(s)</label>
                             <input required type="text" className="w-full bg-[#fcfcfc] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-black/25 focus:outline-none focus:border-black/30 transition-colors" placeholder="Cities or Regions" />
                          </div>
                          
                          <div>
                             <label className="block text-[11px] uppercase tracking-widest text-black/50 mb-2">Scope of Work</label>
                             <textarea required className="w-full bg-[#fcfcfc] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-black/25 focus:outline-none focus:border-black/30 transition-colors min-h-[60px]" placeholder="Briefly describe what the team needs to do..."></textarea>
                          </div>

                          <div>
                             <label className="block text-[11px] uppercase tracking-widest text-black/50 mb-2">Reporting Requirements</label>
                             <textarea className="w-full bg-[#fcfcfc] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-black/25 focus:outline-none focus:border-black/30 transition-colors min-h-[50px]" placeholder="KPIs and metric tracking..."></textarea>
                          </div>

                          <div>
                             <label className="block text-[11px] uppercase tracking-widest text-black/50 mb-2">Additional Details</label>
                             <textarea className="w-full bg-[#fcfcfc] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-black/25 focus:outline-none focus:border-black/30 transition-colors min-h-[50px]" placeholder="Anything else we should know..."></textarea>
                          </div>
                      </div>

                      <div className="pt-4">
                         <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-[#111] text-white text-sm rounded-xl hover:bg-[#333] transition-colors tracking-widest font-medium">
                           REQUEST DEPLOYMENT QUOTE
                         </button>
                      </div>
                   </form>
                 ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                           <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <h3 className="text-xl font-light mb-2">Requirement Received</h3>
                        <p className="text-sm text-black/45 max-w-sm">
                           Thank you for sharing your project details. Our deployment team will review and get back to you within 24 hours.
                        </p>
                    </div>
                 )}
               </BentoCard>
            </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
