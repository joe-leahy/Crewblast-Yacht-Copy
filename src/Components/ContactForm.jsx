import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { auth, db } from "../../firebase";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { TextField } from "@mui/material";
import Link from 'next/link';

const ContactForm = () => {

    const [view, setView] = useState('form')


    const [input, setInput] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        setInput((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
            setDoc(doc(db, 'inqueries', `${input.name}`), {
              name: input.name,
              email: input.email,
              message: input.message
            })
          .catch((error) => alert(error.message));
          setView('thanks')
      };




  return (
<>
{view === 'form' ? (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center px-10 justify-evenly mx-auto items-center"
  >
    <div className="bg-[rgba(255,255,255,.75)] h-[500px] w-[340px] md:w-[500px] rounded-xl flex flex-col justify-center items-center">
      <h3 className="text-black mx-auto uppercase tracking-[13px] md:tracking-[20px] white text-2xl md:top-10 pb-5">
        Contact Us
      </h3>
      <form
        className="flex flex-col w-[300px] md:w-[400px] space-y-2 md:space-x-2"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
          }
        }}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-[300px] md:w-[400px] space-y-2 md:space-x-2">
          <TextField
            required
            id="outlined-basic"
            label="Name"
            name="name"
            variant="outlined"
            onChange={handleChange}
            value={input.name}
          />
         
          <TextField
            required
            id="outlined-basic"
            label="Email"
            name="email"
            variant="outlined"
            onChange={handleChange}
            value={input.country}
          />
          <TextField
            required
            multiline
            rows={4}
            id="outlined-basic"
            label="Message"
            name="message"
            variant="outlined"
            onChange={handleChange}
            value={input.phone}
          />
        </div>
        <button className="submitButton">Submit</button>
      </form>
    </div>
  </motion.div>
  ) : view === 'thanks' ? 
  
  <div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center px-10 justify-evenly mx-auto items-center"
  >
    <div className="bg-[rgba(255,255,255,.75)] h-[500px] w-[340px] md:w-[500px] rounded-xl flex flex-col justify-center items-center">
      <h3 className="text-black mx-auto uppercase tracking-[13px] md:tracking-[20px] white text-2xl md:top-10 pb-5">
        Tanks for reaching out!
      </h3>
      <p className="text-black mx-auto white text-l md:top-10 pb-5">A member of the CrewBlast team will get back to you as soon as we can!</p>
      <Link href='#home'>
         <button className="mx-6 px-6 py-4 border mt-4 bg-[#00abee71] border-[#242424] rounded-full uppercase text-sm tracking-widest text-white transition-all hover:border-[#00acee] hover:bg-[#00acee]">Understood!</button>
         </Link>
    </div>
  </div>
  
  :view==='form'}
  </>
  )
}

export default ContactForm