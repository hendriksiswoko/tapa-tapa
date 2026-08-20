"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";

type ImageCardProps = {
  src?: string | null;
  alt: string;
  placeholderLabel?: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  rounded?: string;
};

function Placeholder({
  alt,
  placeholderLabel,
  className,
  rounded,
}: {
  alt: string;
  placeholderLabel?: string;
  className: string;
  rounded: string;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border-subtle bg-background-soft ${rounded} ${className}`}
      role="img"
      aria-label={`Placeholder image: ${alt}`}
    >
      <ImageOff className="h-6 w-6 text-foreground-secondary/50" aria-hidden="true" />
      <span className="px-4 text-center text-xs font-medium text-foreground-secondary/70">
        {placeholderLabel ?? alt}
      </span>
    </div>
  );
}

export default function ImageCard({
  src,
  alt,
  placeholderLabel,
  className = "",
  fill = true,
  width,
  height,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  rounded = "rounded-2xl",
}: ImageCardProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <Placeholder alt={alt} placeholderLabel={placeholderLabel} className={className} rounded={rounded} />
    );
  }

  if (fill) {
    return (
      <div className={`relative overflow-hidden ${rounded} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-full object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
