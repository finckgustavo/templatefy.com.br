import React from 'react';
import { TemplateField } from '@/types';

interface QuestionEditorProps {
  questionNumber: number;
  fields: TemplateField[];
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export function QuestionEditor({ questionNumber, fields, values, onChange }: QuestionEditorProps) {
  const questionFields = fields.filter(field => 
    field.id.startsWith(`question${questionNumber}`)
  );

  return (
    <div className="space-y-4 border-b border-gray-200 pb-6 mb-6">
      <h4 className="text-lg font-medium text-gray-900">
        Pergunta {questionNumber}
      </h4>
      {questionFields.map((field) => (
        <div key={field.id}>
          <label
            htmlFor={field.id}
            className="block text-sm font-medium text-gray-700"
          >
            {field.label}
          </label>
          <input
            type={field.type}
            id={field.id}
            value={values[field.id] || ''}
            onChange={(e) => onChange(field.id, e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {field.description && (
            <p className="mt-2 text-sm text-gray-500">{field.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}