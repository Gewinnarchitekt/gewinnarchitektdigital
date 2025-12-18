import { Package, Wrench, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface SolutionSectionProps {}

const SolutionSection = ({}: SolutionSectionProps) => {
  const solutions = {
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
      ],
      caseStudyLink: "/fallstudie/angebotsgestaltung"
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
      ],
      caseStudyLink: "#"
    },
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
      ],
      caseStudyLink: "/fallstudie/angebotsstrategie"
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
                  <h3 className="!text-2xl font-semibold text-foreground">{solution.title}</h3>
                </div>

                {/* Einleitungstext */}
                <p className="text-muted-foreground mb-4">
                  {solution.intro}
                </p>

                {/* Zwischenüberschrift */}
                <p className="font-medium text-muted-foreground mb-3">verfügbare Services</p>

                {/* Services als Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {solution.services.map((service, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-muted rounded-full text-muted-foreground border border-border"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Fallstudie Button */}
                <div className="mt-auto flex justify-end">
                  {solution.caseStudyLink !== "#" ? (
                    <Link to={solution.caseStudyLink}>
                      <Button className="bg-gray-500 hover:bg-accent text-white hover:text-accent-foreground transition-colors">
                        Fallstudie
                      </Button>
                    </Link>
                  ) : (
                    <Button className="bg-gray-500 hover:bg-accent text-white hover:text-accent-foreground transition-colors" disabled>
                      Fallstudie
                    </Button>
                  )}
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
