import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Example } from "./Animated-menu";
import { Sun, Moon } from "lucide-react"; // Icons for theme toggle

const Nav = () => {
  const [navclick, setnavclick] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // 🌙 Load saved theme on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // 🌓 Toggle theme and persist preference
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // 🪄 Add blur background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clicked = () => setnavclick((prev) => !prev);

  return (
    <>
      {/* 🌐 Navbar */}
      <nav
        className={`sticky top-0 z-50 shadow-xl w-full transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-white/30 dark:bg-gray-800/30"
            : "bg-white dark:bg-gray-900"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center h-24">
          {/* Logo */}
          <div className="sm:ml-10"></div>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden block" onClick={clicked}>
            <Example />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 xl:mr-40">
            {["Home", "Projects", "Skills", "Education", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-semibold text-lg text-gray-800 dark:text-gray-200 cursor-pointer 
                             hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 
                             hover:bg-clip-text hover:text-transparent transition duration-300"
                >
                  {item}
                </a>
              )
            )}

            {/* 📄 Resume Button */}
            <a
              href="https://drive.google.com/file/d/1ZsEifLJ-j-EDbHqL43mOMoZU45lrIh3y/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white font-bold px-6 py-2 rounded-md shadow-md hover:shadow-lg"
              >
                Resume
              </motion.button>
            </a>

            {/* 🌞 Dark Theme Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="ml-4 flex items-center justify-center w-10 h-10 rounded-full 
                         bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 
                         hover:scale-110 transition-transform duration-200"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {navclick && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-indigo-700 dark:bg-gray-900 z-50 flex flex-col justify-center items-start p-8"
          >
            {/* Close Button */}
            <button
              onClick={clicked}
              className="absolute top-1 right-1 text-white dark:text-gray-200"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Links */}
            {["Home", "Projects", "Skills", "Education", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-semibold text-4xl text-white mb-6 cursor-pointer block 
                             hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 
                             hover:bg-clip-text hover:text-transparent transition duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={clicked}
                >
                  {item}
                </motion.a>
              )
            )}

            {/* Resume + Theme Toggle */}
            <div className="flex items-center space-x-6 mt-8">
              <motion.a
                href="https://316aiet5vaiyby9a.public.blob.vercel-storage.com/resume.pdf"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white font-bold px-6 py-3 rounded-md shadow-md"
                >
                  Resume
                </motion.button>
              </motion.a>

              {/* 🌙 Theme Toggle in mobile menu */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="flex items-center justify-center w-12 h-12 rounded-full 
                           bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition"
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
