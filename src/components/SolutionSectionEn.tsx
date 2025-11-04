import { Package, Wrench, Target } from "lucide-react";

interface SolutionSectionEnProps {}

const SolutionSectionEn = ({}: SolutionSectionEnProps) => {
  const solutions = {
    offerStrategy: {
      icon: Target,
      title: "Offer Strategy",
      color: "from-green-600 to-green-700",
      descriptions: [
        "As a sparring partner, I support you with well-founded decision-making bases and constructive feedback.",
        "I provide you with comprehensive financial models that make the added value of product adjustments measurable and enable the forecast of future financial statements.",
        "We systematically break down difficult decisions into their components and assess risks with differentiated scenario models.",
        "You gain clarity about profitable growth opportunities and optimal resource allocation"
      ],
      result: "Sustainable competitive advantages"
    },
    offerOptimization: {
      icon: Wrench,
      title: "Offer Optimization",
      color: "from-green-600 to-green-700",
      descriptions: [
        "By analyzing your data, I provide you with transparency about your offer portfolio and reveal untapped revenue potential.",
        "Detailed product and customer analyses make the actual success contribution of each offer visible, and target-actual comparisons reveal unwanted revenue losses.",
        "A systematic driver model identifies the most important levers for profit increase from offer, customer, and company perspective.",
        "We improve your profitability monthly through concrete, data-based measures"
      ],
      result: "Continuous increase in your profits"
    },
    offerDesign: {
      icon: Package,
      title: "Offer Design",
      color: "from-green-600 to-green-700",
      descriptions: [
        "Through customer surveys and individual customer analyses, a value proposition emerges that resonates with your target group.",
        "We design the offer structure according to behavioral psychological principles and uniform communication standards that create transparency and facilitate purchase decisions.",
        "Quantitative analyses and continuous success tracking enable you to continuously optimize your offer.",
        "You receive offers that sell themselves while increasing profitability."
      ],
      result: "Profitable offers that sell themselves"
    }
  };

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">Systematically to Profitable Offers</h2>
          <p className="text-xl text-muted-foreground">I offer tailored support for every phase of your business</p>
        </div>

        {/* Grid layout with 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {Object.entries(solutions).map(([key, solution]) => {
            const IconComponent = solution.icon;
            return (
              <div key={key} className="bg-card rounded-xl p-6 card-shadow hover:elegant-shadow smooth-transition flex flex-col">
                {/* Icon and Title at the top of each box */}
                <div className="flex items-center mb-6 pb-4 border-b border-border">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${solution.color} mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{solution.title}</h3>
                </div>

                {/* Content */}
                <div className="space-y-4 mb-6 flex-grow">
                  {solution.descriptions.slice(0, 3).map((description, descIndex) => (
                    <p 
                      key={descIndex} 
                      className="text-lg text-muted-foreground leading-relaxed hyphens-auto break-words"
                      style={{
                        hyphenateLimitChars: '15 8 8',
                        WebkitHyphenateLimitChars: '15 8 8'
                      } as React.CSSProperties}
                    >
                      {description}
                    </p>
                  ))}
                </div>

                {/* Green conclusion box */}
                <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-600 p-6 rounded-lg min-h-[120px] flex items-center justify-center">
                  <p 
                    className="font-bold text-center leading-tight text-green-600 dark:text-green-500 text-lg hyphens-auto break-words"
                    style={{
                      hyphenateLimitChars: '15 8 8',
                      WebkitHyphenateLimitChars: '15 8 8'
                    } as React.CSSProperties}
                  >
                    {solution.descriptions[3]}
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

export default SolutionSectionEn;
