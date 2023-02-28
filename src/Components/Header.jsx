import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.crewblast.co/"
          fgColor="white"
          bgColor="transparent"
          network="telegram"
        />
        <SocialIcon
          url="https://www.linkedin.com/company/crewblast/"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/crewblast/"
          fgColor="white"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <a href="mailto:jleahy@crewblastyacht.com">
          <SocialIcon network="email" fgColor="white" bgColor="transparent" />
          <p className="hidden md:inline-flex text-sm white">Contact Us</p>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
