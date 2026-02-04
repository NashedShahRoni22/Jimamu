"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import logo from "@/public/images/logo.svg";
import Image from 'next/image';

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
          <Link href={"/"} className="flex items-center">
            <Image src={logo} height={50} width={200} />
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#A1241C] transition-colors font-medium">Home</Link>
              <Link href="/#features" className="text-gray-700 hover:text-[#A1241C] transition-colors font-medium">Features</Link>
              <Link href="/#how-it-works" className="text-gray-700 hover:text-[#A1241C] transition-colors font-medium">How It Works</Link>
              <Link href="/#download" className="text-gray-700 hover:text-[#A1241C] transition-colors font-medium">Download</Link>
            </div>
          </div>
          
          {/* <div className="hidden md:flex items-center space-x-4">
            <button className="bg-[#A1241C] hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors font-medium">
              Become a Rider
            </button>
          </div> */}
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#A1241C] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-[#A1241C] transition-colors">Home</a>
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-[#A1241C] transition-colors">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-[#A1241C] transition-colors">How It Works</a>
            <a href="#download" className="block px-3 py-2 text-gray-700 hover:text-[#A1241C] transition-colors">Download</a>
            <button className="w-full mt-2 bg-[#A1241C] hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors font-medium">
              Become a Rider
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};