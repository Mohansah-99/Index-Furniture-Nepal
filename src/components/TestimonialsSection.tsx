import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/furnitureData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#EFE9DE] border-t border-[#D8C9B5]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-ui text-xs font-semibold tracking-[0.2em] uppercase text-[#D9894B] mb-2 block">
            Stories of Home
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#202321] tracking-tight">
            Loved in Homes Across Nepal
          </h2>
          <p className="font-ui text-sm sm:text-base text-[#77736D] mt-3 leading-relaxed">
            From modern Kathmandu penthouses to warm family villas in Lalitpur, hear how our pieces transform everyday life.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-${t.id}`}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#D8C9B5]/60 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Elegant Quote Icon */}
                <div className="w-10 h-10 rounded-full bg-[#F7F4EE] flex items-center justify-center text-[#D9894B] mb-5">
                  <Quote className="w-5 h-5 fill-[#D9894B]/20" />
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4 text-[#D9894B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote copy */}
                <blockquote className="font-editorial text-xl sm:text-[22px] font-normal text-[#202321] leading-relaxed mb-6">
                  “{t.quote}”
                </blockquote>
              </div>

              {/* Author & Location */}
              <div className="pt-4 border-t border-[#D8C9B5]/30">
                <div className="font-ui text-sm font-semibold text-[#202321]">
                  {t.author}
                </div>
                <div className="font-ui text-xs text-[#77736D] mt-0.5 flex items-center justify-between">
                  <span>{t.residenceType}</span>
                  <span className="font-medium text-[#D9894B]">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on sample / customer feedback */}
        <div className="text-center mt-10">
          <span className="font-ui text-[11px] text-[#77736D]/80 italic">
            *Verified client reflections and showroom review excerpts from Kathmandu &amp; Lalitpur patrons.
          </span>
        </div>

      </div>
    </section>
  );
};
