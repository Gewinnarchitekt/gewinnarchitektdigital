import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
interface FooterProps {}
const Footer = ({}: FooterProps) => {
  return <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-start-2 lg:col-span-2 text-center">
            <Link to="/" className="text-2xl font-bold mb-4 inline-block hover:text-green-600 transition-colors">
              gewinnarchitekt
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
              Dein Partner für profitable Angebotsstrategien, Pricingexpertise und nachhaltiges Wachstum.
            </p>
            
          </div>
        </div>

        <div className="border-t border-footer-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-footer-foreground/60 text-sm">
              © 2025 gewinnarchitekt - Karl Aschwanden. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 text-sm text-footer-foreground/60">
              <Link to="/datenschutz" className="hover:text-footer-foreground smooth-transition">
                Datenschutz
              </Link>
              <Link to="/impressum" className="hover:text-footer-foreground smooth-transition">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;