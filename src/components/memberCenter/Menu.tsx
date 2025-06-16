import Image from "next/image";
import Link from "next/link";

const memberMenuList = [
  {
    name: "修改會員資料",
    link: "/memberCenter/memberInfo",
    imgSrc: "/images/memberCenter/會員資料.png",
    w: 13,
    h: 12,
  },
  {
    name: "修改密碼",
    link: "/memberCenter/chagePassword",
    imgSrc: "/images/memberCenter/修改密碼.png",
    w: 16,
    h: 16,
  },
  {
    name: "常用門號",
    link: "/favoriteNumber",
    imgSrc: "/images/memberCenter/常用門號.png",
    w: 12,
    h: 16,
  },
  {
    name: "定期定額",
    link: "/autoTopUp",
    imgSrc: "/images/memberCenter/定期定額.png",
    w: 17,
    h: 17,
  },
];

export default function Menu() {
  return (
    <div className="bg-[#F9F9F9] p-[16px] pb-0 rounded-[24px] flex flex-col gap-[15px] justify-center w-[calc(100vw-30px)]">
      {memberMenuList.map((menuItem, idx) => {
        return (
          <Link
            href={menuItem.link}
            key={menuItem.name}
            className={
              "text-[14px] pb-[15px] flex items-center gap-[15px] " +
              (idx !== memberMenuList.length - 1
                ? "border-b-[1px] border-[#E8E8E8]"
                : "")
            }
          >
            <div className="w-[20px]">
              <Image
                src={menuItem.imgSrc}
                width={menuItem.w}
                height={menuItem.h}
                alt={menuItem.name}
              />
            </div>
            {menuItem.name}
          </Link>
        );
      })}
    </div>
  );
}
