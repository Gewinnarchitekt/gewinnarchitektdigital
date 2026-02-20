import { Link } from "react-router-dom";

interface FooterEnProps {}

const FooterEn = ({}: FooterEnProps) => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-start-2 lg:col-span-2 text-center">
            <Link to="/en" className="text-2xl font-bold mb-4 inline-block hover:text-brand-green transition-colors">
              <span className="text-brand-green">Gewinn</span>architekt
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
              Your partner for profitable offer strategies, pricing expertise, and sustainable growth.
            </p>
          </div>
        </div>

        <div className="border-t border-footer-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-footer-foreground/60 text-sm">
              © 2026 Gewinnarchitekt - Karl Aschwanden. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-footer-foreground/60">
              <Link to="/datenschutz" className="hover:text-footer-foreground smooth-transition">
                Privacy
              </Link>
              <Link to="/impressum" className="hover:text-footer-foreground smooth-transition">
                Imprint
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterEn;
