import React, { useState } from 'react';
import { ArrowRight, Sparkles, MessageSquare, Info, Filter } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/furnitureData';
import { ProductItem } from '../types';

interface ProductsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
  onEnquireProduct: (product: ProductItem) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onEnquireProduct
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Pieces' },
    { id: 'living', label: 'Living' },
    { id: 'dining', label: 'Dining' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'storage', label: 'Storage' }
  ];

  const filteredProducts = activeFilter === 'all'
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-xl">
            <span className="font-ui text-xs font-semibold tracking-[0.2em] uppercase text-[#D9894B] mb-2 block">
              Signature Collection
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#202321] tracking-tight">
              Featured Products
            </h2>
            <p className="font-ui text-sm sm:text-base text-[#77736D] mt-3 leading-relaxed">
              Individually crafted statement pieces made from solid hardwoods, tactile upholstery, and enduring architectural profiles.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((f) => (
              <button
                key={f.id}
                id={`filter-btn-${f.id}`}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full font-ui text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#D9894B] text-white shadow-xs'
                    : 'bg-white hover:bg-[#EFE9DE] text-[#202321] border border-[#D8C9B5]/60'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-[#D8C9B5]/60 shadow-xs hover:shadow-lg card-lift flex flex-col justify-between transition-all duration-300"
            >
              {/* Image & Quick Badges */}
              <div
                className="relative aspect-4/3 overflow-hidden bg-[#EFE9DE] cursor-pointer"
                onClick={() => onSelectProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-ui font-medium text-[#4A3325] shadow-xs">
                  {product.dimensions.split('×')[0]}
                </div>
                {product.estimatedPrice && (
                  <div className="absolute bottom-4 left-4 bg-[#202321]/80 backdrop-blur-xs text-white px-3 py-1 rounded-md text-[11px] font-ui font-medium">
                    {product.estimatedPrice}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3
                      className="font-editorial text-2xl font-normal text-[#202321] group-hover:text-[#D9894B] transition-colors cursor-pointer"
                      onClick={() => onSelectProduct(product)}
                    >
                      {product.name}
                    </h3>
                  </div>
                  <p className="font-ui text-xs sm:text-sm text-[#77736D] leading-relaxed mb-4 line-clamp-2">
                    {product.descriptor}
                  </p>
                  
                  {/* Subtle material tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.materials.slice(0, 2).map((m, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#F7F4EE] border border-[#D8C9B5]/40 text-[11px] font-ui text-[#77736D]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Conversion Actions (Lead Generation Focused) */}
                <div className="pt-4 border-t border-[#D8C9B5]/40 flex items-center gap-3">
                  <button
                    id={`btn-enquire-${product.id}`}
                    onClick={() => onEnquireProduct(product)}
                    className="flex-1 bg-[#D9894B] hover:bg-[#C3763A] text-white py-2.5 px-4 rounded-xl font-ui text-xs sm:text-sm font-medium transition-all shadow-2xs hover:shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire Now</span>
                  </button>

                  <button
                    id={`btn-details-${product.id}`}
                    onClick={() => onSelectProduct(product)}
                    className="bg-[#F7F4EE] hover:bg-[#EFE9DE] text-[#202321] border border-[#D8C9B5]/60 py-2.5 px-3.5 rounded-xl font-ui text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer"
                    title="View Product Specifications"
                  >
                    <Info className="w-3.5 h-3.5 text-[#77736D]" />
                    <span className="hidden sm:inline">Details</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Note */}
        <div className="mt-12 text-center">
          <p className="font-ui text-xs sm:text-sm text-[#77736D]">
            Need a custom dimension or fabric swatch delivered in Kathmandu Valley?{' '}
            <button
              onClick={() => onEnquireProduct(FEATURED_PRODUCTS[0])}
              className="text-[#D9894B] font-semibold underline underline-offset-4 hover:text-[#C3763A] cursor-pointer"
            >
              Request Custom Consultation
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
