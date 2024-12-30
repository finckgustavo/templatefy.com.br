import React from 'react';
import { Plus, Trash2, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface Question {
  number: number;
  text: string;
  image: string;
  options: string[];
}

interface QuestionListProps {
  questions: Question[];
  onEdit: (questionNumber: number) => void;
  onDelete: (questionNumber: number) => void;
  onAdd: () => void;
}

export function QuestionList({ questions, onEdit, onDelete, onAdd }: QuestionListProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium text-gray-900">Perguntas</h3>
          <span className="text-sm text-gray-500">
            ({questions.length}/5)
          </span>
        </div>
        <div className="flex items-center gap-2">
          {questions.length >= 5 && (
            <span className="text-sm text-amber-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              Limite máximo de 5 perguntas
            </span>
          )}
          <Button 
            onClick={onAdd}
            variant="outline"
            className="flex items-center gap-2"
            disabled={questions.length >= 5}
          >
            <Plus className="w-4 h-4" />
            <span>Adicionar Pergunta</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {questions.map((question) => (
          <Card key={question.number} className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <img 
                  src={question.image} 
                  alt={`Imagem da pergunta ${question.number}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate">
                  Pergunta {question.number}
                </h4>
                <p className="mt-1 text-sm text-gray-500 truncate">
                  {question.text || 'Sem texto definido'}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  {question.options.filter(Boolean).length} opções definidas
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => onEdit(question.number)}
                >
                  Editar
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onDelete(question.number)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}