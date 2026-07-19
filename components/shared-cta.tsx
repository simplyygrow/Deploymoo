"use client"

import React, { useState } from 'react';
import Link from 'next/link';

export function SharedCta({ actionType = 'email' }: { actionType?: 'email' | 'contact' }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative py-16 px-6 md:py-32 md:px-12 lg:px-20 border-t border-border-custom overflow-hidden">
      {/* Glass panels image — anchored to bottom center */}
      <img
        src="/images/footer.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full object-cover object-bottom pointer-events-none select-none opacity-85 dark:opacity-50"
      />
      {/* Progressive blur from bottom — blends into site bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to top, transparent 0%, black 55%)",
          WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 55%)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      />
      {/* Colour fade from bottom to site bg via CSS theme class */}
      <div
        className="absolute inset-0 pointer-events-none cta-fade-gradient"
      />
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 text-text-heading">
          Deploy Teams. Execute On-Ground. Scale Faster.
        </h2>
        <p className="text-sm text-text-body/75 leading-relaxed mb-10">
          Deploymo provides managed on-ground teams and field execution services for brands, marketing agencies, event companies, research firms and businesses across Mumbai and supported major cities in India.
        </p>

        {actionType === 'email' ? (
          !submitted ? (
            <form
              onSubmit={e => { e.preventDefault(); if (email) setSubmitted(true) }}
              className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="flex-1 bg-bg-card border border-border-custom rounded-xl px-4 py-3 text-sm text-text-heading placeholder:text-text-muted/65 focus:outline-none focus:border-text-heading/30 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-text-heading text-bg-page text-sm rounded-xl hover:opacity-90 transition-colors tracking-widest font-medium cursor-pointer"
              >
                JOIN
              </button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-600/20 bg-emerald-500/10 text-emerald-500 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {"You're on the list. We'll be in touch."}
            </div>
          )
        ) : (
          <div className="max-w-md mx-auto flex justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-text-heading text-bg-page text-sm rounded-xl hover:opacity-90 transition-colors tracking-widest font-medium cursor-pointer"
            >
              REQUEST QUOTE
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
