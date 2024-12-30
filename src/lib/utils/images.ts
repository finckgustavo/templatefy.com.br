import { v4 as uuidv4 } from 'uuid';

export interface LocalImage {
  id: string;
  originalName: string;
  previewUrl: string;
  blob: Blob;
}

export class ImageManager {
  private images: Map<string, LocalImage> = new Map();

  async addImage(file: File): Promise<LocalImage> {
    const id = uuidv4();
    const previewUrl = URL.createObjectURL(file); // Create preview URL
    
    const image: LocalImage = {
      id,
      originalName: file.name,
      previewUrl,
      blob: file
    };

    this.images.set(id, image);
    return image;
  }

  async addStorageImage(blob: Blob, filename: string): Promise<LocalImage> {
    const id = uuidv4();
    const previewUrl = URL.createObjectURL(blob);
    
    const image: LocalImage = {
      id,
      originalName: filename,
      previewUrl,
      blob
    };

    this.images.set(id, image);
    return image;
  }

  getImage(id: string): LocalImage | undefined {
    return this.images.get(id);
  }

  getAllImages(): LocalImage[] {
    return Array.from(this.images.values());
  }

  clear() {
    for (const image of this.images.values()) {
      URL.revokeObjectURL(image.previewUrl);
    }
    this.images.clear();
  }
}