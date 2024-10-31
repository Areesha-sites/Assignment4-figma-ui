import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RecentPost from "./components/RecentPost";
import FeaturedWorks from "./components/FeaturedWorks";
import Footer from "./components/Footer";
const Page = () => {
  return (
    <>
      <div className="lg:h-[2500px] md:h-[2000px] xs:h-[2800px] lg:w-full sm:w-full xsm:w-full xs:w-full xl:w-full bg-[#CFA6A61C]">
        <Navbar />
        <Hero />
        <RecentPost />
        <FeaturedWorks />
        <Footer />
      </div>
    </>
  );
};

export default Page;
