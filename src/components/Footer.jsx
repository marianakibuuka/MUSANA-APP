import React from 'react';
import { Heart, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl">Musana App</span>
            </div>
            <p className="text-gray-300 mb-4">
              Gospel Extension Ministries is dedicated to spreading the Gospel of Jesus Christ 
              and building a strong community of believers under the leadership of Pastor Musana.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span className="text-gray-300 text-sm">123 Faith Street, Gospel City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-sky-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-sky-400" />
                <span className="text-gray-300 text-sm">info@gospelextension.org</span>
              </div>
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Times</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <div>
                <p className="font-medium">Sunday Service</p>
                <p>10:00 AM - 12:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Wednesday Prayer</p>
                <p>7:00 PM - 8:30 PM</p>
              </div>
              <div>
                <p className="font-medium">Friday Bible Study</p>
                <p>7:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Gospel Extension Ministries. All rights reserved. Built with ❤️ for the Kingdom.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;