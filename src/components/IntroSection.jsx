import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Shield, Target, Zap } from 'lucide-react';

export default function IntroSection({ onOpenBooking }) {
  return (
    <section
      id="about"
      className="relative w-full bg-[#080808] text-[#F0F4F8] pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-16 lg:pb-20 overflow-hidden border-t-[3px] border-[#8DF000]"
      itemScope
      itemType="https://schema.org/SportsActivityLocation"
    >
      {/* Hidden SEO Metadata */}
      <meta itemProp="name" content="Lion Elite Tennis Academy Dubai" />
      <meta itemProp="description" content="Premier tennis academy in Dubai providing high-performance tennis coaching, biomechanics telemetry, junior and adult training programs across tournament-grade courts." />
      <meta itemProp="address" content="Dubai, United Arab Emirates" />

      {/* Dark Court Grid Lines */}
      <div className="absolute inset-0 court-grid-pattern opacity-15 pointer-events-none" />

      {/* Decorative Baseline Dimension Stamp */}
      <div className="absolute top-6 right-6 lg:right-16 font-mono text-[11px] text-neutral-500 tracking-widest uppercase select-none pointer-events-none hidden sm:block">
        COURT GEOMETRY // 23.77M × 8.23M (SINGLES REGULATION)
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Label */}
        <header className="flex items-center gap-3 mb-8">
          <span className="w-6 h-[2px] bg-[#8DF000]" />
          <h2 className="font-mono text-xs tracking-court uppercase text-[#8DF000] font-bold">
            01 / THE ACADEMY — PREMIER TENNIS COACHING IN DUBAI
          </h2>
          <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest hidden sm:inline">
            [DUBAI REGION]
          </span>
        </header>

        {/* Asymmetric Magazine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Huge Editorial Typography & Mission Statement (6 Cols) */}
          <article className="lg:col-span-6 z-20">
            {/* Editorial Condensed Main Statement */}
            <div className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[0.88] tracking-tighter uppercase text-white mb-8">
              <span className="block">TRAIN.</span>
              <span className="block">COMPETE.</span>
              <span className="block text-[#8DF000]">EVOLVE.</span>
            </div>

            {/* Architectural Baseline Accent */}
            <div className="w-24 h-[3px] bg-[#8DF000] mb-8" />

            {/* Core SEO-Optimized Manifesto Copy */}
            <h3 className="font-sans text-lg sm:text-xl text-[#F0F4F8] font-semibold leading-relaxed mb-6 max-w-xl">
              Lion Elite Tennis Academy brings structured coaching, technical development and competitive thinking together in one progressive training environment in Dubai.
            </h3>

            <p className="font-sans text-sm sm:text-base text-neutral-400 leading-relaxed mb-10 max-w-lg">
              We reject the casual ball-bucket mentality. In the modern game, pure athleticism without biomechanical accuracy fails under match pressure. Our courts operate with the technical rigor of an international training facility, preparing players to dominate every phase of the rally.
            </p>

            {/* Action CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#8DF000] text-black font-display text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white"
                aria-label="Discover Lion Elite Tennis Academy Programs and Book a Session"
              >
                <span>DISCOVER LION ELITE</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <span className="font-mono text-xs text-neutral-400 tracking-wider uppercase">
                // ELEVATION +14M • DUBAI
              </span>
            </div>
          </article>

          {/* Right Column: Intersecting Documentary Photography with Technical Annotations (6 Cols) */}
          <aside className="lg:col-span-6 relative" aria-label="Academy Training Methodology & Performance Annotations">
            
            {/* The Large Documentary Photograph */}
            <div className="relative z-10 w-full overflow-hidden shadow-2xl bg-neutral-900 border border-white/10">
              <motion.img
                initial={{ scale: 1.05, opacity: 0.85 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src="https://res.cloudinary.com/q5fz3r2n/image/upload/intro-action"
                alt="Elite tennis player executing a high-tempo running forehand on Dubai hardcourt at Lion Elite Tennis Academy"
                title="Lion Elite Tennis Academy Dubai - High Performance Training"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center filter contrast-105"
                loading="lazy"
                itemProp="image"
              />

              {/* Inset Court Coordinate Overlay Tag */}
              <div className="absolute bottom-4 left-4 bg-[#050505]/90 text-white px-3 py-2 font-mono text-[10px] tracking-wider uppercase flex items-center gap-2 backdrop-blur-sm border-l-2 border-[#8DF000]">
                <span>BASELINE LATERAL SHIFT // 0.24S REACTION</span>
              </div>
            </div>

            {/* Technical Annotations Positioned Around Photograph (Desktop / Tablet floating) */}
            
            {/* 01. TECHNIQUE - Top Left (Desktop) */}
            <div className="absolute -top-6 -left-2 sm:-left-6 z-20 bg-[#151515] border border-white/10 px-3.5 py-2 shadow-xl hidden sm:block">
              <div className="flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-[#8DF000]" />
                <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-white">
                  TECHNIQUE // KINETIC CHAIN
                </span>
              </div>
              <span className="text-[10px] text-neutral-400 font-sans block mt-0.5">
                Repeatable stroke mechanics at contact
              </span>
            </div>

            {/* 02. MOVEMENT - Top Right (Desktop) */}
            <div className="absolute -top-6 right-2 sm:right-6 z-20 bg-[#151515] border border-white/10 px-3.5 py-2 shadow-xl hidden sm:block">
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#8DF000]" />
                <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-white">
                  MOVEMENT // SPLIT-STEP
                </span>
              </div>
              <span className="text-[10px] text-neutral-400 font-sans block mt-0.5">
                Deceleration into explosive recovery
              </span>
            </div>

            {/* 03. TACTICS - Bottom Right (Desktop) */}
            <div className="absolute -bottom-6 right-0 sm:-right-4 z-20 bg-[#151515] border border-white/10 px-3.5 py-2 shadow-xl hidden sm:block">
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#8DF000]" />
                <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-white">
                  TACTICS // ANGLE LEVERAGE
                </span>
              </div>
              <span className="text-[10px] text-neutral-400 font-sans block mt-0.5">
                Reading depth & opening baseline lanes
              </span>
            </div>

            {/* 04. MENTALITY - Bottom Left Floating (Desktop) */}
            <div className="absolute -bottom-8 left-4 sm:left-12 z-20 bg-[#050505] text-white px-4 py-2.5 shadow-xl border-t border-[#8DF000] hidden sm:block">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#8DF000]" />
                <span className="font-mono text-[11px] font-bold tracking-wider uppercase">
                  MENTALITY // BREAK POINT RESILIENCE
                </span>
              </div>
            </div>

            {/* Mobile-Only Clean Technical Annotations Stack (< sm) */}
            <div className="block sm:hidden mt-3 space-y-2 font-mono">
              <div className="bg-[#151515] border border-white/10 p-3 shadow-sm">
                <div className="flex items-center gap-2 mb-0.5">
                  <Zap className="w-3.5 h-3.5 text-[#8DF000]" />
                  <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-white">
                    MOVEMENT // SPLIT-STEP
                  </span>
                </div>
                <span className="text-[10px] text-neutral-400 font-sans block">
                  Deceleration into explosive recovery
                </span>
              </div>

              <div className="bg-[#151515] border border-white/10 p-3 shadow-sm">
                <div className="flex items-center gap-2 mb-0.5">
                  <Compass className="w-3.5 h-3.5 text-[#8DF000]" />
                  <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-white">
                    TACTICS // ANGLE LEVERAGE
                  </span>
                </div>
                <span className="text-[10px] text-neutral-400 font-sans block">
                  Reading depth & opening baseline lanes
                </span>
              </div>

              <div className="bg-[#050505] text-white p-3 shadow-sm border-t-2 border-[#8DF000]">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#8DF000]" />
                  <span className="font-mono text-[11px] font-bold tracking-wider uppercase">
                    MENTALITY // BREAK POINT RESILIENCE
                  </span>
                </div>
              </div>
            </div>

            {/* Background Geometric Tennis Geometry Shadow */}
            <div className="absolute -inset-4 border border-dashed border-white/10 pointer-events-none -z-10 translate-x-3 translate-y-3" />
          </aside>

        </div>

        {/* Bottom Editorial Strip with 4 Distinct Competencies */}
        <footer className="mt-12 sm:mt-16 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono">
          <div>
            <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">01 / DISCIPLINE</span>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">STRUCTURED DRILLS</h4>
          </div>
          <div>
            <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">02 / BIOMECHANICS</span>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">VIDEO TELEMETRY</h4>
          </div>
          <div>
            <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">03 / PERFORMANCE</span>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">MATCH INTENSITY</h4>
          </div>
          <div>
            <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">04 / DUBAI VENUES</span>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">TOURNAMENT COURTS</h4>
          </div>
        </footer>
      </div>
    </section>
  );
}
