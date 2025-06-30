
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import { Newspaper, Pin, Sparkles } from 'lucide-react';

const Articles = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<Array<{ src: string; title: string; description: string }>>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [randomizedArticles, setRandomizedArticles] = useState<any[]>([]);

  // All article images - you can add more here
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
    }
    // Add more articles here as you upload them
  ];

  // Randomize article positions and rotations on component mount
  useEffect(() => {
    const randomized = articles.map((article, index) => ({
      ...article,
      rotation: Math.random() * 10 - 5, // Random rotation between -5 and 5 degrees
      scale: 0.9 + Math.random() * 0.2, // Random scale between 0.9 and 1.1
      delay: Math.random() * 2, // Random animation delay
      pinColor: ['red', 'blue', 'green', 'yellow', 'purple'][Math.floor(Math.random() * 5)]
    }));
    setRandomizedArticles(randomized);
  }, []);

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

        {/* Hero Section */}
        <div className="relative py-16 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-6">
              <Newspaper className="h-16 w-16 text-red-600 mr-4 animate-bounce" />
              <Pin className="h-12 w-12 text-blue-600 animate-pulse" />
              <Sparkles className="h-10 w-10 text-yellow-600 animate-spin" />
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gradient-enhanced">
              Press Wall
            </h1>
            
            <p className="text-2xl md:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-800">
              Interactive Newspaper Wall featuring{' '}
              <span className="font-bold text-red-600 relative">
                Divyakant Master
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-red-500/30 rounded-full animate-pulse"></span>
              </span>
            </p>

            <div className="text-lg text-gray-600 mb-12">
              📰 Click and explore • 🖊️ Red highlights • 📌 Pinned articles
            </div>
          </div>
        </div>

        {/* Interactive Newspaper Wall */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Cork Board Background */}
          <div className="relative min-h-screen rounded-3xl p-8" style={{
            background: 'linear-gradient(45deg, #D2B48C 0%, #DEB887 50%, #F5DEB3 100%)',
            boxShadow: 'inset 0 0 100px rgba(0,0,0,0.1), 0 20px 40px rgba(0,0,0,0.1)'
          }}>
            {/* Cork Board Texture Overlay */}
            <div className="absolute inset-0 rounded-3xl opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='80' cy='40' r='1.5'/%3E%3Ccircle cx='40' cy='80' r='1'/%3E%3Ccircle cx='90' cy='90' r='2'/%3E%3Ccircle cx='10' cy='60' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            {/* Articles Grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {randomizedArticles.map((article, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => openLightbox(index)}
                  style={{
                    transform: `rotate(${article.rotation}deg) scale(${article.scale})`,
                    transformOrigin: 'center',
                    animation: `fadeInUp 0.8s ease-out ${article.delay}s both`
                  }}
                >
                  {/* Push Pin */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`w-6 h-6 bg-${article.pinColor}-500 rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className={`w-1 h-4 bg-${article.pinColor}-400 mx-auto`}></div>
                  </div>

                  {/* Article Card */}
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-0">
                    {/* Tape Effect */}
                    <div className="absolute top-4 left-4 w-16 h-8 bg-yellow-200/80 transform -rotate-12 z-10 shadow-md">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    </div>
                    <div className="absolute top-4 right-4 w-12 h-6 bg-yellow-200/80 transform rotate-12 z-10 shadow-md">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    </div>

                    {/* Image Container */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img
                        src={article.src}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Red Highlight Overlay */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-6 bg-red-500/40 rounded-lg transform -rotate-2 group-hover:animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-700 font-bold text-sm bg-white/80 px-2 py-1 rounded shadow-lg">
                          "Divyakant Master"
                        </div>
                      </div>

                      {/* Vintage Paper Edge Effect */}
                      <div className="absolute inset-0 border-4 border-yellow-100/50 group-hover:border-red-200/50 transition-colors duration-300"></div>
                    </div>

                    {/* Article Info */}
                    <div className="p-4 bg-gradient-to-b from-white to-gray-50">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`bg-${article.pinColor}-100 text-${article.pinColor}-800 px-2 py-1 rounded-full text-xs font-semibold`}>
                          {article.publication}
                        </span>
                        <span className="text-gray-500 text-xs">{article.date}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {article.description}
                      </p>

                      {/* Red Pen Scribble */}
                      <div className="mt-3 flex items-center text-red-600 font-semibold text-sm">
                        <div className="w-4 h-4 border-2 border-red-500 rounded-full mr-2 group-hover:animate-spin"></div>
                        Featured Coverage
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/10 to-red-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Shadow Effect */}
                  <div className="absolute inset-0 bg-black/20 rounded-lg transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
                </div>
              ))}
            </div>

            {/* Add More Articles Button */}
            <div className="text-center mt-16">
              <div className="inline-block bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
                <Newspaper className="h-12 w-12 text-red-600 mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">More Articles Coming Soon!</h3>
                <p className="text-gray-600 mb-4">Stay tuned for more press coverage</p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
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
