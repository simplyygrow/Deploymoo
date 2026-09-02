"use client"

import React, { useRef, useEffect, useState, useCallback } from "react"
import { IntroAnimation, INTRO_DURATION_MS } from "@/components/intro-animation"
import { PixelIcon } from "@/components/pixel-icon"
import { LiveAgentFeed, LiveAgentCounter } from "@/components/live-agent-feed"
import { RevealText } from "@/components/reveal-text"
import { StackingAgentCards } from "@/components/stacking-agent-cards"
import { MobileNav } from "@/components/mobile-nav"
import { DevExSection } from "@/components/devex-section"
import { SharedFooter } from "@/components/shared-footer"
import { SharedCta } from "@/components/shared-cta"
import { HomepageSchemas } from "@/components/homepage-schemas"
import Link from "next/link"

// ─── Intersection Observer hook ──────────────────────────────────────────────
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

// ─── Bento card ──────────────────────────────────────────────────────────────
function BentoCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView(0.1)
  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl border border-border-custom bg-bg-card overflow-hidden transition-all duration-700 hover:border-text-heading/15 hover:bg-bg-page/50 ${className}`}
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

// ─── Pill tag ─────────────────────────────────────────────────────────────────
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-mono text-text-muted bg-text-body/5 uppercase">
      {children}
    </span>
  )
}

const CORE_SERVICES = [
  "Brand Promoters", "Sales Promoters", "Product Sampling Staff", "Event Hostesses",
  "Exhibition Staff", "Registration Staff", "Mall Promoters", "Roadshow Staff",
  "Ushering Staff", "Flier Distribution Staff", "Field Supervisors", "Team Leaders",
  "Mystery Shoppers", "Audit Staff", "In-Store Promoters"
]

export default function DeploymoHomePage() {
  const [heroReady, setHeroReady] = useState(false)
  const [videoZoomDone, setVideoZoomDone] = useState(false)
  const handleIntroDone = useCallback(() => {
    setHeroReady(true)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setVideoZoomDone(true), INTRO_DURATION_MS + 100)
    return () => clearTimeout(t)
  }, [])

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  return (
    <main className="bg-bg-page text-text-body min-h-screen font-sans antialiased" role="main">
      <HomepageSchemas />

      {/* ── INTRO ANIMATION ───────────────────────────────────────────────── */}
      <IntroAnimation onDone={handleIntroDone} />

      {/* ── STICKY NAV ────────────────────────────────────────────────────── */}
      <MobileNav />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden" aria-label="Hero - Deploymo Promotional Staffing Agency Mumbai">
        <img
          src="/images/home-hero.jpeg"
          alt="Deploymo professional promotional staffing team in Mumbai - trained brand promoters, event hostesses and field staff ready for deployment"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 dark:opacity-40"
          loading="eager"
          fetchPriority="high"
          style={{
            objectPosition: "center 30%",
            transform: videoZoomDone ? "scale(1)" : "scale(1.08)",
            transition: videoZoomDone ? "transform 4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none hero-rising-gradient" style={{ height: "65%" }} />
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: "20%", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", maskImage: "linear-gradient(to top, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: "38%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", maskImage: "linear-gradient(to top, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)" }} />

        <div className="h-20" />

        <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col px-6 md:px-12 pb-12 max-w-4xl">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono tracking-widest text-text-muted bg-bg-card border border-border-custom uppercase">
              B2B Promotional Manpower & Event Staffing
            </span>
          </div>

          <h1
            className="text-3xl sm:text-5xl md:text-7xl font-light text-text-heading leading-[1.05] tracking-tight mb-8"
            style={{
              fontFamily: '"IBM Plex Sans", sans-serif',
              opacity: heroReady ? 1 : 0,
              filter: heroReady ? "blur(0px)" : "blur(24px)",
              transform: heroReady ? "translateY(0px)" : "translateY(32px)",
              transition: "opacity 1.5s cubic-bezier(0.16,1,0.3,1) 0.3s, filter 1.5s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 1.5s cubic-bezier(0.16,1,0.3,1) 0.3s",
            }}
          >
            Promotional Staffing.<br />Event Manpower.<br />Deployed Across Mumbai.
          </h1>

          <p className="text-sm md:text-base text-text-body/80 max-w-2xl leading-relaxed mb-8">
            Deploymo supplies trained brand promoters, sales promoters, hostesses, product sampling staff, and event manpower for corporate activations, exhibitions, and retail campaigns in Mumbai, Navi Mumbai, and Thane.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-text-heading text-bg-page text-xs tracking-widest rounded-xl hover:opacity-90 transition-all font-semibold uppercase"
            >
              Get a Quote
            </Link>
            <a
              href="https://wa.me/message/4ZTBQI5MAZ6UP1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-border-custom text-text-heading text-xs tracking-widest rounded-xl hover:border-text-heading/30 hover:bg-text-body/[0.04] transition-all font-semibold uppercase flex items-center gap-2"
            >
              <span>WhatsApp Direct</span> →
            </a>
          </div>

          <div className="flex gap-8 sm:gap-12 pt-6 border-t border-border-custom/50">
            {[
              { value: "150+", label: "Field Staff Deployed" },
              { value: "100%", label: "Punctuality Guarantee" },
              { value: "3 Regions", label: "Mumbai • Navi Mumbai • Thane" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  opacity: heroReady ? 1 : 0,
                  filter: heroReady ? "blur(0px)" : "blur(16px)",
                  transform: heroReady ? "translateY(0px)" : "translateY(20px)",
                  transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${120 + i * 80}ms, filter 0.8s cubic-bezier(0.16,1,0.3,1) ${120 + i * 80}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${120 + i * 80}ms`,
                }}
              >
                <div className="text-2xl sm:text-3xl text-text-heading font-light tracking-tight">{stat.value}</div>
                <div className="text-[11px] text-text-muted tracking-widest uppercase mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM OVERVIEW (bento) ──────────────────────────────────────── */}
      <section id="platform" className="py-16 px-6 md:py-32 md:px-12 lg:px-20" aria-label="Why Choose Deploymo - Platform Overview">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <PixelIcon type="platform" size={40} />
            <div className="mt-4"><Tag>WHY DEPLOYMO</Tag></div>
            <RevealText className="mt-5 text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
              {"Professional event staffing\n& promotional manpower."}
            </RevealText>
          </div>

          <div className="grid grid-cols-12 grid-rows-auto gap-3" onMouseMove={handleMouse}>
            <BentoCard className="col-span-12 p-8 min-h-[200px] flex flex-col justify-between relative overflow-hidden" delay={0}>

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl border border-border-custom bg-bg-card/60 flex items-center justify-center mb-6" style={{ backdropFilter: "blur(8px)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="text-xl font-light mb-3 text-text-heading">Managed Field Manpower</h3>
                <p className="text-sm text-text-body/70 leading-relaxed max-w-lg">
                  Every promoter, hostess, and field executive is screened for communication skills, grooming, and campaign readiness. Supervised on-ground execution for total operational peace of mind.
                </p>
              </div>
            </BentoCard>

            <BentoCard className="col-span-12 md:col-span-4 p-6 md:p-8 min-h-[200px]" delay={120}>
              <div className="w-10 h-10 rounded-xl border border-border-custom flex items-center justify-center mb-5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3 className="text-lg font-light mb-2 text-text-heading">Rapid Deployment</h3>
              <p className="text-sm text-text-body/70 leading-relaxed">Turnkey staffing fulfillment within 24 to 48 hours for urgent marketing activations and corporate events.</p>
            </BentoCard>

            <BentoCard className="col-span-12 md:col-span-4 p-6 md:p-8 min-h-[200px]" delay={160}>
              <div className="w-10 h-10 rounded-xl border border-border-custom flex items-center justify-center mb-5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="text-lg font-light mb-2 text-text-heading">Tri-Region Coverage</h3>
              <p className="text-sm text-text-body/70 leading-relaxed">Dedicated local manpower pools across Mumbai, Navi Mumbai, and Thane West for seamless logistics.</p>
            </BentoCard>

            <BentoCard className="col-span-12 md:col-span-4 p-6 md:p-8 min-h-[200px]" delay={200}>
              <div className="w-10 h-10 rounded-xl border border-border-custom flex items-center justify-center mb-5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-lg font-light mb-2 text-text-heading">Supervised Quality</h3>
              <p className="text-sm text-text-body/70 leading-relaxed">Experienced Team Leaders monitor dress code compliance, pitch accuracy, and daily attendance logs.</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ── STAFFING CATEGORIES ───────────────────────────────────────────── */}
      <section id="agents" className="py-16 px-6 md:py-32 md:px-12 lg:px-20 border-t border-border-custom" aria-label="Manpower Categories - Specialized Promotional Staff">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <PixelIcon type="agents" size={40} />
              <div className="mt-4"><Tag>MANPOWER CATEGORIES</Tag></div>
              <RevealText className="mt-5 text-3xl md:text-5xl font-light tracking-tight leading-[1.05]">
                {"Specialized staff for\nevery marketing campaign."}
              </RevealText>
            </div>
            <p className="text-sm text-text-body/70 leading-relaxed max-w-xs">
              From corporate exhibitions to retail sampling campaigns, we match trained staff to your exact brand tone.
            </p>
          </div>

          <StackingAgentCards />
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section id="workflow" className="py-16 px-6 md:py-32 md:px-12 lg:px-20 border-t border-border-custom overflow-hidden" aria-label="How It Works - Campaign to Deployment Process">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <PixelIcon type="workflow" size={40} />
            <div className="mt-4"><Tag>PROCESS</Tag></div>
            <RevealText className="mt-5 text-3xl md:text-5xl font-light tracking-tight leading-[1.05]">
              {"From campaign brief\nto on-ground execution."}
            </RevealText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3" onMouseMove={handleMouse}>
            {[
              { n: "01", title: "Share Brief", desc: "Submit project dates, location (Mumbai/Navi Mumbai/Thane), headcount required, and profile specs.", delay: 0, img: "/images/process-share-brief.jpeg" },
              { n: "02", title: "Staff Shortlisting", desc: "We screen and select appropriate promoters, hostesses, or field staff from our verified database.", delay: 80, img: "/images/process-staff-shortlisting.jpeg" },
              { n: "03", title: "Briefing & Check", desc: "Staff are briefed on product messaging, dress codes, and operational targets prior to deployment.", delay: 140, img: "/images/process-briefing-check.jpeg" },
              { n: "04", title: "Field Execution", desc: "Supervised on-ground deployment with real-time reporting and attendance verification.", delay: 200, img: "/images/process-field-execution.jpeg" },
            ].map((step) => (
              <BentoCard key={step.n} className="relative overflow-hidden flex flex-col min-h-[320px]" delay={step.delay}>
                <div className="absolute inset-x-0 top-0 h-56 pointer-events-none">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover object-top opacity-60"
                    style={{
                      maskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 80%)",
                      WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 80%)",
                    }}
                  />
                </div>
                <div className="relative z-10 p-5 md:p-7">
                  <span className="font-mono text-[11px] text-text-muted/60 tracking-widest block">{step.n}</span>
                </div>
                <div className="relative z-10 px-5 pb-5 md:px-7 md:pb-7 mt-auto pt-16">
                  <h3 className="text-xl font-light mb-3 text-text-heading">{step.title}</h3>
                  <p className="text-xs text-text-body/70 leading-relaxed">{step.desc}</p>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE SERVICES & SERVICE SCOPE EXCLUSION ────────────────────────── */}
      <section id="services" className="py-16 px-6 md:py-32 md:px-12 lg:px-20 border-t border-border-custom" aria-label="15 Specialized Promotional and Event Staffing Services">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <PixelIcon type="integrations" size={40} />
            <div className="mt-4"><Tag>SERVICE SCOPE</Tag></div>
            <RevealText className="mt-5 text-3xl md:text-5xl font-light tracking-tight leading-[1.05]">
              {"15 specialized promotional\n& event staffing services."}
            </RevealText>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-12">
            {CORE_SERVICES.map((service, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-border-custom bg-bg-card hover:border-text-heading/20 transition-all">
                <span className="text-xs font-mono text-text-muted/60 block mb-2">0{idx + 1}</span>
                <span className="text-xs font-medium text-text-heading">{service}</span>
              </div>
            ))}
          </div>

          {/* Explicit Scope Exclusions Alert Card */}
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 uppercase tracking-widest font-semibold block">
                Strict Agency Scope Policy
              </span>
              <h4 className="text-base font-medium text-text-heading">
                Promotional & Event Manpower Specialist Agency
              </h4>
              <p className="text-xs text-text-body/70 max-w-2xl leading-relaxed">
                Deploymo exclusively provides short-term promotional staff, brand promoters, event hostesses, sampling teams, and field execution personnel. We do NOT provide permanent HR recruitment, corporate office staffing, or security services.
              </p>
            </div>
            <Link
              href="/services"
              className="px-6 py-2.5 rounded-xl border border-border-custom text-xs font-medium text-text-heading hover:bg-bg-card transition-colors shrink-0"
            >
              View Full Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── OPERATIONAL EXCELLENCE ────────────────────────────────────────── */}
      <DevExSection />

      {/* ── MARQUEE CAPABILITIES & LOCATIONS ──────────────────────────────── */}
      <section className="py-0 border-t border-border-custom overflow-hidden select-none">
        <div className="flex border-b border-border-custom" style={{ animation: "marqueeLeft 28s linear infinite" }}>
          {[...Array(3)].map((_, rep) => (
            <div key={rep} className="flex shrink-0">
              {["Brand Promoters", "Event Hostesses", "Product Sampling", "Exhibition Staff", "Registration Teams", "Ushering Staff", "Mall Activations", "Roadshows", "Field Supervisors", "Team Leaders"].map((cap) => (
                <div key={cap} className="flex items-center gap-6 px-10 py-5 border-r border-border-custom shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-muted/40 shrink-0" />
                  <span className="text-sm text-text-body/75 whitespace-nowrap tracking-wide">{cap}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex" style={{ animation: "marqueeRight 22s linear infinite" }}>
          {[...Array(3)].map((_, rep) => (
            <div key={rep} className="flex shrink-0">
              {["Mumbai Metro", "Navi Mumbai", "Thane West", "BKC Bandra", "Andheri West", "Powai", "Lower Parel", "Goregaon East", "Vashi", "Malad Mindspace"].map((cap) => (
                <div key={cap} className="flex items-center gap-6 px-10 py-5 border-r border-border-custom shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-muted/20 shrink-0" />
                  <span className="text-sm text-text-body/50 whitespace-nowrap tracking-wide">{cap}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── LIVE DEPLOYMENT FEED ───────────────────────────────────────────── */}
      <section id="live" className="py-16 px-6 md:py-32 md:px-12 lg:px-20 border-t border-border-custom" aria-label="Live Deployment Feed - Active Field Teams in Mumbai">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <PixelIcon type="agents" size={40} />
              <div className="mt-4"><Tag>ON-GROUND OPERATIONS</Tag></div>
              <RevealText className="mt-5 text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
                {"Active field teams\nacross Mumbai region."}
              </RevealText>
              <p className="mt-6 text-sm text-text-body/70 leading-relaxed max-w-sm">
                Our promotional staff and supervisors operate across major commercial hubs, shopping malls, exhibition centers, and high-footfall venues.
              </p>
              <div className="mt-10 flex items-end gap-2">
                <LiveAgentCounter />
                <span className="text-text-muted text-xs mb-1 tracking-wide uppercase font-mono">active promoters deployed</span>
              </div>
            </div>
            <div className="relative">
              <LiveAgentFeed />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ & ENQUIRY PREPARATION ──────────────────────────────────────── */}
      <section id="faq" className="py-16 px-6 md:py-32 md:px-12 lg:px-20 border-t border-border-custom" aria-label="Frequently Asked Questions About Deploymo Staffing Services">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <PixelIcon type="pricing" size={40} />
            <div className="mt-4"><Tag>FREQUENTLY ASKED QUESTIONS</Tag></div>
            <RevealText className="mt-5 text-3xl md:text-5xl font-light tracking-tight leading-[1.05]">
              {"Everything you need to know."}
            </RevealText>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What regions in Mumbai do you cover for promotional staffing?",
                a: "Deploymo covers all major areas across Mumbai (Andheri, Bandra, BKC, Powai, Goregaon, Malad, Borivali, Lower Parel), Navi Mumbai (Vashi, Nerul, Airoli), and Thane (Thane West)."
              },
              {
                q: "How quickly can Deploymo deploy promoters or event hostesses?",
                a: "We accommodate both planned marketing campaigns and urgent short-notice requirements. Standard turnaround for verified team allocation is 24 to 48 hours."
              },
              {
                q: "Do you supply staff for permanent corporate roles or security?",
                a: "No. Deploymo is exclusively a B2B Promotional Manpower and Event Staffing agency. We focus strictly on short-term promotional staff, brand promoters, hostesses, and event execution personnel."
              },
              {
                q: "How do you ensure staff punctuality and grooming on-ground?",
                a: "All deployed personnel undergo campaign-specific briefing, mandatory dress code checks, and are supervised on-site by assigned Deploymo Team Leaders with live check-ins."
              },
              {
                q: "How can I request a quote for an upcoming event or campaign?",
                a: "You can submit an inquiry through our website contact form or directly message our team on WhatsApp at +91 6261652749 for immediate quotation."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl border border-border-custom bg-bg-card space-y-2">
                <h3 className="text-base font-medium text-text-heading">{faq.q}</h3>
                <p className="text-xs md:text-sm text-text-body/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <SharedCta actionType="contact" />

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <SharedFooter />
    </main>
  )
}
