# QuickAuction Search Component for Webflow

This package contains a React component that can be embedded into a Webflow site, providing a user interface for searching/selling vehicles similar to CarGurus.

## How to Use in Webflow

### 1. Add Required Scripts

In your Webflow project:

1. Navigate to the page settings
2. In the "Custom Code" section, add the following to the `<head>` tag:

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
<link rel="stylesheet" href="https://YOUR_S3_BUCKET.s3.YOUR_REGION.amazonaws.com/quickauction-search.css">
```

3. Add the following to the "Before `</body>` tag" section:

```html
<!-- Component JS -->
<script src="https://YOUR_S3_BUCKET.s3.YOUR_REGION.amazonaws.com/quickauction-search.js"></script>
```

### 2. Add the Component to Your Page

1. Add a div element where you want the component to appear
2. Give it the class `quickauction-search-component`
3. (Optional) Add data attributes to customize the component:
   - `data-primary-color`: to customize the primary color
   - `data-primary-dark-color`: to customize the hover/dark variant of the primary color

Example:

```html
<div class="quickauction-search-component" 
     data-primary-color="#0054da" 
     data-primary-dark-color="#0049bb">
</div>
```

## Development

### Setup

```bash
# Install dependencies
npm install
```

### Build for Development

```bash
# Run local development server
npm run dev
```

### Build for Production

```bash
# Build the component for Webflow
npm run build:webflow
```

### Deploy to S3

Before deploying:
1. Update `YOUR_BUCKET_NAME` in package.json with your actual S3 bucket name

```bash
# Deploy to S3
npm run deploy
```

Or do both build and deploy:

```bash
npm run bd
```

## Configuration

The component accepts the following configuration via data attributes:

| Attribute | Description | Default |
|-----------|-------------|---------|
| `data-primary-color` | Primary color for buttons and active elements | `#0054da` |
| `data-primary-dark-color` | Dark/hover variant of primary color | `#0049bb` |

## S3 Setup

1. Create an S3 bucket with a unique name
2. Configure bucket policy to allow public read access
3. Set up CORS to allow your Webflow site to access files:

```json
[
  {
    "AllowedMethods": [
      "GET"
    ],
    "AllowedOrigins": [
      "*"
    ]
  }
]
``` 