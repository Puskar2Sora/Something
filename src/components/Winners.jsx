import React, { useState, useRef, useEffect, useCallback } from 'react';
import '../styles/Winners.css';
import Floatchar from '../components/Floatchar';

const WINNERS = [
    {
    id: 1,
    title: 'Best Couple',
    name: 'Sagnik Roy Choudhury ',
    instagram: '@sagnik.roy.chowdhury ',
    year: '2K25',
    crown: '💞',
    frameColor: '#FF9500',
    glowColor: '#FF9500',
    tagline: 'Two Worlds, One Vibe',
    img: '/assets-optimized/winners/saguda.webp',
    number: '01',
  },
    {
    id: 2,
    title: 'Best Couple',
    name: 'Tanisha Banerjee ',
    instagram: '@guitfiddle.tanisha',
    year: '2K25',
    crown: '💞',
    frameColor: '#FF9500',
    glowColor: '#FF9500',
    tagline: 'Two Worlds, One Vibe',
    img: '/assets-optimized/winners/Tanisha Banerjee.webp',
    number: '02',
  },
  {
    id: 3,
    title: 'Ms. Fresher',
    name: 'Surasree Majumder',
    instagram: '@areh._peculiar',
    year: '2K25',
    crown: '👑',
    frameColor: '#FF2D87',
    glowColor: '#FF2D87',
    tagline: 'Born to Shine',
    img: '/assets-optimized/winners/surasree.webp',
    number: '03',
  },
  {
    id: 4,
    title: 'Mr.Fresher',
    name: 'Ayushman Das',
    instagram: '@_ayushman_das',
    year: '2K25',
    crown: '👑',
    frameColor: '#FF2D87',
    glowColor: '#FF2D87',
    tagline: 'Grace & Glory',
    img: '/assets-optimized/winners/Ayushman.webp',
    number: '04',
  },

  {
    id: 7,
    title: 'Ms Personality',
    name: 'Tanisa Naskar',
    instagram: '@1234',
    year: '2K25',
    crown: '💞',
    frameColor: '#00ff0d',
    glowColor: '#3cff00',
    tagline: 'Personality is the key',
    img: '/assets-optimized/winners/tanisa.webp',
    number: '07',
  },

  {
    id: 6,
    title: 'Mr. Personality',
    name: 'Atanu karmakar ',
    instagram: '@arghhhaa',
    year: '2K25',
    crown: '🔥',
    frameColor: '#00FF88',
    glowColor: '#00FF88',
    tagline: 'Built Different',
    img: '/assets-optimized/winners/Atanu.webp',
    number: '06',
  },
  
  {
    id: 5,
    title: 'Ms graceful ',
    name: 'Palak ray ',
    instagram: '@x.palak.r',
    year: '2K25',
    crown: '✨',
    frameColor: '#00D4FF',
    glowColor: '#00D4FF',
    tagline: ' Grace your self ',
    img: '/assets-optimized/winners/palak.webp',
    number: '05',
  },

{
    id: 8,
    title: ' Mr. Charming',
    name: 'Parthib Mandal',
    instagram: '@parthib_mondal',
    year: '2K25',
    crown: '💞',
    frameColor: '#2600ff',
    glowColor: '#2600ff',
    tagline: 'Free Bird',
    img: '/assets-optimized/winners/parthib.webp',
    number: '08',
  },


  {
    id: 9,
    title: ' ',
    name: 'Khushi Yadav ',
    instagram: '@_khushi.__08',
    year: '2K25',
    crown: '💞',
    frameColor: '#2600ff',
    glowColor: '#2600ff',
    tagline: 'Free Bird',
    img: '/assets-optimized/winners/khushi.webp',
    number: '09',
  },

  {
    id: 10,
    title: ' ',
    name: 'Nargis Sultana',
    instagram: '@_nargissultana._ ',
    year: '2K25',
    crown: '💞',
    frameColor: '#ff2200',
    glowColor: '#FF9500',
    tagline: 'Dare to match my vibe ?',
    img: '/assets-optimized/winners/nargis.webp',
    number: '10',
  },  

  {
    id: 11,
    title: ' ',
    name: 'Ankit Das ',
    instagram: '@tan_duri_chicken ',
    year: '2K25',
    crown: '💞',
    frameColor: '#ff2200',
    glowColor: '#FF9500',
    tagline: 'Dare to match my vibe ?',
    img: '/assets-optimized/winners/Ankit Das.webp',
    number: '11',
  },
  {
    id: 12,
    title: ' ',
    name: 'Monalisa Sen',
    instagram: '@_misss_sen_',
    year: '2K25',
    crown: '💞',
    frameColor: '#c800ff',
    glowColor: '#c800ff',
    tagline: 'Lets Stay Together',
    img: '/assets-optimized/winners/mona.webp',
    number: '12',
  },
  {
    id: 13,
    title: ' ',
    name: 'Roumik Ghosh',
    instagram: '@_itz_roumik_',
    year: '2K25',
    crown: '💞',
    frameColor: '#c800ff',
    glowColor: '#c800ff',
    tagline: 'Lets Stay Together',
    img: '/assets-optimized/winners/roumik.webp',
    number: '13',
  },
  {
    id: 14,
    title: ' ',
    name: 'Sujal Singh',
    instagram: '@__singhsujal17',
    year: '2K25',
    crown: '💞',
    frameColor: '#eeff00',
    glowColor: '#eeff00',
    tagline: 'Free Bird',
    img: '/assets-optimized/winners/sujal.webp',
    number: '14',
  },
  
  {
    id: 15,
    title: ' ',
    name: 'Anwesha dey ',
    instagram: '@__.anw_sha.__',
    year: '2K25',
    crown: '💞',
    frameColor: '#00f7ff',
    glowColor: '#00f7ff',
    tagline: 'One path one way',
    img: '/assets-optimized/winners/aneswa.webp',
    number: '15',
  },

  {
    id: 16,
    title: ' ',
    name: 'Sahim Uddin Farhan',
    instagram: '@the_ethereal.sky',
    year: '2K25',
    crown: '💞',
    frameColor: '#00f7ff',
    glowColor: '#00f7ff',
    tagline: 'One path one way',
    img: '/assets-optimized/winners/sahim.webp',
    number: '16',
  },

];

