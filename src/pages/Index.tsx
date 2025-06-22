
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SuccessHighlights from '@/components/SuccessHighlights';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Courses from '@/components/Courses';
import QuickGallery from '@/components/QuickGallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <SuccessHighlights />
      <TestimonialsCarousel />
      <Courses />
      <QuickGallery />
      <Footer />
    </div>
  );
};

export default Index;
