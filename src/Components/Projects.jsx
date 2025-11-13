import React, { useRef, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useInView,
  useAnimation,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

const arrproject = [
  {
    projectname: "MetLife",
    image: "./projects/metlife.jpg",
    discription:
      "A doctor appointment booking and managing platform, built using spring boot.",
    link: "https://github.com/shrujansshetty/MetLife-SpringBoot",
  },
  {
    projectname: "Github Readme Generator",
    image: "./projects/githubreadme.png",
    discription:
      "Generate Readmes for your GitHub profile to showcase your skills, badges and more.",
    link: "https://github.com/shrujansshetty/Github_Readme_Generator.github.io",
  },
  {
    projectname: "CI/CD Automation Pipeline",
    image: "./projects/cicd.png",
    discription:
      "A simulation of CI/CD Automation pipeline, with the help of Github Actions",
    link: "https://github.com/shrujansshetty/CI-CD-Automation-Pipeline-Simulation",
  },
   {
    projectname: "Compiler Design",
    image: "./projects/compiler.png",
    discription:
      "Built a compiler using python to parse strings of a given hypothetical language.",
    link: "https://github.com/shrujansshetty/Compiler_design",
  },
   {
    projectname: "Network Traffic Classifier",
    image: "./projects/ntc.png",
    discription:
      "Classifies network traffic using trained machine learning model",
    link: "https://github.com/shrujansshetty/AI-Powered-Network-Traffic-Classifier",
  },
   {
    projectname: "Network Packet Sniffer",
    image: "./projects/nps.png",
    discription:
      "A lightweight packet capture tool to inspect Ethernet / IPv4 / TCP / UDP headers and analyze real-time packet flow.",
    link: "https://github.com/shrujansshetty/Network-Packet-Sniffer-Python",
  }
];

const Project = () => {
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
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section
      id="projects"
      className="scroll-mt-40 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen px-8 py-12 transition-colors duration-300"
      ref={ref}
    >
      <motion.div className="text-center mt-28">
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center sm:h-24"
            style={{
              backgroundImage: "linear-gradient(to right, #818cf8, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            variants={itemVariants}
            initial="hidden"
            animate={controls}
          >
            Projects
          </motion.h1>

          <div className="container mx-auto px-4 pt-12">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {arrproject.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    type: "spring",
                  }}
                  viewport={{ once: true }}
                >
                  <TiltCard
                    img={item.image}
                    title={item.projectname}
                    dis={item.discription}
                    link={item.link}
                    loading={"lazy"}
                  />
                </motion.div>
              ))}
            </motion.div>

            <div className="flex justify-center items-center mt-24 mb-24">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open(
                    "https://github.com/shrujansshetty?tab=repositories",
                    "_blank"
                  )
                }
                className="flex items-center gap-3 px-6 py-3 border-2 border-cyan-500 bg-white rounded-full font-semibold text-lg tracking-wide shadow-md hover:shadow-lg transition-all duration-300 hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600"
              >
                SEE MORE
                <ArrowRight className="w-7 h-7 text-black" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const ROTATION_RANGE = 15.5;
const HALF_ROTATION_RANGE = 15.5 / 2;

const TiltCard = ({ img, title, dis, link }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      whileHover={{ y: -5, rotateX: x.get() / 3, rotateY: y.get() / 3 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      className="relative h-72 w-[22rem] sm:h-80 sm:w-[28rem] 2xl:h-96 2xl:w-[35rem]
      rounded-2xl bg-slate-900 group overflow-hidden shadow-2xl
      transition-all duration-700 ease-out hover:shadow-cyan-500/40
      hover:-translate-y-3 hover:scale-[1.03] hover:ring-2 hover:ring-cyan-400/40"
    >
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-30"
      />

      {/* Hover Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h3
          className="text-3xl font-bold text-white drop-shadow-lg mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:-translate-y-2 transition-all duration-700 group-hover:text-cyan-300"
          style={{ transform: "translateZ(50px)" }}
        >
          {title}
        </h3>
        <p
          className="text-lg text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ transform: "translateZ(50px)" }}
        >
          {dis}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-cyan-500 text-white font-semibold px-5 py-2 rounded-full hover:bg-cyan-400"
        >
          Visit Project
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
