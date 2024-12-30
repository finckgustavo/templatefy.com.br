import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  id: string;
  name: string;
  status: 'complete' | 'current' | 'upcoming';
}

interface QuizStepsProps {
  currentStep: number;
}

export function QuizSteps({ currentStep }: QuizStepsProps) {
  const steps: Step[] = [
    { id: '01', name: 'Configurações da Marca', status: 'complete' },
    { id: '02', name: 'Perguntas do Quiz', status: 'current' },
    { id: '03', name: 'Preview', status: 'upcoming' },
  ].map((step, index) => ({
    ...step,
    status: index < currentStep ? 'complete' : index === currentStep ? 'current' : 'upcoming',
  }));

  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={cn(
              stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '',
              'relative'
            )}
          >
            {step.status === 'complete' ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-indigo-600" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900">
                  <Check className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
              </>
            ) : step.status === 'current' ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                  <span className="text-indigo-600 text-sm font-semibold">{step.id}</span>
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
                  <span className="text-gray-500 text-sm">{step.id}</span>
                </div>
              </>
            )}
            <span className="absolute -bottom-6 text-sm font-medium text-gray-500">
              {step.name}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
}