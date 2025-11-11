import React, { useState, useRef, useEffect } from "react";

import { motion, useInView, useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";
emailjs.init("OMH0ViA2rf0sF8T3b");
const useSequencedAnimation = (inView) => {
  const [sequence, setSequence] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setSequence((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, sequence]);

  return sequence;
};
const ContactForm = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const sequence = useSequencedAnimation(inView);
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
        duration: 0.5,
      },
    },
  };

  const [name, setName] = useState("");

  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !question.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const emailContent = `
      Hi 👋! My name is ${name}

   

      I'd love to ask about:
      ${question}
    `;

    const templateParams = {
      from_name: name,
      message: emailContent,
    };

    emailjs.send("service_lrb2au9", "template_ftqhg6x", templateParams).then(
      (response) => {
        console.log("Email sent successfully:", response);

        setName("");

        setQuestion("");
        alert("Your message has been sent!");
      },
      (error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send message. Please try again later.");
      }
    );
  };

  const socialmedia = [
    {
      href: "https://www.instagram.com/shrujansshetty/",
      src: "./social-media/instagram.webp",
      alt: "Instagram",
      name: "Instagram",
      target: "_blank",
      rel: "noopener noreferrer",
    },

    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=shrujans91@gmail.com",
      src: "./social-media/gmail.webp",
      alt: "Gmail",
      name: "Gmail",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      href: "https://www.linkedin.com/in/shrujan-s-shetty-271790279/",
      src: "./social-media/linkedin.webp",
      alt: "Linkedin",
      name: "Linkedin",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      href: "https://github.com/shrujansshetty",
      src: "./social-media/github.webp",
      alt: "github",
      name: "github",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];
  const SocialIcon = ({ href, src, alt }) => (
    <span className="relative group">
      <a
        href={href}
        className="block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={src}
          alt={alt}
          className={`w-20 h-20 sm:w-[11rem] sm:h-36  transition-all duration-300 ease-in-out
                    `}
        />
      </a>
    </span>
  );
  return (
    <section
      id="contact"
      className="scroll-mt-40 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen px-8 py-12 transition-colors duration-300"
    >
      <motion.div className=" text-center  lg:px-10">
        <motion.div
          className="flex flex-col items-center justify-center  "
          ref={ref}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center pb-10"
            style={{
              backgroundImage: "linear-gradient(to right, #818cf8, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            variants={itemVariants}
            initial="hidden"
            animate={sequence >= 0 ? "visible" : "hidden"}
          >
            Let's Connect
          </motion.h1>

          <motion.div className="flex flex-col lg:flex-row items-center justify-between gap-x-32 pt-10">
            <motion.div className="w-full lg:w-1/2 mb-12 lg:mb-0 ">
              <motion.img
                className="max-w-[13rem] mx-auto sm:max-w-sm "
                src="./profile-2.png"
                alt="Shrujan's Avatar"
                variants={itemVariants}
                initial="hidden"
                loading="lazy"
                animate={sequence >= 1 ? "visible" : "hidden"}
              />
              <motion.div
                className="flex justify-center mt-8 sm:space-x-8 space-x-4"
                variants={containerVariants}
                initial="hidden"
                animate={sequence >= 3 ? "visible" : "hidden"}
              >
                {socialmedia.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    variants={itemVariants}
                  >
                    <SocialIcon
                      href={item.href}
                      src={item.src}
                      alt={item.alt}
                      name={item.name}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              variants={itemVariants}
              initial="hidden"
              animate={sequence >= 2 ? "visible" : "hidden"}
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl rounded-lg p-8 max-w-md mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Contact Us
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="text-white text-lg mb-2 block">
                      Hi 👋! My name is...
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name..."
                      className="w-full p-2 rounded-md text-indigo-900 placeholder-indigo-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="text-white text-lg mb-2 block">
                      I'd love to ask about...
                    </label>
                    <textarea
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Whatever your heart desires :)"
                      className="w-full p-2 rounded-md text-indigo-900  placeholder-indigo-500 h-32"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-white text-indigo-900 py-3 rounded-md font-bold text-lg transition duration-300"
                  >
                    Submit
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
