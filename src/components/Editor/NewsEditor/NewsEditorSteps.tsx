import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Settings, FileText, Download, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Modal } from '../../ui/Modal';
import { ConfirmationModal } from '../../ui/ConfirmationModal';
import { Button } from '../../ui/Button';
import { NewsSettings } from './NewsSettings';
import { NewsContent } from './NewsContent';
import { Template } from '@/types';
import { downloadTemplate } from '@/lib/utils/download';
import { ImageInput } from '../../ui/ImageInput';

interface NewsEditorStepsProps {
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
  currentStep: number;
  onNextStep: () => void;
  onPrevStep: () => void;
  template: Template;
}

const steps = [
  { title: 'Configurações da Notícia', icon: Settings },
  { title: 'Conteúdo', icon: FileText },
  { title: 'Finalização', icon: Download }
];

export function NewsEditorSteps({ 
  values, 
  onChange, 
  currentStep, 
  onNextStep, 
  onPrevStep,
  template 
}: NewsEditorStepsProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
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

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <NewsSettings values={values} onChange={onChange} templateId={template.id} />;
      case 1:
        return <NewsContent values={values} onChange={onChange} />;
      case 2:
        return (
          <div className="space-y-6">
            <ImageInput
              label="URL de Redirecionamento"
              value={values.redirectUrl || ''}
              onChange={(value) => onChange('redirectUrl', value)}
              urlPlaceholder="https://exemplo.com/noticia"
              pathPlaceholder="pages/article.html"
              hidePreview
              isRedirectUrl
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-auto p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg">
            {React.createElement(currentStepData.icon, { 
              className: 'h-5 w-5 text-indigo-600' 
            })}
          </div>
          <h3 className="text-lg font-medium text-gray-900">
            {currentStepData.title}
          </h3>
        </div>
        
        {renderStepContent()}
      </div>

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