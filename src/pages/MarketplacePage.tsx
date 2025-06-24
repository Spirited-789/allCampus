import React, { useState } from 'react';
import { Search, Filter, Plus, Heart, MessageCircle, DollarSign, Clock, User, MapPin } from 'lucide-react';

const MarketplacePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'textbooks', name: 'Textbooks' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'supplies', name: 'Supplies' }
  ];

  const mockItems = [
    {
      id: 1,
      title: 'Calculus Textbook - 12th Edition',
      price: 75,
      originalPrice: 150,
      image: 'https://images.pexels.com/photos/159751/book-math-mathematics-education-159751.jpeg?auto=compress&cs=tinysrgb&w=400',
      seller: 'Sarah M.',
      location: 'Math Building',
      timePosted: '2 hours ago',
      condition: 'Like New',
      category: 'textbooks',
      likes: 12,
      messages: 3
    },
    {
      id: 2,
      title: 'MacBook Air M1 - Perfect for Students',
      price: 850,
      originalPrice: 999,
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
      seller: 'Mike L.',
      location: 'Computer Lab',
      timePosted: '5 hours ago',
      condition: 'Excellent',
      category: 'electronics',
      likes: 28,
      messages: 8
    },
    {
      id: 3,
      title: 'Comfortable Study Desk with Drawers',
      price: 120,
      originalPrice: 200,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      seller: 'Emma R.',
      location: 'Dorm Building A',
      timePosted: '1 day ago',
      condition: 'Good',
      category: 'furniture',
      likes: 15,
      messages: 5
    },
    {
      id: 4,
      title: 'Scientific Calculator TI-84 Plus',
      price: 45,
      originalPrice: 90,
      image: 'https://images.pexels.com/photos/6238042/pexels-photo-6238042.jpeg?auto=compress&cs=tinysrgb&w=400',
      seller: 'Alex K.',
      location: 'Science Building',
      timePosted: '3 hours ago',
      condition: 'Like New',
      category: 'electronics',
      likes: 8,
      messages: 2
    },
    {
      id: 5,
      title: 'Art Supplies Bundle - Paints & Brushes',
      price: 35,
      originalPrice: 60,
      image: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=400',
      seller: 'Lisa P.',
      location: 'Art Studio',
      timePosted: '6 hours ago',
      condition: 'Good',
      category: 'supplies',
      likes: 6,
      messages: 1
    },
    {
      id: 6,
      title: 'Winter Jacket - Size Medium',
      price: 40,
      originalPrice: 80,
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
      seller: 'Tom S.',
      location: 'Student Center',
      timePosted: '1 day ago',
      condition: 'Very Good',
      category: 'clothing',
      likes: 4,
      messages: 2
    }
  ];

  const filteredItems = mockItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Marketplace</h1>
              <p className="text-gray-600">Buy and sell with fellow students on campus</p>
            </div>
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md">
              <Plus className="w-5 h-5 mr-2" />
              Sell Item
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
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                          ? 'bg-blue-50 text-blue-700 font-medium'
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:bg-red-50 transition-colors duration-200">
                      <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                    </button>
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-lg text-xs font-medium">
                        {item.condition}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-2xl font-bold text-blue-600">${item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{item.seller}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{item.timePosted}</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{item.messages}</span>
                        </div>
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

export default MarketplacePage;