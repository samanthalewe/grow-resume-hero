import { Code2 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const VibeBanner = () => {
  return (
    <div className="bg-primary/10 border-b border-border py-2 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold text-foreground">Samantha Lewe</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground">San Diego, CA</span>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default VibeBanner;