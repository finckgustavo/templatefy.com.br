import React from 'react';
import { TemplateField } from '@/types';
import { QuizEditor } from './QuizEditor';

interface TemplateEditorProps {
  fields: TemplateField[];
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export function TemplateEditor({ fields, values, onChange }: TemplateEditorProps) {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <QuizEditor
        fields={fields}
        values={values}
        onChange={onChange}
      />
    </div>
  );
}