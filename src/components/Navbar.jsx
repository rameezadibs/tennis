import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';

export default function Navbar({ onOpenBooking, activePage = "HOME", onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/", targetHash: "#hero" },
    { name: "ABOUT", href: "/about", targetHash: "#about-hero" },
    { name: "PROGRAMS", href: "/programs", targetHash: "#programs-hero" },
    { name: "LOCATIONS", href: "/locations", targetHash: "#locations" },
    { name: "CONTACT", href: "/contact", targetHash: "#contact" },
  ];

  const handleLinkClick = (e, link) => {
    if (onNavigate) {
      e.preventDefault();
      if (link.name === "ABOUT") {
        onNavigate('/about');
      } else if (link.name === "HOME") {
        onNavigate('/');
      } else if (link.name === "PROGRAMS") {
        onNavigate('/programs');
      } else if (link.name === "LOCATIONS") {
        onNavigate('/locations');
      } else if (link.name === "CONTACT") {
        onNavigate('/contact');
      } else {
        // Sections on homepage
        onNavigate(link.href);
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/90 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl"
            : "bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="/"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/');
              }
            }}
            className="flex items-center group relative"
            aria-label="Lion Elite Tennis Academy Home"
          >
            <img
              src="/logo.png"
              alt="Lion Elite Tennis Academy Logo"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                scrolled ? "h-14 sm:h-16 md:h-18" : "h-20 sm:h-24 md:h-28 lg:h-32"
              }`}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = link.name === activePage;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`relative font-display text-sm tracking-wider uppercase transition-colors duration-200 py-1 group ${
                    isActive ? "text-[#8DF000] font-bold" : "text-[#B9B9B9] hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.name}</span>
                  {/* Court-line active/hover interaction */}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-[#8DF000] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://wa.me/971552766535"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2 text-xs font-mono text-[#B9B9B9] hover:text-[#8DF000] transition-colors py-1.5 px-2.5 border border-white/10 hover:border-[#8DF000]/40"
              title="Quick WhatsApp Chat"
            >
              <Phone className="w-3.5 h-3.5 text-[#8DF000]" />
              <span>+971 55 276 6535</span>
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="relative inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#8DF000] text-[#050505] font-display text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:bg-white hover:text-[#050505] active:scale-95 group shadow-sm"
            >
              <span>BOOK A SESSION</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              {/* Corner court mark */}
              <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-white" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#8DF000] transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#050505]/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-10 lg:hidden"
          >
            <div className="space-y-6">
              <div className="font-mono text-xs text-[#8DF000] tracking-widest uppercase mb-4 pb-2 border-b border-white/10">
                NAVIGATION // COURT MENU
              </div>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => {
                  const isActive = link.name === activePage;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link)}
                      className={`font-display text-2xl tracking-wider uppercase transition-colors flex items-center justify-between border-b border-white/5 pb-2 ${
                        isActive ? "text-[#8DF000] font-bold" : "text-white hover:text-[#8DF000]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className="font-mono text-xs text-[#8DF000]">0{idx + 1}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-3 py-4 bg-[#8DF000] text-[#050505] font-display text-base font-bold tracking-wider uppercase"
              >
                BOOK A SESSION NOW
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="text-center font-mono text-[11px] text-[#B9B9B9] pt-2">
                DUBAI, UNITED ARAB EMIRATES • +971 55 276 6535
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
