import { useState } from "react";
import bciImg from "../assets/bci.jpg";
import swaraImg from "../assets/swara.png";
import stemImg from "../assets/stem.jpg";
import gitImg from "../assets/git.jpg";
import permikaImg from "../assets/permika.jpg";
import taekwondoImg from "../assets/taekwondo.jpg";
import danceImg from "../assets/dance.jpg";

const slides = [
  {
    img: bciImg,
    title: "BCI Enthusiast",
    subtitle: "Brain-Computer Interface Research",
    bullets: [
      "Built a makeshift EOG-based BCI that lets you play Chrome's Dino game by blinking",
      "Working with Neurosity's The Crown, a research-grade EEG headset, for my honours project",
      "Just getting started — always looking for the next experiment to run!",
    ]
  },
  {
    img: swaraImg,
    title: "Educator & Curriculum Designer",
    subtitle: "Swara Children's Foundation, Indonesia",
    bullets: [
      "Designed curricula for children in slum areas with no school access",
      "Kickstarted a student mentorship program",
      "Volunteered as an educator supporting children's development and community-based programming",
    ]
  },
  {
    img: stemImg,
    title: "STEM Workshop Leader",
    subtitle: "UBC Okanagan",
    bullets: [
      "Led K-12 STEM workshops introducing younger students to technology (encryption, human-computer interfaces, and more!)",
    ]
  },
  {
    img: gitImg,
    title: "Executive Member",
    subtitle: "Girls in Tech",
    bullets: [
      "Co-emceed Sharky Tank and Hack Attack with 100+ participants",
      "Secured CAD $4,850 in sponsorships through proposal writing",
      "Generated over 11,700 views on Hack Attack 2024 marketing content",
    ]
  },
  {
    img: permikaImg,
    title: "Event Coordinator",
    subtitle: "PERMIKA",
    bullets: [
      "Co-led events for 80+ Indonesian students in Canada",
      "Created educational content reaching over 11,300 views",
      "Represented the org at intercultural festivals and club expos",
    ]
  },
  {
    img: taekwondoImg,
    title: "Founder & President",
    subtitle: "UBCO Taekwondo Club",
    bullets: [
      "Founded from scratch — still running today",
      "Grew paying membership by 650%",
      "Organized campus-wide self-defense workshop with Campus Security",
      "Coordinated the club's first official belt testing",
    ]
  },
  {
    img: danceImg,
    title: "Dancer",
    subtitle: "For the love of it",
    bullets: [
      "Dance has always been a creative outlet and a way to connect with others",
    ]
  },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const prev = () => setActiveIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActiveIndex((i) => (i + 1) % slides.length);

  const getVisibleSlides = () => {
    const prev1 = (activeIndex - 1 + slides.length) % slides.length;
    const next1 = (activeIndex + 1) % slides.length;
    return [prev1, activeIndex, next1];
  };

  const visible = getVisibleSlides();

  return (
    <div className="min-h-screen bg-[#6d5855] flex flex-col items-center justify-center px-8 pt-24 pb-12">

      {/* Title */}
      <h1 className="font-script text-white mb-12" style={{ fontSize: '80px' }}>
        Who is Adara?
      </h1>

      {/* Carousel */}
      <div className="flex items-center gap-6 w-full max-w-5xl justify-center">

        {/* Left arrow */}
        <button onClick={prev} className="text-white hover:opacity-70 transition-all flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slides */}
        <div className="flex items-center gap-4 justify-center">
          {visible.map((slideIndex, position) => {
            const slide = slides[slideIndex];
            const isCenter = position === 1;
            const isHovered = hoveredIndex === slideIndex;

            return (
              <div
                key={slideIndex}
                onMouseEnter={() => setHoveredIndex(slideIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(slideIndex)}
                className="relative overflow-hidden cursor-pointer flex-shrink-0 transition-all duration-300"
                style={{
                    width: '310px',
                    height: '365px',
                    borderRadius: '5px',
                    opacity: isCenter ? 1 : 0.75,
                    border: '2px solid white',
                }}
                >
                {/* Photo */}
                <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover object-top transition-all duration-300"
                />

                {/* Brown overlay on hover */}
                <div
                    className={`absolute inset-0 flex flex-col justify-center px-6 transition-all duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundColor: 'rgba(109, 88, 85, 0.85)' }}
                >
                    <p className="text-white font-bold mb-1" style={{ fontSize: '25px' }}>
                    {slide.title}
                    </p>
                    <p className="text-white text-xs mb-3 italic opacity-80">
                    {slide.subtitle}
                    </p>
                    <ul className="space-y-0.5">
                    {slide.bullets.map((b, i) => (
                        <li key={i} className="text-white flex gap-2" style={{ fontSize: '13px' }}>
                        <span className="mt-1 flex-shrink-0">•</span>
                        <span>{b}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button onClick={next} className="text-white hover:opacity-70 transition-all flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2 mt-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`rounded-full transition-all duration-200 ${
              i === activeIndex ? 'bg-white w-4 h-2' : 'bg-white/40 w-2 h-2'
            }`}
          />
        ))}
      </div>

      {/* Hobbies */}
      <p className="text-white/80 mt-10 text-center" style={{ fontSize: '16px' }}>
        In my free time, I also run, weightlift, dance, arrange flowers, and read!
      </p>
      <p className="text-white/80 mt-1 text-center" style={{ fontSize: '16px' }}>
        Currently working through <span className="italic font-bold">'Americanah'</span> by Chimamanda Ngozi Adichie and <span className="italic font-bold">'The Highly Sensitive Person'</span> by Elaine N. Aaron
      </p>
    </div>
  );
}