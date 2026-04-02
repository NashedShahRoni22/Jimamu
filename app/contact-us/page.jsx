"use client";
import React, { useState } from "react";
import { Building2, Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 mesh-overlay opacity-40"></div>
      <div className="pointer-events-none absolute -top-20 -left-16 h-72 w-72 rounded-full bg-red-200/40 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-10 -right-16 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        <section className="section-shell p-8 sm:p-10 lg:p-12 text-center">
          <p className="reveal-up inline-flex items-center rounded-full border border-red-200 bg-white/80 px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#A1241C] uppercase">
            Contact Caro
          </p>
          <h1 className="reveal-up delay-1 mt-5 text-4xl sm:text-5xl font-black text-gray-900">Let's Start A Conversation</h1>
          <p className="reveal-up delay-2 mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question about deliveries, partnerships, or support? Our team is here to help and respond quickly.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="surface-glass reveal-up delay-1 rounded-2xl p-6 text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-[#A1241C] to-red-500 text-white flex items-center justify-center shadow-lg">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">Call Us</h3>
            <p className="text-gray-600 mt-2">+1 (555) 123-4567</p>
          </div>

          <div className="surface-glass reveal-up delay-2 rounded-2xl p-6 text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-lg">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">Email</h3>
            <p className="text-gray-600 mt-2">support@caro.com</p>
          </div>

          <div className="surface-glass reveal-up delay-3 rounded-2xl p-6 text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white flex items-center justify-center shadow-lg">
              <Building2 className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">Office</h3>
            <p className="text-gray-600 mt-2">123 Main Street, New York, USA</p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto section-shell p-8 md:p-12 mb-10 reveal-up delay-2">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-gray-900">Send Us A Message</h2>
            <p className="text-gray-600 mt-2">Tell us what you need and we will get back to you shortly.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 focus:ring-2 focus:ring-[#A1241C]/30 focus:border-[#A1241C] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@caro.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 focus:ring-2 focus:ring-[#A1241C]/30 focus:border-[#A1241C] focus:outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
              <textarea
                name="message"
                placeholder="How can we help today?"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 focus:ring-2 focus:ring-[#A1241C]/30 focus:border-[#A1241C] focus:outline-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#A1241C] hover:bg-red-700 text-white rounded-xl py-3.5 px-6 font-semibold transition shadow-lg hover:shadow-xl"
            >
              <MessageSquare className="h-5 w-5" />
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
