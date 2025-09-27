import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, TrendingDown, Target } from "lucide-react";

interface PricingSectionProps {}

const PricingSection = ({}: PricingSectionProps) => {
  const packages = [
    {
      name: "Angebotsgestaltung",
      price: "CHF 2'500",
      period: "pro Monat¹",
      description: "Bi-weekly Abstimmungen",
      icon: AlertTriangle,
      color: "from-green-600 to-green-700",
      features: [
        "Kundenanalysen",
        "Marktauswertungen", 
        "Tracking- und Plansysteme"
      ],
      coachingNote: "bi-weekly calls à 1 Std. CHF 350"
    },
    {
      name: "Angebotsoptimierung", 
      price: "CHF 3'500",
      period: "pro Monat¹",
      description: "Wöchentliche Abstimmungen",
      icon: TrendingDown,
      color: "from-green-600 to-green-700",
      features: [
        "Kundenanalysen",
        "Marktauswertungen",
        "Tracking- und Plansysteme",
        "Monatlicher Performancereport",
        "Abweichungsanalyse ggü. Vorjahr"
      ]
    },
    {
      name: "Angebotsstrategie",
      price: "CHF 5'500",
      period: "pro Monat¹",
      description: "Abstimmungen nach Bedarf",
      icon: Target,
      color: "from-green-600 to-green-700",
      features: [
        "Kundenanalysen",
        "Marktauswertungen", 
        "Tracking- und Plansysteme",
        "Monatlicher Performancereport",
        "Abweichungsanalyse ggü. Plan",
        "Business Cases",
        "Szenariomodellierungen",
        "Mittel- und Langfristplanung"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">
            Mein Angebot an dich
          </h2>
          <p className="text-xl text-muted-foreground mx-auto mb-8">
            Du erhältst spezialisierte Expertise, ohne teure Beratungsunternehmen beauftragen 
            oder Fachexperten anstellen zu müssen. Die Zusammenarbeit ist langfristig ausgelegt 
            und zielt auf eine Wertsteigerung deines Unternehmens ab.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div 
                key={index}
                className="relative bg-card rounded-2xl p-8 card-shadow hover:elegant-shadow smooth-transition hover:-translate-y-1 flex flex-col"
              >
                <div className="flex items-center mb-6 pb-4 border-b border-border">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${pkg.color} mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {pkg.name}
                  </h3>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Coaching offer box - only for first package */}
                {pkg.coachingNote && (
                  <div className="mb-4 p-3 bg-muted rounded-lg border">
                    <div className="text-sm text-muted-foreground text-center">
                      <div className="font-medium">Coachingoffer</div>
                      <div>{pkg.coachingNote}</div>
                    </div>
                  </div>
                )}

                <div className="text-center mb-6 mt-auto">
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {pkg.price}
                  </div>
                  <div className="text-muted-foreground">
                    {pkg.period}
                  </div>
                </div>

                <Button 
                  className="w-full text-lg py-3 h-auto bg-gray-500 hover:bg-accent text-white hover:text-accent-foreground transition-colors"
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