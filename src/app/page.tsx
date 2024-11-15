import React from "react";
import Hero from "./components/Hero";
import RecentPost from "./components/RecentPost";
import Footer from "./components/Footer";
import FeaturedWorks from "./components/FeaturedWorks";
const Page = () => {
  return (
    <>
      <Hero />
      <RecentPost />
      <FeaturedWorks />
      <Footer />
    </>
  );
};

export default Page;
