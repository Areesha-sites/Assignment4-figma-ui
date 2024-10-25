import React from "react";
import Image from "next/image";
const FeaturedWorksBox = ({ href }: any) => {
  return (
    <>
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:mt-[1rem] lg:mb-[-2rem] lg:ml-[-0.7rem] xs:flex xs:flex-col xs:ml-[3rem] md:flex md:flex-row">
        <div className="lg:w-[570px] lg:h-[230px] lg:top-[100px] lg:left-[237px] rounded-[6px] ">
          <Image
            src={href}
            alt="image-1"
            height={570}
            width={230}
            className=""
          />
        </div>
        <div className="lg:w-[632px] lg:h-[272px] lg:relative lg:top-[18px] lg:left-[-15rem] md:relative md:left-[2rem] md:top-[-18px] md:mr-[2rem] lg:mr-0 xs:mr-0">
          <h1 className="font-heebo lg:text-[30px] font-bold lg:leading-[44px] xs:text-[22px] xs:mt-[1rem] lg:mt-[0rem]">
            Designing Dashboards
          </h1>
          <div className="flex gap-4 lg:pb-4 xs:pb-2">
            <span className="bg-customPink text-white px-4 pt-[0px] rounded-full text-[15px] h-[20px] mt-2">
              2020
            </span>
            <span className="font-heebo lg:text-[20px] font-normal lg:leading-[29px] opacity-75 lg:mt-1 xs:mt-[5px]">
              Dashboard
            </span>
          </div>
          <p className="font-heebo lg:text-[16px] font-light llg:eading-[26px] xs:text-[13px] lg:mr-0 xs:mr-7 lg:pb-0 xs:pb-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeaturedWorksBox;
