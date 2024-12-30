import React from 'react';

interface Download {
  date: string;
  count: number;
}

interface DownloadsChartProps {
  data: Download[];
}

export function DownloadsChart({ data }: DownloadsChartProps) {
  const maxCount = Math.max(...data.map(d => d.count));
  
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Downloads por Dia</h3>
      <div className="h-[200px] flex items-end gap-2">
        {data.map((item, index) => {
          const height = (item.count / maxCount) * 100;
          return (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-indigo-100 rounded-t-sm relative group">
                <div 
                  className="bg-indigo-600 rounded-t-sm transition-all duration-300"
                  style={{ height: `${height}%` }}
                />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs py-1 px-2 rounded">
                  {item.count} downloads
                </div>
              </div>
              <span className="text-xs text-gray-500 -rotate-45 origin-top-left">
                {new Date(item.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}