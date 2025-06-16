import Menu from "@/components/memberCenter/Menu";

export default function MemberCenterPage() {
  return (
    <div className="p-[16px] flex flex-col">
      <div className="text-[20px] font-bold text-[#4D4D4D] mb-[15px]">會員中心</div>
      <Menu />
    </div>
  );
}
