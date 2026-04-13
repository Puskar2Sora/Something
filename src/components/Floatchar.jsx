import React from 'react';
import '../styles/Floatchar.css';

/**
 * FloatChar — Reusable floating character image
 * Works exactly like SpiderHang but for any image with no background
 *
 * Usage:
 *   import FloatChar from '../components/FloatChar';
 *
 *   <FloatChar
 *     src="/assets-optimized/chars/miles.webp"
 *     alt="Miles Morales"
 *     size={140}
 *     bottom="10%"
 *     right="5%"
 *     animation="float"     // float | swing | bob | spin-slow
 *     glowColor="#FF2D87"
 *     delay="0s"
 *   />
 */
export default function FloatChar({
  src,
  alt = 'character',
  className = '',
  size = 140,
  top,
  bottom,
  left,
  right,
  animation = 'float',   // float | swing | bob | pulse
  glowColor = '#FFE600',
  delay = '0s',
  flip = false,          // mirror horizontally
  zIndex = 10,
  priority = false,
}) {
  return (
    <div
      className={`fc-root fc-anim-${animation} ${className}`.trim()}
      style={{
        width:           size,
        top,
        bottom,
        left,
        right,
        zIndex,
        animationDelay:  delay,
        transform:       flip ? 'scaleX(-1)' : undefined,
      }}
      aria-hidden="true"
    >
      <img
        src={src}
        alt={alt}
        className="fc-img"
        draggable="false"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'low'}
        decoding="async"
        style={{
          filter: `drop-shadow(0 0 14px ${glowColor}88)
                   drop-shadow(0 0 32px ${glowColor}33)
                   drop-shadow(3px 6px 12px rgba(0,0,0,0.7))`,
        }}
      />
    </div>
  );
}
