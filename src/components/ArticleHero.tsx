import { Newspaper } from 'lucide-react';

const ArticleHero = () => {
  return (
    <div className="relative py-20 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8 animate-bounce-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 border border-white/20">
            <Newspaper className="h-16 w-16 text-[#2E86AB]" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white animate-fade-in-up">
          Press Coverage
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-blue-100 animate-slide-in-up">
          Media Highlights & News Features of{' '}
          <span className="font-bold text-gradient-enhanced">
            Divyakant Master
          </span>
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block border border-white/20 animate-fade-in">
          <div className="text-lg text-blue-100 flex items-center justify-center space-x-6">
            <span className="flex items-center">📰 Click to Read</span>
            <span className="flex items-center">🔍 Zoom & Explore</span>
            <span className="flex items-center">📌 Featured Articles</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHero;
