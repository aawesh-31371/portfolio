"use client";

import { motion } from "framer-motion";

export default function ProjectCard({
  number,
  category,
  title,
  description,
  date,
  technologies,
  github,
  demo,
}) {
  return (
    <motion.article
      className="project-card-modern"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <div className="project-preview">
        <div className="project-badge">{number}</div>
      </div>

      <div className="project-card-body">
        <p className="project-category-label">{category}</p>

        <h3>{title}</h3>

        <p className="project-card-desc">{description}</p>

        <div className="project-tech-pills">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-card-actions">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn-outline"
            >
              GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn-primary"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}