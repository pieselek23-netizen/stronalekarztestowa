/**
 * Testimonials Section Component
 * Design: Minimalist Medical - Customer reviews with avatars
 * - Clean card layout with quotes
 * - Star ratings
 * - Circular avatars
 */

import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Nowak",
      role: "Pacjentka",
      avatar: "MN",
      rating: 5,
      text: "Fantastyczne doświadczenie! Lekarz był bardzo profesjonalny i wyjaśnił wszystko w zrozumiały sposób. Polecam każdemu!",
    },
    {
      name: "Piotr Lewandowski",
      role: "Pacjent",
      avatar: "PL",
      rating: 5,
      text: "Nowoczesny gabinet, przyjazny personel i szybkie wyniki badań. Jestem bardzo zadowolony z opieki medycznej.",
    },
    {
      name: "Anna Kowalczyk",
      role: "Pacjentka",
      avatar: "AK",
      rating: 5,
      text: "Profesjonalizm na najwyższym poziomie. Gabinet jest czysto, a lekarz poświęcił mi dużo czasu na konsultacji.",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Opinie pacjentów
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Słowa zadowolonych pacjentów są najlepszą rekomendacją naszej pracy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-8 border border-border hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
