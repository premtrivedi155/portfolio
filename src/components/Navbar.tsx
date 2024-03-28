import React, { useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollY } = useViewportScroll();
  const [visible, setVisible] = useState(false);

  scrollY.onChange((y) => {
    setVisible(y > 10); // Adjust threshold as needed
  });

  const translateY = useTransform(scrollY, [0, 10], [0, -100]);

  return (
    <motion.div
      className={`flex max-w-fit fixed top-0 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 my-4 items-center justify-center space-x-4 ${className}`}
      style={{ y: translateY }}
    >
      <div className="flex items-center space-x-2">
        {/* Add space for favicon */}
        <img
          src="/path/to/favicon.ico"
          alt="Favicon"
          className="w-6 h-6 rounded-full"
        />
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={`relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 ${className}`}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        ))}
      </div>
      <a
        href="/resume"
        className={`border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full ${className}`}
      >
        <span>Resume</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
      </a>
    </motion.div>
  );
};

export default FloatingNav;
