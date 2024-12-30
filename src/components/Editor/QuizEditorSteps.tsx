import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ChevronLeft, ChevronRight, Settings, Image, Download, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Modal } from '../ui/Modal';
import { ConfirmationModal } from '../ui/ConfirmationModal';
import { BrandSettings } from './BrandSettings';
import { QuestionEditor } from './QuestionEditor';
import { QuestionList } from './QuestionList';
import { TemplateField, Template } from '@/types';
import { downloadTemplate } from '@/lib/utils/download';
import { ImageInput } from '../ui/ImageInput';

interface QuizEditorStepsProps {
  fields: TemplateField[];
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
  currentStep: number;
  onNextStep: () => void;
  onPrevStep: () => void;
  template: Template;
}

const steps = [
  { title: 'Configurações da Marca', icon: Settings },
  { title: 'Perguntas', icon: Image },
  { title: 'Finalização', icon: Download }
];

export function QuizEditorSteps({ 
  fields, 
  values, 
  onChange, 
  currentStep, 
  onNextStep, 
  onPrevStep,
  template 
}: QuizEditorStepsProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<number | null>(null);
  const showNavigation = !editingQuestion;
  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  const handleDownload = async () => {
    if (hasDownloaded) {
      setShowConfirmModal(true);
      return;
    }
    
    setIsDownloading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuário não autenticado');
      
      await downloadTemplate(template, values, user.id, () => setShowLimitModal(true));
      setHasDownloaded(true);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Erro ao baixar template');
    } finally {
      setIsDownloading(false);
    }
  };

  const getQuestions = () => {
    return Array.from({ length: 5 }, (_, i) => ({
      number: i + 1,
      text: values[`question${i + 1}`] || '',
      image: values[`question${i + 1}Image`] || '',
      options: Array.from({ length: 4 }, (_, j) => 
        values[`question${i + 1}option${j + 1}`] || ''
      )
    })).filter(q => q.text || q.image || q.options.some(Boolean));
  };

  const handleAddQuestion = () => {
    const currentQuestions = getQuestions();
    const nextNumber = currentQuestions.length + 1;
    
    if (nextNumber > 5) {
      // Optional: Show an error message that max questions reached
      return;
    }
    
    setEditingQuestion(nextNumber);
  };

  const handleEditQuestion = (number: number) => {
    setEditingQuestion(number);
  };

  const handleDeleteQuestion = (number: number) => {
    const currentQuestions = getQuestions();
    const remainingQuestions = currentQuestions.filter(q => q.number !== number);

    // Clear all question fields first
    for (let i = 1; i <= 5; i++) {
      onChange(`question${i}`, '');
      onChange(`question${i}Image`, '');
      for (let j = 1; j <= 4; j++) {
        onChange(`question${i}option${j}`, '');
      }
    }

    // Rewrite questions with new indexing
    remainingQuestions.forEach((q, index) => {
      const newNumber = index + 1;
      onChange(`question${newNumber}`, q.text);
      onChange(`question${newNumber}Image`, q.image);
      q.options.forEach((option, j) => {
        onChange(`question${newNumber}option${j + 1}`, option);
      });
    });
  };

  const renderStepContent = () => {
    if (editingQuestion !== null) {
      return (
        <QuestionEditor
          questionNumber={editingQuestion}
          values={values}
          onChange={onChange}
          onSave={() => setEditingQuestion(null)}
          onCancel={() => setEditingQuestion(null)}
        />
      );
    }

    if (currentStep === 0) {
      return <BrandSettings fields={fields} values={values} onChange={onChange} />;
    }
    
    if (currentStep === 1) {
      return (
        <QuestionList
          questions={getQuestions()}
          onEdit={handleEditQuestion}
          onDelete={handleDeleteQuestion}
          onAdd={handleAddQuestion}
        />
      );
    }

    if (currentStep === 2) {
      return (
        <div className="space-y-6">
          <ImageInput
            label="URL de Redirecionamento"
            value={values.redirectUrl || ''}
            onChange={(value) => onChange('redirectUrl', value)}
            urlPlaceholder="https://exemplo.com/resultado"
            pathPlaceholder="pages/result.html"
            hidePreview
            isRedirectUrl
          />
        </div>
      );
    }
    return null;
  };

  return (
    <>
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-auto p-6">
        {!editingQuestion && <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg">
            {React.createElement(currentStepData.icon, { className: 'h-5 w-5 text-indigo-600' })}
          </div>
          <h3 className="text-lg font-medium text-gray-900">
            {currentStepData.title}
          </h3>
        </div>}
        
        {renderStepContent()}
      </div>

      {showNavigation && (
        <div className="flex justify-between p-4 bg-gray-50 border-t">
          <Button
            onClick={onPrevStep}
            variant="outline"
            disabled={currentStep === 0}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Anterior</span>
          </Button>

          {isLastStep ? (
            <div className="flex gap-3">
              <Button
                onClick={handleDownload}
                variant="primary"
                disabled={isDownloading}
                className="flex items-center space-x-2 min-w-[140px]"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Baixando...</span>
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    <span>Finalizar</span>
                  </>
                )}
              </Button>
            </div>
          ) : (
            <Button
              onClick={onNextStep}
              variant="primary"
              className="flex items-center space-x-2"
            >
              <span>Próximo</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      )}
    </div>
    <Modal
      isOpen={showLimitModal}
      onClose={() => setShowLimitModal(false)}
      title="Limite de Downloads Atingido"
      description="Você atingiu o seu limite atual de downloads. Entre em contato conosco para aumentar seu limite."
    >
      <button
        onClick={() => setShowLimitModal(false)}
        className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
      >
        Entendi
      </button>
    </Modal>
    <ConfirmationModal
      isOpen={showConfirmModal}
      onClose={() => setShowConfirmModal(false)}
      onConfirm={async () => {
        setShowConfirmModal(false);
        setIsDownloading(true);
        try {
          const { data: { user } } = await supabase.auth.getUser();
          if (!user) throw new Error('Usuário não autenticado');
          
          await downloadTemplate(template, values, user.id, () => setShowLimitModal(true));
        } catch (error) {
          alert(error instanceof Error ? error.message : 'Erro ao baixar template');
        } finally {
          setIsDownloading(false);
        }
      }}
      title="Confirmar Download"
      description="Você tem certeza que deseja baixar novamente? Isso custará mais 1 token."
      confirmText="Baixar novamente"
    />
    </>
  );
}