import { useState } from "react";
import resumeImg from "../assets/resume-mockup.png";
import raedaImg from "../assets/raeda-mockup.png";
import seesameImg from "../assets/seesame-mockup.png";

const projects = [
  {
    id: 1,
    title: "resuME",
    subtitle: "AI-Powered Portfolio & Resume Generator",
    description: "resuME lets users upload their code and text-based projects, then automatically analyzes them to generate project summaries, score technical quality against a defined skill rubric, and surface auto-generated metrics. From there, it builds a tailored resume and web portfolio ready for job applications.",
    image: resumeImg,
    tags: ["Full Stack"],
    link: "https://ubc.ca",
  },
  {
    id: 2,
    title: "RAEDA",
    subtitle: "Your In-Person Shopping Companion",
    description: "RAEDA reimagines the mall experience as a mobile-first directory that maps every store and their catalogue within your vicinity. A concept design exploring how physical retail can feel as intuitive and connected as online shopping.",
    image: raedaImg,
    tags: ["Design"],
    link: "https://ubc.ca",
  },
  {
    id: 3,
    title: "seesame",
    subtitle: "Shop Your Pinterest Board",
    description: "seesame bridges the gap between inspiration and action. Paste a Pinterest board link and seesame automatically scans your pinned items, searches the web for the closest matching products, and brings everything into one place.",
    image: seesameImg,
    tags: ["Design"],
    link: "https://ubc.ca",
  },
  {
    id: 4,
    title: "EduBCI",
    subtitle: "Brain-Computer Interface for Adaptive Learning",
    description: "PLACEHOLDER — describe the project here.",
    image: null,
    tags: ["Full Stack", "Research"],
    link: "https://ubc.ca",
  },
  {
    id: 5,
    title: "Process Analysis",
    subtitle: "PLACEHOLDER subtitle",
    description: "PLACEHOLDER — describe the project here.",
    image: null,
    tags: ["Research"],
    link: "https://ubc.ca",
  },
  {
    id: 6,
    title: "SRL",
    subtitle: "PLACEHOLDER subtitle",
    description: "PLACEHOLDER — describe the project here.",
    image: null,
    tags: ["Research"],
    link: "https://ubc.ca",
  },
  {
    id: 7,
    title: "ZnA Grocery",
    subtitle: "PLACEHOLDER subtitle",
    description: "PLACEHOLDER — describe the project here.",
    image: null,
    tags: ["Full Stack"],
    link: "https://ubc.ca",
  },
  {
    id: 8,
    title: "Do4Due",
    subtitle: "PLACEHOLDER subtitle",
    description: "PLACEHOLDER — describe the project here.",
    image: null,
    tags: ["Full Stack"],
    link: "https://ubc.ca",
  },
  {
    id: 9,
    title: "BuddyCart",
    subtitle: "PLACEHOLDER subtitle",
    description: "PLACEHOLDER — describe the project here.",
    image: null,
    tags: ["Design"],
    link: "https://ubc.ca",
  },
  {
    id: 10,
    title: "Student Mood Tracker",
    subtitle: "PLACEHOLDER subtitle",
    description: "PLACEHOLDER — describe the project here.",
    image: null,
    tags: ["Hackathon"],
    link: "https://ubc.ca",
  },
];

const filters = ["All", "Full Stack", "Design", "Research", "Hackathon"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-white px-16 pt-32 pb-16">

      {/* Filter tabs - left aligned */}
      <div className="flex gap-2 mb-10 justify-start">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            style={{ fontSize: '14px' }}
            className={`px-4 py-1 rounded-full border transition-all duration-200 ${
              activeFilter === filter
                ? "bg-brown text-white border-brown"
                : "bg-white text-brown border-brown hover:bg-brown hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="flex flex-wrap gap-8">
        {filtered.map((project) => (
        <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="bg-white overflow-hidden shadow-sm border border-[#e5e5e5] flex flex-col flex-shrink-0 hover:shadow-md transition-all duration-200"
            style={{ width: '405px', height: '491px', borderRadius: '4px', textDecoration: 'none' }}
          >
            {/* Image */}
            <div className="w-full flex-shrink-0 bg-brown-light flex items-center justify-center overflow-hidden" style={{ height: '240px' }}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-brown-pill text-sm">image coming soon</span>
              )}
            </div>

            {/* Text */}
            <div className="p-5 flex flex-col gap-2 flex-1 overflow-hidden">
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-brown-light text-brown"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-black font-bold" style={{ fontSize: '20px' }}>
                {project.title}
              </h3>
              <p className="text-brown-pill italic text-s">
                {project.subtitle}
              </p>
              <p className="text-black" style={{ fontSize: '14px', lineHeight: '1.2' }}>
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}