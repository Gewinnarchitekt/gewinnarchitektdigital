import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavigationEnProps {}

const NavigationEn = ({}: NavigationEnProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/en";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["challenges", "services", "pricing", "about", "contact"];
      const offset = 150;
      
      let foundActive = false;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom > offset) {
            setActiveSection(section);
            foundActive = true;
            break;
          }
        }
      }
      
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
      const offset = 80;
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
    { label: "Challenges", id: "challenges" },
    { label: "Services", id: "services" },
    { label: "Pricing", id: "pricing" },
    { label: "About", id: "about" },
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
          {isHomePage ? (
            <button
              onClick={scrollToTop}
              className="text-xl font-bold text-black hover:opacity-80 transition-opacity"
            >
              <span className="text-brand-green">Gewinn</span>architekt
            </button>
          ) : (
            <Link
              to="/en"
              className="text-xl font-bold text-black hover:opacity-80 transition-opacity"
            >
              <span className="text-brand-green">Gewinn</span>architekt
            </Link>
          )}

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

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <Globe size={16} />
              DE
            </Button>
            <Button
              variant="cta"
              size="default"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
          </div>

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
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center gap-2 justify-start"
            >
              <Globe size={16} />
              Deutsch
            </Button>
            <Button
              variant="cta"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full mt-2"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationEn;
