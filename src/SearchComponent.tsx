import React, { useState, useEffect } from 'react';
import { Search, Car, Sailboat, Package, Tractor, Bike, Filter, ArrowUpDown } from 'lucide-react'; // Removed unused Truck, Star
import backgroundImage from './QA-Zendesk-Header-buyer.jpg'; // Corrected image path

interface FeaturedAuction {
  id: string;
  title: string;
  currentBid: number;
  timeRemaining: string;
  bids: number;
  imageUrl: string;
}

interface SearchComponentProps {
  // Optional props to allow customization when used in Webflow
  primaryColor?: string;
  primaryDarkColor?: string;
  layoutType?: 'standard' | 'split' | 'centered'; // Added 'centered' layout option
}

const mockFeaturedAuctions: FeaturedAuction[] = [
  {
    id: '1',
    title: '2021 Toyota RAV4 XLE Premium',
    currentBid: 28500.00,
    timeRemaining: '5h 28m',
    bids: 15,
    imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    title: '2022 Caterpillar 320 Excavator',
    currentBid: 145000.00,
    timeRemaining: '11h 59m',
    bids: 8,
    imageUrl: 'https://images.unsplash.com/photo-1614977645540-7abd88ba8e56?q=80&w=3946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '3',
    title: '2023 Harley-Davidson Street Glide',
    currentBid: 22750.00,
    timeRemaining: '17h 32m',
    bids: 12,
    imageUrl: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '4',
    title: '2022 Sea Ray SLX 400',
    currentBid: 289000.00,
    timeRemaining: '20h 7m',
    bids: 21,
    imageUrl: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1000'
  }
];

