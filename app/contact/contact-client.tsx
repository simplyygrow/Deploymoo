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
  const [error, setError] = useState("");

  // The form is submitted silently to our server-side API route (/api/contact),
  // which forwards the data to the Google Form. The Google Form is never
  // opened, embedded, or shown to visitors.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return; // block duplicate submissions while a request is in flight

    setSubmitting(true);
    setError("");

    try {
      const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => null);

      if (res.ok && data?.ok) {
        setSubmitted(true);
      } else {
        setError(
          data?.error ||
            "Something went wrong while submitting your request. Your details are still here — please try again."
        );
      }
    } catch {
      setError(
        "We could not reach the server. Your details are still here — please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-bg-page text-text-body min-h-screen font-sans antialiased">
      <MobileNav />

      {/* Hero Section */}
      <div className="pt-40 pb-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <Tag>CONTACT DEPLOYMO</Tag>
        <RevealText as="h1" className="mt-5 text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] text-text-heading">
          {"Get a Promotional Staffing\n& Manpower Quote in Mumbai."}
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
                    +91 8982652749
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
                  <a href="https://www.linkedin.com/company/workneed/" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-text-heading hover:text-emerald-500 transition-colors underline underline-offset-4">LinkedIn</a>
                </div>
              </BentoCard>

              <BentoCard className="p-6 md:p-8" delay={240}>
                <div className="text-xs font-mono text-text-muted tracking-widest uppercase mb-4">LOCATE US — MUMBAI OFFICE</div>
                <div className="overflow-hidden rounded-xl border border-border-custom">
                  <iframe
                    title="Deploymo office location map — Andheri West, Mumbai"
                    src="https://www.google.com/maps?q=Off%20Juhu%20Circle%2C%20New%20Link%20Road%2C%20Opp.%20The%20Club%2C%20New%20D.N.%20Nagar%2C%20Andheri%20West%2C%20Mumbai%20400053%2C%20India&output=embed"
                    className="w-full h-56 border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="mt-4 text-sm text-text-body/80 leading-relaxed">
                  <div className="font-medium text-text-heading">Deploymo</div>
                  Off Juhu Circle, New Link Road, Opp. The Club, New D.N. Nagar, Andheri West, Mumbai, Maharashtra 400053, India
                  <div className="mt-1"><a href="tel:+918982652749" className="hover:text-text-heading transition-colors">+91 8982652749</a></div>
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
                            <input required name="name" type="text" className="w-full bg-bg-page border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/65 focus:outline-none focus:border-text-heading/30 transition-colors" placeholder="Rajesh Sharma" />
                          </div>
                          <div>
                            <label className="block text-[11px] uppercase tracking-widest text-text-muted/70 mb-2 font-mono">Company / Agency Name</label>
                            <input required name="company" type="text" className="w-full bg-bg-page border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/65 focus:outline-none focus:border-text-heading/30 transition-colors" placeholder="Brand Activations Pvt Ltd" />
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] uppercase tracking-widest text-text-muted/70 mb-2 font-mono">Work Email</label>
                            <input required name="email" type="email" className="w-full bg-bg-page border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/65 focus:outline-none focus:border-text-heading/30 transition-colors" placeholder="rajesh@agency.com" />
                          </div>
                          <div>
                            <label className="block text-[11px] uppercase tracking-widest text-text-muted/70 mb-2 font-mono">Phone / Mobile</label>
                            <input required name="phone" type="tel" className="w-full bg-bg-page border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/65 focus:outline-none focus:border-text-heading/30 transition-colors" placeholder="+91 98200 00000" />
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[11px] uppercase tracking-widest text-text-muted/70 mb-2 font-mono">Primary Manpower Category</label>
                            <select required name="category" className="w-full bg-bg-page border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading focus:outline-none focus:border-text-heading/30 transition-colors appearance-none">
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
                             <input required name="headcount" type="text" className="w-full bg-bg-page border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/65 focus:outline-none focus:border-text-heading/30 transition-colors" placeholder="e.g. 5 Promoters, 1 Supervisor" />
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                             <label className="block text-[11px] uppercase tracking-widest text-text-muted/70 mb-2 font-mono">Location(s)</label>
                             <select required name="location" className="w-full bg-bg-page border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading focus:outline-none focus:border-text-heading/30 transition-colors appearance-none">
                               <option value="" className="bg-bg-card">Select region...</option>
                               <option value="Mumbai Metro (Andheri, BKC, Bandra, Powai, etc.)" className="bg-bg-card">Mumbai Metro (Andheri, BKC, Bandra, Powai, etc.)</option>
                               <option value="Navi Mumbai (Vashi, Nerul, Belapur, etc.)" className="bg-bg-card">Navi Mumbai (Vashi, Nerul, Belapur, etc.)</option>
                               <option value="Thane West & Surrounds" className="bg-bg-card">Thane West & Surrounds</option>
                               <option value="Multi-Location (Mumbai + Navi Mumbai + Thane)" className="bg-bg-card">Multi-Location (Mumbai + Navi Mumbai + Thane)</option>
                             </select>
                          </div>
                          <div>
                             <label className="block text-[11px] uppercase tracking-widest text-text-muted/70 mb-2 font-mono">Campaign Duration / Dates</label>
                             <input required name="duration" type="text" className="w-full bg-bg-page border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/65 focus:outline-none focus:border-text-heading/30 transition-colors" placeholder="e.g. 3 Days (Oct 15 - Oct 17)" />
                          </div>
                      </div>

                      <div className="space-y-4 pt-2">
                          <div>
                             <label className="block text-[11px] uppercase tracking-widest text-text-muted/70 mb-2 font-mono">Campaign Brief & Requirements</label>
                             <textarea required name="brief" className="w-full bg-bg-page border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/65 focus:outline-none focus:border-text-heading/30 transition-colors min-h-[80px]" placeholder="Describe the activation, target pitch, working hours, and profile requirements..."></textarea>
                          </div>
                      </div>

                      <div className="pt-4">
                         <button disabled={submitting} type="submit" className="w-full sm:w-auto px-8 py-3.5 bg-text-heading text-bg-page text-xs tracking-widest rounded-xl hover:opacity-90 transition-colors uppercase font-semibold cursor-pointer disabled:opacity-50">
                           {submitting ? "Submitting..." : "Submit Quote Request"}
                         </button>
                         {error && (
                           <p role="alert" className="mt-3 text-xs text-red-400 leading-relaxed">{error}</p>
                         )}
                      </div>
                   </form>
                 ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                           <svg className="w-7 h-7 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                        </div>
                        <h3 className="text-xl font-light mb-2 text-text-heading">Thank you for submitting this form.</h3>
                        <p className="text-sm text-text-body/70 max-w-sm leading-relaxed mb-6">
                           Our team has received your requirements and will get back to you shortly.
                        </p>
                        <a href="https://wa.me/message/4ZTBQI5MAZ6UP1" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-emerald-600 text-white text-xs font-semibold uppercase tracking-widest rounded-xl hover:bg-emerald-700 transition-colors">
                          WhatsApp Fast-Track →
                        </a>
                        <button type="button" onClick={() => { setSubmitted(false); setError(""); }} className="mt-5 text-xs text-text-muted underline underline-offset-4 hover:text-text-heading transition-colors cursor-pointer">
                          Submit another request
                        </button>
                    </div>
                 )}
               </BentoCard>
            </div>
        </div>
      </section>

      {/* Quote Guidance Content */}
      <section className="py-12 px-6 md:py-16 md:px-12 lg:px-20 border-t border-border-custom">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="text-xs font-mono text-text-muted tracking-widest uppercase mb-4">QUOTE GUIDANCE</div>
            <h2 className="text-2xl md:text-3xl font-light text-text-heading mb-6">
              Get a Promotional Staffing Quote for Mumbai, Navi Mumbai & Thane
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-text-body/75 leading-relaxed">
            <p>
              Deploymo&apos;s deployment team responds to every enquiry within 24 hours with a transparent, all-inclusive quotation. To price your campaign accurately, share your campaign dates, venue or area (for example Andheri, BKC, Vashi, or Thane West), headcount, and the staff profile you need — brand promoters, sales promoters, product sampling staff, event hostesses, registration teams, or field supervisors. Multi-location activations across Mumbai, Navi Mumbai, and Thane are quoted as one coordinated deployment, with a single point of accountability for your campaign.
            </p>
            <p>
              You can reach us through the quote request form above, by email at info@deploymo.com, or directly on WhatsApp at +91 8982652749 for urgent requirements. Our corporate and operations office in Andheri West handles daily deployments across the Mumbai metropolitan region, while our registered head office supports contracts and administration. Standard lead time is 24 to 48 hours from brief confirmation, and every deployment includes a Deploymo team leader supervising attendance, grooming, and on-ground performance.
            </p>
            <p className="md:col-span-2">
              Deploymo is a B2B promotional manpower and event staffing agency — we do not handle permanent recruitment, security staffing, or office administration requests. Our services cover brand promoters, sales promoters, event hostesses, exhibition staff, registration teams, ushers, sampling staff, roadshow teams, field supervisors, team leaders, mystery shoppers, and audit staff for corporate activations, retail campaigns, mall promotions, and trade shows. Browse the full list on our <a href="/services" className="underline underline-offset-4 text-text-heading hover:opacity-80 transition-opacity">services page</a> or read the <a href="/faq" className="underline underline-offset-4 text-text-heading hover:opacity-80 transition-opacity">frequently asked questions</a>.
            </p>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}

