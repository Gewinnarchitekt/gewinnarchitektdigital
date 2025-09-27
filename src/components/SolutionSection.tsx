import { Package, TrendingUp, Target } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import angebotsgestaltungImage from "@/assets/solution-angebotsgestaltung.jpg";
import angebotsoptimierungImage from "@/assets/solution-angebotsoptimierung.jpg";
import angebotsstrategieImage from "@/assets/solution-angebotsstrategie.jpg";

interface SolutionSectionProps {}

const SolutionSection = ({}: SolutionSectionProps) => {
  const solutions = {
    "angebotsgestaltung": {
      icon: Package,
      title: "Angebotsgestaltung",
      image: angebotsgestaltungImage,
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
      image: angebotsoptimierungImage,
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
      image: angebotsstrategieImage,
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
              <TabsContent value="angebotsgestaltung" className="mt-0">
                <div className="aspect-square rounded-xl overflow-hidden h-full">
                  <img 
                    src={solutions.angebotsgestaltung.image} 
                    alt="Angebotsgestaltung" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </TabsContent>
              <TabsContent value="angebotsoptimierung" className="mt-0">
                <div className="aspect-square rounded-xl overflow-hidden h-full">
                  <img 
                    src={solutions.angebotsoptimierung.image} 
                    alt="Angebotsoptimierung" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </TabsContent>
              <TabsContent value="angebotsstrategie" className="mt-0">
                <div className="aspect-square rounded-xl overflow-hidden h-full">
                  <img 
                    src={solutions.angebotsstrategie.image} 
                    alt="Angebotsstrategie" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </TabsContent>
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
              <div className="h-[600px] lg:h-[500px]">
                {Object.entries(solutions).map(([key, solution]) => {
                  const IconComponent = solution.icon;
                  return (
                    <TabsContent key={key} value={key} className="mt-0 h-full">
                      <div className="bg-card rounded-xl p-8 card-shadow h-full flex flex-col">
                        <div className="flex items-center mb-6">
                          <div className="p-3 bg-primary/10 rounded-lg mr-4">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {solution.title}
                          </h3>
                        </div>

                        <div className="space-y-4 mb-8 flex-grow">
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

                        <div className="flex justify-center mt-auto">
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                            mehr erfahren!
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  );
                })}
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default SolutionSection;