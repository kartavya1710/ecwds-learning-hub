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
  const stats = [{
    icon: Users,
    label: 'Students Taught',
    value: '15000+'
  }, {
    icon: Award,
    label: 'Years Experience',
    value: '27+'
  }, {
    icon: Star,
    label: 'Success Rate',
    value: '100%'
  }, {
    icon: BookOpen,
    label: 'Courses',
    value: '10+'
  }];
  const handleViewResults = () => {
    // Navigate to Gallery section on same page
    const gallerySection = document.getElementById('gallery-section');
    if (gallerySection) {
      gallerySection.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      // Fallback to gallery page if section not found
      window.location.href = '/gallery';
    }
  };
  const handleEnrollNow = () => {
    setIsAdmissionFormOpen(true);
  };
  return <>
      <section className="hero-gradient text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight relative">
                  <span className="inline-block animate-[fadeInUp_1s_ease-out] text-white drop-shadow-lg">Excellence in</span>
                  <br />
                  <span className="text-gradient-enhanced drop-shadow-lg animate-[bounceIn_1.5s_ease-out] inline-block transform hover:scale-105 transition-transform duration-300">
                    Computer Education
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 animate-pulse"></div>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed animate-[slideInLeft_1s_ease-out]">
                  Join Surat's most trusted computer tuition classes with Divyakant Sir. 
                  27 years of experience, proven results, and personalized attention for every student.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-[#2E86AB] hover:bg-blue-50 px-8 py-4 text-lg font-semibold hover-scale animate-[slideInUp_1.2s_ease-out]" onClick={handleEnrollNow}>
                  Enroll Now
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={handleViewResults} className="border-white px-8 py-4 text-lg font-semibold animate-[slideInUp_1.4s_ease-out] bg-slate-200 hover:bg-slate-100 text-cyan-700">
                    View Results
                  </Button>
                  <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm animate-pulse flex items-center">
                    🔥 Limited Seats Left
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => <div key={index} className="text-center hover-scale animate-[fadeInUp_1s_ease-out]" style={{
                animationDelay: `${index * 0.2}s`
              }}>
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>)}
              </div>
            </div>

            {/* Divyakant Sir Photo */}
            <div className="relative animate-scale-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 hover-scale cursor-pointer">
                <img src="/lovable-uploads/e1673b96-7401-48ab-9e9d-24ba2ef00c3e.png" alt="Divyakant Sir - Expert Computer Teacher" className="w-full h-auto" onClick={() => {
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
              }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
                🏆 Author of Computer Darpan
              </div>
              
              {/* Floating testimonial */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-4 rounded-lg shadow-xl max-w-xs">
                <p className="text-sm font-medium">"Best computer teacher in Surat!"</p>
                <p className="text-xs text-gray-600 mt-1">- Parent Review</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <AdmissionForm isOpen={isAdmissionFormOpen} onClose={() => setIsAdmissionFormOpen(false)} />
      
      {/* AI Course Popup */}
      {showAICoursePopup && <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-3xl max-w-md w-full p-8 text-center animate-scale-in relative">
            <button onClick={() => setShowAICoursePopup(false)} className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl">
              ×
            </button>
            
            <div className="mb-6">
              <div className="text-6xl mb-4 animate-bounce">🤖</div>
              <h3 className="text-2xl font-bold mb-2">🚀 NEW LAUNCH!</h3>
              <h4 className="text-xl font-semibold mb-4">AI Course in Offline Mode</h4>
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
              <a href="tel:+919825472797" className="w-full bg-green-500 hover:bg-green-600 text-white inline-flex items-center justify-center px-6 py-4 text-lg font-semibold rounded-xl transition-colors" onClick={() => setShowAICoursePopup(false)}>
                📞 Call for Queries: 9825472797
              </a>
              
              <button onClick={() => setShowAICoursePopup(false)} className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-xl transition-colors">
                Maybe Later
              </button>
            </div>
          </div>
        </div>}
    </>;
};
export default Hero;