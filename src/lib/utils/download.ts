import { Template } from '@/types';
import { supabase } from '@/lib/supabase';
import { downloadTemplateWithImages } from '@/lib/storage';
import { TemplateRenderer } from './template-renderer';

const templateRenderer = new TemplateRenderer();

export async function downloadTemplate(
  template: Template,
  values: Record<string, string>,
  userId: string,
  onLimitReached?: () => void
) {
  if (!userId) {
    throw new Error('Usuário não autenticado');
  }

  // Check download limit
  try {
    const [{ count, error: countError }, { data: limits, error: limitsError }] = await Promise.all([
      supabase
      .from('downloads')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId),
      supabase
      .from('profiles')
      .select('download_limit')
      .eq('id', userId)
      .single()
    ]);

    if (countError) throw countError;
    if (limitsError) throw limitsError;
    if (!limits) throw new Error('Limite de downloads não encontrado');

    const limit = limits.download_limit;
    console.log('Current downloads:', count, 'Limit:', limit); // Debug log

    if (count && count >= limit) {
      if (onLimitReached) {
        onLimitReached();
        return;
      }
      throw new Error('Limite de downloads atingido');
    }

    // Record download first to ensure we don't exceed limit
    try {
      const { error } = await supabase.from('downloads').insert({
        user_id: userId,
        template_id: template.id
      });

      if (error) {
        console.error('Error recording download:', error);
        throw new Error('Erro ao registrar download');
      }
    } catch (error) {
      console.error('Error recording download:', error);
      throw new Error('Erro ao registrar download');
    }

    // Generate content
    const html = await template.generate(values);
    
    const blob = await downloadTemplateWithImages(html, template.id);
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${template.id}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error in downloadTemplate:', error);
    throw error;
  }
}