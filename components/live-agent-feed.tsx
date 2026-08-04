"use client"

import { useEffect, useState, useRef } from "react"

const LOCATIONS = [
  "Andheri West", "BKC, Bandra", "Powai", "Lower Parel",
  "Goregaon East", "Borivali West", "Vashi, Navi Mumbai", "Thane West",
  "Malad Mindspace", "Nerul, Navi Mumbai",
]

const DEPLOYMENTS = [
  "12 Brand Promoters active — FMCG Launch",
  "8 Hostesses & Registration Staff — B2B Expo",
  "15 Product Sampling Staff — Mall Campaign",
  "6 Retail Promoters — Electronics Store",
  "10 Exhibition Staff — Trade Show",
  "14 Sales Promoters — Modern Trade Outlet",
  "4 Team Leaders Supervising Campaign",
  "18 Brand Ambassadors — Beverage Activation",
  "8 In-Store Promoters — Fashion Retail",
  "20 Field Executives — On-Ground Survey",
  "10 Registration Staff — Corporate Event",
]

const REGIONS = ["Mumbai", "Navi Mumbai", "Thane", "Mumbai", "Navi Mumbai"]
const STATUSES = [
  { label: "active",    color: "#4ade80" },
  { label: "active",    color: "#4ade80" },
  { label: "active",    color: "#4ade80" },
  { label: "deployed",  color: "#60a5fa" },
  { label: "completed", color: "#9ca3af" },
]

type StaffRow = {
  id: string
  location: string
  task: string
  region: string
  status: typeof STATUSES[number]
  progress: number
  key: number
}

function randomRow(key: number): StaffRow {
  return {
    id: Math.random().toString(36).slice(2, 8).toUpperCase(),
    location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
    task: DEPLOYMENTS[Math.floor(Math.random() * DEPLOYMENTS.length)],
    region: REGIONS[Math.floor(Math.random() * REGIONS.length)],
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
    progress: Math.floor(Math.random() * 85 + 10),
    key,
  }
}

function ProgressBar({ initial }: { initial: number }) {
  const [pct, setPct] = useState(initial)
  const rafRef = useRef<number>(0)
  const pctRef = useRef(initial)

  useEffect(() => {
    const tick = () => {
      pctRef.current = Math.min(99, pctRef.current + 0.015)
      setPct(Math.round(pctRef.current))
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div style={{ width: "100%", height: 2, background: "rgba(0,0,0,0.08)", borderRadius: 9 }}>
      <div style={{
        height: "100%", borderRadius: 9,
        width: `${pct}%`,
        background: "rgba(0,0,0,0.35)",
        transition: "width 0.5s linear",
      }} />
    </div>
  )
}

const SEED_ROWS: StaffRow[] = [
  { id: "MUM01", location: "BKC, Bandra",     task: "8 Hostesses & Registration Staff — B2B Expo",   region: "Mumbai",      status: STATUSES[0], progress: 75, key: 0 },
  { id: "MUM02", location: "Andheri West",    task: "12 Brand Promoters active — FMCG Launch",       region: "Mumbai",      status: STATUSES[0], progress: 60, key: 1 },
  { id: "NVM01", location: "Vashi",           task: "15 Product Sampling Staff — Mall Campaign",    region: "Navi Mumbai", status: STATUSES[0], progress: 85, key: 2 },
  { id: "THN01", location: "Thane West",      task: "6 Retail Promoters — Electronics Store",        region: "Thane",       status: STATUSES[0], progress: 40, key: 3 },
  { id: "MUM03", location: "Powai",           task: "18 Brand Ambassadors — Beverage Activation",   region: "Mumbai",      status: STATUSES[3], progress: 90, key: 4 },
]

export function LiveAgentFeed() {
  const [rows, setRows] = useState<StaffRow[]>(SEED_ROWS)
  const keyRef = useRef(100)

  useEffect(() => {
    setRows(Array.from({ length: 5 }, (_, i) => randomRow(i)))

    const t = setInterval(() => {
      keyRef.current++
      setRows(prev => [...prev.slice(1), randomRow(keyRef.current)])
    }, 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{
      border: "1px solid rgba(0,0,0,0.08)",
      borderRadius: 16,
      overflow: "hidden",
      background: "rgba(255,255,255,0.7)",
    }}>
      {/* Table header */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "100px 1fr 70px 70px",
        padding: "8px 16px",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        background: "rgba(0,0,0,0.03)",
      }}>
        {["LOCATION", "DEPLOYMENT ACTIVITY", "REGION", "STATUS"].map(h => (
          <span key={h} style={{ fontSize: 8, letterSpacing: "0.16em", color: "rgba(0,0,0,0.30)", fontFamily: "monospace" }}>{h}</span>
        ))}
      </div>

      {/* Rows */}
      <div style={{ overflow: "hidden" }}>
        {rows.map((row, i) => (
          <div
            key={row.key}
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr 70px 70px",
              padding: "10px 16px",
              borderBottom: "1px solid rgba(0,0,0,0.04)",
              gap: 8,
              alignItems: "center",
              animation: i === rows.length - 1 ? "rowSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) both" : "none",
            }}
          >
            {/* Location */}
            <div>
              <div style={{ fontSize: 9, fontFamily: "sans-serif", fontWeight: 500, color: "rgba(0,0,0,0.75)", marginBottom: 1 }}>{row.location}</div>
              <div style={{ fontSize: 7.5, fontFamily: "monospace", color: "rgba(0,0,0,0.3)" }}>#{row.id}</div>
            </div>

            {/* Activity + progress */}
            <div style={{ minWidth: 0 }}>
              <div style={{
                fontSize: 9, color: "rgba(0,0,0,0.60)", lineHeight: 1.35, marginBottom: 5,
                overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
              }}>{row.task}</div>
              <ProgressBar initial={row.progress} />
            </div>

            {/* Region */}
            <div style={{ fontSize: 8, fontFamily: "monospace", color: "rgba(0,0,0,0.40)" }}>{row.region}</div>

            {/* Status */}
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{
                width: 5, height: 5, borderRadius: "50%",
                background: row.status.color,
                boxShadow: row.status.label === "active" ? `0 0 6px ${row.status.color}` : "none",
                animation: row.status.label === "active" ? "statusPulse 2s ease-in-out infinite" : "none",
                flexShrink: 0,
              }} />
              <span style={{ fontSize: 8, fontFamily: "monospace", color: "rgba(0,0,0,0.40)" }}>{row.status.label}</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes rowSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes statusPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}

export function LiveAgentCounter() {
  const [count, setCount] = useState(150)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const t = setInterval(() => {
      setCount(v => Math.max(120, v + Math.floor(Math.random() * 3 - 1)))
    }, 2000)
    return () => clearInterval(t)
  }, [])

  return (
    <span style={{
      fontFamily: "IBM Plex Sans, sans-serif",
      fontSize: "clamp(3rem, 6vw, 5rem)",
      fontWeight: 300,
      color: "rgba(0,0,0,0.85)",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      transition: "color 0.3s ease",
    }}>
      {mounted ? count.toString() : "150"}+
    </span>
  )
}

