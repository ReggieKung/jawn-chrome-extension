
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface JobPreferences {
  jobTitle: string;
  jobType: string;
  location: string;
  salaryRange: string;
}

export function JobPreferenceButton() {
  const [preferences, setPreferences] = useState<JobPreferences>({
    jobTitle: "",
    jobType: "Full-time",
    location: "",
    salaryRange: "$80,000 - $100,000"
  });
  
  const [open, setOpen] = useState(false);
  
  const handleSave = () => {
    localStorage.setItem('jobPreferences', JSON.stringify(preferences));
    setOpen(false);
    toast.success("Job preferences saved");
  };
  
  const handleChange = (field: keyof JobPreferences, value: string) => {
    setPreferences(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full bg-secondary hover:bg-secondary/80 border border-border rounded-xl h-14 animate-in animate-slide-up"
        >
          Set Job Preferences
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] glass-morphism rounded-2xl border border-border/50 shadow-lg animate-in animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium">Job Preferences</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 animate-in-sequence">
          <div className="grid gap-2 animate-fade-in">
            <Label htmlFor="jobTitle" className="text-sm font-medium">Job Title</Label>
            <Input 
              id="jobTitle" 
              value={preferences.jobTitle} 
              onChange={(e) => handleChange('jobTitle', e.target.value)}
              className="h-10 rounded-xl border border-border/50 focus:ring-2 focus:ring-primary/30 transition-all"
              placeholder="Software Engineer"
            />
          </div>
          <div className="grid gap-2 animate-fade-in">
            <Label htmlFor="jobType" className="text-sm font-medium">Job Type</Label>
            <Select 
              value={preferences.jobType} 
              onValueChange={(value) => handleChange('jobType', value)}
            >
              <SelectTrigger id="jobType" className="h-10 rounded-xl border border-border/50 focus:ring-2 focus:ring-primary/30 transition-all">
                <SelectValue placeholder="Select job type" />
              </SelectTrigger>
              <SelectContent className="bg-popover/95 backdrop-blur-sm border border-border/50 rounded-xl shadow-md z-50">
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
                <SelectItem value="Freelance">Freelance</SelectItem>
                <SelectItem value="Internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2 animate-fade-in">
            <Label htmlFor="location" className="text-sm font-medium">Location</Label>
            <Input 
              id="location" 
              value={preferences.location} 
              onChange={(e) => handleChange('location', e.target.value)}
              className="h-10 rounded-xl border border-border/50 focus:ring-2 focus:ring-primary/30 transition-all"
              placeholder="San Francisco, CA (or Remote)"
            />
          </div>
          <div className="grid gap-2 animate-fade-in">
            <Label htmlFor="salaryRange" className="text-sm font-medium">Salary Range</Label>
            <Select 
              value={preferences.salaryRange} 
              onValueChange={(value) => handleChange('salaryRange', value)}
            >
              <SelectTrigger id="salaryRange" className="h-10 rounded-xl border border-border/50 focus:ring-2 focus:ring-primary/30 transition-all">
                <SelectValue placeholder="Select salary range" />
              </SelectTrigger>
              <SelectContent className="bg-popover/95 backdrop-blur-sm border border-border/50 rounded-xl shadow-md z-50">
                <SelectItem value="$40,000 - $60,000">$40,000 - $60,000</SelectItem>
                <SelectItem value="$60,000 - $80,000">$60,000 - $80,000</SelectItem>
                <SelectItem value="$80,000 - $100,000">$80,000 - $100,000</SelectItem>
                <SelectItem value="$100,000 - $120,000">$100,000 - $120,000</SelectItem>
                <SelectItem value="$120,000 - $150,000">$120,000 - $150,000</SelectItem>
                <SelectItem value="$150,000+">$150,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            onClick={handleSave} 
            className="mt-4 h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium shadow-md btn-ripple"
          >
            Save Preferences
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
