import { Package, Wrench, Target, AlertCircle } from "lucide-react";
interface ProblemSectionProps {}
const ProblemSection = ({}: ProblemSectionProps) => {
  const problemCategories = [{
    icon: Target,
    title: "Planungsdefizite",
    problems: [{
      title: "Kundenbedürfnisse werden zu spät berücksichtigt",
      description: ""
    }, {
      title: "Innovationen werden am Markt vorbei entwickelt",
      description: ""
    }, {
      title: "Priorisierung ist nicht auf monetäres Wachstum ausgerichtet",
      description: ""
    }, {
      title: "Es fehlt eine langfristige Perspektive",
      description: ""
    }],
    highlight: "61% der Firmen bekunden Mühe, eine langfristige Strategie effektiv umzusetzen¹",
    color: "from-red-600 to-red-700"
  }, {
    icon: Wrench,
    title: "Umsetzungsprobleme",
    problems: [{
      title: "Daten über das Kundenverhalten werden nicht ausreichend genutzt",
      description: ""
    }, {
      title: "Es fehlen Ressourcen für die Identifikation von Umsatzopportunitäten",
      description: ""
    }, {
      title: "Mangelnde Expertise im Bereich Pricing & Monetarisierung",
      description: ""
    }, {
      title: "Isolierte Abteilungen und mangelnder Informationsaustausch",
      description: ""
    }],
    highlight: "66% des Potentials von Preisanpassungen geht durch falsche Prozesse verloren²",
    color: "from-red-600 to-red-700"
  }, {
    icon: Package,
    title: "Konzeptionsmängel",
    problems: [{
      title: "Der Mehrwert für den Kunden wird nicht klar kommuniziert",
      description: ""
    }, {
      title: "Intern kalkulierte Angebote widerspiegeln nicht den Kundenwert",
      description: ""
    }, {
      title: "Einheitsangebote ignorieren unterschiedliche Kundensegmente",
      description: ""
    }, {
      title: "Die Preislogik ist nicht auf das Kundenverhalten abgestimmt",
      description: ""
    }],
    highlight: "Das richtige Angebot bringt 20% mehr Umsatz³",
    color: "from-red-600 to-red-700"
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">Angebotsgestaltung ist komplex und herausfordernd</h2>
          <p className="text-xl text-muted-foreground mx-auto">Preise kalkulieren ist simpel – Margen maximieren eine Kunst</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {problemCategories.map((category, index) => {
          const IconComponent = category.icon;
          return <div key={index} className="flex flex-col">
                {/* Icon and Title above the boxes */}
                <div className="flex items-center justify-start mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                {/* Problem list - fixed height to align all boxes */}
                <div className="space-y-3 min-h-[320px]">
                  {category.problems.map((problem, problemIndex) => <div key={problemIndex} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors duration-200">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-lg text-foreground leading-snug">{problem.title}</p>
                    </div>)}
                </div>

                {/* Prominent conclusion box - fixed height for consistency */}
                <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-600 p-6 rounded-lg min-h-[120px] flex items-center justify-center">
                  <p className="font-bold text-center leading-tight text-red-600 dark:text-red-500 text-lg">
                    {category.highlight}
                  </p>
                </div>

                {/* Footnotes */}
                {index === 0 && <div className="text-center mt-4">
                    <p className="text-sm text-muted-foreground">
                      <a href="https://www.pmi.org/-/media/pmi/documents/public/pdf/learning/thought-leadership/why-good-strategies-fail-report.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        ¹Why Good Strategies Fail: Lessons for C-Suite | PMI Thought Leadership Series
                      </a>
                    </p>
                  </div>}

                {index === 1 && <div className="text-center mt-4">
                    <p className="text-sm text-muted-foreground">
                      <a href="https://www.mckinsey.com.br/capabilities/growth-marketing-and-sales/our-insights/defying-cost-volatility-a-strategic-pricing-response" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        ²The pricing response to cost volatility | McKinsey
                      </a>
                    </p>
                  </div>}

                {index === 2 && <div className="text-center mt-4">
                    <p className="text-sm text-muted-foreground">
                      <a href="https://www.simon-kucher.com/en/insights/profit-starts-packaging-and-pricing" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        ³Proven packaging and pricing designs | Simon Kucher
                      </a>
                    </p>
                  </div>}
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default ProblemSection;