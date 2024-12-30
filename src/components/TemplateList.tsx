import React from 'react';
import { Template } from '@/types';

interface TemplateListProps {
  templates: Template[];
  onSelectTemplate: (template: Template) => void;
}

export function TemplateList({ templates, onSelectTemplate }: TemplateListProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-900">Templates Disponíveis</h2>
      <p className="mt-2 text-gray-500">
        Escolha um template para começar a personalizar sua página
      </p>
    </div>
  );
}