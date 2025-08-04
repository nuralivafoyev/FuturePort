import React, { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/theme-context';
import { useLanguage } from '@/contexts/language-context';
import { languageFlags, languageNames, Language } from '@/lib/translations';
import { Moon, Sun, ChevronDown } from 'lucide-react';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setIsLanguageMenuOpen(false);
    };

    if (isLanguageMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isLanguageMenuOpen]);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsLanguageMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glassmorphism backdrop-blur-xl' 
          : 'glassmorphism backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text">AC</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="nav-link px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:text-[var(--electric-blue)]"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="nav-link px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:text-[var(--electric-blue)]"
              >
                {t('nav.projects')}
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="nav-link px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:text-[var(--electric-blue)]"
              >
                {t('nav.skills')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="nav-link px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:text-[var(--electric-blue)]"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
          
          {/* Theme & Language Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLanguageMenuOpen(!isLanguageMenuOpen);
                }}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg glassmorphism hover:bg-white hover:bg-opacity-20 transition-all duration-300"
              >
                <span className="text-lg">{languageFlags[language]}</span>
                <span className="text-sm font-medium">{languageNames[language]}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 glassmorphism rounded-lg shadow-lg z-50">
                  <div className="py-1">
                    {Object.entries(languageFlags).map(([lang, flag]) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang as Language)}
                        className="w-full px-4 py-2 text-left hover:bg-white hover:bg-opacity-10 transition-all duration-200 flex items-center space-x-2"
                      >
                        <span>{flag}</span>
                        <span>{languageNames[lang as Language]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg glassmorphism hover:bg-white hover:bg-opacity-20 transition-all duration-300"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
