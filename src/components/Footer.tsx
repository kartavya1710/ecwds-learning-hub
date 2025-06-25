
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Clock, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1B4F72] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/edf0bc7a-2f45-4bc2-a2ed-2edb8546c638.png" 
                alt="ECWDS Logo" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-xl font-bold">ECWDS</h3>
                <p className="text-sm text-blue-200">Since 1998</p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Surat's most trusted computer tuition classes with 27+ years of excellence in education.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com/ecwds" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/919978826343" className="text-blue-200 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.486z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-blue-100">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 text-blue-200" />
                <a href="tel:+919978826343" className="hover:text-white transition-colors">
                  +91 99788 26343
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 text-blue-200" />
                <a href="mailto:divyakantmaster@yahoo.com" className="hover:text-white transition-colors">
                  divyakantmaster@yahoo.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 text-blue-200" />
                <span>Surat, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Office Hours</h3>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-blue-200" />
                <span>Monday - Friday</span>
              </div>
              <div className="text-sm">
                <p>Morning: 9:00 AM - 12:00 PM</p>
                <p>Evening: 3:00 PM - 7:00 PM</p>
              </div>
              <div className="text-sm">
                <p className="text-yellow-300">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-600 mt-12 pt-8 text-center">
          <p className="text-blue-200">
            © 1998 ECWDS. All rights reserved. | Designed with ❤️ for education by <a href="https://kartavya-master.netlify.app/" className="text-blue-200 hover:text-white transition-colors">Kartavya Master <ExternalLink size={14} className="inline" /></a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
