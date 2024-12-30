import React from 'react';
import { ImageInput } from '../../ui/ImageInput';
import { ColorPicker } from '../../ui/ColorPicker';
import { TextInput } from '../../ui/TextInput';
import { Image, Palette } from 'lucide-react';

interface WheelSettingsProps {
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
  templateId: string;
}

export function WheelSettings({ values, onChange, templateId }: WheelSettingsProps) {
  const useBackgroundColor = values.useBackgroundColor === 'true';

  return (
    <div className="space-y-3">
      {/* Brand Name */}
      <TextInput
        label="Nome da Marca"
        value={values.brandName || ''}
        onChange={(e) => onChange('brandName', e.target.value)}
        placeholder="Digite o nome da sua marca"
      />

      {/* Background Configuration */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fundo da Página
          </label>
          <div className="flex gap-1 p-1 bg-gray-100 rounded-md w-fit">
            <button
              onClick={() => onChange('useBackgroundColor', 'false')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded transition-colors ${
                !useBackgroundColor 
                  ? 'bg-white shadow-sm' 
                  : 'hover:bg-white/50'
              }`}
              title="Usar imagem de fundo"
            >
              <Image className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">Imagem</span>
            </button>
            <button
              onClick={() => onChange('useBackgroundColor', 'true')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded transition-colors ${
                useBackgroundColor 
                  ? 'bg-white shadow-sm' 
                  : 'hover:bg-white/50'
              }`}
              title="Usar cor sólida"
            >
              <Palette className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">Cor sólida</span>
            </button>
          </div>
        </div>

        {useBackgroundColor ? (
          <ColorPicker
            label="Cor do Fundo"
            value={values.backgroundColor || '#000000'}
            onChange={(value) => onChange('backgroundColor', value)}
          />
        ) : (
          <ImageInput
            label="Imagem de Fundo"
            value={values.backgroundImage || ''}
            onChange={(value) => onChange('backgroundImage', value)}
            templateId={templateId}
            previewClassName="aspect-[9/16] h-32"
          />
        )}
      </div>

      {/* Wheel Images */}
      <div className="space-y-3">
        <ImageInput
          label="Imagem da Roleta"
          value={values.wheelImage || ''}
          onChange={(value) => onChange('wheelImage', value)}
          templateId={templateId}
          previewClassName="aspect-square h-16"
        />

        <ImageInput
          label="Imagem Central"
          value={values.centerImage || ''}
          onChange={(value) => onChange('centerImage', value)}
          templateId={templateId}
          previewClassName="aspect-square h-16"
        />
      </div>

      {/* Button Configuration */}
      <div className="space-y-3 border-t pt-3">
        <h4 className="text-sm font-medium text-gray-900">Configuração do Botão</h4>
        
        <TextInput
          label="Texto do Botão"
          value={values.buttonText || ''}
          onChange={(e) => onChange('buttonText', e.target.value)}
          placeholder="Ex: GIRAR ROLETA"
        />

        <div className="grid grid-cols-2 gap-4">
          <ColorPicker
            label="Cor do Botão"
            value={values.buttonColor || '#FFFFFF'}
            onChange={(value) => onChange('buttonColor', value)}
          />
          <ColorPicker
            label="Cor do Texto"
            value={values.buttonTextColor || '#000000'}
            onChange={(value) => onChange('buttonTextColor', value)}
          />
        </div>
      </div>
    </div>
  );
}