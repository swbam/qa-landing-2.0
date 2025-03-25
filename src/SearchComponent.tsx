import React, { useState } from 'react';
import { Search, Car, Bike, Sailboat, Package, Tractor } from 'lucide-react';

interface SearchComponentProps {
  // Optional props to allow customization when used in Webflow
  primaryColor?: string;
  primaryDarkColor?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ 
  primaryColor = '#0054da',
  primaryDarkColor = '#0049bb'
}) => {
  const [activeTab, setActiveTab] = useState('Buy');
  const [selectedMake, setSelectedMake] = useState('All makes');
  const [selectedModel, setSelectedModel] = useState('All models');
  const [selectedPrice, setSelectedPrice] = useState('Any Price');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Define your data arrays
  const makes = ['All makes', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Audi', 'Lexus'];
  const models = ['All models', 'Camry', 'Civic', 'F-150', 'Silverado', 'X5', 'C-Class', 'A4', 'RX'];
  const prices = ['Any Price', 'Under $10,000', '$10,000 - $20,000', '$20,000 - $30,000', '$30,000 - $40,000', '$40,000+'];
  const vehicleCategories = ['All Categories', 'Automobile', 'Motorcycle', 'Watercraft', 'Equipment', 'Miscellaneous'];

  // Categories for the seller tab
  const automobileCategories = ['Car', 'Truck', 'SUV', 'Van', 'Other'];
  const motorcycleCategories = ['Sport', 'Cruiser', 'Touring', 'Off-Road', 'Scooter', 'Other'];
  const boatCategories = ['Power Boat', 'Sailboat', 'Fishing Boat', 'Yacht', 'Pontoon', 'Other'];
  const equipmentCategories = ['Excavator', 'Bulldozer', 'Loader', 'Vibratory Roller', 'Crane', 'Tractor', 'Other'];
  const miscCategories = ['Parts', 'Accessories', 'Other'];

  const sellCategories = [
    { name: 'Automobile', icon: Car, categories: automobileCategories, emoji: '🚗' },
    { name: 'Motorcycle', icon: Bike, categories: motorcycleCategories, emoji: '🏍️' },
    { name: 'Watercraft', icon: Sailboat, categories: boatCategories, emoji: '⛵' },
    { name: 'Equipment', icon: Tractor, categories: equipmentCategories, emoji: '🚜' },
    { name: 'Miscellaneous', icon: Package, categories: miscCategories, emoji: '📦' }
  ];

  // Dynamic styles to use custom colors
  const styles = {
    primary: primaryColor,
    primaryDark: primaryDarkColor
  };

  return (
    <div className="bg-white rounded-[3px] shadow-lg p-6 max-w-5xl mx-auto">
      {/* Tabs */}
      <div className="flex mb-6 justify-center">
        <button 
          onClick={() => setActiveTab('Buy')}
          className={`px-12 py-3 text-center font-medium ${activeTab === 'Buy' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-l-[3px]`}
          style={{ backgroundColor: activeTab === 'Buy' ? styles.primary : '' }}
        >
          Buy
        </button>
        <button 
          onClick={() => setActiveTab('Sell/Trade')}
          className={`px-12 py-3 text-center font-medium ${activeTab === 'Sell/Trade' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-r-[3px]`}
          style={{ backgroundColor: activeTab === 'Sell/Trade' ? styles.primary : '' }}
        >
          Sell/Trade
        </button>
      </div>

      {activeTab === 'Buy' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <select 
              className="w-full px-4 py-3 border border-gray-200 rounded-[3px] focus:outline-none focus:border-primary bg-white"
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
            >
              {vehicleCategories.map(category => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <select 
              className="w-full px-4 py-3 border border-gray-200 rounded-[3px] focus:outline-none focus:border-primary bg-white"
              value={selectedMake}
              onChange={(event) => setSelectedMake(event.target.value)}
            >
              {makes.map(make => (
                <option key={make}>{make}</option>
              ))}
            </select>
          </div>
          <div>
            <select 
              className="w-full px-4 py-3 border border-gray-200 rounded-[3px] focus:outline-none focus:border-primary bg-white"
              value={selectedPrice}
              onChange={(event) => setSelectedPrice(event.target.value)}
            >
              {prices.map(price => (
                <option key={price}>{price}</option>
              ))}
            </select>
          </div>
          <div>
            <button 
              className="w-full bg-primary text-white px-6 py-3 rounded-[3px] hover:bg-primary-dark flex items-center justify-center"
              style={{ backgroundColor: styles.primary }}
            >
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
  );
};

export default SearchComponent; 