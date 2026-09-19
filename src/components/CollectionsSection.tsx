import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FEATURED_COLLECTIONS } from '../data/furnitureData';
import { FurnitureCollection } from '../types';

interface CollectionsSectionProps {
  onSelectCollection: (collection: FurnitureCollection) => void;
  onOpenConsultation: (topic?: string) => void;
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({
  onSelectCollection,
  onOpenConsultation
}) => {
  const [col1, col2, col3, col4, col5] = FEATURED_COLLECTIONS;

  return (
    <section id="collections" className="py-16 sm:py-24 bg-[#EFE9DE] border-y border-[#D8C9B5]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-ui font-semibold tracking-[0.2em] uppercase text-[#D9894B] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Editorial Series</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#202321] tracking-tight">
              Featured Collections
            </h2>
            <p className="font-ui text-sm sm:text-base text-[#77736D] mt-3 leading-relaxed">
              Carefully orchestrated ensembles designed to bring cohesive serenity, warm natural textures, and lasting beauty to contemporary homes.
            </p>
          </div>
          <div>
            <button
              id="collections-consultation-btn"
              onClick={() => onOpenConsultation('Custom Collection Planning')}
              className="bg-transparent hover:bg-white text-[#202321] border border-[#4A3325]/30 hover:border-[#4A3325] px-5 py-2.5 rounded-xl font-ui text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Schedule Collection Walkthrough</span>
              <ArrowRight className="w-4 h-4 text-[#D9894B]" />
            </button>
          </div>
        </div>

        {/* Asymmetrical Magazine-style Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Main Hero Showcase Card (Span 7) */}
          <div
            id={`collection-${col1.id}`}
            onClick={() => onSelectCollection(col1)}
            className="lg:col-span-7 group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#D8C9B5]/60 shadow-xs hover:shadow-xl card-lift flex flex-col justify-between"
          >
            <div className="relative aspect-16/10 overflow-hidden bg-[#EFE9DE]">
              <img
                src={col1.image}
                alt={col1.title}
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
              <div className="absolute top-5 left-5 bg-[#202321]/80 backdrop-blur-xs text-white px-3.5 py-1 rounded-full text-xs font-ui font-medium tracking-wide">
                {col1.accent}
              </div>
            </div>
            <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
              <div>
                <span className="font-ui text-xs font-semibold text-[#D9894B] tracking-wider uppercase">
                  {col1.subtitle}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#202321] mt-1 mb-3 group-hover:text-[#D9894B] transition-colors">
                  {col1.title}
                </h3>
                <p className="font-ui text-sm sm:text-[15px] text-[#77736D] leading-relaxed mb-6">
                  {col1.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {col1.featuredItems.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md bg-[#F7F4EE] border border-[#D8C9B5]/40 text-xs font-ui text-[#4A3325]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-[#D8C9B5]/30 flex items-center justify-between">
                <span className="font-ui text-sm font-semibold text-[#4A3325] group-hover:text-[#D9894B] transition-colors flex items-center gap-2">
                  View Collection Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="font-ui text-xs text-[#77736D]">Kathmandu Display</span>
              </div>
            </div>
          </div>

          {/* Secondary Stack (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            {/* Card 2: Warm Minimalism */}
            <div
              id={`collection-${col2.id}`}
              onClick={() => onSelectCollection(col2)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#D8C9B5]/60 shadow-xs hover:shadow-lg card-lift flex flex-col sm:flex-row lg:flex-col justify-between flex-1"
            >
              <div className="relative aspect-16/10 sm:aspect-square lg:aspect-16/9 sm:w-1/2 lg:w-full overflow-hidden bg-[#EFE9DE]">
                <img
                  src={col2.image}
                  alt={col2.title}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-ui font-medium text-[#4A3325]">
                  {col2.accent}
                </div>
              </div>
              <div className="p-6 sm:w-1/2 lg:w-full flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-editorial text-2xl font-normal text-[#202321] group-hover:text-[#D9894B] transition-colors mb-2">
                    {col2.title}
                  </h3>
                  <p className="font-ui text-xs sm:text-sm text-[#77736D] leading-relaxed mb-4">
                    {col2.description}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs font-ui pt-3 border-t border-[#D8C9B5]/30">
                  <span className="font-medium text-[#D9894B] flex items-center gap-1 group-hover:underline">
                    Explore Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[#77736D]">Bespoke Sizing</span>
                </div>
              </div>
            </div>

            {/* Card 3: Modern Bedroom */}
            <div
              id={`collection-${col3.id}`}
              onClick={() => onSelectCollection(col3)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#D8C9B5]/60 shadow-xs hover:shadow-lg card-lift flex flex-col sm:flex-row lg:flex-col justify-between flex-1"
            >
              <div className="relative aspect-16/10 sm:aspect-square lg:aspect-16/9 sm:w-1/2 lg:w-full overflow-hidden bg-[#EFE9DE]">
                <img
                  src={col3.image}
                  alt={col3.title}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-ui font-medium text-[#4A3325]">
                  {col3.accent}
                </div>
              </div>
              <div className="p-6 sm:w-1/2 lg:w-full flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-editorial text-2xl font-normal text-[#202321] group-hover:text-[#D9894B] transition-colors mb-2">
                    {col3.title}
                  </h3>
                  <p className="font-ui text-xs sm:text-sm text-[#77736D] leading-relaxed mb-4">
                    {col3.description}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs font-ui pt-3 border-t border-[#D8C9B5]/30">
                  <span className="font-medium text-[#D9894B] flex items-center gap-1 group-hover:underline">
                    Explore Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[#77736D]">King &amp; Queen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row (Span 6 + Span 6) */}
          <div
            id={`collection-${col4.id}`}
            onClick={() => onSelectCollection(col4)}
            className="lg:col-span-6 group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#D8C9B5]/60 shadow-xs hover:shadow-lg card-lift flex flex-col justify-between"
          >
            <div className="relative aspect-16/9 overflow-hidden bg-[#EFE9DE]">
              <img
                src={col4.image}
                alt={col4.title}
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-ui font-medium text-[#4A3325]">
                {col4.accent}
              </div>
            </div>
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-editorial text-2xl font-normal text-[#202321] group-hover:text-[#D9894B] transition-colors mb-2">
                  {col4.title}
                </h3>
                <p className="font-ui text-sm text-[#77736D] leading-relaxed mb-4">
                  {col4.description}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs font-ui pt-3 border-t border-[#D8C9B5]/30">
                <span className="font-medium text-[#D9894B] flex items-center gap-1 group-hover:underline">
                  View Dining Sets
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[#77736D]">Teak &amp; Oak Finishes</span>
              </div>
            </div>
          </div>

          <div
            id={`collection-${col5.id}`}
            onClick={() => onSelectCollection(col5)}
            className="lg:col-span-6 group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#D8C9B5]/60 shadow-xs hover:shadow-lg card-lift flex flex-col justify-between"
          >
            <div className="relative aspect-16/9 overflow-hidden bg-[#EFE9DE]">
              <img
                src={col5.image}
                alt={col5.title}
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-ui font-medium text-[#4A3325]">
                {col5.accent}
              </div>
            </div>
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-editorial text-2xl font-normal text-[#202321] group-hover:text-[#D9894B] transition-colors mb-2">
                  {col5.title}
                </h3>
                <p className="font-ui text-sm text-[#77736D] leading-relaxed mb-4">
                  {col5.description}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs font-ui pt-3 border-t border-[#D8C9B5]/30">
                <span className="font-medium text-[#D9894B] flex items-center gap-1 group-hover:underline">
                  View Workstations
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[#77736D]">Ergonomic Proportions</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
