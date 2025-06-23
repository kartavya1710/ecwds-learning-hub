
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ImageLightbox from '@/components/ImageLightbox';
import { GALLERY_CATEGORIES, getImagesFromFolder, getFallbackImages } from '@/utils/galleryUtils';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<Array<{ src: string; title: string; description: string }>>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [galleryData, setGalleryData] = useState<{[key: string]: Array<{src: string; title: string; description: string}>}>({});
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const location = useLocation();

  useEffect(() => {
    // Load images for each category
    const loadGalleryData = async () => {
      const data: {[key: string]: Array<{src: string; title: string; description: string}>} = {};
      
      for (const [key, category] of Object.entries(GALLERY_CATEGORIES)) {
        const folderImages = await getImagesFromFolder(category.folder);
        const fallbackImages = getFallbackImages(key);
        data[key] = folderImages.length > 0 ? folderImages : fallbackImages;
      }
      
      setGalleryData(data);
    };
    
    loadGalleryData();
    
    // Check if URL has hash for specific category
    if (location.hash) {
      const category = location.hash.replace('#', '');
      if (Object.keys(GALLERY_CATEGORIES).includes(category)) {
        setActiveCategory(category);
      }
    }
  }, [location]);

  const getAllImages = () => {
    return Object.values(galleryData).flat();
  };

  const getDisplayImages = () => {
    if (activeCategory === 'all') {
      return getAllImages();
    }
    return galleryData[activeCategory] || [];
  };

  const openLightbox = (index: number) => {
    const displayImages = getDisplayImages();
    setLightboxImages(displayImages);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const getCategoryStats = (category: string) => {
    return galleryData[category]?.length || 0;
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-16" id="gallery-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Success Gallery</h1>
            <p className="text-lg text-gray-600">Celebrating achievements and memorable moments at ECWDS</p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === 'all' 
                  ? 'bg-[#2E86AB] text-white' 
                  : 'bg-white text-[#2E86AB] border border-[#2E86AB] hover:bg-[#2E86AB] hover:text-white'
              }`}
            >
              All ({getAllImages().length})
            </button>
            {Object.entries(GALLERY_CATEGORIES).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === key 
                    ? 'bg-[#2E86AB] text-white' 
                    : 'bg-white text-[#2E86AB] border border-[#2E86AB] hover:bg-[#2E86AB] hover:text-white'
                }`}
              >
                {category.title} ({getCategoryStats(key)})
              </button>
            ))}
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getDisplayImages().map((image, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                    <p className="text-white/80 text-xs">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Stats */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Achievements</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#2E86AB]">7</div>
                <div className="text-lg font-semibold text-gray-900">Students Ranked in Gujarat Board</div>
                <div className="text-gray-600">Statewide recognition</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#2E86AB]">27</div>
                <div className="text-lg font-semibold text-gray-900">Students Ranked in Surat Centre</div>
                <div className="text-gray-600">Local excellence</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#2E86AB]">15000+</div>
                <div className="text-lg font-semibold text-gray-900">Students Taught</div>
                <div className="text-gray-600">Over 27 years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ImageLightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
};

export default Gallery;
