import { Package, Wrench, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
interface SolutionSectionProps {}
const SolutionSection = ({}: SolutionSectionProps) => {
  const solutions = {
    angebotsstrategie: {
      icon: Target,
      title: "Angebotsstrategie",
      color: "from-green-600 to-green-700",
      descriptions: [
        "Als Sparringpartner unterstütze ich dich mit fundierten Entscheidungsgrundlagen und konstruktivem Feedback.",
        "Ich liefere dir ganzheitliche Finanzmodelle, die den tatsächlichen Mehrwert von Produktanpassungen messbar machen und eine vorausschauende Finanzplanung macht zukünftige Entwicklungen greifbar.",
        "Schwierige Entscheidungen zerlegen wir systematisch in ihre Einzelteile und bewerten die Risiken mit differenzierten Szenariomodellen.",
        "Du gewinnst Klarheit über profitable Wachstumsmöglichkeiten und den optimalen Ressourceneinsatz",
      ],
      note: undefined,
      result: "Nachhaltige Wettbewerbsvorteile",
    },
    angebotsoptimierung: {
      icon: Wrench,
      title: "Angebotsoptimierung",
      color: "from-green-600 to-green-700",
      descriptions: [
        "Durch Auswertung deiner Daten verschaffe ich dir Transparenz über dein Angebotsportfolio und zeige ungenutzte Ertragspotentiale auf.",
        "Detaillierte Produkt- und Kundenanalysen machen den tatsächlichen Erfolgsbeitrag jedes Angebots sichtbar und Soll-Ist-Vergleiche decken ungewollte Umsatzverluste auf.",
        "Ein systematisches Erfolgsreporting identifiziert die wichtigsten Hebel zur Gewinnsteigerung aus Angebots-, Kunden- und Unternehmenssicht.",
        "Monat für Monat verbessern wir gemeinsam deine Profitabilität mithilfe konkreter, datenbasierte Massnahmen",
      ],
      note: undefined,
      result: "Kontinuierliche Erhöhung deiner Gewinne",
    },
    angebotsgestaltung: {
      icon: Package,
      title: "Angebotsgestaltung",
      color: "from-green-600 to-green-700",
      descriptions: [
        "Durch Kundenbefragungen und Einzelkundenanalysen entsteht ein Wertversprechen, das bei deiner Zielgruppe auf Interesse stösst",
        "Die Angebotsstruktur wird nach verhaltenspsychologischen Prinzipien und einheitlichen Kommunikationsstandards gestaltet, die Transparenz schaffen und Kaufentscheidungen erleichtern",
        "Quantitative Analysen und kontinuierliches Erfolgstracking bieten dir zusätzliche Sicherheit bei der Markteinführung und ermöglichen laufende Optimierungen.",
        "Du erhältst Angebote, die sich verkaufen lassen und gleichzeitig die Profitabilität steigern.",
      ],
      note: "Optional besteht die Möglichkeit professioneller Marktforschung.",
      result: "Profitable Angebote, die sich verkaufen lassen",
    },
  };
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">Ich unterstütze in drei unterschiedlichen Phasen</h2>
          <p className="text-xl text-muted-foreground">Mit einer individuell auf dich abgestimmten Vorgehensweise</p>
        </div>

        {/* Grid layout with 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {Object.entries(solutions).map(([key, solution]) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={key}
                className="bg-card rounded-xl p-6 card-shadow hover:elegant-shadow smooth-transition flex flex-col"
              >
                {/* Icon and Title at the top of each box */}
                <div className="flex items-center mb-6 pb-4 border-b border-border">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${solution.color} mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{solution.title}</h3>
                </div>

                {/* Content */}
                <div className="space-y-4 mb-8 flex-grow">
                  {solution.descriptions.map((description, descIndex) => (
                    <p
                      key={descIndex}
                      className={`text-lg text-muted-foreground leading-relaxed hyphens-auto break-words ${(key === "angebotsstrategie" || key === "angebotsoptimierung" || key === "angebotsgestaltung") && descIndex === 3 ? "font-bold" : ""}`}
                      style={{ 
                        hyphenateLimitChars: '15 8 8',
                        WebkitHyphenateLimitChars: '15 8 8'
                      } as React.CSSProperties}
                    >
                      {description}
                    </p>
                  ))}
                </div>

                <div className="flex justify-center mt-auto"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default SolutionSection;
