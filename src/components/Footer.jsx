import React from 'react';
import { ArrowUpRight, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Footer({ onOpenBooking, onNavigate }) {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Locations", href: "/locations" },
    { name: "Coaches", href: "/#coaches" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const handleQuickLinkClick = (e, link) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(link.href);
    }
  };

  const programLinks = [
    { name: "Junior Development", id: "junior-dev" },
    { name: "Adult Tennis", id: "adult-tennis" },
    { name: "Private Coaching", id: "private-coaching" },
    { name: "High Performance", id: "high-performance" },
    { name: "Group Training", id: "group-training" },
    { name: "Match Play", id: "match-play" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/lionelitetennis" },
    { name: "Facebook", href: "https://facebook.com/lionelitetennis" },
    { name: "YouTube", href: "https://youtube.com/@lionelitetennis" },
  ];

  return (
    <footer className="relative w-full bg-[#050505] text-[#F0F4F8] border-t-[3px] border-[#8DF000] pt-20 pb-12 overflow-hidden">
      
      {/* Minimal Court-Line Graphic Running Across Footer */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8DF000]/40 to-transparent" />
      <div className="absolute inset-0 court-grid-pattern opacity-15 pointer-events-none" />

      {/* Decorative Diagonal Baseline Geometry */}
      <div className="absolute right-0 bottom-0 w-96 h-96 border-r border-b border-white/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Huge Architectural Branding & Logo */}
        <div className="pb-16 border-b border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="h-28 sm:h-40 md:h-48 lg:h-56 shrink-0">
              <img
                src="/logo.png"
                alt="Lion Elite Tennis Academy Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <div>
              <span className="font-mono text-xs text-[#8DF000] tracking-court uppercase block mb-1">
                MIDDLE EAST // DUBAI UAE
              </span>
              <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase text-white tracking-tighter leading-none">
                LION ELITE <br />
                <span className="text-[#8DF000]">TENNIS ACADEMY</span>
              </h2>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="px-8 py-4 bg-[#8DF000] hover:bg-white text-[#050505] font-display text-sm font-bold tracking-wider uppercase transition-colors"
            >
              BOOK COURT EVALUATION
            </button>
          </div>
        </div>

        {/* Middle Tier: Architectural Grid (Links, Programs, Contact, Social) */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-[#8DF000]" />
              <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                QUICK LINKS
              </h3>
            </div>
            <ul className="space-y-3 font-display text-base tracking-wide uppercase">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleQuickLinkClick(e, link)}
                    className="text-[#B9B9B9] hover:text-[#8DF000] transition-colors flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <span className="w-0 h-[1px] bg-[#8DF000] transition-all group-hover:w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-[#8DF000]" />
              <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                PROGRAMS
              </h3>
            </div>
            <ul className="space-y-3 font-display text-base tracking-wide uppercase">
              {programLinks.map((prog) => (
                <li key={prog.id}>
                  <button
                    type="button"
                    onClick={() => onOpenBooking(prog.id)}
                    className="text-[#B9B9B9] hover:text-[#8DF000] transition-colors text-left"
                  >
                    {prog.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-[#8DF000]" />
              <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                CONTACT // DUBAI
              </h3>
            </div>
            <div className="space-y-3.5 text-xs text-[#B9B9B9] font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8DF000] shrink-0 mt-0.5" />
                <span>Al Wasl Road, Jumeirah & Dubai Sports City Courts, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8DF000] shrink-0" />
                <a href="tel:+971552766535" className="hover:text-white transition-colors">
                  +971 55 276 6535
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8DF000] shrink-0" />
                <a href="mailto:lionelitetennis890@gmail.com" className="hover:text-white transition-colors">
                  lionelitetennis890@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#8DF000] shrink-0" />
                <a
                  href="https://wa.me/971552766535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8DF000] transition-colors font-semibold"
                >
                  WhatsApp Official Line
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-[#8DF000]" />
              <h3 className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                SOCIAL // CHANNELS
              </h3>
            </div>
            <ul className="space-y-3 font-display text-base tracking-wide uppercase">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B9B9B9] hover:text-[#8DF000] transition-colors flex items-center justify-between"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#8DF000]" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-3 bg-[#111] border border-white/10 font-mono text-[10px] text-neutral-400">
              <span className="text-[#8DF000] block mb-1">OPERATING HOURS</span>
              <span>DAILY 06:00 – 23:00 GST</span>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Coordinates & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} LION ELITE TENNIS ACADEMY MIDDLE EAST. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 text-[10px]">
            <span>COURT COORDINATES: 25.2048° N, 55.2708° E</span>
            <span>•</span>
            <span className="text-[#8DF000]">BUILT FOR THE NEXT POINT.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
