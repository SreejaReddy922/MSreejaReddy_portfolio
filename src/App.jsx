import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Code2,
  FolderKanban,
  BriefcaseBusiness,
  GraduationCap,
  ShieldCheck,
  X,
  ArrowUpRight,
  Mail,
  MapPin,
  Move,
  Phone,
  Trophy,
  Languages as LanguagesIcon
} from "lucide-react";

const profile = {
  name: "Mandadi Sreeja Reddy",
  role: "ENTRY-LEVEL FULL STACK DEVELOPER",
  email: "sreejareddy0209@gmail.com",
  phone: "+91 80744 62630",
  location: "Hyderabad, India - 500014",
  linkedin: "https://www.linkedin.com/in/sreeja-reddy-654756305",
  github: "https://github.com/SreejaReddy922",
  leetcode: "https://leetcode.com/u/SreejaReddy922"
};

const skills = {
  Programming: ["Python", "JavaScript (ES6+)", "Java", "C++"],
  Frontend: ["React.js", "HTML5", "CSS3", "Responsive Design"],
  "Backend & APIs": ["Node.js", "Express.js", "RESTful APIs"],
  Databases: ["SQL", "MongoDB", "Snowflake"],
  "Cloud & DevOps": ["AWS", "Azure", "Google Cloud", "Docker", "Git", "GitHub", "CI/CD"],
  "Core Concepts": ["Data Structures & Algorithms", "OOP", "SDLC", "Problem Solving"],
  "Testing & Debugging": ["Unit Testing", "Integration Testing", "Jest", "Selenium", "Debugging"],
  "Development Practices": ["Agile/Scrum", "Version Control", "Code Reviews"],
  Security: ["Secure Coding", "Application Security", "Burp Suite", "Nessus", "Nmap", "Wireshark", "SQLmap", "Ghidra"],
  "Operating Systems": ["Linux"]
};

const projects = [
  {
    title: "DeepTrace AI",
    period: "Dec 2025 – Apr 2026",
    description:
      "Secure, scalable network monitoring for real-time log analysis and forensic support.",
    points: [
      "Led development of a secure, scalable network monitoring system for real-time log analysis.",
      "Implemented alert-based anomaly detection workflows using machine learning models.",
      "Designed decoding mechanisms for hidden and encoded data to support forensic analysis.",
      "Improved detection accuracy and system reliability through intelligent event classification."
    ],
    technologies: ["Python", "SQL", "Machine Learning"]
  },
  {
    title: "Reimagine Education",
    period: "Mar 2025 – Nov 2025",
    description:
      "Full-stack student platform with scalable workflows and integrated REST APIs.",
    points: [
      "Built full-stack web application features using React and RESTful APIs to support student workflows.",
      "Developed backend services with optimized database queries and API integrations.",
      "Improved application performance and reliability through structured debugging and testing.",
      "Collaborated in an Agile/Scrum team with code reviews and Git-based workflows."
    ],
    technologies: ["Python", "React", "MongoDB", "REST APIs"]
  }
];

const internships = [
  {
    company: "Hacktify",
    role: "Penetration Testing Intern (Remote)",
    period: "Sep 2023 – Nov 2023",
    points: [
      "Performed penetration testing on web applications to identify common security vulnerabilities and insecure implementations.",
      "Analyzed backend logic and API request-response flows to detect authentication and validation weaknesses.",
      "Improved Python scripting and debugging skills through security-focused testing and system analysis."
    ]
  },
  {
    company: "AICTE",
    role: "Cybersecurity Virtual Intern (Remote)",
    period: "2023",
    points: [
      "Completed practical labs focused on network security, log analysis, and incident detection workflows.",
      "Worked with structured system logs to support threat monitoring and security event analysis.",
      "Strengthened analytical thinking and troubleshooting capabilities in simulated enterprise environments."
    ]
  }
];

const education = [
  {
    name: "Malla Reddy University, Hyderabad",
    course: "B.Tech in CSE (Cybersecurity)",
    period: "2022 – 2026",
    score: "CGPA 8.94"
  },
  {
    name: "Narayana Junior College, Kurnool",
    course: "Senior Secondary (12th)",
    period: "2020 – 2022",
    score: "842 / 1000"
  },
  {
    name: "Sri Chaitanya School, Nandikotkur",
    course: "Matriculation (10th)",
    period: "2020",
    score: "GPA 10 / 10"
  }
];

const certifications = [
  "Fortinet Fundamentals in Cybersecurity",
  "Python – GeeksforGeeks",
  "SQL Injection Attacks – EC-Council",
  "Foundations of Cybersecurity – Coursera",
  "Selenium Automation Testing – EC-Council",
  "Agile Scrum in Practice – Infosys Springboard"
];

