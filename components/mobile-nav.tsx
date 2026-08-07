"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"

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
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const close = () => setOpen(false);

  const navContainerStyle = {
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    background: scrolled ? "var(--bg-nav-desktop-scrolled)" : "var(--bg-nav-desktop)",
    boxShadow: scrolled 
      ? "0 10px 30px -10px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.02)" 
      : "0 1px 2px rgba(0,0,0,0.01)",
    border: scrolled ? "1px solid var(--border-custom)" : "1px solid rgba(138, 148, 166, 0.12)",
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
          <BrandLogo onClick={close} />

          {/* Desktop Nav Items */}
          <div 
            className="hidden md:flex items-center gap-8" 
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            {NAV_LINKS.map(l => (
              <Link
                key={l.label}
                href={l.href}
                className="text-xs text-text-body/70 hover:text-text-heading transition-colors duration-200 tracking-wide font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/contact"
              className="text-xs font-semibold px-4 py-2.5 rounded-xl bg-text-heading text-bg-page hover:opacity-90 transition-all duration-200 tracking-wide"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger navigation */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={() => setOpen(v => !v)}
              className="flex flex-col justify-center items-center w-11 h-11 gap-[5px] rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span
                className="block h-px bg-text-heading/70 transition-all duration-300 origin-center"
                style={{
                  width: "18px",
                  transform: open ? "translateY(6px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block h-px bg-text-heading/70 transition-all duration-300"
                style={{
                  width: "18px",
                  opacity: open ? 0 : 1,
                  transform: open ? "scaleX(0)" : "none",
                }}
              />
              <span
                className="block h-px bg-text-heading/70 transition-all duration-300 origin-center"
                style={{
                  width: "18px",
                  transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Panel */}
        <div
          className="md:hidden mt-2 overflow-hidden transition-all duration-300 ease-in-out"
          style={{ 
            maxHeight: open ? "280px" : "0px", 
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(-4px)"
          }}
        >
          <div
            className="rounded-2xl px-2 py-3 flex flex-col gap-1 border border-black/[0.06] dark:border-white/[0.06] relative"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              background: "var(--bg-nav-mobile)",
              boxShadow: "0 12px 30px -10px rgba(0,0,0,0.12)"
            }}
          >
            {NAV_LINKS.map(l => (
              <Link
                key={l.label}
                href={l.href}
                onClick={close}
                className="px-4 py-3 text-[13px] text-text-body/70 hover:text-text-heading hover:bg-black/[0.03] dark:hover:bg-white/[0.03] rounded-xl transition-colors tracking-wide font-medium"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 px-2 pb-1">
              <Link
                href="/contact"
                onClick={close}
                className="block w-full text-center text-xs font-semibold px-4 py-3 rounded-xl bg-text-heading text-bg-page hover:opacity-90 transition-all duration-200 tracking-wide"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

