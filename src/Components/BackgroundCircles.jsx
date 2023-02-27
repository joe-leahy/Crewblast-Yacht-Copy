import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale:[1,2,2,3,1],
        opacity:[.1,.2,.4,.7,.1,1],
        borderRadius:["20%", "20%", "50%", "80%", "20%",]
      }}
      transition={{duration:2.5}}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#454545] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#454545] rounded-full h-[300px] w-[300px] mt-52 " />
      <div className="absolute border border-[#454545] rounded-full h-[500px] w-[500px] mt-52 " />
      <div className="absolute border border-blue-400 rounded-full h-[650px] w-[650px] opacity-20 mt-52 animate-pulse" />
      <div className="absolute border border-[#454545] rounded-full h-[900px] w-[900px] mt-52" />
      <div className="absolute border border-blue-400 rounded-full h-[1400px] w-[1400px] mt-52 opacity-10" />
      <div className="absolute top-[-275px] border border-blue-400 h-[400px] w-[2px] animate-spin opacity-10" style={{borderRadius: '50% 50% 0 0', opacity: '.2', transformOrigin: 'bottom'}} />


    </motion.div>
  );
};

export default BackgroundCircles;
