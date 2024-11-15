import React from "react";
const Navbar = () => {
  return (
    <nav className="w-[283px] h-[24px] absolute top-[66px] xxl:left-[1088px] left-[900px] xl:left-[1088px]">
      <ul className="flex justify-start items-center flex-row gap-x-10">
        <li className="w-[61px] h-[24px] font-inter text-[20px] font-[500] hover:text-customPink block after:block after:content-[''] after:absolute after:h-[3px] after:bg-customPink text-black  after:w-full after:scale-x-0 after:hover:scale-100 after:transition after:duration-300 after:origin-right relative">Works</li>
        <li className=" h-[24px] font-inter text-[20px] font-[500] hover:text-customPink w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-customPink text-black  after:w-full after:scale-x-0 after:hover:scale-100 after:transition after:duration-300 after:origin-right relative ">Blog</li>
        <li className=" h-[24px] font-inter text-[20px] font-[500] hover:text-customPink w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-customPink text-black  after:w-full after:scale-x-0 after:hover:scale-100 after:transition after:duration-300 after:origin-right relative">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
