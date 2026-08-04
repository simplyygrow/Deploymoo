"use client"

import React from 'react';
import Link from 'next/link';

export function SharedCta({ actionType = 'contact' }: { actionType?: 'email' | 'contact' }) {
  return (
    <section className="relative py-16 px-6 md:py-32 md:px-12 lg:px-20 border-t border-border-custom overflow-hidden">
      {/* Background graphic */}
      <img
        src="/images/footer.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full object-cover object-bottom pointer-events-none select-none opacity-85 dark:opacity-50"
      />
      {/* Progressive blur */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to top, transparent 0%, black 55%)",
          WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 55%)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none cta-fade-gradient"
      />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 text-text-heading">
          Need Promotional Manpower?<br />Let's Discuss Your Campaign.
        </h2>
        <p className="text-sm md:text-base text-text-body/75 leading-relaxed mb-10 max-w-xl mx-auto">
          Deploy trained brand promoters, sales promoters, hostesses, registration staff and exhibition staff across Mumbai, Navi Mumbai, and Thane quickly for your next marketing activation or event.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-text-heading text-bg-page text-xs tracking-widest rounded-xl hover:opacity-90 transition-all font-semibold uppercase text-center"
          >
            Get a Quote
          </Link>
          <a
            href="https://wa.me/message/4ZTBQI5MAZ6UP1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 border border-border-custom text-text-heading text-xs tracking-widest rounded-xl hover:border-text-heading/30 hover:bg-text-body/[0.04] transition-all font-semibold uppercase flex items-center justify-center gap-2"
          >
            <span>WhatsApp Us</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

