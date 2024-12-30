import { useState } from 'react';

type SettingsSection = 'personal' | 'financial' | 'plans';

export function useSettings() {
  const [activeSection, setActiveSection] = useState<SettingsSection>('personal');

  return {
    activeSection,
    setActiveSection
  };
}