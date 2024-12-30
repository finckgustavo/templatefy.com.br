import { useState, useEffect } from 'react';
import { Template } from '@/types';

export function useTemplatePreview(template: Template, values: Record<string, string>) {
  const [previewHtml, setPreviewHtml] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const generatePreview = async () => {
      setIsGenerating(true);
      try {
        const html = template.generate(values);
        setPreviewHtml(html);
      } catch (error) {
        console.error('Error generating preview:', error);
      } finally {
        setIsGenerating(false);
      }
    };

    const timeoutId = setTimeout(generatePreview, 500);
    return () => clearTimeout(timeoutId);
  }, [template, values]);

  return { previewHtml, isGenerating };
}