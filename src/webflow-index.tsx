import React from 'react';
import ReactDOM from 'react-dom';
import SearchComponent from './SearchComponent';
import './index.css';
import './tailwind-webflow.css';

// Initialize our component with any data attributes from the DOM element
document.addEventListener('DOMContentLoaded', () => {
  const mountPoints = document.querySelectorAll('.quickauction-search-component');
  
  mountPoints.forEach((mountPoint) => {
    // Get any custom config from data attributes
    const primaryColor = mountPoint.getAttribute('data-primary-color') || '#0054da';
    const primaryDarkColor = mountPoint.getAttribute('data-primary-dark-color') || '#0049bb';
    
    ReactDOM.render(
      <SearchComponent
        primaryColor={primaryColor}
        primaryDarkColor={primaryDarkColor}
      />,
      mountPoint
    );
  });
}); 