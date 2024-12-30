import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { User, Session } from '@supabase/supabase-js';
import * as auth from '@/lib/auth';
import { Profile } from '@/lib/auth';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadProfile = async (session: Session | null) => {
    if (!session?.user) {
      setProfile(null);
      return;
    }

    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      setProfile(profile);
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      loadProfile(session);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      loadProfile(session);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signUp = async (data: auth.SignUpData) => {
    try {
      setLoading(true);
      setError(null);
      await auth.signUp(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Erro ao criar conta'));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (data: auth.SignInData) => {
    try {
      setLoading(true);
      setError(null);
      await auth.signIn(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Erro ao fazer login'));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      setError(null);
      await auth.signOut();
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Erro ao fazer logout'));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    profile,
    loading,
    error,
    signUp,
    signIn,
    signOut
  };
}