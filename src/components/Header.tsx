
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AdmissionForm from '@/components/AdmissionForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmissionFormOpen, setIsAdmissionFormOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-lg">
        {/* Top contact bar */}
        <div className="bg-[#1B4F72] text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a href="tel:+919876543210" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <Phone size={14} />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@ecwds.com" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
                <Mail size={14} />
                <span>info@ecwds.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <a href="https://facebook.com/ecwds" className="hover:text-blue-200 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com/ecwds" className="hover:text-blue-200 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://wa.me/919876543210" className="hover:text-blue-200 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.486z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover-scale">
              <img 
                src="/lovable-uploads/edf0bc7a-2f45-4bc2-a2ed-2edb8546c638.png" 
                alt="ECWDS Logo" 
                className="h-14 w-14"
              />
              <div>
                <h1 className="text-xl font-bold text-[#2E86AB]">ECWDS</h1>
                <p className="text-xs text-gray-600">Enjoy Computer With Divyakant Sir</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-[#2E86AB] border-b-2 border-[#2E86AB] pb-1'
                      : 'text-gray-700 hover:text-[#2E86AB]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                className="btn-primary hover-scale"
                onClick={() => setIsAdmissionFormOpen(true)}
              >
                Admission Open
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-[#2E86AB]'
                        : 'text-gray-700 hover:text-[#2E86AB]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button 
                  className="btn-primary w-full"
                  onClick={() => {
                    setIsAdmissionFormOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Admission Open
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <AdmissionForm 
        isOpen={isAdmissionFormOpen} 
        onClose={() => setIsAdmissionFormOpen(false)} 
      />
    </>
  );
};

export default Header;
