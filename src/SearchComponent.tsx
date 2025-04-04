import React from 'react'; // Removed unused useState, useEffect
// Import icons for new sections
import { FileText, BadgeDollarSign, Truck as DeliveryTruck, CheckCircle, Clock, Users, ShieldCheck, Filter, ArrowUpDown } from 'lucide-react'; // Removed unused ChevronRight, HelpCircle
import backgroundImage from './qa-header-bg.png'; // Updated background image

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

// --- New Section Components ---

// How It Works Section
const HowItWorksSection: React.FC<{ primaryColor?: string }> = ({ primaryColor = '#0054da' }) => (
  <div className="bg-gray-50 py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-base font-semibold text-primary tracking-wide uppercase" style={{ color: primaryColor }}>How It Works</h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sell Your Vehicle in 3 Simple Steps</p>
      <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white" style={{ backgroundColor: primaryColor }}>
              <FileText className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">1. Submit Details</h3>
            <p className="mt-2 text-base text-gray-500">
              Enter your vehicle's year, make, model, condition, and upload a few quality photos. It only takes minutes.
            </p>
          </div>
        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white" style={{ backgroundColor: primaryColor }}>
              <BadgeDollarSign className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">2. Get Your Offer Fast</h3>
            <p className="mt-2 text-base text-gray-500">
              Our network provides competitive offers quickly, often within 30 minutes. Accept the best one for you.
            </p>
          </div>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white" style={{ backgroundColor: primaryColor }}>
              <DeliveryTruck className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">3. Arrange Pickup & Payment</h3>
            <p className="mt-2 text-base text-gray-500">
              Coordinate pickup with the buyer within 24-hours. Receive prompt, secure payment upon vehicle collection.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// CTA Banner Section
const CTABannerSection: React.FC<{ primaryColor?: string }> = ({ primaryColor = '#0054da' }) => ( // Removed unused primaryDarkColor prop
  <div className="bg-primary" style={{ backgroundColor: primaryColor }}>
    <div className="max-w-4xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        <span className="block">Turn Your Vehicle into Cash Quickly.</span>
      </h2>
      <p className="mt-4 text-lg leading-6 text-indigo-100">
        Experience lightning-fast sales with our guaranteed quick listing process. No waiting, no hassle.
      </p>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <a
            href="https://app.quickauction.com/seller/add" // Link to seller page
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
            style={{ color: primaryColor }}
          >
            List Your Vehicle Now
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Why Choose Us Section
const WhyChooseSection: React.FC<{ primaryColor?: string, primaryDarkColor?: string }> = ({ primaryColor = '#0054da', primaryDarkColor = '#0049bb' }) => (
  <div className="bg-white py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div>
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase" style={{ color: primaryColor }}>Why Choose QuickAuction?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Unmatched Advantage: Sell Smarter, Faster</p>
          <p className="mt-4 text-lg text-gray-500">
            Leverage our extensive network and streamlined process to get the best value for your vehicle with minimal effort.
          </p>
          <dl className="mt-10 space-y-6">
            {[
              { icon: Users, title: 'Massive Buyer Network', description: 'Access qualified buyers nationwide, ensuring competitive bids.' },
              { icon: Clock, title: 'Lightning-Fast Process', description: 'From listing to offer often in just 30 minutes.' },
              { icon: ShieldCheck, title: 'Secure Transactions', description: 'Vetted buyers and secure payment processes for peace of mind.' },
              { icon: CheckCircle, title: 'Flexible Options', description: 'We handle all types, including used, damaged, or wrecked vehicles.' },
              { icon: BadgeDollarSign, title: 'Low, Flat Fee', description: 'Our transparent $20 seller fee means you keep more of your sale.' },
            ].map((item) => (
              <div key={item.title} className="relative flex items-start">
                <dt className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white" style={{ backgroundColor: primaryColor }}>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </dt>
                <dd className="ml-4">
                  <p className="text-lg leading-6 font-medium text-gray-900">{item.title}</p>
                  <p className="mt-1 text-base text-gray-500">{item.description}</p>
                </dd>
              </div>
            ))}
          </dl>
           <div className="mt-10">
             <a
               href="https://app.quickauction.com/seller/add" // Link to seller page
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
               style={{ backgroundColor: primaryColor }}
               onMouseOver={(e) => e.currentTarget.style.backgroundColor = primaryDarkColor}
               onMouseOut={(e) => e.currentTarget.style.backgroundColor = primaryColor}
             >
               Get Started Selling
             </a>
           </div>
        </div>
        <div className="mt-10 lg:mt-0" aria-hidden="true">
          {/* Placeholder for image - replace src with actual image URL if available */}
          <img
            className="relative mx-auto rounded-lg shadow-xl"
            width={490}
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=600" // Example image
            alt="Vehicle being auctioned"
          />
        </div>
      </div>
    </div>
  </div>
);

// FAQ Section
const FAQSection: React.FC<{ primaryColor?: string, primaryDarkColor?: string }> = ({ primaryColor = '#0054da', primaryDarkColor = '#0049bb' }) => {
  const faqs = [
    { question: 'How quickly can I sell my vehicle on QuickAuction?', answer: 'Offers often arrive within 30 minutes of listing! The entire process from listing to pickup coordination typically happens within 1-2 days.' },
    { question: 'Are there any fees for sellers using QuickAuction?', answer: 'We charge a simple, flat $20 success fee only if your vehicle sells. There are no hidden costs or listing fees.' },
    { question: 'Can I sell or buy damaged or wrecked vehicles on QuickAuction?', answer: 'Absolutely! We connect buyers and sellers for all types of vehicles, regardless of condition, including damaged, wrecked, or non-running units.' },
    { question: 'How does the vehicle pickup process work after a sale?', answer: 'Once you accept an offer, you coordinate directly with the buyer for pickup within a 24-hour window. Payment is typically made securely upon collection.' },
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to know about listing your vehicle and completing a successful sale on QuickAuction.
          </p>
        </div>
        <dl className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="p-6 bg-white rounded-lg shadow-sm">
              <dt className="text-lg font-medium text-gray-900">{faq.question}</dt>
              <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 text-center">
           <a
             href="#" // Link to a potential full FAQ page
             className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
             style={{ backgroundColor: primaryColor }}
             onMouseOver={(e) => e.currentTarget.style.backgroundColor = primaryDarkColor}
             onMouseOut={(e) => e.currentTarget.style.backgroundColor = primaryColor}
           >
             View All FAQs
           </a>
         </div>
      </div>
    </div>
  );
};

// Second CTA Section (Simplified)
const SecondCTABannerSection: React.FC<{ primaryColor?: string, primaryDarkColor?: string }> = ({ primaryColor = '#0054da', primaryDarkColor = '#0049bb' }) => (
   <div className="bg-white py-16 sm:py-24">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
       <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to Turn Your Vehicle into Cash?</h2>
       <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
         Connect with vetted buyers instantly, get competitive offers within minutes. No hassles, no waiting.
       </p>
       <div className="mt-8">
         <a
           href="https://app.quickauction.com/seller/add" // Link to seller page
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
           style={{ backgroundColor: primaryColor }}
           onMouseOver={(e) => e.currentTarget.style.backgroundColor = primaryDarkColor}
           onMouseOut={(e) => e.currentTarget.style.backgroundColor = primaryColor}
         >
           List Your Vehicle Today
         </a>
       </div>
       {/* Optional: Add image here if desired */}
     </div>
   </div>
 );


// --- Main Search Component ---

const SearchComponent: React.FC<SearchComponentProps> = ({
  primaryColor = '#0054da',
  primaryDarkColor = '#0049bb',
  // layoutType = 'standard' // Removed prop
}) => {
  // Removed unused state variables and useEffect

  // Dynamic styles to use custom colors
  const styles = {
    primary: primaryColor,
    primaryDark: primaryDarkColor
  };

  // Simplified Search form content with only Buy/Sell links
  const SearchFormContent = () => (
    <>
      {/* Button groups stack vertically on mobile, row on larger screens */}
      <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
        {/* Sell Button Group */}
        <div className="flex flex-col items-center w-full sm:w-auto">
          <a
            href="https://app.quickauction.com/seller/add"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-16 md:px-24 py-4 sm:py-5 text-center font-semibold text-xl bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl" // Increased width (px), Increased mobile font size back to text-xl
            style={{ backgroundColor: styles.primary }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.primaryDark}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.primary}
          >
            Sell Your Vehicle
          </a>
          <p className="text-xs text-gray-600 mt-2">List today for a low $20 fee!</p>
        </div>

        {/* Buy Button Group */}
        <div className="flex flex-col items-center w-full sm:w-auto">
          <a
            href="https://app.quickauction.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-16 md:px-24 py-4 sm:py-5 text-center font-semibold text-xl bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl" // Increased width (px), Increased mobile font size back to text-xl
            style={{ backgroundColor: styles.primary }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.primaryDark}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.primary}
          >
            Find Your Next Vehicle
          </a>
           <p className="text-xs text-gray-600 mt-2">Sign up free & start bidding today!</p>
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
            <div className="relative aspect-video"> {/* Changed aspect ratio to make image shorter */}
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

  // Main component return statement
  return (
      <div className="quickauction-component-wrapper w-full">
        {/* Hero section */}
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

          {/* Headline */}
          <div className="max-w-5xl mx-auto px-3 sm:px-4 text-center text-white relative z-10 flex flex-col justify-center py-2 sm:py-4 mt-2 sm:mt-4 mb-10 md:mb-12">
            <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">Quick Listing.<br />Competitive Bidding.<br />Fast Results.</h1> {/* Increased base (mobile) font size */}
          </div>

          {/* Button container */}
          <div className="w-full max-w-5xl mx-auto px-3 sm:px-4 md:px-6 relative z-20">
            <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8"> {/* Added bg-white, rounded-lg, shadow, adjusted padding */}
              <SearchFormContent /> {/* Uses the simplified version */}
            </div>

            {/* Subheadline */}
            <div className="max-w-lg mx-auto mt-6 sm:mt-8 md:mt-8 text-center">
              <p className="text-white text-lg sm:text-base md:text-lg leading-relaxed drop-shadow-lg font-medium"> {/* Increased base font size */}
                From cars to watercraft, motorcycles to miscellaneous items—connect with motivated buyers and sellers for competitive bidding in minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Auctions Section */}
        <FeaturedAuctionsSection />

        {/* --- Newly Added Sections --- */}
        <HowItWorksSection primaryColor={primaryColor} />
        <CTABannerSection primaryColor={primaryColor} />
        <WhyChooseSection primaryColor={primaryColor} primaryDarkColor={primaryDarkColor} />
        <FAQSection primaryColor={primaryColor} primaryDarkColor={primaryDarkColor} />
        <SecondCTABannerSection primaryColor={primaryColor} primaryDarkColor={primaryDarkColor} />

      </div>
    );
}; // Correctly closes the component function

// Removed SplitSearchComponent and CenteredSearchComponent exports as layouts were removed
export default SearchComponent;