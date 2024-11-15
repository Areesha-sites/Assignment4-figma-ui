import { FeaturedWorkProps } from "../../../types/componentsTypes";
import Image from "next/image";
const FeaturedWorksBox = ({ href, property }: FeaturedWorkProps) => {
  return (
    <>
      <div>
        <div className={`relative top-${property}px`}>
          <Image
            src={href}
            alt="Designing Dashboard"
            width={246}
            height={180}
            className="w-[246px] xxl:h-[180px] h-[188px] rounded-md"
          />
        </div>
        <div className="h-[100px] relative top-[-210px] left-[256px] ">
          <div className="w-[623.46px] h-[272.1px] absolute top-[20px] left-[20px] ">
            <h2 className="w-[305px] h-[44px] font-heebo text-[30px] font-[700]">
              Designing Dashboards
            </h2>
            <div className="w-[68px] h-[24px] absolute top-[56.1px] left-[1.46px] rounded-[50px] bg-customPink">
              <p className=" text-white flex justify-center items-center font-heebo xxl:text-[18px] font-[700] pt-[1px]">
                2020
              </p>
            </div>
            <h5 className="w-[97px] h-[29px] absolute top-[52.1px] left-[92.46px] font-heebo text-[20px] font-[400] opacity-65 ">
              Dashboard
            </h5>
            <p className="w-[622px] h-[170px] absolute top-[102.1px] left-[1.46px] font-heebo text-[18px] font-[300]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedWorksBox;
