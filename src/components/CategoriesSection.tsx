import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/furnitureData';
import { FurnitureCategory } from '../types';

interface CategoriesSectionProps {
  onSelectCategory: (category: FurnitureCategory) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-16 sm:py-24 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="font-ui text-xs font-semibold tracking-[0.2em] uppercase text-[#D9894B] mb-2.5 block">
              Curated Spaces
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#202321] tracking-tight">
              Find Your Perfect Space
            </h2>
            <p className="font-ui text-sm sm:text-base text-[#77736D] mt-3 leading-relaxed">
              Explore thoughtfully selected furniture designed to bring comfort, function, and character into every room.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <span className="font-ui text-xs text-[#77736D] bg-[#EFE9DE] px-3.5 py-1.5 rounded-full border border-[#D8C9B5]/40">
              6 Curated Design Categories
            </span>
          </div>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              id={`category-card-${category.id}`}
              onClick={() => onSelectCategory(category)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#D8C9B5]/50 shadow-xs hover:shadow-lg card-lift transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image Area with Controlled Ratio */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#EFE9DE]">
                <img
                  src={category.image}
                  alt={`${category.title} furniture collection at Index Furniture Nepal`}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-ui font-medium text-[#4A3325] shadow-xs">
                  {category.tag}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-editorial text-2xl font-normal text-[#202321] group-hover:text-[#D9894B] transition-colors">
                      {category.title}
                    </h3>
                    <span className="font-ui text-xs font-medium text-[#77736D]">
                      {category.itemCount} Designs
                    </span>
                  </div>
                  <p className="font-ui text-sm text-[#77736D] leading-relaxed line-clamp-2 mb-5">
                    {category.description}
                  </p>
                </div>

                {/* Card Link */}
                <div className="pt-3 border-t border-[#D8C9B5]/30 flex items-center justify-between">
                  <span className="font-ui text-xs font-semibold tracking-wide text-[#D9894B] group-hover:text-[#C3763A] transition-colors flex items-center gap-1.5">
                    Explore Collection
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="font-ui text-[11px] text-[#77736D] uppercase tracking-wider">
                    Showroom Ready
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
