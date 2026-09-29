"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "FULL-STACK WEB DEVELOPMENT",
    title: "Maruti Nandan Associates",
    image: "/projects/mna.png",
    description:
      "A modern responsive website for a construction company featuring service sections, project showcases, galleries and an engaging user experience.",
    date: "2026",
    github:
      "https://github.com/aawesh-31371/maruti-nandan-associate",
    demo: "https://maruti-nandan-associate.vercel.app/",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "React Router",
      "Framer Motion",
    ],
  },

  {
    number: "02",
    category: "FLOOD SIMULATION / FULL-STACK",
    title: "JalSetu",
    image: "/projects/jalsetu.png",
    description:
      "A flood monitoring and urban flood simulation platform designed to visualize flood conditions, simulate inundation levels and provide real-time alerts for vulnerable areas.",
    date: "2026",
    github:
      "https://github.com/aawesh-31371/chennai-flood-twin",
    demo:
      "https://chennai-flood-twin-qnyq17ma2-aawesh-31371s-projects.vercel.app/",
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "3D Visualization",
      "Weather APIs",
    ],
  },

  {
    number: "03",
    category: "UI / UX DESIGN",
    title: "Qless",
    image: "/projects/qless.png",
    description:
      "A UI/UX design concept focused on creating a simple and intuitive digital experience with clear user flows, interactive interfaces and a user-centered design approach.",
    date: "2026",
    demo:
      "https://www.figma.com/design/h6MQFUaaRvtuvFZhcp2syL/Qless-figma?node-id=0-1",
    technologies: [
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "User Flow",
    ],
  },
];
const experiences = [
  {
    index: "01",
    date: "2026",
    category: "WEB DEVELOPMENT · WORDPRESS",
    title: "Glen Nepal — Website Development",

    description:
      "Worked on the Glen Nepal website using WordPress and Elementor, developing and refining product pages, store locator sections, banners, header and footer layouts, and custom responsive styling.",

    responsibilities: [
      "Developed and refined product pages using WordPress and Elementor",
      "Worked on store locator sections and website content",
      "Designed and updated banners, headers and footer layouts",
      "Implemented custom CSS and responsive design improvements",
    ],

    tags: [
      "WordPress",
      "Elementor",
      "Hostinger",
      "Custom CSS",
      "Responsive Design",
    ],

    result: {
      label: "WORK",
      value: "Website Development",
    },
  },
];

