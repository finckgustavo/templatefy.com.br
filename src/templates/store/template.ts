import { Template } from '@/types';
import { generateStyles } from './styles/index';
import { generateProductDetailsScripts } from './scripts/product-details';
import { generateProductDetails } from './components/product-details';
import { imagePathManager } from '@/lib/utils/image-paths';

export const storeTemplate: Template = {
  id: 'store',
  name: 'Loja Virtual',
  description: 'Template para criar uma loja virtual completa e personalizada',
  fields: [
    {
      id: 'brandName',
      label: 'Nome da Marca',
      type: 'text',
      description: 'Nome da sua loja'
    },
    {
      id: 'logoUrl',
      label: 'URL do Logo',
      type: 'url',
      description: 'URL do logotipo da marca'
    },
    {
      id: 'bannerUrl',
      label: 'URL do Banner',
      type: 'url',
      description: 'Banner principal da loja'
    },
    {
      id: 'headerColor',
      label: 'Cor do Menu Superior',
      type: 'color',
      description: 'Cor do menu superior'
    },
    {
      id: 'backgroundColor',
      label: 'Cor do Background',
      type: 'color',
      description: 'Cor de fundo da página'
    },
    {
      id: 'currentPriceColor',
      label: 'Cor do Preço Atual',
      type: 'color',
      description: 'Cor do preço com desconto'
    },
    {
      id: 'detailsColor',
      label: 'Cor dos Detalhes',
      type: 'color',
      description: 'Cor dos títulos de seção'
    },
    {
      id: 'buttonColor',
      label: 'Cor do Botão',
      type: 'color',
      description: 'Cor principal dos botões'
    },
    {
      id: 'buttonHoverColor',
      label: 'Cor do Botão (Hover)',
      type: 'color',
      description: 'Cor dos botões ao passar o mouse'
    },
    {
      id: 'promoText',
      label: 'Texto da Promoção',
      type: 'text',
      description: 'Texto que aparece na tag de promoção'
    },
    {
      id: 'promoBgColor',
      label: 'Cor de Fundo da Promoção',
      type: 'color',
      description: 'Cor de fundo da tag de promoção'
    },
    {
      id: 'promoTextColor',
      label: 'Cor do Texto da Promoção',
      type: 'color',
      description: 'Cor do texto da tag de promoção'
    },
    {
      id: 'products',
      label: 'Produtos',
      type: 'text',
      description: 'Lista de produtos em formato JSON'
    }
  ],
  defaultValues: {
    brandName: 'Minha Loja',
    logoUrl: 'https://placehold.co/200x80',
    bannerUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    headerColor: '#FFFFFF',
    backgroundColor: '#F5F5F5',
    currentPriceColor: '#1A73E8',
    detailsColor: '#BCBCBC',
    promoText: '🎄 Promoção de Natal',
    promoBgColor: '#ffebee',
    promoTextColor: '#c62828',
    buttonColor: '#1A73E8',
    buttonHoverColor: '#1557B0',
    products: JSON.stringify([
      {
        id: 1,
        name: 'Produto 1',
        description: 'Descrição do produto 1',
        price: 99.90,
        discountPrice: 79.90,
        stock: 15,
        images: [
          'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
          'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f'
        ],
        specs: `
          • Sistema: iOS 17
          • Tela: 6.7" Super Retina XDR
          • Processador: A17 Pro
          • Câmera: 48MP + 12MP + 12MP
          • Bateria: 4.422 mAh
        `,
        comments: [],
        buyUrl: 'https://exemplo.com/produto/1'
      },
      {
        id: 2,
        name: 'Produto 2',
        description: 'Descrição do produto 2',
        price: 149.90,
        discountPrice: 129.90,
        stock: 8,
        images: [
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
          'https://images.unsplash.com/photo-1583394838336-acd977736f90'
        ],
        specs: `
          • Sistema: Android 14
          • Tela: 6.8" Dynamic AMOLED
          • Processador: Snapdragon 8 Gen 3
          • Câmera: 200MP + 12MP + 12MP
          • Bateria: 5.000 mAh
        `,
        comments: [],
        buyUrl: 'https://exemplo.com/produto/2'
      }
    ])
  },
  generate: async (data) => {
    // Process image paths
    const [logoUrl, bannerUrl] = await Promise.all([
      imagePathManager.processImagePath(data.logoUrl, 'images/logo.png'),
      imagePathManager.processImagePath(data.bannerUrl, 'images/banner.png')
    ]);

      // Convert image URLs to local paths if needed
    // Process product images
    const rawProducts = JSON.parse(data.products || '[]');
    const products = await imagePathManager.processProductImages(rawProducts);

    return `<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.brandName}</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <style>${generateStyles(data)}</style>
    </head>
    <body>
        <div id="home-page">
          <header class="header">
              <nav class="nav">
                  <img src="${logoUrl}" alt="${data.brandName}" class="logo">
                  <button class="cart-button">
                      <span class="material-icons">shopping_cart</span>
                  </button>
              </nav>
          </header>

          <main>
              <div class="banner">
                  <img src="${bannerUrl}" alt="Banner" class="banner-image">
              </div>

              <div class="products">
                  <div class="products-grid">
                      ${products.map(product => `
                          <div class="product-card" onclick="showProductDetails(${product.id})">
                              <span class="discount-tag">
                                  <strong>100%</strong> off
                              </span>
                              
                              <div class="product-image">
                                  <img src="${product.images[0]}" alt="${product.name}">
                              </div>

                              <p class="product-name">${product.name}</p>

                              <div class="stock-indicator ${
                                  product.stock > 12 ? '' : 
                                  product.stock > 8 ? 'medium' : 'low'
                              }">
                                  <p class="stock-text">Restam ${product.stock} unidades</p>
                              </div>

                              <div class="price-container">
                                  <p class="original-price">${product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                  <p class="current-price">${product.discountPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                              </div>
                          </div>
                      `).join('')}
                  </div>
              </div>
          </main>
        </div>

        ${products.map(product => generateProductDetails(product, data)).join('')}

        <script>
          const data = ${JSON.stringify({ products })};
          ${generateProductDetailsScripts()}
        </script>
    </body>
    </html>`;
  }
};