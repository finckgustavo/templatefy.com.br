import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Image, AlertCircle } from 'lucide-react';
import { TemplateField } from '@/types';

interface QuizEditorProps {
  fields: TemplateField[];
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export function QuizEditor({ fields, values, onChange }: QuizEditorProps) {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Brand Settings Card */}
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
          <h3 className="text-lg font-medium text-white">Configurações da Marca</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
          <div>
            <label className="block text-sm font-medium text-gray-700">Logo da Marca</label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10">
              {values.logoUrl ? (
                <div className="relative w-full aspect-video">
                  <img
                    src={values.logoUrl}
                    alt="Logo preview"
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <button 
                    onClick={() => onChange('logoUrl', '')}
                    className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Remover imagem</span>
                    <AlertCircle className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <Image className="mx-auto h-12 w-12 text-gray-300" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Fazer upload de uma imagem</span>
                      <input 
                        type="url"
                        className="sr-only"
                        onChange={(e) => onChange('logoUrl', e.target.value)}
                      />
                    </label>
                    <p className="pl-1">ou arraste e solte</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF até 10MB</p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome da Marca</label>
              <input
                type="text"
                value={values.brandName || ''}
                onChange={(e) => onChange('brandName', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Cor Principal</label>
              <div className="mt-1 flex items-center gap-3">
                <input
                  type="color"
                  value={values.primaryColor || '#4F46E5'}
                  onChange={(e) => onChange('primaryColor', e.target.value)}
                  className="h-10 w-20 rounded border border-gray-300"
                />
                <span className="text-sm text-gray-600">{values.primaryColor || '#4F46E5'}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Questions Section */}
      <div className="space-y-6">
        {Array.from({ length: 5 }, (_, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="bg-gradient-to-r from-gray-700 to-gray-900 px-6 py-4 flex justify-between items-center">
              <h4 className="text-lg font-medium text-white">Pergunta {i + 1}</h4>
              <span className="text-sm text-gray-300">Etapa {i + 1} de 5</span>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Texto da Pergunta</label>
                <textarea
                  value={values[`question${i + 1}`] || ''}
                  onChange={(e) => onChange(`question${i + 1}`, e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  rows={2}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Imagem da Pergunta</label>
                <div className="mt-2">
                  {values[`question${i + 1}Image`] ? (
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src={values[`question${i + 1}Image`]}
                        alt={`Imagem da pergunta ${i + 1}`}
                        className="w-full aspect-video object-cover"
                      />
                      <button
                        onClick={() => onChange(`question${i + 1}Image`, '')}
                        className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-lg hover:bg-gray-50"
                      >
                        <AlertCircle className="h-5 w-5 text-gray-500" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-center rounded-lg border-2 border-dashed border-gray-300 px-6 py-8">
                      <div className="text-center">
                        <Image className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="mt-4">
                          <input
                            type="url"
                            placeholder="Cole a URL da imagem aqui"
                            onChange={(e) => onChange(`question${i + 1}Image`, e.target.value)}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 4 }, (_, j) => (
                  <div key={j}>
                    <label className="block text-sm font-medium text-gray-700">
                      Opção {j + 1}
                    </label>
                    <input
                      type="text"
                      value={values[`question${i + 1}option${j + 1}`] || ''}
                      onChange={(e) => onChange(`question${i + 1}option${j + 1}`, e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Preview Button */}
      <div className="flex justify-end">
        <Button variant="primary" size="lg" className="px-8">
          Visualizar Quiz
        </Button>
      </div>
    </div>
  );
}