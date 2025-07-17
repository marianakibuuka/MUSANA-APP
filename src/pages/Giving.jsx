import React, { useState } from 'react';
import { Heart, CreditCard, DollarSign, Gift, Users, CheckCircle, Lock, Star } from 'lucide-react';

const Giving = () => {
  const [donationType, setDonationType] = useState('one-time');
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [givingCategory, setGivingCategory] = useState('General');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const presetAmounts = [25, 50, 100, 250, 500, 1000];
  const categories = ['General', 'Building Fund', 'Missions', 'Youth Ministry', 'Community Outreach', 'Emergency Fund'];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(0);
  };

  const getCurrentAmount = () => {
    return customAmount ? parseFloat(customAmount) : selectedAmount;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Give & Support
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Partner with us in spreading the Gospel and building God's kingdom through your generous giving
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">500+</h3>
            <p className="text-gray-600">Lives Touched</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">50+</h3>
            <p className="text-gray-600">Families Supported</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">25+</h3>
            <p className="text-gray-600">Community Programs</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">10+</h3>
            <p className="text-gray-600">Mission Trips</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Giving Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h2>
              
              {/* Donation Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Donation Type
                </label>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                      donationType === 'one-time'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                      donationType === 'monthly'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Amount
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {presetAmounts.map(amount => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition-colors ${
                        selectedAmount === amount
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Category Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Give To
                </label>
                <select
                  value={givingCategory}
                  onChange={(e) => setGivingCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Payment Method
                </label>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-colors flex items-center justify-center space-x-2 ${
                      paymentMethod === 'card'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>Credit/Debit Card</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('bank')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-colors flex items-center justify-center space-x-2 ${
                      paymentMethod === 'bank'
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    <DollarSign className="w-5 h-5" />
                    <span>Bank Transfer</span>
                  </button>
                </div>
              </div>

              {/* Payment Form */}
              {paymentMethod === 'card' && (
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVC
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Personal Information */}
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Security Notice */}
              <div className="flex items-center space-x-2 mb-6 p-4 bg-green-50 rounded-lg">
                <Lock className="w-5 h-5 text-green-600" />
                <span className="text-sm text-green-700">
                  Your payment information is secure and encrypted
                </span>
              </div>

              {/* Donation Summary */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-blue-900 mb-2">Donation Summary</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Amount:</span>
                    <span>${getCurrentAmount()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Type:</span>
                    <span className="capitalize">{donationType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span>{givingCategory}</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-2">
                    <span>Total:</span>
                    <span>${getCurrentAmount()}</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Complete Donation</span>
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Why Give */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Give?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Support gospel preaching and evangelism</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Help families in need within our community</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Fund youth programs and discipleship</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Expand ministry reach and impact</p>
                </div>
              </div>
            </div>

            {/* Scripture */}
            <div className="bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Scripture on Giving</h3>
              <blockquote className="text-sm italic mb-3">
                "Give, and it will be given to you. A good measure, pressed down, shaken together 
                and running over, will be poured into your lap. For with the measure you use, 
                it will be measured to you."
              </blockquote>
              <cite className="text-sm">- Luke 6:38</cite>
            </div>

            {/* Other Ways to Give */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Ways to Give</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900">Mail Check</h4>
                  <p className="text-sm text-gray-600">
                    123 Faith Street<br />
                    Gospel City, GC 12345
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Mobile App</h4>
                  <p className="text-sm text-gray-600">
                    Give through our mobile app (Coming Soon)
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Text to Give</h4>
                  <p className="text-sm text-gray-600">
                    Text "GIVE" to (555) 123-GIVE
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Questions?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Have questions about giving or need assistance? We're here to help.
              </p>
              <a
                href="/contact"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Giving;