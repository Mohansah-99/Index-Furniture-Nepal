import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, Phone, Mail, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { ROOM_OPTIONS, BUDGET_OPTIONS, BRAND_INFO } from '../data/furnitureData';
import { LeadFormData } from '../types';

interface LeadSectionProps {
  prefilledTopic?: string;
}

export const LeadSection: React.FC<LeadSectionProps> = ({ prefilledTopic }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    lookingFor: ROOM_OPTIONS[0],
    preferredContact: 'whatsapp',
    roomType: 'Living Room',
    budgetRange: BUDGET_OPTIONS[1],
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  useEffect(() => {
    if (prefilledTopic) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `Inquiry regarding: ${prefilledTopic}`
      }));
    }
  }, [prefilledTopic]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof LeadFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required for follow-up';
    } else if (!/^[0-9+-\s()]{7,16}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number (e.g. 98XXXXXXXX)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable lead capture
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const randomCode = 'IDX-' + Math.floor(100000 + Math.random() * 900000);
      setSubmissionId(randomCode);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      lookingFor: ROOM_OPTIONS[0],
      preferredContact: 'whatsapp',
      roomType: 'Living Room',
      budgetRange: BUDGET_OPTIONS[1],
      message: ''
    });
    setErrors({});
  };

  return (
    <section id="lead-section" className="py-16 sm:py-24 bg-[#202321] text-white relative overflow-hidden">
      
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D9894B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#4A3325]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Value Proposition & Context (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D9894B] text-xs font-ui font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized Interior Guidance</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#F7F4EE] tracking-tight leading-tight">
              Let’s Create a Home You’ll Love Living In.
            </h2>

            <p className="font-ui text-base text-[#D8C9B5] leading-relaxed">
              Tell us what you’re looking for and our team can help you find furniture that fits your space, lifestyle, and budget.
            </p>

            {/* Quick Guarantees */}
            <div className="pt-4 space-y-4 border-t border-white/10 text-sm font-ui">
              <div className="flex items-center gap-3 text-[#F7F4EE]/90">
                <div className="w-6 h-6 rounded-full bg-[#D9894B]/20 text-[#D9894B] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Free in-showroom consultation &amp; 3D layout advice</span>
              </div>

              <div className="flex items-center gap-3 text-[#F7F4EE]/90">
                <div className="w-6 h-6 rounded-full bg-[#D9894B]/20 text-[#D9894B] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Fabric swatches &amp; solid wood samples available</span>
              </div>

              <div className="flex items-center gap-3 text-[#F7F4EE]/90">
                <div className="w-6 h-6 rounded-full bg-[#D9894B]/20 text-[#D9894B] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Response within 2-4 business hours on WhatsApp or Call</span>
              </div>
            </div>

            {/* Instant contact alternative */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#D8C9B5] block">Prefer immediate assistance?</span>
                <span className="text-sm font-semibold text-white">{BRAND_INFO.phoneDisplay}</span>
              </div>
              <a
                href={`https://wa.me/${BRAND_INFO.mobileWhatsapp.replace('+', '')}?text=Hello%20Index%20Furniture%20Nepal%2C%20I%20would%20like%20to%20consult%20about%20furnishing%20my%20home.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-3.5 py-2 rounded-lg text-xs font-ui font-medium flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-End Lead Form (Span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-[#2A2E2C] rounded-2xl md:rounded-3xl p-6 sm:p-9 border border-white/10 shadow-2xl">
              
              {submitted ? (
                /* Success State */
                <div id="lead-success-state" className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#D9894B]/20 text-[#D9894B] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-3xl font-normal text-white mb-2">
                      Inquiry Received With Thanks
                    </h3>
                    <p className="font-ui text-sm text-[#D8C9B5] max-w-md mx-auto leading-relaxed">
                      Namaste <strong className="text-white">{formData.fullName}</strong>! Our design consultant has logged inquiry <strong className="text-[#D9894B]">{submissionId}</strong> and will reach out via <strong className="text-white capitalize">{formData.preferredContact}</strong> shortly.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 max-w-sm mx-auto border border-white/10 text-xs font-ui text-left space-y-1.5 text-[#D8C9B5]">
                    <div className="flex justify-between">
                      <span>Room Category:</span>
                      <span className="text-white font-medium">{formData.lookingFor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Preferred Contact:</span>
                      <span className="text-white font-medium capitalize">{formData.preferredContact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Phone:</span>
                      <span className="text-white font-medium">{formData.phoneNumber}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-3 pt-3">
                    <a
                      href={`https://wa.me/${BRAND_INFO.mobileWhatsapp.replace('+', '')}?text=Namaste%20Index%20Furniture%2C%20I%20just%20submitted%20consultation%20request%20${submissionId}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-xl font-ui text-xs font-medium flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Continue on WhatsApp Directly</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="text-xs font-ui text-[#D8C9B5] hover:text-white px-4 py-2 underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Form */
                <form id="lead-generation-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="border-b border-white/10 pb-4 mb-2">
                    <h3 className="font-editorial text-2xl font-normal text-white">
                      Start a Conversation
                    </h3>
                    <p className="font-ui text-xs text-[#D8C9B5] mt-1">
                      Fill out this quick form or request a showroom tour with our design consultants.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lead-name" className="block font-ui text-xs font-medium text-[#D8C9B5] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        placeholder="e.g. Aarav Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full bg-white/5 border ${
                          errors.fullName ? 'border-rose-400' : 'border-white/15 focus:border-[#D9894B]'
                        } rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none transition-colors font-ui`}
                      />
                      {errors.fullName && (
                        <span className="text-[11px] text-rose-400 mt-1 block font-ui">{errors.fullName}</span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lead-phone" className="block font-ui text-xs font-medium text-[#D8C9B5] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="lead-phone"
                        type="tel"
                        placeholder="e.g. 9801234567"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className={`w-full bg-white/5 border ${
                          errors.phoneNumber ? 'border-rose-400' : 'border-white/15 focus:border-[#D9894B]'
                        } rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none transition-colors font-ui`}
                      />
                      {errors.phoneNumber && (
                        <span className="text-[11px] text-rose-400 mt-1 block font-ui">{errors.phoneNumber}</span>
                      )}
                    </div>
                  </div>

                  {/* Email & Looking For */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lead-email" className="block font-ui text-xs font-medium text-[#D8C9B5] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="lead-email"
                        type="email"
                        placeholder="e.g. aarav@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-white/5 border ${
                          errors.email ? 'border-rose-400' : 'border-white/15 focus:border-[#D9894B]'
                        } rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none transition-colors font-ui`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-400 mt-1 block font-ui">{errors.email}</span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lead-looking-for" className="block font-ui text-xs font-medium text-[#D8C9B5] mb-1.5">
                        What are you looking for?
                      </label>
                      <select
                        id="lead-looking-for"
                        value={formData.lookingFor}
                        onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                        className="w-full bg-[#202321] border border-white/15 focus:border-[#D9894B] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors font-ui"
                      >
                        {ROOM_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#202321] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block font-ui text-xs font-medium text-[#D8C9B5] mb-1.5">
                      Preferred Contact Method
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
                        { id: 'phone', label: 'Phone Call', icon: Phone },
                        { id: 'email', label: 'Email', icon: Mail },
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = formData.preferredContact === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredContact: item.id as any })}
                            className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border text-xs font-ui font-medium transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#D9894B] border-[#D9894B] text-white shadow-2xs'
                                : 'bg-white/5 border-white/15 text-[#D8C9B5] hover:bg-white/10'
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                            <span>{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="lead-message" className="block font-ui text-xs font-medium text-[#D8C9B5] mb-1.5">
                      Message / Space Details (Optional)
                    </label>
                    <textarea
                      id="lead-message"
                      rows={3}
                      placeholder="Tell us about your room size, preferred wood finishes, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 focus:border-[#D9894B] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none transition-colors font-ui resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-lead-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D9894B] hover:bg-[#C3763A] text-white py-3.5 px-6 rounded-xl font-ui text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Request a Consultation</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center font-ui text-[11px] text-[#D8C9B5]/70 pt-1">
                    Your details are securely kept. No spam, only respectful interior design assistance.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
