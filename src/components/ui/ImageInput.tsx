import React from 'react';
import { Link, Upload, X, FolderOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ImageUpload } from './ImageUpload';

interface ImageInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  label?: string;
  templateId?: string;
  previewClassName?: string;
  urlPlaceholder?: string;
  pathPlaceholder?: string;
  hidePreview?: boolean;
  isRedirectUrl?: boolean;
}

export function ImageInput({ 
  value, 
  onChange, 
  className, 
  label,
  templateId = '',
  previewClassName,
  urlPlaceholder = "Ex: https://exemplo.com/imagem.jpg",
  pathPlaceholder = "Ex: images/logo.png",
  hidePreview = false,
  isRedirectUrl = false
}: ImageInputProps) {
  const [inputType, setInputType] = React.useState<'upload' | 'url' | 'path'>('upload');
  const [error, setError] = React.useState(false);
  const [previewUrl, setPreviewUrl] = React.useState<string>('');
  
  // Set default input type based on isRedirectUrl
  React.useEffect(() => {
    if (isRedirectUrl) {
      setInputType('url');
    }
  }, [isRedirectUrl]);

  const handleImageError = () => {
    setError(true);
  };

  const handleImageLoad = () => {
    setError(false);
  };

  React.useEffect(() => {
    if (value?.startsWith('http') || value?.startsWith('blob:')) {
      setPreviewUrl(value);
    }
  }, [value]);

  const handleClear = () => {
    onChange('');
    setError(false);
    setPreviewUrl('');
  };

  return (
    <div className={cn('space-y-3', className)}>
      {/* Header: Label + Type Toggle */}
      <div className="flex items-center justify-between gap-2">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className="flex gap-0.5 p-0.5 bg-gray-100 rounded-md">
          {!isRedirectUrl && <button
            onClick={() => {
              setInputType('upload');
              onChange('');
            }}
            className={cn(
              'flex items-center gap-1 px-1.5 py-1 rounded transition-colors',
              inputType === 'upload' ? 'bg-white shadow-sm' : 'hover:bg-white/50'
            )}
            title="Upload de arquivo"
          >
            <FolderOpen className="w-4 h-4 text-gray-600" />
            <span className="text-xs text-gray-600">Upload</span>
          </button>}
          <button
            onClick={() => {
              setInputType('url');
              onChange('');
            }}
            className={cn(
              'flex items-center gap-1 px-2 py-1.5 rounded transition-colors',
              inputType === 'url' ? 'bg-white shadow-sm' : 'hover:bg-white/50'
            )}
            title="URL externa"
          >
            <Link className="w-4 h-4 text-gray-600" />
            <span className="text-xs text-gray-600">URL</span>
          </button>
          <button
            onClick={() => {
              setInputType('path');
              onChange('');
            }}
            className={cn(
              'flex items-center gap-1 px-2 py-1.5 rounded transition-colors',
              inputType === 'path' ? 'bg-white shadow-sm' : 'hover:bg-white/50'
            )}
            title="Caminho local"
          >
            <Upload className="w-4 h-4 text-gray-600" />
            <span className="text-xs text-gray-600">Local</span>
          </button>
        </div>
      </div>

      {inputType === 'upload' ? (
        <ImageUpload
          value={value}
          onChange={onChange}
          templateId={templateId}
          className="overflow-hidden"
        />
      ) : (
        <div className="relative">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={inputType === 'url' ? urlPlaceholder : pathPlaceholder}
            className={cn(
              "w-full rounded-md shadow-sm text-sm p-3 pr-16",
              "border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
              error && "border-red-300 focus:border-red-500 focus:ring-red-500"
            )}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            {value && (
              <button
                onClick={handleClear}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                title="Limpar"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Preview */}
      {(value || previewUrl) && !hidePreview && inputType === 'url' && !isRedirectUrl && (
        <div 
          className={cn(
            "group relative bg-gray-50 rounded-lg overflow-hidden",
            error ? "border-2 border-dashed border-red-200" : "border border-gray-200",
            previewClassName || "aspect-video h-16"
          )}
        >
          {error ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-red-400 p-4">
              <span className="text-sm text-center">
                Não foi possível carregar a imagem.
                <br />
                Verifique se a URL está correta.
              </span>
            </div>
          ) : (
            <img
              src={previewUrl || value}
              alt="Preview"
              className="w-full h-full object-contain"
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          )}

          {/* Hover Overlay */}
          <div className={cn(
            "absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 transition-opacity",
            "flex items-center justify-center",
            "group-hover:opacity-100"
          )}>
            {value?.startsWith('http') && (
              <a 
                href={value} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 h-9 bg-white rounded-md flex items-center text-sm font-medium
                  text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Ver imagem
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}