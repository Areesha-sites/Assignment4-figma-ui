import React from 'react'
const RecentPostCard = () => {
  return (
    <>
    <div className="lg:grid lg:grid-cols-2 xs:grid xs:grid-cols-1 md:grid md:grid-cols-2 ">
            <div className="lg:w-[440px] lg:h-[340px] bg-white hover:border-2 hover:border-pink-700 transition-all duration-300 ease-in-out rounded-[3px] cursor-pointer xs:w-[250px] xs:h-[250px]">
              <h1 className="font-heebo lg:text-[26px] xs:text-[15 px] xs:leading-[25px] font-bold text-black lg:leading-[38px] space-x-[2%] relative top-[38px] xs:relative xs:left-[20px] xs:top-[25px] lg:relative lg:left-[35px]">Making a design system from <br />scratch</h1>
              <div className="lg:flex lg:justify-center lg:items-center lg:relative lg:top-[50px] lg:left-[20px] opacity-75 text-black space-x-7 xs:space-x-4  xs:relative xs:top-[40px] xs:left-[-70px]">
              <p className="font-heebo lg:text-[15px] font-normal leading-[38px] space-x-[0.02em] lg:text-left xs:text-[12px] xs:leading-[30px] xs:text-center lg:pl-[0px]">12 Feb 2020</p>
              <p className='xs:relative xs:top-[-29px] xs:pl-[160px] lg:pl-[0px] lg:relative lg:top-[0px] lg:left-[0px]'>|</p>
              <p className="xs:text-[12px] xs:leading-[15px] xs:relative xs:top-[-54px] xs:pl-[185px]  lg:text-[15px] lg:relative lg:top-[0px] lg:left-[-180px]">Design , Pattern</p>
              </div>
              <p className="font-heebo lg:text-[16px] xs:text-[13px] font-normal lg:leading-[23.5px] text-left text-customBlue lg:relative lg:top-[75px] lg:left-[196] lg:px-[1.8rem] xs:relative xs:top-[7px] xs:leading-[16px] xs:px-[1.6rem]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            
          </div>
    </>
  )
}

export default RecentPostCard
