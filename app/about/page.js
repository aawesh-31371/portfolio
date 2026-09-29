import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="page-section about-page">
      <div className="container">

        {/* =========================
            PAGE HEADING
        ========================== */}
        <div className="section-heading about-heading">
          <p className="eyebrow">01 — ABOUT ME</p>

          <h1>
            Developer. Designer.
            <br />
            Problem solver.
          </h1>

          <p className="heading-description">
            I build practical software, modern web experiences and
            technology-driven solutions.
          </p>
        </div>

        {/* =========================
            PROFILE
        ========================== */}
        <div className="about-page-grid">

          <div className="large-info-card">
            <span className="about-card-label">PROFILE</span>

            <h2>Aawesh Khan</h2>

            <p>Computer Science &amp; Engineering</p>

            <div className="profile-details">
              <div>
                <span>UNIVERSITY</span>
                <strong>Lovely Professional University</strong>
              </div>

              <div>
                <span>DEGREE</span>
                <strong>B.Tech — CSE</strong>
              </div>

              <div>
                <span>CGPA</span>
                <strong>7.59</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong>3rd Year Student</strong>
              </div>
            </div>
          </div>

          {/* =========================
              ABOUT TEXT
          ========================== */}
          <div className="about-page-text">

            <p>
              I&apos;m Aawesh Khan, a Computer Science &amp; Engineering
              student at Lovely Professional University, currently pursuing
              my B.Tech and exploring the intersection of software
              development, design and emerging technologies.
            </p>

            <p>
              My experience includes full-stack web development, React,
              Next.js, Node.js, MongoDB and REST APIs, along with projects
              involving AI, computer vision and interactive web applications.
            </p>

            <p>
              I also enjoy UI/UX design and turning ideas into clean,
              responsive and user-friendly digital experiences. I focus on
              understanding the problem first and then building a practical
              solution around it.
            </p>

            <p>
              Outside of academics, I enjoy working on projects, learning
              new technologies and continuously improving my development
              skills.
            </p>

          </div>
        </div>

        {/* =========================
            EDUCATION
        ========================== */}
        <div className="education-block">

          <div className="education-block-header">
            <p className="eyebrow">EDUCATION</p>

            <h2>My academic journey</h2>
          </div>

          {/* BTECH */}
          <div className="education-item">
            <span className="education-year">2024 — PRESENT</span>

            <div className="education-content">
              <h3>Lovely Professional University</h3>

              <p>
                B.Tech — Computer Science &amp; Engineering · CGPA 7.59
              </p>

              <small>Punjab, India</small>
            </div>
          </div>

          {/* 12TH */}
          <div className="education-item">
            <span className="education-year">2022 — 2023</span>

            <div className="education-content">
              <h3>Vidhya Shree Sen. Sec. School, Didwana</h3>

              <p>Class 12 — 79%</p>

              <small>Didwana, Rajasthan</small>
            </div>
          </div>

          {/* 10TH */}
          <div className="education-item">
            <span className="education-year">2020 — 2021</span>

            <div className="education-content">
              <h3>Swami Vivekanand Govt. Model School, Didwana</h3>

              <p>Class 10 — 73%</p>

              <small>Didwana, Rajasthan</small>
            </div>
          </div>

        </div>

        {/* =========================
            NEXT PAGE
        ========================== */}
        <Link href="/projects" className="page-next-link">
          Explore my projects →
        </Link>

      </div>
    </section>
  );
}