import { Newspaper } from 'lucide-react';

const ArticleHero = () => {
  return (
    <div className="relative py-16 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6">
          <Newspaper className="h-16 w-16 text-yellow-400 mr-4" />
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
          Press Wall
        </h1>
        
        <p className="text-2xl md:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200">
          Interactive Newspaper Wall featuring{' '}
          <span className="font-bold text-yellow-400">
            Divyakant Master
          </span>
        </p>

        <div className="text-lg text-gray-300 mb-12">
          📰 Click and explore • 🖊️ Red highlights • 📌 Pinned articles
        </div>
      </div>
    </div>
  );
};

export default ArticleHero;
