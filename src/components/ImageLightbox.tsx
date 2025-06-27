
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageLightboxProps {
  images: Array<{ src: string; title: string; description: string }>;
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const ImageLightbox = ({ images, initialIndex, isOpen, onClose }: ImageLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Update currentIndex when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  if (!isOpen) return null;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white hover:bg-black hover:bg-opacity-70"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Previous button */}
        {images.length > 1 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white hover:bg-black hover:bg-opacity-70"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        )}

        {/* Next button */}
        {images.length > 1 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white hover:bg-black hover:bg-opacity-70"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        )}

        {/* Image */}
        <div className="flex flex-col items-center">
          <img 
            src={images[currentIndex]?.src}
            alt={images[currentIndex]?.title}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
          />
          
          {/* Image info */}
          <div className="bg-black bg-opacity-70 text-white p-4 rounded-b-lg max-w-full">
            <h3 className="text-lg font-semibold mb-2">{images[currentIndex]?.title}</h3>
            <p className="text-sm text-gray-300">{images[currentIndex]?.description}</p>
            {images.length > 1 && (
              <p className="text-xs text-gray-400 mt-2">
                {currentIndex + 1} of {images.length}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
