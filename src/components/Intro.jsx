import React, { useEffect, useRef, useState } from 'react';
import '../styles/Intro.css';

const LOAD_STEPS = [
  { pct: 15, label: 'LIGHTING THE ROYAL LANTERNS...',  delay: 320  },
  { pct: 38, label: 'UNFURLING THE KINGDOM SCROLL...', delay: 460  },
  { pct: 60, label: 'SUMMONING THE COURT...',           delay: 390  },
  { pct: 79, label: 'ADORNING THE GREAT HALL...',       delay: 430  },
  { pct: 94, label: 'THE KINGDOM AWAITS...',            delay: 360  },
  { pct: 100, label: '✦  ENTER THE REALM  ✦',          delay: 290  },
];

// Lantern emojis — rising toward the sky like in Tangled
const LANTERNS = ['🏮', '🕯️', '🏮', '✨', '🏮', '🕯️', '🏮', '✨'];

export default function Intro({ onDone }) {
  const canvasRef   = useRef(null);
  const [pct, setPct]         = useState(0);
  const [label, setLabel]     = useState('');
  const [counter, setCounter] = useState(0);
  const [phase, setPhase]     = useState('idle');

  const targetRef = useRef(0);
  const dispRef   = useRef(0);
  const rafRef    = useRef(null);

  /* ─── Particle canvas — gold dust & sparks ─── */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    let W, H, particles = [], raf;

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(true); }
      reset(init = false) {
        this.x     = Math.random() * W;
        this.y     = init ? Math.random() * H : H + 10;
        this.vx    = (Math.random() - 0.5) * 0.5;
        this.vy    = -(Math.random() * 1.5 + 0.5);
        this.r     = Math.random() * 2 + 0.5;
        this.alpha = Math.random() * 0.8 + 0.15;
        // Gold dust, amber sparks, silver stars
        this.color = [
          '#FFD166', '#F2D580', '#D4A843',
          '#FFF5C8', '#E8A840', '#C97BA8',
          '#ffffff',
        ][Math.floor(Math.random() * 7)];
        this.twinkle = Math.random() > 0.7;
        this.twinkleSpeed = Math.random() * 0.05 + 0.02;
        this.twinkleOffset = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.002;
        if (this.alpha <= 0 || this.y < -10) this.reset();
      }
      draw(t) {
        let a = this.alpha;
        if (this.twinkle) {
          a *= 0.5 + 0.5 * Math.sin(t * this.twinkleSpeed + this.twinkleOffset);
        }
        ctx.beginPath();
        // Diamond star shapes for bigger particles
        if (this.r > 1.5) {
          const s = this.r * 1.5;
          ctx.moveTo(this.x, this.y - s);
          ctx.lineTo(this.x + s * 0.4, this.y);
          ctx.lineTo(this.x, this.y + s);
          ctx.lineTo(this.x - s * 0.4, this.y);
          ctx.closePath();
        } else {
          ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        }
        ctx.fillStyle = this.color;
        ctx.globalAlpha = a;
        ctx.fill();
      }
    }

    for (let i = 0; i < 200; i++) particles.push(new Particle());

    let t = 0;
    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.globalAlpha = 1;
      t++;
      particles.forEach(p => { p.update(); p.draw(t); });
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  /* ─── Smooth counter tick ─── */
  useEffect(() => {
    const tick = () => {
      const t = targetRef.current;
      const d = dispRef.current;
      if (d < t) {
        const next = Math.min(d + Math.ceil((t - d) * 0.08 + 1), t);
        dispRef.current = next;
        setCounter(next);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* ─── Sequencer ─── */
  useEffect(() => {
    // Logo reveal
    const t0 = setTimeout(() => setPhase('reveal'), 200);

    // Loading begins after logo animation
    const t1 = setTimeout(() => {
      setPhase('loading');
      let elapsed = 0;
      const timers = LOAD_STEPS.map(step => {
        const t = setTimeout(() => {
          targetRef.current = step.pct;
          setPct(step.pct);
          setLabel(step.label);
        }, elapsed += step.delay);
        return t;
      });

      const totalDelay = LOAD_STEPS.reduce((a, s) => a + s.delay, 0) + 800;
      const tExit = setTimeout(() => setPhase('slam'), totalDelay);

      return () => { timers.forEach(clearTimeout); clearTimeout(tExit); };
    }, 1300);

    return () => { clearTimeout(t0); clearTimeout(t1); };
  }, []);

  /* ─── Slam → onDone ─── */
  useEffect(() => {
    if (phase !== 'slam') return;
    const t = setTimeout(onDone, 1150);
    return () => clearTimeout(t);
  }, [phase, onDone]);

  const isReveal  = phase === 'reveal'  || phase === 'loading' || phase === 'slam';
  const isLoading = phase === 'loading' || phase === 'slam';
  const isSlam    = phase === 'slam';

  return (
    <div className={`intro ${isSlam ? 'intro-slam' : ''}`}>
      {/* Gold dust particle canvas */}
      <canvas ref={canvasRef} className="intro-canvas" />

      {/* Background layers */}
      <div className="intro-bg-base" />
      <div className="intro-grid" />
      <div className="intro-vignette" />

      {/* Ambient glow orbs */}
      <div className="intro-orb orb-purple" />
      <div className="intro-orb orb-orange" />
      <div className="intro-orb orb-cyan" />

      {/* Rising lanterns */}
      <div className="intro-bg-chars">
        {LANTERNS.map((c, i) => (
          <span key={i} className={`bg-char bg-char-${i}`}>{c}</span>
        ))}
      </div>

      {/* Kingdom silhouette */}
      <div className="intro-kingdom" />

      {/* ═══ MAIN CONTENT ═══ */}
      <div className={`intro-content ${isReveal ? 'content-visible' : ''}`}>

        {/* Royal proclamation eyebrow */}
        <div className="intro-eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">✦ TECHNO BENGAL INSTITUTE OF TECHNOLOGY PRESENTS ✦</span>
          <span className="eyebrow-line" />
        </div>



        {/* Theme decree */}
        <div className="intro-theme">
          <span className="theme-dash" />
          <span className="theme-text">DREAMSCAPE</span>
          <span className="theme-dash" />
        </div>

        {/* ═══ LOADER ═══ */}
        <div className={`intro-loader ${isLoading ? 'loader-visible' : ''}`}>

          {/* Royal counter */}
          <div className="loader-counter">
            <span className="counter-number">{String(counter).padStart(2, '0')}</span>
            <span className="counter-pct">%</span>
          </div>

          {/* Scroll progress bar */}
          <div className="loader-bar-outer">
            <div className="bar-notch notch-l" />
            <div className="bar-notch notch-r" />
            <div className="loader-bar-track">
              <div className="loader-bar-fill" style={{ width: `${pct}%` }}>
                <div className="bar-shine" />
              </div>
              {[25, 50, 75].map(t => (
                <div
                  key={t}
                  className={`bar-tick ${pct >= t ? 'tick-on' : ''}`}
                  style={{ left: `${t}%` }}
                />
              ))}
            </div>
          </div>

          {/* Status label */}
          <div className="loader-status">
            <span className={`status-dot ${pct === 100 ? 'dot-green' : ''}`} />
            <span className="status-text">{label}</span>
          </div>
        </div>
      </div>

      {/* Royal curtain slam panels */}
      <div className={`slam-panel slam-top ${isSlam ? 'slam-active' : ''}`} />
      <div className={`slam-panel slam-bot ${isSlam ? 'slam-active' : ''}`} />
    </div>
  );
}