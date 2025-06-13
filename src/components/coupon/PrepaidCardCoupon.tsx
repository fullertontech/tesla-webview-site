"use client";
import { getMemberCoupons } from "@/lib/api/member";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import CouponItem from "./CouponItem";

export default function PrepaidCardCoupon() {
  const [tab, setTab] = useState(1);

  // const [page, setPage] = useState(1);
  // const [couponData, setCouponData] = useState<CouponResultData | undefined>();
  const page = 1;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["memberCoupons", page, 1],
    queryFn: () => getMemberCoupons(page, 1),
    staleTime: 1000 * 60 * 5, // 可選：5 分鐘內不重新 fetch
    enabled: !!page, // 可選：避免 page/type 尚未定義時觸發
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>錯誤</div>;

  return (
    <div className="p-[15px]">
      <div className="flex mb-[16px] items-center">
        <div onClick={() => setTab(1)}>可使用</div>
        <div className="border-r border-[#DFDFDF] mx-[16px] h-[10px]" />
        <div onClick={() => setTab(2)}>已使用/過期</div>
      </div>
      <div className="flex flex-col gap-[8px]">
        {data?.result?.coupon_data
          ?.filter((data) => data.status == tab)
          .map((data) => (
            <CouponItem {...data} key={data.coupon_code} />
          ))}
      </div>
    </div>
  );
}
