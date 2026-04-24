import React, { useState, useRef, useEffect, useCallback } from 'react';
import '../styles/Winners.css';

const WINNERS = [
  {
    id: 1,
    title: 'Best Couple',
    name: 'Sagnik Roy Choudhury',
    instagram: '@sagnik.roy.chowdhury',
    year: '2K25',
    frameColor: '#D4A843',
    glowColor: 'rgba(212,168,67,0.7)',
    tagline: 'Two Worlds, One Vibe',
    img: '/assets-optimized/winners/saguda.webp',
    number: '01',
  },
  {
    id: 2,
    title: 'Best Couple',
    name: 'Tanisha Banerjee',
    instagram: '@guitfiddle.tanisha',
    year: '2K25',
    frameColor: '#D4A843',
    glowColor: 'rgba(212,168,67,0.7)',
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
    frameColor: '#C97BA8',
    glowColor: 'rgba(201,123,168,0.7)',
    tagline: 'Born to Shine',
    img: '/assets-optimized/winners/surasree.webp',
    number: '03',
  },
  {
    id: 4,
    title: 'Mr. Fresher',
    name: 'Ayushman Das',
    instagram: '@_ayushman_das',
    year: '2K25',
    frameColor: '#C97BA8',
    glowColor: 'rgba(201,123,168,0.7)',
    tagline: 'Grace & Glory',
    img: '/assets-optimized/winners/Ayushman.webp',
    number: '04',
  },
  {
    id: 5,
    title: 'Ms. Graceful',
    name: 'Palak Ray',
    instagram: '@x.palak.r',
    year: '2K25',
    frameColor: '#7BC4D4',
    glowColor: 'rgba(123,196,212,0.7)',
    tagline: 'Grace Yourself',
    img: '/assets-optimized/winners/palak.webp',
    number: '05',
  },
  {
    id: 6,
    title: 'Mr. Personality',
    name: 'Atanu Karmakar',
    instagram: '@arghhhaa',
    year: '2K25',
    frameColor: '#5AB88A',
    glowColor: 'rgba(90,184,138,0.7)',
    tagline: 'Built Different',
    img: '/assets-optimized/winners/Atanu.webp',
    number: '06',
  },
  {
    id: 7,
    title: 'Ms. Personality',
    name: 'Tanisa Naskar',
    instagram: '@tanisa_naskar',
    year: '2K25',
    frameColor: '#5AB88A',
    glowColor: 'rgba(90,184,138,0.7)',
    tagline: 'Personality is the Key',
    img: '/assets-optimized/winners/tanisa.webp',
    number: '07',
  },
  {
    id: 8,
    title: 'Mr. Charming',
    name: 'Parthib Mandal',
    instagram: '@parthib_mondal',
    year: '2K25',
    frameColor: '#7B9ED4',
    glowColor: 'rgba(123,158,212,0.7)',
    tagline: 'Charm Beyond Measure',
    img: '/assets-optimized/winners/parthib.webp',
    number: '08',
  },
  {
    id: 9,
    title: 'Ms. Charming',
    name: 'Khushi Yadav',
    instagram: '@_khushi.__08',
    year: '2K25',
    frameColor: '#7B9ED4',
    glowColor: 'rgba(123,158,212,0.7)',
    tagline: 'Light in Every Room',
    img: '/assets-optimized/winners/khushi.webp',
    number: '09',
  },
  {
    id: 10,
    title: 'Style Icon',
    name: 'Nargis Sultana',
    instagram: '@_nargissultana._',
    year: '2K25',
    frameColor: '#D47B5A',
    glowColor: 'rgba(212,123,90,0.7)',
    tagline: 'Dare to Match My Vibe?',
    img: '/assets-optimized/winners/nargis.webp',
    number: '10',
  },
  {
    id: 11,
    title: 'Style Icon',
    name: 'Ankit Das',
    instagram: '@tan_duri_chicken',
    year: '2K25',
    frameColor: '#D47B5A',
    glowColor: 'rgba(212,123,90,0.7)',
    tagline: 'Dare to Match My Vibe?',
    img: '/assets-optimized/winners/Ankit Das.webp',
    number: '11',
  },
  {
    id: 12,
    title: 'Royal Pair',
    name: 'Monalisa Sen',
    instagram: '@_misss_sen_',
    year: '2K25',
    frameColor: '#B87DD4',
    glowColor: 'rgba(184,125,212,0.7)',
    tagline: "Let's Stay Together",
    img: '/assets-optimized/winners/mona.webp',
    number: '12',
  },
  {
    id: 13,
    title: 'Royal Pair',
    name: 'Roumik Ghosh',
    instagram: '@_itz_roumik_',
    year: '2K25',
    frameColor: '#B87DD4',
    glowColor: 'rgba(184,125,212,0.7)',
    tagline: "Let's Stay Together",
    img: '/assets-optimized/winners/roumik.webp',
    number: '13',
  },
  {
    id: 14,
    title: 'Star of the Night',
    name: 'Sujal Singh',
    instagram: '@__singhsujal17',
    year: '2K25',
    frameColor: '#D4C843',
    glowColor: 'rgba(212,200,67,0.7)',
    tagline: 'Shining Above the Rest',
    img: '/assets-optimized/winners/sujal.webp',
    number: '14',
  },
  {
    id: 15,
    title: 'Royal Spirit',
    name: 'Anwesha Dey',
    instagram: '@__.anw_sha.__',
    year: '2K25',
    frameColor: '#43C4D4',
    glowColor: 'rgba(67,196,212,0.7)',
    tagline: 'One Path, One Way',
    img: '/assets-optimized/winners/aneswa.webp',
    number: '15',
  },
  {
    id: 16,
    title: 'Royal Spirit',
    name: 'Sahim Uddin Farhan',
    instagram: '@the_ethereal.sky',
    year: '2K25',
    frameColor: '#43C4D4',
    glowColor: 'rgba(67,196,212,0.7)',
    tagline: 'One Path, One Way',
    img: '/assets-optimized/winners/sahim.webp',
    number: '16',
  },
];

