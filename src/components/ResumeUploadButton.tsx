
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Upload, File, CheckCircle } from "lucide-react";

export function ResumeUploadButton() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf' || file.name.endsWith('.docx') || file.name.endsWith('.doc')) {
        setResumeFile(file);
        // Store reference to file in localStorage (just the name for display purposes)
        localStorage.setItem('resumeFileName', file.name);
        toast.success("Resume uploaded successfully");
      } else {
        toast.error("Please upload a PDF or Word document");
      }
    }
  };
  
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full animate-in animate-slide-up" style={{ animationDelay: '100ms' }}>
      <input 
        type="file" 
        accept=".pdf,.doc,.docx" 
        className="hidden" 
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <Button 
        variant="outline" 
        className={`w-full rounded-xl h-14 border border-border group transition-all duration-300 ${
          resumeFile ? "bg-secondary/50 hover:bg-secondary/70" : "bg-secondary hover:bg-secondary/80"
        }`}
        onClick={handleClick}
      >
        <div className="flex items-center justify-center space-x-2">
          {resumeFile ? (
            <>
              <CheckCircle className="h-5 w-5 text-success animate-scale-in" />
              <span className="truncate max-w-[180px]">{resumeFile.name}</span>
            </>
          ) : (
            <>
              <Upload className="h-5 w-5 mr-2 group-hover:translate-y-[-2px] transition-transform" />
              <span>Upload Resume</span>
            </>
          )}
        </div>
      </Button>
    </div>
  );
}
