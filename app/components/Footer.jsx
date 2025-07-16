import React from 'react'
import SocialIcon from './SocialIcon'
import FooterLink from './FooterLink'
import { Package } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold text-red-500">Jimamu</span>
            </div>
            <p className="text-gray-400">
              Connecting people through seamless parcel delivery services worldwide.
            </p>
            <div className="flex space-x-4">
              <SocialIcon>f</SocialIcon>
              <SocialIcon>t</SocialIcon>
              <SocialIcon>in</SocialIcon>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#how-it-works">How It Works</FooterLink>
              <FooterLink href="#download">Download</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>📧 support@jimamu.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Delivery Street, City, State 12345</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Jimamu. All rights reserved. Built with ❤️ for seamless deliveries.</p>
        </div>
      </div>
    </footer>
  )
}
