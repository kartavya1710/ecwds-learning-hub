
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, User, Mail, Phone, GraduationCap, Calendar, CheckCircle } from 'lucide-react';

interface AdmissionFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdmissionForm = ({ isOpen, onClose }: AdmissionFormProps) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    standard: '',
    school: '',
    previousExperience: '',
    message: ''
  });
  
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate sending data to admin (you would integrate with your backend here)
    console.log('Form Data Submitted:', formData);
    console.log('Admin SMS should be sent to: +919825472797');
    
    // Always show success modal
    setShowSuccessModal(true);
    
    // Reset form
    setFormData({
      studentName: '',
      parentName: '',
      email: '',
      phone: '',
      standard: '',
      school: '',
      previousExperience: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
            <div className="flex items-center">
              <GraduationCap className="mr-3 h-7 w-7 text-[#2E86AB]" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Admission Form - ECWDS</h2>
                <p className="text-gray-600">Join ECWDS Computer Classes</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline h-4 w-4 mr-1" />
                  Student Name *
                </label>
                <Input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter student's full name"
                  className="focus:border-[#2E86AB]"
                />
              </div>

              <div>
                <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline h-4 w-4 mr-1" />
                  Parent/Guardian Name *
                </label>
                <Input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter parent's name"
                  className="focus:border-[#2E86AB]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline h-4 w-4 mr-1" />
                  Email Address *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter email address"
                  className="focus:border-[#2E86AB]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline h-4 w-4 mr-1" />
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter phone number"
                  className="focus:border-[#2E86AB]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="standard" className="block text-sm font-medium text-gray-700 mb-2">
                  <GraduationCap className="inline h-4 w-4 mr-1" />
                  Current Standard *
                </label>
                <select
                  id="standard"
                  name="standard"
                  value={formData.standard}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E86AB] focus:border-[#2E86AB]"
                >
                  <option value="">Select Standard</option>
                  <option value="10">Standard 10</option>
                  <option value="11">Standard 11</option>
                  <option value="12">Standard 12</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  School Name
                </label>
                <Input
                  type="text"
                  id="school"
                  name="school"
                  value={formData.school}
                  onChange={handleInputChange}
                  placeholder="Enter school name"
                  className="focus:border-[#2E86AB]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="previousExperience" className="block text-sm font-medium text-gray-700 mb-2">
                Previous Computer Experience
              </label>
              <Input
                type="text"
                id="previousExperience"
                name="previousExperience"
                value={formData.previousExperience}
                onChange={handleInputChange}
                placeholder="Any prior computer knowledge?"
                className="focus:border-[#2E86AB]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                placeholder="Any specific requirements or questions?"
                className="focus:border-[#2E86AB]"
              />
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <CheckCircle className="h-5 w-5 text-yellow-600 mr-2" />
                <span className="font-semibold text-yellow-800">Limited Seats Available!</span>
              </div>
              <p className="text-yellow-700 text-sm">
                Only a few seats left for the current batch. Apply now to secure your admission.
              </p>
            </div>

            <div className="flex gap-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="btn-primary flex-1">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal - Always show after submission */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-60 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center animate-scale-in">
            <div className="mb-6">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted Successfully!</h3>
              <p className="text-gray-600">
                Thank you for your interest in ECWDS. Our team will contact you within 24 hours to discuss admission details and schedule your visit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                  <span className="font-semibold text-green-700">WhatsApp</span>
                </div>
                <a 
                  href={`https://wa.me/919825472797?text=${encodeURIComponent(`Hi Sir, I just submitted my admission application for ECWDS. My name is ${formData.studentName}. Please guide me about the next steps.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white inline-flex items-center justify-center px-4 py-3 rounded-lg transition-colors"
                >
                  Message on WhatsApp
                </a>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <div className="flex items-center justify-center mb-3">
                  <Phone className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="font-semibold text-blue-700">Call Directly</span>
                </div>
                <a 
                  href="tel:+919825472797"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white inline-flex items-center justify-center px-4 py-3 rounded-lg transition-colors"
                >
                  Call +919825472797
                </a>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-2">
                <CheckCircle className="h-5 w-5 text-yellow-600 mr-2" />
                <span className="font-semibold text-yellow-800">Application Status</span>
              </div>
              <p className="text-yellow-700 text-sm">
                Your application has been received and Sir will personally review it. You'll receive a confirmation call within 2-4 hours during office hours.
              </p>
            </div>
            
            <Button 
              onClick={closeSuccessModal}
              variant="outline"
              className="w-full"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdmissionForm;
