import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'projects', 'cv', 'certifications', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'cv', label: 'CV' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Left: Brand Name */}
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 group">
            <span className="text-xl font-bold font-grotesk tracking-tight" style={{ color: '#1A1A2E' }}>
              Brian Arta
            </span>
          </button>

          {/* Center: Desktop Navigation Pill */}
          <div
            className="hidden md:flex items-center rounded-full shadow-md px-2 py-1"
            style={{ backgroundColor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)', border: '1px solid #B5D8F0' }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 lg:px-5 py-2 rounded-full transition-all duration-200 text-sm font-medium font-grotesk"
                style={{
                  backgroundColor: activeSection === item.id ? '#1A1A2E' : 'transparent',
                  color: activeSection === item.id ? '#ffffff' : '#1A1A2E',
                  boxShadow: activeSection === item.id ? '0 4px 6px -1px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right: Available badge */}
          <div className="hidden md:flex items-center">
            <span
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 font-grotesk"
              style={{ border: '2px solid #1A1A2E', color: '#1A1A2E' }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ display: 'inline-block' }}></span>
              available for projects
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full transition-colors"
            style={{ border: '2px solid #1A1A2E' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden py-4 space-y-2 rounded-2xl px-4 mb-4 shadow-lg"
            style={{ backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)', border: '1px solid #B5D8F0' }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-grotesk"
                style={{
                  backgroundColor: activeSection === item.id ? '#1A1A2E' : 'transparent',
                  color: activeSection === item.id ? '#ffffff' : '#1A1A2E',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
