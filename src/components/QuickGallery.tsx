
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Trophy, Users, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GALLERY_CATEGORIES } from '@/utils/galleryUtils';

const QuickGallery = () => {
  const galleryCategories = [
    {
      icon: Star,
      title: GALLERY_CATEGORIES.reviews.title,
      description: GALLERY_CATEGORIES.reviews.description,
      image: '/lovable-uploads/be2ea5d8-55a5-4008-a0de-899ce4a93891.png',
      count: '20+',
      link: '/gallery#reviews'
    },
    {
      icon: Trophy,
      title: GALLERY_CATEGORIES.results.title,
      description: GALLERY_CATEGORIES.results.description,
      image: '/lovable-uploads/4918c16d-437b-48cb-b248-5eb71b4c1028.png',
      count: '60+',
      link: '/gallery#results'
    },
    {
      icon: Users,
      title: GALLERY_CATEGORIES.rankers.title,
      description: GALLERY_CATEGORIES.rankers.description,
      image: '/lovable-uploads/0a1febda-9ffe-4cd1-a32f-943c9f081e1b.png',
      count: '20+',
      link: '/gallery#rankers'
    },
    {
      icon: Camera,
      title: GALLERY_CATEGORIES.celebrations.title,
      description: GALLERY_CATEGORIES.celebrations.description,
      image: '/lovable-uploads/be2ea5d8-55a5-4008-a0de-899ce4a93891.png',
      count: '30+',
      link: '/gallery#celebrations'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Success Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our journey of excellence through student achievements, memorable moments, and success stories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryCategories.map((category, index) => (
            <Link 
              key={index}
              to={category.link}
              className="group block"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-[#2E86AB] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {category.count}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#2E86AB] bg-opacity-10 p-2 rounded-lg mr-3">
                      <category.icon className="h-5 w-5 text-[#2E86AB]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-[#2E86AB] font-medium group-hover:gap-2 transition-all duration-300">
                    <span>View All</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="btn-primary">
            <Link to="/gallery">
              Explore Complete Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickGallery;
