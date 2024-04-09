import React from "react";
import { motion } from "framer-motion";

const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className={`flex max-w-fit fixed top-0 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 my-4 items-center justify-center space-x-4 ${className}`}
    >
      <div className="flex items-center space-x-2">
        {/* Add space for favicon */}
        <img
          src="./public/pt.png"
          alt="Favicon"
          className="w-8 h-8 rounded-full"
        />
        {/* Home button */}
        <button
          onClick={() => smoothScrollTo('home')}
          className={`relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 ${className}`}
        >
          <span className="hidden sm:block text-sm">Home</span>
        </button>
        {/* About button */}
        <button
          onClick={() => smoothScrollTo('about')}
          className={`relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 ${className}`}
        >
          <span className="hidden sm:block text-sm">About</span>
        </button>
        {/* Contact Me button */}
        <button
          onClick={() => smoothScrollTo('contact')}
          className={`relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 ${className}`}
        >
          <span className="hidden sm:block text-sm">Contact Me</span>
        </button>
        {/* Resume button */}
        <a
          href="/resume"
          className={`border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full ${className}`}
        >
          <span>Resume</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-orange-500 to-transparent  h-px" />
        </a>
      </div>
    </motion.div>
  );
};

export default FloatingNav;
