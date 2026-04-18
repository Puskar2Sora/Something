import React, { useEffect, useRef } from "react";
import "../styles/Hero.css";
import StarField from "../components/Starfield";
import Spiderhang from "../components/Spiderhang";
import Floatchar from "../components/Floatchar";

const FLOATING_TAGS = [
  { text: "DRAMA", x: "7%", y: "10%", rotate: "-8deg", color: "#FFE600" },
  { text: "DANCE", x: "73%", y: "10%", rotate: "6deg", color: "#00D4FF" },
  { text: "MUSIC", x: "1%", y: "48%", rotate: "-5deg", color: "#FF2D87" },
  { text: "BAND", x: "79%", y: "44%", rotate: "4deg", color: "#00FF88" },
  { text: "FASHION", x: "9%", y: "82%", rotate: "-4deg", color: "#FFFFFF" },
  { text: "DJ NIGHT", x: "63%", y: "82%", rotate: "7deg", color: "#FFE600" },
];

const STAGE_MARKERS = [
  { text: "+", x: "22%", y: "30%", size: "2.1rem", opacity: 0.6 },
  { text: "+", x: "56%", y: "44%", size: "1.6rem", opacity: 0.45 },
  { text: "+", x: "35%", y: "74%", size: "2rem", opacity: 0.55 },
  { text: "×", x: "74%", y: "74%", size: "1.45rem", opacity: 0.42 },
  { text: "+", x: "52%", y: "82%", size: "1.35rem", opacity: 0.5 },
];

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const Hero = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    if (isTouchDevice()) {
      // On mobile: hide cursor, show floating sticker instead
      el.style.display = "none";
      return;
    }

    // Desktop: zero-lag cursor via direct DOM — no React re-render
    let rafId;
    const onMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.left = e.clientX + "px";
        el.style.top = e.clientY + "px";
      });
    };

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <section id="home" className="comic-hero">
      <Spiderhang />

      <StarField />
      <Floatchar
        src="/assets/chars/techno.png"
        alt="Techno"
        size={55}
        bottom="88%"
        right="50%"
        animation="none"
        glowColor="#f30629"
      />
      <Floatchar
        src="/assets/chars/bit.png"
        alt="TBIT"
        size={56}
        bottom="88%"
        right="75%"
        animation="none"
        glowColor="#fffcfc"
      />
      <br />
      {/* Spider-Man cursor — desktop only, zero-lag via RAF */}
      <div ref={cursorRef} className="spider-cursor">
        🕷️
      </div>

      {/* Dot texture overlay */}
      <div className="hero-dot-overlay" />

      {/* Diagonal slash background */}
      <div className="hero-slash" />

      {/* Left Content */}
      <div className="comic-hero-inner">
        <div className="comic-hero-left">
          {/* Eyebrow badge */}

          {/* Main Title */}
          <h1 className="comic-hero-title">
            <span className="title-line-1">LITHIUM</span>
            <span className="title-line-2">
              <span className="title-2k">2K</span>
              <span className="title-26">26</span>
            </span>
          </h1>

          {/* Theme */}
          <div className="comic-theme-wrap">
            <span className="comic-theme-label">THEME</span>
            <h2 className="comic-theme-title">
              BEYOND
              <br />
              THE VEIL
            </h2>
          </div>

          <p className="comic-hero-sub">
            Great Power Comes with , <br />
            <strong>Great Responsibility</strong>
          </p>

          {/* CTAs */}
          <div className="comic-hero-cta">
            <a href="#about" className="comic-btn comic-btn-yellow">
              <span className="btn-arrow">▶</span>
              Enter the Multiverse
            </a>
            <a href="#venue" className="comic-btn comic-btn-outline">
              Event Details
            </a>
          </div>
        </div>

        {/* Right: Event logo + floating chips */}
        <div className="comic-hero-right">
          <div className="hero-logo-stage" aria-label="Lithium 2K26 event logo">
            <div className="hero-logo-glow hero-logo-glow-a" />
            <div className="hero-logo-glow hero-logo-glow-b" />
            <div className="hero-logo-ring" />
            {STAGE_MARKERS.map((marker, i) => (
              <span
                key={i}
                className="hero-stage-marker"
                style={{
                  left: marker.x,
                  top: marker.y,
                  fontSize: marker.size,
                  opacity: marker.opacity,
                }}
              >
                {marker.text}
              </span>
            ))}
            <img
              className="hero-logo-art"
              src="/assets/chars/logoo.png"
              alt="Lithium 2026 Beyond the Veil logo"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {/* Floating event tags */}
          {FLOATING_TAGS.map((tag, i) => (
            <div
              key={tag.text}
              className="comic-float-tag"
              style={{
                left: tag.x,
                top: tag.y,
                "--tag-rotate": tag.rotate,
                "--tag-color": tag.color,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              {tag.text}
            </div>
          ))}

          {/* Spider-Man character sticker */}
        </div>
      </div>

      {/* Bottom scroll hint */}
    </section>
  );
};

export default Hero;