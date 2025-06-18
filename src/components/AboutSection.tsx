import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
const AboutSection = () => {
  return <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10">
                <Card className="glass-effect p-8 transition-all duration-300 shadow-2xl shadow-primary/50 brightness-125">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center overflow-hidden">
                    <img alt="Jagdip Singal Profile Picture" className="w-full h-full rounded-full object-cover" src="/lovable-uploads/e0b61838-4bf2-4d75-8c30-f9a69b31cbe7.png" />
                  </div>
                </Card>
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg -z-10"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Software Engineer & Cloud Enthusiast
              </h3>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  👨‍💻 I'm a Software Engineer with over 3 years of experience in software development and cloud technologies.
                </p>
                
                <p>
                  🎓 Currently working toward my Bachelor of Technology in Information Technology at Parul University, I'm all about building reliable, scalable software that makes a difference.
                </p>
                
                <p>
                  🛠 From full-stack development to cloud-based solutions, I've led enterprise-level projects that streamline operations and deliver real impact.
                </p>
                
                <p>
                  🔧 I enjoy automating workflows, optimizing systems, and turning complex challenges into real results. 📈
                </p>
                
                <p>
                  💡 I'm always curious and constantly learning.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Problem Solver</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Team Player</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Fast Learner</span>
                </div>
              </div>
                <a 
                  href="https://jagdipsingal-d0fcb.web.app/resume-jagdip-singal.txt" 
                  download="Jagdip_Singal_Resume.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                    View Resume
                  </Button>
                </a>

            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
