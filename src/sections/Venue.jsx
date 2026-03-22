import React from 'react';
import '../styles/Venue.css';

const Venue = () => {
  return (
    <section id="venue" className="comic-venue-section">
      <div className="venue-dot-bg" />

      <div className="comic-venue-inner">
        {/* Header */}
        <div className="comic-section-header">
          <span className="comic-venue-badge">✦ Location ✦</span>
          <h2 className="comic-venue-title">THE PORTAL</h2>
          <span className="venue-classified">MISSION COORDINATES</span>
        </div>

        <div className="comic-venue-grid">
          {/* Info panel */}
          <div className="comic-venue-info">
            <div className="venue-info-row">
              <div className="venue-info-icon-wrap"></div>
              <div>
                <div className="venue-info-label">Venue</div>
                <div className="venue-info-value">Laban Hrad Mancha BD Auditorium</div>
                <div className="venue-info-sub">Kolkata, West Bengal</div>
              </div>
            </div>

            <div className="venue-divider" />

            <div className="venue-info-row">
              <div className="venue-info-icon-wrap"></div>
              <div>
                <div className="venue-info-label">Date & Time</div>
                <div className="venue-info-value">April 25, 2026</div>
                <div className="venue-info-sub">12:00 PM onwards</div>
              </div>
            </div>

            <div className="venue-divider" />

            <div className="venue-info-row">
              <div className="venue-info-icon-wrap">🎭</div>
              <div>
                <div className="venue-info-label">Dress Code</div>
                <div className="venue-info-value">Any Character. Any Mind</div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Laban+Hrad+Mancha+Kolkata"
              target="_blank"
              rel="noreferrer"
              className="comic-btn-venue"
            >
              <span>▶</span> Get Directions
            </a>
          </div>

          {/* Map */}
          <div className="comic-venue-map">
            <div className="map-header-bar">LIVE MAP FEED</div>
            <iframe
              title="Venue Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.053255936746!2d88.4116463!3d22.5771092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275cc15555555%3A0x6006f6e52c8b8434!2sLaban%20Hrad%20Mancha!5e0!3m2!1sen!2sin!4v1710000000000"
              width="100%"
              height="340"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
