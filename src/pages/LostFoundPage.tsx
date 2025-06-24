import React, { useState } from 'react';
import { Search, Plus, MapPin, Clock, User, Filter, AlertCircle, CheckCircle } from 'lucide-react';

const LostFoundPage = () => {
  const [activeTab, setActiveTab] = useState<'lost' | 'found'>('lost');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'documents', name: 'Documents' },
    { id: 'other', name: 'Other' }
  ];

  const lostItems = [
    {
      id: 1,
      title: 'iPhone 14 Pro - Space Black',
      description: 'Lost my phone near the library. Has a clear case with a PopSocket. Very important, contains all my notes!',
      category: 'electronics',
      location: 'Main Library',
      timePosted: '2 hours ago',
      reporter: 'Jessica M.',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
      reward: '$50',
      status: 'active'
    },
    {
      id: 2,
      title: 'Blue Backpack with Laptop',
      description: 'Navy blue Jansport backpack with my MacBook inside. Left it in the cafeteria during lunch.',
      category: 'accessories',
      location: 'Student Cafeteria',
      timePosted: '5 hours ago',
      reporter: 'Mike L.',
      image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
      reward: '$100',
      status: 'active'
    },
    {
      id: 3,
      title: 'Red Beanie Hat',
      description: 'My favorite red beanie that I wear everywhere. Think I left it in the gym locker room.',
      category: 'clothing',
      location: 'Campus Gym',
      timePosted: '1 day ago',
      reporter: 'Sam K.',
      image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400',
      reward: null,
      status: 'active'
    },
    {
      id: 4,
      title: 'Student ID Card',
      description: 'Lost my student ID somewhere between the dorms and the science building. Name: Alex Thompson.',
      category: 'documents',
      location: 'Science Building',
      timePosted: '3 hours ago',
      reporter: 'Alex T.',
      image: 'https://images.pexels.com/photos/6290/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&w=400',
      reward: null,
      status: 'found'
    }
  ];

  const foundItems = [
    {
      id: 5,
      title: 'Apple AirPods Pro',
      description: 'Found these AirPods in the music building practice room. Still in good condition.',
      category: 'electronics',
      location: 'Music Building',
      timePosted: '1 hour ago',
      reporter: 'Emma R.',
      image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'available'
    },
    {
      id: 6,
      title: 'Silver Bracelet',
      description: 'Beautiful silver bracelet found in the women\'s restroom near the library. Looks valuable.',
      category: 'accessories',
      location: 'Main Library',
      timePosted: '4 hours ago',
      reporter: 'Lisa P.',
      image: 'https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'available'
    },
    {
      id: 7,
      title: 'Calculus Textbook',
      description: 'Found this textbook in the math building. Owner\'s name is written inside: "Sarah Wilson".',
      category: 'other',
      location: 'Math Building',
      timePosted: '6 hours ago',
      reporter: 'Tom S.',
      image: 'https://images.pexels.com/photos/159751/book-math-mathematics-education-159751.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'claimed'
    },
    {
      id: 8,
      title: 'Black Umbrella',
      description: 'Large black umbrella left in the student center. It was raining yesterday, someone probably forgot it.',
      category: 'other',
      location: 'Student Center',
      timePosted: '1 day ago',
      reporter: 'Nina H.',
      image: 'https://images.pexels.com/photos/1004694/pexels-photo-1004694.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'available'
    }
  ];

  const activeItems = activeTab === 'lost' ? lostItems : foundItems;
  
  const filteredItems = activeItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusBadge = (status: string, type: 'lost' | 'found') => {
    if (type === 'lost') {
      return status === 'found' ? (
        <span className="inline-flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-lg text-xs font-medium">
          <CheckCircle className="w-3 h-3" />
          <span>Found</span>
        </span>
      ) : (
        <span className="inline-flex items-center space-x-1 bg-red-100 text-red-800 px-2 py-1 rounded-lg text-xs font-medium">
          <AlertCircle className="w-3 h-3" />
          <span>Missing</span>
        </span>
      );
    } else {
      return status === 'claimed' ? (
        <span className="inline-flex items-center space-x-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-lg text-xs font-medium">
          <CheckCircle className="w-3 h-3" />
          <span>Claimed</span>
        </span>
      ) : (
        <span className="inline-flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-lg text-xs font-medium">
          <AlertCircle className="w-3 h-3" />
          <span>Available</span>
        </span>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Lost & Found</h1>
              <p className="text-gray-600">Help your fellow students find their lost items</p>
            </div>
            <button className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors duration-200 shadow-sm hover:shadow-md">
              <Plus className="w-5 h-5 mr-2" />
              Report Item
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-orange-50 text-orange-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl mb-6">
              <button
                onClick={() => setActiveTab('lost')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'lost'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Lost Items ({lostItems.length})
              </button>
              <button
                onClick={() => setActiveTab('found')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'found'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Found Items ({foundItems.length})
              </button>
            </div>

            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {filteredItems.length} items
              </p>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Filter className="w-4 h-4" />
                  <span className="text-sm font-medium">Sort by</span>
                </button>
              </div>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map(item => (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="flex">
                    <div className="w-32 h-32 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 line-clamp-1">{item.title}</h3>
                        {getStatusBadge(item.status, activeTab)}
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                      
                      <div className="space-y-2 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{item.timePosted}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{item.reporter}</span>
                        </div>
                        {activeTab === 'lost' && 'reward' in item && item.reward && (
                          <div className="text-green-600 font-medium">
                            Reward: {item.reward}
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-4">
                        <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 text-sm font-medium">
                          {activeTab === 'lost' ? 'I Found This' : 'This Is Mine'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LostFoundPage;