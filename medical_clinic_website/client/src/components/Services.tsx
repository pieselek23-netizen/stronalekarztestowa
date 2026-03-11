/**
 * Services Section Component
 * Design: Minimalist Medical - 3-column grid with service cards
 * - Icons with blue accent
 * - Clean card design with subtle shadows
 * - Responsive mobile layout
 */

import {
  Stethoscope,
  Heart,
  Microscope,
  Activity,
  Pill,
  ClipboardList,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "Konsultacje lekarskie",
      description:
        "Profesjonalne konsultacje z lekarzem ogólnym i specjalistami w nowoczesnym gabinecie.",
    },
    {
      icon: Heart,
      title: "Badania kardiologiczne",
      description:
        "Kompleksowa diagnostyka serca i układu krążenia z wykorzystaniem nowoczesnego sprzętu.",
    },
    {
      icon: Microscope,
      title: "Diagnostyka laboratoryjna",
      description:
        "Badania krwi, analiza moczu i inne testy laboratoryjne z szybkimi wynikami.",
    },
    {
      icon: Activity,
      title: "EKG i holter",
      description:
        "Elektrokardiografia i monitorowanie rytmu serca przez 24-48 godzin.",
    },
    {
      icon: Pill,
      title: "Terapia i leczenie",
      description:
        "Indywidualizowany plan leczenia dostosowany do potrzeb każdego pacjenta.",
    },
    {
      icon: ClipboardList,
      title: "Zaświadczenia medyczne",
      description:
        "Wystawianie zaświadczeń lekarskich, zwolnień i innych dokumentów medycznych.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nasze usługi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferujemy pełny zakres usług medycznych w nowoczesnym, przyjaznym środowisku.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border"
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
