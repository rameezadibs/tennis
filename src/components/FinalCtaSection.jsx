import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageSquare, MapPin } from 'lucide-react';

export default function FinalCtaSection({ onOpenBooking }) {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#050505] text-[#F0F4F8] overflow-hidden py-32 border-t-[3px] border-[#8DF000]"
    >
      {/* Background Image: Night Court with Floodlights */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="/assets/images/cta-night.jpg"
          alt="Luxury architectural night tennis court in Dubai illuminated by floodlights"
          className="w-full h-full object-cover object-center filter brightness-60 contrast-110"
          loading="lazy"
        />

        {/* Photometric Dark Gradients to Keep Copy Legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
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
          <span className="w-8 h-[2px] bg-[#8DF000]" />
          <span className="font-mono text-xs tracking-court uppercase text-[#8DF000] font-semibold">
            YOUR NEXT POINT STARTS HERE.
          </span>
          <span className="w-8 h-[2px] bg-[#8DF000]" />
        </motion.div>

        {/* Huge Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[115px] uppercase tracking-tighter leading-[0.88] text-white mb-8"
        >
          READY TO <br />
          STEP ON <br />
          <span className="text-[#8DF000]">COURT?</span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-base sm:text-lg md:text-xl text-[#B9B9B9] max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Whether you're picking up a racket for the first time or preparing for your next competition, your next level starts with the right training.
        </motion.p>

        {/* Animated Tennis Ball Travelling along Baseline Toward the CTA */}
        <div className="max-w-md mx-auto mb-10 relative py-2">
          {/* Baseline Line */}
          <div className="w-full h-[1.5px] bg-white/20 relative overflow-hidden">
            <motion.div
              className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#8DF000] to-transparent"
              animate={{ x: ["-100%", "450%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Rolling Tennis Ball traveling along the baseline */}
          <motion.div
            className="absolute top-0 w-4 h-4 rounded-full bg-[#8DF000] shadow-[0_0_12px_#8DF000] -translate-y-1/2"
            animate={{ left: ["0%", "96%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#8DF000] text-[#050505] font-display text-base font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white active:scale-98 shadow-xl shadow-[#8DF000]/20"
          >
            <span>BOOK A SESSION</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#050505]" />
          </button>

          <a
            href="https://wa.me/971552766535"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-display text-base font-bold tracking-wider uppercase transition-all duration-300 hover:border-[#8DF000] hover:text-[#8DF000]"
          >
            <MessageSquare className="w-4 h-4 text-[#8DF000]" />
            <span>CONTACT THE ACADEMY</span>
          </a>
        </motion.div>

        {/* Location & Quick Direct Contact Tag */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#B9B9B9]">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#8DF000]" />
            <span>DUBAI SPORTS CITY & AL WASL COURTS</span>
          </div>
          <span className="text-neutral-600">•</span>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#8DF000]" />
            <span>+971 55 276 6535</span>
          </div>
          <span className="text-neutral-600">•</span>
          <span className="text-[#8DF000]">GST TIME ZONE (UTC+4)</span>
        </div>

      </div>
    </section>
  );
}
