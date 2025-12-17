import { Package, Wrench, Target } from "lucide-react";

interface SolutionSectionProps {}

const SolutionSection = ({}: SolutionSectionProps) => {
  const solutions = {
    angebotsstrategie: {
      icon: Target,
      title: "Angebotsstrategie",
      intro: "In einem dynamischen Markt willst du nachhaltiges Gewinnwachstum sicherstellen.",
      services: [
        "Marktforschung",
        "Financial Modeling",
        "Szenarioanalyse",
        "Forecasting",
        "3-Statement Modell",
        "Portfolio Assessment",
        "Preisstrategie",
        "Pricing Governance",
        "CLV Optimierung"
      ]
    },
    angebotsoptimierung: {
      icon: Wrench,
      title: "Angebotsoptimierung",
      intro: "Du verkaufst deine Angebote erfolgreich, aber dir fehlt ein systematisches Controlling.",
      services: [
        "Einzelkundenanalyse",
        "Kundensegmentierung",
        "Erfolgstracking",
        "Liquiditätsplanung",
        "Margenoptimierung",
        "Gewinntreiberstruktur",
        "Dynamic Pricing",
        "AI-Kostenkontrolle",
        "Churn prevention"
      ]
    },
    angebotsgestaltung: {
      icon: Package,
      title: "Angebotsgestaltung",
      intro: "Du stehst vor der Herausforderung, deine Angebote grundlegend zu überdenken.",
      services: [
        "Konkurenzauswertung",
        "Kundenbefragung",
        "Value Proposition",
        "Conjoint Analyse",
        "Preisarchitektur",
        "Packaging & Bundling",
        "Preispunktoptimierung",
        "AI-Kostenprognose",
        "Sales Enablement"
      ]
    }
  };

  return (
    <section id="leistungen" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">Systematisch zu profitablen Angeboten</h2>
          <p className="text-xl text-muted-foreground">
            Egal ob du gerade startest, kontinuierlich optimieren oder langfristig wachsen willst – ich biete Lösungen für jede Phase deines Unternehmens.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {Object.entries(solutions).map(([key, solution]) => {
            const IconComponent = solution.icon;
            return (
              <div key={key} className="bg-card rounded-xl p-6 card-shadow hover:elegant-shadow smooth-transition flex flex-col">
                {/* Header mit Icon und Titel */}
                <div className="flex items-center mb-4 pb-4 border-b border-border">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-600 to-green-700 mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="!text-xl font-semibold text-foreground">{solution.title}</h3>
                </div>

                {/* Einleitungstext */}
                <p className="italic text-muted-foreground mb-4">
                  {solution.intro}
                </p>

                {/* Zwischenüberschrift */}
                <p className="font-medium text-muted-foreground mb-3">verfügbare Services</p>

                {/* Services als Tags */}
                <div className="flex flex-col gap-2">
                  {solution.services.map((service, index) => (
                    <span 
                      key={index}
                      className="w-full px-3 py-1 bg-muted rounded-full text-muted-foreground border border-border text-center"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
