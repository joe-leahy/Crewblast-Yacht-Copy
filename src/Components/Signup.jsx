import React, { useState } from "react";
import { motion } from "framer-motion";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { auth, db } from "../../firebase";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import PrivacyPolicy from "./PrivacyPolicy";
import WelcomeMessage from "./WelcomeMessage";

const Signup = () => {
  const positions = [
    "Open-Any",
    "Captain",
    "First Mate",
    "Second Mate",
    "Bosun",
    "Deckhand",
    "Chief Engineer",
    "2nd Engineer",
    "3rd Engineer",
    "ETO",
    "Purser",
    "Chief Stew",
    "Stew",
    "Head Chef",
    "Sous-chef",
  ];

  const licenses = [
    "None Yet, I'm New!",
    "USCG Master 100gt",
    "USCG Master 200gt",
    "USCG Master 500gt",
    "USCG Master 1600gt",
    "USCG Master Unlimited",
    "STCW Basic Safety Training",
    "RYA Yachtmaster",
    "RYA Day Skipper",
    "RYA Coastal Skipper",
    "ICC (International Certificate of Competence)",
    "MCA Master 200gt",
    "MCA Master 500gt",
    "MCA Master 3000gt",
    "MCA OOW (Officer of the Watch)",
    "MCA Chief Mate 3000gt",
    "MCA Chief Mate 5000gt",
    "RYA Powerboat Level 2",
    "RYA Personal Watercraft (PWC) Instructor",
    "STCW Basic Training",
    "STCW Advanced Firefighting",
    "STCW Proficiency in Survival Craft and Rescue Boats",
    "STCW Engine Room Rating",
    "STCW Able Seafarer Engine",
    "STCW Officer of the Watch (Engine)",
    "MCA Marine Engine Operator License (MEOL)",
    "MCA AEC 1",
    "MCA AEC 2",
    "MCA Chief Engineer (Y4)",
    "MCA Chief Engineer (Y3)",
    "MCA Chief Engineer (Y2)",
    "MCA Chief Engineer (Y1)",
    "MCA Second Engineer (500 GT)",
    "MCA Second Engineer (3000 GT)",
    "MCA Second Engineer (Unlimited)",
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

  const [view, setView] = useState("form");

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleText = async () => {
    addDoc(collection(db, "messages"), {
      to:input.phone,
      body:`Welcome to CrewBlast ${
        input.name.split(" ")[0]
      }, we're thrilled to have you on board!`,
    });
  };

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
          phone: `${input.phone}`,
          email: input.email,
        });
      })
      .catch((error) => alert(error.message));
    setView('welcome')
    handleText();
  };

  return (
    <>
      {view === "form" ? (
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
                  defaultValue=""
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
                  defaultValue=""
                  onChange={handleChange}
                  value={input.certification}
                >
                  {licenses.map((option) => (
                    <MenuItem
                      key={option}
                      value={option}
                      sx={{ color: "black" }}
                    >
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
                  label="Phone (10-digit)"
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
            <button onClick={() => setView("pp")}>Privacy Policy</button>
          </div>
        </motion.div>
      ) : view === "pp" ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col relative h-screen text-center px-10 justify-evenly mx-auto items-center"
        >
          <div className="bg-[rgba(255,255,255,.75)] h-[700px] w-[340px] md:w-[700px] rounded-xl flex flex-col justify-center items-center">
            <h3 className="text-black mx-auto uppercase tracking-[10px] md:tracking-[20px] white text-2xl md:top-10 pb-5">
              Privacy Policy
            </h3>
            <div className="h-[500px] border border-gray-500 w-[320px] md:w-[500px] overflow-scroll">
              <PrivacyPolicy />
            </div>
            <button
              onClick={() => setView("form")}
              className="mx-6 px-6 py-4 border mt-4 bg-[#00abee71] border-[#242424] rounded-full uppercase text-sm tracking-widest text-white transition-all hover:border-[#00acee] hover:bg-[#00acee]"
            >
              Return To Sign Up
            </button>
          </div>
        </motion.div>
      ) : view === "welcome" ? (
        <div className="flex flex-col relative h-screen text-center px-10 justify-evenly mx-auto items-center">
          <div className="bg-[rgba(255,255,255,.75)] h-[700px] w-[340px] md:w-[700px] rounded-xl flex flex-col justify-center items-center">
            <h3 className="text-black mx-auto uppercase tracking-[10px] md:tracking-[20px] white text-2xl md:top-10 pb-5">
              Welcome Aboard!
            </h3>
            <div className="text-black h-[500px] w-[320px] md:w-[500px] overflow-scroll py-01">
              <WelcomeMessage />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Signup;
