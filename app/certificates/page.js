const certificates = [
  {
    number: "01",
    title: "UI/UX Design and Prototyping Summer Training",
    organization: "LPU",
    date: "Aug 2026",
  },
  {
    number: "02",
    title: "Database Management System",
    organization: "Infosys",
    date: "Aug 2026",
  },
  {
    number: "03",
    title: "C++",
    organization: "Infosys",
    date: "Aug 2025",
  },
  {
    number: "04",
    title: "Web Development",
    organization: "Rising Tech Pro",
    date: "Jan 2025",
  },
  {
    number: "05",
    title: "CSS",
    organization: "HackerRank",
    date: "Nov 2024",
  },
];

const achievements = [
  {
    icon: "</>",
    title: "Full-Stack Development",
    date: "2026",
    description:
      "Built full-stack web applications using React, Next.js, Node.js, MongoDB and REST APIs.",
  },
  {
    icon: "◈",
    title: "JalSetu — Flood Simulation",
    date: "2026",
    description:
      "Worked on a flood monitoring and urban flood simulation platform with 3D visualization, weather data and alert functionality.",
  },
  {
    icon: "✦",
    title: "WordPress Development",
    date: "2026",
    description:
      "Worked on the Glen Nepal website using WordPress and Elementor, including product pages, store locator sections, banners and responsive styling.",
  },
  {
    icon: "◆",
    title: "UI/UX Design",
    date: "2026",
    description:
      "Created UI/UX concepts and interactive prototypes in Figma with a focus on user flows, wireframing and usability.",
  },
  {
    icon: "↗",
    title: "Construction Website",
    date: "2026",
    description:
      "Developed a responsive website for Maruti Nandan Associates using React, Vite, Tailwind CSS and modern frontend techniques.",
  },
];

export default function CertificatesPage() {
  return (
    <section className="page-section">
      <div className="container">

        {/* CERTIFICATES HEADER */}
        <div className="section-heading">
          <p className="eyebrow">05 — CERTIFICATES</p>

          <h1>
            Proof of continuous
            <br />
            <span>learning.</span>
          </h1>

          <p className="heading-description">
            Certifications and learning milestones from my journey in
            development, design and computer science.
          </p>
        </div>

        {/* CERTIFICATES */}
        <div className="certificates-list">
          {certificates.map((certificate) => (
            <div
              className="certificate-item"
              key={certificate.number}
            >
              <span className="certificate-number">
                {certificate.number}
              </span>

              <div className="certificate-main">
                <h3>{certificate.title}</h3>
                <p>{certificate.organization}</p>
              </div>

              <span className="certificate-date">
                {certificate.date}
              </span>
            </div>
          ))}
        </div>

        {/* SELECTED WORK */}
        <div className="achievement-box">

          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>

            <h1>
              Things I've <span>worked on.</span>
            </h1>

            <p className="heading-description">
              A few projects and areas I've explored while building
              practical experience.
            </p>
          </div>

          <div className="achievement-grid">
            {achievements.map((item) => (
              <div
                className="achievement-card"
                key={item.title}
              >
                <div className="achievement-icon">
                  {item.icon}
                </div>

                <div className="achievement-date">
                  {item.date}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}