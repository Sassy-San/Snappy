import React from 'react';
import { Menu, X, Download } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  scrollToSection,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'connect', label: 'Connect' },
  ];

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-6 px-8 py-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
              activeSection === item.id
                ? 'bg-gradient-to-r from-[#FF9587] to-purple-500 text-white shadow-lg'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            {item.label}
          </button>
        ))}
        <a
          href="#"
          className="flex items-center space-x-2 px-4 py-2 rounded-full border-2 border-[#FF9587] bg-transparent text-white font-bold hover:bg-gradient-to-r hover:from-[#FF9587] hover:to-purple-500 hover:border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-[#FF9587]/25 hover:scale-105"
        >
          <Download size={16} />
          <span>Resume</span>
        </a>
      </div>

      {/* Mobile Navigation Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 right-0 w-64 bg-black/90 backdrop-blur-md rounded-2xl border border-white/10 p-6">
          <div className="space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[#FF9587] to-purple-500 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="#"
              className="flex items-center space-x-2 w-full px-4 py-3 rounded-xl border-2 border-[#FF9587] bg-transparent text-white font-medium hover:bg-gradient-to-r hover:from-[#FF9587] hover:to-purple-500 hover:border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-[#FF9587]/25 hover:scale-105"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;