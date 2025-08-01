import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking logic here
    alert("Booking submitted!");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 px-4">
      <div className="bg-white/90 rounded-xl shadow-xl p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-primary text-center">
          Book Your Session
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Service
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select a service</option>
              <option value="wedding">Wedding Photography</option>
              <option value="videography">Professional Videography</option>
              <option value="event">Event Coverage</option>
              <option value="portrait">Portrait Session</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Tell us more about your session..."
            />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full">
            Submit Booking
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
