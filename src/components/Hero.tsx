import { Button } from "@/components/ui/button";
import { ExternalLink, Download } from "lucide-react";
const headshotImage = "/lovable-uploads/c7f54b3d-453e-491a-9222-441cae9904f7.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient flex items-center justify-center px-6 py-12 lg:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Mobile Layout - Headshot First */}
        <div className="lg:hidden text-center space-y-8">
          <div className="flex justify-center animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-110"></div>
              <img 
                src={headshotImage} 
                alt="Samantha Lewe - Fractional CMO" 
                className="relative w-48 h-48 rounded-full object-cover object-top shadow-strong border-4 border-background"
              />
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground leading-tight">
                Fractional CMO &
                <span className="text-primary block">Growth Catalyst</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Driving measurable growth for ambitious companies through data-driven marketing strategies, 
                scalable systems, and team leadership that delivers results.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
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
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block space-y-12">
          <div className="grid lg:grid-cols-[400px,1fr] gap-16 items-start">
            {/* Left Content - Headshot */}
            <div className="flex justify-center lg:justify-start animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110"></div>
                <img 
                  src={headshotImage} 
                  alt="Samantha Lewe - Fractional CMO" 
                  className="relative w-72 h-72 rounded-full object-cover object-top shadow-strong border-4 border-background"
                />
              </div>
            </div>

            {/* Right Content - Text */}
            <div className="space-y-6 animate-fade-in">
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
            </div>
          </div>
          
          {/* Buttons Below */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
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
      </div>
    </section>
  );
};

export default Hero;