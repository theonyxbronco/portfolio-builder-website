import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Rocket, 
  Brain, 
  Users, 
  BarChart3,
  Clock,
  Lock,
  Smartphone
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms analyze your workflow patterns and provide actionable insights to boost productivity by up to 40%.",
      badge: "Popular"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time collaboration tools that keep your team synchronized across projects, with instant notifications and seamless file sharing.",
      badge: "New"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards and reporting tools that give you deep insights into performance metrics and productivity trends.",
      badge: null
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Smart scheduling and time tracking features that help you optimize your daily routine and eliminate time waste.",
      badge: null
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols ensure your data is always protected with 99.9% uptime guarantee.",
      badge: "Enterprise"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Fully responsive design with native mobile apps for iOS and Android, allowing you to stay productive anywhere.",
      badge: null
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with sub-second response times and instant synchronization across all your devices.",
      badge: null
    },
    {
      icon: Shield,
      title: "Data Privacy",
      description: "Your data belongs to you. We never sell or share your information, with full GDPR and CCPA compliance.",
      badge: null
    },
    {
      icon: Rocket,
      title: "Scalable Platform",
      description: "Built to grow with you, from individual users to enterprise teams of thousands, with flexible infrastructure.",
      badge: null
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Powerful Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  {feature.badge && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience These Features?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have already transformed their productivity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;