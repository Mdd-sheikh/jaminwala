import React, { useState } from "react";
import "./LandingPage_section_two.css";

const districts = [
  {
    id: 1,
    name: "Patna",
    listings: "1,240+",
    tag: "Most Popular",
    bg: "linear-gradient(160deg, #1a3a5c 0%, #2d6a9f 60%, #1a3a5c 100%)",
    illustration: (
      <svg viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" className="tds-svg">
        <ellipse cx="60" cy="70" rx="38" ry="10" fill="#c8a96e" opacity="0.4" />
        <rect x="30" y="55" width="60" height="20" rx="2" fill="#c8a96e" />
        <rect x="36" y="42" width="48" height="15" rx="2" fill="#d4b87a" />
        <rect x="42" y="30" width="36" height="14" rx="2" fill="#c8a96e" />
        <ellipse cx="60" cy="30" rx="14" ry="16" fill="#d4b87a" />
        <ellipse cx="60" cy="18" rx="8" ry="10" fill="#c8a96e" />
        <ellipse cx="60" cy="10" rx="4" ry="6" fill="#d4b87a" />
        <line x1="60" y1="4" x2="60" y2="0" stroke="#e8c97a" strokeWidth="1.5" />
        <rect x="34" y="50" width="5" height="25" rx="1" fill="#b8945a" />
        <rect x="44" y="50" width="5" height="25" rx="1" fill="#b8945a" />
        <rect x="71" y="50" width="5" height="25" rx="1" fill="#b8945a" />
        <rect x="81" y="50" width="5" height="25" rx="1" fill="#b8945a" />
        <rect x="22" y="73" width="76" height="5" rx="1" fill="#b8945a" />
        <rect x="16" y="78" width="88" height="5" rx="1" fill="#a07840" />
        <circle cx="15" cy="15" r="1" fill="white" opacity="0.8" />
        <circle cx="100" cy="25" r="1.5" fill="white" opacity="0.6" />
        <circle cx="95" cy="10" r="1" fill="white" opacity="0.7" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Gaya",
    listings: "850+",
    tag: "Heritage",
    bg: "linear-gradient(160deg, #2c1810 0%, #5c3020 50%, #3a2015 100%)",
    illustration: (
      <svg viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" className="tds-svg">
        <ellipse cx="60" cy="45" rx="32" ry="38" fill="#1a0a05" />
        <rect x="52" y="75" width="16" height="18" rx="4" fill="#c8956a" />
        <ellipse cx="60" cy="52" rx="22" ry="26" fill="#c8956a" />
        <ellipse cx="60" cy="28" rx="22" ry="12" fill="#1a0a05" />
        <path d="M38 45 Q28 70 35 95 Q45 100 48 90 Q42 75 42 60 Z" fill="#1a0a05" />
        <path d="M82 45 Q92 70 85 95 Q75 100 72 90 Q78 75 78 60 Z" fill="#1a0a05" />
        <ellipse cx="51" cy="52" rx="5" ry="3.5" fill="white" />
        <ellipse cx="69" cy="52" rx="5" ry="3.5" fill="white" />
        <circle cx="52" cy="52" r="2.5" fill="#2a1a10" />
        <circle cx="70" cy="52" r="2.5" fill="#2a1a10" />
        <circle cx="53" cy="51" r="0.8" fill="white" />
        <circle cx="71" cy="51" r="0.8" fill="white" />
        <path d="M45 47 Q51 44 57 47" stroke="#1a0a05" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M63 47 Q69 44 75 47" stroke="#1a0a05" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <ellipse cx="57" cy="63" rx="3" ry="2" fill="#b87050" />
        <ellipse cx="63" cy="63" rx="3" ry="2" fill="#b87050" />
        <path d="M52 70 Q60 75 68 70" stroke="#c05040" strokeWidth="1.5" fill="#c05040" fillOpacity="0.5" />
        <path d="M35 95 Q45 88 52 90 Q60 93 68 90 Q75 88 85 95 L88 110 L32 110 Z" fill="#8B1A1A" />
        <path d="M50 90 Q60 95 70 90" stroke="#ffd700" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Muzaffarpur",
    listings: "620+",
    tag: "Nature",
    bg: "linear-gradient(160deg, #0d2a1a 0%, #1a4a2a 50%, #0d2a1a 100%)",
    illustration: (
      <svg viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" className="tds-svg">
        <path d="M25 85 Q20 60 30 40 Q40 20 55 18 Q70 16 80 28 Q92 38 90 55 Q95 70 88 85 Q75 95 60 92 Q40 95 25 85 Z" fill="#1a5a2a" stroke="#2a7a3a" strokeWidth="1" />
        <path d="M35 30 Q50 50 55 70 Q60 85 65 88" stroke="#4a9a6a" strokeWidth="2" fill="none" opacity="0.8" />
        <path d="M65 25 Q60 45 58 65 Q56 78 55 88" stroke="#3a8a5a" strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M30 55 Q45 58 60 55 Q72 53 82 60" stroke="#4a9a6a" strokeWidth="1.5" fill="none" opacity="0.6" />
        <circle cx="45" cy="40" r="8" fill="#2a6a3a" opacity="0.6" />
        <circle cx="70" cy="45" r="10" fill="#1a5a2a" opacity="0.8" />
        <circle cx="55" cy="65" r="6" fill="#2a7a3a" opacity="0.5" />
        <path d="M25 85 Q20 60 30 40 Q40 20 55 18 Q70 16 80 28 Q92 38 90 55 Q95 70 88 85 Q75 95 60 92 Q40 95 25 85 Z" fill="none" stroke="#5ab87a" strokeWidth="1.5" opacity="0.6" />
        <circle cx="50" cy="45" r="2" fill="#ffd700" />
        <circle cx="68" cy="60" r="2" fill="#ffd700" />
        <circle cx="55" cy="75" r="1.5" fill="#ffd700" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Bhagalpur",
    listings: "430+",
    tag: "Scenic",
    bg: "linear-gradient(160deg, #2a1a0a 0%, #5a3a1a 40%, #8a6040 70%, #4a2a10 100%)",
    illustration: (
      <svg viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" className="tds-svg">
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8B6040" />
            <stop offset="100%" stopColor="#5a3a1a" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="120" height="70" fill="url(#skyGrad)" opacity="0.3" />
        <path d="M0 80 Q20 30 40 20 Q55 10 70 25 Q85 38 90 50 L120 80 Z" fill="#3a2510" />
        <path d="M10 110 Q30 40 50 15 Q60 5 70 15 Q85 35 95 60 L120 110 Z" fill="#5a3820" />
        <path d="M50 15 Q60 5 70 15 Q65 20 60 18 Q55 20 50 15 Z" fill="#e8d0b0" opacity="0.7" />
        <path d="M0 110 Q30 75 60 80 Q90 85 120 110 Z" fill="#2a1a08" />
      </svg>
    ),
  },
];

export default function TopDistricts() {
  const [active, setActive] = useState(null);

  const toggle = (id) => setActive((prev) => (prev === id ? null : id));

  return (
    <section className="tds-section">
      {/* ── Header ── */}
      <header className="tds-header">
        <span className="tds-eyebrow">PRIME LOCATIONS</span>
        <div className="tds-header-row">
          <h2 className="tds-title">Top Districts</h2>
          <a href="#" className="tds-view-all" aria-label="View all districts">
            View All <span className="tds-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      {/* ── Cards Grid ── */}
      <div className="tds-grid" role="list">
        {districts.map((d) => (
          <article
            key={d.id}
            className={`tds-card${active === d.id ? " tds-card--active" : ""}`}
            style={{ background: d.bg }}
            onMouseEnter={() => setActive(d.id)}
            onMouseLeave={() => setActive(null)}
            onTouchEnd={(e) => { e.preventDefault(); toggle(d.id); }}
            role="listitem"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggle(d.id)}
            aria-label={`${d.name} — ${d.listings} Listings`}
          >
            {/* Badge */}
            <span className="tds-badge">{d.tag}</span>

            {/* SVG illustration */}
            <div className="tds-illus-wrap">{d.illustration}</div>

            {/* Gradient overlay */}
            <div className="tds-overlay" aria-hidden="true" />

            {/* Bottom info */}
            <div className="tds-info">
              <h3 className="tds-name">{d.name}</h3>
              <p className="tds-count">
                <svg className="tds-pin" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M6 0C3.24 0 1 2.24 1 5c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 7.5C4.62 7.5 3.5 6.38 3.5 5S4.62 2.5 6 2.5 8.5 3.62 8.5 5 7.38 7.5 6 7.5z" fill="currentColor" />
                </svg>
                {d.listings} Listings
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}