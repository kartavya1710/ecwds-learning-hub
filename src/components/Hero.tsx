
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Star, Users, Award, BookOpen } from 'lucide-react';
import AdmissionForm from '@/components/AdmissionForm';

const Hero = () => {
  const [isAdmissionFormOpen, setIsAdmissionFormOpen] = useState(false);
  const [showAICoursePopup, setShowAICoursePopup] = useState(false);

  useEffect(() => {
    // Show AI course popup after 3 seconds
    const timer = setTimeout(() => {
      setShowAICoursePopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      label: 'Students Taught',
      value: '15000+'
    },
    {
      icon: Award,
      label: 'Years Experience',
      value: '27+'
    },
    {
      icon: Star,
      label: 'Success Rate',
      value: '100%'
    },
    {
      icon: BookOpen,
      label: 'Courses',
      value: '10+'
    }
  ];

  const handleViewResults = () => {
    console.log('View Results button clicked');
    // Navigate to Gallery section on same page
    const gallerySection = document.getElementById('gallery-section');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to gallery page if section not found
      window.location.href = '/gallery';
    }
  };

  const handleEnrollNow = () => {
    console.log('Enroll Now button clicked');
    setIsAdmissionFormOpen(true);
  };

  return (
    <>
      <section className="hero-gradient text-white overflow-hidden relative w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in max-w-2xl">
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-white">
                  <span className="inline-block text-white">
                    <span className="whitespace-nowrap">Best Computer Classes</span> in Surat
                  </span>
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-100 mb-2 lg:mb-4">
                  Divyakant Sir - 27+ Years Experience
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed animate-[slideInLeft_1s_ease-out]">
                  Surat's #1 computer tuition classes for Std 10, 11 & 12. Gujarat Board certified teacher. 
                  15000+ students taught with 100% success rate. Author of Computer Darpan books.
                </p>
                <div className="bg-yellow-400 text-black p-3 sm:p-4 rounded-lg">
                  <p className="font-bold text-sm sm:text-base">🏆 7 Students Ranked in Gujarat Board | 27 in Surat Centre</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4 z-10 relative">
                <button 
                  onClick={handleEnrollNow} 
                  type="button" 
                  className="bg-white text-[#2E86AB] hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer rounded-3xl w-full sm:w-auto"
                >
                  Enroll Now - Call 9978826343
                </button>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button 
                    onClick={handleViewResults} 
                    type="button" 
                    className="border border-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-slate-200 hover:bg-slate-100 text-cyan-700 transition-all duration-300 hover:scale-105 cursor-pointer rounded-3xl flex-1"
                  >
                    View Results
                  </button>
                  <div className="bg-red-500 text-white px-3 sm:px-4 py-2 sm:py-3 font-bold text-sm animate-pulse flex items-center justify-center rounded-lg">
                    🔥 Limited Seats Left
                  </div>
                </div>
              </div>

              {/* SEO Keywords Section - Hidden on mobile, visible on larger screens */}
              <div className="hidden lg:block bg-white/10 p-4 lg:p-6 rounded-lg max-w-3xl">
                <p className="text-sm text-blue-100">
                  <strong>Keywords:</strong> Computer Classes Surat | Computer Tuition Gujarat | Programming Classes | 
                  Computer Coaching | IT Education | Board Exam Preparation | GSEB Computer Science
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-6 lg:pt-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center hover-scale animate-[fadeInUp_1s_ease-out]" 
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-blue-200" />
                    <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divyakant Sir Photo */}
            <div className="relative animate-scale-in order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 sm:rotate-2 hover:rotate-0 transition-transform duration-500 hover-scale cursor-pointer">
                <img 
                  src="/lovable-uploads/e1673b96-7401-48ab-9e9d-24ba2ef00c3e.png" 
                  alt="Divyakant Sir - Best Computer Teacher in Surat, Gujarat" 
                  className="w-full h-auto" 
                  onClick={() => {
                    // Open image in lightbox
                    const lightboxImages = [{
                      src: "/lovable-uploads/e1673b96-7401-48ab-9e9d-24ba2ef00c3e.png",
                      title: "Divyakant Sir - Expert Computer Teacher",
                      description: "27 years of experience in computer education"
                    }];
                    // Create and dispatch custom event for lightbox
                    const event = new CustomEvent('openLightbox', {
                      detail: {
                        images: lightboxImages,
                        index: 0
                      }
                    });
                    window.dispatchEvent(event);
                  }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-yellow-400 text-black px-2 sm:px-4 py-1 sm:py-2 rounded-full font-bold shadow-lg animate-bounce text-xs sm:text-sm">
                🏆 Author of Computer Darpan
              </div>
              
              {/* Floating testimonial */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-white text-gray-800 p-3 sm:p-4 rounded-lg shadow-xl max-w-xs">
                <p className="text-xs sm:text-sm font-medium">"Best computer teacher in Surat!"</p>
                <p className="text-xs text-gray-600 mt-1">- Parent Review</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <AdmissionForm isOpen={isAdmissionFormOpen} onClose={() => setIsAdmissionFormOpen(false)} />
      
      {/* AI Course Popup */}
      {showAICoursePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-3xl max-w-md w-full p-6 sm:p-8 text-center animate-scale-in relative">
            <button 
              onClick={() => setShowAICoursePopup(false)} 
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
            >
              ×
            </button>
            
            <div className="mb-6">
              <div className="text-5xl sm:text-6xl mb-4 animate-bounce">🤖</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">🚀 NEW LAUNCH!</h3>
              <h4 className="text-lg sm:text-xl font-semibold mb-4">AI Course in Offline Mode</h4>
            </div>

            <div className="bg-yellow-400 text-black p-4 rounded-2xl mb-6">
              <p className="font-bold text-sm">
                🏆 FIRST TIME EVER IN GUJARAT!
              </p>
              <p className="text-sm mt-2">
                Learn Artificial Intelligence & Machine Learning with Divyakant Sir
              </p>
            </div>

            <div className="space-y-3">
              <a 
                href="tel:+919978826343" 
                className="w-full bg-green-500 hover:bg-green-600 text-white inline-flex items-center justify-center px-6 py-4 text-lg font-semibold rounded-xl transition-colors" 
                onClick={() => setShowAICoursePopup(false)}
              >
                📞 Call for Queries: 9978826343
              </a>
              
              <button 
                onClick={() => setShowAICoursePopup(false)} 
                className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-xl transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
