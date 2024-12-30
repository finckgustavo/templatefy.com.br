interface StylesConfig {
  backgroundColor: string;
  headerColor: string;
  buttonColor: string;
  buttonTextColor: string;
}

export const generateStyles = ({ backgroundColor, headerColor, buttonColor, buttonTextColor }: StylesConfig) => `
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-serif: 'Merriweather', Georgia, serif;
  --color-primary: #1a73e8;
  --color-text: #1a1a1a;
  --color-text-light: #666666;
  --color-border: #e5e5e5;
  --color-background: ${backgroundColor};
  --color-header: ${headerColor};
  --color-button: ${buttonColor};
  --color-button-text: ${buttonTextColor};
  --container-width: 800px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-sans);
  line-height: 1.6;
  color: var(--color-text);
  background: var(--color-background);
}

.container {
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.header {
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-header);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  display: flex;
  justify-content: center;
}

.logo img {
  height: 40px;
  width: auto;
}

/* Article */
.article {
  padding: 2rem 0;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: var(--color-text-light);
}

.category {
  color: var(--color-primary);
  font-weight: 500;
}

.article-title {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  font-weight: 700;
}

.article-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-light);
  margin-bottom: 2rem;
  line-height: 1.4;
}

.article-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 500;
}

.author-name {
  font-weight: 500;
}

.article-image {
  margin-bottom: 2rem;
}

.article-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.article-image figcaption {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-text-light);
  text-align: center;
}

.image-button-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.image-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-button);
  color: var(--color-button-text);
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: opacity 0.2s;
}

.image-button:hover {
  opacity: 0.9;
}

.article-content {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  line-height: 1.8;
}

.article-content h2 {
  font-family: var(--font-sans);
  font-size: 1.75rem;
  margin: 2rem 0 1rem;
}

.article-content p {
  margin-bottom: 1.5rem;
}

.article-content blockquote {
  border-left: 4px solid var(--color-primary);
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  color: var(--color-text-light);
}

/* Comments */
.article-comments {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.article-comments h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.login-message {
  text-align: center;
  color: var(--color-text-light);
  font-size: 0.875rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.comment {
  display: flex;
  gap: 1rem;
}

.comment-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  flex-shrink: 0;
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.comment-author {
  font-weight: 500;
}

.comment-header time {
  font-size: 0.875rem;
  color: var(--color-text-light);
}

/* Related News */
.related-news {
  background: #f8f9fa;
  padding: 4rem 0;
}

.related-news h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.related-card {
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;
}

.related-card:hover {
  transform: translateY(-4px);
}

.related-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.related-card h4 {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.related-card time {
  font-size: 0.875rem;
  color: var(--color-text-light);
}

/* Footer */
.footer {
  padding: 2rem 0;
  background: #f8f9fa;
  text-align: center;
  color: var(--color-text-light);
  font-size: 0.875rem;
}

/* Responsive */
@media (max-width: 768px) {
  .article-title {
    font-size: 2rem;
  }

  .article-subtitle {
    font-size: 1.125rem;
  }

  .article-content {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .article-meta {
    flex-wrap: wrap;
  }
}
`;