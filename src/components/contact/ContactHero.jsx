import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function ContactHero({ onEnquiryClick }) {
  const actualWhatsAppUrl = "https://wa.me/971552766535?text=Hello%20Lion%20Elite,%20I%20would%20like%20to%20enquire%20about%20tennis%20training%20in%20Dubai.";

  return (
    <section 
      id="contact-hero"
      className="relative bg-[#050505] text-[#FFFFFF] pt-28 pb-4 sm:pt-32 sm:pb-6 lg:pt-36 lg:pb-6 flex items-center overflow-hidden border-b border-white/10"
      aria-label="Contact Lion Elite Hero Section"
    >
      {/* Subtle Architectural Court Grid Lines */}
      <div className="absolute inset-0 court-grid-pattern opacity-20 pointer-events-none" />
      
      {/* Editorial Vertical Guideline */}
      <div className="absolute top-0 bottom-0 left-6 sm:left-12 lg:left-24 w-[1px] bg-white/[0.04] pointer-events-none hidden sm:block" />
      <div className="absolute top-0 bottom-0 right-6 sm:right-12 lg:right-24 w-[1px] bg-white/[0.04] pointer-events-none hidden sm:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & Actions (Col 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-6 sm:mb-8"
            >
              <span className="w-2.5 h-2.5 bg-[#8CE600]" aria-hidden="true" />
              <div className="font-mono text-xs sm:text-sm tracking-wider uppercase text-[#8CE600] font-medium">
                <span>LION ELITE / CONTACT</span>
                <span className="text-white/40 mx-2">•</span>
                <span className="text-[#B9B9B9]">DUBAI, UNITED ARAB EMIRATES</span>
              </div>
            </motion.div>

            {/* Exactly ONE H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] uppercase tracking-tight text-white leading-[0.92] mb-8"
            >
              LET'S TALK <br />
              <span className="text-[#8CE600] inline-block relative">
                TENNIS.
                {/* Thin Court Line Under Accent */}
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-2 left-0 h-[2px] bg-[#8CE600]/60" 
                />
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-base sm:text-lg md:text-xl text-[#B9B9B9] font-normal leading-relaxed max-w-xl mb-10"
            >
              Whether you're starting your tennis journey, exploring coaching for your child or looking to elevate your game, we're here to help you take the next step.
            </motion.p>

            {/* Editorial Annotation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="flex items-center gap-3 mb-8 py-2.5 px-3.5 border-l-2 border-[#8CE600] bg-white/[0.02] max-w-lg"
            >
              <span className="font-mono text-[11px] sm:text-xs text-[#8CE600] tracking-wider uppercase font-semibold">
                YOUR NEXT SESSION STARTS WITH A CONVERSATION.
              </span>
            </motion.div>

            {/* Prominent Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
            >
              {/* Primary Action: Send Enquiry (Scrolls down to Form) */}
              <button
                type="button"
                id="hero-send-enquiry-btn"
                onClick={onEnquiryClick}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#8CE600] hover:bg-white text-[#050505] font-display text-sm font-bold tracking-wider uppercase transition-all duration-200 active:scale-95 group shadow-lg shadow-[#8CE600]/10"
              >
                <span>SEND AN ENQUIRY</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-1" />
              </button>

              {/* Secondary Action: WhatsApp Us (Actual Academy WhatsApp) */}
              <a
                href={actualWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#151515] hover:bg-white/10 text-white hover:text-[#8CE600] border border-white/15 hover:border-[#8CE600]/60 font-display text-sm font-semibold tracking-wider uppercase transition-all duration-200 group"
              >
                <MessageCircle className="w-4 h-4 text-[#8CE600]" />
                <span>WHATSAPP US</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            {/* Micro Details */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 font-mono text-[11px] text-white/50">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8CE600] animate-pulse" />
                OFFICIAL ENQUIRY DESK ACTIVE
              </span>
              <span>•</span>
              <span>RESPONSE TIME: UNDER 2 HOURS</span>
              <span>•</span>
              <span>DUBAI GST (UTC+4)</span>
            </div>

          </div>

          {/* RIGHT COLUMN: Narrow Vertical Photographic Strip (Col 8-12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm lg:max-w-xs xl:max-w-sm"
            >
              {/* Asymmetric Outer Frame with Court Lines */}
              <div className="relative p-2 sm:p-3 bg-[#151515] border border-white/10 shadow-2xl">
                
                {/* Court Corner Markers */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#8CE600]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#8CE600]" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#8CE600]" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#8CE600]" />

                {/* Vertical Photographic Strip Container */}
                <div className="relative aspect-[3/4.6] overflow-hidden bg-[#0A0A0A]">
                  <img
                    src="https://res.cloudinary.com/q5fz3r2n/image/upload/hero-strip"
                    alt="Lion Elite tennis player holding racket by the court net ready for training session"
                    loading="eager"
                    className="w-full h-full object-cover object-center filter grayscale-[15%] contrast-105 hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Caption Strip on bottom of photo */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent">
                    <div className="font-mono text-[10px] text-[#8CE600] tracking-widest uppercase mb-1">
                      COURT PROFILE // 01
                    </div>
                    <div className="font-display text-xs uppercase tracking-wider text-white font-medium">
                      PREMIER HARDCOURT SESSIONS
                    </div>
                    <div className="font-mono text-[9px] text-[#B9B9B9] mt-0.5">
                      SWISS INTERNATIONAL SCIENTIFIC SCHOOL DUBAI
                    </div>
                  </div>
                </div>

                {/* Technical Footnote */}
                <div className="mt-2.5 flex items-center justify-between px-1 font-mono text-[10px] text-white/40">
                  <span>LAT 25.2094° N</span>
                  <span className="text-[#8CE600]">ON-COURT EVALUATION</span>
                </div>
              </div>

              {/* Decorative Subtle Shadow Plane behind frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/5 pointer-events-none -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
