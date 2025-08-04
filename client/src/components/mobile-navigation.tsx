import React from 'react';
import { useTheme } from '@/contexts/theme-context';
import { useLanguage } from '@/contexts/language-context';
import { Home, Briefcase, Settings, Mail, Moon, Sun } from 'lucide-react';

export function MobileNavigation() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    {
      icon: Home,
      label: t('nav.home'),
      section: 'home'
    },
    {
      icon: Briefcase,
      label: t('nav.projects'),
      section: 'projects'
    },
    {
      icon: Settings,
      label: t('nav.skills'),
      section: 'skills'
    },
    {
      icon: Mail,
      label: t('nav.contact'),
      section: 'contact'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="glassmorphism backdrop-blur-lg px-4 py-2">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="mobile-nav-link flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-300 hover:bg-white/10"
              >
                <IconComponent className="w-5 h-5 mb-1" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
          
          <button
            onClick={toggleTheme}
            className="mobile-nav-link flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-300 hover:bg-white/10"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 mb-1" />
            ) : (
              <Sun className="w-5 h-5 mb-1" />
            )}
            <span className="text-xs">{t('nav.theme')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
