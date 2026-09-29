import React, { useEffect } from 'react';
import AboutHero from './AboutHero';
import AboutWhoWeAre from './AboutWhoWeAre';
import AboutMethod from './AboutMethod';
import AboutBetweenThePoints from './AboutBetweenThePoints';
import AboutWhoWeCoach from './AboutWhoWeCoach';
import AboutTheStandard from './AboutTheStandard';
import AboutFinalCta from './AboutFinalCta';

export default function AboutPage({ onOpenBooking, onNavigate }) {
  // Update document title, meta tags, and canonical for SEO
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = "About Lion Elite | Professional Tennis Academy Dubai";

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Discover Lion Elite Tennis Academy in Dubai, our coaching philosophy, player development approach and commitment to professional tennis training for every level.'
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical ? canonical.getAttribute('href') : '';
    if (canonical) {
      canonical.setAttribute('href', 'https://lionelitetennis.ae/about');
    }

    // Add About-specific Structured Data
    const scriptId = 'about-structured-data';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["SportsActivityLocation", "LocalBusiness"],
        "@id": "https://lionelitetennis.ae/#academy",
        "name": "Lion Elite Tennis Academy – Middle East",
        "alternateName": ["Lion Elite Tennis Academy Dubai", "Lion Elite Tennis Dubai"],
        "description": "Premier professional tennis academy in Dubai offering structured tennis coaching, player development pathways, private lessons, and high-performance training.",
        "url": "https://lionelitetennis.ae/about",
        "telephone": "+971552766535",
        "email": "lionelitetennis890@gmail.com",
        "areaServed": [
          {
            "@type": "City",
            "name": "Dubai",
            "sameAs": "https://en.wikipedia.org/wiki/Dubai"
          },
          {
            "@type": "Country",
            "name": "United Arab Emirates"
          }
        ],
        "knowsAbout": [
          "Tennis Academy Dubai",
          "Professional Tennis Coaching",
          "Junior Tennis Player Development",
          "Adult Tennis Lessons Dubai",
          "High Performance Tennis Training",
          "Private Tennis Coach Dubai"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Al Wasl Road, Jumeirah & Dubai Sports City Courts",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai",
          "addressCountry": "AE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.2048,
          "longitude": 55.2708
        },
        "sport": "Tennis",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "06:00",
            "closes": "23:00"
          }
        ]
      });
      document.head.appendChild(script);
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) metaDesc.setAttribute('content', prevDesc);
      if (canonical && prevCanonical) canonical.setAttribute('href', prevCanonical);
      const existingScript = document.getElementById(scriptId);
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <main className="relative w-full bg-[#050505] text-[#F0F4F8] overflow-x-hidden selection:bg-[#8CE600] selection:text-[#050505]">
      
      {/* ABOUT HERO (“THE MAKING OF A PLAYER”) */}
      <AboutHero />

      {/* 01 — WHO WE ARE (“BUILT AROUND THE PLAYER.”) */}
      <AboutWhoWeAre />

      {/* 02 — THE LION ELITE METHOD (“THE WORK BEHIND THE GAME.”) */}
      <AboutMethod />

      {/* 03 — “BETWEEN THE POINTS” (CONTACT-SHEET / FILM-STRIP) */}
      <AboutBetweenThePoints />

      {/* 04 — WHO WE COACH */}
      <AboutWhoWeCoach onOpenBooking={onOpenBooking} onNavigate={onNavigate} />

      {/* 05 — THE LION STANDARD */}
      <AboutTheStandard />

      {/* 06 — FINAL CTA (ROLLING TENNIS BALL BASELINE) */}
      <AboutFinalCta onOpenBooking={onOpenBooking} onNavigate={onNavigate} />

    </main>
  );
}
