
import { Pin } from 'lucide-react';

interface ArticleCardProps {
  article: {
    src: string;
    title: string;
    description: string;
    date: string;
    publication: string;
    rotation: number;
    scale: number;
    delay: number;
    pinColor: string;
  };
  index: number;
  onOpenLightbox: (index: number) => void;
}

const ArticleCard = ({ article, index, onOpenLightbox }: ArticleCardProps) => {
  return (
    <div
      className="relative group cursor-pointer"
      onClick={() => onOpenLightbox(index)}
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
  );
};

export default ArticleCard;
