"use client";
import { useState } from "react";
import { Mail, MessageCircle, User, Wallet, Globe } from "lucide-react";

export default function HelpCenterPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 mesh-overlay opacity-35"></div>
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-red-200/40 blur-3xl"></div>
      <div className="pointer-events-none absolute top-72 -right-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        <section className="section-shell text-center py-14 px-6 sm:px-10">
          <p className="reveal-up inline-flex items-center rounded-full border border-red-200 bg-white/80 px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#A1241C] uppercase">
            Help Center
          </p>
          <h1 className="reveal-up delay-1 text-4xl md:text-5xl font-black mt-5 text-gray-900">How Can We Help?</h1>
          <p className="reveal-up delay-2 mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Find answers to common questions about Caro's global and national delivery network.
          </p>
        </section>

        {/* Support Categories */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="surface-glass reveal-up delay-1 p-8 rounded-2xl transition-all hover:-translate-y-1 group">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-lg mb-4 group-hover:scale-105 transition-transform">
              <User className="h-5 w-5" />
            </div>
            <h3 className="font-black text-xl mb-2 text-gray-900">Rider Registration</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Required documents for Canada: ID, Transit Number, and SIN for tax compliance.
            </p>
          </div>
          <div className="surface-glass reveal-up delay-2 p-8 rounded-2xl transition-all hover:-translate-y-1 group">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#A1241C] to-red-500 text-white flex items-center justify-center shadow-lg mb-4 group-hover:scale-105 transition-transform">
              <Globe className="h-5 w-5" />
            </div>
            <h3 className="font-black text-xl mb-2 text-gray-900">National & Global</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Understand the difference between domestic (Canada) and international delivery routes.
            </p>
          </div>
          <div className="surface-glass reveal-up delay-3 p-8 rounded-2xl transition-all hover:-translate-y-1 group">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white flex items-center justify-center shadow-lg mb-4 group-hover:scale-105 transition-transform">
              <Wallet className="h-5 w-5" />
            </div>
            <h3 className="font-black text-xl mb-2 text-gray-900">Earnings & Offers</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Learn about our $10 CAD national floor and how to receive payouts.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="text-center mb-10">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.2em] text-[#A1241C] mb-3">FAQ</p>
            <h2 className="reveal-up delay-1 text-3xl sm:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
            <p className="reveal-up delay-2 text-gray-500 mt-2">Quick answers to our most popular queries</p>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                q: "What is the minimum offer for a delivery?",
                a: "For National orders (within Canada), the minimum offer is $10.00 CAD. For Global (International) orders, the minimum offer starts at $30.00 CAD. This ensures our Riders are fairly compensated.",
              },
              {
                q: "What bank info do I need as a Canadian Rider?",
                a: "To receive payouts, you must provide your 5-digit Transit Number, 3-digit Institution Number, and Account Number. You will also need to provide your SIN for tax purposes.",
              },
              {
                q: "How does the OTP verification work?",
                a: "Once a Rider arrives at the drop-off location, the User must provide the OTP (generated in the app) to the Rider. This confirms delivery and releases payment from escrow.",
              },
              {
                q: "Are my documents secure?",
                a: "Yes. Caro uses high-level encryption for all sensitive data, including your Government IDs and banking information, complying with Canadian PIPEDA regulations.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="surface-glass reveal-up rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  className="w-full p-5 text-left flex justify-between items-center hover:bg-white/50"
                  onClick={() => toggleFAQ(idx)}
                >
                  <span className="font-semibold text-gray-800">{faq.q}</span>
                  <span className={`text-2xl transition-transform ${openFAQ === idx ? "rotate-45 text-red-600" : "text-blue-600"}`}>
                    +
                  </span>
                </button>
                {openFAQ === idx && (
                  <div className="px-5 pb-5 text-gray-600 text-sm animate-in fade-in slide-in-from-top-2">
                    <p className="border-t pt-4 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="rounded-3xl p-10 shadow-xl text-white max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-[#A1241C] via-red-600 to-[#111827] gradient-pan reveal-up">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black">Still have questions?</h2>
            <p className="text-red-100 mt-2">Our support team is available 24/7 to help you.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a href="mailto:support@caro.com" className="flex items-center justify-center gap-2 bg-white text-[#A1241C] px-8 py-4 rounded-xl font-bold hover:bg-red-50 transition">
              <Mail className="h-5 w-5" />
              Email Us
            </a>
            <button className="flex items-center justify-center gap-2 bg-black/25 border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-black/35 transition">
              <MessageCircle className="h-5 w-5" />
              Live Chat
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}