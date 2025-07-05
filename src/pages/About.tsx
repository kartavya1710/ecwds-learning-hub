
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import { Award, BookOpen, Users, Target, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    "Comprehensive coverage of Gujarat Board syllabus",
    "Step-by-step explanations with practical examples",
    "English and Gujarati medium editions available",
    "Practice exercises and sample question papers",
    "Real-world programming projects and applications",
    "Used by thousands of students across Gujarat"
  ];

  const bookSeries = [
    {
      title: "Standard 10",
      description: "Foundation concepts and basic programming principles",
      icon: BookOpen
    },
    {
      title: "Standard 11", 
      description: "Advanced programming and application development",
      icon: BookOpen
    },
    {
      title: "Standard 12",
      description: "Professional applications and project development",
      icon: BookOpen
    },
    {
      title: "Gujarat Board Approved",
      description: "Officially recognized by Gujarat Education Board",
      icon: Award
    }
  ];

  const bookImages = [
    {
      src: '/lovable-uploads/Author/0.jpg',
      title: 'Computer Darpan Series',
      description: 'Comprehensive textbook collection'
    },
    {
      src: '/lovable-uploads/Author/1.jpg',
      title: 'Standard 10 Edition',
      description: 'Foundation computer science concepts'
    },
    {
      src: '/lovable-uploads/Author/3.jpg',
      title: 'Standard 11 Edition',
      description: 'Advanced programming concepts'
    },
    {
      src: '/lovable-uploads/Author/4.jpg',
      title: 'Standard 12 Edition',
      description: 'Professional computer applications'
    },
    {
      src: '/lovable-uploads/Author/5.jpg',
      title: 'Complete Book Series',
      description: 'All editions together'
    }
  ];

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Author</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Meet the author of "Computer Darpan" series - transforming computer education since 1998
          </p>
        </div>
      </section>

      {/* About the Author */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Meet the Author
              </h2>
              <div className="text-lg text-gray-600 space-y-4">
                <p>
                  <strong>Divyakant Sir</strong> is the distinguished author of the "Computer Darpan" 
                  series, a comprehensive collection of computer science textbooks designed 
                  specifically for students of Standards 10, 11, and 12.
                </p>
                <p>
                  With over 27 years of dedicated experience in computer education, 
                  his deep understanding of student learning needs and curriculum requirements 
                  has culminated in these essential educational resources that have guided 
                  thousands of students across Gujarat.
                </p>
                <p>
                  The "Computer Darpan" series reflects his commitment to making computer 
                  science accessible, practical, and engaging for young minds, bridging 
                  the gap between theoretical concepts and real-world applications.
                </p>
              </div>
            </div>
            
            {/* Book Gallery Grid */}
            <div className="grid grid-cols-2 gap-4">
              {bookImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative rounded-xl overflow-hidden shadow-lg card-hover cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold text-sm">{image.title}</h4>
                    <p className="text-xs opacity-80">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book Series Details */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Computer Darpan Book Series
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive computer education textbooks for Standards 10, 11 & 12
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookSeries.map((book, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center card-hover">
                <div className="bg-[#2E86AB] bg-opacity-10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <book.icon className="h-8 w-8 text-[#2E86AB]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {book.title}
                </h3>
                <p className="text-gray-600">
                  {book.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author's Vision */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Book Series Features
              </h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 animate-fade-in">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-lg text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#2E86AB] bg-opacity-5 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Author's Vision</h3>
              <p className="text-lg text-gray-700 mb-6">
                To create comprehensive, student-friendly textbooks that bridge 
                the gap between theoretical computer science concepts and practical 
                applications, making learning both effective and enjoyable.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Impact</h3>
              <p className="text-lg text-gray-700">
                The Computer Darpan series has become the preferred choice for 
                computer science education across Gujarat, helping thousands of 
                students excel in their board examinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <ImageLightbox
        images={bookImages}
        initialIndex={selectedImageIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
      />
    </div>
  );
};

export default About;
