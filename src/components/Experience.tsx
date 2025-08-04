import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, Zap } from "lucide-react";

const experiences = [
  {
    company: "Just Slide Media",
    role: "Digital CMO",
    period: "2021 - Present",
    highlights: [
      "Drove 500K+ new subscribers annually while reducing customer acquisition costs by 65% for Boost Mobile digital direct-to-consumer business",
      "Developed and executed digital acquisition budgets exceeding $100M annually",
      "Executed multi-channel digital acquisition strategies for app-first telco, driving 2.5x growth in new subscriber acquisition"
    ],
    metrics: "Reduce SAC 65% • Managed $100M+ budget • 2.5X gross adds",
    icon: TrendingUp
  },
  {
    company: "UTM.io & McGaw.io",
    role: "Growth & Product",
    period: "2021 - 2023",
    highlights: [
      "Developed sales program to increase demos by 400%",
      "Led product roadmap to target and exceed 20% MoM MRR Growth",
      "Execute product-led growth strategies like improved sign up flow to optimize conversion by 84%"
    ],
    metrics: "Increase CVR +84% • Increase demos +400% • +20% MRR",
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
          <h2 className="text-3xl font-bold text-foreground mb-4">
            16+ Years Driving Digital Growth for Marketing & Product Teams
          </h2>
          <div className="text-left max-w-4xl mx-auto">
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Spearheaded digital consumer acquisition strategies for 15+ telecommunications brands' direct-to-consumer divisions, including Boost Mobile</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Developed marketing frameworks and SAC modeling systems to forecast and optimize $100M+ marketing budgets, consistently meeting and exceeding goals</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Architected comprehensive telco pricing and competitive promotion strategies, increasing profitability and reducing churn</span>
              </li>
            </ul>
          </div>
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