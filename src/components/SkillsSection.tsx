
import React from 'react';
import { Card } from '@/components/ui/card';
import Tilt from 'react-parallax-tilt';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React", icon: "⚛️" },
        { name: "Tailwind CSS", icon: "💨" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "REST APIs", icon: "🔌" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: "📝" },
        { name: "GitHub", icon: "🐙" },
        { name: "Docker", icon: "🐳" },
        { name: "VS Code", icon: "💻" },
        { name: "Postman", icon: "📮" }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Communication", icon: "💬" },
        { name: "Leadership", icon: "👑" },
        { name: "Adaptability", icon: "🔄" },
        { name: "Problem Solving", icon: "🧩" },
        { name: "Team Work", icon: "🤝" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Tilt
                key={categoryIndex}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.02}
                transitionSpeed={400}
                gyroscope={true}
              >
                <Card className="glass-effect p-6 hover-glow transition-all duration-300 group h-full">
                  <h3 className="text-xl font-semibold mb-6 text-center text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary/10 transition-colors">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
