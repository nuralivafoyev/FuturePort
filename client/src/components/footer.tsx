import React from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {t('footer.copyright')}
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-300 hover:text-[var(--electric-blue)] transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-300 hover:text-[var(--electric-blue)] transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-300 hover:text-[var(--electric-blue)] transition-colors duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-300 hover:text-[var(--electric-blue)] transition-colors duration-300"
            >
              <i className="fab fa-dribbble text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
