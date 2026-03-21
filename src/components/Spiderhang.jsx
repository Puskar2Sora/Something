import React from 'react';
import '../styles/Spiderhang.css';

/**
 * SpiderHang
 * Drop this anywhere inside your Hero section.
 * It positions itself fixed to the top-right area,
 * just below the navbar, hanging on a web thread.
 *
 * Usage in Hero.jsx:
 *   import SpiderHang from '../components/SpiderHang';
 *   // inside <section id="home" className="comic-hero">
 *   <SpiderHang />
 */
export default function SpiderHang() {
  return (
    <div className="sh-root" aria-hidden="true">

      {/* ── WEB ANCHOR POINT (top of thread) ── */}
      <div className="sh-anchor">

        {/* Subtle web threads fanning out from anchor */}
        <div className="sh-web-fan">
          <div className="sh-thread sh-t1" />
          <div className="sh-thread sh-t2" />
          <div className="sh-thread sh-t3" />
        </div>

        {/* Main vertical web thread */}
        <div className="sh-web-line" />

        {/* Spider-Man image — swings like a pendulum */}
        <div className="sh-pendulum">
          {/* Tiny web knot where string meets image */}
          <div className="sh-knot" />

          {/* The actual image */}
          <div className="sh-img-wrap">
            <img
              src="/assets/spiderman-hang.png"
              alt="Spider-Man hanging"
              className="sh-img"
              draggable="false"
            />
            {/* Glow underneath */}
            <div className="sh-glow" />
          </div>
        </div>
      </div>
    </div>
  );
}