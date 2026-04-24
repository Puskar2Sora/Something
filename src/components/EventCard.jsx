import React from 'react';
import '../styles/EventCard.css';

const ACCENTS = ['#9A7B2F','#7B4F9A','#B84040','#3A7A6A','#3A5E9A','#7A5C0A'];

const CornerSVG = ({ color }) => (
  <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className="corner-svg">
    <path d="M1,1 L1,11" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M1,1 L11,1" stroke={color} strokeWidth="1.5" fill="none"/>
    <circle cx="1" cy="1" r="2.2" fill={color}/>
    <path d="M1,6 C4,6 6,4 6,1" stroke={color} strokeWidth=".7" fill="none" opacity=".45"/>
    <circle cx="11" cy="1" r="1" fill={color} opacity=".4"/>
    <circle cx="1" cy="11" r="1" fill={color} opacity=".4"/>
  </svg>
);

const TopCrownSVG = ({ accent: ac }) => {
  const uid = ac.replace('#', '');
  return (
    <svg className="bg-crown" viewBox="0 0 320 110"
      xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id={`dot${uid}`} x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="7" cy="7" r=".8" fill={ac} opacity=".18"/>
        </pattern>
      </defs>
      <rect width="320" height="110" fill={`${ac}0d`}/>
      <rect width="320" height="110" fill={`url(#dot${uid})`}/>
      <line x1="0" y1="2" x2="320" y2="2" stroke={ac} strokeWidth="1.5" opacity=".6"/>
      <g fill="none" stroke={ac} strokeWidth=".65" opacity=".4">
        <path d="M60,55 C80,50 100,52 118,55 C136,58 148,56 155,55"/>
        <path d="M260,55 C240,50 220,52 202,55 C184,58 172,56 165,55"/>
      </g>
      <g transform="translate(160,55)">
        <path d="M0,-20 L3.5,-9 L0,-5 L-3.5,-9 Z" fill={ac} opacity=".9"/>
        <path d="M0,-5 L5,3 L0,11 L-5,3 Z" fill={ac} opacity=".9"/>
        <path d="M0,3 C-9,1 -15,-7 -13,-14 C-11,-20 -5,-17 -5,-12 C-5,-7 -9,-6 -9,-3 C-9,2 -2,5 0,3"
          fill="none" stroke={ac} strokeWidth="1.2" opacity=".85"/>
        <path d="M0,3 C9,1 15,-7 13,-14 C11,-20 5,-17 5,-12 C5,-7 9,-6 9,-3 C9,2 2,5 0,3"
          fill="none" stroke={ac} strokeWidth="1.2" opacity=".85"/>
      </g>
      <line x1="0" y1="107" x2="320" y2="107" stroke={ac} strokeWidth=".8" opacity=".3"/>
    </svg>
  );
};

const BottomFrameSVG = ({ accent: ac }) => {
  const uid = ac.replace('#', '');
  return (
    <svg viewBox="0 0 320 44" xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      style={{ position:'absolute', top:0, left:0, width:'100%', height:'100%' }}>
      <defs>
        <pattern id={`bdot${uid}`} x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="7" cy="7" r=".8" fill={ac} opacity=".18"/>
        </pattern>
      </defs>
      <rect width="320" height="44" fill={`${ac}0d`}/>
      <rect width="320" height="44" fill={`url(#bdot${uid})`}/>
      <line x1="0" y1="2" x2="320" y2="2" stroke={ac} strokeWidth=".8" opacity=".3"/>
      <g fill="none" stroke={ac} strokeWidth=".9" opacity=".65">
        <path d="M10,22 C10,18 16,17 17,22 C18,27 24,26 24,22 C24,17 18,14 14,17"/>
        <path d="M4,22 C4,16 0,14 0,22 C0,28 8,31 10,26"/>
        <circle cx="10" cy="22" r="1" fill={ac} stroke="none"/>
        <circle cx="24" cy="22" r="1" fill={ac} stroke="none"/>
      </g>
      <g fill="none" stroke={ac} strokeWidth=".9" opacity=".65" transform="translate(320,0) scale(-1,1)">
        <path d="M10,22 C10,18 16,17 17,22 C18,27 24,26 24,22 C24,17 18,14 14,17"/>
        <path d="M4,22 C4,16 0,14 0,22 C0,28 8,31 10,26"/>
        <circle cx="10" cy="22" r="1" fill={ac} stroke="none"/>
        <circle cx="24" cy="22" r="1" fill={ac} stroke="none"/>
      </g>
      <g transform="translate(160,22)">
        <path d="M0,-7 L5,0 L0,7 L-5,0 Z" fill={ac} opacity=".7"/>
        <path d="M0,-4 L3,0 L0,4 L-3,0 Z" fill={ac}/>
      </g>
      <g stroke={ac} strokeWidth=".55" opacity=".38" fill="none">
        <line x1="28" y1="22" x2="148" y2="22"/>
        <line x1="172" y1="22" x2="292" y2="22"/>
      </g>
      <line x1="0" y1="42" x2="320" y2="42" stroke={ac} strokeWidth="1.5" opacity=".55"/>
    </svg>
  );
};

