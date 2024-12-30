import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface UseDownloadsReturn {
  downloads: number;
  downloadLimit: number;
  loading: boolean;
}

export function useDownloads(): UseDownloadsReturn {
  const [downloads, setDownloads] = useState(0);
  const [downloadLimit, setDownloadLimit] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setupSubscription = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        // Fetch downloads count and user limits
        const [{ count }, { data: limits }] = await Promise.all([
          supabase
            .from('downloads')
            .select('*', { count: 'exact', head: true })
            .eq('user_id', user.id),
          supabase
            .from('user_limits')
            .select('download_limit')
            .eq('user_id', user.id)
            .single()
        ]);

        setDownloads(count || 0);
        setDownloadLimit(limits?.download_limit || 10);
      } catch (error) {
        console.error('Error fetching downloads:', error);
      } finally {
        setLoading(false);
      }

      // Set up real-time subscription
      const subscription = supabase
        .channel('downloads-changes')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'downloads'
          },
          async (payload) => {
            if (payload.new && payload.new.user_id === user.id) {
              const { count: newCount } = await supabase
                .from('downloads')
                .select('*', { count: 'exact', head: true })
                .eq('user_id', user.id);

              setDownloads(newCount || 0);
            }
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(subscription);
      };
    };

    const cleanup = setupSubscription();
    
    // Reset state when unmounting
    return () => {
      setDownloads(0);
      setDownloadLimit(10);
      cleanup.then(fn => fn?.());
    };
  }, []);

  return { downloads, downloadLimit, loading };
}