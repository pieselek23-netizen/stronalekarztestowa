/**
 * Home Page
 * Design: Minimalist Medical - Professional medical clinic website
 * - Hero section with call-to-action
 * - About section with doctor info
 * - Services showcase
 * - Testimonials
 * - Booking form
 * - Contact with map
 * - Footer
 */

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