/**
 * EventCard
 *
 * Props:
 *   title       — string
 *   description — string
 *   icon        — emoji (used as fallback when no topImage)
 *   tag         — string (category label)
 *   index       — number (0-based, controls accent colour)
 *   topImage    — img src string — replaces top placeholder when provided
 *   bottomImage — img src string — replaces bottom placeholder when provided
 */
const EventCard = ({
  title,
  description,
  icon,
  tag,
  index = 0,
  topImage = null,
  bottomImage = null,
}) => {
  const accent = ACCENTS[index % ACCENTS.length];
  const num = String(index + 1).padStart(2, '0');

  return (
    <div className="royal-card">

      {/* Corner ornaments */}
      <div className="co co-tl"><CornerSVG color={accent}/></div>
      <div className="co co-tr"><CornerSVG color={accent}/></div>
      <div className="co co-bl"><CornerSVG color={accent}/></div>
      <div className="co co-br"><CornerSVG color={accent}/></div>

      {/* Side border rules */}
      <div className="side-rule side-l"
        style={{ background:`linear-gradient(to bottom,${accent}cc,${accent}33,${accent}cc)` }}/>
      <div className="side-rule side-r"
        style={{ background:`linear-gradient(to bottom,${accent}cc,${accent}33,${accent}cc)` }}/>

      {/* ══ TOP IMAGE FRAME ══
          Replace the inner div with <img src={topImage} /> in production */}
      <div className="frame-top">
        <TopCrownSVG accent={accent}/>
        <div className="img-placeholder">
          {topImage
            ? <img src={topImage} alt={title} className="frame-img"/>
            : <span className="ph-icon">{icon}</span>
          }
        </div>
        <svg className="frame-filigree" viewBox="0 0 320 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke={accent} strokeWidth=".9" opacity=".55">
            <path d="M0,16 C20,10 40,12 60,16 C80,20 100,18 120,16 C140,14 154,15 160,16"/>
            <path d="M320,16 C300,10 280,12 260,16 C240,20 220,18 200,16 C180,14 166,15 160,16"/>
          </g>
          <path d="M160,16 L163,10 L160,4 L157,10 Z" fill={accent} opacity=".65"/>
        </svg>
      </div>

      {/* ══ CONTENT ══ */}
      <div className="card-tag-row">
        <span className="card-tag" style={{ color: accent }}>{tag}</span>
        <span className="card-num">{num}</span>
      </div>
      <h3 className="card-title">{title}</h3>
      <p  className="card-desc">{description}</p>

      {/* ══ BOTTOM IMAGE FRAME ══
          Replace span with <img src={bottomImage} /> in production */}
      <div className="frame-bot">
        <BottomFrameSVG accent={accent}/>
        {bottomImage
          ? <img src={bottomImage} alt="" className="bot-frame-img"/>
          : <span className="bot-ph">✦ &nbsp;Add Image&nbsp; ✦</span>
        }
      </div>

    </div>
  );
};

export default EventCard;