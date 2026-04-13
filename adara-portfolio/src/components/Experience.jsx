import { useEffect, useRef } from "react";
import ubcoCareerLogo from "../assets/ubco_career_logo.png";
import ubcLogo from "../assets/ubc_logo.png";
import preludeLogo from "../assets/prelude_logo.png";

const techStack = [
  "python", "java", "r", "javascript", "css", "bootstrap", "html5",
  "nodejs", "react", "swift", "ruby", "processing", "kotlin", "fastapi",
  "docker", "firebase", "sqlite",
];

const experiences = [
  {
    role: "Full Stack Software Engineer (Capstone)",
    org: "@ UBCO Career Development Department",
    description:
      "Designed and built a full-stack résumé and portfolio platform end-to-end — from UI/UX design and frontend implementation in React to backend development in FastAPI and Python, including automated analysis pipelines, validation logic, deduplication, and testing across Agile sprint cycles.",
    logo: ubcoCareerLogo,
  },
  {
    role: "Backend Developer",
    org: "@ UBC Bowen Hui Lab",
    description:
      "Built and maintained Python analytics pipelines using GitHub API, JSON, and CSV data across 20+ capstone teams from different academic years, applying LLM-assisted labeling and Markov modelling to analyze development patterns.",
    logo: ubcLogo,
  },
  {
    role: "Go-To-Market Strategy Extern",
    org: "@ Prelude",
    description:
      "Researched the clinical trials software landscape and conducted market and competitor analysis to identify customer segments and opportunities, synthesizing findings into go-to-market recommendations.",
    logo: preludeLogo,
  },
  {
    role: "Data Analytics Engineer",
    org: "@ UBC Bowen Hui Lab",
    description:
      "Analyzed large-scale student activity data from a question bank platform using Python, R, Excel, and Tableau, building Markov models, clustering workflows, and z-score filtering methods to identify behavioral trends across student groups.",
    logo: ubcLogo,
  },
];

export default function Experience() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    let pos = 0;
    const speed = 0.5;
    const half = el.scrollWidth / 2;
    const tick = () => {
      pos += speed;
      if (pos >= half) pos = 0;
      el.style.transform = `translateX(-${pos}px)`;
      requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const stackText = techStack.join(" • ") + " • ";

  return (
    <div className="min-h-screen bg-[#6d5855] flex flex-col items-center justify-center px-8 pt-28 pb-12">

      {/* Tech Stack Marquee */}
      <div className="w-full overflow-hidden">
        <h1
          className="font-script text-white text-center mb-5"
          style={{ fontSize: "80px" }}
        >
          My Tech Stack
        </h1>

        {/* Scrolling ticker */}
        <div className="overflow-hidden w-full">
          <div
            ref={marqueeRef}
            className="flex whitespace-nowrap will-change-transform"
            style={{ display: "inline-flex" }}
          >
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="text-white/80 tracking-wide px-4"
                style={{ fontSize: "18px" }}
              >
                {stackText}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline — full width white */}
      <div className="w-screen mt-12 px-32 py-12 bg-white" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>

        <div className="max-w-2xl mx-auto relative">
        {/* Vertical line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-[#6d5855]/30"
          style={{ left: "58px" }}
        />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-6 items-start relative">

              {/* Logo */}
              <div
                className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden z-10"
                style={{ border: "2px solid rgba(109,88,85,0.2)" }}
              >
                <img
                  src={exp.logo}
                  alt={exp.org}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 pt-1">
                <p className="text-black font-bold" style={{ fontSize: "17px" }}>
                  {exp.role}
                </p>
                <p className="text-[#6d5855] italic" style={{ fontSize: "14px" }}>
                  {exp.org}
                </p>
                <p className="text-black/70 mt-1 leading-relaxed" style={{ fontSize: "14px" }}>
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}