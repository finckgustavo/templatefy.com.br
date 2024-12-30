import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
  multiline?: boolean;
  rows?: number;
}

export function TextInput({ 
  label,
  error,
  className,
  multiline = false,
  rows = 3,
  value,
  onChange,
  ...props
}: TextInputProps) {
  const handleClear = () => {
    const event = {
      target: { value: '' }
    } as React.ChangeEvent<HTMLInputElement>;
    onChange?.(event);
  };

  const inputClassName = cn(
    "w-full rounded-md shadow-sm text-sm p-3 pr-10",
    "border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
    error && "border-red-300 focus:border-red-500 focus:ring-red-500",
    className
  );

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      
      <div className="relative">
        {multiline ? (
          <textarea
            value={value}
            onChange={onChange}
            rows={rows}
            className={inputClassName}
            {...props}
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={onChange}
            className={inputClassName}
            {...props}
          />
        )}

        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
            title="Limpar"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}