import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { CategoriesSection } from './components/CategoriesSection';
import { CollectionsSection } from './components/CollectionsSection';
import { WhyIndexSection } from './components/WhyIndexSection';
import { RoomInspirationSection } from './components/RoomInspirationSection';
import { ProductsSection } from './components/ProductsSection';
import { LeadSection } from './components/LeadSection';
import { ShowroomSection } from './components/ShowroomSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { QuickContactFloating } from './components/QuickContactFloating';
import { ProductItem, FurnitureCategory, FurnitureCollection } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState<string>('');
  const [leadSectionPrefill, setLeadSectionPrefill] = useState<string>('');

  const handleOpenConsultation = (topic?: string) => {
    setConsultationTopic(topic || 'General Interior Consultation');
    setConsultationModalOpen(true);
  };

  const handleExploreFurniture = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (category: FurnitureCategory) => {
    // Smooth scroll to products and preset filter
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCollection = (collection: FurnitureCollection) => {
    handleOpenConsultation(`Collection: ${collection.title} (${collection.subtitle})`);
  };

  const handleEnquireProduct = (product: ProductItem) => {
    setLeadSectionPrefill(`${product.name} (${product.dimensions})`);
    const el = document.getElementById('lead-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="index-furniture-app" className="min-h-screen flex flex-col bg-[#F7F4EE] text-[#202321] font-ui selection:bg-[#D9894B] selection:text-white">
      
      {/* Sticky Premium Header */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Large Editorial Photography and Floating Cards */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onExploreFurniture={handleExploreFurniture}
        />

        {/* 2. Trust / Value Strip */}
        <TrustStrip />

        {/* 3. Featured Furniture Categories */}
        <CategoriesSection onSelectCategory={handleSelectCategory} />

        {/* 4. Featured Collections (Asymmetrical Magazine Grid) */}
        <CollectionsSection
          onSelectCollection={handleSelectCollection}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 5. "Why Index" Brand Story & 4 Pillars (Editorial Split Layout) */}
        <WhyIndexSection onOpenConsultation={handleOpenConsultation} />

        {/* 6. Lifestyle / Room Inspiration Section */}
        <RoomInspirationSection onOpenConsultation={handleOpenConsultation} />

        {/* 7. Featured Signature Products Showcase */}
        <ProductsSection
          onSelectProduct={(p) => setSelectedProduct(p)}
          onEnquireProduct={handleEnquireProduct}
        />

        {/* 8. Conversion-Focused Lead Generation Section */}
        <LeadSection prefilledTopic={leadSectionPrefill} />

        {/* 9. Nepal Showroom & Contact Section */}
        <ShowroomSection />

        {/* 10. Customer Testimonials */}
        <TestimonialsSection />

        {/* 11. Final Closing CTA */}
        <FinalCTA
          onExploreFurniture={handleExploreFurniture}
          onOpenConsultation={() => handleOpenConsultation('Closing Consultation')}
        />
      </main>

      {/* Multi-column Luxury Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onEnquire={handleEnquireProduct}
      />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialTopic={consultationTopic}
      />

      {/* Persistent Floating Quick Contact Widget */}
      <QuickContactFloating
        onOpenConsultation={() => handleOpenConsultation('Floating Quick Contact')}
      />

    </div>
  );
}
