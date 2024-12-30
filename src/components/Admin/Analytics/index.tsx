import React, { useEffect, useState } from 'react';
import { Download, Users, BarChart } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { AnalyticsCard } from './AnalyticsCard';
import { DownloadsChart } from './DownloadsChart';
import { TemplateStats } from './TemplateStats';

interface Stats {
  totalDownloads: number;
  totalUsers: number;
  downloadsTrend: number;
  usersTrend: number;
  dailyDownloads: Array<{
    date: string;
    count: number;
  }>;
  templateStats: Array<{
    id: string;
    name: string;
    downloads: number;
    percentage: number;
  }>;
}

export function Analytics() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      // Get total downloads
      const { count: totalDownloads } = await supabase
        .from('downloads')
        .select('*', { count: 'exact', head: true });

      // Get total users
      const { count: totalUsers } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });

      // Get daily downloads for the last 7 days
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const { data: dailyDownloads } = await supabase
        .from('downloads')
        .select('created_at')
        .gte('created_at', sevenDaysAgo.toISOString());

      // Process daily downloads
      const downloadsByDay = dailyDownloads?.reduce((acc, download) => {
        const date = new Date(download.created_at).toISOString().split('T')[0];
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      // Get downloads by template
      const { data: templateDownloads } = await supabase
        .from('downloads')
        .select('template_id');

      const downloadsByTemplate = templateDownloads?.reduce((acc, download) => {
        acc[download.template_id] = (acc[download.template_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      // Calculate template stats
      const templates = [
        { id: 'image-quiz', name: 'Quiz com Imagens' },
        { id: 'wheel', name: 'Roleta Premiada' },
        { id: 'store', name: 'Loja Virtual' }
      ];

      const templateStats = templates.map(template => ({
        ...template,
        downloads: downloadsByTemplate?.[template.id] || 0,
        percentage: ((downloadsByTemplate?.[template.id] || 0) / (totalDownloads || 1)) * 100
      })).sort((a, b) => b.downloads - a.downloads);

      setStats({
        totalDownloads: totalDownloads || 0,
        totalUsers: totalUsers || 0,
        downloadsTrend: 12, // Example value
        usersTrend: 8, // Example value
        dailyDownloads: Object.entries(downloadsByDay || {})
          .map(([date, count]) => ({ date, count }))
          .sort((a, b) => a.date.localeCompare(b.date)),
        templateStats
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-32 bg-gray-200 rounded-lg" />
          <div className="h-64 bg-gray-200 rounded-lg" />
          <div className="h-48 bg-gray-200 rounded-lg" />
        </div>
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnalyticsCard
          title="Downloads Totais"
          value={stats.totalDownloads}
          icon={Download}
          trend={{ value: stats.downloadsTrend, isPositive: true }}
        />
        <AnalyticsCard
          title="Usuários Totais"
          value={stats.totalUsers}
          icon={Users}
          trend={{ value: stats.usersTrend, isPositive: true }}
        />
        <AnalyticsCard
          title="Taxa de Conversão"
          value={`${((stats.totalDownloads / stats.totalUsers) * 100).toFixed(1)}%`}
          icon={BarChart}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DownloadsChart data={stats.dailyDownloads} />
        <TemplateStats templates={stats.templateStats} />
      </div>
    </div>
  );
}