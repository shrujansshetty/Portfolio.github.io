import React from "react";
import { motion, useInView } from "framer-motion";
const Home = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  const [loaded, setLoaded] = React.useState(false);
  const animatedImages = [
    {
      className:
        "w-[110px] h-auto md:w-[150px] xl:w-[170px] absolute top-1/4 left-1  md:-left-3.5 lg:top-24 lg:-left-14 z-[1]",
      src: "/quadrilateral.webp",
      alt: "",

      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: 0.4, duration: 0.8 },
    },
    {
      className:
        "w-[135px] h-auto md:w-[150px] xl:w-[190px] lg:w-[170px] absolute top-1 right-1  lg:top-[1rem] lg:-right-3 z-[1]",
      src: "/triangle.webp",
      alt: "",
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: 0.6, duration: 0.8 },
    },
    {
      className:
        "w-[120px] h-auto md:w-[150px] lg:w-[150px] xl:w-[170px] absolute bottom-1 -left-8 md:-left-12 lg:bottom-[2rem] lg:-left-[3rem] z-[1]",
      src: "/twisted-torus.webp",
      alt: "",
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: 0.8, duration: 0.8 },
    },
    {
      className:
        "w-[126px] h-auto md:w-[150px] lg:w-[192px] absolute bottom-1/4 right-1 lg:bottom-[1rem] lg:-right-4 z-[1] xl:-right-12 xl:bottom-[4rem]",
      src: "/zig-zag.webp",
      alt: "",
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: 1, duration: 0.8 },
    },
  ];
  return (
    <>
      <section
        id="home"
        className="scroll-mt-40 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      >
        <motion.div
          className="my-0 2xl:mx-32"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div
            ref={ref}
            className="flex flex-col-reverse xl:flex-row items-center 2xl:gap-10 md:gap-5"
          >
            <div className="flex h-full  ">
              <div className="flex flex-col items-center text-center justify-center xl:justify-start   xl:mt-16 mt-8">
                <motion.p className="font-montserrat font-bold text-2xl md:text-[34px] md:leading-[56px] lg:text-5xl  text-center text-nowrap sm:ml-10">
                  Welcome to My Portfolio
                </motion.p>

                <motion.h2
                  className="font-montserrat font-extrabold text-5xl md:text-[54px] md:leading-[56px] lg:text-[56px] lg:pt-2 xl:text-8xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text text-center  mt-2"
                  aria-label="Full Stack Web Developer"
                >
                  <div className="flex flex-col sm:flex-row xl:flex-col justify-center items-center xl:items-start 2xl:justify-start z-[10] sm:ml-10 lg:text-nowrap 2xl:text-wrap text-center xl:ml-0 xl:pl-0 xl:mr-40">
                    <span className="">Software</span>
                    <span className="">Developer</span>
                  </div>
                </motion.h2>

                <motion.p
                  className="text-lg sm:text-xl md:text-2xl
             font-semibold text-accent
             text-center xl:text-left
             max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl
             mt-4 xl:mr-[3.8rem]  "
                >
                  I'm Shrujan S Shetty, an aspiring Software Developer
                  passionate about solving real-world problems through
                  technology and building impactful solutions.
                </motion.p>
              </div>
            </div>
            <section id="home" className="w-full ">
              <div className="flex xl:justify-end justify-center">
                <motion.div className="relative w-[390px] h-[360px] sm:w-[460px] sm:h-[410px] md:w-[490px] md:h-[450px] lg:w-[580px] lg:h-[540px] xl:h-[480px] xl:w-[500px] 2xl:h-[540px] 2xl:w-[600px] overflow-visible bg-gray-200 rounded-3xl xl:mt-10 2xl:mr-28 xl:mr-10">
                  <motion.img
                    src="profile.png"
                    alt="Shrujan's Avatar"
                    initial={{ opacity: 0.5, y: 500 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    loading="lazy"
                    onLoad={() => setLoaded(true)}
                    className={`w-full h-full transition duration-700 ${
                      loaded ? "blur-0" : "blur-md"
                    }`}
                  />

                  {animatedImages.map(
                    (
                      { className, src, alt, initial, animate, transition },
                      index
                    ) => (
                      <motion.img
                        key={index}
                        className={className}
                        src={src}
                        alt={alt}
                        initial={initial}
                        animate={inView ? animate : {}}
                        transition={transition}
                        aria-hidden={!inView}
                        loading="lazy"
                      />
                    )
                  )}
                </motion.div>
              </div>
            </section>
          </div>
        </motion.div>
      </section>
    </>
  );
};
export default Home;
