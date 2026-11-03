"use client";

export default function Ticker() {
  const items = [
    "DIGITAL ADVERTISING",
    "INFLUENCER MARKETING",
    "BRAND STRATEGY",
    "PERFORMANCE CAMPAIGNS",
    "MULTI-PLATFORM CAMPAIGNS",
    "LEAD GENERATION",
  ];

  return (
    <div aria-label="Marketing capabilities" className="studio-ticker">
      <div className="studio-ticker-track">
        {/* Set 1 */}
        <div className="studio-ticker-content">
          {items.map((item, idx) => (
            <span key={`t1-${idx}`} className="studio-ticker-item">
              {item} <b>✳</b>
            </span>
          ))}
        </div>
        {/* Set 2 (exact duplicate for infinite seamless loop) */}
        <div className="studio-ticker-content" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`t2-${idx}`} className="studio-ticker-item">
              {item} <b>✳</b>
            </span>
          ))}
        </div>
        {/* Set 3 (extra duplicate ensuring zero gaps on ultrawide monitors) */}
        <div className="studio-ticker-content" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`t3-${idx}`} className="studio-ticker-item">
              {item} <b>✳</b>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