const SearchComponent: React.FC<SearchComponentProps> = ({
  primaryColor = '#0054da',
  primaryDarkColor = '#0049bb',
  layoutType = 'standard'
}) => {
  // Restore state variables needed for split/centered layouts
  const [activeTab, setActiveTab] = useState('Sell');
  const [selectedMake, setSelectedMake] = useState('All makes');
  const [selectedPrice, setSelectedPrice] = useState('Any Price');
  const [selectedCategory, setSelectedCategory] = useState('');
  // Removed unused selectedSubCategory state
  const [availableMakes, setAvailableMakes] = useState<string[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Define category data structure
  // Removed unused vehicleCategories constant

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
      name: 'Equipment',
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

  // Removed unused getSubCategories function

  // Restore effect needed for split/centered layouts
  useEffect(() => {
    if (!selectedCategory) {
      setAvailableMakes(['All makes']);
      return;
    }

    const category = categories.find(c => c.name === selectedCategory);
    if (category) {
      setAvailableMakes(category.makes);
      setSelectedMake('All makes'); // Reset make selection when category changes
    }
  }, [selectedCategory]);

  // Dynamic styles to use custom colors
  const styles = {
    primary: primaryColor,
    primaryDark: primaryDarkColor
  };

  // Simplified Search form content with only Buy/Sell links (for standard layout)
  const SearchFormContent = () => (
    <>
      {/* Links - full width on mobile */}
      {/* Buttons stack vertically on mobile, row on larger screens - Removed top margin as parent has padding now */}
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <a
          href="https://app.quickauction.com/seller/add"
          target="_blank" // Optional: Open in new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
          className="w-full sm:w-auto px-10 sm:px-16 md:px-20 py-4 sm:py-5 text-center font-semibold text-lg sm:text-xl bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl mb-3 sm:mb-0 sm:mr-3" // Adjusted mobile padding/font size
          style={{ backgroundColor: styles.primary }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.primaryDark}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.primary}
        >
          Sell
        </a>
        <a
          href="https://app.quickauction.com/login"
          target="_blank" // Optional: Open in new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
          className="w-full sm:w-auto px-10 sm:px-16 md:px-20 py-4 sm:py-5 text-center font-semibold text-lg sm:text-xl bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl mt-3 sm:mt-0 sm:ml-3" // Adjusted mobile padding/font size
          style={{ backgroundColor: styles.primary }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.primaryDark}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.primary}
        >
          Buy
        </a>
      </div>
      {/* Removed category icons and search form elements as per request */}
    </>
  );

  const FeaturedAuctionsSection = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Featured Auctions</h2>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Filter size={20} />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowUpDown size={20} />
            <span>Sort</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockFeaturedAuctions.map((auction) => (
          <div key={auction.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            <div className="relative aspect-[4/3]">
              <img
                src={auction.imageUrl}
                alt={auction.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">{auction.title}</h3>

              <div className="flex items-center gap-4 text-gray-600 mb-3">
                <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-full">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 4V8L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <span className="text-sm font-medium">{auction.timeRemaining}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-full">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3L9.5 6H14L10.5 8.5L12 12L8 9.5L4 12L5.5 8.5L2 6H6.5L8 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm font-medium">{auction.bids} bids</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-gray-500 uppercase font-medium">CURRENT BID:</span>
                <span className="text-xl font-bold text-primary transition-colors duration-200">${auction.currentBid.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Standard layout (original) - Uses the simplified SearchFormContent
  if (layoutType === 'standard') {
    return (
      <div className="quickauction-component-wrapper w-full">
        {/* Hero section with background image - reduced padding for better mobile experience */}
        <div
          className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 md:pt-12 md:pb-24 bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Headline - Increased bottom margin */}
          <div className="max-w-5xl mx-auto px-3 sm:px-4 text-center text-white relative z-10 flex flex-col justify-center py-2 sm:py-4 mt-2 sm:mt-4 mb-10 md:mb-12">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">Quick Listing.<br />Competitive Bidding.<br />Fast Results.</h1> {/* Increased base font size */}
          </div>

          {/* Button container - No background, adjusted padding/margins */}
          <div className="w-full max-w-5xl mx-auto px-3 sm:px-4 md:px-6 relative z-20">
            <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8"> {/* Added bg-white, rounded-lg, shadow, adjusted padding */}
              <SearchFormContent /> {/* Uses the simplified version */}
            </div>

            {/* Subheadline placed below the search box with reduced spacing */}
            {/* Adjusted top margin for spacing below white box */}
            <div className="max-w-lg mx-auto mt-6 sm:mt-8 md:mt-8 text-center">
              <p className="text-white text-lg sm:text-base md:text-lg leading-relaxed drop-shadow-lg font-medium"> {/* Increased base font size */}
                From cars to watercraft, motorcycles to miscellaneous items—connect with motivated buyers and sellers for competitive bidding in minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Auctions Section */}
        <FeaturedAuctionsSection />

        {/* Third Section: Centered Search Experience (Uses state variables) */}
        <div className="quickauction-component-centered-section w-full">
          {/* Full-width background image with centered content */}
          <div
            className="w-full py-12 md:py-16 lg:py-20 bg-cover bg-center relative"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Center column content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              {/* Section title */}
              <div className="text-center mb-10">
                <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                  From cars to watercraft, motorcycles to miscellaneous items—connect with motivated buyers and sellers for competitive bidding in minutes.
                </p>
              </div>

              {/* Search content in white box */}
              <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 pb-4 sm:pb-6 md:pb-8 backdrop-blur-sm">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                  {activeTab === 'Buy' ? 'What are you looking for?' : 'What are you selling?'}
                </h2>

                {/* Centered tabs */}
                <div className="flex justify-center mb-6 md:mb-8">
                  <div className="inline-flex rounded-lg p-1 bg-gray-100">
                    <button
                      onClick={() => setActiveTab('Sell')}
                      className={`px-6 sm:px-8 md:px-10 py-2.5 text-center font-medium text-base rounded-lg transition-all duration-200 ${activeTab === 'Sell' ? 'bg-primary text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
                      style={{ backgroundColor: activeTab === 'Sell' ? styles.primary : '' }}
                    >
                      Sell
                    </button>
                    <button
                      onClick={() => setActiveTab('Buy')}
                      className={`px-6 sm:px-8 md:px-10 py-2.5 text-center font-medium text-base rounded-lg transition-all duration-200 ${activeTab === 'Buy' ? 'bg-primary text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
                      style={{ backgroundColor: activeTab === 'Buy' ? styles.primary : '' }}
                    >
                      Buy
                    </button>
                  </div>
                </div>

                {/* Category grid in 3 columns at smaller breakpoints, 5 on larger */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6 md:mb-8">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className={`bg-white border ${selectedCategory === category.name ? 'border-primary shadow-md' : 'border-gray-200'} rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-center p-2 sm:p-3 cursor-pointer hover:border-primary h-[70px] sm:h-[80px] md:h-[90px] flex flex-col justify-center items-center`}
                      onClick={() => setSelectedCategory(category.name === selectedCategory ? '' : category.name)}
                      style={{ borderColor: selectedCategory === category.name ? styles.primary : '' }}
                    >
                      <div className="flex justify-center mb-1.5 sm:mb-2">
                        {React.createElement(category.icon, {
                          size: 24,
                          stroke: selectedCategory === category.name ? styles.primary : "#0054da",
                          strokeWidth: 1.5,
                          className: "transition-colors duration-200"
                        })}
                      </div>
                      <h3 className="font-medium text-xs sm:text-sm">{category.name}</h3>
                    </div>
                  ))}
                </div>

                {/* Description text - centered */}
                <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mb-6 md:mb-8 text-center mx-auto">
                  From cars to watercraft, motorcycles to miscellaneous items—connect with motivated buyers and sellers for competitive bidding in minutes.
                </p>

                {/* Form fields - stacked vertically, maximum width container */}
                <div className="min-h-[60px] sm:min-h-[70px] md:min-h-[80px] max-w-xl mx-auto">
                  {selectedCategory && (
                    <div className="animate-fadeIn space-y-3">
                      {activeTab === 'Buy' ? (
                        <>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <select
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white transition-all duration-200 text-sm sm:text-base"
                                value={selectedMake}
                                onChange={(event) => setSelectedMake(event.target.value)}
                                style={{ borderColor: isSearchFocused ? styles.primary : '' }}
                              >
                                <option>All makes</option>
                                {availableMakes.slice(1).map(make => (
                                  <option key={make}>{make}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <select
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white transition-all duration-200 text-sm sm:text-base"
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                              >
                                <option>All models</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <select
                              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white transition-all duration-200 text-sm sm:text-base"
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
                              className="w-full bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary-dark flex items-center justify-center transition-all duration-200 hover:shadow-md text-sm sm:text-base font-medium"
                              style={{ backgroundColor: styles.primary }}
                              onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.primaryDark}
                              onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.primary}
                            >
                              <Search className="w-5 h-5 mr-2" />
                              Search
                            </button>
                          </div>
                        </>
                      ) : (
                        <div>
                          <button
                            className="w-full bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary-dark flex items-center justify-center transition-all duration-200 hover:shadow-lg text-base font-medium"
                            style={{ backgroundColor: styles.primary }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.primaryDark}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.primary}
                          >
                            <Search className="w-5 h-5 mr-2" />
                            List My Vehicle
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Section: Constrained Width Split Layout (Uses state variables) */}
        <div className="quickauction-component-constrained-split-section w-full bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section title */}
            <div className="text-center mb-10">

            </div>

            {/* Constrained width split layout with rounded corners */}
            <div className="flex flex-col md:flex-row shadow-xl rounded-lg overflow-hidden">
              {/* Left side - Background image (50%) */}
              <div
                className="w-full md:w-1/2 h-[250px] md:h-auto bg-cover bg-center relative flex items-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none overflow-hidden"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Headline - visible on all screens */}
                <div className="relative z-10 px-6 md:px-10 lg:px-12 w-full">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-lg text-center md:text-left">
                    Quick Listing.<br />
                    Competitive Bidding.<br />
                    Fast Results.
                  </h1>
                </div>
              </div>

              {/* Right side - White content box (50%) */}
              <div className="w-full md:w-1/2 bg-white p-6 sm:p-8 md:p-10 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
                {/* Search component - same content as original but styled for this layout */}
                <div className="bg-white flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                    {activeTab === 'Buy' ? 'What are you looking for?' : 'What are you selling?'}
                  </h2>

                  {/* Tabs - styled for this section */}
                  <div className="flex mb-6">
                    <button
                      onClick={() => setActiveTab('Sell')}
                      className={`flex-1 sm:flex-none px-5 sm:px-6 py-2 text-center font-medium text-sm sm:text-base ${activeTab === 'Sell' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-l-lg transition-all duration-200`}
                      style={{ backgroundColor: activeTab === 'Sell' ? styles.primary : '' }}
                    >
                      Sell
                    </button>
                    <button
                      onClick={() => setActiveTab('Buy')}
                      className={`flex-1 sm:flex-none px-5 sm:px-6 py-2 text-center font-medium text-sm sm:text-base ${activeTab === 'Buy' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-r-lg transition-all duration-200`}
                      style={{ backgroundColor: activeTab === 'Buy' ? styles.primary : '' }}
                    >
                      Buy
                    </button>
                  </div>

                  <div>
                    {/* Category grid - compact layout for this section */}
                    <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 mb-6">
                      {categories.map((category) => (
                        <div
                          key={category.name}
                          className={`bg-white border ${selectedCategory === category.name ? 'border-primary shadow-md' : 'border-gray-200'} rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-center p-2 cursor-pointer hover:border-primary h-[60px] sm:h-[70px] flex flex-col justify-center items-center`}
                          onClick={() => setSelectedCategory(category.name === selectedCategory ? '' : category.name)}
                          style={{ borderColor: selectedCategory === category.name ? styles.primary : '' }}
                        >
                          <div className="flex justify-center mb-1">
                            {React.createElement(category.icon, {
                              size: 20,
                              stroke: selectedCategory === category.name ? styles.primary : "#0054da",
                              strokeWidth: 1.5,
                              className: "transition-colors duration-200"
                            })}
                          </div>
                          <h3 className="font-medium text-xs">{category.name}</h3>
                        </div>
                      ))}
                    </div>

                    {/* Selection content */}
                    <div className="min-h-[60px]">
                      {selectedCategory && (
                        <div className="animate-fadeIn">
                          {activeTab === 'Buy' ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              <div>
                                <select
                                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white transition-all duration-200 text-sm"
                                  value={selectedMake}
                                  onChange={(event) => setSelectedMake(event.target.value)}
                                  style={{ borderColor: isSearchFocused ? styles.primary : '' }}
                                >
                                  <option>All makes</option>
                                  {availableMakes.slice(1).map(make => (
                                    <option key={make}>{make}</option>
                                  ))}
                                </select>
                              </div>
                              <div>
                                <select
                                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white transition-all duration-200 text-sm"
                                  onFocus={() => setIsSearchFocused(true)}
                                  onBlur={() => setIsSearchFocused(false)}
                                >
                                  <option>All models</option>
                                </select>
                              </div>
                              <div className="sm:col-span-2">
                                <button
                                  className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark flex items-center justify-center transition-all duration-200 hover:shadow-md text-sm font-medium mt-2"
                                  style={{ backgroundColor: styles.primary }}
                                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.primaryDark}
                                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.primary}
                                >
                                  <Search className="w-4 h-4 mr-2" />
                                  Search
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <button
                                className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark flex items-center justify-center transition-all duration-200 hover:shadow-md text-sm font-medium"
                                style={{ backgroundColor: styles.primary }}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.primaryDark}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.primary}
                              >
                                <Search className="w-4 h-4 mr-2" />
                                List My Vehicle
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Split 50/50 layout (Uses state variables)
  if (layoutType === 'split') {
    return (
      <div className="quickauction-component-split-wrapper w-full">
        <div className="flex flex-col md:flex-row min-h-[350px] lg:min-h-[500px]">
          {/* Left side - Background image (50%) */}
          <div
            className="w-full md:w-1/2 h-[200px] md:h-auto bg-cover bg-center relative flex items-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Headline - visible on all screens */}
            <div className="relative z-10 px-6 md:px-10 lg:px-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                Quick Listing.<br />
                Competitive Bidding.<br />
                Fast Results.
              </h1>
            </div>
          </div>

          {/* Right side - White content box (50%) */}
          <div className="w-full md:w-1/2 bg-white p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col">
            {/* Search component - same content as original but styled for this layout */}
            <div className="bg-white rounded-lg flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
                {activeTab === 'Buy' ? 'What are you looking for?' : 'What are you selling?'}
              </h2>

              {/* Tabs - full width on mobile */}
              <div className="flex mb-6 md:mb-8">
                <button
                  onClick={() => setActiveTab('Sell')}
                  className={`flex-1 sm:flex-none px-6 sm:px-8 md:px-10 py-2.5 text-center font-medium text-base ${activeTab === 'Sell' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-l-lg transition-all duration-200`}
                  style={{ backgroundColor: activeTab === 'Sell' ? styles.primary : '' }}
                >
                  Sell
                </button>
                <button
                  onClick={() => setActiveTab('Buy')}
                  className={`flex-1 sm:flex-none px-6 sm:px-8 md:px-10 py-2.5 text-center font-medium text-base ${activeTab === 'Buy' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-r-lg transition-all duration-200`}
                  style={{ backgroundColor: activeTab === 'Buy' ? styles.primary : '' }}
                >
                  Buy
                </button>
              </div>

              <div>
                {/* Category grid - adjusted for better spacing */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-6 md:mb-8">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className={`bg-white border ${selectedCategory === category.name ? 'border-primary shadow-md' : 'border-gray-200'} rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-center p-2 sm:p-3 cursor-pointer hover:border-primary h-[70px] sm:h-[80px] md:h-[90px] flex flex-col justify-center items-center`}
                      onClick={() => setSelectedCategory(category.name === selectedCategory ? '' : category.name)}
                      style={{ borderColor: selectedCategory === category.name ? styles.primary : '' }}
                    >
                      <div className="flex justify-center mb-1.5 sm:mb-2">
                        {React.createElement(category.icon, {
                          size: 24,
                          stroke: selectedCategory === category.name ? styles.primary : "#0054da",
                          strokeWidth: 1.5,
                          className: "transition-colors duration-200"
                        })}
                      </div>
                      <h3 className="font-medium text-xs sm:text-sm">{category.name}</h3>
                    </div>
                  ))}
                </div>

                {/* Description text moved below category icons */}
                <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mb-6 md:mb-8 text-center mx-auto">
                  From cars to watercraft, motorcycles to miscellaneous items—connect with motivated buyers and sellers for competitive bidding in minutes.
                </p>

                {/* Selection content with improved spacing */}
                <div className="min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
                  {selectedCategory && (
                    <div className="animate-fadeIn">
                      {activeTab === 'Buy' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                          <div>
                            <select
                              className="w-full px-3 py-2 sm:py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white transition-all duration-200 text-sm sm:text-base"
                              value={selectedMake}
                              onChange={(event) => setSelectedMake(event.target.value)}
                              style={{ borderColor: isSearchFocused ? styles.primary : '' }}
                            >
                              <option>All makes</option>
                              {availableMakes.slice(1).map(make => (
                                <option key={make}>{make}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <select
                              className="w-full px-3 py-2 sm:py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white transition-all duration-200 text-sm sm:text-base"
                              onFocus={() => setIsSearchFocused(true)}
                              onBlur={() => setIsSearchFocused(false)}
                            >
                              <option>All models</option>
                            </select>
                          </div>
                          <div>
                            <select
                              className="w-full px-3 py-2 sm:py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white transition-all duration-200 text-sm sm:text-base"
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
                              className="w-full bg-primary text-white px-4 py-2 sm:py-2.5 rounded-lg hover:bg-primary-dark flex items-center justify-center transition-all duration-200 hover:shadow-md text-sm sm:text-base font-medium"
                              style={{ backgroundColor: styles.primary }}
                              onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.primaryDark}
                              onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.primary}
                            >
                              <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                              Search
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <button
                            className="w-full bg-primary text-white px-4 py-2 sm:py-2.5 rounded-lg hover:bg-primary-dark flex items-center justify-center transition-all duration-200 hover:shadow-md text-sm sm:text-base font-medium"
                            style={{ backgroundColor: styles.primary }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.primaryDark}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.primary}
                          >
                            <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            List My Vehicle
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Auctions Section */}
        <FeaturedAuctionsSection />
      </div>
    );
  }

  // Centered layout (new) - Default/Fallback (Uses state variables)
  return (
    <div className="quickauction-component-centered-wrapper w-full">
      {/* Full-width background image with centered content */}
      <div
        className="w-full py-12 md:py-16 lg:py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Center column content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          {/* Large headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center leading-tight drop-shadow-lg mb-8 md:mb-10">
            Quick Listing.<br />
            Competitive Bidding.<br />
            Fast Results.
          </h1>

          {/* Search content in white box */}
          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 pb-4 sm:pb-6 md:pb-8 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              {activeTab === 'Buy' ? 'What are you looking for?' : 'What are you selling?'}
            </h2>

            {/* Centered tabs */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="inline-flex rounded-lg p-1 bg-gray-100">
                <button
                  onClick={() => setActiveTab('Sell')}
                  className={`px-6 sm:px-8 md:px-10 py-2.5 text-center font-medium text-base rounded-lg transition-all duration-200 ${activeTab === 'Sell' ? 'bg-primary text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
                  style={{ backgroundColor: activeTab === 'Sell' ? styles.primary : '' }}
                >
                  Sell
                </button>
                <button
                  onClick={() => setActiveTab('Buy')}
                  className={`px-6 sm:px-8 md:px-10 py-2.5 text-center font-medium text-base rounded-lg transition-all duration-200 ${activeTab === 'Buy' ? 'bg-primary text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
                  style={{ backgroundColor: activeTab === 'Buy' ? styles.primary : '' }}
                >
                  Buy
                </button>
              </div>
            </div>

            {/* Category grid in 3 columns at smaller breakpoints, 5 on larger */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6 md:mb-8">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className={`bg-white border ${selectedCategory === category.name ? 'border-primary shadow-md' : 'border-gray-200'} rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-center p-2 sm:p-3 cursor-pointer hover:border-primary h-[70px] sm:h-[80px] md:h-[90px] flex flex-col justify-center items-center`}
                  onClick={() => setSelectedCategory(category.name === selectedCategory ? '' : category.name)}
                  style={{ borderColor: selectedCategory === category.name ? styles.primary : '' }}
                >
                  <div className="flex justify-center mb-1.5 sm:mb-2">
                    {React.createElement(category.icon, {
                      size: 24,
                      stroke: selectedCategory === category.name ? styles.primary : "#0054da",
                      strokeWidth: 1.5,
                      className: "transition-colors duration-200"
                    })}
                  </div>
                  <h3 className="font-medium text-xs sm:text-sm">{category.name}</h3>
                </div>
              ))}
            </div>

            {/* Description text - centered */}
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mb-6 md:mb-8 text-center mx-auto">
              From cars to watercraft, motorcycles to miscellaneous items—connect with motivated buyers and sellers for competitive bidding in minutes.
            </p>

            {/* Form fields - stacked vertically, maximum width container */}
            <div className="min-h-[60px] sm:min-h-[70px] md:min-h-[80px] max-w-xl mx-auto">
              {selectedCategory && (
                <div className="animate-fadeIn space-y-3">
                  {activeTab === 'Buy' ? (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <select
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white transition-all duration-200 text-sm sm:text-base"
                            value={selectedMake}
                            onChange={(event) => setSelectedMake(event.target.value)}
                            style={{ borderColor: isSearchFocused ? styles.primary : '' }}
                          >
                            <option>All makes</option>
                            {availableMakes.slice(1).map(make => (
                              <option key={make}>{make}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <select
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white transition-all duration-200 text-sm sm:text-base"
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setIsSearchFocused(false)}
                          >
                            <option>All models</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <select
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white transition-all duration-200 text-sm sm:text-base"
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
                          className="w-full bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary-dark flex items-center justify-center transition-all duration-200 hover:shadow-md text-sm sm:text-base font-medium"
                          style={{ backgroundColor: styles.primary }}
                          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.primaryDark}
                          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.primary}
                        >
                          <Search className="w-5 h-5 mr-2" />
                          Search
                        </button>
                      </div>
                    </>
                  ) : (
                    <div>
                      <button
                        className="w-full bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary-dark flex items-center justify-center transition-all duration-200 hover:shadow-lg text-base font-medium"
                        style={{ backgroundColor: styles.primary }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.primaryDark}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.primary}
                      >
                        <Search className="w-5 h-5 mr-2" />
                        List My Vehicle
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Auctions Section */}
      <FeaturedAuctionsSection />
    </div>
  );
};

// Export all versions with different class names
export const SplitSearchComponent: React.FC<Omit<SearchComponentProps, 'layoutType'>> = (props) => (
  <SearchComponent {...props} layoutType="split" />
);

export const CenteredSearchComponent: React.FC<Omit<SearchComponentProps, 'layoutType'>> = (props) => (
  <SearchComponent {...props} layoutType="centered" />
);

export default SearchComponent;