import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";
interface FooterProps {}
const Footer = ({}: FooterProps) => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-start-2 lg:col-span-2 text-center">
            <h3 className="text-2xl font-bold mb-4">gewinnarchitekt.ch</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
              Dein Partner für profitable Angebotsstrategien, Pricingexpertise und nachhaltiges Wachstum.
            </p>
            
          </div>

          {/* Quick Links */}
          

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>karl@gewinnarchitekt.ch</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+41 79 XXX XX XX</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Zürich, Schweiz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2025 gewinnarchitekt.ch - Karl Aschwanden. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground smooth-transition">
                Datenschutz
              </a>
              <a href="/impressum" className="hover:text-primary-foreground smooth-transition">
                Impressum
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;