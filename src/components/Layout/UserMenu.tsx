import React, { useState } from 'react';
import { User, Settings, LogOut } from 'lucide-react';
import { useProfile } from '@/hooks/useProfile';

interface UserMenuProps {
  onLogout: () => void;
  onOpenSettings: () => void;
}

export function UserMenu({ onLogout, onOpenSettings }: UserMenuProps) {
  const { profile } = useProfile();
  
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSettingsClick = () => {
    setIsOpen(false);
    onOpenSettings();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-gray-100 transition-colors relative z-10"
      >
        <User className="w-5 h-5 text-gray-600" />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
            <div className="p-4">
              <div className="flex items-center gap-3 pb-4 border-b">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <User className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{profile?.full_name || 'Usuário'}</h3>
                  <p className="text-sm text-gray-500">{profile?.email}</p>
                </div>
              </div>

              <div className="py-2">
                <button
                  onClick={handleSettingsClick}
                  className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  Configurações da Conta
                </button>
                <button
                  onClick={onLogout}
                  className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sair
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}