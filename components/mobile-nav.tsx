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
  const [theme, setTheme] = useState<"light" | "dark" | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const activeTheme = document.documentElement.classList.contains("dark") ? "dark" : "light"
      setTheme(activeTheme)
    }
  }, [])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark")
    const newTheme = isDark ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  const close = () => setOpen(false)

  const navContainerStyle = {
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    background: scrolled ? "var(--bg-nav-desktop-scrolled)" : "var(--bg-nav-desktop)",
    boxShadow: scrolled 
      ? "0 10px 30px -10px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.02)" 
      : "0 1px 2px rgba(0,0,0,0.01)",
    border: scrolled ? "1px solid var(--border-custom)" : "1px solid rgba(138, 148, 166, 0.08)",
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  }

  const themeToggleControl = theme !== null && (
    <button
      onClick={toggleTheme}
      className="w-11 h-11 relative flex items-center justify-center rounded-full hover:bg-black/[0.04] dark:hover:bg-white/[0.04] text-text-heading border border-border-custom transition-all duration-300 cursor-pointer"
      aria-label="Toggle theme"
    >
      {/* Sun Icon */}
      <div className={`transition-all duration-300 transform ${theme === 'dark' ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2"/><path d="M12 20v2"/>
          <path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
          <path d="M2 12h2"/><path d="M20 12h2"/>
          <path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
        </svg>
      </div>
      {/* Moon Icon */}
      <div className={`absolute transition-all duration-300 transform ${theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </svg>
      </div>
    </button>
  )

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
            <span className="font-pixel text-[11px] font-bold tracking-[0.25em] text-text-heading">DEPLOYMO</span>
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
                className="text-xs text-text-body/60 hover:text-text-heading dark:hover:text-text-heading transition-colors duration-200 tracking-wide font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop Call To Action - Far Right */}
          <div className="hidden md:flex items-center gap-3">
            {themeToggleControl}
            <Link 
              href="/contact"
              className="text-xs font-semibold px-4 py-2.5 rounded-xl bg-text-heading text-bg-page hover:opacity-90 transition-all duration-200 tracking-wide"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile hamburger navigation elements and theme toggle */}
          <div className="flex items-center gap-1 md:hidden">
            {themeToggleControl}
            
            {/* Burger Menu Button - Mobile Only */}
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
            maxHeight: open ? "340px" : "0px", 
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
                className="px-4 py-3 text-[13px] text-text-body/60 dark:text-text-body/60 hover:text-text-heading dark:hover:text-text-heading hover:bg-black/[0.03] dark:hover:bg-white/[0.03] rounded-xl transition-colors tracking-wide font-medium"
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
                Request Quote
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
