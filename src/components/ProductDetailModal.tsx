import React from 'react';
import { X, MessageSquare, Phone, Check, Ruler, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { ProductItem } from '../types';
import { BRAND_INFO } from '../data/furnitureData';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onEnquire: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onEnquire
}) => {
  if (!product) return null;

  return (
    <div
      id="product-detail-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#202321]/65 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="product-detail-modal"
        className="bg-white rounded-2xl md:rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#D8C9B5]/60 my-8 transition-all animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D8C9B5]/30 bg-[#F7F4EE]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D9894B]"></span>
            <span className="font-ui text-xs font-semibold tracking-wider uppercase text-[#77736D]">
              Index Product Specification
            </span>
          </div>
          <button
            id="close-product-modal"
            onClick={onClose}
            className="p-2 rounded-full text-[#77736D] hover:text-[#202321] hover:bg-[#EFE9DE] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Image Column */}
          <div className="relative aspect-4/3 md:aspect-auto h-full min-h-[300px] bg-[#EFE9DE]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.estimatedPrice && (
              <div className="absolute bottom-4 left-4 bg-[#202321]/90 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-lg text-xs font-ui font-semibold shadow-xs">
                {product.estimatedPrice}
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="font-ui text-xs font-semibold uppercase tracking-wider text-[#D9894B]">
                {product.category}
              </span>
              <h2 className="font-editorial text-3xl font-normal text-[#202321] mt-1 mb-2">
                {product.name}
              </h2>
              <p className="font-ui text-sm text-[#77736D] leading-relaxed mb-5">
                {product.description}
              </p>

              {/* Specs Breakdown */}
              <div className="space-y-3 pt-2 border-t border-[#D8C9B5]/30 text-xs font-ui">
                <div className="flex items-start gap-2.5">
                  <Ruler className="w-4 h-4 text-[#D9894B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#202321] font-semibold block">Dimensions:</span>
                    <span className="text-[#77736D]">{product.dimensions}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#D9894B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#202321] font-semibold block">Materials:</span>
                    <span className="text-[#77736D]">{product.materials.join(' • ')}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#D9894B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#202321] font-semibold block">Availability &amp; Lead Time:</span>
                    <span className="text-[#77736D]">{product.leadTime}</span>
                  </div>
                </div>
              </div>

              {/* Available Finishes */}
              <div className="mt-5">
                <span className="font-ui text-xs font-semibold text-[#202321] block mb-2">
                  Curated Finishes &amp; Textiles:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.finishes.map((f, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#F7F4EE] border border-[#D8C9B5]/50 text-xs font-ui text-[#4A3325]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#D8C9B5]/40 flex flex-col sm:flex-row gap-2.5">
              <button
                id="modal-enquire-btn"
                onClick={() => {
                  onClose();
                  onEnquire(product);
                }}
                className="flex-1 bg-[#D9894B] hover:bg-[#C3763A] text-white py-3 px-4 rounded-xl font-ui text-sm font-medium transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire About This Piece</span>
              </button>

              <a
                href={`https://wa.me/${BRAND_INFO.mobileWhatsapp.replace('+', '')}?text=Hello%20Index%20Furniture%20Nepal%2C%20I%20am%20inquiring%20about%20the%20${encodeURIComponent(product.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xl font-ui text-sm font-medium transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
