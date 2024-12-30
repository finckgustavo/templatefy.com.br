import React from 'react';
import { Template } from '../types';

interface TemplatePreviewProps {
  template: Template;
  data: Record<string, string>;
}

export function TemplatePreview({ template, data }: TemplatePreviewProps) {
  const previewHTML = template.generate(data);

  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <iframe
        srcDoc={previewHTML}
        className="w-full h-[600px] border-0"
        title="Template Preview"
      />
    </div>
  );
}