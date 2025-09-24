import { Package, TrendingUp, Target } from "lucide-react";

interface SolutionSectionProps {}

const SolutionSection = ({}: SolutionSectionProps) => {
  const solutions = [
    {
      icon: Package,
      title: "Angebotsgestaltung",
      descriptions: [
        "Die klare Spezifikation des Problems und der Vergleich mit bestehenden \"Jobs To Be Done\" ermöglicht die Erstellung eines marktorientierten Angebots.",
        "Dieses strukturiere ich gemäss neuesten Erkenntnissen aus der Verhaltensforschung und bringe die Pricinglogik in Einklang mit dem Kundenkaufentscheidungsprozess.",
        "Begleitet wird der Prozess mit quantitativen Analysen bezüglich Marktpotential, Gewinnerwartung und Liquiditätsentwicklung."
      ],
      note: "Optional besteht die Möglichkeit professioneller Marktforschung.",
      result: "Profitable Angebote, die sich verkaufen lassen"
    },
    {
      icon: TrendingUp,
      title: "Angebotsoptimierung",
      descriptions: [
        "Detaillierte Produkt- und Kundenanalysen bringen Transparenz über den tatsächlich erzielten Gewinnbeitrag pro Angebot.",
        "Mit \"Soll-vs-Ist\" Vergleichen lassen sich ungewollte Umsatzverluste aufdecken und ein regelmässiges Erfolgsreporting identifiziert die wichtigsten Gewinntreiber.",
        "Monatlich besprechen wir die aktuellen Entwicklungen und besprechen Massnahmen zur Optimierung."
      ],
      result: "Kontinuierliche Erhöhung deiner Gewinne"
    },
    {
      icon: Target,
      title: "Angebotsstrategie",
      descriptions: [
        "Holistische Business Cases erlauben die Beurteilung des erwarteten Mehrwerts von technologischen Produktanpassungen.",
        "In Kombination mit einer langfristigen Umsatzplanung ermöglichen diese die klare Priorisierung verschiedener Projekte bezüglich Kundennutzen und Gewinnbeitrag.",
        "Als strategische Partner unterstütze ich dich zudem beim Durchspielen verschiedener Angebotsstrategien und zeige Chancen und Gefahren auf."
      ],
      result: "Nachhaltige Wettbewerbsvorteile"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">
            So helfe ich dir, maximale Wertschöpfung aus dem Markt zu holen
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div 
                key={index} 
                className="bg-card rounded-xl p-8 card-shadow hover:elegant-shadow smooth-transition"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {solution.title}
                  </h3>
                </div>

                <div className="space-y-4 mb-8">
                  {solution.descriptions.map((description, descIndex) => (
                    <p key={descIndex} className="text-muted-foreground leading-relaxed text-sm">
                      {description}
                    </p>
                  ))}
                  
                  {solution.note && (
                    <p className="text-muted-foreground leading-relaxed text-sm italic">
                      {solution.note}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-foreground mb-2">Du erhältst:</p>
                </div>

                <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 text-center">
                  <p className="font-semibold text-green-800">
                    {solution.result}
                  </p>
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