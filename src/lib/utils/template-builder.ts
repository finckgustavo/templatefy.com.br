import JSZip from 'jszip';
import { ImageManager, LocalImage } from './images';
import { ImageTransformer } from './image-transformer';

export class TemplateBuilder {
  private imageManager: ImageManager;
  private imageTransformer: ImageTransformer;
  private html: string = '';
  private images: Map<string, { image: LocalImage; localPath: string; previewUrl: string }> = new Map();

  constructor() {
    this.imageManager = new ImageManager();
    this.imageTransformer = new ImageTransformer();
  }

  setHtml(html: string) {
    this.html = html;
  }

  async addImage(file: File, localPath: string): Promise<{ previewUrl: string; localPath: string }> {
    const image = await this.imageManager.addImage(file);
    const previewUrl = image.previewUrl;
    this.imageTransformer.addImage(previewUrl, image);
    this.images.set(localPath, { image, localPath, previewUrl });
    return { previewUrl, localPath };
  }

  async addStorageImage(blob: Blob, filename: string) {
    const image = await this.imageManager.addStorageImage(blob, filename);
    const localPath = `images/${filename}`;
    this.imageTransformer.addImage(image.previewUrl, image);
    this.images.set(localPath, { image, localPath, previewUrl: image.previewUrl });
  }

  async build(): Promise<Blob> {
    const zip = new JSZip();
    const template = zip.folder('template');
    if (!template) throw new Error('Failed to create template folder');

    const imagesFolder = template.folder('images');
    if (!imagesFolder) throw new Error('Failed to create images folder');

    // Enable download mode and transform HTML
    this.imageTransformer.setDownloadMode(true);
    let processedHtml = this.imageTransformer.transformHtml(this.html);

    // Process all images and update paths
    for (const [localPath, { image }] of this.images.entries()) {
      const filename = localPath.split('/').pop() || image.originalName;
      imagesFolder.file(filename, image.blob);
    }

    template.file('index.html', processedHtml);

    return await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 9 }
    });
  }

  clear() {
    this.imageManager.clear();
    this.images.clear();
    this.imageTransformer.clear();
    this.html = '';
  }
}