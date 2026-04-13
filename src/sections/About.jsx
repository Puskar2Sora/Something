import React, { useEffect, useRef, useState } from 'react';
import '../styles/About.css';
import Floatchar from '../components/Floatchar';


const STATS = [
  { num: '500+', label: 'Students',    suffix: '',  color: '#FFE600' },
  { num: '10+',  label: 'Events',      suffix: '',  color: '#FF2D87' },
  { num: '6',    label: 'Genres',      suffix: '',  color: '#00D4FF' },
  { num: '1',    label: 'Epic Night',  suffix: '',  color: '#00FF88' },
];

const UNIVERSES = [
  { emoji: '🕷️', label: 'Spider-Verse' },
  { emoji: '🏴‍☠️', label: 'Caribbean'    },
  { emoji: '🧙',  label: 'Fantasy'      },
  { emoji: '🦸',  label: 'DC Universe'  },
  { emoji: '⚔️',  label: 'Medieval'     },
  { emoji: '🤖',  label: 'Future'       },
  { emoji: '🐉',  label: 'GoT'          },
  { emoji: '🧛',  label: 'Gothic'       },
];

/* Count-up hook */
function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const num = parseInt(target.replace(/\D/g, ''));
    if (!num) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

/* Single animated stat */
function StatItem({ stat, visible }) {
  const count = useCountUp(stat.num, 1600, visible);
  const suffix = stat.num.includes('+') ? '+' : '';
  return (
    <div className="ab-stat" style={{ '--sc': stat.color }}>
      <div className="ab-stat-bg" />
      <span className="ab-stat-num">
        {stat.num.replace(/\d+/, count)}{suffix !== '+' ? '' : ''}
      </span>
      <span className="ab-stat-lbl">{stat.label}</span>
      <div className="ab-stat-bar" />
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          setTimeout(() => setTextVisible(true), 300);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="ab-section" ref={sectionRef}>

      {/* ── DOT TEXTURE ── */}
      <div className="ab-dots" />

      {/* ── DIAGONAL SLASH ── */}
      
      {/* ── FLOATING PARTICLES ── */}
      <div className="ab-particles">
        {Array.from({ length: 20 }, (_, i) => (
          <span key={i} className="ab-particle" style={{ '--pi': i }} />
        ))}
      </div>


      <div className="ab-inner">

        {/* ════ LEFT COLUMN — WRITING ════ */}
        <div className={`ab-left ${visible ? 'ab-left-in' : ''}`}>

          <Floatchar
            className="ab-logo-fc"
            src="/assets/chars/logo.png"
            alt="Miles Morales"
            size={350}
            animation="float"
            glowColor="#FF2D87"
          />

          {/* Eyebrow */}
          <div className="ab-eyebrow">
            <span className="ab-ey-line" />
            <span className="ab-ey-txt" style={{ marginLeft: '20px' }}>✦ Who We Are ✦</span>
            <span className="ab-ey-line ab-ey-r" />
          </div>

          {/* Section title */}
          <div 
  className="ab-title-wrap" 
  style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    width: '100%' 
  }}
>
  <h2 className="ab-title" style={{ margin: 0 }}>
    {'ABOUT'.split('').map((ch, i) => (
      <span
        key={i}
        className="ab-title-ch"
        style={{ '--ti': i, display: 'inline-block' }}
      >
        {ch}
      </span>
    ))}
  </h2>
  <div className="ab-title-sub">LITHIUM 2K26</div>
</div>

          {/* Animated text paragraphs */}
          <div className="ab-text-block">
            <p className="ab-para ab-p1" style={{ '--di': 0 }}>
              <span className="ab-drop-cap">L</span>
              ITHIUM is the Fresher's Welcome event of{' '}
              <strong>Techno Bengal Institute of Technology</strong> —
              a celebration where creativity breaks every boundary and
              characters from every universe collide in one electric night.
            </p>
            <p className="ab-para ab-p2" style={{ '--di': 1 }}>
              The theme <strong>Beyond The Veil</strong> invites you to step
              through the membrane between worlds. Wear any face. Embody any
              legend. Whether you arrive as a pirate, a sorcerer, a cyborg,
              or the legendary Spider-Man — every universe is welcome here.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
}
