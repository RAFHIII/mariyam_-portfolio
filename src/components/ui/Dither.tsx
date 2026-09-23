'use client';
import React from 'react';

export default function Dither({
  className = '',
  opacity = 0.5,
  color = '#000000',
}: {
  className?: string;
  opacity?: number;
  color?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-0 ${className}`} style={{ opacity }}>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="dither-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.5 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#dither-filter)" fill={color} />
      </svg>
    </div>
  );
}
