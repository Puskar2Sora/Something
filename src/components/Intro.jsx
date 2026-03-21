import React, { useEffect, useRef, useState } from 'react';
import '../styles/Intro.css';

const LOAD_STEPS = [
  { pct: 18, label: 'INITIALISING UNIVERSE...',  delay: 300  },
  { pct: 40, label: 'TEARING THE VEIL...',        delay: 450  },
  { pct: 63, label: 'SUMMONING CHARACTERS...',    delay: 380  },
  { pct: 81, label: 'LOADING MEMORIES...',        delay: 420  },
  { pct: 95, label: 'ALMOST THERE...',            delay: 350  },
  { pct: 100, label: 'ACCESS GRANTED',            delay: 280  },
];

const CHARS = ['🕷️','🏴‍☠️','🧙','🦸','🦹','⚔️','🧛','🤖'];

export default function Intro({ onDone }) {
  const canvasRef   = useRef(null);
  const [pct, setPct]         = useState(0);
  const [label, setLabel]     = useState('');
  const [counter, setCounter] = useState(0);
  const [phase, setPhase]     = useState('idle'); // idle > reveal > loading > slam

  const targetRef = useRef(0);
  const dispRef   = useRef(0);
  const rafRef    = useRef(null);

  /* ─── Particle canvas ─── */
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
        this.vx    = (Math.random() - 0.5) * 0.6;
        this.vy    = -(Math.random() * 1.2 + 0.4);
        this.r     = Math.random() * 1.8 + 0.4;
        this.alpha = Math.random() * 0.7 + 0.2;
        this.color = ['#FFE600','#E8192C','#00D4FF','#FF2D87','#fff'][Math.floor(Math.random()*5)];
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        this.alpha -= 0.003;
        if (this.alpha <= 0 || this.y < -10) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
      }
    }

    for (let i = 0; i < 160; i++) particles.push(new Particle());

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.globalAlpha = 1;
      particles.forEach(p => { p.update(); p.draw(); });
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  /* ─── Counter tick ─── */
  useEffect(() => {
    const tick = () => {
      const t = targetRef.current;
      const d = dispRef.current;
      if (d < t) {
        const next = Math.min(d + Math.ceil((t - d) * 0.1 + 1), t);
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
    // Phase 1: logo reveal after 200ms
    const t0 = setTimeout(() => setPhase('reveal'), 200);

    // Phase 2: start loading after logo animation finishes (1.2s)
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

      // Phase 3: slam exit after all steps + 700ms hold
      const totalDelay = LOAD_STEPS.reduce((a, s) => a + s.delay, 0) + 700;
      const tExit = setTimeout(() => setPhase('slam'), totalDelay);

      return () => { timers.forEach(clearTimeout); clearTimeout(tExit); };
    }, 1200);

    return () => { clearTimeout(t0); clearTimeout(t1); };
  }, []);

  /* ─── Slam → call onDone ─── */
  useEffect(() => {
    if (phase !== 'slam') return;
    // After slam animation completes (1.1s), call onDone
    const t = setTimeout(onDone, 1100);
    return () => clearTimeout(t);
  }, [phase, onDone]);

  const isReveal  = phase === 'reveal'  || phase === 'loading' || phase === 'slam';
  const isLoading = phase === 'loading' || phase === 'slam';
  const isSlam    = phase === 'slam';

  return (
    <div className={`intro ${isSlam ? 'intro-slam' : ''}`}>
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="intro-canvas" />

      {/* Deep background layers */}
      <div className="intro-bg-base" />
      <div className="intro-grid" />
      <div className="intro-vignette" />

      {/* Glow orbs */}
      <div className="intro-orb orb-purple" />
      <div className="intro-orb orb-orange" />
      <div className="intro-orb orb-cyan" />

      {/* Floating characters — background */}
      <div className="intro-bg-chars">
        {CHARS.map((c, i) => (
          <span key={i} className={`bg-char bg-char-${i}`}>{c}</span>
        ))}
      </div>

      {/* ═══ MAIN CONTENT ═══ */}
      <div className={`intro-content ${isReveal ? 'content-visible' : ''}`}>

        {/* Top eyebrow */}
        <div className="intro-eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">TECHNO BENGAL INSTITUTE OF TECHNOLOGY PRESENTS</span>
          <span className="eyebrow-line" />
        </div>

        {/* Logo block */}
        <div className="intro-logo">
          {/* Big glowing L */}
          <div className="logo-L-wrap">
            <span className="logo-L">L</span>
            <div className="logo-L-ring" />
            <div className="logo-L-ring ring-2" />
          </div>

          {/* Text beside L */}
          <div className="logo-text">
            <span className="logo-lithium">
              {'LITHIUM'.split('').map((ch, i) => (
                <span key={i} className="letter" style={{ '--li': i }}>{ch}</span>
              ))}
            </span>
            <br/>
            <span className="logo-year">2K26</span>
          </div>
        </div>

        {/* Theme line */}
        <div className="intro-theme">
          <span className="theme-dash">—</span>
          <span className="theme-text">BEYOND THE VEIL</span>
          <span className="theme-dash">—</span>
        </div>

        {/* ═══ LOADER ═══ */}
        <div className={`intro-loader ${isLoading ? 'loader-visible' : ''}`}>

          {/* Big counter */}
          <div className="loader-counter">
            <span className="counter-number">{String(counter).padStart(2,'0')}</span>
            <span className="counter-pct">%</span>
          </div>

          {/* Progress bar */}
          <div className="loader-bar-outer">
            {/* Comic notches */}
            <div className="bar-notch notch-l" />
            <div className="bar-notch notch-r" />

            <div className="loader-bar-track">
              <div className="loader-bar-fill" style={{ width: `${pct}%` }}>
                <div className="bar-shine" />
              </div>
              {/* Tick marks */}
              {[20,40,60,80].map(t => (
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

      {/* ═══ SLAM PANELS ═══ */}
      {/* Two panels: top and bottom slam to center, then exit */}
      <div className={`slam-panel slam-top ${isSlam ? 'slam-active' : ''}`} />
      <div className={`slam-panel slam-bot ${isSlam ? 'slam-active' : ''}`} />
    </div>
  );
}