import Link from "next/link";

export default function WorkShowcase() {
  return (
    <section className="studio-work" id="work">
      <div className="container-wide">
        <div className="studio-section-head">
          <div>
            <span className="studio-kicker light">02 / WHAT WE MAKE POSSIBLE</span>
            <h2>
              NOT JUST VIEWS.
              <br />
              <em>NEW POSSIBILITIES.</em>
            </h2>
          </div>
          <p>
            Three ways we turn a campaign brief into something people notice,
            remember, and act on.
          </p>
        </div>

        <div className="studio-showcase-grid">
          {/* Card 1: Community */}
          <Link
            className="studio-showcase studio-showcase-feature"
            href="#expertise"
          >
            <div className="studio-case-art studio-case-art-1">
              <div className="studio-art-cross">+</div>
              <span className="studio-art-overline">
                AUDIENCE / CULTURE / CONNECTION
              </span>
              <div className="studio-art-circle">
                <div className="studio-art-orbit circle-one"></div>
                <div className="studio-art-orbit circle-two"></div>
                <span>
                  the
                  <br />
                  right
                  <br />
                  crowd<span className="studio-art-period">.</span>
                </span>
              </div>
              <div className="studio-art-caption">
                Multi-platform brand distribution
              </div>
            </div>
            <div className="studio-case-meta">
              <div>
                <span>01 / COMMUNITY</span>
                <h3>
                  Find your people.
                  <br />
                  Meet them where they are.
                </h3>
              </div>
              <span style={{ fontSize: "30px" }}>↗</span>
            </div>
          </Link>

          {/* Card 2: Influence */}
          <Link className="studio-showcase" href="#expertise">
            <div className="studio-case-art studio-case-art-2">
              <div className="studio-art-strip">
                MAKE SOME NOISE • MAKE SOME NOISE •
              </div>
              <div className="studio-art-creator">
                CREATE
                <br />
                <i>the</i> WAVE<span>↗</span>
              </div>
              <div className="studio-art-video">
                <span className="studio-video-play">▶</span>
                <span>creator energy / real connection</span>
              </div>
            </div>
            <div className="studio-case-meta">
              <div>
                <span>02 / INFLUENCE</span>
                <h3>Creators who connect.</h3>
              </div>
              <span style={{ fontSize: "30px" }}>↗</span>
            </div>
          </Link>

          {/* Card 3: Performance */}
          <Link className="studio-showcase" href="#expertise">
            <div className="studio-case-art studio-case-art-3">
              <span className="studio-art-tag">FROM REACH TO REASON</span>
              <div className="studio-chart-wrap">
                <div className="studio-chart-label">
                  ONLY THE METRICS
                  <br />
                  THAT MATTER.
                </div>
                <svg preserveAspectRatio="none" viewBox="0 0 480 240">
                  <path
                    d="M0 220 L100 192 L180 204 L248 143 L304 171 L370 88 L480 19"
                    fill="none"
                    stroke="#d8ff61"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="10"
                  ></path>
                  <path
                    d="M0 220 L100 192 L180 204 L248 143 L304 171 L370 88 L480 19 L480 240 L0 240Z"
                    fill="rgba(216,255,97,.11)"
                  ></path>
                </svg>
                <span className="studio-art-growth">↗</span>
              </div>
            </div>
            <div className="studio-case-meta">
              <div>
                <span>03 / PERFORMANCE</span>
                <h3>Attention that does something.</h3>
              </div>
              <span style={{ fontSize: "30px" }}>↗</span>
            </div>
          </Link>
        </div>

        <div className="studio-work-foot">
          <span>
            Creative illustrations of RMS Ads capabilities — not client case
            studies or performance claims.
          </span>
          <Link className="studio-text-link" href="#contact">
            Discuss relevant work ↗
          </Link>
        </div>
      </div>
    </section>
  );
}

