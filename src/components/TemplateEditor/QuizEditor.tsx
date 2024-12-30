import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { TemplateField } from '@/types';

interface QuizEditorProps {
  fields: TemplateField[];
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export function QuizEditor({ fields, values, onChange }: QuizEditorProps) {
  const brandFields = fields.filter(field => 
    ['brandName', 'logoUrl', 'primaryColor', 'quizTitle'].includes(field.id)
  );

  return (
    <div className="space-y-8">
      {/* Brand Settings Section */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Configurações da Marca
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {brandFields.map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {field.label}
              </label>
              {field.type === 'color' ? (
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    id={field.id}
                    value={values[field.id] || '#FFC105'}
                    onChange={(e) => onChange(field.id, e.target.value)}
                    className="h-10 w-20 rounded border border-gray-300"
                  />
                  <span className="text-sm text-gray-600">
                    {values[field.id] || '#FFC105'}
                  </span>
                </div>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  value={values[field.id] || ''}
                  onChange={(e) => onChange(field.id, e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder={field.description}
                />
              )}
              {field.description && (
                <p className="mt-1 text-sm text-gray-500">{field.description}</p>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Questions Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">
          Perguntas do Quiz
        </h3>
        
        {Array.from({ length: 5 }, (_, i) => {
          const questionNum = i + 1;
          const questionFields = fields.filter(field => 
            field.id.startsWith(`question${questionNum}`)
          );

          return (
            <Card key={questionNum} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-medium text-gray-900">
                  Pergunta {questionNum}
                </h4>
                <span className="text-sm text-gray-500">
                  {questionNum}/5
                </span>
              </div>

              <div className="space-y-6">
                {/* Question Text */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Texto da Pergunta
                  </label>
                  <textarea
                    value={values[`question${questionNum}`] || ''}
                    onChange={(e) => onChange(`question${questionNum}`, e.target.value)}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    rows={2}
                    placeholder="Digite a pergunta..."
                  />
                </div>

                {/* Question Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Imagem da Pergunta
                  </label>
                  <div className="space-y-3">
                    <input
                      type="url"
                      value={values[`question${questionNum}Image`] || ''}
                      onChange={(e) => onChange(`question${questionNum}Image`, e.target.value)}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="URL da imagem..."
                    />
                    {values[`question${questionNum}Image`] && (
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={values[`question${questionNum}Image`]}
                          alt={`Preview da pergunta ${questionNum}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Redirect URL */}
      <Card className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Configuração Final
        </h3>
        <div>
          <label
            htmlFor="redirectUrl"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            URL de Redirecionamento
          </label>
          <input
            type="url"
            id="redirectUrl"
            value={values.redirectUrl || ''}
            onChange={(e) => onChange('redirectUrl', e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="URL para redirecionar após o quiz..."
          />
          <p className="mt-1 text-sm text-gray-500">
            Para onde o usuário será redirecionado após completar o quiz
          </p>
        </div>
      </Card>
    </div>
  );
}