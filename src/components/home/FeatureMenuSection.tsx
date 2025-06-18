"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function chunkArray(arr, chunkSize) {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

export default function FeatureMenu() {
  return (
    <div className="w-full flex flex-col items-start justify-start px-[15px] pb-[15px]">
      <div className="flex items-center pb-[16px]">
        <Image
          src="/images/home/title-icon.svg"
          alt="Function Menu Icon"
          width={24}
          height={24}
          className="inline-block mr-2"
        />
        <h1 className="text-xl font-bold text-[20px] whitespace-nowrap text-[#4D4D4D]">
          儲值自由選
        </h1>
      </div>
      <Menu />
    </div>
  );
}

function Menu() {
  const filePath = "/images/home/featureMenuSection/";
  const menu_items = [
    {
      src: filePath + "計時型.png",
      link: "",
      text: "計時型",
    },
    {
      src: filePath + "計日型.png",
      link: "",
      text: "計日型",
    },
    {
      src: filePath + "計量型.png",
      link: "",
      text: "計量型",
    },
    {
      src: filePath + "通話金.png",
      link: "",
      text: "通話金",
    },
    {
      src: filePath + "送蛋塔.png",
      link: "",
      text: "送蛋塔",
    },
    {
      src: filePath + "Student.png",
      link: "",
      text: "Student",
    },
    {
      src: filePath + "5G專區.png",
      link: "",
      text: "5G專區",
    },
    {
      src: filePath + "熱門商品.png",
      link: "",
      text: "熱門商品",
    },
    {
      src: filePath + "送COCO.png",
      link: "",
      text: "送COCO",
    },
    {
      src: filePath + "加贈通話金.png",
      link: "",
      text: "加贈通話金",
    },
    {
      src: filePath + "送蛋塔.png",
      link: "",
      text: "其他",
    },
    {
      src: filePath + "加贈通話金.png",
      link: "",
      text: "其他",
    },
  ];

  //todo:
  function generateMenuPages(menuItems) {
    const divideMenuItemsByTen = chunkArray(menuItems, 10);
    console.log(divideMenuItemsByTen);
    return (
      <>
        {divideMenuItemsByTen.map((itemsList, idx) => {
          return (
            <SwiperSlide className="pb-[40px]" key={idx}>
              <div className="grid grid-cols-5 gap-x-[10px] gap-y-[20px] w-full">
                {itemsList.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-end"
                  >
                    <Image
                      src={item.src}
                      alt={item.text}
                      width={40}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-[10px] text-[#4D4D4D]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          );
        })}
      </>
    );
  }

  return (
    <div
      className="featureMenu rounded-[16px] border-[1px] border-[#E1E1E1] box-border
          w-full flex items-center justify-center pl-[20px] pt-[24px] pb-[6px] pr-[20px]"
    >
      <Swiper
        pagination={true}
        className="mySwiper w-[calc(100vw-30px)] flex justify-center pb-[45px]"
        loop
        modules={[Pagination]}
        style={{
          "--swiper-pagination-color": "#A7EB18", // 啟用分頁點的顏色
          "--swiper-pagination-bullet-inactive-color": "#999999", // 未啟用分頁點的顏色
          "--swiper-pagination-bullet-size": "4px", // 分頁點大小
        }}
      >
        {generateMenuPages(menu_items)}
        {/* <SwiperSlide className="pb-[40px]">
          <div className="grid grid-cols-5 gap-x-[10px] gap-y-[20px] w-full">
            {menu_one_items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-end"
              >
                <Image
                  src={item.src}
                  alt={item.text}
                  width={40}
                  height={40}
                  className="mb-2"
                />
                <span className="text-[10px] text-[#4D4D4D]">{item.text}</span>
              </div>
            ))}
          </div>
        </SwiperSlide> */}
      </Swiper>
      {/* </div> */}
    </div>
  );
}
