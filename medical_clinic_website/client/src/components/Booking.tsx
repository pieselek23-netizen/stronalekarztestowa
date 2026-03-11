/**
 * Booking Section Component
 * Design: Minimalist Medical - Simple booking form with calendar
 * - Clean form inputs
 * - Blue accent button
 * - Responsive layout
 */

import { useState } from "react";
import { Calendar, Clock, User, Phone } from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "konsultacja",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Booking data:", formData);
    alert("Dziękujemy za rezerwację! Skontaktujemy się z Tobą wkrótce.");
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      service: "konsultacja",
    });
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Umów wizytę
            </h2>
            <p className="text-lg text-muted-foreground">
              Wypełnij formularz poniżej, a my skontaktujemy się z Tobą w celu potwierdzenia rezerwacji.
            </p>
          </div>

          {/* Booking Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-border"
          >
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Imię i nazwisko *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Jan Kowalski"
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Numer telefonu *
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+48 123 456 789"
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Rodzaj usługi *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="konsultacja">Konsultacja lekarska</option>
                <option value="badania">Badania kardiologiczne</option>
                <option value="diagnostyka">Diagnostyka laboratoryjna</option>
                <option value="ekg">EKG i holter</option>
                <option value="inne">Inne</option>
              </select>
            </div>

            {/* Date Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Preferowana data *
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Time Field */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Preferowana godzina *
              </label>
              <div className="relative">
                <Clock className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Zarezerwuj wizytę
            </button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              * Pola obowiązkowe
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
