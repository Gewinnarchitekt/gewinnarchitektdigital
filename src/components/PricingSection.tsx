import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface PricingSectionProps {}

const PricingSection = ({}: PricingSectionProps) => {
  const packages = [
    {
      name: "Do It Yourself",
      price: "CHF 290",
      period: "pro Monat",
      link: "https://tidycal.com/gewinnarchitekt/angebotsstrategie",
      features: [
        "Zugriff auf Experten\nKnow-How",
        "2 Video Calls im Monat",
        "Persönlicher Chatkanal",
      ],
    },
    {
      name: "Pick your Service",
      price: "CHF 2'900",
      period: "pro Monat",
      link: "https://tidycal.com/gewinnarchitekt/angebotsoptimierung",
      features: [
        "Zugriff auf Experten\nKnow-How",
        "Wöchentliches Alignment",
        "Freie Serviceauswahl",
        "bis zu 2 Services gleichzeitig",
        "CHF 1'000 pro zusätzlichem Service",
      ],
    },
    {
      name: "Share Ownership",
      price: "CHF 7'400",
      period: "pro Monat",
      link: "https://tidycal.com/gewinnarchitekt/angebotsgestaltung",
      features: [
        "Aufbau oder Leitung Preismanagement",
        "Führung von Transformationsprojekten",
        "Strategische Produktentwicklung",
      ],
    },
  ];

  return (
    <section id="angebot" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">Dein All-in-One Partner für profitable Angebote</h2>
          <p className="text-xl text-muted-foreground mx-auto mb-8">
            Statt einzelner Projekte erhältst du kontinuierliche Expertise zu einem festen monatlichen Preis – flexibel, transparent und auf deine Bedürfnisse zugeschnitten
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
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
                    Angebot sichern
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

export default PricingSection;
