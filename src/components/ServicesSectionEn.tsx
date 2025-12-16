import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const servicesData = [
  {
    title: "Kickstart – Services",
    services: [
      "Customer Needs Analysis & Segmentation",
      "Value Proposition Design",
      "Pricing Architecture Setup",
      "Conjoint Analysis for New Offerings",
      "Cost Structure Transparency",
      "Price Psychology in Offer Design",
      "Communication Guide for Your Sales Team",
      "Quick-Win Identification",
    ],
  },
  {
    title: "Profit Booster – Services",
    services: [
      "Monthly Performance Controlling",
      "Pricing Experiments & A/B Testing",
      "Margin Monitoring by Product & Customer",
      "Competitor Monitoring",
      "Dynamic Price Adjustments",
      "Churn Analysis & Countermeasures",
      "Upselling & Cross-Selling Optimization",
      "Liquidity Planning with Early Warning System",
      "Benchmarking & Industry Comparison",
      "ROI Tracking for Marketing Activities",
    ],
  },
  {
    title: "Sparring Partner – Services",
    services: [
      "Strategic Market Research & Trend Analysis",
      "Scenario Modeling for New Business Areas",
      "Strategic Price Positioning",
      "Portfolio Cleanup & Focus",
      "Subscription Model Development",
      "Customer Lifetime Value Maximization",
      "Growth Scenarios & Investment Decisions",
      "Pricing Governance Establishment",
      "Strategic Partnerships & Alliances",
      "Exit-Readiness & Company Valuation",
      "Internationalization Strategy",
      "Succession Planning & Handover",
    ],
  },
];

const ServicesSectionEn = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the services that fit your situation
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-5xl mx-auto space-y-4">
          {servicesData.map((category, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-5 text-lg font-semibold text-foreground hover:no-underline hover:bg-muted/50 transition-colors">
                {category.title}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-background border-l-4 border-l-primary rounded-md p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <p className="text-foreground font-medium">{service}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ServicesSectionEn;
