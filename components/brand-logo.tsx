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
      {/* Logo Mark SVG */}
      <svg 
        viewBox="0 0 320 320" 
        className="w-7 h-7 flex-shrink-0 transition-transform duration-300 group-hover:scale-105" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* D Shape */}
        <path 
          d="M 24 20 H 175 C 255 20 255 128 175 128 H 86 V 240 H 24 V 20 Z" 
          className="fill-[#2D3A4B] dark:fill-[#E2E8F0]" 
        />
        {/* m Shape */}
        <path 
          d="M 115 130 H 145 V 152 C 158 134 182 130 198 144 C 214 130 240 130 254 150 V 240 H 222 V 172 C 222 156 210 148 198 156 C 186 164 186 180 186 195 V 240 H 154 V 172 C 154 156 142 148 130 156 V 240 H 115 V 130 Z" 
          className="fill-[#9BA7B6] dark:fill-[#94A3B8]" 
        />
        {/* Dot */}
        <circle 
          cx="276" 
          cy="264" 
          r="16" 
          className="fill-[#9BA7B6] dark:fill-[#94A3B8]" 
        />
      </svg>

      {showText && (
        <span className="font-pixel text-xs font-bold tracking-[0.22em] text-text-heading">
          DEPLOYMO
        </span>
      )}
    </Link>
  )
}
