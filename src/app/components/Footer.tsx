import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const socialIcons = [
    {
      link: "#",
      imageUrl: "/fb.svg",
    },
    {
      link: "#",
      imageUrl: "/insta.svg",
    },
    {
      link: "#",
      imageUrl: "/Group.svg",
    },
    {
      link: "#",
      imageUrl: "/Linkedin.svg",
    },
  ];
  return (
    <footer className="xxl:w-[1440px] h-[243px] absolute xxl:top-[2239px] top-[2400px] left-0 ">
      <div className="">
        <div className="w-[354px] h-[32px] absolute xxl:left-[543px] left-[450px] xl:left-[530px]">
          <ul className="flex justify-center items-center gap-x-12 xs:gap-6">
            {socialIcons.map((icon, i) => (
              <li key={i}>
                <Link href={icon.link}>
                  <Image
                    src={icon.imageUrl}
                    alt="Social Icon"
                    width={30}
                    height={30}
                    className="hover:scale-105 duration-300 cursor-pointer transition-all ease-linear h-[30px] w-[30px] "
                  />
                </Link>
              </li>
            ))}
          </ul>
          <p className="font-heebo font-medium text-[22px] xl:text-[22px] text-center mt-5 lg:mb-24">
            Copyright ©2020 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
