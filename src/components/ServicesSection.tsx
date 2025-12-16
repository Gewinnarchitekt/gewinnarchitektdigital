import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const servicesData = [
  {
    title: "Starthilfe – Services",
    services: [
      "Kundenbedarfsanalyse & Segmentierung",
      "Value Proposition Design",
      "Pricing-Architektur aufbauen",
      "Conjoint-Analysen für neue Angebote",
      "Kostenstruktur-Transparenz",
      "Preispsychologie im Angebotsdesign",
      "Kommunikationsleitfaden für dein Sales-Team",
      "Quick-Win-Identifikation",
    ],
  },
  {
    title: "Gewinnbooster – Services",
    services: [
      "Monatliches Performance-Controlling",
      "Pricing-Experimente & A/B-Tests",
      "Margin-Überwachung nach Produkt & Kunde",
      "Wettbewerbs-Monitoring",
      "Dynamische Preisanpassungen",
      "Churn-Analyse & Gegenmassnahmen",
      "Upselling & Cross-Selling Optimierung",
      "Liquiditätsplanung mit Frühwarnsystem",
      "Benchmarking & Branchen-Vergleich",
      "ROI-Tracking für Marketing-Massnahmen",
    ],
  },
  {
    title: "Sparringpartner – Services",
    services: [
      "Strategische Marktforschung & Trendanalyse",
      "Szenariomodellierung für neue Geschäftsfelder",
      "Strategische Preispositionierung",
      "Portfolio-Bereinigung & Fokussierung",
      "Subscription-Modell-Entwicklung",
      "Customer Lifetime Value Maximierung",
      "Wachstumsszenarien & Investitionsentscheidungen",
      "Pricing-Governance etablieren",
      "Strategische Partnerschaften & Allianzen",
      "Exit-Readiness & Unternehmensbewertung",
      "Internationalisierungsstrategie",
      "Nachfolgeplanung & Übergabe",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meine Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entdecke die Services, die zu deiner Situation passen
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-5xl mx-auto space-y-4">
          {servicesData.map((category, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-5 text-lg font-semibold text-foreground hover:no-underline hover:bg-muted/50 transition-colors">
                {category.title}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-background border-l-4 border-l-primary rounded-md p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <p className="text-foreground font-medium">{service}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ServicesSection;
