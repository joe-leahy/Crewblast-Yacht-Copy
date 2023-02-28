import { MotionConfig } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-10 uppercase tracking-[20px] white text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-70 rounded-full object-cover md:rounder-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]"
        src="https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eWFjaHR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Heres the <span className="underline decoration-blue-500">story</span>.
        </h4>
        <p className="text-md">
        We Operate Around The Globe & Have Tremendous Traction In Filling Staffing Needs In Multiple Countries.
        </p>
        <p className="text-md">
        CrewBlast’s Technology Locates And Secures Qualified Crewmembers Quicker Than Any Other Means, Guaranteed.
        </p>
        <p className="text-md">
        We Have A Direct Line To Our Entire Database Of Personnel At The Push Of A Button.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
