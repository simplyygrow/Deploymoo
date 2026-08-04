"use client"

import { useState, useEffect } from "react"

const STEPS = [
  {
    num: "01",
    title: "Requirement Intake",
    desc: "Define campaign scope & headcount",
    file: "campaign_brief.json",
    lang: "json",
    code: [
      { type: "comment", text: "// Project Requirement Matrix" },
      { type: "command", text: "Deploymo Intake Protocol v2.4" },
      { type: "gap" },
      { type: "prop", key: "  location", val: "'Mumbai, Navi Mumbai, Thane'" },
      { type: "prop", key: "  manpowerType", val: "'Brand Promoters & Hostesses'" },
      { type: "prop", key: "  campaignType", val: "'Product Launch & Retail Activation'" },
      { type: "gap" },
      { type: "output", text: "✓ Requirement Verified" },
      { type: "output", text: "✓ Scope & Timeline Confirmed" },
    ],
  },
  {
    num: "02",
    title: "Staff Screening",
    desc: "Verification, grooming & briefing",
    file: "manpower_allocation.ts",
    lang: "typescript",
    code: [
      { type: "comment", text: "// Screening & Grooming Verification" },
      { type: "keyword", text: "import", after: " { ScreenedStaff } ", keyword2: "from", string: " '@deploymo/manpower'" },
      { type: "gap" },
      { type: "keyword", text: "const", after: " promoterTeam ", keyword2: "=", keyword3: " new ", fn: "ManpowerPool", args: "({" },
      { type: "prop", key: "  languageFluency", val: "'English, Hindi, Marathi'" },
      { type: "prop", key: "  trainingStatus", val: "'Briefed on Product Pitch'" },
      { type: "prop", key: "  dressCodeCompliance", val: "'Verified'" },
      { type: "plain", text: "});" },
    ],
  },
  {
    num: "03",
    title: "Field Deployment",
    desc: "Punctual reporting & supervision",
    file: "onground_operations.ts",
    lang: "typescript",
    code: [
      { type: "comment", text: "// Real-Time Attendance & Location Tracking" },
      { type: "keyword", text: "import", after: " { FieldSupervisor } ", keyword2: "from", string: " '@deploymo/ops'" },
      { type: "gap" },
      { type: "keyword", text: "const", after: " executionUnit ", keyword2: "=", keyword3: " new ", fn: "FieldSupervisor", args: "({" },
      { type: "prop", key: "  onTimeReporting", val: "'100% Punctuality Guaranteed'" },
      { type: "prop", key: "  teamLeadersAssigned", val: "'Active Team Lead On-Site'" },
      { type: "plain", text: "});" },
    ],
  },
  {
    num: "04",
    title: "Daily Reporting",
    desc: "Footfall metrics & campaign data",
    file: "campaign_summary.json",
    lang: "json",
    code: [
      { type: "comment", text: "// End of Day Campaign Dashboard" },
      { type: "command", text: "Execution Insights Delivered" },
      { type: "gap" },
      { type: "output", text: "  Consolidating customer interactions..." },
      { type: "output", text: "  Verifying attendance logs..." },
      { type: "gap" },
      { type: "success", text: "✓ Daily Campaign Summary Delivered" },
      { type: "url", text: "  → Direct Reporting to Brand Manager" },
    ],
  },
]

function CodeLine({ line }: { line: (typeof STEPS)[0]["code"][0] }) {
  if (line.type === "gap") return <div className="h-3" />
  if (line.type === "comment") return <div className="text-text-muted/70">{line.text}</div>
  if (line.type === "output") return <div className="text-text-muted/60">{line.text}</div>
  if (line.type === "success") return <div className="text-[#16a34a] font-semibold">{line.text}</div>
  if (line.type === "url") return <div className="text-blue-500 underline">{line.text}</div>
  if (line.type === "command") return (
    <div>
      <span className="text-[#16a34a] font-semibold">$ </span>
      <span className="text-text-heading">{line.text}</span>
    </div>
  )
  if (line.type === "plain") return <div className="text-text-heading">{line.text}</div>
  if (line.type === "prop") return (
    <div>
      <span className="text-blue-500">{line.key}</span>
      <span className="text-text-heading">: </span>
      <span className="text-[#16a34a]">{line.val}</span>
      <span className="text-text-heading">,</span>
    </div>
  )
  if (line.type === "keyword") return (
    <div>
      <span className="text-purple-500">{line.text}</span>
      <span className="text-text-heading">{line.after}</span>
      <span className="text-purple-500">{line.keyword2}</span>
      {line.keyword3 && <span className="text-purple-500">{line.keyword3}</span>}
      {line.fn && <span className="text-amber-600 dark:text-amber-500">{line.fn}</span>}
      {line.args && <span className="text-text-heading">{line.args}</span>}
      {line.string && <span className="text-[#16a34a]">{line.string}</span>}
    </div>
  )
  return null
}

