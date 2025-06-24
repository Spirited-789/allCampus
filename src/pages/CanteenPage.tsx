import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Clock, Star, Filter, Search } from 'lucide-react';

const CanteenPage = () => {
  const [cart, setCart] = useState<{[key: number]: number}>({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'mains', name: 'Main Dishes' },
    { id: 'snacks', name: 'Snacks' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Chicken Caesar Salad',
      price: 8.99,
      image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'mains',
      description: 'Fresh romaine lettuce, grilled chicken, parmesan cheese, croutons',
      rating: 4.5,
      prepTime: '10-15 min',
      popular: true
    },
    {
      id: 2,
      name: 'Margherita Pizza Slice',
      price: 4.50,
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'mains',
      description: 'Classic pizza with fresh mozzarella, tomato sauce, and basil',
      rating: 4.8,
      prepTime: '5-8 min',
      popular: true
    },
    {
      id: 3,
      name: 'Fresh Fruit Smoothie',
      price: 5.25,
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'beverages',
      description: 'Blend of seasonal fruits with yogurt and honey',
      rating: 4.3,
      prepTime: '3-5 min',
      popular: false
    },
    {
      id: 4,
      name: 'Turkey Club Sandwich',
      price: 7.75,
      image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'mains',
      description: 'Triple-decker with turkey, bacon, lettuce, tomato, and mayo',
      rating: 4.6,
      prepTime: '8-12 min',
      popular: false
    },
    {
      id: 5,
      name: 'Chocolate Chip Cookies',
      price: 2.99,
      image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'desserts',
      description: 'Freshly baked chocolate chip cookies (pack of 3)',
      rating: 4.7,
      prepTime: '2-3 min',
      popular: true
    },
    {
      id: 6,
      name: 'Iced Coffee',
      price: 3.50,
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'beverages',
      description: 'Cold brew coffee with ice and your choice of milk',
      rating: 4.4,
      prepTime: '2-4 min',
      popular: false
    },
    {
      id: 7,
      name: 'Veggie Wrap',
      price: 6.50,
      image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'mains',
      description: 'Grilled vegetables with hummus in a whole wheat tortilla',
      rating: 4.2,
      prepTime: '6-10 min',
      popular: false
    },
    {
      id: 8,
      name: 'Potato Chips',
      price: 1.99,
      image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'snacks',
      description: 'Crispy kettle-cooked potato chips',
      rating: 4.0,
      prepTime: '1 min',
      popular: false
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (itemId: number) => {
    setCart(prev => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find(item => item.id === parseInt(itemId));
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const getCartItemCount = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Campus Canteen</h1>
              <p className="text-gray-600">Fresh food, fast service, convenient pickup</p>
            </div>
            {getCartItemCount() > 0 && (
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors duration-200 shadow-sm hover:shadow-md">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart ({getCartItemCount()})</span>
                  <span className="ml-2 font-bold">${getCartTotal().toFixed(2)}</span>
                </button>
              </div>
            )}
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Menu</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search food items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                          ? 'bg-emerald-50 text-emerald-700 font-medium'
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

            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    {item.popular && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-lg text-xs font-medium flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-current" />
                          <span>Popular</span>
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-white text-emerald-600 px-2 py-1 rounded-lg text-xs font-medium flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{item.prepTime}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <span className="text-lg font-bold text-emerald-600">${item.price}</span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Star className="w-4 h-4 fill-current text-yellow-400" />
                        <span>{item.rating}</span>
                      </div>
                      
                      {cart[item.id] ? (
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-medium w-8 text-center">{cart[item.id]}</span>
                          <button
                            onClick={() => addToCart(item.id)}
                            className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition-colors duration-200"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item.id)}
                          className="flex items-center space-x-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
                        >
                          <Plus className="w-4 h-4" />
                          <span className="text-sm font-medium">Add</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Cart Summary */}
      {getCartItemCount() > 0 && (
        <div className="fixed bottom-6 right-6 bg-emerald-600 text-white p-4 rounded-2xl shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              <div className="font-semibold">{getCartItemCount()} items</div>
              <div className="text-emerald-100">Total: ${getCartTotal().toFixed(2)}</div>
            </div>
            <button className="bg-white text-emerald-600 px-4 py-2 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CanteenPage;