import { Package, TrendingUp, Target } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import solutionBackground from "@/assets/solution-background.jpg";

interface SolutionSectionProps {}

const SolutionSection = ({}: SolutionSectionProps) => {
  const solutions = {
    "angebotsgestaltung": {
      icon: Package,
      title: "Angebotsgestaltung",
      overlayText: "Du erhältst profitable Angebote, die sich verkaufen lassen",
      descriptions: [
        "Die klare Spezifikation des Problems und der Vergleich mit bestehenden \"Jobs To Be Done\" ermöglicht die Erstellung eines marktorientierten Angebots.",
        "Dieses strukturiere ich gemäss neuesten Erkenntnissen aus der Verhaltensforschung und bringe die Pricinglogik in Einklang mit dem Kundenkaufentscheidungsprozess.",
        "Begleitet wird der Prozess mit quantitativen Analysen bezüglich Marktpotential, Gewinnerwartung und Liquiditätsentwicklung."
      ],
      note: "Optional besteht die Möglichkeit professioneller Marktforschung.",
      result: "Profitable Angebote, die sich verkaufen lassen"
    },
    "angebotsoptimierung": {
      icon: TrendingUp,
      title: "Angebotsoptimierung", 
      overlayText: "Du erhältst eine kontinuierliche Erhöhung deiner Gewinne",
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
      overlayText: "Du erhältst nachhaltige Wettbewerbsvorteile",
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

        <Tabs defaultValue="angebotsgestaltung" className="w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              {Object.entries(solutions).map(([key, solution]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <div className="aspect-square rounded-xl overflow-hidden relative">
                    <img 
                      src={solutionBackground} 
                      alt={solution.title} 
                      className="w-full h-full object-cover"
                    />
                    {/* Centered text overlay */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="w-full text-center">
                        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                          {solution.overlayText}
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2">
              {/* Tabs Selector */}
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="angebotsgestaltung" className="text-sm">
                  Angebotsgestaltung
                </TabsTrigger>
                <TabsTrigger value="angebotsoptimierung" className="text-sm">
                  Angebotsoptimierung
                </TabsTrigger>
                <TabsTrigger value="angebotsstrategie" className="text-sm">
                  Angebotsstrategie
                </TabsTrigger>
              </TabsList>

              {/* Content for each tab */}
              {Object.entries(solutions).map(([key, solution]) => {
                const IconComponent = solution.icon;
                return (
                  <TabsContent key={key} value={key} className="mt-0">
                    <div className="bg-card rounded-xl p-8 card-shadow">
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
                          <p key={descIndex} className="text-muted-foreground leading-relaxed">
                            {description}
                          </p>
                        ))}
                        
                        {solution.note && (
                          <p className="text-muted-foreground leading-relaxed italic">
                            {solution.note}
                          </p>
                        )}
                      </div>

                      <div className="space-y-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <p className="font-semibold text-green-800 mb-2">
                            Du erhältst:
                          </p>
                          <p className="font-semibold text-green-800">
                            {solution.result}
                          </p>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                            mehr erfahren!
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                );
              })}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default SolutionSection;