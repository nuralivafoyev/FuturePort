import React, { useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const { t } = useLanguage();
  const { ref, isIntersecting } = useIntersectionObserver();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your name.",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.email.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.subject.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter a subject.",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your message.",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      color: 'var(--electric-blue)',
      title: t('contact.info.email'),
      value: 'alex@example.com'
    },
    {
      icon: Phone,
      color: 'var(--purple-glow)',
      title: t('contact.info.phone'),
      value: '+1 (555) 123-4567'
    },
    {
      icon: MapPin,
      color: 'var(--soft-cyan)',
      title: t('contact.info.location'),
      value: 'San Francisco, CA'
    }
  ];

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        {/* Contact Form */}
        <div 
          className={`glassmorphism rounded-2xl p-8 md:p-12 transition-all duration-500 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.namePlaceholder')}
                  className="w-full px-4 py-3 rounded-xl glassmorphism border-0 focus:ring-2 focus:ring-[var(--electric-blue)] transition-all duration-300 bg-white/10 dark:bg-black/20 placeholder-gray-500 dark:placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="w-full px-4 py-3 rounded-xl glassmorphism border-0 focus:ring-2 focus:ring-[var(--electric-blue)] transition-all duration-300 bg-white/10 dark:bg-black/20 placeholder-gray-500 dark:placeholder-gray-400"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                {t('contact.form.subject')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder={t('contact.form.subjectPlaceholder')}
                className="w-full px-4 py-3 rounded-xl glassmorphism border-0 focus:ring-2 focus:ring-[var(--electric-blue)] transition-all duration-300 bg-white/10 dark:bg-black/20 placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t('contact.form.messagePlaceholder')}
                className="w-full px-4 py-3 rounded-xl glassmorphism border-0 focus:ring-2 focus:ring-[var(--electric-blue)] transition-all duration-300 resize-none bg-white/10 dark:bg-black/20 placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-[var(--electric-blue)] text-white rounded-xl font-semibold hover:bg-[var(--electric-blue)]/90 transform hover:scale-105 transition-all duration-300 neon-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : t('contact.form.send')}
              </button>
            </div>
          </form>
          
          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="space-y-3">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto"
                      style={{
                        backgroundColor: `${info.color}/20`
                      }}
                    >
                      <IconComponent 
                        className="w-6 h-6"
                        style={{ color: info.color }}
                      />
                    </div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
