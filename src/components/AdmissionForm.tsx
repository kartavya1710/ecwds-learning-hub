
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, User, Mail, Phone, GraduationCap, Calendar, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

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
    console.log('Admin SMS should be sent to: +919876543210');
    
    // Show success modal instead of toast
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
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Admission Form</h2>
              <p className="text-gray-600">Join ECWDS Computer Classes</p>
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E86AB]"
                >
                  <option value="">Select Standard</option>
                  <option value="10">Standard 10</option>
                  <option value="11">Standard 11</option>
                  <option value="12">Standard 12</option>
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
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Next Steps:</strong> After submitting this form, you and Divyakant Sir will both receive notifications. 
                Please call us to complete your admission process and secure your seat.
              </p>
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="btn-primary flex-1">
                Submit Application
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-60 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center animate-scale-in">
            <div className="mb-6">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful! 🎉</h3>
              <p className="text-gray-600">
                Thank you for registering with ECWDS!
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl mb-6">
              <h4 className="font-bold text-green-800 mb-3">📱 Next Steps:</h4>
              <div className="space-y-2 text-sm text-green-700">
                <p>✅ Your application has been submitted</p>
                <p>✅ Divyakant Sir has been notified</p>
                <p>✅ You will receive a confirmation call soon</p>
              </div>
            </div>

            <div className="space-y-3">
              <a 
                href="tel:+919876543210"
                className="w-full btn-primary inline-flex items-center justify-center px-6 py-4 text-lg font-semibold rounded-xl"
              >
                📞 Call Divyakant Sir Now
              </a>
              
              <a 
                href="https://wa.me/919876543210"
                className="w-full bg-green-500 hover:bg-green-600 text-white inline-flex items-center justify-center px-6 py-4 text-lg font-semibold rounded-xl transition-colors"
              >
                💬 WhatsApp Chat
              </a>
              
              <Button 
                variant="outline" 
                onClick={closeSuccessModal}
                className="w-full py-3"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdmissionForm;