const achievements = [
  "79th rank in TryHackMe Hackfinity Battle 2025 among 4,546 international teams.",
  "Completed Palo Alto and Fortinet AICTE Cybersecurity Internships.",
  "Led project teams during academic cybersecurity and software engineering initiatives."
];

const languages = ["English (Fluent)", "Hindi (Fluent)", "Telugu (Native)"];

const profileSummary =
  "Entry-level Full Stack Developer with hands-on experience building web applications using Python, JavaScript, React.js, Node.js, SQL, MongoDB, and RESTful APIs. Strong foundation in front-end and back-end development, data structures and algorithms, object-oriented programming, debugging, testing, and secure software development. Experienced in developing database-driven applications, integrating APIs, improving application reliability and performance, and collaborating through Agile/Scrum and Git-based development practices. Familiar with AWS, Azure, and Google Cloud Platform, with a focus on code quality, security, problem solving, and continuous learning.";

function DraggableWindow({ title, children, onClose }) {
  return (
    <motion.div
      className="window"
      drag
      dragMomentum={false}
      dragListener={false}
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <div className="window-header" onPointerDown={(e) => {
        e.currentTarget.parentElement.dispatchEvent(
          new PointerEvent("pointerdown", e)
        );
      }}>
        <div className="window-dots">
          <span />
          <span />
          <span />
        </div>

        <h3>{title}</h3>

        <button onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      <div className="window-content">
        {children}
      </div>

      <small className="drag-label">
        <Move size={12} /> DRAG WINDOW
      </small>
    </motion.div>
  );
}

