import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ContactFinalCta({ onOpenBooking, onNavigate }) {
  return (
    <section 
      id="contact-final-cta"
      className="relative bg-[#050505] text-[#FFFFFF] pt-6 pb-20 sm:pt-8 sm:pb-24 lg:pt-10 lg:pb-28 overflow-hidden border-b border-white/10"
      aria-label="Lion Elite Final Call to Action"
    >
      {/* Subtle Dark Court Lines Grid */}
      <div className="absolute inset-0 court-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric Composition: Typography on Left & Center-Right Photorealistic Hand & Ball */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT & CENTER: Huge Typography & Actions (Col 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2.5 h-2.5 bg-[#8CE600]" aria-hidden="true" />
              <span className="font-mono text-xs sm:text-sm tracking-wider uppercase text-[#8CE600] font-bold">
                YOUR NEXT CHAPTER
              </span>
            </div>

            {/* Huge White & Lion Green Typography */}
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] uppercase tracking-tight text-white leading-[0.92] mb-8">
              THE FIRST <br />
              MOVE IS <br />
              <span className="relative inline-block text-[#8CE600]">
                YOURS.
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-[#B9B9B9] font-normal leading-relaxed max-w-xl mb-10">
              Your next level starts with the right conversation. Reach out today and discover the Lion Elite training experience.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              
              {/* PRIMARY CTA: BOOK A SESSION → */}
              <button
                type="button"
                onClick={() => onOpenBooking ? onOpenBooking("junior-dev") : null}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#8CE600] hover:bg-white text-[#050505] font-display text-sm font-bold tracking-wider uppercase transition-all duration-200 active:scale-95 group shadow-lg shadow-[#8CE600]/10"
              >
                <span>BOOK A SESSION</span>
                <ArrowRight className="w-4 h-4 text-[#050505] transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* SECONDARY CTA: EXPLORE PROGRAMS → */}
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('/programs');
                  } else {
                    window.location.href = '/programs';
                  }
                }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#151515] hover:bg-white/10 text-white border border-white/20 hover:border-[#8CE600]/60 font-display text-sm font-bold tracking-wider uppercase transition-all duration-200 group"
              >
                <span>EXPLORE PROGRAMS</span>
                <ArrowRight className="w-4 h-4 text-[#8CE600] transition-transform duration-200 group-hover:translate-x-1" />
              </button>

            </div>

          </div>

          {/* RIGHT: Asymmetric Photorealistic Hand Holding Tennis Ball (Col 8-12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Offset Accent Layer */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-white/10 pointer-events-none" />

              {/* Photograph Frame */}
              <div className="relative overflow-hidden bg-[#151515] border border-white/15 shadow-2xl">
                <img
                  src="https://res.cloudinary.com/q5fz3r2n/image/upload/cta-ball"
                  alt="Close-up of an athletic player's hand holding a crisp optic yellow tennis ball on a dark court ready to serve"
                  loading="lazy"
                  className="w-full aspect-[4/3.5] object-cover object-center filter contrast-105 hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Minimal Overlay Badge */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent flex items-center justify-between font-mono text-[10px] text-white">
                  <span className="text-[#8CE600] tracking-widest uppercase font-bold">
                    SERVE IN PLAY // READY
                  </span>
                  <span className="text-[#B9B9B9]">DUBAI, UAE</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Subtle Animated Court Line Beneath the CTA */}
        <div className="mt-16 sm:mt-24 pt-8 relative">
          <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent via-[#8CE600] to-transparent"
            />
          </div>

          <div className="flex items-center justify-between pt-3 font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-widest">
            <span>COURT LINE PRECISION</span>
            <span className="text-[#8CE600] font-bold">LION ELITE TENNIS ACADEMY</span>
            <span>MIDDLE EAST</span>
          </div>
        </div>

      </div>
    </section>
  );
}
