import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star, Users, Award, BookOpen } from 'lucide-react';
import AdmissionForm from '@/components/AdmissionForm';
const Hero = () => {
  const [isAdmissionFormOpen, setIsAdmissionFormOpen] = useState(false);
  const stats = [{
    icon: Users,
    label: 'Students Taught',
    value: '1000+'
  }, {
    icon: Award,
    label: 'Years Experience',
    value: '22+'
  }, {
    icon: Star,
    label: 'Success Rate',
    value: '95%'
  }, {
    icon: BookOpen,
    label: 'Courses',
    value: '10+'
  }];
  return <>
      <section className="hero-gradient text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
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
                <Button className="bg-white text-[#2E86AB] hover:bg-blue-50 px-8 py-4 text-lg font-semibold hover-scale" onClick={() => setIsAdmissionFormOpen(true)}>
                  Enroll Now
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="border-white hover:bg-white px-8 py-4 text-lg font-semibold text-gray-700">
                    View Results
                  </Button>
                  <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm animate-pulse flex items-center">
                    🔥 Limited Seats Left
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => <div key={index} className="text-center hover-scale">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>)}
              </div>
            </div>

            {/* Divyakant Sir Photo */}
            <div className="relative animate-scale-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 hover-scale">
                <img src="/lovable-uploads/e1673b96-7401-48ab-9e9d-24ba2ef00c3e.png" alt="Divyakant Sir - Expert Computer Teacher" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
                🏆 Author of Computer Darpan
              </div>
              
              {/* Floating testimonial */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-4 rounded-lg shadow-xl max-w-xs">
                <p className="text-sm font-medium">"Best computer teacher in Surat!"</p>
                <p className="text-xs text-gray-600 mt-1">- Parent Review</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <AdmissionForm isOpen={isAdmissionFormOpen} onClose={() => setIsAdmissionFormOpen(false)} />
    </>;
};
export default Hero;