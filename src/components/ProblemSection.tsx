import { AlertTriangle, TrendingDown, Target } from "lucide-react";

interface ProblemSectionProps {}

const ProblemSection = ({}: ProblemSectionProps) => {
  const problemCategories = [
    {
      icon: AlertTriangle,
      title: "Konzeptionelle Fehler",
      problems: [
        {
          title: "Fehlt ein klares Werteversprechen, ignorieren dich die Kunden",
          description: "Ohne starkes Werteversprechen werden Angebote übersehen und potentieller Umsatz geht verloren."
        },
        {
          title: "Unterschiedliche Kundensegmente setzen ein differenziertes Angebot voraus",
          description: "Verschiedene Zielgruppen benötigen maßgeschneiderte Lösungen für optimale Ergebnisse."
        },
        {
          title: "Eine falsche Pricinglogik ruiniert die beste Lösung",
          description: "Fehlerhafte Preisstrategien können selbst die innovativsten Produkte zum Scheitern bringen."
        }
      ],
      highlight: "Das richtige Angebot bringt 20% mehr Umsatz¹",
      color: "from-red-500 to-red-600"
    },
    {
      icon: TrendingDown,
      title: "Kein Optimierungsprozess",
      problems: [
        {
          title: "Mangelnde Datengrundlagen machen Anpassungen zum Ratespiel",
          description: "Entscheidungen auf Basis unvollständiger Informationen führen zu suboptimalen Ergebnissen."
        },
        {
          title: "Transparenz ist die Voraussetzung für unternehmensweite Unterstützung",
          description: "Ohne klare Kommunikation fehlt die nötige Unterstützung der Organisation."
        },
        {
          title: "Gute Entscheidungen setzen Kenntnisse über Produkte- und Kundenprofitabilität voraus",
          description: "Fundierte Analysen sind essentiell für erfolgreiche Geschäftsentscheidungen."
        }
      ],
      highlight: "66% des Preispotentials geht durch falsche Prozesse verloren²",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Target,
      title: "Mangelhafte Planung",
      problems: [
        {
          title: "Das zu späte Berücksichtigen von Kundenbedürfnissen führt zu belanglosen Produkten",
          description: "Kundenorientierung muss von Anfang an in die Produktentwicklung einfließen."
        },
        {
          title: "Kurzfristig lassen sich keine nachhaltigen, strategische Vorteile erarbeiten",
          description: "Langfristige Planung ist entscheidend für dauerhaften Erfolg."
        },
        {
          title: "Klare Ziele sind die Voraussetzung für einen optimalen Ressourceneinsatz",
          description: "Ohne definierte Ziele werden Ressourcen ineffizient eingesetzt."
        }
      ],
      highlight: "88% Führungspersonen erachten strategische Planung als sehr wichtig/Essentiell³",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">
            Das Gewinnpotenial gut durchdachter Angebote wird oft übersehen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Für nachhaltiges, profitables Wachstum ist eine gut durchdachte Angebotsgestaltung unerlässlich und dennoch wird sie regelmässig vernachlässigt. Es fehlt oft an Transparenz über wesentliche Gewinntreiber, Kundenbedürfnisse werden zu spät berücksichtigt und wichtige Entscheidungen entstehen nach Bauchgefühl. Vielen Geschäftsführern und Produktverantwortlichen sind die Konsequenzen gar nicht bewusst.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {problemCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-card rounded-xl p-8 card-shadow hover:elegant-shadow smooth-transition">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-6 mb-8">
                  {category.problems.map((problem, problemIndex) => (
                    <div key={problemIndex} className="border-l-4 border-muted pl-4">
                      <h4 className="font-medium mb-2 text-foreground">
                        {problem.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {problem.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className={`p-4 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                  <p className="font-semibold text-center">
                    {category.highlight}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="text-sm text-muted-foreground space-y-1">
            <p>¹Proven packaging and pricing designs | Simon Kucher</p>
            <p>²The pricing response to cost volatility | McKinsey</p>
            <p>³Why Good Strategies Fail: Lessons for C-Suite | PMI Thought Leadership Series</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;