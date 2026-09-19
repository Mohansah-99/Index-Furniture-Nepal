import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Send, CheckCircle2, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { BRAND_INFO, SHOWROOMS, ROOM_OPTIONS } from '../data/furnitureData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialTopic = ''
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [format, setFormat] = useState<'showroom' | 'home-visit' | 'virtual'>('showroom');
  const [showroomChoice, setShowroomChoice] = useState(SHOWROOMS[0].name);
  const [room, setRoom] = useState(ROOM_OPTIONS[0]);
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [code, setCode] = useState('');

  useEffect(() => {
    if (initialTopic) {
      setNotes(`Interested in: ${initialTopic}`);
    }
  }, [initialTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setCode('CS-' + Math.floor(1000 + Math.random() * 9000));
    }, 600);
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div
      id="consultation-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#202321]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={resetAndClose}
    >
      <div
        id="consultation-modal"
        className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#D8C9B5]/60 my-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#F7F4EE] px-6 py-5 border-b border-[#D8C9B5]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#4A3325] text-white flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#D9894B]" />
            </div>
            <div>
              <h3 className="font-editorial text-2xl font-normal text-[#202321] leading-tight">
                Book a Consultation
              </h3>
              <p className="font-ui text-xs text-[#77736D]">
                Index Design Studio • Kathmandu &amp; Lalitpur
              </p>
            </div>
          </div>

          <button
            id="close-consultation-modal"
            onClick={resetAndClose}
            className="p-2 rounded-full text-[#77736D] hover:text-[#202321] hover:bg-[#EFE9DE] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-[#D9894B]/15 text-[#D9894B] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="font-editorial text-3xl font-normal text-[#202321]">
                Consultation Reserved
              </h4>
              <p className="font-ui text-sm text-[#77736D] leading-relaxed max-w-xs mx-auto">
                Thank you, <strong className="text-[#202321]">{name}</strong>. Reference <strong>{code}</strong> is booked. Our interior consultant will verify via WhatsApp / call within 2 hours.
              </p>

              <div className="pt-3 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${BRAND_INFO.mobileWhatsapp.replace('+', '')}?text=Namaste%2C%20I%20just%20booked%20consultation%20reference%20${code}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xl font-ui text-sm font-medium flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Notify Concierge on WhatsApp</span>
                </a>
                <button
                  onClick={resetAndClose}
                  className="text-xs font-ui text-[#77736D] hover:text-[#202321] py-2"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-ui">
              {/* Consultation Format Chips */}
              <div>
                <label className="block text-xs font-semibold text-[#202321] mb-2">
                  Preferred Consultation Setting
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormat('showroom')}
                    className={`p-2.5 rounded-xl border text-xs font-medium text-left transition-all cursor-pointer ${
                      format === 'showroom'
                        ? 'border-[#D9894B] bg-[#D9894B]/10 text-[#4A3325] font-semibold'
                        : 'border-[#D8C9B5]/60 hover:bg-[#F7F4EE] text-[#77736D]'
                    }`}
                  >
                    <span className="block font-semibold">Showroom Walkthrough</span>
                    <span className="text-[11px] opacity-80">Kathmandu or Lalitpur</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormat('home-visit')}
                    className={`p-2.5 rounded-xl border text-xs font-medium text-left transition-all cursor-pointer ${
                      format === 'home-visit'
                        ? 'border-[#D9894B] bg-[#D9894B]/10 text-[#4A3325] font-semibold'
                        : 'border-[#D8C9B5]/60 hover:bg-[#F7F4EE] text-[#77736D]'
                    }`}
                  >
                    <span className="block font-semibold">In-Home Space Review</span>
                    <span className="text-[11px] opacity-80">Within Valley</span>
                  </button>
                </div>
              </div>

              {format === 'showroom' && (
                <div>
                  <label htmlFor="modal-showroom" className="block text-xs font-medium text-[#77736D] mb-1">
                    Select Showroom
                  </label>
                  <select
                    id="modal-showroom"
                    value={showroomChoice}
                    onChange={(e) => setShowroomChoice(e.target.value)}
                    className="w-full bg-[#F7F4EE] border border-[#D8C9B5]/60 rounded-xl p-2.5 text-xs text-[#202321] focus:outline-none focus:border-[#D9894B]"
                  >
                    {SHOWROOMS.map((s) => (
                      <option key={s.id} value={s.name}>{s.name} ({s.neighborhood})</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="consultation-name" className="block text-xs font-medium text-[#77736D] mb-1">
                    Full Name *
                  </label>
                  <input
                    id="consultation-name"
                    required
                    type="text"
                    placeholder="Aarav Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#F7F4EE] border border-[#D8C9B5]/60 rounded-xl p-2.5 text-xs text-[#202321] placeholder-[#77736D]/50 focus:outline-none focus:border-[#D9894B]"
                  />
                </div>
                <div>
                  <label htmlFor="consultation-phone" className="block text-xs font-medium text-[#77736D] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="consultation-phone"
                    required
                    type="tel"
                    placeholder="98XXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#F7F4EE] border border-[#D8C9B5]/60 rounded-xl p-2.5 text-xs text-[#202321] placeholder-[#77736D]/50 focus:outline-none focus:border-[#D9894B]"
                  />
                </div>
              </div>

              {/* Email & Scope */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="consultation-email" className="block text-xs font-medium text-[#77736D] mb-1">
                    Email
                  </label>
                  <input
                    id="consultation-email"
                    type="email"
                    placeholder="aarav@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#F7F4EE] border border-[#D8C9B5]/60 rounded-xl p-2.5 text-xs text-[#202321] placeholder-[#77736D]/50 focus:outline-none focus:border-[#D9894B]"
                  />
                </div>
                <div>
                  <label htmlFor="consultation-room" className="block text-xs font-medium text-[#77736D] mb-1">
                    Space Type
                  </label>
                  <select
                    id="consultation-room"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    className="w-full bg-[#F7F4EE] border border-[#D8C9B5]/60 rounded-xl p-2.5 text-xs text-[#202321] focus:outline-none focus:border-[#D9894B]"
                  >
                    {ROOM_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Note / Message */}
              <div>
                <label htmlFor="consultation-notes" className="block text-xs font-medium text-[#77736D] mb-1">
                  Notes / Specific Pieces (Optional)
                </label>
                <textarea
                  id="consultation-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Seeking living room sofa and dining set for our new apartment in Jhamsikhel"
                  className="w-full bg-[#F7F4EE] border border-[#D8C9B5]/60 rounded-xl p-2.5 text-xs text-[#202321] placeholder-[#77736D]/50 focus:outline-none focus:border-[#D9894B] resize-none"
                />
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D9894B] hover:bg-[#C3763A] text-white py-3 rounded-xl font-ui text-sm font-medium transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? 'Confirming...' : 'Confirm Consultation Appointment'}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
