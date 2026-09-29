import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────

const programs = [
  {
    id: 'junior',
    num: '01',
    shortName: 'JUNIORS',
    title: 'JUNIOR DEVELOPMENT',
    headline: 'BUILD THE GAME EARLY.',
    description:
      'Structured coaching helping young players develop technique, movement, confidence and understanding of the game.',
    focus: ['Technique', 'Movement', 'Coordination', 'Confidence'],
    cta: 'EXPLORE JUNIOR TRAINING',
    bookingId: 'junior-dev',
    img: '/prog-junior.jpg',
    imgAlt: 'Junior tennis coaching Dubai - Lion Elite Academy',
  },
  {
    id: 'adult',
    num: '02',
    shortName: 'ADULTS',
    title: 'ADULT TENNIS',
    headline: 'KEEP DEVELOPING YOUR GAME.',
    description:
      'Structured coaching for adults ranging from beginners to experienced recreational players.',
    focus: ['Technique', 'Consistency', 'Movement', 'Match Play'],
    cta: 'EXPLORE ADULT TENNIS',
    bookingId: 'adult-tennis',
    img: '/prog-adult.jpg',
    imgAlt: 'Adult tennis lessons Dubai - Lion Elite Academy',
  },
  {
    id: 'private',
    num: '03',
    shortName: 'PRIVATE',
    title: 'PRIVATE COACHING',
    headline: 'ONE PLAYER.\nONE COACH.\nONE PLAN.',
    description:
      "Individual coaching focused entirely on the player's game, goals and development priorities.",
    focus: ['Assessment', 'Technique', 'Individual Development', 'Match Strategy'],
    cta: 'BOOK PRIVATE COACHING',
    bookingId: 'private-coaching',
    img: '/prog-private.jpg',
    imgAlt: 'Private tennis lessons Dubai - Lion Elite Academy',
  },
  {
    id: 'performance',
    num: '04',
    shortName: 'PERFORMANCE',
    title: 'HIGH PERFORMANCE',
    headline: 'TRAIN FOR THE\nPOINT THAT MATTERS.',
    description:
      'Performance-focused training for ambitious players looking to develop their technical, physical, tactical and competitive game.',
    focus: ['Technical', 'Physical', 'Tactical', 'Mental'],
    cta: 'EXPLORE PERFORMANCE TRAINING',
    bookingId: 'high-performance',
    img: '/prog-performance.jpg',
    imgAlt: 'High performance tennis Dubai - Lion Elite Academy',
  },
  {
    id: 'group',
    num: '05',
    shortName: 'GROUP',
    title: 'GROUP TRAINING',
    headline: 'TRAIN TOGETHER.\nPROGRESS INDIVIDUALLY.',
    description:
      'Structured group sessions combining coaching, repetition, movement and competitive interaction.',
    focus: ['Repetition', 'Movement', 'Competition', 'Development'],
    cta: 'JOIN GROUP TRAINING',
    bookingId: 'group-training',
    img: '/prog-group.jpg',
    imgAlt: 'Group tennis training Dubai - Lion Elite Academy',
  },
  {
    id: 'matchplay',
    num: '06',
    shortName: 'MATCH PLAY',
    title: 'MATCH PLAY',
    headline: 'TRAINING MEETS\nCOMPETITION.',
    description:
      'Apply technique in realistic point situations while developing tactical awareness and decision-making.',
    focus: ['Tactics', 'Decision Making', 'Point Construction', 'Competition'],
    cta: 'EXPLORE MATCH PLAY',
    bookingId: 'match-play',
    img: '/prog-matchplay.jpg',
    imgAlt: 'Match play tennis lessons Dubai - Lion Elite Academy',
  },
];

const levelOptions = [
  {
    id: 'new',
    label: "I'M NEW TO TENNIS →",
    tag: 'NEW TO TENNIS',
    recommended: ['Junior Development', 'Adult Tennis'],
  },
  {
    id: 'improve',
    label: 'I WANT TO IMPROVE →',
    tag: 'IMPROVE',
    recommended: ['Group Training', 'Private Coaching'],
  },
  {
    id: 'oneonone',
    label: 'I WANT 1-TO-1 COACHING →',
    tag: '1-TO-1',
    recommended: ['Private Coaching'],
  },
  {
    id: 'comp',
    label: 'I TRAIN COMPETITIVELY →',
    tag: 'COMPETITIVE',
    recommended: ['High Performance', 'Match Play'],
  },
];

