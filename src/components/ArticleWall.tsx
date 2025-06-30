
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
  }, [articles]);

  return (
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
            <ArticleCard
              key={index}
              article={article}
              index={index}
              onOpenLightbox={onOpenLightbox}
            />
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
  );
};

export default ArticleWall;
