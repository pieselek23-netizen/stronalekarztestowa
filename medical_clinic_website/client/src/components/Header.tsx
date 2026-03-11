/**
 * Header Component
 * Design: Minimalist Medical - Clean navigation with professional styling
 * - White background with subtle shadow
 * - Blue accent for active/hover states
 * - Responsive mobile menu
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "O nas", href: "#about" },
    { label: "Usługi", href: "#services" },
    { label: "Opinie", href: "#testimonials" },
    { label: "Rezerwacja", href: "#booking" },
    { label: "Kontakt", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">+</span>
          </div>
          <span className="font-bold text-lg text-foreground hidden sm:inline">
            Gabinet Lekarski
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#booking"
          className="hidden md:inline-block px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200 text-sm"
        >
          Umów wizytę
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#booking"
              className="w-full px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-all text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Umów wizytę
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
