import React, { useState } from 'react';
import { Search, Car, DollarSign, Clock3, Shield, Star, ChevronDown, Facebook, Twitter, Instagram, Youtube, MapPin, Filter, Calendar, Tag, Award, ThumbsUp, Users, Zap, Calculator, ArrowRight, Info, FileText, Settings, Truck, Sailboat, Bike, Package, Tractor } from 'lucide-react';

// Defining interfaces for our data types
interface Brand {
  name: string;
  count: string;
  logo: string;
}

interface Listing {
  id: number;
  title: string;
  price: number;
  image: string;
  mileage: string;
  location: string;
  endTime: string;
  bids: number;
  rating: number;
  features: string[];
}

interface Review {
  id: number;
  title: string;
  image: string;
  rating: number;
}

interface Category {
  name: string;
  icon: React.FC<any>;
  categories?: string[];
  emoji?: string;
}

function App() {
  const [activeTab, setActiveTab] = useState('Buy');
  const [selectedMake, setSelectedMake] = useState('All makes');
  const [selectedModel, setSelectedModel] = useState('All models');
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [selectedPrice, setSelectedPrice] = useState('Any Price');
  const [selectedDistance, setSelectedDistance] = useState('Any Distance');
  const [budget, setBudget] = useState('25000');
  
  const popularBrands = [
    { name: 'Toyota', count: '2,345', logo: 'https://images.unsplash.com/photo-1611016186353-9af58c69c533?auto=format&fit=crop&w=100' },
    { name: 'Honda', count: '1,987', logo: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=100' },
    { name: 'Ford', count: '1,756', logo: 'https://images.unsplash.com/photo-1589558928675-a09badc3a9fd?auto=format&fit=crop&w=100' },
    { name: 'Chevrolet', count: '1,543', logo: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=100' },
    { name: 'BMW', count: '987', logo: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=100' },
    { name: 'Mercedes', count: '876', logo: 'https://images.unsplash.com/photo-1583356322882-85559b472f56?auto=format&fit=crop&w=100' },
  ];

  const years = ['All Years', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016'];
  const prices = ['Any Price', 'Under $10,000', '$10,000 - $20,000', '$20,000 - $30,000', '$30,000 - $40,000', '$40,000+'];
  const distances = ['Any Distance', '10 miles', '25 miles', '50 miles', '100 miles', '200 miles'];
  const makes = ['All makes', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Audi', 'Lexus'];
  const models = ['All models', 'Camry', 'Civic', 'F-150', 'Silverado', 'X5', 'C-Class', 'A4', 'RX'];

  const automobileCategories = ['Car', 'Truck', 'SUV', 'Van', 'Other'];
  const motorcycleCategories = ['Sport', 'Cruiser', 'Touring', 'Off-Road', 'Scooter', 'Other'];
  const boatCategories = ['Power Boat', 'Sailboat', 'Fishing Boat', 'Yacht', 'Pontoon', 'Other'];
  const equipmentCategories = ['Excavator', 'Bulldozer', 'Loader', 'Vibratory Roller', 'Crane', 'Tractor', 'Other'];
  const miscCategories = ['Parts', 'Accessories', 'Other'];

  const featuredListings = [
    {
      id: 1,
      title: '2020 Tesla Model 3 Long Range',
      price: 39900,
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800',
      mileage: '12,500',
      location: 'San Francisco, CA',
      endTime: '2h 45m',
      bids: 23,
      rating: 4.8,
      features: ['Autopilot', 'Premium Interior', 'All-Wheel Drive']
    },
    {
      id: 2,
      title: '2019 Ford F-150 Raptor',
      price: 32500,
      image: 'https://images.unsplash.com/photo-1570733117311-d990c3816c47?auto=format&fit=crop&w=800',
      mileage: '25,300',
      location: 'Austin, TX',
      endTime: '4h 15m',
      bids: 18,
      rating: 4.6,
      features: ['Off-Road Package', 'Tow Package', 'Crew Cab']
    },
    {
      id: 3,
      title: '2021 BMW X5 M Sport',
      price: 58900,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800',
      mileage: '8,900',
      location: 'Miami, FL',
      endTime: '1h 30m',
      bids: 31,
      rating: 4.9,
      features: ['M Sport Package', 'Panoramic Roof', 'Executive Package']
    }
  ];

  const categories = [
    { name: 'Cars', icon: Car },
    { name: 'Trucks', icon: Truck },
    { name: 'SUVs', icon: Car },
    { name: 'Boats', icon: Sailboat },
    { name: 'Motorcycles', icon: Bike }
  ];

  const reviews = [
    {
      id: 1,
      title: '2024 Toyota RAV4 Review',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800',
      rating: 4.5
    },
    {
      id: 2,
      title: '2024 Honda CR-V Review',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800',
      rating: 4.3
    },
    {
      id: 3,
      title: '2024 Ford Mustang Review',
      image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=800',
      rating: 4.7
    }
  ];

  const carTypes = [
    'SUV', 'Sedan', 'Truck', 'Coupe', 'Wagon', 'Van', 'Hatchback', 'Convertible'
  ];

  const sellCategories = [
    { name: 'Automobile', icon: Car, categories: automobileCategories, emoji: '🚗' },
    { name: 'Motorcycle', icon: Bike, categories: motorcycleCategories, emoji: '🏍️' },
    { name: 'Watercraft', icon: Sailboat, categories: boatCategories, emoji: '⛵' },
    { name: 'Equipment', icon: Tractor, categories: equipmentCategories, emoji: '🚜' },
    { name: 'Miscellaneous', icon: Package, categories: miscCategories, emoji: '📦' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">QuickAuction</h1>
            <div className="hidden md:flex items-center space-x-6 ml-10">
              <a href="#" className="text-gray-600 hover:text-gray-900">Browse</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Sell</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">How It Works</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Research</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 px-3 py-2">
              Sign In
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded-[3px] hover:bg-primary-dark">
              Register
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center text-white mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Car shopping your way
            </h1>
            <p className="text-xl text-blue-100">
              List your vehicle today and watch as buyers compete with bids to give you the best market value.
            </p>
          </div>

          {/* Search Tabs */}
          <div className="bg-white rounded-[3px] shadow-lg p-6 max-w-5xl mx-auto">
            {/* Tabs */}
            <div className="flex mb-6">
              <button 
                onClick={() => setActiveTab('Buy')}
                className={`flex-1 py-3 text-center font-medium ${activeTab === 'Buy' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-l-[3px]`}
              >
                Buy
              </button>
              <button 
                onClick={() => setActiveTab('Sell')}
                className={`flex-1 py-3 text-center font-medium ${activeTab === 'Sell' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-r-[3px]`}
              >
                Sell
              </button>
            </div>

            {activeTab === 'Buy' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <select 
                    className="w-full px-4 py-3 border border-gray-200 rounded-[3px] focus:outline-none focus:border-primary bg-white"
                    value={selectedMake}
                    onChange={(e) => setSelectedMake(e.target.value)}
                  >
                    {makes.map(make => (
                      <option key={make}>{make}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <select 
                    className="w-full px-4 py-3 border border-gray-200 rounded-[3px] focus:outline-none focus:border-primary bg-white"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                  >
                    {models.map(model => (
                      <option key={model}>{model}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <select 
                    className="w-full px-4 py-3 border border-gray-200 rounded-[3px] focus:outline-none focus:border-primary bg-white"
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                  >
                    {prices.map(price => (
                      <option key={price}>{price}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <button className="w-full bg-primary text-white px-6 py-3 rounded-[3px] hover:bg-primary-dark flex items-center justify-center">
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-8">What are you selling? <span className="text-red-500">*</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {sellCategories.map((category) => (
                    <div
                      key={category.name}
                      className="bg-white border border-gray-200 rounded-[3px] shadow-sm hover:shadow-md transition-shadow text-center p-6 cursor-pointer hover:border-primary"
                    >
                      <div className="text-4xl mb-4">{category.emoji}</div>
                      <h3 className="font-medium">{category.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

     

      {/* Browse by Category */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Discover your perfect car</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className="bg-white p-6 rounded-[3px] shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <category.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">Browse by body style</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {carTypes.map((type) => (
                <button
                  key={type}
                  className="px-4 py-2 bg-white rounded-[3px] shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Auctions</h2>
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <ChevronDown className="w-4 h-4 mr-2" />
                Sort
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredListings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-[3px] shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-[3px]">
                    {listing.endTime} left
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{listing.title}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">{listing.rating}</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-primary">${listing.price.toLocaleString()}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Clock3 className="w-4 h-4 mr-2" />
                      <span>{listing.mileage} miles</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{listing.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{listing.bids} bids</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {listing.features.map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-[3px]">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex space-x-3">
                    <button className="flex-1 bg-primary text-white px-4 py-2 rounded-[3px] hover:bg-primary-dark">
                      Bid Now
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-[3px] hover:bg-gray-50">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research and Reviews */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Research and reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-[3px] shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={review.image} alt={review.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{review.title}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">{review.rating}</span>
                    </div>
                  </div>
                  <button className="text-primary font-semibold hover:text-primary-dark flex items-center">
                    Read full review
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Explore popular cars</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularBrands.map((brand) => (
              <div key={brand.name} className="bg-white rounded-[3px] p-6 text-center border hover:border-primary transition-colors cursor-pointer">
                <img src={brand.logo} alt={brand.name} className="w-16 h-16 mx-auto mb-4 rounded-full object-cover" />
                <h3 className="text-lg font-semibold text-gray-900">{brand.name}</h3>
                <p className="text-gray-600 mt-2">{brand.count} listings</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Safety Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Accessibility</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="text-gray-300 hover:text-white">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-[3px] focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button className="bg-primary text-white px-4 py-2 rounded-r-[3px] hover:bg-primary-dark">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} QuickAuction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;