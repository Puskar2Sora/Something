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

// Royal parchment ornaments — floating on ivory background
const ORNAMENTS = ['⚜', '◆', '✦', '⚜', '◆', '✦', '⚜', '◆'];

export default function Intro({ onDone }) {
  const canvasRef   = useRef(null);
  const [pct, setPct]         = useState(0);
  const [label, setLabel]     = useState('');
  const [counter, setCounter] = useState(0);
  const [phase, setPhase]     = useState('idle');

  const targetRef = useRef(0);
  const dispRef   = useRef(0);
  const rafRef    = useRef(null);

  /* ─── Particle canvas — gold dust & parchment sparks ─── */
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
        this.vx    = (Math.random() - 0.5) * 0.4;
        this.vy    = -(Math.random() * 1.2 + 0.3);
        this.r     = Math.random() * 2 + 0.5;
        this.alpha = Math.random() * 0.5 + 0.10;
        // Warm ivory palette — gold dust, amber, maroon rose, cream
        this.color = [
          '#C9973A', '#E8C76A', '#8B6410',
          '#D4788A', '#9B2D40', '#F2EAD5',
          '#EDD4A0', '#C9973A',
        ][Math.floor(Math.random() * 8)];
        this.twinkle = Math.random() > 0.65;
        this.twinkleSpeed = Math.random() * 0.05 + 0.02;
        this.twinkleOffset = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.0015;
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

    for (let i = 0; i < 180; i++) particles.push(new Particle());

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
    const t0 = setTimeout(() => setPhase('reveal'), 200);

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

      {/* ── Background layers — warm ivory parchment ── */}
      <div className="intro-bg-base" />
      <div className="intro-grid" />
      <div className="intro-beam" />
      <div className="intro-vignette" />

      {/* Warm ambient glow orbs */}
      <div className="intro-orb orb-purple" />
      <div className="intro-orb orb-orange" />
      <div className="intro-orb orb-cyan" />

      {/* Floating royal ornaments — on parchment */}
      <div className="intro-bg-chars" aria-hidden="true">
        {ORNAMENTS.map((c, i) => (
          <span key={i} className={`bg-char bg-char-${i}`}>{c}</span>
        ))}
      </div>

      {/* Parchment kingdom silhouette */}
      <div className="intro-kingdom" />

      {/* ═══ MAIN CONTENT ═══ */}
      <div className={`intro-content ${isReveal ? 'content-visible' : ''}`}>

        {/* Royal proclamation eyebrow — big, letter-by-letter animated */}
        <div className="intro-eyebrow">

          {/* Top filigree rule */}
          <div className="eyebrow-rule">
            <span className="eyebrow-line" />
            <span className="eyebrow-gem">⚜</span>
            <span className="eyebrow-line" />
          </div>

          {/* Institute name — each letter drops in individually */}
          <div className="eyebrow-text-wrap">
            <div className="eyebrow-text">
              {['TECHNO', 'BENGAL', 'INSTITUTE', 'OF', 'TECHNOLOGY'].map((word, wi) => {
                const prevLetters = ['TECHNO', 'BENGAL', 'INSTITUTE', 'OF', 'TECHNOLOGY']
                  .slice(0, wi)
                  .reduce((acc, w) => acc + w.length, 0) + wi;
                return (
                  <span key={wi} className="eyebrow-word">
                    {word.split('').map((ch, ci) => (
                      <span
                        key={ci}
                        className="ey-ch"
                        style={{ '--li': prevLetters + ci }}
                      >{ch}</span>
                    ))}
                  </span>
                );
              })}
            </div>
            <br/>
            <div className="eyebrow-sub">✦ Presents ✦</div>
          </div>

          {/* Bottom thin rule */}
          <div className="eyebrow-rule eyebrow-rule-bottom">
            <span className="eyebrow-line" />
            <span className="eyebrow-gem" style={{ fontSize: '9px', animation: 'none', opacity: 0.5 }}>◆</span>
            <span className="eyebrow-line" />
          </div>

        </div>

        {/* Main title block — matches Hero title style */}
         <div className="rh-title-block">
            <div className="rh-title-year">
              <span className="rh-yr-2k">LITHIUM</span>
              <br/>
              <span className="rh-yr-2k">2K</span>
              <span className="rh-yr-26">26</span>
            </div>
          </div>


        {/* Ornamental divider — matches Hero divider */}
        <div className="intro-divider">
          <span className="intro-div-line" />
          <span className="intro-div-gem">◆</span>
          <span className="intro-div-line" />
        </div>

        {/* Theme decree — DREAMSCAPE in fantasy royal style */}
        <div className="intro-theme">

<div className="rh-title-block">
            <div className="rh-title-year">
              <span className="rh-theme-name">DREAMSCAPE</span>
              <br/>
            </div>
          </div>

        </div>

        {/* ═══ LOADER ═══ */}
        <div className={`intro-loader ${isLoading ? 'loader-visible' : ''}`}>

          {/* Royal counter */}
          <div className="rh-theme-name">
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

        
        </div>
      </div>


      {/* Royal curtain slam panels */}
      <div className={`slam-panel slam-top ${isSlam ? 'slam-active' : ''}`} />
      <div className={`slam-panel slam-bot ${isSlam ? 'slam-active' : ''}`} />

    </div>
  );
}