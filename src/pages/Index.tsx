import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
};

export default Index;
