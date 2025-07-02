import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import ArticleHero from '@/components/ArticleHero';
import ArticleWall from '@/components/ArticleWall';

const Articles = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<Array<{ src: string; title: string; description: string }>>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // All article images with the new 10 photos added
  const articles = [
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.55_d03300c4.jpg",
      title: "Computer Education Excellence",
      description: "Divyakant Master featured in Gujarat Samachar",
      date: "Recent Coverage",
      publication: "Gujarat Samachar"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.55_d03300c4.jpg", 
      title: "Board Exam Success Story",
      description: "Students excel under Divyakant Master's guidance",
      date: "Educational Achievement",
      publication: "Local News"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.55_d03300c4.jpg",
      title: "Educational Innovation",
      description: "Divyakant Master's innovative teaching methods",
      date: "Innovation Coverage",
      publication: "Education Today"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_c5d15c63.jpg",
      title: "Student Success Story",
      description: "Outstanding results in computer education",
      date: "Achievement News",
      publication: "Academic Times"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_e16b0093.jpg",
      title: "Technology in Education",
      description: "Modern teaching approaches by Divyakant Master",
      date: "Tech Education",
      publication: "Digital Learning"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_57e4f57c.jpg",
      title: "Community Impact",
      description: "Divyakant Master's contribution to local education",
      date: "Community News",
      publication: "Local Herald"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_05502772.jpg",
      title: "Educational Leadership",
      description: "Leading by example in computer education",
      date: "Leadership Feature",
      publication: "Education Leader"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_05502772.jpg",
      title: "Academic Excellence",
      description: "Recognition for outstanding teaching methods",
      date: "Excellence Award",
      publication: "Academic Review"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_d7b09d2b.jpg",
      title: "Digital Education Pioneer",
      description: "Pioneering digital education in the region",
      date: "Pioneer Story",
      publication: "Tech Tribune"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_a6a88aee.jpg",
      title: "Student Mentorship",
      description: "Exceptional mentorship in computer sciences",
      date: "Mentorship Feature",
      publication: "Student Voice"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_b97db6f6.jpg",
      title: "Teaching Innovation",
      description: "Revolutionary teaching techniques showcase",
      date: "Innovation News",
      publication: "Teaching Today"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_9e1ccd81.jpg",
      title: "Educational Impact",
      description: "Transforming lives through computer education",
      date: "Impact Story",
      publication: "Change Makers"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_14450fc8.jpg",
      title: "Educational Impact",
      description: "Transforming lives through computer education",
      date: "Impact Story",
      publication: "Change Makers"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_79c14e18.jpg",
      title: "Educational Impact",
      description: "Transforming lives through computer education",
      date: "Impact Story",
      publication: "Change Makers"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_3e2a8dd7.jpg",
      title: "Educational Impact",
      description: "Transforming lives through computer education",
      date: "Impact Story",
      publication: "Change Makers"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_90e50514.jpg",
      title: "Educational Impact",
      description: "Transforming lives through computer education",
      date: "Impact Story",
      publication: "Change Makers"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_5c9104f5.jpg",
      title: "Educational Impact",
      description: "Transforming lives through computer education",
      date: "Impact Story",
      publication: "Change Makers"
    }
  ];

  const openLightbox = (index: number) => {
    setLightboxImages(articles);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#1e3a8a] relative overflow-hidden">
        {/* Newspaper Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ctext x='5' y='15' font-size='8' font-family='serif'%3ENews%3C/text%3E%3Ctext x='5' y='30' font-size='6'%3E━━━━━━━━━%3C/text%3E%3Ctext x='5' y='45' font-size='6'%3E━━━━━━━━━%3C/text%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}></div>
        </div>

        <ArticleHero />
        <ArticleWall articles={articles} onOpenLightbox={openLightbox} />
      </div>
      
      <Footer />
      
      <ImageLightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
};

export default Articles;
