
import { BookOpen, Users, Trophy, Clock, Heart, Lightbulb } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Complete computer education covering programming, applications, and practical skills for Std. 10, 11 & 12.'
    },
    {
      icon: Users,
      title: 'Small Batch Size',
      description: 'Limited students per batch ensuring personalized attention and better learning outcomes.'
    },
    {
      icon: Trophy,
      title: 'Proven Results',
      description: 'Gujarat Board toppers and consistent high achievers. Our students rank among the best in the state.'
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Multiple batch timings to accommodate different school schedules and student preferences.'
    },
    {
      icon: Heart,
      title: 'Student-Centric Approach',
      description: 'Individual attention, doubt clearing sessions, and emotional support for every student.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Teaching',
      description: 'Modern teaching methods, practical examples, and real-world applications to make learning engaging.'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose ECWDS?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our proven teaching methodology and student-first approach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#2E86AB] bg-opacity-10 p-3 rounded-lg">
                  <feature.icon className="h-6 w-6 text-[#2E86AB]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
