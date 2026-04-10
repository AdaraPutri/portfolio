import { useState, useRef, useEffect } from "react";
import carinoSong from "../assets/carino.mp3";

export default function Navbar({ page, setPage, playMusic }) {
  const links = ["home", "about", "projects", "experience"];
  const isWhiteBg = page === "home" || page === "projects";
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!playMusic) {
        setMuted(true);
    }
    }, [playMusic]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !playMusic) return;
    audio.volume = 0.3;
    audio.currentTime = 3;
    audio.play().catch(() => {});
  }, [playMusic]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!muted) {
      audio.pause();
      setMuted(true);
    } else {
      audio.currentTime = 3;
      audio.play().catch(() => {});
      setMuted(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 bg-transparent">

      <audio ref={audioRef} loop src={carinoSong} />

      {/* AP Monogram */}
      <div
        onClick={() => setPage("home")}
        className={`font-script cursor-pointer border rounded-full relative ${
          isWhiteBg ? "text-brown border-brown" : "text-white border-white"
        }`}
        style={{ width: '56px', height: '56px', fontSize: '35px' }}
      >
        <span style={{ position: 'absolute', top: '10px', left: '8px', lineHeight: '1' }}>A</span>
        <span style={{ position: 'absolute', bottom: '0px', right: '6px', lineHeight: '1' }}>P</span>
      </div>

      {/* Nav Links */}
      <div className={`flex gap-1 rounded-full px-2 py-2 ${
        isWhiteBg ? "bg-brown-light" : "bg-[#7a6b6a]"
      }`}>
        {links.map((link) => (
          <button
            key={link}
            onClick={() => setPage(link)}
            style={{ fontSize: '16px' }}
            className={`capitalize px-5 py-2 rounded-full font-bold transition-all duration-200 ${
              page === link
                ? isWhiteBg
                  ? "bg-brown-pill text-black"
                  : "bg-[#ada1a0] text-white"
                : isWhiteBg
                  ? "text-black hover:bg-brown-pill hover:text-black"
                  : "text-white hover:bg-[#ada1a0]"
            }`}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Right side: mute + resume */}
      <div className="flex items-center gap-3">

        {/* Mute/Unmute Button */}
        <div
          onClick={toggleMute}
          className={`cursor-pointer hover:opacity-70 transition-all duration-200 ${
            isWhiteBg ? "text-brown" : "text-white"
          }`}
        >
          {muted ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 3.5a1 1 0 00-1.707-.707L6.586 7.5H4a1 1 0 00-1 1v7a1 1 0 001 1h2.586l4.707 4.707A1 1 0 0013 20.5V3.5z" />
              <line x1="17" y1="10" x2="22" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="22" y1="10" x2="17" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 3.5a1 1 0 00-1.707-.707L6.586 7.5H4a1 1 0 00-1 1v7a1 1 0 001 1h2.586l4.707 4.707A1 1 0 0013 20.5V3.5z" />
              <path d="M16.5 8.5a5 5 0 010 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <path d="M19.5 6a9 9 0 010 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
          )}
        </div>

        {/* Resume Button */}
        <a
        href={require("../assets/resume.pdf")}
        download="Adara_Putri_Resume.pdf"
        style={{ fontSize: '16px' }}
        className={`flex items-center gap-2 px-5 py-2 rounded-full hover:opacity-90 transition-all duration-200 ${
            isWhiteBg ? "bg-brown text-white" : "bg-white text-brown"
        }`}
        >
        Resume
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        </a>
      </div>
    </nav>
  );
}