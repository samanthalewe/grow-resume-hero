import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Users, 
  Target, 
  Zap, 
  TrendingUp, 
  Brain,
  Megaphone,
  Code,
  Database
} from "lucide-react";

const skillCategories = [
  {
    title: "Growth Strategy",
    icon: TrendingUp,
    skills: ["Growth Hacking", "Market Expansion", "Product-Market Fit", "Go-to-Market Strategy"],
    color: "bg-blue-500/10 text-blue-600 border-blue-200"
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    skills: ["Attribution Modeling", "Conversion Optimization", "A/B Testing", "Performance Marketing"],
    color: "bg-green-500/10 text-green-600 border-green-200"
  },
  {
    title: "Team Leadership",
    icon: Users,
    skills: ["Team Building", "Cross-functional Leadership", "Mentoring", "Change Management"],
    color: "bg-purple-500/10 text-purple-600 border-purple-200"
  },
  {
    title: "Marketing Channels",
    icon: Megaphone,
    skills: ["Paid Media", "Content Marketing", "SEO/SEM", "Email Marketing", "Social Media"],
    color: "bg-orange-500/10 text-orange-600 border-orange-200"
  },
  {
    title: "Technology",
    icon: Code,
    skills: ["Marketing Automation", "CRM Systems", "Analytics Tools", "No-Code Solutions"],
    color: "bg-indigo-500/10 text-indigo-600 border-indigo-200"
  },
  {
    title: "Business Intelligence",
    icon: Brain,
    skills: ["Strategic Planning", "Market Research", "Competitive Analysis", "Revenue Operations"],
    color: "bg-pink-500/10 text-pink-600 border-pink-200"
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Areas of Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set built through years of hands-on experience 
            in driving growth for companies at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className={`text-xs ${category.color}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Featured Tools & Platforms */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Tools & Platforms I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Google Analytics", "HubSpot", "Salesforce", "Segment", "Mixpanel",
              "Facebook Ads", "Google Ads", "LinkedIn Ads", "Klaviyo", "Notion",
              "Figma", "Zapier", "Airtable", "Slack", "Asana"
            ].map((tool, idx) => (
              <Badge 
                key={idx} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;