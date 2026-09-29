import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection({ onOpenBooking }) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#050505] pt-24 pb-8"
    >
      {/* Background Image Container with Slow Ken Burns Scale & Dark Photographic Treatment */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="w-full h-full"
        >
          <picture className="w-full h-full block">
            <source media="(max-width: 767px)" srcSet="https://res.cloudinary.com/q5fz3r2n/image/upload/mobile_hero" />
            <img
              src="https://res.cloudinary.com/q5fz3r2n/image/upload/hero"
              alt="Lion Elite Tennis Academy professional hero"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
        </motion.div>

        {/* Softened Gradient Overlays to keep hero image bright and clear while maintaining text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/65 via-[#050505]/20 to-transparent" />
        
        {/* Subtle Geometric Court Grid Lines Overlay */}
        <div className="absolute inset-0 court-grid-pattern opacity-15 pointer-events-none" />
      </div>

      {/* Subtle Tennis Trajectory Vector Animation across composition */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Service Line Court Guideline */}
          <line
            x1="0"
            y1="720"
            x2="1440"
            y2="720"
            stroke="rgba(240, 244, 248, 0.08)"
            strokeWidth="1.5"
          />

          {/* Animated Tennis Ball Trajectory Arc */}
          <motion.path
            d="M -50 820 Q 420 540 850 680 T 1500 590"
            stroke="url(#trajectory-gradient)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.65 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />

          {/* Moving Tennis Ball along trajectory */}
          <motion.circle
            r="4.5"
            fill="#8DF000"
            initial={{ cx: -20, cy: 820, opacity: 0 }}
            animate={{
              cx: [0, 420, 850, 1440],
              cy: [820, 560, 680, 595],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <defs>
            <linearGradient id="trajectory-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8DF000" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#8DF000" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F0F4F8" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 lg:py-16">
        <div className="max-w-4xl">
          {/* Eyebrow with Court Coordinates */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[2px] bg-[#8DF000]" />
            <span className="font-mono text-xs sm:text-sm tracking-court uppercase text-[#8DF000] font-semibold">
              LION ELITE TENNIS ACADEMY // MIDDLE EAST
            </span>
            <span className="hidden sm:inline-block font-mono text-[11px] text-[#B9B9B9]/60 tracking-widest">
              [25°12'04"N • 55°16'28"E]
            </span>
          </motion.div>

          {/* Single H1 - Massive Editorial Condensed Headline with Mask Reveal */}
          <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[130px] leading-[0.88] tracking-tighter uppercase text-white mb-8 select-none">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block overflow-hidden"
            >
              BUILT FOR
            </motion.span>
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="block overflow-hidden"
            >
              THE NEXT
            </motion.span>
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
              className="block overflow-hidden text-[#8DF000]"
            >
              POINT.
            </motion.span>
          </h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-sans text-base sm:text-lg md:text-xl text-[#F0F4F8]/85 font-normal max-w-2xl leading-relaxed mb-10"
          >
            Professional tennis coaching in Dubai designed to develop stronger technique, smarter match play and confident competitors — from first serve to tournament level.
          </motion.p>

          {/* Athletic CTAs - Sharp & Controlled */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <button
              type="button"
              onClick={onOpenBooking}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#8DF000] text-[#050505] font-display text-base font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-[#050505] active:scale-98 shadow-xl shadow-[#8DF000]/20"
            >
              <span>BOOK A TRAINING SESSION</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              {/* Corner Notch */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white" />
            </button>

            <a
              href="#programs"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-display text-base font-bold tracking-wider uppercase transition-all duration-300 hover:border-[#8DF000] hover:text-[#8DF000] hover:bg-white/[0.02]"
            >
              <span>EXPLORE PROGRAMS</span>
              <span className="w-1.5 h-1.5 bg-[#8DF000] rounded-full group-hover:scale-125 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Viewport Minimal Information Strip */}
      <div className="relative z-20 border-t border-white/10 bg-[#050505]/75 backdrop-blur-sm mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Badges Strip */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 font-mono text-[11px] sm:text-xs text-[#B9B9B9] tracking-wider uppercase">
            <span className="text-white hover:text-[#8DF000] transition-colors">JUNIORS</span>
            <span className="text-neutral-600">/</span>
            <span className="text-white hover:text-[#8DF000] transition-colors">ADULTS</span>
            <span className="text-neutral-600">/</span>
            <span className="text-white hover:text-[#8DF000] transition-colors">PRIVATE COACHING</span>
            <span className="text-neutral-600">/</span>
            <span className="text-white hover:text-[#8DF000] transition-colors">PERFORMANCE TRAINING</span>
            <span className="text-neutral-600">/</span>
            <span className="text-[#8DF000] font-semibold">DUBAI</span>
          </div>

          {/* Scroll Down Indicator */}
          <a
            href="#about"
            className="flex items-center gap-2 font-mono text-[11px] text-[#B9B9B9] hover:text-white uppercase tracking-widest transition-colors group"
          >
            <span>SCROLL TO ENTER THE COURT</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#8DF000] transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
