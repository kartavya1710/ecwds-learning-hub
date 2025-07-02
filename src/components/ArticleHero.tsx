import { Newspaper } from 'lucide-react';

const ArticleHero = () => {
  return (
    <div className="relative py-24 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Magazine Header Style */}
        <div className="mb-8">
          <div className="border-t-4 border-b-4 border-[#2E86AB] py-6 mb-8">
            <div className="text-sm font-bold text-blue-100 mb-2 tracking-[0.3em] uppercase">Educational Excellence</div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none">
              THE PRESS
            </h1>
            <div className="text-lg font-semibold text-blue-100 mt-2 tracking-wide">Magazine</div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed text-blue-100 mb-8">
            Featuring exclusive coverage of{' '}
            <span className="font-bold text-gradient-enhanced text-2xl md:text-3xl">
              Divyakant Master
            </span>
            {' '}in leading publications
          </p>

          {/* Magazine Style Info Bar */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-white">27+</div>
                <div className="text-sm text-blue-200 uppercase tracking-wide">Years Featured</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-blue-200 uppercase tracking-wide">Articles</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-sm text-blue-200 uppercase tracking-wide">Publications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHero;
