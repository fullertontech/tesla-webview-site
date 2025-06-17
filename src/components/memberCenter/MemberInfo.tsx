"use client";

import { editMemberInfo, getMemberInfo } from "@/lib/api/member";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MemberInfo() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["memberInfo"],
    queryFn: () => getMemberInfo(),
    staleTime: 1000 * 60 * 20,
  });
  const mutation = useMutation({
    mutationFn: editMemberInfo,
    onSuccess: (res) => {
      console.log("更新成功", res.result);
      refetch();
    },
    onError: (err) => {
      console.error("更新失敗", err);
    },
  });

  const [agreeSMSMsg, setAgreeSMSMsg] = useState(false);
  const [agreeNewsletter, setAgreeNewsletter] = useState(false);
  const [agreeMemberTerm, setAgreeMemberTerm] = useState(false);
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({
    nickname: "",
    phone: "",
    name: "",
  });

  useEffect(() => {
    if (data?.result) {
      setAgreeSMSMsg(data.result.mobile_notify === 1);
      setAgreeNewsletter(data.result.email_notify === 1);
      setNickname(data.result.nick_name || "");
      setPhone(data.result.contact || "");
      setName(data.result.nick_name || "");
    }
  }, [data]);

  const validateForm = () => {
    const newErrors = {
      nickname: "",
      phone: "",
      name: "",
    };

    let isValid = true;

    if (!nickname.trim()) {
      newErrors.nickname = "請輸入暱稱";
      isValid = false;
    }

    if (!phone.trim()) {
      newErrors.phone = "請輸入手機號碼";
      isValid = false;
    }

    // if (!name.trim()) {
    //   newErrors.name = "請輸入姓名";
    //   isValid = false;
    // }

    if (!agreeMemberTerm) {
      alert("請同意會員服務條款");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      alert("請填寫完整資料");
      return;
    }

    // TODO: 處理表單提交
    console.log("表單提交", { nickname, phone, name });

    const updateData = {
      birthday: data!.result.birthday!,
      contact: phone,
      email: data!.result.email!,
      email_notify: agreeNewsletter ? 1 : 0,
      mobile_notify: agreeSMSMsg ? 1 : 0,
      nickname: nickname,
      area: null,
      city: null,
      address: null,
      name: "",
    };

    mutation.mutate(updateData);
  };

  if (isLoading) return "讀取中...";

  return (
    <div className="p-[15px] flex flex-col gap-[15px]">
      <div className="text-[20px] font-bold text-[#4D4D4D] mb-[20px]">
        會員中心
      </div>
      <div>
        <div className="text-[16px] mb-[4px]">E-mail</div>
        <div className="text-[16px] mb-[4px] text-[#00BCD3]">
          {data?.result.email}
        </div>
      </div>
      <div>
        <div className="text-[16px] mb-[4px]">生日</div>
        <div className="text-[16px] mb-[4px] text-[#00BCD3]">
          {data?.result.birthday}
        </div>
      </div>
      <div>
        <div className="text-[16px] mb-[4px]">暱稱</div>
        <div>
          <Input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div className="text-[16px] mb-[4px]">手機</div>
        <div>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>
      <div>
        <div className="text-[16px] mb-[4px]">姓名</div>
        <div>
          <Input
            value={""}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[8px] mt-[25px]">
        <div
          className="flex gap-[8px]"
          onClick={() => {
            setAgreeSMSMsg((agree) => !agree);
          }}
        >
          <Image
            src={
              "/images/memberCenter/" +
              (agreeSMSMsg ? "checked.png" : "unchecked.png")
            }
            width={20}
            height={20}
            alt={""}
          />
          <span>我願意接收活動簡訊</span>
        </div>
        <div
          className="flex gap-[8px]"
          onClick={() => {
            setAgreeNewsletter((agree) => !agree);
          }}
        >
          <Image
            src={
              "/images/memberCenter/" +
              (agreeNewsletter ? "checked.png" : "unchecked.png")
            }
            width={20}
            height={20}
            alt={""}
          />
          <span>我願意接收電子報和活動資訊</span>
        </div>
        <div
          className="flex gap-[8px]"
          onClick={() => {
            setAgreeMemberTerm((agree) => !agree);
          }}
        >
          <Image
            src={
              "/images/memberCenter/" +
              (agreeMemberTerm ? "checked.png" : "unchecked.png")
            }
            width={20}
            height={20}
            alt={""}
          />
          <span>我已確認閱讀並同意會員服務條款</span>
        </div>
      </div>
      <div
        className={
          "mt-[10px] mb-[35px] bg-[#00CCE4] rounded-[8px] text-[white] py-[12px] text-center " +
          (isLoading || mutation.isPending
            ? "pointer-events-none opacity-[0.5]"
            : "")
        }
        onClick={handleSubmit}
      >
        儲存
      </div>
    </div>
  );
}

const Input = ({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) => {
  return (
    <div>
      <input
        className={`w-[calc(100vw-30px)] border-[1px] ${
          error ? "border-red-500" : "border-[#D3D3D3]"
        } rounded-[4px] px-[16px] py-[12px]`}
        value={value}
        onChange={onChange}
      />
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};
