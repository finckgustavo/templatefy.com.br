import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Template } from '@/types';
import { TemplateRenderer } from '@/lib/utils/template-renderer';

const templateRenderer = new TemplateRenderer();

interface TemplatePreviewProps {
  template: Template;
  onClose: () => void;
  onSelect: (template: Template) => void;
}

export function TemplatePreview({ template, onClose, onSelect }: TemplatePreviewProps) {
  const [previewHtml, setPreviewHtml] = useState<string>('');

  useEffect(() => {
    const generatePreview = async () => {
      try {
        const html = await templateRenderer.renderPreview(template, template.defaultValues);
        setPreviewHtml(html);
      } catch (error) {
        console.error('Error generating preview:', error);
      }
    };

    generatePreview();
  }, [template]);
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-[85vh]">
        {/* Close button */}
        <div className="absolute top-4 right-4 z-10">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-black/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Preview Area */}
        <div className="flex-1 overflow-hidden">
          <iframe
            srcDoc={previewHtml}
            className="w-full h-full border-0"
            title={`Preview do template ${template.name}`}
          />
        </div>

        {/* Actions Bar */}
        <div className="p-4 border-t border-gray-200 bg-white flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="min-w-[120px] h-11 rounded-md border border-gray-900 bg-transparent text-gray-900 text-sm font-medium
              transition-colors hover:bg-gray-50"
          >
            Voltar
          </button>
          <button
            onClick={() => {
              onClose();
              onSelect(template);
            }}
            className="min-w-[120px] h-11 rounded-md bg-gray-900 text-white text-sm font-medium
              transition-colors hover:bg-gray-800"
          >
            Selecionar
          </button>
        </div>
      </div>
    </div>
  );
}