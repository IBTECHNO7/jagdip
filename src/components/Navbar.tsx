
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-card/80 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gradient">
            Jagdip Singal
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-4 mr-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Contact
              </button>
            </div>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
