"use client";
// import { useState } from "react";
import Image from "next/image";

export default function BannerSliderSection() {
  // const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [imageList, setImageList] = useState([
  //   {
  //     imageUrl: "/images/home/testbanner.png",
  //   },
  //   {
  //     imageUrl: "/images/home/testbanner.png",
  //   },
  // ]);

  return (
    <div className="w-full flex items-center justify-center py-[10px]">
      <div className="flex justify-center">
        <Image
          src={"/images/home/testbanner.png"}
          alt={"Banner Image"}
          width={288}
          height={200}
          className="rounded-[20px]"
        />
      </div>
    </div>
  );
}
