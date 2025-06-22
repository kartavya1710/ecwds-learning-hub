
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import { Star, Trophy, Users, Camera, Play, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('reviews');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<Array<{ src: string; title: string; description: string }>>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const tabs = [
    { id: 'reviews', name: 'Reviews', icon: Star },
    { id: 'results', name: 'Results', icon: Trophy },
    { id: 'rankers', name: 'Rankers', icon: Users },
    { id: 'celebrations', name: 'Celebrations', icon: Camera }
  ];

  const galleryData = {
    reviews: [
      {
        type: 'video',
        thumbnail: '/lovable-uploads/be2ea5d8-55a5-4008-a0de-899ce4a93891.png',
        src: '/lovable-uploads/be2ea5d8-55a5-4008-a0de-899ce4a93891.png',
        title: 'Parent Testimonial - Excellent Teaching',
        description: 'Mother of Std. 12 student shares her experience with ECWDS'
      },
      {
        type: 'image',
        src: '/lovable-uploads/be2ea5d8-55a5-4008-a0de-899ce4a93891.png',
        title: 'Student Review - Personalized Attention',
        description: 'Students praising individual attention given by Divyakant Sir'
      }
    ],
    results: [
      {
        type: 'image',
        src: '/lovable-uploads/4918c16d-437b-48cb-b248-5eb71b4c1028.png',
        title: 'Congratulations Certificate - STD. 12',
        description: 'Sanghavi Heer K - 2nd in Gujarat, 1st in Surat, 1st in Lourdes Convent'
      },
      {
        type: 'image',
        src: '/lovable-uploads/d24963db-61df-43f3-8bc6-b99145b16731.png',
        title: 'Admission Open 2023-24',
        description: 'Outstanding results and achievements by ECWDS students'
      }
    ],
    rankers: [
      {
        type: 'image',
        src: '/lovable-uploads/0a1febda-9ffe-4cd1-a32f-943c9f081e1b.png',
        title: 'Shining Stars of March 2019',
        description: 'Top performers in Std. 12 and Std. 10 computer examinations'
      }
    ],
    celebrations: [
      {
        type: 'image',
        src: '/lovable-uploads/e1673b96-7401-48ab-9e9d-24ba2ef00c3e.png',
        title: 'Interactive Learning Session',
        description: 'Divyakant Sir conducting hands-on computer class'
      },
      {
        type: 'image',
        src: '/lovable-uploads/be2ea5d8-55a5-4008-a0de-899ce4a93891.png',
        title: 'Classroom Learning Environment',
        description: 'Students engaged in practical computer learning'
      }
    ]
  };

  const openLightbox = (images: typeof lightboxImages, index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const currentGalleryItems = galleryData[activeTab as keyof typeof galleryData];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Success Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Explore our journey of excellence through student achievements, testimonials, and memorable moments
          </p>
        </div>
      </section>

      {/* Gallery Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover-scale ${
                  activeTab === tab.id
                    ? 'bg-[#2E86AB] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-[#2E86AB] hover:text-white'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentGalleryItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer"
                onClick={() => openLightbox(
                  currentGalleryItems.map(img => ({ 
                    src: img.src || img.thumbnail || '', 
                    title: img.title, 
                    description: img.description 
                  })), 
                  index
                )}
              >
                <div className="relative">
                  <img 
                    src={item.src || item.thumbnail}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                      <div className="bg-white bg-opacity-90 p-4 rounded-full">
                        <Play className="h-8 w-8 text-[#2E86AB]" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    {item.type === 'video' ? (
                      <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        VIDEO
                      </div>
                    ) : (
                      <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        IMAGE
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {currentGalleryItems.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-gray-100 p-8 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <ImageIcon className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Coming Soon
              </h3>
              <p className="text-gray-600">
                More content will be added to this section soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <ImageLightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default Gallery;
