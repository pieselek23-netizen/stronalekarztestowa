/**
 * About Section Component
 * Design: Minimalist Medical - Two-column layout with image and text
 * - Professional doctor photo
 * - Clean typography hierarchy
 * - Subtle spacing and alignment
 */

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663412509737/M6cRZcMJjV8LHsbaQkSfYx/hero-medical-clinic-iogvnhEuaLaeZybTWh84NW.webp"
              alt="Dr. Anna Kowalska"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              O nas
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Witamy w naszym nowoczesnym gabinecie lekarskim. Jesteśmy zespołem doświadczonych lekarzy, którzy stawiają na najwyższą jakość opieki medycznej i indywidualne podejście do każdego pacjenta.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nasz gabinet wyposażony jest w nowoczesny sprzęt diagnostyczny, co pozwala nam na szybkie i dokładne rozpoznawanie chorób. Pracujemy z pasją, aby zapewnić Wam najlepszą opiekę medyczną.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-sm text-muted-foreground">Lat doświadczenia</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                <p className="text-sm text-muted-foreground">Zadowolonych pacjentów</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Dostępność</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
