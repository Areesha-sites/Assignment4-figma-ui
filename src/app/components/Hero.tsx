import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="w-full lg:absolute lg:top-[240px] xs:w-full">
      <div className="lg:grid lg:grid-cols-2 lg:ml-[10rem] grid grid-cols-1 ">
        <div className="lg:flex lg:flex-col">
          <h1 className="font-heebo lg:text-[48px] xs:text-[26px] xs:leading:[10px] xs:text-center lg:text-left lg:ml-[-2rem] font-extrabold lg:leading-[61px] space-x-[2px] text-customBlue xsm:text-[29px] md:text-[40px] md:leading-[40px]">
            Hi, I am John, <br />
            Creative Technologist
          </h1>
          <p className="font-heebo lg:text-[16px] xs:text-[12px] xs:leading-[15px] xs:mx-[2rem] xs:py-[0.5rem] font-normal lg:leading-[23.5px] text-justify lg:py-[1.2rem] lg:ml-[-2rem] text-customBlue lg:text-left md:text-center md:mx-[8rem]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="xs:flex xs:justify-center xs:items-center lg:flex lg:justify-start lg:ml-[-1.9rem]">
          <button
            className="lg:w-[205px] lg:h-[50px] xs:py-[15px] xs:px-[12px] xs:text-[13px] xs:leading-[10px] rounded-[2px] font-heebo lg:text-[18px] font-medium lg:leading-[26.44px] text-center bg-customPink hover:bg-customBlue text-white transition-all duration-500 ease-out xs:mb-[2rem] xs:mt-[0.6rem] "
            style={{ boxShadow: "0 4px 4px 0 #878787" }}
          >
            Download Resume
          </button>
        </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute bg-[#AA9F9F4F] lg:size-[300px]  sm:size-[200px] size-[200px] -z-10 rounded-full lg:left-[7.2rem] lg:top-[0.8rem] -bottom-2 xs:absolute xs:left-[3.4rem] xs:top-[0.6rem] xsm:absolute xsm:left-[6.4rem] xsm:top-[0.5rem] sm:absolute sm:left-[5rem] md:size-[200px] md:left-[16.9rem]" />
          <Image
            src="/image.svg"
            alt="Hero Section Image"
            width={300}
            height={300}
            className="rounded-full size-[200px] sm:size-[200px] md:size-[200px]  lg:size-[300px] "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
