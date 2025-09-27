import { AlertTriangle, TrendingDown, Target } from "lucide-react";

interface ProblemSectionProps {}

const ProblemSection = ({}: ProblemSectionProps) => {
  const problemCategories = [
    {
      icon: AlertTriangle,
      title: "Akzeptanz",
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
          title: "Einheitsangebote ignorieren unterschiedliche Kundensegmente",
          description: ""
        },
        {
          title: "Die Preislogik ist nicht auf das Kundenverhalten abgestimmt",
          description: ""
        }
      ],
      highlight: "Das richtige Angebot bringt 20% mehr Umsatz¹",
      color: "from-red-600 to-red-700"
    },
    {
      icon: TrendingDown,
      title: "Leistungserbingung",
      problems: [
        {
          title: "Daten über das Kundenverhalten werden nicht ausreichend genutzt",
          description: ""
        },
        {
          title: "Limitierte Ressourcen zur Identifikation von Opportunitäten",
          description: ""
        },
        {
          title: "Mangelnde Expertise im Bereich Pricing & Monetarisierung",
          description: ""
        },
        {
          title: "Isolierte Abteilungen und mangelnder Informationsaustausch",
          description: ""
        }
      ],
      highlight: "66% des Preispotentials geht durch falsche Prozesse verloren²",
      color: "from-red-600 to-red-700"
    },
    {
      icon: Target,
      title: "Planung",
      problems: [
        {
          title: "Kundenbedürfnisse werden zu spät berücksichtigt",
          description: ""
        },
        {
          title: "Innovationen werden am Markt vorbei entwickelt",
          description: ""
        },
        {
          title: "Priorisierung ist nicht auf monetäres Wachstum ausgerichtet",
          description: ""
        },
        {
          title: "Es fehlt eine langfristige Perspektive",
          description: ""
        }
      ],
      highlight: "88% Führungspersonen erachten strategische Planung als sehr wichtig/Essentiell³",
      color: "from-red-600 to-red-700"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">
            Das Gewinnpotenial gut durchdachter Angebote wird oft übersehen
          </h2>
          <p className="text-xl text-muted-foreground mx-auto">
            Digitale Produkte stehen online in direkter Konkurrenz zueinander und die Leistungserbringung erfolgt meist ohne direkten Kundenkontakt. Eine gewinnbringende Angebotsgestaltung wird dadurch zur erfolgskritischen Disziplin mit spezifischen Herausforderungen.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {problemCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="space-y-6">
                {/* Icon and Title above the boxes */}
                <div className="flex items-center justify-center">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                {/* Individual boxes for each problem */}
                <div className="space-y-4">
                  {category.problems.map((problem, problemIndex) => (
                    <div key={problemIndex} className="bg-card rounded-lg p-4 card-shadow hover:elegant-shadow smooth-transition h-20 flex items-center">
                      <h4 className="text-muted-foreground leading-tight">
                        {problem.title}
                      </h4>
                      {problem.description && (
                        <p className="text-sm text-muted-foreground mt-2">
                          {problem.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Highlight box */}
                <div className="p-4 rounded-lg bg-transparent h-20 flex items-center justify-center">
                  <p className="font-bold text-center leading-tight text-red-600">
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