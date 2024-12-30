import React from 'react';
import { CreditCard } from 'lucide-react';
import { SettingsSection } from './SettingsSection';

export function FinancialSettings() {
  return (
    <div className="w-full space-y-6">
      <SettingsSection
        icon={CreditCard}
        title="Dados de Pagamento"
        value="Em breve"
        disabled
      />
    </div>
  );
}