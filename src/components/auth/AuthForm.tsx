import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '../ui/Button';
import { TextInput } from '../ui/TextInput';
import { AlertCircle, Boxes } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AuthFormProps {
  onSuccess: () => void;
}

export function AuthForm({ onSuccess }: AuthFormProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password
        });

        if (error) {
          if (error.message === 'Invalid login credentials') {
            throw new Error('E-mail ou senha inválidos');
          }
          throw error;
        }

        onSuccess();
      } else {
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.fullName
            }
          }
        });

        if (error) {
          if (error.code === '23505') {
            throw new Error('Este e-mail já está cadastrado');
          }
          throw error;
        }

        onSuccess();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex">
      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 mb-8">
            <Boxes className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold">Templatefy</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              {isLogin ? 'Bem-vindo de volta!' : 'Crie sua conta'}
            </h2>
            <p className="text-gray-600">
              {isLogin 
                ? 'Entre com suas credenciais para acessar o sistema' 
                : 'Preencha os dados abaixo para criar sua conta'}
            </p>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-red-600">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className={cn(
              "space-y-4 transition-all duration-300",
              isLogin ? "opacity-0 h-0" : "opacity-100 h-auto"
            )}>
              {!isLogin && (
                <TextInput
                  label="Nome completo"
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  placeholder="Seu nome completo"
                  required={!isLogin}
                />
              )}
            </div>

            <TextInput
              label="E-mail"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="exemplo@email.com"
              required
            />

            <TextInput
              label="Senha"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              placeholder="••••••••"
              required
            />

            <Button
              type="submit"
              variant="primary"
              className="w-full h-12 mt-6"
              disabled={loading}
            >
              {loading ? 'Carregando...' : isLogin ? 'Entrar' : 'Cadastrar'}
            </Button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-indigo-600 hover:text-indigo-500"
              >
                {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Entre'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Image Side */}
      <div className="hidden lg:flex w-1/2 bg-gray-50 items-center justify-center overflow-hidden">
        <dotlottie-player
          src="https://lottie.host/415ee7ae-b979-428f-8e93-fe8c649af923/AS0KidHzzb.lottie"
          background="transparent"
          speed="1"
          style={{ width: '600px', height: '600px' }}
          loop
          autoplay
          class="animate-float"
        />
      </div>
    </div>
  );
}