import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Zap, Crown } from "lucide-react";

interface PricingSectionProps {}

const PricingSection = ({}: PricingSectionProps) => {
  const packages = [
    {
      name: "Kundenzentrierte Angebotsgestaltung",
      subtitle: "Starthilfe",
      price: "CHF 2'500",
      period: "pro Monat¹",
      description: "Bi-weekly Abstimmungen",
      icon: Star,
      color: "from-green-500 to-green-600",
      features: [
        "Kundenanalysen",
        "Marktauswertungen", 
        "Tracking- und Plansysteme"
      ],
      highlight: false,
      coachingNote: "bi-weekly calls à 1 Std. CHF 350"
    },
    {
      name: "Kontinuierliche Angebotsoptimierung", 
      subtitle: "Gewinnbooster",
      price: "CHF 3'500",
      period: "pro Monat¹",
      description: "Wöchentliche Abstimmungen",
      icon: Zap,
      color: "from-blue-500 to-blue-600",
      features: [
        "Kundenanalysen",
        "Marktauswertungen",
        "Tracking- und Plansysteme",
        "Monatlicher Performancereport",
        "Abweichungsanalyse ggü. Vorjahr"
      ],
      highlight: true
    },
    {
      name: "Langfristige Angebotsstrategie",
      subtitle: "Sparringpartner", 
      price: "CHF 5'500",
      period: "pro Monat¹",
      description: "Abstimmungen nach Bedarf",
      icon: Crown,
      color: "from-purple-500 to-purple-600",
      features: [
        "Kundenanalysen",
        "Marktauswertungen", 
        "Tracking- und Plansysteme",
        "Monatlicher Performancereport",
        "Abweichungsanalyse ggü. Plan",
        "Business Cases",
        "Szenariomodellierungen",
        "Mittel- und Langfristplanung"
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">
            Mein Angebot an euch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ihr erhaltet spezialisierte Expertise, ohne teure Beratungsunternehmen beauftragen 
            oder Fachexperten anstellen zu müssen. Die Zusammenarbeit ist langfristig ausgelegt 
            und zielt auf eine Wertsteigerung eures Unternehmens ab.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div 
                key={index}
                className={`relative bg-card rounded-2xl p-8 ${
                  pkg.highlight 
                    ? 'ring-2 ring-accent elegant-shadow scale-105' 
                    : 'card-shadow hover:elegant-shadow'
                } smooth-transition hover:-translate-y-1`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Beliebteste Wahl
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${pkg.color} mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-accent uppercase tracking-wide">
                      {pkg.subtitle}
                    </div>
                    <h3 className="text-xl font-semibold mt-2 mb-4">
                      {pkg.name}
                    </h3>
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl font-bold text-foreground mb-2">
                      {pkg.price}
                    </div>
                    <div className="text-muted-foreground">
                      {pkg.period}
                    </div>
                    {pkg.coachingNote && (
                      <div className="text-sm text-muted-foreground mt-2">
                        Coachinghonorar<br />
                        {pkg.coachingNote}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={pkg.highlight ? "hero" : "outline"}
                  className="w-full text-lg py-3 h-auto"
                >
                  Angebot sichern
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            ¹exkl. MWST
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;