import React from 'react';
import Link from 'next/link';

export function SharedFooter() {
  return (
    <footer className="py-10 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <span className="font-pixel text-xs tracking-[0.25em] text-black/50">DEPLOYMO</span>

        {/* Nav sections */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {[
            { label: "Home",         href: "/" },
            { label: "About",        href: "/about" },
            { label: "Services",     href: "/services" },
            { label: "Contact",      href: "/contact" },
            { label: "Platform",     href: "/#platform" },
            { label: "Agents",       href: "/#agents" },
            { label: "Workflow",     href: "/#workflow" },
            { label: "Integrations", href: "/#integrations" },
            { label: "Live",         href: "/#live" },
            { label: "Pricing",      href: "/#pricing" },
          ].map(l => (
            <Link key={l.label} href={l.href} className="text-xs text-black/35 hover:text-black/70 transition-colors tracking-widest">{l.label}</Link>
          ))}
        </div>

        {/* Legal links */}
        <div className="flex items-center gap-6">
          {[
            { label: "Privacy", href: "#" },
            { label: "Terms",   href: "#" },
            { label: "Docs",    href: "#" },
            { label: "GitHub",  href: "#" },
          ].map(l => (
            <Link key={l.label} href={l.href} className="text-xs text-black/25 hover:text-black/55 transition-colors tracking-widest">{l.label}</Link>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-black/[0.04]">
        <span className="text-xs text-black/20">© 2026 Deploymo. All rights reserved.</span>
      </div>
    </footer>
  );
}
