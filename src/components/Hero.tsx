import React from 'react';
import { ArrowRight, Compass, Sparkles, Home } from 'lucide-react';
import { BRAND_INFO } from '../data/furnitureData';

interface HeroProps {
  onOpenConsultation: (initialTopic?: string) => void;
  onExploreFurniture: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreFurniture }) => {
  // Hero preview feature cards inspired by reference editorial layout
  const quickHighlights = [
    {
      id: 'highlight-modern-furniture',
      title: 'Modern Furniture',
      tagline: 'Handcrafted sofas & solid timber tables',
      image: '/src/assets/images/chair_product_1789797956792.jpg',
      target: '#categories',
      actionText: 'Explore Collection'
    },
    {
      id: 'highlight-decor-accents',
      title: 'Decor Accents',
      tagline: 'Artisanal ceramics & ambient lighting',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80',
      target: '#categories',
      actionText: 'Browse Accents'
    },
    {
      id: 'highlight-inspired-living',
      title: 'Inspired Living',
      tagline: 'Tailored interiors for Nepal homes',
      image: '/src/assets/images/dining_collection_1789797931065.jpg',
      target: '#inspiration',
      actionText: 'View Spaces'
    }
  ];

  return (
    <section id="hero" className="relative bg-[#F7F4EE] pt-4 pb-12 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Card Container */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#EFE9DE] shadow-sm border border-[#D8C9B5]/40">
          
          {/* Top Editorial Copy Area */}
          <div className="pt-10 md:pt-16 pb-8 md:pb-12 px-6 sm:px-10 lg:px-14 max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8C9B5]/40 text-[#4A3325] text-xs font-ui font-semibold tracking-[0.18em] uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#D9894B]" />
              <span>{BRAND_INFO.eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal tracking-tight text-[#202321] leading-[1.08] mb-5 sm:mb-6">
              Furniture That Makes Home Feel Like Yours.
            </h1>

            {/* Supporting Text */}
            <p className="font-ui text-base sm:text-lg md:text-xl text-[#77736D] leading-relaxed max-w-2xl mb-8">
              {BRAND_INFO.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                id="hero-explore-btn"
                onClick={onExploreFurniture}
                className="bg-[#D9894B] hover:bg-[#C3763A] text-white px-7 py-3.5 rounded-xl font-ui text-[15px] font-medium shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Explore Furniture</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-consultation-btn"
                onClick={() => onOpenConsultation('Hero Section Inquiry')}
                className="bg-white/80 hover:bg-white text-[#202321] border border-[#D8C9B5] px-6 py-3.5 rounded-xl font-ui text-[15px] font-medium transition-all duration-200 hover:shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Home className="w-4 h-4 text-[#D9894B]" />
                <span>Book a Consultation</span>
              </button>
            </div>
          </div>

          {/* Large Hero Lifestyle Photography */}
          <div className="relative w-full aspect-16/10 md:aspect-21/10 overflow-hidden bg-[#EFE9DE]">
            <img
              src="/src/assets/images/hero_living_room_1789797916437.jpg"
              alt="Elegantly furnished modern living room with warm natural daylight, contemporary sofa, and handcrafted wooden furniture in Nepal"
              className="w-full h-full object-cover object-center transform scale-[1.01] hover:scale-[1.02] transition-transform duration-700 ease-out"
              loading="eager"
            />
            {/* Subtle soft gradient scrim to ensure smooth transition */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#202321]/30 via-transparent to-transparent pointer-events-none" />

            {/* Subtle badge over image */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#D8C9B5]/50 shadow-xs hidden sm:flex items-center gap-2 text-xs font-ui text-[#202321]">
              <span className="w-2 h-2 rounded-full bg-[#D9894B] animate-pulse"></span>
              <span>Oslo Collection • Designed for Nepal Homes</span>
            </div>
          </div>
        </div>

        {/* Floating Reference-Inspired Feature Cards (Overlapping rhythm) */}
        <div className="relative -mt-6 sm:-mt-12 md:-mt-16 z-20 px-2 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {quickHighlights.map((item) => (
              <a
                key={item.id}
                id={item.id}
                href={item.target}
                className="group bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl p-4 sm:p-5 border border-[#D8C9B5]/60 shadow-sm hover:shadow-md card-lift flex items-center gap-4 transition-all duration-300"
              >
                {/* Thumbnail image */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-lg overflow-hidden shrink-0 bg-[#EFE9DE] border border-[#D8C9B5]/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover img-zoom"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h2 className="font-ui text-base font-semibold text-[#202321] group-hover:text-[#D9894B] transition-colors truncate">
                    {item.title}
                  </h2>
                  <p className="font-ui text-xs text-[#77736D] mt-0.5 line-clamp-1">
                    {item.tagline}
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-medium text-[#D9894B] group-hover:underline">
                    <span>{item.actionText}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
