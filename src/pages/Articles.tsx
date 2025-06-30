
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import { Newspaper, Calendar, Eye, Sparkles } from 'lucide-react';

const Articles = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<Array<{ src: string; title: string; description: string }>>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const articles = [
    {
      src: "/lovable-uploads/79029d94-09b7-499a-81b3-3cb64e280e7a.png",
      title: "Computer Education Excellence - Divyakant Master Featured",
      description: "Newspaper coverage highlighting Divyakant Master's contribution to computer education in Gujarat",
      date: "Recent Coverage",
      publication: "Gujarat Samachar"
    },
    {
      src: "/lovable-uploads/7b73d4b0-926c-4bf9-83b0-b17b7ce1dd8f.png", 
      title: "Board Exam Success Story - Divyakant Master's Students Excel",
      description: "Article showcasing the remarkable performance of students under Divyakant Master's guidance",
      date: "Educational Achievement",
      publication: "Local News"
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="relative py-20 bg-gradient-to-r from-[#2E86AB] to-[#1B4F72] overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400/10 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-400/10 rounded-full animate-ping"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <Newspaper className="h-16 w-16 text-yellow-400 mr-4 animate-bounce" />
              <Sparkles className="h-12 w-12 text-yellow-300 animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Press <span className="text-yellow-400 animate-pulse">Articles</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-up">
              Discover media coverage and press articles featuring{' '}
              <span className="font-bold text-yellow-400 relative">
                Divyakant Master
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-red-500 animate-pulse"></span>
              </span>
              {' '}and ECWDS achievements
            </p>

            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center animate-bounce">
                <Eye className="h-6 w-6 mr-2 text-yellow-400" />
                <span>Featured Coverage</span>
              </div>
              <div className="flex items-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                <Calendar className="h-6 w-6 mr-2 text-yellow-400" />
                <span>Latest Updates</span>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Media Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Press coverage highlighting the excellence and achievements of Divyakant Master in computer education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {articles.map((article, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    FEATURED
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 z-10">
                  <Newspaper className="h-8 w-8 text-[#2E86AB] group-hover:animate-spin transition-all duration-300" />
                </div>

                {/* Red Highlight Effect Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-8 bg-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                </div>

                {/* Image Container */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={article.src}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                  {/* Red Pen Highlight Animation */}
                  <div className="absolute bottom-20 left-6 right-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-red-500/30 rounded-lg transform skew-x-12 group-hover:animate-pulse"></div>
                      <p className="relative text-white font-bold text-lg z-10 p-2">
                        "Divyakant Master" - Highlighted in Press
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#2E86AB]/10 text-[#2E86AB] px-3 py-1 rounded-full text-sm font-semibold">
                      {article.publication}
                    </span>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2E86AB] transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {article.description}
                  </p>

                  <div className="flex items-center text-[#2E86AB] font-semibold group-hover:gap-2 transition-all duration-300">
                    <span>Read Full Article</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-red-400/50 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-white rounded-2xl shadow-xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                More Press Coverage Coming Soon
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Stay tuned for more media recognition and articles featuring Divyakant Master's educational excellence
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-[#2E86AB] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
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
