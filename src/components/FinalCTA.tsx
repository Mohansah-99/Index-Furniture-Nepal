import React from 'react';
import { ArrowRight, Home, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onExploreFurniture: () => void;
  onOpenConsultation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onExploreFurniture,
  onOpenConsultation
}) => {
  return (
    <section id="final-cta" className="relative py-20 sm:py-28 overflow-hidden bg-[#202321] text-white">
      {/* Background Lifestyle Image with Dark Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_living_room_1789797916437.jpg"
          alt="Warm modern furniture in residential home"
          className="w-full h-full object-cover object-center opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#202321]/95 via-[#202321]/85 to-[#4A3325]/85" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D9894B] text-xs font-ui font-semibold tracking-widest uppercase mb-6 backdrop-blur-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INDEX FURNITURE NEPAL</span>
        </div>

        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#F7F4EE] tracking-tight leading-tight mb-5">
          Your Home Deserves Furniture That Feels Right.
        </h2>

        <p className="font-ui text-base sm:text-lg text-[#D8C9B5] max-w-2xl mx-auto leading-relaxed mb-9">
          Explore our collections or speak with our team about your next space. We guide you from spatial floor planning to effortless delivery and placement.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            id="final-cta-explore-btn"
            onClick={onExploreFurniture}
            className="w-full sm:w-auto bg-[#D9894B] hover:bg-[#C3763A] text-white px-7 py-3.5 rounded-xl font-ui text-[15px] font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Furniture</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="final-cta-consultation-btn"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto bg-white/10 hover:bg-white text-[#F7F4EE] hover:text-[#202321] border border-white/20 hover:border-white px-6 py-3.5 rounded-xl font-ui text-[15px] font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4 text-[#D9894B]" />
            <span>Book a Consultation</span>
          </button>
        </div>

      </div>
    </section>
  );
};
