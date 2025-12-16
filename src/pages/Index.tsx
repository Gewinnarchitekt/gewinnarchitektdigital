// Update this page (the content is just a fallback if you fail to update the page)

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LogoSection from "@/components/LogoSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <PricingSection />
      <AboutSection />
      <LogoSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
