"use client"

import { useState, useEffect } from "react"

const STEPS = [
  {
    num: "01",
    title: "Install SDK",
    desc: "One command to get started",
    file: "terminal",
    lang: "bash",
    code: [
      { type: "comment", text: "# Install the Agentic SDK" },
      { type: "command", text: "npm install @agentic/sdk" },
      { type: "gap" },
      { type: "comment", text: "# Initialize your project" },
      { type: "command", text: "npx agentic init" },
      { type: "gap" },
      { type: "output", text: "✓ Project initialized" },
      { type: "output", text: "✓ Config file created" },
      { type: "output", text: "✓ Ready to build" },
    ],
  },
  {
    num: "02",
    title: "Define Agent",
    desc: "TypeScript-first agent class",
    file: "agents/researcher.ts",
    lang: "typescript",
    code: [
      { type: "comment", text: "// agents/researcher.ts" },
      { type: "keyword", text: "import", after: " { Agent, Tool } ", keyword2: "from", string: " '@agentic/sdk'" },
      { type: "gap" },
      { type: "keyword", text: "const", after: " webSearch ", keyword2: "=", keyword3: " new ", fn: "Tool", args: "('web-search', async (q) => { ... })" },
      { type: "gap" },
      { type: "keyword", text: "export const", after: " researcher ", keyword2: "=", keyword3: " new ", fn: "Agent", args: "({" },
      { type: "prop", key: "  name", val: "'researcher'" },
      { type: "prop", key: "  model", val: "'claude-opus'" },
      { type: "prop", key: "  tools", val: "[webSearch]" },
      { type: "prop", key: "  memory", val: "true" },
      { type: "plain", text: "});" },
    ],
  },
  {
    num: "03",
    title: "Add Memory",
    desc: "Persistent conversation context",
    file: "agents/memory.ts",
    lang: "typescript",
    code: [
      { type: "comment", text: "// Add long-term memory to any agent" },
      { type: "keyword", text: "import", after: " { VectorMemory } ", keyword2: "from", string: " '@agentic/memory'" },
      { type: "gap" },
      { type: "keyword", text: "const", after: " memory ", keyword2: "=", keyword3: " new ", fn: "VectorMemory", args: "({" },
      { type: "prop", key: "  provider", val: "'pgvector'" },
      { type: "prop", key: "  namespace", val: "'researcher'" },
      { type: "plain", text: "})" },
      { type: "gap" },
      { type: "comment", text: "// Attach to agent" },
      { type: "plain", text: "researcher.use(memory)" },
    ],
  },
  {
    num: "04",
    title: "Deploy",
    desc: "One command to production",
    file: "terminal",
    lang: "bash",
    code: [
      { type: "comment", text: "# Deploy to Agentic Cloud" },
      { type: "command", text: "agentic deploy --prod" },
      { type: "gap" },
      { type: "output", text: "  Building agent..." },
      { type: "output", text: "  Running tests..." },
      { type: "output", text: "  Deploying to edge..." },
      { type: "gap" },
      { type: "success", text: "✓ researcher deployed" },
      { type: "url", text: "  → https://agents.agentic.dev/researcher" },
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

  // Auto-advance every 3s
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
    <section id="devex" className="py-32 px-6 md:px-12 lg:px-20 border-t border-border-custom">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-text-body/5 border border-border-custom text-[10px] tracking-widest text-text-muted uppercase">
            Developer Experience
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05] text-text-heading">
            Built for developers.<br />Loved by teams.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch">
          {/* Left — 4 clickable step cards, equal height, no flex stretch */}
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

          {/* Right — fixed-size code panel */}
          <div
            className="lg:col-span-2 rounded-2xl border border-border-custom p-8 flex flex-col"
            style={{
              background: "var(--bg-card)",
              minHeight: "360px",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5 shrink-0">
              <div
                className="text-[10px] tracking-widest uppercase transition-all duration-200"
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
                {[0, 1, 2].map(d => (
                  <div
                    key={d}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      background: d === active % 3 ? "var(--text-body)" : "var(--border-custom)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Code block — fixed height, content doesn't affect layout */}
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
