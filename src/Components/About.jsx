import { MotionConfig } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center z-1"
    >
      {/* <h3 className="absolute top-[0px] mx-auto uppercase tracking-[20px] white text-2xl md:top-10 ">
        About
      </h3> */}
      {/* <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="-mb-10 md:mb-0 p-5 md:p-0 flex-shrink-0 w-56 h-70 rounded-full object-cover md:rounder-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]"
        src="https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eWFjaHR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      /> */}
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Our <span className="underline decoration-blue-500">Origin</span> In
          The Sky.
        </h4>
        <p>
          In 2021, CrewBlast was born. A technology-based private aviation
          staffing company that connects qualified pilots and flight attendants
          with operators in need of staffing. In our very first year of
          operation, CrewBlast exceeded forecasted usage by over 350%, and
          quickly became the ultimate, go-to solution for staffing in the
          private aviation industry. Our platform provides instant access to
          highly qualified pilots and flight attendants who can meet aircraft
          staffing needs within minutes, and our automated approach streamlines
          the process.
        </p>
        <h4 className="text-4xl font-semibold">
          Our <span className="underline decoration-blue-500">Future</span> In
          The Sea.
        </h4>
        <p>
          Leveraging our proven staffing platform, CrewBlast Yacht will provide
          vessel owners and managers instant access to a global database of
          highly qualified yacht crew, including captains, engineers, and
          deckhands, among others. Our proprietary technology and streamlined
          approach to staffing ensures that you get the staffing you need, when
          you need it, and our app makes the entire process simple and
          efficient. CrewBlast Yacht is poised to become the go-to service for
          private maritime staffing.
        </p>
        <h4 className="text-4xl font-semibold">
          How, and <span className="underline decoration-blue-500">Why</span>,
          It Works.
        </h4>
        <p>
          When crewmembers sign up with our service, their contact information
          and qualifications will be added to our ever-growing database. When
          yacht managers are faced with staffing needs, they can simply fill out
          our request form, and a &quot;blast&quot; will be sent out to all
          crewmembers with matching qualifications.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
