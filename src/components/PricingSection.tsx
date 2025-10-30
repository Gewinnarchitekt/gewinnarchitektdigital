import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Wrench, Target } from "lucide-react";
interface PricingSectionProps {}
const PricingSection = ({}: PricingSectionProps) => {
  const packages = [
    {
      name: "Angebotsstrategie",
      price: "CHF 6'000",
      period: "pro Monat¹",
      description: "Abstimmungen nach Bedarf",
      icon: Target,
      color: "from-green-600 to-green-700",
      features: [
        "Kundenanalysen",
        "Marktauswertungen",
        "Erfolgstracking",
        "Monatlicher Gewinntreiberreport",
        "Abweichungsanalyse ggü. Plan",
        "Finanzmodelle",
        "Szenariomodellierungen",
        "Mittel- und Langfristplanung",
      ],
    },
    {
      name: "Angebotsoptimierung",
      price: "CHF 4'000",
      period: "pro Monat¹",
      description: "Wöchentliche Abstimmungen",
      icon: Wrench,
      color: "from-green-600 to-green-700",
      features: [
        "Kundenanalysen",
        "Marktauswertungen",
        "Erfolgstracking",
        "Monatlicher Gewinntreiberreport",
        "Abweichungsanalyse ggü. Vorjahr",
      ],
    },
    {
      name: "Angebotsgestaltung",
      price: "CHF 2'500",
      period: "pro Monat¹",
      description: "Bi-weekly Abstimmungen",
      icon: Package,
      color: "from-green-600 to-green-700",
      features: ["Kundenanalysen", "Marktauswertungen", "Erfolgstracking"],
    },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">Mein Angebot an dich</h2>
          <p className="text-xl text-muted-foreground mx-auto mb-8">
            Du erhältst spezialisierte Expertise, ohne teure Beratungsunternehmen beauftragen oder Fachexperten
            anstellen zu müssen.
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
                  <h3 className="text-xl font-semibold text-foreground">{pkg.name}</h3>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, featureIndex) => {
                    const isAngebotsoptimierung = pkg.name === "Angebotsoptimierung";
                    const isAngebotsstrategie = pkg.name === "Angebotsstrategie";
                    
                    const shouldNotBeBold = 
                      (isAngebotsoptimierung && ["Kundenanalysen", "Marktauswertungen", "Erfolgstracking"].includes(feature)) ||
                      (isAngebotsstrategie && ["Kundenanalysen", "Marktauswertungen", "Erfolgstracking", "Monatlicher Gewinntreiberreport"].includes(feature));
                    
                    return (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className={`text-base text-muted-foreground ${shouldNotBeBold ? '' : 'font-semibold'}`}>
                          {feature}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="text-center mb-6 mt-auto">
                  <div className="text-4xl font-bold text-foreground mb-2">{pkg.price}</div>
                  <div className="text-muted-foreground">{pkg.period}</div>
                </div>

                <Button className="w-full text-lg py-3 h-auto bg-gray-500 hover:bg-accent text-white hover:text-accent-foreground transition-colors">
                  Angebot sichern
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">¹exkl. MWST</p>
        </div>
      </div>
    </section>
  );
};
export default PricingSection;
