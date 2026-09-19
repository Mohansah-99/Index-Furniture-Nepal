import React from 'react';
import { ShieldCheck, Sparkles, Layers, Truck } from 'lucide-react';
import { TRUST_BENEFITS } from '../data/furnitureData';

export const TrustStrip: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#D9894B]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D9894B]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#D9894B]" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-[#D9894B]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D9894B]" />;
    }
  };

  return (
    <section id="trust-strip" className="border-y border-[#D8C9B5]/40 bg-[#F7F4EE] py-7 sm:py-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_BENEFITS.map((benefit, idx) => (
            <div
              key={benefit.title}
              id={`trust-benefit-${idx}`}
              className="flex items-start gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EFE9DE] border border-[#D8C9B5]/50 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
                {getIcon(benefit.iconName)}
              </div>
              <div>
                <h2 className="font-ui text-sm sm:text-[15px] font-semibold text-[#202321] tracking-tight">
                  {benefit.title}
                </h2>
                <p className="font-ui text-xs text-[#77736D] mt-1 leading-normal">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
