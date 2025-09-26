import { AlertTriangle, TrendingDown, Target } from "lucide-react";

interface ProblemSectionProps {}

const ProblemSection = ({}: ProblemSectionProps) => {
  const problemCategories = [
    {
      icon: AlertTriangle,
      title: "Fehlende Akzeptanz",
      problems: [
        {
          title: "Kostenorientierte Preisbildung",
          description: "Preise basierend auf internen Kosten ignorieren den wahrgenommenen Kundenwert"
        },
        {
          title: "Fehlende Wertkommunikation",
          description: "Ohne klare Kommunikation des Nutzens verstehen Kunden den Wert nicht"
        },
        {
          title: "One-Size-Fits-All",
          description: "Einheitslösungen verfehlen die spezifischen Bedürfnisse verschiedener Kundensegmente"
        },
        {
          title: "Falsche Pricinglogik",
          description: "Die Preislogik hat einen grösseren Einfluss auf den Kaufentscheid als die finalen Preispunkte"
        }
      ],
      highlight: "Das richtige Angebot bringt 20% mehr Umsatz¹",
      color: "from-red-500 to-red-600"
    },
    {
      icon: TrendingDown,
      title: "Ungenutztes Potential",
      problems: [
        {
          title: "Limitierte Ressourcen",
          description: "Mangelnde personelle und finanzielle Mittel verhindern die optimale Umsetzung von Strategien"
        },
        {
          title: "Schlechte Datenlage",
          description: "Unvollständige oder veraltete Informationen erschweren fundierte Geschäftsentscheidungen erheblich"
        },
        {
          title: "Schwache Expertise",
          description: "Fehlendes Know-how in kritischen Bereichen führt zu suboptimalen Entscheidungen und Ergebnissen"
        },
        {
          title: "Silodenken",
          description: "Isolierte Abteilungen arbeiten gegeneinander statt miteinander, was zu ineffizienten Prozessen führt"
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
            Für nachhaltiges, profitables Wachstum ist eine gut durchdachte Angebotsgestaltung unerlässlich und dennoch wird sie regelmässig vernachlässigt. Viele Geschäftsführer und Produktverantwortliche sind sich der diesbezüglichen Konsequenzen nicht bewusst.
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