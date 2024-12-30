import { Template } from '@/types';
import { TemplateBuilder } from './template-builder';
import { imagePathManager } from './image-paths';

export class TemplateRenderer {
  private templateBuilder: TemplateBuilder;
  
  constructor() {
    this.templateBuilder = new TemplateBuilder();
  }

  async renderPreview(template: Template, values: Record<string, string>): Promise<string> {
    // Ensure preview mode
    imagePathManager.setDownloadMode(false);
    return template.generate(values);
  }

  async renderDownload(template: Template, values: Record<string, string>): Promise<string> {
    // Enable download mode for local paths
    imagePathManager.setDownloadMode(true);
    
    try {
      const html = await template.generate(values);
      return html;
    } finally {
      // Reset to preview mode
      imagePathManager.setDownloadMode(false);
    }
  }
}