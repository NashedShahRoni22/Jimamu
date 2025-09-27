"use client";
import { useState } from "react";
import { Mail, MessageCircle, User, Package, Wallet } from "lucide-react";

export default function HelpCenterPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">Help Center</h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-emerald-100">
          Find answers to common questions, explore guides, or get in touch with
          our support team. We’re here to help you with Jimamu.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Categories */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Support Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white border shadow-sm hover:shadow-md transition">
              <User className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                Account & Registration
              </h3>
              <p className="text-gray-600 text-sm">
                Learn how to create an account, verify your details, and manage
                your profile securely.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border shadow-sm hover:shadow-md transition">
              <Package className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Orders & Deliveries</h3>
              <p className="text-gray-600 text-sm">
                Information on placing orders, tracking deliveries, and resolving
                delivery issues efficiently.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border shadow-sm hover:shadow-md transition">
              <Wallet className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Payments & Wallet</h3>
              <p className="text-gray-600 text-sm">
                Understand fares, payments, refunds, and wallet transactions.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                q: "How do I register as a Rider?",
                a: "To register as a Rider, provide a valid email, username, phone number, date of birth, and upload an identification document. Your profile will be verified by our admin team.",
              },
              {
                q: "Can I cancel an order?",
                a: "Yes, you can cancel before a Rider accepts your order. If canceled after acceptance, the Base Fare + Platform Fee will be charged.",
              },
              {
                q: "What if a Rider cancels my delivery?",
                a: "If a Rider cancels or fails to deliver, you will be fully refunded. Riders who cancel repeatedly may face account suspension.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-xl shadow-sm p-4 cursor-pointer"
                onClick={() => toggleFAQ(idx)}
              >
                <h3 className="font-medium flex justify-between items-center">
                  {faq.q}
                  <span className="text-emerald-600">
                    {openFAQ === idx ? "−" : "+"}
                  </span>
                </h3>
                {openFAQ === idx && (
                  <p className="mt-3 text-gray-600 text-sm">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-2xl p-10 shadow-sm border max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Still Need Help?
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            If you can’t find your answer in the Help Center, reach out to our
            support team anytime.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg flex items-start gap-3 hover:shadow-md transition">
              <Mail className="h-6 w-6 text-emerald-600 mt-1" />
              <div>
                <h3 className="font-semibold">Email Support</h3>
                <p className="text-gray-600 text-sm">support@jimamu.com</p>
              </div>
            </div>
            <div className="p-6 border rounded-lg flex items-start gap-3 hover:shadow-md transition">
              <MessageCircle className="h-6 w-6 text-emerald-600 mt-1" />
              <div>
                <h3 className="font-semibold">Live Chat</h3>
                <p className="text-gray-600 text-sm">
                  Available 24/7 in the Jimamu app
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
