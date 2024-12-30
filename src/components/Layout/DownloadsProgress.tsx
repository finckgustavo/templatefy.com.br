import React from 'react';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DownloadsProgressProps {
  downloads: number;
  maxDownloads: number;
  className?: string;
}

export function DownloadsProgress({ downloads, maxDownloads, className }: DownloadsProgressProps) {
  const progress = Math.min((downloads / maxDownloads) * 100, 100);
  const formattedDownloads = downloads.toLocaleString();
  const formattedMax = maxDownloads.toLocaleString();

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg">
        <Download className="w-4 h-4 text-gray-600" />
        <div className="flex items-center gap-2">
          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm text-gray-600 font-medium">
            {formattedDownloads}/{formattedMax}
          </span>
        </div>
      </div>
    </div>
  );
}