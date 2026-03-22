import React, { useState } from 'react';
import '../styles/FAQ.css';
import Floatchar from '../components/Floatchar';

const FAQS = [
  {
    q: 'Who can attend LITHIUM 2K26?',
    a: 'Any student of Techno Bengal Institute of Technology can attend.',
    color: '#FFB3BA',
    accent: '#E8192C',
  },
  {
    q: 'Do I need to wear a costume?',
    a: 'Costumes are strongly encouraged but not mandatory.',
    color: '#BAE1FF',
    accent: '#00D4FF',
  },
  {
    q: 'Is there a registration fee?',
    a: 'Entry to the main event is free for all TBIT students.',
    color: '#BAFFC9',
    accent: '#00FF88',
  },
  {
    q: 'How do I register for in any event?',
    a: 'Only in one event 1st years can pariticipate i.e "TALENT HUNT",Registration links will be shared on our official Instagram page and WhatsApp group. Stay tuned for updates!',
    color: '#FFE4BA',
    accent: '#FF9500',
  },
  {
    q: 'Where exactly is the venue?',
    a: 'Laban Hrad Mancha BD Auditorium, Sector V, Salt Lake, Kolkata. The venue is easily accessible by bus and metro. Check the Venue section for the map.',
    color: '#E8BAFF',
    accent: '#FF2D87',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(o => o === i ? null : i);

  return (
    <section id="faq" className="faq-section">
    
      <div className="faq-dot-bg" />

      <div className="faq-inner">
        {/* Header */}
        <div className="faq-header">
          <span className="faq-eyebrow">✦ Got Questions? ✦</span>
          <div className="faq-title-wrap">
            <h2 className="faq-title">FAQs</h2>
            <span className="faq-classified">CLASSIFIED INTEL</span>
          </div>
          <p className="faq-sub">Everything you need to know before entering the veil.</p>
        </div>

        {/* Accordion Cards */}
        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? 'open' : ''}`}
              style={{ '--faq-bg': faq.color, '--faq-accent': faq.accent }}
            >
              {/* Question bar */}
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span className="faq-q-text">{faq.q}</span>
                <span className="faq-toggle">
                  <span className="faq-toggle-icon">{open === i ? '−' : '+'}</span>
                </span>
              </button>

              {/* Answer */}
              <div className="faq-answer">
                <p className="faq-answer-text">{faq.a}</p>
              </div>

              {/* Bottom accent bar */}
              <div className="faq-foot" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="faq-cta">
          <Floatchar
        src="/assets/chars/zotopia.png"
        alt="Villain"
        size={255}
        top="75%"
        left="28%"
      />
        </div>
      </div>

       
      
      
    </section>
  );
};

export default FAQ;