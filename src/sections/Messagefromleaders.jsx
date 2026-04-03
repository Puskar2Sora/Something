import React, { useEffect, useRef, useState } from 'react';
import '../styles/Messagefromleaders.css';
import Floatchar from '../components/Floatchar';

/*
  ┌─────────────────────────────────────────────────────────────┐
  │  USAGE                                                       │
  │  Replace the `videoSrc` fields below with your actual       │
  │  video file paths (e.g. "/assets/videos/director.mp4")      │
  │  or embed URLs (YouTube / Drive).                           │
  │                                                              │
  │  For YouTube embeds, change <VideoCard> to use an           │
  │  <iframe> instead of <video> — instructions in VideoCard.   │
  └─────────────────────────────────────────────────────────────*/

const LEADERS = [
  {
    id: 'director',
    role: 'DIRECTOR',
    name: 'DR.  NARAYAN CHANDRA GHOSH',               // ← replace with actual name
    dept: 'Director of Techno Bengal Institute Of Technology',
    accentColor: '#FFE600',
    glowColor: 'rgba(255,230,0,0.25)',
    badgeIcon: '',
    quote: '"Education is not preparation for life; education is life itself. Welcome to Lithium 2K26."',
    videoSrc: '/assets/videos/director.mp4',   // ← your video path
    poster: '/assets/posters/director.jpg',    // ← thumbnail image
  },
  {
    id: 'principal',
    role: 'PRINCIPAL',
    name: "DR. SHANTA PHANI",             // ← replace with actual name
    dept: 'Principal of Techno Bengal Institute Of Technology',
    accentColor: '#FF2D87',
    glowColor: 'rgba(255,45,135,0.25)',
    badgeIcon: '',
    quote: '"To our first-year students — this college is your canvas. Lithium 2K26 is your first brushstroke."',
    videoSrc: '/assets/videos/principal.mp4',  // ← your video path
    poster: '/assets/posters/principal.jpg',   // ← thumbnail image
  },
];

/* ─── Video Card ─────────────────────────────────────────── */
const VideoCard = ({ leader, index, isVisible }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded]   = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) { v.pause(); setPlaying(false); }
    else         { v.play();  setPlaying(true);  }
  };

  return (
    <div
      className={`mfl-card ${isVisible ? 'mfl-card--in' : ''}`}
      style={{ '--accent': leader.accentColor, '--glow': leader.glowColor, animationDelay: `${index * 0.2}s` }}
    >
        
      {/* ── Top label bar ── */}
      <div className="mfl-card-topbar">
        <span className="mfl-card-badge">{leader.badgeIcon}</span>
        <span className="mfl-card-role">{leader.role}</span>
        <span className="mfl-card-id">INTEL-0{index + 1}</span>
      </div>

      {/* ── Video frame ── */}
      <div className="mfl-video-wrap" onClick={togglePlay}>
        <video
          ref={videoRef}
          className="mfl-video"
          src={leader.videoSrc}
          poster={leader.poster}
          preload="metadata"
          playsInline
          onLoadedData={() => setLoaded(true)}
          onEnded={() => setPlaying(false)}
        />

        {/* Overlay — hidden while playing */}
        <div className={`mfl-video-overlay ${playing ? 'mfl-video-overlay--playing' : ''}`}>
          <div className="mfl-play-btn">
            {playing
              ? <span className="mfl-pause-icon">⏸</span>
              : <span className="mfl-play-icon">▶</span>
            }
          </div>
          {!playing && (
            <div className="mfl-video-label">PRESS PLAY</div>
          )}
        </div>

        {/* Corner brackets on the frame */}
        <div className="mfl-frame-corner mfl-frame-corner--tl" />
        <div className="mfl-frame-corner mfl-frame-corner--tr" />
        <div className="mfl-frame-corner mfl-frame-corner--bl" />
        <div className="mfl-frame-corner mfl-frame-corner--br" />

        {/* Scanline */}
      </div>

      {/* ── Info ── */}
      <div className="mfl-card-info">
        <div className="mfl-card-name">{leader.name}</div>
        <div className="mfl-card-dept">{leader.dept}</div>
      </div>

     
      {/* Bottom bar */}
      <div className="mfl-card-bottombar" />
    </div>
  );
};

/* ─── Main Section ───────────────────────────────────────── */
const MessageFromLeaders = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="leaders" className="mfl-section" ref={sectionRef}>
      {/* Background layers */}

      {/* Diagonal slash accent */}
      <div className="mfl-slash-accent" />

<Floatchar
  src="/assets/chars/batman.png"
  alt="Miles Morales"
  size={200}
  bottom="85%"
  right="23%"
  animation="none"
  glowColor="#FF2D87"
/>
<br/>
      <div className={`mfl-inner ${visible ? 'mfl-inner--visible' : ''}`}>
<br/>
        {/* ── Header ── */}
        <header className="mfl-header">
          <div className="mfl-eyebrow">
            <span className="mfl-dot" />
            <span>TRANSMISSION INCOMING</span>
            <span className="mfl-dot" />
          </div>

          <h2 className="mfl-title">
            <span className="mfl-title-line1">A MESSAGE</span>
            <span className="mfl-title-line2">FROM THE VEIL</span>
          </h2>
        </header>

        {/* ── Video Cards ── */}
        <div className="mfl-cards-grid">
          {LEADERS.map((leader, i) => (
            <VideoCard key={leader.id} leader={leader} index={i} isVisible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessageFromLeaders;