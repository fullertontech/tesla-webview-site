"use client";
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between bg-white py-[10px] px-[7px] ">
      <Image
        src="/images/navbar/cht_logo.png"
        width="102"
        height="39"
        alt="中華電信"
      />
      <div className="flex items-center gap-[14px]">
        <Image
          src="/images/navbar/ticket.png"
          width="36"
          height="36"
          alt="__"
        />
        <Image
          src="/images/navbar/hamburger.png"
          width="32"
          height="32"
          alt="__"
          onClick={() => {
            setShowMenu((isShow) => !isShow);
          }}
        />
        {showMenu && <MobileMenu onCloseMenu={() => setShowMenu(false)} />}
      </div>
    </div>
  );
}
