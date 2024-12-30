import { generateHeaderStyles } from './header';
import { generateBannerStyles } from './banner';
import { generateProductStyles } from './products';
import { generateProductDetailsStyles } from './product-details';
import { generateFooterStyles } from './footer';

export const generateStyles = (data: Record<string, string>) => `
/* CSS Variables */
:root {
  --header-color: ${data.headerColor};
  --background-color: ${data.backgroundColor};
  --current-price-color: ${data.currentPriceColor};
  --details-color: ${data.detailsColor};
  --button-color: ${data.buttonColor};
  --button-hover-color: ${data.buttonHoverColor};
}

/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body {
  background-color: var(--background-color);
  min-height: 100vh;
}

main {
  min-height: calc(100vh - 60px);
}

/* Component Styles */
${generateHeaderStyles()}
${generateBannerStyles()}
${generateProductStyles()}
${generateProductDetailsStyles()}
${generateFooterStyles()}

/* Utility Classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}`;