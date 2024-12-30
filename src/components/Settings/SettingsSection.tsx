import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SettingsSectionProps {
  icon: LucideIcon;
  title: string;
  value: string;
  children?: React.ReactNode;
  activeField?: boolean;
  onToggle?: () => void;
  error?: string | null;
  success?: string | null;
  disabled?: boolean;
}

export function SettingsSection({
  icon: Icon,
  title,
  value,
  children,
  activeField,
  onToggle,
  error,
  success,
  disabled
}: SettingsSectionProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gray-100 rounded-xl">
              <Icon className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">{title}</h4>
              <p className="text-sm text-gray-500">{value}</p>
            </div>
          </div>
          {onToggle && !disabled && (
            <Button
              variant="outline"
              onClick={onToggle}
            >
              {activeField ? 'Cancelar' : 'Alterar'}
            </Button>
          )}
        </div>

        {(activeField || children) && (
          <div className={cn("pt-6", { "mt-6 border-t": activeField })}>
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-sm text-red-600">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-sm text-green-600">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                {success}
              </div>
            )}

            {children}
          </div>
        )}
      </div>
    </div>
  );
}