import React from 'react';

interface TemplateStats {
  id: string;
  name: string;
  downloads: number;
  percentage: number;
}

interface TemplateStatsProps {
  templates: TemplateStats[];
}

export function TemplateStats({ templates }: TemplateStatsProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Templates Mais Baixados</h3>
      <div className="space-y-4">
        {templates.map((template) => (
          <div key={template.id}>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-gray-700">{template.name}</span>
              <span className="text-gray-500">{template.downloads} downloads</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 rounded-full"
                style={{ width: `${template.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}