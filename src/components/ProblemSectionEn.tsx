import { Package, Wrench, Target, AlertCircle } from "lucide-react";

interface ProblemSectionEnProps {}

const ProblemSectionEn = ({}: ProblemSectionEnProps) => {
  const problemCategories = [
    {
      icon: Package,
      title: "Concept Deficiencies",
      problems: [
        {
          title: "One-size-fits-all offers ignore different customer segments",
          description: ""
        },
        {
          title: "Pricing logic is not aligned with customer behavior",
          description: ""
        },
        {
          title: "Internally calculated offers don't reflect the value provided",
          description: ""
        },
        {
          title: "Added value for the customer is not clearly communicated",
          description: ""
        }
      ],
      highlight: "Missing offer optimization costs 52% of possible revenue¹",
      color: "from-red-600 to-red-700"
    },
    {
      icon: Wrench,
      title: "Implementation Problems",
      problems: [
        {
          title: "Customer data remains underutilized",
          description: ""
        },
        {
          title: "Insufficient resources to identify revenue opportunities",
          description: ""
        },
        {
          title: "Lack of expertise in pricing & monetization",
          description: ""
        },
        {
          title: "Data silos prevent information sharing",
          description: ""
        }
      ],
      highlight: "66% of price adjustment potential is lost through wrong processes²",
      color: "from-red-600 to-red-700"
    },
    {
      icon: Target,
      title: "Planning Deficits",
      problems: [
        {
          title: "Customer needs are addressed too late",
          description: ""
        },
        {
          title: "Innovations fail to address market needs",
          description: ""
        },
        {
          title: "Priorities aren't tied to financial growth",
          description: ""
        },
        {
          title: "Lack of a long term perspective",
          description: ""
        }
      ],
      highlight: "61% of companies struggle to implement a long-term strategy effectively³",
      color: "from-red-600 to-red-700"
    }
  ];

  return (
    <section id="challenges" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">Challenges in Offer Design</h2>
          <p className="text-xl text-muted-foreground mx-auto">Calculating prices is simple – maximizing margins is an art</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {problemCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-card rounded-xl p-6 card-shadow hover:elegant-shadow smooth-transition flex flex-col">
                {/* Icon and Title at the top of each box */}
                <div className="flex items-center mb-6 pb-4 border-b border-border">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Red conclusion box */}
                <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-600 p-6 rounded-lg min-h-[120px] flex items-center justify-center mb-6">
                  <p className="font-bold text-center leading-tight text-red-600 dark:text-red-500 text-lg">
                    {category.highlight}
                  </p>
                </div>

                {/* Problem list */}
                <div className="space-y-4 flex-grow">
                  {category.problems.map((problem, problemIndex) => (
                    <div key={problemIndex} className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {problem.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnotes */}
        <div className="mt-8 space-y-2 text-center">
          <p className="text-sm text-muted-foreground">
            <a href="https://www.simon-kucher.com/en/insights/profit-starts-packaging-and-pricing" target="_blank" rel="noopener noreferrer" className="hover:underline">
              ¹Proven packaging and pricing designs | Simon Kucher
            </a>
          </p>
          <p className="text-sm text-muted-foreground">
            <a href="https://www.mckinsey.com.br/capabilities/growth-marketing-and-sales/our-insights/defying-cost-volatility-a-strategic-pricing-response" target="_blank" rel="noopener noreferrer" className="hover:underline">
              ²The pricing response to cost volatility | McKinsey
            </a>
          </p>
          <p className="text-sm text-muted-foreground">
            <a href="https://www.pmi.org/-/media/pmi/documents/public/pdf/learning/thought-leadership/why-good-strategies-fail-report.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">
              ³Why Good Strategies Fail: Lessons for C-Suite | PMI Thought Leadership Series
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSectionEn;
