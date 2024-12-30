import React from 'react';
import { TextInput } from '../../ui/TextInput';

interface PopupSettingsProps {
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export function PopupSettings({ values, onChange }: PopupSettingsProps) {
  return (
    <div className="space-y-6">
      <TextInput
        label="Emoji de Sucesso"
        value={values.successEmoji || '🎉'}
        onChange={(e) => onChange('successEmoji', e.target.value)}
        placeholder="Ex: 🎉"
      />

      <TextInput
        label="Título do Popup de Vitória"
        value={values.popupTitle || ''}
        onChange={(e) => onChange('popupTitle', e.target.value)}
        placeholder="Ex: Parabéns! Você Ganhou!"
      />

      <TextInput
        label="Descrição do Popup de Vitória"
        value={values.popupDescription || ''}
        onChange={(e) => onChange('popupDescription', e.target.value)}
        placeholder="Digite a mensagem que será exibida quando o usuário ganhar..."
        multiline
        rows={3}
      />

      <TextInput
        label="Texto do Botão do Popup"
        value={values.popupButtonText || ''}
        onChange={(e) => onChange('popupButtonText', e.target.value)}
        placeholder="Ex: RESGATAR PRÊMIO"
      />
    </div>
  );
}