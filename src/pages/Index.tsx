import React from 'react';
import { ExtensionHeader } from "@/components/ExtensionHeader";
import { JobPreferenceButton } from "@/components/JobPreferenceButton";
import { ResumeUploadButton } from "@/components/ResumeUploadButton";
import { ApplyButton } from "@/components/ApplyButton";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="bg-background flex flex-col h-full min-h-[600px] p-3">
      <ExtensionHeader />
      
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-xs rounded-xl border border-white/10 p-4 space-y-4 shadow-sm">
          <div className="space-y-3">
            <JobPreferenceButton />
            <ResumeUploadButton />
          </div>
          
          <Separator className="my-3 bg-border/40" />
          
          <ApplyButton />
        </div>
      </div>
    </div>
  );
};

export default Index;

