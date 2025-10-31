import goldbachLogo from "@/assets/logos/goldbach-2.png";
import amexLogo from "@/assets/logos/amex-2.png";
import sunriseLogo from "@/assets/logos/sunrise-2.png";
import swisscardLogo from "@/assets/logos/swisscard.png";
import twentyMinLogo from "@/assets/logos/20min-new.svg";
import tagesanzeigerLogo from "@/assets/logos/tagesanzeiger-2.png";
interface LogoSectionProps {}
const LogoSection = ({}: LogoSectionProps) => {
  const logos = [{
    name: "Goldbach",
    src: goldbachLogo,
    alt: "Goldbach Logo"
  }, {
    name: "American Express",
    src: amexLogo,
    alt: "American Express Logo"
  }, {
    name: "Sunrise",
    src: sunriseLogo,
    alt: "Sunrise Logo"
  }, {
    name: "Swisscard",
    src: swisscardLogo,
    alt: "Swisscard Logo"
  }, {
    name: "20 Minuten",
    src: twentyMinLogo,
    alt: "20 Minuten Logo"
  }, {
    name: "Tages-Anzeiger",
    src: tagesanzeigerLogo,
    alt: "Tages-Anzeiger Logo"
  }];
  return <section className="py-16 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Erfolgreich für bekannte Marken</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => <div key={index} className="flex items-center justify-center p-4 rounded-lg bg-white card-shadow hover:elegant-shadow smooth-transition w-full h-24">
              <img src={logo.src} alt={logo.alt} className="max-h-12 max-w-full object-contain" />
            </div>)}
        </div>
      </div>
    </section>;
};
export default LogoSection;