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
        "Datengetriebene Gewinnoptimierung für digitale Produkte. Pricing & Analytics as a Service.",
      founder: { "@type": "Person", name: "Karl Aschwanden" },
      areaServed: "CH",
      serviceType: ["Pricing Strategy", "Analytics", "Offer Optimization"],
    },
    {
      "@type": "WebSite",
      url: "https://gewinnarchitekt.ch",
      name: "Gewinnarchitekt",
      inLanguage: "de",
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="gewinnarchitekt.ch – Pricing Expertise auf Abruf"
        description="Datengetriebene Gewinnoptimierung für digitale Produkte. Pricing & Analytics as a Service."
        canonical="https://gewinnarchitekt.ch/"
        ogImage={heroImage}
        locale="de_CH"
        htmlLang="de"
        alternates={hreflangAlternates}
        schemaJson={schemaJson}
      />
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <PricingSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
