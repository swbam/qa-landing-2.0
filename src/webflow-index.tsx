import React from 'react';
import ReactDOM from 'react-dom';
import SearchComponent from './SearchComponent';
import './tailwind-webflow.css';
import './index.css';

// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
  // Find all instances of the component on the page
  const elements = document.querySelectorAll('.quickauction-search-component');
  
  // Render the component in each element
  elements.forEach(el => {
    const primaryColor = el.getAttribute('data-primary-color') || '#0054da';
    const primaryDarkColor = el.getAttribute('data-primary-dark-color') || '#0049bb';
    
    ReactDOM.render(
      <SearchComponent 
        primaryColor={primaryColor} 
        primaryDarkColor={primaryDarkColor} 
      />,
      el
    );
  });
}); 