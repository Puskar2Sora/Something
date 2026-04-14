import React from 'react';
import EventCard from '../components/EventCard';
import '../styles/Events.css';
import Floatchar from '../components/Floatchar';

const Events = () => {
  const eventList = [
    {
      title: "Musical Performances",
      desc: "Soulful voices and mesmerising melodies from beyond any world.",
      icon: "🎵",
      tag: "Live Stage",
    },
    {
      title: "Dance Fiesta",
      desc: "A cascade of rhythm, energy and expression across dimensions.",
      icon: "💃",
      tag: "Performance",
    },
    {
      title: "Talent Hunt",
      desc: "Top most talents created and denoted by groomers",
      icon: "❤️",
      tag: "Grommers",
    },
    {
      title: "Drama & Skits",
      desc: "Stories come alive under the spotlight. Become your character.",
      icon: "🎭",
      tag: "Theatre",
    },
    {
      title: "Musical-Band Night",
      desc: "Dance the veil away as the night ignites with beats and neon light.",
      icon: "🎧",
      tag: "Night Event",
    },
    {
      title: "Surprise",
       desc: "Something Good is coming",
      icon:"🕸️",
      tag: "Nothing",
    },
  ];

  return (
    <section id="events" className="comic-events-section">
      {/* Dot texture */}
      <div className="events-dot-bg" />

      <div className="comic-events-inner">
        {/* Heading */}
        <div className="comic-section-header">
          <span className="comic-section-label">✦ Line-Up ✦</span>
          <div className="comic-section-title-wrap">
            <h2 className="comic-section-title">EVENT</h2>
            <div className="comic-classified-badge">
              <h2 className="comic-section-title-2">HIGHLIGHTS</h2>
              <span className="classified-tag">CLASSIFIED INTEL</span>
            </div>
          </div>
          <p className="comic-section-sub">
            Six realms. One night. Choose your character.
          </p>
        </div>

        {/* Cards */}
        <div className="comic-events-grid">
          {eventList.map((event, index) => (
            <EventCard
              key={index}
              index={index}
              title={event.title}
              description={event.desc}
              icon={event.icon}
              tag={event.tag}
            />
          ))}
        </div>
      </div>

      {/* Spider-Man peeking from corner */}
      <div className="events-spiderman">🕷️</div>
            <Floatchar
        src="/assets-optimized/chars/fall.webp"
        alt="Villain"
        size={350}
        top="-10%"
        left="0.5%"
        animation="float"
        glowColor="#FF2D87"
      />
    </section>
  );
};

export default Events;