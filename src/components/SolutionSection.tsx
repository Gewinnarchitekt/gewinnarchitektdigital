import { CheckCircle, Lightbulb, BarChart3, Target, TrendingUp } from "lucide-react";

interface SolutionSectionProps {}

const SolutionSection = ({}: SolutionSectionProps) => {
  const solutions = [
    {
      icon: CheckCircle,
      title: "Klares Werteversprechen",
      description: "Durch Kundenbefragungen und Einzelkundenanalysen entsteht ein Werteversprechen, das bei Kunden auf Interesse stösst und erfolgreiche Abschlüsse generiert.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Lightbulb,
      title: "Strukturiertes Angebot",
      description: "Verhaltenspsychologische Prinzipien und einheitliche Kommunikationsstandards schaffen Transparenz und erleichtern Kaufentscheidungen.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Methodische Herangehensweise",
      description: "Strukturierte Datenerfassung und gezielte Analysen schaffen belastbare Entscheidungsgrundlagen, Risiken werden minimiert, Chancen früh erkannt und die Geschäftsentwicklung verbessert.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Zielgerichtete Angebotsentwicklung",
      description: "Datenbasierte Bedarfsanalysen ermöglichen eine gezielte Ausrichtung auf Kundensegmente mit der höchsten Zahlungsbereitschaft und steigern so die Profitabilität.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Strategischer Fahrplan",
      description: "Durch klare Zielsetzung und Szenarienplanung entsteht ein Fahrplan für Wachstum. Ressourcen werden gezielt eingesetzt, Potenziale optimal genutzt und die Profitabilität gesteigert.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">
            Diese Lösungsansätze versprechen Erfolg
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mit bewährten Methoden und strategischen Ansätzen helfe ich Unternehmen dabei, profitable Angebote zu entwickeln
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div 
                key={index} 
                className="bg-card rounded-xl p-8 card-shadow hover:elegant-shadow smooth-transition group hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {solution.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-xl p-8 card-shadow max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Ihr Weg zu mehr Erfolg
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Lassen Sie uns gemeinsam Ihre Angebotsstrategie optimieren und nachhaltiges Wachstum schaffen.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center space-x-2 text-primary">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Individuelle Beratung • Datenbasierte Lösungen • Langfristige Partnerschaften</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;