export default function App() {
  const [active, setActive] = useState(null);
  const [projectIndex, setProjectIndex] = useState(0);

  const sections = [
    { id: "skills", name: "Skills", icon: Code2 },
    { id: "projects", name: "Projects", icon: FolderKanban },
    { id: "internships", name: "Internships", icon: BriefcaseBusiness },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "certifications", name: "Certifications", icon: ShieldCheck },
    { id: "achievements", name: "Achievements", icon: Trophy },
    { id: "languages", name: "Languages", icon: LanguagesIcon },
    { id: "contact", name: "Contact", icon: Mail }
  ];

  const openPanel = (panel) => {
    setActive(panel);
    document.getElementById("missions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">

      <header className="navbar">
        <a href="#home" className="logo">
          S<span>R</span>
          <small>Sreeja Reddy</small>
        </a>

        <div className="availability">
          <span /> AVAILABLE FOR OPPORTUNITIES
        </div>

        <nav>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#missions">PORTFOLIO</a>
          <button type="button" onClick={() => openPanel("contact")}>CONTACT</button>
        </nav>
      </header>

      <section className="hero" id="home">

        <motion.div
          className="hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="intro">HELLO, I'M {profile.name.toUpperCase()}</p>

          <motion.h1
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 0.75, delay: 0.35, ease: "easeOut" }}
          >
            BUILDING
            <br />
            <span>BEYOND</span>
            <br />
            THE <i>ORDINARY.</i>
          </motion.h1>

          <h4>{profile.role}</h4>

          <p className="description">I transform ideas into seamless web experiences, bringing together creative frontend interfaces and powerful backend solutions. Driven by curiosity and problem-solving, I aim to build technology that makes a meaningful difference.</p>

          <div className="buttons">
            <button onClick={() => openPanel("skills")}>
              EXPLORE MY WORK <ArrowUpRight />
            </button>

            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github /> GITHUB
            </a>
          </div>

          <div className="socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin /> LINKEDIN
            </a>

            <a href={profile.leetcode} target="_blank" rel="noreferrer">
              <Code2 /> LEETCODE
            </a>

            <span>
              <MapPin /> {profile.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="photo-card">
            <div className="photo-top">
              THE DEVELOPER
            </div>

            <img
              src="/photo.jpeg"
              alt="Sreeja Reddy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                document.querySelector(".photo-placeholder").style.display = "flex";
              }}
            />

            <div className="photo-placeholder">
              <h1>SR</h1>
              <p>ADD YOUR PHOTO</p>
            </div>

            <div className="photo-caption">
              WITH GREAT CODE
              <br />
              <span>COMES GREAT IMPACT.</span>
            </div>
          </div>
        </motion.div>

      </section>

      <section className="about" id="about">
        <div className="section-heading">
          <p>PROFILE SUMMARY</p>
          <h2>SOFTWARE WITH <span>INTENTION.</span></h2>
        </div>
        <p className="about-summary">{profileSummary}</p>
      </section>

      <section className="missions" id="missions">

        <div className="section-heading">
          <p>THE CONTROL ROOM</p>
          <h2>CHOOSE YOUR <span>MISSION.</span></h2>
          <small>Click a category to open its window.</small>
        </div>

        <div className="mission-grid">

          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <motion.button
                key={section.id}
                className={active === section.id ? "mission active" : "mission"}
                whileHover={{ y: -8, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={() =>
                  setActive(active === section.id ? null : section.id)
                }
              >
                <span>0{index + 1}</span>
                <Icon />
                <h3>{section.name}</h3>
                <small>OPEN PANEL ↗</small>
              </motion.button>
            );
          })}

        </div>

        <div className="window-area">
          <AnimatePresence mode="wait">

            {active === "skills" && (
              <DraggableWindow
                key="skills"
                title="SKILL MATRIX"
                onClose={() => setActive(null)}
              >
                <div className="skills-grid">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                      <h3>{category}</h3>
                      <div className="tags">
                        {items.map(skill => (
                          <span key={skill}>{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </DraggableWindow>
            )}

            {active === "projects" && (
              <DraggableWindow
                key="projects"
                title="PROJECT ARCHIVE"
                onClose={() => setActive(null)}
              >
                <div className="project-layout">

                  <div className="project-buttons">
                    {projects.map((project, index) => (
                      <button
                        key={project.title}
                        className={projectIndex === index ? "selected" : ""}
                        onClick={() => setProjectIndex(index)}
                      >
                        {project.title} ↗
                      </button>
                    ))}
                  </div>

                  <div className="project-details">
                    <h2>{projects[projectIndex].title}</h2>

                    <small>{projects[projectIndex].period}</small>

                    <p>{projects[projectIndex].description}</p>

                    <ul>
                      {projects[projectIndex].points.map(point => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <div className="tags">
                      {projects[projectIndex].technologies.map(item => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>

                </div>
              </DraggableWindow>
            )}

            {active === "internships" && (
              <DraggableWindow
                key="internships"
                title="INTERNSHIP EXPERIENCE"
                onClose={() => setActive(null)}
              >
                {internships.map(item => (
                  <div className="experience" key={item.company}>
                    <h2>{item.company}</h2>
                    <h4>{item.role}</h4>
                    <small>{item.period}</small>

                    <ul>
                      {item.points.map(point => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </DraggableWindow>
            )}

            {active === "education" && (
              <DraggableWindow
                key="education"
                title="ACADEMIC RECORD"
                onClose={() => setActive(null)}
              >
                {education.map(item => (
                  <div className="education" key={item.name}>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.course} · {item.period}</p>
                    </div>

                    <strong>{item.score}</strong>
                  </div>
                ))}
              </DraggableWindow>
            )}

            {active === "certifications" && (
              <DraggableWindow
                key="certifications"
                title="CERTIFICATION VAULT"
                onClose={() => setActive(null)}
              >
                {certifications.map((item, index) => (
                  <div className="certification" key={item}>
                    <ShieldCheck />
                    <span>0{index + 1}</span>
                    <strong>{item}</strong>
                  </div>
                ))}
              </DraggableWindow>
            )}

            {active === "achievements" && (
              <DraggableWindow
                key="achievements"
                title="LEADERSHIP & ACHIEVEMENTS"
                onClose={() => setActive(null)}
              >
                {achievements.map((item, index) => (
                  <div className="certification" key={item}>
                    <Trophy />
                    <span>0{index + 1}</span>
                    <strong>{item}</strong>
                  </div>
                ))}
              </DraggableWindow>
            )}

            {active === "languages" && (
              <DraggableWindow
                key="languages"
                title="LANGUAGES"
                onClose={() => setActive(null)}
              >
                <div className="tags language-tags">
                  {languages.map(language => <span key={language}>{language}</span>)}
                </div>
              </DraggableWindow>
            )}

            {active === "contact" && (
              <DraggableWindow
                key="contact"
                title="CONTACT DETAILS"
                onClose={() => setActive(null)}
              >
                <div className="contact-details">
                  <a href={`tel:${profile.phone.replaceAll(" ", "")}`}><Phone /> <span>{profile.phone}</span></a>
                  <a href={`mailto:${profile.email}`}><Mail /> <span>{profile.email}</span></a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> <span>LinkedIn profile</span><ArrowUpRight /></a>
                  <a href={profile.github} target="_blank" rel="noreferrer"><Github /> <span>GitHub profile</span><ArrowUpRight /></a>
                </div>
              </DraggableWindow>
            )}

          </AnimatePresence>
        </div>

      </section>

      <footer>
        <h2>THANKS FOR STOPPING BY.</h2>

        <p>YOUR FRIENDLY NEIGHBOURHOOD DEVELOPER.</p>

        <button type="button" onClick={() => openPanel("contact")}>
          <Mail /> LET'S CONNECT
        </button>

        <small>© 2026 {profile.name.toUpperCase()}</small>
      </footer>

    </div>
  );
}