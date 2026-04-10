import { useState, useEffect } from "react";
import adaraPhoto from "../assets/adara.jpg";

const words = ["developer", "researcher", "designer", "data analyst"];

export default function Home({ setPage }) {
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = words[wordIndex];
    let timeout;

    if (!deleting && charIndex < target.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 100);
    } else if (!deleting && charIndex === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 60);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
    }

    setCurrentWord(target.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center px-16 overflow-hidden">

      {/* Dot pattern background */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `
            radial-gradient(circle, #e5e5e5 12px, transparent 12px),
            radial-gradient(circle, #e5e5e5 12px, transparent 12px)
        `,
        backgroundSize: '220px 220px',
        backgroundPosition: '0 0, 110px 110px'
        }} />

      {/* Center content */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-5xl gap-16 mx-auto">

        {/* Left content */}
        <div className="flex flex-col gap-5 bg-white px-6 py-4 rounded-2xl items-end text-right">

          {/* Adara Putri */}
          <h1 className="font-script text-brown leading-none" style={{ fontSize: '103px' }}>
            Adara Putri
          </h1>

          {/* I am a typewriter */}
          <div className="flex items-center gap-2" style={{ fontSize: '25px' }}>
            <span className="text-brown-pill">I am a</span>
            <span className="text-brown font-bold">
              {currentWord}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Bio */}
          <p className="text-brown leading-relaxed" style={{ fontSize: '15px', maxWidth: '440px' }}>
            Graduating Computer Science (Honours) student with a Minor in Data Science, passionate about building technology that makes a real difference. I love to build, learn, and grow!
          </p>

          {/* Location note */}
          <p className="text-brown-pill italic" style={{ fontSize: '13px', maxWidth: '440px' }}>
            *Currently based in Kelowna, BC, open to opportunities anywhere in Canada.<br />
            Pending PGWP, eligible to work on an open work permit.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mt-1">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/adara-sharmila-putri/" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-md bg-brown flex items-center justify-center text-white hover:opacity-80 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.06C12.66 9 14.04 8 16 8c4.42 0 5.24 2.9 5.24 6.68V24H16v-8.4c0-2-.04-4.58-2.8-4.58-2.8 0-3.22 2.18-3.22 4.44V24H5.5V8h2z"/>
              </svg>
            </a>

            {/* Email */}
            <a href="mailto:adarasharmilaputri@gmail.com"
              className="w-9 h-9 rounded-md bg-brown flex items-center justify-center text-white hover:opacity-80 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com/adaraputri" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-md bg-brown flex items-center justify-center text-white hover:opacity-80 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right: oyster shaped photo */}
        <div className="flex-shrink-0">
        <div
            style={{
                width: '379px',
                height: '364px',
                borderRadius: '35% 65% 65% 35% / 70% 70% 30% 30%',
                overflow: 'hidden',
                border: '2.5px solid #6d5855',
                transform: 'rotate(-3deg)',
            }}
        >
            <img
                src={adaraPhoto}
                alt="Adara Putri"
                className="w-full h-full object-cover object-top"
                style={{ transform: 'rotate(3deg)', transformOrigin: 'center', scale: '1.05' }}
            />
        </div>
        </div>

      </div>
    </div>
  );
}