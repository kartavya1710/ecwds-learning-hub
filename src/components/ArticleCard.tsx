import { Newspaper } from 'lucide-react';

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
  const pinColors = {
    red: 'bg-red-500',
    blue: 'bg-blue-500', 
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500'
  };

  return (
    <div
      className="relative group cursor-pointer card-hover"
      onClick={() => onOpenLightbox(index)}
    >
      {/* Professional Push Pin */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
        <div className={`w-6 h-6 ${pinColors[article.pinColor as keyof typeof pinColors]} rounded-full shadow-lg flex items-center justify-center border-2 border-white`}>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
        <div className="w-0.5 h-3 bg-gray-400 mx-auto"></div>
      </div>

      {/* Professional Article Card */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-64 md:h-72 overflow-hidden">
          <img
            src={article.src}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Professional Highlight */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-4 left-4 bg-[#2E86AB] text-white font-semibold text-xs px-3 py-1 rounded-full shadow-lg">
              Featured
            </div>
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white font-medium text-sm px-3 py-2 rounded-lg">
              "Divyakant Master"
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Article Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="bg-gradient-to-r from-[#2E86AB] to-[#1B4F72] text-white px-3 py-1 rounded-full text-xs font-semibold">
              {article.publication}
            </span>
            <span className="text-gray-500 text-xs font-medium">{article.date}</span>
          </div>
          
          <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
            {article.title}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {article.description}
          </p>

          {/* Press Badge */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-[#2E86AB] font-semibold text-sm">
              <Newspaper className="w-4 h-4 mr-2" />
              Press Coverage
            </div>
            <div className="text-xs text-gray-400 font-medium">Click to read</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
