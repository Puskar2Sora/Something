import React, { useEffect, useRef, useState } from 'react';
import '../styles/Venue.css';
import Floatchar from '../components/Floatchar';

const DETAILS = [
  {
    icon: '',
    label: 'VENUE',
    value: 'Laban Hrad Mancha',
    sub: 'BD Auditorium, HCV4+HM5, BD Block\nSector 1, Bidhannagar, Kolkata – 700064',
  },
  {
    icon: '',
    label: 'DATE',
    value: 'May 7, 2026',
    sub: 'Thursday',
  },
  {
    icon: '',
    label: 'TIME',
    value: '2:00 PM',
    sub: 'Doors open at 12:00 PM',
  },
];

const Venue = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="venue" className="v2-venue" ref={sectionRef}>
      {/* Background layers */}
      <div className="v2-scanlines" />
      <div className="v2-grain" />
      <div className="v2-grid-bg" />

     

      <div className={`v2-inner ${visible ? 'v2-inner--visible' : ''}`}>

        {/* ── HEADER ── */}
        <br/>
        <header className="v2-header">
          <div className="v2-eyebrow">
            <span className="v2-dot" />
            <span>MISSION COORDINATES</span>
            <span className="v2-dot" />
          </div>

          {/* Full-width title */}
          <h2
            className={`v2-title ${glitch ? 'v2-title--glitch' : ''}`}
            data-text="THE PORTAL"
          >
            THE PORTAL
          </h2>
        </header>

        {/* ── BODY GRID ── */}
        <div className="v2-body">

          {/* LEFT: Detail Cards */}
          <div className="v2-left">
            {DETAILS.map((d, i) => (
              <div
                key={i}
                className="v2-card"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="v2-card-icon">{d.icon}</div>
                <div className="v2-card-content">
                  <div className="v2-card-label">{d.label}</div>
                  <div className="v2-card-value">{d.value}</div>
                  <div className="v2-card-sub">{d.sub}</div>
                </div>
                <div className="v2-card-bar" />
              </div>
            ))}

            <a
              href="https://maps.google.com/?q=Laban+Hrad+Mancha+BD+Auditorium+Bidhannagar+Kolkata"
              target="_blank"
              rel="noreferrer"
              className="v2-cta"
            >
              <span className="v2-cta-icon">▶</span>
              <span>GET DIRECTIONS</span>
              <span className="v2-cta-arrow">→</span>
            </a>
          </div>

          {/* RIGHT: Map */}
          <div className="v2-right">
            <div className="v2-map-wrap">
              <div className="v2-map-header">
                <span className="v2-map-coords">22.5939°N · 88.4067°E</span>
              </div>
              <div className="v2-map-frame">
                <iframe
                  title="Venue Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.6776506!2d88.4041463!3d22.5938914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027ae41b153381%3A0x6ae8be3071e5d785!2sLaban%20Hrad%20Mancha%20BD%20Auditorium!5e0!3m2!1sen!2sin!4v1712160000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                              </div>
              <div className="v2-map-footer">
                <span>📍 HCV4+HM5, BD Block, Sector 1, Bidhannagar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Venue;