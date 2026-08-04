import React from 'react';
import Link from 'next/link';

export function SharedFooter() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-border-custom bg-bg-page">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        
        {/* Brand & Tagline */}
        <div className="space-y-3 max-w-xs">
          <span className="font-pixel text-xs tracking-[0.25em] text-text-heading font-bold">DEPLOYMO</span>
          <p className="text-xs text-text-muted leading-relaxed">
            B2B Promotional Manpower & Event Staffing Agency serving Mumbai, Navi Mumbai, and Thane.
          </p>
        </div>

        {/* Core Navigation */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono uppercase tracking-widest text-text-muted">Pages</div>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home",     href: "/" },
              { label: "Services", href: "/services" },
              { label: "About",    href: "/about" },
              { label: "Contact",  href: "/contact" },
            ].map(l => (
              <Link key={l.label} href={l.href} className="text-xs text-text-body/75 hover:text-text-heading transition-colors tracking-wide">{l.label}</Link>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono uppercase tracking-widest text-text-muted">Service Areas</div>
          <div className="flex flex-col gap-1.5 text-xs text-text-body/70">
            <span>Mumbai (Andheri, Bandra, BKC, Powai, Goregaon, Borivali, Malad)</span>
            <span>Navi Mumbai (Vashi, Nerul, Airoli)</span>
            <span>Thane (Thane West)</span>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono uppercase tracking-widest text-text-muted">Direct Enquiry</div>
          <div className="flex flex-col gap-2 text-xs">
            <a href="https://wa.me/message/4ZTBQI5MAZ6UP1" target="_blank" rel="noopener noreferrer" className="text-text-body/80 hover:text-text-heading transition-colors flex items-center gap-1.5 font-medium">
              <span>WhatsApp Us</span> →
            </a>
            <a href="mailto:info@deploymo.com" className="text-text-body/80 hover:text-text-heading transition-colors">
              info@deploymo.com
            </a>
            <a href="tel:+916261652749" className="text-text-body/80 hover:text-text-heading transition-colors">
              +91 6261652749
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-border-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-text-muted/60">© 2026 Deploymo. All rights reserved. Promotional Manpower & Event Staffing Agency.</span>
        <div className="flex gap-4 text-xs text-text-muted/60">
          <Link href="/about" className="hover:text-text-heading transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-text-heading transition-colors">Get a Quote</Link>
        </div>
      </div>
    </footer>
  );
}

