import {
  motion as Motion,
  useIsPresent,
  useReducedMotion,
} from "framer-motion";

const experience = [
  {
    company: "Seasoft",
    role: "Senior Web Developer",
    dates: "Dec 2024 — Present",
    detail:
      "Modernizing enterprise software used by 90% of Fortune 500 companies. Building faster report search, admin interfaces, and automated release pipelines.",
  },
  {
    company: "Rodo / Cario",
    role: "Front-End Developer → Senior Full-Stack Engineer",
    dates: "Mar 2022 — Dec 2024",
    detail:
      "Built vehicle-buying and digital title platforms with React, Next.js, and TypeScript. Prototyped AI-powered document validation and designed DMV dashboards.",
  },
  {
    company: "Morgan Stanley",
    role: "Registered Associate → Senior Registered Service Associate",
    dates: "Dec 2017 — Mar 2022",
    detail:
      "Supported a $400M book of business, resolved complex trade errors, and mentored associates across technology and client service.",
  },
];

const skills = [
  {
    title: "Frontend",
    detail:
      "React, Next.js, TypeScript, JavaScript, Redux, TanStack, MUI, Tailwind, HTML, CSS.",
  },
  {
    title: "Backend & data",
    detail: "Node.js, Express.js, Python, PostgreSQL, MongoDB.",
  },
  {
    title: "Cloud & tools",
    detail: "GCP, AWS, Docker, Kubernetes, Git, GitLab, Jenkins.",
  },
  {
    title: "Product & design",
    detail: "UI/UX, Figma, responsive design, accessibility.",
  },
];

const statements = {
  artist: "View portfolio.",
  box: "Box Black: A new kind of secure document viewer.",
};

export default function GlobeInfo({
  section,
  onMouseEnter,
  onMouseLeave,
  onClose,
}) {
  const present = useIsPresent();
  const reducedMotion = useReducedMotion();
  const reveal = {
    hidden: { y: "110%" },
    visible: { y: 0 },
    exit: { y: "-110%" },
  };
  const transition = {
    duration: reducedMotion ? 0 : 0.65,
    ease: [0.65, 0, 0.35, 1],
  };
  return (
    <Motion.aside
      id="globe-info"
      className="globe-info"
      aria-label={section === "artist" ? "Graphic Design" : section}
      inert={!present}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.07 } },
        exit: { transition: { staggerChildren: reducedMotion ? 0 : 0.035 } },
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocusCapture={onMouseEnter}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) onMouseLeave();
      }}
    >
      <div className="info-mask">
        <Motion.div
          className="info-heading"
          variants={reveal}
          transition={transition}
        >
          <span className="eyebrow">
            {section === "artist"
              ? "Graphic Design"
              : section === "box"
                ? "Box Black"
                : section}
          </span>
          <button onClick={onClose} aria-label="Close profile information">
            ×
          </button>
        </Motion.div>
      </div>
      {statements[section] && (
        <div className="info-mask">
          <Motion.h2
            className="info-statement"
            variants={reveal}
            transition={transition}
          >
            {statements[section]}
          </Motion.h2>
        </div>
      )}
      {section === "experience" &&
        experience.map((job) => (
          <div className="info-mask" key={job.company}>
            <Motion.article
              className="info-item"
              variants={reveal}
              transition={transition}
            >
              <h2>{job.company}</h2>
              <span className="info-dates">{job.dates}</span>
              <h3>{job.role}</h3>
              <p>{job.detail}</p>
            </Motion.article>
          </div>
        ))}
      {section === "skills" &&
        skills.map((group) => (
          <div className="info-mask" key={group.title}>
            <Motion.article
              className="info-item"
              variants={reveal}
              transition={transition}
            >
              <h2>{group.title}</h2>
              <p>{group.detail}</p>
            </Motion.article>
          </div>
        ))}
    </Motion.aside>
  );
}
