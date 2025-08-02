import { Code2 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const VibeBanner = () => {
  return (
    <div className="bg-primary/10 border-b border-border py-2 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Code2 className="w-4 h-4 text-primary" />
          <span>This is a vibe coding project</span>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default VibeBanner;