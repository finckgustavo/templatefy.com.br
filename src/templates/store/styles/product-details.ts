export const generateProductDetailsStyles = () => `
.product-details {
  display: none;
  background: white;
  min-height: 100vh;
}

.product-details.active {
  display: block;
}

.product-header .nav {
  justify-content: space-between;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
}

.back-button:hover {
  background: rgba(0, 0, 0, 0.05);
}

.back-button .material-icons {
  font-size: 20px;
}

.product-display {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.main-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  object-fit: contain;
}

.image-thumbnails {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 4px;
  max-width: 400px;
  width: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.image-thumbnails::-webkit-scrollbar {
  display: none;
}

.thumbnail {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  cursor: pointer;
  object-fit: cover;
  border: 2px solid transparent;
  transition: border-color 0.2s;
}

.thumbnail.active {
  border-color: var(--button-color);
}

.gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.gallery-nav:hover {
  background: white;
}

.gallery-nav.prev {
  left: 10px;
}

.gallery-nav.next {
  right: 10px;
}

.product-info {
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.product-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.promo-tag {
  display: inline-block;
  background: #ffebee;
  color: #c62828;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 16px;
}

.product-price {
  margin-bottom: 16px;
}

.old-price {
  color: #999;
  text-decoration: line-through;
  font-size: 14px;
  margin-bottom: 4px;
}

.current-price {
  color: var(--current-price-color);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}

.buy-button {
  width: 100%;
  background: var(--button-color);
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 24px;
  transition: background-color 0.2s;
}

.buy-button:hover {
  background: var(--button-hover-color);
}

.info-container {
  border-radius: 8px;
  margin-bottom: 24px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
}

.info-item .material-icons {
  color: var(--button-color);
  font-size: 20px;
}

.info-text {
  font-size: 14px;
  color: #666;
  flex: 1;
}

.info-text a {
  color: var(--button-color);
  text-decoration: none;
  font-weight: 500;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  width: fit-content;
  padding: 3px 15px;
  background-color: var(--details-color);
  border-radius: 10px 10px 0px 0px;
}

.section-content {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 24px;
  border: 1px solid var(--details-color);
  border-radius: 0px 10px 10px 10px;
  padding: 3px 10px;
}

.specs-list {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 24px;
  border: 1px solid var(--details-color);
  border-radius: 0px 10px 10px 10px;
  padding: 3px 10px;
}

.specs-list dt {
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
}

.specs-list dd {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

.comments-section {
  margin-bottom: 70px;
}

.comment {
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.comment:last-child {
  border-bottom: none;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.comment-author {
  font-weight: 500;
  color: #333;
}

.comment-rating {
  color: #ffc107;
  letter-spacing: 2px;
}

.comment-text {
  color: #666;
  line-height: 1.5;
}

.no-comments {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px 0;
  color: #999;
  text-align: center;
}

.no-comments .material-icons {
  font-size: 32px;
  opacity: 0.5;
}

.fixed-button {
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 32px);
  max-width: 600px;
  background: var(--button-color);
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 100;
  transition: background-color 0.2s;
}

.fixed-button:hover {
  background: var(--button-hover-color);
}

@media (min-width: 768px) {
  .product-title {
    font-size: 24px;
  }

  .current-price {
    font-size: 36px;
  }

  .section-title {
    font-size: 18px;
  }

  .specs-list {
    grid-template-columns: repeat(2, 1fr);
  }
}`;