import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";
import { 
  FolderKanban,     // Project Management
  Cloud,            // Storage 
  ScanLine,         // Auto-organization (scanning/sorting)
  Palette,          // Portfolio Builder (creative)
  RefreshCw,        // Portfolio Upkeeper (updating/syncing)
  Briefcase         // Career Opportunities
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: FolderKanban,
      title: "Projects Management",
      description: "Our PRM (Project Management System) allowes you to input and control your projects, their images, details, and assets into one place.",
      badge: null
    },
    {
      icon: Cloud,
      title: "Project Assets Storage",
      description: "You can safely store your projects, assets, and materials in our cloud servers and access them anywhere, anytime, on the go, or from any device.",
      badge: null
    },
    {
      icon: ScanLine,
      title: "Asset Auto-Organization",
      description: "Our platform automatically understands your files, sifts through them, and organizes them for you in a coherant and logical fashion.",
      badge: null
    },
    {
      icon: Palette,
      title: "Automated Portfolio Builder",
      description: "With one click of a button, you can generate multiple custom portfolio websites for projects you have selected to showcase. Just input a moodboard, style preferences, and custom inputs to create your own portfolio.",
      badge: "NEW"
    },
    {
      icon: RefreshCw,
      title: "Portfolio Upkeeper",
      description: "Our portfolio website builder always keeps your portfolio up to date when you add finishe projects to the PRM. We do all the updating and sorting in the background whilst you focus on creating.",
      badge: null
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "We're also building a job-hub specifically for creative work opportunities, because we believe that a good portfolio websites gets you a long way, and we want you to get paid for doing what you love.",
      badge: null
    },
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-semibold mb-3 bg-primary bg-clip-text text-transparent">
            Powerful Features
          </h1>
          <p className="text-xl text-primary opacity-60 max-w-2xl mx-auto">
            Discover the comprehensive suite of tools designed to transform your productivity 
            and streamline your workflow like never before.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300 group"
            >
              <CardContent className="p-8 cursor-default">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  {feature.badge && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-regular mb-3">{feature.title}</h3>
                <p className="text-primary opacity-60 font-light leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero p-12 rounded-2xl">
          <h2 className="text-3xl text-primary font-semibold mb-3">Ready to Experience These Features?</h2>
          <p className="text-lg text-primary opacity-60 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have already transformed their productivity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02]">
              Start Free Trial
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Link to="/pricing">
                View Pricing
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;