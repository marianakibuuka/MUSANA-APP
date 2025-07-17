import React, { useState } from 'react';
import { Send, Heart, Clock, User, Shield, MessageCircle, Filter, Plus } from 'lucide-react';

const PrayerRequests = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    request: '',
    category: 'General',
    isAnonymous: false,
    isUrgent: false
  });

  const categories = ['General', 'Health', 'Family', 'Financial', 'Spiritual', 'Ministry'];

  const prayerRequests = [
    {
      id: 1,
      title: "Healing for My Mother",
      category: "Health",
      author: "Sarah J.",
      date: "2024-01-15",
      content: "Please pray for my mother who is undergoing surgery this week. Pray for the doctors' wisdom and for her complete recovery.",
      prayerCount: 45,
      isUrgent: true,
      isAnonymous: false,
      prayers: [
        { user: "John D.", message: "Praying for your mother's complete healing in Jesus' name." },
        { user: "Mary K.", message: "Lifting your family up in prayer. God is faithful!" }
      ]
    },
    {
      id: 2,
      title: "Job Search and Provision",
      category: "Financial",
      author: "Anonymous",
      date: "2024-01-14",
      content: "I've been unemployed for 6 months. Please pray for God's provision and that I find the right job opportunity soon.",
      prayerCount: 32,
      isUrgent: false,
      isAnonymous: true,
      prayers: [
        { user: "Pastor M.", message: "Trusting God to open doors for you. His timing is perfect." },
        { user: "Lisa R.", message: "Praying for breakthrough and God's perfect will in your life." }
      ]
    },
    {
      id: 3,
      title: "Struggling with Anxiety",
      category: "Spiritual",
      author: "Michael T.",
      date: "2024-01-13",
      content: "I've been dealing with anxiety and fear. Please pray for God's peace and strength to overcome these challenges.",
      prayerCount: 28,
      isUrgent: false,
      isAnonymous: false,
      prayers: [
        { user: "Elder W.", message: "Philippians 4:6-7 - God's peace surpasses all understanding." },
        { user: "Grace L.", message: "Praying for God's perfect peace to fill your heart and mind." }
      ]
    },
    {
      id: 4,
      title: "Marriage Restoration",
      category: "Family",
      author: "Anonymous",
      date: "2024-01-12",
      content: "My marriage is going through a difficult season. Please pray for healing, forgiveness, and restoration.",
      prayerCount: 67,
      isUrgent: true,
      isAnonymous: true,
      prayers: [
        { user: "Helen M.", message: "Praying for God's healing touch on your marriage." },
        { user: "David K.", message: "Believing God for restoration and renewed love." }
      ]
    },
    {
      id: 5,
      title: "Wisdom for Ministry Direction",
      category: "Ministry",
      author: "Robert C.",
      date: "2024-01-11",
      content: "Seeking God's guidance for the direction of our youth ministry. Please pray for wisdom and clarity.",
      prayerCount: 19,
      isUrgent: false,
      isAnonymous: false,
      prayers: [
        { user: "Pastor M.", message: "Praying for God's clear direction and anointing on the ministry." }
      ]
    }
  ];

  const filteredRequests = prayerRequests.filter(request => {
    if (activeTab === 'all') return true;
    if (activeTab === 'urgent') return request.isUrgent;
    return request.category.toLowerCase() === activeTab;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Prayer request submitted:', formData);
    setShowForm(false);
    setFormData({
      name: '',
      email: '',
      title: '',
      request: '',
      category: 'General',
      isAnonymous: false,
      isUrgent: false
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Prayer Requests
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share your prayer needs with our community and pray for others
          </p>
        </div>

        {/* Submit Prayer Request Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto"
          >
            <Plus className="w-5 h-5" />
            <span>Submit Prayer Request</span>
          </button>
        </div>

        {/* Prayer Request Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Submit Prayer Request</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required={!formData.isAnonymous}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prayer Request Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prayer Request Details
                  </label>
                  <textarea
                    name="request"
                    value={formData.request}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="isAnonymous"
                      checked={formData.isAnonymous}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Submit anonymously</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="isUrgent"
                      checked={formData.isUrgent}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                    />
                    <span className="text-sm text-gray-700">Urgent prayer needed</span>
                  </label>
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {['all', 'urgent', 'health', 'family', 'financial', 'spiritual', 'ministry'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Prayer Requests */}
        <div className="space-y-6">
          {filteredRequests.map(request => (
            <div key={request.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{request.title}</h3>
                    {request.isUrgent && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                        Urgent
                      </span>
                    )}
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {request.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{request.isAnonymous ? 'Anonymous' : request.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{new Date(request.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{request.prayerCount} prayers</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-green-600">Confidential</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{request.content}</p>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">Prayer Responses:</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <Heart className="w-4 h-4" />
                    <span>I'm Praying</span>
                  </button>
                </div>
                
                <div className="space-y-2">
                  {request.prayers.map((prayer, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1">
                        <MessageCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-gray-900">{prayer.user}</span>
                      </div>
                      <p className="text-sm text-gray-700">{prayer.message}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-3">
                  <textarea
                    placeholder="Add your prayer or encouragement..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    rows="2"
                  />
                  <div className="flex justify-end mt-2">
                    <button className="bg-sky-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sky-700 transition-colors flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send Prayer</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRequests.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No prayer requests found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrayerRequests;