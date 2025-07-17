import React from 'react';
import { Heart, Users, MapPin, Clock, Star, Award, BookOpen, Handshake } from 'lucide-react';

const About = () => {
  const leadership = [
    {
      name: "Pastor Musana",
      role: "Senior Pastor & Founder",
      image: "https://images.pexels.com/photos/8466804/pexels-photo-8466804.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Pastor Musana has been serving the Lord for over 20 years, leading Gospel Extension Ministries with a heart for evangelism and discipleship. His passion for God's Word and shepherding God's people has touched countless lives."
    },
    {
      name: "Minister Sarah Johnson",
      role: "Associate Pastor",
      image: "https://images.pexels.com/photos/8466825/pexels-photo-8466825.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Minister Sarah brings a heart for worship and youth ministry, serving alongside Pastor Musana in nurturing the spiritual growth of our congregation."
    },
    {
      name: "Elder David Williams",
      role: "Church Elder",
      image: "https://images.pexels.com/photos/8466830/pexels-photo-8466830.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Elder David provides wise counsel and leadership in church governance, supporting the vision of Gospel Extension Ministries."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Love",
      description: "We are committed to showing God's love through our actions and words to all people."
    },
    {
      icon: BookOpen,
      title: "Scripture",
      description: "The Bible is our foundation and guide for all aspects of life and ministry."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of fellowship and building strong relationships in Christ."
    },
    {
      icon: Handshake,
      title: "Service",
      description: "We are called to serve God and others with humility and dedication."
    }
  ];

  const ministries = [
    {
      name: "Sunday School",
      description: "Age-appropriate Bible study for all ages",
      time: "Sundays 9:00 AM"
    },
    {
      name: "Youth Ministry",
      description: "Engaging activities and discipleship for young people",
      time: "Fridays 6:00 PM"
    },
    {
      name: "Women's Fellowship",
      description: "Sisterhood, prayer, and spiritual growth",
      time: "Saturdays 2:00 PM"
    },
    {
      name: "Men's Brotherhood",
      description: "Fellowship and accountability for men",
      time: "Saturdays 7:00 AM"
    },
    {
      name: "Prayer Ministry",
      description: "Intercession and spiritual warfare",
      time: "Wednesdays 7:00 PM"
    },
    {
      name: "Outreach Program",
      description: "Community service and evangelism",
      time: "Monthly Events"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-sky-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Gospel Extension Ministries
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Building a community of faith, hope, and love under the leadership of Pastor Musana
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To spread the Gospel of Jesus Christ, disciple believers, and serve our community 
              with God's love and compassion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/8466835/pexels-photo-8466835.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Church Community" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-6">
                Gospel Extension Ministries was founded with a vision to reach souls for Christ 
                and build a strong community of believers. Under Pastor Musana's leadership, 
                we have grown from a small gathering to a thriving ministry that impacts lives 
                both locally and globally.
              </p>
              <p className="text-gray-600 mb-6">
                Our commitment remains steadfast: to preach the uncompromising Word of God, 
                provide spiritual guidance, and create an environment where everyone can 
                experience God's love and grow in their faith journey.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>500+ Members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>Est. 2010</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Gospel City</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide our ministry and community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-xl text-gray-600">
              Meet the dedicated leaders serving our ministry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{leader.role}</p>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ministries Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Ministries</h2>
            <p className="text-xl text-gray-600">
              Various ways to get involved and grow in faith
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((ministry, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{ministry.name}</h3>
                </div>
                <p className="text-gray-600 mb-3">{ministry.description}</p>
                <div className="flex items-center space-x-2 text-sm text-blue-600">
                  <Clock className="w-4 h-4" />
                  <span>{ministry.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Times */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Times</h2>
            <p className="text-xl text-gray-300">
              Join us for worship and fellowship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Sunday Service</h3>
              <p className="text-gray-300 mb-2">Main worship service</p>
              <p className="text-sky-400 font-medium">10:00 AM - 12:00 PM</p>
            </div>
            <div className="bg-blue-800 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Wednesday Prayer</h3>
              <p className="text-gray-300 mb-2">Midweek prayer meeting</p>
              <p className="text-sky-400 font-medium">7:00 PM - 8:30 PM</p>
            </div>
            <div className="bg-blue-800 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Friday Bible Study</h3>
              <p className="text-gray-300 mb-2">Deep dive into Scripture</p>
              <p className="text-sky-400 font-medium">7:00 PM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;