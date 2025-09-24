import goldbachLogo from "@/assets/logos/goldbach.png";
import amexLogo from "@/assets/logos/amex.png";
import sunriseLogo from "@/assets/logos/sunrise.png";
import tagesanzeigerLogo from "@/assets/logos/tagesanzeiger.png";

interface LogoSectionProps {}

const LogoSection = ({}: LogoSectionProps) => {
  const logos = [
    { name: "Goldbach", src: goldbachLogo, alt: "Goldbach Logo" },
    { name: "American Express", src: amexLogo, alt: "American Express Logo" },
    { name: "Sunrise", src: sunriseLogo, alt: "Sunrise Logo" },
    { name: "Tages-Anzeiger", src: tagesanzeigerLogo, alt: "Tages-Anzeiger Logo" },
    { name: "20 Minuten", text: "20min", alt: "20 Minuten Logo" },
    { name: "Swisscard", text: "SWISSCARD", alt: "Swisscard Logo" },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Vertrauen namhafter Unternehmen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Diese Marken und Firmen vertrauen auf meine Expertise in der Angebotsgestaltung
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 rounded-lg bg-white card-shadow hover:elegant-shadow smooth-transition w-full h-24 grayscale hover:grayscale-0"
            >
              {logo.src ? (
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="max-h-12 max-w-full object-contain"
                />
              ) : (
                <div className="text-center">
                  <span className="font-bold text-primary text-sm md:text-base">
                    {logo.text}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;