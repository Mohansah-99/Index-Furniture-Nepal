import React, { useState } from 'react';
import { Sparkles, Eye, ArrowRight, Check } from 'lucide-react';
import { ROOM_SCENES } from '../data/furnitureData';
import { RoomScene } from '../types';

interface RoomInspirationProps {
  onOpenConsultation: (roomTopic?: string) => void;
}

export const RoomInspirationSection: React.FC<RoomInspirationProps> = ({ onOpenConsultation }) => {
  const [activeSceneId, setActiveSceneId] = useState<string>(ROOM_SCENES[0].id);

  const currentScene = ROOM_SCENES.find((s) => s.id === activeSceneId) || ROOM_SCENES[0];

  return (
    <section id="inspiration" className="py-16 sm:py-24 bg-[#EFE9DE] border-y border-[#D8C9B5]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="font-ui text-xs font-semibold tracking-[0.2em] uppercase text-[#D9894B] mb-2 block">
            Living Gallery
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#202321] tracking-tight">
            Spaces Worth Coming Home To
          </h2>
          <p className="font-ui text-sm sm:text-base text-[#77736D] mt-3 leading-relaxed">
            Real spaces designed for harmony, warmth, and daily joy. Browse room styling concepts and let our team adapt them to your floor plan.
          </p>
        </div>

        {/* Room Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {ROOM_SCENES.map((scene) => (
            <button
              key={scene.id}
              id={`tab-scene-${scene.id}`}
              onClick={() => setActiveSceneId(scene.id)}
              className={`px-5 py-2.5 rounded-full font-ui text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeSceneId === scene.id
                  ? 'bg-[#4A3325] text-white shadow-xs'
                  : 'bg-white/80 hover:bg-white text-[#202321] border border-[#D8C9B5]/60'
              }`}
            >
              {scene.name}
            </button>
          ))}
        </div>

        {/* Active Scene Display Showcase */}
        <div className="bg-white rounded-3xl p-4 sm:p-7 lg:p-9 border border-[#D8C9B5]/60 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left/Main: Full Lifestyle Scene Image (Span 8) */}
            <div className="lg:col-span-8 relative rounded-2xl overflow-hidden aspect-16/10 bg-[#EFE9DE]">
              <img
                src={currentScene.image}
                alt={currentScene.title}
                className="w-full h-full object-cover transition-all duration-500"
                loading="lazy"
              />

              {/* Floating Caption Pill */}
              <div className="absolute top-4 left-4 bg-[#202321]/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-ui font-medium flex items-center gap-2 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D9894B]" />
                <span>{currentScene.title}</span>
              </div>

              {/* Bottom Subtle Overlay for High Contrast */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#202321]/70 via-[#202321]/20 to-transparent p-6 text-white flex flex-col justify-end">
                <p className="font-editorial text-xl sm:text-2xl font-light leading-snug max-w-xl">
                  “{currentScene.caption}”
                </p>
              </div>
            </div>

            {/* Right: Architectural Highlights & Conversion (Span 4) */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div>
                <span className="font-ui text-xs font-semibold uppercase tracking-wider text-[#D9894B]">
                  Design Breakdown
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#202321] mt-1 mb-4">
                  {currentScene.title}
                </h3>
                <p className="font-ui text-sm text-[#77736D] leading-relaxed mb-6">
                  {currentScene.caption}
                </p>

                {/* Highlights List */}
                <div className="space-y-3.5">
                  {currentScene.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-[#F7F4EE] border border-[#D8C9B5]/40 flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#D9894B]/15 text-[#D9894B] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <div>
                        <span className="font-ui text-xs font-semibold text-[#202321] block">
                          {h.title}
                        </span>
                        <span className="font-ui text-xs text-[#77736D] leading-normal">
                          {h.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA for this space */}
              <div className="pt-4 border-t border-[#D8C9B5]/30">
                <button
                  id={`btn-furnish-${currentScene.id}`}
                  onClick={() => onOpenConsultation(`Furnishing ${currentScene.name} (${currentScene.title})`)}
                  className="w-full bg-[#D9894B] hover:bg-[#C3763A] text-white py-3.5 px-4 rounded-xl font-ui text-sm font-medium transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Recreate This {currentScene.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center font-ui text-[11px] text-[#77736D] mt-2">
                  Complimentary 3D floor plan layout consultation in Nepal
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