const standardWords = ['TECHNIQUE', 'MOVEMENT', 'INTELLIGENCE', 'CONFIDENCE', 'COMPETITION'];

// ─── 01 HERO ─────────────────────────────────────────────────────────────────

function ProgramsHero({ onOpenBooking }) {
  // JSON-LD Schema for Google Rich Results (Tennis Programs & Academy Location in Dubai)
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    'name': 'Lion Elite Tennis Academy Dubai Programs',
    'url': 'https://lionelitetennis.ae/programs',
    'logo': 'https://lionelitetennis.ae/logo.png',
    'image': 'https://lionelitetennis.ae/programs-hero.jpg',
    'description':
      'Comprehensive tennis programs in Dubai including junior tennis coaching, adult tennis lessons, private tennis coaching, high performance tennis, group training and match play.',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Al Wasl Road, Jumeirah & Dubai Sports City',
      'addressLocality': 'Dubai',
      'addressCountry': 'AE',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '25.2048',
      'longitude': '55.2708',
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Dubai Tennis Training Programs',
      'itemListElement': programs.map((p, idx) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Course',
          'name': p.title,
          'description': p.description,
          'provider': {
            '@type': 'SportsClub',
            'name': 'Lion Elite Tennis Academy',
          },
        },
        'position': idx + 1,
      })),
    },
  };

  return (
    <section
      className="relative w-full bg-[#050505] overflow-hidden flex flex-col justify-center border-b border-white/5"
      aria-label="Lion Elite Tennis Programs Dubai"
      itemScope
      itemType="https://schema.org/SportsActivityLocation"
    >
      {/* Google Rich Result JSON-LD Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Background thin tennis court geometry */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 bottom-0 left-[6%] w-[1px] bg-white/[0.04]" />
        <div className="absolute top-0 bottom-0 right-[22%] w-[1px] bg-white/[0.03]" />
        <div className="absolute bottom-[20%] left-0 right-0 h-[1px] bg-white/[0.04]" />
        <div className="absolute top-[35%] left-[6%] right-[22%] h-[1px] bg-white/[0.02]" />
        <div className="absolute top-[35%] bottom-[20%] left-[45%] w-[1px] bg-white/[0.02]" />
        <div className="absolute right-[5%] bottom-[-5%] font-mono font-black text-[22vw] leading-none text-white/[0.015] select-none pointer-events-none">
          06
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-32 sm:pt-36 lg:pt-40 pb-8 lg:pb-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left / Main Hero Content Block */}
          <header className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Label with Location Microdata */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-[#8CE600]" />
              <span className="font-mono text-[11px] sm:text-xs text-[#8CE600] tracking-[0.25em] uppercase font-semibold">
                LION ELITE / TENNIS PROGRAMS DUBAI
              </span>
            </div>

            <div className="font-mono text-[11px] text-[#B9B9B9] tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
              <span itemProp="addressLocality">DUBAI, UAE</span>
              <span className="text-[#8CE600]">•</span>
              <span>ACADEMY STANDARD</span>
            </div>

            {/* Exactly ONE H1 for Core SEO Page Hierarchy */}
            <h1
              itemProp="name"
              className="font-black uppercase tracking-tighter text-[#F5F5F0] leading-[0.88] mb-6 select-none"
              style={{ fontSize: 'clamp(52px, 8vw, 110px)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              FIND YOUR<br />
              <span className="text-[#8CE600]">GAME.</span>
            </h1>

            {/* Keyword-Rich Natural SEO Copy */}
            <p
              itemProp="description"
              className="text-[#B9B9B9] text-base sm:text-lg leading-relaxed max-w-xl font-normal mb-8"
            >
              Structured <strong className="font-medium text-white">tennis programs in Dubai</strong> designed for all ages and skill levels — from <strong className="font-medium text-white">junior tennis coaching</strong> and <strong className="font-medium text-white">adult tennis lessons</strong> to 1-on-1 <strong className="font-medium text-white">private tennis coaching</strong>, group sessions, and <strong className="font-medium text-white">high performance tennis</strong>.
            </p>

            {/* CTAs with descriptive titles */}
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#programs-index"
                title="Explore Tennis Programs in Dubai"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#8CE600] text-[#050505] font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors duration-200"
              >
                <span>EXPLORE PROGRAMS</span>
                <span className="font-mono text-sm">↓</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenBooking('junior-dev')}
                title="Enquire about Dubai Tennis Coaching"
                className="font-mono text-xs text-[#B9B9B9] hover:text-[#8CE600] uppercase tracking-widest transition-colors py-2 border-b border-transparent hover:border-[#8CE600]"
              >
                ENQUIRE DIRECTLY →
              </button>
            </div>
          </header>

          {/* Right / Photography & LCP Optimized Asset */}
          <div className="lg:col-span-4 relative">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/3.5] lg:aspect-[4/5] max-w-[420px] mx-auto bg-[#151515] border border-white/10 overflow-hidden">
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#8CE600] z-20" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#8CE600] z-20" />

              <img
                src="https://res.cloudinary.com/q5fz3r2n/image/upload/programs-hero"
                alt="Tennis Programs Dubai - Lion Elite Tennis Academy Junior and Adult Coaching"
                width={520}
                height={650}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-widest text-[#B9B9B9] z-10 bg-[#050505]/80 p-2.5 border border-white/10">
                <span className="text-[#8CE600] font-bold">DUBAI TENNIS ACADEMY</span>
                <span>6 PATHWAYS</span>
              </div>
            </div>
          </div>

          {/* Vertical Index */}
          <nav aria-label="Program Quick Index" className="hidden lg:flex lg:col-span-1 flex-col justify-center items-start pl-2 border-l border-white/10 py-6">
            <div className="font-mono text-[9px] text-[#8CE600] tracking-widest uppercase mb-4 writing-mode-vertical">
              INDEX
            </div>
            <div className="space-y-4">
              {programs.map((p) => (
                <a
                  key={p.id}
                  href="#programs-index"
                  title={`View ${p.title} Program`}
                  className="group flex flex-col items-start text-left cursor-pointer"
                >
                  <span className="font-mono text-[11px] font-bold text-[#8CE600] group-hover:text-white transition-colors">
                    {p.num}
                  </span>
                  <span className="font-mono text-[9px] text-white/40 tracking-wider group-hover:text-white transition-colors uppercase whitespace-nowrap">
                    {p.shortName}
                  </span>
                </a>
              ))}
            </div>
          </nav>

        </div>
      </div>
    </section>
  );
}

// ─── 02 PROGRAMS: INTERACTIVE PROGRAM BOARD ───────────────────────────────────

function ProgramsBoard({ onOpenBooking }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeProg = programs[selectedIdx];

  return (
    <section
      id="programs-index"
      className="relative w-full bg-[#050505] text-[#F5F5F0] pt-8 lg:pt-12 pb-10 lg:pb-14 border-b border-white/10"
      aria-label="Programs Selection Board"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14 lg:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 bg-[#8CE600]" />
            <span className="font-mono text-xs text-[#8CE600] tracking-[0.25em] uppercase font-bold">
              01 / CHOOSE YOUR TRAINING
            </span>
          </div>
          <h2
            className="font-black uppercase tracking-tighter text-[#F5F5F0] leading-[0.9] text-3xl sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            SIX WAYS<br />
            TO MOVE<br />
            <span className="text-[#8CE600]">YOUR GAME FORWARD.</span>
          </h2>
        </div>

        {/* The Interactive Program Index: Split Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/10 bg-[#0A0A0A]">
          
          {/* LEFT SIDE: Tournament/Program Board Selector (Cols 1-5) */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col">
            <div className="px-6 py-4 bg-[#111111] border-b border-white/10 flex items-center justify-between">
              <span className="font-mono text-[11px] text-white/50 tracking-widest uppercase">
                ACTIVE PROGRAM ROSTER
              </span>
              <span className="font-mono text-[11px] text-[#8CE600] font-bold">
                0{selectedIdx + 1} / 06
              </span>
            </div>

            <div className="divide-y divide-white/10 flex-1">
              {programs.map((prog, idx) => {
                const isActive = selectedIdx === idx;
                return (
                  <button
                    key={prog.id}
                    type="button"
                    onClick={() => setSelectedIdx(idx)}
                    onMouseEnter={() => setSelectedIdx(idx)}
                    className={`w-full text-left p-5 sm:p-6 transition-all duration-200 flex items-center justify-between group ${
                      isActive
                        ? 'bg-[#151515] border-l-4 border-l-[#8CE600]'
                        : 'bg-transparent hover:bg-white/[0.02] border-l-4 border-l-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-5 sm:gap-6">
                      <span
                        className={`font-mono text-xl sm:text-2xl font-bold transition-colors ${
                          isActive ? 'text-[#8CE600]' : 'text-white/20 group-hover:text-white/50'
                        }`}
                      >
                        {prog.num}
                      </span>
                      <div>
                        <h3
                          className={`font-bold text-base sm:text-lg uppercase tracking-tight transition-colors ${
                            isActive ? 'text-[#F5F5F0]' : 'text-white/60 group-hover:text-white'
                          }`}
                        >
                          {prog.title}
                        </h3>
                        <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase block mt-0.5">
                          {prog.focus.slice(0, 2).join(' • ')}
                        </span>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isActive
                          ? 'text-[#8CE600] translate-x-1'
                          : 'text-white/10 group-hover:text-white/40 group-hover:translate-x-0.5'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: Dynamically Changing Panel (Cols 6-12) */}
          <div className="lg:col-span-7 flex flex-col relative bg-[#070707] overflow-hidden min-h-[520px] lg:min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProg.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="flex-1 flex flex-col justify-between"
              >
                {/* Photo with subtle clip & technical metadata overlay */}
                <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden border-b border-white/10">
                  <img
                    src={activeProg.img}
                    alt={activeProg.imgAlt}
                    className="w-full h-full object-cover contrast-110 brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent" />

                  {/* Top technical badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="font-mono text-[10px] bg-[#050505]/85 border border-white/15 px-3 py-1 text-[#8CE600] font-bold tracking-widest uppercase">
                      PROGRAM {activeProg.num} // DUBAI
                    </span>
                  </div>

                  {/* Headline on photograph */}
                  <div className="absolute bottom-4 left-6 right-6 z-10">
                    <h3
                      className="font-black uppercase text-2xl sm:text-3xl lg:text-4xl text-[#F5F5F0] tracking-tighter leading-none whitespace-pre-line"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {activeProg.headline}
                    </h3>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-6">
                    <p className="text-[#B9B9B9] text-base leading-relaxed font-light max-w-xl">
                      {activeProg.description}
                    </p>

                    {/* Focus Areas */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="font-mono text-[10px] text-[#8CE600] tracking-[0.2em] uppercase font-bold mb-3">
                        FOCUS AREAS:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeProg.focus.map((item) => (
                          <span
                            key={item}
                            className="font-mono text-xs text-[#F5F5F0] bg-[#151515] border border-white/10 px-3.5 py-1.5 uppercase tracking-wider"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Area */}
                  <div className="pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => onOpenBooking(activeProg.bookingId)}
                      className="inline-flex items-center gap-3 px-7 py-4 bg-[#8CE600] text-[#050505] font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors"
                    >
                      <span>{activeProg.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                      ACADEMY EVALUATION INCLUDED
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

// ─── 03 FIND YOUR LEVEL ───────────────────────────────────────────────────────

function FindYourLevel({ onOpenBooking }) {
  const [openId, setOpenId] = useState(null);

  return (
    <section
      className="relative w-full bg-[#050505] text-[#F5F5F0] pt-8 lg:pt-12 pb-12 lg:pb-16 border-b border-white/10"
      aria-label="Find Your Level"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 bg-[#8CE600]" />
            <span className="font-mono text-xs text-[#8CE600] tracking-[0.25em] uppercase font-bold">
              02 / NOT SURE WHERE TO START?
            </span>
          </div>
          <h2
            className="font-black uppercase tracking-tighter text-[#F5F5F0] leading-[0.9] text-3xl sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            WHERE ARE YOU<br />
            IN YOUR GAME?
          </h2>
        </div>

        {/* Four Large Horizontal Choices (NO CARDS, Typography + Thin Lines) */}
        <div className="border-t border-white/10">
          {levelOptions.map((opt, idx) => {
            const isOpen = openId === opt.id;
            return (
              <div
                key={opt.id}
                className="border-b border-white/10 transition-colors"
                onMouseEnter={() => setOpenId(opt.id)}
                onMouseLeave={() => setOpenId(null)}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : opt.id)}
                  className="w-full py-7 sm:py-9 flex flex-col md:flex-row md:items-center justify-between text-left group gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs sm:text-sm text-[#8CE600] font-bold">
                      0{idx + 1}
                    </span>
                    <span
                      className="font-black uppercase text-2xl sm:text-4xl lg:text-5xl tracking-tight text-white group-hover:text-[#8CE600] group-hover:translate-x-2 transition-all duration-200"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {opt.label}
                    </span>
                  </div>

                  {/* Recommendation pill inline or on hover */}
                  <div className="flex items-center gap-4 pl-8 md:pl-0">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/40 group-hover:text-white">
                      VIEW RECOMMENDATION
                    </span>
                    <span className="font-mono text-lg font-bold text-[#8CE600] group-hover:translate-x-1 transition-transform">
                      {isOpen ? '↓' : '→'}
                    </span>
                  </div>
                </button>

                {/* Simple recommendation reveal */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="overflow-hidden bg-[#111111] border-t border-white/10 px-6 sm:px-10 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div>
                        <span className="font-mono text-[11px] text-[#8CE600] uppercase tracking-widest block mb-1">
                          {opt.tag} • RECOMMENDED PATHWAY:
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                          {opt.recommended.map((progName) => (
                            <span
                              key={progName}
                              className="font-black text-base sm:text-xl uppercase tracking-tight text-white"
                            >
                              {progName}
                              <span className="text-[#8CE600]/40 mx-2 last:hidden">/</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onOpenBooking('junior-dev')}
                        className="self-start sm:self-auto px-6 py-3 bg-[#8CE600] text-[#050505] font-mono text-xs uppercase tracking-widest hover:bg-white transition-colors font-bold whitespace-nowrap"
                      >
                        BOOK ASSESSMENT →
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// ─── 04 THE LION ELITE STANDARD ───────────────────────────────────────────────

function LionEliteStandard() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505] text-[#F5F5F0] pt-10 lg:pt-14 pb-20 lg:pb-24 overflow-hidden border-b border-white/10"
      aria-label="The Lion Elite Standard"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-2 h-2 bg-[#8CE600]" />
          <span className="font-mono text-xs text-[#8CE600] tracking-[0.25em] uppercase font-bold">
            03 / EVERY PROGRAM
          </span>
        </div>
        <h2
          className="font-black uppercase tracking-tighter text-[#F5F5F0] leading-[0.9] text-3xl sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          DIFFERENT TRAINING.<br />
          <span className="text-[#8CE600]">SAME STANDARD.</span>
        </h2>
      </div>

      {/* Extremely large words across the section with smooth scroll movement */}
      <div className="py-10 sm:py-14 border-y border-white/10 overflow-hidden select-none">
        <motion.div style={{ x }} className="flex items-center gap-8 sm:gap-12 whitespace-nowrap will-change-transform py-2">
          {[...standardWords, ...standardWords].map((word, i) => (
            <React.Fragment key={`${word}-${i}`}>
              <span
                className="font-black tracking-tighter text-[#151515] hover:text-[#8CE600] transition-colors duration-300 inline-block py-1"
                style={{
                  fontSize: 'clamp(52px, 9.5vw, 115px)',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  WebkitTextStroke: '1px rgba(255, 255, 255, 0.25)',
                  lineHeight: 1.15,
                }}
              >
                {word}
              </span>
              <span className="text-[#8CE600] text-3xl sm:text-5xl font-mono shrink-0">/</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Supporting statement */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mt-12">
        <p className="text-[#B9B9B9] text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
          Whatever your level, every Lion Elite program is built around purposeful development — helping players understand their game and keep moving forward.
        </p>

        {/* Subtle internal links */}
        <div className="mt-8 flex flex-wrap gap-6 font-mono text-xs text-white/50 tracking-widest uppercase">
          <a href="/about" className="hover:text-[#8CE600] transition-colors">
            ACADEMY PHILOSOPHY & METHOD →
          </a>
          <a href="/#coaches" className="hover:text-[#8CE600] transition-colors">
            MEET THE COACHING STAFF →
          </a>
          <a href="/#contact" className="hover:text-[#8CE600] transition-colors">
            COURT LOCATIONS →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── 05 FINAL CTA ────────────────────────────────────────────────────────────

function ProgramsFinalCta({ onOpenBooking }) {
  return (
    <section
      className="relative w-full bg-[#050505] text-[#F5F5F0] py-20 lg:py-28 overflow-hidden border-t border-white/10"
      aria-label="Book Tennis Coaching Programs in Dubai"
      itemScope
      itemType="https://schema.org/ContactPoint"
    >
      {/* Background CTA Image from /programs/CTA.png - Full visibility background asset */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <img
          src="https://res.cloudinary.com/q5fz3r2n/image/upload/CTA"
          alt="Lion Elite Tennis Academy Dubai Programs CTA"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-[#050505]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Headline & Copy */}
          <div className="lg:col-span-8">
            <span className="font-mono text-xs font-black tracking-[0.25em] uppercase block mb-4 text-[#8CE600]">
              ENQUIRE ABOUT DUBAI TENNIS COACHING
            </span>
            <h2
              itemProp="name"
              className="font-black uppercase tracking-tighter text-white leading-[0.88] text-4xl sm:text-6xl lg:text-7xl mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              NOT SURE WHICH<br />
              <span className="text-[#8CE600]">PROGRAM IS YOURS?</span>
            </h2>
            <p className="text-[#B9B9B9] text-base sm:text-lg font-normal leading-relaxed max-w-xl">
              Tell us about your experience, level, and goals. Whether you are looking for <strong className="font-semibold text-white">junior tennis lessons</strong>, <strong className="font-semibold text-white">adult tennis coaching</strong>, 1-on-1 <strong className="font-semibold text-white">private tennis lessons</strong>, or <strong className="font-semibold text-white">high-performance tennis training in Dubai</strong>, we will help you find the right environment.
            </p>
          </div>

          {/* Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <button
              type="button"
              onClick={() => onOpenBooking('junior-dev')}
              title="Find your ideal Tennis Program in Dubai"
              aria-label="Find My Tennis Program in Dubai"
              className="w-full px-8 py-5 bg-[#8CE600] text-[#050505] font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#050505] transition-colors text-center"
            >
              FIND MY PROGRAM →
            </button>

            <a
              href="https://wa.me/971552766535"
              target="_blank"
              rel="noopener noreferrer"
              title="Contact Lion Elite Tennis Academy Dubai on WhatsApp"
              aria-label="WhatsApp Lion Elite Tennis Academy Dubai"
              className="w-full px-8 py-5 border-2 border-[#8CE600] text-[#8CE600] font-black text-xs uppercase tracking-[0.2em] hover:bg-[#8CE600] hover:text-[#050505] transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP THE ACADEMY →</span>
            </a>
          </div>

        </div>

        {/* Minimal tennis baseline running horizontally */}
        <div className="relative mt-16 sm:mt-20 pt-8">
          {/* Baseline line */}
          <div className="w-full h-[2px] bg-[#8CE600]/40" />
          {/* Center mark on baseline */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-[#8CE600]/60" />
          {/* Small tennis ball sitting on the baseline */}
          <div
            className="absolute top-8 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8CE600] shadow-sm flex items-center justify-center"
            style={{ left: '68%' }}
            aria-hidden="true"
          >
            <div className="w-3 h-3 rounded-full border border-[#050505]/60" />
          </div>
          <address className="not-italic flex justify-between font-mono text-[9px] font-bold text-white/50 tracking-widest uppercase mt-3">
            <span>DUBAI TENNIS COURTS • AL WASL & SPORTS CITY</span>
            <span>LION ELITE ACADEMY SPECIFICATION</span>
            <span>25.2048° N, 55.2708° E</span>
          </address>
        </div>

      </div>
    </section>
  );
}

// ─── MAIN PROGRAMS PAGE COMPONENT ─────────────────────────────────────────────

export default function ProgramsPage({ onOpenBooking, onNavigate }) {
  // Update SEO Title & Meta tags dynamically
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Tennis Programs Dubai | Lion Elite Tennis Academy';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    const prevDesc = metaDesc.content;
    metaDesc.content =
      'Explore tennis programs in Dubai at Lion Elite, including junior, adult, private, group, match play and high-performance tennis coaching.';

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    const prevCanonical = canonical.href;
    canonical.href = 'https://lionelitetennis.ae/programs';

    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      document.title = originalTitle;
      metaDesc.content = prevDesc;
      canonical.href = prevCanonical;
    };
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#050505]">
      {/* 01 — HERO */}
      <ProgramsHero onOpenBooking={onOpenBooking} />

      {/* 02 — PROGRAMS (Interactive Board) */}
      <ProgramsBoard onOpenBooking={onOpenBooking} />

      {/* 03 — FIND YOUR LEVEL */}
      <FindYourLevel onOpenBooking={onOpenBooking} />

      {/* 04 — THE LION ELITE STANDARD */}
      <LionEliteStandard />

      {/* 05 — FINAL CTA */}
      <ProgramsFinalCta onOpenBooking={onOpenBooking} />
    </main>
  );
}
