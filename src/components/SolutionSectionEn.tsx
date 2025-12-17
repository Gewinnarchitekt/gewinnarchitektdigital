import { Package, Wrench, Target } from "lucide-react";

interface SolutionSectionEnProps {}

const SolutionSectionEn = ({}: SolutionSectionEnProps) => {
  const solutions = {
    offerStrategy: {
      icon: Target,
      title: "Offer Strategy",
      intro: "In a dynamic market, you want to ensure sustainable profit growth.",
      services: [
        "Market Research",
        "Financial Modeling",
        "Scenario Analysis",
        "Forecasting",
        "3-Statement Model",
        "Portfolio Assessment",
        "Pricing Strategy",
        "Pricing Governance",
        "CLV Optimization"
      ]
    },
    offerOptimization: {
      icon: Wrench,
      title: "Offer Optimization",
      intro: "You're selling your offers successfully, but you lack systematic controlling.",
      services: [
        "Individual Customer Analysis",
        "Customer Segmentation",
        "Success Tracking",
        "Liquidity Planning",
        "Margin Optimization",
        "Profit Driver Structure",
        "Dynamic Pricing",
        "AI Cost Control",
        "Churn Prevention"
      ]
    },
    offerDesign: {
      icon: Package,
      title: "Offer Design",
      intro: "You face the challenge of fundamentally rethinking your offers.",
      services: [
        "Competitor Analysis",
        "Customer Surveys",
        "Value Proposition",
        "Conjoint Analysis",
        "Pricing Architecture",
        "Packaging & Bundling",
        "Price Point Optimization",
        "AI Cost Forecasting",
        "Sales Enablement"
      ]
    }
  };

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">Systematically to Profitable Offers</h2>
          <p className="text-xl text-muted-foreground">
            Whether you're just starting, continuously optimizing, or planning long-term growth – I offer solutions for every phase of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {Object.entries(solutions).map(([key, solution]) => {
            const IconComponent = solution.icon;
            return (
              <div key={key} className="bg-card rounded-xl p-6 card-shadow hover:elegant-shadow smooth-transition flex flex-col">
                {/* Header with Icon and Title */}
                <div className="flex items-center mb-4 pb-4 border-b border-border">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-600 to-green-700 mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="!text-xl font-semibold text-foreground">{solution.title}</h3>
                </div>

                {/* Introduction text */}
                <p className="italic text-muted-foreground mb-4">
                  {solution.intro}
                </p>

                {/* Subheading */}
                <p className="text-sm font-medium text-muted-foreground mb-3">available Services</p>

                {/* Services as Tags */}
                <div className="flex flex-wrap gap-2">
                  {solution.services.map((service, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground border border-border"
                    >
                      {service}
                    </span>
                  ))}
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
