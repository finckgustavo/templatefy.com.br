import React from 'react';
import { CreditCard, Check } from 'lucide-react';
import { SettingsSection } from './SettingsSection';
import { Card } from '../ui/Card';

const plans = [
  {
    id: 'free',
    name: 'Plano Gratuito',
    price: 'R$ 0',
    features: [
      '10 downloads por mês',
      'Acesso a todos os templates',
      'Suporte por email'
    ],
    current: true
  },
  {
    id: 'pro',
    name: 'Plano Pro',
    price: 'R$ 29,90',
    features: [
      '50 downloads por mês',
      'Acesso a todos os templates',
      'Suporte prioritário',
      'Remoção da marca d\'água',
      'Templates exclusivos'
    ],
    comingSoon: true
  },
  {
    id: 'enterprise',
    name: 'Plano Enterprise',
    price: 'R$ 99,90',
    features: [
      'Downloads ilimitados',
      'Acesso a todos os templates',
      'Suporte VIP',
      'Remoção da marca d\'água',
      'Templates exclusivos',
      'API de integração',
      'Múltiplos usuários'
    ],
    comingSoon: true
  }
];

export function PlansSettings() {
  return (
    <div className="w-full space-y-6">
      <SettingsSection
        icon={CreditCard}
        title="Planos"
        value="Gerencie seu plano atual"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {plans.map((plan) => (
            <Card key={plan.id} className="relative overflow-hidden">
              {plan.current && (
                <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                  Plano Atual
                </div>
              )}
              {plan.comingSoon && (
                <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                  Em Breve
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">/mês</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors
                    ${plan.current 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : plan.comingSoon
                        ? 'bg-amber-500 text-white hover:bg-amber-600'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                  disabled={plan.current || plan.comingSoon}
                >
                  {plan.current 
                    ? 'Plano Atual'
                    : plan.comingSoon
                      ? 'Em Breve'
                      : 'Assinar Plano'
                }
                </button>
              </div>
            </Card>
          ))}
        </div>
      </SettingsSection>
    </div>
  );
}