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
                <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">Featured Stories</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Hero Article */}
                {featuredArticles[0] && (
                  <div 
                    className="lg:col-span-2 cursor-pointer group"
                    onClick={() => onOpenLightbox(0)}
                  >
                    <div className="relative overflow-hidden rounded-xl">
                      <img 
                        src={featuredArticles[0].src} 
                        alt={featuredArticles[0].title}
                        className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <div className="flex items-center mb-4">
                          <span className="bg-[#2E86AB] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                            {featuredArticles[0].publication}
                          </span>
                          <div className="ml-4 flex items-center text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {featuredArticles[0].readTime} min read
                          </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                          {featuredArticles[0].title}
                        </h2>
                        <p className="text-lg text-gray-200 leading-relaxed">
                          {featuredArticles[0].description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Secondary Featured Articles */}
                <div className="space-y-6">
                  {featuredArticles.slice(1, 3).map((article, index) => (
                    <div 
                      key={index + 1}
                      className="flex gap-4 cursor-pointer group"
                      onClick={() => onOpenLightbox(index + 1)}
                    >
                      <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                        <img 
                          src={article.src} 
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="text-xs font-semibold text-[#2E86AB] uppercase tracking-wide">
                            {article.publication}
                          </span>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-xs text-gray-500">{article.date}</span>
                        </div>
                        <h3 className="font-bold text-gray-800 text-sm mb-2 leading-tight line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-xs text-gray-600 line-clamp-2">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Regular Articles Grid */}
          <section>
            <div className="border-b-2 border-gray-300 pb-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">More Stories</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <article 
                  key={index + 3}
                  className="cursor-pointer group"
                  onClick={() => onOpenLightbox(index + 3)}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={article.src} 
                      alt={article.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-[#2E86AB] px-2 py-1 rounded text-xs font-semibold">
                        {article.publication}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-xs text-gray-500 space-x-4">
                      <span>{article.date}</span>
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {article.views}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}m
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-gray-800 text-lg leading-tight line-clamp-2 group-hover:text-[#2E86AB] transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                    
                    <div className="pt-2 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-[#2E86AB] font-semibold text-sm">
                          <BookOpen className="w-4 h-4 mr-1" />
                          Read Article
                        </div>
                        <Award className="w-5 h-5 text-yellow-500" />
                      </div>
                    </div>
                  </div>
                </article>
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