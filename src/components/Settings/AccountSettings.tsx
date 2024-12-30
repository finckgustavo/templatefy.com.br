import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';
import { SettingsMenu } from './SettingsMenu';
import { PersonalSettings } from './PersonalSettings';
import { FinancialSettings } from './FinancialSettings';
import { PlansSettings } from './PlansSettings';
import { useSettings } from '@/hooks/useSettings';

interface AccountSettingsProps {
  onClose: () => void;
}

export function AccountSettings({ onClose }: AccountSettingsProps) {
  const { activeSection, setActiveSection } = useSettings();

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex">
          <SettingsMenu
            activeSection={activeSection}
            onChangeSection={setActiveSection}
            onClose={onClose}
          />

          <div className="flex-1 overflow-y-auto p-8">
            {activeSection === 'personal' && <PersonalSettings />}
            {activeSection === 'financial' && <FinancialSettings />}
            {activeSection === 'plans' && <PlansSettings />}
          </div>
        </div>
      </div>
    </div>
  );
}