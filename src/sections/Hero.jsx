import React, { useEffect, useRef, useState } from "react";
import "../styles/Hero.css";
import Floatchar from "../components/Floatchar";

const FLOATING_TAGS = [
  { text: "DRAMA",    x: "5%",  y: "18%",  rotate: "-6deg",  delay: "0s"   },
  { text: "DANCE",    x: "74%", y: "14%",  rotate: "5deg",   delay: "0.4s" },
  { text: "MUSIC",    x: "2%",  y: "52%",  rotate: "-4deg",  delay: "0.8s" },
  { text: "FASHION",  x: "76%", y: "52%",  rotate: "6deg",   delay: "1.2s" },
  { text: "BAND",     x: "10%", y: "82%",  rotate: "-3deg",  delay: "0.2s" },
  { text: "DJ NIGHT", x: "64%", y: "82%",  rotate: "4deg",   delay: "1.0s" },
];

const ORNAMENTS = ["✦","◆","⚜","✦","◆","⚜","✦","◆"];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="comic-hero">
      <Spiderhang />

      <StarField />
      <Floatchar
        src="/assets/chars/techno.png"
        alt="Techno"
        size={58}
        bottom="85%"
        right="30%"
        animation="none"
        glowColor="#FAF6EF"
      />
      <Floatchar
        src="/assets/chars/techno.png"
        alt="TBIT"
        size={58}
        bottom="85%"
        right="60%"
        animation="none"
        glowColor="#FAF6EF"
      />

          {/* Main title */}
          <div className="rh-title-block">
            <br/>
            <br/>
            <br/>
            <br/>
            <span className="rh-ey-txt">⚜ Techno Bengal Institute of Technology ⚜</span>
            <br/>
            <div className="rh-title-year">
            <span className="rh-yr-2k">LITHIUM - </span>
<br/>
              <span className="rh-yr-2k">2K</span>
              <span className="rh-yr-26">26</span>
            </div>
          </div>

          {/* Ornamental divider */}
          <div className="rh-divider">
            <span className="rh-div-line" />
            <span className="rh-div-gem">◆</span>
            <span className="rh-div-line" />
          </div>

          {/* Theme */}
          <div className="rh-theme-block">
            <span className="rh-theme-label">✦ Royal Theme ✦</span>
            <h2 className="rh-theme-name">DREAMSCAPE</h2>
          </div>

          {/* CTAs */}
          <div className="rh-cta">
            <a href="#about" className="rh-btn rh-btn-gold">
              <span className="rh-btn-icon">⚜</span>
              Enter the Kingdom
            </a>
            <a href="#venue" className="rh-btn rh-btn-ghost">
              Event Details
            </a>
          </div>
        </div>

        {/* ── RIGHT — Logo Stage ── */}
        <div className="rh-right">


          {/* Logo medallion */}
          <div className="rh-medallion">
            <div className="rh-medallion-ring rh-ring-outer" />
            <div className="rh-medallion-ring rh-ring-mid" />
            <div className="rh-medallion-ring rh-ring-inner" />
            <div className="rh-medallion-glow" />

            {/* Logo */}
            <img
              className="rh-logo-img"
              src="/assets/chars/logoo.png"
              alt="Lithium 2026 logo"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

      </div>

      {/* Bottom crest band */}
      <div className="rh-footer-band">
        <span className="rh-fb-line" />
        <span className="rh-fb-text">✦ FRESHER'S WELCOME 2026 ✦ DREAMSCAPE ✦</span>
        <span className="rh-fb-line" />
      </div>

    </section>
  );
};

export default Hero;