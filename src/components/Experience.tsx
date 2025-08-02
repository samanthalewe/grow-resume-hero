import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, Zap } from "lucide-react";

const experiences = [
  {
    company: "TechScale Ventures",
    role: "Fractional CMO",
    period: "2023 - Present",
    highlights: [
      "Increased qualified lead generation by 340% across portfolio companies",
      "Built and scaled marketing teams from 1 to 15+ members",
      "Implemented data-driven attribution models saving $2M+ in ad spend"
    ],
    metrics: "340% lead growth • $2M+ saved • 15+ team members",
    icon: TrendingUp
  },
  {
    company: "GrowthCorp",
    role: "VP of Marketing",
    period: "2021 - 2023",
    highlights: [
      "Led complete brand repositioning resulting in 85% increase in brand awareness",
      "Launched multi-channel acquisition strategy generating $50M+ in revenue",
      "Mentored and developed 3 direct reports into leadership roles"
    ],
    metrics: "85% brand awareness • $50M+ revenue • 3 promotions",
    icon: Target
  },
  {
    company: "StartupBoost",
    role: "Marketing Director",
    period: "2019 - 2021",
    highlights: [
      "Architected growth engine that scaled from $1M to $25M ARR",
      "Reduced customer acquisition cost by 65% through optimization",
      "Built customer success program increasing NPS from 6 to 72"
    ],
    metrics: "2400% ARR growth • 65% CAC reduction • NPS: 72",
    icon: Zap
  },
  {
    company: "DigitalFirst Agency",
    role: "Senior Growth Manager",
    period: "2017 - 2019",
    highlights: [
      "Managed $10M+ in digital ad spend across 50+ client accounts",
      "Developed proprietary attribution framework adopted company-wide",
      "Achieved average 4.2x ROAS across all managed campaigns"
    ],
    metrics: "$10M+ ad spend • 50+ clients • 4.2x ROAS",
    icon: Users
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Proven Track Record
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            15+ years driving growth for startups, scale-ups, and Fortune 500 companies. 
            Here's where I've made the biggest impact.
          </p>
        </div>

        <div className="grid gap-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card 
                key={index} 
                className="p-8 bg-card-gradient border shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        <p className="text-muted-foreground">{exp.period}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-4">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-foreground">{highlight}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="lg:border-l lg:border-border lg:pl-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Metrics</h4>
                    <Badge variant="outline" className="text-sm p-3 h-auto leading-relaxed">
                      {exp.metrics}
                    </Badge>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;