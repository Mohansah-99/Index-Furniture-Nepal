import React, { useState } from 'react';
import { MessageSquare, Phone, X, Calendar, ChevronUp } from 'lucide-react';
import { BRAND_INFO } from '../data/furnitureData';

interface QuickContactFloatingProps {
  onOpenConsultation: () => void;
}

export const QuickContactFloating: React.FC<QuickContactFloatingProps> = ({ onOpenConsultation }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id="quick-contact-floating-widget" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 font-ui">
      
      {/* Expanded Actions Tray */}
      {isExpanded && (
        <div className="bg-white rounded-2xl p-3.5 shadow-xl border border-[#D8C9B5]/60 mb-1 space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-200 min-w-[210px]">
          <div className="flex items-center justify-between pb-2 border-b border-[#D8C9B5]/30">
            <span className="text-xs font-semibold text-[#202321]">Direct Inquiries</span>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-[#77736D] hover:text-[#202321] p-1 rounded-full"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <a
            href={`https://wa.me/${BRAND_INFO.mobileWhatsapp.replace('+', '')}?text=Hello%20Index%20Furniture%20Nepal%2C%20I%20am%20interested%20in%20furnishing%20my%20home.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#F7F4EE] text-xs font-medium text-[#202321] transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <span>WhatsApp Chat</span>
          </a>

          <a
            href={`tel:${BRAND_INFO.phone}`}
            className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#F7F4EE] text-xs font-medium text-[#202321] transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-[#D9894B]/15 text-[#D9894B] flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <span>Call Showroom</span>
          </a>

          <button
            onClick={() => {
              setIsExpanded(false);
              onOpenConsultation();
            }}
            className="w-full flex items-center gap-2.5 p-2 rounded-xl hover:bg-[#F7F4EE] text-xs font-medium text-[#202321] transition-colors text-left cursor-pointer"
          >
            <div className="w-7 h-7 rounded-lg bg-[#4A3325]/10 text-[#4A3325] flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <span>Book Consultation</span>
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        id="floating-contact-trigger"
        onClick={() => setIsExpanded(!isExpanded)}
        className="group bg-[#D9894B] hover:bg-[#C3763A] text-white py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2.5 cursor-pointer transform hover:scale-105 active:scale-95"
        aria-label="Quick contact and WhatsApp options"
      >
        <div className="relative">
          <MessageSquare className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#25D366] ring-2 ring-white"></span>
        </div>
        <span className="text-xs font-semibold tracking-wide">
          {isExpanded ? 'Close' : 'Chat & Consult'}
        </span>
      </button>

    </div>
  );
};
