"use client";
import OtherCoupon from "@/components/coupon/OtherCoupon";
import PrepaidCardCoupon from "@/components/coupon/PrepaidCardCoupon";
import CustomTabs from "@/components/ui/CustomTabs";

export default function CouponPage() {
  return (
    <div className="w-full flex-col flex items-center justify-center">
      <CustomTabs
        isFullWidth
        tabs={[
          {
            label: "預付卡優惠券",
            value: "預付卡優惠券",
            content: <PrepaidCardCoupon />,
          },
          {
            label: "其他優惠券",
            value: "其他優惠券",
            content: <OtherCoupon />,
          },
        ]}
        defaultValue={"預付卡優惠券"}
      />
    </div>
  );
}
