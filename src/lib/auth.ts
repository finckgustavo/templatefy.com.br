import { supabase } from './supabase';
import { Database } from './database.types';

export type Profile = Database['public']['Tables']['profiles']['Row'];

export interface SignUpData {
  email: string;
  password: string;
  fullName: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export async function signUp({ email, password, fullName }: SignUpData) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName
      }
    }
  });

  if (error) throw error;

  // Wait for profile creation
  if (data.user) {
    await waitForProfile(data.user.id);
  }

  return data;
}

async function waitForProfile(userId: string, attempts = 5): Promise<void> {
  if (attempts <= 0) throw new Error('Profile creation timeout');

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (!profile) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return waitForProfile(userId, attempts - 1);
  }
}

export async function signIn({ email, password }: SignInData) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getCurrentSession() {
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error) throw error;
  return session;
}

export async function updateProfile(userId: string, updates: {
  fullName?: string;
  avatarUrl?: string;
}) {
  const { error } = await supabase
    .from('profiles')
    .update({
      full_name: updates.fullName,
      avatar_url: updates.avatarUrl,
      updated_at: new Date().toISOString()
    })
    .eq('id', userId);

  if (error) throw error;
}

export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
}