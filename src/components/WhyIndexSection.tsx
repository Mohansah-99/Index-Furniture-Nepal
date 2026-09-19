import React from 'react';
import { Compass, Gem, HeartHandshake, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { WHY_INDEX_PILLARS } from '../data/furnitureData';

interface WhyIndexSectionProps {
  onOpenConsultation: (topic?: string) => void;
}

export const WhyIndexSection: React.FC<WhyIndexSectionProps> = ({ onOpenConsultation }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#D9894B]" />;
      case 'Gem':
        return <Gem className="w-5 h-5 text-[#D9894B]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#D9894B]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#D9894B]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#D9894B]" />;
    }
  };

  return (
    <section id="why-index" className="py-16 sm:py-24 bg-[#F7F4EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & 4 Pillars (Span 7) */}
          <div className="lg:col-span-7">
            <span className="font-ui text-xs font-semibold tracking-[0.2em] uppercase text-[#D9894B] mb-2.5 block">
              The Index Philosophy
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#202321] tracking-tight mb-5 leading-tight">
              Made for Real Homes. <br className="hidden sm:inline" />Designed to Last.
            </h2>
            <p className="font-ui text-base sm:text-[17px] text-[#77736D] leading-relaxed mb-8 max-w-2xl">
              At Index Furniture Nepal, we reject fast throwaway decor. We design and craft furniture that seamlessly balances <strong className="text-[#202321] font-medium">architectural beauty</strong>, <strong className="text-[#202321] font-medium">uncompromising comfort</strong>, and <strong className="text-[#202321] font-medium">everyday family practicality</strong> for Nepalese residences.
            </p>

            {/* 4 Feature Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {WHY_INDEX_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  id={`pillar-${pillar.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white p-5 rounded-xl border border-[#D8C9B5]/50 shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#EFE9DE] flex items-center justify-center shrink-0">
                      {getIcon(pillar.icon)}
                    </div>
                    <div>
                      <h3 className="font-ui text-base font-semibold text-[#202321]">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                  <p className="font-ui text-xs sm:text-sm text-[#77736D] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action prompt */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="why-index-consultation-btn"
                onClick={() => onOpenConsultation('Custom Consultation & Space Planning')}
                className="bg-[#D9894B] hover:bg-[#C3763A] text-white px-6 py-3 rounded-xl font-ui text-sm font-medium transition-all shadow-xs hover:shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>Talk With Our Interior Specialist</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="font-ui text-xs text-[#77736D]">
                Personalized home layout &amp; material swatches
              </span>
            </div>
          </div>

          {/* Right Column: High-Resolution Craftsmanship Lifestyle Image (Span 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D8C9B5]/60 shadow-lg bg-[#EFE9DE]">
              <img
                src="/src/assets/images/furniture_craft_1789797981138.jpg"
                alt="Fine woodworking craftsmanship and tactile timber grain detail at Index Furniture Nepal"
                className="w-full h-full object-cover aspect-4/5"
                loading="lazy"
              />
              
              {/* Floating quote badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-[#D8C9B5]/60 shadow-md">
                <p className="font-editorial text-lg italic text-[#202321] leading-snug">
                  “We build furniture that ages with grace, bearing witness to morning teas and family milestones.”
                </p>
                <div className="mt-3 flex items-center justify-between text-xs font-ui text-[#77736D]">
                  <span className="font-medium text-[#4A3325]">Index Craft Studio</span>
                  <span>Kathmandu Valley</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative architectural offset border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-[#D9894B]/30 -z-10 hidden sm:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
