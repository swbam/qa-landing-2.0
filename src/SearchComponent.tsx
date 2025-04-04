import React from 'react'; // Removed unused useState, useEffect
import { Filter, ArrowUpDown } from 'lucide-react'; // Removed unused icons (Car, Sailboat, etc.)
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
  // layoutType?: 'standard' | 'split' | 'centered'; // Removed as other layouts are deleted
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
  // layoutType = 'standard' // Removed prop
}) => {
  // Restore state variables needed for split/centered layouts
  // Removed unused state variables (activeTab, selectedMake, selectedPrice, selectedCategory, availableMakes, isSearchFocused)

  // Define category data structure
  // Removed unused vehicleCategories constant

  // Removed unused category/make data arrays and the 'categories' constant

  // Removed unused getSubCategories function

  // Restore effect needed for split/centered layouts
  // Removed unused useEffect hook

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
      {/* Button groups stack vertically on mobile, row on larger screens */}
      <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
        {/* Sell Button Group */}
        <div className="flex flex-col items-center w-full sm:w-auto">
          <a
            href="https://app.quickauction.com/seller/add"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-16 md:px-24 py-4 sm:py-5 text-center font-semibold text-lg sm:text-xl bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl" // Increased width (px)
            style={{ backgroundColor: styles.primary }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.primaryDark}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.primary}
          >
            List & Earn
          </a>
          <p className="text-xs text-gray-600 mt-2">Quick listing, real buyers, just $20 flat fee</p>
        </div>

        {/* Buy Button Group */}
        <div className="flex flex-col items-center w-full sm:w-auto">
          <a
            href="https://app.quickauction.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-16 md:px-24 py-4 sm:py-5 text-center font-semibold text-lg sm:text-xl bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl" // Increased width (px)
            style={{ backgroundColor: styles.primary }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.primaryDark}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.primary}
          >
            Discover & Bid
          </a>
           <p className="text-xs text-gray-600 mt-2">Free signup, thousands of vehicles & equipment</p>
        </div>
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

  // Always return the standard layout structure now
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

        {/* Removed Third and Fourth sections */}
      </div>
    );
}; // Correctly closes the component function

// Export all versions with different class names
// Removed SplitSearchComponent and CenteredSearchComponent exports as layouts were removed
export default SearchComponent;