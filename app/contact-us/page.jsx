"use client";
import React, { useState } from "react";

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
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg opacity-90">
          We’d love to hear from you. Let’s start a conversation.
        </p>
      </section>

      {/* Contact Info */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12">
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition duration-300">
          <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
            📞
          </div>
          <h3 className="font-semibold text-lg">Call Us</h3>
          <p className="text-gray-600 mt-2">+1 (555) 123-4567</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition duration-300">
          <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
            📧
          </div>
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="text-gray-600 mt-2">support@yourapp.com</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition duration-300">
          <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
            📍
          </div>
          <h3 className="font-semibold text-lg">Office</h3>
          <p className="text-gray-600 mt-2">123 Main Street, New York, USA</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white rounded-lg py-3 font-medium transition w-full"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
