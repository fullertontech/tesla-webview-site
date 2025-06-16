"use client";
import { CouponType, getMemberCoupons } from "@/lib/api/member";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import CouponItem from "./CouponItem";
import { CouponStatus } from "@/app/coupons/page";

export default function OtherCoupon() {
  const [tab, setTab] = useState(1);
  // const [page, setPage] = useState(1);
  // const [couponData, setCouponData] = useState<CouponResultData | undefined>();
  const page = 1;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getMemberCoupons", page, CouponType.其他優惠券],
    queryFn: () => getMemberCoupons(page, CouponType.其他優惠券),
    staleTime: 1000 * 60 * 3, // 可選 3 分鐘內不重新 fetch
    enabled: !!page, // 可選：避免 page/type 尚未定義時觸發
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>錯誤</div>;

  const showCoupons =
    data?.result?.coupon_data?.filter((data) => data.status == tab) || [];

  return (
    <div className="p-[15px]">
      <div className="flex mb-[16px] items-center">
        <div
          className={tab == CouponStatus.Unused ? "font-bold" : ""}
          onClick={() => setTab(1)}
        >
          可使用
        </div>
        <div className="border-r border-[#DFDFDF] mx-[16px] h-[10px]" />
        <div
          className={tab == CouponStatus.Used ? "font-bold" : ""}
          onClick={() => setTab(2)}
        >
          已使用/過期
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        {showCoupons.map((data) => (
          <CouponItem {...data} key={data.coupon_code} />
        ))}
        {showCoupons.length === 0 && (
          <div className="w-full h-[300px] flex justify-center items-center">
            沒有優惠券資料
          </div>
        )}
      </div>
    </div>
  );
}
