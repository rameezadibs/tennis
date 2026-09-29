import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const mantras = [
    { text: "THE SOUND OF THE SERVE.", id: 1 },
    { text: "THE FOOTWORK BETWEEN SHOTS.", id: 2 },
    { text: "THE DECISION UNDER PRESSURE.", id: 3 },
    { text: "THE POINT YOU REFUSE TO LOSE.", id: 4 },
  ];

  return (
    <section
      id="experience"
      className="relative w-full min-h-[70vh] flex items-center justify-center bg-[#050505] overflow-hidden py-16 sm:py-20 lg:py-24 border-t-[3px] border-[#8DF000]"
    >
      {/* Full-Bleed Dramatic Action Visual with Subtle Parallax & Mood Grade */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <picture className="w-full h-full block">
            <source media="(max-width: 767px)" srcSet="https://res.cloudinary.com/q5fz3r2n/image/upload/mobile_experience" />
            <img
              src="https://res.cloudinary.com/q5fz3r2n/image/upload/1"
              alt="The Lion Elite Tennis Experience"
              className="w-full h-full object-cover object-center filter brightness-65 contrast-110"
              loading="lazy"
            />
          </picture>
        </motion.div>

        {/* Cinematic Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/85 via-black/50 to-[#050505]/85" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-[1px] bg-[#8DF000]" />
          <span className="font-mono text-xs tracking-court uppercase text-[#8DF000] font-semibold">
            THE LION ELITE EXPERIENCE
          </span>
          <span className="w-8 h-[1px] bg-[#8DF000]" />
        </motion.div>

        {/* Massive Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[120px] uppercase text-white tracking-tighter leading-[0.88] mb-16"
        >
          MORE THAN <br />
          <span className="text-[#8DF000]">A LESSON.</span>
        </motion.h2>

        {/* Progressive Mantras Revealed on Scroll */}
        <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto mb-16">
          {mantras.map((mantra, idx) => (
            <motion.div
              key={mantra.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.18 }}
              className="flex items-center justify-center gap-4"
            >
              <span className="w-2 h-2 bg-[#8DF000] rotate-45 shrink-0" />
              <p className="font-display text-2xl sm:text-4xl md:text-5xl uppercase tracking-wider text-white font-bold">
                {mantra.text}
              </p>
              <span className="w-2 h-2 bg-[#8DF000] rotate-45 shrink-0" />
            </motion.div>
          ))}
        </div>

        {/* Climax Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-10 border-t border-white/10 inline-block"
        >
          <span className="font-mono text-xs text-[#B9B9B9] uppercase tracking-widest block mb-3">
            // UNCOMPROMISED ATHLETIC TRANSFORMATION
          </span>
          <p className="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-[#8DF000] uppercase tracking-wide">
            THIS IS WHERE REPETITION BECOMES INSTINCT.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
