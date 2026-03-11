/**
 * Contact Section Component
 * Design: Minimalist Medical - Contact info with Google Map
 * - Contact details with icons
 * - Google Map integration
 * - Responsive layout
 */

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { MapView } from "./Map";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Adres",
      value: "ul. Medyczna 123, 00-001 Warszawa",
      link: "https://maps.google.com/?q=Warszawa+Medyczna+123",
    },
    {
      icon: Phone,
      label: "Telefon",
      value: "+48 22 123 45 67",
      link: "tel:+48221234567",
    },
    {
      icon: Mail,
      label: "Email",
      value: "kontakt@gabinet-lekarski.pl",
      link: "mailto:kontakt@gabinet-lekarski.pl",
    },
    {
      icon: Clock,
      label: "Godziny",
      value: "Pon-Pt: 8:00-18:00, Sob: 9:00-14:00",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kontakt
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skontaktuj się z nami lub odwiedź nasz gabinet. Jesteśmy dostępni dla Ciebie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary mt-1" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Dlaczego nas wybrać?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Nowoczesny sprzęt diagnostyczny</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Doświadczeni lekarze specjaliści</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Indywidualne podejście do pacjenta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Szybkie wyniki badań</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-md border border-border h-96">
            <MapView
              initialCenter={{ lat: 52.1657, lng: 21.0385 }}
              initialZoom={15}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
