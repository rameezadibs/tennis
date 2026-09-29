import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Calendar, Clock, User, Phone, Mail, Award, ArrowRight } from 'lucide-react';
import { programsData } from '../data/programsData';

export default function BookingModal({ isOpen, onClose, preselectedProgramId }) {
  const [selectedProgram, setSelectedProgram] = useState(preselectedProgramId || "junior-dev");
  const [skillLevel, setSkillLevel] = useState("Intermediate");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courtLocation: "Dubai Sports City",
    preferredTime: "Evening (17:00 - 21:00)",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050505]/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#0D0D0D] border border-white/10 shadow-2xl z-10 my-8 overflow-hidden"
        >
          {/* Top Court Accent Line */}
          <div className="h-1 w-full bg-gradient-to-r from-[#8DF000] via-[#8DF000] to-[#8DF000]" />

          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between bg-[#111111]">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-block w-2 h-2 bg-[#8DF000]" />
                <span className="font-mono text-xs text-[#8DF000] tracking-widest uppercase">
                  RESERVATION DESK // DUBAI
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl tracking-wide uppercase text-white">
                Book a Training Session
              </h2>
              <p className="text-xs sm:text-sm text-[#B9B9B9] mt-1 font-sans">
                Reserve your court evaluation with Lion Elite Tennis Academy coaching staff.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#B9B9B9] hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
            {submitted ? (
              <div className="py-10 text-center">
                <div className="w-16 h-16 bg-[#8DF000]/10 border border-[#8DF000] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#8DF000]" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase mb-2">
                  Session Request Confirmed
                </h3>
                <p className="text-[#B9B9B9] text-sm max-w-md mx-auto mb-8 font-sans">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Our head tennis director will reach out via WhatsApp / phone at <span className="text-white font-medium">{formData.phone}</span> within 2 hours to confirm your court allocation.
                </p>

                <div className="p-4 bg-[#151515] border border-white/10 text-left max-w-md mx-auto mb-8 font-mono text-xs space-y-1.5">
                  <div className="flex justify-between text-[#B9B9B9]">
                    <span>PROGRAM:</span>
                    <span className="text-white font-semibold">
                      {programsData.find(p => p.id === selectedProgram)?.title || "TRAINING SESSION"}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#B9B9B9]">
                    <span>LEVEL:</span>
                    <span className="text-white">{skillLevel}</span>
                  </div>
                  <div className="flex justify-between text-[#B9B9B9]">
                    <span>LOCATION:</span>
                    <span className="text-white">{formData.courtLocation}</span>
                  </div>
                  <div className="flex justify-between text-[#B9B9B9]">
                    <span>SLOT:</span>
                    <span className="text-[#8DF000]">{formData.preferredTime}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#8DF000] text-[#050505] font-display text-sm tracking-wider uppercase font-bold hover:bg-white transition-colors"
                >
                  Done // Return to Court
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Program Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B9B9] mb-2.5">
                    01. Select Program Category
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {programsData.map((prog) => (
                      <button
                        key={prog.id}
                        type="button"
                        onClick={() => setSelectedProgram(prog.id)}
                        className={`text-left p-3 border transition-all text-xs flex flex-col justify-between ${
                          selectedProgram === prog.id
                            ? "bg-[#8DF000]/10 border-[#8DF000] text-white shadow-sm"
                            : "bg-[#151515] border-white/5 text-[#B9B9B9] hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono text-[10px] text-[#8DF000]">{prog.number}</span>
                          {selectedProgram === prog.id && (
                            <span className="w-1.5 h-1.5 bg-[#8DF000]" />
                          )}
                        </div>
                        <span className="font-display text-sm font-semibold tracking-wide uppercase text-white">
                          {prog.title}
                        </span>
                        <span className="text-[11px] text-[#B9B9B9] line-clamp-1 mt-0.5">
                          {prog.specs.focus}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Skill Level */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B9B9] mb-2.5">
                    02. Player Skill Level
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Beginner (UTR 1-3)", "Intermediate (UTR 4-7)", "Advanced / Pro (UTR 8+)"].map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => setSkillLevel(lvl)}
                        className={`py-2 px-3 border text-center text-xs font-sans transition-all ${
                          skillLevel === lvl
                            ? "bg-[#8DF000] border-[#8DF000] text-[#050505] font-semibold"
                            : "bg-[#151515] border-white/10 text-[#B9B9B9] hover:text-white hover:border-white/25"
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Player Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B9B9] mb-1.5">
                      Player / Parent Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Al-Hashimi"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#151515] border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#8DF000] font-sans"
                      />
                      <User className="absolute right-3 top-3 w-4 h-4 text-neutral-500" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B9B9] mb-1.5">
                      WhatsApp / Phone *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#151515] border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#8DF000] font-sans"
                      />
                      <Phone className="absolute right-3 top-3 w-4 h-4 text-neutral-500" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B9B9] mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="player@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#151515] border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#8DF000] font-sans"
                      />
                      <Mail className="absolute right-3 top-3 w-4 h-4 text-neutral-500" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B9B9] mb-1.5">
                      Preferred Dubai Court
                    </label>
                    <select
                      value={formData.courtLocation}
                      onChange={(e) => setFormData({ ...formData, courtLocation: e.target.value })}
                      className="w-full bg-[#151515] border border-white/10 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#8DF000] font-sans cursor-pointer"
                    >
                      <option value="Al Jaddaf (Swiss International School) — 150 AED">Al Jaddaf (Swiss International School) — 150 AED</option>
                      <option value="Business Bay Tennis Location — 350 AED">Business Bay Tennis Location — 350 AED</option>
                      <option value="Dubai Sports City (Center Courts)">Dubai Sports City (Center Courts)</option>
                      <option value="Private Villa / Club Court (On-Site)">Private Villa / Club Court (On-Site)</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Timing */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B9B9] mb-1.5">
                    Preferred Time Slot
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      "Morning (06:30 - 10:00)",
                      "Midday / Indoor (10:00 - 16:00)",
                      "Evening Floodlights (17:00 - 22:00)"
                    ].map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredTime: slot })}
                        className={`p-2.5 border text-xs text-left transition-all ${
                          formData.preferredTime === slot
                            ? "border-[#8DF000] bg-[#8DF000]/10 text-white font-medium"
                            : "border-white/10 bg-[#151515] text-[#B9B9B9] hover:border-white/25"
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5 text-[#8DF000] mb-1" />
                        <span className="text-[11px] block">{slot}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#8DF000] hover:bg-white text-[#050505] font-display text-base tracking-wider uppercase font-bold transition-all shadow-lg shadow-[#8DF000]/10"
                  >
                    Confirm Session Evaluation Request
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <div className="flex items-center justify-between text-[11px] text-[#B9B9B9] mt-2.5 font-mono">
                    <span>* COMPLIMENTARY 30-MIN BIOMECHANICAL ASSESSMENT</span>
                    <span>DUBAI GST +4</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
