import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Code, Palette, Settings } from 'lucide-react';

const skillsData = [
  {
    category: 'frontend',
    icon: Code,
    iconColor: 'var(--electric-blue)',
    skills: [
      { name: 'React', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 }
    ]
  },
  {
    category: 'styling',
    icon: Palette,
    iconColor: 'var(--purple-glow)',
    skills: [
      { name: 'CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'SASS/SCSS', level: 85 },
      { name: 'Figma', level: 80 }
    ]
  },
  {
    category: 'tools',
    icon: Settings,
    iconColor: 'var(--soft-cyan)',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Webpack', level: 75 },
      { name: 'Node.js', level: 70 },
      { name: 'Jest', level: 65 }
    ]
  }
];

const techIcons = [
  { icon: 'fab fa-react', color: 'var(--electric-blue)' },
  { icon: 'fab fa-js-square', color: '#F7DF1E' },
  { icon: 'fab fa-html5', color: '#E34C26' },
  { icon: 'fab fa-css3-alt', color: '#1572B6' },
  { icon: 'fab fa-sass', color: '#CC6699' },
  { icon: 'fab fa-node-js', color: '#339933' },
  { icon: 'fab fa-git-alt', color: '#F05032' },
  { icon: 'fab fa-figma', color: '#F24E1E' }
];

export function SkillsSection() {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver();
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (isIntersecting) {
      // Animate skills progressively
      skillsData.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          setTimeout(() => {
            setAnimatedSkills(prev => new Set([...prev, `${category.category}-${skill.name}`]));
          }, (categoryIndex * 200) + (skillIndex * 100));
        });
      });
    }
  }, [isIntersecting]);

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--electric-blue)]/5 via-[var(--purple-glow)]/5 to-[var(--soft-cyan)]/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('skills.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.category}
                className={`glassmorphism rounded-2xl p-8 hover-lift transition-all duration-500 ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${categoryIndex * 0.1}s`
                }}
              >
                <div className="text-center mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      backgroundColor: `${category.iconColor}/20`
                    }}
                  >
                    <IconComponent 
                      className="w-8 h-8"
                      style={{ color: category.iconColor }}
                    />
                  </div>
                  <h3 className="text-xl font-bold">
                    {t(`skills.${category.category}.title` as any)}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => {
                    const isAnimated = animatedSkills.has(`${category.category}-${skill.name}`);
                    return (
                      <div key={skill.name} className="skill-item">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full skill-progress transition-all duration-1000 ease-out"
                            style={{
                              backgroundColor: category.iconColor,
                              width: isAnimated ? `${skill.level}%` : '0%'
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Tech Stack Icons */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            {t('skills.techStack')}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {techIcons.map((tech, index) => (
              <div 
                key={index}
                className={`tech-icon group transition-all duration-500 ${
                  isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <i 
                  className={`${tech.icon} text-4xl group-hover:scale-125 transition-transform duration-300`}
                  style={{ color: tech.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
