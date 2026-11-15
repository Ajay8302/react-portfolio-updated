import { LinearGradient } from "react-text-gradients";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import "react-social-icons/facebook";
import "react-social-icons/x"
import MouseScroll from "../components/MouseScroll";
import { socialLinks } from "../constants/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const titles = [
  "Full-Stack Software Engineer",
  "Backend & Distributed Systems Engineer",
  "R&D Software Development Engineer",
  "AI & LLM Application Developer",
];

const Hero = () => {
  const [waveTrigger, setWaveTrigger] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");
  const [deletingTitle, setDeletingTitle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveTrigger(true);
      setTimeout(() => setWaveTrigger(false), 1000);
    }, 4000); //Wave every 4 seconds.

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const title = titles[titleIndex];
    const isComplete = typedTitle === title;
    const isEmpty = typedTitle.length === 0;
    const delay = isComplete && !deletingTitle ? 3000 : deletingTitle ? 45 : 85;

    const timeout = setTimeout(() => {
      if (isComplete && !deletingTitle) {
        setDeletingTitle(true);
      } else if (isEmpty && deletingTitle) {
        setDeletingTitle(false);
        setTitleIndex((current) => (current + 1) % titles.length);
      } else if (deletingTitle) {
        setTypedTitle((current) => current.slice(0, -1));
      } else {
        setTypedTitle(title.slice(0, typedTitle.length + 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [deletingTitle, titleIndex, typedTitle]);

  return (
    <>
      <section
        className="min-h-screen w-full flex flex-col relative items-center justify-center px-4"
        id="home"
      >
        <div className="max-w-7xl mx-auto flex flex-col c-space gap-7 items-center">
          <div className="flex flex-col items-center gap-2">
            <p className="theme-secondary text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">Hi, I&apos;m</p>
            <h1 className="text-center xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-black !leading-none">
              <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
                Ajay Kumar
              </LinearGradient>
            </h1>
          </div>
          <h2 className="typewriter-title text-center theme-primary xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold !leading-tight min-h-[2.4em] flex items-center justify-center w-full max-w-6xl">
            <span>{typedTitle}</span>
            <span className="typewriter-caret" aria-hidden="true" />
          </h2>

          <p className="max-w-4xl text-center justify-center theme-secondary xl:text-xl md:text-lg sm:text-sm text-md">
            I build and improve enterprise applications across React, TypeScript, C#/.NET, Python,
            APIs, containerized services, and data-reporting workflows. My work spans telecom platforms,
            operational systems, and AI-enabled product development—with an emphasis on reliable delivery,
            clear ownership, and pragmatic problem-solving.
          </p>
        </div>
        <motion.div
          className="flex flex-row gap-4 justify-center mt-10 max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={
                waveTrigger
                  ? {
                      y: [0, -10, 0], //Wave motion.
                      transition: {
                        delay: index * 0.1,
                        duration: 0.6,
                        ease: "easeInOut",
                      },
                    }
                  : {}
              }
            >
              <SocialIcon className="heroIcon" url={link.url} target="_blank" />
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute bottom-5">
          <MouseScroll />
        </div>
      </section>
    </>
  );
};

export default Hero;
