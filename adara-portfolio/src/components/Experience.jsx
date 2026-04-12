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
    img: stemImg,
    title: "STEM Workshop Leader",
    subtitle: "UBC Okanagan",
    bullets: [
      "Led K-12 STEM workshops introducing younger students to technology (encryption, human-computer interfaces, and more!)",
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
    subtitle: "PERMIKA Nasional",
    bullets: [
      "Co-led events for 80+ Indonesian students in Canada",
      "Created educational content reaching over 11,300 views",
      "Represented the org at intercultural festivals and club expos",
    ]
  },
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
    img: danceImg,
    title: "Dancer",
    subtitle: "For the love of it",
    bullets: [
      "Dance has always been a creative outlet and a way to connect with others",
    ]
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getVisibleSlides = () => {
    const prev2 = (activeIndex - 2 + slides.length) % slides.length;
    const prev1 = (activeIndex - 1 + slides.length) % slides.length;
    const next1 = (activeIndex + 1) % slides.length;
    const next2 = (activeIndex + 2) % slides.length;
    return [prev2, prev1, activeIndex, next1, next2];
};

  const visible = getVisibleSlides();

  return (
    <div className="min-h-screen bg-[#6d5855] flex flex-col items-center justify-center px-8 pt-24 pb-12">

      {/* Title */}
      <h1 className="font-script text-white mb-5" style={{ fontSize: '80px' }}>
        My Tech Stack
      </h1>

      {/* Carousel */}
        <div className="flex items-center w-full max-w-6xl justify-center relative">

        {/* Slides */}
        <div className="flex items-center gap-4 justify-center">
            {visible.map((slideIndex, position) => {
            const slide = slides[slideIndex];
            const isCenter = position === 2;
            const isAdjacent = position === 1 || position === 3;
            const isHovered = hoveredIndex === slideIndex;

            const width = isCenter ? '310px' : isAdjacent ? '240px' : '180px';
            const height = isCenter ? '365px' : isAdjacent ? '290px' : '220px';
            const opacity = isCenter ? 1 : isAdjacent ? 0.75 : 0.5;

            return (
                <div
                    key={slideIndex}
                    onMouseEnter={() => setHoveredIndex(slideIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setActiveIndex(slideIndex)}
                    className="relative overflow-hidden flex-shrink-0 transition-all duration-300"
                    style={{
                    width,
                    height,
                    borderRadius: '5px',
                    opacity,
                    border: '2px solid white',
                    cursor: 'pointer',
                    }}
                >
                <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover object-top transition-all duration-300"
                />

                {/* Brown overlay on hover — center only */}
                <div
                    className={`absolute inset-0 flex flex-col justify-center px-6 transition-all duration-300 ${
                    isHovered && isCenter ? 'opacity-100' : 'opacity-0'
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
        In my free time, I also run, weightlift, arrange flowers, and read!
      </p>
      <p className="text-white/80 mt-1 text-center" style={{ fontSize: '16px' }}>
        Currently working through <span className="italic font-bold">'Americanah'</span> by Chimamanda Ngozi Adichie and <span className="italic font-bold">'The Highly Sensitive Person'</span> by Elaine N. Aaron
      </p>
    </div>
  );
}