export function DevExSection() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)

  function selectStep(i: number) {
    if (i === active) return
    setVisible(false)
    setTimeout(() => {
      setActive(i)
      setVisible(true)
    }, 180)
  }

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setActive(prev => (prev + 1) % STEPS.length)
        setVisible(true)
      }, 180)
    }, 3200)
    return () => clearInterval(t)
  }, [])

  const step = STEPS[active]

  return (
    <section id="devex" className="py-24 px-6 md:py-32 md:px-12 lg:px-20 border-t border-border-custom">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-text-body/5 border border-border-custom text-[10px] tracking-widest text-text-muted uppercase font-mono">
            Operational Excellence
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05] text-text-heading">
            Structured Execution.<br />Flawless On-Ground Delivery.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch">
          <div className="flex flex-col gap-3">
            {STEPS.map((s, i) => (
              <button
                key={s.num}
                onClick={() => selectStep(i)}
                className="flex-1 text-left rounded-2xl border transition-all duration-200 p-6 group cursor-pointer"
                style={{
                  background: active === i ? "var(--bg-page)" : "var(--bg-card)",
                  borderColor: active === i ? "var(--text-heading)" : "var(--border-custom)",
                  boxShadow: active === i
                    ? "0 1px 3px rgba(0,0,0,0.06)"
                    : "0 1px 2px rgba(0,0,0,0.03)",
                }}
              >
                <div className="flex gap-4 items-start">
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-lg text-xs font-light shrink-0 transition-colors duration-200"
                    style={{
                      background: active === i ? "var(--text-heading)" : "var(--bg-page)",
                      color: active === i ? "var(--bg-page)" : "var(--text-muted)",
                    }}
                  >
                    {s.num}
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-sm font-light transition-colors duration-200"
                      style={{ color: active === i ? "var(--text-heading)" : "var(--text-body)" }}
                    >
                      {s.title}
                    </p>
                    <p className="text-xs mt-0.5 text-text-muted">{s.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div
            className="lg:col-span-2 rounded-2xl border border-border-custom p-8 flex flex-col"
            style={{
              background: "var(--bg-card)",
              minHeight: "360px",
            }}
          >
            <div className="flex items-center justify-between mb-5 shrink-0">
              <div
                className="text-[10px] tracking-widest uppercase transition-all duration-200 font-mono"
                style={{
                  opacity: visible ? 1 : 0,
                  filter: visible ? "blur(0px)" : "blur(4px)",
                  transition: "opacity 200ms ease, filter 200ms ease",
                  color: "var(--text-muted)",
                }}
              >
                {step.file}
              </div>
              <div className="flex gap-1.5">
                {[0, 1, 2, 3].map(d => (
                  <div
                    key={d}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      background: d === active ? "var(--text-heading)" : "var(--border-custom)",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="flex-1 rounded-xl p-6 overflow-hidden" style={{ background: "var(--bg-page)", border: "1px solid var(--border-custom)" }}>
              <div
                className="font-mono text-[12px] leading-6"
                style={{
                  opacity: visible ? 1 : 0,
                  filter: visible ? "blur(0px)" : "blur(6px)",
                  transform: visible ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 220ms cubic-bezier(0.16,1,0.3,1), filter 220ms cubic-bezier(0.16,1,0.3,1), transform 220ms cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {step.code.map((line, i) => (
                  <CodeLine key={i} line={line} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

