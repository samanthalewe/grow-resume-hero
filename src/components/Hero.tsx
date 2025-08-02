import { Button } from "@/components/ui/button";
import { ExternalLink, Download } from "lucide-react";
import headshotImage from "@/assets/samantha-headshot.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Fractional CMO &
              <span className="text-primary block">Growth Catalyst</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Driving measurable growth for ambitious companies through data-driven marketing strategies, 
              scalable systems, and team leadership that delivers results.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => window.open('https://linkedin.com/in/samantha-lewe', '_blank')}
            >
              Connect on LinkedIn
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => {
                // Create a dummy PDF download
                const link = document.createElement('a');
                link.href = '/resume-samantha-lewe.pdf';
                link.download = 'Samantha_Lewe_Resume.pdf';
                link.click();
              }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Right Content - Headshot */}
        <div className="flex justify-center lg:justify-end animate-slide-up">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110"></div>
            <img 
              src={headshotImage} 
              alt="Samantha Lewe - Fractional CMO" 
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-strong border-4 border-background"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;