import React, { useState } from 'react';
import { TextInput } from '../ui/TextInput';
import { ImageInput } from '../ui/ImageInput';
import { Button } from '../ui/Button';
import { X, Image } from 'lucide-react';

interface QuestionEditorProps {
  questionNumber: number;
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

export function QuestionEditor({ 
  questionNumber, 
  values, 
  onChange,
  onSave,
  onCancel 
}: QuestionEditorProps) {
  const prefix = `question${questionNumber}`;

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <header className="sticky top-0 z-10 bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Image className="h-5 w-5 text-indigo-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              Pergunta {questionNumber}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={onCancel}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={onSave}>
              Salvar Pergunta
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Question Text */}
        <TextInput
          label="Texto da Pergunta"
          value={values[prefix] || ''}
          onChange={(e) => onChange(prefix, e.target.value)}
          placeholder="Digite sua pergunta aqui..."
          multiline
          rows={2}
        />

        {/* Question Image */}
        <ImageInput
          label="Imagem da Pergunta"
          value={values[`${prefix}Image`] || ''}
          onChange={(value) => onChange(`${prefix}Image`, value)}
        />

        {/* Options */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Opções de Resposta
          </label>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }, (_, i) => (
              <TextInput
                key={i}
                value={values[`${prefix}option${i + 1}`] || ''}
                onChange={(e) => onChange(`${prefix}option${i + 1}`, e.target.value)}
                placeholder={`Opção ${i + 1}`}
                prefix={
                  <span className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                      {i + 1}
                    </span>
                  </span>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}