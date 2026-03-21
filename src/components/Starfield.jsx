import React, { useMemo } from 'react';
import '../styles/Starfield.css';

// Generate once on module load — never re-renders
const STARS = Array.from({ length: 180 }, (_, i) => ({
  id: i,
  left:     `${Math.random() * 100}%`,
  top:      `${Math.random() * 100}%`,
  size:     Math.random() * 2.4 + 0.3,
  delay:    `${(Math.random() * 8).toFixed(2)}s`,
  duration: `${(Math.random() * 4 + 3).toFixed(2)}s`,
  color:    i % 11 === 0 ? '#00D4FF'
          : i % 17 === 0 ? '#FF2D87'
          : i % 23 === 0 ? '#FFE600'
          : '#ffffff',
}));

const METEORS = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left:     `${(Math.random() * 120 - 10).toFixed(2)}%`,
  top:      `${(Math.random() * 60  - 20).toFixed(2)}%`,
  delay:    `${(Math.random() * 14).toFixed(2)}s`,
  duration: `${(Math.random() * 2 + 1.5).toFixed(2)}s`,
  length:   Math.random() * 140 + 60,
  width:    Math.random() * 1.5 + 0.5,
  color:    ['rgba(255,255,255,0.9)','rgba(255,230,0,0.85)','rgba(0,212,255,0.85)','rgba(255,45,135,0.8)'][i % 4],
}));

const SPARKLES = Array.from({ length: 38 }, (_, i) => ({
  id: i,
  left:     `${Math.random() * 100}%`,
  top:      `${Math.random() * 100}%`,
  size:     Math.random() * 12 + 4,
  delay:    `${(Math.random() * 10).toFixed(2)}s`,
  duration: `${(Math.random() * 3 + 2).toFixed(2)}s`,
}));

export default function StarField() {
  return (
    <div className="sf-root" aria-hidden="true">

      {/* ── Deep nebula color washes ── */}
      <div className="sf-nebula sf-n1" />
      <div className="sf-nebula sf-n2" />
      <div className="sf-nebula sf-n3" />

      {/* ── Twinkling stars ── */}
      <div className="sf-stars">
        {STARS.map(s => (
          <span
            key={s.id}
            className="sf-star"
            style={{
              left:              s.left,
              top:               s.top,
              width:             `${s.size}px`,
              height:            `${s.size}px`,
              background:        s.color,
              boxShadow:         `0 0 ${s.size * 3}px ${s.color}`,
              animationDelay:    s.delay,
              animationDuration: s.duration,
            }}
          />
        ))}
      </div>

      {/* ── Shooting meteors (whole layer rotated -35deg) ── */}
      <div className="sf-meteors">
        {METEORS.map(m => (
          <span
            key={m.id}
            className="sf-meteor"
            style={{
              left:              m.left,
              top:               m.top,
              width:             `${m.length}px`,
              height:            `${m.width}px`,
              background:        `linear-gradient(90deg, ${m.color}, transparent)`,
              boxShadow:         `0 0 6px ${m.color}`,
              animationDelay:    m.delay,
              animationDuration: m.duration,
            }}
          />
        ))}
      </div>

      {/* ── Sparkle crosses ── */}
      <div className="sf-sparkles">
        {SPARKLES.map(s => (
          <span
            key={s.id}
            className="sf-sparkle"
            style={{
              left:              s.left,
              top:               s.top,
              width:             `${s.size}px`,
              height:            `${s.size}px`,
              animationDelay:    s.delay,
              animationDuration: s.duration,
            }}
          />
        ))}
      </div>

    </div>
  );
}