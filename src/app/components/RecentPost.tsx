import React from "react";
import Link from "next/link";
import RecentPostCard from "./RecentPostCard";
const RecentPost = () => {
  return (
    <section className="lg:w-full lg:h-[502px] xs:h-[600px] lg:absolute lg:top-[700px] xs:w-full bg-[#F4E2E2] md:w-full xsm:w-full xs:absolute xs:top-[600px] md:h-[400px]">
      <div className="flex justify-between">
        <p className="font-heebo lg:text-[22px] font-medium leading-[32.31px] text-black lg:relative lg:left-[50px] lg:top-[26px] xs:text-[16px] xs:relative xs:left-[40px] xs:top-[10px] xs:pb-[10px] md:relative md:top-[10px] md:left-[100px] xl:relative xl:top-[40px] xl:left-[160px]">
          Recent Work
        </p>
        <p className="font-heebo lg:text-[19px] xs:text-[14px] font-medium leading-[32.31px] text-customPink relative left-[-178px] top-[26px] cursor-pointer hover:text-black lg:relative lg:left-[-40px] lg:top-[30px] xsm:relative xsm:left-[-50px] xsm:top-[10px] xs:relative xs:left-[-38px] xs:top-[10px] xs:pb-[10px] lg:pb-[0px] md:relative md:top-[10px] md:left-[-150px]  xl:relative xl:top-[40px] xl:left-[-175px]">
          <Link href="#"> View All</Link>
        </p>
      </div>
      <div className="lg:flex lg:justify-center lg:gap-[4rem] lg:flex-row lg:relative lg:top-[40px] lg:mx-[3rem] xs:mx-[1rem] xs:flex xs:justify-center xs:items-center xs:flex-col xs:mt-[1rem] md:flex md:justify-center md:flex-row md:mx-[6rem] xl:flex xl:justify-center xl:gap-[2rem] xl:relative xl:top-[40px] xl:mx-[10rem] ">
        <RecentPostCard />
        <div className="lg:ml-[1rem] xs:ml-[0rem] lg:mt-[0rem] xs:mt-[1rem] md:ml-[-2rem] md:mt-[0rem]">
          <RecentPostCard />
        </div>
      </div>
    </section>
  );
};

export default RecentPost;
