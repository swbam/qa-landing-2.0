import React, { useState, useEffect } from 'react';
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
  const [selectedPrice, setSelectedPrice] = useState('Any Price');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [buyShowCategories, setBuyShowCategories] = useState(true);
  const [availableMakes, setAvailableMakes] = useState<string[]>([]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(true);

  // Define category data structure
  const vehicleCategories = ['All Categories', 'Automobile', 'Motorcycle', 'Watercraft', 'Heavy Equipment', 'Miscellaneous'];

  // Define make lists for each category
  const automobileMakes = ['All makes', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Audi', 'Lexus'];
  const motorcycleMakes = ['All makes', 'Harley-Davidson', 'Honda', 'Yamaha', 'Kawasaki', 'Suzuki', 'Ducati', 'BMW', 'Triumph'];
  const boatMakes = ['All makes', 'Sea Ray', 'Bayliner', 'Boston Whaler', 'Chaparral', 'MasterCraft', 'Yamaha', 'Grady-White', 'Bennington'];
  const heavyEquipmentMakes = ['All makes', 'Caterpillar', 'John Deere', 'Komatsu', 'Bobcat', 'Case', 'Kubota', 'Volvo', 'Hitachi'];
  const miscMakes = ['All makes', 'Various', 'Custom', 'Generic', 'Aftermarket'];

  // Categories for each vehicle type
  const automobileCategories = ['Car', 'Truck', 'SUV', 'Van', 'Other'];
  const motorcycleCategories = ['Sport', 'Cruiser', 'Touring', 'Off-Road', 'Scooter', 'Other'];
  const boatCategories = ['Power Boat', 'Sailboat', 'Fishing Boat', 'Yacht', 'Pontoon', 'Other'];
  const heavyEquipmentCategories = ['Excavator', 'Bulldozer', 'Loader', 'Vibratory Roller', 'Crane', 'Tractor', 'Other'];
  const miscCategories = ['Parts', 'Accessories', 'Other'];

  const categories = [
    { name: 'Automobile', icon: Car, categories: automobileCategories, emoji: '🚗', makes: automobileMakes },
    { name: 'Motorcycle', icon: Bike, categories: motorcycleCategories, emoji: '🏍️', makes: motorcycleMakes },
    { name: 'Watercraft', icon: Sailboat, categories: boatCategories, emoji: '⛵', makes: boatMakes },
    { name: 'Heavy Equipment', icon: Tractor, categories: heavyEquipmentCategories, emoji: '🚜', makes: heavyEquipmentMakes },
    { name: 'Miscellaneous', icon: Package, categories: miscCategories, emoji: '📦', makes: miscMakes }
  ];

  // Get subcategories based on selected main category
  const getSubCategories = () => {
    const category = categories.find(c => c.name === selectedCategory);
    return category ? category.categories : [];
  };

  // Update makes when category changes
  useEffect(() => {
    if (selectedCategory === 'All Categories') {
      setAvailableMakes(['All makes']);
      return;
    }
    
    const category = categories.find(c => c.name === selectedCategory);
    if (category) {
      setAvailableMakes(category.makes);
      setSelectedMake('All makes');
    }
  }, [selectedCategory]);

  // Dynamic styles to use custom colors
  const styles = {
    primary: primaryColor,
    primaryDark: primaryDarkColor
  };

  return (
    <div className="quickauction-component-wrapper">
      {/* Blue hero section */}
      <div className="w-full bg-primary py-16" style={{ backgroundColor: styles.primary }}>
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-5">Quick Listing. Competitive Bidding. Fast Results.</h1>
          <p className="text-xl">From cars to watercraft, motorcycles to miscellaneous items—connect with motivated buyers and sellers for competitive bidding in minutes.</p>
        </div>
      </div>
      
      {/* Search component card */}
      <div className="max-w-5xl mx-auto px-4 relative -mt-8">
        <div className="bg-white rounded-[3px] shadow-lg p-6">
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
            <>
              {buyShowCategories ? (
                <div>
                  <h2 className="text-2xl font-bold mb-8">What are you looking for?</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categories.map((category) => (
                      <div
                        key={category.name}
                        className="bg-white border border-gray-200 rounded-[3px] shadow-sm hover:shadow-md transition-shadow text-center p-6 cursor-pointer hover:border-primary"
                        onClick={() => {
                          setSelectedCategory(category.name);
                          setBuyShowCategories(false);
                        }}
                      >
                        <div className="text-4xl mb-4">{category.emoji}</div>
                        <h3 className="font-medium">{category.name}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                    <div>
                      <select 
                        className="w-full px-4 py-3 border border-gray-200 rounded-[3px] focus:outline-none focus:border-primary bg-white"
                      >
                        <option>Start Year</option>
                        {Array.from({ length: 44 }, (_, i) => 2024 - i).map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <select 
                        className="w-full px-4 py-3 border border-gray-200 rounded-[3px] focus:outline-none focus:border-primary bg-white"
                      >
                        <option>End Year</option>
                        {Array.from({ length: 44 }, (_, i) => 2024 - i).map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <select 
                        className="w-full px-4 py-3 border border-gray-200 rounded-[3px] focus:outline-none focus:border-primary bg-white"
                        value={selectedMake}
                        onChange={(event) => setSelectedMake(event.target.value)}
                      >
                        <option>Make</option>
                        {availableMakes.map(make => (
                          <option key={make}>{make}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <select 
                        className="w-full px-4 py-3 border border-gray-200 rounded-[3px] focus:outline-none focus:border-primary bg-white"
                      >
                        <option>Model</option>
                        {/* Models would be populated based on make */}
                      </select>
                    </div>
                    <div>
                      <select 
                        className="w-full px-4 py-3 border border-gray-200 rounded-[3px] focus:outline-none focus:border-primary bg-white"
                      >
                        <option>Distance from you</option>
                        <option>10 miles</option>
                        <option>25 miles</option>
                        <option>50 miles</option>
                        <option>100 miles</option>
                        <option>250 miles</option>
                        <option>500 miles</option>
                        <option>Any distance</option>
                      </select>
                    </div>
                  </div>
                  
                
                  
                  <div>
                    <button 
                      className="w-full bg-primary text-white px-6 py-3 rounded-[3px] hover:bg-primary-dark flex items-center justify-center"
                      style={{ backgroundColor: styles.primary }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.primaryDark}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.primary}
                    >
                      <Search className="w-5 h-5 mr-2" />
                      Search
                    </button>
                  </div>
                  <div className="mt-4">
                    <button 
                      className="text-primary hover:underline"
                      onClick={() => setBuyShowCategories(true)}
                      style={{ color: styles.primary }}
                    >
                      ← Back to categories
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-8">What are you selling?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="bg-white border border-gray-200 rounded-[3px] shadow-sm hover:shadow-md transition-shadow text-center p-6 cursor-pointer hover:border-primary"
                    onClick={() => {
                      setSelectedCategory(category.name);
                      // Handle sell/trade flow
                    }}
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
  );
};

export default SearchComponent; 