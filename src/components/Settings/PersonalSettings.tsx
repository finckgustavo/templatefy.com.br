import React, { useEffect } from 'react';
import { User, Mail, Lock } from 'lucide-react';
import { Button } from '../ui/Button';
import { TextInput } from '../ui/TextInput';
import { usePersonalSettings } from '@/hooks/usePersonalSettings';
import { useProfile } from '@/hooks/useProfile';
import { SettingsSection } from './SettingsSection';

export function PersonalSettings() {
  const { profile } = useProfile();
  const {
    formData,
    activeField,
    loading,
    error,
    success,
    handleChange,
    handleUpdateName,
    handleUpdateEmail,
    handleUpdatePassword,
    setActiveField
  } = usePersonalSettings();

  useEffect(() => {
    if (profile) {
      handleChange('fullName', profile.full_name || '');
      handleChange('email', profile.email);
    }
  }, [profile]);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <SettingsSection
        icon={User}
        title="Nome Completo"
        value={profile?.full_name || 'Sem nome'}
        activeField={activeField === 'name'}
        onToggle={() => setActiveField(activeField === 'name' ? null : 'name')}
        error={error}
        success={success}
      >
        {activeField === 'name' && <form onSubmit={handleUpdateName} className="space-y-4">
          <TextInput
            label="Novo Nome"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder="Digite seu novo nome"
            required
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              variant="primary"
              disabled={loading}
            >
              {loading ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
        </form>}
      </SettingsSection>

      <SettingsSection
        icon={Mail}
        title="E-mail"
        value={profile?.email || ''}
        activeField={activeField === 'email'}
        onToggle={() => setActiveField(activeField === 'email' ? null : 'email')}
        error={error}
        success={success}
      >
        {activeField === 'email' && <form onSubmit={handleUpdateEmail} className="space-y-4">
          <TextInput
            label="Novo E-mail"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="Digite seu novo e-mail"
            required
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              variant="primary"
              disabled={loading}
            >
              {loading ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
        </form>}
      </SettingsSection>

      <SettingsSection
        icon={Lock}
        title="Senha"
        value="••••••••"
        activeField={activeField === 'password'}
        onToggle={() => setActiveField(activeField === 'password' ? null : 'password')}
        error={error}
        success={success}
      >
        {activeField === 'password' && <form onSubmit={handleUpdatePassword} className="space-y-4">
          <TextInput
            label="Senha Atual"
            type="password"
            value={formData.currentPassword}
            onChange={(e) => handleChange('currentPassword', e.target.value)}
            placeholder="Digite sua senha atual"
            required
          />
          <TextInput
            label="Nova Senha"
            type="password"
            value={formData.newPassword}
            onChange={(e) => handleChange('newPassword', e.target.value)}
            placeholder="Digite sua nova senha"
            required
          />
          <TextInput
            label="Confirmar Nova Senha"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange('confirmPassword', e.target.value)}
            placeholder="Confirme sua nova senha"
            required
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              variant="primary"
              disabled={loading}
            >
              {loading ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
        </form>}
      </SettingsSection>
    </div>
  );
}