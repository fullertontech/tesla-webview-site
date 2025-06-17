import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="py-[45px] px-[16px] flex flex-col">
      <div className="text-[16px] mb-[15px]">
        請加入如意卡 LINE
        官方帳號，使用時若有任何問題皆可於線上留言，專人將於服務時間儘快回覆您。
      </div>
      <div>
        <span className="text-[14px] text-[#00BCD3]">LINE ID：</span>{" "}
        <span className="text-[14px]">@idealcard</span>
      </div>
      <div className="text-[14px] text-[#00BCD3] my-[10px]">客服時間(台灣時間)：</div>
      <div className="text-[14px]">週一～週六 09:00-21:00</div>
      <div className="text-[14px]">週日 09:00-18:00</div>
      <Image
        className="mt-[24px] mx-[auto]"
        src="/images/faq/line_qrcode.png"
        width={179}
        height={179}
        alt=""
      />
    </div>
  );
}
