import React from "react";
import FeaturedWorksBox from "./FeaturedWorksBox";
const FeaturedWorks = () => {
  return (
    <section className="lg:w-full lg:h-[934.2px] lg:absolute lg:top-[1230px] lg:pl-56 xs:absolute xs:top-[1250px] xs:w-full md:absolute md:top-[1100px]">
      <p className="font-heebo lg:text-[22px] xs:text-[17px] xs:pb-[1.5rem] font-medium leading-[32.31px] text-left text-black lg:relative left-[px] cursor-pointer lg:top-[9px] xs:ml-[3rem] lg:ml-[0rem]">
        Featured Works
      </p>
      <div className="">
        <FeaturedWorksBox href="/image1.svg" />
        <FeaturedWorksBox href="/image2.svg" />
        <FeaturedWorksBox href="/image3.svg" />
      </div>
    </section>
  );
};

export default FeaturedWorks;
