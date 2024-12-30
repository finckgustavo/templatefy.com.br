import React from 'react';
import { Template } from '@/types';
import { TemplateCard } from './TemplateCard';
import { Banner } from './Banner';

interface TemplateGridProps {
  templates: Template[];
  onSelectTemplate: (template: Template) => void;
}

export function TemplateGrid({ templates, onSelectTemplate }: TemplateGridProps) {
  return (
    <div className="w-full max-w-[1600px] mx-auto space-y-8">
      <Banner />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            onSelect={onSelectTemplate}
          />
        ))}
      </div>
    </div>
  );
}