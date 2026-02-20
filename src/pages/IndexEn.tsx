import SEOHead from "@/components/SEOHead";
import NavigationEn from "@/components/NavigationEn";
import HeroSectionEn from "@/components/HeroSectionEn";
import ProblemSectionEn from "@/components/ProblemSectionEn";
import SolutionSectionEn from "@/components/SolutionSectionEn";
import PricingSectionEn from "@/components/PricingSectionEn";
import AboutSectionEn from "@/components/AboutSectionEn";
import ContactSectionEn from "@/components/ContactSectionEn";
import FooterEn from "@/components/FooterEn";

import heroImage from "@/assets/hero-data-background.jpg";

const hreflangAlternates = [
  { hreflang: "de", href: "https://gewinnarchitekt.ch/" },
  { hreflang: "en", href: "https://gewinnarchitekt.ch/en" },
  { hreflang: "x-default", href: "https://gewinnarchitekt.ch/" },
];

const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "Gewinnarchitekt",
      url: "https://gewinnarchitekt.ch",
      description:
        "Data-driven profit optimization for digital products. Pricing & Analytics as a Service.",
      founder: { "@type": "Person", name: "Karl Aschwanden" },
      areaServed: "CH",
      serviceType: ["Pricing Strategy", "Analytics", "Offer Optimization"],
    },
    {
      "@type": "WebSite",
      url: "https://gewinnarchitekt.ch",
      name: "Gewinnarchitekt",
      inLanguage: "en",
    },
  ],
};

const IndexEn = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="gewinnarchitekt.ch – Pricing Expertise on Demand"
        description="Get More from Your Digital Offerings. Data-driven insights for customer-oriented offerings."
        canonical="https://gewinnarchitekt.ch/en"
        ogImage={heroImage}
        locale="en"
        htmlLang="en"
        alternates={hreflangAlternates}
        schemaJson={schemaJson}
      />
      <NavigationEn />
      <main>
        <HeroSectionEn />
        <ProblemSectionEn />
        <SolutionSectionEn />
        <PricingSectionEn />
        <AboutSectionEn />
        <ContactSectionEn />
      </main>
      <FooterEn />
    </div>
  );
};

export default IndexEn;
