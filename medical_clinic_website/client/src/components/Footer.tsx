/**
 * Footer Component
 * Design: Minimalist Medical - Clean footer with links and info
 * - Contact information
 * - Quick links
 * - Copyright
 */

import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="container py-12 md:py-16">
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">+</span>
              </div>
              <span className="font-bold text-lg">Gabinet Lekarski</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Nowoczesna opieka medyczna w sercu Warszawy. Profesjonalizm, zaufanie, bezpieczeństwo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Nawigacja</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  O nas
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Usługi
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Rezerwacja
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Usługi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Konsultacje
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Badania
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Diagnostyka
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Leczenie
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/70">
                <span className="font-medium">Tel:</span> +48 22 123 45 67
              </li>
              <li className="text-white/70">
                <span className="font-medium">Email:</span> kontakt@gabinet-lekarski.pl
              </li>
              <li className="text-white/70">
                <span className="font-medium">Adres:</span> ul. Medyczna 123, 00-001 Warszawa
              </li>
              <li className="text-white/70">
                <span className="font-medium">Godziny:</span> Pon-Pt: 8:00-18:00
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-white/60">
            <p>
              &copy; {currentYear} Gabinet Lekarski. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
