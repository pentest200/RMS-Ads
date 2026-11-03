"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { featuredBrands } from "@/lib/client-brands";
import type { ClientLogo } from "@/lib/data";

type BrandTileProps = {
  name: string;
  imageUrl: string;
  fallbacks?: string[];
  domain: string;
};

function BrandTile({ name, imageUrl, fallbacks = [], domain }: BrandTileProps) {
  const sources = [imageUrl, ...fallbacks].filter(Boolean);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const current = sources[sourceIndex];

  function handleError() {
    setLoaded(false);
    setSourceIndex((index) => Math.min(index + 1, sources.length));
  }

  return (
    <a
      className="brand-tile"
      href={domain}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${name} official website`}
    >
      <span className="brand-tile-visual">
        {current && (
          <img
            key={current}
            className={`brand-logo-image ${loaded ? "is-loaded" : ""}`}
            src={current}
            alt={`${name} brand logo`}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onLoad={() => setLoaded(true)}
            onError={handleError}
          />
        )}
        {(!current || !loaded) && (
          <span className="brand-logo-unavailable">
            <strong>{name}</strong>
            <small>
              {!current
                ? sources.length
                  ? "Logo could not load"
                  : "Official logo asset pending"
                : "Loading logo"}
            </small>
          </span>
        )}
      </span>
      <span className="brand-tile-bottom">
        <span>{name}</span>
        <ArrowUpRight size={17} />
      </span>
    </a>
  );
}

export default function BrandShowcase({
  cmsLogos = [],
}: {
  cmsLogos?: ClientLogo[];
}) {
  const registered = Object.fromEntries(
    cmsLogos.map((logo) => [logo.name?.trim().toLowerCase() || "", logo])
  );

  const extra = cmsLogos.filter(
    (logo) =>
      !featuredBrands.some(
        (brand) => brand.name.toLowerCase() === logo.name?.trim().toLowerCase()
      )
  );

  return (
    <section
      className="studio-clients"
      id="clients"
      aria-labelledby="client-section-title"
    >
      <div className="container-wide">
        <div className="studio-clients-top">
          <div>
            <div className="studio-kicker">
              TRUST / COLLABORATION / EXPERIENCE
            </div>
            <h2 id="client-section-title">
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
          {featuredBrands.map((brand) => {
            const custom = registered[brand.name.toLowerCase()]?.image_url;
            return (
              <BrandTile
                key={brand.name}
                name={brand.name}
                imageUrl={custom || brand.imageUrl}
                fallbacks={
                  custom
                    ? [brand.imageUrl, ...brand.fallbacks]
                    : brand.fallbacks
                }
                domain={brand.domain}
              />
            );
          })}

          {extra.map((logo) => (
            <BrandTile
              key={logo.id}
              name={logo.name}
              imageUrl={logo.image_url || ""}
              fallbacks={logo.fallbacks || []}
              domain={logo.domain || "/contact"}
            />
          ))}
        </div>

        <div className="studio-clients-foot">
          <span>
            Brand names supplied by RMS Ads; logos are owned by their respective
            organisations. Verify use and any collaboration claims before
            publishing.
          </span>
          <span>10 / SELECTED BRANDS</span>
        </div>
      </div>
    </section>
  );
}
