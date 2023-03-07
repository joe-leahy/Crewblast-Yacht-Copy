import Link from "next/link";
import React from "react";

const WelcomeMessage = () => {
  return (
    <div className="flex flex-col relative h-screen text-center px-10 justify-evenly mx-auto items-center">
      <div className="bg-[rgba(255,255,255,.75)] h-[700px] w-[340px] md:w-[700px] rounded-xl flex flex-col justify-center items-center">
        <h3 className="text-black mx-auto uppercase tracking-[10px] md:tracking-[20px] white text-2xl md:top-10 pb-5">
          Welcome Aboard!
        </h3>
        <div className="text-black h-[500px] w-[320px] md:w-[500px] overflow-scroll py-01">
          <div>
            <h3 className="text-5xl">⛵️</h3>
            <p className="py-10">
              The CrewBlast team will send a message to your phone shortly to
              confirm your registration! For now, you&apos;re all set! However,
              be sure to check back in with us here as you will soon be able to
              edit your profile and information!{" "}
            </p>
            <Link href="#home">
              <button className="mx-6 px-6 py-4 border mt-4 bg-[#00abee71] border-[#242424] rounded-full uppercase text-sm tracking-widest text-white transition-all hover:border-[#00acee] hover:bg-[#00acee]">
                Understood!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
