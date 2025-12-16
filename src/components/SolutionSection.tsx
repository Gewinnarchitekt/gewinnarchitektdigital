import { Button } from "@/components/ui/button";

interface SolutionSectionProps {}

const SolutionSection = ({}: SolutionSectionProps) => {
  const solutions = {
    starthilfe: {
      category: "STARTHILFE",
      headline: "Entwicklung kundenzentrierter Angebote",
      introduction: "Du stehst vor der Herausforderung, deine Angebote grundlegend zu überdenken? Services aus diesem Bereich geben dir Angebote, die sich verkaufen lassen und gleichzeitig die Profitabilität steigern.",
      conclusion: "Du erhältst Angebote, die sich verkaufen lassen und gleichzeitig die Profitabilität steigern.",
      popular: false
    },
    gewinnbooster: {
      category: "GEWINNBOOSTER",
      headline: "Kontinuierliche Gewinnoptimierung",
      introduction: "Du verkaufst deine Angebote erfolgreich, aber dir fehlt ein systematisches Controlling? Services aus diesem Bereich ermöglichen dir die monatliche Verbesserung der Profitabilität mithilfe konkreter Massnahmen.",
      conclusion: "Monatlich verbessern wir deine Profitabilität mithilfe konkreter, datenbasierter Massnahmen.",
      popular: true
    },
    sparringpartner: {
      category: "SPARRINGPARTNER",
      headline: "Langfristige Angebotsstrategie",
      introduction: "Deine Zielmärkte sind im Wandel und du prüfst neue strategische Geschäftsfelder? Services aus diesem Bereich geben dir Klarheit über profitable Wachstumsmöglichkeiten und den optimalen Ressourceneinsatz.",
      conclusion: "Du gewinnst Klarheit über profitable Wachstumsmöglichkeiten und den optimalen Ressourceneinsatz.",
      popular: false
    }
  };

  const order = ['starthilfe', 'gewinnbooster', 'sparringpartner'] as const;

  return (
    <section id="leistungen" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">Systematisch zu profitablen Angeboten</h2>
          <p className="text-xl text-muted-foreground">Egal ob du gerade startest, kontinuierlich optimieren oder langfristig strategisch wachsen willst – ich begleite dich mit der richtigen Intensität.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {order.map((key) => {
            const solution = solutions[key];
            return (
              <div key={key} className="bg-card rounded-xl p-6 card-shadow hover:elegant-shadow smooth-transition flex flex-col">
                {/* Category header with optional badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-semibold tracking-wider text-muted-foreground">
                    {solution.category}
                  </span>
                  {solution.popular && (
                    <span className="px-2 py-0.5 text-xs font-semibold bg-green-600 text-white rounded">
                      BELIEBT
                    </span>
                  )}
                </div>

                {/* Headline */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {solution.headline}
                </h3>

                {/* Introduction */}
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {solution.introduction}
                </p>

                {/* Green conclusion box */}
                <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-600 p-4 rounded-lg mb-6">
                  <p className="font-bold text-green-600 dark:text-green-500 leading-tight">
                    {solution.conclusion}
                  </p>
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background"
                  onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Angebot sichern
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
