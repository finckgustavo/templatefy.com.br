import React from 'react';
import { ImageInput } from '../../ui/ImageInput';
import { TextInput } from '../../ui/TextInput';
import { ColorPicker } from '../../ui/ColorPicker';

interface StoreSettingsProps {
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
  templateId: string;
}

export function StoreSettings({ values, onChange, templateId }: StoreSettingsProps) {
  return (
    <div className="space-y-6">
      <TextInput
        label="Nome da Loja"
        value={values.brandName || ''}
        onChange={(e) => onChange('brandName', e.target.value)}
        placeholder="Digite o nome da sua loja"
      />

      <ImageInput
        label="Logo da Loja"
        value={values.logoUrl || ''}
        onChange={(value) => onChange('logoUrl', value)}
        templateId={templateId}
      />

      <ImageInput
        label="Banner Principal"
        value={values.bannerUrl || ''}
        onChange={(value) => onChange('bannerUrl', value)}
        templateId={templateId}
        previewClassName="aspect-[21/9]"
      />

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-900">Cores do Template</h4>
        <div className="grid grid-cols-2 gap-4">
          <ColorPicker
            label="Cor do Menu Superior"
            value={values.headerColor || '#FFFFFF'}
            onChange={(value) => onChange('headerColor', value)}
          />
          <ColorPicker
            label="Cor do Background"
            value={values.backgroundColor || '#F5F5F5'}
            onChange={(value) => onChange('backgroundColor', value)}
          />
          <ColorPicker
            label="Cor do Preço Atual"
            value={values.currentPriceColor || '#1A73E8'}
            onChange={(value) => onChange('currentPriceColor', value)}
          />
          <ColorPicker
            label="Cor dos Detalhes"
            value={values.detailsColor || '#BCBCBC'}
            onChange={(value) => onChange('detailsColor', value)}
          />
          <ColorPicker
            label="Cor do Botão"
            value={values.buttonColor || '#1A73E8'}
            onChange={(value) => onChange('buttonColor', value)}
          />
          <ColorPicker
            label="Cor do Botão (Hover)"
            value={values.buttonHoverColor || '#1557B0'}
            onChange={(value) => onChange('buttonHoverColor', value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-900">Tag de Promoção</h4>
        <TextInput
          label="Texto da Promoção"
          value={values.promoText || ''}
          onChange={(e) => onChange('promoText', e.target.value)}
          placeholder="Ex: 🎄 Promoção de Natal"
        />
        <div className="grid grid-cols-2 gap-4">
          <ColorPicker
            label="Cor de Fundo"
            value={values.promoBgColor || '#ffebee'}
            onChange={(value) => onChange('promoBgColor', value)}
          />
          <ColorPicker
            label="Cor do Texto"
            value={values.promoTextColor || '#c62828'}
            onChange={(value) => onChange('promoTextColor', value)}
          />
        </div>
      </div>
    </div>
  );
}