import { TemplateBuilder } from './template-builder';

export class ImagePathManager {
  private templateBuilder: TemplateBuilder;
  private isDownloading: boolean = false;

  constructor() {
    this.templateBuilder = new TemplateBuilder();
  }

  setDownloadMode(downloading: boolean) {
    this.isDownloading = downloading;
  }

  async processImagePath(path: string | undefined, defaultPath: string): Promise<string> {
    if (!path) return defaultPath;
    
    // During preview, use original URLs
    if (!this.isDownloading && (path.startsWith('blob:') || path.startsWith('http'))) {
      return path;
    }

    // During download, convert to local paths
    if (this.isDownloading) {
      const filename = path.split('/').pop() || '';
      return `images/${filename}`;
    }

    // Default to the provided default path
    return defaultPath;
  }

  async processProductImages(products: any[]): Promise<any[]> {
    return products.map(product => ({
      ...product,
      images: product.images.map((img: string) => {
        if (!this.isDownloading && (img.startsWith('blob:') || img.startsWith('http'))) {
          return img;
        }
        const filename = img.split('/').pop() || '';
        return this.isDownloading ? `images/${filename}` : img;
      })
    }));
  }
}

export const imagePathManager = new ImagePathManager();