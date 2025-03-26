import React, { useState, useEffect } from 'react';
import { Search, Car, Truck, Sailboat, Package, Tractor, Bike } from 'lucide-react';
import backgroundImage from './QA-Zendesk-Header-buyer.jpg';

interface SearchComponentProps {
  // Optional props to allow customization when used in Webflow
  primaryColor?: string;
  primaryDarkColor?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ 
  primaryColor = '#0054da',
  primaryDarkColor = '#0049bb'
}) => {
  const [activeTab, setActiveTab] = useState('Sell');
  const [selectedMake, setSelectedMake] = useState('All makes');
  const [selectedPrice, setSelectedPrice] = useState('Any Price');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [availableMakes, setAvailableMakes] = useState<string[]>([]);

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
    { 
      name: 'Automobile', 
      icon: Car,
      categories: automobileCategories, 
      makes: automobileMakes 
    },
    { 
      name: 'Motorcycle', 
      icon: Bike,
      categories: motorcycleCategories, 
      makes: motorcycleMakes 
    },
    { 
      name: 'Watercraft', 
      icon: Sailboat,
      categories: boatCategories, 
      makes: boatMakes 
    },
    { 
      name: 'Heavy Equipment', 
      icon: Tractor,
      categories: heavyEquipmentCategories, 
      makes: heavyEquipmentMakes 
    },
    { 
      name: 'Miscellaneous', 
      icon: Package,
      categories: miscCategories, 
      makes: miscMakes 
    }
  ];

  // Get subcategories based on selected main category
  const getSubCategories = () => {
    const category = categories.find(c => c.name === selectedCategory);
    return category ? category.categories : [];
  };

  // Update makes when category changes
  useEffect(() => {
    if (!selectedCategory) {
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
    <div className="quickauction-component-wrapper w-full">
      {/* Hero section with background image - taller for better appearance */}
      <div 
        className="w-full pt-14 pb-64 sm:pt-20 sm:pb-64 md:pt-24 md:pb-64 bg-cover bg-center relative flex items-center" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="max-w-5xl mx-auto px-3 sm:px-4 text-center text-white relative z-10 flex flex-col justify-center py-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Quick Listing. Competitive Bidding. Fast Results.</h1>
        </div>
      
        {/* Search component card - positioned halfway below the background image */}
        <div className="w-full max-w-5xl mx-auto px-3 sm:px-4 absolute left-0 right-0 -bottom-32">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
            {/* Tabs - full width on mobile */}
            <div className="flex mb-5 sm:mb-6 justify-center">
              <button 
                onClick={() => setActiveTab('Sell')}
                className={`flex-1 sm:flex-none sm:px-12 py-3 text-center font-medium ${activeTab === 'Sell' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-l-lg`}
                style={{ backgroundColor: activeTab === 'Sell' ? styles.primary : '' }}
              >
                Sell
              </button>
              <button 
                onClick={() => setActiveTab('Buy')}
                className={`flex-1 sm:flex-none sm:px-12 py-3 text-center font-medium ${activeTab === 'Buy' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-r-lg`}
                style={{ backgroundColor: activeTab === 'Buy' ? styles.primary : '' }}
              >
                Buy
              </button>
            </div>

            {activeTab === 'Buy' ? (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-8">What are you looking for?</h2>
                {/* Adjusted grid for mobile - 2 columns on mobile, 5 on larger screens */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 mb-5 sm:mb-6">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className={`bg-white border ${selectedCategory === category.name ? 'border-primary' : 'border-gray-200'} rounded-lg shadow-sm hover:shadow-md transition-shadow text-center p-3 sm:p-6 cursor-pointer hover:border-primary`}
                      onClick={() => setSelectedCategory(category.name === selectedCategory ? '' : category.name)}
                    >
                      <div className="flex justify-center mb-2 sm:mb-4">
                        {React.createElement(category.icon, { 
                          size: 36, 
                          stroke: "#0054da", 
                          strokeWidth: 1.5 
                        })}
                      </div>
                      <h3 className="font-medium text-sm sm:text-base">{category.name}</h3>
                    </div>
                  ))}
                </div>

                {selectedCategory && (
                  <div className="mt-5 sm:mt-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      <div>
                        <select 
                          className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary bg-white"
                          value={selectedMake}
                          onChange={(event) => setSelectedMake(event.target.value)}
                        >
                          <option>All makes</option>
                          {availableMakes.slice(1).map(make => (
                            <option key={make}>{make}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <select 
                          className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary bg-white"
                        >
                          <option>All models</option>
                          {/* Models would be populated based on make */}
                        </select>
                      </div>
                      <div>
                        <select 
                          className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary bg-white"
                          value={selectedPrice}
                          onChange={(event) => setSelectedPrice(event.target.value)}
                        >
                          {['Any Price', 'Under $10,000', '$10,000 - $20,000', '$20,000 - $30,000', '$30,000 - $40,000', '$40,000+'].map(price => (
                            <option key={price}>{price}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <button 
                          className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark flex items-center justify-center"
                          style={{ backgroundColor: styles.primary }}
                          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.primaryDark}
                          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.primary}
                        >
                          <Search className="w-5 h-5 mr-2" />
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-8">What are you selling?</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className={`bg-white border ${selectedCategory === category.name ? 'border-primary' : 'border-gray-200'} rounded-lg shadow-sm hover:shadow-md transition-shadow text-center p-3 sm:p-6 cursor-pointer hover:border-primary`}
                      onClick={() => setSelectedCategory(category.name === selectedCategory ? '' : category.name)}
                    >
                      <div className="flex justify-center mb-2 sm:mb-4">
                        {React.createElement(category.icon, { 
                          size: 36, 
                          stroke: "#0054da", 
                          strokeWidth: 1.5 
                        })}
                      </div>
                      <h3 className="font-medium text-sm sm:text-base">{category.name}</h3>
                    </div>
                  ))}
                </div>
                
                {selectedCategory && (
                  <div className="mt-5 sm:mt-8">
                    <div className="grid grid-cols-1 gap-3 sm:gap-4">
                      <div>
                        <button 
                          className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark flex items-center justify-center"
                          style={{ backgroundColor: styles.primary }}
                          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.primaryDark}
                          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.primary}
                        >
                          <Search className="w-5 h-5 mr-2" />
                          List My Vehicle
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Subheadline placed below the search box */}
      <div className="w-full pt-40 pb-8 bg-gray-50">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 text-center">
          <p className="text-lg sm:text-xl text-gray-700">From cars to watercraft, motorcycles to miscellaneous items—connect with motivated buyers and sellers for competitive bidding in minutes.</p>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent; 