import React from 'react';
import Link from 'next/link';

export function SharedFooter() {
  return (
    <footer className="py-10 px-6 md:px-12 lg:px-20 border-t border-border-custom bg-bg-page">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <span className="font-pixel text-xs tracking-[0.25em] text-text-muted font-bold">DEPLOYMO</span>

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
            <Link key={l.label} href={l.href} className="text-xs text-text-muted/80 hover:text-text-heading transition-colors tracking-widest">{l.label}</Link>
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
            <Link key={l.label} href={l.href} className="text-xs text-text-muted/60 hover:text-text-heading/85 transition-colors tracking-widest">{l.label}</Link>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border-custom">
        <span className="text-xs text-text-muted/50">© 2026 Deploymo. All rights reserved.</span>
      </div>
    </footer>
  );
}
