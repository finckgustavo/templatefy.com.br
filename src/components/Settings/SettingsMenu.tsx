import React from 'react';
import { User, CreditCard, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

type SettingsSection = 'personal' | 'financial' | 'plans';

interface SettingsMenuProps {
  activeSection: SettingsSection;
  onChangeSection: (section: SettingsSection) => void;
  onClose: () => void;
}

const sections = [
  { id: 'personal', label: 'Dados Pessoais', icon: User },
  { id: 'plans', label: 'Planos', icon: CreditCard },
  { id: 'financial', label: 'Dados Financeiros', icon: CreditCard }
] as const;

export function SettingsMenu({ activeSection, onChangeSection, onClose }: SettingsMenuProps) {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-gray-200 bg-white">
      <div className="p-4">
        <button
          onClick={onClose}
          className="mb-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-gray-600" />
        </button>

        <nav className="space-y-1">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => onChangeSection(section.id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
              activeSection === section.id
                ? "bg-indigo-50 text-indigo-600 shadow-sm"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            {React.createElement(section.icon, { 
              className: cn(
                "w-4 h-4",
                activeSection === section.id ? "text-indigo-600" : "text-gray-400"
              )
            })}
            {section.label}
          </button>
        ))}
      </nav>
      </div>
    </aside>
  );
}