import { Package, Wrench, Target } from "lucide-react";
interface ProblemSectionProps {}
const ProblemSection = ({}: ProblemSectionProps) => {
  const problemCategories = [
    {
      icon: Target,
      title: "Planung",
      problems: [
        {
          title: "Kundenbedürfnisse werden zu spät berücksichtigt",
          description: "",
        },
        {
          title: "Innovationen werden am Markt vorbei entwickelt",
          description: "",
        },
        {
          title: "Priorisierung ist nicht auf monetäres Wachstum ausgerichtet",
          description: "",
        },
        {
          title: "Es fehlt eine langfristige Perspektive",
          description: "",
        },
      ],
      highlight: "61% der Firmen bekunden Mühe, eine langfristige Strategie effektiv umzusetzen³",
      color: "from-red-600 to-red-700",
    },
    {
      icon: Wrench,
      title: "Umsetzung",
      problems: [
        {
          title: "Daten über das Kundenverhalten werden nicht ausreichend genutzt",
          description: "",
        },
        {
          title: "Es fehlen Ressourcen für die Identifikation von Umsatzopportunitäten",
          description: "",
        },
        {
          title: "Mangelnde Expertise im Bereich Pricing & Monetarisierung",
          description: "",
        },
        {
          title: "Isolierte Abteilungen und mangelnder Informationsaustausch",
          description: "",
        },
      ],
      highlight: "66% des Potentials von Preisanpassungen geht durch falsche Prozesse verloren²",
      color: "from-red-600 to-red-700",
    },
    {
      icon: Package,
      title: "Konzeption",
      problems: [
        {
          title: "Der Mehrwert für den Kunden wird nicht klar kommuniziert",
          description: "",
        },
        {
          title: "Intern kalkulierte Angebote widerspiegeln nicht den Kundenwert",
          description: "",
        },
        {
          title: "Einheitsangebote ignorieren unterschiedliche Kundensegmente",
          description: "",
        },
        {
          title: "Die Preislogik ist nicht auf das Kundenverhalten abgestimmt",
          description: "",
        },
      ],
      highlight: "Das richtige Angebot bringt 20% mehr Umsatz¹",
      color: "from-red-600 to-red-700",
    },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">Die Angebotsgestaltung entscheidet über Erfolg und Misserfolg</h2>
          <p className="text-xl text-muted-foreground mx-auto">
            Sie macht den Unterschied zwischen nachhaltigen Gewinnen und kurzfristigen Verkaufsaktionen.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {problemCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="flex flex-col h-full">
                {/* Icon and Title above the boxes */}
                <div className="flex items-center justify-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                {/* Individual boxes for each problem */}
                <div
                  className="space-y-4 mb-6"
                  style={{
                    height: "380px",
                  }}
                >
                  {category.problems.map((problem, problemIndex) => (
                    <div
                      key={problemIndex}
                      className="bg-card rounded-lg p-4 card-shadow hover:elegant-shadow smooth-transition h-20 flex items-center"
                    >
                      <h4 className="text-base text-muted-foreground leading-tight">{problem.title}</h4>
                      {problem.description && (
                        <p className="text-sm text-muted-foreground mt-2">{problem.description}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Highlight box - aligned to bottom */}
                <div className="p-4 rounded-lg bg-transparent h-20 flex items-center justify-center">
                  <p className="font-semibold text-center leading-tight text-red-600">{category.highlight}</p>
                </div>

                {/* Footnotes */}
                {index === 0 && (
                  <div className="text-center mt-4">
                    <p className="text-sm text-muted-foreground">
                      <a
                        href="https://www.pmi.org/-/media/pmi/documents/public/pdf/learning/thought-leadership/why-good-strategies-fail-report.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        ³Why Good Strategies Fail: Lessons for C-Suite | PMI Thought Leadership Series
                      </a>
                    </p>
                  </div>
                )}

                {index === 1 && (
                  <div className="text-center mt-4">
                    <p className="text-sm text-muted-foreground">
                      <a
                        href="https://www.mckinsey.com.br/capabilities/growth-marketing-and-sales/our-insights/defying-cost-volatility-a-strategic-pricing-response"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        ²The pricing response to cost volatility | McKinsey
                      </a>
                    </p>
                  </div>
                )}

                {index === 2 && (
                  <div className="text-center mt-4">
                    <p className="text-sm text-muted-foreground">
                      <a
                        href="https://www.simon-kucher.com/en/insights/profit-starts-packaging-and-pricing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        ¹Proven packaging and pricing designs | Simon Kucher
                      </a>
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ProblemSection;
