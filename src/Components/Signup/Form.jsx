import React, {useState} from 'react'
import { motion } from 'framer-motion';
import { TextField } from '@mui/material';
import MenuItem from "@mui/material/MenuItem";
import { auth, db } from "../../../firebase";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { licenses } from './licenses';
import { positions } from './positions';


function form({setView}) {


  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
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

  const handleText = async () => {
    addDoc(collection(db, "messages"), {
      to: input.phone,
      body: `Welcome to CrewBlast ${
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
        setDoc(doc(db, "crewmembers", `${input.name}`), {
          name: input.name,
          position: input.position,
          credential: input.credential,
          country: input.country,
          phone: `${input.phone}`,
          email: input.email,
        });
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
    setView("welcome");
    handleText();
  };

  return (
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
      <button className="text-gray-500 p-5" onClick={() => setView("pp")}>
        Privacy Policy
      </button>
    </div>
  </motion.div>
  )
}

export default form

