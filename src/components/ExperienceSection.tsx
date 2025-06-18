
import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Briefcase, Clock } from 'lucide-react';

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-slide-in-left');
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      role: "Web Development Intern",
      company: "Salient Devs",
      duration: "2023",
      description: "Worked on project-based web development, gaining hands-on experience with modern web technologies and contributing to real-world applications.",
      type: "Internship"
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Professional Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My work experience and professional growth
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="opacity-0 -translate-x-full transition-all duration-700 ease-out"
              >
                <Card className="glass-effect p-8 hover-glow transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                        <Briefcase className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center text-primary mt-2 md:mt-0">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{exp.duration}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-medium text-accent mb-3">
                        {exp.company}
                      </h4>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                        {exp.type}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
            
            {/* More Loading Soon Card */}
            <div
              ref={(el) => {
                if (el) cardsRef.current[experiences.length] = el;
              }}
              className="opacity-0 -translate-x-full transition-all duration-700 ease-out"
            >
              <Card className="glass-effect p-8 hover-glow transition-all duration-300 group border-dashed border-2 border-primary/30">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                  
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold text-gradient mb-3">
                      More Opportunities Loading...
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      🚀 Exciting new professional experiences are on the horizon! Stay tuned as I continue to grow and take on new challenges in the world of software development.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
