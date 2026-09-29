import React from 'react';
import { ArrowUpRight, ArrowRight, MessageSquare, Mail, MapPin, Navigation } from 'lucide-react';

export default function ContactDirectSection({ onNavigate }) {
  const actualWhatsAppNumber = "+971 55 276 6535";
  const actualWhatsAppChatUrl = "https://wa.me/971552766535?text=Hello%20Lion%20Elite,%20I%20would%20like%20to%20enquire%20about%20tennis%20sessions%20at%20your%20Al%20Jaddaf%20training%20facility.";
  const actualEmail = "lionelitetennis890@gmail.com";
  const googleMapsUrl = "https://maps.app.goo.gl/hrLRsoCudoPXbSHV9?g_st=ac";
  const embedMapUrl = "https://maps.google.com/maps?q=Swiss+International+Scientific+School+in+Dubai,+Al+Jaddaf,+Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section 
      id="contact-direct"
      className="relative bg-[#050505] text-[#FFFFFF] pt-4 pb-6 sm:pt-6 sm:pb-8 lg:pt-6 lg:pb-10 border-b border-white/10 overflow-hidden"
      aria-label="Direct Contact and Academy Location Section"
    >
      {/* Subtle Court Line Texture */}
      <div className="absolute inset-0 court-grid-pattern opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 bg-[#8CE600]" aria-hidden="true" />
            <span className="font-mono text-xs sm:text-sm tracking-wider uppercase text-[#8CE600] font-medium">
              02 / FIND US
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-[0.95] max-w-3xl">
            CLOSER THAN <br />
            <span className="text-white/60">YOU THINK.</span>
          </h2>
        </div>

        {/* Architectural Asymmetric Layout: Left Contact / Right Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT: Typographic Contact Information (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            
            <div className="space-y-0 divide-y divide-white/10 border-y border-white/10">
              
              {/* WhatsApp Row */}
              <div className="py-7 group">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#8CE600] tracking-widest uppercase font-bold flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5" />
                    WHATSAPP
                  </span>
                  <span className="font-mono text-[10px] text-white/40">OFFICIAL CHAT</span>
                </div>
                <a
                  href={actualWhatsAppChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white hover:text-[#8CE600] transition-colors flex items-center justify-between"
                  title="Open Lion Elite WhatsApp"
                >
                  <span>{actualWhatsAppNumber}</span>
                  <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-[#8CE600] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
                <p className="font-sans text-xs text-[#B9B9B9] mt-2">
                  Direct live messaging with coaching directors. Daily response time within 2 hours.
                </p>
              </div>

              {/* Email Row */}
              <div className="py-7 group">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#8CE600] tracking-widest uppercase font-bold flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" />
                    EMAIL
                  </span>
                  <span className="font-mono text-[10px] text-white/40">DIRECT ENQUIRIES</span>
                </div>
                <a
                  href={`mailto:${actualEmail}`}
                  className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white hover:text-[#8CE600] transition-colors flex items-center justify-between break-all"
                  title="Send Email to Lion Elite"
                >
                  <span>{actualEmail}</span>
                  <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-[#8CE600] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 ml-2" />
                </a>
                <p className="font-sans text-xs text-[#B9B9B9] mt-2">
                  Corporate booking, player evaluations, program sponsorships and general inquiries.
                </p>
              </div>

              {/* Location Row */}
              <div className="py-7">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#8CE600] tracking-widest uppercase font-bold flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" />
                    LOCATION
                  </span>
                  <span className="font-mono text-[10px] text-white/40">CHAMPIONSHIP COURTS</span>
                </div>
                <div className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white leading-snug">
                  Swiss International Scientific School in Dubai
                </div>
                <div className="font-sans text-sm sm:text-base text-[#B9B9B9] mt-1 space-y-0.5">
                  <p>Dubai Healthcare City Phase 2</p>
                  <p>Al Jaddaf, Dubai, United Arab Emirates</p>
                </div>
              </div>

            </div>

            {/* Quick Location CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#8CE600] hover:bg-white text-[#050505] font-display text-xs font-bold tracking-wider uppercase transition-colors group shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('/locations');
                  } else {
                    window.location.href = '/locations';
                  }
                }}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#151515] hover:bg-white/10 text-white hover:text-[#8CE600] border border-white/15 font-display text-xs font-bold tracking-wider uppercase transition-colors group"
              >
                <span>EXPLORE OUR LOCATION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* RIGHT: Embedded Google Maps & Compact Information Overlay (Col 6-12) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative w-full h-[400px] sm:h-[480px] lg:h-full min-h-[400px] bg-[#151515] border border-white/10 overflow-hidden shadow-2xl">
              
              {/* Map Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#8CE600] z-20" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#8CE600] z-20" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#8CE600] z-20" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#8CE600] z-20" />

              {/* Responsive Embedded Map Iframe */}
              <iframe
                title="Lion Elite Tennis Academy Map Location at Swiss International Scientific School Dubai"
                src={embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />

              {/* Compact Architectural Location Information Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md bg-[#050505]/95 backdrop-blur-md p-4 sm:p-5 border border-white/15 shadow-2xl z-20">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 font-mono text-[10px]">
                  <span className="text-[#8CE600] font-bold tracking-widest uppercase">
                    CAMPUS TRAINING VENUE
                  </span>
                  <span className="text-white/40">25.2094° N, 55.3327° E</span>
                </div>
                
                <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wider text-white">
                  Swiss International Scientific School Dubai
                </h3>
                <p className="font-sans text-xs text-[#B9B9B9] mt-1">
                  Championship outdoor floodlit hardcourts with private academy parking & player clubhouse access.
                </p>

                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#8CE600] hover:text-white transition-colors"
                  >
                    <span>OPEN IN GOOGLE MAPS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="font-mono text-[10px] text-white/50">AL JADDAF // PHASE 2</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
