import React from 'react';
import { TextInput } from '../../ui/TextInput';

interface TryAgainPopupSettingsProps {
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export function TryAgainPopupSettings({ values, onChange }: TryAgainPopupSettingsProps) {
  return (
    <div className="space-y-6">
      <TextInput
        label="Emoji de Falha"
        value={values.failureEmoji || '😢'}
        onChange={(e) => onChange('failureEmoji', e.target.value)}
        placeholder="Ex: 😢"
      />

      <TextInput
        label="Título do Popup de Falha"
        value={values.tryAgainTitle || ''}
        onChange={(e) => onChange('tryAgainTitle', e.target.value)}
        placeholder="Ex: Tente novamente!"
      />

      <TextInput
        label="Descrição do Popup de Falha"
        value={values.tryAgainDescription || ''}
        onChange={(e) => onChange('tryAgainDescription', e.target.value)}
        placeholder="Digite a mensagem que será exibida quando o usuário não ganhar..."
        multiline
        rows={3}
      />

      <TextInput
        label="Texto do Botão de Falha"
        value={values.tryAgainButtonText || ''}
        onChange={(e) => onChange('tryAgainButtonText', e.target.value)}
        placeholder="Ex: TENTAR NOVAMENTE"
      />
    </div>
  );
}