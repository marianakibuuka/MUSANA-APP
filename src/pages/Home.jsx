import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, BookOpen, Heart, Users, Calendar, MessageCircle } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Sermons Library',
      description: 'Access our collection of inspiring sermons by Pastor Musana',
      link: '/sermons',
      color: 'bg-blue-500'
    },
    {
      icon: Heart,
      title: 'Daily Devotions',
      description: 'Start your day with spiritual guidance and reflection',
      link: '/devotions',
      color: 'bg-sky-500'
    },
    {
      icon: Users,
      title: 'About Our Church',
      description: 'Learn about Gospel Extension Ministries and our mission',
      link: '/about',
      color: 'bg-blue-600'
    },
    {
      icon: Calendar,
      title: 'Events & Livestreams',
      description: 'Stay updated with upcoming services and events',
      link: '/events',
      color: 'bg-sky-600'
    },
    {
      icon: MessageCircle,
      title: 'Prayer Requests',
      description: 'Submit your prayer requests and pray for others',
      link: '/prayer-requests',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'Testimonies',
      description: 'Share and read inspiring faith stories from our community',
      link: '/testimonies',
      color: 'bg-sky-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-sky-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-sky-400">Musana App</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Your spiritual companion for accessing sermons, devotions, and staying connected 
              with Gospel Extension Ministries under Pastor Henry Musana's leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/sermons" 
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Latest Sermon</span>
              </Link>
              <Link 
                to="/devotions" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>Today's Devotion</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Grow Your Faith Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the tools and resources you need to deepen your relationship with God
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 group"
                >
                  <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-sky-600">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic mb-6">
            "Faith is not the belief that God will do what you want. It is the belief that God will do what is right."
          </blockquote>
          <cite className="text-sky-400 font-semibold">- Pastor Musana</cite>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of a growing family of believers. Connect with us and experience God's love in community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Get In Touch
            </Link>
            <Link 
              to="/giving" 
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Support Ministry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;