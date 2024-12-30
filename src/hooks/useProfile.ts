import { useState, useEffect } from 'react';
import * as auth from '@/lib/auth';
import { useAuth } from './useAuth';

interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
}

export function useProfile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    const loadProfile = async () => {
      try {
        const data = await auth.getProfile(user.id);
        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro ao carregar perfil'));
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [user]);

  const updateProfile = async (updates: {
    fullName?: string;
    avatarUrl?: string;
  }) => {
    if (!user) return;

    try {
      setLoading(true);
      setError(null);
      await auth.updateProfile(user.id, updates);
      
      // Refresh profile data
      const updatedProfile = await auth.getProfile(user.id);
      setProfile(updatedProfile);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Erro ao atualizar perfil'));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    profile,
    loading,
    error,
    updateProfile
  };
}