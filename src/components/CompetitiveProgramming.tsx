
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const CompetitiveProgramming = () => {
  const profiles = [
    {
      platform: "LeetCode",
      icon: "💻",
      stats: "200+ Problems Solved",
      rank: "Intermediate Level",
      description: "Consistent problem solving with focus on algorithms and data structures",
      url: "#"
    },
    {
      platform: "Codeforces",
      icon: "🏆",
      stats: "1200+ Rating",
      rank: "Specialist",
      description: "Regular participation in competitive programming contests",
      url: "#"
    },
    {
      platform: "GitHub",
      icon: "🐙",
      stats: "Active Repositories",
      rank: "Active Contributor",
      description: "Open source contributions and personal projects showcase",
      url: "https://github.com/IBTECHNO7"
    },
    {
      platform: "LinkedIn",
      icon: "💼",
      stats: "500+ Connections",
      rank: "Professional Network",
      description: "Building professional relationships in tech community",
      url: "https://in.linkedin.com/in/jagdip-singal-a728b127a"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Competitive Programming & Profiles
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing my journey in competitive programming and professional networks
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map((profile, index) => (
              <Card key={index} className="glass-effect p-6 hover-glow transition-all duration-300 group text-center">
                <div className="text-4xl mb-4">{profile.icon}</div>
                
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {profile.platform}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <p className="text-primary font-medium">{profile.stats}</p>
                  <p className="text-accent text-sm">{profile.rank}</p>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {profile.description}
                </p>
                
                <Button 
                  size="sm" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Profile
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Card className="glass-effect p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">
                Competitive Programming Achievements
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Problems Solved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-muted-foreground">Contests Participated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Top 10%</div>
                  <div className="text-muted-foreground">Global Ranking</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