const LOOP = [...WINNERS, ...WINNERS, ...WINNERS, ...WINNERS];

function useDragScroll() {
  const ref = useRef(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0, vel: 0, lastX: 0, lastT: 0, raf: null });

  const cancelRaf = () => { if (drag.current.raf) cancelAnimationFrame(drag.current.raf); };

  function wrapScroll(node) {
    const q = node.scrollWidth / 4;
    if (node.scrollLeft < q) node.scrollLeft += q * 2;
    if (node.scrollLeft > q * 3) node.scrollLeft -= q * 2;
  }

  function momentum() {
    const el = drag.current; const node = ref.current;
    if (!node) return;
    el.vel *= 0.92;
    if (Math.abs(el.vel) < 0.4) { cancelRaf(); return; }
    node.scrollLeft += el.vel;
    wrapScroll(node);
    el.raf = requestAnimationFrame(momentum);
  }

  const onDown = useCallback((e) => {
    const node = ref.current; if (!node) return;
    cancelRaf();
    const x = e.touches ? e.touches[0].pageX : e.pageX;
    drag.current = { ...drag.current, active: true, startX: x - node.offsetLeft, scrollLeft: node.scrollLeft, vel: 0, lastX: x, lastT: Date.now() };
    node.style.cursor = 'grabbing';
  }, []);

  const onMove = useCallback((e) => {
    const d = drag.current; const node = ref.current;
    if (!d.active || !node) return;
    const x = e.touches ? e.touches[0].pageX : e.pageX;
    node.scrollLeft = d.scrollLeft - (x - node.offsetLeft - d.startX + node.offsetLeft);
    wrapScroll(node);
    const now = Date.now(); const dt = now - d.lastT || 1;
    d.vel = (d.lastX - x) / dt * 12;
    d.lastX = x; d.lastT = now;
  }, []);

  function onUp() {
    const d = drag.current; const node = ref.current;
    if (!d.active) return;
    d.active = false;
    if (node) node.style.cursor = 'grab';
    d.raf = requestAnimationFrame(momentum);
  }

  useEffect(() => {
    const node = ref.current; if (!node) return;
    const seed = () => { const t = node.scrollWidth / 4; if (t > 0) node.scrollLeft = t * 2; };
    const id = setTimeout(seed, 60);
    return () => clearTimeout(id);
  }, []);

  return {
    ref,
    events: {
      onMouseDown: onDown, onMouseMove: onMove,
      onMouseUp: onUp, onMouseLeave: onUp,
      onTouchStart: onDown, onTouchMove: onMove, onTouchEnd: onUp,
    },
  };
}

