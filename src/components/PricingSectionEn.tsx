import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface PricingSectionEnProps {}

const PricingSectionEn = ({}: PricingSectionEnProps) => {
  const packages = [
    {
      name: "Coaching",
      price: "CHF 290",
      period: "per month",
      link: "https://tidycal.com/gewinnarchitekt/angebotsstrategie",
      features: [
        "Access to expert\nknow-how",
        "2 video calls per month",
        "Personal chat channel",
        "cancel monthly",
      ],
    },
    {
      name: "Value",
      price: "CHF 2'900",
      period: "per month",
      link: "https://tidycal.com/gewinnarchitekt/angebotsoptimierung",
      features: [
        "Access to expert\nknow-how",
        "Weekly alignment",
        "Free service selection",
        "up to 2 services simultaneously",
        "cancel monthly",
      ],
    },
    {
      name: "Impact",
      price: "CHF 4'900",
      period: "per month",
      link: "https://tidycal.com/gewinnarchitekt/angebotsgestaltung",
      features: [
        "Access to expert\nknow-how",
        "Weekly alignment",
        "Free service selection",
        "up to 4 services simultaneously",
        "cancel monthly",
      ],
    },
    {
      name: "Fractional",
      price: "CHF 7'400",
      period: "per month",
      link: "https://tidycal.com/gewinnarchitekt/angebotsgestaltung",
      description: "Development or strategic leadership of the pricing function",
      features: [],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">Your All-in-One Partner for Profitable Offers</h2>
          <p className="text-xl text-muted-foreground mx-auto mb-8">
            Instead of individual projects, you receive continuous expertise at a fixed monthly price – flexible, transparent and tailored to your needs
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {packages.map((pkg, index) => {
            return (
              <div
                key={index}
                className="relative bg-card rounded-2xl p-8 card-shadow hover:elegant-shadow smooth-transition hover:-translate-y-1 flex flex-col"
              >
                <div className="flex items-center mb-6 pb-4 border-b border-border">
                  <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  {pkg.features.length > 0 ? (
                    pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3 min-h-[3rem]">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-lg text-muted-foreground whitespace-pre-line">
                          {feature}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-lg text-muted-foreground">
                      {(pkg as any).description}
                    </p>
                  )}
                </div>

                <div className="text-right mb-6 mt-auto">
                  <div className="text-2xl font-semibold text-foreground mb-1">
                    {pkg.price}
                  </div>
                  <div className="text-sm text-muted-foreground">{pkg.period}</div>
                </div>

                <a href={pkg.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full text-lg py-3 h-auto bg-gray-500 hover:bg-accent text-white hover:text-accent-foreground transition-colors">
                    Secure Offer
                  </Button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSectionEn;
