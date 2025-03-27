
import { ExtensionHeader } from "@/components/ExtensionHeader";
import { JobPreferenceButton } from "@/components/JobPreferenceButton";
import { ResumeUploadButton } from "@/components/ResumeUploadButton";
import { ApplyButton } from "@/components/ApplyButton";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 flex items-center justify-center p-4">
      <div className="w-full max-w-sm glass-morphism rounded-2xl shadow-xl border border-white/20 p-6 space-y-5">
        <ExtensionHeader />
        
        <div className="space-y-4">
          <JobPreferenceButton />
          <ResumeUploadButton />
        </div>
        
        <Separator className="my-6 bg-border/40" />
        
        <ApplyButton />
      </div>
    </div>
  );
};

export default Index;
