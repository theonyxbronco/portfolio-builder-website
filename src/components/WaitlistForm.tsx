import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface WaitlistFormProps {
  title?: string;
  subtitle?: string;
}

const WaitlistForm = ({ 
  title = "Join the Beta Waitlist",
  subtitle = "Be the first to experience the future of productivity"
}: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Successfully joined waitlist!",
      description: "We'll notify you when beta access is available.",
    });
    
    setEmail("");
    setIsLoading(false);
  };

  return (
    <div className="bg-gradient-card p-8 rounded-lg shadow-elegant border">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button 
          type="submit" 
          variant="gradient" 
          disabled={isLoading}
          className="sm:w-auto"
        >
          {isLoading ? "Joining..." : "Join Waitlist"}
        </Button>
      </form>
    </div>
  );
};

export default WaitlistForm;