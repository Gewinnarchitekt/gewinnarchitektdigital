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

const IndexEn = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="gewinnarchitekt.ch – Pricing Expertise on Demand"
        description="Get More from Your Digital Offerings. Data-driven insights for customer-oriented offerings."
        canonical="https://gewinnarchitekt.ch/en"
        ogImage={heroImage}
      />
      <NavigationEn />
      <HeroSectionEn />
      <ProblemSectionEn />
      <SolutionSectionEn />
      <PricingSectionEn />
      <AboutSectionEn />
      <ContactSectionEn />
      <FooterEn />
    </div>
  );
};

export default IndexEn;
