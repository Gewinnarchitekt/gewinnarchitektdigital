// Update this page (the content is just a fallback if you fail to update the page)

import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import heroImage from "@/assets/hero-data-background.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="gewinnarchitekt.ch – Pricing Expertise auf Abruf"
        description="Datengetriebene Gewinnoptimierung für digitale Produkte. Pricing & Analytics as a Service."
        canonical="https://gewinnarchitekt.ch/"
        ogImage={heroImage}
      />
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
