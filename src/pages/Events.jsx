import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Play, ExternalLink, Bell, Filter } from 'lucide-react';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('upcoming');

  const filters = ['All', 'Worship', 'Bible Study', 'Community', 'Special Events'];

  const events = [
    {
      id: 1,
      title: "Sunday Worship Service",
      type: "Worship",
      date: "2024-01-21",
      time: "10:00 AM",
      endTime: "12:00 PM",
      location: "Main Sanctuary",
      description: "Join us for our weekly worship service with Pastor Musana.",
      isLive: true,
      recurring: "Weekly",
      attendees: 250,
      image: "https://images.pexels.com/photos/8466835/pexels-photo-8466835.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      id: 2,
      title: "Wednesday Prayer Meeting",
      type: "Bible Study",
      date: "2024-01-24",
      time: "7:00 PM",
      endTime: "8:30 PM",
      location: "Prayer Room",
      description: "Midweek prayer and intercession for our community and nation.",
      isLive: false,
      recurring: "Weekly",
      attendees: 80,
      image: "https://images.pexels.com/photos/8466804/pexels-photo-8466804.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      id: 3,
      title: "Youth Revival Night",
      type: "Special Events",
      date: "2024-01-26",
      time: "6:00 PM",
      endTime: "9:00 PM",
      location: "Main Sanctuary",
      description: "A special night of worship and ministry focused on our youth.",
      isLive: false,
      recurring: "Monthly",
      attendees: 150,
      image: "https://images.pexels.com/photos/8466825/pexels-photo-8466825.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      id: 4,
      title: "Community Outreach",
      type: "Community",
      date: "2024-01-28",
      time: "9:00 AM",
      endTime: "3:00 PM",
      location: "Community Center",
      description: "Serving our local community with food, clothing, and the Gospel.",
      isLive: false,
      recurring: "Monthly",
      attendees: 50,
      image: "https://images.pexels.com/photos/8466830/pexels-photo-8466830.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      id: 5,
      title: "Women's Conference 2024",
      type: "Special Events",
      date: "2024-02-15",
      time: "9:00 AM",
      endTime: "5:00 PM",
      location: "Conference Hall",
      description: "Annual women's conference featuring inspiring speakers and workshops.",
      isLive: false,
      recurring: "Annual",
      attendees: 300,
      image: "https://images.pexels.com/photos/8466802/pexels-photo-8466802.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      id: 6,
      title: "Men's Breakfast Fellowship",
      type: "Community",
      date: "2024-02-03",
      time: "7:00 AM",
      endTime: "9:00 AM",
      location: "Fellowship Hall",
      description: "Monthly fellowship breakfast for all men in the church.",
      isLive: false,
      recurring: "Monthly",
      attendees: 60,
      image: "https://images.pexels.com/photos/8466845/pexels-photo-8466845.jpeg?auto=compress&cs=tinysrgb&w=500"
    }
  ];

  const filteredEvents = events.filter(event => {
    if (activeFilter === 'All') return true;
    return event.type === activeFilter;
  });

  const upcomingEvents = filteredEvents.filter(event => new Date(event.date) >= new Date());
  const pastEvents = filteredEvents.filter(event => new Date(event.date) < new Date());

  const displayEvents = viewMode === 'upcoming' ? upcomingEvents : pastEvents;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Events & Livestreams
          </h1>
          <p className="text-xl text-gray-600">
            Stay connected with our church activities and join us online
          </p>
        </div>

        {/* Live Stream Banner */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <div>
                <h3 className="text-lg font-semibold">Live Now: Sunday Worship Service</h3>
                <p className="text-red-100">Pastor Musana is ministering on "Walking in Faith"</p>
              </div>
            </div>
            <button className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors flex items-center space-x-2">
              <Play className="w-4 h-4" />
              <span>Watch Live</span>
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* View Mode Toggle */}
          <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => setViewMode('upcoming')}
              className={`px-4 py-2 font-medium transition-colors ${
                viewMode === 'upcoming'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setViewMode('past')}
              className={`px-4 py-2 font-medium transition-colors ${
                viewMode === 'past'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Past Events
            </button>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <div className="flex space-x-2">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayEvents.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                {event.isLive && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>LIVE</span>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  {event.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{event.time} - {event.endTime}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} expected</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">{event.recurring}</span>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
                      <Bell className="w-4 h-4" />
                    </button>
                    {event.isLive ? (
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center space-x-1">
                        <Play className="w-4 h-4" />
                        <span>Watch</span>
                      </button>
                    ) : (
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-1">
                        <ExternalLink className="w-4 h-4" />
                        <span>Details</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {displayEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found for the selected filter.</p>
          </div>
        )}

        {/* Calendar Integration */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Add to Your Calendar</h3>
          <p className="text-gray-600 mb-6">
            Stay updated with all our events by subscribing to our calendar
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe to Google Calendar
            </button>
            <button className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              Download iCal
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Enable Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;