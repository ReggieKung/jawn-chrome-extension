
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function ApplyButton() {
  const [applying, setApplying] = useState(false);
  
  const handleApply = async () => {
    // Check if resume and preferences exist
    const hasResume = localStorage.getItem('resumeFileName');
    const hasPreferences = localStorage.getItem('jobPreferences');
    
    if (!hasResume) {
      toast.error("Please upload your resume first");
      return;
    }
    
    if (!hasPreferences) {
      toast.error("Please set your job preferences first");
      return;
    }
    
    setApplying(true);
    
    // Simulate application process
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Job application submitted successfully");
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setApplying(false);
    }
  };

  return (
    <Button 
      onClick={handleApply}
      disabled={applying}
      className="w-full h-16 rounded-xl mt-4 bg-primary hover:bg-primary/90 text-white font-medium shadow-lg transition-all duration-300 btn-ripple animate-in animate-slide-up"
      style={{ animationDelay: '200ms' }}
    >
      {applying ? (
        <div className="flex items-center">
          <Loader2 className="h-5 w-5 animate-spin mr-2" />
          <span>Applying...</span>
        </div>
      ) : (
        <span className="text-lg font-medium">Apply Now</span>
      )}
    </Button>
  );
}
