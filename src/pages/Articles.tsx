
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
      src: "/lovable-uploads/79029d94-09b7-499a-81b3-3cb64e280e7a.png",
      title: "Computer Education Excellence",
      description: "Divyakant Master featured in Gujarat Samachar",
      date: "Recent Coverage",
      publication: "Gujarat Samachar"
    },
    {
      src: "/lovable-uploads/7b73d4b0-926c-4bf9-83b0-b17b7ce1dd8f.png", 
      title: "Board Exam Success Story",
      description: "Students excel under Divyakant Master's guidance",
      date: "Educational Achievement",
      publication: "Local News"
    },
    {
      src: "/lovable-uploads/0a1febda-9ffe-4cd1-a32f-943c9f081e1b.png",
      title: "Educational Innovation",
      description: "Divyakant Master's innovative teaching methods",
      date: "Innovation Coverage",
      publication: "Education Today"
    },
    {
      src: "/lovable-uploads/199b222b-a06e-469d-8c5b-e67aee05ee31.png",
      title: "Student Success Story",
      description: "Outstanding results in computer education",
      date: "Achievement News",
      publication: "Academic Times"
    },
    {
      src: "/lovable-uploads/2b8c3839-0071-4e7a-9edd-8a731b4b71e0.png",
      title: "Technology in Education",
      description: "Modern teaching approaches by Divyakant Master",
      date: "Tech Education",
      publication: "Digital Learning"
    },
    {
      src: "/lovable-uploads/46262088-b4ee-4171-a28d-9a660f44be7d.png",
      title: "Community Impact",
      description: "Divyakant Master's contribution to local education",
      date: "Community News",
      publication: "Local Herald"
    },
    {
      src: "/lovable-uploads/4918c16d-437b-48cb-b248-5eb71b4c1028.png",
      title: "Educational Leadership",
      description: "Leading by example in computer education",
      date: "Leadership Feature",
      publication: "Education Leader"
    },
    {
      src: "/lovable-uploads/521f5656-c4ac-4cf5-b353-033c0a71235e.png",
      title: "Academic Excellence",
      description: "Recognition for outstanding teaching methods",
      date: "Excellence Award",
      publication: "Academic Review"
    },
    {
      src: "/lovable-uploads/7d3108d6-20bc-41e4-a2bd-dc12ee814e7b.png",
      title: "Digital Education Pioneer",
      description: "Pioneering digital education in the region",
      date: "Pioneer Story",
      publication: "Tech Tribune"
    },
    {
      src: "/lovable-uploads/9c91fbc5-14dc-4030-ba4a-6ff95eb5e2d2.png",
      title: "Student Mentorship",
      description: "Exceptional mentorship in computer sciences",
      date: "Mentorship Feature",
      publication: "Student Voice"
    },
    {
      src: "/lovable-uploads/be2ea5d8-55a5-4008-a0de-899ce4a93891.png",
      title: "Teaching Innovation",
      description: "Revolutionary teaching techniques showcase",
      date: "Innovation News",
      publication: "Teaching Today"
    },
    {
      src: "/lovable-uploads/c28807ee-879b-4269-b44a-81473193e53e.png",
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
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
        {/* Newspaper Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ctext x='5' y='15' font-size='8' font-family='serif'%3ENews%3C/text%3E%3Ctext x='5' y='30' font-size='6'%3E━━━━━━━━━%3C/text%3E%3Ctext x='5' y='45' font-size='6'%3E━━━━━━━━━%3C/text%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}></div>
        </div>

        {/* Floating Newspaper Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-8 h-8 bg-red-400/20 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-10 h-10 bg-yellow-400/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-green-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
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
