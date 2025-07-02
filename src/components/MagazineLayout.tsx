import { useState, useEffect } from 'react';
import { Clock, Eye, BookOpen, Award } from 'lucide-react';

interface Article {
  src: string;
  title: string;
  description: string;
  date: string;
  publication: string;
}

interface MagazineLayoutProps {
  articles: Article[];
  onOpenLightbox: (index: number) => void;
}

const MagazineLayout = ({ articles, onOpenLightbox }: MagazineLayoutProps) => {
  const [layoutArticles, setLayoutArticles] = useState<any[]>([]);

  useEffect(() => {
    // Create magazine-style layout with featured and regular articles
    const enhanced = articles.map((article, index) => ({
      ...article,
      isFeatured: index < 3, // First 3 are featured
      isLarge: index === 0, // First one is hero
      readTime: Math.floor(Math.random() * 5) + 2,
      views: Math.floor(Math.random() * 1000) + 100
    }));
    setLayoutArticles(enhanced);
  }, [articles]);

  const featuredArticles = layoutArticles.filter(article => article.isFeatured);
  const regularArticles = layoutArticles.filter(article => !article.isFeatured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Magazine Header */}
        <div className="bg-gradient-to-r from-[#2E86AB] to-[#1B4F72] text-white p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">EDUCATION TODAY</h2>
              <p className="text-blue-100">Excellence in Computer Education • Volume 27</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">2024</div>
              <div className="text-sm text-blue-200">Latest Issue</div>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Featured Section */}
          {featuredArticles.length > 0 && (
            <section className="mb-12">
              <div className="border-b-2 border-[#2E86AB] pb-4 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">Featured Press Coverage</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Hero Article */}
                {featuredArticles[0] && (
                  <div 
                    className="lg:col-span-2 cursor-pointer group"
                    onClick={() => onOpenLightbox(0)}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                      <img 
                        src={featuredArticles[0].src} 
                        alt={featuredArticles[0].title}
                        className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-[#2E86AB] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Press Feature
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Secondary Featured Articles */}
                <div className="space-y-6">
                  {featuredArticles.slice(1, 3).map((article, index) => (
                    <div 
                      key={index + 1}
                      className="cursor-pointer group"
                      onClick={() => onOpenLightbox(index + 1)}
                    >
                      <div className="relative overflow-hidden rounded-lg shadow-md">
                        <img 
                          src={article.src} 
                          alt={article.title}
                          className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-2 left-2">
                          <span className="bg-white/90 text-[#2E86AB] px-2 py-1 rounded text-xs font-semibold">
                            {article.publication}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Image Gallery Grid */}
          <section>
            <div className="border-b-2 border-gray-300 pb-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">Press Gallery</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {regularArticles.map((article, index) => (
                <div 
                  key={index + 3}
                  className="cursor-pointer group"
                  onClick={() => onOpenLightbox(index + 3)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md aspect-square">
                    <img 
                      src={article.src} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white/90 text-[#2E86AB] px-2 py-1 rounded text-xs font-semibold">
                        {article.publication}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Magazine Footer */}
          <div className="mt-16 pt-8 border-t-2 border-gray-300">
            <div className="text-center">
              <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-[#2E86AB] to-[#1B4F72] text-white px-8 py-4 rounded-xl">
                <div className="text-center">
                  <BookOpen className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Educational Excellence</div>
                  <div className="text-xs text-blue-200">Since 1997</div>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Award Winning</div>
                  <div className="text-xs text-blue-200">Teaching Methods</div>
                </div>
                <div className="text-center">
                  <Eye className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Media Coverage</div>
                  <div className="text-xs text-blue-200">Regular Features</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineLayout;