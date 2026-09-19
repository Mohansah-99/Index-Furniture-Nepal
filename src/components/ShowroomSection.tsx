import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Navigation, Car, ExternalLink } from 'lucide-react';
import { SHOWROOMS, BRAND_INFO } from '../data/furnitureData';
import { ShowroomLocation } from '../types';

export const ShowroomSection: React.FC = () => {
  const [activeShowroomId, setActiveShowroomId] = useState<string>(SHOWROOMS[0].id);

  const activeShowroom = SHOWROOMS.find((s) => s.id === activeShowroomId) || SHOWROOMS[0];

  return (
    <section id="showrooms" className="py-16 sm:py-24 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-ui text-xs font-semibold tracking-[0.2em] uppercase text-[#D9894B] mb-2 block">
              Experience In Person
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#202321] tracking-tight">
              Visit Index Furniture Nepal
            </h2>
            <p className="font-ui text-sm sm:text-base text-[#77736D] mt-3 leading-relaxed">
              Step into our experiential galleries to test cushion comfort, admire timber grains in person, and review custom architectural finishes with our consultants.
            </p>
          </div>

          {/* Showroom Switcher Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#EFE9DE] border border-[#D8C9B5]/50 self-start md:self-auto">
            {SHOWROOMS.map((sr) => (
              <button
                key={sr.id}
                id={`tab-showroom-${sr.id}`}
                onClick={() => setActiveShowroomId(sr.id)}
                className={`px-4 py-2 rounded-lg font-ui text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeShowroomId === sr.id
                    ? 'bg-white text-[#202321] shadow-2xs'
                    : 'text-[#77736D] hover:text-[#202321]'
                }`}
              >
                {sr.city.split(',')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Showroom Card with Interactive Information & Map Visualizer */}
        <div className="bg-white rounded-3xl overflow-hidden border border-[#D8C9B5]/60 shadow-sm grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Location & Contact Details (Span 6) */}
          <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DE] text-[#4A3325] text-xs font-ui font-medium mb-3">
                <span className="w-2 h-2 rounded-full bg-[#D9894B]"></span>
                <span>{activeShowroom.type}</span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl font-normal text-[#202321] mb-2">
                {activeShowroom.name}
              </h3>
              <p className="font-ui text-sm text-[#77736D] flex items-start gap-2 mb-6">
                <MapPin className="w-4 h-4 text-[#D9894B] shrink-0 mt-0.5" />
                <span>{activeShowroom.address}, {activeShowroom.city}</span>
              </p>

              {/* Information Blocks */}
              <div className="space-y-4 pt-4 border-t border-[#D8C9B5]/40 text-sm font-ui">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D9894B] shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-[#202321] block">Operating Hours:</span>
                    <span className="text-[#77736D] block">{activeShowroom.hours}</span>
                    <span className="text-[#77736D] block">{activeShowroom.weekendHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#D9894B] shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-[#202321] block">Direct Showroom Desk:</span>
                    <a href={`tel:${activeShowroom.phone}`} className="text-[#D9894B] hover:underline font-medium">
                      {activeShowroom.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-[#D9894B] shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-[#202321] block">Visitor Parking:</span>
                    <span className="text-[#77736D]">{activeShowroom.parking}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Showroom Actions */}
            <div className="pt-6 border-t border-[#D8C9B5]/40 flex flex-wrap gap-3">
              <a
                href={activeShowroom.mapEmbedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D9894B] hover:bg-[#C3763A] text-white px-5 py-3 rounded-xl font-ui text-xs sm:text-sm font-medium transition-all shadow-xs flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${activeShowroom.phone}`}
                className="bg-[#F7F4EE] hover:bg-[#EFE9DE] text-[#202321] border border-[#D8C9B5]/60 px-4 py-3 rounded-xl font-ui text-xs sm:text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D9894B]" />
                <span>Call Desk</span>
              </a>

              <a
                href={`https://wa.me/${activeShowroom.whatsapp.replace('+', '')}?text=Hello%20Index%20Furniture%2C%20I%20am%20planning%20to%20visit%20the%20${encodeURIComponent(activeShowroom.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-xl font-ui text-xs sm:text-sm font-medium transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right: Architectural Map/Gallery Display (Span 6) */}
          <div className="lg:col-span-6 relative bg-[#EFE9DE] min-h-[340px] flex flex-col justify-between p-6 sm:p-8">
            
            {/* Map-style visual card */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#D8C9B5]/60 shadow-xs bg-[#F7F4EE] flex flex-col justify-between p-6">
              
              {/* Stylized Architectural Map Background elements */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4A3325" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
              </div>

              {/* Pin indicator */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white shadow-xs border border-[#D8C9B5]/40 text-xs font-ui font-semibold text-[#4A3325]">
                  <MapPin className="w-4 h-4 text-[#D9894B]" />
                  <span>{activeShowroom.neighborhood} Hub</span>
                </div>
              </div>

              {/* Center Map Callout */}
              <div className="relative z-10 my-auto py-8 text-center max-w-sm mx-auto">
                <div className="w-14 h-14 rounded-2xl bg-[#4A3325] text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Navigation className="w-6 h-6 text-[#D9894B]" />
                </div>
                <h4 className="font-editorial text-2xl font-normal text-[#202321]">
                  Convenient Kathmandu Valley Access
                </h4>
                <p className="font-ui text-xs text-[#77736D] mt-1.5 leading-relaxed">
                  Located along major thoroughfares with wide parking and dedicated furniture staging displays.
                </p>
                <div className="mt-4">
                  <a
                    href={activeShowroom.mapEmbedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-ui font-semibold text-[#D9894B] hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Bottom quick stats */}
              <div className="relative z-10 grid grid-cols-2 gap-3 pt-3 border-t border-[#D8C9B5]/40 text-xs font-ui">
                <div className="bg-white/80 p-2.5 rounded-lg text-center">
                  <span className="text-[#77736D] block text-[11px]">Showroom Space</span>
                  <span className="font-semibold text-[#202321]">8,500+ Sq. Ft.</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded-lg text-center">
                  <span className="text-[#77736D] block text-[11px]">Display Sets</span>
                  <span className="font-semibold text-[#202321]">40+ Live Rooms</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
