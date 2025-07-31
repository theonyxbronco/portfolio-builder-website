import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WaitlistForm from "@/components/WaitlistForm";
import { ArrowRight, Zap, Shield, Rocket } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Revolutionize Your Workflow
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            The next-generation productivity platform that transforms the way you work, collaborate, and achieve your goals.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Get Early Access <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Our Product Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience seamless productivity with our innovative three-step approach
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Connect</h3>
                <p className="text-muted-foreground">
                  Seamlessly integrate all your tools and workflows into one unified platform
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Optimize</h3>
                <p className="text-muted-foreground">
                  AI-powered insights automatically optimize your processes for maximum efficiency
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Scale</h3>
                <p className="text-muted-foreground">
                  Grow your productivity exponentially with intelligent automation and scaling
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alpha Trial Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Try Our Closed Alpha</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get exclusive access to our cutting-edge platform before anyone else. 
            Limited spots available for early adopters.
          </p>
          
          <Card className="max-w-md mx-auto bg-gradient-card border-0 shadow-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Alpha Access</h3>
              <p className="text-muted-foreground mb-6">
                Experience the future of productivity today. Join our exclusive alpha program.
              </p>
              <Button variant="gradient" size="lg" className="w-full">
                Request Alpha Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <WaitlistForm />
        </div>
      </section>
    </div>
  );
};

export default Home;