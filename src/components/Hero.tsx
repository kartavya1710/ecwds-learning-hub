
import { Button } from '@/components/ui/button';
import { Star, Users, Award, BookOpen } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Users, label: 'Students Taught', value: '1000+' },
    { icon: Award, label: 'Years Experience', value: '22+' },
    { icon: Star, label: 'Success Rate', value: '95%' },
    { icon: BookOpen, label: 'Courses', value: '10+' },
  ];

  return (
    <section className="hero-gradient text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Excellence in 
                <span className="text-blue-200"> Computer Education</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Join Surat's most trusted computer tuition classes with Divyakant Sir. 
                22 years of experience, proven results, and personalized attention for every student.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-[#2E86AB] hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                Enroll Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#2E86AB] px-8 py-4 text-lg font-semibold">
                View Results
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/lovable-uploads/e1673b96-7401-48ab-9e9d-24ba2ef00c3e.png"
                alt="Divyakant Sir teaching students"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg">
              🏆 Author of Computer Darpan
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
