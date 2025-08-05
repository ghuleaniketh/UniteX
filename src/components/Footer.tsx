import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
export const Footer = () => {
  return <footer
  className="text-white pt-16 pb-8"
  style={{
    background: 'linear-gradient(to bottom, rgba(21, 20, 26, 1) 0%, rgba(8, 2, 19, 1) 25%, rgba(16, 19, 36, 1) 50%, rgba(13, 14, 37, 1) 75%, rgba(24, 29, 56, 1) 100%)'
  }}
>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent mb-4">
              Unitex
            </div>
            <p className="text-indigo-200 mb-6 max-w-md">
              Connecting students worldwide to help them achieve their academic
              and career goals through meaningful collaboration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-indigo-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-indigo-300 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Unitex. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-indigo-300 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-indigo-300 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-indigo-300 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};