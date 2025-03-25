import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import CSS to include Tailwind styles

// Create a simplified version of your QuickAuction component
function QuickAuction() {
  const [activeTab, setActiveTab] = React.useState('Buy');
  const [selectedCategory, setSelectedCategory] = React.useState('Automobile');
  const [selectedMake, setSelectedMake] = React.useState('All makes');
  const [selectedModel, setSelectedModel] = React.useState('All models');
  const [selectedPrice, setSelectedPrice] = React.useState('Any Price');
  
  const categories = [
    'Automobile',
    'Motorcycle',
    'Watercraft',
    'Equipment',
    'Miscellaneous'
  ];

  const makes = ['All makes', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Audi', 'Lexus'];
  const models = ['All models', 'Camry', 'Civic', 'F-150', 'Silverado', 'X5', 'C-Class', 'A4', 'RX'];
  const prices = ['Any Price', 'Under $10,000', '$10,000 - $20,000', '$20,000 - $30,000', '$30,000 - $40,000', '$40,000+'];
  
  return (
    <div className="bg-white rounded-md shadow-lg p-6 max-w-5xl mx-auto">
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button 
            onClick={() => setActiveTab('Buy')}
            className={`px-12 py-2.5 text-sm font-medium ${
              activeTab === 'Buy' 
                ? 'bg-[#0054da] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            } rounded-l-lg border border-gray-200`}
          >
            Buy
          </button>
          <button 
            onClick={() => setActiveTab('Sell/Trade')}
            className={`px-12 py-2.5 text-sm font-medium ${
              activeTab === 'Sell/Trade' 
                ? 'bg-[#0054da] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            } rounded-r-lg border border-l-0 border-gray-200`}
          >
            Sell/Trade
          </button>
        </div>
      </div>

      {activeTab === 'Buy' ? (
        <div className="space-y-4">
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-[#0054da] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <select 
                className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:border-[#0054da] bg-white text-sm"
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
                className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:border-[#0054da] bg-white text-sm"
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
                className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:border-[#0054da] bg-white text-sm"
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
              >
                {prices.map(price => (
                  <option key={price}>{price}</option>
                ))}
              </select>
            </div>
            <div>
              <button className="w-full bg-[#0054da] text-white px-6 py-2.5 rounded-md hover:bg-[#0049bb] flex items-center justify-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-6">What are you selling? <span className="text-red-500">*</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <div
                key={category}
                className="bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow text-center p-4 cursor-pointer hover:border-[#0054da]"
              >
                <h3 className="font-medium text-sm">{category}</h3>
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