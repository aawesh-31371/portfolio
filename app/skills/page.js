"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "Languages",
    description: "Programming languages I use for problem solving and development.",
    skills: [
      "C++",
      "Java",
      "Python",
      "C",
      "JavaScript",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    number: "02",
    title: "Frontend",
    description: "Technologies I use to create modern and responsive interfaces.",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    number: "03",
    title: "Backend",
    description: "Tools I use to build APIs and server-side applications.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "Mongoose",
    ],
  },
  {
    number: "04",
    title: "Tools",
    description: "Development and design tools that are part of my workflow.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Figma",
      "Render",
    ],
  },
];

export default function Skills() {
  return (
    <main className="skills-page">

      {/* HERO */}
      <section className="skills-hero">
        <div className="container">

          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            03 — SKILLS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Technologies I
            <br />
            <span>work with.</span>
          </motion.h1>

          <motion.p
            className="skills-intro"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            My toolkit is built around problem solving, full-stack
            development and creating useful digital experiences.
          </motion.p>

        </div>
      </section>


      {/* SKILL CARDS */}
      <section className="skills-cards-section">

        <div className="container">

          <div className="skills-card-grid">

            {skillGroups.map((group, index) => (
              <motion.article
                className="skill-category-card"
                key={group.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >

                <div className="skill-card-number">
                  {group.number}
                </div>

                <h2>{group.title}</h2>

                <p className="skill-card-description">
                  {group.description}
                </p>

                <div className="skill-tags">

                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        y: -3,
                        scale: 1.04,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}

                </div>

              </motion.article>
            ))}

          </div>

        </div>

      </section>


      {/* BOTTOM STATEMENT */}
      <section className="skills-statement">

        <div className="container">

          <motion.div
            className="skills-statement-box"
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
          >

            <span className="mini-label">
              CONTINUOUSLY LEARNING
            </span>

            <h2>
              The best skill is
              <br />
              <span>knowing how to learn.</span>
            </h2>

            <p>
              I'm continuously exploring new technologies,
              improving my development workflow and building
              projects that challenge me.
            </p>

          </motion.div>

        </div>

      </section>

    </main>
  );
}