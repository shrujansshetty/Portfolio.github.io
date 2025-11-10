import React, { useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const educationDetails = [
  {
    title: "B-Tech: CSE",
    institution: "NMAMIT, Nitte",
    score: "8.52 CGPA",
    year: "2022–26",
  },
  {
    title: "PUC: PCMC",
    institution: "Jnanasudha, Karkala",
    score: "89.67%",
    year: "2019–2021",
  },
  {
    title: "High School",
    institution: "NSAM, Nitte",
    score: "90.4%",
    year: "2007–2019",
  },
];

function Education() {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section
      id="education"
      className="scroll-mt-40 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen px-8 py-2 transition-colors duration-300"
      ref={ref}
    >
      <motion.div
        className="text-center flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center xl:mt-10
          bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent
          inline-block leading-tight pb-4"
          variants={itemVariants}
        >
          Education
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 pt-10 max-w-5xl"
          variants={containerVariants}
        >
          {educationDetails.map((edu, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 
                         hover:scale-105 transform transition-all duration-300"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-indigo-300">
                {edu.title}
              </h3>
              <p className="text-lg text-gray-300 mt-2">{edu.institution}</p>
              <p className="text-md text-gray-400 mt-1">{edu.score}</p>
              <p className="text-md text-gray-400">{edu.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Education;
