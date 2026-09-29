import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { aboutHeroData } from '../../data/aboutData';

export default function AboutHero() {
  const scrollToNext = () => {
    const target = document.querySelector('#who-we-are');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about-hero" 
      aria-label="About Lion Elite Tennis Academy Dubai"
      itemScope 
      itemType="https://schema.org/SportsActivityLocation"
      className="relative min-h-[85vh] bg-[#050505] text-[#F0F4F8] pt-44 pb-12 lg:pt-48 lg:pb-16 border-b border-white/10 overflow-hidden"
    >
      {/* Hidden Microdata for Search Engine Crawlers */}
      <meta itemProp="name" content="Lion Elite Tennis Academy Dubai" />
      <meta itemProp="sport" content="Tennis" />
      <meta itemProp="url" content="https://lionelitetennis.ae/about" />
      <meta itemProp="telephone" content="+971552766535" />
      <meta itemProp="address" content="Al Wasl Road, Jumeirah & Dubai Sports City Courts, Dubai, UAE" />

      {/* Editorial Gridlines / Baseline Technical Markings */}
      <div className="absolute top-0 left-8 sm:left-16 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block" />
      <div className="absolute top-0 right-8 sm:right-16 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden md:block" />
      <div className="absolute inset-0 court-grid-pattern opacity-15 pointer-events-none" />

      {/* Archival Background Watermark Details */}
      <div className="absolute right-6 top-44 font-mono text-[9px] text-white/20 tracking-widest uppercase pointer-events-none select-none hidden lg:block">
        FOLIO NO. 01 / EDITORIAL DOSSIER // DUBAI UAE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* LEFT: Editorial Typography Column (7 Columns on LG) */}
          <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-8">
            
            {/* Top Technical Metadata Header */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 border-b border-white/10 pb-4 mb-8"
            >
              <span className="w-2 h-2 bg-[#8CE600] inline-block shadow-[0_0_8px_rgba(140,230,0,0.6)]" />
              <span className="font-mono text-xs font-semibold tracking-wider text-[#8CE600] uppercase" itemProp="keywords">
                {aboutHeroData.label}
              </span>
              <span className="font-mono text-xs text-white/30">•</span>
              <span className="font-mono text-xs text-white/60 tracking-wider uppercase">
                {aboutHeroData.sublabel}
              </span>
              <span className="ml-auto font-mono text-[10px] text-white/40 tracking-widest hidden sm:inline-block">
                {aboutHeroData.metadata.coordinates}
              </span>
            </motion.div>

            {/* Main Editorial Headline — Single H1 Tag Optimized for Search Indexing */}
            <motion.h1 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.92] text-white uppercase mb-8"
            >
              {/* Visually integrated SEO Keyword Eyebrow */}
              <span className="block font-mono text-xs sm:text-sm font-bold tracking-[0.22em] text-[#8CE600] uppercase mb-4 text-left">
                {aboutHeroData.seoTag}
              </span>
              <span>{aboutHeroData.titleLine1}</span><br />
              <span className="text-[#050505] bg-[#8CE600] px-3 py-0.5 inline-block my-1 font-black">
                {aboutHeroData.titleLine2}
              </span><br />
              <span>{aboutHeroData.titleLine3}</span>
            </motion.h1>

            {/* Supporting Editorial Body Copy with Rich Semantic Keywords */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 max-w-xl text-[#B9B9B9]"
              itemProp="description"
            >
              <p className="font-sans text-xl sm:text-2xl font-normal leading-relaxed text-white">
                {aboutHeroData.leadParagraph}
              </p>
              
              <div className="pt-4 border-t border-white/10">
                <p className="font-sans text-sm sm:text-base text-[#B9B9B9] leading-relaxed">
                  {aboutHeroData.secondaryParagraph}
                </p>
              </div>

              {/* High-Intent Keyword Tag Strip for SEO Relevance */}
              <div className="pt-2 flex flex-wrap gap-2 font-mono text-[10px] text-white/50 uppercase tracking-wider">
                {aboutHeroData.keywords.map((kw, i) => (
                  <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 hover:border-[#8CE600]/40 transition-colors">
                    #{kw}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Minimalist Editorial Action CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-8 sm:pt-12"
            >
              <button
                type="button"
                onClick={scrollToNext}
                aria-label="Discover our coaching approach"
                className="inline-flex items-center gap-3 py-2 text-xs font-mono font-bold tracking-widest text-[#8CE600] uppercase border-b-2 border-[#8CE600] hover:text-white hover:border-white transition-all duration-200 group cursor-pointer"
              >
                <span>{aboutHeroData.primaryCtaText}</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-1 text-[#8CE600]" />
              </button>
            </motion.div>

          </div>

          {/* RIGHT: Unconventional Asymmetric Editorial Photography Composition (5 Columns on LG) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              
              {/* Dark Archival Frame Boundary */}
              <figure className="relative border border-white/20 bg-[#151515] p-2.5 sm:p-3 shadow-2xl m-0">
                
                {/* Frame header bar */}
                <div className="flex items-center justify-between font-mono text-[9px] tracking-wider text-white/60 uppercase pb-2 border-b border-white/10 mb-2.5">
                  <span className="text-[#8CE600]">PLATE 01 // COACHING DISCOURSE</span>
                  <span>{aboutHeroData.metadata.location}</span>
                </div>

                {/* Primary Vertical Documentary Photography with High LCP Priority */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/10">
                  <img
                    src={aboutHeroData.heroImage}
                    alt={aboutHeroData.heroImageAlt}
                    title={aboutHeroData.heroImageAlt}
                    width={800}
                    height={1067}
                    fetchPriority="high"
                    decoding="async"
                    itemProp="image"
                    className="w-full h-full object-cover object-center contrast-[1.08] hover:scale-[1.02] transition-transform duration-700"
                  />
                  
                  {/* Fine technical overlay stamp in corner */}
                  <figcaption className="absolute bottom-2 left-2 bg-[#050505]/90 text-[#8CE600] font-mono text-[9px] px-2 py-1 tracking-wider uppercase border border-white/10">
                    {aboutHeroData.metadata.curriculum}
                  </figcaption>
                </div>

                {/* Frame footer with archival registration marks */}
                <div className="pt-2.5 flex items-center justify-between font-mono text-[9px] text-white/50">
                  <span>REF: {aboutHeroData.metadata.frameRef}</span>
                  <span className="text-[#8CE600] font-semibold">TENNIS ACADEMY DUBAI</span>
                </div>
              </figure>

              {/* Overlapping Macro Detail Image (Offset Sharp Square) */}
              <motion.div 
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-10 -left-6 sm:-left-10 w-44 sm:w-56 border-2 border-white/20 bg-[#151515] p-2 shadow-2xl z-20 hidden xs:block"
              >
                <div className="relative aspect-square overflow-hidden bg-neutral-900 border border-white/10">
                  <img
                    src={aboutHeroData.detailImage}
                    alt={aboutHeroData.detailImageAlt}
                    title={aboutHeroData.detailImageAlt}
                    width={400}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#8CE600]" />
                </div>
                <div className="pt-1.5 flex items-center justify-between font-mono text-[8px] tracking-wider text-white/70 uppercase">
                  <span className="text-[#8CE600]">DETAIL // GRIP TENSION</span>
                  <span>0.01mm CAL</span>
                </div>
              </motion.div>

              {/* Fine technical coordinate tag on side */}
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 rotate-90 origin-right font-mono text-[9px] text-white/20 tracking-widest uppercase select-none pointer-events-none hidden xl:block">
                TENNIS ACADEMY DUBAI // 25.2048° N, 55.2708° E
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
