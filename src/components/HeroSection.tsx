
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';
import SpaceBackground from './SpaceBackground';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Space Background */}
      <SpaceBackground />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block text-gradient">Jagdip Singal</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
            Engineering Ideas Into Elegant Experiences
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Full-stack developer crafting immersive web experiences with modern technologies and clean, scalable code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg hover-glow group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg group"
            >
              Let's Connect
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
