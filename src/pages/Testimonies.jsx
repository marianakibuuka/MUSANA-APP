import React, { useState } from 'react';
import { Heart, Calendar, User, Share2, Plus, Filter, Star } from 'lucide-react';

const Testimonies = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    testimony: '',
    category: 'General',
    isAnonymous: false
  });

  const categories = ['All', 'Healing', 'Salvation', 'Provision', 'Restoration', 'Breakthrough', 'General'];

  const testimonies = [
    {
      id: 1,
      title: "Miraculous Healing from Cancer",
      author: "Grace Williams",
      date: "2024-01-10",
      category: "Healing",
      content: "Last year, I was diagnosed with stage 3 cancer. The doctors gave me little hope, but our church family rallied around me in prayer. Pastor Musana prayed over me during service, and I felt God's healing power. After months of treatment and prayer, my latest scan shows I'm completely cancer-free. God is faithful!",
      likes: 156,
      isAnonymous: false,
      image: "https://images.pexels.com/photos/8466825/pexels-photo-8466825.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "From Addiction to Freedom",
      author: "Anonymous",
      date: "2024-01-08",
      category: "Breakthrough",
      content: "I struggled with addiction for over 10 years. I had given up hope until I walked into Gospel Extension Ministries. The love and acceptance I found there, along with Pastor Musana's powerful preaching, changed my life. I've been clean for 8 months now and serving in the men's ministry. Jesus truly sets the captives free!",
      likes: 203,
      isAnonymous: true,
      image: "https://images.pexels.com/photos/8466830/pexels-photo-8466830.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Financial Breakthrough After Job Loss",
      author: "Michael Thompson",
      date: "2024-01-05",
      category: "Provision",
      content: "I lost my job of 15 years and was facing foreclosure. The church supported me through the hardest time of my life. Pastor Musana taught me about God's provision and faithfulness. Within 3 months, I found a better job with higher pay. God truly provides for His children!",
      likes: 89,
      isAnonymous: false,
      image: "https://images.pexels.com/photos/8466835/pexels-photo-8466835.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "Marriage Restored by God's Grace",
      author: "Linda & James Parker",
      date: "2024-01-03",
      category: "Restoration",
      content: "Our marriage was on the brink of divorce. We came to Pastor Musana for counseling, and he showed us God's design for marriage. Through prayer, forgiveness, and God's grace, our marriage is stronger than ever. We're now leading the marriage ministry to help other couples.",
      likes: 174,
      isAnonymous: false,
      image: "https://images.pexels.com/photos/8466802/pexels-photo-8466802.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Found Jesus at Age 65",
      author: "Robert Mitchell",
      date: "2023-12-28",
      category: "Salvation",
      content: "I spent 65 years running from God. My daughter invited me to church, and I reluctantly attended. Pastor Musana's message on God's love touched my heart. I gave my life to Jesus that day. At 65, I finally found the peace I'd been searching for my whole life. It's never too late for salvation!",
      likes: 267,
      isAnonymous: false,
      image: "https://images.pexels.com/photos/8466845/pexels-photo-8466845.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      title: "Healed from Depression and Anxiety",
      author: "Sarah Kim",
      date: "2023-12-25",
      category: "Healing",
      content: "I battled severe depression and anxiety for years. Medication helped, but I needed more. The love of the church family and Pastor Musana's teachings on God's love and purpose gave me hope. Through prayer and community support, I've found joy and peace again. God is my healer!",
      likes: 142,
      isAnonymous: false,
      image: "https://images.pexels.com/photos/8466804/pexels-photo-8466804.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const filteredTestimonies = testimonies.filter(testimony => {
    if (activeFilter === 'All') return true;
    return testimony.category === activeFilter;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Testimony submitted:', formData);
    setShowForm(false);
    setFormData({
      name: '',
      email: '',
      title: '',
      testimony: '',
      category: 'General',
      isAnonymous: false
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
            Testimonies
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrate God's faithfulness through the stories of our church family
          </p>
        </div>

        {/* Share Testimony Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto"
          >
            <Plus className="w-5 h-5" />
            <span>Share Your Testimony</span>
          </button>
        </div>

        {/* Testimony Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Share Your Testimony</h2>
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
                    Testimony Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., God's Healing Power in My Life"
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
                    {categories.filter(cat => cat !== 'All').map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Testimony
                  </label>
                  <textarea
                    name="testimony"
                    value={formData.testimony}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Share how God has worked in your life..."
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="isAnonymous"
                    checked={formData.isAnonymous}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label className="text-sm text-gray-700">
                    Share anonymously
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
                    Share Testimony
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Testimonies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonies.map(testimony => (
            <div key={testimony.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
              <div className="relative">
                <img 
                  src={testimony.image} 
                  alt={testimony.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {testimony.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{testimony.title}</h3>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{testimony.isAnonymous ? 'Anonymous' : testimony.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(testimony.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-4">{testimony.content}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-1 text-red-600 hover:text-red-800 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{testimony.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors">
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTestimonies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No testimonies found for this category.</p>
          </div>
        )}

        {/* Encouragement Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Your Story Matters</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Every testimony is a powerful reminder of God's faithfulness. Your story could be the 
              encouragement someone needs today. Don't hesitate to share how God has worked in your life.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;