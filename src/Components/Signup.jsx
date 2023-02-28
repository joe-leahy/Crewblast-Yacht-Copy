import React from "react";
import { motion } from "framer-motion";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const Signup = () => {
  const positions = [
    "Captain",
    "First Mate",
    "Second Mate",
    "Bosun",
    "Deckhand",
    "Chief Engineer",
    "2nd Engineer",
    "3rd Engineer",
    "Electronics Technician/IT",
    "Interior Director",
    "Chief Stew",
    "Stew",
    "Head Chef",
    "Sous-chef"
  ];

  const licenses = [
    "RYA Yachtmaster",
    "USCG Master 100",
    "USCG Master 200",
    "USCG Master 500",
    "USCG Master Unlimited",
    "STCW Basic Safety Training",
    "RYA Day Skipper",
    "RYA Coastal Skipper",
    "ICC (International Certificate of Competence)",
    "MCA Master 200gt",
    "MCA Master 500gt",
    "MCA OOW (Officer of the Watch)",
    "MCA Chief Mate 3000gt",
    "MCA Chief Mate 5000gt",
    "MCA Master <500gt",
    "RYA Powerboat Level 2",
    "RYA Personal Watercraft (PWC) Instructor",
    "STCW Proficiency in Designated Security Duties",
    "STCW Medical First Aid",
    "STCW Medical Care",
    "STCW Advanced Firefighting",
    "STCW Proficiency in Survival Craft and Rescue Boats",
    "STCW Crisis Management and Human Behaviour Training",
    "STCW Engine Room Rating",
    "STCW Able Seafarer Engine",
    "STCW Officer of the Watch (Engine)",
    "MCA Marine Engine Operator License (MEOL)",
    "MCA Engineer Officer of the Watch (Y3)",
    "MCA Engineer Officer of the Watch (Y4)",
    "MCA Engineer Officer of the Watch (Y2)",
    "MCA Engineer Officer of the Watch (Y1)",
    "MCA Chief Engineer (Yacht less than 500 GT)",
    "MCA Chief Engineer (Yacht less than 3000 GT)",
    "MCA Chief Engineer (Yacht less than 9000 GT)",
    "MCA Second Engineer (Yacht less than 500 GT)",
    "MCA Second Engineer (Yacht less than 3000 GT)",
    "MCA Second Engineer (Yacht less than 9000 GT)",
    "MCA Electro-Technical Officer (ETO)",
    "USCG Designated Duty Engineer (DDE)",
    "USCG Assistant Engineer",
    "USCG Chief Engineer",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center px-10 justify-evenly mx-auto items-center"
    >
      <div className="bg-[rgba(255,255,255,.75)] h-[600px] w-[340px] md:w-[500px] rounded-xl flex flex-col justify-center items-center">
        <h3 className="text-black mx-auto uppercase tracking-[13px] md:tracking-[20px] white text-2xl md:top-10 pb-5">
          Crew Sign-Up
        </h3>
        <form className="flex flex-col w-[300px] md:w-[400px] space-y-5">
          <TextField id="outlined-basic" label="Full Name" variant="outlined" />
          <TextField select label="Position" defaultValue="Any">
            {positions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Highest License Held (If Any)"
            defaultValue="Any"
          >
            {licenses.map((option) => (
              <MenuItem key={option} value={option} sx={{ color: "black" }}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField id="outlined-basic" label="Country" variant="outlined" />
          <TextField id="outlined-basic" label="Phone" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          
          <button className="submitButton">Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Signup;
