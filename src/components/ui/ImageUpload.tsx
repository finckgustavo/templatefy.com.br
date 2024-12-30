import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { uploadImage } from '@/lib/storage';

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  label?: string;
  templateId: string;
}

export function ImageUpload({
  value,
  onChange,
  className,
  label,
  templateId
}: ImageUploadProps) {
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      const file = acceptedFiles[0];
      if (!file) return;

      const { previewUrl } = await uploadImage(file, templateId);
      onChange(previewUrl);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Error uploading image');
    }
  }, [onChange, templateId]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp']
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false
  });

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      <div
        {...getRootProps()}
        className={cn(
          'border-2 border-dashed rounded-lg p-2 transition-colors min-h-[60px] max-h-[80px]',
          isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300',
          'hover:border-indigo-500 cursor-pointer'
        )}
      >
        <input {...getInputProps()} />
        
        {value ? (
          <div className="relative">
            <img
              src={value}
              alt="Preview"
              className="w-full h-[60px] object-contain rounded-lg"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                onChange('');
              }}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm hover:bg-gray-50"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        ) : (
          <div className="text-center">
            <Upload className="mx-auto h-6 w-6 text-gray-400" />
            <p className="text-xs text-gray-600">
              Arraste uma imagem ou clique para selecionar
            </p>
            <p className="text-xs text-gray-500">
              PNG, JPG, GIF até 5MB
            </p>
          </div>
        )}
      </div>
    </div>
  );
}