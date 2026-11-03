"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { featuredBrands, type FeaturedBrand } from "@/lib/client-brands";

type BrandTileProps = {
  brand: FeaturedBrand;
};

function BrandTile({ brand }: BrandTileProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const sources = [brand.imageUrl, ...brand.fallbacks].filter(Boolean);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Real-time 3D interactive physics state
  const [isHovered, setIsHovered] = useState(false);
  const [transformStyle, setTransformStyle] = useState<string>(
    "perspective(900px) translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [boxShadowStyle, setBoxShadowStyle] = useState<string>("none");
  const [glarePos, setGlarePos] = useState({ x: 0, y: 0, opacity: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const current = sources[sourceIndex];

  function handleImageError() {
    if (sourceIndex + 1 < sources.length) {
      setSourceIndex((idx) => idx + 1);
    } else {
      setHasError(true);
    }
  }

  // Realistic directional pressed-in physics tracking
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalized coordinates from card center (-1 to 1)
    const px = (x - rect.width / 2) / (rect.width / 2);
    const py = (y - rect.height / 2) / (rect.height / 2);

    // Max tilt angle (subtle, premium physical realism: ~7.5 degrees)
    const maxTilt = 7.5;
    // Pressing top (py < 0) tilts top edge inward (rotateX negative)
    // Pressing left (px < 0) tilts left edge inward (rotateY negative)
    const rotX = (py * maxTilt).toFixed(2);
    const rotY = (px * maxTilt).toFixed(2);

    // Dynamic shadow shifts toward the opposite elevated edges
    const shadowX = (-px * 10).toFixed(1);
    const shadowY = (-py * 8 + 18).toFixed(1);

    setTransformStyle(
      `perspective(900px) translateY(-5px) translateZ(16px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.025, 1.025, 1.025)`
    );
    setBoxShadowStyle(
      `${shadowX}px ${shadowY}px 32px rgba(10, 56, 127, 0.16), 0 3px 10px rgba(0, 0, 0, 0.04)`
    );
    setGlarePos({ x, y, opacity: 1 });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setIsTransitioning(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsTransitioning(true);
    // Smooth spring return with cubic-bezier overshoot
    setTransformStyle(
      "perspective(900px) translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
    setBoxShadowStyle("none");
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  const isPending = brand.pendingNotice || hasError;

  return (
    <a
      ref={cardRef}
      className={`brand-tile ${isHovered ? "is-hovered" : ""}`}
      href="#contact"
      aria-label={`RMS Ads collaboration with ${brand.name}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        boxShadow: isHovered ? boxShadowStyle : undefined,
        zIndex: isHovered ? 12 : 1,
        background: isHovered ? "#ffffff" : undefined,
        transition: isTransitioning
          ? "transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.55s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease"
          : "transform 0.1s ease-out, box-shadow 0.1s ease-out, background 0.2s ease",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Dynamic Cursor Pressure Lighting & Glare Overlay */}
      <div
        className="brand-tile-pressure-glare"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          borderRadius: "inherit",
          opacity: glarePos.opacity,
          transition: "opacity 0.25s ease",
          background: `radial-gradient(circle 140px at ${glarePos.x}px ${glarePos.y}px, rgba(33, 217, 246, 0.12) 0%, rgba(20, 86, 216, 0.04) 45%, transparent 75%)`,
          mixBlendMode: "multiply",
          zIndex: 3,
        }}
      />

      {/* Subtle Specular Surface Highlight */}
      <div
        className="brand-tile-specular"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          borderRadius: "inherit",
          opacity: isHovered ? 0.65 : 0,
          transition: "opacity 0.25s ease",
          background: `radial-gradient(circle 200px at ${glarePos.x}px ${glarePos.y}px, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0) 70%)`,
          mixBlendMode: "overlay",
          zIndex: 4,
        }}
      />

      {/* Logo Graphic Container with 3D Z-Lift */}
      <span
        className="brand-tile-visual"
        style={{
          transform: isHovered ? "translateZ(14px)" : "translateZ(0px)",
          transition: isTransitioning
            ? "transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)"
            : "transform 0.12s ease-out",
        }}
      >
        {!isPending && current ? (
          <img
            alt={`${brand.name} logo`}
            loading="lazy"
            src={current}
            style={{
              opacity: loaded ? 1 : 0,
              position: "absolute",
              transition: "opacity 0.25s ease-in-out",
            }}
            onLoad={() => setLoaded(true)}
            onError={handleImageError}
          />
        ) : null}

        {isPending || !loaded ? (
          <span
            className="brand-logo-unavailable"
            style={{ opacity: isPending ? 1 : 0 }}
          >
            {brand.name}
            <small>{brand.pendingNotice || "Logo unavailable"}</small>
          </span>
        ) : null}
      </span>

      {/* Brand Title and Arrow with 3D Z-Lift */}
      <span
        className="brand-tile-bottom"
        style={{
          transform: isHovered ? "translateZ(10px)" : "translateZ(0px)",
          transition: isTransitioning
            ? "transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)"
            : "transform 0.12s ease-out",
        }}
      >
        <span>{brand.name}</span>
        <span
          style={{
            transform: isHovered ? "translate3d(2px, -2px, 0)" : "translate3d(0, 0, 0)",
            color: isHovered ? "#1456d8" : undefined,
            transition: "transform 0.2s ease, color 0.2s ease",
          }}
        >
          ↗
        </span>
      </span>
    </a>
  );
}

export default function BrandShowcase() {
  return (
    <section className="studio-clients" id="clients">
      <div className="container-wide">
        <div className="studio-clients-top">
          <div>
            <span className="studio-kicker">TRUST / COLLABORATION / EXPERIENCE</span>
            <h2>
              GOOD COMPANY.
              <br />
              <em>GREAT AMBITION.</em>
            </h2>
          </div>
          <div className="studio-clients-intro">
            <span>OUR CLIENTS &amp; BRANDS WE’VE WORKED WITH</span>
            <p>
              Projects and collaborations across education, technology and
              digital growth. Built on thoughtful strategy and connected
              execution.
            </p>
          </div>
        </div>

        <div className="brand-grid">
          {featuredBrands.map((brand) => (
            <BrandTile key={brand.name} brand={brand} />
          ))}
        </div>

        <div className="studio-clients-foot">
          <span>
            Client names supplied by RMS Ads. Logo trademarks belong to their
            respective owners; verify approval before launch.
          </span>
          <span>10 / SELECTED BRANDS</span>
        </div>
      </div>
    </section>
  );
}
