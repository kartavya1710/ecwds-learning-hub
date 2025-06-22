
import { GraduationCap, Clock, Users, BookOpen, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Courses = () => {
  const courses = [
    {
      standard: "Standard 10",
      subjects: ["Computer Applications", "Programming Fundamentals", "Digital Literacy"],
      duration: "1 Year Course",
      batchSize: "15-20 Students",
      timing: "Morning & Evening Batches",
      fees: "₹8,000",
      period: "Per Year",
      features: [
        "Complete Board Syllabus Coverage",
        "Computer Darpan Book Included",
        "Practical & Theory Classes",
        "Regular Tests & Assessments",
        "Doubt Clearing Sessions"
      ],
      highlight: "Board Exam Preparation"
    },
    {
      standard: "Standard 11",
      subjects: ["Computer Science", "Programming Concepts", "Database Management"],
      duration: "1 Year Course", 
      batchSize: "12-15 Students",
      timing: "Morning & Evening Batches",
      fees: "₹10,000",
      period: "Per Year",
      features: [
        "Advanced Programming Concepts",
        "Project-Based Learning",
        "Industry Relevant Curriculum",
        "Personal Attention",
        "Career Guidance"
      ],
      highlight: "Foundation Building"
    },
    {
      standard: "Standard 12",
      subjects: ["Advanced Computer Science", "Web Development", "Software Engineering"],
      duration: "1 Year Course",
      batchSize: "10-12 Students", 
      timing: "Morning & Evening Batches",
      fees: "₹12,000",
      period: "Per Year",
      features: [
        "Board Exam Excellence",
        "Competitive Exam Preparation",
        "Real-world Projects",
        "University Preparation",
        "100% Success Rate"
      ],
      highlight: "Career Preparation"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            અમારા કોર્સ અને ફી સ્ટ્રક્ચર
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Standard 10, 11, અને 12 માટે સંપૂર્ણ કમ્પ્યુટર કોર્સ અને પ્રેક્ટિકલ ટ્રેનિંગ
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#2E86AB] to-[#1B4F72] text-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <GraduationCap className="h-8 w-8" />
                  <span className="bg-white text-[#2E86AB] px-3 py-1 rounded-full text-sm font-semibold">
                    {course.highlight}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{course.standard}</h3>
                <div className="flex items-center text-3xl font-bold">
                  <IndianRupee className="h-6 w-6 mr-1" />
                  {course.fees.replace('₹', '')}
                  <span className="text-sm font-normal ml-2">/{course.period}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Course Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-3 text-[#2E86AB]" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-3 text-[#2E86AB]" />
                    <span>{course.batchSize}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="h-5 w-5 mr-3 text-[#2E86AB]" />
                    <span>{course.timing}</span>
                  </div>
                </div>

                {/* Subjects */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Subjects Covered:</h4>
                  <div className="space-y-2">
                    {course.subjects.map((subject, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-[#2E86AB] rounded-full mr-3"></div>
                        <span className="text-gray-700">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Course Features:</h4>
                  <div className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enroll Button */}
                <Button className="w-full btn-primary hover-scale">
                  Enroll Now - {course.standard}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              📞 Admission અને ફી સંબંધિત માહિતી માટે સંપર્ક કરો
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              પ્રવેશ, શેડ્યૂલ, અને ખાસ ડિસ્કાઉન્ટ માટે આજે જ કૉલ કરો
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919876543210" className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-lg">
                📞 +91 98765 43210
              </a>
              <a href="https://wa.me/919876543210" className="btn-secondary inline-flex items-center justify-center px-6 py-3 rounded-lg">
                💬 WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
