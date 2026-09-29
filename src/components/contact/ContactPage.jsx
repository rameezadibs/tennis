import React, { useEffect } from 'react';
import ContactHero from './ContactHero';
import ContactFormSection from './ContactFormSection';
import ContactDirectSection from './ContactDirectSection';
import ContactFinalCta from './ContactFinalCta';

export default function ContactPage({ onOpenBooking, onNavigate }) {
  // Comprehensive SEO, Metadata, Canonical and LocalBusiness JSON-LD Lifecycle
  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo(0, 0);

    // Save previous document attributes for clean cleanup
    const prevTitle = document.title;
    document.title = "Contact Lion Elite | Tennis Academy Dubai";

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Contact Lion Elite Tennis Academy in Dubai for junior, adult and private tennis coaching. Enquire about training programs and book your next session.'
      );
    }

    // Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    const prevKeywords = metaKeywords ? metaKeywords.getAttribute('content') : '';
    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        'Contact Tennis Academy Dubai, Tennis Coaching Enquiry Dubai, Tennis Lessons Al Jaddaf, Private Tennis Coaching Dubai, Junior Tennis Lessons Dubai, Tennis Academy Al Jaddaf'
      );
    }

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical ? canonical.getAttribute('href') : '';
    if (canonical) {
      canonical.setAttribute('href', 'https://lionelitetennis.ae/contact');
    }

    // Open Graph Metadata
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Contact Lion Elite | Tennis Academy Dubai');

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', 'Contact Lion Elite Tennis Academy in Dubai for junior, adult and private tennis coaching. Enquire about training programs and book your next session.');

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://lionelitetennis.ae/contact');

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', 'https://lionelitetennis.ae/contact/hero-strip.jpg');

    // LocalBusiness / SportsActivityLocation Structured Data (JSON-LD)
    const scriptId = 'contact-structured-data';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["SportsActivityLocation", "LocalBusiness"],
        "@id": "https://lionelitetennis.ae/contact#contact-point",
        "name": "Lion Elite Tennis Academy Dubai",
        "alternateName": "Lion Elite Tennis Academy Middle East",
        "description": "Contact Lion Elite Tennis Academy in Dubai for junior, adult and private tennis coaching. Enquire about training programs and book your next session.",
        "url": "https://lionelitetennis.ae/contact",
        "telephone": "+971 55 276 6535",
        "email": "lionelitetennis890@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Dubai Healthcare City Phase 2",
          "addressLocality": "Al Jaddaf",
          "addressRegion": "Dubai",
          "addressCountry": "UAE"
        },
        "containedInPlace": {
          "@type": "Place",
          "name": "Swiss International Scientific School in Dubai",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Dubai Healthcare City Phase 2",
            "addressLocality": "Al Jaddaf",
            "addressRegion": "Dubai",
            "addressCountry": "UAE"
          }
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.2094,
          "longitude": 55.3327
        },
        "hasMap": "https://maps.app.goo.gl/hrLRsoCudoPXbSHV9?g_st=ac",
        "sport": "Tennis",
        "priceRange": "$$$",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+971 55 276 6535",
          "contactType": "customer service",
          "availableLanguage": ["English", "Arabic", "French"],
          "areaServed": "Dubai, UAE"
        }
      });
      document.head.appendChild(script);
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) metaDesc.setAttribute('content', prevDesc);
      if (metaKeywords && prevKeywords) metaKeywords.setAttribute('content', prevKeywords);
      if (canonical && prevCanonical) canonical.setAttribute('href', prevCanonical);
      const existingScript = document.getElementById(scriptId);
      if (existingScript) existingScript.remove();
    };
  }, []);

  const handleScrollToForm = () => {
    const el = document.getElementById('contact-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main 
      className="relative w-full bg-[#050505] text-[#FFFFFF] overflow-x-hidden selection:bg-[#8CE600] selection:text-[#050505]"
      aria-label="Lion Elite Tennis Academy Contact Page"
    >
      {/* 01 — HERO */}
      <ContactHero onEnquiryClick={handleScrollToForm} />

      {/* 02 — CONTACT FORM (MAIN FEATURE) */}
      <ContactFormSection />

      {/* 03 — DIRECT CONTACT + LOCATION */}
      <ContactDirectSection onNavigate={onNavigate} />

      {/* 04 — FINAL CTA */}
      <ContactFinalCta onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
    </main>
  );
}
