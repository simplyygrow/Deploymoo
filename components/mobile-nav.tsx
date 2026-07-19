"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const close = () => setOpen(false)

  const navContainerStyle = {
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    background: scrolled ? "rgba(245, 244, 240, 0.85)" : "rgba(245, 244, 240, 0.45)",
    boxShadow: scrolled 
      ? "0 10px 30px -10px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.02)" 
      : "0 1px 2px rgba(0,0,0,0.01)",
    border: scrolled ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(0, 0, 0, 0.05)",
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  }

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-4xl">

        {/* Main Header Bar */}
        <nav
          className="flex items-center justify-between px-6 py-3 rounded-2xl"
          style={navContainerStyle}
        >
          {/* Logo - Far Left */}
          <Link href="/" className="flex items-center hover:opacity-85 transition-opacity" onClick={close}>
            <span className="font-pixel text-[11px] font-bold tracking-[0.25em] text-black">DEPLOYMO</span>
          </Link>

          {/* Desktop Nav Items - Center - Single Line, Vertically Centered, Equal Spacing */}
          <div 
            className="hidden md:flex items-center gap-9" 
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            {NAV_LINKS.map(l => (
              <Link
                key={l.label}
                href={l.href}
                className="text-xs text-black/50 hover:text-black transition-colors duration-200 tracking-wide font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop Call To Action - Far Right */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/contact"
              className="text-xs font-semibold px-4 py-2.5 rounded-xl bg-black text-white hover:bg-black/80 transition-all duration-200 tracking-wide"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Request Quote
            </Link>
          </div>

          {/* Burger Menu Button - Mobile Only */}
          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px] rounded-lg hover:bg-black/[0.04] transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className="block h-px bg-black/70 transition-all duration-300 origin-center"
              style={{
                width: "18px",
                transform: open ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-px bg-black/70 transition-all duration-300"
              style={{
                width: "18px",
                opacity: open ? 0 : 1,
                transform: open ? "scaleX(0)" : "none",
              }}
            />
            <span
              className="block h-px bg-black/70 transition-all duration-300 origin-center"
              style={{
                width: "18px",
                transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </nav>

        {/* Mobile Dropdown Panel */}
        <div
          className="md:hidden mt-2 overflow-hidden transition-all duration-300 ease-in-out"
          style={{ 
            maxHeight: open ? "340px" : "0px", 
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(-4px)"
          }}
        >
          <div
            className="rounded-2xl px-2 py-3 flex flex-col gap-1 border border-black/[0.06]"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              background: "rgba(245, 244, 240, 0.95)",
              boxShadow: "0 12px 30px -10px rgba(0,0,0,0.12)"
            }}
          >
            {NAV_LINKS.map(l => (
              <Link
                key={l.label}
                href={l.href}
                onClick={close}
                className="px-4 py-3 text-[13px] text-black/60 hover:text-black hover:bg-black/[0.03] rounded-xl transition-colors tracking-wide font-medium"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 px-2 pb-1">
              <Link
                href="/contact"
                onClick={close}
                className="block w-full text-center text-xs font-semibold px-4 py-3 rounded-xl bg-black text-white hover:bg-black/90 transition-all duration-200 tracking-wide"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
