import React from "react";
const RecentPostCard = () => {
  return (
    <div className="w-[483px] h-[356px] bg-white border-2 border-transparent hover:border-pink-600 transition-colors duration-300 ease-in-out xl:w-[439px] xl:h-[360px]">
      <div className="w-[391px] h-[286px] absolute top-[38px] left-[35px]">
        <h1 className="w-[383.56px] h-[107.53px] font-heebo text-[26px] xl:text-[27px] font-bold ">
          Making a design system from scratch
        </h1>
        <div className="w-[301.28px] h-[42.12px] flex justify-between ">
          <p className="w-[109.44px] h-[42.12px] font-heebo text-[18px] xl:text-[18px] font-normal opacity-70">12 Feb 2020</p>
          <p className="opacity-70 w-[0px] h-[17.5px] ml-0">|</p>
          <p className="font-heebo text-[18px] xl:text-[18px] font-normal opacity-70">Design , Pattern</p>
        </div>
        <p className="h-[129.7px] w-[391px] lg:w-[380px] relative top-[20px] font-heebo text-[16px] xl:text-[16px] font-normal text-customBlue">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
};

export default RecentPostCard;
