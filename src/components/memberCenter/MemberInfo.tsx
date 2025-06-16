"use client";

import Image from "next/image";
import { useState } from "react";

export default function MemberInfo() {
  const [agreeSMSMsg, setAgreeSMSMsg] = useState(false);
  const [agreeNewsletter, setAgreeNewsletter] = useState(false);
  const [agreeMemberTerm, setAgreeMemberTerm] = useState(false);

  return (
    <div className="p-[15px] flex flex-col gap-[15px]">
      <div className="text-[20px] font-bold text-[#4D4D4D] mb-[20px]">
        會員中心
      </div>
      <div>
        <div className="text-[16px] mb-[4px]">E-mail</div>
        <div className="text-[16px] mb-[4px] text-[#00BCD3]">
          lisa_li@gmail.com
        </div>
      </div>
      <div>
        <div className="text-[16px] mb-[4px]">生日</div>
        <div className="text-[16px] mb-[4px] text-[#00BCD3]">1990/12/12</div>
      </div>
      <div>
        <div className="text-[16px] mb-[4px]">暱稱</div>
        <div>
          <Input value={"emily"} onChange={(e) => {}} />
        </div>
      </div>
      <div>
        <div className="text-[16px] mb-[4px]">手機</div>
        <div>
          <Input value={"emily"} onChange={(e) => {}} />
        </div>
      </div>
      <div>
        <div className="text-[16px] mb-[4px]">姓名</div>
        <div>
          <Input value={"emily"} onChange={(e) => {}} />
        </div>
      </div>
      <div className="flex flex-col gap-[8px] mt-[25px]">
        <div className="flex gap-[8px]">
          <Image
            src={
              "/images/memberCenter/" +
              (agreeSMSMsg ? "checked.png" : "unchecked.png")
            }
            width={20}
            height={20}
            alt={""}
            onClick={() => {
              setAgreeSMSMsg((agree) => !agree);
            }}
          />
          <span>我願意接收活動簡訊</span>
        </div>
        <div className="flex gap-[8px]">
          <Image
            src={
              "/images/memberCenter/" +
              (agreeNewsletter ? "checked.png" : "unchecked.png")
            }
            width={20}
            height={20}
            alt={""}
            onClick={() => {
              setAgreeNewsletter((agree) => !agree);
            }}
          />
          <span>我願意接收電子報和活動資訊</span>
        </div>
        <div className="flex gap-[8px]">
          <Image
            src={
              "/images/memberCenter/" +
              (agreeMemberTerm ? "checked.png" : "unchecked.png")
            }
            width={20}
            height={20}
            alt={""}
            onClick={() => {
              setAgreeMemberTerm((agree) => !agree);
            }}
          />
          <span>我已確認閱讀並同意會員服務條款</span>
        </div>
      </div>
      <div className="mt-[10px] mb-[35px] bg-[#00CCE4] rounded-[8px] text-[white] py-[12px] text-center">
        儲存
      </div>
    </div>
  );
}

const Input = ({ value, onChange }) => {
  return (
    <input
      className="w-[calc(100vw-30px)] border-[1px] border-[#D3D3D3] rounded-[4px] px-[16px] py-[12px]"
      value={value}
      onChange={onChange}
    />
  );
};
