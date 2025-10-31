import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {}

const Navigation = ({}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section - only mark as active when section is properly in view
      const sections = ["herausforderungen", "leistungen", "angebot", "ueber-mich", "kontakt"];
      const offset = 150; // Navigation height + buffer
      
      let foundActive = false;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section is active if its top is above the offset and bottom is below the offset
          if (rect.top <= offset && rect.bottom > offset) {
            setActiveSection(section);
            foundActive = true;
            break;
          }
        }
      }
      
      // If no section is active (e.g., in hero section), clear active state
      if (!foundActive) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navigation height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Herausforderungen", id: "herausforderungen" },
    { label: "Leistungen", id: "leistungen" },
    { label: "Angebot", id: "angebot" },
    { label: "Über mich", id: "ueber-mich" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <button
            onClick={scrollToTop}
            className="text-xl font-bold text-black hover:opacity-80 transition-opacity"
          >
            <span className="text-green-600">Gewinn</span>architekt.ch
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-base font-medium transition-colors hover:text-primary relative ${
                  activeSection === link.id ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <Button
            variant="cta"
            size="default"
            onClick={() => scrollToSection("kontakt")}
            className="hidden md:inline-flex"
          >
            Kontakt
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left py-2 text-base font-medium transition-colors hover:text-primary ${
                  activeSection === link.id ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="cta"
              size="lg"
              onClick={() => scrollToSection("kontakt")}
              className="w-full mt-2"
            >
              Kontakt
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
