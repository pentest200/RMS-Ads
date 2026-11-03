import Link from "next/link";

export default function Network() {
  return (
    <section className="studio-network-section" id="network">
      <div className="container-wide studio-network-grid">
        <div>
          <span className="studio-kicker">05 / OUR CONNECTED WORLD</span>
          <h2>
            ONE
            <br />
            NETWORK.
            <br />
            <em>ENDLESS</em>
            <br />
            CONNECTIONS.
          </h2>
          <p>
            Communities, creators, student audiences and brand teams. One
            coordinated ecosystem built around relevance.
          </p>
          <Link className="studio-pill-link" href="#contact">
            Explore partnerships ↗
          </Link>
        </div>

        <div className="network-display">
          <span className="mini-network-label">
            CONNECTED AUDIENCES / RMS ADS
          </span>

          {/* Concentric Orbital Rings matching reference */}
          <div className="mini-network-ring ring-3" />
          <div className="mini-network-ring ring-2" />
          <div className="mini-network-ring ring-1" />

          {/* Center Core Node */}
          <div className="mini-network-center">RMS.</div>

          {/* Orbiting Satellite Badges */}
          <span
            className="mini-network-node"
            style={{ top: "14%", left: "50%", transform: "translateX(-50%)" }}
          >
            CREATORS
          </span>
          <span
            className="mini-network-node"
            style={{ top: "35%", left: "5%" }}
          >
            TELEGRAM
          </span>
          <span
            className="mini-network-node"
            style={{ bottom: "22%", left: "7%" }}
          >
            EDTECH
          </span>
          <span
            className="mini-network-node"
            style={{ top: "27%", right: "6%" }}
          >
            STUDENTS
          </span>
          <span
            className="mini-network-node"
            style={{ bottom: "16%", right: "7%" }}
          >
            BRANDS
          </span>
        </div>
      </div>
    </section>
  );
}
