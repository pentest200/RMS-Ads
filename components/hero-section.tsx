"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    let frameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const rect = heroEl.getBoundingClientRect();
        const clientX = e.clientX - rect.left;
        const clientY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate smooth 3D tilt angles based on cursor distance from center
        const tiltY = ((clientX - centerX) / centerX) * 14; // max 14deg
        const tiltX = -((clientY - centerY) / centerY) * 12; // max 12deg
        setTilt({ x: tiltX, y: tiltY });
        setIsHovered(true);
      });
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(frameId);
      setIsHovered(false);
      setTilt({ x: 0, y: 0 });
    };

    heroEl.addEventListener("mousemove", handleMouseMove);
    heroEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(frameId);
      heroEl.removeEventListener("mousemove", handleMouseMove);
      heroEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section ref={heroRef} className="studio-hero">
      <div className="studio-hero-noise"></div>
      <div className="container-wide studio-hero-inner">
        <div className="studio-hero-eyebrow">
          <span className="studio-live-dot"></span>
          <span>360° DIGITAL MARKETING &amp; ADVERTISING</span>
          <span className="studio-hero-index">INDIA / EVERYWHERE</span>
        </div>

        <div className="studio-hero-layout">
          <div className="studio-hero-copy">
            <h1 className="studio-hero-headline">
              Your Brand.
              <br />
              <span>Our Strategy.</span>
              <br />
              <em>Unlimited Growth.</em>
            </h1>

            <div className="studio-hero-bottom">
              <p>
                We help ambitious brands grow through strategic digital
                advertising, performance marketing, influencer collaborations,
                and result-driven campaigns across multiple platforms.
              </p>
              <div className="studio-hero-cta-group">
                <Link className="studio-hero-primary" href="#contact">
                  Let’s Work Together ↗
                </Link>
                <Link className="studio-hero-secondary" href="#expertise">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>

          {/* 3D Rotating Saturn System Container */}
          <div aria-hidden="true" className="studio-orbit-container">
            <div
              className="studio-orbit"
              style={{
                transform: isHovered
                  ? `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
                  : undefined,
                transition: isHovered
                  ? "transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)"
                  : "transform 0.8s ease-out",
              }}
            >
              {/* Volumetric Atmospheric Glow */}
              <div className="studio-orbit-glow"></div>

              {/* 3D Rotating Saturn Celestial System */}
              <svg
                aria-label="3D Rotating Saturn with dynamic rings and rotating surface clouds"
                className="studio-orbit-svg"
                role="img"
                viewBox="0 0 640 640"
              >
                <defs>
                  {/* Planet Core Radial Gradient */}
                  <radialGradient cx="28%" cy="22%" id="planetCore">
                    <stop offset="0%" stopColor="#d6efff" />
                    <stop offset="20%" stopColor="#438efb" />
                    <stop offset="46%" stopColor="#164cbe" />
                    <stop offset="72%" stopColor="#0b2361" />
                    <stop offset="92%" stopColor="#04102d" />
                    <stop offset="100%" stopColor="#020817" />
                  </radialGradient>

                  {/* 3D Spherical Shadow overlay */}
                  <radialGradient cx="30%" cy="25%" r="72%" id="planetSphereShadow">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
                    <stop offset="40%" stopColor="#0c2975" stopOpacity="0" />
                    <stop offset="72%" stopColor="#020817" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#01040d" stopOpacity="0.96" />
                  </radialGradient>

                  {/* Planet Spherical Clip Path */}
                  <clipPath id="planetGlobeClip">
                    <circle cx="315" cy="310" r="172" />
                  </clipPath>

                  {/* Outer Light Ring Gradient */}
                  <linearGradient id="lightRingGrad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#f5fdff" />
                    <stop offset="28%" stopColor="#71d0ff" />
                    <stop offset="58%" stopColor="#215af3" />
                    <stop offset="85%" stopColor="#0d359c" />
                    <stop offset="100%" stopColor="#d9f7ff" />
                  </linearGradient>

                  {/* Inner Shading Ring Gradient */}
                  <linearGradient id="shadeRingGrad" x1="0" x2="1" y1="1" y2="0">
                    <stop offset="0%" stopColor="#032a81" />
                    <stop offset="35%" stopColor="#235dff" />
                    <stop offset="70%" stopColor="#1ec4f7" />
                    <stop offset="100%" stopColor="#e8fcff" />
                  </linearGradient>
                </defs>

                {/* 1. BACK RINGS (rendered behind sphere for true 3D occlusion) */}
                <g className="saturn-back-rings">
                  <ellipse
                    cx="316"
                    cy="313"
                    rx="285"
                    ry="117"
                    fill="none"
                    stroke="url(#lightRingGrad)"
                    strokeWidth="14"
                    strokeDasharray="600 1400"
                    strokeDashoffset="140"
                    strokeLinecap="round"
                    opacity="0.68"
                    transform="rotate(-34 316 313)"
                  />
                  <ellipse
                    cx="316"
                    cy="313"
                    rx="285"
                    ry="117"
                    fill="none"
                    stroke="url(#shadeRingGrad)"
                    strokeWidth="28"
                    strokeDasharray="560 1400"
                    strokeDashoffset="170"
                    strokeLinecap="round"
                    opacity="0.82"
                    transform="rotate(-34 316 313)"
                  />
                </g>

                {/* 2. PLANET GLOBE WITH CONTINUOUSLY ROTATING SURFACE CLOUDS */}
                <g className="saturn-planet-system">
                  {/* Planet Core Sphere */}
                  <circle cx="315" cy="310" r="172" fill="url(#planetCore)" />

                  {/* Clipped Surface Atmosphere Bands (Rotating West to East) */}
                  <g clipPath="url(#planetGlobeClip)">
                    <g className="saturn-surface-bands">
                      {/* Atmospheric Band 1 */}
                      <path
                        d="M-100 215 Q 50 195, 200 215 T 500 215 T 800 215 T 1100 215 L 1100 248 Q 800 265, 500 248 T 200 248 T -100 248 Z"
                        fill="#327dfc"
                        opacity="0.45"
                      />
                      {/* Atmospheric Band 2 */}
                      <path
                        d="M-100 255 Q 80 235, 240 255 T 560 255 T 880 255 T 1200 255 L 1200 292 Q 880 308, 560 292 T 240 292 T -100 292 Z"
                        fill="#123ea3"
                        opacity="0.55"
                      />
                      {/* Atmospheric Band 3 */}
                      <path
                        d="M-100 300 Q 60 285, 220 300 T 540 300 T 860 300 T 1180 300 L 1180 338 Q 860 352, 540 338 T 220 338 T -100 338 Z"
                        fill="#268bfd"
                        opacity="0.38"
                      />
                      {/* Atmospheric Band 4 */}
                      <path
                        d="M-100 348 Q 90 330, 270 348 T 630 348 T 990 348 T 1350 348 L 1350 382 Q 990 398, 630 382 T 270 382 T -100 382 Z"
                        fill="#0c276f"
                        opacity="0.65"
                      />
                      {/* Atmospheric Band 5 */}
                      <path
                        d="M-100 392 Q 70 375, 250 392 T 610 392 T 970 392 T 1330 392 L 1330 425 Q 970 440, 610 425 T 250 425 T -100 425 Z"
                        fill="#195ad8"
                        opacity="0.4"
                      />

                      {/* Rotating Storm Features / Oval Spots */}
                      <ellipse cx="260" cy="275" rx="35" ry="15" fill="#71baff" opacity="0.5" />
                      <ellipse cx="760" cy="275" rx="35" ry="15" fill="#71baff" opacity="0.5" />
                      <ellipse cx="440" cy="365" rx="26" ry="12" fill="#21d9f6" opacity="0.45" />
                      <ellipse cx="940" cy="365" rx="26" ry="12" fill="#21d9f6" opacity="0.45" />
                    </g>

                    {/* 3D Volumetric Depth Shadow Overlay */}
                    <circle cx="315" cy="310" r="172" fill="url(#planetSphereShadow)" />

                    {/* High Specular 3D Highlight Point */}
                    <ellipse cx="230" cy="220" rx="95" ry="60" fill="#a8e3ff" opacity="0.32" />

                    {/* Ring Shadow cast across Saturn's northern hemisphere */}
                    <path
                      d="M145 288 Q 315 352, 485 288 L 485 322 Q 315 385, 145 322 Z"
                      fill="#020817"
                      opacity="0.6"
                    />

                    {/* Outer Edge Atmospheric Rim Glow */}
                    <circle cx="315" cy="310" r="171" fill="none" stroke="#21d9f6" strokeWidth="2.5" opacity="0.8" />
                    <circle cx="315" cy="310" r="170" fill="none" stroke="#a2e8ff" strokeWidth="1" opacity="0.9" />
                  </g>
                </g>

                {/* 3. FRONT RINGS (rendered in front of sphere with specular reflections) */}
                <g className="saturn-front-rings">
                  {/* Outer light glowing front ring */}
                  <ellipse
                    cx="316"
                    cy="313"
                    fill="none"
                    opacity=".92"
                    rx="285"
                    ry="117"
                    stroke="url(#lightRingGrad)"
                    strokeDasharray="830 1300"
                    strokeDashoffset="-785"
                    strokeLinecap="round"
                    strokeWidth="18"
                    transform="rotate(-34 316 313)"
                    className="saturn-ring-front-glow"
                  />
                  {/* Main shaded front ring */}
                  <ellipse
                    cx="316"
                    cy="313"
                    fill="none"
                    rx="285"
                    ry="117"
                    stroke="url(#shadeRingGrad)"
                    strokeDasharray="750 1350"
                    strokeDashoffset="-70"
                    strokeLinecap="round"
                    strokeWidth="33"
                    transform="rotate(-34 316 313)"
                  />
                  {/* Bright specular inner ring edge */}
                  <ellipse
                    cx="316"
                    cy="313"
                    fill="none"
                    opacity=".85"
                    rx="272"
                    ry="112"
                    stroke="#f0faff"
                    strokeDasharray="580 1400"
                    strokeDashoffset="-130"
                    strokeWidth="2.5"
                    transform="rotate(-34 316 313)"
                  />
                </g>

                {/* 4. ROTATING DASHED COORDINATE ORBIT RING */}
                <ellipse
                  cx="316"
                  cy="313"
                  fill="none"
                  opacity=".42"
                  rx="230"
                  ry="231"
                  stroke="#70aaff"
                  strokeDasharray="5 11"
                  strokeWidth="1.2"
                  transform="rotate(-39 316 313)"
                  className="saturn-dashed-coordinate-ring"
                />

                {/* 5. CELESTIAL SATELLITES & STARS */}
                <g className="saturn-orbiting-satellites">
                  <circle cx="132" cy="170" fill="#e7faff" r="5" className="saturn-star-pulse" />
                  <circle cx="540" cy="230" fill="#d6fb45" r="4.5" className="saturn-star-pulse-delayed" />
                  <circle cx="470" cy="505" fill="#74b8ff" r="3.5" className="saturn-star-pulse" />

                  {/* Revolving Satellites */}
                  <g className="saturn-moon-orbit-1">
                    <circle cx="0" cy="0" r="4.5" fill="#21d9f6" />
                  </g>
                  <g className="saturn-moon-orbit-2">
                    <circle cx="0" cy="0" r="3.5" fill="#d8ff61" />
                  </g>
                </g>
              </svg>

              {/* Cyan Floating Sticker Badge */}
              <div className="studio-orbit-sticker">
                <span>RMS</span>
                <small>
                  GOOD IDEAS.
                  <br />
                  BETTER REACH.
                </small>
              </div>

              {/* Coordinates Badge */}
              <div className="studio-orbit-coord">↗ CONNECT / AMPLIFY / CONVERT</div>

              {/* Active Radar Signal Ping */}
              <div className="studio-orbit-ping">
                <span className="studio-ping-dot"></span>
                <span>SIGNAL ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="studio-hero-foot">
          <Link href="#intro">SCROLL TO EXPLORE ↓</Link>
          <span>STRATEGY / DISTRIBUTION / PERFORMANCE</span>
        </div>
      </div>
    </section>
  );
}
