import FeaturedWorksBox from "./FeaturedWorksBox";
const FeaturedWorks = () => {
  return (
    <div className="w-[919px] h-[934.2px] absolute xxl:left-[237px] left-[133px] xxl:top-[1246px] top-[1380px] xl:left-[242px] xl:top-[1246px] overflow-hidden">
      <p className="w-[153px] h-[32px] font-heebo text-[22px] font-[500] mb-9 xl:text-[22px]">
        Featured works
      </p>
      <div>
        <div>
          <FeaturedWorksBox property={1310} href="/image1.svg" />
        </div>
        <div>
          <FeaturedWorksBox property={1601} href="/image2.svg" />
        </div>
        <div>
          <FeaturedWorksBox property={1892} href="/image3.svg" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorks;
