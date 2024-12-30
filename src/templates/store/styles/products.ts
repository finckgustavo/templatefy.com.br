export const generateProductStyles = () => `
.products {
  max-width: 600px;
  margin: 1rem auto;
  padding: 0 8px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  padding: 0;
  width: 100%;
}

.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-2px);
}

.discount-tag {
  position: absolute;
  top: 4px;
  left: 4px;
  background-color: #019c3a;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  z-index: 1;
  font-weight: 500;
}

.product-image {
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
  padding: 0;
  margin-top: 5px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-name {
  font-size: 16px;
  color: #333;
  margin: 2px 0;
  line-height: 1.2;
  font-weight: 400;
  text-align: left;
}

.stock-indicator {
  margin: 4px 0;
  padding: 2px;
  border-radius: 4px;
  background-color: #e8f5e9;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.stock-indicator.medium {
  background-color: #fff3e0;
}

.stock-indicator.low {
  background-color: #ffebee;
}

.stock-text {
  font-size: 12px;
  color: #2e7d32;
  margin: 0;
}

.stock-indicator.medium .stock-text {
  color: #f57c00;
}

.stock-indicator.low .stock-text {
  color: #c62828;
}

.price-container {
  margin-top: auto;
  text-align: left;
}

.original-price {
  color: #999;
  text-decoration: line-through;
  font-size: 16px;
  margin-bottom: 2px;
}

.current-price {
  color: var(--current-price-color);
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
}`;