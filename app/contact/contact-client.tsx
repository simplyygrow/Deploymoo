"use client"

import React, { useRef, useEffect, useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { SharedFooter } from "@/components/shared-footer"
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

export default function ContactClient() {
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeQ4K8C7APfJc1S2-sVs-cXYS1bwi65l0Ad6ckJh6IO1j4PmQ/formResponse";
    const form = e.currentTarget;
    const formData = new FormData(form);
    const params = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      params.append(key, value.toString());
    }

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });
    } catch (err) {
      console.error("Google form submission error:", err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-bg-page text-text-body min-h-screen font-sans antialiased">
      <MobileNav />

      {/* Hero Section */}
      <div className="pt-40 pb-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <Tag>CONTACT DEPLOYMO</Tag>
        <RevealText className="mt-5 text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] text-text-heading">
          {"Get a Promotional Staffing\n& Manpower Quotation."}
        </RevealText>
        <p className="mt-6 text-base text-text-body/70 max-w-2xl leading-relaxed">
          Share your campaign dates, location (Mumbai, Navi Mumbai, Thane), and headcount requirements. Our deployment team will provide a transparent proposal within 24 hours.
        </p>
      </div>

      <section className="py-12 px-6 md:py-16 md:px-12 lg:px-20 border-t border-border-custom">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8" onMouseMove={handleMouse}>
            
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-4">
              
              <BentoCard className="p-6 md:p-8" delay={0}>
                <div className="text-xs font-mono text-text-muted tracking-widest uppercase mb-4">CORPORATE & OPERATIONS OFFICE</div>
                <p className="text-sm text-text-body/80 leading-relaxed mb-6">
                  Off Juhu Circle, New Link Road,<br/>
                  Opp. The Club, New D.N. Nagar,<br/>
                  Andheri West, Mumbai,<br/>
                  Maharashtra 400053, India
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm font-medium text-text-heading">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    +91 6261652749
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-text-heading">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg>
                    info@deploymo.com
                  </div>
                </div>
              </BentoCard>

              <BentoCard className="p-6 md:p-8" delay={80}>
                <div className="text-xs font-mono text-text-muted tracking-widest uppercase mb-4">REGISTERED HEAD OFFICE</div>
                <p className="text-sm text-text-body/80 leading-relaxed mb-4">
                  Near Mundipura Masjid, Ramganj Ward,<br/>
                  Parshad Office, Ward No. 43,<br/>
                  Khandwa, Madhya Pradesh 450001, India
                </p>
                <div className="flex items-center gap-3 text-sm font-medium text-text-heading">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  +91 8982652749
                </div>
              </BentoCard>

              <BentoCard className="p-6 md:p-8" delay={160}>
                <div className="text-xs font-mono text-text-muted tracking-widest uppercase mb-4">DIRECT CHANNELS</div>
                <div className="flex flex-wrap gap-4">
                  <a href="https://wa.me/message/4ZTBQI5MAZ6UP1" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-text-heading hover:text-emerald-500 transition-colors underline underline-offset-4">WhatsApp Direct →</a>
                  <a href="https://www.instagram.com/deploy.mo" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-text-heading hover:text-emerald-500 transition-colors underline underline-offset-4">Instagram</a>
                  <a href="https://www.linkedin.com/company/deploymo" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-text-heading hover:text-emerald-500 transition-colors underline underline-offset-4">LinkedIn</a>
                </div>
              </BentoCard>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
               <BentoCard className="p-6 md:p-10 h-full" delay={120}>
                 <div className="text-xs font-mono text-text-muted tracking-widest uppercase mb-6">CAMPAIGN STAFFING QUOTE REQUEST</div>
                 {!submitted ? (
                   <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] uppercase tracking-widest text-text-muted/70 mb-2 font-mono">Your Name</label>
                            <input required name="entry.177599544" type="text" className="w-full bg-bg-page border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/65 focus:outline-none focus:border-text-heading/30 transition-colors" placeholder="Rajesh Sharma" />
                          </div>
                          <div>
                            <label className="block text-[11px] uppercase tracking-widest text-text-muted/70 mb-2 font-mono">Company / Agency Name</label>
                            <input required name="entry.1501675554" type="text" className="w-full bg-bg-page border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/65 focus:outline-none focus:border-text-heading/30 transition-colors" placeholder="Brand Activations Pvt Ltd" />
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] uppercase tracking-widest text-text-muted/70 mb-2 font-mono">Work Email</label>
                            <input required name="entry.599577987" type="email" className="w-full bg-bg-page border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/65 focus:outline-none focus:border-text-heading/30 transition-colors" placeholder="rajesh@agency.com" />
                          </div>
                          <div>
                            <label className="block text-[11px] uppercase tracking-widest text-text-muted/70 mb-2 font-mono">Phone / Mobile</label>
                            <input required name="entry.117751479" type="tel" className="w-full bg-bg-page border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/65 focus:outline-none focus:border-text-heading/30 transition-colors" placeholder="+91 98200 00000" />
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] uppercase tracking-widest text-text-muted/70 mb-2 font-mono">Primary Manpower Category</label>
                            <select required name="entry.2076661831" className="w-full bg-bg-page border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading focus:outline-none focus:border-text-heading/30 transition-colors appearance-none">
                              <option value="" className="bg-bg-card">Select category...</option>
                              <option value="Brand Promoters" className="bg-bg-card">Brand Promoters</option>
                              <option value="Sales Promoters" className="bg-bg-card">Sales Promoters</option>
                              <option value="Product Sampling Staff" className="bg-bg-card">Product Sampling Staff</option>
                              <option value="Event Hostesses & Ushers" className="bg-bg-card">Event Hostesses & Ushers</option>
                              <option value="Exhibition & Registration Staff" className="bg-bg-card">Exhibition & Registration Staff</option>
                              <option value="Field Supervisors & Team Leaders" className="bg-bg-card">Field Supervisors & Team Leaders</option>
                              <option value="Mystery Shoppers & Audit Staff" className="bg-bg-card">Mystery Shoppers & Audit Staff</option>
                              <option value="In-Store & Mall Promoters" className="bg-bg-card">In-Store & Mall Promoters</option>
                            </select>
                          </div>
                          <div>
                             <label className="block text-[11px] uppercase tracking-widest text-text-muted/70 mb-2 font-mono">Staff Count Required</label>
                             <input required name="entry.4859723" type="text" className="w-full bg-bg-page border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/65 focus:outline-none focus:border-text-heading/30 transition-colors" placeholder="e.g. 5 Promoters, 1 Supervisor" />
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                             <label className="block text-[11px] uppercase tracking-widest text-text-muted/70 mb-2 font-mono">Location(s)</label>
                             <select required name="entry.158642125" className="w-full bg-bg-page border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading focus:outline-none focus:border-text-heading/30 transition-colors appearance-none">
                               <option value="" className="bg-bg-card">Select region...</option>
                               <option value="Mumbai Metro (Andheri, BKC, Bandra, Powai, etc.)" className="bg-bg-card">Mumbai Metro (Andheri, BKC, Bandra, Powai, etc.)</option>
                               <option value="Navi Mumbai (Vashi, Nerul, Belapur, etc.)" className="bg-bg-card">Navi Mumbai (Vashi, Nerul, Belapur, etc.)</option>
                               <option value="Thane West & Surrounds" className="bg-bg-card">Thane West & Surrounds</option>
                               <option value="Multi-Location (Mumbai + Navi Mumbai + Thane)" className="bg-bg-card">Multi-Location (Mumbai + Navi Mumbai + Thane)</option>
                             </select>
                          </div>
                          <div>
                             <label className="block text-[11px] uppercase tracking-widest text-text-muted/70 mb-2 font-mono">Campaign Duration / Dates</label>
                             <input required name="entry.1369539899" type="text" className="w-full bg-bg-page border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/65 focus:outline-none focus:border-text-heading/30 transition-colors" placeholder="e.g. 3 Days (Oct 15 - Oct 17)" />
                          </div>
                      </div>

                      <div className="space-y-4 pt-2">
                          <div>
                             <label className="block text-[11px] uppercase tracking-widest text-text-muted/70 mb-2 font-mono">Campaign Brief & Requirements</label>
                             <textarea required name="entry.950539141" className="w-full bg-bg-page border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/65 focus:outline-none focus:border-text-heading/30 transition-colors min-h-[80px]" placeholder="Describe the activation, target pitch, working hours, and profile requirements..."></textarea>
                          </div>
                      </div>

                      <div className="pt-4">
                         <button disabled={submitting} type="submit" className="w-full sm:w-auto px-8 py-3.5 bg-text-heading text-bg-page text-xs tracking-widest rounded-xl hover:opacity-90 transition-colors uppercase font-semibold cursor-pointer disabled:opacity-50">
                           {submitting ? "Submitting..." : "Submit Quote Request"}
                         </button>
                      </div>
                   </form>
                 ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                           <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <h3 className="text-xl font-light mb-2 text-text-heading">Quotation Inquiry Received</h3>
                        <p className="text-sm text-text-body/70 max-w-sm leading-relaxed mb-6">
                           Thank you for submitting your campaign requirements. Deploymo&apos;s Operations team will review your headcount &amp; timeline and send a proposal within 24 hours.
                        </p>
                        <a href="https://wa.me/message/4ZTBQI5MAZ6UP1" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-emerald-600 text-white text-xs font-semibold uppercase tracking-widest rounded-xl hover:bg-emerald-700 transition-colors">
                          WhatsApp Fast-Track →
                        </a>
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

