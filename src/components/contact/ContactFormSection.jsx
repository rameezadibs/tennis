import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, ChevronDown } from 'lucide-react';

const COUNTRY_CODES = [
  { code: "+971", country: "United Arab Emirates", flag: "🇦🇪", label: "UAE (+971)" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦", label: "KSA (+966)" },
  { code: "+974", country: "Qatar", flag: "🇶🇦", label: "QAT (+974)" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼", label: "KWT (+965)" },
  { code: "+968", country: "Oman", flag: "🇴🇲", label: "OMN (+968)" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭", label: "BHR (+973)" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧", label: "UK (+44)" },
  { code: "+1", country: "United States / Canada", flag: "🇺🇸", label: "US/CA (+1)" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭", label: "CHE (+41)" },
  { code: "+33", country: "France", flag: "🇫🇷", label: "FRA (+33)" },
  { code: "+49", country: "Germany", flag: "🇩🇪", label: "DEU (+49)" },
  { code: "+7", country: "Russia", flag: "🇷🇺", label: "RUS (+7)" },
  { code: "+91", country: "India", flag: "🇮🇳", label: "IND (+91)" },
  { code: "+61", country: "Australia", flag: "🇦🇺", label: "AUS (+61)" },
  { code: "+34", country: "Spain", flag: "🇪🇸", label: "ESP (+34)" },
  { code: "+39", country: "Italy", flag: "🇮🇹", label: "ITA (+39)" },
];

const INTEREST_OPTIONS = [
  "Junior Development",
  "Adult Tennis",
  "Private Coaching",
  "High Performance",
  "Group Training",
  "Match Play",
  "General Enquiry"
];

const LEVEL_OPTIONS = [
  "Complete Beginner",
  "Beginner",
  "Intermediate",
  "Advanced",
  "Competitive Player",
  "Not Sure Yet"
];

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+971",
    phone: "",
    interestedIn: "",
    playerLevel: "",
    message: "",
    agreeToContact: true
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please provide a valid email address";
    }

    const cleanedPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanedPhone || !/^\d{6,14}$/.test(cleanedPhone)) {
      errs.phone = "Please enter a valid phone number (6–14 digits)";
    }

    if (!formData.interestedIn) {
      errs.interestedIn = "Please select a training category";
    }

    if (!formData.playerLevel) {
      errs.playerLevel = "Please select your current player level";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading" || status === "success") return;

    if (!validate()) {
      const firstError = Object.keys(errors)[0];
      const el = document.getElementById(`field-${firstError}`);
      if (el) el.focus();
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            const enquiryPayload = {
              ...formData,
              submittedAt: new Date().toISOString(),
              referenceId: `LE-${Math.floor(100000 + Math.random() * 900000)}`
            };
            
            try {
              const previousLeads = JSON.parse(localStorage.getItem('lion_elite_enquiries') || '[]');
              previousLeads.unshift(enquiryPayload);
              localStorage.setItem('lion_elite_enquiries', JSON.stringify(previousLeads.slice(0, 20)));
            } catch {
              // Ignore localstorage errors
            }

            resolve(enquiryPayload);
          } catch {
            reject(new Error("Unable to record your enquiry. Please retry or contact us directly."));
          }
        }, 1100);
      }).then((result) => {
        setSubmittedData(result);
        setStatus("success");
      });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong while submitting. Please try again or WhatsApp our academy desk directly.");
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      countryCode: "+971",
      phone: "",
      interestedIn: "",
      playerLevel: "",
      message: "",
      agreeToContact: true
    });
    setErrors({});
    setStatus("idle");
    setSubmittedData(null);
  };

  return (
    <section 
      id="contact-form"
      className="relative bg-[#080808] text-[#FFFFFF] pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12 border-b border-white/10 overflow-hidden"
      aria-label="Lion Elite Enquiry Form Section"
    >
      {/* Subtle Dark Architectural Grid Lines */}
      <div className="absolute inset-0 court-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 bg-[#8CE600]" aria-hidden="true" />
            <span className="font-mono text-xs sm:text-sm tracking-wider uppercase text-[#8CE600] font-bold">
              01 / GET IN TOUCH
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
            <h2 className="lg:col-span-6 font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-[0.95]">
              TELL US ABOUT <br />
              <span className="text-white/60">YOUR GAME.</span>
            </h2>
            <p className="lg:col-span-6 font-sans text-base sm:text-lg text-[#B9B9B9] font-normal leading-relaxed max-w-xl">
              Share a few details about yourself and what you're looking for. Our team will help guide you towards the right training experience.
            </p>
          </div>
        </div>

        {/* Desktop Split Layout: Left 35% / Right 65% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: ~35% (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 lg:sticky lg:top-32">
            
            {/* Editorial Statement */}
            <div className="space-y-6">
              <div className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-none">
                EVERY GREAT <br />
                GAME STARTS <br />
                <span className="relative inline-block text-[#8CE600]">
                  SOMEWHERE.
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#8CE600]" />
                </span>
              </div>

              {/* Training Disciplines Typography */}
              <div className="pt-4 space-y-2.5 border-t border-white/10">
                {["Junior coaching.", "Adult training.", "Private sessions.", "Performance development."].map((item, idx) => (
                  <div key={idx} className="font-display text-lg sm:text-xl font-bold uppercase tracking-wider text-white/70 flex items-center gap-3">
                    <span className="font-mono text-xs text-[#8CE600]">0{idx + 1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documentary Photograph with Coach & Player */}
            <div className="relative pt-4">
              <div className="relative overflow-hidden bg-[#151515] border border-white/15 shadow-2xl">
                <img
                  src="https://res.cloudinary.com/q5fz3r2n/image/upload/coach-playerr"
                  alt="Lion Elite tennis coach providing feedback and tactical instructions to player beside the court"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover object-center filter contrast-105"
                />
                <div className="p-3 bg.111 bg-[#111111] border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#B9B9B9]">
                  <span className="font-bold uppercase tracking-widest text-[#8CE600]">COURTSIDE GUIDANCE</span>
                  <span>DUBAI TRAINING GROUND</span>
                </div>
              </div>
              <p className="font-sans text-xs text-[#B9B9B9]/80 mt-3 italic leading-relaxed">
                Direct consultation with certified ATP/WTA experienced coaches to map your personalized progression plan.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: ~65% (Col 6-12) */}
          <div className="lg:col-span-7">
            
            <AnimatePresence mode="wait">
              {status === "success" && submittedData ? (
                /* SUCCESS STATE - DARK THEME */
                <motion.div
                  key="success-panel"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-[#121212] border border-[#8CE600]/40 p-8 sm:p-12 shadow-2xl relative"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-14 h-14 bg-[#8CE600]/20 border border-[#8CE600] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#8CE600]" />
                  </div>

                  <span className="font-mono text-xs text-[#8CE600] tracking-widest uppercase block mb-1 font-bold">
                    ENQUIRY CONFIRMED // {submittedData.referenceId}
                  </span>
                  
                  <h3 className="font-display font-black text-3xl sm:text-4xl uppercase text-white tracking-tight mb-4">
                    THANK YOU, {submittedData.fullName.split(' ')[0]}.
                  </h3>

                  <p className="font-sans text-base text-[#B9B9B9] leading-relaxed mb-8 max-w-xl">
                    We've received your enquiry for <strong className="text-white">{submittedData.interestedIn}</strong>. Our head tennis director will reach out to you at <strong className="text-[#8CE600]">{submittedData.countryCode} {submittedData.phone}</strong> and via email within 2 hours.
                  </p>

                  <div className="p-5 bg-[#050505] border border-white/10 space-y-2 font-mono text-xs mb-8">
                    <div className="flex justify-between border-b border-white/10 pb-1.5">
                      <span className="text-[#B9B9B9]">APPLICANT:</span>
                      <span className="font-bold text-white">{submittedData.fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-1.5">
                      <span className="text-[#B9B9B9]">PROGRAM INTEREST:</span>
                      <span className="font-bold text-white">{submittedData.interestedIn}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-1.5">
                      <span className="text-[#B9B9B9]">ASSESSED LEVEL:</span>
                      <span className="font-bold text-white">{submittedData.playerLevel}</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-[#B9B9B9]">DIRECT REACH:</span>
                      <span className="font-bold text-[#8CE600]">{submittedData.email}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`https://wa.me/971552766535?text=${encodeURIComponent(`Hello Lion Elite, I just submitted enquiry ${submittedData.referenceId} for ${submittedData.interestedIn}. My name is ${submittedData.fullName}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#8CE600] hover:bg-white text-[#050505] font-display text-xs font-bold tracking-wider uppercase transition-colors"
                    >
                      <span>FAST-TRACK VIA WHATSAPP</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-6 py-3.5 bg-[#151515] hover:bg-white/10 text-white border border-white/15 font-display text-xs font-bold tracking-wider uppercase transition-colors"
                    >
                      SEND ANOTHER ENQUIRY
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* SOPHISTICATED EDITORIAL DARK FORM */
                <form 
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-10"
                  aria-label="Lion Elite Player Enquiry Form"
                >
                  {/* General Error Banner */}
                  {status === "error" && (
                    <div 
                      className="p-4 bg-red-950/80 border-l-4 border-red-500 text-red-200 font-sans text-sm flex items-start gap-3"
                      role="alert"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-semibold">Submission Incomplete</strong>
                        <span>{errorMessage}</span>
                      </div>
                    </div>
                  )}

                  {/* Field 01: Full Name */}
                  <div className="group">
                    <div className="flex items-center justify-between mb-2">
                      <label 
                        htmlFor="field-fullName" 
                        className="font-mono text-xs font-bold uppercase tracking-wider text-[#8CE600]"
                      >
                        01 / YOUR NAME <span className="text-red-400">*</span>
                      </label>
                      {errors.fullName && (
                        <span className="font-mono text-[11px] text-red-400 font-medium">
                          {errors.fullName}
                        </span>
                      )}
                    </div>
                    <input
                      id="field-fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      className={`w-full bg-transparent border-b-2 py-3.5 text-base sm:text-lg font-sans text-white placeholder-white/30 focus:outline-none transition-colors ${
                        errors.fullName ? "border-red-500" : "border-white/20 focus:border-[#8CE600]"
                      }`}
                    />
                  </div>

                  {/* Field 02: Email Address */}
                  <div className="group">
                    <div className="flex items-center justify-between mb-2">
                      <label 
                        htmlFor="field-email" 
                        className="font-mono text-xs font-bold uppercase tracking-wider text-[#8CE600]"
                      >
                        02 / EMAIL <span className="text-red-400">*</span>
                      </label>
                      {errors.email && (
                        <span className="font-mono text-[11px] text-red-400 font-medium">
                          {errors.email}
                        </span>
                      )}
                    </div>
                    <input
                      id="field-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`w-full bg-transparent border-b-2 py-3.5 text-base sm:text-lg font-sans text-white placeholder-white/30 focus:outline-none transition-colors ${
                        errors.email ? "border-red-500" : "border-white/20 focus:border-[#8CE600]"
                      }`}
                    />
                  </div>

                  {/* Field 03: Phone Number with Country Code */}
                  <div className="group">
                    <div className="flex items-center justify-between mb-2">
                      <label 
                        htmlFor="field-phone" 
                        className="font-mono text-xs font-bold uppercase tracking-wider text-[#8CE600]"
                      >
                        03 / PHONE <span className="text-red-400">*</span>
                      </label>
                      {errors.phone && (
                        <span className="font-mono text-[11px] text-red-400 font-medium">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-3">
                      {/* International Country Code Dropdown */}
                      <div className="relative shrink-0 w-36 sm:w-44">
                        <select
                          id="field-countryCode"
                          name="countryCode"
                          aria-label="Country Code"
                          value={formData.countryCode}
                          onChange={(e) => handleChange("countryCode", e.target.value)}
                          className="w-full appearance-none bg-transparent border-b-2 border-white/20 focus:border-[#8CE600] py-3.5 pr-7 font-mono text-sm sm:text-base text-white focus:outline-none cursor-pointer"
                        >
                          {COUNTRY_CODES.map((item) => (
                            <option key={item.code} value={item.code} className="bg-[#151515] text-white">
                              {item.flag} {item.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-1 top-4 w-4 h-4 text-white/50 pointer-events-none" />
                      </div>

                      {/* Main Phone Input */}
                      <div className="flex-1">
                        <input
                          id="field-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel-national"
                          required
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className={`w-full bg-transparent border-b-2 py-3.5 text-base sm:text-lg font-sans text-white placeholder-white/30 focus:outline-none transition-colors ${
                            errors.phone ? "border-red-500" : "border-white/20 focus:border-[#8CE600]"
                          }`}
                        />
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-white/40 block mt-1.5">
                      Defaulted to United Arab Emirates (+971). WhatsApp updates available.
                    </span>
                  </div>

                  {/* 2-Column Selects: Interested In & Player Level */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                    
                    {/* Field 04: I'm Interested In */}
                    <div className="group">
                      <div className="flex items-center justify-between mb-2">
                        <label 
                          htmlFor="field-interestedIn" 
                          className="font-mono text-xs font-bold uppercase tracking-wider text-[#8CE600]"
                        >
                          04 / I'M INTERESTED IN <span className="text-red-400">*</span>
                        </label>
                      </div>
                      <div className="relative">
                        <select
                          id="field-interestedIn"
                          name="interestedIn"
                          required
                          value={formData.interestedIn}
                          onChange={(e) => handleChange("interestedIn", e.target.value)}
                          className={`w-full appearance-none bg-transparent border-b-2 py-3.5 pr-8 text-base font-sans text-white focus:outline-none cursor-pointer transition-colors ${
                            errors.interestedIn ? "border-red-500" : "border-white/20 focus:border-[#8CE600]"
                          } ${!formData.interestedIn ? "text-white/35" : ""}`}
                        >
                          <option value="" disabled className="bg-[#151515] text-white/50">Select training pathway...</option>
                          {INTEREST_OPTIONS.map((opt) => (
                            <option key={opt} value={opt} className="bg-[#151515] text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-1 top-4 w-4 h-4 text-white/50 pointer-events-none" />
                      </div>
                      {errors.interestedIn && (
                        <span className="font-mono text-[11px] text-red-400 font-medium block mt-1">
                          {errors.interestedIn}
                        </span>
                      )}
                    </div>

                    {/* Field 05: Player Level */}
                    <div className="group">
                      <div className="flex items-center justify-between mb-2">
                        <label 
                          htmlFor="field-playerLevel" 
                          className="font-mono text-xs font-bold uppercase tracking-wider text-[#8CE600]"
                        >
                          05 / PLAYER LEVEL <span className="text-red-400">*</span>
                        </label>
                      </div>
                      <div className="relative">
                        <select
                          id="field-playerLevel"
                          name="playerLevel"
                          required
                          value={formData.playerLevel}
                          onChange={(e) => handleChange("playerLevel", e.target.value)}
                          className={`w-full appearance-none bg-transparent border-b-2 py-3.5 pr-8 text-base font-sans text-white focus:outline-none cursor-pointer transition-colors ${
                            errors.playerLevel ? "border-red-500" : "border-white/20 focus:border-[#8CE600]"
                          } ${!formData.playerLevel ? "text-white/35" : ""}`}
                        >
                          <option value="" disabled className="bg-[#151515] text-white/50">Select player level...</option>
                          {LEVEL_OPTIONS.map((lvl) => (
                            <option key={lvl} value={lvl} className="bg-[#151515] text-white">
                              {lvl}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-1 top-4 w-4 h-4 text-white/50 pointer-events-none" />
                      </div>
                      {errors.playerLevel && (
                        <span className="font-mono text-[11px] text-red-400 font-medium block mt-1">
                          {errors.playerLevel}
                        </span>
                      )}
                    </div>

                  </div>

                  {/* Field 06: Your Message */}
                  <div className="group">
                    <div className="flex items-center justify-between mb-2">
                      <label 
                        htmlFor="field-message" 
                        className="font-mono text-xs font-bold uppercase tracking-wider text-[#8CE600]"
                      >
                        06 / YOUR MESSAGE
                      </label>
                    </div>
                    <textarea
                      id="field-message"
                      name="message"
                      rows={3}
                      placeholder="Tell us a little about your goals, experience or preferred training program..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#8CE600] py-3.5 text-base font-sans text-white placeholder-white/30 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Agreement Checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <div className="relative flex items-center pt-0.5">
                      <input
                        id="agreeToContact"
                        name="agreeToContact"
                        type="checkbox"
                        checked={formData.agreeToContact}
                        onChange={(e) => handleChange("agreeToContact", e.target.checked)}
                        className="w-4 h-4 rounded-none accent-[#8CE600] cursor-pointer"
                      />
                    </div>
                    <label 
                      htmlFor="agreeToContact" 
                      className="font-sans text-xs text-[#B9B9B9] cursor-pointer select-none"
                    >
                      I agree to be contacted regarding my enquiry. We respect your privacy and never share your details.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      id="submit-enquiry-btn"
                      className="relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#8CE600] hover:bg-white active:scale-[0.99] text-[#050505] font-display text-sm font-bold tracking-wider uppercase transition-all duration-200 group shadow-lg shadow-[#8CE600]/10 disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin text-[#050505]" />
                          <span>PROCESSING ENQUIRY...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND MY ENQUIRY</span>
                          <span className="w-6 h-6 rounded-full bg-[#050505]/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                            <ArrowRight className="w-3.5 h-3.5 text-[#050505]" />
                          </span>
                        </>
                      )}
                    </button>
                    
                    <div className="mt-3 font-mono text-[11px] text-white/40 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#8CE600]" />
                      <span>DIRECT SUBMISSION • DIRECT COACH EVALUATION CONFIRMATION</span>
                    </div>
                  </div>

                </form>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
