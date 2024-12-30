import React from 'react';
import { ColorPicker } from '../../ui/ColorPicker';
import { TextInput } from '../../ui/TextInput';
import { Switch } from '../../ui/Switch';

interface NotificationSettingsProps {
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export function NotificationSettings({ values, onChange }: NotificationSettingsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-gray-900">Notificações de Engajamento</h3>
          <p className="text-sm text-gray-500">
            Exibe notificações de outras pessoas ganhando para aumentar o engajamento
          </p>
        </div>
        <Switch
          checked={values.showNotifications === 'true'}
          onCheckedChange={(checked) => onChange('showNotifications', checked.toString())}
        />
      </div>

      {values.showNotifications === 'true' && (
        <>
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-900">Valores de Desconto</h4>
            <p className="text-sm text-gray-500">
              Digite os valores de desconto que aparecerão nas notificações, separados por vírgula
            </p>
            <TextInput
              value={values.discountValues || '10,20,30,40,50'}
              onChange={(e) => onChange('discountValues', e.target.value)}
              placeholder="Ex: 10,20,30,40,50"
            />
            <p className="text-xs text-gray-400">
              Estes valores devem corresponder aos descontos presentes na sua roleta
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ColorPicker
              label="Cor de Fundo"
              value={values.notificationBgColor || '#FFFFFF'}
              onChange={(value) => onChange('notificationBgColor', value)}
            />
            <ColorPicker
              label="Cor do Texto"
              value={values.notificationTextColor || '#000000'}
              onChange={(value) => onChange('notificationTextColor', value)}
            />
          </div>

          <div className="space-y-4">
            <TextInput
              label="Intervalo Mínimo (segundos)"
              type="number"
              value={values.notificationMinInterval || '2'}
              onChange={(e) => onChange('notificationMinInterval', e.target.value)}
              min="1"
              max="10"
            />
            <TextInput
              label="Intervalo Máximo (segundos)"
              type="number"
              value={values.notificationMaxInterval || '5'}
              onChange={(e) => onChange('notificationMaxInterval', e.target.value)}
              min="2"
              max="15"
            />
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-900">Mensagens Personalizadas</h4>
            <p className="text-sm text-gray-500">
              Use {'{name}'} para inserir nomes aleatórios e {'{discount}'} para o valor do desconto
            </p>
            <TextInput
              label="Modelo da Mensagem"
              value={values.notificationTemplate || '{name} acabou de ganhar {discount}% de desconto!'}
              onChange={(e) => onChange('notificationTemplate', e.target.value)}
              placeholder="Ex: {name} ganhou {discount}% de desconto!"
            />
          </div>
        </>
      )}
    </div>
  );
}