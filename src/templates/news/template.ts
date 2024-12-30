import { Template } from '@/types';
import { generateStyles } from './styles';
import { generateScripts } from './scripts';
import { imagePathManager } from '@/lib/utils/image-paths';

export const newsTemplate: Template = {
  id: 'news',
  name: 'Página de Notícias',
  description: 'Template profissional para publicação de notícias e artigos',
  fields: [
    {
      id: 'backgroundColor',
      label: 'Cor do Fundo',
      type: 'color',
      description: 'Cor de fundo da página'
    },
    {
      id: 'headerColor',
      label: 'Cor do Header',
      type: 'color',
      description: 'Cor de fundo do cabeçalho'
    },
    {
      id: 'buttonColor',
      label: 'Cor do Botão',
      type: 'color',
      description: 'Cor de fundo do botão'
    },
    {
      id: 'buttonTextColor',
      label: 'Cor do Texto do Botão',
      type: 'color',
      description: 'Cor do texto do botão'
    },
    {
      id: 'buttonText',
      label: 'Texto do Botão',
      type: 'text',
      description: 'Texto que aparece no botão abaixo da imagem'
    },
    {
      id: 'brandName',
      label: 'Nome do Site',
      type: 'text',
      description: 'Nome do site ou portal de notícias'
    },
    {
      id: 'logoUrl',
      label: 'Logo do Site',
      type: 'url',
      description: 'URL do logotipo do site'
    },
    {
      id: 'title',
      label: 'Título da Notícia',
      type: 'text',
      description: 'Título principal da notícia'
    },
    {
      id: 'subtitle',
      label: 'Subtítulo',
      type: 'textarea',
      description: 'Linha fina ou resumo da notícia'
    },
    {
      id: 'author',
      label: 'Autor',
      type: 'text',
      description: 'Nome do autor da notícia'
    },
    {
      id: 'category',
      label: 'Categoria',
      type: 'text',
      description: 'Categoria da notícia (ex: Tecnologia, Esportes, etc)'
    },
    {
      id: 'mainImage',
      label: 'Imagem Principal',
      type: 'url',
      description: 'Imagem destacada da notícia'
    },
    {
      id: 'imageCaption',
      label: 'Legenda da Imagem',
      type: 'text',
      description: 'Legenda da imagem principal'
    },
    {
      id: 'content',
      label: 'Conteúdo',
      type: 'textarea',
      description: 'Corpo da notícia em formato HTML'
    },
    {
      id: 'metaTitle',
      label: 'Meta Title',
      type: 'text',
      description: 'Título para SEO'
    },
    {
      id: 'metaDescription',
      label: 'Meta Description',
      type: 'textarea',
      description: 'Descrição para SEO'
    },
    {
      id: 'metaKeywords',
      label: 'Meta Keywords',
      type: 'text',
      description: 'Palavras-chave para SEO'
    },
    {
      id: 'publishDate',
      label: 'Data de Publicação',
      type: 'text',
      description: 'Data e hora da publicação'
    },
    {
      id: 'status',
      label: 'Status',
      type: 'text',
      description: 'Status da publicação (rascunho, publicado, etc)'
    }
  ],
  defaultValues: {
    brandName: 'Meu Portal de Notícias',
    logoUrl: 'https://placehold.co/200x50/FF9900/FFFFFF/png?text=NEWS',
    backgroundColor: '#ffffff',
    headerColor: '#ffffff',
    buttonColor: '#1a73e8',
    buttonTextColor: '#ffffff',
    buttonText: 'Leia mais sobre este assunto',
    title: 'Título da Notícia',
    subtitle: 'Subtítulo ou linha fina da notícia com mais detalhes sobre o conteúdo',
    author: 'Nome do Autor',
    category: 'Tecnologia',
    mainImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c',
    imageCaption: 'Legenda da imagem principal',
    content: `<h2>Subtítulo da Seção</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<blockquote>Esta é uma citação importante que destaca um ponto chave da notícia.</blockquote>
<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>`,
    metaTitle: '', // Will be auto-filled if empty
    metaDescription: '', // Will be auto-filled if empty
    metaKeywords: '', // Will be auto-filled if empty
    publishDate: new Date().toISOString(),
    status: 'published'
  },
  generate: async (data) => {
    // Process image paths
    const [logoUrl, mainImage] = await Promise.all([
      imagePathManager.processImagePath(data.logoUrl, 'images/logo.png'),
      imagePathManager.processImagePath(data.mainImage, 'images/main.jpg')
    ]);

    // Format date
    const publishDate = new Date(data.publishDate);
    const formattedDate = publishDate.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Auto-fill SEO fields if empty
    const metaTitle = data.metaTitle || data.title;
    const metaDescription = data.metaDescription || data.subtitle?.slice(0, 160) || `${data.title} - Leia mais sobre ${data.category.toLowerCase()} em ${data.brandName}`;
    const metaKeywords = data.metaKeywords || `${data.category.toLowerCase()}, notícia, ${data.title.toLowerCase().split(' ').slice(0, 3).join(', ')}`;

    const styles = generateStyles({
      backgroundColor: data.backgroundColor,
      headerColor: data.headerColor,
      buttonColor: data.buttonColor,
      buttonTextColor: data.buttonTextColor
    });

    return `<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${metaTitle}</title>
        <meta name="description" content="${metaDescription}">
        <meta name="keywords" content="${metaKeywords}">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
        <style>${styles}</style>
    </head>
    <body>
        <header class="header">
            <div class="container">
                <a href="#" class="logo">
                    <img src="${logoUrl}" alt="${data.brandName}" />
                </a>
            </div>
        </header>

        <main class="main">
            <article class="article">
                <div class="container">
                    <div class="article-meta">
                        <span class="category">${data.category}</span>
                        <time datetime="${data.publishDate}">${formattedDate}</time>
                    </div>

                    <h1 class="article-title">${data.title}</h1>
                    <p class="article-subtitle">${data.subtitle}</p>

                    <div class="article-author">
                        <div class="author-avatar">
                            ${data.author.charAt(0)}
                        </div>
                        <div class="author-info">
                            <span class="author-name">Por ${data.author}</span>
                        </div>
                    </div>

                    <figure class="article-image">
                        <img src="${mainImage}" alt="${data.imageCaption}">
                        <figcaption>${data.imageCaption}</figcaption>
                        <div class="image-button-container">
                            <a href="${data.redirectUrl || '#'}" class="image-button" style="background-color: ${data.buttonColor}; color: ${data.buttonTextColor}">
                                ${data.buttonText}
                            </a>
                        </div>
                    </figure>

                    <div class="article-content">
                        ${data.content}
                    </div>

                    <div class="article-comments">
                        <h3>Comentários</h3>
                        <p class="login-message">Faça login para comentar nesta notícia</p>
                        <div class="comments-list">
                            <div class="comment">
                                <div class="comment-avatar">M</div>
                                <div class="comment-content">
                                    <div class="comment-header">
                                        <span class="comment-author">Maria Silva</span>
                                        <time>há 2 horas</time>
                                    </div>
                                    <time>Como sempre, uma ótima notícia!</time>
                                </div>
                        </div>
                        <div class="comment">
                            <div class="comment-avatar">J</div>
                            <div class="comment-content">
                                <div class="comment-header">
                                    <span class="comment-author">João Santos</span>
                                    <time>há 2 horas</time>
                                </div>
                                <p>Concordo com os pontos apresentados. Seria interessante ver um aprofundamento sobre esse tema em artigos futuros.</p>
                            </div>
                        </div>
                        <div class="comment">
                            <div class="comment-avatar">P</div>
                            <div class="comment-content">
                                <div class="comment-header">
                                    <span class="comment-author">Pedro Oliveira</span>
                                    <time>há 1 hora</time>
                                </div>
                                <p>Ótima análise! As referências citadas ajudam muito a entender o contexto geral do assunto.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <aside class="related-news">
                <div class="container">
                    <h3>Notícias Relacionadas</h3>
                    <div class="related-grid">
                        <div class="related-card">
                            <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74" alt="Apple anuncia novo iPhone">
                            <h4>Apple anuncia novo iPhone com recursos revolucionários de IA</h4>
                            <time>12 de janeiro de 2024</time>
                        </div>
                        <div class="related-card">
                            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113" alt="SpaceX lança foguete">
                            <h4>SpaceX realiza lançamento histórico com nova tecnologia de propulsão</h4>
                            <time>11 de janeiro de 2024</time>
                        </div>
                        <div class="related-card">
                            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" alt="Descoberta científica">
                            <h4>Cientistas descobrem novo planeta potencialmente habitável</h4>
                            <time>10 de janeiro de 2024</time>
                        </div>
                    </div>
                </div>
            </aside>
        </main>

        <footer class="footer">
            <div class="container">
                <p>&copy; ${new Date().getFullYear()} ${data.brandName}. Todos os direitos reservados.</p>
            </div>
        </footer>

        <script>${generateScripts()}</script>
    </body>
    </html>`;
  }
};