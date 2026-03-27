import React, { useRef, useState, useEffect } from 'react';
import '../styles/Winners.css';
import Floatchar from '../components/Floatchar';

const WINNERS = [
  {
    id: 1,
    title: 'Mrs. Fresher',
    name: 'Surasree Majumder',
    instagram: '@areh._peculiar',
    year: '2K25',
    icon: '👑',
    color: '#FF2D87',
    glow: '#FF2D87',
    tape: 'MRS FRESHER',
    rotate: '-3deg',
    img: '/assets/winners/surasree.jpg',
  },
  {
    id: 2,
    title: 'Mr. Fresher',
    name: 'Ayushman',
    instagram: '@priya.dey_official',
    year: '2K25',
    icon: '👑',
    color: '#FFE600',
    glow: '#FFE600',
    tape: 'MR FRESHER',
    rotate: '2.5deg',
    img: '/assets/winners/mr-fresher.jpg',
  },
  {
    id: 3,
    title: 'Mrs. Graceful',
    name: 'Palak Ray',
    instagram: '@x.palak.r',
    year: '2K25',
    icon: '✨',
    color: '#00D4FF',
    glow: '#00D4FF',
    tape: 'MRS GRACEFUL',
    rotate: '-2deg',
    img: '/assets/winners/palak.jpg',
  },
  {
    id: 4,
    title: 'Mr. Personality',
    name: 'Atanu Karmakar',
    instagram: '@arghhhaa',
    year: '2K25',
    icon: '🔥',
    color: '#00FF88',
    glow: '#00FF88',
    tape: 'MR PERSONALITY',
    rotate: '3deg',
    img: '/assets/winners/Atanu.jpg',
  },
  {
    id: 5,
    title: 'Ms. Personality',
    name: 'Tanisa Naskar',
    instagram: '@1234',
    year: '2K25',
    icon: '💚',
    color: '#00ff0d',
    glow: '#00ff0d',
    tape: 'MS PERSONALITY',
    rotate: '-1.5deg',
    img: '/assets/winners/tanisa.jpg',
  },
  {
    id: 6,
    title: 'Best Couple',
    name: 'Tanisha Banerjee',
    instagram: '@guitfiddle.tanisha',
    year: '2K25',
    icon: '💞',
    color: '#FF9500',
    glow: '#FF9500',
    tape: 'BEST COUPLE',
    rotate: '2deg',
    img: '/assets/winners/Tanisha Banerjee.jpg',
  },
  {
    id: 7,
    title: 'Best Couple',
    name: 'Sagnik Roy Choudhury',
    instagram: '@sagnik.roy.chowdhury',
    year: '2K25',
    icon: '💞',
    color: '#FF9500',
    glow: '#FF9500',
    tape: 'BEST COUPLE',
    rotate: '-2.5deg',
    img: '/assets/winners/saguda.jpeg',
  },
  {
    id: 8,
    title: 'Grooming Star',
    name: 'Anwesha Dey',
    instagram: '@__.anw_sha.__',
    year: '2K25',
    icon: '🌟',
    color: '#ff2200',
    glow: '#ff4400',
    tape: 'STAR',
    rotate: '1.5deg',
    img: '/assets/winners/aneswa.jpg',
  },
  {
    id: 9,
    title: 'Grooming Star',
    name: 'Ankit Das',
    instagram: '@tan_duri_chicken',
    year: '2K25',
    icon: '⚡',
    color: '#FF6B35',
    glow: '#FF9500',
    tape: 'STAR',
    rotate: '-3.5deg',
    img: '/assets/winners/Ankit Das.webp',
  },
  {
    id: 10,
    title: 'Grooming Star',
    name: 'Monalisa Sen',
    instagram: '@_misss_sen_',
    year: '2K25',
    icon: '💜',
    color: '#c800ff',
    glow: '#c800ff',
    tape: 'STAR',
    rotate: '2deg',
    img: '/assets/winners/mona.jpg',
  },
  {
    id: 11,
    title: 'Grooming Star',
    name: 'Roumik Ghosh',
    instagram: '@_itz_roumik_',
    year: '2K25',
    icon: '💜',
    color: '#c800ff',
    glow: '#c800ff',
    tape: 'STAR',
    rotate: '-1deg',
    img: '/assets/winners/roumik.jpg',
  },
  {
    id: 12,
    title: 'Mr. Charming',
    name: 'Parthib Mandal',
    instagram: '@parthib_mondal',
    year: '2K25',
    icon: '💙',
    color: '#2600ff',
    glow: '#4422ff',
    tape: 'MR CHARMING',
    rotate: '3deg',
    img: '/assets/winners/parthib.jpg',
  },
  {
    id: 13,
    title: 'Grooming Star',
    name: 'Sujal Singh',
    instagram: '@__singhsujal17',
    year: '2K25',
    icon: '💛',
    color: '#eeff00',
    glow: '#eeff00',
    tape: 'STAR',
    rotate: '-2.5deg',
    img: '/assets/winners/sujal.jpg',
  },
  {
    id: 14,
    title: 'Grooming Star',
    name: 'Sahim Uddin Farhan',
    instagram: '@the_ethereal.sky',
    year: '2K25',
    icon: '🩵',
    color: '#00f7ff',
    glow: '#00f7ff',
    tape: 'STAR',
    rotate: '1deg',
    img: '/assets/winners/sahim.jpg',
  },
];

