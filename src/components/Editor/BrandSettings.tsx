import React from 'react';
import { TemplateField } from '@/types';
import { ColorPicker } from '../ui/ColorPicker';
import { TextInput } from '../ui/TextInput';
import { ImageInput } from '../ui/ImageInput';

interface BrandSettingsProps {
  fields: TemplateField[];
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
  templateId: string;
}

export function BrandSettings({ fields, values, onChange, templateId }: BrandSettingsProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {/* Brand Name */}
        <TextInput
          label="Nome da Marca"
          value={values.brandName || ''}
          onChange={(e) => onChange('brandName', e.target.value)}
          placeholder="Digite o nome da sua marca"
        />

        {/* Quiz Title */}
        <TextInput
          label="Título do Quiz"
          value={values.quizTitle || ''}
          onChange={(e) => onChange('quizTitle', e.target.value)}
          placeholder="Ex: Quiz Interativo"
        />

        {/* Logo URL */}
        <ImageInput
          label="Logo"
          value={values.logoUrl || ''}
          onChange={(value) => onChange('logoUrl', value)}
          templateId={templateId}
        />
      </div>

      {/* Colors */}
      <div className="border-t pt-6 mt-6">
        <h4 className="text-sm font-medium text-gray-900 mb-4">Cores do Template</h4>
        <div className="grid grid-cols-2 gap-4">
          <ColorPicker
            label="Cor Principal"
            value={values.primaryColor || '#FF9900'}
            onChange={(value) => onChange('primaryColor', value)}
          />
          <ColorPicker
            label="Cor do Fundo"
            value={values.backgroundColor || '#FFFFFF'}
            onChange={(value) => onChange('backgroundColor', value)}
          />
          <ColorPicker
            label="Cor do Menu"
            value={values.menuColor || '#FFFFFF'}
            onChange={(value) => onChange('menuColor', value)}
          />
          <ColorPicker
            label="Cor da Box"
            value={values.boxColor || '#F0F0F0'}
            onChange={(value) => onChange('boxColor', value)}
          />
        </div>
      </div>
    </div>
  );
}