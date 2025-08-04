import React, { useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

type ProjectCategory = 'all' | 'react' | 'javascript' | 'css';

const projects = [
  {
    id: 1,
    category: 'react',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    titleKey: 'projects.project1.title',
    descriptionKey: 'projects.project1.description',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    techColors: ['var(--electric-blue)', 'var(--purple-glow)', 'var(--soft-cyan)']
  },
  {
    id: 2,
    category: 'javascript',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    titleKey: 'projects.project2.title',
    descriptionKey: 'projects.project2.description',
    technologies: ['Vanilla JS', 'CSS Grid', 'Local Storage'],
    techColors: ['var(--electric-blue)', 'var(--purple-glow)', 'var(--soft-cyan)']
  },
  {
    id: 3,
    category: 'css',
    image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    titleKey: 'projects.project3.title',
    descriptionKey: 'projects.project3.description',
    technologies: ['CSS3', 'GSAP', 'HTML5'],
    techColors: ['var(--electric-blue)', 'var(--purple-glow)', 'var(--soft-cyan)']
  },
  {
    id: 4,
    category: 'react',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    titleKey: 'projects.project4.title',
    descriptionKey: 'projects.project4.description',
    technologies: ['React', 'Chart.js', 'API Integration'],
    techColors: ['var(--electric-blue)', 'var(--purple-glow)', 'var(--soft-cyan)']
  },
  {
    id: 5,
    category: 'javascript',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    titleKey: 'projects.project5.title',
    descriptionKey: 'projects.project5.description',
    technologies: ['JavaScript', 'Weather API', 'Geolocation'],
    techColors: ['var(--electric-blue)', 'var(--purple-glow)', 'var(--soft-cyan)']
  },
  {
    id: 6,
    category: 'css',
    image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    titleKey: 'projects.project6.title',
    descriptionKey: 'projects.project6.description',
    technologies: ['CSS3', '3D Transforms', 'Animations'],
    techColors: ['var(--electric-blue)', 'var(--purple-glow)', 'var(--soft-cyan)']
  }
];

export function ProjectsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const { ref, isIntersecting } = useIntersectionObserver();

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const filters: { key: ProjectCategory; labelKey: string }[] = [
    { key: 'all', labelKey: 'projects.filter.all' },
    { key: 'react', labelKey: 'projects.filter.react' },
    { key: 'javascript', labelKey: 'projects.filter.javascript' },
    { key: 'css', labelKey: 'projects.filter.css' }
  ];

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>
        
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-xl glassmorphism font-medium transition-all duration-300 ${
                activeFilter === filter.key 
                  ? 'bg-[var(--electric-blue)] text-white' 
                  : 'hover:bg-[var(--electric-blue)] hover:text-white'
              }`}
            >
              {t(filter.labelKey as any)}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`glassmorphism rounded-2xl overflow-hidden hover-lift transition-all duration-500 ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image}
                  alt={t(project.titleKey as any)}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      <a 
                        href="#"
                        className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm text-white font-medium hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a 
                        href="#"
                        className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm text-white font-medium hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {t(project.titleKey as any)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t(project.descriptionKey as any)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: `${project.techColors[techIndex]}/20`,
                        color: project.techColors[techIndex]
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
