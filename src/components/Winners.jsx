import React, { useState, useRef, useEffect } from 'react';
import '../styles/Winners.css';
import Floatchar from '../components/Floatchar';

const WINNERS = [
    {
    id: 7,
    title: 'Best Couple',
    name: 'Sagnik Roy Choudhury ',
    instagram: '@sagnik.roy.chowdhury ',
    year: '2K25',
    crown: '💞',
    frameColor: '#FF9500',
    glowColor: '#FF9500',
    tagline: 'Two Worlds, One Vibe',
    img: '/assets/winners/saguda.jpeg',
    number: '07',
  },
    {
    id: 6,
    title: 'Best Couple',
    name: 'Tanisha Banerjee ',
    instagram: '@guitfiddle.tanisha',
    year: '2K25',
    crown: '💞',
    frameColor: '#FF9500',
    glowColor: '#FF9500',
    tagline: 'Two Worlds, One Vibe',
    img: '/assets/winners/Tanisha Banerjee.jpg',
    number: '06',
  },
  {
    id: 1,
    title: 'Mrs. Fresher',
    name: 'Surasree Majumder',
    instagram: '@areh._peculiar',
    year: '2K25',
    crown: '👑',
    frameColor: '#FF2D87',
    glowColor: '#FF2D87',
    tagline: 'Born to Shine',
    img: '/assets/winners/surasree.jpg',
    number: '01',
  },
  {
    id: 2,
    title: 'Mr.Fresher',
    name: 'Ayushman ',
    instagram: '@priya.dey_official',
    year: '2K25',
    crown: '👑',
    frameColor: '#FF2D87',
    glowColor: '#FF2D87',
    tagline: 'Grace & Glory',
    img: '/assets/winners/mr-fresher.jpg',
    number: '02',
  },
  {
    id: 3,
    title: 'Mrs graceful ',
    name: 'Palak ray ',
    instagram: '@x.palak.r',
    year: '2K25',
    crown: '✨',
    frameColor: '#00D4FF',
    glowColor: '#00D4FF',
    tagline: ' Grace your self ',
    img: '/assets/winners/palak.jpg',
    number: '03',
  },
  {
    id: 4,
    title: 'Mr. Personality',
    name: 'Atanu karmakar ',
    instagram: '@arghhhaa',
    year: '2K25',
    crown: '🔥',
    frameColor: '#00FF88',
    glowColor: '#00FF88',
    tagline: 'Built Different',
    img: '/assets/winners/Atanu.jpg',
    number: '04',
  },
  {
    id: 5,
    title: 'Ms Personality',
    name: 'Tanisa Naskar',
    instagram: '@1234',
    year: '2K25',
    crown: '💞',
    frameColor: '#00ff0d',
    glowColor: '#3cff00',
    tagline: 'Personality is the key',
    img: '/assets/winners/tanisa.jpg',
    number: '05',
  },


   {
    id: 8,
    title: ' ',
    name: 'Anwesha dey ',
    instagram: '@__.anw_sha.__',
    year: '2K25',
    crown: '💞',
    frameColor: '#ff2200',
    glowColor: '#FF9500',
    tagline: 'One path one way',
    img: '/assets/winners/aneswa.jpg',
    number: '08',
  },
  {
    id: 9,
    title: ' ',
    name: 'Ankit Das ',
    instagram: '@tan_duri_chicken ',
    year: '2K25',
    crown: '💞',
    frameColor: '#ff2200',
    glowColor: '#FF9500',
    tagline: 'Dare to match my vibe ?',
    img: '/assets/winners/Ankit Das.webp',
    number: '09',
  },
  {
    id: 10,
    title: ' ',
    name: 'Monalisa Sen',
    instagram: '@_misss_sen_',
    year: '2K25',
    crown: '💞',
    frameColor: '#c800ff',
    glowColor: '#c800ff',
    tagline: 'Lets Stay Together',
    img: '/assets/winners/mona.jpg',
    number: '10',
  },
  {
    id: 11,
    title: ' ',
    name: 'Roumik Ghosh',
    instagram: '@_itz_roumik_',
    year: '2K25',
    crown: '💞',
    frameColor: '#c800ff',
    glowColor: '#c800ff',
    tagline: 'Lets Stay Together',
    img: '/assets/winners/roumik.jpg',
    number: '10',
  },
  {
    id: 11,
    title: ' ',
    name: 'Sujal Singh',
    instagram: '@__singhsujal17',
    year: '2K25',
    crown: '💞',
    frameColor: '#eeff00',
    glowColor: '#eeff00',
    tagline: 'Free Bird',
    img: '/assets/winners/sujal.jpg',
    number: '11',
  },
  {
    id: 12,
    title: ' ',
    name: 'Parthib Mandal',
    instagram: '@parthib_mondal',
    year: '2K25',
    crown: '💞',
    frameColor: '#2600ff',
    glowColor: '#2600ff',
    tagline: 'Free Bird',
    img: '/assets/winners/parthib.jpg',
    number: '12',
  },
  {
    id: 13,
    title: ' ',
    name: 'Sahim Uddin Farhan',
    instagram: '@the_ethereal.sky',
    year: '2K25',
    crown: '💞',
    frameColor: '#00f7ff',
    glowColor: '#00f7ff',
    tagline: 'Free Bird',
    img: '/assets/winners/sahim.jpg',
    number: '13',
  },
];

export default function Winners() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

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
          <h2 className="wn-title-main">GROOMING</h2>
          <div className="wn-title-row2">
            <h2 className="wn-title-accent">WINNERS</h2>
            <span className="wn-classified">LEGENDS</span>
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
        <div className="wn-cards">
          {WINNERS.map((w, idx) => (
            <div
              key={w.id}
              className="wn-card"
              style={{ '--fc': w.frameColor, '--gc': w.glowColor, '--idx': idx }}
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
      <Floatchar
  src="/assets/chars/peter.png"
  alt="Miles Morales"
  size={200}
  bottom="80%"
  right="65%"
  animation="float"
  glowColor="#FF2D87"
/>
    </section>
  );
}
