import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import CSS to include Tailwind styles

// Create a simplified version of your QuickAuction component
function QuickAuction() {
  const [activeTab, setActiveTab] = React.useState('Buy');
  const [selectedMake, setSelectedMake] = React.useState('All makes');
  const [selectedModel, setSelectedModel] = React.useState('All models');
  const [selectedPrice, setSelectedPrice] = React.useState('Any Price');
  
  const makes = ['All makes', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Audi', 'Lexus'];
  const models = ['All models', 'Camry', 'Civic', 'F-150', 'Silverado', 'X5', 'C-Class', 'A4', 'RX'];
  const prices = ['Any Price', 'Under $10,000', '$10,000 - $20,000', '$20,000 - $30,000', '$30,000 - $40,000', '$40,000+'];
  
  const sellCategories = [
    { name: 'Automobile', emoji: '🚗' },
    { name: 'Motorcycle', emoji: '🏍️' },
    { name: 'Watercraft', emoji: '⛵' },
    { name: 'Equipment', emoji: '🚜' },
    { name: 'Miscellaneous', emoji: '📦' }
  ];
  
  return (
    <div className="bg-white rounded-md shadow-lg p-6 max-w-5xl mx-auto">
      {/* Tabs */}
      <div className="flex mb-6">
        <button 
          onClick={() => setActiveTab('Buy')}
          className={`flex-1 py-3 text-center font-medium ${activeTab === 'Buy' ? 'bg-[#0054da] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-l-md`}
        >
          Buy
        </button>
        <button 
          onClick={() => setActiveTab('Sell/Trade')}
          className={`flex-1 py-3 text-center font-medium ${activeTab === 'Sell/Trade' ? 'bg-[#0054da] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-r-md`}
        >
          Sell/Trade
        </button>
      </div>

      {activeTab === 'Buy' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <select 
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#0054da] bg-white"
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
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#0054da] bg-white"
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
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#0054da] bg-white"
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
            >
              {prices.map(price => (
                <option key={price}>{price}</option>
              ))}
            </select>
          </div>
          <div>
            <button className="w-full bg-[#0054da] text-white px-6 py-3 rounded-md hover:bg-[#0049bb] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
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
                className="bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow text-center p-6 cursor-pointer hover:border-[#0054da]"
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
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  const targetElement = document.getElementById('react-target');
  if (targetElement) {
    ReactDOM.render(
      <QuickAuction />,
      targetElement
    );
  } else {
    console.error('Could not find element with id "react-target"');
  }
}); 