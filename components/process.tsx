"use client";

import { useState, useRef, useCallback } from "react";

type StepItem = {
  num: string;
  title: string;
  desc: string;
};

const steps: StepItem[] = [
  {
    num: "01",
    title: "Discover",
    desc: "Understand your brand, objectives and audience.",
  },
  {
    num: "02",
    title: "Strategize",
    desc: "Select the right audiences and channels.",
  },
  {
    num: "03",
    title: "Plan",
    desc: "Align the message, creative and execution.",
  },
  {
    num: "04",
    title: "Activate",
    desc: "Launch across coordinated distribution points.",
  },
  {
    num: "05",
    title: "Optimize",
    desc: "Track performance and refine what matters.",
  },
  {
    num: "06",
    title: "Report",
    desc: "Share results, insights and next steps.",
  },
];

function ProcessCard({ step }: { step: StepItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
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

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
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

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);

      // Normalized coordinates from center (-1 to 1)
      const px = (x - rect.width / 2) / (rect.width / 2);
      const py = (y - rect.height / 2) / (rect.height / 2);

      // Refined pressed-surface physics: cursor pushes surface downward gently
      const maxTilt = 5.2;
      const rotX = (py * maxTilt).toFixed(2);
      const rotY = (-px * maxTilt).toFixed(2);

      // Understated, soft diffused shadows matching the ivory theme
      const shadowX = (-px * 10).toFixed(1);
      const shadowY = (-py * 8 + 14).toFixed(1);

      setCurrentPos({ x, y });
      setTilt({
        rotX,
        rotY,
        shadowX,
        shadowY,
      });
    });
  }, []);

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
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
    ? `perspective(1000px) translateY(-3px) translateZ(8px) rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg) scale3d(1.015, 1.015, 1.015)`
    : "perspective(1000px) translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";

  const boxShadowStyle = isHovered
    ? `${tilt.shadowX}px ${tilt.shadowY}px 28px rgba(7, 22, 41, 0.08), 0 3px 10px rgba(7, 22, 41, 0.03)`
    : "none";

  return (
    <div
      ref={cardRef}
      className={`studio-process-card ${isHovered ? "is-hovered" : ""}`}
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
      {/* 1. Mouse-Originating Warm Beige / Soft Grey Radial Wave Reveal */}
      <div
        aria-hidden="true"
        className="studio-process-reveal"
        style={{
          background: `radial-gradient(circle 380px at ${currentPos.x}px ${currentPos.y}px, #ebe4d6 0%, #f1ebdE 38%, #f6f2ea 70%, #f6f5f0 100%)`,
          clipPath: isHovered
            ? `circle(150% at ${origin.x}px ${origin.y}px)`
            : `circle(0% at ${leavePos.x}px ${leavePos.y}px)`,
          opacity: isHovered ? 1 : 0,
          transition: isHovered
            ? "clip-path 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease"
            : "clip-path 0.55s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.45s ease",
        }}
      />

      {/* 2. Tactile Glancing Paper Sheen Overlay */}
      <div
        aria-hidden="true"
        className="studio-process-sheen"
        style={{
          background: `radial-gradient(circle 200px at ${currentPos.x}px ${currentPos.y}px, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)`,
          opacity: isHovered ? 0.65 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* 3. Layered Content with Deep Navy Hover Transitions & Subtle Parallax */}
      <div className="studio-process-content">
        <span
          style={{
            color: isHovered ? "#071629" : "#c5d0de",
            transform: isHovered
              ? "translateZ(14px) scale(1.02)"
              : "translateZ(0px) scale(1)",
            transformOrigin: "left top",
            transition:
              "color 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s ease",
          }}
        >
          {step.num}
        </span>

        <h3
          style={{
            color: isHovered ? "#030d1a" : "#071629",
            transform: isHovered ? "translateZ(18px)" : "translateZ(0px)",
            transition:
              "color 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s ease",
          }}
        >
          {step.title}
        </h3>

        <p
          style={{
            color: isHovered ? "#3c4856" : "#687586",
            transform: isHovered ? "translateZ(10px)" : "translateZ(0px)",
            transition:
              "color 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s ease",
          }}
        >
          {step.desc}
        </p>
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section className="studio-process" id="process">
      <div className="container-wide">
        <div className="studio-section-head">
          <div>
            <span className="studio-kicker">06 / HOW WE DO IT</span>
            <h2>
              FROM <em>HELLO</em>
              <br />
              TO HERE'S
              <br />
              WHAT
              <br />
              WORKED.
            </h2>
          </div>
          <p>
            A focused process, transparent decisions and shared clarity at
            every stage.
          </p>
        </div>

        <div className="studio-process-grid">
          {steps.map((step) => (
            <ProcessCard key={step.num} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
