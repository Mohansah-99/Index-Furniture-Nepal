import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Instagram, Facebook, Youtube } from 'lucide-react';
import { BRAND_INFO } from '../data/furnitureData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1B1D1C] text-[#EFE9DE] pt-16 sm:pt-20 pb-12 border-t border-white/10 font-ui">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand & Mission Column (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#4A3325] text-[#F7F4EE] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#D9894B]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" />
                  <path d="M4 11h16" />
                  <path d="M9 11v8" />
                  <path d="M15 11v8" />
                </svg>
              </div>
              <div>
                <span className="font-editorial text-2xl font-semibold tracking-tight text-white block leading-none">
                  INDEX
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#D8C9B5] uppercase block leading-tight mt-0.5">
                  Furniture Nepal
                </span>
              </div>
            </div>

            <p className="text-sm text-[#D8C9B5]/80 leading-relaxed max-w-sm">
              Thoughtfully designed furniture for modern homes across Nepal. Built with sustainably harvested hardwoods, natural fibers, and timeless proportion.
            </p>

            {/* Social Channels */}
            <div className="pt-2 flex items-center gap-3 text-[#D8C9B5]">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#D9894B] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#D9894B] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#D9894B] hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column 1: Explore (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-editorial text-lg text-white font-normal tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#D8C9B5]/75">
              <li><a href="#categories" className="hover:text-white transition-colors">Furniture</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Living Rooms</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Bedrooms</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Dining</a></li>
              <li><a href="#inspiration" className="hover:text-white transition-colors">Inspiration</a></li>
            </ul>
          </div>

          {/* Links Column 2: Company (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-editorial text-lg text-white font-normal tracking-wide">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-[#D8C9B5]/75">
              <li><a href="#why-index" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#why-index" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#showrooms" className="hover:text-white transition-colors">Showrooms</a></li>
              <li><a href="#lead-section" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#showrooms" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Links Column 3: Help & Service (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-editorial text-lg text-white font-normal tracking-wide">
              Help
            </h4>
            <ul className="space-y-2 text-sm text-[#D8C9B5]/75">
              <li><a href="#trust-strip" className="hover:text-white transition-colors">Delivery in Nepal</a></li>
              <li><a href="#lead-section" className="hover:text-white transition-colors">Custom Orders</a></li>
              <li><a href="#why-index" className="hover:text-white transition-colors">Wood Care &amp; Warranty</a></li>
              <li><a href="#lead-section" className="hover:text-white transition-colors">Design Support</a></li>
              <li><a href="#showrooms" className="hover:text-white transition-colors">Consultations</a></li>
            </ul>
          </div>

          {/* Contact Column: Nepal Locations (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-editorial text-lg text-white font-normal tracking-wide">
              Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#D8C9B5]/75">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D9894B] shrink-0 mt-0.5" />
                <span>Naxal &amp; Jhamsikhel, Kathmandu Valley</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D9894B] shrink-0" />
                <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-white transition-colors">
                  {BRAND_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${BRAND_INFO.mobileWhatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Support
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D9894B] shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-white transition-colors truncate">
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8C9B5]/60">
          <div>
            <p>© {new Date().getFullYear()} Index Furniture Nepal. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
