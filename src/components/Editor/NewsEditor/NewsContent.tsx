import React from 'react';
import { ImageInput } from '../../ui/ImageInput';
import { TextInput } from '../../ui/TextInput';

interface NewsContentProps {
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export function NewsContent({ values, onChange }: NewsContentProps) {
  return (
    <div className="space-y-6">
      {/* Article Title and Subtitle */}
      <div className="space-y-4">
        <TextInput
          label="Título da Notícia"
          value={values.title || ''}
          onChange={(e) => onChange('title', e.target.value)}
          placeholder="Digite o título principal da notícia"
        />

        <TextInput
          label="Subtítulo"
          value={values.subtitle || ''}
          onChange={(e) => onChange('subtitle', e.target.value)}
          placeholder="Digite o subtítulo ou linha fina da notícia"
          multiline
          rows={2}
        />
      </div>

      {/* Featured Image */}
      <div className="space-y-4">
        <ImageInput
          label="Imagem Principal"
          value={values.mainImage || ''}
          onChange={(value) => onChange('mainImage', value)}
          previewClassName="aspect-video"
        />

        <TextInput
          label="Legenda da Imagem"
          value={values.imageCaption || ''}
          onChange={(e) => onChange('imageCaption', e.target.value)}
          placeholder="Digite a legenda da imagem principal"
        />
      </div>

      {/* Article Content */}
      <div className="space-y-4">
        <TextInput
          label="Conteúdo da Notícia"
          value={values.content || ''}
          onChange={(e) => onChange('content', e.target.value)}
          placeholder="Digite o conteúdo da notícia em formato HTML"
          multiline
          rows={12}
        />

        <div className="bg-gray-50 border rounded-lg p-4">
          <h5 className="text-sm font-medium text-gray-700 mb-2">Dicas de Formatação HTML:</h5>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><code>&lt;h2&gt;</code> - Subtítulos</li>
            <li><code>&lt;p&gt;</code> - Parágrafos</li>
            <li><code>&lt;blockquote&gt;</code> - Citações</li>
            <li><code>&lt;strong&gt;</code> - Texto em negrito</li>
            <li><code>&lt;em&gt;</code> - Texto em itálico</li>
          </ul>
        </div>
      </div>
    </div>
  );
}