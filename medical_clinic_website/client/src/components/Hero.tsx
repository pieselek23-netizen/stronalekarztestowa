/**
 * Hero Section Component
 * Design: Minimalist Medical - Large hero image with text overlay
 * - High-key image with professional doctor
 * - Dark text overlay for contrast
 * - CTA button with blue accent
 */

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663412509737/M6cRZcMJjV8LHsbaQkSfYx/hero-medical-clinic-iogvnhEuaLaeZybTWh84NW.webp')",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative container h-full flex flex-col justify-center items-start">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Nowoczesna opieka medyczna
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Profesjonalna diagnostyka, leczenie i profilaktyka w nowoczesnym gabinecie lekarskim.
          </p>
          <a
            href="#booking"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Umów wizytę
          </a>
        </div>
      </div>
    </section>
  );
}
