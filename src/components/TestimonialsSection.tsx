
import React from 'react';
import { Card } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Manvith Bhandari",
      role: "Senior Developer",
      company: "Sailent devs",
      image: "👩‍💼",
      quote: "Jagdip is an incredibly fast learner who delivers polished code on time. His attention to detail and problem-solving skills make him a valuable team member."
    },
    {
      name: "Pradeep Patra",
      role: "Project Manager",
      company: "Innovation Labs",
      image: "👨‍💻",
      quote: "Working with Jagdip was a fantastic experience. He brings creativity and technical expertise to every project, always exceeding expectations."
    },
    {
      name: "Ayesha D’Cruz",
      role: "Tech Lead",
      company: "Parul University",
      image: "👩‍🔬",
      quote: "Jagdip's ability to translate complex requirements into elegant solutions is remarkable. His code quality and documentation are consistently excellent."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              What People Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Testimonials from colleagues and clients I've had the pleasure to work with
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-effect p-6 hover-glow transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="text-4xl text-primary/30 mb-2">"</div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                  <div className="text-4xl text-primary/30 text-right -mt-4">"</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
