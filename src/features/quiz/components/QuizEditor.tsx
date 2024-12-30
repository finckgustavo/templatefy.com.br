import React from 'react';
import { Template } from '@/types';
import { useQuizEditor } from '../hooks/useQuizEditor';
import { QuizEditorSteps } from './QuizEditorSteps';

interface QuizEditorProps {
  template: Template;
}

export function QuizEditor({ template }: QuizEditorProps) {
  const {
    values,
    currentStep,
    handleValueChange,
    handleNextStep,
    handlePrevStep
  } = useQuizEditor(template);

  return (
    <QuizEditorSteps
      fields={template.fields}
      values={values}
      onChange={handleValueChange}
      currentStep={currentStep}
      onNextStep={handleNextStep}
      onPrevStep={handlePrevStep}
      template={template}
    />
  );
}