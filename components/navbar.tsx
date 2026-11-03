"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOverLight, setIsOverLight] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Dynamically detect whether navbar is currently scrolling over a light-background section
  useEffect(() => {
    const checkSection = () => {
      const lightSelectors =
        ".studio-manifesto, .studio-clients, .studio-expertise, .studio-network-section, .studio-process";
      const lightSections = document.querySelectorAll(lightSelectors);

      const navMid = 31; // vertical checkpoint roughly in center of 62px navbar
      let overLight = false;

      lightSections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= navMid && rect.bottom >= navMid) {
          overLight = true;
        }
      });

      setIsOverLight(overLight);
    };

    window.addEventListener("scroll", checkSection, { passive: true });
    window.addEventListener("resize", checkSection, { passive: true });
    checkSection();

    return () => {
      window.removeEventListener("scroll", checkSection);
      window.removeEventListener("resize", checkSection);
    };
  }, [pathname]);

  const isHome = pathname === "/";
  const getHref = (hash: string, pageHref: string) => (isHome ? hash : pageHref);

  return (
    <header className={`studio-header ${isOverLight ? "is-light-theme" : ""}`}>
      <div className="studio-navbar container-wide">
        <Link
          className="studio-mark studio-mark-light"
          href="/"
          aria-label="RMS Ads - Home"
        >
          <img
            alt="Official RMS Ads brand logo"
            className="studio-brand-image studio-navbar-logo"
            height={31}
            src="/RMS Ads.png"
            width={68}
            style={{ height: "31px", width: "auto", maxHeight: "31px" }}
          />
        </Link>

        <nav className="studio-navlinks" aria-label="Main Navigation">
          <Link className="studio-navlink" href={getHref("#intro", "/about")}>
            Agency
          </Link>
          <Link className="studio-navlink" href={getHref("#expertise", "/services")}>
            Expertise
          </Link>
          <Link className="studio-navlink" href={getHref("#industries", "/industries")}>
            Industries
          </Link>
          <Link className="studio-navlink" href={getHref("#work", "/case-studies")}>
            Work
          </Link>
          <Link className="studio-navlink" href={getHref("#clients", "/clients")}>
            Clients
          </Link>
          <Link className="studio-navlink" href={getHref("#network", "/partner")}>
            Network
          </Link>
        </nav>

        <div className="studio-navend">
          <span className="studio-navavail">
            <span></span> open for collaborations
          </span>
          <Link className="studio-navcta" href={getHref("#contact", "/contact")}>
            Let's Work Together ↗
          </Link>
        </div>

        <button
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className="studio-menu-btn"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      <nav
        className="studio-mobile-menu"
        style={{ display: mobileMenuOpen ? "block" : "none" }}
        aria-label="Mobile Navigation"
      >
        <Link
          href={getHref("#intro", "/about")}
          onClick={() => setMobileMenuOpen(false)}
        >
          <small>01</small>Agency ↗
        </Link>
        <Link
          href={getHref("#expertise", "/services")}
          onClick={() => setMobileMenuOpen(false)}
        >
          <small>02</small>Expertise ↗
        </Link>
        <Link
          href={getHref("#industries", "/industries")}
          onClick={() => setMobileMenuOpen(false)}
        >
          <small>03</small>Industries ↗
        </Link>
        <Link
          href={getHref("#work", "/case-studies")}
          onClick={() => setMobileMenuOpen(false)}
        >
          <small>04</small>Work ↗
        </Link>
        <Link
          href={getHref("#clients", "/clients")}
          onClick={() => setMobileMenuOpen(false)}
        >
          <small>05</small>Clients ↗
        </Link>
        <Link
          href={getHref("#network", "/partner")}
          onClick={() => setMobileMenuOpen(false)}
        >
          <small>06</small>Network ↗
        </Link>
        <Link
          className="studio-mobile-contact"
          href={getHref("#contact", "/contact")}
          onClick={() => setMobileMenuOpen(false)}
        >
          Let's Work Together ↗
        </Link>
      </nav>
    </header>
  );
}
