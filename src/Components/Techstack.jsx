import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect } from "react";

const technologyStack = [
  {
    name: "C",
    image: "./tech-icons/c.png",
  },
  {
    name: "C++",
    image: "./tech-icons/c++.png",
  },
  {
    name: "Python",
    image: "./tech-icons/python.png",
  },
  {
    name: "HTML",
    image: "./tech-icons/html.png",
  },
  {
    name: "CSS",
    image: "./tech-icons/css.png",
  },
  {
    name: "SQL",
    image: "./tech-icons/sql.png",
  },
  {
    name: "React js",
    image: "./tech-icons/react.png",
  },
  {
    name: "Next js",
    image: "./tech-icons/next.png",
  },
  {
    name: "Javascript",
    image: "./tech-icons/javascript.png",
  },
  {
    name: "Node js",
    image: "./tech-icons/nodejs.png",
  },
  {
    name: "Mongo",
    image: "./tech-icons/mongo-db.png",
  },
  {
    name: "Git",
    image: "./tech-icons/git.png",
  },
  {
    name: "Java",
    image: "./tech-icons/java.png",
  },
  {
    name: "Docker",
    image: "./tech-icons/docker.png",
  },
  {
    name: "Golang",
    image: "./tech-icons/golang.png",
  },
];

function TechStack() {
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
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className="scroll-mt-40 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen px-8 py-12 transition-colors duration-300"
      ref={ref}
    >
      <motion.div className="  text-center ">
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center xl:mt-24
             bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent
             inline-block leading-tight pb-2"
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
            viewport={{ once: true }}
          >
            Technology Stack
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-medium text-accent text-center max-w-3xl mt-10"
            variants={itemVariants}
            initial="hidden"
            animate={controls}
          >
            I am passionate about refining my skills through continuous updates
            to my personal technology stack.
          </motion.p>

          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 md:gap-10 gap-4 pt-10"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {technologyStack.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-contain xl:w-36 xl:h-36"
                  whileHover={{ scale: 0.85 }}
                  loading="lazy"
                />
                <p className="mt-2 text-sm text-center">{item.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default TechStack;
