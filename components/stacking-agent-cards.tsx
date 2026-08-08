"use client"

import { useEffect, useRef, useState } from "react"

const STAFFING_CATEGORIES = [
  {
    label: "BRAND PROMOTERS",
    title: "Brand Promoters & Ambassadors",
    desc: "Articulate, trained brand ambassadors and promoters who represent your brand vision during activations, product launches, and high-visibility campaigns.",
    stats: [{ v: "Mumbai Wide", l: "coverage" }, { v: "Short / Long Term", l: "contracts" }],
    img: "/images/category-brand-promoters.jpeg",
  },
  {
    label: "SALES & RETAIL PROMOTERS",
    title: "In-Store & Retail Promoters",
    desc: "Active sales promoters deployed across modern trade, retail outlets, and malls to drive footfall conversion and boost product trials.",
    stats: [{ v: "Trained", l: "pitching" }, { v: "High Impact", l: "conversions" }],
    img: "/images/category-sales-promoters.jpeg",
  },
  {
    label: "SAMPLING & FIELD EXEC",
    title: "Product Sampling & Field Staff",
    desc: "Dynamic teams for product sampling, society activations, mall promotions, and roadshows targeting key consumer segments.",
    stats: [{ v: "Rapid", l: "deployment" }, { v: "Supervised", l: "execution" }],
    img: "/images/category-sampling-staff.jpeg",
  },
  {
    label: "EVENT & EXHIBITION",
    title: "Hostesses, Registration & Event Staff",
    desc: "Professional hostesses, registration coordinators, ushers, exhibition promoters, and team leaders for corporate events and trade shows.",
    stats: [{ v: "Professional", l: "grooming" }, { v: "Turnkey", l: "coordination" }],
    img: "/images/category-event-hostesses.jpeg",
  },
]

const STICKY_TOP   = 80   // matches top: 80px on first card
const STICKY_STEP  = 16   // each card stacks 16px lower
const SCALE_STEP   = 0.04 // scale reduction per card stacked on top
const OFFSET_STEP  = 8    // px pushed down per card stacked on top

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-text-muted bg-text-body/5">
      {children}
    </span>
  )
}

export function StackingAgentCards() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  // depth[i] = 0..N how many cards are currently stacked on top of card i
  const [depth, setDepth] = useState<number[]>(STAFFING_CATEGORIES.map(() => 0))

  useEffect(() => {
    function onScroll() {
      const nextDepth = STAFFING_CATEGORIES.map((_, i) => {
        let count = 0
        for (let j = i + 1; j < STAFFING_CATEGORIES.length; j++) {
          const el = cardRefs.current[j]
          if (!el) continue
          const rect = el.getBoundingClientRect()
          const stickyTopJ = STICKY_TOP + j * STICKY_STEP
          if (rect.top <= stickyTopJ + 2) count++
        }
        return count
      })
      setDepth(nextDepth)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="flex flex-col" style={{ perspective: "1400px", perspectiveOrigin: "50% 0%" }}>
      {STAFFING_CATEGORIES.map((cat, i) => {
        const d         = depth[i]
        const scale     = 1 - d * SCALE_STEP
        const translateY = d * OFFSET_STEP

        return (
          <div
            key={cat.label}
            ref={el => { cardRefs.current[i] = el }}
            className="sticky mb-4"
            style={{ top: `${STICKY_TOP + i * STICKY_STEP}px`, zIndex: 10 + i }}
          >
            <div
              style={{
                transform:      `scale(${scale}) translateY(${translateY}px)`,
                transformOrigin: "top center",
                transition:     "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                willChange:     "transform",
              }}
            >
              <div className="group relative bg-bg-card rounded-2xl border border-border-custom overflow-hidden cursor-pointer transition-all duration-300">

                {/* ── MOBILE: image top ── */}
                {cat.img && (
                  <div className="relative w-full h-52 pointer-events-none md:hidden">
                    <img
                      src={cat.img}
                      alt={cat.label}
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
                      style={{
                        maskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 85%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 85%)",
                      }}
                    />
                  </div>
                )}

                {/* ── DESKTOP: image right ── */}
                {cat.img && (
                  <div className="hidden md:block absolute inset-y-0 right-0 w-1/2 pointer-events-none">
                    <img
                      src={cat.img}
                      alt={cat.label}
                      className="w-full h-full object-cover object-center opacity-70"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to right, var(--bg-card) 0%, transparent 55%)",
                      }}
                    />
                  </div>
                )}

                {/* Text content */}
                <div
                  className="relative z-10 p-8"
                >
                  <div className="md:max-w-[60%]">
                    <div className="flex items-start justify-between mb-6">
                      <Tag>{cat.label}</Tag>
                    </div>
                    <h3 className="text-xl font-light mb-3 text-text-heading">{cat.title}</h3>
                    <p className="text-sm text-text-body/75 leading-relaxed mb-8">{cat.desc}</p>
                  </div>
                  <div className="flex gap-8 pt-6 border-t border-border-custom">
                    {cat.stats.map(s => (
                      <div key={s.l}>
                        <div className="text-xl font-light text-text-heading">{s.v}</div>
                        <div className="text-[11px] text-text-muted tracking-widest mt-0.5 uppercase">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

