import React from "react";
import Image from "next/image";

const Background = () => {
  return (
    <div
      className="absolute h-screen w-screen bg-center bg-contain bg-[url('/MobileBack.jpg')] opacity-[.12] z-0 sm:bg-[url('/Background.jpg')] sm:bg-auto"
    ></div>
  );
};

export default Background;
