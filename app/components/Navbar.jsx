"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone, Package, Globe, Users, Star, ArrowRight, Download, Shield, Clock, MapPin } from 'lucide-react';

// Navbar Component
export default function Navbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold text-red-500">Jimamu</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Home</a>
              <a href="#features" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-red-500 transition-colors font-medium">How It Works</a>
              <a href="#download" className="text-gray-700 hover:text-red-500 transition-colors font-medium">Download</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors font-medium">
              Become a Rider
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-500 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-red-500 transition-colors">Home</a>
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-red-500 transition-colors">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-red-500 transition-colors">How It Works</a>
            <a href="#download" className="block px-3 py-2 text-gray-700 hover:text-red-500 transition-colors">Download</a>
            <button className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors font-medium">
              Become a Rider
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};