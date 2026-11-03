import Link from "next/link";

export default function CTASection() {
  return (
    <section className="studio-last-cta" id="contact">
      <div className="container-wide">
        <span className="studio-kicker light">LET'S MAKE SOMETHING MATTER</span>
        <h2>
          YOUR NEXT
          <br />
          <em>BIG MOVE</em>
          <span>↗</span>
        </h2>
        <div className="studio-last-cta-bottom">
          <p>
            Tell us where you want to go. We'll map how to get your brand in front
            of the right people with measurable impact.
          </p>
          <div>
            <Link className="studio-cta-white" href="/contact">
              Let's Work Together ↗
            </Link>
            <Link className="studio-cta-outline" href="/partner">
              Partner with us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
