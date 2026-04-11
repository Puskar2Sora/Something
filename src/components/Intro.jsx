import React, { useEffect, useRef, useState } from 'react';
import '../styles/Intro.css';

const getIntroProfile = () => {
  if (typeof window === 'undefined') {
    return { skip: false, particleCount: 90, phaseDelay: 450 };
  }

  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const constrained = reducedMotion || connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || '');

  return {
    skip: constrained,
    particleCount: constrained ? 45 : 90,
    phaseDelay: constrained ? 180 : 450,
  };
};

const LOAD_STEPS = [
  { pct: 18, label: 'INITIALISING UNIVERSE...',  delay: 300  },
  { pct: 40, label: 'TEARING THE VEIL...',        delay: 450  },
  { pct: 63, label: 'SUMMONING CHARACTERS...',    delay: 380  },
  { pct: 81, label: 'LOADING MEMORIES...',        delay: 420  },
  { pct: 95, label: 'ALMOST THERE...',            delay: 350  },
  { pct: 100, label: 'ACCESS GRANTED',            delay: 280  },
];

const LOAD_STEP_SPEED_MULTIPLIER = 0.8;
const LOAD_COMPLETE_HOLD_MS = 1800;

const CHARS = ['🕷️','🏴‍☠️','🧙','🦸','🦹','⚔️','🧛','🤖'];

export default function Intro({ onDone = () => {} }) {
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
    const profile = getIntroProfile();
    const canvas = canvasRef.current;
    if (!canvas || profile.skip) return undefined;

    const ctx = canvas.getContext('2d', { alpha: true });
    let W, H, particles = [], raf;

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const createParticle = (init = true) => ({
      x: Math.random() * W,
      y: init ? Math.random() * H : H + 10,
      vx: (Math.random() - 0.5) * 0.6,
      vy: -(Math.random() * 1.2 + 0.4),
      r: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.7 + 0.2,
      color: ['#FFE600', '#E8192C', '#00D4FF', '#FF2D87', '#fff'][Math.floor(Math.random() * 5)],
    });

    const resetParticle = (particle, init = false) => Object.assign(particle, createParticle(init));
    const updateParticle = (particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.alpha -= 0.003;
      if (particle.alpha <= 0 || particle.y < -10) resetParticle(particle);
    };
    const drawParticle = (particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.alpha;
      ctx.fill();
    };

    for (let i = 0; i < profile.particleCount; i++) particles.push(createParticle(true));

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.globalAlpha = 1;
      particles.forEach((particle) => {
        updateParticle(particle);
        drawParticle(particle);
      });
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
    const profile = getIntroProfile();

    if (profile.skip) {
      onDone();
      return undefined;
    }

    const timers = [];
    const register = (timer) => {
      timers.push(timer);
      return timer;
    };

    register(setTimeout(() => setPhase('reveal'), 80));

    register(setTimeout(() => {
      setPhase('loading');
      let elapsed = 0;
      LOAD_STEPS.forEach((step) => {
        register(setTimeout(() => {
          targetRef.current = step.pct;
          setPct(step.pct);
          setLabel(step.label);
        }, elapsed += Math.max(200, Math.round(step.delay * LOAD_STEP_SPEED_MULTIPLIER))));
      });

      const totalDelay =
        LOAD_STEPS.reduce((a, s) => a + Math.max(200, Math.round(s.delay * LOAD_STEP_SPEED_MULTIPLIER)), 0) +
        profile.phaseDelay +
        LOAD_COMPLETE_HOLD_MS;
      register(setTimeout(() => setPhase('slam'), totalDelay));
    }, 420));

    return () => { timers.forEach(clearTimeout); };
  }, [onDone]);

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