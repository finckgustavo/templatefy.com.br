import React from 'react';
import { Layout, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <div
      className={cn(
        'fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Layout className="h-6 w-6 text-indigo-600" />
          <span className="font-semibold text-gray-900">Templatefy</span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5 text-gray-500" />
        </button>
      </div>
      
      <nav className="p-4">
        <div className="space-y-1">
          <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-indigo-50 text-indigo-600">
            Templates
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50">
            Meus Projetos
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50">
            Configurações
          </a>
        </div>
      </nav>
    </div>
  );
}