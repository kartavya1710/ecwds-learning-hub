
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import QuickGallery from '@/components/QuickGallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <QuickGallery />
      <Footer />
    </div>
  );
};

export default Index;
