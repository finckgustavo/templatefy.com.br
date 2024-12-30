import React, { useEffect, useState } from 'react';
import { ArrowLeft, Users, BarChart2, List } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Analytics } from './Analytics';
import { AuditLogs } from './AuditLogs';
import { cn } from '@/lib/utils';

interface User {
  id: string;
  email: string;
  full_name: string;
  downloads_count: number;
  download_limit: number;
  is_admin: boolean;
}

export function AdminPanel({ onClose }: { onClose: () => void }) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'users' | 'analytics' | 'logs'>('analytics');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false })
        .throwOnError();

      if (profilesError) throw profilesError;

      const usersWithData = await Promise.all(
        (profiles || []).map(async (profile) => {
          const { count } = await supabase
            .from('downloads')
            .select('*', { count: 'exact', head: true })
            .eq('user_id', profile.id);

          return {
            id: profile.id,
            email: profile.email,
            full_name: profile.full_name || 'Sem nome',
            downloads_count: count || 0,
            download_limit: profile.download_limit,
            is_admin: profile.is_admin
          };
        })
      );

      setUsers(usersWithData);
    } catch (error) {
      console.error('Error loading users:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateDownloadLimit = async (userId: string, newLimit: number) => {
    try {
      const { error } = await supabase
        .rpc('update_user_limit', {
          p_user_id: userId,
          p_download_limit: newLimit
        });

      if (error) throw error;

      setUsers(users.map(user => 
        user.id === userId 
          ? { ...user, download_limit: newLimit }
          : user
      ));
    } catch (error) {
      console.error('Error updating limit:', error);
      alert(error instanceof Error ? error.message : 'Erro ao atualizar limite');
    }
  };

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-600" />
          </button>
          <h1 className="text-lg font-medium">Painel Administrativo</h1>
          
          <div className="ml-8 flex gap-1">
            <button
              onClick={() => setActiveTab('analytics')}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                activeTab === 'analytics' 
                  ? "bg-indigo-50 text-indigo-600" 
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              <div className="flex items-center gap-2">
                <BarChart2 className="w-4 h-4" />
                <span>Analytics</span>
              </div>
            </button>
            
            <button
              onClick={() => setActiveTab('logs')}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                activeTab === 'logs' 
                  ? "bg-indigo-50 text-indigo-600" 
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              <div className="flex items-center gap-2">
                <List className="w-4 h-4" />
                <span>Logs</span>
              </div>
            </button>
            
            <button
              onClick={() => setActiveTab('users')}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                activeTab === 'users' 
                  ? "bg-indigo-50 text-indigo-600" 
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Usuários</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6">
        {activeTab === 'analytics' ? (
          <Analytics />
        ) : activeTab === 'logs' ? (
          <AuditLogs />
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Downloads
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Limite
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Admin
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                      Carregando...
                    </td>
                  </tr>
                ) : users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {user.full_name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {user.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {user.downloads_count}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="number"
                        value={user.download_limit}
                        onChange={(e) => updateDownloadLimit(user.id, parseInt(e.target.value))}
                        className="w-20 px-2 py-1 text-sm border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {user.is_admin ? '✓' : ''}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => updateDownloadLimit(user.id, user.download_limit)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Salvar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}