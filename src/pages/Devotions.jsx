import React, { useState } from 'react';
import { Calendar, Heart, BookOpen, Share2, Bell, ArrowLeft, ArrowRight } from 'lucide-react';

const Devotions = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [expandedCards, setExpandedCards] = useState({});

  const devotions = [
    {
      id: 1,
      date: "2024-01-15",
      title: "Trust in His Timing",
      verse: "Ecclesiastes 3:1",
      verseText: "To every thing there is a season, and a time to every purpose under the heaven.",
      content: "God's timing is perfect, even when we can't understand it. In our fast-paced world, we often want immediate answers and instant results. But God operates on a different timeline - one that's centered on His perfect will and our ultimate good. Today, take a moment to reflect on areas where you've been trying to rush ahead of God's timing. Surrender your timeline to His, and trust that He knows exactly when to open doors, provide answers, and fulfill His promises in your life.",
      prayer: "Lord, help me to trust in Your perfect timing. When I feel anxious about the future or impatient with delays, remind me that You are working all things together for my good. Give me peace to wait on You and wisdom to recognize Your timing in my life. Amen.",
      author: "Pastor Musana"
    },
    {
      id: 2,
      date: "2024-01-14",
      title: "The Power of Gratitude",
      verse: "1 Thessalonians 5:18",
      verseText: "In every thing give thanks: for this is the will of God in Christ Jesus concerning you.",
      content: "Gratitude transforms our perspective and opens our hearts to see God's goodness in every situation. When we choose to be thankful, we shift our focus from what we lack to what we have been blessed with. This doesn't mean we ignore our challenges or pretend everything is perfect. Rather, gratitude helps us recognize that even in difficult times, God is still working and caring for us. Make it a practice to find something to be grateful for each day, no matter how small.",
      prayer: "Heavenly Father, thank You for Your countless blessings in my life. Help me to cultivate a heart of gratitude that sees Your goodness even in difficult circumstances. May my thankfulness be a testimony of Your faithfulness to others. Amen.",
      author: "Pastor Musana"
    },
    {
      id: 3,
      date: "2024-01-13",
      title: "Walking in Faith",
      verse: "Hebrews 11:1",
      verseText: "Now faith is the substance of things hoped for, the evidence of things not seen.",
      content: "Faith is not just believing in God's existence; it's trusting Him with our entire lives. It's stepping forward when we can't see the whole staircase, knowing that God is faithful to guide each step. Faith grows through relationship with God, through His Word, and through experiencing His faithfulness in our daily lives. When doubts arise, remember that faith isn't the absence of questions - it's choosing to trust God despite our questions.",
      prayer: "Lord, increase my faith. Help me to trust You more deeply and to walk confidently in Your promises. When doubt creeps in, remind me of Your faithfulness in the past and give me courage to step forward in faith. Amen.",
      author: "Pastor Musana"
    }
  ];

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const navigateDate = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + direction);
    setCurrentDate(newDate);
  };

  // Find devotion for current date (for demo, we'll cycle through available devotions)
  const currentDevotion = devotions[Math.abs(currentDate.getDate() - 1) % devotions.length];

  const toggleExpanded = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Daily Devotions
          </h1>
          <p className="text-xl text-gray-600">
            Start your day with spiritual nourishment and inspiration
          </p>
        </div>

        {/* Date Navigation */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigateDate(-1)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>
            
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Calendar className="w-5 h-5" />
                <span className="text-lg font-semibold">{formatDate(currentDate)}</span>
              </div>
            </div>
            
            <button
              onClick={() => navigateDate(1)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>Next</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Notification Toggle */}
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <Bell className="w-4 h-4" />
            <span>Get daily devotion notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        {/* Devotion Content */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-sky-600 text-white p-6">
            <div className="flex items-center space-x-2 mb-2">
              <Heart className="w-6 h-6" />
              <span className="text-sm font-medium">Today's Devotion</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{currentDevotion.title}</h2>
          </div>

          <div className="p-6">
            {/* Scripture Verse */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                 <span className="font-semibold text-blue-900">{currentDevotion.verse}</span>
              </div>
              <p className="text-gray-700 italic text-lg">"{currentDevotion.verseText}"</p>
            </div>

            {/* Devotion Content */}
            <div className="prose  prose-lg max-w-none mb-6">
              <p className="text-gray-700 leading-relaxed">{currentDevotion.content}</p>
            </div>

            {/* Prayer */}
            <div className="bg-sky-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-sky-900 mb-2">Prayer for Today</h3>
              <p className="text-sky-800 italic">{currentDevotion.prayer}</p>
            </div>

            {/* Author */}
            <div className="flex items-center justify-between border-t pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{currentDevotion.author}</p>
                  <p className="text-sm text-gray-500">Gospel Extension Ministries</p>
                </div>
              </div>
              
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Archive Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Devotions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devotions.map(devotion => (
              <div key={devotion.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">
                    {new Date(devotion.date).toLocaleDateString()}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{devotion.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{devotion.verse}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {expandedCards[devotion.id] 
                    ? devotion.content 
                    : `${devotion.content.substring(0, 120)}...`
                  }
                </p>
                <button 
                  onClick={() => toggleExpanded(devotion.id)}
                  className="w-full sm:w-auto mt-4 px-4 py-2 text-blue-600 hover:text-blue-800 text-sm font-medium border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center sm:justify-start"
                >
                  {expandedCards[devotion.id] ? 'Read Less' : 'Read More'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devotions;