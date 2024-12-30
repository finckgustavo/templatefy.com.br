import React from 'react';
import { ImageInput } from '../../ui/ImageInput';
import { TextInput } from '../../ui/TextInput';
import { Button } from '../../ui/Button';
import { Switch } from '../../ui/Switch';
import { X } from 'lucide-react';
import { Package } from 'lucide-react';

interface ProductEditorProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    discountPrice: number;
    stock: number;
    images: string[];
    specs: string;
    comments: Array<{
      author: string;
      rating: number;
      text: string;
    }>;
    buyUrl: string;
  };
  onSave: (product: any) => void;
  onCancel: () => void;
}

export function ProductEditor({ product, onSave, onCancel }: ProductEditorProps) {
  const [formData, setFormData] = React.useState({
    ...product,
    specs: '',
    comments: product.comments || [],
    showDescription: product.showDescription !== false,
    showSpecs: product.showSpecs !== false,
    showComments: product.showComments !== false
  });

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <header className="sticky top-0 z-10 bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Package className="h-5 w-5 text-indigo-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              {product.id ? 'Editar Produto' : 'Novo Produto'}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={onCancel}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={() => onSave(formData)}>
              Salvar
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        <TextInput
          label="Nome do Produto"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Ex: Smartphone Galaxy S23 Ultra"
        />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-900">Descrição do Produto</h4>
            <Switch
              checked={formData.showDescription}
              onCheckedChange={(checked) => handleChange('showDescription', checked)}
            />
          </div>
          {formData.showDescription && (
            <TextInput
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Descreva as principais características e diferenciais do produto..."
              multiline
              rows={3}
            />
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="Preço Original"
            type="number"
            value={formData.price}
            onChange={(e) => handleChange('price', Number(e.target.value))}
          />
          <TextInput
            label="Preço com Desconto"
            type="number"
            value={formData.discountPrice}
            onChange={(e) => handleChange('discountPrice', Number(e.target.value))}
          />
        </div>

        <TextInput
          label="Estoque"
          type="number"
          value={formData.stock}
          onChange={(e) => handleChange('stock', Number(e.target.value))}
        />

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Imagens do Produto
            <span className="text-xs text-gray-500 ml-2">(Primeira imagem é obrigatória)</span>
          </label>
          {formData.images.map((url, index) => (
            <div key={index} className="flex gap-4">
              <ImageInput
                value={url}
                onChange={(value) => {
                  const newImages = [...formData.images];
                  newImages[index] = value;
                  handleChange('images', newImages);
                }}
                className="flex-1"
              />
              {index > 0 && (
                <Button
                  variant="outline"
                  onClick={() => {
                    const newImages = formData.images.filter((_, i) => i !== index);
                    handleChange('images', newImages);
                  }}
                  className="text-red-600 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
          <Button
            variant="outline"
            onClick={() => handleChange('images', [...formData.images, ''])}
            disabled={formData.images.length >= 5}
          >
            {formData.images.length >= 5 ? 'Limite máximo de 5 imagens' : 'Adicionar Imagem'}
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-900">Especificações do Produto</h4>
            <Switch
              checked={formData.showSpecs}
              onCheckedChange={(checked) => handleChange('showSpecs', checked)}
            />
          </div>
          {formData.showSpecs && (
            <TextInput
              value={formData.specs || ''}
              onChange={(e) => handleChange('specs', e.target.value)}
              placeholder="Digite as especificações do produto..."
              multiline
              rows={4}
            />
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-900">Avaliações</h4>
            <div className="flex items-center gap-4">
              <Switch
                checked={formData.showComments}
                onCheckedChange={(checked) => handleChange('showComments', checked)}
              />
              {formData.showComments && (
                <Button
                  variant="outline"
                  onClick={() => {
                    const newComments = [...(formData.comments || []), {
                      author: '',
                      rating: 5,
                      text: ''
                    }];
                    handleChange('comments', newComments);
                  }}
                >
                  Adicionar Avaliação
                </Button>
              )}
            </div>
          </div>

          {formData.showComments && formData.comments?.map((comment, index) => (
            <div key={index} className="space-y-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between">
                <TextInput
                  label="Nome do Autor"
                  value={comment.author}
                  onChange={(e) => {
                    const newComments = [...formData.comments];
                    newComments[index] = {
                      ...comment,
                      author: e.target.value
                    };
                    handleChange('comments', newComments);
                  }}
                  className="flex-1"
                />
                <div className="ml-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Avaliação
                  </label>
                  <select
                    value={comment.rating}
                    onChange={(e) => {
                      const newComments = [...formData.comments];
                      newComments[index] = {
                        ...comment,
                        rating: Number(e.target.value)
                      };
                      handleChange('comments', newComments);
                    }}
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    {[5, 4, 3, 2, 1].map(rating => (
                      <option key={rating} value={rating}>
                        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
                      </option>
                    ))}
                  </select>
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    const newComments = formData.comments.filter((_, i) => i !== index);
                    handleChange('comments', newComments);
                  }}
                  className="ml-4 text-red-600 hover:text-red-700 self-end"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <TextInput
                label="Comentário"
                value={comment.text}
                onChange={(e) => {
                  const newComments = [...formData.comments];
                  newComments[index] = {
                    ...comment,
                    text: e.target.value
                  };
                  handleChange('comments', newComments);
                }}
                multiline
                rows={2}
              />
            </div>
          ))}
        </div>

        <TextInput
          label="URL de Compra"
          value={formData.buyUrl}
          onChange={(e) => handleChange('buyUrl', e.target.value)}
          placeholder="https://..."
        />
      </div>
    </div>
  );
}