const LOOP = [...WINNERS, ...WINNERS, ...WINNERS, ...WINNERS];

/* ── Corner SVG ornament ── */
function CornerOrnament({ flip }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}>
      <path d="M2 22 L2 8 Q2 2 8 2 L22 2" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <circle cx="4.5" cy="4.5" r="1.5" fill="currentColor" opacity="0.6"/>
      <path d="M2 14 Q6 14 6 10" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
      <circle cx="8" cy="2" r="1" fill="currentColor" opacity="0.5"/>
    </svg>
  );
}

/* ── Drag scroll hook ── */
function useDragScroll() {
  const ref = useRef(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0, vel: 0, lastX: 0, lastT: 0, raf: null });

  const cancelRaf = () => { if (drag.current.raf) cancelAnimationFrame(drag.current.raf); };

  function wrapScroll(node) {
    const q = node.scrollWidth / 4;
    if (node.scrollLeft < q)      node.scrollLeft += q * 2;
    if (node.scrollLeft > q * 3)  node.scrollLeft -= q * 2;
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

/* ── Single portrait card ── */
function WinnerCard({ w, idx }) {
  const handleImgError = (e) => {
    e.currentTarget.style.display = 'none';
    const ph = e.currentTarget.closest('.wn-portrait-frame').querySelector('.wn-ph');
    if (ph) ph.style.display = 'flex';
  };

  const initials = w.name.trim().split(' ').map(n => n[0]).join('').slice(0, 3);

  return (
    <div
      className="wn-card"
      style={{
        '--fc': w.frameColor,
        '--gc': w.glowColor,
        '--idx': idx % WINNERS.length,
      }}
    >
      <div className="wn-card-inner">

        {/* ══ ROYAL PORTRAIT FRAME ══ */}
        <div className="wn-portrait-frame">

          {/* Arch crown jewel */}
          <div className="wn-arch-jewel">{w.crown}</div>

          {/* Actual photo */}
          <img
            src={w.img}
            alt={w.name}
            className="wn-photo"
            draggable="false"
            loading="lazy"
            fetchPriority="low"
            decoding="async"
            onError={handleImgError}
          />

          {/* Royal placeholder — shown when photo fails */}
          <div className="wn-ph">
            <div className="wn-ph-ring">
              <span className="wn-ph-crown">{w.crown}</span>
            </div>
            <span className="wn-ph-initials">{initials}</span>
            <div className="wn-ph-stars">✦ ✦ ✦</div>
          </div>

          {/* Texture overlays */}
          <div className="wn-scanlines" />
          <div className="wn-photo-fade" />

          {/* Side filigree dots */}
          <div className="wn-side-filigree wn-side-filigree-l">
            {[...Array(6)].map((_, i) => <div key={i} className="wn-filigree-dot" />)}
          </div>
          <div className="wn-side-filigree wn-side-filigree-r">
            {[...Array(6)].map((_, i) => <div key={i} className="wn-filigree-dot" />)}
          </div>

          {/* Corner medallions — bottom two (top hidden by arch) */}
          <div className="wn-corner wn-corner-bl">
            <CornerOrnament flip={false} />
          </div>
          <div className="wn-corner wn-corner-br">
            <CornerOrnament flip={true} />
          </div>
        </div>

        {/* Watermark number */}
        <span className="wn-watermark">{w.number}</span>

        {/* ══ INFO PANEL ══ */}
        <div className="wn-info">
          <div className="wn-cat-row">
            <span className="wn-cat">{w.title}</span>
            <span className="wn-yr">{w.year}</span>
          </div>
          <h3 className="wn-name">{w.name}</h3>
          <p className="wn-tagline">"{w.tagline}"</p>

          <div className="wn-divider-line">
            <span>⚜</span>
          </div>

          <a
            href={`https://instagram.com/${w.instagram.replace('@', '').trim()}`}
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
    </div>
  );
}

/* ── Main section ── */
export default function Winners() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const { ref: trackRef, events } = useDragScroll();

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
      className={`wn-section ${visible ? 'wn-visible' : ''}`}
      ref={sectionRef}
    >
      {/* Background layers */}
      <div className="wn-dot-bg" />
      <div className="wn-slash-left" />
      <div className="wn-slash-right" />
      <div className="wn-horizon" />

      {/* ══ HEADER ══ */}
      <div className="wn-header">
        <span className="wn-eyebrow">Hall of Fame · 2K25</span>
        <div className="wn-title-block">
          <h2 className="wn-title-main">OUR LEGENDARY</h2>
          <div className="wn-title-row2">
            <h2 className="wn-title-accent">GROOMERS</h2>
            <span className="wn-classified">Hall of Fame</span>
          </div>
        </div>
        <p className="wn-sub">
          They stepped beyond the veil — and owned the kingdom.
        </p>
      </div>

      {/* ══ TICKER ══ */}
      <div className="wn-ticker" aria-hidden="true">
        <div className="wn-ticker-track">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="wn-ticker-seg">
              ⚜ MR. FRESHER &nbsp;·&nbsp; MS. FRESHER &nbsp;·&nbsp;
              MR. CHARMING &nbsp;·&nbsp; MS. GRACEFUL &nbsp;·&nbsp;
              BEST COUPLE &nbsp;·&nbsp; MR. PERSONALITY &nbsp;·&nbsp;
              MS. PERSONALITY &nbsp;·&nbsp; STYLE ICON &nbsp;⚜&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ══ PORTRAIT GALLERY ══ */}
      <div className="wn-cards-wrap">
        <div className="wn-cards" ref={trackRef} {...events}>
          {LOOP.map((w, idx) => (
            <WinnerCard key={`${w.id}-${idx}`} w={w} idx={idx} />
          ))}
        </div>

        <div className="wn-scroll-hint">
          <span>swipe to explore</span>
          <span className="wn-sh-arrow">→</span>
        </div>
      </div>

      {/* ══ BOTTOM BANNER ══ */}
      <div className="wn-bottom-banner">
        <div className="wn-bb-l" />
        <span className="wn-bb-txt">⚜  DRAG TO EXPLORE THE ROYAL COURT ⚜</span>
        <div className="wn-bb-r" />
      </div>
    </section>
  );
}