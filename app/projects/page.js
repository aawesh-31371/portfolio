import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    number: "01",
    category: "FULL-STACK WEB DEVELOPMENT",
    title: "Maruti Nandan Associates",
    image: "/projects/mna.png",
    description:
      "A modern responsive website for a construction company featuring service sections, project showcases, galleries and an engaging user experience.",
    date: "2026",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "React Router",
      "Framer Motion",
    ],
    github:
      "https://github.com/aawesh-31371/maruti-nandan-associate",
    demo: "https://maruti-nandan-associate.vercel.app/",
  },

  {
    number: "02",
    category: "FLOOD SIMULATION / FULL-STACK",
    title: "JalSetu",
    image: "/projects/jalsetu.png",
    description:
      "A flood monitoring and urban flood simulation platform designed to visualize flood conditions, simulate inundation levels and provide real-time alerts for vulnerable areas.",
    date: "2026",
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "3D Visualization",
      "Weather APIs",
    ],
    github: "https://github.com/aawesh-31371/chennai-flood-twin",
    demo:
      "https://chennai-flood-twin-qnyq17ma2-aawesh-31371s-projects.vercel.app/",
  },

  {
    number: "03",
    category: "UI / UX DESIGN",
    title: "Qless",
    image: "/projects/qless.png",
    
    description:
      "A UI/UX design concept focused on creating a simple and intuitive digital experience with clear user flows, interactive interfaces and a user-centered design approach.",
    date: "2026",
    technologies: [
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "User Flow",
    ],
    demo:
      "https://www.figma.com/design/h6MQFUaaRvtuvFZhcp2syL/Qless-figma?node-id=0-1",
  },
];

export default function ProjectsPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">02 — PROJECTS</p>

         
        </div>

        <div className="projects-card-grid">
          {projects.map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}