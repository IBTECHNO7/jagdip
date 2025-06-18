
import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, School } from 'lucide-react';

const EducationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-slide-in-slow');
              entry.target.classList.remove('opacity-0');
            }, index * 600); // Increased delay between animations
          }
        });
      },
      { threshold: 0.3 } // Increased threshold so animation starts when more of the card is visible
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      title: "B.Tech in Information Technology",
      subtitle: "Parul University, Vadodara",
      details: [
        "Duration: 2022 – Present",
        "Currently pursuing degree in Information Technology",
        "Focus on modern software development and emerging technologies"
      ],
      timeline: "2022 – Present",
      position: "right",
      icon: "graduation",
      status: "current"
    },
    {
      title: "High School",
      subtitle: "Infant Jesus High School, Mumbai",
      details: [
        "Duration: 2018 – 2022",
        "Completed secondary education with strong academic foundation",
        "Developed interest in technology and programming"
      ],
      timeline: "2018 – 2022",
      position: "left",
      icon: "school",
      status: "completed"
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium">
              WHAT I HAVE STUDIED SO FAR
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Education.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          </div>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-accent to-primary h-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {education.map((edu, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  className={`relative opacity-0 transition-all duration-1000 ease-out transform ${
                    edu.position === 'left' 
                      ? 'translate-x-[-100px] md:pr-1/2' 
                      : 'translate-x-[100px] md:pl-1/2'
                  }`}
                >
                  {/* Timeline Circle Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
                    <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                      {edu.icon === 'graduation' ? (
                        <GraduationCap className="w-8 h-8 text-primary" />
                      ) : (
                        <School className="w-8 h-8 text-accent" />
                      )}
                    </div>
                  </div>

                  {/* Timeline Date */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-16 text-center ${
                    edu.position === 'left' ? 'md:left-1/4 md:-translate-x-1/2' : 'md:left-3/4 md:-translate-x-1/2'
                  }`}>
                    <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      {edu.timeline}
                    </span>
                  </div>

                  {/* Education Card */}
                  <div className={`${
                    edu.position === 'left' 
                      ? 'md:mr-12 md:text-right' 
                      : 'md:ml-12 md:text-left'
                  } mt-8`}>
                    <Card className="glass-effect p-6 hover-glow transition-all duration-300 group">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {edu.title}
                        </h3>
                        
                        <h4 className="text-lg font-medium text-primary">
                          {edu.subtitle}
                        </h4>
                        
                        <div className="space-y-2">
                          {edu.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                        
                        {edu.status === 'current' && (
                          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
                            Currently Studying
                          </div>
                        )}
                        
                        {edu.status === 'completed' && (
                          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent border border-accent/30">
                            Completed
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
