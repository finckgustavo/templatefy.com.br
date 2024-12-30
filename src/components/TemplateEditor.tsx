import React from 'react';
import { TemplateField } from '@/types';

interface TemplateEditorProps {
  fields: TemplateField[];
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export function TemplateEditor({ fields, values, onChange }: TemplateEditorProps) {
  return (
    <div className="space-y-6">
      {fields.map((field) => (
        <div key={field.id}>
          <label
            htmlFor={field.id}
            className="block text-sm font-medium text-gray-700"
          >
            {field.label}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.id}
              value={values[field.id] || ''}
              onChange={(e) => onChange(field.id, e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              rows={4}
            />
          ) : (
            <input
              type={field.type}
              id={field.id}
              value={values[field.id] || ''}
              onChange={(e) => onChange(field.id, e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          )}
          {field.description && (
            <p className="mt-2 text-sm text-gray-500">{field.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}