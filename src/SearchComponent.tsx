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
      name: 'Cars', 
      icon: Car, 
      categories: automobileCategories, 
      svgIcon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 24H36M8 32H10M38 32H40M16 36V40M32 36V40M10 32C10 30.8954 9.10457 30 8 30V30C6.89543 30 6 30.8954 6 32V36C6 37.1046 6.89543 38 8 38V38C9.10457 38 10 37.1046 10 36V32ZM40 32C40 30.8954 39.1046 30 38 30V30C36.8954 30 36 30.8954 36 32V36C36 37.1046 36.8954 38 38 38V38C39.1046 38 40 37.1046 40 36V32ZM35 24L32 14C31.59 12.6326 30.3357 11.7 28.916 11.7H19.084C17.6643 11.7 16.41 12.6326 16 14L13 24M32 32H16C14.8954 32 14 31.1046 14 30V26C14 24.8954 14.8954 24 16 24H32C33.1046 24 34 24.8954 34 26V30C34 31.1046 33.1046 32 32 32Z" stroke="#0054da" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      makes: automobileMakes 
    },
    { 
      name: 'Trucks', 
      icon: Car, 
      categories: automobileCategories, 
      svgIcon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 32H10M38 32H40M10 32C10 30.8954 9.10457 30 8 30V30C6.89543 30 6 30.8954 6 32V36C6 37.1046 6.89543 38 8 38V38C9.10457 38 10 37.1046 10 36V32ZM40 32C40 30.8954 39.1046 30 38 30V30C36.8954 30 36 30.8954 36 32V36C36 37.1046 36.8954 38 38 38V38C39.1046 38 40 37.1046 40 36V32ZM20 36V40M12 24H33C34.1046 24 35 24.8954 35 26V30C35 31.1046 34.1046 32 33 32H12C10.8954 32 10 31.1046 10 30V26C10 24.8954 10.8954 24 12 24ZM14 24V16C14 14.8954 14.8954 14 16 14H26C27.1046 14 28 14.8954 28 16V24M35 24L40 18.5C40.6667 17.8333 40.6667 16.5 40 16H34" stroke="#0054da" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      makes: automobileMakes 
    },
    { 
      name: 'SUVs', 
      icon: Car, 
      categories: automobileCategories, 
      svgIcon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 24H36M8 32H10M38 32H40M16 36V40M32 36V40M10 32C10 30.8954 9.10457 30 8 30V30C6.89543 30 6 30.8954 6 32V36C6 37.1046 6.89543 38 8 38V38C9.10457 38 10 37.1046 10 36V32ZM40 32C40 30.8954 39.1046 30 38 30V30C36.8954 30 36 30.8954 36 32V36C36 37.1046 36.8954 38 38 38V38C39.1046 38 40 37.1046 40 36V32ZM35 24L32 14C31.59 12.6326 30.3357 11.7 28.916 11.7H19.084C17.6643 11.7 16.41 12.6326 16 14L13 24M32 32H16C14.8954 32 14 31.1046 14 30V26C14 24.8954 14.8954 24 16 24H32C33.1046 24 34 24.8954 34 26V30C34 31.1046 33.1046 32 32 32Z" stroke="#0054da" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      makes: automobileMakes 
    },
    { 
      name: 'Boats', 
      icon: Sailboat, 
      categories: boatCategories, 
      svgIcon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 30L24 6M24 6V30M24 6L42 30M12 36L14 38L18 34L22 38L26 34L30 38L34 34L38 38L40 36M6 30H42M6 30C6 30 12 34 24 34C36 34 42 30 42 30" stroke="#0054da" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      makes: boatMakes 
    },
    { 
      name: 'Motorcycles', 
      icon: Bike, 
      categories: motorcycleCategories, 
      svgIcon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 36C16.4183 36 20 32.4183 20 28C20 23.5817 16.4183 20 12 20C7.58172 20 4 23.5817 4 28C4 32.4183 7.58172 36 12 36Z" stroke="#0054da" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M36 36C40.4183 36 44 32.4183 44 28C44 23.5817 40.4183 20 36 20C31.5817 20 28 23.5817 28 28C28 32.4183 31.5817 36 36 36Z" stroke="#0054da" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 28H28M26 14.5L34 14M12 28L20 12L30 14L36 28M24 12V16" stroke="#0054da" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      makes: motorcycleMakes 
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
            <div>
              <h2 className="text-2xl font-bold mb-8">What are you looking for?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className={`bg-white border ${selectedCategory === category.name ? 'border-primary' : 'border-gray-200'} rounded-[3px] shadow-sm hover:shadow-md transition-shadow text-center p-6 cursor-pointer hover:border-primary`}
                    onClick={() => setSelectedCategory(category.name === selectedCategory ? '' : category.name)}
                  >
                    <div className="flex justify-center mb-4">
                      {category.svgIcon}
                    </div>
                    <h3 className="font-medium">{category.name}</h3>
                  </div>
                ))}
              </div>

              {selectedCategory && (
                <div className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div>
                      <select 
                        className="w-full px-4 py-3 border border-gray-200 rounded-[3px] focus:outline-none focus:border-primary bg-white"
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-[3px] focus:outline-none focus:border-primary bg-white"
                      >
                        <option>All models</option>
                        {/* Models would be populated based on make */}
                      </select>
                    </div>
                    <div>
                      <select 
                        className="w-full px-4 py-3 border border-gray-200 rounded-[3px] focus:outline-none focus:border-primary bg-white"
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
                        className="w-full bg-primary text-white px-6 py-3 rounded-[3px] hover:bg-primary-dark flex items-center justify-center"
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
              <h2 className="text-2xl font-bold mb-8">What are you selling?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className={`bg-white border ${selectedCategory === category.name ? 'border-primary' : 'border-gray-200'} rounded-[3px] shadow-sm hover:shadow-md transition-shadow text-center p-6 cursor-pointer hover:border-primary`}
                    onClick={() => setSelectedCategory(category.name === selectedCategory ? '' : category.name)}
                  >
                    <div className="flex justify-center mb-4">
                      {category.svgIcon}
                    </div>
                    <h3 className="font-medium">{category.name}</h3>
                  </div>
                ))}
              </div>
              
              {selectedCategory && (
                <div className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div>
                      <select 
                        className="w-full px-4 py-3 border border-gray-200 rounded-[3px] focus:outline-none focus:border-primary bg-white"
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-[3px] focus:outline-none focus:border-primary bg-white"
                      >
                        <option>All models</option>
                        {/* Models would be populated based on make */}
                      </select>
                    </div>
                    <div className="col-span-2">
                      <button 
                        className="w-full bg-primary text-white px-6 py-3 rounded-[3px] hover:bg-primary-dark flex items-center justify-center"
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
  );
};

export default SearchComponent; 