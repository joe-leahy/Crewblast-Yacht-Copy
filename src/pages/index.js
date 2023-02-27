import Head from "next/head";
import Image from "next/image";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Background from "@/Components/Background";

const Home = () => {
  return (
    <div className="bg-[#363636] text-white h-screen sanp-y snap-mandatory overflow-scroll z-0">
      <Background/>
      <Head>
        <title>CrewBlast Yachting</title>
      </Head>
      <Header />
      <Hero />
      <section id="about">
        <About />
      </section>
    </div>
  );
};

export default Home;
