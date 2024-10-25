import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="w-full h-[67px] flex justify-center items-center pt-[1rem] md:w-full lg:w-full lg:flex lg:justify-end lg:items-center lg:pt-[2rem] md:flex md:justify-end md:items-center">
      <ul className="flex justify-center items-center gap-7 my-4 p-6 lg:m-[67px] ">
        <li
          className="font-inter lg:text-[18px] font-medium leading-[24.2px] 
       text-left text-black text-[13px] md:text-[16]"
        >
          <Link
            href="/"
            className="hover:text-customPink w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-customPink text-black  after:w-full after:scale-x-0 after:hover:scale-100 after:transition after:duration-300 after:origin-right relative"
          >
            Works
          </Link>
        </li>
        <li
          className="font-inter lg:text-[18px] font-medium leading-[24.2px] 
       text-left text-black text-[13px] md:text-[20]"
        >
          <Link
            href="/"
            className="hover:text-customPink w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-customPink text-black  after:w-full after:scale-x-0 after:hover:scale-100 after:transition after:duration-300 after:origin-right relative"
          >
            Blog
          </Link>
        </li>
        <li
          className="font-inter lg:text-[18px] font-medium leading-[24.2px] 
       text-left text-black text-[13px]  md:text-[16]"
        >
          <Link
            href="/"
            className="hover:text-customPink w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-customPink text-black  after:w-full after:scale-x-0 after:hover:scale-100 after:transition after:duration-300 after:origin-right relative"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
