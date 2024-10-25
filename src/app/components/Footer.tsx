import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="lg:w-full lg:h-[243px] lg:absolute lg:top-[2200px] lg:pb-[-3rem] xs:absolute xs:top-[2500px] md:absolute md:top-[1700px] xsm:relative xsm:top-[2000px]">
        <div className="lg:flex lg:justify-center lg:items-center lg:gap-[35px] lg:pr-[0rem] xs:flex xs:justify-center xs:items-center xs:gap-[20px] md:flex md:justify-center md:items-center md:gap-[25px] md:pl-[16rem] xsm:pl-[1rem] lg:pl-0 xs:pl-0 xsm:flex xsm:justify-center xsm:items-center sm:pl-[2.5rem]">
          <Image
            src="/fb.svg"
            alt="facebook-logo"
            height={30}
            width={30}
            className="text-customBlue hover:scale-110 hover:transition-all hover:duration-300 hover:ease-out cursor-pointer xs:h-[20px] xs:w-[20px] lg:h-[30px] lg:w-[30px]"
          />
          <Image
            src="/insta.svg"
            alt="instagram-logo"
            height={30}
            width={30}
            className="text-customBlue hover:scale-110 hover:transition-all hover:duration-300 hover:ease-out cursor-pointer xs:h-[20px] xs:w-[20px] lg:h-[30px] lg:w-[30px]"
          />
          <Image
            src="/Group.svg"
            alt="Twitter-logo"
            height={30}
            width={30}
            className="text-customBlue hover:scale-110 hover:transition-all hover:duration-300 hover:ease-out cursor-pointer xs:h-[20px] xs:w-[20px] lg:h-[30px] lg:w-[30px]"
          />
          <Image
            src="/Linkedin.svg"
            alt="Twitter-logo"
            height={30}
            width={30}
            className="text-customBlue hover:scale-110 hover:transition-all hover:duration-300 hover:ease-out cursor-pointer xs:h-[20px] xs:w-[20px] lg:h-[30px] lg:w-[30px]"
          />
        </div>
        <p className="font-heebo lg:text-[20px] font-semibold lg:leading-[32.31px] text-center text-black lg:mt-[30px] lg:pr-[2rem] xs:text-[13px] xs:mt-[20px] xs:pr-[3rem] xs:pl-[3rem] lg:pl-0 lg:ml-[0rem] md:pl-[18rem] xsm:pl-[4rem] sm:pl-[6rem]">
          Copyright ©2020 All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
//styleName: secoundary-text;
