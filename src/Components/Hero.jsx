import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const Hero = () => {

  const [text, count] = useTypewriter({
    words: ["Deckhand", "2nd Engineer", "Chief Stew", "Chef", "Electronics Tech / IT", "Bosun"],
    loop: true,
    delaySpeed: 900,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center z-1">
      <img
        className="relative h-[250px] w-45 mx-auto top-8 object-cover"
        src="./logo.png"
        alt="logo"
      />
      <motion.div
        initial={{
          y: -300,
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <h2 className="relative top-[-280px] text-lg uppercase white tracking-[15px] md:top-[-350px]">
          Coming Soon
        </h2>
      </motion.div>
      <div className="z-20">
        <h2 className="text-md uppercase white pb-4 tracking-[5px] sm:tracking-[15px]">
          Find Qualified Crewmembers
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="aqua" />
        </h1>
        <div className="pt-5 flex flex-col justify-center items-center md:flex-row space-y-2">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#signup">
            <button className="signUpButton">Sign Up</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
