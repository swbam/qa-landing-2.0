# QuickAuction Search Component

This repository hosts the QuickAuction search component files for use in Webflow.

## Files

- `public/quickauction-search.js` - The JavaScript component
- `public/quickauction-search.css` - The component's CSS styles

## Using in Webflow

### 1. Add to Webflow Head

```html
<!-- React and ReactDOM -->
<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"></script>

<!-- CSS Variables -->
<style>
:root {
  --primary: #0054da;
  --primary-dark: #0049bb;
}
</style>

<!-- Component CSS -->
<link rel="stylesheet" href="https://your-vercel-deployment-url.vercel.app/quickauction-search.css">
```

### 2. Add to Webflow Body

```html
<!-- Component JS -->
<script src="https://your-vercel-deployment-url.vercel.app/quickauction-search.js"></script>
```

### 3. Add Component HTML

```html
<div class="quickauction-search-component" data-primary-color="#0054da" data-primary-dark-color="#0049bb"></div>
``` 