export const generateProductDetailsScripts = () => `
// Store current image index for each product
const productStates = {};

function showProductDetails(productId) {
  // Hide home page
  document.getElementById('home-page').style.display = 'none';
  
  // Show product details
  const details = document.getElementById('product-' + productId);
  details.classList.add('active');
  
  // Initialize product state
  productStates[productId] = { currentIndex: 0 };
  
  // Scroll to top
  window.scrollTo(0, 0);
  
  // Handle fixed button visibility
  const fixedButton = details.querySelector('.fixed-button');
  const buyButton = details.querySelector('.buy-button');
  
  const scrollHandler = () => {
    const buttonRect = buyButton.getBoundingClientRect();
    if (buttonRect.bottom < 0) {
      fixedButton.style.display = 'block';
    } else {
      fixedButton.style.display = 'none';
    }
  };
  
  window.addEventListener('scroll', scrollHandler);
  details.scrollHandler = scrollHandler;
}

function hideProductDetails(productId) {
  // Show home page
  document.getElementById('home-page').style.display = 'block';
  
  // Hide product details
  const details = document.getElementById('product-' + productId);
  details.classList.remove('active');
  
  // Remove scroll listener
  if (details.scrollHandler) {
    window.removeEventListener('scroll', details.scrollHandler);
  }
}

function setImage(productId, index) {
  const product = data.products.find(p => p.id === productId);
  if (!product || !product.images[index]) return;
  
  const mainImage = document.getElementById('main-image-' + productId);
  const thumbnails = document.querySelectorAll('#product-' + productId + ' .thumbnail');
  
  productStates[productId].currentIndex = index;
  mainImage.src = product.images[index];
  
  // Update active thumbnail
  thumbnails.forEach((thumb, idx) => {
    if (idx === index) {
      thumb.classList.add('active');
    } else {
      thumb.classList.remove('active');
    }
  });
}

function changeImage(productId, direction) {
  const product = data.products.find(p => p.id === productId);
  if (!product) return;
  
  const state = productStates[productId];
  const totalImages = product.images.length;
  let newIndex;
  
  if (direction === 'next') {
    newIndex = (state.currentIndex + 1) % totalImages;
  } else {
    newIndex = state.currentIndex - 1;
    if (newIndex < 0) {
      newIndex = totalImages - 1;
    }
  }
  
  setImage(productId, newIndex);
}`;