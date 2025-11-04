import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CheckCircle, Package, Wrench, Target, ChevronDown } from "lucide-react";
import { useState } from "react";

interface PricingSectionEnProps {}

const PricingSectionEn = ({}: PricingSectionEnProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const packages = [
    {
      name: "Offer Strategy",
      price: "from CHF 3,000",
      period: "per month",
      description: "Alignment as needed",
      icon: Target,
      color: "from-green-600 to-green-700",
      link: "https://tidycal.com/gewinnarchitekt/angebotsstrategie",
      features: [
        "Customer analyses",
        "Market evaluations",
        "Success tracking",
        "Monthly profit driver report",
        "Deviation analysis vs. plan",
        "Financial models",
        "Scenario modeling",
        "Medium and long-term planning",
      ],
    },
    {
      name: "Offer Optimization",
      price: "from CHF 2,000",
      period: "per month",
      description: "Weekly alignments",
      icon: Wrench,
      color: "from-green-600 to-green-700",
      link: "https://tidycal.com/gewinnarchitekt/angebotsoptimierung",
      features: [
        "Customer analyses",
        "Market evaluations",
        "Success tracking",
        "Monthly profit driver report",
        "Deviation analysis vs. prior year",
      ],
    },
    {
      name: "Offer Design",
      price: "from CHF 1,000",
      period: "per month",
      description: "Bi-weekly alignments",
      icon: Package,
      color: "from-green-600 to-green-700",
      link: "https://tidycal.com/gewinnarchitekt/angebotsgestaltung",
      features: ["Customer analyses", "Market evaluations", "Success tracking"],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6">My Offer to You</h2>
          <p className="text-xl text-muted-foreground mx-auto mb-8">
            Continuous expert knowledge without expensive new hires
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={index}
                className={`relative bg-card rounded-2xl p-8 card-shadow hover:elegant-shadow smooth-transition hover:-translate-y-1 flex flex-col ${
                  pkg.name === "Offer Optimization" ? "ring-2 ring-green-600" : ""
                }`}
              >
                {pkg.name === "Offer Optimization" && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-green-600 text-white hover:bg-green-700 px-4 py-1 text-sm font-semibold">
                      Popular
                    </Badge>
                  </div>
                )}
                <div className="flex items-center mb-6 pb-4 border-b border-border">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${pkg.color} mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, featureIndex) => {
                    const isOfferOptimization = pkg.name === "Offer Optimization";
                    const isOfferStrategy = pkg.name === "Offer Strategy";
                    
                    const shouldNotBeBold = 
                      (isOfferOptimization && ["Customer analyses", "Market evaluations", "Success tracking"].includes(feature)) ||
                      (isOfferStrategy && ["Customer analyses", "Market evaluations", "Success tracking", "Monthly profit driver report"].includes(feature));
                    
                    return (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className={`text-lg text-muted-foreground ${shouldNotBeBold ? '' : 'font-semibold'}`}>
                          {feature}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="text-right mb-6 mt-auto">
                  <div className="text-2xl font-semibold text-foreground mb-1">
                    {pkg.price}¹
                  </div>
                  <div className="text-sm text-muted-foreground">{pkg.period}</div>
                </div>

                <a href={pkg.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full text-lg py-3 h-auto bg-gray-500 hover:bg-accent text-white hover:text-accent-foreground transition-colors">
                    Secure Offer
                  </Button>
                </a>
              </div>
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto mt-12">
          <div className="bg-transparent rounded-lg py-6 px-8 border border-border/50">
            <p className="text-lg text-muted-foreground text-center">
              Only interested in coaching? 2 x 50 min. per month for CHF 350 •{" "}
              <a href="#" className="text-green-600 hover:underline font-medium hover:text-green-700">
                book free introductory meeting
              </a>
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="flex items-center gap-2 text-2xl font-bold text-foreground mb-6 hover:text-primary transition-colors">
              <span>¹Detailed Prices per Month</span>
              <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
              <p className="text-lg text-muted-foreground mb-6">Higher revenues lead to greater profit potential</p>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Annual Revenue</TableHead>
                      <TableHead className="font-semibold text-center">Offer Strategy</TableHead>
                      <TableHead className="font-semibold text-center">Offer Optimization</TableHead>
                      <TableHead className="font-semibold text-center">Offer Design</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">under CHF 1.0m</TableCell>
                      <TableCell className="text-center">CHF 3,000</TableCell>
                      <TableCell className="text-center">CHF 2,000</TableCell>
                      <TableCell className="text-center">CHF 1,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">under CHF 2.5m</TableCell>
                      <TableCell className="text-center">CHF 4,000</TableCell>
                      <TableCell className="text-center">CHF 2,750</TableCell>
                      <TableCell className="text-center">CHF 1,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">under CHF 5.0m</TableCell>
                      <TableCell className="text-center">CHF 5,000</TableCell>
                      <TableCell className="text-center">CHF 3,500</TableCell>
                      <TableCell className="text-center">CHF 2,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">under CHF 10.0m</TableCell>
                      <TableCell className="text-center">CHF 6,000</TableCell>
                      <TableCell className="text-center">CHF 4,250</TableCell>
                      <TableCell className="text-center">CHF 2,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">over CHF 10.0m</TableCell>
                      <TableCell className="text-center">CHF 7,000</TableCell>
                      <TableCell className="text-center">CHF 5,000</TableCell>
                      <TableCell className="text-center">CHF 3,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default PricingSectionEn;
