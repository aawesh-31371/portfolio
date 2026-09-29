export default function ContactPage() {
  return (
    <section className="page-section contact-page">
      <div className="container">

        {/* =========================
            PAGE HEADING
        ========================== */}
        <div className="section-heading contact-heading">
          <p className="eyebrow">06 — CONTACT</p>

          <h1>
            Let&apos;s build something
            <br />
            <span>useful.</span>
          </h1>

          <p className="heading-description">
            Have a project, opportunity or idea? Reach out and let&apos;s
            start a conversation.
          </p>
        </div>

        {/* =========================
            CONTACT INTRO
        ========================== */}
        <div className="contact-page-intro">
          <div>
            <p className="eyebrow">LET&apos;S CONNECT</p>

            <h2>
              Open to opportunities,
              <br />
              collaborations &amp; ideas.
            </h2>
          </div>

          <p>
            I&apos;m Aawesh Khan, a Computer Science &amp; Engineering
            student interested in software development, web technologies,
            AI and UI/UX. If you have an interesting project or opportunity,
            feel free to get in touch.
          </p>
        </div>

        {/* =========================
            CONTACT LINKS
        ========================== */}
        <div className="contact-links contact-page-links">

          <a
            href="mailto:aaweshk31371@gmail.com"
            className="contact-link-card"
          >
            <div className="contact-link-number">01</div>

            <div className="contact-link-content">
              <span>Email</span>
              <strong>aaweshk31371@gmail.com</strong>
            </div>

            <span className="contact-link-arrow">↗</span>
          </a>

          <a
            href="https://github.com/aawesh-31371"
            target="_blank"
            rel="noreferrer"
            className="contact-link-card"
          >
            <div className="contact-link-number">02</div>

            <div className="contact-link-content">
              <span>GitHub</span>
              <strong>github.com/aawesh-31371</strong>
            </div>

            <span className="contact-link-arrow">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/aawesh31371/"
            target="_blank"
            rel="noreferrer"
            className="contact-link-card"
          >
            <div className="contact-link-number">03</div>

            <div className="contact-link-content">
              <span>LinkedIn</span>
              <strong>linkedin.com/in/aawesh31371</strong>
            </div>

            <span className="contact-link-arrow">↗</span>
          </a>

        </div>

        {/* =========================
            AVAILABILITY
        ========================== */}
        <div className="contact-availability">

          <span className="contact-availability-dot"></span>

          <div>
            <span>AVAILABILITY</span>
            <strong>
              Open to internships, projects &amp; collaborations
            </strong>
          </div>

        </div>

      </div>
    </section>
  );
}