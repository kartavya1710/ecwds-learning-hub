import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import ArticleHero from '@/components/ArticleHero';
import MagazineLayout from '@/components/MagazineLayout';

const Articles = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<Array<{ src: string; title: string; description: string }>>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // All article images with the new 10 photos added
  const articles = [
    {
      src: "/lovable-uploads/WhatsApp Image 2025-07-05 at 16.19.41_adc9c618.jpg",
      title: "Revolutionary Computer Education: How Divyakant Master is Transforming Lives",
      description: "An in-depth look at the innovative teaching methods that have made Divyakant Master a household name in computer education across Gujarat.",
      date: "December 2024",
      publication: "Gujarat Samachar"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.55_d03300c4.jpg", 
      title: "Board Exam Success: The Divyakant Master Methodology",
      description: "Exclusive interview revealing the secrets behind the 100% success rate that has made thousands of students excel in their computer science exams.",
      date: "November 2024",
      publication: "Education Today"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_b97db6f6.jpg",
      title: "From Classroom to Digital: 27 Years of Educational Innovation",
      description: "The remarkable journey of Gujarat's most celebrated computer teacher and his adaptation to modern educational challenges.",
      date: "October 2024",
      publication: "Tech Tribune"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_c5d15c63.jpg",
      title: "Student Mentorship Excellence: Creating Future Leaders",
      description: "How personalized guidance and mentorship have shaped the careers of over 15,000 students.",
      date: "September 2024",
      publication: "Academic Review"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_e16b0093.jpg",
      title: "Technology in Education: A Pioneer's Perspective",
      description: "Exploring how modern technology integration has revolutionized traditional teaching methods.",
      date: "August 2024",
      publication: "Digital Learning"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_57e4f57c.jpg",
      title: "Community Impact: Beyond the Classroom",
      description: "The broader social impact of quality education and how one teacher changed an entire community.",
      date: "July 2024",
      publication: "Local Herald"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_05502772.jpg",
      title: "Academic Excellence Recognition",
      description: "State recognition for outstanding contribution to computer science education.",
      date: "May 2024",
      publication: "State Education Board"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_d7b09d2b.jpg",
      title: "Digital Education Pioneer: Shaping Tomorrow",
      description: "Pioneering digital education initiatives that set new standards across Gujarat.",
      date: "April 2024",
      publication: "Innovation Weekly"
    },  
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_b97db6f6.jpg",
      title: "Innovation in Action: Real Results",
      description: "Case studies showcasing innovative teaching techniques and their measurable impact.",
      date: "February 2024",
      publication: "Research Quarterly"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_9e1ccd81.jpg",
      title: "Transforming Lives Through Education",
      description: "Personal stories from students whose lives were changed through quality computer education.",
      date: "January 2024",
      publication: "Change Makers"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_14450fc8.jpg",
      title: "Excellence in STEM Education",
      description: "Advancing STEM education through innovative computer science curricula and methods.",
      date: "December 2023",
      publication: "STEM Today"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_79c14e18.jpg",
      title: "Building Tomorrow's Workforce",
      description: "Preparing students for the digital economy through comprehensive computer education.",
      date: "November 2023",
      publication: "Future Skills"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_3e2a8dd7.jpg",
      title: "Educational Innovation Awards",
      description: "Recognition for outstanding contribution to educational methodology and student success.",
      date: "October 2023",
      publication: "Awards Today"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_90e50514.jpg",
      title: "Success Stories: Real Impact",
      description: "Documenting the success stories of students who achieved excellence through dedicated guidance.",
      date: "September 2023",
      publication: "Success Stories"
    },
    {
      src: "/lovable-uploads/WhatsApp Image 2025-06-30 at 21.10.56_5c9104f5.jpg",
      title: "The Future of Computer Education",
      description: "Vision and strategies for the next generation of computer science education in India.",
      date: "August 2023",
      publication: "Future Ed"
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
      <div className="min-h-screen hero-gradient relative overflow-hidden">
        {/* Professional Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232E86AB' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}></div>
        </div>

        <ArticleHero />
        <MagazineLayout articles={articles} onOpenLightbox={openLightbox} />
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
