// Update the header and banner styles
export const generateStyles = (data: Record<string, string>) => `
/* ... other styles ... */

.header {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 40px;
}

.cart-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-button:hover {
  background-color: #f5f5f5;
}

.cart-button .material-icons {
  font-size: 24px;
  color: #333;
}

.banner {
  width: 100%;
  margin-bottom: 2rem;
}

.banner-image {
  width: 100%;
  height: auto;
  display: block;
}

/* ... rest of the styles ... */
`;