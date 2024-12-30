import { useState } from 'react';
import { Template } from '@/types';

export function useQuizEditor(template: Template) {
  const [values, setValues] = useState(template.defaultValues);
  const [currentStep, setCurrentStep] = useState(0);

  const handleValueChange = (fieldId: string, value: string) => {
    setValues(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return {
    values,
    currentStep,
    handleValueChange,
    handleNextStep,
    handlePrevStep
  };
}