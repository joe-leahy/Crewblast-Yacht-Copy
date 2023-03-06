import React, { useState } from "react";
import { motion } from "framer-motion";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { auth, db } from "../../firebase";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import PrivacyPolicy from "./PrivacyPolicy";

const Signup = () => {
  const positions = [
    "Open / Any",
    "Captain",
    "First Mate",
    "Second Mate",
    "Bosun",
    "Deckhand",
    "Chief Engineer",
    "2nd Engineer",
    "3rd Engineer",
    "Electronics Technician/IT",
    "Purser",
    "Chief Stew",
    "Stew",
    "Head Chef",
    "Sous-chef",
  ];

  const licenses = [
    "None Yet, I'm New!",
    "RYA Yachtmaster",
    "USCG Master 100gt",
    "USCG Master 200gt",
    "USCG Master 500gt",
    "USCG Master 500gt",
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
    "STCW Basic Training",
    "STCW Advanced Firefighting",
    "STCW Proficiency in Survival Craft and Rescue Boats",
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

  const [input, setInput] = useState({
    name: "",
    position: "",
    credential: "",
    country: "",
    phone: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [showPrivPol, setShowPrivPol] = useState(true);

  const switchDisplay = () => {
    setShowPrivPol(!showPrivPol)
    console.log("switch");
  };

  const [body, setBody] = useState('')
  const [to, setTo] = useState('') 

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleText = () => {
    setBody(`Welcome to CrewBlast ${input.name.split(' ')[0]}, we're thrilled to have you on board!`)
    setTo(`${input.phone}`)
    addDoc(collection(db, "messages"), {
      to,
      body
    });
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    let email = input.email.toLowerCase();
    let password = input.password1;

    if (password !== input.password2) {
      alert("Passwords do not match.");
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
      })
      .then(() => {
        setDoc(doc(db, `${input.position}`, `${input.name}`), {
          name: input.name,
          position: input.position,
          credential: input.credential,
          country: input.country,
          phone: `+1${input.phone}`,
          email: input.email,
        });
      })
      .catch((error) => alert(error.message));
      handleText()
    alert("Crewmember Added!");
  };

  return (
    <> 
    {showPrivPol ? (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center px-10 justify-evenly mx-auto items-center"
    >
      <div className="bg-[rgba(255,255,255,.75)] h-[700px] w-[340px] md:w-[700px] rounded-xl flex flex-col justify-center items-center">
        <h3 className="text-black mx-auto uppercase tracking-[13px] md:tracking-[20px] white text-2xl md:top-10 pb-5">
          Crew Sign-Up
        </h3>
        <form
          className="flex flex-col w-[300px] md:w-[600px] space-y-2 md:space-x-2"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
            }
          }}
          onSubmit={handleSignUp}
        >
          <div className="flex flex-col md:grid md:grid-cols-2 w-[300px] md:w-[600px] space-y-2 md:space-x-2">
            <TextField
              required
              id="outlined-basic"
              label="Full Name"
              name="name"
              variant="outlined"
              onChange={handleChange}
              value={input.name}
            />
            <TextField
            required
              select
              name="position"
              label="Position"
              defaultValue="Any"
              onChange={handleChange}
              value={input.position}
            >
              {positions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Highest Credential Held (If Any)"
              name="credential"
              defaultValue="Any"
              onChange={handleChange}
              value={input.certification}
            >
              {licenses.map((option) => (
                <MenuItem key={option} value={option} sx={{ color: "black" }}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="outlined-basic"
              label="Country"
              name="country"
              variant="outlined"
              onChange={handleChange}
              value={input.country}
            />
            <TextField
            required
              id="outlined-basic"
              label="Phone"
              name="phone"
              variant="outlined"
              onChange={handleChange}
              value={input.phone}
            />
            <TextField
            required
              id="outlined-basic"
              label="Email"
              name="email"
              variant="outlined"
              onChange={handleChange}
              value={input.email}
            />
            <TextField
            required
              id="outlined-basic"
              label="Password"
              name="password1"
              type="password"
              variant="outlined"
              onChange={handleChange}
              value={input.password1}
            />
            <TextField
            required
              id="outlined-basic"
              label="Repeat Password"
              name="password2"
              type="password"
              variant="outlined"
              onChange={handleChange}
              value={input.password2}
            />
          </div>
          <button className="submitButton">Submit</button>
        </form>
        <button onClick={() => switchDisplay()}>Privacy Policy</button>
      </div>
    </motion.div>
    ) :  (
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center px-10 justify-evenly mx-auto items-center"
    >
      <div className="bg-[rgba(255,255,255,.75)] h-[700px] w-[340px] md:w-[700px] rounded-xl flex flex-col justify-center items-center">
        <h3 className="text-black mx-auto uppercase tracking-[13px] md:tracking-[20px] white text-2xl md:top-10 pb-5">
          Privacy Policy
        </h3>
        <div className="h-[500px] border border-gray-500 w-[500px] overflow-scroll">
          <PrivacyPolicy />
        </div>
          <button onClick={() => switchDisplay()}>Sign Up</button>
      </div>
    </motion.div>
    )}
    </>
  );
};

export default Signup;
