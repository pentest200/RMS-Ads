import Link from "next/link";

export default function Manifesto() {
  return (
    <section className="studio-manifesto" id="intro">
      <div className="container-wide studio-manifesto-grid">
        <span className="studio-kicker">01 / OUR POINT OF VIEW</span>
        <div>
          <h2>
            BIG REACH IS GOOD.
            <br />
            <em>REAL IMPACT</em> IS BETTER
            <span>.</span>
          </h2>
          <div className="studio-manifesto-detail">
            <p>
              The internet is loud. We make sure your brand gets heard by the
              people who matter. Connecting communities, creators and strategy
              to turn the right attention into tangible opportunity.
            </p>
            <Link className="studio-text-link" href="#expertise">
              Get to know us ↗
            </Link>
          </div>
        </div>
      </div>
      <div className="studio-intro-watermark">
        RMS<span>✳</span>
      </div>
    </section>
  );
}

