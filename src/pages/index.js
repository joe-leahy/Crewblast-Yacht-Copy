import Head from "next/head";
import Image from "next/image";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Background from "@/Components/Background";
import Signup from "@/Components/Signup/Signup";
import ContactForm from "@/Components/ContactForm";

const Home = () => {
  return (
    <div className="bg-[#363636] text-white h-screen overflow-scroll">
      <Background />
      <Head>
        <title>CrewBlast Yachting</title>
      </Head>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="signup">
        <Signup />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
