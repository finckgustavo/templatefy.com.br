import React, { useState, useEffect } from 'react';
import { Template } from '@/types';
import { TemplatePreview } from './TemplatePreview';

interface TemplateCardProps {
  template: Template;
  onSelect: (template: Template) => void;
}

export function TemplateCard({ template, onSelect }: TemplateCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewHtml, setPreviewHtml] = useState<string>('');

  useEffect(() => {
    const generatePreview = async () => {
      try {
        const html = await template.generate(template.defaultValues);
        setPreviewHtml(html);
      } catch (error) {
        console.error('Error generating preview:', error);
      }
    };

    generatePreview();
  }, [template]);

  return (
    <>
      <div 
        className="relative rounded-xl overflow-hidden bg-white border border-gray-200 transition-shadow hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Preview Container */}
        <div className="aspect-square w-full overflow-hidden">
          <div className="w-full h-full relative">
            <iframe
              srcDoc={previewHtml}
              className="w-[250%] h-[250%] scale-[0.4] origin-top-left border-0 pointer-events-none"
              title={`Preview do template ${template.name}`}
            />
          </div>
        </div>

        {/* Title Bar */}
        <div className="p-3 border-t bg-white">
          <h3 className="font-medium text-gray-900 text-sm">{template.name}</h3>
        </div>

        {/* Hover Overlay */}
        <div 
          className={`
            absolute inset-0 flex flex-col items-center justify-center gap-3
            bg-black/40 backdrop-blur-sm transition-opacity duration-200
            ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
        >
          <button 
            onClick={() => setShowPreview(true)}
            className="w-32 h-10 rounded-md border border-white text-white text-base font-medium
              transition-colors hover:bg-white/10"
          >
            Visualizar
          </button>
          <button 
            onClick={() => onSelect(template)}
            className="w-32 h-10 rounded-md bg-white text-gray-900 text-base font-medium
              transition-colors hover:bg-gray-100"
          >
            Selecionar
          </button>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <TemplatePreview
          template={template}
          onClose={() => setShowPreview(false)}
          onSelect={onSelect}
        />
      )}
    </>
  );
}