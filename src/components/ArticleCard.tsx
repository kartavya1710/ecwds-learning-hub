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
    >
      {/* Push Pin */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className={`w-6 h-6 bg-${article.pinColor}-500 rounded-full shadow-lg flex items-center justify-center`}>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
        <div className={`w-1 h-4 bg-${article.pinColor}-400 mx-auto`}></div>
      </div>

      {/* Article Card */}
      <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden border border-white/20">
        {/* Image Container */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={article.src}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          
          {/* Highlight */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm bg-black/40 backdrop-blur-sm px-2 py-1 rounded shadow-lg border border-white/20">
              "Divyakant Master"
            </div>
          </div>

          {/* Edge Effect */}
          <div className="absolute inset-0 border border-white/20"></div>
        </div>

        {/* Article Info */}
        <div className="p-4 bg-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="bg-yellow-400/20 text-white px-2 py-1 rounded-full text-xs font-semibold">
              {article.publication}
            </span>
            <span className="text-gray-300 text-xs">{article.date}</span>
          </div>
          
          <h3 className="text-lg font-bold text-white mb-2">
            {article.title}
          </h3>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            {article.description}
          </p>

          {/* Featured Badge */}
          <div className="mt-3 flex items-center text-yellow-400 font-semibold text-sm">
            <div className="w-4 h-4 border-2 border-yellow-400 rounded-full mr-2"></div>
            Featured Coverage
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
