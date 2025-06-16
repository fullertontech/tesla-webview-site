const menuList = [
  {
    name: "訂單資料",
    link: "/orders",
  },
  {
    name: "優惠券",
    link: "/coupons",
  },
  {
    name: "會員中心",
    link: "/memberCenter",
  },
  {
    name: "商品列表",
    link: "/products",
  },
  {
    name: "最新消息",
    link: "/news",
  },
  {
    name: "客服中心",
    link: "/consumerService",
  },
];

export default function MobileMenu({
  onCloseMenu,
}: {
  onCloseMenu: () => void;
}) {
  return (
    <div className="z-[3] w-[100vw] pt-[20px] h-[100vh] gap-[24px] fixed left-0 top-0 flex flex-col bg-[white]">
      <a className="text-[16px] pl-[20px]" key={"登入"} href={"/login"}>
        登入
      </a>
      <span
        className="text-[16px] pl-[20px]"
        key={"回首頁"}
        onClick={onCloseMenu}
      >
        回首頁
      </span>
      <hr className="border-t-1 border-[#E7E7E7]" />
      {menuList.map((item) => (
        <a className="text-[16px] pl-[20px]" key={item.name} href={item.link}>
          {item.name}
        </a>
      ))}
    </div>
  );
}
