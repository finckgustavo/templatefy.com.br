import { LocalImage } from './images';

export class ImageTransformer {
  private downloadMode: boolean = false;
  private imageMap: Map<string, LocalImage> = new Map();

  setDownloadMode(enabled: boolean) {
    this.downloadMode = enabled;
  }

  addImage(blobUrl: string, image: LocalImage) {
    this.imageMap.set(blobUrl, image);
  }

  transformHtml(html: string): string {
    if (!this.downloadMode) return html;

    // Replace blob URLs in img src attributes
    html = html.replace(
      /<img[^>]+src="(blob:[^"]+)"[^>]*>/g,
      (match, blobUrl) => {
        const image = this.imageMap.get(blobUrl);
        if (!image) return match;
        return match.replace(blobUrl, `images/${image.originalName}`);
      }
    );

    // Replace blob URLs in background-image styles
    html = html.replace(
      /background-image:\s*url\(['"]?(blob:[^'"\)]+)['"]?\)/g,
      (match, blobUrl) => {
        const image = this.imageMap.get(blobUrl);
        if (!image) return match;
        return `background-image: url('images/${image.originalName}')`;
      }
    );

    // Replace blob URLs in inline styles
    html = html.replace(
      /style="[^"]*background-image:\s*url\(['"]?(blob:[^'"\)]+)['"]?\)[^"]*"/g,
      (match, blobUrl) => {
        const image = this.imageMap.get(blobUrl);
        if (!image) return match;
        return match.replace(blobUrl, `images/${image.originalName}`);
      }
    );

    return html;
  }

  clear() {
    this.imageMap.clear();
  }
}

// Example usage:
/*
const transformer = new ImageTransformer();

// During preview
transformer.setDownloadMode(false);
const previewHtml = transformer.transformHtml(html); // Returns original HTML

// During download
transformer.setDownloadMode(true);
transformer.addImage('blob:abc123', { originalName: 'wheel.png', ... });
const downloadHtml = transformer.transformHtml(html); // Returns HTML with local paths
*/