
import { Newspaper, Pin, Sparkles } from 'lucide-react';

const ArticleHero = () => {
  return (
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
  );
};

export default ArticleHero;
