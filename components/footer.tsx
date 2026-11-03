import Link from "next/link";

export default function Footer() {
  return (
    <footer className="studio-footer">
      <div className="container-wide studio-footer-top">
        <div>
          <span className="studio-kicker light">THE NEXT MOVE IS YOURS</span>
          <h2>
            Got a brand
            <br />
            to <em>grow?</em>
          </h2>
        </div>
        <Link className="studio-footer-circle" href="#contact" aria-label="Start a project">
          ↗
        </Link>
      </div>

      <div className="container-wide studio-footer-grid">
        <div className="studio-footer-brand">
          <div className="studio-mark studio-mark-light">
            <img
              alt="Official RMS Ads brand logo"
              className="studio-brand-image"
              height={119}
              src="/RMS Ads.png"
              width={260}
            />
          </div>
          <p>
            Independent thinking. Connected audiences. Campaigns that move beyond
            impressions.
          </p>
          <span>India · Built to connect brands everywhere</span>
        </div>

        <div>
          <h3>Explore</h3>
          <Link href="/about">Agency</Link>
          <Link href="/services">Expertise</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/case-studies">Work</Link>
          <Link href="/clients">Clients</Link>
          <Link href="/partner">Network</Link>
        </div>

        <div>
          <h3>Collaborate</h3>
          <Link href="/contact">Let's Work Together</Link>
          <Link href="/partner">Become a partner</Link>
          <Link href="/clients">Our Clients</Link>
          <Link href="/contact">Book Consultation</Link>
        </div>

        <div>
          <h3>Legal &amp; Connect</h3>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/contact">Say hello ↗</Link>
        </div>
      </div>

      <div className="container-wide studio-footer-bottom">
        <span>© 2026 RMS Ads.</span>
        <span>Audience. Attention. Action.</span>
        <a href="#top">Back to the top ↑</a>
      </div>
    </footer>
  );
}