const certificates = [
  {
    title: "CyberSmart Awareness",
    issuer: "WNS Cares Foundation",
    year: "2025",
    image: "/certificates/cartificate6.jpeg",
  },

  {
    title: "Programming Using C++",
    issuer: "Infosys",
    year: "2025",
    image: "/certificates/cartificate5.jpeg",
  },

  {
    title: "Computer Programming",
    issuer: "Lovely Professional University",
    year: "2025",
    image: "/certificates/cartificate4.jpeg",
  },

  {
    title: "Code-A-Hunt 2.0",
    issuer: "CodingBlocks LPU",
    year: "2025",
    image: "/certificates/cartificate3.jpeg",
  },

  {
    title: "React.js",
    issuer: "Tech Veda",
    year: "2025",
    image: "/certificates/cartificate2.jpeg",
  },

  {
    title: "Stage Fright to Spotlight",
    issuer: "Lovely Professional University",
    year: "2024",
    image: "/certificates/cartificate1.jpeg",
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

const education = [
  {
    icon: "🎓",
    degree: "B.Tech",
    field: "Computer Science & Engineering",
    school: "Lovely Professional University",
    location: "Punjab, India",
    period: "2024 – 2028",
    metricLabel: "CGPA",
    metricValue: "7.59",
  },

  {
    icon: "📚",
    degree: "12th",
    field: "Senior Secondary",
    school: "Vidhya Shree Sen. Sec. School",
    location: "Didwana, Rajasthan",
    period: "2024",
    metricLabel: "PERCENTAGE",
    metricValue: "79%",
  },

  {
    icon: "📖",
    degree: "10th",
    field: "Secondary",
    school: "Swami Vivekanand Govt. Model School",
    location: "Didwana, Rajasthan",
    period: "2022",
    metricLabel: "PERCENTAGE",
    metricValue: "73%",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);

    window.location.href = `mailto:aaweshk31371@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section id="home" className="hero section">
        <div className="hero-grid"></div>

        <div className="hero-orb orb-one"></div>
        <div className="hero-orb orb-two"></div>

        <div className="hero-container">
          <div className="hero-content">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              FULL-STACK DEVELOPER
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Aawesh<span> Khan</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              B.Tech CSE student passionate about building modern,
              responsive and interactive web applications using JavaScript,
              React, Next.js, Node.js and databases.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a href="#projects" className="btn btn-primary">
                View Projects <span>→</span>
              </a>

              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </motion.div>

            <div className="hero-stats">
              

             
            
            </div>
          </div>

          <motion.div
            className="hero-profile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="profile-glow"></div>

            <div className="profile-image-wrapper">
              <Image
                src="/aawesh.jpeg"
                alt="Aawesh"
                fill
                priority
                className="profile-image"
              />
            </div>
          </motion.div>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <div></div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}
      <section id="about" className="section about-section">
        <div className="container">
          <motion.div
            className="about-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="eyebrow">ABOUT ME</p>

            <h2 className="about-title">
              A developer who enjoys <span>building</span>
            </h2>

            <div className="about-underline"></div>
          </motion.div>

          <div className="about-grid">
            <motion.div
              className="about-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="card-head">
                <span className="card-icon">👤</span>
                <div>
                  <p className="card-label">PROFILE</p>
                  <h3>Get to know me</h3>
                </div>
              </div>

              <div className="card-body">
  <p>
    My name is <strong>Aawesh Khan</strong>, and I am a passionate
    Full-Stack Developer and a Computer Science Engineering student at
    Lovely Professional University. I enjoy building modern, responsive
    web applications and solving real-world problems through technology.
  </p>

  <p>
    My work spans full-stack web development, AI/ML-based applications,
    and UI/UX design. I enjoy building scalable backends using Node.js,
    Express.js and MongoDB while creating intuitive, responsive interfaces
    with React, Next.js, JavaScript, HTML and CSS.
  </p>

  <p>
    I am constantly improving my problem-solving and development skills
    through hands-on projects and learning new technologies. I have worked
    on projects involving <strong>flood prediction and simulation, web
    applications, REST APIs, authentication systems, databases, and
    interactive user interfaces</strong>. I value clean code, practical
    problem-solving, teamwork, and continuous learning.
  </p>

  <p>
    Beyond coding, I enjoy working on creative ideas, participating in
    technical projects and events, and exploring new technologies to
    expand my skills. I am always open to collaborating on projects,
    internships, and opportunities where I can contribute, learn, and grow
    as a developer.
  </p>
</div>
            </motion.div>

            <motion.div
              className="about-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="card-head">
                <span className="card-icon">📚</span>
                <h3>Skills &amp; technologies</h3>
              </div>

              <div className="skill-group">
                <p className="card-label">LANGUAGES</p>
                <div className="skill-row">
                  <span>C++</span>
                  <span>Java</span>
                  <span>Python</span>
                  <span>C</span>
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>SQL</span>
                </div>
              </div>

              <div className="skill-group">
                <p className="card-label">BACKEND</p>
                <div className="skill-row">
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>REST APIs</span>
                </div>
              </div>

              <div className="skill-group">
                <p className="card-label">DATABASE</p>
                <div className="skill-row">
                  <span>PostgreSQL</span>
                  <span>MongoDB</span>
                </div>
              </div>

              <div className="skill-group">
                <p className="card-label">TOOLS</p>
                <div className="skill-row">
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>Render</span>
                  <span>Postman</span>
                  <span>VS Code</span>
                  <span>Figma</span>
                </div>
              </div>

              <div className="skill-group">
                <p className="card-label">SOFT SKILLS</p>
                <div className="skill-row">
                  <span>Problem-Solving</span>
                  <span>Self Learning</span>
                  <span>Time Management</span>
                  <span>Multitasking</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     {/* =====================================================
    PROJECTS
===================================================== */}
<section id="projects" className="section projects-section section-alt">
  <div className="container">
    <motion.div
      className="projects-header"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className="eyebrow">SELECTED WORK</p>

      <h2 className="projects-title">
        Projects I&apos;ve <span>built</span>
      </h2>

      <div className="projects-underline"></div>
    </motion.div>

    <div className="projects-card-grid">
      {projects.map((project) => (
        <motion.article
          key={project.number}
          className="project-card-modern"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          whileHover={{ y: -6 }}
        >
          {/* IMAGE */}
          <div className="project-preview">
            <span className="project-badge">
              {project.number}
            </span>

            <img
              src={project.image}
              alt={project.title}
              className="project-preview-img"
            />

            <div className="project-preview-overlay">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="view-details-btn"
              >
                View Details →
              </a>
            </div>
          </div>

          {/* CONTENT */}
          <div className="project-card-body">
            <p className="project-category-label">
              {project.category}
            </p>

            <h3>{project.title}</h3>

            <p className="project-card-desc">
              {project.description}
            </p>

            <div className="project-tech-pills">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-card-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-btn project-btn-outline"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="16"
                  height="16"
                >
                  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.6v-2.1c-3.2.7-3.8-1.5-3.8-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4 1 0 2 .1 2.9.4 2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.7 18.3.5 12 .5z" />
                </svg>
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="project-btn project-btn-primary"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="16"
                  height="16"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>

     {/* =====================================================
    EXPERIENCE
===================================================== */}
<section id="experience" className="section experience-section">
  <div className="container">
    <motion.div
      className="experience-header"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className="eyebrow">EXPERIENCE</p>

      <h2 className="experience-title">
        Where I&apos;ve <span>worked</span>
      </h2>

      <div className="experience-underline"></div>
    </motion.div>

    {experiences.map((exp) => (
      <motion.div
        key={exp.index}
        className="experience-modern-card"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* LEFT SIDE */}
        <div className="experience-visual">
          <img
           src="/projects/glen.png"
            alt="Glen Nepal website"
          />

          <div className="experience-visual-label">
            <span>{exp.index}</span>
            <span>{exp.date}</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="experience-content">

          <p className="project-category">
            {exp.category}
          </p>

          <h4>{exp.title}</h4>

          <p className="experience-description">
            {exp.description}
          </p>

          <ul className="experience-list">
            {exp.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="tag-list">
            {exp.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="experience-result">
            <span>{exp.result.label}</span>
            <strong>{exp.result.value}</strong>
          </div>

        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* =====================================================
          CERTIFICATES
      ===================================================== */}
      <section
        id="certificates"
        className="section certificates-section section-alt"
      >
        <div className="container">
          <motion.div
            className="certificates-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="eyebrow">CREDENTIALS</p>

            <h2 className="certificates-title">Certificates</h2>

            <div className="certificates-underline"></div>
          </motion.div>

          <div className="certificates-card-grid">
            {[...certificates]
              .sort((a, b) => Number(b.year) - Number(a.year))
              .map((cert, index) => (
                <motion.a
                  key={cert.title + cert.issuer}
                  href={cert.image}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-card"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="certificate-image-wrapper">
                    <img
                      src={cert.image}
                      alt={`${cert.title} — ${cert.issuer}`}
                      className="certificate-image"
                    />
                  </div>

                  <div className="certificate-meta">
                    <span className="certificate-name">
                      {cert.title} · {cert.issuer}
                    </span>

                    <span className="certificate-year">{cert.year}</span>
                  </div>
                </motion.a>
              ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ACHIEVEMENTS
      ===================================================== */}
      <section id="achievements" className="section achievements-section">
        <div className="container">
          <motion.div
            className="achievements-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="eyebrow">ACHIEVEMENTS</p>

            <h2 className="achievements-title">
            Things I've <span>worked on</span>
            </h2>

            <div className="achievements-underline"></div>
          </motion.div>

          <div className="achievements-grid">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                className="achievement-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="achievement-card-top">
                  <span className="achievement-icon">{item.icon}</span>
                  <span className="achievement-date">{item.date}</span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EDUCATION
      ===================================================== */}
      <section
        id="education"
        className="section education-section section-alt"
      >
        <div className="container">
          <motion.div
            className="education-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="eyebrow">EDUCATION</p>

            <h2 className="education-title">
              My academic <span>journey</span>
            </h2>

            <div className="education-underline"></div>
          </motion.div>

          <div className="education-timeline">
            {education.map((item, index) => (
              <motion.div
                key={item.degree + item.period}
                className="timeline-row"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="timeline-marker">
                  <span className="timeline-marker-icon">{item.icon}</span>
                </div>

                <div className="education-card">
                  <div className="education-card-top">
                    <p className="education-period">{item.period}</p>

                    <div className="education-metric">
                      <span className="education-metric-label">
                        {item.metricLabel}
                      </span>
                      <span className="education-metric-value">
                        {item.metricValue}
                      </span>
                    </div>
                  </div>

                  <h3>{item.degree}</h3>

                  <p className="education-field">{item.field}</p>

                  <div className="education-divider"></div>

                  <div className="education-school">
                    <span className="education-school-icon">
                      {item.icon}
                    </span>

                    <div>
                      <strong>{item.school}</strong>
                      <small>{item.location}</small>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <motion.div
            className="contact-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="eyebrow">LET&apos;S TALK</p>

            <h2 className="contact-title">
              Let&apos;s <span>Connect &amp; Create.</span>
            </h2>

            <div className="contact-underline"></div>
          </motion.div>

          <div className="contact-grid">
            <motion.div
              className="contact-info-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3>Let&apos;s connect</h3>

              <p className="contact-info-intro">
  I&apos;m open to internships, web development opportunities,
  interesting projects, and collaborations in technology.
</p>

              <div className="contact-info-list">
              <a
  href="mailto:aaweshk31371@gmail.com"
  className="contact-info-item"
>
  <span className="contact-info-icon">✉</span>
  <div>
    <span className="contact-info-label">Email</span>
    <strong>aaweshk31371@gmail.com</strong>
  </div>
</a>

<a
  href="https://github.com/aawesh-31371"
  target="_blank"
  rel="noreferrer"
  className="contact-info-item"
>
  <span className="contact-info-icon">◉</span>
  <div>
    <span className="contact-info-label">GitHub</span>
    <strong>github.com/aawesh-31371</strong>
  </div>
</a>

<a
  href="https://www.linkedin.com/in/aawesh31371/"
  target="_blank"
  rel="noreferrer"
  className="contact-info-item"
>
  <span className="contact-info-icon">in</span>
  <div>
    <span className="contact-info-label">LinkedIn</span>
    <strong>linkedin.com/in/aawesh31371</strong>
  </div>
</a>
              </div>

              <div className="contact-info-divider"></div>

              <div className="contact-status">
                <span className="contact-status-dot"></span>
                Open to internships &amp; full-time opportunities
              </div>
            </motion.div>

            <motion.form
              className="contact-form-card"
              onSubmit={handleSubmit}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="contact-form-row">
                <label className="contact-field">
                  <span className="contact-field-label">Your name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                </label>

                <label className="contact-field">
                  <span className="contact-field-label">Your email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="john.doe@example.com"
                    required
                  />
                </label>
              </div>

              <label className="contact-field">
                <span className="contact-field-label">Message</span>
                <textarea
                  name="message"
                  rows="8"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </label>

              <button type="submit" className="contact-submit-btn">
                Send Message <span>➤</span>
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} Aawesh khan. All rights reserved.
          </p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="about">About</a>
            <a href="projects">Projects</a>
            <a href="experience">Experience</a>
            <a href="contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}