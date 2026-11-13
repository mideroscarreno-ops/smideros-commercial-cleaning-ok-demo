import { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackLabel,
  priority = false,
  width,
  height,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#142A3C] via-[#1C384F] to-[#147C75] text-white p-6 ${className}`}
      >
        <Building2 className="w-8 h-8 text-white/80 mb-3" aria-hidden="true" />
        <p className="text-sm font-medium text-white/90 text-center max-w-xs">
          {fallbackLabel || alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
