import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WaitlistForm from "@/components/WaitlistForm";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "5",
      period: "month",
      description: "Perfect for individuals getting started with productivity optimization",
      features: [
        "Up to 3 projects",
        "Basic analytics",
        "Email support",
        "5GB storage",
        "Mobile app access",
        "Basic integrations"
      ],
      isPopular: false
    },
    {
      name: "Professional",
      price: "15",
      period: "month",
      description: "Ideal for small teams and growing businesses",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "50GB storage",
        "Team collaboration",
        "All integrations",
        "Custom workflows",
        "API access"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "30",
      period: "month",
      description: "Complete solution for large teams and organizations",
      features: [
        "Everything in Professional",
        "Advanced security",
        "Dedicated support",
        "Unlimited storage",
        "Custom branding",
        "SSO integration",
        "Advanced reporting",
        "On-premise deployment",
        "24/7 phone support"
      ],
      isPopular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core features 
            with no hidden fees or surprise charges.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300 ${
                plan.isPopular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">€{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="p-8 pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.isPopular ? "gradient" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.isPopular ? "Get Started" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I change my plan anytime?</h3>
                <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-muted-foreground">We offer a 14-day free trial for all plans. No credit card required to get started.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Beta Waitlist Section */}
        <div className="max-w-4xl mx-auto">
          <WaitlistForm 
            title="Join the Beta Program"
            subtitle="Get early access to all features at a special discounted rate"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;