/* triple-duplicate for seamless infinite loop */
const LOOP = [...WINNERS, ...WINNERS, ...WINNERS];

export default function Winners() {
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="winners"
      className={`wn-section ${visible ? 'wn-vis' : ''}`}
      ref={sectionRef}
    >
      {/* bg */}
      <div className="wn-dot" />
      <div className="wn-slash" />

      {/* alert bar */}
      <div className="wn-alert-bar" aria-hidden="true">
        <span className="wn-alert-dot" />
        <span>LIVE · GROOMING LEGENDS · LITHIUM 2K25 · BEYOND THE VEIL</span>
        <span className="wn-alert-dot" />
      </div>

      {/* header */}
      <div className="wn-header">
        <span className="wn-eyebrow">✦ Hall of Fame · 2K25 ✦</span>
        <div className="wn-title-block">
          <h2 className="wn-t1">OUR LEGENDARY</h2>
          <div className="wn-t2wrap">
            <h2 className="wn-t2">GROMMERS</h2>
            <span className="wn-stamp">#LEGENDS</span>
          </div>
        </div>
        <p className="wn-sub">
          They stepped beyond the veil — and owned every universe.
        </p>
      </div>

      {/* red ticker */}
      <div className="wn-ticker" aria-hidden="true">
        <div className="wn-ticker-track">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="wn-ticker-seg">
              👑 MR. FRESHER &nbsp;·&nbsp; 👑 MRS. FRESHER &nbsp;·&nbsp;
              ✨ MRS. GRACEFUL &nbsp;·&nbsp; 🔥 MR. PERSONALITY &nbsp;·&nbsp;
              💚 MS. PERSONALITY &nbsp;·&nbsp; 💞 BEST COUPLE &nbsp;·&nbsp;
              💙 MR. CHARMING &nbsp;·&nbsp; 🌟 GROOMING STARS &nbsp;·&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── infinite scroll stage ── */}
      <div
        className="wn-stage"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div className={`wn-track ${paused ? 'wn-paused' : ''}`}>
          {LOOP.map((w, i) => (
            <Card key={`${w.id}-${i}`} w={w} />
          ))}
        </div>

        {/* edge fade masks */}
        <div className="wn-fade wn-fade-l" />
        <div className="wn-fade wn-fade-r" />
      </div>

      {/* bottom ticker */}
      <div className="wn-bticker" aria-hidden="true">
        <div className="wn-bticker-track">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="wn-bticker-seg">
              ✦ CONGRATULATIONS TO ALL WINNERS &nbsp;·&nbsp;
              LITHIUM 2K25 &nbsp;·&nbsp; BEYOND THE VEIL &nbsp;·&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* floating character */}
      <Floatchar
        src="/assets/chars/peter.png"
        alt="Peter Parker"
        size={180}
        bottom="72%"
        right="2%"
        animation="float"
        glowColor="#FF2D87"
      />
    </section>
  );
}

/* ── Card component ── */
function Card({ w }) {
  const [err, setErr] = useState(false);

  return (
    <div
      className="wn-card"
      style={{ '--c': w.color, '--g': w.glow, '--rot': w.rotate }}
    >
      {/* masking tape */}
      <div className="wn-tape">
        <span className="wn-tape-txt">{w.tape}</span>
      </div>

      {/* polaroid photo area */}
      <div className="wn-polar">
        <div className="wn-polar-img-wrap">
          {!err ? (
            <img
              src={w.img}
              alt={w.name}
              className="wn-img"
              draggable="false"
              onError={() => setErr(true)}
            />
          ) : (
            <div className="wn-ph">
              <span className="wn-ph-icon">{w.icon}</span>
              <span className="wn-ph-txt">
                {w.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}

          {/* overlays */}
          <div className="wn-scan" />
          <div className="wn-vignette" />
          <div className="wn-glint" />

          {/* icon bubble */}
          <div className="wn-icon-bubble">{w.icon}</div>
          {/* year pill */}
          <div className="wn-year-pill">{w.year}</div>
        </div>

        {/* white paper strip */}
        <div className="wn-paper">
          <span className="wn-paper-title">{w.title}</span>
          <span className="wn-paper-name">{w.name}</span>
        </div>
      </div>

      {/* instagram */}
      <a
        href={`https://instagram.com/${w.instagram.replace('@', '').trim()}`}
        className="wn-ig"
        target="_blank"
        rel="noreferrer"
        onClick={e => e.stopPropagation()}
      >
        <svg className="wn-ig-svg" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <rect x="2" y="2" width="20" height="20" rx="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
        <span className="wn-ig-handle">{w.instagram.trim()}</span>
        <span className="wn-ig-arr">↗</span>
      </a>

      {/* neon bottom bar */}
      <div className="wn-neonbar" />

      {/* corner L-brackets */}
      <span className="wn-brk wn-brk-tl" />
      <span className="wn-brk wn-brk-tr" />
      <span className="wn-brk wn-brk-bl" />
      <span className="wn-brk wn-brk-br" />
    </div>
  );
}