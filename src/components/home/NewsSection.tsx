import Image from "next/image";

export default function NewsSection() {
  return (
    <div className="w-full px-[15px] flex items-center justify-center py-[10px]">
      <div className="bg-[#F9FFEC] w-[100%] h-[32px] rounded-[4px] flex items-center justify-between pl-[8px] pr-[11px]">
        <div className="flex items-center">
          <div className="px-[5px] inline-block bg-[#A7EB18] py-[2px] text-[12px] rounded-[4px] text-[white] font-[500] mr-[7px]">
            公告
          </div>
          <div className=" text-[12px] text-[#1A1A1A]">
            購買或結帳時遇到很多問題嗎？
          </div>
        </div>
        <Image
          src="/images/home/right-arrow.png"
          alt="arrow-right"
          width={8}
          height={4}
          className="ml-[5px] cursor-pointer"
        />
      </div>
    </div>
  );
}
