export const generateProductDetails = (product: any, data: Record<string, string>) => `
<div id="product-${product.id}" class="product-details">
  <header class="header product-header">
    <nav class="nav">
      <button class="back-button" onclick="hideProductDetails(${product.id})">
        <span class="material-icons">arrow_back</span>
      </button>
      <img src="${data.logoUrl}" alt="${data.brandName}" class="logo">
      <div style="width: 40px"></div>
    </nav>
  </header>

  <div class="product-display">
    <div style="position: relative; width: 100%; max-width: 400px;">
      <img src="${product.images[0]}" alt="${product.name}" class="main-image" id="main-image-${product.id}">
      ${product.images.length > 1 ? `
        <button class="gallery-nav prev" onclick="changeImage(${product.id}, 'prev')">
          <span class="material-icons">chevron_left</span>
        </button>
        <button class="gallery-nav next" onclick="changeImage(${product.id}, 'next')">
          <span class="material-icons">chevron_right</span>
        </button>
      ` : ''}
    </div>
    ${product.images.length > 1 ? `
      <div class="image-thumbnails">
        ${product.images.map((img, idx) => `
          <img 
            src="${img}" 
            alt="${product.name} - Imagem ${idx + 1}"
            class="thumbnail ${idx === 0 ? 'active' : ''}"
            onclick="setImage(${product.id}, ${idx})"
          >
        `).join('')}
      </div>
    ` : ''}
  </div>

  <div class="product-info">
    <h1 class="product-title">${product.name}</h1>
    <div class="promo-tag" style="background: ${data.promoBgColor}; color: ${data.promoTextColor}">
      ${data.promoText}
    </div>
    
    <div class="product-price">
      <div class="old-price">${product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
      <div class="current-price">${product.discountPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
    </div>

    <button class="buy-button" onclick="window.location.href='${product.buyUrl || '#'}'">
      Comprar agora
    </button>

    <div class="info-container">
      <div class="info-item">
        <span class="material-icons">verified_user</span>
        <span class="info-text">
          <a>Compra Garantida</a>, receba o produto que está esperando ou devolvemos o dinheiro.
        </span>
      </div>
      <div class="info-item">
        <span class="material-icons">emoji_events</span>
        <span class="info-text">12 meses de garantia de fábrica.</span>
      </div>
    </div>

    ${product.showDescription !== false ? `
      <h2 class="section-title">DETALHES</h2>
      <div class="section-content">
        ${product.description || `
          <div class="no-comments">
            <span class="material-icons">description</span>
            <p>Este produto ainda não possui uma descrição detalhada</p>
          </div>
        `}
      </div>
    ` : ''}

    ${product.showSpecs !== false ? `
      <h2 class="section-title">CARACTERÍSTICAS</h2>
      <dl class="specs-list">
        <dd>${product.specs || `
          <div class="no-comments">
            <span class="material-icons">list_alt</span>
            <p>Este produto ainda não possui especificações cadastradas</p>
          </div>
        `}</dd>
      </dl>
    ` : ''}

    ${product.showComments !== false ? `
      <h2 class="section-title">AVALIAÇÕES</h2>
      <div class="section-content comments-section">
        ${product.comments?.length ? `
          ${product.comments.map(comment => `
            <div class="comment">
              <div class="comment-header">
                <div class="comment-author">${comment.author}</div>
                <div class="comment-rating">
                  ${'★'.repeat(comment.rating)}${'☆'.repeat(5 - comment.rating)}
                </div>
              </div>
              <div class="comment-text">${comment.text}</div>
            </div>
          `).join('')}
        ` : `
          <div class="no-comments">
            <span class="material-icons">chat_bubble_outline</span>
            <p>Ainda não há avaliações para este produto</p>
          </div>
        `}
      </div>
    ` : ''}
  </div>

  <button class="fixed-button" onclick="window.location.href='${product.buyUrl || '#'}'">
    Comprar agora
  </button>
</div>`;