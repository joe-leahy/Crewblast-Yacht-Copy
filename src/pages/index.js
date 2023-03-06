import Head from "next/head";
import Image from "next/image";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Background from "@/Components/Background";
import Signup from "@/Components/Signup";

const Home = () => {
  return (
    <div className="bg-[#363636] text-white h-screen overflow-scroll">
      <Background/>
      <Head>
        <title>CrewBlast Yachting</title>
      </Head>
      <Header />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id='signup'>
        <Signup/>
      </section>
    </div>
  );
};

export default Home;
