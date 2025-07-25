import React, { useState } from 'react';
import { Play, Download, Clock, Calendar, Search, Filter, Video, Volume2, FileText } from 'lucide-react';

const Sermons = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Faith', 'Hope', 'Love', 'Healing', 'Prosperity', 'Salvation'];

  const sermons = [
    {
      id: 1,
      title: "Walking in Faith: Trusting God's Plan",
      pastor: "Pastor Musana",
      date: "2024-01-15",
      duration: "45 min",
      category: "Faith",
      type: "video",
      thumbnail: "https://images.pexels.com/photos/8466835/pexels-photo-8466835.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "A powerful message about trusting God's plan even when we can't see the way forward."
    },
    {
      id: 2,
      title: "The Power of Prayer in Difficult Times",
      pastor: "Pastor Musana",
      date: "2024-01-08",
      duration: "38 min",
      category: "Hope",
      type: "audio",
      thumbnail: "https://images.pexels.com/photos/8466804/pexels-photo-8466804.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Discovering how prayer becomes our anchor during life's storms."
    },
    {
      id: 3,
      title: "God's Unconditional Love",
      pastor: "Pastor Musana",
      date: "2024-01-01",
      duration: "42 min",
      category: "Love",
      type: "video",
      thumbnail: "https://images.pexels.com/photos/8466830/pexels-photo-8466830.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Understanding the depth and breadth of God's love for His children."
    },
    {
      id: 4,
      title: "Healing Through Scripture",
      pastor: "Pastor Musana",
      date: "2023-12-25",
      duration: "50 min",
      category: "Healing",
      type: "text",
      thumbnail: "https://images.pexels.com/photos/8466802/pexels-photo-8466802.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Exploring biblical promises of healing and restoration."
    },
    {
      id: 5,
      title: "Prosperity of the Soul",
      pastor: "Pastor Musana",
      date: "2023-12-18",
      duration: "35 min",
      category: "Prosperity",
      type: "audio",
      thumbnail: "https://images.pexels.com/photos/8466825/pexels-photo-8466825.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "True prosperity begins with the condition of our heart and soul."
    },
    {
      id: 6,
      title: "The Gift of Salvation",
      pastor: "Pastor Musana",
      date: "2023-12-11",
      duration: "48 min",
      category: "Salvation",
      type: "video",
      thumbnail: "https://images.pexels.com/photos/8466845/pexels-photo-8466845.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Understanding the free gift of salvation through Jesus Christ."
    }
  ];

  const filteredSermons = sermons.filter(sermon => {
    const matchesCategory = selectedCategory === 'All' || sermon.category === selectedCategory;
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'audio': return <Volume2 className="w-4 h-4" />;
      case 'text': return <FileText className="w-4 h-4" />;
      default: return <Play className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sermons Library
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore Pastor Musana's inspiring messages and deepen your faith journey
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search sermons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center space-x-2">
          0  <Filter className="w-5 h-5 text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSermons.map(sermon => (
            <div key={sermon.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
              <div className="relative">
                <img 
                  src={sermon.thumbnail} 
                  alt={sermon.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                    sermon.type === 'video' ? 'bg-red-500' : 
                    sermon.type === 'audio' ? 'bg-green-500' : 'bg-blue-500'
                  }`}>
                    {sermon.type.toUpperCase()}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <button className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors">
                    <Play className="w-6 h-6 text-blue-600" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600">{sermon.category}</span>
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{sermon.duration}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{sermon.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{sermon.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(sermon.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors">
                      {getTypeIcon(sermon.type)}
                      <span className="text-sm font-medium">Play</span>
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSermons.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No sermons found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sermons;