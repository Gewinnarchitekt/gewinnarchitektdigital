import { AlertTriangle, TrendingDown, Target } from "lucide-react";

interface ProblemSectionProps {}

const ProblemSection = ({}: ProblemSectionProps) => {
  const problemCategories = [
    {
      icon: AlertTriangle,
      title: "Hohe Kundenakzeptanz",
      problems: [
        {
          title: "Der Mehrwert für den Kunden wird nicht klar kommuniziert",
          description: ""
        },
        {
          title: "Intern kalkulierte Angebote widerspiegeln nicht den Kundenwert",
          description: ""
        },
        {
          title: "Einheitsangebote ignorieren die Bedürfnisse unterschiedlicher Kundensegmente",
          description: ""
        },
        {
          title: "Die Preislogik wirkt stärker als einzelne Preispunkte",
          description: ""
        }
      ],
      highlight: "Das richtige Angebot bringt 20% mehr Umsatz¹",
      color: "from-red-500 to-red-600"
    },
    {
      icon: TrendingDown,
      title: "Transparente Leistungserbringung",
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
      title: "Langfristige Planung",
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
            Digitale Produkte stehen online in direkter Konkurrenz zueinander und die Leistungserbringung erfolgt meist ohne direkten Kundenkontakt. Eine gewinnbringende Angebotsgestaltung wird dadurch zur erfolgskritischen Disziplin mit spezifischen Herausforderungen.
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