
import { useState } from 'react';
import ImageLightbox from '@/components/ImageLightbox';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<Array<{ src: string; title: string; description: string }>>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [
    {
      src: "/lovable-uploads/7d3108d6-20bc-41e4-a2bd-dc12ee814e7b.png",
      title: "ECWDS Computer Class Achievement 1",
      description: "Students celebrating their success in computer examinations"
    },
    {
      src: "/lovable-uploads/199b222b-a06e-469d-8c5b-e67aee05ee31.png",
      title: "ECWDS Computer Class Achievement 2", 
      description: "Interactive learning session with Divyakant Sir"
    },
    {
      src: "/lovable-uploads/c28807ee-879b-4269-b44a-81473193e53e.png",
      title: "ECWDS Computer Class Achievement 3",
      description: "Practical computer training in progress"
    },
    {
      src: "/lovable-uploads/2b8c3839-0071-4e7a-9edd-8a731b4b71e0.png",
      title: "ECWDS Computer Class Achievement 4",
      description: "Students engaged in hands-on computer learning"
    },
    {
      src: "/lovable-uploads/9c91fbc5-14dc-4030-ba4a-6ff95eb5e2d2.png",
      title: "ECWDS Computer Class Achievement 5",
      description: "Group learning and collaboration in computer class"
    },
    {
      src: "/lovable-uploads/46262088-b4ee-4171-a28d-9a660f44be7d.png",
      title: "ECWDS Computer Class Achievement 6",
      description: "Advanced computer programming session"
    },
    {
      src: "/lovable-uploads/faa0a766-6271-4fc0-aaad-ee338e899ff0.png",
      title: "ECWDS Computer Class Achievement 7",
      description: "Students working on computer projects"
    },
    {
      src: "/lovable-uploads/521f5656-c4ac-4cf5-b353-033c0a71235e.png",
      title: "ECWDS Computer Class Achievement 8",
      description: "Examination preparation and practice session"
    }
  ];

  const openLightbox = (index: number) => {
    setLightboxImages(galleryImages);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-16" id="gallery-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Success Gallery</h1>
            <p className="text-lg text-gray-600">Celebrating achievements and memorable moments at ECWDS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
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
