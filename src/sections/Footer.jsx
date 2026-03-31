import React, { useState, useEffect, useRef } from 'react';
import '../styles/Footer.css';
import Floatchar from '../components/Floatchar';


const CHARACTERS = [
  { emoji: '🕷️', name: 'Spider-Man',  universe: 'Marvel'       },
  { emoji: '🏴‍☠️', name: 'Pirate',      universe: 'Caribbean'     },
  { emoji: '🧙',  name: 'Sorcerer',    universe: 'Fantasy'       },
  { emoji: '🦸',  name: 'Hero',        universe: 'DC Universe'   },
  { emoji: '🦹',  name: 'Villain',     universe: 'Dark Side'     },
  { emoji: '⚔️',  name: 'Knight',      universe: 'Medieval'      },
  { emoji: '🧛',  name: 'Vampire',     universe: 'Gothic'        },
  { emoji: '🤖',  name: 'Cyborg',      universe: 'Future World'  },
  { emoji: '🧝',  name: 'Elf',         universe: 'Middle Earth'  },
  { emoji: '🐉',  name: 'Dragon',      universe: 'GoT'           },
];

const NAV = [
  { label: 'Home',    href: '#home'    },
  { label: 'About',   href: '#about'   },
  { label: 'Events',  href: '#events'  },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Venue',   href: '#venue'   },
  { label: 'Contact', href: '#contact' },   
];

const STATS = [
  { num: '10+',  label: 'Events',      color: '#FFE600' },
  { num: '500+', label: 'Students',    color: '#FF2D87' },
  { num: '6',    label: 'Genres',      color: '#00D4FF' },
  { num: '1',    label: 'Epic Night',  color: '#00FF88' },
];

const SOCIALS = [
  { icon: '📸', label: 'Instagram', handle: '@lithium2k26',         href: '#' },
  { icon: '💬', label: 'WhatsApp',  handle: 'Join the Group',       href: '#' },
  { icon: '✉️', label: 'Email',     handle: 'lithium@bit.edu.in',   href: 'mailto:lithium@bit.edu.in' },
  { icon: '📘', label: 'Facebook',  handle: 'LITHIUM 2K26',         href: '#' },
];

/* Stable star/meteor data — generated once */
const STARS = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  left:     `${(Math.random() * 100).toFixed(2)}%`,
  top:      `${(Math.random() * 100).toFixed(2)}%`,
  size:     Math.random() * 2.2 + 0.3,
  delay:    `${(Math.random() * 7).toFixed(2)}s`,
  duration: `${(Math.random() * 4 + 2.5).toFixed(2)}s`,
  color:    i % 9 === 0 ? '#00D4FF' : i % 15 === 0 ? '#FF2D87' : i % 22 === 0 ? '#FFE600' : '#ffffff',
}));

const METEORS = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left:     `${(Math.random() * 120 - 10).toFixed(2)}%`,
  top:      `${(Math.random() * 50 - 10).toFixed(2)}%`,
  delay:    `${(Math.random() * 16).toFixed(2)}s`,
  duration: `${(Math.random() * 2 + 1.5).toFixed(2)}s`,
  length:   Math.random() * 130 + 60,
  color:    ['rgba(255,255,255,0.85)', 'rgba(255,230,0,0.8)', 'rgba(0,212,255,0.8)', 'rgba(255,45,135,0.75)'][i % 4],
}));

const PHRASE = 'BEYOND THE VEIL';

