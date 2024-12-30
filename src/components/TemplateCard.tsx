import React from 'react';
import { Card, CardTitle, CardDescription } from './ui/Card';
import { Button } from './ui/Button';
import { Template } from '@/types';

interface TemplateCardProps {
  template: Template;
  onSelect: (template: Template) => void;
}

export function TemplateCard({ template, onSelect }: TemplateCardProps) {
  return (
    <Card className="group hover:shadow-md transition-shadow">
      <div className="aspect-video w-full bg-gray-100 rounded-md mb-4 overflow-hidden">
        <img
          src={template.defaultValues.logoUrl || 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931'}
          alt={template.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <CardTitle>{template.name}</CardTitle>
      <CardDescription>{template.description}</CardDescription>
      <div className="mt-4">
        <Button 
          onClick={() => onSelect(template)} 
          className="w-full"
          variant="primary"
        >
          Usar Template
        </Button>
      </div>
    </Card>
  );
}