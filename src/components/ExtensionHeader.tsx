
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export function ExtensionHeader() {
  return (
    <div className="flex justify-between items-center mb-6 animate-in animate-fade-in">
      <h1 className="text-2xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        AutoApply
      </h1>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full w-8 h-8">
              <Info className="h-4 w-4 text-muted-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-background/95 backdrop-blur-sm border border-border/50 shadow-md rounded-xl">
            <p className="max-w-[180px] text-xs">
              AutoApply helps you apply to jobs automatically based on your preferences and uploaded resume.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
