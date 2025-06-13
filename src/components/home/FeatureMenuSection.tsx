import Image from "next/image";

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
  const menuItems = [
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
  ];

  return (
    <div
      className="rounded-[16px] border-[1px] border-[#E1E1E1] box-border
          w-full flex items-center justify-center pl-[20px] pt-[24px] pb-[36px] pr-[20px]"
    >
      <div className="grid grid-cols-5 gap-x-[10px] gap-y-[20px] w-full">
        {menuItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-end">
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
    </div>
  );
}
