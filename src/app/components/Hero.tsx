import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="xxl:w-[1440px] h-[800px] ">
      <div className="w-[1030px] h-[308px] absolute top-[246px] xxl:left-[231px] left-[170px] flex flex-row">
        <div className="w-[521px] h-[305px]">
          <h1 className="font-heebo text-[48px] font-black text-customBlue">
            Hi, I am John, <br />
            Creative Technologist
          </h1>
          <p className="w-[497px] h-[66px] font-heebo text-[16px] font-[400px] mt-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button
            className="w-[205px] h-[50px] bg-customPink font-heebo font-medium text-white rounded-[2px] hover:bg-customBlue transition-all duration-500 ease-out text-[18px] mt-6"
            style={{ boxShadow: "0 4px 4px 0 #4141418a" }}
          >
            Download Resume
          </button>
        </div>
        <div className="relative left-[70px] xl:left-[230px]">
          <Image src="/hero-image.svg" alt="hero-image" height={298} width={308} className="w-[298px] h-[308px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
