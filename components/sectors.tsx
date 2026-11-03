"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";

type IndustryItem = {
  num: string;
  name: string;
};

const industries: IndustryItem[] = [
  { num: "01", name: "EdTech" },
  { num: "02", name: "Education & Test Prep" },
  { num: "03", name: "Technology & Startups" },
  { num: "04", name: "Consumer Brands" },
  { num: "05", name: "Institutions" },
  { num: "06", name: "Digital Platforms" },
];

function IndustryCard({ item }: { item: IndustryItem }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const rafRef = useRef<number | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
  const [leavePos, setLeavePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({
    rotX: "0",
    rotY: "0",
    shadowX: "0",
    shadowY: "0",
  });

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);

    setOrigin({ x, y });
    setCurrentPos({ x, y });
    setLeavePos({ x, y });
    setIsHovered(true);
    setIsTransitioning(false);
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);

      // Normalized coordinates from card center (-1 to 1)
      const px = (x - rect.width / 2) / (rect.width / 2);
      const py = (y - rect.height / 2) / (rect.height / 2);

      // Subtle, premium 3D tilt angles (max ~7.5 degrees)
      const maxTilt = 7.5;
      const rotX = (-py * maxTilt).toFixed(2);
      const rotY = (px * maxTilt).toFixed(2);

      // Dynamic shadows cast opposite to the cursor's push direction
      const shadowX = (-px * 14).toFixed(1);
      const shadowY = (-py * 10 + 16).toFixed(1);

      setCurrentPos({ x, y });
      setTilt({
        rotX,
        rotY,
        shadowX,
        shadowY,
      });
    });
  }, []);

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      setLeavePos({
        x: Math.round(e.clientX - rect.left),
        y: Math.round(e.clientY - rect.top),
      });
    }

    setIsHovered(false);
    setIsTransitioning(true);
    setTilt({
      rotX: "0",
      rotY: "0",
      shadowX: "0",
      shadowY: "0",
    });
  };

  const transformStyle = isHovered
    ? `perspective(1000px) translateY(-6px) translateZ(14px) rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg) scale3d(1.025, 1.025, 1.025)`
    : "perspective(1000px) translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";

  const boxShadowStyle = isHovered
    ? `${tilt.shadowX}px ${tilt.shadowY}px 36px rgba(0, 0, 0, 0.55), 0 0 25px rgba(33, 217, 246, 0.28)`
    : "none";

  return (
    <Link
      ref={cardRef}
      className={`studio-industry ${isHovered ? "is-hovered" : ""}`}
      href="#contact"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        boxShadow: boxShadowStyle,
        zIndex: isHovered ? 12 : 1,
        transition: isTransitioning
          ? "transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.65s ease"
          : "transform 0.12s ease-out, box-shadow 0.12s ease-out",
      }}
    >
      {/* 1. Mouse-Originating Liquid Radial Wave Reveal */}
      <div
        aria-hidden="true"
        className="studio-industry-reveal"
        style={{
          background: `radial-gradient(circle 380px at ${currentPos.x}px ${currentPos.y}px, #2be5ff 0%, #15b8fa 34%, #0f85f1 68%, #0752c7 100%)`,
          clipPath: isHovered
            ? `circle(150% at ${origin.x}px ${origin.y}px)`
            : `circle(0% at ${leavePos.x}px ${leavePos.y}px)`,
          opacity: isHovered ? 1 : 0,
          transition: isHovered
            ? "clip-path 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease"
            : "clip-path 0.55s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.45s ease",
        }}
      />

      {/* 2. Luminous Specular Sheen (follows cursor light in real-time) */}
      <div
        aria-hidden="true"
        className="studio-industry-sheen"
        style={{
          background: `radial-gradient(circle 200px at ${currentPos.x}px ${currentPos.y}px, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 70%)`,
          opacity: isHovered ? 0.75 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* 3. Layered 3D Content with Floating Parallax */}
      <div className="studio-industry-content">
        <span
          style={{
            color: isHovered ? "#082544" : "#a9bad8",
            transform: isHovered ? "translateZ(18px)" : "translateZ(0px)",
            fontWeight: 800,
          }}
        >
          {item.num}
        </span>

        <h3
          style={{
            color: isHovered ? "#041429" : "#ffffff",
            transform: isHovered ? "translateZ(26px)" : "translateZ(0px)",
            textShadow: isHovered
              ? "0 1px 2px rgba(255, 255, 255, 0.2)"
              : "none",
          }}
        >
          {item.name}
        </h3>

        <span
          className="studio-industry-arrow"
          style={{
            color: isHovered ? "#041429" : "#ffffff",
            transform: isHovered
              ? "translateZ(22px) translate(4px, -4px)"
              : "translateZ(0px) translate(0, 0)",
          }}
        >
          ↗
        </span>
      </div>
    </Link>
  );
}

export default function Sectors() {
  return (
    <section className="studio-industries" id="industries">
      <div className="container-wide">
        <div className="studio-section-head">
          <div>
            <span className="studio-kicker light">04 / WHO WE PARTNER WITH</span>
            <h2>
              AMBITIOUS BRANDS.
              <br />
              <em>REAL AUDIENCES.</em>
            </h2>
          </div>
          <p>
            Different markets. One simple objective: making the right connections
            count.
          </p>
        </div>

        <div className="studio-industry-grid">
          {industries.map((ind) => (
            <IndustryCard key={ind.num} item={ind} />
          ))}
        </div>
      </div>
    </section>
  );
}
