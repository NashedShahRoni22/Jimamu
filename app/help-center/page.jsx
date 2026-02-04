"use client";
import { useState } from "react";
import { Mail, MessageCircle, User, Wallet, Globe } from "lucide-react";

export default function HelpCenterPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      {/* Hero Section - Updated to your Red theme */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">How can we help?</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-red-50">
          Find answers to common questions about Jimamu's global and national delivery network.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 space-y-16">
        {/* Support Categories */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-white border shadow-sm hover:shadow-lg transition group">
            <User className="h-10 w-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-xl mb-2">Rider Registration</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Required documents for Canada: ID, Transit Number, and SIN for tax compliance.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white border shadow-sm hover:shadow-lg transition group">
            <Globe className="h-10 w-10 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-xl mb-2">National & Global</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Understand the difference between domestic (Canada) and international delivery routes.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white border shadow-sm hover:shadow-lg transition group">
            <Wallet className="h-10 w-10 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-xl mb-2">Earnings & Offers</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Learn about our $10 CAD national floor and how to receive payouts.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-500 mt-2">Quick answers to our most popular queries</p>
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
                a: "Yes. Jimamu uses high-level encryption for all sensitive data, including your Government IDs and banking information, complying with Canadian PIPEDA regulations.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  className="w-full p-5 text-left flex justify-between items-center hover:bg-gray-50"
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
        <section className="bg-blue-600 rounded-3xl p-10 shadow-xl text-white max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">Still have questions?</h2>
            <p className="text-blue-100 mt-2">Our support team is available 24/7 to help you.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a href="mailto:support@jimamu.com" className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition">
              <Mail className="h-5 w-5" />
              Email Us
            </a>
            <button className="flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition">
              <MessageCircle className="h-5 w-5" />
              Live Chat
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}