export default function Footer() {
  const [hovered, setHovered]   = useState(null);
  const [typed,   setTyped]     = useState('');
  const [visible, setVisible]   = useState(false);
  const sectionRef              = useRef(null);

  /* Intersection observer — animate in when visible */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  /* Typewriter loop */
  useEffect(() => {
    let i = 0, forward = true, timer;
    const tick = () => {
      if (forward) {
        i++;
        setTyped(PHRASE.slice(0, i));
        if (i === PHRASE.length) { forward = false; timer = setTimeout(tick, 2400); return; }
      } else {
        i--;
        setTyped(PHRASE.slice(0, i));
        if (i === 0) { forward = true; timer = setTimeout(tick, 500); return; }
      }
      timer = setTimeout(tick, forward ? 100 : 55);
    };
    timer = setTimeout(tick, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className={`ft ${visible ? 'ft-visible' : ''}`} ref={sectionRef}>

      {/* ── BG STARS + METEORS ── */}
      <div className="ft-sky" aria-hidden>
        <div className="ft-meteor-layer">
          {METEORS.map(m => (
            <span key={m.id} className="ft-meteor" style={{
              left: m.left, top: m.top,
              width: `${m.length}px`,
              background: `linear-gradient(90deg, ${m.color}, transparent)`,
              animationDelay: m.delay,
              animationDuration: m.duration,
            }} />
          ))}
        </div>
        {STARS.map(s => (
          <span key={s.id} className="ft-star" style={{
            left: s.left, top: s.top,
            width: `${s.size}px`, height: `${s.size}px`,
            background: s.color,
            boxShadow: `0 0 ${s.size * 3}px ${s.color}`,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }} />
        ))}
      </div>

      {/* Nebula washes */}
      <div className="ft-nb ft-nb1" />
      <div className="ft-nb ft-nb2" />
      <div className="ft-nb ft-nb3" />

      {/* ── ANIMATED TOP BORDER ── */}
      <div className="ft-topbar">
        <div className="ft-topbar-track" />
        <div className="ft-topbar-glow" />
      </div>

      <div className="ft-inner">
<Floatchar
  src="/assets/chars/miles.png"
  alt="Miles Morales"
  size={350}
  bottom="70%"
  right="53%"
  animation="float"
  glowColor="#FF2D87"
/>

        {/* ════════════════════════════
            BRAND HERO
        ════════════════════════════ */}
        <div className="ft-brand-section">
          <div className="ft-brand-center">
            {/* Eyebrow */}
            
            {/* Main wordmark */}
            <h2 className="ft-wordmark">LITHIUM</h2>

            <div className="ft-year-row">
              <span className="ft-yr-2k">2K</span>
              <span className="ft-yr-26">26</span>
            </div>

            {/* Typewriter theme */}
            <div className="ft-tw">
              <span className="ft-tw-label">✦ THEME ✦</span>
              <div className="ft-tw-screen">
                <span className="ft-tw-txt">{typed}</span>
                <span className="ft-tw-caret">|</span>
              </div>
            </div>

            {/* Tagline */}
            <p className="ft-tagline">
              Step into any universe.<br />Wear any face. Become the legend.
            </p>
          </div>
        </div>
        
      
        {/* ════════════════════════════
            INFO GRID
        ════════════════════════════ */}
        <div className="ft-grid">
          {/* Navigate */}
          <div className="ft-col">
            <div className="ft-col-hd">
              <span className="ft-col-hd-bar" />
              NAVIGATE
            </div>
            {NAV.map(l => (
              <a key={l.label} href={l.href} className="ft-navlink">
                <span className="ft-navlink-arrow">›</span>
                {l.label}
              </a>
            ))}
          </div>

          {/* Event details */}
          <div className="ft-col ft-col-event">
            <div className="ft-col-hd">
              <span className="ft-col-hd-bar" />
              THE EVENT
            </div>
            {[
              { icon: '📅', lbl: 'DATE',    val: 'April 25, 2026'                              },
              { icon: '🕐', lbl: 'TIME',    val: '12:00 PM onwards'                            },
              { icon: '📍', lbl: 'VENUE',   val: 'Laban Hrad Mancha BD Auditorium, Kolkata'    },
              { icon: '🎭', lbl: 'DRESS',   val: 'Any Character · Any Universe'               },
              { icon: '🏫', lbl: 'HOST',    val: 'Techno Bengal Institute of Technology'       },
            ].map((r, i) => (
              <div key={i} className="ft-event-row">
                <span className="ft-ev-ico">{r.icon}</span>
                <div>
                  <span className="ft-ev-lbl">{r.lbl}</span>
                  <span className="ft-ev-val">{r.val}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Connect */}
          <div className="ft-col">
            <div className="ft-col-hd">
              <span className="ft-col-hd-bar" />
              CONNECT
            </div>
            {SOCIALS.map((s, i) => (
              <a key={i} href={s.href} className="ft-social" target="_blank" rel="noreferrer">
                <span className="ft-soc-ico">{s.icon}</span>
                <div className="ft-soc-txt">
                  <span className="ft-soc-lbl">{s.label}</span>
                  <span className="ft-soc-hdl">{s.handle}</span>
                </div>
                <span className="ft-soc-arr">›</span>
              </a>
            ))}
          </div>
        </div>

        {/* ════════════════════════════
            BOTTOM CREDIT
        ════════════════════════════ */}
        <div className="ft-bottom">
          <div className="ft-bottom-line" />

          <div className="ft-credit-row">
            

            <div className="ft-divider">
          <div className="ft-div-l" />
          <div className="ft-div-badge">
            <span className="ft-div-badge-txt">BEYOND THE VEIL</span>
          </div>
          <div className="ft-div-r" />
        </div>

            <p className="ft-copy">
              © 2026 Techno Bengal Institute of Technology
            </p>
          </div>
        </div>

      </div>

      {/* ── ANIMATED FLOOR BAR ── */}
      <div className="ft-floor" />

    </footer>
  );
}