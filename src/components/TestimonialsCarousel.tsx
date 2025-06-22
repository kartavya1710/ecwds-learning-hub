
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "રજનીકાંત પટેલ",
      relation: "વિદ્યાર્થીના પિતા",
      text: "દિવ્યકાંત સરની શિક્ષણ પદ્ધતિ ખૂબ જ સરળ અને અસરકારક છે. મારા બાળકના કમ્પ્યુટર વિષયના માર્ક્સ ખૂબ સુધર્યા છે.",
      rating: 5
    },
    {
      name: "પ્રિયા શાહ",
      relation: "વિદ્યાર્થી",
      text: "સરની ક્લાસમાં કમ્પ્યુટર શીખવું ખૂબ જ મજાનું લાગે છે. તેઓ દરેક કોન્સેપ્ટ ખૂબ સાચી રીતે સમજાવે છે.",
      rating: 5
    },
    {
      name: "અમિત વર્મા",
      relation: "વિદ્યાર્થીના પિતા",
      text: "ECWDS એ સુરતની સૌથી સારી કમ્પ્યુટર ક્લાસ છે. દિવ્યકાંત સર ખૂબ જ અનુભવી અને સમજદાર શિક્ષક છે.",
      rating: 5
    },
    {
      name: "કાવ્યા દેસાઈ",
      relation: "વિદ્યાર્થી",
      text: "સરે બનાવેલી કમ્પ્યુટર દર્પણ પુસ્તક ખૂબ જ ઉપયોગી છે. બોર્ડ પરીક્ષામાં ખૂબ મદદ મળી.",
      rating: 5
    },
    {
      name: "મહેશ ગુપ્તા",
      relation: "વિદ્યાર્થીના પિતા",
      text: "27 વર્ષનો અનુભવ અને સરકારી બોર્ડની ટ્રેનિંગ લીધેલા દિવ્યકાંત સર પાસે શીખવાનું સોનામાં સુગંધ છે.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            વિદ્યાર્થીઓ અને પેરેન્ટ્સના અભિપ્રાયો
          </h2>
          <p className="text-lg text-gray-600">
            જુઓ આપના વિદ્યાર્થીઓ અને તેમના પેરેન્ટ્સ શું કહે છે
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 mx-auto max-w-4xl">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed font-medium">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="text-center">
                <p className="text-lg font-semibold text-[#2E86AB] mb-1">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].relation}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#2E86AB]' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