export default function Winners() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const { ref: trackRef, events } = useDragScroll();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="winners"
      className={`wn-section ${visible ? 'wn-visible' : ''}`}
      ref={sectionRef}
    >
      {/* bg layers */}
      <div className="wn-dot-bg" />
      <div className="wn-slash-left" />
      <div className="wn-slash-right" />

      {/* ── HEADER ── */}
      <div className="wn-header">
        <span className="wn-eyebrow">✦ Hall of Fame · 2K25 ✦</span>
        <div className="wn-title-block">
          <h2 className="wn-title-main">OUR LEGENDARY</h2>
          <div className="wn-title-row2">
            <h2 className="wn-title-accent">GROOMERS</h2>
            <span className="wn-classified">#LEGENDS</span>
          </div>
        </div>
        <p className="wn-sub">
          They stepped beyond the veil — and owned every universe.
        </p>
      </div>

      {/* ── TICKER ── */}
      <div className="wn-ticker" aria-hidden="true">
        <div className="wn-ticker-track">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="wn-ticker-seg">
               MR. FRESHER &nbsp;·&nbsp;  MRS. FRESHER &nbsp;·&nbsp;
               MISS CHARMING &nbsp;·&nbsp;  MR. PERSONALITY &nbsp;·&nbsp;
               BEST COUPLE &nbsp;·&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── CARDS ── */}
      <div className="wn-cards-wrap">
        <div className="wn-cards" ref={trackRef} {...events}>
          {LOOP.map((w, idx) => (
            <div
              key={`${w.id}-${idx}`}
              className="wn-card"
              style={{ '--fc': w.frameColor, '--gc': w.glowColor, '--idx': idx % WINNERS.length }}
            >
              {/* big watermark number */}
              <span className="wn-watermark">{w.number}</span>

              {/* photo frame */}
              <div className="wn-frame">
                <div className="wn-frame-inner">
                  <img
                    src={w.img}
                    alt={w.name}
                    className="wn-photo"
                    draggable="false"
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                    onError={e => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentNode.querySelector('.wn-ph').style.display = 'flex';
                    }}
                  />
                  <div className="wn-ph">
                    <span className="wn-ph-crown">{w.crown}</span>
                    <span className="wn-ph-initials">
                      {w.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="wn-scanlines" />
                  <div className="wn-photo-fade" />
                  <div className="wn-glint" />
                </div>

                {/* frame corners */}
                <div className="wn-fc wn-fc-tl" />
                <div className="wn-fc wn-fc-br" />

                {/* crown badge */}
              </div>

              {/* info */}
              <div className="wn-info">
                <div className="wn-cat-row">
                  <span className="wn-cat">{w.title}</span>
                  <span className="wn-yr">{w.year}</span>
                </div>
                <h3 className="wn-name">{w.name}</h3>
                <p className="wn-tagline">"{w.tagline}"</p>
                <div className="wn-divider-line" />
                <a
                  href={`https://instagram.com/${w.instagram.replace('@', '')}`}
                  className="wn-insta"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="wn-ig-icon" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                  <span>{w.instagram}</span>
                  <span className="wn-ig-arr">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* scroll hint — mobile only */}
        <div className="wn-scroll-hint">
          <span>swipe to explore</span>
          <span className="wn-sh-arrow">→</span>
        </div>
      </div>

      {/* bottom banner */}
      <div className="wn-bottom-banner">
        <div className="wn-bb-l" />
        <span className="wn-bb-txt">✦ SWIPE TO SCROLL ✦</span>
        <div className="wn-bb-r" />
      </div>
    </section>
  );
}
