import { AlertTriangle, TrendingDown, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SolutionSectionProps {}

const SolutionSection = ({}: SolutionSectionProps) => {
  const solutions = {
    "angebotsgestaltung": {
      icon: AlertTriangle,
      title: "Angebotsgestaltung",
      color: "from-red-500 to-red-600",
      descriptions: [
        "Die klare Spezifikation des Problems und der Vergleich mit bestehenden \"Jobs To Be Done\" ermöglicht die Erstellung eines marktorientierten Angebots.",
        "Dieses strukturiere ich gemäss neuesten Erkenntnissen aus der Verhaltensforschung und bringe die Pricinglogik in Einklang mit dem Kundenkaufentscheidungsprozess.",
        "Begleitet wird der Prozess mit quantitativen Analysen bezüglich Marktpotential, Gewinnerwartung und Liquiditätsentwicklung."
      ],
      note: "Optional besteht die Möglichkeit professioneller Marktforschung.",
      result: "Profitable Angebote, die sich verkaufen lassen"
    },
    "angebotsoptimierung": {
      icon: TrendingDown,
      title: "Angebotsoptimierung",
      color: "from-orange-500 to-orange-600",
      descriptions: [
        "Detaillierte Produkt- und Kundenanalysen bringen Transparenz über den tatsächlich erzielten Gewinnbeitrag pro Angebot.",
        "Mit \"Soll-vs-Ist\" Vergleichen lassen sich ungewollte Umsatzverluste aufdecken und ein regelmässiges Erfolgsreporting identifiziert die wichtigsten Gewinntreiber.",
        "Monatlich besprechen wir die aktuellen Entwicklungen und besprechen Massnahmen zur Optimierung."
      ],
      note: undefined,
      result: "Kontinuierliche Erhöhung deiner Gewinne"
    },
    "angebotsstrategie": {
      icon: Target,
      title: "Angebotsstrategie",
      color: "from-yellow-500 to-yellow-600",
      descriptions: [
        "Holistische Business Cases erlauben die Beurteilung des erwarteten Mehrwerts von technologischen Produktanpassungen.",
        "In Kombination mit einer langfristigen Umsatzplanung ermöglichen diese die klare Priorisierung verschiedener Projekte bezüglich Kundennutzen und Gewinnbeitrag.",
        "Als strategische Partner unterstütze ich dich zudem beim Durchspielen verschiedener Angebotsstrategien und zeige Chancen und Gefahren auf."
      ],
      note: undefined,
      result: "Nachhaltige Wettbewerbsvorteile"
    }
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">
            So helfe ich dir, maximale Wertschöpfung aus dem Markt zu holen
          </h2>
        </div>

        {/* Table layout with 2 rows and 3 columns */}
        <div className="grid grid-cols-3 gap-8">
          {/* First row - Titles */}
          {Object.entries(solutions).map(([key, solution]) => {
            const IconComponent = solution.icon;
            return (
              <div key={`title-${key}`} className="flex items-center justify-center p-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${solution.color} mr-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {solution.title}
                </h3>
              </div>
            );
          })}
          
          {/* Second row - Content */}
          {Object.entries(solutions).map(([key, solution]) => (
            <div key={`content-${key}`} className="bg-card rounded-xl p-6 card-shadow hover:elegant-shadow smooth-transition h-[400px] flex flex-col">
              <div className="space-y-4 mb-6 flex-grow">
                {solution.descriptions.map((description, descIndex) => (
                  <p key={descIndex} className="text-muted-foreground leading-relaxed text-sm">
                    {description}
                  </p>
                ))}
                
                {solution.note && (
                  <p className="text-muted-foreground leading-relaxed italic text-sm">
                    {solution.note}
                  </p>
                )}
              </div>

              <div className="flex justify-center mt-auto">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  mehr erfahren!
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;