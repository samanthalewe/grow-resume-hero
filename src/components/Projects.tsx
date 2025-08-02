import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code } from "lucide-react";

const projects = [
  {
    title: "Growth Analytics Dashboard",
    description: "Real-time marketing performance dashboard built with React and D3.js for tracking attribution across multiple channels.",
    tech: ["React", "TypeScript", "D3.js", "Tailwind"],
    status: "Live",
    type: "Analytics Tool"
  },
  {
    title: "A/B Test Calculator",
    description: "Statistical significance calculator for marketing experiments with confidence intervals and sample size recommendations.",
    tech: ["Next.js", "Statistical Analysis", "Charts"],
    status: "Beta",
    type: "Marketing Tool"
  },
  {
    title: "Lead Scoring Model",
    description: "Machine learning model for predicting lead quality based on behavioral data and demographic information.",
    tech: ["Python", "Scikit-learn", "API Integration"],
    status: "Research",
    type: "ML Experiment"
  },
  {
    title: "Content Performance Tracker",
    description: "Automated content analysis tool that tracks engagement metrics across social platforms and suggests optimization.",
    tech: ["Node.js", "API Integrations", "Automation"],
    status: "Development",
    type: "Content Tool"
  },
  {
    title: "Customer Journey Mapper",
    description: "Interactive visualization tool for mapping and analyzing customer touchpoints across the entire marketing funnel.",
    tech: ["Vue.js", "Data Visualization", "UX Design"],
    status: "Live",
    type: "Analytics Tool"
  },
  {
    title: "Marketing Attribution Engine",
    description: "Custom attribution modeling system for accurately tracking multi-touch customer journeys and channel effectiveness.",
    tech: ["React", "Backend APIs", "Advanced Analytics"],
    status: "Live",
    type: "Attribution Tool"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Live": return "bg-green-500/10 text-green-600 border-green-200";
    case "Beta": return "bg-blue-500/10 text-blue-600 border-blue-200";
    case "Development": return "bg-orange-500/10 text-orange-600 border-orange-200";
    case "Research": return "bg-purple-500/10 text-purple-600 border-purple-200";
    default: return "bg-gray-500/10 text-gray-600 border-gray-200";
  }
};

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Side Projects & Experiments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When I'm not scaling marketing teams, I'm building tools and experimenting with new technologies 
            to solve common marketing challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="text-xs px-2 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn"
                  >
                    <Code className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    View Code
                  </Button>
                  {project.status === "Live" && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="group/btn"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-card-gradient p-8 rounded-2xl border shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Let's Build Something Together
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Looking for a fractional CMO who understands both marketing strategy and technology? 
              Let's discuss how I can help accelerate your growth.
            </p>
            <Button 
              variant="linkedin" 
              size="xl"
              onClick={() => window.open('https://linkedin.com/in/samantha-lewe', '_blank')}
            >
              <ExternalLink className="w-5 h-5" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;