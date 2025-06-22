
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, BookOpen, Users, Target, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    "22+ years of excellence in computer education",
    "Author of 'Computer Darpan' series of books",
    "Gujarat Board certified computer teacher",
    "1000+ successful students across Gujarat",
    "Consistent top rankers in board examinations",
    "Featured in leading newspapers for educational excellence"
  ];

  const qualifications = [
    {
      title: "Teaching Experience",
      description: "22 years of dedicated computer education",
      icon: Users
    },
    {
      title: "Author & Publisher",
      description: "Computer Darpan series for Std. 10, 11 & 12",
      icon: BookOpen
    },
    {
      title: "Board Recognition",
      description: "Gujarat Secondary & Higher Secondary Education Board",
      icon: Award
    },
    {
      title: "Success Rate",
      description: "95% students achieve distinction grades",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About ECWDS</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Empowering students with comprehensive computer education since 1998
          </p>
        </div>
      </section>

      {/* About Divyakant Sir */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Meet Divyakant Sir
              </h2>
              <div className="text-lg text-gray-600 space-y-4">
                <p>
                  With over 22 years of dedicated experience in computer education, 
                  Divyakant Sir has established himself as one of Gujarat's most respected 
                  computer educators. His passion for teaching and innovative methodologies 
                  have helped thousands of students achieve excellence in their academic pursuits.
                </p>
                <p>
                  As the author of the renowned "Computer Darpan" series of books, 
                  he has contributed significantly to computer education curriculum 
                  for students of Std. 10, 11 & 12 across Gujarat.
                </p>
                <p>
                  His commitment to student success and personalized teaching approach 
                  has made ECWDS the most trusted name for computer education in Surat.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/d24963db-61df-43f3-8bc6-b99145b16731.png"
                alt="Divyakant Sir - Profile"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Qualifications & Experience
            </h2>
            <p className="text-xl text-gray-600">
              Certified expertise in computer education and teaching
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualifications.map((qual, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-[#2E86AB] bg-opacity-10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <qual.icon className="h-8 w-8 text-[#2E86AB]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {qual.title}
                </h3>
                <p className="text-gray-600">
                  {qual.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our Achievements
              </h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-lg text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#2E86AB] bg-opacity-5 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-6">
                To provide world-class computer education that empowers students 
                with practical skills, theoretical knowledge, and the confidence 
                to excel in their academic and professional journeys.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To be the leading computer education institute in Gujarat, 
                recognized for innovation, excellence, and student success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
