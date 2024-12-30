import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Activity } from 'lucide-react';

interface AuditLog {
  id: string;
  user_email: string;
  action: string;
  entity_type: string;
  entity_id: string;
  details: Record<string, any>;
  created_at: string;
  ip_address: string;
}

interface AuditLogItemProps {
  log: AuditLog;
}

function getActionColor(action: string): string {
  switch (action.toLowerCase()) {
    case 'create':
      return 'text-green-600 bg-green-50';
    case 'update':
      return 'text-blue-600 bg-blue-50';
    case 'delete':
      return 'text-red-600 bg-red-50';
    default:
      return 'text-gray-600 bg-gray-50';
  }
}

function formatDetails(details: Record<string, any>): string {
  if (!details) return '';
  
  return Object.entries(details)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join(', ');
}

export function AuditLogItem({ log }: AuditLogItemProps) {
  const actionColor = getActionColor(log.action);
  const timeAgo = formatDistanceToNow(new Date(log.created_at), { 
    addSuffix: true,
    locale: ptBR 
  });

  return (
    <div className="flex gap-4 p-4 hover:bg-gray-50 transition-colors">
      <div className="flex-shrink-0">
        <div className={`p-2 rounded-lg ${actionColor}`}>
          <Activity className="w-5 h-5" />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-medium text-gray-900">
            {log.user_email}
          </p>
          <span className="text-sm text-gray-500">{timeAgo}</span>
        </div>

        <p className="text-sm text-gray-600">
          {log.action} {log.entity_type} ({log.entity_id})
        </p>

        {log.details && Object.keys(log.details).length > 0 && (
          <div className="mt-2 text-xs text-gray-500 font-mono bg-gray-50 p-2 rounded">
            {formatDetails(log.details)}
          </div>
        )}

        <div className="mt-1 text-xs text-gray-400">
          IP: {log.ip_address}
        </div>
      </div>
    </div>
  );
}