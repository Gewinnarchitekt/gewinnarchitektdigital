import { Package, Wrench, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface SolutionSectionEnProps {}

const SolutionSectionEn = ({}: SolutionSectionEnProps) => {
  const solutions = {
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
        "Sales Enablement",
        "Naming",
        "Jobs To Be Done",
        "Go 2 Market"
      ],
      caseStudyLink: "/fallstudie/angebotsgestaltung"
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
        "Dynamic Pricing",
        "AI Cost Control",
        "Churn Prevention",
        "Customer Migration",
        "Reporting",
        "Analytics",
        "Data Visualization",
        "Price Monitoring",
        "Benchmarking"
      ],
      caseStudyLink: "/fallstudie/angebotsoptimierung"
    },
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
        "CLV Optimization",
        "Workshops",
        "Positioning",
        "Long-term Planning",
        "Change Mgmt",
        "Profit Driver Structure"
      ],
      caseStudyLink: "/fallstudie/angebotsstrategie"
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
                  <h3 className="!text-2xl font-semibold text-foreground">{solution.title}</h3>
                </div>

                {/* Introduction text */}
                <p className="text-muted-foreground mb-4">
                  {solution.intro}
                </p>

                {/* Subheading */}
                <p className="font-medium text-muted-foreground mb-3">available services</p>

                {/* Services as Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {solution.services.map((service, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-muted rounded-full text-muted-foreground border border-border"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Case Study Button */}
                <div className="mt-auto flex justify-end">
                  <Link to={solution.caseStudyLink}>
                    <Button className="bg-gray-500 hover:bg-accent text-white hover:text-accent-foreground transition-colors">
                      Case Study
                    </Button>
                  </Link>
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
