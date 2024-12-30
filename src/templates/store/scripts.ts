export const generateScripts = (data: Record<string, string>) => `
// Product Image Gallery
function initializeGallery() {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    const image = card.querySelector('.product-image img');
    let currentImageIndex = 0;
    const product = JSON.parse(data.products).find(p => 
      p.images[0] === image.getAttribute('src')
    );
    
    if (product && product.images.length > 1) {
      setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % product.images.length;
        image.style.opacity = '0';
        
        setTimeout(() => {
          image.src = product.images[currentImageIndex];
          image.style.opacity = '1';
        }, 200);
      }, 3000);
    }
  });
}

// Sticky Header
function initializeStickyHeader() {
  const header = document.querySelector('.header');
  const headerHeight = header.offsetHeight;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initializeGallery();
  initializeStickyHeader();
});
`;