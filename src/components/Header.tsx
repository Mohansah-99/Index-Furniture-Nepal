import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/furnitureData';

interface HeaderProps {
  onOpenConsultation: (initialTopic?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Furniture', href: '#categories' },
    { label: 'Collections', href: '#collections' },
    { label: 'Living Spaces', href: '#inspiration' },
    { label: 'About Us', href: '#why-index' },
    { label: 'Products', href: '#products' },
    { label: 'Showrooms', href: '#showrooms' },
  ];

  return (
    <>
      {/* Top micro announcement bar */}
      <div id="announcement-bar" className="bg-[#4A3325] text-[#F7F4EE] text-xs py-2 px-4 text-center tracking-wide font-ui transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-4 text-[13px] text-[#D8C9B5]">
            <span>Kathmandu Flagship &amp; Lalitpur Design Studio</span>
            <span className="inline-block w-1 h-1 rounded-full bg-[#D9894B]"></span>
            <span>Nepal-wide White Glove Delivery</span>
          </div>
          <div className="mx-auto sm:mx-0 flex items-center gap-5 text-[13px]">
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9894B]" />
              <span>{BRAND_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${BRAND_INFO.mobileWhatsapp.replace('+', '')}?text=Hello%20Index%20Furniture%20Nepal%2C%20I%20am%20interested%20in%20furnishing%20my%20home.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#D8C9B5] hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="hidden md:inline">WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F4EE]/95 backdrop-blur-md shadow-xs border-b border-[#D8C9B5]/40 py-3.5'
            : 'bg-[#F7F4EE] border-b border-[#D8C9B5]/25 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Mark */}
            <a
              href="#hero"
              id="brand-logo-link"
              className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9894B] rounded-sm"
            >
              {/* Original architectural emblem */}
              <div className="w-10 h-10 rounded-sm bg-[#4A3325] text-[#F7F4EE] flex items-center justify-center transition-transform group-hover:scale-105 duration-300 shadow-xs">
                <svg
                  className="w-6 h-6 text-[#D9894B]"
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
              <div className="flex flex-col">
                <span className="font-editorial text-2xl sm:text-[26px] font-semibold tracking-tight text-[#202321] leading-none">
                  INDEX
                </span>
                <span className="font-ui text-[10px] sm:text-[11px] font-medium tracking-[0.2em] text-[#77736D] uppercase leading-tight mt-0.5">
                  Furniture Nepal
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" aria-label="Primary Navigation" className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-ui text-[14.5px] font-medium text-[#202321]/80 hover:text-[#4A3325] transition-colors relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D9894B] after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action: CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                id="header-consultation-btn"
                onClick={() => onOpenConsultation('General Interior Inquiry')}
                className="bg-[#D9894B] hover:bg-[#C3763A] text-white px-5 py-2.5 rounded-lg font-ui text-[14px] font-medium shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-[#202321] hover:bg-[#EFE9DE] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D9894B]"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-menu"
            className="lg:hidden border-t border-[#D8C9B5]/50 bg-[#F7F4EE] px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200 shadow-lg"
          >
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-md font-ui text-base font-medium text-[#202321] hover:bg-[#EFE9DE] hover:text-[#D9894B] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#D8C9B5]/40 flex flex-col gap-2.5">
              <button
                id="mobile-consultation-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation('Mobile Quick Inquiry');
                }}
                className="w-full bg-[#D9894B] hover:bg-[#C3763A] text-white py-3 rounded-lg font-ui font-medium text-center shadow-xs flex items-center justify-center gap-2"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#EFE9DE] text-[#202321] text-xs font-ui font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D9894B]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${BRAND_INFO.mobileWhatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#EFE9DE] text-[#202321] text-xs font-ui font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
