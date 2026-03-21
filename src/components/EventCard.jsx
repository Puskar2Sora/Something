import React from 'react';
import '../styles/EventCard.css';

const CARD_COLORS = ['#FFB3BA', '#BAE1FF', '#BAFFC9', '#FFE4BA', '#E8BAFF', '#BAFFF0'];
const BORDER_COLORS = ['#E8192C', '#00D4FF', '#00FF88', '#FF9500', '#FF2D87', '#00D4FF'];

const EventCard = ({ title, description, icon, tag, index = 0 }) => {
  const bg = CARD_COLORS[index % CARD_COLORS.length];
  const accent = BORDER_COLORS[index % BORDER_COLORS.length];

  return (
    <div className="comic-event-card" style={{ '--card-bg': bg, '--card-accent': accent }}>
      {/* Header bar */}
      <div className="comic-card-header">
        {tag && <span className="comic-card-tag">{tag}</span>}
        <span className="comic-card-icon">{icon}</span>
      </div>

      {/* Title */}
      <div className="comic-card-title-bar">
        <h3 className="comic-card-title">{title}</h3>
      </div>

      {/* Body */}
      <div className="comic-card-body">
        <p className="comic-card-desc">{description}</p>
      </div>

      {/* Bottom accent */}
      <div className="comic-card-foot" />
    </div>
  );
};

export default EventCard;
