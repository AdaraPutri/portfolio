import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";


const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const pageTransition = {
  duration: 0.4,
  ease: "easeInOut",
};

export default function App() {
  const [page, setPage] = useState("home");
  const [showPopup, setShowPopup] = useState(true);
  const [playMusic, setPlayMusic] = useState(false);

  useEffect(() => {
    const restoreCursor = () => {
      document.body.style.cursor = `url('/flower-cursor.png') 16 16, auto`;
    };

    window.addEventListener("click", restoreCursor);
    document.addEventListener("mouseenter", restoreCursor);
    window.addEventListener("focus", restoreCursor);

    return () => {
      window.removeEventListener("click", restoreCursor);
      document.removeEventListener("mouseenter", restoreCursor);
      window.removeEventListener("focus", restoreCursor);
    };
  }, []);

  const handleYes = () => {
    setPlayMusic(true);
    setShowPopup(false);
  };

  const handleNo = () => {
    setPlayMusic(false);
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen">

      {/* Music Consent Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl px-10 py-8 shadow-xl flex flex-col items-center gap-6 max-w-sm mx-4 text-center">
            <p className="font-script text-brown text-4xl">Welcome!</p>
            <p className="text-brown text-sm leading-relaxed">
              Would you like to listen to <span className="font-bold">Cariño by The Marías (instrumental)</span> while browsing?
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleYes}
                className="bg-brown text-white px-6 py-2 rounded-full text-sm hover:opacity-90 transition-all"
              >
                yes please
              </button>
              <button
                onClick={handleNo}
                className="border border-brown text-brown px-6 py-2 rounded-full text-sm hover:opacity-70 transition-all"
              >
                no thanks
              </button>
            </div>
          </div>
        </div>
      )}

      <Navbar page={page} setPage={setPage} playMusic={playMusic} />

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
        >
          {page === "home" && <Home setPage={setPage} />}
          {page === "about" && <About />}
          {page === "projects" && <Projects />}
          {page === "experience" && <Experience />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}