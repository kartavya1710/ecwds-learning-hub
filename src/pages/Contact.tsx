
import { Mail, Phone, MapPin, Clock, Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with ECWDS Computer Classes</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#2E86AB] text-white p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 99788 26343</p>
                    <p className="text-sm text-gray-500">Available: Mon-Sat, 9 AM - 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#2E86AB] text-white p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">+91 99788 26343</p>
                    <p className="text-sm text-gray-500">Quick responses & updates</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#2E86AB] text-white p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      ECWDS Computer Classes<br />
                      Near Yogi Chowk, Surat<br />
                      Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#2E86AB] text-white p-3 rounded-lg">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Class Timings</h3>
                    <p className="text-gray-600">
                      Morning: 9:00 AM - 12:00 PM<br />
                      Evening: 4:00 PM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <a 
                  href="tel:+919978826343"
                  className="w-full btn-primary inline-flex items-center justify-center px-6 py-3 rounded-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
                <a 
                  href="https://wa.me/919978826343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white inline-flex items-center justify-center px-6 py-3 rounded-lg transition-colors"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h2>
              <div className="space-y-4">
                <a 
                  href="https://www.instagram.com/divyakantmasster/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-lg">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.988-5.367 11.988-11.988C24.005 5.367 18.638.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.295C3.852 14.477 3.014 12.54 3.014 10.5s.838-3.977 2.114-5.193c.873-.805 2.024-1.295 3.321-1.295s2.448.49 3.321 1.295c1.276 1.216 2.114 3.153 2.114 5.193s-.838 3.977-2.114 5.193c-.873.805-2.024 1.295-3.321 1.295z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Instagram</h3>
                    <p className="text-sm text-gray-600">@divyakantmasster</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.facebook.com/EnjoyComputerWithDivyakantSir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-blue-600 text-white p-3 rounded-lg">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Facebook</h3>
                    <p className="text-sm text-gray-600">Enjoy Computer With Divyakant Sir</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Find Us</h2>
              <p className="text-gray-600">Visit our computer classes in Surat</p>
            </div>
            <div className="relative h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.9043479384544!2d72.8310213143569!3d21.195739485931668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e8c2b93b5cd%3A0x9f5b7f5b7f5b7f5b!2sECWDS%20Computer%20Classes!5e0!3m2!1sen!2sin!4v1629784923456!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
            <div className="p-6">
              <a 
                href="https://maps.app.goo.gl/J6pdKneQJq9pmJeG9?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary inline-flex items-center justify-center px-6 py-3 rounded-lg"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Small Batch Size</h3>
            <p className="text-gray-600">Maximum 15 students per batch for personalized attention</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Timings</h3>
            <p className="text-gray-600">Morning and evening batches available to suit your schedule</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">WhatsApp support for doubts and queries anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
