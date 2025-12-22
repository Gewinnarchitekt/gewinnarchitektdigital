import { CheckCircle, Handshake, Zap, Users, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const PartnerSectionEn = () => {
  const synergies = [
    {
      icon: Handshake,
      title: "All-in-One Solution",
      description: "Pricing expertise + marketing execution perfectly aligned"
    },
    {
      icon: Zap,
      title: "Faster Results",
      description: "Parallel optimization of offers and visibility"
    },
    {
      icon: Users,
      title: "No Friction",
      description: "Coordinated strategies without communication gaps"
    },
    {
      icon: TrendingUp,
      title: "Monthly Flexibility",
      description: "Both services without long-term commitment"
    }
  ];

  const einfachmarketingServices = [
    "Personal Marketing Manager",
    "Specialists for SEO, Social, Ads, Video & Graphics",
    "State-of-the-art AI Marketing Technologies",
    "Over €1M managed advertising budgets"
  ];

  return (
    <section id="partner" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Strategic Partnership</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Stronger Together: <span className="text-primary">Your Complete Solution</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Perfect pricing without marketing means no visibility. 
            Great marketing without optimized offers means missed margins. 
            Together, we solve both.
          </p>
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-stretch max-w-6xl mx-auto">
          
          {/* Gewinnarchitekt Side */}
          <div className="bg-card border border-border rounded-2xl p-8 relative">
            <div className="absolute -top-4 left-8 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
              Pricing Expertise
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold mb-4">Gewinnarchitekt</h3>
              <p className="text-muted-foreground mb-6">
                Optimize your offer structure and maximize your margins with data-driven pricing strategy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Value-based pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Psychological price optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Conversion-optimized offer pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Strategic consulting & coaching</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Connector Element - Hidden on mobile */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold">+</span>
            </div>
          </div>

          {/* einfachmarketing.at Side */}
          <div className="bg-card border border-border rounded-2xl p-8 relative">
            <div className="absolute -top-4 left-8 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
              Marketing Power
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold mb-4">einfachmarketing.at</h3>
              <p className="text-muted-foreground mb-6">
                5x Top Company awarded marketing agency with full-service for your digital success.
              </p>
              <ul className="space-y-3">
                {einfachmarketingServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Connector */}
        <div className="flex lg:hidden justify-center -my-4 relative z-10">
          <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-xl font-bold">+</span>
          </div>
        </div>

        {/* Synergy Benefits */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">
            The Benefits of Collaboration
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {synergies.map((synergy, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <synergy.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{synergy.title}</h4>
                <p className="text-sm text-muted-foreground">{synergy.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Interested in a holistic solution for pricing and marketing?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Complete Package
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://www.einfachmarketing.at', '_blank')}
            >
              Visit einfachmarketing.at
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSectionEn;
