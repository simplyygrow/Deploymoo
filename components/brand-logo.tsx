"use client"

import React from "react"
import Link from "next/link"

interface BrandLogoProps {
  className?: string
  showText?: boolean
  onClick?: () => void
}

export function BrandLogo({ className = "", showText = true, onClick }: BrandLogoProps) {
  return (
    <Link 
      href="/" 
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 hover:opacity-90 transition-opacity group ${className}`}
      aria-label="DEPLOYMO Home"
    >
      {/* Logo Mark Image */}
      <img 
        src="/logo.png" 
        alt="DEPLOYMO Logo" 
        className="w-7 h-7 flex-shrink-0 object-contain transition-transform duration-300 group-hover:scale-105" 
      />

      {showText && (
        <span className="font-pixel text-xs font-bold tracking-[0.22em] text-text-heading">
          DEPLOYMO
        </span>
      )}
    </Link>
  )
}
