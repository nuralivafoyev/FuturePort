import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Eye, Download, Github, Linkedin, Twitter } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypingComplete(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // In a real application, this would download an actual resume file
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume file path
    link.download = 'Alex_Chen_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--electric-blue)]/10 via-[var(--purple-glow)]/10 to-[var(--soft-cyan)]/10 dark:from-[var(--electric-blue)]/20 dark:via-[var(--purple-glow)]/20 dark:to-[var(--soft-cyan)]/20"></div>
      <div className="absolute inset-0">
        <div className="animate-float absolute top-20 left-10 w-20 h-20 bg-[var(--electric-blue)]/20 rounded-full blur-xl"></div>
        <div className="animate-float absolute top-40 right-20 w-32 h-32 bg-[var(--purple-glow)]/20 rounded-full blur-xl" style={{animationDelay: '1s'}}></div>
        <div className="animate-float absolute bottom-20 left-1/3 w-24 h-24 bg-[var(--soft-cyan)]/20 rounded-full blur-xl" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Profile Photo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
            alt="Alex Chen Profile Photo" 
            className="w-32 h-32 rounded-full mx-auto border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-500 neon-glow"
          />
        </div>
        
        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
          <span className="gradient-text">{t('hero.name')}</span>
        </h1>
        
        {/* Animated Typing Effect */}
        <div className="text-xl md:text-2xl mb-8 h-8">
          <span className="typing-animation">{t('hero.title')}</span>
        </div>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
          {t('hero.description')}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
          <button 
            onClick={scrollToProjects}
            className="px-8 py-4 bg-[var(--electric-blue)] text-white rounded-xl font-semibold hover:bg-[var(--electric-blue)]/90 transform hover:scale-105 transition-all duration-300 neon-glow flex items-center justify-center gap-2"
          >
            <Eye className="w-5 h-5" />
            {t('hero.viewWork')}
          </button>
          <button 
            onClick={handleDownloadResume}
            className="px-8 py-4 glassmorphism rounded-xl font-semibold hover:bg-white hover:bg-opacity-20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            {t('hero.downloadResume')}
          </button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-12 opacity-0 animate-fade-in" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
          <a href="#" className="text-2xl hover:text-[var(--electric-blue)] transform hover:scale-125 transition-all duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-2xl hover:text-[var(--electric-blue)] transform hover:scale-125 transition-all duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-2xl hover:text-[var(--electric-blue)] transform hover:scale-125 transition-all duration-300">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-2xl hover:text-[var(--electric-blue)] transform hover:scale-125 transition-all duration-300">
            <i className="fab fa-dribbble"></i>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-2xl text-[var(--electric-blue)]"></i>
      </div>
    </section>
  );
}
