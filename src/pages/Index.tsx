
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SuccessHighlights from '@/components/SuccessHighlights';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import QuickGallery from '@/components/QuickGallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SuccessHighlights />
      <TestimonialsCarousel />
      <QuickGallery />
      <Footer />
    </div>
  );
};

export default Index;
