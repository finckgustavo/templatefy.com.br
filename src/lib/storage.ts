import { supabase } from './supabase';
import { TemplateBuilder } from './utils/template-builder';
import { v4 as uuidv4 } from 'uuid';

export interface UploadedImage {
  id: string;
  filename: string;
  previewUrl: string;
  localPath: string;
}

const templateBuilder = new TemplateBuilder();

export async function uploadImage(
  file: File,
  templateId: string
): Promise<UploadedImage> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  // Generate unique filename
  const ext = file.name.split('.').pop();
  const filename = `${uuidv4()}.${ext}`;
  const storagePath = `temp/${user.id}/${filename}`;

  // Upload to Supabase storage
  const { error: uploadError } = await supabase.storage
    .from('images')
    .upload(storagePath, file);

  if (uploadError) throw uploadError;

  // Get public URL for preview
  const { data: { publicUrl } } = supabase.storage
    .from('images')
    .getPublicUrl(storagePath);

  // Create local path for template
  const localPath = `images/${file.name}`;

  // Add to template builder
  const { previewUrl } = await templateBuilder.addImage(file, localPath);

  // Record in database
  const { error: dbError } = await supabase
    .from('temp_images')
    .insert({
      user_id: user.id,
      template_id: templateId,
      filename: file.name,
      storage_path: storagePath
    });

  if (dbError) throw dbError;

  return {
    id: storagePath,
    filename: file.name,
    previewUrl,
    localPath
  };
}

export async function downloadTemplateWithImages(
  templateHtml: string,
  templateId: string
): Promise<Blob> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  try {
    // Get all template images
    const { data: images } = await supabase
      .from('temp_images')
      .select('*')
      .eq('user_id', user.id)
      .eq('template_id', templateId);

    if (images) {
      // Download each image from storage
      for (const image of images) {
        const { data, error } = await supabase.storage
          .from('images')
          .download(image.storage_path);

        if (error) throw error;
        if (data) {
          await templateBuilder.addStorageImage(data, image.filename);
        }
      }
    }

    templateBuilder.setHtml(templateHtml);
    const blob = await templateBuilder.build();
    templateBuilder.clear();

    // Cleanup temp images
    if (images) {
      for (const image of images) {
        await supabase.storage
          .from('images')
          .remove([image.storage_path]);

        await supabase
          .from('temp_images')
          .delete()
          .eq('id', image.id);
      }
    }

    return blob;
  } catch (error) {
    console.error('Error creating template zip:', error);
    throw error;
  }
}