import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';
import StarField from '../components/Starfield';
import Spiderhang from '../components/Spiderhang';
import Floatchar from '../components/Floatchar';

const FLOATING_TAGS = [
  { text: 'DANCE', x: '72%', y: '20%', rotate: '-6deg', color: '#FFE600' },
  { text: 'MUSIC', x: '78%', y: '38%', rotate: '4deg', color: '#00D4FF' },
  { text: 'ajdie', x: '68%', y: '55%', rotate: '-8deg', color: '#FF2D87' },
  { text: 'DRAMA', x: '80%', y: '68%', rotate: '5deg', color: '#00FF88' },
  { text: 'BAND', x: '62%', y: '75%', rotate: '-3deg', color: '#FFE600' },
  { text: 'SURPrIZE', x: '74%', y: '85%', rotate: '7deg', color: '#00D4FF' },
];

const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const Hero = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    if (isTouchDevice()) {
      // On mobile: hide cursor, show floating sticker instead
      el.style.display = 'none';
      return;
    }

    // Desktop: direct transform updates avoid RAF restart lag and layout writes.
    const moveCursor = (x, y) => {
      el.style.opacity = '1';
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const onMove = (e) => {
      moveCursor(e.clientX, e.clientY);
    };

    const onLeave = () => {
      el.style.opacity = '0';
    };

    const onEnter = (e) => {
      el.style.opacity = '1';
      moveCursor(e.clientX, e.clientY);
    };

    document.body.style.cursor = 'none';
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave, { passive: true });
    window.addEventListener('pointerenter', onEnter, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('pointerenter', onEnter);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <section id="home" className="comic-hero">
      <Spiderhang />

        <StarField />
        <Floatchar
          src="/assets-optimized/chars/techno.webp"
          alt="Techno"
          size={43}
          bottom="89%"
          right="50%"
          animation="none"
          glowColor="#790a1b"
        />
        <Floatchar
          src="/assets-optimized/chars/bit.webp"
          alt="TBIT"
          size={44}
          bottom="89%"
          right="75%"
          animation="none"
          glowColor="#FF2D87"
        />
        <br/>
      {/* Spider-Man cursor — desktop only, zero-lag via RAF */}
      <div ref={cursorRef} className="spider-cursor">🕷️</div>

      {/* Dot texture overlay */}
      <div className="hero-dot-overlay" />

      {/* Diagonal slash background */}
      <div className="hero-slash" />

      {/* Left Content */}
      <div className="comic-hero-inner">
        <div className="comic-hero-left">
          {/* Eyebrow badge */}

          {/* Main Title */}
          <h1 className="comic-hero-title">
            <span className="title-line-1">LITHIUM</span>
            <span className="title-line-2">
              <span className="title-2k">2K</span>
              <span className="title-26">26</span>
            </span>
          </h1>

          {/* Theme */}
          <div className="comic-theme-wrap">
            <span className="comic-theme-label">THEME</span>
            <h2 className="comic-theme-title">BEYOND<br />THE VEIL</h2>
          </div>

          <p className="comic-hero-sub">
           Great Power Comes with , <br />
            <strong>Great Responsibility</strong>
          </p>


          {/* CTAs */}
          <div className="comic-hero-cta">
            <a href="#events" className="comic-btn comic-btn-yellow">
              <span className="btn-arrow">▶</span>
              Enter the Multiverse
            </a>
            <a href="#venue" className="comic-btn comic-btn-outline">
              Event Details
            </a>
          </div>
        </div>

        {/* Right: Intel Card + Floating Tags */}
        <div className="comic-hero-right">
          {/* Intel Card */}
          <div className="comic-intel-card">
            <div className="intel-card-header">OFFICIAL INTEL</div>
            <div className="intel-card-body">
              <div className="intel-label">TARGET TIMELINE LOCKED</div>
              <div className="intel-date">MAY' 7</div>
              <div className="intel-year">2026</div>
              <div className="intel-venue">Laban Hrad Mancha BD Auditorium, Kolkata</div>
              <div className="intel-status">
                <span className="status-dot" />
                ACCESS_GRANTED
              </div>
            </div>
          </div>

          {/* Floating event tags */}
          {FLOATING_TAGS.map((tag, i) => (
            <div
              key={i}
              className="comic-float-tag"
              style={{
                left: tag.x,
                top: tag.y,
                transform: `rotate(${tag.rotate})`,
                borderColor: tag.color,
                color: tag.color,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              {tag.text}
            </div>
          ))}

          {/* Spider-Man character sticker */}
                 </div>
      </div>

      {/* Bottom scroll hint */}
    </section>
  );
};

export default Hero;
