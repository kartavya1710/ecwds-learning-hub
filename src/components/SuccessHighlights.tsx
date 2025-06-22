
import { useState } from 'react';
import { Award, BookOpen, Users, Trophy } from 'lucide-react';
import ImageLightbox from '@/components/ImageLightbox';

const SuccessHighlights = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<Array<{ src: string; title: string; description: string }>>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const achievements = [
    {
      icon: Trophy,
      title: "7 Students ranked in Gujarat Board",
      description: "Statewide recognition in board examinations"
    },
    {
      icon: Award, 
      title: "27 Students ranked in Surat Centre",
      description: "Outstanding performance in local center"
    },
    {
      icon: Users,
      title: "27 Years of Experience",
      description: "Proven track record in computer education"
    },
    {
      icon: BookOpen,
      title: "Author of Computer Darpan",
      description: "Series of books for Std. 10, 11 & 12"
    }
  ];

  const photos = [
    {
      src: "/lovable-uploads/7d3108d6-20bc-41e4-a2bd-dc12ee814e7b.png",
      title: "ECWDS Classroom Achievement 1",
      description: "Students celebrating their success in computer examinations"
    },
    {
      src: "/lovable-uploads/199b222b-a06e-469d-8c5b-e67aee05ee31.png",
      title: "ECWDS Classroom Achievement 2", 
      description: "Interactive learning session with Divyakant Sir"
    },
    {
      src: "/lovable-uploads/c28807ee-879b-4269-b44a-81473193e53e.png",
      title: "ECWDS Classroom Achievement 3",
      description: "Practical computer training in progress"
    },
    {
      src: "/lovable-uploads/2b8c3839-0071-4e7a-9edd-8a731b4b71e0.png",
      title: "ECWDS Classroom Achievement 4",
      description: "Students engaged in hands-on computer learning"
    },
    {
      src: "/lovable-uploads/9c91fbc5-14dc-4030-ba4a-6ff95eb5e2d2.png",
      title: "ECWDS Classroom Achievement 5",
      description: "Group learning and collaboration in computer class"
    },
    {
      src: "/lovable-uploads/46262088-b4ee-4171-a28d-9a660f44be7d.png",
      title: "ECWDS Classroom Achievement 6",
      description: "Advanced computer programming session"
    },
    {
      src: "/lovable-uploads/faa0a766-6271-4fc0-aaad-ee338e899ff0.png",
      title: "ECWDS Classroom Achievement 7",
      description: "Students working on computer projects"
    },
    {
      src: "/lovable-uploads/521f5656-c4ac-4cf5-b353-033c0a71235e.png",
      title: "ECWDS Classroom Achievement 8",
      description: "Examination preparation and practice session"
    }
  ];

  const openLightbox = (index: number) => {
    setLightboxImages(photos);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Highlight Text */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E86AB] mb-6">
              The most trusted Computer Class in Surat, Gujarat.
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <achievement.icon className="h-12 w-12 text-[#2E86AB] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divyakant Sir Details */}
          <div className="bg-gradient-to-r from-[#2E86AB] to-[#1B4F72] text-white rounded-3xl p-8 mb-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">DIVYAKANT SIR</h3>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-yellow-400 mr-3 text-xl">»</span>
                    <p className="text-lg">27 years of experience</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yellow-400 mr-3 text-xl">»</span>
                    <p className="text-lg">Ex. computer teacher of "Experimental School"</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yellow-400 mr-3 text-xl">»</span>
                    <p className="text-lg">Trained by Gujarat Secondary & Higher Secondary Education Board, Gandhinagar for Std. 9, 10, 11, and 12.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-yellow-400 mr-3 text-xl">»</span>
                    <p className="text-lg">Author of "Computer Darpan" series of books for Std. 10, 11 & 12 (Eng./Guj. Medium) and "Kumar Question Paper Set" series of books (Eng./Guj. Medium) since March 2006.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yellow-400 mr-3 text-xl">»</span>
                    <p className="text-lg">Written articles on Computer subject in leading newspapers like 'Gujarat Samachar', 'Gujarat Mitra', 'Sandesh', 'Divya Bhaskar' and 'Times of India'.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Our Classroom Moments & Achievements
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <div 
                  key={index} 
                  className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-sm p-3 font-medium">{photo.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <ImageLightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
};

export default SuccessHighlights;
