import { useState, useEffect } from 'react';
import { Newspaper } from 'lucide-react';
import ArticleCard from './ArticleCard';

interface Article {
  src: string;
  title: string;
  description: string;
  date: string;
  publication: string;
}

interface ArticleWallProps {
  articles: Article[];
  onOpenLightbox: (index: number) => void;
}

const ArticleWall = ({ articles, onOpenLightbox }: ArticleWallProps) => {
  const [randomizedArticles, setRandomizedArticles] = useState<any[]>([]);

  // Randomize article positions on component mount
  useEffect(() => {
    const randomized = articles.map((article, index) => ({
      ...article,
      pinColor: ['red', 'blue', 'green', 'orange', 'purple'][Math.floor(Math.random() * 5)],
      delay: index * 0.1
    }));
    setRandomizedArticles(randomized);
  }, [articles]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      {/* Professional Background */}
      <div className="relative min-h-screen rounded-3xl p-8 bg-gradient-to-br from-white to-gray-50 shadow-2xl border border-gray-200">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 rounded-3xl opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232E86AB' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E86AB] mb-4">Featured in Media</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2E86AB] to-[#1B4F72] mx-auto rounded-full"></div>
        </div>

        {/* Articles Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {randomizedArticles.map((article, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${article.delay}s` }}
            >
              <ArticleCard
                article={article}
                index={index}
                onOpenLightbox={onOpenLightbox}
              />
            </div>
          ))}
        </div>

        {/* More Articles Section */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-[#2E86AB] to-[#1B4F72] rounded-xl p-8 text-white shadow-lg hover-scale">
            <Newspaper className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Regular Media Coverage</h3>
            <p className="text-blue-100">Featured in leading newspapers and educational publications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleWall;
