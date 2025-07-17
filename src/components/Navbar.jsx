import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Home, BookOpen, Calendar, Users, MessageCircle, Phone, DollarSign } from 'lucide-react';

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Sermons', href: '/sermons', icon: BookOpen },
    { name: 'Devotions', href: '/devotions', icon: Heart },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'Prayer', href: '/prayer-requests', icon: MessageCircle },
    { name: 'Testimonies', href: '/testimonies', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Giving', href: '/giving', icon: DollarSign },
  ];

  return (
    <nav className="bg-blue-900 text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl">Musana App</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                      location.pathname === item.href
                        ? 'bg-sky-500 text-white'
                        : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center space-x-2 ${
                    location.pathname === item.href
                      ? 'bg-sky-500 text-white'
                      : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;