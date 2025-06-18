/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function ImageCarousel({
  imageList,
}: {
  imageList: Array<{
    src: string;
    link: string;
    width: number;
    height: number;
  }>;
}) {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [btnWidth, setBtnWidth] = useState(0);

  useEffect(() => {
    if (imageList.length == 0) return;
    setBtnWidth((window.innerWidth - 30) / imageList.length);
  }, [imageList]);

  const goToSlide = (index: number) => {
    swiperRef.current?.slideToLoop(index, 1000, false);
  };

  const getDotClass = (idx) => {
    return (
      "h-[2px] " + (idx === activeIndex ? " bg-[#98E000]" : " bg-gray-300")
    );
  };

  return (
    <div className="flex flex-col">
      <Swiper
        modules={[Autoplay]}
        pagination={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper w-[calc(100vw-30px)] flex justify-center"
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >
        {imageList.map((img, idx) => (
          <SwiperSlide key={idx} className="max-h-[288px]">
            <Image
              className="w-[calc(100vw-30px)] h-[auto]"
              src={img.src}
              width={img.width}
              height={img.height}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 點點點控制區 */}
      <div className="flex justify-center mt-[8px] space-x-2">
        {imageList.map((_, idx) => (
          <div
            style={{
              width: btnWidth - 5 + "px",
            }}
            key={idx}
            onClick={() => goToSlide(idx)}
            className={getDotClass(idx)}
          />
        ))}
      </div>
    </div>
  );
}
