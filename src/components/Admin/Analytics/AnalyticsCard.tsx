import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function AnalyticsCard({ title, value, icon: Icon, trend, className }: AnalyticsCardProps) {
  return (
    <div className={cn("bg-white p-6 rounded-lg border border-gray-200", className)}>
      <div className="flex items-center justify-between">
        <div className="p-2 bg-indigo-50 rounded-lg">
          <Icon className="w-5 h-5 text-indigo-600" />
        </div>
        {trend && (
          <div className={cn(
            "text-sm font-medium",
            trend.isPositive ? "text-green-600" : "text-red-600"
          )}>
            {trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%
          </div>
        )}
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-gray-900">
        {value}
      </h3>
      <p className="mt-1 text-sm text-gray-500">{title}</p>
    </div>
  );
}