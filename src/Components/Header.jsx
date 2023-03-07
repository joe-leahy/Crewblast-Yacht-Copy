import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 md:top-5 md:bg-transparent z-[100] flex items-start justify-between max-w-7xl mx-auto xl:items-center bg-black">
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
        className="flex flex-row items-center mx-5"
      >
        <SocialIcon
          url="https://www.crewblast.co/"
          fgColor="white"
          bgColor="transparent"
          network="telegram"
          target="_blank"
        />
        <SocialIcon
          url="https://www.linkedin.com/company/crewblast/"
          fgColor="white"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://www.instagram.com/crewblastyacht/"
          fgColor="white"
          bgColor="transparent"
          target="_blank"
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
        className="flex flex-row items-center text-gray-300 cursor-pointer mx-5"
      >

          <SocialIcon network="email" fgColor="white" bgColor="transparent" />
          <p className="hidden md:inline-flex text-sm white">Contact Us</p>

      </motion.div>
    </header>
  );
};

export default Header;
