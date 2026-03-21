import React, { useState, useRef, useEffect, useCallback } from 'react';
import '../styles/Gallery.css';

const PHOTOS = [
  { src: '/assets/pic/img1.jpg', caption: 'Opening Ceremony',  year: '2K25' },
  { src: '/assets/pic/img2.jpg', caption: 'Dance Performance',  year: '2K25' },
  { src: '/assets/pic/img3.jpg', caption: 'Band Night',         year: '2K25' },
  { src: '/assets/pic/img4.jpg', caption: 'Cosplay Winners',    year: '2K25' },
  { src: '/assets/pic/img5.jpg', caption: 'Drama Skit',         year: '2K25' },
  { src: '/assets/pic/prashmita.jpg', caption: 'DJ Night',           year: '2K25' },
 ];

const Gallery = () => {
  const trackRef   = useRef(null);
  const [lightbox, setLightbox]   = useState(null);
  const [isDragging, setDragging] = useState(false);
  const [progress, setProgress]   = useState(0); // 0–100 for progress bar

  // ── Drag / touch state (refs = no re-render lag)
  const drag = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
    velX: 0,
    lastX: 0,
    lastT: 0,
    raf: null,
  });

  // Update progress bar
  const updateProgress = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? (el.scrollLeft / max) * 100 : 0);
  }, []);

  // Momentum scroll after release
  const momentum = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const d = drag.current;
    if (Math.abs(d.velX) < 0.5) { updateProgress(); return; }
    d.velX *= 0.92;
    el.scrollLeft += d.velX;
    updateProgress();
    d.raf = requestAnimationFrame(momentum);
  }, [updateProgress]);

  const stopMomentum = () => {
    if (drag.current.raf) {
      cancelAnimationFrame(drag.current.raf);
      drag.current.raf = null;
    }
  };

  // ── MOUSE events
  const onMouseDown = (e) => {
    stopMomentum();
    const el = trackRef.current;
    drag.current = { ...drag.current, active: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft, velX: 0, lastX: e.pageX, lastT: Date.now() };
    setDragging(true);
  };

  const onMouseMove = (e) => {
    const d = drag.current;
    if (!d.active) return;
    e.preventDefault();
    const el = trackRef.current;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - d.startX) * 1.2;
    const now = Date.now();
    d.velX = (e.pageX - d.lastX) / Math.max(1, now - d.lastT) * 16;
    d.lastX = e.pageX;
    d.lastT = now;
    el.scrollLeft = d.scrollLeft - walk;
    updateProgress();
  };

  const onMouseUp = () => {
    drag.current.active = false;
    setDragging(false);
    drag.current.raf = requestAnimationFrame(momentum);
  };

  // ── TOUCH events
  const onTouchStart = (e) => {
    stopMomentum();
    const el = trackRef.current;
    const t = e.touches[0];
    drag.current = { ...drag.current, active: true, startX: t.pageX - el.offsetLeft, scrollLeft: el.scrollLeft, velX: 0, lastX: t.pageX, lastT: Date.now() };
  };

  const onTouchMove = (e) => {
    const d = drag.current;
    if (!d.active) return;
    const el = trackRef.current;
    const t = e.touches[0];
    const x = t.pageX - el.offsetLeft;
    const walk = (x - d.startX) * 1.1;
    const now = Date.now();
    d.velX = (t.pageX - d.lastX) / Math.max(1, now - d.lastT) * 16;
    d.lastX = t.pageX;
    d.lastT = now;
    el.scrollLeft = d.scrollLeft - walk;
    updateProgress();
  };

  const onTouchEnd = () => {
    drag.current.active = false;
    drag.current.raf = requestAnimationFrame(momentum);
  };

  // scroll via button arrows
  const scrollBy = (dir) => {
    stopMomentum();
    const el = trackRef.current;
    const amount = el.clientWidth * 0.75 * dir;
    el.scrollBy({ left: amount, behavior: 'smooth' });
    setTimeout(updateProgress, 400);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateProgress, { passive: true });
    return () => el.removeEventListener('scroll', updateProgress);
  }, [updateProgress]);

  // Lightbox keyboard nav
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setLightbox(l => (l + 1) % PHOTOS.length);
      if (e.key === 'ArrowLeft')  setLightbox(l => (l - 1 + PHOTOS.length) % PHOTOS.length);
      if (e.key === 'Escape')     setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <section id="gallery" className="gal-section">
      <div className="gal-dot-bg" />

      <div className="gal-header">
        <span className="gal-eyebrow">✦ Previous Year ✦</span>
        <div className="gal-title-wrap">
          <h2 className="gal-title">MEMORIES</h2>
          <span className="gal-classified">CAPTURED MOMENTS</span>
        </div>
        <p className="gal-sub">Relive the magic of LITHIUM 2K25</p>
      </div>

      {/* Film strip + scroll track */}
      <div className="gal-filmstrip-wrap">

        {/* Top holes */}
        <div className="gal-film-holes top">
          {Array.from({ length: 20 }).map((_, i) => <span key={i} className="film-hole" />)}
        </div>

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className={`gal-track ${isDragging ? 'dragging' : ''}`}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className="gal-card"
              onClick={() => !drag.current.active && setLightbox(i)}
              style={{ '--i': i }}
            >
              {/* Placeholder — replace with real <img> */}
              <div className="gal-card-img">
                <span className="gal-card-ico">📸</span>
                <span className="gal-card-num">0{i + 1}</span>
              </div>
              {/* Uncomment for real images: */}
              {/* <img src={photo.src} alt={photo.caption} draggable="false" /> */}

              <div className="gal-card-info">
                <span className="gal-card-caption">{photo.caption}</span>
                <span className="gal-card-year">{photo.year}</span>
              </div>

              {/* Comic corner */}
              <div className="gal-card-corner" />
            </div>
          ))}
        </div>

        {/* Bottom holes */}
        <div className="gal-film-holes bottom">
          {Array.from({ length: 20 }).map((_, i) => <span key={i} className="film-hole" />)}
        </div>
      </div>

      {/* Controls row */}
      <div className="gal-controls">
        {/* Progress bar */}
        <div className="gal-progress-wrap">
          <div className="gal-progress-track">
            <div className="gal-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Hint + arrows */}
        <div className="gal-hints">
          <span className="gal-hint-text">← SWIPE OR DRAG →</span>
          <div className="gal-arrows">
            <button className="gal-arrow" onClick={() => scrollBy(-1)} aria-label="Previous">‹</button>
            <button className="gal-arrow" onClick={() => scrollBy(1)}  aria-label="Next">›</button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="gal-lightbox" onClick={() => setLightbox(null)}>
          <button className="lb-close" onClick={() => setLightbox(null)}>✕</button>

          <div className="lb-card" onClick={e => e.stopPropagation()}>
            <div className="lb-img-wrap">
              <div className="lb-placeholder">
                <span>📸</span>
                <span>{PHOTOS[lightbox].caption}</span>
              </div>
              {/* <img src={PHOTOS[lightbox].src} alt={PHOTOS[lightbox].caption} /> */}
            </div>
            <div className="lb-info">
              <span className="lb-caption">{PHOTOS[lightbox].caption}</span>
              <div className="lb-meta">
                <span className="lb-tag">{PHOTOS[lightbox].year}</span>
                <span className="lb-counter">{lightbox + 1} / {PHOTOS.length}</span>
              </div>
            </div>
          </div>

          <button className="lb-nav lb-prev"
            onClick={e => { e.stopPropagation(); setLightbox(l => (l - 1 + PHOTOS.length) % PHOTOS.length); }}>‹</button>
          <button className="lb-nav lb-next"
            onClick={e => { e.stopPropagation(); setLightbox(l => (l + 1) % PHOTOS.length); }}>›</button>
        </div>
      )}
    </section>
  );
};

export default Gallery;