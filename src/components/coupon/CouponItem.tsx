import { CouponData } from "@/lib/api/member";
import { useState } from "react";

export default function CouponItem(props: CouponData) {
  const [isCopied, setIsCopied] = useState(false);
  const isUsed = props.status == 2;

  return (
    <div
      className={`
        ${isUsed ? "bg-[#F5F5F5]" : " border-[1px] border-[#D3D3D3] "}
        flex max-w-[calc(100%-30px]  rounded-[8px] p-[16px] pr-0 box-border`}
    >
      <div
        className={`
            ${isUsed ? "" : " border-r border-[#E7E7E7] "}
            w-[calc(100%-90px)] 
        `}
      >
        <div
          className={
            "text-[13px] font-bold mb-[8px] " +
            (isUsed ? " text-[#B8B8B8]" : "")
          }
        >
          \ 會員獨享 / 全站滿${props.use_condition}折 {props.discount_value}
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="text-[#909090] text-[12px]">
            優惠序號：{props.coupon_code}
          </div>
          <div className="text-[#909090] text-[12px]">
            優惠名稱：{props.coupon_name}
          </div>
          <div className="text-[#909090] text-[12px]">
            有效期限：{props.expire_date}
          </div>
        </div>
      </div>
      <div
        className={
          "flex items-center justify-center text-center flex-[1] " +
          (isUsed ? "hidden" : "")
        }
        onClick={async () => {
          await navigator.clipboard.writeText(props.coupon_code);
          setIsCopied(true);
        }}
      >
        {isCopied ? (
          <div className="text-[#00BCD3]">
            複製
            <br />
            成功
          </div>
        ) : (
          "複製"
        )}
      </div>
    </div>
  );
}
