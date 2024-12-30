export interface TemplateField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'color' | 'url';
  description?: string;
  localFilename: string;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  fields: TemplateField[];
  defaultValues: Record<string, string>;
  generate: (data: Record<string, string>) => Promise<string>;
}