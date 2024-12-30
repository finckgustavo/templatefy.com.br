import React from 'react';
import { ImageInput } from '../../ui/ImageInput';
import { TextInput } from '../../ui/TextInput';
import { ColorPicker } from '../../ui/ColorPicker';

interface NewsSettingsProps {
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
  templateId: string;
}

export function NewsSettings({ values, onChange, templateId }: NewsSettingsProps) {
  return (
    <div className="space-y-6">
      {/* Colors */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-900">Cores do Template</h4>
        <div className="grid grid-cols-2 gap-4">
          <ColorPicker
            label="Cor do Fundo"
            value={values.backgroundColor || '#FFFFFF'}
            onChange={(value) => onChange('backgroundColor', value)}
          />
          <ColorPicker
            label="Cor do Header"
            value={values.headerColor || '#FFFFFF'}
            onChange={(value) => onChange('headerColor', value)}
          />
        </div>
      </div>

      {/* Button Configuration */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-900">Configuração do Botão</h4>
        <TextInput
          label="Texto do Botão"
          value={values.buttonText || ''}
          onChange={(e) => onChange('buttonText', e.target.value)}
          placeholder="Ex: Leia mais sobre este assunto"
        />
        <div className="grid grid-cols-2 gap-4">
          <ColorPicker
            label="Cor do Botão"
            value={values.buttonColor || '#1a73e8'}
            onChange={(value) => onChange('buttonColor', value)}
          />
          <ColorPicker
            label="Cor do Texto do Botão"
            value={values.buttonTextColor || '#ffffff'}
            onChange={(value) => onChange('buttonTextColor', value)}
          />
        </div>
        <ImageInput
          label="URL de Redirecionamento"
          value={values.redirectUrl || ''}
          onChange={(value) => onChange('redirectUrl', value)}
          urlPlaceholder="https://exemplo.com/noticia"
          pathPlaceholder="pages/article.html"
          hidePreview
          isRedirectUrl
        />
      </div>

      {/* Site Info */}
      <div className="space-y-4">
        <TextInput
          label="Nome do Site"
          value={values.brandName || ''}
          onChange={(e) => onChange('brandName', e.target.value)}
          placeholder="Digite o nome do seu site"
        />

        <ImageInput
          label="Logo do Site"
          value={values.logoUrl || ''}
          onChange={(value) => onChange('logoUrl', value)}
          templateId={templateId}
        />
      </div>

      {/* Article Meta */}
      <div className="space-y-4">
        <TextInput
          label="Categoria"
          value={values.category || ''}
          onChange={(e) => onChange('category', e.target.value)}
          placeholder="Ex: Tecnologia"
        />

        <TextInput
          label="Autor"
          value={values.author || ''}
          onChange={(e) => onChange('author', e.target.value)}
          placeholder="Nome do autor"
        />

        <TextInput
          label="Data de Publicação"
          type="datetime-local"
          value={values.publishDate?.slice(0, 16) || ''}
          onChange={(e) => onChange('publishDate', new Date(e.target.value).toISOString())}
        />
      </div>

      {/* SEO Settings */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-900">Configurações SEO</h4>
        
        <TextInput
          label="Meta Title"
          value={values.metaTitle || ''}
          onChange={(e) => onChange('metaTitle', e.target.value)}
          placeholder="Deixe em branco para usar o título da notícia"
        />

        <TextInput
          label="Meta Description"
          value={values.metaDescription || ''}
          onChange={(e) => onChange('metaDescription', e.target.value)}
          placeholder="Deixe em branco para usar o subtítulo da notícia"
          multiline
          rows={3}
        />

        <TextInput
          label="Meta Keywords"
          value={values.metaKeywords || ''}
          onChange={(e) => onChange('metaKeywords', e.target.value)}
          placeholder="Deixe em branco para gerar automaticamente"
        />
      </div>
    </div>
  );
}