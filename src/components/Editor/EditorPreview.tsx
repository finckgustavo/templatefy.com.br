import React, { useState, useEffect } from 'react';
import { Template } from '@/types';
import { TemplateRenderer } from '@/lib/utils/template-renderer';

const templateRenderer = new TemplateRenderer();

interface EditorPreviewProps {
  template: Template;
  values: Record<string, string>;
}

export function EditorPreview({ template, values }: EditorPreviewProps) {
  const [previewHtml, setPreviewHtml] = useState<string>('');

  useEffect(() => {
    const generatePreview = async () => {
      try {
        const html = await templateRenderer.renderPreview(template, values);
        setPreviewHtml(html);
      } catch (error) {
        console.error('Error generating preview:', error);
      }
    };

    generatePreview();
  }, [template, values]);

  return (
    <iframe
      srcDoc={previewHtml}
      className="w-full h-full border-0"
      title="Template Preview"
    />
  );
}