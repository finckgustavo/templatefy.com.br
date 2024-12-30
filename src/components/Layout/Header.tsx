import React, { useState, useEffect } from 'react';
import { Boxes, LayoutDashboard } from 'lucide-react';
import { UserMenu } from './UserMenu';
import { DownloadsProgress } from './DownloadsProgress';
import { useProfile } from '@/hooks/useProfile';
import { supabase } from '@/lib/supabase';

interface HeaderProps {
  templateName?: string;
  onLogoClick?: () => void;
  isAuthenticated?: boolean;
  onLogout?: () => void;
  onOpenSettings?: () => void;
  onOpenAdmin?: () => void;
}

export function Header({ 
  templateName, 
  onLogoClick, 
  isAuthenticated, 
  onLogout, 
  onOpenSettings,
  onOpenAdmin 
}: HeaderProps) {
  const { profile, loading } = useProfile();
  const [downloads, setDownloads] = useState(0);

  useEffect(() => {
    if (!profile) return;

    const loadDownloads = async () => {
      const { count } = await supabase
        .from('downloads')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', profile.id);

      setDownloads(count || 0);
    };

    loadDownloads();
  }, [profile]);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="w-full px-6">
        <div className="flex items-center h-16">
          <button 
            onClick={onLogoClick}
            className="flex items-center space-x-2.5 hover:opacity-80 transition-opacity"
          >
            <Boxes className="h-6 w-6 text-indigo-600" />
            <span className="font-sora font-bold text-lg text-gray-900">Templatefy</span>
            {templateName && (
              <>
                <div className="mx-4 text-gray-300">/</div>
                <h1 className="text-gray-900">{templateName}</h1>
              </>
            )}
          </button>
          
          <div className="flex-1" />
          
          <div className="flex items-center gap-4">
            {isAuthenticated && profile?.is_admin && (
              <button
                onClick={onOpenAdmin}
                className="p-2 rounded-lg bg-gray-100 transition-colors"
                title="Admin Panel"
              >
                <LayoutDashboard className="w-5 h-5 text-gray-600" />
              </button>
            )}
            {isAuthenticated && (
              <DownloadsProgress 
                downloads={downloads} 
                maxDownloads={profile?.download_limit || 10}
              />
            )}
          {isAuthenticated && onLogout && (
            <UserMenu onLogout={onLogout} onOpenSettings={onOpenSettings} />
          )}
          </div>
        </div>
      </div>
    </header>
  );
}