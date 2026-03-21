import React, { useState } from 'react';
import '../styles/Contact.css';

const SOCIALS = [
  { icon: '📸', label: 'Instagram', handle: '@lithium2k26', href: '#' },
  { icon: '💬', label: 'WhatsApp', handle: 'Join Group', href: '#' },
  { icon: '✉️', label: 'Email', handle: 'lithium@bit.edu.in', href: 'mailto:lithium@bit.edu.in' },
  { icon: '📘', label: 'Facebook', handle: 'LITHIUM 2K26', href: '#' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // Replace with your actual form submission logic
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="ct-section">
      <div className="ct-dot-bg" />

      <div className="ct-inner">
        {/* Header */}
        <div className="ct-header">
          <span className="ct-eyebrow">✦ Reach Out ✦</span>
          <div className="ct-title-wrap">
            <h2 className="ct-title">CONTACT</h2>
            <span className="ct-classified">OPEN CHANNEL</span>
          </div>
          <p className="ct-sub">Questions? Collab? We're all ears.</p>
        </div>

        <div className="ct-grid">
          {/* Left: Form */}
          <div className="ct-form-card">
            <div className="ct-form-header">
              <span className="ct-form-tag"> SEND A MESSAGE</span>
            </div>

            {sent ? (
              <div className="ct-success">
                <span className="ct-success-icon"></span>
                <span className="ct-success-text">MESSAGE SENT! WE'LL GET BACK TO YOU.</span>
              </div>
            ) : (
              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-field">
                  <label className="ct-label">YOUR NAME</label>
                  <input
                    className="ct-input"
                    type="text"
                    name="name"
                    placeholder="Spider-Man"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="ct-field">
                  <label className="ct-label">EMAIL ADDRESS</label>
                  <input
                    className="ct-input"
                    type="email"
                    name="email"
                    placeholder="hero@universe.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="ct-field">
                  <label className="ct-label">YOUR MESSAGE</label>
                  <textarea
                    className="ct-input ct-textarea"
                    name="message"
                    placeholder="What's on your mind, hero?"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </div>

                <button type="submit" className="ct-submit">
                  <span className="ct-submit-arrow">▶</span>
                  TRANSMIT MESSAGE
                </button>
              </form>
            )}
          </div>

          {/* Right: Info + Socials */}
          <div className="ct-right">
            {/* Org info */}
            <div className="ct-info-card">
              <div className="ct-form-header">
                <span className="ct-form-tag">ORGANISED BY</span>
              </div>
              <div className="ct-info-body">
                <p className="ct-org-name">Techno Bengal Institute of Technology</p>
                <p className="ct-org-sub">Student Cultural Committee · LITHIUM 2K26</p>
                <div className="ct-info-row">
                  <span className="ct-info-icon"></span>
                  <span>Basanti Highway, Tech Town, Bagdoba ,Kolkata — 700150</span>
                </div>
                <div className="ct-info-row">
                  <span className="ct-info-icon"></span>
                  <span>April 28, 2026 · 12:00 PM onwards</span>
                </div>
              </div>
            </div>

            {/* Social grid */}
            <div className="ct-socials-card">
              <div className="ct-form-header">
                <span className="ct-form-tag">🔗 FIND US ON</span>
              </div>
              <div className="ct-socials-grid">
                {SOCIALS.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="ct-social-item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="ct-social-icon">{s.icon}</span>
                    <div className="ct-social-text">
                      <span className="ct-social-label">{s.label}</span>
                      <span className="ct-social-handle">{s.handle}</span>
                    </div>
                    <span className="ct-social-arrow">›</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;