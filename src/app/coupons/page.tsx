"use client";
import OtherCoupon from "@/components/coupon/OtherCoupon";
import PrepaidCardCoupon from "@/components/coupon/PrepaidCardCoupon";
import CustomTabs from "@/components/ui/CustomTabs";
import { CouponType, getMemberCoupons } from "@/lib/api/member";
import { useQuery } from "@tanstack/react-query";

export enum CouponStatus {
  Unused = 1,
  Used = 2,
}

export default function CouponPage() {
  const { data: couponData } = useQuery({
    queryKey: ["memberCoupons", 1, CouponType.預付卡優惠券],
    queryFn: () => getMemberCoupons(1, CouponType.預付卡優惠券),
    staleTime: 1000 * 60 * 3,
  });
  const { data: otherCouponData } = useQuery({
    queryKey: ["memberOtherCoupons", 1, CouponType.其他優惠券],
    queryFn: () => getMemberCoupons(1, CouponType.其他優惠券),
    staleTime: 1000 * 60 * 3,
  });

  const couponCount = couponData?.result.total_unused
    ? couponData?.result.total_unused
    : 0;
  const otherCouponCount = otherCouponData?.result.total_unused
    ? otherCouponData?.result.total_unused
    : 0;

  return (
    <div className="w-full flex-col flex items-center justify-center">
      <CustomTabs
        isFullWidth
        tabs={[
          {
            label: "預付卡優惠券" + `(${couponCount})`,
            value: "預付卡優惠券",
            content: <PrepaidCardCoupon />,
          },
          {
            label: "其他優惠券" + `(${otherCouponCount})`,
            value: "其他優惠券",
            content: <OtherCoupon />,
          },
        ]}
        defaultValue={"預付卡優惠券"}
      />
    </div>
  );
}
