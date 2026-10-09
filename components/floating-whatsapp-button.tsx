"use client"

import { useEffect, useState } from "react"

const WHATSAPP_DEEP_LINK = "https://wa.me/918982652749"

export function FloatingWhatsAppButton() {
  // Yield when the footer is in view so the button never overlaps footer
  // content (the footer already carries its own WhatsApp link).
  const [footerInView, setFooterInView] = useState(false)

  useEffect(() => {
    const footer = document.querySelector("footer")
    if (!footer) return
    const observer = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      { threshold: 0.05 }
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href={WHATSAPP_DEEP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`group fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${
        footerInView
          ? "pointer-events-none translate-y-3 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      {/* Tooltip — hover, desktop only */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-3 hidden sm:flex items-center whitespace-nowrap rounded-lg border border-border-custom bg-bg-card px-2.5 py-1.5 text-[11px] font-medium tracking-wide text-text-heading shadow-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      >
        Chat with us on WhatsApp
      </span>

      {/* Circular button */}
      <span className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_10px_24px_-6px_rgba(5,150,105,0.4)] transition-all duration-200 ease-out group-hover:scale-105 group-hover:bg-emerald-700 group-hover:shadow-[0_14px_28px_-6px_rgba(5,150,105,0.5)]">
        <span className="wa-fab-ring" aria-hidden="true" />
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative h-[55%] w-[55%]"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </span>
    </a>
  )
}
