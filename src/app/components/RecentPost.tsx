import React from "react";
import RecentPostCard from "./RecentPostCard";
const RecentPost = () => {
  return (
    <section className="xxl:w-[1440px] w-[1280px] h-[502px] absolute xl:top-[665px] bg-recentBackground xl:w-[1475px] xl:h-[502px] ">
      <p className="w-[120px] h-[32px] absolute top-[26px] xxl:left-[237px] left-[133px] font-heebo text-[22px] font-[500] xl:left-[242px] xl:text-[22px]">
        Recent Post
      </p>
      <p className="w-[77px] h-[32px] absolute top-[26px] xxl:left-[1125px] left-[1080px] font-heebo text-[22px] font-[500] text-customPink xl:left-[1120px] xl:text-[22px]">
        View all
      </p>
      <div className="flex justify-center items-center flex-col xxl:items-start  ">
        <div className="w-[483px] h-[356px] absolute xxl:left-[238px] left-[130px] xl:left-[242px] top-[80px]">
          <RecentPostCard />
        </div>
        <div className="w-[483px] h-[356px] relative xxl:left-[763px] left-[275px] top-[78px] ">
          <RecentPostCard />
        </div>
      </div>
    </section>
  );
};

export default RecentPost;
