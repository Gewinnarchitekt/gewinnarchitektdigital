import { Button } from "@/components/ui/button";

interface SolutionSectionEnProps {}

const SolutionSectionEn = ({}: SolutionSectionEnProps) => {
  const solutions = {
    starter: {
      category: "STARTER HELP",
      headline: "Development of Customer-Centric Offers",
      introduction: "Are you facing the challenge of fundamentally rethinking your offerings? Services in this area give you offers that sell themselves while simultaneously increasing profitability.",
      conclusion: "You receive offers that sell themselves while simultaneously increasing profitability.",
      popular: false
    },
    profitBooster: {
      category: "PROFIT BOOSTER",
      headline: "Continuous Profit Optimization",
      introduction: "You're selling your offerings successfully, but you lack systematic controlling? Services in this area enable you to improve profitability monthly through concrete measures.",
      conclusion: "Monthly, we improve your profitability through concrete, data-based measures.",
      popular: true
    },
    sparringPartner: {
      category: "SPARRING PARTNER",
      headline: "Long-term Offer Strategy",
      introduction: "Your target markets are changing and you're exploring new strategic business areas? Services in this area give you clarity about profitable growth opportunities and optimal resource allocation.",
      conclusion: "You gain clarity about profitable growth opportunities and optimal resource allocation.",
      popular: false
    }
  };

  const order = ['starter', 'profitBooster', 'sparringPartner'] as const;

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">Systematically to Profitable Offers</h2>
          <p className="text-xl text-muted-foreground">Whether you're just starting, continuously optimizing, or aiming for long-term strategic growth – I accompany you with the right intensity.</p>
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
                      POPULAR
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
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Secure Offer
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSectionEn;
