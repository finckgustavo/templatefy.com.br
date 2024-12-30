import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export function usePersonalSettings() {
  const [activeField, setActiveField] = useState<'name' | 'email' | 'password' | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleUpdateName = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { error } = await supabase
        .from('users')
        .update({ full_name: formData.fullName })
        .eq('email', 'admin@templatefy.com');

      if (error) throw error;
      setSuccess('Nome atualizado com sucesso!');
      setActiveField(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { error } = await supabase
        .from('users')
        .update({ email: formData.email })
        .eq('email', 'admin@templatefy.com');

      if (error) {
        if (error.code === '23505') {
          throw new Error('Este e-mail já está em uso');
        }
        throw error;
      }
      setSuccess('E-mail atualizado com sucesso!');
      setActiveField(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (formData.newPassword !== formData.confirmPassword) {
        throw new Error('As senhas não coincidem');
      }

      const { data: user } = await supabase
        .from('users')
        .select('password')
        .eq('email', 'admin@templatefy.com')
        .single();

      if (!user || user.password !== formData.currentPassword) {
        throw new Error('Senha atual incorreta');
      }

      const { error } = await supabase
        .from('users')
        .update({ password: formData.newPassword })
        .eq('email', 'admin@templatefy.com');

      if (error) throw error;
      setSuccess('Senha atualizada com sucesso!');
      setActiveField(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro');
    } finally {
      setLoading(false);
    }
  };

  return {
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
  };
}