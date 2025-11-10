import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";

export const Example = () => {
  return (
    <div>
      <AnimatedHamburgerButton />
    </div>
  );
};

const AnimatedHamburgerButton = () => {
  const [active, setActive] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
      >
        <motion.span
          className="absolute h-[0.3rem] w-10 bg-gradient-to-r from-cyan-500 to-blue-500 ... rounded-xl"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          className="absolute h-[0.3rem] w-10 bg-gradient-to-r from-cyan-500 to-blue-500 ... rounded-xl"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          className="absolute h-1 w-5 bg-gradient-to-r from-cyan-500 to-blue-500 ... rounded-xl"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};
